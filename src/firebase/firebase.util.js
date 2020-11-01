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

// Creates new User in firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user does not exist, leave function
  if (!userAuth) return;

  // accesses "user" by its id
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // if user is authenticated but does not exist in firestore(database), user is added to firestore.
  if (!snapShot.exists) {
    // gets data from the user object
    const { displayName, email } = userAuth;
    //Creates new date to note the time every user is created
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userRef;
};


export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {

 const  collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()

    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(obj.title)
      console.log((newDocRef));
    })
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
