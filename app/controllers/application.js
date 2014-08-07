import Ember from 'ember';

Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function() {$('[data-lorem]').html('').lorem();});
  }});

var ApplicationController = Ember.Controller.extend({
  init: function() {
    this.set('tabs', Ember.A([
      Ember.Object.create({title: 'Tutorial', class:"success", template: 'tutorial', disabled: false}),
      Ember.Object.create({title: 'Select Your Design', template: 'select', disabled: false, enables: 'Personalize'}),
      Ember.Object.create({title: 'Personalize', class:"glyphicon-pencil", template: 'personalize', disabled: true, enables: 'Place Order'}),
      Ember.Object.create({title: 'Place Order', template: 'order', disabled: true}),
    ]));
    this.set('selected', this.get('tabs').objectAt(0));
  },
  tabsChanged: (function() {
    if (this.get('selected.enables')) {
      this.get('tabs').findBy('title', this.get('selected.enables')).set('disabled', false);
    }
    return console.log("Selection has changed to: " + (this.get('selected.title')));
  }).observes('selected')
});

export default ApplicationController;