'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function fileUploadConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'file-upload',
        template: require('./file-upload.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            $scope.opts = $scope.to.options;
            var opts = $scope.options;
            $scope.uploadStatus = 'none';
            $scope.fileName = "Escolha um arquivo";
            $scope.onStarted = function (upload) {
                $scope.fileName = upload.fileName;
                $scope.uploadStatus = 'processing';
            };
            $scope.onSuccess = function (upload) {
                if (opts.templateOptions.metaDataKey) {
                    var metadata = upload;
                    metadata.$dirty = true;
                    $scope.model[opts.templateOptions.metaDataKey] = metadata;
                }
                $scope.fileName = upload.fileName;
                $scope.uploadStatus = 'success';
            };
            initInternalModel();
            function initInternalModel() {
                if ($scope.model[opts.templateOptions.metaDataKey]) {
                    var metadata = $scope.model[opts.templateOptions.metaDataKey];
                    $scope.model[opts.key] = metadata.fileName;
                }
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
exports.fileUploadConfig = fileUploadConfig;
//# sourceMappingURL=file-upload.config.js.map