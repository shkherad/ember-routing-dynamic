import Ember from 'ember';

var i = 0;

export default Ember.View.extend({
  click: function(event){
    i += 1;
    console.log("I've been clicked " + i + " time(s).");
  }
});
