'use strict';

export function bigButtonsConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'big-buttons',
    template: require('./big-buttons.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function($scope) {
      const to = $scope.to;
      const opts = $scope.options;

    }
  });

}
