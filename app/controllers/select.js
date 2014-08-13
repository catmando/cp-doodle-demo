import Ember from "ember";

var SelectController = Ember.ArrayController.extend({
  init: function() {
    this.set('results', []);
  },
  search: function() {
    var query = this.get('q');
    console.log('SelectController: '+query);
    if (query) {
      var tthis = this;
      //var results = [];
      this.set('results', []);
      var url = "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&callback=?&q=printable card "+query+"&start=";
      var insertResults = function(data) {
        for(var i=0;i<data.responseData.results.length;i++) {
          if (parseInt(data.responseData.results[i].width) < parseInt(data.responseData.results[i].height)) {
            data.responseData.results[i].displayClass = "portrait-background"
          } else {
            data.responseData.results[i].displayClass = "landscape-background"
          }
          data.responseData.results[i].toolTipTitle = 
            "dimensions: " + data.responseData.results[i].width + " x " + data.responseData.results[i].height
        }
        tthis.get('results').pushObjects(data.responseData.results);
        var l = tthis.get('results').length;
        if (l < 20) {
          Ember.$.getJSON(url+l, insertResults);
        }};
      Ember.$.getJSON(url+0, insertResults);
    }
  }
});


export default SelectController;