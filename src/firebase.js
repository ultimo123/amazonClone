import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAsHvuFMfS3IcZRe_BNzl52tH_L2kCz8tw",
  authDomain: "clone-68f91.firebaseapp.com",
  databaseURL: "https://clone-68f91.firebaseio.com",
  projectId: "clone-68f91",
  storageBucket: "clone-68f91.appspot.com",
  messagingSenderId: "262922934154",
  appId: "1:262922934154:web:80963488af8ee386a55a73",
  measurementId: "G-T06VMRGTVM",
});

const auth = firebase.auth();

export { auth };
