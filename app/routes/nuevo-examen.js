import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  let examen = this.get('store').createRecord('examen', {});
  examen.save();
  return examen;
},
});
