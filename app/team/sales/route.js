import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      { name: 'Roos Bolton' },
      { name: 'Arya Stark' },
    ];
  }
});
