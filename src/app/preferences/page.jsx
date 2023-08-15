// pages/index.js
//import Logo from '../Preferences/components/Logo';
"use client"

import SpecialityForm from '../Components/Preferences/Form';
import { doc, setDoc } from "firebase/firestore";
import { useUserContext } from "../Context/UserContext";
import { db } from "../Firebase-config";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white mx-10 ">
      
      <SpecialityForm />
    </div>
  );
};

export default HomePage;
