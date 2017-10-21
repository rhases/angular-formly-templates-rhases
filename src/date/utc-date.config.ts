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
      },
      formatters: [
        function (value) {
          return value && moment.utc(value).format('DDMMYYYY');
        }
      ],
      parsers: [
        function (value) {
          var date = moment.utc(value, 'DDMMYYYY', true);
          return date.isValid() ? date : undefined;
        }
      ]
    }
  });
}