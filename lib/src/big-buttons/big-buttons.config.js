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
            $scope.set = function (value) {
                $scope.model[opts.key] = value;
                if ($scope.to.onChange) {
                    $scope.to.onChange();
                }
            };
        }
    });
}
exports.bigButtonsConfig = bigButtonsConfig;
//# sourceMappingURL=big-buttons.config.js.map