"use client";
import Image from "next/image";
import img1 from "src/app/Components/Home/images/logo.svg";
import Dropdown from "../Components/Signup/Dropdown";
import img2 from "public/teenyicons_tick-circle-solid.svg";
import Link from "next/link";
export default function page() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-[14.25rem] h-[4.69rem] mt-10 ">
        <Image src={img1} />
      </div>
      <div className="mt-7">
        <form action="">
          <div className=" flex flex-col justify-start ">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              name="FirstName"
              id=""
              className="border border-black rounded-[12px] p-3 pr-8 pl-6 mt-3 w-full focus:outline-none"
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
            />
          </div>
        </form>
      </div>
      <div className="mt-2 flex flex-col justify-start sm:w-[14.375rem] w-[17rem]">
        <label htmlFor="">Select Gender</label>
        <Dropdown />
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
