import Image from "next/image";
import homeicon from "./images/homeicon.svg";
import logo from "./images/logo.svg";
import mailicon from "./images/mailicon.svg";

import React from "react";

const CodeOfConduct = () => {
  return (
    <div className="bg-[#F5F7F7] pl-[5rem] pr-[17rem]">
      {/* logo  */}
      <div className="">
        <Image
          src={logo}
          height={49}
          width={162}
          alt="logo"
          className=" absolute top-[6.25rem] overflow-hidden"
        ></Image>
      </div>

      <div className=" color text-[#D81F1F] font-bold text-3xl absolute top-[10rem]">
        Terms of Use
      </div>

      <div className=" color text-[#D81F1F] font-bold text-3xl absolute top-[14rem]">
        Applicability Rahul Vijay Singh Rahul Vijay Singh Rahul Vijay Singh
        Rahul Vijay Singh Rahul Vijay Singh Rahul Vijay Singh Rahul Vijay Singh
        Rahul Vijay Singh
      </div>
    </div>
  );
};

export default CodeOfConduct;
