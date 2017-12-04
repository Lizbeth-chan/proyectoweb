import DS from 'ember-data';

export default DS.Model.extend({
	  identificador: DS.attr('string'),
  respuesta: DS.attr('string'),
  alumno: DS.belongsTo('alumno'),
  pregunta: DS.belongsTo('pregunta'),
  correcta: false,
  incorrecta: false
});
