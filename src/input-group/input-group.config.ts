'use strict';

export function inputGroupConfig(formlyConfig) {
  'ngInject';

  formlyConfig.setType({
    name: 'input-group',
    template: require('./input-group.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function ($scope) {
      const to = $scope.to;
      const opts = $scope.options;
    }
  });
}
