'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var brazilian_cities_1 = require("brazilian-cities");
var _ = require('lodash');
var formly = require('angular-formly');
function brazilianCitiesConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'brazilian-cities',
        extends: 'input',
        template: require('./brazilian-cities.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        defaultOptions: {
            templateOptions: { required: true }
        },
        controller: function ($scope) {
            var to = $scope.to;
            var opts = $scope.options;
            var states = brazilian_cities_1.allStates();
            $scope.set = function (value) {
                $scope.model[opts.key] = value;
                if ($scope.to.onChange) {
                    $scope.to.onChange();
                }
            };
            $scope.states = states;
            $scope.onSelectState = function () {
                $scope.model[opts.key].city = undefined;
            };
            $scope.onSelectCity = function () {
                if (!$scope.internalModel.city)
                    return;
                $scope.model[opts.key].state = $scope.internalModel.state.cod;
                $scope.model[opts.key].city = $scope.internalModel.city.cod;
                console.log($scope.model[opts.key].city);
                if ($scope.to.onChange) {
                    $scope.to.onChange();
                }
            };
            initInternalModel();
            function initInternalModel() {
                if (!$scope.model[opts.key]) {
                    $scope.model[opts.key] = {};
                }
                $scope.internalModel = {};
                var thisModel = $scope.model[opts.key];
                if (thisModel.state && (typeof thisModel.state === 'string' || thisModel.state instanceof String)) {
                    $scope.internalModel.state = brazilian_cities_1.getStateByCod(thisModel.state);
                }
                if (thisModel.city && (typeof thisModel.city === 'string' || thisModel.city instanceof String)) {
                    $scope.internalModel.city = brazilian_cities_1.getCityByCod($scope.internalModel.state, thisModel.city);
                }
            }
        }
    });
}
exports.brazilianCitiesConfig = brazilianCitiesConfig;
//# sourceMappingURL=brazilian-cities.config.js.map