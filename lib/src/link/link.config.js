'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('lodash');
function linkConfig(formlyConfig, $log) {
    'ngInject';
    formlyConfig.setType({
        name: 'link',
        template: require('./link.pug'),
        controller: function ($scope) {
            var to = $scope.to;
            var opts = $scope.options;
        }
    });
}
exports.linkConfig = linkConfig;
//# sourceMappingURL=link.config.js.map