import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        givenName: 'Rachel',
        surname: 'Beezy',
        title: 'Admissions Manager'
      },
      {
        id: 2,
        givenName: 'Julia',
        surname: 'Daly',
        title: 'Admissions Producer'
      }
    ];
  }
});
