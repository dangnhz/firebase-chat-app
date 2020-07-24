import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDoqVDbqi3MCK_HCClhdOZ2wSuTzXUvQ3c',
  authDomain: 'fir-chat-app-17311.firebaseapp.com',
  databaseURL: 'https://fir-chat-app-17311.firebaseio.com',
  projectId: 'fir-chat-app-17311',
  storageBucket: 'fir-chat-app-17311.appspot.com',
  messagingSenderId: '414556650810',
  appId: '1:414556650810:web:e164cb4aa04ec9d8396403',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
