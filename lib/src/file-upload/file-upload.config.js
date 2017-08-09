'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function fileUploadConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'file-upload',
        template: require('./file-upload.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });
}
exports.fileUploadConfig = fileUploadConfig;
//# sourceMappingURL=file-upload.config.js.map