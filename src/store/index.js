import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentWeather: {},
    error: false
  },
  mutations: {
    SET_CURRENT_WEATHER(state, currentWeather) {
      state.currentWeather = currentWeather;
      state.error = false
    },
    SET_ERROR(state) {
      state.error = true;
    },
  },
  actions: {
    searchCity({
      commit
    }, searchInput) {


      axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=4e8d076c6b2e293957684db6385333d4")
        .then(response => {
          let currentWeather = response.data;
          console.log(currentWeather)
          commit('SET_CURRENT_WEATHER', currentWeather)


        })
        .catch(function (error) {
          commit('SET_ERROR')
          console.log(error)
          
        })



    },
  
},

  modules: {}
});