var fetchRandomUser = new Vue({
  el: '#randomUser',
  data: {
    person: {
      name: '',
      location: '',
      email:'',
      dob:'',
      picture:''
    }
  },
  methods: {
      getAge: function (dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      },
    pretty_date: function(d)
    {
      return moment(d).format("MMM Do YY");
    },

    fetchRandomUser: function () {
      fetch('https://randomuser.me/api/')
      .then( (response) => response.json())
      .then( json =>{
        fetchRandomUser.person.name = json.results[0].name.first +" "+ json.results[0].name.last;
        fetchRandomUser.person.location = json.results[0].location.city;
        fetchRandomUser.person.email = json.results[0].email;
        fetchRandomUser.person.dob = json.results[0].dob.date;
        fetchRandomUser.person.picture = json.results[0].picture.large;
      })
      .catch(err=> {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      })
    },

    getemail:  function(email){
      return "mailto:"+ email;
    },


    created ()  {
      this.fetchRandomUser()
    }
  }

})
