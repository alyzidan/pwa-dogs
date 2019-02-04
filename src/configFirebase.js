import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
    apiKey: 'AIzaSyDiXoy5Yphbz21E6xVljlWujBtuBCc06xY',
    authDomain: "pwaa-50fe8.firebaseapp.com",
    databaseURL: "https://pwaa-50fe8.firebaseio.com",
    projectId: "pwaa-50fe8",
    storageBucket: "pwaa-50fe8.appspot.com",
    messagingSenderId: "734191082940"
   }
   
   firebase.initializeApp(config)
   // Initialize Cloud Firestore through Firebase
   let db = firebase.firestore();

// Disable deprecated features
    db.settings({
    //timestampsInSnapshots: true
  });
  db.enablePersistence({experimentalTabSynchronization:true});
  
  export default {
    db
  }

