'use strict';

import {cepBrowser} from 'cep-as-promised';

export function cepConfig(formlyConfig) {
    'ngInject';

    function fetchCep(cepInputValue, scope){
        return cepBrowser(cepInputValue)
            .then((result) => {
                updateLocation(scope, result);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function updateLocation($scope, location) {
        if (!location.city || !location.state) { return; }

        $scope.model[$scope.options.cityKey || 'city'] = location.city;
        $scope.model[$scope.options.stateKey || 'state' ] = location.state;
        $scope.model[$scope.options.addressAreaKey || 'addressArea' ] = location.neighborhood;
        $scope.model[$scope.options.addressLineKey || 'addressLine'] = location.street;
    }

    formlyConfig.setType({
        name: 'cep',
        extends: 'input',
        defaultOptions: {
            ngModelAttrs: {
                mask: {
                    attribute: 'ui-mask'
                }
            },
            templateOptions: {
                type: 'tel',
                mask: '99.999-999',
                placeholder: '__.___-___'
            },
            asyncValidators: {
                cep: {
                    expression: function ($viewValue, $modelValue, scope) {
                        var cep = $modelValue;
                        return fetchCep(cep, scope);
                        //return !!cep;
                    },
                    message: '$viewValue + " não é um CEP válido"'
                }
            }
        }
    });
}