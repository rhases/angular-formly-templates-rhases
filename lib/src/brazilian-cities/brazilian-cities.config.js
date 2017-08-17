'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var brazilian_cities_1 = require("brazilian-cities");
var _ = require('lodash');
var formly = require('angular-formly');
function brazilianCitiesConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'brazilian-cities',
        template: require('./brazilian-cities.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
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
            initInfos($scope);
            $scope.states = states;
            $scope.onSelectState = function () {
                $scope.infos.city = undefined;
            };
            $scope.onSelectCity = function () {
                var location = {
                    cityCod: $scope.infos.city.cod,
                    cityLabel: $scope.infos.city.label,
                    stateCod: $scope.infos.state.cod,
                    stateLabel: $scope.infos.state.label,
                };
                $scope.model[opts.key] = location;
                if ($scope.to.onChange) {
                    $scope.to.onChange();
                }
            };
            function initInfos(scope) {
                var infos = scope.infos;
                if (!infos) {
                    scope.infos = {};
                    return;
                }
                if (infos.state
                    && (typeof (infos.state) === 'string'
                        || infos.state instanceof String)) {
                    infos.state = brazilian_cities_1.getStateByCod(infos.state);
                }
                if (infos.city
                    && (typeof (infos.city) === 'string'
                        || infos.city instanceof String)) {
                    infos.city = brazilian_cities_1.getCityByCod(infos.state, infos.city);
                }
            }
        }
    });
}
exports.brazilianCitiesConfig = brazilianCitiesConfig;
//# sourceMappingURL=brazilian-cities.config.js.map