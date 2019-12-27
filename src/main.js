import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
// import firebaseui from 'firebaseui'
import router from './router'

Vue.use(VueRouter)

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
  router,
  created () {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
