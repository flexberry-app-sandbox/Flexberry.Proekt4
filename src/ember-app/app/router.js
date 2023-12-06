import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt4-карт-доступ-l');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('i-i-s-proekt4-справ-дол-l');
  this.route('i-i-s-proekt4-справ-дол-e',
  { path: 'i-i-s-proekt4-справ-дол-e/:id' });
  this.route('i-i-s-proekt4-справ-дол-e.new',
  { path: 'i-i-s-proekt4-справ-дол-e/new' });
  this.route('i-i-s-proekt4-справ-клас-l');
  this.route('i-i-s-proekt4-справ-клас-e',
  { path: 'i-i-s-proekt4-справ-клас-e/:id' });
  this.route('i-i-s-proekt4-справ-клас-e.new',
  { path: 'i-i-s-proekt4-справ-клас-e/new' });
  this.route('i-i-s-proekt4-справ-род-l');
  this.route('i-i-s-proekt4-справ-род-e',
  { path: 'i-i-s-proekt4-справ-род-e/:id' });
  this.route('i-i-s-proekt4-справ-род-e.new',
  { path: 'i-i-s-proekt4-справ-род-e/new' });
  this.route('i-i-s-proekt4-справ-сотр-l');
  this.route('i-i-s-proekt4-справ-сотр-e',
  { path: 'i-i-s-proekt4-справ-сотр-e/:id' });
  this.route('i-i-s-proekt4-справ-сотр-e.new',
  { path: 'i-i-s-proekt4-справ-сотр-e/new' });
  this.route('i-i-s-proekt4-справ-учен-l');
  this.route('i-i-s-proekt4-справ-учен-e',
  { path: 'i-i-s-proekt4-справ-учен-e/:id' });
  this.route('i-i-s-proekt4-справ-учен-e.new',
  { path: 'i-i-s-proekt4-справ-учен-e/new' });
});

export default Router;
