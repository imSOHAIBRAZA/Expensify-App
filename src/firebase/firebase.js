import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCN4Kdbt8of7SJSUe9iPJ7no5p-FqLAUSI",
    authDomain: "expensify-8842f.firebaseapp.com",
    databaseURL: "https://expensify-8842f.firebaseio.com",
    projectId: "expensify-8842f",
    storageBucket: "expensify-8842f.appspot.com",
    messagingSenderId: "523114561370"
};

firebase.initializeApp(config);
var database = firebase.database();

export { firebase, database as default }


// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// ***** FETCH DATA LIKE ARRAY ***** // 

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// ***** INSERT DATA LIKE ARRAY ***** // 

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 10,
//     createdAt: 1254542
// });

// database.ref('expenses').push({
//     description: 'Phone ',
//     note: '',
//     amount: 20,
//     createdAt: 1254542
// });

// database.ref('expenses').push({
//     description: 'Cofee',
//     note: '',
//     amount: 30,
//     createdAt: 1254542
// });



// ***** FETCH DATA ****//

// database.ref().on('value', (data) => {
//     const val = data.val();
//     console.log(`${val.name} is ${val.job} at ${val.location.city}`);
// })


// // ***** ADD DATA ***** //
// database.ref().set({
//     name: 'Sohaib',
//     age: 26,
//     isSingal: true,
//     location: {
//         city: 'Faisalabad',
//         country: 'Pakistan'
//     }
// }).then(() => {
//     console.log('Data is Saved');
// }).catch((e) => {
//     console.log('Eror', e)
// });

// database.ref('age').set(27);
// database.ref('location/city').set('Satiana');

// database.ref('attributes').set({
//     height: 5.8,
//     weight: '79 kg'
// }).then(() => {
//     console.log('Data is Saved');
// }).catch((e) => {
//     console.log('Eror', e)
// });

// //***** REMOVE DATA *****//

// database.ref('isSingal')
//     .remove()
//     .then(() => {
//         console.log('Data is Removed');
//     })
//     .catch((e) => {
//         console.log('Error :', e);
//     });

// // ***** UPDATE DATA ***** //

// database.ref().update({
//     job:'Manager',
//     'locatoin/city': 'Satiana'
// }).then(() => {
//     console.log('Data is Updated');
// })
// .catch((e) => {
//     console.log('Error :', e);
// });