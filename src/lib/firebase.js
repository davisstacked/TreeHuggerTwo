import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

// connect to database
const config = {
  apiKey: "AIzaSyAZYDBAYWUVWot7zmg1COLbI1V0v4Kiod0",
  authDomain: "treehugger2.firebaseapp.com",
  projectId: "treehugger2",
  storageBucket: "treehugger2.appspot.com",
  messagingSenderId: "1096887950682",
  appId: "1:1096887950682:web:b871610e02da4df3876763",
  measurementId: "G-XGBTTKD9DS"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// only call seed file once 
// seedDatabase(firebase);

export { firebase, FieldValue };
