"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require('angular');
var _ = require('lodash');
function ageInputsDirective() {
    return {
        template: require('./age-inputs.directive.pug'),
        scope: {
            model: '=',
            rootModel: '=',
            agesOptionsToInclude: '=',
            onChange: '&'
        },
        controller: function ($scope, $parse, $timeout) {
            config();
            $timeout(function () {
                init();
            }, 250);
            function init() {
                calculateRemainingTypes();
                if (!$scope.model || $scope.model.length == 0)
                    $scope.model = generateDefaultModel();
                $scope.model = checkDefault($scope.model);
            }
            function config() {
                _.forEach($scope.agesOptionsToInclude, function (current) {
                    current._default = current.default;
                    if (current.ifIncludedIn) {
                        $scope.$watch(function () {
                            return $parse(current.ifIncludedIn)({ scope: $scope.rootModel });
                        }, function (newValue, oldValue) {
                            current._ifIncludedIn = newValue.indexOf(current.id) >= 0;
                            if (current._ifIncludedIn)
                                current._max = current.max;
                            else
                                current._max = 0;
                            init();
                        });
                    }
                    else {
                        current._max = current.max;
                    }
                });
                var config = $scope.agesOptionsToInclude.reduce(function (final, current) {
                    final[current.id] = current;
                    return final;
                }, {});
                $scope.config = config;
                $scope.remainingTypes = $scope.agesOptionsToInclude;
            }
            $scope.add = function (typeId) {
                $scope.model.push({ type: typeId, value: undefined });
                calculateRemainingTypes();
                if ($scope.onChange) {
                    $scope.onChange();
                }
            };
            $scope.remove = function (index) {
                $scope.model.splice(index, 1);
                calculateRemainingTypes();
                if ($scope.onChange) {
                    $scope.onChange();
                }
            };
            function calculateRemainingTypes() {
                var times = _.countBy($scope.model, 'type');
                $scope.remainingTypes = $scope.agesOptionsToInclude.filter(function (type) {
                    if (type._max == undefined)
                        return true;
                    return type._max > (times[type.id] || 0);
                });
            }
            function generateDefaultModel() {
                return _.filter($scope.agesOptionsToInclude, { _default: true })
                    .filter(function (_type) {
                    return _type._ifIncludedIn == undefined || _type._ifIncludedIn == true;
                })
                    .map(function (_type) {
                    return { type: _type.id, value: undefined };
                });
            }
            function checkDefault(model) {
                var _default = generateDefaultModel();
                model = model.reduce(function (final, _v) {
                    if (_.some(_default, { type: _v.type }))
                        final.push(_v);
                    return final;
                }, []);
                _default.forEach(function (_v) {
                    if (!_.some(model, { type: _v.type }))
                        model.push(_v);
                });
                return model;
            }
        },
    };
}
exports.default = ageInputsDirective;
//# sourceMappingURL=age-inputs.directive.js.map