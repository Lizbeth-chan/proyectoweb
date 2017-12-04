import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  let materia = this.get('store').createRecord('materia', {});
  materia.save();
  return materia;
},

actions:{
  willTransition(transition){
    this.get('currentModel').rollbackAttributes();
    //ember documentacion
  },


}
});
// return this.get('store').createRecord('grupo');
