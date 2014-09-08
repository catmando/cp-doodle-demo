import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
  init: function() {
    this.set('tabs', Ember.A([
      Ember.Object.create({title: 'Tutorial', class:"success", template: 'tutorial', linkTo: 'tutorial', disabled: false}),
      Ember.Object.create({title: 'Select Your Design', template: 'select/select', linkTo: 'select', disabled: false, enables: 'Personalize', controller: 'Select'}),
      Ember.Object.create({title: 'Personalize', class:"glyphicon-pencil", template: 'personalize/personalize', linkTo: 'personalize', disabled: true, enables: 'Place Order'}),
      Ember.Object.create({title: 'Place Order', template: 'order', linkTo: 'order', disabled: true}),
    ]));
    this.set('selected', this.get('tabs').objectAt(0));
    return this._super();
  },
  tabsChanged: (function() {
    if (this.get('selected.enables')) {
      this.get('tabs').findBy('title', this.get('selected.enables')).set('disabled', false);
    }
    return console.log("Selection has changed to: " + (this.get('selected.title')));
  }).observes('selected')
});

export default ApplicationController;