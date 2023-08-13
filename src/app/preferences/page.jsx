// pages/index.js
//import Logo from '../Preferences/components/Logo';
"use client"
import SpecialityForm from '../Components/Preferences/Form';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white mx-10 ">
      
      <SpecialityForm/>
    </div>
  );
};

export default HomePage;
