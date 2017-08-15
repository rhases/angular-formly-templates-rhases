"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require('angular');
var formly = require('angular-formly');
var formlyBootstrapTemplates = require('angular-formly-templates-bootstrap');
var uiBootstrap = require('angular-ui-bootstrap');
var ngModuleName = 'angular-formly-templates-rhases';
var big_buttons_config_1 = require("./big-buttons/big-buttons.config");
var age_inputs_config_1 = require("./age-inputs/age-inputs.config");
var file_upload_config_1 = require("./file-upload/file-upload.config");
var currency_config_1 = require("./currency/currency.config");
var holder_age_inputs_config_1 = require("./holder-age-inputs/holder-age-inputs.config");
var s3_file_upload_directive_directive_1 = require("./file-upload/s3-file-upload-directive.directive");
var age_inputs_directive_1 = require("./age-inputs/age-inputs.directive");
require("./scss/angular-formly-templates-rhases.scss");
exports.default = angular.module(ngModuleName, [
    formly,
    formlyBootstrapTemplates,
    uiBootstrap
])
    .config(big_buttons_config_1.bigButtonsConfig)
    .config(age_inputs_config_1.ageInputsConfig)
    .config(file_upload_config_1.fileUploadConfig)
    .config(currency_config_1.currencyConfig)
    .config(holder_age_inputs_config_1.holderAgeInputsConfig)
    .directive('s3FileUpload', s3_file_upload_directive_directive_1.s3FileUploadDirective)
    .directive('ageInputs', age_inputs_directive_1.default)
    .name;
//# sourceMappingURL=module.js.map