'use strict';

const _ = require('lodash');

export function linkConfig(formlyConfig, $log) {
  'ngInject';

  formlyConfig.setType({
    name: 'link',
    //wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    template: require('./link.pug'),
    controller: /* @ngInject */ function ($scope) {
      const to = $scope.to;
      const opts = $scope.options;
    }
  });
}
