var app = new Vue({
  el: '.content',

  data: {
    movies: []
  },

  created: function() {
    this.fetchData();
  },

  methods: {
    fetchData: function() {
      var list = '/api/';
      var self = this;

      fetch(list).then(function(response) {
        return response.json();
      }).then(function(json) {
        self.movies = json.movies;
      });
    }
  }
});
