import Ember from 'ember';

export default Ember.Route.extend({
    store: Ember.inject.service(),
    model(params){
      return this.get('store').findRecord('materia', params.idm)

    },
    afterModel(model){
      this.set('grupo', model.get('grupos').createRecord())
    },
    setupController(controller){
      this._super(...arguments)
      controller.set('grupo', this.get('grupo'))
    },

});

// save(){
//   let materia= this.get('materia');
//   // if(Ember.isBlank(materia.get('nombre'))){
//   //   alert('El campo de nombre no puede estar vacio');
//   //   return;
//   // }
//   materia.save().then(()=>{
//     Ember.RSVP.all(this.get('materia.grupos').invoke('save')).then(()=>{
//       this.sendAction('didSave');
//     })
//   })
