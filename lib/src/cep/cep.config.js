'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var cep_as_promised_1 = require("cep-as-promised");
function cepConfig(formlyConfig) {
    'ngInject';
    function fetchCep(cepInputValue, scope) {
        return cep_as_promised_1.cepBrowser(cepInputValue)
            .then(function (result) {
            updateLocation(scope, result);
        })
            .catch(function (err) {
            console.error(err);
        });
    }
    function updateLocation($scope, location) {
        if (!location.city || !location.state) {
            return;
        }
        $scope.model[$scope.options.cityKey || 'city'] = location.city;
        $scope.model[$scope.options.stateKey || 'state'] = location.state;
        $scope.model[$scope.options.addressAreaKey || 'addressArea'] = location.neighborhood;
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
                    },
                    message: '$viewValue + " não é um CEP válido"'
                }
            }
        }
    });
}
exports.cepConfig = cepConfig;
//# sourceMappingURL=cep.config.js.map