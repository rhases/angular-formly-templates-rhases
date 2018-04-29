'use strict';

const _ = require('lodash');

export function actionButtonConfig(formlyConfig, $log) {
  'ngInject';

  formlyConfig.setType({
    name: 'action-button',
    //wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    template: require('./action-button.pug'),
    controller: /* @ngInject */ function ($scope) {
      const to = $scope.to;
      const opts = $scope.options;

      $scope.action = function() {
        $scope.model[opts.key] = opts.value;
        next($scope);
      };
    }
  });

  function next($scope) {
    try {
      $scope.$parent.$parent.$parent.$parent.next(); //very ugly. How to do it better?
    }catch (err) {
      $log.error(err);
    }
  }

}
