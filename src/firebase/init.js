import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNfArv9bq9JxbMo5S55ivFeNX3xGLgrZ8",
    authDomain: "holla-chat.firebaseapp.com",
    databaseURL: "https://holla-chat.firebaseio.com",
    projectId: "holla-chat",
    storageBucket: "holla-chat.appspot.com",
    messagingSenderId: "346676422766",
    appId: "1:346676422766:web:dab723b624f6b1f9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
  