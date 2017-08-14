'use strict';
const _ = require('lodash');

export function groupedAgeInputsConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'grouped-age-inputs',
    template: require('./grouped-age-inputs.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function($scope) {

      $scope.opts = $scope.to.options
      // Initial set
      if (!$scope.model[$scope.options.key]) {
        $scope.model[$scope.options.key] = $scope.opts
          .reduce(function(final, current) {
            final[current.id] = current.default ? [{}] : []
            return final;
          }, {})
      }


      $scope.add = function(groupId) {
        $scope.model[$scope.options.key][groupId].push({ dependents: [] })

        if ($scope.to.onChange) {
          $scope.to.onChange();
        }
      }

      $scope.remove = function (groupId) {
        delete $scope.model[$scope.options.key][groupId];

        if ($scope.to.onChange) {
          $scope.to.onChange();
        }
      }
    }
  });

}
