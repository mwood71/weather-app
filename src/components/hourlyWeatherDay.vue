<template>
  <div class="container">

     <div class="row mb-5">
            <div v-for="(day,index) in individualDayArray" :key=index class="card col-lg-4 p-3" >
                <div class="card-body">
                    <h5 class="card-title">{{day.dt}}</h5>
            <table class="table">
            
            <tbody>
                <tr>
                    <th scope="row">Current Weather</th>
                    <td>{{day.weather[0].main}}</td>
                 
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td>{{day.weather[0].description}}</td>
                
                </tr>
                 <tr>
                    <th scope="row">Temperature</th>
                    <td>{{Math.round((((day.main.temp - 273.15) * 9) / 5) + 32) }} &#8457;</td>
                   
                </tr>
                    <tr>
                    <th scope="row">Humidity</th>
                    <td>{{day.main.humidity}}&percnt;</td>
                
                </tr>
            
                
            </tbody>
        </table>
                    
                    
                </div>
            </div>
            
        </div>

  </div>
</template>

<script>
  export default {
    props: {
        individualDayArray: Array
    },
    mounted(){
        for (let x = 0; x < this.individualDayArray.length; x++){

            console.log(this.individualDayArray[x].dt_txt)

 


            if (x === 0){


                this.individualDayArray[x].dt = this.individualDayArray[x].dt_txt.toLocaleTimeString('en-US')

            }
            else{

                this.individualDayArray[x].dt = this.individualDayArray[x].dt_txt.toLocaleTimeString('en-US')

            }

            

        }
    }

  };
</script>