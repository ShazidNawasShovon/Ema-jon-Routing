import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeNow from "../../mrFirebase/firebase2.initialize";

initializeNow();

function useFirebase() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        logOut();
      }
    });
  }, []);
  return {
    user,
    signInWithGoogle,
    signInWithFacebook,
    logOut,
  };
}

export default useFirebase;
