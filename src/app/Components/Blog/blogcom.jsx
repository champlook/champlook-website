import Image from "next/image";
import blog2 from "./images/blog2.svg";
import blog3 from "./images/blog3.svg";
import blog4 from "./images/blog4.svg";
import blog5 from "./images/blog5.svg";
import blog6 from "./images/blog6.svg";
import blog7 from "./images/blog7.svg";
import { Navbar } from "../Home/Navbar";
export default function BlogPage() {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="w-9/12 h-auto flex flex-row   ml-52 pb-3 space-x-2  mt-5 pr-3 responsive">
        <div className="bg-white w-1/3 h-full shadow-md rounded-md  border-gray-200 card">
          <Image
            src={blog2}
            width={500}
            height={500}
            className="p-1 h-auto w-full"
          />
          <h2 className="font-avnextb font-medium text-xl p-3 md:font-avnextb sm:font-avnextb">
            The way you plan will define the future of hackathon
          </h2>
          <p className="font-avnext font-medium text-base pl-3 pr-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            consequuntur eveniet quae veritatis, aut sed suscipit eadfsddf. Illo, quas
            quam? Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <p className="pt-2 pl-3 pr-3 pb-3 font-avnext font-medium text-base text-gray-400">
            May 31, 2023 | 10 min read
          </p>
        </div>
        <div className="bg-white w-1/3 h-full shadow-md rounded-md  border-gray-200 card">
          <Image
            src={blog3}
            width={500}
            height={500}
            className="p-1 h-auto w-full"
          />
          <h2 className="font-avnextb font-bold text-xl p-3">
            How books can help the teams to learn new strategies
          </h2>
          <p className="font-avnext font-medium text-base pl-3 pr-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            consequuntur eveniet quae veritatis, aut sed suscipit ea. Illo, quas
            quam? Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <p className="pt-2 pl-3 pr-3 pb-3 font-avnext font-medium text-base text-gray-400">
            Jun 26, 2023 | 2 min read
          </p>
        </div>
        <div className="bg-white w-1/3 h-full shadow-md rounded-md  border-gray-200 card">
          <Image
            src={blog4}
            width={500}
            height={500}
            className="p-1 h-auto w-full"
          />
          <h2 className="font-avnextb font-bold text-xl p-3">
            A review in the startup way and the Atomic habits
          </h2>
          <p className="font-avnext font-medium text-base pl-3 pr-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            consequuntur eveniet quae veritatis, aut sed suscipit ea. Illo, quas
            quam? Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <p className="pt-2 pl-3 pr-3 pb-3 font-avnext font-medium text-base text-gray-400">
            Feb 22, 2023 | 7 min read
          </p>
        </div>
      </div>
      <div className="w-9/12 h-auto flex ml-52 pb-3 space-x-2  mt-5 pr-3 responsive">
        <div className="bg-white w-1/3 h-full shadow-md rounded-md  border-gray-200 card">
          <Image
            src={blog5}
            width={500}
            height={500}
            className="p-1 h-auto w-full"
          />
          <h2 className="font-avnextb font-bold text-xl p-3">
            How the 3D.js shapping the future of the websites
          </h2>
          <p className="font-avnext font-medium text-base pl-3 pr-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            consequuntur eveniet quae veritatis, aut sed suscipit ea. Illo, quas
            quam? Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <p className="pt-2 pl-3 pr-3 pb-3 font-avnext font-medium text-base text-gray-400">
            May 31, 2023 | 10 min read
          </p>
        </div>
        <div className="bg-white w-1/3 h-full shadow-md rounded-md  border-gray-200 card">
          <Image
            src={blog6}
            width={500}
            height={500}
            className="p-1 h-auto w-full"
          />
          <h2 className="font-avnextb font-bold text-xl p-3">
            New workspace in the startups increases the prodactivity
          </h2>
          <p className="font-avnext font-medium text-base pl-3 pr-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            consequuntur eveniet quae veritatis, aut sed suscipit ea. Illo, quas
            quam? Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <p className="pt-2 pl-3 pr-3 pb-3 font-avnext font-medium text-base text-gray-400">
            Jun 26, 2023 | 2 min read
          </p>
        </div>
        <div className="bg-white w-1/3 h-full shadow-md rounded-md  border-gray-200 card">
          <Image
            src={blog7}
            width={500}
            height={500}
            className="p-1 h-auto w-full"
          />
          <h2 className="font-avnextb font-bold text-xl p-3">
            How to turn your ideas into a reality by following this program
          </h2>
          <p className="font-avnext font-medium text-base pl-3 pr-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            consequuntur eveniet quae veritatis, aut sed suscipit ea. Illo, quas
            quam? Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <p className="pt-2 pl-3 pr-3 pb-3 font-avnext font-medium text-base text-gray-400">
            Feb 22, 2023 | 7 min read
          </p>
        </div>
      </div>
      <div className="text-center mt-7 pb-3 blog-lm">
        <button className="text-center   bg-white text-gray-800 font-avnext font-semibold text-2xl w-60 h-12 rounded-md blog-lm-btn">
          Load more
        </button>
      </div>
    </div>
  );
}
