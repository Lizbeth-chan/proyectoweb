import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service('store'),
actions: {
  borrar(examen){
    examen.get('preguntas').invoke('destroyRecord')
    examen.destroyRecord()
  }
}
});
