import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAFMPMO0WtuuFRAJHxJ4MI0uY9q42Ygjco",
  authDomain: "crwn-db-66d99.firebaseapp.com",
  databaseURL: "https://crwn-db-66d99.firebaseio.com",
  projectId: "crwn-db-66d99",
  storageBucket: "crwn-db-66d99.appspot.com",
  messagingSenderId: "213362287631",
  appId: "1:213362287631:web:bf13891f83a394a7"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
