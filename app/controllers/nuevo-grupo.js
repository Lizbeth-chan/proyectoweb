import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    veAlaLista(id){
      return this.transitionToRoute('materia-detail', id);
    }
  }

});
