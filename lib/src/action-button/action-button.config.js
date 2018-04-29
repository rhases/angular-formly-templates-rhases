'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('lodash');
function actionButtonConfig(formlyConfig, $log) {
    'ngInject';
    formlyConfig.setType({
        name: 'action-button',
        template: require('./action-button.pug'),
        controller: function ($scope) {
            var to = $scope.to;
            var opts = $scope.options;
            $scope.action = function () {
                $scope.model[opts.key] = opts.value;
                next($scope);
            };
        }
    });
    function next($scope) {
        try {
            $scope.$parent.$parent.$parent.$parent.next();
        }
        catch (err) {
            $log.error(err);
        }
    }
}
exports.actionButtonConfig = actionButtonConfig;
//# sourceMappingURL=action-button.config.js.map