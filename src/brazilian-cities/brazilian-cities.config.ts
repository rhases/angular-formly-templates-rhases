'use strict';

import { getStateByCod, getCityByCod, allStates } from 'brazilian-cities';
var _ = require('lodash');

const formly = require('angular-formly');

export function brazilianCitiesConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'brazilian-cities',
    extends: 'input',
    template: require('./brazilian-cities.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    defaultOptions: {
      templateOptions: { required: true }
    },
    controller: /* @ngInject */ function($scope) {
      const to = $scope.to;
      const opts = $scope.options;

      const states = allStates();

      $scope.set = function(value) {
        $scope.model[opts.key] = value;

        if ($scope.to.onChange) {
          $scope.to.onChange();
        }
      };

      $scope.states = states;

      $scope.onSelectState = function() {
        $scope.model[opts.key].city = undefined;
      };

      $scope.onSelectCity = function() {
        if (!$scope.internalModel.city) return;

        $scope.model[opts.key].state = $scope.internalModel.state.cod;
        $scope.model[opts.key].city = $scope.internalModel.city.cod;

        console.log($scope.model[opts.key].city);

        if ($scope.to.onChange) {
          $scope.to.onChange();
        }
      };

      initInternalModel();

      function initInternalModel() {
        //init model
        if (!$scope.model[opts.key]) {
          $scope.model[opts.key] = {};
        }

        $scope.internalModel = {};
        var thisModel = $scope.model[opts.key];
        if (thisModel.state && (typeof thisModel.state === 'string' || thisModel.state instanceof String)) {
          $scope.internalModel.state = getStateByCod(thisModel.state);
        }

        if (thisModel.city && (typeof thisModel.city === 'string' || thisModel.city instanceof String)) {
          $scope.internalModel.city = getCityByCod($scope.internalModel.state, thisModel.city);
          //$scope.onSelectCity();
        }
      }
    }
  });
}
