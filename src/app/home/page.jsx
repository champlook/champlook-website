"use client";
import { Blog } from "../Components/Home/Blog";
import { ContentSection } from "../Components/Home/ContentSection";
import { Footer } from "../Components/Blog/Footer";
import { Navbar } from "../Components/Home/Navbar";
import { useContext, useEffect } from "react";
import { useUserContext } from "../Context/UserContext";
import { auth } from "../Firebase-config";
export default function Home() {
  const user = useUserContext();
  console.log("user in home page", user);

  return (
    
    <div className=" bg-gray-300 h-auto text-[1rem] text-black font-avnext ">

      <div>
        <Navbar title="home" />
        <ContentSection />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
