const angular = require('angular');

const formly = require('angular-formly');
const formlyBootstrapTemplates = require('angular-formly-templates-bootstrap');
const uiBootstrap = require('angular-ui-bootstrap');
const ngCurrency = require('ng-currency');
const moneyMask = require('ng-money-mask');

const ngModuleName = 'angular-formly-templates-rhases'

// import ngCurrencyMask from 'ng-currency-mask';
console.log(moneyMask)

import {ageInputsConfig} from './age-inputs/age-inputs.config';
import {bigButtonsConfig} from './big-buttons/big-buttons.config';
import {brazilianCitiesConfig} from './brazilian-cities/brazilian-cities.config';
import {fileUploadConfig} from './file-upload/file-upload.config';
import {currencyConfig} from './currency/currency.config';
import {holderAgeInputsConfig} from './holder-age-inputs/holder-age-inputs.config';

import {s3FileUploadDirective} from './file-upload/s3-file-upload-directive.directive';
import ageInputsDirective from './age-inputs/age-inputs.directive';

import './index.scss';

export default angular.module(ngModuleName, [
  formly,
  formlyBootstrapTemplates,
  uiBootstrap,
  ngCurrency.default,
  'rw.moneymask'
])
.config(ageInputsConfig)
.config(bigButtonsConfig)
.config(brazilianCitiesConfig)
.config(fileUploadConfig)
.config(holderAgeInputsConfig)
.run(currencyConfig)
.directive('s3FileUpload', s3FileUploadDirective)
.directive('ageInputs', ageInputsDirective)
.name;
