import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBRvYZ0DxLiwnlj7WP6KljXGA2LJw1RJNY',
  authDomain: 'eshop-357aa.firebaseapp.com',
  projectId: 'eshop-357aa',
  storageBucket: 'eshop-357aa.appspot.com',
  messagingSenderId: '217339408543',
  appId: '1:217339408543:web:969245473d9f2ee05432aa',
  measurementId: 'G-EYYGPQK46W',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
