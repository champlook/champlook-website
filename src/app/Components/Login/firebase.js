// "use client"
// import { useRouter } from "next/navigation";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlByuGeKtXsbPF6d4YsXMQE-TdSAmDKno",
  authDomain: "champlook-e06e2.firebaseapp.com",
  projectId: "champlook-e06e2",
  storageBucket: "champlook-e06e2.appspot.com",
  messagingSenderId: "577799293936",
  appId: "1:577799293936:web:dc219ef26974ac65c2ab35",
  measurementId: "G-X3CP0W3ZV8"
};
// const route=useRouter();
// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
    export const auth =getAuth(app)
  const provider=new GoogleAuthProvider()

 export default function signinwithGoogle()
 {
  const user=signInWithPopup(auth,provider)
   return user
    
  }

 

