import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('inicio');
  this.route('lista-materias');
  this.route('lista-examenes');
  this.route('nueva-materia');
  this.route('materia-detail', {path: '/materia-detail/:clave'});
  this.route('grupo-detail', {path: '/grupo-detail/:id'});
  this.route('nuevo-grupo', {path: '/nuevo-grupo/:idm'});
  this.route('nuevo-examen');
  this.route('examen-detail',  {path: '/examen-detail/:ide'});
  this.route('nueva-pregunta',  {path: '/nueva-pregunta/:idp'});
  this.route('pregunta-detail',  {path: '/pregunta-detail/:pd'});
});

export default Router;
