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
});

export default Router;
