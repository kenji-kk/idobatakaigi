import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyD-iY2E-5p-bjFWbvQoWkJXUeojadgsots",
    authDomain: "idobatakaigi-with-ham-be7f0.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-be7f0",
    storageBucket: "idobatakaigi-with-ham-be7f0.appspot.com",
    messagingSenderId: "243521924917",
    appId: "1:243521924917:web:3ffa7c74b9d1bca500667c"
  };
 
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
    messagesRef.push({ name, text });
};