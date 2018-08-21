'use strict';

export function inputGroupConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'input-group',
    template: require('./input-group.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function ($scope) {
      const to = $scope.to;
      const opts = $scope.options;
    }
  });
}
