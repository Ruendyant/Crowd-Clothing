import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBTKzlzQyug7B8W3HPtWUqXBX5Hf1wAfMc",
  authDomain: "e-comerce-4576c.firebaseapp.com",
  projectId: "e-comerce-4576c",
  storageBucket: "e-comerce-4576c.appspot.com",
  messagingSenderId: "973314861093",
  appId: "1:973314861093:web:85623d1c71742ffa75b7cc"
}

export const createdUserWithGoogle = async (user,additionalData) => {
  if(!user) return;
  
  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {email, displayName} = user;
    const timestamp = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        timestamp,
        ...additionalData
      })
    } catch(error) {
      console.log("error: ", error.message)
    }
  }
  return userRef;
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt :'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
