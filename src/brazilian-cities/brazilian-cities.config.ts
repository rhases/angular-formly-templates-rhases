'use strict';

import { getStateByCod, getCityByCod, allStates }  from 'brazilian-cities';
var _ = require('lodash');

const formly = require('angular-formly');

export function brazilianCitiesConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'brazilian-cities',
    template: require('./brazilian-cities.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    defaultOptions: {
      templateOptions:{ required: true }
    },
    controller: /* @ngInject */ function($scope) {
      const to = $scope.to;
      const opts = $scope.options;

      const states =  allStates();

      $scope.set = function(value) {
        $scope.model[opts.key] = value;

        if ($scope.to.onChange) {
          $scope.to.onChange();
        }
      }

      initInfos($scope);

    	$scope.states = states;

    	$scope.onSelectState = function() {
    		$scope.infos.city = undefined;
    	}

    	$scope.onSelectCity = function() {
        var location =  {
          state:  $scope.infos.state.cod,
          city:  $scope.infos.city.cod,
        }
        $scope.model[opts.key] = location;

        if ($scope.to.onChange) {
          $scope.to.onChange();
        }
    	}

    	function initInfos(scope){
    		var infos = scope.infos;
    		if (!infos){
    			scope.infos = {};
    			return;
    		}

    		if(infos.state
    			&& ( typeof(infos.state) === 'string'
    			|| infos.state instanceof String)){

    			infos.state = getStateByCod(infos.state)
    		}

    		if(infos.city
    			&& ( typeof(infos.city) === 'string'
    			|| infos.city instanceof String)){

    			infos.city = getCityByCod(infos.state, infos.city);
    		}

    	}


    }
  });

}
