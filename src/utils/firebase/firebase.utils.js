// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInwithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// Google says API key is not a secret that needs to be protected
// Guessing that as only authorized are allowed to access firebase its fine to expose.
const firebaseConfig = {
  apiKey: "AIzaSyAh8T-PvmmdWvkQrcl4zZVD_OUkD99jIKo",
  authDomain: "project-learn-react-9f782.firebaseapp.com",
  projectId: "project-learn-react-9f782",
  storageBucket: "project-learn-react-9f782.appspot.com",
  messagingSenderId: "372162669448",
  appId: "1:372162669448:web:ca6041e0df9d6687c0283d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //Creates a document reference object with uid as document name in users collection
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //Uses doc ref to check if it exist in the firestore db
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // if user does not exist persist the doc object in the collection
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocRef;
};
