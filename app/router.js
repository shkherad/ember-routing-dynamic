import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('about');
  this.route('products');
  this.route('product', {path: '/products/:product_id'});
  this.route('team', function() {
    this.route('leadership');
    this.route('engineering');
    this.route('sales');
  });
  this.route('contact', function() {
    this.route('boston');
    this.route('nyc');
  });
});

export default Router;
