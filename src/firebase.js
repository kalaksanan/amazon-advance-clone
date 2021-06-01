import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFksoI4gWdo0NAgrmgyJc2HVhM2xwvdmg',
  authDomain: 'advance-clone.firebaseapp.com',
  projectId: 'advance-clone',
  storageBucket: 'advance-clone.appspot.com',
  messagingSenderId: '642404754312',
  appId: '1:642404754312:web:27d624553825ff147c503d',
  measurementId: 'G-B4J6082C4F',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }
