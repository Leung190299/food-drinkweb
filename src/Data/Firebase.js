import firebase from 'firebase/app'
import "firebase/auth";

import 'firebase/database';
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCKaokNrtTMRiZLaTQxFe7gSgBEcqOfQS0",
  authDomain: "drink-c0d54.firebaseapp.com",
  databaseURL: "https://drink-c0d54.firebaseio.com",
  projectId: "drink-c0d54",
  storageBucket: "drink-c0d54.appspot.com",
  messagingSenderId: "852143215568",
  appId: "1:852143215568:web:29e7184c85d25aeb0a9fd5",
  measurementId: "G-T1P9PCT886"
  };
  // Initialize Firebase
  
 const Datas =firebase.initializeApp(firebaseConfig);
 export default Datas ;