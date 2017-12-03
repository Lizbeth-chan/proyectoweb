import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
  actions:{
    save(){
      let grupo = this.get('grupo');
      console.log(grupo)
      debugger
        if(Ember.isBlank(grupo.get('identificador'))){
            alert('el campo del identificador no puede estar vacio')
        }else if (Ember.isBlank(grupo.get('periodo'))){
            alert('El campo de periodo no puede estar vacio')
          }
          grupo.save();
          // grupo.save().then(()=>{
          //   Ember.RSVP.all(this.get('grupo.alumnos').invoke('save')).then(()=>{
          //     this.sendAction('didSave');
          //   })
          // })
    },
    saveAlumno(){
      this.get('materia').get('grupos').get('alumnos').createRecord()
  },
    destroyAlumno(){
      console.log('eliminar alumno')
    },
}
});
