"use client";
import Image from "next/image";
import img1 from "src/app/Components/Home/images/logo.svg";
import Select from "react-select";
import img2 from "public/teenyicons_tick-circle-solid.svg";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { useUserContext } from "../Context/UserContext";
import { db } from "../Firebase-config";

export default function page() {
  const options = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];
  const user = useUserContext();
  const router = useRouter();

  const [FullName, setFullName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Option, setOption] = useState("");
  console.log(Option);
  console.log(UserName);
  // console.log(Password);
  const handleOptionChange = (option) => {
    setOption(option.value);
  };
  const handleSubmit = async () => {
    if (
      (!FullName && !UserName && !Password && !Option) ||
      !FullName ||
      !UserName ||
      !Password ||
      !Option
    ) {
      console.log("Input data not filled");
    }
    else{
      console.log("data filled");
      try {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          Name: FullName,
          Username: UserName,
          Password: Password,
          GenderSelection: Option,
        });
        router.push("/home");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-[14.25rem] h-[4.69rem] mt-10 ">
        <Image src={img1} />
      </div>
      <div className="mt-7">
        <form action="">
          <div className=" flex flex-col justify-start ">
            <label htmlFor="FullName">Full Name</label>
            <input
              type="text"
              name="FullName"
              id=""
              className="border border-black rounded-[12px] p-3 pr-8 pl-6 mt-3 w-full focus:outline-none"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="mt-2">
        <form action="">
          <div className=" flex flex-col justify-start ">
            <label htmlFor="setaUsername">Set a Username</label>
            <input
              type="text"
              name="setaUsername"
              id=""
              className="border border-black rounded-[12px] p-3 pr-8 pl-6  mt-3 focus:outline-none"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="mt-2">
        <form action="">
          <div className=" flex flex-col justify-start ">
            <label htmlFor="setaPassword">Set a Password</label>
            <input
              type="text"
              name="setaPassword"
              id=""
              className="border border-black rounded-[12px] p-3 pr-8 pl-6  mt-3 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="mt-2 flex flex-col justify-start sm:w-[14.375rem] w-[17rem]">
        <label htmlFor="">Select Gender</label>
        <div className="h-[50px]">
          <Select
            className="basic-single   mt-2"
            classNamePrefix="select"
            name="Select"
            isClearable={false}
            isSearchable={false}
            label="Gender"
            options={options}
            placeholder="Gender"
            onChange={handleOptionChange}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "grey" : "black",
              }),
            }}
          />
        </div>
      </div>
      <div className="mt-10 w-[21.5rem] flex justify-center items-center h-[40px]">
        <div className="w-1/5 flex items-center justify-center">
          <Image src={img2} height={26} />
        </div>
        <div className="font-avnextr w-full font-bold text-sm">
          I want to receive email updates for the upcoming hackthons and
          initiatives.
        </div>
      </div>
      <button
        type="submit"
        className=" mt-6 p-4 px-20 text-white font-avnext text-2xl bg-crimson-100 rounded-[8px]"
        onClick={handleSubmit}
      >
        Continue
      </button>
      <div className="mt-2 w-[18rem] text-sm font-avnext">
        By continuing ,you agree to the{" "}
        <Link href="/terms-of-use" className="underline">
          Terms of use{" "}
        </Link>{" "}
        and
        <Link href="/privacy-policy" className="underline ml-2">
          privacy policy.
        </Link>
      </div>
    </div>
  );
}
