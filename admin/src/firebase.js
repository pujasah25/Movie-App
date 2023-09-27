import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-3b87e.firebaseapp.com",
  projectId: "netflix-3b87e",
  storageBucket: "netflix-3b87e.appspot.com",
  messagingSenderId: "422026642141",
  appId: "1:422026642141:web:53b4b02b185d52a1205134",
  measurementId: "G-PY61T5RVN5",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;


