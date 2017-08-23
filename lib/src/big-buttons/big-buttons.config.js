'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function bigButtonsConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'big-buttons',
        template: require('./big-buttons.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            var to = $scope.to;
            var opts = $scope.options;
        }
    });
}
exports.bigButtonsConfig = bigButtonsConfig;
//# sourceMappingURL=big-buttons.config.js.map