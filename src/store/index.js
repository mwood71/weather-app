import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentWeather: {},
    error: false,
    hourlyWeather: [],
    dailyWeather: [],
    dateChange: true
  },
  mutations: {
    SET_CURRENT_WEATHER(state, currentWeather) {
      state.currentWeather = currentWeather;
      state.error = false
    },
    SET_ERROR(state) {
      state.error = true;
    },
    SET_HOURLY_WEATHER(state, hourlyWeather) {
      state.hourlyWeather = hourlyWeather;
    },
    SET_DAILY_WEATHER(state, dailyWeather) {
      state.dailyWeather = dailyWeather;
    },
    SET_MAKE_FALSE(state) {
      state.dateChange = false;
    },
    SET_MAKE_TRUE(state) {
      state.dateChange = true;
    },
  },
  actions: {
    searchCity({
      commit
    }, searchInput) {


      axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=4e8d076c6b2e293957684db6385333d4")
        .then(response => {
          let currentWeather = response.data;
          commit('SET_CURRENT_WEATHER', currentWeather)


        })
        .catch(function (error) {
          commit('SET_ERROR')
          console.log(error)
          
        })



    },
    searchHourly({
      commit
    }, searchInput) {


      axios.get("https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=4e8d076c6b2e293957684db6385333d4")
        .then(response => {
          let hourlyWeather = response.data.list;
          commit('SET_HOURLY_WEATHER', hourlyWeather)


        })
        .catch(function (error) {
          console.log(error)
          
        })



    },

    searchDaily({
      commit
    }, searchInput) {


      axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=" + searchInput +"&appid=4e8d076c6b2e293957684db6385333d4")
        .then(response => {
          let dailyWeather = response.data.list;
          console.log(dailyWeather)
          commit('SET_DAILY_WEATHER', dailyWeather)


        })
        .catch(function (error) {
          console.log(error)
          
        })



    },
    makeFalse({
      commit
    }) {

      commit('SET_MAKE_FALSE')


    },
    makeTrue({
      commit
    }) {

      commit('SET_MAKE_TRUE')


    }
  
},

  modules: {}
});