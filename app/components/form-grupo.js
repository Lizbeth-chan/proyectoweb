import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
  actions:{
    save(){
      let grupo = this.get('grupo');
        if(Ember.isBlank(grupo.get('identificador'))){
            alert('el campo del identificador no puede estar vacio')
            return
        }else if (Ember.isBlank(grupo.get('periodo'))){
            alert('El campo de periodo no puede estar vacio')
            return
        }
        grupo.save().then(()=>{
          this.sendAction('didSave');
        });
          // grupo.save().then(()=>{
          //   Ember.RSVP.all(this.get('grupo.alumnos').invoke('save')).then(()=>{
          //     this.sendAction('didSave');
          //   })
          // })
    },
    saveAlumno(){
    },
    destroyAlumno(){
      console.log('eliminar alumno')
    },
}
});
