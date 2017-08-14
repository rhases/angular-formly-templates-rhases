'use strict';

var _ = require('lodash')

export function ageInputsConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'age-inputs',
    template: '<code>{{ model[options.key] }}</code><age-inputs model="model[options.key]" ages-options-to-include="opts" on-change="to.onChange()"></age-inputs>',
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function($scope) {

      $scope.opts = $scope.to.options

      // Initial set
      if (!$scope.model[$scope.options.key]) {
        $scope.model[$scope.options.key] = [];
      }

    }
  });

}
