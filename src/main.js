import Vue from 'vue' // si
import App from './App.vue' // si
import firebase from 'firebase'
import router from '../src/router/index'
import store from '../src/store/index'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCvUrosrr4ZQtoG4oX0pGpkgTQhwhXhw-g'
  }
})

var firebaseConfig = {
  apiKey: 'AIzaSyBdO5KoqEhDtUGG1n8OrXVJP1N5cRVOPho',
  authDomain: 'oaxcaosor.firebaseapp.com',
  databaseURL: 'https://oaxcaosor.firebaseio.com',
  projectId: 'oaxcaosor',
  storageBucket: 'oaxcaosor.appspot.com',
  messagingSenderId: '354344247448',
  appId: '1:354344247448:web:c7010a4221a0825d39f0ed',
  measurementId: 'G-4CLFQ7K2X0'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app')
