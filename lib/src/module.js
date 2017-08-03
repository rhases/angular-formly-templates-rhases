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
require("./scss/angular-formly-templates-rhases.scss");
exports.default = angular.module(ngModuleName, [
    formly,
    formlyBootstrapTemplates,
    uiBootstrap
])
    .config(big_buttons_config_1.bigButtonsConfig)
    .config(age_inputs_config_1.ageInputsConfig)
    .config(file_upload_config_1.fileUploadConfig)
    .name;
//# sourceMappingURL=module.js.map