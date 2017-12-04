import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
  actions:{
    save(){

        let grupo = this.get('grupo');
        if(Ember.isBlank(grupo.get('identificador'))){
          alert('El campo de identificador no puede estar vacio');
          return
        } else if (Ember.isBlank(grupo.get('periodo'))){
          alert('El campo de periodo no puede estar vacio')
          return
        }
        grupo.save().then(()=>{
          this.sendAction('didSave');
        });
    },
    saveAlumno(){
      // this.get('materia').get('grupos').get('alumnos').createRecord()
  },
    destroyAlumno(){
      console.log('eliminar alumno')
    },
}
});
