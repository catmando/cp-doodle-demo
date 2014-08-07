import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
  init: function() {
    this.set('content', Ember.A([
      Ember.Object.create({title: 'Tutorial', template: 'tutorial', disabled: false}),
      Ember.Object.create({title: 'Select Your Design', template: 'select', disabled: false, enables: 'Personalize'}),
      Ember.Object.create({title: 'Personalize', template: 'personalize', disabled: true, enables: 'Place Order'}),
      Ember.Object.create({title: 'Place Order', template: 'order', disabled: true}),
    ]));
    this.set('selected', this.get('content').objectAt(0));
  },
  contentChanged: (function() {
    if (this.get('selected.enables')) {
      this.get('content').findBy('title', this.get('selected.enables')).set('disabled', false);
    }
    return console.log("Selection has changed to: " + (this.get('selected.title')));
  }).observes('selected')
});

export default ApplicationController;