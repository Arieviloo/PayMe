import 'firebase/auth';
import 'firebase/firebase-firestore';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAsyVHF8bUp9Efi_cqWFdCcAVeXTFkRFEM',
  authDomain: 'payme-d58b0.firebaseapp.com',
  databaseURL: 'https://payme-d58b0.firebaseio.com',
  projectId: 'payme-d58b0',
  storageBucket: 'payme-d58b0.appspot.com',
  messagingSenderId: '1065569000114',
  appId: '1:1065569000114:web:bde388099c0cb7d749c7ab',
};

export default firebase.initializeApp(firebaseConfig);
