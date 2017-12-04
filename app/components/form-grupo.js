import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
  actions:{
    save(){

        let grupo = this.get('grupo');

        grupo.save().then(()=>{
          Ember.RSVP.all(this.get('grupo.alumnos').invoke('save')).then(()=>{
              this.sendAction('didSave');
          })
        });
    },
    saveAlumno(){
      this.get('grupo').get('alumnos').createRecord();
  },
    destroyAlumno(){
      console.log('eliminar alumno')
    },
}
});
