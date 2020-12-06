<template>
    <div class="container mb-5">

        <!-- days display -->
        <div v-if="!daySelected" class="row mb-5">
            <div v-for="(day,index) in daysArray" :key=index class="card col-lg-4 p-3" >
                <div class="card-body">
                    <h5 class="card-title">{{day[0].visibility}}</h5>
                    
                    <button @click="selected(day)" class="btn btn-secondary mt-4">Hourly Forecast</button>
                </div>
            </div>
            
        </div>

        <!-- individual day -->
        <div v-if="daySelected"> 
            <button @click="returnToDays" class="button mb-4">Back to Days</button>
            <hourlyWeatherDay :individualDayArray="individualDayArray"></hourlyWeatherDay>
            
         </div>



    </div>
</template>

<script>

    import hourlyWeatherDay from './hourlyWeatherDay'

    export default {

        props: {
            hourlyWeather: Array
        },
        components: {

            hourlyWeatherDay

        },
        data(){

            return {

                daysArray: [],
                daySelected: false,
                individualDayArray: []

            }

        },
        methods: {

            selected(array){

                this.individualDayArray = array
                this.daySelected = true
            },
            returnToDays(){
                this.daySelected = false
            }

        },
        mounted(){

            //first date
            var date = new Date();
            date.setDate(date.getDate() - 2);

            //days array
            let daysArray = []

            //hours in days array
            let hoursInDay = []

            //loop through all the hourly weather dates
            for (let x = 0; x < this.hourlyWeather.length; x++){

                this.hourlyWeather[x].dt_txt = new Date(this.hourlyWeather[x].dt_txt)
                this.hourlyWeather[x].dt_txt.setHours(this.hourlyWeather[x].dt_txt.getHours() - 5);
                
                if (this.hourlyWeather[x].dt_txt.getDate() != date.getDate()){

                    date = this.hourlyWeather[x].dt_txt
                    
                    if (x != 0){
                        
                        daysArray.push(hoursInDay)
                        hoursInDay = []
                    }

                    hoursInDay.push(this.hourlyWeather[x])

                    if (hoursInDay.length === 1){

                        hoursInDay[0].visibility = this.hourlyWeather[x].dt_txt.toDateString()
                    }


                }
                else {

                    hoursInDay.push(this.hourlyWeather[x])

                }
                  
                


            }

            this.daysArray = daysArray
           
        
        }


    };
</script>

<style scoped>

    .button {
    
            background-color: Transparent;
            background-repeat:no-repeat;
            border: none;
            cursor:pointer;
            overflow: hidden;
            outline:none;
            text-decoration: underline;

    }

</style>