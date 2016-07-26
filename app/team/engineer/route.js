import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return [
      {
        id: 1,
        name: 'Shireen',
        department: 'Software',
        age: 23
      },
      {
        id: 2,
        name: 'Jason',
        department: 'Mechanical',
        age: 25
      },
      {
        id: 3,
        name: 'Marvin',
        department: 'Electrical',
        age: 30
      },
    ][params.engineer_id - 1];
}
});
