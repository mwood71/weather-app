<template>
    <div class="container mb-5">

        <div class="row mb-5">
            <div v-for="(day,index) in dailyWeather" :key=index class="card col-lg-4 p-3">
                <div class="card-body">
                    <h5 class="card-title">{{day.sunrise}}</h5>

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
                                <td>{{Math.round((((day.temp.day - 273.15) * 9) / 5) + 32) }} &#8457;</td>

                            </tr>
                              <tr>
                                <th scope="row">High Temperature</th>
                                <td>{{Math.round((((day.temp.max - 273.15) * 9) / 5) + 32) }} &#8457;</td>

                            </tr>
                              <tr>
                                <th scope="row">Low Temperature</th>
                                <td>{{Math.round((((day.temp.min - 273.15) * 9) / 5) + 32) }} &#8457;</td>

                            </tr>
                            <tr>
                                <th scope="row">Humidity</th>
                                <td>{{day.humidity}}&percnt;</td>

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
            dailyWeather: Array
        },
        mounted() {

            for (let x = 0; x < this.dailyWeather.length; x++) {

                this.dailyWeather[x].sunrise = new Date(this.dailyWeather[x].dt * 1000).toDateString()
            }

        }

    };
</script>