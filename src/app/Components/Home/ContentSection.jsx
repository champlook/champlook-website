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
      {/* <div className="bg-white ">
      
        <div className="grid  sm:max-[1000px]:grid-cols-2 max-[640px]:hidden  sm:grid gap-4 m-auto bg-white max-w-[50%] rounded-md border-black border-2 text-[2rem]  break-word font-semibold leading-[125%] text-center">
          <div className="text-white rounded-md bg-red">Discover</div>
          <div>Hackathon</div>
          <div>Fellowship</div>
        </div>

        
      </div> */}
      <div className="bg-white">
        <div className="grid gap-4 max-w-min m-auto bg-white max-[640px]:hidden grid-flow-col border-2 border-black w-auto rounded-md   text-[2rem]   font-semibold leading-[125%] text-center">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
          <span className="items-stretch object-fill w-auto p-3 text-white rounded-md bg-red">Discover</span>
          <span className="w-auto p-3 text-black bg-white rounded-md">Hackathon</span>
          <span className="w-auto p-3 text-black bg-white rounded-md">Fellowship</span>
        </div>
      </div>



      <div className="bg-[#F5F7F7] pl-[2.81rem] pr-[2.81rem]">
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
          <div className="w-[100%] sm:w-[45%] md:w-[50%] lg:w-[30%]  max-[640px]:mb-5 bg-white text-white h-auto object-cover shadow-lg rounded">
            <Image
              // className="  rounded-[10px] w-[42.75rem] p-4 h-stretch object-stretch"
              // className="  rounded-[10px] w-[42.75rem]  h-full  object-cover"
              className="max-w-full min-h-full"
              alt="Main banner"
              src={banner}

            // width={427.04}
            // height={603.04}
            // fillsizes="(max-width: 768px) h-full, (max-width: 1200px) h-full, 100vh"
            // w-[42.75rem] h-[24.19rem] object-cover
            />
          </div>
          <div className="w-[100%] sm:w-[55%] md:w-[50%] lg:w-[70%]  bg-white p-10  sm:ml-8 h-auto shadow-lg rounded mr-[1rem]">
            {/* <div className="flex flex-col items-center sm:flex-row  justify-between sm:items-start text-[2.56rem] leading-[125%] font-avnextb text-gray-3">

              <b className="text-2.56rem leading-[125%] font-avnextb text-gray-3 ">
                Hackathon 2015
              </b>
              <div className="flex flex-wrap justify-between mt-4 sm:justify-start sm:mt-0 ">
                <Image
                  className="w-[3.75rem] h-[3.75rem] m-2"
                  alt=""
                  src={twittericon}
                />
                <Image
                  className="w-[3.75rem] h-[3.75rem] m-2"
                  alt=""
                  src={linkedinicon}
                />
                <Image
                  className="w-[3.75rem] h-[3.75rem] m-2"
                  alt=""
                  src={linkicon}
                />
              </div>
            </div> */}


            <div className="grid grid-cols-1 lg:grid-cols-2">
              <span className="sm:items-start text-[2.56rem] leading-[125%] font-avnextb text-gray-3">
                <b className="text-2.56rem leading-[125%] font-avnextb text-gray-3 ">
                  Hackathon 2015
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

            <div className=" text-[1.13rem] leading-[125%] font-avnextb text-gray-1 text-left  w-[6.69rem] h-[1.63rem]">
              Hackathon
            </div>

            <div className=" pt-8 text-[1.13rem] leading-[125%]  text-black text-left ">
              ETHIndia grants program is the ethos of a garden of possibilities.
              We believe that with the right resources and support, builders can
              grow and flourish, and their ideas can blossom into something
              amazing. That's why we're on a mission to help builders build on
              Ethereum and unlock the full potential of the ecosystem.
            </div>

            <div className=" text-[1.13rem] pt-8 leading-[125%] text-dImageray-100 text-left  w-[6.69rem] h-[1.63rem]">
              THEME
            </div>

            <div className="flex flex-row text-center pt-9 justify-evenly">
              <div className=" rounded-xl box-border w-[8.47rem]  h-[2.25rem] border-[2px] border-solid border-whitesmoke-200">
                <b className="text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkgray text-left">
                  Flutter
                </b>
              </div>
              <div className=" rounded-xl box-border w-[8.47rem] h-[2.25rem] border-[2px] border-solid border-whitesmoke-200">
                <b className=" text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkgray text-left">
                  Blockchain
                </b>
              </div>
              <div className=" rounded-xl box-border w-[8.47rem] h-[2.25rem] border-[2px] border-solid border-whitesmoke-200">
                <b className=" text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkgray text-left">
                  24 HR
                </b>
              </div>
            </div>

            {/* <div className="flex flex-col flex-wrap  py-[2rem] pr-[6.63rem] pl-[0rem] items-start justify-start gap-[0.25rem] z-[0]">
              <div className="relative text-[0.88rem] tracking-[1.68px] font-bold  leading-[1rem] uppercase  text-silver text-left">
                Runs from 
              </div>
              <b className="relative text-[1.25rem] leading-[1.75rem]  text-darkslategray-200 text-left font-avnextb">
                May 1 - Dec 1, 2023 
              </b>
            </div> */}

            <div className="grid grid-cols-1 gap-10 mt-10 min-[968px]:grid-cols-2">
              <div>
                <div className="relative text-[0.88rem] tracking-[1.68px] font-bold  leading-[1rem] uppercase  text-silver text-left">
                  Runs from
                </div>
                <div className="relative text-[1.25rem] leading-[1.75rem]  text-darkslategray-200 text-left font-avnextb">
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

            <div className="flex flex-row p-10 text-center justify-evenly">
              <div className=" rounded-2xl bg-snow-100 w-[5.59rem] h-[2rem]">
                <b className=" text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercasetext-darkslategray-100 text-left font-avnextb">
                  ONLINE
                </b>
              </div>

              <div className=" rounded-2xl bg-snow-100 w-[5.59rem] h-[2rem]">
                <b className="text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkslategray-100 text-left  font-avnextb">
                  24HR
                </b>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="text-[1.5rem] leading-[125%] w-auto px-12 py-2 bg-red text-white font-bold rounded-md">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex  justify-evenly  pb-[4rem] flex-col  sm:flex-row">
          <div className="w-[100%] sm:w-[70%] p-4 mr-4 max-[640px]:mb-4 bg-white text-black h-auto shadow-lg rounded">
            <Image
              className=" w-[42.75rem] h-[24.19rem] object-cover"
              alt=""
              src={fellowbanner}
            />

            <div className=" leading-[125%] text-[2rem] font-medium flex items-center w-[11.5rem]  font-avnextr">
              Introducing
            </div>
            <b className=" text-[2.5rem] leading-[125%]  text-indianred  w-[21.63rem]  font-avnextb">
              Elon Fellowship!
            </b>
            <div className=" text-[1.5rem] leading-[125%]  w-[44.38rem] contents">
              "Join the transformative Elon Fellowship, empowering aspiring
              startups with extensive training, funding, and mentorship to bring
              their innovative ideas to life."
            </div>
          </div>
          <div className="w-[100%] sm:w-[30%] p-4 max-[640px]:mb-4 bg-white text-black h-auto shadow-lg rounded">
            <div className="text-[2rem] leading-[125%] inline-block  font-avnextb  ">
              Elon Fellowship for budding entrepreneurs
            </div>
            <div className="text-[1rem] leading-[125%]  w-[22.25rem] h-[9.31rem] text-gray-1 contents">
              The Fellowship is a prestigious program designed to foster and
              support aspiring entrepreneurs in their journey to build
              successful businesses and create a positive impact in the
              entrepreneurial ecosystem.
            </div>

            <div className="flex flex-row justify-evenly">
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

            <div className=" text-[1.13rem] leading-[125%] text-gray-1 pt-6">
              Starts From
            </div>
            <div className=" leading-[125%] border-l-8 border-red rounded">
              14th Sept to 14th Oct
            </div>

            <div className="flex flex-col p-4 mt-6 font-extrabold border-2 text-[1.5rem] border-black rounded-md w-fit bg-[#FAF4F4]">
              <p className="">Applications Close in</p>
              <div className="m-0 text-crimson-100">
                <CountdownTimer targetTime={targetTime} />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-[1.5rem] leading-[125%] m-6 w-auto p-2 bg-red text-white font-bold rounded-md">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

