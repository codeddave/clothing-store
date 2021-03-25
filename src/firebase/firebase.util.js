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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();

    //batch write  to set all requests, if any of the sets fail, they all fail
    batch.set(newDocRef, obj);
  });

  // .comit to fire off batch request, returns a promise
  return await batch.commit();
};

export const convertCollectionsSnapsotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  //to reduce the array, having titles as keys and ach collection object as properties.
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
