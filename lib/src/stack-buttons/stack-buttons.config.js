'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function stackButtonsConfig(formlyConfig) {
    'ngInject';
    formlyConfig.setType({
        name: 'stack-buttons',
        template: require('./stack-buttons.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            var to = $scope.to;
            var opts = $scope.options;
        }
    });
}
exports.stackButtonsConfig = stackButtonsConfig;
//# sourceMappingURL=stack-buttons.config.js.map