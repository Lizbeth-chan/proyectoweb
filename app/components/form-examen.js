import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions:{
    save(){
      let examen= this.get('examen');

      examen.save().then(()=>{
        Ember.RSVP.all(this.get('examen.preguntas').invoke('save')).then(()=>{
          this.sendAction('didSave');
        })
      })
    },
    destroyGrupo(m, gr){
    m.get('preguntas').forEach((item)=>{
      if(item.id == gr.id) gr.destroyRecord();
    })

    },
  }
});
