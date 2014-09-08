import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CpDoodleDemoENV.locationType
});

Router.map(function() {
  this.route('personalize');
  this.route('select');
  this.route('order');
  return this.route('tutorial');
});

export default Router;
