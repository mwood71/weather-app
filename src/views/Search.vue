<template>
    <div class="container mt-4 mb-5">

        <!-- beginning of main display div -->
        <div v-if="mainDisplay">
            <!-- search div -->
            <div id="search" v-if="!hasSearched">
                <h1 class="display-6 mb-5">Search</h1>
                <p class="mt-3 mb-4">Search for the full city name that you like to view the weather for.</p>
                <form class="form-inline">
                    <div class="form-group offset-4 col-lg-4 mb-3 mt-3">
                        <p class="warning" v-if="blankError">No search submitted.</p>
                        <input v-model="searchString" type="text" class="form-control" id="searchInput"
                            placeholder="Search City Name">
                    </div>
                    <button @click="submit" type="submit" class="btn btn-success mb-2">Search</button>
                </form>
            </div>

            <!-- successful search -->
            <div v-if="!error && hasSearched">
                <button @click="newSearch" class="button mt-4 mb-5">New Search</button>
                <p>Select which forecast you would like to see for {{this.searchString}}</p>
                <button @click="current" class="btn btn-primary m-2">Current</button>
                <button @click="hourly" class="btn btn-secondary m-2">Hourly</button>
                <button @click="daily" class="btn btn-dark m-2">Daily</button>
            </div>

            <!-- unsuccessful search -->
            <div v-if="error && hasSearched">
                <p>Unable to find city that was searched for. Please search again.</p>
                <button @click="searchAgain" class="btn btn-danger">Search Again</button>
            </div>

        <!-- end of main display div -->
        </div>

    <!-- div for current weather -->
    <div v-if="showCurrent"> <currentWeather :currentWeather="currentWeather"></currentWeather> <button class="btn btn-success" @click="backToMain">Back To Main</button></div>

    <!-- div for hourly weather -->
    <div v-if="showHourly"><hourlyWeather :hourlyWeather="hourlyWeather"></hourlyWeather> <button class="btn btn-success" @click="backToMain">Back to Main</button></div>

    <!-- div for daily weather -->
    <div v-if="showDaily"><dailyWeather :dailyWeather="dailyWeather"></dailyWeather><button class="btn btn-success mb-5" @click="backToMain">Back to Main</button></div>


        

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import currentWeather from '../components/currentWeather'
    import hourlyWeather from '../components/hourlyWeather'
    import dailyWeather from '../components/dailyWeather'

    export default {
        name: "Search",
        data() {

            return {
                searchString: '',
                blankError: false,
                hasSearched: false,
                showCurrent: false,
                showHourly: false,
                showDaily: false,
                mainDisplay: true

            }

        },
        components: {
            currentWeather,
            hourlyWeather,
            dailyWeather

        },

        methods: {

            newSearch(){

                this.hasSearched = false
                this.searchString = ""

            },

            submit: function () {

                if (this.searchString === '') {
                    this.blankError = true
                } else {
                    this.blankError = false
                    this.$store.dispatch('searchCity', this.searchString)
                    this.$store.dispatch('searchHourly', this.searchString)
                    this.$store.dispatch('searchDaily', this.searchString)
                    setTimeout(() => this.hasSearched = true, 1000);
                }

            },
            searchAgain: function () {
                this.hasSearched = false
                this.searchString = ""
            },
            current: function () {
                this.mainDisplay = false
                this.showCurrent = true
            },
            hourly: function () {
                this.mainDisplay = false
                this.showHourly = true
            },
            daily: function () {
                this.mainDisplay = false
                this.showDaily = true
            },
            backToMain: function () {
                this.mainDisplay = true
                this.showDaily = false
                this.showCurrent = false
                this.showHourly = false
            }
        },
        computed: {
            ...mapState(['error']),
            ...mapState(['currentWeather']),
            ...mapState(['hourlyWeather']),
            ...mapState(['dailyWeather']),

        },


    };
</script>

<style scoped>
    .warning {
        color: red;
    }
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