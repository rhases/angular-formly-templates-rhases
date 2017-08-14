const angular = require('angular');
const _ = require('lodash');

export default function() {
  return {
    template: require('./age-inputs.directive.pug'),
    scope: {
      model: '=',
      agesOptionsToInclude: '=',
      onChange: '&'
    },
    controller: function($scope) {
      // do something to do on init

      // Initial set
      if (!$scope.model || !$scope.model.length) {
        $scope.model = _.filter($scope.agesOptionsToInclude, { default: true })
          .map(function(_type) {
            return { type: _type.id, value: undefined };
          });
      }


      // load all labels
      const config = $scope.agesOptionsToInclude.reduce(
        function(final, current) {
          final[current.id] = current;
          return final;
        }, {});
      $scope.config = config;

      $scope.remainingTypes = $scope.agesOptionsToInclude;

      calculateRemainingTimes();

      $scope.add = function(typeId) {
        $scope.model.push({ type: typeId, value: undefined })
        calculateRemainingTimes();

        if ($scope.onChange) {
          $scope.onChange();
        }
      }

      $scope.remove = function(index) {
        $scope.model.splice(index, 1)
        calculateRemainingTimes();

        if ($scope.onChange) {
          $scope.onChange();
        }
      }

      function calculateRemainingTimes() {
        var times = _.countBy($scope.model, 'type');

        $scope.remainingTypes = $scope.agesOptionsToInclude.filter(function(type) {
          if (!type.max) return true;
          return type.max > (times[type.id] || 0);
        })
      }
    },
  }
}
