'use strict';

export function stackButtonsConfig(formlyConfig) {
  'ngInject';

  formlyConfig.setType({
    name: 'stack-buttons',
    template: require('./stack-buttons.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function($scope) {
      const to = $scope.to;
      const opts = $scope.options;

    }
  });

}
