// import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAHoOruLMUMlAvI4-s3DdD0SyOPhsuuBFM',
  authDomain: 'payme-e1e50.firebaseapp.com',
  databaseURL: 'https://payme-e1e50.firebaseio.com',
  projectId: 'payme-e1e50',
  storageBucket: 'payme-e1e50.appspot.com',
  messagingSenderId: '813994851118',
  appId: '1:813994851118:web:c5288cd7d1b9bf875f18bf',
};

export default firebase.initializeApp(firebaseConfig);

// class Firebase {
//   constructor() {
//     const firebaseConfig = {
//       apiKey: 'AIzaSyAHoOruLMUMlAvI4-s3DdD0SyOPhsuuBFM',
//       authDomain: 'payme-e1e50.firebaseapp.com',
//       databaseURL: 'https://payme-e1e50.firebaseio.com',
//       projectId: 'payme-e1e50',
//       storageBucket: 'payme-e1e50.appspot.com',
//       messagingSenderId: '813994851118',
//       appId: '1:813994851118:web:c5288cd7d1b9bf875f18bf',
//     };
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();
//     this.db = app.firestore();
//   }

//   login(email, password) {
//     return this.auth.signInWithEmailAndPassword(email, password);
//   }

//   logout() {
//     return this.auth.signOut();
//   }

//   async register(name, email, password) {
//     await this.auth
//       .createUserWithEmailAndPassword(email, password)
//       .then(res => {
//         alert(res.user.uid);
//       });
//     return this.auth.currentUser.updateProfile({
//       displayName: name,
//     });
//   }

//   isInitialized() {
//     return new Promise(resolve => {
//       this.auth.onAuthStateChanged(resolve);
//     });
//   }
// }

// export default new Firebase();
