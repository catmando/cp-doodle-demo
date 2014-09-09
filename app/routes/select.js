import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      replace: true
    }
  }
});