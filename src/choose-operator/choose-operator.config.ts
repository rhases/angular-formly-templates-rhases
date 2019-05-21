'use strict';
var _ = require('lodash');

export function chooseOperatorConfig(formlyConfigProvider) {
    'ngInject';

    formlyConfigProvider.setType({
        name: 'choose-operator',
        extends: 'input',
        template: require('./choose-operator.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: /* @ngInject */ function ($log, $http, $scope, $window) {
            var infos = $scope.infos || {};
            const opts = $scope.options;
            const to = $scope.to;
            const minLengthToQuery = to.minLengthToQuery || 3;
            
            function getOperators(val) {
                if (val && val.length < minLengthToQuery)
                    return;

                return $http.get($window.ENV.serversUri.hiSeller + '/api/health-insurance/operators/name/' + val)
                    .then(function (operators) {
                        $log.debug(operators.data);
                        return operators.data.map(function (operator) {
                            operator.label = operator.code;
                            return operator;
                        });
                    });
            }

            function select(currentSelectedOperator) {
                if (!currentSelectedOperator)
                    return;
                infos.operator = currentSelectedOperator;
                set(infos.operator);
            }

            function set(operator) {
                _.set($scope.model, opts.key, operator.code);
                if (to.saveOperatorName && to.saveOperatorName.key) {
                    _.set($scope.model, to.saveOperatorName.key, operator.name);
                }
            }

            $scope.getOperators = getOperators;
            $scope.select = select;
        }
    });
}