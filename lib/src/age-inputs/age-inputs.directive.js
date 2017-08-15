"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require('angular');
var _ = require('lodash');
function ageInputsDirective() {
    return {
        template: require('./age-inputs.directive.pug'),
        scope: {
            model: '=',
            agesOptionsToInclude: '=',
            onChange: '&'
        },
        controller: function ($scope) {
            if (!$scope.model || !$scope.model.length) {
                $scope.model = _.filter($scope.agesOptionsToInclude, { default: true })
                    .map(function (_type) {
                    return { type: _type.id, value: undefined };
                });
            }
            var config = $scope.agesOptionsToInclude.reduce(function (final, current) {
                final[current.id] = current;
                return final;
            }, {});
            $scope.config = config;
            $scope.remainingTypes = $scope.agesOptionsToInclude;
            calculateRemainingTimes();
            $scope.add = function (typeId) {
                $scope.model.push({ type: typeId, value: undefined });
                calculateRemainingTimes();
                if ($scope.onChange) {
                    $scope.onChange();
                }
            };
            $scope.remove = function (index) {
                $scope.model.splice(index, 1);
                calculateRemainingTimes();
                if ($scope.onChange) {
                    $scope.onChange();
                }
            };
            function calculateRemainingTimes() {
                var times = _.countBy($scope.model, 'type');
                $scope.remainingTypes = $scope.agesOptionsToInclude.filter(function (type) {
                    if (!type.max)
                        return true;
                    return type.max > (times[type.id] || 0);
                });
            }
        },
    };
}
exports.default = ageInputsDirective;
//# sourceMappingURL=age-inputs.directive.js.map