import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
  init: function() {
    this.set('selected', 'Tutorial');
  },
  content: ['Tutorial', 'Select Your Design', 'Personalize', 'Order'],
  contentChanged: (function() {
    return console.log("Selection has changed to: " + (this.get('selected')));
  }).observes('selected')
});

export default ApplicationController;