export default function ageInputsDirective(): {
    template: any;
    scope: {
        model: string;
        agesOptionsToInclude: string;
        onChange: string;
    };
    controller: ($scope: any) => void;
};
