var fetchRandomUser = new Vue({
  el: '#randomUser',
  data: {
    comment: {
      id:'',
      comment:''
    },
  },

methods: {
  fetchComment () {
      fetch('api/comment.php')
      .then( response => response.json() )
      .then( json => {
        commentapp.comment = json;

      })
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })
  },

  created ()  {
    this.fetchComment()
  },

}


})
