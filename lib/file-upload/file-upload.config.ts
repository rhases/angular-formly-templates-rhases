'use strict';

export function fileUploadConfig(formlyConfigProvider) {
  'ngInject';

  formlyConfigProvider.setType({
    name: 'file-upload',
    template: require('./file-upload.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        scope.file = file;
        scope.$parent.file = file;
        scope.$apply();
        scope.fileUpload(file);
      });
      scope.isLoading = false;
      scope.uploadCompleted = false;
    },
    controller: /* @ngInject */ function($scope, $http, $log) {
      const opts = $scope.options;
      $scope.fileUpload = function(file){
        'use strict';
        if(!file || !file.name) { return; }

        $scope.isLoading = true;

        // Get The PreSigned URL
        $http.post(opts.templateOptions.signRequestUri,{
          filename: opts.templateOptions.fileNamePrefix + file.name,
          type: file.type,
          bucket:opts.templateOptions.bucket
        })
        .then(function(result) {
          var preSignedResp = result.data.signedRequest;
          $scope.isLoading = false;
          $scope.uploadCompleted = true;
          // Perform The Push To S3
          $http.put(preSignedResp, file,
              {headers: {'Content-Type': file.type}})
            .then(function(resp) {
              $scope.model[opts.key] = preSignedResp.url;
            })
            .catch(function(resp) {
              alert("An Error Occurred Attaching Your File");
            });
        })
        .catch(function(err) {
          //TODO add error to the interface
          $log.error(err);
        });
      }
    }
  });

}
