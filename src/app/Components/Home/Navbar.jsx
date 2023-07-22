import Image from "next/image";
import img1 from "./images/logo.svg";
import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="absolute top-[0rem] left-[0rem] bg-white w-[100rem] h-[5.38rem] text-center text-[1.13rem] text-dimgray-200 font-avnextr ">
      <Link href="#" >
        <Image
          className="absolute top-[0.81rem] left-[5.19rem] w-[12.25rem] h-[3.69rem] object-cover"
          alt=""
          src={img1}
        />
      </Link>

      <div className="absolute top-[1.44rem] left-[20.38rem] leading-[125%] flex items-center justify-center w-[4.38rem] h-[2.5rem]">
        <Link href="/home" className="font-avnext font-bold">
          Home
        </Link>
      </div>
      <div className="absolute top-[1.44rem] left-[25.88rem] leading-[125%] flex items-center justify-center w-[2.94rem] h-[2.5rem]">
        <Link href="/blog" className="font-avnext font-bold">
         Blog
        </Link>
      </div>
      <button className="cursor-pointer p-0 bg-white absolute top-[1.19rem] left-[78.69rem] rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] box-border w-[9.86rem] h-[3rem] overflow-hidden [transform:_rotate(-0.36deg)] [transform-origin:0_0] border border-solid border-gray-200">
        <div className="absolute top-[0.61rem] left-[3.12rem] text-[1.38rem] leading-[125%] font-avenir-next text-black text-center">
         <Link href='/' className="font-avnext font-bold">Login</Link> 
        </div>
      </button>
      <button className="cursor-pointer p-0 bg-crimson-100 absolute top-[1.19rem] left-[68.19rem] rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] box-border w-[9.86rem] h-[3rem] overflow-hidden [transform:_rotate(-0.36deg)] [transform-origin:0_0] border border-solid  border-gray-200 hover:animate-[2s_ease-in_0s_1_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <div className="absolute top-[0.61rem] left-[3.5rem] text-[1.38rem] leading-[125%] font-avenir-next text-white text-center">
        <Link href='/' className="font-avnext font-bold">Join</Link>
        </div>
      </button>
      <div className="absolute top-[1.44rem] left-[30.56rem] leading-[125%] text-left flex items-center w-[5.69rem] h-[2.5rem]">
        <Link href='/aboutus' className="font-avnext font-bold">About Us</Link>
      </div>
    </div>
  );
};
