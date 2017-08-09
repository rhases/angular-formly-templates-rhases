export declare function s3FileUploadDirective($http: any, $q: any): {
    require: string;
    scope: {
        's3SignRequestUri': string;
        's3FileNamePrefix': string;
        's3Bucket': string;
        's3FileUrl': string;
        's3UploadStatus': string;
    };
    link: (scope: any, el: any, attrs: any, ngModelController: any) => void;
    controller: ($scope: any, $http: any, $log: any, $element: any) => void;
};
