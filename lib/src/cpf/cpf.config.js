'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var BrV = require('br-validations');
function cpfConfig(formlyConfig) {
    'ngInject';
    formlyConfig.setType({
        name: 'cpf',
        extends: 'input',
        defaultOptions: {
            ngModelAttrs: {
                mask: {
                    attribute: 'ui-mask'
                }
            },
            templateOptions: {
                type: 'tel',
                mask: '999.999.999-99',
            },
            validators: {
                cpf: {
                    expression: function ($viewValue, $modelValue, scope) {
                        var cpf = $modelValue;
                        if (!cpf)
                            return true;
                        return cpf && cpf.length == 11 && BrV.cpf.validate(cpf);
                    },
                    message: '$viewValue + " não é um cpf válido"'
                }
            }
        }
    });
}
exports.cpfConfig = cpfConfig;
//# sourceMappingURL=cpf.config.js.map