export default function ageInputsDirective(): {
    template: any;
    scope: {
        model: string;
        rootModel: string;
        agesOptionsToInclude: string;
        onChange: string;
    };
    controller: ($scope: any, $parse: any, $timeout: any) => void;
};
