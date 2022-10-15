import firebase from "firebase/app"
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCosI7OiQ_j-MBWS8ojri_knAc8Gq8qISY",
    authDomain: "slavvenger-7bbc7.firebaseapp.com",
    projectId: "slavvenger-7bbc7",
    storageBucket: "slavvenger-7bbc7.appspot.com",
    messagingSenderId: "331281210019",
    appId: "1:331281210019:web:0e1b4b4fd462a2495c7d16"
  }).auth();