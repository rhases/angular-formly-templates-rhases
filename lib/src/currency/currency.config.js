'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function currencyConfig(formlyConfig, $locale) {
    'ngInject';
    formlyConfig.setType({
        name: 'currency',
        extends: 'input',
        defaultOptions: {
            ngModelAttrs: {
                ngCurrency: {
                    attribute: 'ng-currency'
                },
                moneyMask: {
                    attribute: 'money-mask'
                },
                moneyMaskPrepend: {
                    attribute: 'money-mask-prepend'
                }
            },
            templateOptions: {
                moneyMask: '',
                moneyMaskPrepend: $locale.NUMBER_FORMATS.CURRENCY_SYM,
                ngCurrency: '',
                required: true
            }
        }
    });
}
exports.currencyConfig = currencyConfig;
//# sourceMappingURL=currency.config.js.map