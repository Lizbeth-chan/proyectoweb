import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    veAlaLista(id){
     
      this.get('model').save().then((pregunta)=>{
        this.transitionToRoute('examen-detail', id)
      })
    },
  }
});
