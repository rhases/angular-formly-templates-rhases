'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function currencyConfig(formlyConfigProvider) {
    'ngInject';
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
exports.currencyConfig = currencyConfig;
//# sourceMappingURL=currency.config.js.map