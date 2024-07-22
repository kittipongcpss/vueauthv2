
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc,docc ,updateDo,deleteDoc,setDoc} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
  };


  const firebase = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebase);
  const auth = getAuth(firebase);
  export { auth, firestore };

  
