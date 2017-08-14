export function s3FileUploadDirective($http, $q) {
  'ngInject';
  return {
    require: 'ngModel',
    scope: {
      's3SignRequestUri': '<',
      's3FileNamePrefix': '<',
      's3Bucket': '<',
      's3FileUrl': '=',
      's3UploadStatus': '='
    },
    link: function(scope, el, attrs, ngModelController) {
      el.bind('change', function(event) {
        var files = event.target.files;
        scope.$apply(function() {
          ngModelController.$setViewValue(files[0], 'change');
        })
      });


      scope.ngModelController = ngModelController
    },
    controller: function($scope, $http, $log, $element) {
      'ngInject';

      var ngModelController = $element.controller('ngModel');
      var uploading;

      ngModelController.$parsers.push(function(file) {
        'use strict';
        if (!file || !file.name) { return; }

        $scope.s3UploadStatus = 'processing';

        // Get The PreSigned URL
        uploading = signRequest(file)
          .then(sendToS3(file))
          .then(function (s3FileUrl) {
            $scope.s3FileUrl = s3FileUrl
            return s3FileUrl;
          })
          .catch(function(err) {
            $log.error(err);
            $scope.s3UploadStatus = 'failed';
            alert("An Error Occurred Attaching Your File");
          })

        return file;
      });

      ngModelController.$asyncValidators.upload = function(modelValue, viewValue) {
        var value = modelValue || viewValue;

        // Lookup user by username
        return uploading
          .then(function() {
            return true;
          })
      };

      function signRequest(file) {
        return $http.post($scope.s3SignRequestUri, {
          filename: $scope.s3FileNamePrefix + file.name,
          type: fileType(file),
          bucket: $scope.s3Bucket
        })
      }

      function sendToS3(file) {
        return function(result) {
          var preSignedResp = result.data.signedRequest;
          // Perform The Push To S3
          return $http.put(preSignedResp, file, { headers: { 'Content-Type': fileType(file) } })
            .then(function(resp) {
              $scope.s3UploadStatus = 'success';
              return result.data.url;
            })
        }
      }

      function fileType(file) {
        return file.type || 'application/octet-stream';
      }
    }
  };
}
