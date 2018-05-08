'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var cep_as_promised_1 = require("cep-as-promised");
function cepConfig(formlyConfig) {
    'ngInject';
    function fetchCep(cepInputValue, scope) {
        return cep_as_promised_1.cepBrowser(cepInputValue)
            .then(function (result) {
            updateLocation(scope.model, scope.to, result);
        })
            .catch(function (err) {
            console.error(err);
        });
    }
    function updateLocation(model, to, location) {
        if (!location.city || !location.state) {
            return;
        }
        model[to.cityKey || 'city'] = location.city;
        model[to.stateKey || 'state'] = location.state;
        model[to.addressAreaKey || 'addressArea'] = location.neighborhood;
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
                    },
                    message: '$viewValue + " não é um CEP válido"'
                }
            }
        }
    });
}
exports.cepConfig = cepConfig;
//# sourceMappingURL=cep.config.js.map