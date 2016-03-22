import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      { name: "John Snow" },
      { name: "Robert Baratheon" }
    ];
  }
});
