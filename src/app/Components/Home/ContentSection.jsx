"use  client";
import Image from "next/image";
// import banner from "./images/banner.svg";
import banner from "./images/banner.jpg";
import joinusarrow from "./images/joinusarrow.svg";
import twittericon from "./images/twittericon.jpg";
import linkedinicon from "./images/linkedinicon.jpg";
import linkicon from "./images/linkicon.jpg";
import person1 from "./images/person1.jpg";
import person2 from "./images/person2.jpg";
import person3 from "./images/person3.jpg";
// import fellowbanner from "./images/fellowbanner.svg";
import fellowbanner from "./images/fellowbanner.jpg";
import CountdownTimer from "./CountdownTimer";
export const ContentSection = () => {
  const targetTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

  return (
    <>
      
      <div className="py-4 bg-white">
        <div className="grid gap-6 max-w-min m-auto bg-white max-[640px]:hidden grid-flow-col border-2 border-black w-auto rounded-md   text-[2rem]   font-semibold leading-[110%] text-center">
          
          <span className="items-stretch object-fill w-auto p-3 text-white rounded-md bg-red">Discover</span>
          <span className="w-auto p-3 text-black bg-white rounded-md">Hackathon</span>
          <span className="w-auto p-3 text-black bg-white rounded-md">Fellowship</span>
        </div>
      </div>



      <div className="bg-[#F5F7F7] pl-[2rem] pr-[2rem] sm:pl-[5rem] sm:pr-[5rem]">
        <div className="sm:hidden text-[2.56rem] leading-[125%]  font-avnextb text-gray-3">
          Unleash Your <br /> Creativity. Join <br /> the{" "}
          <span className="text-red">Hackathon </span>
          <br /> Revolution!
        </div>
        <div className="inline-flex items-center justify-center bg-[#F5F7F7]">
          <span className="text-[1.5rem] sm:hidden leading-[150%] m-6  min-w-full px-10 bg-red text-white font-bold rounded-md">
            Join us
          </span>



        </div>
        <div className=" max-[640px]:hidden  pl-[6.88rem]  text-[2.19rem] leading-[125%] font-semibold font-tiehs w-[6.06rem] h-[3.31rem]">
          Now
        </div>

        <div className="flex  justify-evenly  pb-[4rem] flex-col  sm:flex-row">
          <div className="w-[100%] sm:w-[48%] md:w-[50%] lg:w-[40%] p-0 sm:p-4 max-[640px]:mb-5 bg-white text-white h-auto object-cover shadow-lg rounded-lg">
            <Image
             
              className="max-w-full min-h-full "
              alt="Main banner"
              src={banner}

           
            />
          </div>
          <div className="w-[100%] sm:w-[52%] md:w-[50%] lg:w-[60%]  bg-white p-10  sm:ml-8 h-auto shadow-lg rounded-lg mr-[1rem]">
           

            <div className="grid grid-cols-1 -mr-6 lg:grid-cols-2">
              <span className="sm:items-start text-[2.56rem] leading-[125%] font-avnextb text-gray-3">
                <b className="text-2.56rem leading-[125%] font-avnextb text-gray-3 ">
                  Hackathon 2023
                </b>
              </span>
              <div className="flex justify-around mt-4 sm:mt-0 ">
                <Image
                  className="w-[3.75rem] h-[3.75rem] "
                  alt=""
                  src={twittericon}
                />
                <Image
                  className="w-[3.75rem] h-[3.75rem] "
                  alt=""
                  src={linkedinicon}
                />
                <Image
                  className="w-[3.75rem] h-[3.75rem] "
                  alt=""
                  src={linkicon}
                />
              </div>

            </div>

            <div className=" text-[1.13rem] max-[640px]:hidden leading-[125%] font-avnextb text-gray-1 text-left  w-[6.69rem] h-[1.63rem]">
              Hackathon
            </div>

            <div className=" pt-8 text-[1.13rem] leading-[125%] font-avnext text-black text-left " >
              ETHIndia grants program is the ethos of a garden of possibilities.
              We believe that with the right resources and support, builders can
              grow and flourish, and their ideas can blossom into something
              amazing. That's why we're on a mission to help builders build on
              Ethereum and unlock the full potential of the ecosystem.
            </div>

            

            <div className="text-[1.13rem] font-avnextb leading-[125%] flex  sm:justify-start justify-center pt-6 ">
            THEME
            </div>


            
            <div className="flex flex-row flex-wrap justify-center gap-2 text-center sm:justify-start sm:gap-10 pt-9">
              <div className=" rounded-xl box-border  h-[2.25rem]  border-[2px] border-solid border-whitesmoke-200">
                <b className="text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkgray text-left px-4">
                  Flutter
                </b>
              </div>
              <div className=" rounded-xl box-border  h-[2.25rem]  border-[2px] border-solid border-whitesmoke-200">
                <b className=" text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkgray text-left px-4">
                  24 HR
                </b>
              </div>
              <div className=" rounded-xl box-border  h-[2.25rem]  border-[2px] border-solid border-whitesmoke-200">
                <b className=" text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkgray text-left px-6">
                  Blockchain
                </b>
              </div>
             
            </div>

            

            <div className="grid grid-cols-1 gap-10 mt-10 min-[968px]:grid-cols-2">
              <div className="border-l-8 border-red">
                <div className="relative text-[0.88rem] tracking-[1.68px] font-bold pl-2 leading-[1rem] uppercase  text-silver text-left">
                  Runs from
                </div>
                <div className="relative pt-2 text-[1.25rem] leading-[1.75rem] pl-2  text-darkslategray-200 text-left font-avnextb">
                  May 1 - Dec 1, 2023
                </div>
              </div>

              <div className="flex flex-row gap-[0.5rem]">
                <Image
                  className="  w-[2.25rem] h-[2.25rem] object-cover  "
                  alt=""
                  src={person1}
                />
                <Image
                  className=" w-[2.25rem] h-[2.25rem] object-cover border-4 -ml-6 border-white rounded-lg"
                  alt=""
                  src={person2}
                />
                <Image
                  className=" w-[2.25rem] h-[2.25rem] object-cover border-4 -ml-6 border-white rounded-lg"
                  alt=""
                  src={person3}
                />
                <b className="relative text-[1.13rem] leading-[1.5rem]  text-lightseagreen text-left">
                  +5000 participating
                </b>
              </div>
            </div>

            <div className="flex flex-row justify-start gap-6 mt-10 mb-5 mr-10 text-center gap">
              <div className=" rounded-2xl bg-snow-100 w-[5.59rem] h-[2rem] ">
                <b className=" p-4 text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercasetext-darkslategray-100 text-left font-avnextb">
                  ONLINE
                </b>
              </div>

              <div className=" rounded-2xl bg-snow-100 w-[5.59rem] h-[2rem]">
                <b className=" p-8 text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkslategray-100 text-left  font-avnextb">
                  24HR
                </b>
              </div>
            </div>

            
            <div className="flex items-center justify-center pt-4 mb-4">
              <button className="text-[1.5rem] leading-[125%] mt-6 px-12 w-auto p-2 bg-red text-white font-bold rounded-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex  justify-evenly  pb-[4rem] flex-col  sm:flex-row">
          <div className="w-[100%] sm:w-[65%] px-8 p-4 mr-4 max-[640px]:mb-4 bg-white text-black h-auto shadow-lg rounded-lg">
            <Image
              className=" w-[42.75rem] h-[24.19rem] object-cover"
              alt=""
              src={fellowbanner}
            />

            <div className="mt-4 leading-[125%] text-[2rem] font-medium flex items-center w-[11.5rem] pb-2 font-avnextb">
              Introducing
            </div>
            <b className=" text-[2.5rem] leading-[125%]  text-indianred    font-avnextb">
              Elon Fellowship!
              <br />
            </b>
            <div className="mt-4 text-[1.5rem] leading-[125%] " >
              "Join the transformative Elon Fellowship, empowering aspiring
              startups with extensive training, funding, and mentorship to bring
              their innovative ideas to life."
            </div>
          </div>
          <div className="w-[100%] sm:w-[35%] px-6 pt-10 max-[640px]:mb-4 bg-white text-black break-all h-auto shadow-lg rounded-xl ">
            
            <div className="text-[2rem] leading-[125%] inline-block  font-avnextb " style={{wordBreak:"break-word"}}>
              Elon Fellowship for budding entrepreneurs
            </div>

            <div className="text-[1rem] leading-[125%]  w-[22.25rem] h-[9.31rem] text-black-1  contents">
              The Fellowship is a prestigious program designed to foster and
              support aspiring entrepreneurs in their journey to build
              successful businesses and create a positive impact in the
              entrepreneurial ecosystem.
            </div>

            <div className="flex flex-row pt-10 justify-evenly">
              <Image
                className=" w-[3.75rem] h-[3.75rem]"
                alt=""
                src={twittericon}
              />
              <Image
                className=" w-[3.75rem] h-[3.75rem]"
                alt=""
                src={linkedinicon}
              />

              <Image
                className=" w-[3.75rem] h-[3.75rem]"
                alt=""
                src={linkicon}
              />
            </div>
            <div className="pl-4 mt-6 border-l-8 rounded border-red">
            <div className=" text-[1.13rem] leading-[125%] text-gray-1 ">
              Starts From
            </div>
            <div className=" font-bold text-[1.25rem] "style={{"word-spacing":"-1px"}}>
              14th Sept to 14th Oct
            </div>
            </div>

            <div className="flex flex-col pl-4 pr-4 pt-2 pb-2 mt-6 font-extrabold border-2  border-black rounded-md w-fit bg-[#FAF4F4]">
              <p className="">Applications Close in</p>
              <div className="m-0 text-crimson-100">
                <CountdownTimer targetTime={targetTime} />
              </div>
            </div>
            <div className="flex items-center justify-center pt-4 mb-4">
              <button className="text-[1.5rem] leading-[125%] mt-6 px-12 w-auto p-2 bg-red text-white font-bold rounded-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

