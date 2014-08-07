import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'cp-doodle-demo', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'cp-doodle-demo');

export default App;
