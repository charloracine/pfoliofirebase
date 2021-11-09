import { useEffect, useState } from "react";
import { onSnapshot, collection, where, query, doc } from "@firebase/firestore";
import { db } from "../config/firebase";

export const useFirestoreCollection = (path) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const docRef = collection(db, path);

    return onSnapshot(docRef, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setIsLoading(false);
    });
  }, [path]);

  return { data, isLoading };
};

export const useFirestoreCollectionWithId = (path, docId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const docRef = doc(db, path, docId);

    return onSnapshot(docRef, (doc) => {
      setData(doc.data());
      setIsLoading(false);
    });
  }, [path, docId]);

  return { data, isLoading };
};

export const useFirestoreCollectionWithQuery = (path, champ, symbol, value) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const docRef = collection(db, path);

    return onSnapshot(query(docRef, where(champ, symbol, value)), (snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setIsLoading(false);
    });
  }, [path, champ, symbol, value]);

  return { data, isLoading };
};

// //EX Retourne tous les clients qui appartiennent au user dont le id est NhqNMchDY2CwiR0Ri5LN
// const { data: clients } = useFirestoreCollectionWithQuery(
//   "clients", //La collection
//   "idUser", //Le champ à query
//   "==", //Le symbole
//   "NhqNMchDY2CwiR0Ri5LN" //La valeur recherchée
// );

// //EX Retourne le document de la collection users dont le id est NhqNMchDY2CwiR0Ri5LN
// const { data: user } = useFirestoreCollectionWithId(
//   "users", //La collection
//   "NhqNMchDY2CwiR0Ri5LN" //Le id du document
// );

// //EX Retourne tous les documents de la collection projets
// const { data: projets } = useFirestoreCollection(
//   "projets" //La collection
// );