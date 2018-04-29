'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function radioWithOtherConfig(formlyConfig) {
    'ngInject';
    formlyConfig.setType({
        name: 'radio-with-other',
        template: require('./radio-with-other.pug'),
        controller: function ($scope) {
            var to = $scope.to;
            var opts = $scope.options;
            $scope.toogleOnOther = function () {
                $scope.model[opts.key] = '';
            };
            $scope.toogleOffOther = function () {
                $scope.isOtherEnabled = false;
            };
        }
    });
}
exports.radioWithOtherConfig = radioWithOtherConfig;
//# sourceMappingURL=radio-with-other.config.js.map