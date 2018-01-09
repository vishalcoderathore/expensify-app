import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBgM64gpvjKwX3JhihSyRs2pX9N8npMFzI",
    authDomain: "expensify-7acc6.firebaseapp.com",
    databaseURL: "https://expensify-7acc6.firebaseio.com",
    projectId: "expensify-7acc6",
    storageBucket: "expensify-7acc6.appspot.com",
    messagingSenderId: "795877566077"
  };
  
firebase.initializeApp(config);

const database = firebase.database();

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

const objectToArray =  (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
};


//database.ref('expenses').on('value', objectToArray);

// child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});