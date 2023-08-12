import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlByuGeKtXsbPF6d4YsXMQE-TdSAmDKno",
  authDomain: "champlook-e06e2.firebaseapp.com",
  projectId: "champlook-e06e2",
  storageBucket: "champlook-e06e2.appspot.com",
  messagingSenderId: "577799293936",
  appId: "1:577799293936:web:dc219ef26974ac65c2ab35",
  measurementId: "G-X3CP0W3ZV8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


export default function signinwithGoogle() {
  const user = signInWithPopup(auth, provider);
  return user;
}
