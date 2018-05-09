'use strict';
var _ = require('lodash');

export function fileUploadConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'file-upload',
    template: require('./file-upload.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function ($scope) {

      $scope.opts = $scope.to.options;
      const opts = $scope.options;
      const to = $scope.to;
      
      const defaultLabels = { 
        chooseSingleFileButtonLabel: 'Anexar arquivo...',
        chooseMultipeFilesButtonLabel: 'Anexar arquivos...'
      };
      
      $scope.labels = { 
        chooseSingleFileButtonLabel: to.chooseSingleFileButtonLabel || defaultLabels.chooseSingleFileButtonLabel,
        chooseMultipeFilesButtonLabel: to.chooseMultipeFilesButtonLabel || defaultLabels.chooseMultipeFilesButtonLabel,
      };

      $scope.multipleFiles = opts.templateOptions.multipleFiles;

      $scope.onStarted = function(upload) {
        if($scope.multipleFiles) {
          $scope.fileMetadata.push(upload);
        } else {
          if (opts.templateOptions.metaDataKey) {
            upload.$dirty = true;
            $scope.model[opts.templateOptions.metaDataKey] = upload;
          }
          $scope.fileMetadata = upload;
        }
      }

      $scope.remove = function(index) {
        var removed = $scope.fileMetadata.splice(index, 1)[0];
        var modelIndex = $scope.model[opts.key].indexOf(removed.url);
        $scope.model[opts.key].splice(modelIndex, 1)
      }

      initInternalModel();

      function initInternalModel() {
        $scope.fileMetadata = opts.templateOptions.metaDataKey && $scope.model[opts.templateOptions.metaDataKey];
        if($scope.fileMetadata)
          return;

        if($scope.multipleFiles) {
          if(!_.isArray($scope.model[opts.key])) 
            $scope.model[opts.key] = _.compact([$scope.model[opts.key]]);
          
          $scope.fileMetadata = $scope.model[opts.key].map(initMetadata);
        } else {
          $scope.fileMetadata = initMetadata($scope.model[opts.key]);
        }
      }

      function initMetadata(url) {
        if(!url) return;
        var pieces = url.split(/\//);
        return {
          url: url,
          fileName: pieces[pieces.length - 1],
          status: 'success',
        }
      }
    }
  });


}
