import { Noto_Sans_Old_Italic } from "next/font/google";
export const Footer = () => {
    return (
      <>
     
      <div className="bg-gray-100 w-screen h-[30rem] ml-[12rem] foot-mh">

        <div className="flex flex-row w-full h-[24rem] foot-res">
          <div className="w-2/6 h-full mt-[3rem] foot-left">
          <h1 className="font-avnextb font-extralight text-22xl">Fueled by ❤️ for <br /><mark className="text-sky-400 bg-gray-100">software </mark>and the <br />brilliant minds <mark className="text-green-400 bg-gray-100">behind <br />it</mark>.</h1>
          </div>

          <div className="w-1/2 h-full flex flex-row  mr-[10rem] mt-[3rem] foot-right">
              <div className="w-1/3 h-full flex-col">
                 <h2 className="font-avnext font-semibold text-sm text-gray-400 mb-[0.6rem] text-">COMMUNITY</h2>
                 <p className="font-avnext font-medium mb-[0.6rem]"><a href="#">Organize a hackathon</a></p>
                 <p className="font-avnext font-medium mb-[0.6rem]"><a href="#">Explore hackathons</a></p>
                 <p className="font-avnext font-medium mb-[0.6rem]"><a href="#">Brand Assets</a></p>
              </div>

              <div className="w-1/3 h-full flex-col">
                 <h2 className="font-avnext font-semibold text-sm text-gray-400 mb-[0.6rem] text-">COMPANY</h2>
                 <p className="font-avnext font-medium mb-[0.6rem]"><a href="#">About</a></p>
                 <p className="font-avnext font-medium mb-[0.6rem]"><a href="#">Blog</a></p>
                 <p className="font-avnext font-medium mb-[0.6rem]"><a href="#">Carrers</a></p>
              </div>

              <div className="w-1/3 h-full flex-col">
                 <h2 className="font-avnext font-semibold text-sm text-gray-400 mb-[0.6rem] text-">SUPPORT</h2>
                 <p className="font-avnext font-medium mb-[0.6rem]"><a href="#">Help</a></p>
                 <p className="font-avnext font-medium mb-[0.6rem]"><a href="#">Status</a></p>
                 <p className="font-avnext font-medium mb-[0.6rem]"><a href="#">Contact us</a></p>
              </div>
             
          </div>
        </div>

       <div className=" h-[6rem] w-full">
        <hr className=" text-xl font-bold  border-solid border border-gray-300 w-4/5"/>
          <p className="font-{Noto_Sans_Old_Italic} font-light text-base mt-[2rem] foot-cp-p">© 2023, RAMA RAGHAVA CONSUMABLES PRIVATE LIMITED. All rights reserved.</p>
       </div>
      </div>
      </>
    );
  };
  