'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('lodash');
function ageInputsConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'age-inputs',
        template: '<age-inputs></age-inputs>',
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });
}
exports.ageInputsConfig = ageInputsConfig;
//# sourceMappingURL=age-inputs.config.js.map