'use strict';

export function currencyConfig(formlyConfig, $locale) {
  'ngInject';

  formlyConfig.setType({
    name: 'currency',
    extends: 'input',
    defaultOptions: {
      ngModelAttrs: {
        moneyMask: {
          attribute: 'money-mask'
        },
        moneyMaskPrepend: {
          attribute: 'money-mask-prepend'
        }
      },
      templateOptions: {
        type: 'tel',
        moneyMask: '',
        moneyMaskPrepend: $locale.NUMBER_FORMATS.CURRENCY_SYM
      }
    }
  });

}
