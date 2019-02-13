"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require('angular');
var formly = require('angular-formly');
var formlyBootstrapTemplates = require('angular-formly-templates-bootstrap');
var uiBootstrap = require('angular-ui-bootstrap');
var moneyMask = require('ng-money-mask');
var uiMask = require('angular-ui-mask');
var angularMoment = require('angular-moment');
var ngModuleName = 'angular-formly-templates-rhases';
console.log(moneyMask);
var action_button_config_1 = require("./action-button/action-button.config");
var age_inputs_config_1 = require("./age-inputs/age-inputs.config");
var agree_config_1 = require("./agree/agree.config");
var big_buttons_config_1 = require("./big-buttons/big-buttons.config");
var brazilian_cities_config_1 = require("./brazilian-cities/brazilian-cities.config");
var cep_config_1 = require("./cep/cep.config");
var file_upload_config_1 = require("./file-upload/file-upload.config");
var choose_operator_config_1 = require("./choose-operator/choose-operator.config");
var currency_config_1 = require("./currency/currency.config");
var holder_age_inputs_config_1 = require("./holder-age-inputs/holder-age-inputs.config");
var link_config_1 = require("./link/link.config");
var radio_with_other_config_1 = require("./radio-with-other/radio-with-other.config");
var stack_buttons_config_1 = require("./stack-buttons/stack-buttons.config");
var date_config_1 = require("./date/date.config");
var utc_date_config_1 = require("./date/utc-date.config");
var cpf_config_1 = require("./cpf/cpf.config");
var cnpj_config_1 = require("./cnpj/cnpj.config");
var input_group_config_1 = require("./input-group/input-group.config");
var ngFileUpload = require('ng-file-upload');
var s3_file_upload_directive_directive_1 = require("./file-upload/s3-file-upload-directive.directive");
var age_inputs_directive_1 = require("./age-inputs/age-inputs.directive");
require("./index.scss");
exports.default = angular.module(ngModuleName, [
    formly,
    formlyBootstrapTemplates,
    uiBootstrap,
    uiMask,
    angularMoment,
    'rw.moneymask',
    ngFileUpload
])
    .config(age_inputs_config_1.ageInputsConfig)
    .config(big_buttons_config_1.bigButtonsConfig)
    .config(brazilian_cities_config_1.brazilianCitiesConfig)
    .config(file_upload_config_1.fileUploadConfig)
    .config(holder_age_inputs_config_1.holderAgeInputsConfig)
    .config(input_group_config_1.inputGroupConfig)
    .config(choose_operator_config_1.chooseOperatorConfig)
    .run(action_button_config_1.actionButtonConfig)
    .run(stack_buttons_config_1.stackButtonsConfig)
    .run(radio_with_other_config_1.radioWithOtherConfig)
    .run(agree_config_1.agreeConfig)
    .run(link_config_1.linkConfig)
    .run(cep_config_1.cepConfig)
    .run(currency_config_1.currencyConfig)
    .run(date_config_1.dateConfig)
    .run(utc_date_config_1.utcDateConfig)
    .run(cpf_config_1.cpfConfig)
    .run(cnpj_config_1.cnpjConfig)
    .directive('s3FileUpload', s3_file_upload_directive_directive_1.s3FileUploadDirective)
    .directive('ageInputs', age_inputs_directive_1.default)
    .name;
//# sourceMappingURL=module.js.map