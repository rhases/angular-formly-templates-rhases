'use strict';

var _ = require('lodash')

export function ageInputsConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'age-inputs',
    // template: require('./age-inputs.pug'),
    template: '<age-inputs></age-inputs>',
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    // controller: /* @ngInject */ function($scope) {
    //   const to = $scope.to;
    //   const opts = $scope.options;
    //
    //   // Initial set
    //   if (!$scope.model[opts.key]) {
    //     $scope.model[opts.key] = _.filter(TYPES, { default: true })
    //       .map(function(_type) {
    //         return { type: _type.id, value: undefined };
    //       });
    //   }
    //
    //
    //   // load all labels
    //   const config = TYPES.reduce(
    //     function(final, current) {
    //       final[current.id] = current;
    //       return final;
    //     }, {});
    //   $scope.config = config;
    //
    //   $scope.remainingTypes = TYPES;
    //   function calculateRemainingTimes() {
    //     var times = _.countBy($scope.model[opts.key], 'type');
    //
    //     $scope.remainingTypes = TYPES.filter(function(type) {
    //       if (!type.max) return true;
    //       return type.max > (times[type.id] || 0);
    //     })
    //
    //     console.log($scope.remainingTypes)
    //   }
    //   calculateRemainingTimes();
    //
    //
    // }
  });

}
