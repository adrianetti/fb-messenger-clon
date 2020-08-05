import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1vmkMC4iYklLleh7xfb6zfW8VkH9IJYc",
  authDomain: "fb-messenger-clon.firebaseapp.com",
  databaseURL: "https://fb-messenger-clon.firebaseio.com",
  projectId: "fb-messenger-clon",
  storageBucket: "fb-messenger-clon.appspot.com",
  messagingSenderId: "384574962024",
  appId: "1:384574962024:web:6ad11f52543fb26cb83edd",
  measurementId: "G-RGWF70FE7X"
})

const db = firebaseApp.firestore();

export default db;