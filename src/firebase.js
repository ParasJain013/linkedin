import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDSQX09U_lQmptnS6qdiM7KEAwPz4kZzTQ",
    authDomain: "linkedin-clone-27465.firebaseapp.com",
    projectId: "linkedin-clone-27465",
    storageBucket: "linkedin-clone-27465.appspot.com",
    messagingSenderId: "734019348279",
    appId: "1:734019348279:web:76e40fd726a6b7cc391cb2"
  };

  const firebaseApp=initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db , auth};
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration


// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
