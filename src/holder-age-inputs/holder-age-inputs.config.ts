'use strict';
const _ = require('lodash');

export function holderAgeInputsConfig(formlyConfigProvider) {
  'ngInject';

  function _onChange($scope) {
    
    countLifes($scope);
    if ($scope.to.onChange) {
      $scope.to.onChange();
    }
  }

  function countLifes($scope) {
    var holders = $scope.model[$scope.options.key];

    var totalLifes = holders.length;
    holders = holders.map(function(holder) {
        if(!holder) return;
        totalLifes += holder.dependents ? holder.dependents.length : 0;
        return holder;
    });
    $scope.model[$scope.opts.totalLifesKey] = totalLifes;
  }

  formlyConfigProvider.setType({
    name: 'holder-age-inputs',
    template: require('./holder-age-inputs.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function($scope) {
      $scope.opts = $scope.to.options;
      // Initial set
      $scope.opts.min = $scope.opts.min || 0;
      $scope.opts.max = $scope.opts.max || 1;
      $scope.opts.totalLifesKey = $scope.opts.totalLifesKey || 'totalLifes';
      if (!$scope.model[$scope.options.key]) {
        $scope.model[$scope.options.key] = $scope.opts.min ? _.fill(Array($scope.opts.min), undefined).map(() => { return {type: $scope.opts.id || 'holder'} }) : []
      }
      countLifes($scope);

      $scope.add = function() {
        $scope.model[$scope.options.key].push({type: $scope.opts.id, dependents: [] })
        _onChange($scope);
      }

      $scope.remove = function (index) {
        $scope.model[$scope.options.key].splice(index, 1)
        _onChange($scope);
      }

      $scope.onChangeDependents = function() {
        _onChange($scope);
      }
    }
  });

}
