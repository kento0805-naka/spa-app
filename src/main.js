import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false


  const firebaseConfig = {
    apiKey: "AIzaSyAJkCMYaQ_s9NhPBqsW8XSo5E5eXCiJ_68",
    authDomain: "my-address-pj-5b1d0.firebaseapp.com",
    databaseURL: "https://my-address-pj-5b1d0.firebaseio.com",
    projectId: "my-address-pj-5b1d0",
    storageBucket: "my-address-pj-5b1d0.appspot.com",
    messagingSenderId: "569747008046",
    appId: "1:569747008046:web:ed0afb6b2bcb47ab458dbf",
    measurementId: "G-259JKNM4J9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
