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
        if (opts.templateOptions.metaDataKey){
          let metadata = upload;
          metadata.$dirty = true;
          $scope.model[opts.templateOptions.metaDataKey] = metadata;
        }
        $scope.fileName = upload.fileName;
        $scope.uploadStatus = 'success';
      }

      initInternalModel();

      function initInternalModel() {
        //init model
        if ($scope.model[opts.templateOptions.metaDataKey]){
          let metadata = $scope.model[opts.templateOptions.metaDataKey];
          $scope.model[opts.key] = metadata.fileName;
        }

        //init fileName
        if ($scope.model[opts.key]) {
          var str = $scope.model[opts.key];
          var pieces = str.split(/\//);
          $scope.fileName = pieces[pieces.length - 1];
          $scope.uploadStatus = 'success';
        }
      }
    }
  });


}
