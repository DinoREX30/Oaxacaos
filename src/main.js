import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'


<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>


     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBdO5KoqEhDtUGG1n8OrXVJP1N5cRVOPho",
    authDomain: "oaxcaosor.firebaseapp.com",
    databaseURL: "https://oaxcaosor.firebaseio.com",
    projectId: "oaxcaosor",
    storageBucket: "oaxcaosor.appspot.com",
    messagingSenderId: "354344247448",
    appId: "1:354344247448:web:c7010a4221a0825d39f0ed",
    measurementId: "G-4CLFQ7K2X0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>