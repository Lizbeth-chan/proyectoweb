import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
actions:{
  save(){
      let pregunta = this.get('pregunta');
      console.log(pregunta);
      pregunta.save().then(()=>{
        Ember.RSVP.all(this.get('pregunta.respuestas').invoke('save')).then(()=>{
            this.sendAction('didSave');
        })
      });
  },
  saveRespuesta(){
    this.get('store').get('pregunta').get('respuestas').createRecord();
},
  destroyPregunta(){
    console.log('eliminar pregunta')
  },
}
});
