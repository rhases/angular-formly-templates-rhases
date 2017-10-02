'use strict';
const BrV =  require('br-validations');

export function cnpjConfig(formlyConfig) {
  'ngInject';

  formlyConfig.setType({
    name: 'cnpj',
    extends: 'input',
    defaultOptions: {
      ngModelAttrs: {
        mask: {
          attribute: 'ui-mask'
        }
      },
      templateOptions: {
        type: 'tel',
        mask: '99.999.999/9999-99',
      },
      validators: {
        cnpj: {
          expression: function($viewValue, $modelValue, scope) {
            var cnpj = $modelValue;
            if(!cnpj) return true;
            return cnpj && cnpj.length == 14 && BrV.cnpj.validate(cnpj);
          },
          message: '$viewValue + " não é um cnpj válido"'
        }
      }
    }
  });
}