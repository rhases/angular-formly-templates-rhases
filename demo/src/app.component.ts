const angular = require('angular');

export class MainController {

  userFields = [
      {
        key: 'money',
        type: 'currency',
        templateOptions: {
          label: 'Quer pagar quanto:',
        }
      },
      {
        key: 'cpf',
        type: 'cpf',
        templateOptions: {
          label: 'CPF:',
          required: true
        }
      },
      {
        key: 'cnpj',
        type: 'cnpj',
        templateOptions: {
          label: 'CNPJ:',
        }
      },
      {
        key: 'dateUtc',
        type: 'utc-date',
        templateOptions: {
          label: 'Data UTC:',
        }
      },
      {
        key: 'billingPeriod',
        type: 'utc-date',
        templateOptions: {
          label: 'Competência:',
          mask: '99/9999',
          dateFormat: 'MMYYYY'
        }
      },
      {
        key: 'date',
        type: 'date',
        templateOptions: {
          label: 'Data:',
        }
      },
      {
        key: 'to',
        type: 'big-buttons',
        templateOptions: {
          label: 'O plano é para:',
          options: [
            { name: 'Você', value: 'you', image: '/assets/images/health-insurance-form/voce.png' },
            { name: 'Você e sua família', value: 'family', image: '/assets/images/health-insurance-form/familia.png' },
            { name: 'Empresa', value: 'business', image: '/assets/images/health-insurance-form/empresa.png' },
            { name: 'Outra pessoa', value: 'another', image: '/assets/images/health-insurance-form/outro.png' },
          ]
        }
      },

      {
        key: 'dependents',
        type: 'multiCheckbox',
        templateOptions: {
          label: 'Quem será incluido no plano?',
          options: [{ id: 'partner', title: 'Cônjuge' }, { id: 'son', title: 'Filho' }, { id: 'father', title: 'Pai' }, { id: 'mother', title: 'Mãe' }, { id: 'brotherinlaw', title: 'Cunhado' }],
          valueProp: 'id',
          labelProp: 'title'
        }
      },

      // Family Ages
      {
        key: 'holders',
        type: 'holder-age-inputs',
        templateOptions: {
          label: 'Idades da família:',
          options: { id: 'holder', label: 'Titular', min:1, max: 1, default: true,
            dependents: [
              { id: 'partner', label: 'Cônjuge', max: 1, default: true, ifIncludedIn: 'scope.dependents' },
              { id: 'son', label: 'Filho/Enteado', max: 99, default: true, ifIncludedIn: 'scope.dependents' },
              { id: 'father', label: 'Pai', max: 1, default: true, ifIncludedIn: 'scope.dependents' },
              { id: 'mother', label: 'Mãe', max: 1, default: true, ifIncludedIn: 'scope.dependents' }
          ]}
        }
      },
      {
        key: 'holders',
        type: 'holder-age-inputs',
        templateOptions: {
          label: 'Idades dos integrantes do plano empresarial:',
          options: { id: 'employer', label: 'Sócio', groupLabel: 'Sócios', max: 199, default: true,
            dependents: [
              { id: 'partner', label: 'Cônjuge', max: 1 },
              { id: 'son', label: 'Filho/Enteado', max: 99 },
              { id: 'father', label: 'Pai', max: 1 },
              { id: 'mother', label: 'Mãe', max: 1 }
          ]}
        }
      },
      {
        key: 'fileUrl',
        type: 'file-upload',
        templateOptions: {
          label: 'Arquivo:',
          bucket: 'rhases-user-insurance-data',
          fileNamePrefix: 'teste/',
          signRequestUri:  'http://hi-seller.homolog.api.rhases.com.br/api/s3-upload/preSignedUrlForUserHome',
          required: false
        },
        validation: {
          messages: {
            required: '"campo " + to.label + " é obrigatório "'
          }
        }
      },
      {
        key: 'attachments',
        type: 'file-upload',
        templateOptions: {
          label: 'Anexos:',
          bucket: 'rhases-user-insurance-data',
          fileNamePrefix: 'teste-attachments/',
          signRequestUri:  'http://hi-seller.homolog.api.rhases.com.br/api/s3-upload/preSignedUrlForUserHome',
          multipleFiles: true,
          required: false
        },
        validation: {
          messages: {
            required: '"campo " + to.label + " é obrigatório "'
          }
        }
      }
    ];

  user = {
    "dependents": [
      'partner'
    ],
    dateUtc: "1985-10-08T00:00:00.000Z",
    date: "2018-01-05T03:00:00.000Z",
    cpf: "642476195",
    cnpj: "6069286000148"
  };

  /*@ngInject*/
  constructor() {

  }

  // $onInit() {
  //   this.$http.get('/api/things').then(response => {
  //     this.awesomeThings = response.data;
  //   });
  //}
  // addThing() {
  //   if (this.newThing) {
  //     this.$http.post('/api/things', { name: this.newThing });
  //     this.newThing = '';
  //   }
  // }
  //
  // deleteThing(thing) {
  //   this.$http.delete('/api/things/' + thing._id);
  // }
}
