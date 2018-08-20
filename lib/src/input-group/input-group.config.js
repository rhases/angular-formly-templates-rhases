'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function inputGroupConfig(formlyConfig) {
    'ngInject';
    formlyConfig.setType({
        name: 'input-group',
        template: require('./input-group.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            var to = $scope.to;
            var opts = $scope.options;
        }
    });
}
exports.inputGroupConfig = inputGroupConfig;
//# sourceMappingURL=input-group.config.js.map