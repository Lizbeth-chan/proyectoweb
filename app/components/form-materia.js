import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions:{
    save(){
      let materia= this.get('materia');

      materia.save().then(()=>{
        Ember.RSVP.all(this.get('materia.grupos').invoke('save')).then(()=>{
          this.sendAction('didSave');
        })
      })

      console.log(materia)
    },
    destroyGrupo(m, gr){
    m.get('grupos').forEach((item)=>{
      if(item.id == gr.id) gr.destroyRecord();
    })

		},
  }
});
