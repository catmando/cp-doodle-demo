import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'cp-doodle-demo', // TODO: loaded via config
  LOG_TRANSITIONS: true,
  Resolver: Resolver
});

Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function() {Ember.$('[data-lorem]').html('').lorem();});
  }});

loadInitializers(App, 'cp-doodle-demo');

export default App;
