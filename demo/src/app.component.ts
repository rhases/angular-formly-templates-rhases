const angular = require('angular');

export class MainController {

  userFields = [
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
        key: 'who',
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
              notRemove: true,
            },
            {
              id: 'partner',
              label: 'Conjugê',
              max: 1,
              default: true,
              ifIncludedIn: "scope.who",
            },
            {
              id: 'son',
              label: 'Filho',
              max: 10,
              default: true,
              ifIncludedIn: "scope.who",
            },
            {
              id: 'father',
              label: 'Pai',
              max: 1,
              ifIncludedIn: "scope.who",
            },
            {
              id: 'mother',
              label: 'Mãe',
              max: 1,
              default: true,
              ifIncludedIn: "scope.who",
            },
            {
              id: 'brotherinlaw',
              label: 'Cunhado',
              max: 10,
              ifIncludedIn: "scope.who",
            }
          ]
        }
      },
      {
        key: 'ages',
        type: 'holder-age-inputs',
        templateOptions: {
          label: 'Idades dos integrantes do plano empresarial:',
          options: { id: 'employer', label: 'Sócio', groupLabel: 'Sócios', max: 199, default: true,
            dependents: [
              { id: 'partner', label: 'Cônjuge', max: 1, default: true },
              { id: 'son', label: 'Filho/Enteado', max: 99 },
              { id: 'father', label: 'Pai', max: 1, },
              { id: 'mother', label: 'Mãe', max: 1, }
          ]}
        }
      }
    ];

  user = {
    "who": [
      'partner'
    ]
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
