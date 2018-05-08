'use strict';

import {cepBrowser} from 'cep-as-promised';

export function cepConfig(formlyConfig) {
    'ngInject';

    function fetchCep(cepInputValue, scope){
        return cepBrowser(cepInputValue)
            .then((result) => {
                updateLocation(scope.model, scope.to, result);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function updateLocation(model, to, location) {
        if (!location.city || !location.state) { return; }
        
        model[to.cityKey || 'city'] = location.city;
        model[to.stateKey || 'state' ] = location.state;
        model[to.addressAreaKey || 'addressArea' ] = location.neighborhood;
        model[to.addressLineKey || 'addressLine'] = location.street;
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