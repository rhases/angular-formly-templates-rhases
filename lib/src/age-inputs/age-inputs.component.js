"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require('angular');
var _ = require('lodash');
var formlyTemplatesRhases = require('../templates-rhases.module');
var AgeInputsController = (function () {
    function AgeInputsController($scope) {
        this.$scope = $scope;
        this.model = $scope.model;
        this.to = $scope.to;
        this.opts = $scope.options;
    }
    AgeInputsController.prototype.$onInit = function () {
        if (!this.model[this.opts.key]) {
            this.model[this.opts.key] = _.filter(this.to.options, { default: true })
                .map(function (_type) {
                return { type: _type.id, value: undefined };
            });
        }
        var config = this.to.options.reduce(function (final, current) {
            final[current.id] = current;
            return final;
        }, {});
        this.$scope.config = config;
        this.$scope.remainingTypes = this.to.options;
        this.calculateRemainingTimes();
    };
    AgeInputsController.prototype.add = function (typeId) {
        this.model[this.opts.key].push({ type: typeId, value: undefined });
        this.calculateRemainingTimes();
        if (this.$scope.to.onChange) {
            this.$scope.to.onChange();
        }
    };
    AgeInputsController.prototype.remove = function (index) {
        this.model[this.opts.key].splice(index, 1);
        this.calculateRemainingTimes();
        if (this.$scope.to.onChange) {
            this.$scope.to.onChange();
        }
    };
    AgeInputsController.prototype.calculateRemainingTimes = function () {
        var times = _.countBy(this.model[this.opts.key], 'type');
        this.$scope.remainingTypes = this.to.options.filter(function (type) {
            if (!type.max)
                return true;
            return type.max > (times[type.id] || 0);
        });
        console.log(this.$scope.remainingTypes);
    };
    return AgeInputsController;
}());
exports.AgeInputsController = AgeInputsController;
exports.default = angular.module(formlyTemplatesRhases)
    .component('ageInputs', {
    template: require('./age-inputs.pug'),
    controller: AgeInputsController
})
    .name;
//# sourceMappingURL=age-inputs.component.js.map