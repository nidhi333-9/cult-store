import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdGhdn73kXN78tjT19JR5nBCmuwROQ_14",
  authDomain: "cult-store.firebaseapp.com",
  projectId: "cult-store",
  storageBucket: "cult-store.appspot.com",
  messagingSenderId: "95509261645",
  appId: "1:95509261645:web:ab6f4cb04ebabe8657db04",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
