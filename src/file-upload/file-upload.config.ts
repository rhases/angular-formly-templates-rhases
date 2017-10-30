'use strict';

export function fileUploadConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'file-upload',
    template: require('./file-upload.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function ($scope) {

      $scope.opts = $scope.to.options;
      const opts = $scope.options;

      $scope.uploadStatus = 'none';
      $scope.fileName = "Escolha um arquivo";
      $scope.onStarted = function(upload){
        $scope.fileName = upload.fileName;
        $scope.uploadStatus = 'processing';
      }

      $scope.onSuccess= function (upload) {
        $scope.fileName = upload.fileName;
        $scope.uploadStatus = 'success';
      }
      initInternalModel();

      function initInternalModel() {
        //init model
        if ($scope.model[opts.key]) {
          var str = $scope.model[opts.key];
          var pieces = str.split(/\//);
          $scope.fileName = pieces[pieces.length - 1];
        }
      }
    }
  });


}
