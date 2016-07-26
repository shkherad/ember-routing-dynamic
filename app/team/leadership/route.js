import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Jeff',
        department: 'HR',
        age: 23
      },
      {
        id: 2,
        name: 'Brian',
        department: 'Culture',
        age: 25
      },
      {
        id: 3,
        name: 'Jason',
        department: 'CEO',
        age: 30
      },
    ];
  }
});
