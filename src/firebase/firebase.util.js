import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCqNMliUWRmeEtb3HxG7CBwK-GWP0E_OOs",
  authDomain: "clothing-store-b3d8e.firebaseapp.com",
  databaseURL: "https://clothing-store-b3d8e.firebaseio.com",
  projectId: "clothing-store-b3d8e",
  storageBucket: "clothing-store-b3d8e.appspot.com",
  messagingSenderId: "187303006984",
  appId: "1:187303006984:web:bdc8564ae6046c7d6a92bd",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
