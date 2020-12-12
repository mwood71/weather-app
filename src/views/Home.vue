<template>
  <div class="container mt-5">

  <div class="row mt-5">
    <div class="offset-3 col-lg-6">

        <h1 style="color:red">My name is Alex Wood and this is my final project for my web developement class at Kennesaw State. </h1>
        <h1 class="display-3">Weather App</h1>
        <p>This application will enable you to search for any city around the world and view their weather forecasts. 
          You will have the option to view the current, hourly, or daily forecasts for the city. </p>
          <v-btn @click="search" class="btn btn-success">Search</v-btn>

    </div>
    

  </div>

    

  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      search(){
        this.$router.push('search') 
      }
    }

  };
</script>