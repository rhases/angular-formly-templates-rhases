'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('lodash');
function ageInputsConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'age-inputs',
        template: '<age-inputs model="model[options.key]" ages-options-to-include="opts" on-change="to.onChange()"></age-inputs>',
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            $scope.opts = $scope.to.options;
            if (!$scope.model[$scope.options.key]) {
                $scope.model[$scope.options.key] = [];
            }
        }
    });
}
exports.ageInputsConfig = ageInputsConfig;
//# sourceMappingURL=age-inputs.config.js.map