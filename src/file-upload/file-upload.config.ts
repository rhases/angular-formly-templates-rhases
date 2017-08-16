'use strict';

export function fileUploadConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'file-upload',
    template: require('./file-upload.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError']
  });

}
