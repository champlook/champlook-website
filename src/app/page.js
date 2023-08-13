"use client";
import Image from "next/image";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import signinwithGoogle from "./Firebase-config.js";
import { react, useState, useEffect, useContext } from "react";
import googlesvg from "./Components/Login/images/googlesvg.svg";
import iphone from "./Components/Login/images/6333040 1.png";
import login from "./Components/Login/images/login_svg.svg";
import logo from "./Components/Login/images/logo_com.svg";
import { Nunito_Sans } from "next/font/google";

export default function Login() {
  const router = useRouter();
  const signin = async () => {
    const userg = await signinwithGoogle();
    router.push("/signup");
  };

  return (
    <div className="bg-gray-200 w-full h-screen pt-24 pb-4 login-bg">
       {/* <div className="w-full h-24 ">
        // <Link href="/" className="text-center ">
        //   <Image
        //     src={logo}
        //     width={219}
        //     height={67}
        //     alt="logo"
        //     className="h-full w-1/6  m-auto"/>
        //   
        // </Link> 
       </div>  */}
      <div className="w-1/3 h-auto bg-white m-auto mt-8 border border-solid border-gray-200 rounded-xl shadow-xl pb-5 login-card">
        <h1 className="pt-9 pl-10 font-avnextb text-3xl font-extrabold">
          Login in with Google
        </h1>
        <p className="pt-2 pl-10 font-avnext font-semibold text-gray-500 text-sm">
          Continue below to login to champlook
        </p>
        <picture>
        <source media={`(min-width: 200px)`} srcSet={iphone} />
        {/* <source media="(max-width: 1024px)" srcSet={login} /> */}
        <Image src={login} width={300} height={186} alt="logo" className="m-auto mt-10 pb-10"/>
        </picture>
        <button onClick={signin}className="w-4/5 border border-solid border-gray-300 h-14 ml-auto mr-auto text-center flex pl-3 rounded-md">
          <Image
            src={googlesvg}
            width={38}
            height={30}
            alt="logo"
            className="pt-2 "
          ></Image>
          <span className=" mt-auto mb-auto ml-auto mr-auto font-avnextb font-light text-gray-900 text-xl">
            Continue with Google
          </span>
        </button>
        <p className="mt-3 m-auto font-avnext font-semibold text-xs text-gray-500 pb-5 text-center ">
          By continuing you agree to the
          <a href="/terms-of-use" className="text-red">
            {" "}
            Terms of Use{" "}
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="text-red">
            {" "}
            Privacy Policy
          </a>
        </p>
      </div>
      {/* {user && <button>hello</button>} */}
      <p className="mt-12 text-center font-{Nunito_Sans} text-sm text-gray-700 font-normal ">
        &copy; 2023, RAMA RAGHAVA CONSUMABLES PRIVATE LIMITED. All rights
        reserved.
      </p>
    </div>
  );
}
