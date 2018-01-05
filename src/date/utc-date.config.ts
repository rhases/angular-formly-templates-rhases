'use strict';
const moment = require('moment');

export function utcDateConfig(formlyConfig) {
  'ngInject';

  formlyConfig.setType({
    name: 'utc-date',
    extends: 'input',
    defaultOptions: {
      ngModelAttrs: {
        mask: {
          attribute: 'ui-mask'
        }
      },
      templateOptions: {
        type: 'tel',
        mask: '99/99/9999',
        dateFormat: 'DDMMYYYY'
      },
      formatters: [
        function ($viewValue, $modelValue, scope) {
          // ui-mask workaround
          return $modelValue && moment.utc($modelValue).format(scope.to.dateFormat);
        }
      ],
      parsers: [
        function ($viewValue, $modelValue, scope) {
          var date = moment.utc($viewValue, scope.to.dateFormat, true);
          return date.isValid() ? date : undefined;
        }
      ]
    }
  });
}