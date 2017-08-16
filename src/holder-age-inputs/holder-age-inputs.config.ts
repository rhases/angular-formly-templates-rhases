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
      if (!$scope.model[$scope.options.key]) {
        $scope.model[$scope.options.key] = $scope.opts.min ? _.fill(Array($scope.opts.min), undefined).map(() => { return {} }) : []
      }

      $scope.add = function() {
        $scope.model[$scope.options.key].push({ dependents: [] })

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
