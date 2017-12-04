import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    veAlaLista(id){
      // return this.transitionToRoute('materia-detail', id);
      this.get('model').save().then((grupo)=>{
        this.transitionToRoute('materia-detail', id)
      })
    },
  }

});
