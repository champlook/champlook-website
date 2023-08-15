// // import Image from "next/image";
// // import blogimg1 from "./images/blogimg1.svg";
// // import blogimg2 from "./images/blogimg2.svg";
// // import blogimg3 from "./images/blogimg3.svg";
// // import Arrow from "./images/Arrow.svg";

// // export const Blog = () => {
// //   return (
// //     <>
// //       <div className="absolute top-[112.75rem] left-[5.81rem] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-[25.13rem] h-[34.06rem] text-[1.38rem] text-gray-300">
// //         <Image
// //           className="absolute top-[0rem] left-[0rem] rounded-t-lg rounded-b-none w-[25.13rem] h-[16.75rem] object-cover"
// //           alt=""
// //           src={blogimg1}
// //         />
// //         <div className="absolute top-[17.75rem] left-[1.13rem] leading-[125%] flex items-center w-[22.94rem] font-avnextb text-gray-3">
// //           How the 3D.js is shaping the future of the websites
// //         </div>
// //         <div className="absolute top-[21.75rem] left-[1.13rem] text-[1rem] leading-[125%] inline-block w-[22.94rem] h-[8.94rem] text-gray-2">
// //           Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a
// //           malesuada pellentesque diam interdum egestas. Odio est nunc
// //           scelerisque dolor tempus ultrices. Faucibus porttitor eget faucibus
// //           aenean sed tincidunt. Hendrerit commodo sodales orci nullam. Curabitur
// //           eu pretium lacus lacus dictumst et quam integer.
// //         </div>
// //         <div className="absolute top-[31.5rem] left-[1.13rem] text-[0.88rem] leading-[125%] text-gray-1 inline-block w-[11.63rem] h-[1.31rem] font-inter">
// //           <span>May 31,</span>
// //           <span className="font-avnext">{` `}</span>
// //           <span>2023 | 10 min read</span>
// //         </div>
// //       </div>
// //       <div className="absolute top-[112.75rem] left-[32.44rem] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-[25.13rem] h-[34.06rem] text-gray-300">
// //         <Image
// //           className="absolute top-[0rem] left-[0rem] rounded-t-lg rounded-b-none w-[25.13rem] h-[16.75rem] object-cover"
// //           alt=""
// //           src={blogimg2}
// //         />
// //         <div className="absolute top-[21.75rem] left-[1.13rem] leading-[125%] inline-block w-[22.94rem] h-[8.94rem] text-gray-2">
// //           Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a
// //           malesuada pellentesque diam interdum egestas. Odio est nunc
// //           scelerisque dolor tempus ultrices. Faucibus porttitor eget faucibus
// //           aenean sed tincidunt. Hendrerit commodo sodales orci nullam. Curabitur
// //           eu pretium lacus lacus dictumst et quam integer.
// //         </div>
// //         <div className="absolute top-[31.5rem] left-[1.13rem] text-[0.88rem] leading-[125%] text-gray-1 inline-block w-[11.63rem] h-[1.31rem]">
// //           Jan 26, 2023 | 2 min read
// //         </div>
// //         <div className="absolute top-[17.75rem] left-[1.13rem] text-[1.38rem] leading-[125%] flex items-center w-[22.94rem] font-avnextb text-gray-3">{`New workspace in the startup will increase the productivity `}</div>
// //       </div>
// //       <div className="absolute top-[112.75rem] left-[59.13rem] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-[25.13rem] h-[34.06rem] text-gray-300">
// //         <Image
// //           className="absolute top-[0rem] left-[0rem] rounded-t-lg rounded-b-none w-[25.13rem] h-[16.81rem] object-cover"
// //           alt=""
// //           src={blogimg3}
// //         />
// //         <div className="absolute top-[22.19rem] left-[1rem] leading-[125%] inline-block w-[22.94rem] h-[8.94rem] text-gray-3">
// //           Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a
// //           malesuada pellentesque diam interdum egestas. Odio est nunc
// //           scelerisque dolor tempus ultrices. Faucibus porttitor eget faucibus
// //           aenean sed tincidunt. Hendrerit commodo sodales orci nullam. Curabitur
// //           eu pretium lacus lacus dictumst et quam integer.
// //         </div>
// //         <div className="absolute top-[31.94rem] left-[1rem] text-[0.88rem] leading-[125%]inline-block w-[11.63rem] h-[1.31rem] text-gray-1">
// //           Feb 22, 2023 | 7 min read
// //         </div>
// //         <div className="absolute top-[17.75rem] left-[1rem] text-[1.38rem] leading-[125%] flex items-center w-[22.94rem] font-avnextb text-gray-3">
// //           How to turn your ideas into a reality by following this program
// //         </div>
// //       </div>
// //       <div className="absolute top-[104.81rem] left-[27.13rem] rounded-2xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-[34.38rem] h-[5.44rem] overflow-hidden text-center text-[2.56rem] font-tiehs">
// //         <b className="absolute top-[calc(50%_-_43.5px)] left-[calc(50%_-_275px)] leading-[125%] flex items-center justify-center w-[34.38rem] h-[5.44rem]">
// //           BLOGS
// //         </b>
// //       </div>
// //       <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[149.31rem] left-[35.63rem] rounded-md shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-[18.81rem] h-[3.5rem]">
// //         <div className="absolute top-[0.56rem] left-[6.31rem] w-[6.15rem] h-[2.44rem]">
// //           <div className="absolute top-[0rem] left-[0rem] text-[2.06rem] leading-[125%] font-medium text-black text-center flex items-center justify-center w-[5.13rem] h-[2.44rem]">
// //             Next
// //           </div>
// //           <Image
// //             className="absolute h-[54.28%] w-[12.56%] top-[23.08%] right-[0%] bottom-[22.64%] left-[87.44%] max-w-full overflow-hidden max-h-full"
// //             alt=""
// //             src={Arrow}
// //           />
// //         </div>
// //       </button>
// //     </>
// //   );
// // };


// import Image from "next/image";
// import blogimg1 from "./images/blogimg1.svg";
// import blogimg2 from "./images/blogimg2.svg";
// import blogimg3 from "./images/blogimg3.svg";
// import Arrow from "./images/Arrow.svg";

// export const Blog = () => {
//   return (
//     <>
//       <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
//         {[
//           {
//             img: blogimg1,
//             title: "How the 3D.js is shaping the future of the websites",
//             text: "Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a malesuada...",
//             date: "May 31, 2023 | 10 min read",
//           },
//           {
//             img: blogimg2,
//             title: "New workspace in the startup will increase the productivity",
//             text: "Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a malesuada...",
//             date: "Jan 26, 2023 | 2 min read",
//           },
//           {
//             img: blogimg3,
//             title: "How to turn your ideas into a reality by following this program",
//             text: "Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a malesuada...",
//             date: "Feb 22, 2023 | 7 min read",
//           },
//         ].map((blog, index) => (
//           <div
//             key={index}
//             className="p-4 text-gray-300 bg-white rounded-lg shadow-md"
//           >
//             <Image
//               src={blog.img}
//               alt=""
//               width={427}
//               height={271}
//               objectFit="cover"
//               className="rounded-t-lg"
//             />
//             <div className="mt-2 text-xl font-semibold text-gray-300">
//               {blog.title}
//             </div>
//             <div className="mt-2 text-gray-200">{blog.text}</div>
//             <div className="mt-2 text-sm text-gray-100">
//               {blog.date}
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="cursor-pointer border-none p-0 bg-white rounded-md shadow-md w-[18.81rem] h-[3.5rem] mx-auto mt-8">
//         <div className="flex items-center justify-center">
//           <div className="text-xl font-medium text-center text-black">
//             Next
//           </div>
//           <Image
//             src={Arrow}
//             alt=""
//             width={22}
//             height={22}
//             objectFit="contain"
//             className="ml-2"
//           />
//         </div>
//       </button>
//     </>
//   );
// };


import Image from "next/image";
import blogimg1 from "./images/blogimg1.svg";
import blogimg2 from "./images/blogimg2.svg";
import blogimg3 from "./images/blogimg3.svg";
import Arrow from "./images/Arrow.svg";

export const Blog = () => {
  return (
    <>
      <div className="bg-[#F5F7F7] pl-[2.81rem] pr-[2.81rem]">
      <div className="flex items-center justify-center">
              <button className="text-[1.5rem] leading-[125%] w-auto px-10 mb-4 shadow-lg bg-white text-black font-bold rounded-md">
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
              title: "New workspace in the startup will increase the productivity",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consectetur. Ratione fugit rerum sint. Quisquam quis ut itaque suscipit exercitationem enim, expedita facilis nam commodi hic, in veniam! Illum, necessitatibus! Lorem ipsum dolor sit amet consectetur. Nunc placerat orci auctor a malesuada...",
              date: "Jan 26, 2023 | 2 min read",
            },
            {
              img: blogimg3,
              title: "How to turn your ideas into a reality by following this program",
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
              <div className="mt-2 text-sm text-gray-600">
                {blog.date}
              </div>
            </div>
          ))}
        </div>
        {/* <button className="cursor-pointer text-center border-none p-0 bg-white m-auto flex flex-center rounded-md shadow-md w-[18.81rem] h-[3.5rem]  mt-8">
        <div className="flex items-center justify-center text-center">
          <div className="text-xl font-medium text-center text-black">
            Next
          </div>
          <Image
            src={Arrow}
            alt=""
            width={22}
            height={22}
            objectFit="contain"
            className="ml-2"
          />
        </div>
      </button> */}
        <div className="flex items-center justify-center pt-6 ">
        
          <button className="text-[1.5rem] leading-[125%] w-auto px-6 py-3 bg-white shadow-xl m-4 text-black font-bold rounded-md">
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
    </>
  );
};
