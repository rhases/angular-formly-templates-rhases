const angular = require('angular');
const _ = require('lodash');
const formlyTemplatesRhases = require('../templates-rhases.module');

export class AgeInputsController {

  $scope;
  model;
  to;
  opts;

  /*@ngInject*/
  constructor($scope) {
    this.$scope = $scope;
    this.model = $scope.model;
    this.to = $scope.to;
    this.opts = $scope.options;
  }

  $onInit() {
    // do something to do on init

    // Initial set
    if (!this.model[this.opts.key]) {
      this.model[this.opts.key] = _.filter(this.to.options, { default: true })
        .map(function(_type) {
          return { type: _type.id, value: undefined };
        });
    }


    // load all labels
    const config = this.to.options.reduce(
      function(final, current) {
        final[current.id] = current;
        return final;
      }, {});
    this.$scope.config = config;

    this.$scope.remainingTypes = this.to.options;

    this.calculateRemainingTimes();
  }

  add(typeId) {
    this.model[this.opts.key].push({ type: typeId, value: undefined })
    this.calculateRemainingTimes();

    if (this.$scope.to.onChange) {
      this.$scope.to.onChange();
    }
  }

  remove(index) {
    this.model[this.opts.key].splice(index, 1)
    this.calculateRemainingTimes();

    if (this.$scope.to.onChange) {
      this.$scope.to.onChange();
    }
  }

  private calculateRemainingTimes() {
    var times = _.countBy(this.model[this.opts.key], 'type');

    this.$scope.remainingTypes = this.to.options.filter(function(type) {
      if (!type.max) return true;
      return type.max > (times[type.id] || 0);
    })
  }
}

export default angular.module(formlyTemplatesRhases)
  .component('ageInputs', {
    template: require('./age-inputs.pug'),
    controller: AgeInputsController
  })
  .name;
