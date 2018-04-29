'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function agreeConfig(formlyConfig) {
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
exports.agreeConfig = agreeConfig;
//# sourceMappingURL=agree.config.js.map