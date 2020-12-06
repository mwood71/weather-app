<template>
    <div class="container mb-5">
        <div class="row m-5">

            <div class="col offset-3 col-lg-6">
                   <table class="table">
            
            <tbody>
                <tr>
                    <th scope="row">Current Weather</th>
                    <td>{{this.currentWeather.weather[0].main}}</td>
                 
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td>{{this.currentWeather.weather[0].description}}</td>
                
                </tr>
                <tr>
                    <th scope="row">Temperature</th>
                    <td>{{Math.round((((this.currentWeather.main.temp - 273.15) * 9) / 5) + 32) }} &#8457;</td>
                   
                </tr>
                <tr>
                    <th scope="row">Low Temperature</th>
                    <td>{{Math.round((((this.currentWeather.main.temp_min - 273.15) * 9) / 5) + 32) }} &#8457;</td>
                   
                </tr>
                 <tr>
                    <th scope="row">High Temperature</th>
                    <td>{{Math.round((((this.currentWeather.main.temp_max - 273.15) * 9) / 5) + 32) }} &#8457;</td>
                   
                </tr>
                 <tr>
                    <th scope="row">Humidity</th>
                    <td>{{this.currentWeather.main.humidity}} &percnt;</td>
                   
                </tr>
            </tbody>
        </table>

            </div>

        </div>


    </div>
</template>

<script>
    export default {

        props: {
            currentWeather: Object
        }

    };
</script>