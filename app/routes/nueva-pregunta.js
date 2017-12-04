import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(params){
    return this.get('store').findRecord('examen', params.idp)

  },
  afterModel(model){
    this.set('pregunta', model.get('preguntas').createRecord())
  },
  setupController(controller){
    this._super(...arguments)
    controller.set('pregunta', this.get('pregunta'))
  },
});
