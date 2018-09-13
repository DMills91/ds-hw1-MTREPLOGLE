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
computed:{

},

methods: {
  fetchRandomUser () {
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
  }
},

created ()  {
  this.fetchRandomUser();
}
})
