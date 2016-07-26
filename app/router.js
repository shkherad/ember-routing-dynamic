import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('about');
  this.route('team', function() {
    this.route('leadership');
    this.route('engineering');
    this.route('engineer', {path: '/engineering/:engineer_id'});
    this.route('leader', {path: '/leadership/:leader_id'});
  });
  this.route('contact', function() {
    this.route('boston');
    this.route('nyc');
  });
  this.route('products');
  this.route('product', {path: '/products/:product_id'});
});

export default Router;
