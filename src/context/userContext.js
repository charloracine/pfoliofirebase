import React from "react";
import { useState, useEffect, useContext } from "react";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { setDoc, doc, getDoc } from "@firebase/firestore";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";

const UserContext = React.createContext();
const { Provider } = UserContext;
const googleProvider = new GoogleAuthProvider();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      createUser(result.user);
      // console.log(result.user);
    } catch (e) {
      console.log(e.code);
    }
    setIsLoading(false);
  };

  // console.log(auth.currentUser);
  const createUser = async (usager) => {
    //Verifier s'il y a un document qui existe deja avec ce uid dans la collection user
    const isNewUser =
      (await getDoc(doc(db, "users", usager.uid))).data() === undefined;

    if (isNewUser) {
      const docRef = doc(db, "users", usager.uid);
      await setDoc(docRef, {
        nomComplet: usager.displayName,
        email: usager.email,
        photo: usager.photoURL,
        compteur: {},
        clients: [],
        equipe: [],
      });
    } else return;
  };

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    // vérification de l'authentification
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <Provider value={{ isLoading, user, login, logout }}>{children}</Provider>
  );
};

const useUser = () => {
  const userContext = useContext(UserContext);
  if (userContext == null) {
    console.log("useUser doit etre utilisee a l'interieur de UserProvider");
  }
  return userContext;
};

export { useUser, UserProvider };
