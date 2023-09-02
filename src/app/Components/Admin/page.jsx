"use client";
import Image from "next/image";
import img1 from "src/app/Components/Home/images/logo.svg";
import { useState } from "react";


const Admin = () => {
 
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  console.log(UserName);
  
  const handleSubmit = async () => {
    if (
      (!UserName && !Password) || !UserName ||!Password ) {
      console.log("Input data not filled");
    }
    else{
      console.log("data filled");
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center sm:w-20">
      <div className="w-[14.25rem] h-[4.69rem] mt-4 mb-10 ">
        <Image src={img1} />
      </div>
      
      <div className="bg-zinc-100 ml:px-12 py-4 pb-10 flex flex-col justify-center items-center rounded-lg ms:px-5">
      <div><h1 className="text-2xl font-bold mt-3 mb-3">Admin Login</h1></div>
      <div className="mt-2">
        <form action="">
          <div className=" flex flex-col justify-start sm:p-0">
            <label htmlFor="setaUsername">Username</label>
            <input
              type="text"
              name="setaUsername"
              id=""
              className="border border-black rounded-[12px] p-2 pr-8 pl-6 mt-3 focus:outline-none ms:pr-3 ms:pl-3"
              style={{
                "@media (max-width: 576px)": {
                  width: "20px",
                  padding:0,
                },
              }}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="mt-2">
        <form action="">
          <div className=" flex flex-col justify-start ">
            <label htmlFor="setaPassword">Password</label>
            <input
              type="text"
              name="setaPassword"
              id=""
              className="border border-black rounded-[12px] p-2 pr-8 pl-6  mt-3 focus:outline-none ms:pr-3 ms:pl-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
      
      <button
        type="submit"
        className=" mt-10 py-2 px-20 text-white font-avnext text-xl bg-crimson-100 rounded-[8px]"
        onClick={handleSubmit}
      >
        Continue
      </button>
      
      </div>
  
    </div>
  );
}
export default Admin;