import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA1O6kYaUEEfMK_hXmDEpWX4voUZS-gtRc",
  authDomain: "wife-finance.firebaseapp.com",
  projectId: "wife-finance",
  storageBucket: "wife-finance.firebasestorage.app",
  messagingSenderId: "468342999760",
  appId: "1:468342999760:web:e126e86ad94b6498bb2cd5",
  measurementId: "G-C6LB6E781T",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export const auth = firebase.auth();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export const signOut = (navigate) => {
  auth.signOut().then(() => {
    navigate("/login");
  });
};

export const signInWithGoogle = (navigate) => {
  auth
    .signInWithPopup(GoogleProvider)
    .then(async ({ user, additionalUserInfo }) => {
      if (additionalUserInfo.isNewUser) {
        await setDoc(doc(firestore, "user", user.uid), {
          userName: user.displayName,
          uid: user.uid,
          chathistory: [],
          characteristics: "",
          expenses: [],
          income: [],
          goals: [],
          Interested_Stock: [],
          // ...
        });
      }
    })
    .catch((error) => {
      throw error;
    })
    .then(() => {
      navigate("/dashboard");
    });
};
