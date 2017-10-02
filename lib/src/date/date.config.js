'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require('moment');
function dateConfig(formlyConfig) {
    'ngInject';
    formlyConfig.setType({
        name: 'date',
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
exports.dateConfig = dateConfig;
//# sourceMappingURL=date.config.js.map