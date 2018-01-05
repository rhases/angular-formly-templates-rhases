'use strict';
const BrV =  require('br-validations');

export function cpfConfig(formlyConfig) {
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
      formatters: [
        function ($viewValue, $modelValue, scope) {
          // ui-mask workaround
          var cpf = $modelValue;
          if(!cpf || cpf.length < 8) return cpf;
          while (cpf.length < 11) {
            cpf = '0' + cpf;
          }
          return cpf;
        }
      ],
      validators: {
        cpf: {
          expression: function($viewValue, $modelValue, scope) {
            var cpf = $modelValue;
            if(!cpf) return true;
            return cpf && cpf.length == 11 && BrV.cpf.validate(cpf);
          },
          message: '$viewValue + " não é um cpf válido"'
        }
      }
    }
  });
}