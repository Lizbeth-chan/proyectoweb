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
