import firebase from 'firebase'

const firebaseConfig={
  apiKey: "AIzaSyB2Ggy-UFWyy2xGZgj3so72jjXRUEYyvpo",
  authDomain: "facebook-phake.firebaseapp.com",
  projectId: "facebook-phake",
  storageBucket: "facebook-phake.appspot.com",
  messagingSenderId: "464710127883",
  appId: "1:464710127883:web:e2b0ad16e1d1acfa46920e",
  measurementId: "G-BRFH7LJ2C9"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore()
const auth=firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}