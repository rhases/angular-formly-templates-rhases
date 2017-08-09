const angular = require('angular');

const formly = require('angular-formly');
const formlyBootstrapTemplates = require('angular-formly-templates-bootstrap');
const uiBootstrap = require('angular-ui-bootstrap');

const ngModuleName = 'angular-formly-templates-rhases'

import {bigButtonsConfig} from './big-buttons/big-buttons.config';
import {ageInputsConfig} from './age-inputs/age-inputs.config';
import {fileUploadConfig} from './file-upload/file-upload.config';
import {currencyConfig} from './currency/currency.config';

import {s3FileUploadDirective} from './file-upload/s3-file-upload-directive.directive';

import './scss/angular-formly-templates-rhases.scss';

export default angular.module(ngModuleName, [
  formly,
  formlyBootstrapTemplates,
  uiBootstrap
])
.config(bigButtonsConfig)
.config(ageInputsConfig)
.config(fileUploadConfig)
.config(currencyConfig)
.directive('s3FileUpload', s3FileUploadDirective)
.name;
