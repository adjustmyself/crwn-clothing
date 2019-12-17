import firebase from 'firebase/app'; //我們不想導入整個firebase,只導入app
import 'firebase/firestore'; //只有在導入firebase後才有權限導入
import 'firebase/auth'; //只有在導入firebase後才有權限導入

const config = {
  apiKey: "AIzaSyDh-l6Q--GGB4cpZo_s-jDmtBOOvlPcgiU",
  authDomain: "crwn-db-33c27.firebaseapp.com",
  databaseURL: "https://crwn-db-33c27.firebaseio.com",
  projectId: "crwn-db-33c27",
  storageBucket: "crwn-db-33c27.appspot.com",
  messagingSenderId: "154587062484",
  appId: "1:154587062484:web:5641b9e3e01c79fbe0db41",
  measurementId: "G-3TN8PBHTTZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user',e.message);
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey,objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
  })
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformerdCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  });

  return transformerdCollection.reduce((accumulator,collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubcribe = auth.onAuthStateChanged(userAuth => {
      unsubcribe();
      resolve(userAuth);
    },reject)
  })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;