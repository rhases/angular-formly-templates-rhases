"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require('q');
function s3FileUploadDirective($http, $q) {
    'ngInject';
    return {
        require: 'ngModel',
        scope: {
            's3SignRequestUri': '<',
            's3FileNamePrefix': '<',
            's3Bucket': '<',
            's3Options': '<',
            's3FileUrl': '=',
            's3FilesQueue': '=',
            's3OnStarted': '&',
            's3OnSuccess': '&',
            's3OnProgress': '& ',
        },
        link: function (scope, el, attrs, ngModelController) {
            el.bind('change', function (event) {
                var files = event.target.files;
                scope.$apply(function () {
                    ngModelController.$setViewValue(files[0], 'change');
                });
            });
            scope.ngModelController = ngModelController;
        },
        controller: function ($scope, $http, $log, $element) {
            'ngInject';
            var ngModelController = $element.controller('ngModel');
            var uploading;
            var queue;
            var options = $scope.s3Options || {};
            options.s3SignRequestUri = $scope.s3SignRequestUri || options.s3SignRequestUri;
            options.s3FileNamePrefix = $scope.s3FileNamePrefix || options.s3FileNamePrefix;
            options.s3Bucket = $scope.s3Bucket || options.s3Bucket;
            if ($scope.s3FilesQueue) {
                queue = $scope.s3FilesQueue;
            }
            else {
                queue = [];
            }
            ngModelController.$parsers.push(function (file) {
                'use strict';
                if (!file || !file.name) {
                    return;
                }
                var uploadingFile = {
                    url: undefined,
                    fileName: file.name,
                    status: 'processing',
                    size: file.size,
                    type: fileType(file),
                    ext: fileExt(file)
                };
                queue.push(uploadingFile);
                if ($scope.s3OnStarted) {
                    $scope.s3OnStarted({ uploadedFile: uploadingFile });
                }
                uploading = signRequest(file)
                    .then(sendToS3(file, uploadingFile))
                    .then(function (s3FileUrl) {
                    $scope.s3FileUrl = s3FileUrl;
                    uploadingFile.url = s3FileUrl;
                    uploadingFile.status = 'success';
                    if ($scope.s3OnSuccess) {
                        $scope.s3OnSuccess({ uploadedFile: uploadingFile });
                    }
                    return s3FileUrl;
                })
                    .catch(function (err) {
                    $log.error(err);
                    uploadingFile.status = 'failed';
                    alert('An Error Occurred Attaching Your File');
                });
                return file;
            });
            ngModelController.$asyncValidators.upload = function (modelValue, viewValue) {
                if (!uploading)
                    return Q.when();
                var value = modelValue || viewValue;
                return uploading
                    .then(function () {
                    return true;
                });
            };
            function signRequest(file) {
                return $http.post(options.s3SignRequestUri, {
                    filename: options.s3FileNamePrefix + file.name,
                    type: fileType(file),
                    bucket: options.s3Bucket
                });
            }
            function sendToS3(file, uploadingFile) {
                return function (result) {
                    var preSignedResp = result.data.signedRequest;
                    var onProgress = function (x) { };
                    if ($scope.s3OnProgress) {
                        onProgress = $scope.s3OnProgress;
                    }
                    return upload(file, preSignedResp, { headers: { 'Content-Type': fileType(file) } })
                        .then(function (response) {
                        console.log('success :) ', response);
                        return response;
                    }, function (err) {
                        console.log('failed :(', err);
                    }, function (e) {
                        console.log('.');
                        onProgress({ event: e, uploadingFile: uploadingFile });
                    })
                        .then(function (resp) {
                        $scope.s3UploadStatus = 'success';
                        return result.data.url;
                    });
                };
            }
            function upload(data, url, headers) {
                var defer = $q.defer();
                $http({
                    method: 'PUT',
                    data: data,
                    url: url,
                    headers: headers,
                    uploadEventHandlers: {
                        progress: function (e) {
                            defer.notify(e);
                        }
                    }
                }).then(defer.resolve.bind(defer), defer.reject.bind(defer));
                return defer.promise;
            }
            function fileType(file) {
                return file.type || 'application/octet-stream';
            }
            function fileExt(file) {
                if (file.type) {
                    return file.type.split('/')[1];
                }
                else if (file.name) {
                    return file.name.split('.')[1];
                }
                return '';
            }
        }
    };
}
exports.s3FileUploadDirective = s3FileUploadDirective;
//# sourceMappingURL=s3-file-upload-directive.directive.js.map