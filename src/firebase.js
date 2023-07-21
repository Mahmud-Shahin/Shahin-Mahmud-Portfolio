import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBuK9rDJs0usvCR7Gxxq3Myzn6DuWT4_D0",
  authDomain: "porfolio-contact-form-44c99.firebaseapp.com",
  projectId: "porfolio-contact-form-44c99",
  storageBucket: "porfolio-contact-form-44c99.appspot.com",
  messagingSenderId: "130399729164",
  appId: "1:130399729164:web:fa926d2a72bd34730e2029",
};
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database.ref();
