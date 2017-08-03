import  module  from './module';

describe('module exports', () => {

   it('module should default to the name of the module', () => {
      expect(module).toBe('angular-formly-templates-rhases');
   });

});
