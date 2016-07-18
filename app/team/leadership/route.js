import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        givenName: 'Anne',
        surname: 'Bosman',
        title: 'Regional Director'
      },
      {
        id: 2,
        givenName: 'Chris',
        surname: 'Austin',
        title: 'Associate Producer'
      },
      {
        id: 3,
        givenName: 'Dan',
        surname: 'Szyninski',
        title: 'Campus Commander'
      },
    ];
  }
});
