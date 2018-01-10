import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };



/*
********************* SAMPLE FIREBASE CODE *************************
*/

// database.ref().set({
//         name: 'Vishal Rathore',
//     age: 26,
//     isSingle: true,
//     location: {
//         city: 'Minneapolis',
//         country: 'USA'
//     }
// });


// database.ref().remove().then(
//     () => {console.log('successfully removed')},
//     (e) => {console.log(e);}
// );

// database.ref('location/city').once('value').then(
//     (snapshot) => {const val = snapshot.val();console.log(val);},
//     (e) => {console.log('Error Fetching Data', e);}
// );

// const objectToArray =  (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// };


//database.ref('expenses').on('value', objectToArray);

// child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });