const angular = require('angular');

const formly = require('angular-formly');
const formlyBootstrapTemplates = require('angular-formly-templates-bootstrap');
const uiBootstrap = require('angular-ui-bootstrap');
const moneyMask = require('ng-money-mask');
const uiMask = require('angular-ui-mask');
const angularMoment = require('angular-moment');

const ngModuleName = 'angular-formly-templates-rhases'

// import ngCurrencyMask from 'ng-currency-mask';
console.log(moneyMask)

import { actionButtonConfig } from './action-button/action-button.config';
import { ageInputsConfig } from './age-inputs/age-inputs.config';
import { agreeConfig } from './agree/agree.config';
import { bigButtonsConfig } from './big-buttons/big-buttons.config';
import { brazilianCitiesConfig } from './brazilian-cities/brazilian-cities.config';
import { cepConfig } from './cep/cep.config';
import { fileUploadConfig } from './file-upload/file-upload.config';
import { chooseOperatorConfig } from './choose-operator/choose-operator.config';
import { currencyConfig } from './currency/currency.config';
import { holderAgeInputsConfig } from './holder-age-inputs/holder-age-inputs.config';
import { linkConfig } from './link/link.config';
import { radioWithOtherConfig } from './radio-with-other/radio-with-other.config';
import { stackButtonsConfig } from './stack-buttons/stack-buttons.config';
import { dateConfig } from './date/date.config';
import { utcDateConfig } from './date/utc-date.config';
import { cpfConfig } from './cpf/cpf.config';
import { cnpjConfig } from './cnpj/cnpj.config';
import { inputGroupConfig } from './input-group/input-group.config';

const ngFileUpload = require('ng-file-upload');

import {s3FileUploadDirective} from './file-upload/s3-file-upload-directive.directive';
import ageInputsDirective from './age-inputs/age-inputs.directive';

import './index.scss';

export default angular.module(ngModuleName, [
  formly,
  formlyBootstrapTemplates,
  uiBootstrap,
  uiMask,
  angularMoment,
  'rw.moneymask',
  ngFileUpload
])
.config(ageInputsConfig)
.config(bigButtonsConfig)
.config(brazilianCitiesConfig)
.config(fileUploadConfig)
.config(holderAgeInputsConfig)
.config(inputGroupConfig)
.config(chooseOperatorConfig)

.run(actionButtonConfig)
.run(stackButtonsConfig)
.run(radioWithOtherConfig)
.run(agreeConfig)
.run(linkConfig)
.run(cepConfig)

.run(currencyConfig)
.run(dateConfig)
.run(utcDateConfig)
.run(cpfConfig)
.run(cnpjConfig)
.directive('s3FileUpload', s3FileUploadDirective)
.directive('ageInputs', ageInputsDirective)
.name;
