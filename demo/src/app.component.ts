const angular = require('angular');

export class MainController {

  userFields = [
      // TODO: O plano é para                             [big buttons]
      // TODO: Local (cidade/estado)                       2 x [combo]
      // TODO: Possui empresa                             [radio] s/n
      // TODO: Ocupação?                                  [combo] list
      // TODO: Quem será incluido no plano?               [checkbox] list
      // TODO: Idades                                     [agesInput]
      // TODO: Contatos                                   3 x [input]
      // TODO: Como prefere ser contactado                [radio] list
      // TODO: Quanto está disposto a investir            [input money] list

      // {
      //   key: 'to',
      //   type: 'big-buttons',
      //   templateOptions: {
      //     label: 'O plano é para:',
      //     options: [
      //       { name: 'Você', value: 'you', image: '/assets/images/health-insurance-form/voce.png' },
      //       { name: 'Você e sua família', value: 'family', image: '/assets/images/health-insurance-form/familia.png' },
      //       { name: 'Empresa', value: 'business', image: '/assets/images/health-insurance-form/empresa.png' },
      //       { name: 'Outra pessoa', value: 'another', image: '/assets/images/health-insurance-form/outro.png' },
      //     ]
      //   }
      // },
      //
      //
      // Family Ages
      {
        key: 'ages',
        type: 'age-inputs',
        templateOptions: {
          label: "Idades da família:",
          options: [
            {
              id: 'himself',
              label: 'Você',
              max: 1,
              default: true,
              notRemove: true
            },
            {
              id: 'partner',
              label: 'Conjugê',
              max: 1,
              default: true
            },
            {
              id: 'son',
              label: 'Filho',
              max: 10,
            },
            {
              id: 'father',
              label: 'Pai',
              max: 1,
            },
            {
              id: 'mother',
              label: 'Mãe',
              max: 1,
            },
            {
              id: 'brotherinlaw',
              label: 'Cunhado',
              max: 10,
            }
          ]
        }
      },

      // Business Ages
      {
        key: 'businessAges',
        type: 'grouped-age-inputs',
        templateOptions: {
          label: "Idades dos participantes do plano:",
          options: [
            {
              id: 'employee',
              label: 'Funcionário',
              groupLabel: 'Funcionários',
              max: 99,
              default: true,
              dependents: [
                {
                  id: 'himself',
                  label: 'Dele', //  {{$index+1}}
                  max: 1,
                  default: true,
                  notRemove: true
                },
                {
                  id: 'partner',
                  label: 'Conjugê',
                  max: 1
                }
              ]
            },
            {
              id: 'partner',
              label: 'Sócio',
              groupLabel: 'Sócios',
              max: 99,
              dependents: [
                {
                  id: 'himself',
                  label: 'Dele', //  {{$index+1}}
                  max: 1,
                  default: true,
                  notRemove: true
                },
                {
                  id: 'partner',
                  label: 'Conjugê',
                  max: 1,
                  default: true
                },
                {
                  id: 'son',
                  label: 'Filho',
                  max: 10,
                },
              ]
            },

          ]
        }
      },

      // {
      //   key: 'who',
      //   type: 'multiCheckbox',
      //   templateOptions: {
      //     label: 'Quem será incluido no plano?',
      //     options: [{ id: 1, title: 'Cônjuge' }, { id: 2, title: 'Pai' }, { id: 3, title: 'Fiho' }, { id: 4, title: 'Irmão' }],
      //     valueProp: 'id',
      //     labelProp: 'title'
      //   }
      // },
      //
      // {
      //   key: 'business',
      //   type: 'radio',
      //   templateOptions: {
      //     label: 'Possui empresa ou MEI com CNPJ?',
      //     options: [ { 'name': 'Sim', 'value': 'y' }, { 'name': 'Não', 'value': 'n' } ]
      //   }
      // },
      //
      // {
      //   key: 'preferContactBy',
      //   type: 'radio',
      //   templateOptions: {
      //     label: 'Como prefere ser contatado?',
      //     options: [ { 'name': 'Whatsapp', 'value': 'whatsapp' }, { 'name': 'Telefone', 'value': 'phone' }, { 'name': 'Email', 'value': 'email' }, { 'name': 'Não quero ser contactado', 'value': '-' } ]
      //   }
      // },
      //
      // {
      //   key: 'occupation',
      //   type: 'select',
      //   templateOptions: {
      //     label: 'Ocupação? ',
      //     valueProp: 'name',
      //     options: [
      //       {
      //         name: 'Médico'
      //       },
      //       {
      //         name: 'Dentista'
      //       },
      //       {
      //         name: 'Servidor Público'
      //       },
      //       {
      //         name: 'Açougueiro',
      //         group: 'Outros'
      //       },
      //       {
      //         name: 'Do lar',
      //         group: 'Outros'
      //       }
      //     ]
      //   }
      // },

      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email'
        }
      },
      // {
      //   key: 'checked',
      //   type: 'checkbox',
      //   templateOptions: {
      //     label: 'Check me out'
      //   }
      // },
      {
        key: 'policy-file',
        type: 'file-upload',
        templateOptions: {
          label: 'Apólice',
          bucket: 'rhases-users',
          fileNamePrefix: 'apolice/',
          required: true,
          signRequestUri: 'http://hi-seller-ws-homolog.herokuapp.com' +
          '/api/s3-upload/preSignedUrlForUserHome'
        },
        validation: {
          messages: {
            required: '"campo " + to.label + " é obrigatório "'
          }
        }
      },
    ];

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
