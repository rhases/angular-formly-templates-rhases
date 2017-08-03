const angular = require('angular');

const formly = require('angular-formly');
const formlyBootstrapTemplates = require('angular-formly-templates-bootstrap');
const uiBootstrap = require('angular-ui-bootstrap');

const ngModuleName = 'angular-formly-templates-rhases'

import {bigButtonsConfig} from './big-buttons/big-buttons.config';
import {ageInputsConfig} from './age-inputs/age-inputs.config';
import {fileUploadConfig} from './file-upload/file-upload.config';

import './scss/angular-formly-templates-rhases.scss';

export default angular.module(ngModuleName, [
  formly,
  formlyBootstrapTemplates,
  uiBootstrap
])
.config(bigButtonsConfig)
.config(ageInputsConfig)
.config(fileUploadConfig)
.name;
