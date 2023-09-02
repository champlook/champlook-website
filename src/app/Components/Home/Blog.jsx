import Image from "next/image";
import blogimg1 from "./images/blogimg1.svg";
import blogimg2 from "./images/blogimg2.svg";
import blogimg3 from "./images/blogimg3.svg";
import Arrow from "./images/Arrow.svg";

export const Blog = () => {
  return (
    <>
      <div className="bg-[#F5F7F7] pl-[2rem] pr-[2rem] sm:pl-[5rem] sm:pr-[5rem]">
        <div className="flex items-center justify-center ">
          <button className="text-[1.5rem] font-avnextb  py-4 w-full sm:w-auto sm:px-28  mb-4 shadow-lg bg-white text-black font-bold rounded-lg">
            BLOGS
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 bg-[#F5F7F7] md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              img: blogimg1,
              title: "How the 3D.js is shaping the future of the websites",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consectetur. Ratione fugit rerum sint. Quisquam quis ut itaque suscipit exercitationem enim, expedita facilis nam commodi hic, in veniam! Illum, necessitatibus! Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a malesuada...",
              date: "May 31, 2023 | 10 min read",
            },
            {
              img: blogimg2,
              title:
                "New workspace in the startup will increase the productivity",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consectetur. Ratione fugit rerum sint. Quisquam quis ut itaque suscipit exercitationem enim, expedita facilis nam commodi hic, in veniam! Illum, necessitatibus! Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a malesuada...",
              date: "Jan 26, 2023 | 2 min read",
            },
            {
              img: blogimg3,
              title:
                "How to turn your ideas into a reality by following this program",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consectetur. Ratione fugit rerum sint. Quisquam quis ut itaque suscipit exercitationem enim, expedita facilis nam commodi hic, in veniam! Illum, necessitatibus! Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a malesuada...",
              date: "Feb 22, 2023 | 7 min read",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="p-4 text-gray-700 bg-white rounded-lg shadow-md "
            >
              <Image
                src={blog.img}
                alt=""
                width={427}
                height={271}
                objectFit="cover"
                className="rounded-t-lg "
              />
              <div className="mt-2 text-xl font-semibold text-gray-900">
                {blog.title}
              </div>
              <div className="mt-2 text-gray-600">{blog.text}</div>
              <div className="mt-2 text-sm text-gray-600">{blog.date}</div>
            </div>
          ))}
        </div>
       
      <div className="max-[640px]:hidden">
        <div className="pt-4 pb-6" >
          <div className="w-[300px] m-auto bg-white rounded-md shadow-xl">
            <div className="flex items-center justify-center pr-3 m-auto mt-4 font-extrabold text-[1.50rem] max-w-min">
              <button className="text-[1.5rem] leading-[125%] w-auto px-6   m-4 text-black font-bold ">
                Next
              </button>
              <Image
                src={Arrow}
                alt=""
                width={22}
                height={22}
                objectFit="contain"
                className="ml-2 bg-white"
              />
            </div>
          </div>          
        </div>
        </div>

        <div className="pt-4 pb-6 sm:hidden">
          <div className="w-full bg-white rounded-md shadow-xl">
            <div className="flex items-center justify-center pr-3 m-auto mt-4 font-extrabold text-[1.50rem]  max-w-min">
              <button className="text-[1.5rem] leading-[125%] w-auto px-6   m-4 text-black font-bold ">
                Next
              </button>
              <Image
                src={Arrow}
                alt=""
                width={22}
                height={22}
                objectFit="contain"
                className="ml-2 bg-white"
              />
            </div>
          </div>          
        </div>
      </div>
    </>
  );
};
