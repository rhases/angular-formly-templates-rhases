'use strict';

export function radioWithOtherConfig(formlyConfig) {
  'ngInject';

  formlyConfig.setType({
    name: 'radio-with-other',
    template: require('./radio-with-other.pug'),
    controller: /* @ngInject */ function ($scope) {
      const to = $scope.to;
      const opts = $scope.options;

      $scope.toogleOnOther = function(){
        $scope.model[opts.key] = '';
      };
      $scope.toogleOffOther = function () {
        $scope.isOtherEnabled = false;
      };
    }
  });
}
