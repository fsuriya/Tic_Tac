import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7aNgu0w_KtYEW9oxgyLMNTDSaUj2LplY",
    authDomain: "tic-tac-a9787.firebaseapp.com",
    projectId: "tic-tac-a9787",
    storageBucket: "tic-tac-a9787.appspot.com",
    messagingSenderId: "605630121168",
    appId: "1:605630121168:web:26a133a474e67dd3384ad5",
    measurementId: "G-Q3EYRFLFNP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;