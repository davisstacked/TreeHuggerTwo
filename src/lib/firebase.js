import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// connect to database
const config = {};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// only call seed file once 
// seedDatabase(firebase);

export { firebase, FieldValue };