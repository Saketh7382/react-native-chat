import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAPPyDvHmekcJHMoWeTB6p435H7Yr3wQ3o",
  authDomain: "our-chat-89da9.firebaseapp.com",
  projectId: "our-chat-89da9",
  storageBucket: "our-chat-89da9.appspot.com",
  messagingSenderId: "1051949023063",
  appId: "1:1051949023063:web:82ccb9f1caf0310783c812",
  measurementId: "G-FKNR9L6LPJ"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
