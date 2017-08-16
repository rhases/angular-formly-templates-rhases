'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('lodash');
function holderAgeInputsConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'holder-age-inputs',
        template: require('./holder-age-inputs.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            $scope.opts = $scope.to.options;
            if (!$scope.model[$scope.options.key]) {
                $scope.model[$scope.options.key] = $scope.opts.min ? _.fill(Array($scope.opts.min), undefined).map(function () { return {}; }) : [];
            }
            $scope.add = function () {
                $scope.model[$scope.options.key].push({ dependents: [] });
                if ($scope.to.onChange) {
                    $scope.to.onChange();
                }
            };
            $scope.remove = function (index) {
                $scope.model[$scope.options.key].splice(index, 1);
                if ($scope.to.onChange) {
                    $scope.to.onChange();
                }
            };
        }
    });
}
exports.holderAgeInputsConfig = holderAgeInputsConfig;
//# sourceMappingURL=holder-age-inputs.config.js.map