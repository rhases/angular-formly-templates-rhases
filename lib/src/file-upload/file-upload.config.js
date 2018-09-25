'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('lodash');
function fileUploadConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'file-upload',
        template: require('./file-upload.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            $scope.opts = $scope.to.options;
            var opts = $scope.options;
            var to = $scope.to;
            if (to.submodel) {
                $scope.localModel = _.get($scope.model, to.submodel);
            }
            else {
                $scope.localModel = $scope.model;
            }
            var defaultLabels = {
                chooseSingleFileButtonLabel: 'Anexar arquivo...',
                chooseMultipeFilesButtonLabel: 'Anexar arquivos...'
            };
            $scope.labels = {
                chooseSingleFileButtonLabel: to.chooseSingleFileButtonLabel || defaultLabels.chooseSingleFileButtonLabel,
                chooseMultipeFilesButtonLabel: to.chooseMultipeFilesButtonLabel || defaultLabels.chooseMultipeFilesButtonLabel,
            };
            $scope.multipleFiles = opts.templateOptions.multipleFiles;
            $scope.onStarted = function (upload) {
                if ($scope.multipleFiles) {
                    $scope.fileMetadata.push(upload);
                }
                else {
                    if (opts.templateOptions.metaDataKey) {
                        upload.$dirty = true;
                        $scope.localModel[opts.templateOptions.metaDataKey] = upload;
                    }
                    $scope.fileMetadata = upload;
                }
            };
            $scope.remove = function (index) {
                var removed = $scope.fileMetadata.splice(index, 1)[0];
                var modelIndex = $scope.localModel[opts.key].indexOf(removed.url);
                $scope.localModel[opts.key].splice(modelIndex, 1);
            };
            initInternalModel();
            function initInternalModel() {
                $scope.fileMetadata = opts.templateOptions.metaDataKey && $scope.localModel[opts.templateOptions.metaDataKey];
                if ($scope.fileMetadata)
                    return;
                if ($scope.multipleFiles) {
                    if (!_.isArray($scope.localModel[opts.key]))
                        $scope.localModel[opts.key] = _.compact([$scope.localModel[opts.key]]);
                    $scope.fileMetadata = $scope.localModel[opts.key].map(initMetadata);
                }
                else {
                    $scope.fileMetadata = initMetadata($scope.localModel[opts.key]);
                }
            }
            function initMetadata(url) {
                if (!url)
                    return;
                var pieces = url.split(/\//);
                return {
                    url: url,
                    fileName: pieces[pieces.length - 1],
                    status: 'success',
                };
            }
        }
    });
}
exports.fileUploadConfig = fileUploadConfig;
//# sourceMappingURL=file-upload.config.js.map