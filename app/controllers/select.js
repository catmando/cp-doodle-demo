import Ember from "ember";

var SelectController = Ember.ArrayController.extend({
  queryParams: ['q'],
  q: null,
  results: [],
  search: function() {
    var query = this.get('q');
    if (query) {
      var tthis = this;
      this.set('results', []);
      var url = "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&callback=?&q=printable card "+query+"&start=";
      var insertResults = function(start) {
        Ember.$.getJSON(url+start, function (data) {
          for(var i=0;i<data.responseData.results.length;i++) {
            (function (img, result) {
              img.onload = function () {
                if (parseInt(result.width) < parseInt(result.height)) {
                  result.displayClass = "portrait-background";
                } else {
                  result.displayClass = "landscape-background";
                }
                result.toolTipTitle = 
                  "dimensions: " + result.width + " x " + result.height;
                tthis.get('results').pushObject(result);
                };
              img.src = result.unescapedUrl;
            }(new Image(), data.responseData.results[i]));
          }
          var l = start+data.responseData.results.length;
          if (l < 20) {
            insertResults(l);
          }
        });
      };
      insertResults(0);
    }
  }.observes('q')
});

export default SelectController;