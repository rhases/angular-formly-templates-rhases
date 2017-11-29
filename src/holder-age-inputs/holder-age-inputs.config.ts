'use strict';
const _ = require('lodash');

export function holderAgeInputsConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'holder-age-inputs',
    template: require('./holder-age-inputs.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function($scope) {
      $scope.opts = $scope.to.options
      // Initial set
      $scope.opts.min = $scope.opts.min || 0;
      $scope.opts.max = $scope.opts.max || 1;
      if (!$scope.model[$scope.options.key]) {
        $scope.model[$scope.options.key] = $scope.opts.min ? _.fill(Array($scope.opts.min), undefined).map(() => { return {type: $scope.opts.id || 'holder'} }) : []
      }

      $scope.add = function() {
        $scope.model[$scope.options.key].push({type: $scope.opts.id, dependents: [] })

        if ($scope.to.onChange) {
          $scope.to.onChange();
        }
      }

      $scope.remove = function (index) {
        $scope.model[$scope.options.key].splice(index, 1)

        if ($scope.to.onChange) {
          $scope.to.onChange();
        }
      }
    }
  });

}
