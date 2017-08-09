'use strict';

export function currencyConfig(formlyConfigProvider) {
  'ngInject';

  // TODO: remove it
  formlyConfigProvider.setType({
    name: 'currency',
    extends: 'input',
    defaultOptions: {
      ngModelAttrs: {
        customAttrVal: {
          attribute: 'ng-currency'
        }
      },
      templateOptions: {
        customAttrVal: '',
        required: true
      }
    }
  });

}
