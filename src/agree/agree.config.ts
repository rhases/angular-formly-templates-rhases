'use strict';

export function agreeConfig(formlyConfig) {
  'ngInject';

  formlyConfig.setType({
    name: 'agree',
    extends: 'checkbox',
    defaultOptions: {
      validators: {
        agreed: {
          expression: function ($viewValue, $modelValue, scope) {
            var response = $modelValue;
            return response;
          },
          message: 'Você precisa aceitar os termos'
        }
      }
    }
  });
}