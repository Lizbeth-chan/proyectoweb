import DS from 'ember-data';

export default DS.Model.extend({
	identificador: DS.attr('string'),
preg: DS.attr('string'),
examen: DS.belongsTo('examen'),
respuestas: DS.hasMany('respuesta')
});
