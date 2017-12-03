import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    this.get('store').get('materia', params).createRecord('grupo');
    return this.get('store').createRecord('grupo');
  }
});
