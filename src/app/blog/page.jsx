"use client";
import Image from "next/image";
import blog1 from "../Components/Blog/images/blog-1.svg";
import BlogPage from "../Components/Blog/blogcom";
import { Footer } from "../Components/Blog/Footer";
import { Navbar } from "../Components/Home/Navbar";
import { useContext } from "react";
import { useUserContext } from "../Context/UserContext";

export default function Blog() {
  const user = useUserContext();

  console.log("user data in blog :", user);
  return (
    <div>
     {/* <Navbar title="blog"/>
    
    <div className="bg-gray-100 w-full  h-auto pt-24 blog-bg">
      <h2 className="font-tiehs font-bold text-4xl pt-2 ml-28 bheading">
        Featured Blog
      </h2>
      <div className="flex w-4/5 h-auto  mt-6 ml-52  space-x-2 pb-3 responsive">
        <div className="w-1/2 h-[21.9rem] border  bg-white border-solid  rounded-md shadow-md  border-gray-200 bcard">
          <Image
            src={blog1}
            height={265}
            width={500}
            alt="logo"
            className="w-full sm:w-full md:w-full pt-1 pb-1 pr-2 pl-2 h-full bimage"
          ></Image>
        </div>
        <div className="w-5/12 h-[21.9rem] border bg-white border-solid rounded-md shadow-md overflow-hidden border-gray-200  bcont">
          <h2 className="font-tiehm font-medium text-3xl pl-4 pt-7">
            How the fast pace life working at the startups are effecting youth
          </h2>
          <p className="pt-12 pl-3 font-avnext font-medium text-base pr-5 pb-2 overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            nobis nam recusandae nisi neque ipsam eveniet. Voluptates officiis
            ipsa minus quod aliquid eos r illo eaque nulla commodi Vero iusto
            nobis nam recusandae nisi neque ipsam eveniet. quasi sit perferendis
            officiis quis delectus quasi id dolorem consequatur deserunt
            <a href="" className="text-red">
              ...read more..
            </a>
          </p>
          <p className="font-avnext pl-5 pt-1 text-gray-400">
            Jan 26, 2023 | 2 min read
          </p> */}
      <Navbar title="blog" />

      <div className="bg-gray-200 w-full h-auto pt-24 blog-bg">
        <h2 className="font-tiehs font-bold text-4xl pt-2 ml-28 bheading">
          Featured Blog
        </h2>
        <div className="flex w-4/5 h-auto  mt-6 ml-52 space-x-2 pb-3 responsive">
          <div className="w-1/2 h-full border  bg-white border-solid  rounded-md shadow-md  border-gray-200 bcard ">
            <Image
              src={blog1}
              height={265}
              width={50}
              alt="logo"
              className=" w-full pt-1 pb-1 pr-2 pl-2 bimage"
            ></Image>
          </div>
          <div className="w-5/12 h-auto border bg-white border-solid rounded-md shadow-md overflow-hidden border-gray-200  bcont ">
            <h2 className="font-tiehm font-medium text-3xl pl-4 pt-7">
              How the fast pace life working at the startups are effecting youth
            </h2>
            <p className="pt-12 pl-3 font-avnext font-medium text-base pr-5 pb-2 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              iusto nobis nam recusandae nisi neque ipsam eveniet. Voluptates
              officiis ipsa minus quod aliquid eos r illo eaque nulla commodi
              Vero iusto nobis nam recusandae nisi neque ipsam eveniet. quasi
              sit perferendis officiis quis delectus quasi id dolorem
              consequatur deserunt
              <a href="" className="text-red">
                ...read more..
              </a>
            </p>
            <p className="font-avnext pl-5 pt-1 text-gray-400">
              Jan 26, 2023 | 2 min read
            </p>
          </div>
        </div>
        <BlogPage />
        <Footer />
      </div>
    </div>
  );
}
