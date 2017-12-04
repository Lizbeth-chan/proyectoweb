import DS from 'ember-data';

export default DS.Model.extend({
  identificador: DS.attr('string'),
  respuesta: DS.attr('string'),
  alumno: DS.belongsTo('alumno'),
  correcta: false,
  incorrecta: false

});
