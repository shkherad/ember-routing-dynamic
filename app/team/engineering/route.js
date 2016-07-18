import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        givenName: 'Jeff',
        surname: 'Horn',
        title: 'Lead Developer'
      },
      {
        id: 2,
        givenName: 'Chris',
        surname: 'Payne',
        title: 'Web Developer'
      },
      {
        id: 3,
        givenName: 'Brian',
        surname: 'Berzellini',
        title: 'Web Developer'
      },
    ];
  }
});
