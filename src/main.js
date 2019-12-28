import Vue from 'vue' // si
import App from './App.vue' // si
import firebase from 'firebase'

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

new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app')
