var fetchComment = new Vue({
  el: '#randomComment',
  data: {
    comment: [],
    commentForm: {
      /*id:'0',
      comment:''
    */},
  },

  methods: {
    newCommentTable: function() {
      // TODO: Check validity in a better way
      if (this.comment <= 0) {
        console.error('Cannot submit, invalid values');
        return;
      }
      const s = JSON.stringify(this.comment);
      console.log(s);
      // POST to remote server
      fetch('../api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {fetchComment.comment.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.workForm = this.getEmptyWorkForm();
    },
    getEmptyWorkForm: function()  {
      return {
        comment:null
      }
    },
    fetchComment: function() {(
      fetch('../api/comment.php')
      .then( response => response.json() )
      .then( json => {
        fetchComment.comment = json;
        console.log(JSON.stringify(json));
      })
      .catch( err => {
        console.log('COMMENT FETCH ERROR:');
        console.log(err);
      })
    )},
},
    created: function()  {
      this.fetchComment()
    },
})
