import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      { name: 'Sansa Stark' },
      { name: 'Tyrion Lannister' }
    ];
  }
});
