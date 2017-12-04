import DS from 'ember-data';

export default DS.Model.extend({
  id_examen: DS.attr('string'),
  fecha: DS.attr('string'),
  alumnos: DS.belongsTo('alumno'),
  grupo:  DS.belongsTo('grupo'),
  materia: DS.belongsTo('materia'),
  profesor: DS.belongsTo('profesor'),
  preguntas: DS.hasMany('pregunta')
});
