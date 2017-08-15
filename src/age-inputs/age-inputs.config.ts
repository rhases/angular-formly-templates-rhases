'use strict';

var _ = require('lodash')

export function ageInputsConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'age-inputs',
    // template: require('./age-inputs.pug'),
    template: '<age-inputs></age-inputs>',
    wrapper: ['bootstrapLabel', 'bootstrapHasError']
  });

}
