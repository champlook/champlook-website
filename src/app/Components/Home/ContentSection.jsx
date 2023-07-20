import Image from "next/image";
import banner from "./images/imageban.svg";
import twittericon from "./images/twittericon.svg";
import linkedinicon from "./images/linkedinicon.svg";
import linkicon from "./images/linkicon.svg";
import person1 from "./images/person1.svg";
import person2 from "./images/person2.svg";
import person3 from "./images/person3.svg";
import fellowbanner from "./images/fellowbanner.svg";
export const ContentSection = () => {
  return (
    <>
      <div className="absolute top-[12.13rem] left-[6.88rem] text-[2.19rem] leading-[125%] font-semibold font-tiehs flex items-center w-[6.06rem] h-[3.31rem]">
        Now
      </div>
      <div className="absolute top-[5.63rem] left-[0rem] bg-white w-[90rem] h-[5.38rem] text-center text-[1.75rem]">
        <div className="absolute top-[1rem] left-[28.44rem] rounded-lg box-border w-[35.5rem] h-[3.44rem] overflow-hidden border-[1px] border-solid border-black">
          <div className="absolute top-[0rem] left-[0rem] bg-crimson-200 w-[9.88rem] h-[3.44rem] text-white">
            <div className="absolute top-[0.63rem] left-[0.06rem] leading-[125%] inline-block w-[9.75rem]">
              Discover
            </div>
          </div>
          <div className="absolute top-[0rem] left-[calc(50%_-_71px)] rounded-lg w-[9.88rem] h-[3.44rem]">
            <div className="absolute top-[0.63rem] left-[calc(50%_-_78px)] leading-[125%] inline-block w-[9.75rem]">
              Hackathon
            </div>
          </div>
          <div className="absolute top-[0rem] left-[25.63rem] rounded-lg w-[9.88rem] h-[3.44rem]">
            <div className="absolute top-[0.63rem] left-[-0.31rem] leading-[125%] inline-block w-[9.75rem]">
              Fellowship
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[16rem] left-[calc(50%_-_627px)] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-[30.25rem] h-[40.13rem]">
        <Image
          className="absolute top-[1.25rem] left-[1.75rem] rounded-[10px] w-[26.69rem] h-[37.69rem] object-cover"
          alt="Main banner"
          src={banner}
        />
      </div>
      <form className="absolute top-[16rem] left-[calc(50%_-_115px)] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-[46.44rem] h-[40.13rem]">
        <b className="absolute top-[2.06rem] left-[2.75rem] text-[2.56rem] leading-[125%] flex font-avnextb text-gray-3 text-left items-center w-[40rem] h-[5.13rem]">
          Hackathon 2015
        </b>
        <div className="absolute top-[6.38rem] left-[2.75rem] text-[1.13rem] leading-[125%] font-avnextb text-gray-1 text-left flex items-center w-[6.69rem] h-[1.63rem]">
          Hackathon
        </div>
        <div className="absolute top-[18.44rem] left-[2.75rem] text-[1.13rem] leading-[125%] text-dImageray-100 text-left flex items-center w-[6.69rem] h-[1.63rem]">
          THEME
        </div>
        <div className="absolute top-[24.75rem] left-[2.75rem] flex flex-row items-start justify-start">
          <div className="flex flex-row py-[0.5rem] pr-[0rem] pl-[1rem] items-start justify-start relative">
            <div className="flex flex-col py-[0rem] pr-[6.63rem] pl-[0rem] items-start justify-start gap-[0.25rem] z-[0]">
              <div className="relative text-[0.88rem] tracking-[1.68px] leading-[1rem] uppercase  text-silver text-left">
                Runs from
              </div>
              <b className="relative text-[1.25rem] leading-[1.75rem]  text-darkslategray-200 text-left font-avnextb">
                May 1 - Dec 1, 2023
              </b>
            </div>
            <div className="absolute my-0 mx-[!important] h-full top-[0rem] bottom-[0rem] left-[0rem] rounded-[1.5px] bg-indianred w-[0.19rem] z-[1]" />
          </div>
        </div>
        <div className="absolute top-[30.5rem] left-[3.19rem] rounded-2xl bg-snow-100 w-[5.59rem] h-[3rem]">
          <b className="absolute top-[1rem] left-[1rem] text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercasetext-darkslategray-100 text-left font-avnextb">
            ONLINE
          </b>
        </div>
        <div className="absolute top-[30.31rem] left-[12.5rem] rounded-2xl bg-snow-100 w-[5.59rem] h-[3rem]">
          <b className="absolute top-[1rem] left-[1.63rem] text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkslategray-100 text-left  font-avnextb">
            24HR
          </b>
        </div>
        <div className="absolute top-[20.94rem] left-[2.81rem] rounded-xl box-border w-[8.47rem] h-[2.25rem] border-[2px] border-solid border-whitesmoke-200">
          <b className="absolute top-[0.63rem] left-[calc(50%_-_32.76px)] text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkgray text-left">
            Flutter
          </b>
        </div>
        <div className="absolute top-[20.94rem] left-[13.75rem] rounded-xl box-border w-[8.47rem] h-[2.25rem] border-[2px] border-solid border-whitesmoke-200">
          <b className="absolute top-[0.63rem] left-[1.13rem] text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkgray text-left">
            Blockchain
          </b>
        </div>
        <div className="absolute top-[20.94rem] left-[24.69rem] rounded-xl box-border w-[8.47rem] h-[2.25rem] border-[2px] border-solid border-whitesmoke-200">
          <b className="absolute top-[0.63rem] left-[calc(50%_-_21.76px)] text-[0.75rem] tracking-[1.44px] leading-[1rem] uppercase  text-darkgray text-left">
            24 HR
          </b>
        </div>
        <div className="absolute top-[26.06rem] left-[21.13rem] flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="flex flex-row items-start justify-start">
            <div className="relative rounded-lg box-border w-[2.25rem] h-[2.25rem] overflow-hidden shrink-0 border-[1px] border-solid border-white">
              <Image
                className=" top-[0.19rem] left-[0.19rem] w-[2.25rem] h-[2.25rem] object-cover"
                alt=""
                src={person1}
              />
            </div>
            <div className="relative rounded-lg box-border w-[2.25rem] h-[2.25rem] overflow-hidden shrink-0 ml-[-1rem] border-[1px] border-solid border-white">
              <Image
                className=" top-[0.19rem] left-[0.19rem] w-[2.25rem] h-[2.25rem] object-cover"
                alt=""
                src={person2}
              />
            </div>
            <div className="relative rounded-lg box-border w-[3.25rem] h-[3.2rem] overflow-hidden shrink-0 ml-[-1rem]  border-white">
              <Image
                className="absolute top-[0.19rem] left-[0.19rem] w-[2.55rem] h-[2.25rem] object-cover"
                alt=""
                src={person3}
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <b className="relative text-[1.13rem] leading-[1.5rem]  text-lightseagreen text-left">
              +5000 participating
            </b>
          </div>
        </div>
        <div className="absolute top-[9.25rem] left-[2.81rem] text-[1.13rem] leading-[125%]  text-black text-left flex items-center w-[41.38rem] h-[7.88rem]">
          ETHIndia grants program is the ethos of a garden of possibilities. We
          believe that with the right resources and support, builders can grow
          and flourish, and their ideas can blossom into something amazing.
          That's why we're on a mission to help builders build on Ethereum and
          unlock the full potential of the ecosystem.
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-crimson-100 absolute top-[34.88rem] left-[calc(50%_-_135.5px)] rounded-2xl w-[16.88rem] h-[3.44rem] overflow-hidden">
          <div className="absolute top-[0.81rem] left-[4.56rem] text-[1.5rem] leading-[125%]  text-white text-left">
            Apply now
          </div>
        </button>
        <Image
          className="absolute top-[3.06rem] left-[28.75rem] w-[3.75rem] h-[3.75rem]"
          alt=""
          src={twittericon}
        />
        <Image
          className="absolute top-[3.06rem] left-[40.56rem] w-[3.75rem] h-[3.75rem]"
          alt=""
          src={linkedinicon}
        />
        <Image
          className="absolute top-[3.06rem] left-[34.63rem] w-[3.75rem] h-[3.75rem]"
          alt=""
          src={linkicon}
        />
      </form>
      <div className="absolute top-[57.88rem] left-[5.81rem] rounded-lg bg-white shadow-[0px_4px_2px_rgba(0,_0,_0,_0.1)] w-[50.69rem] h-[44.44rem] overflow-hidden text-[2rem]">
        <Image
          className="absolute top-[1.81rem] left-[3.75rem] w-[42.75rem] h-[24.19rem] object-cover"
          alt=""
          src={fellowbanner}
        />
        <div className="absolute top-[27.25rem] left-[3.75rem] leading-[125%] font-medium flex items-center w-[11.5rem]  font-avnextr">
          Introducing
        </div>
        <b className="absolute top-[30.88rem] left-[3.75rem] text-[2.5rem] leading-[125%] flex text-indianred items-center w-[21.63rem]  font-avnextb">
          Elon Fellowship!
        </b>
        <div className="absolute top-[35.13rem] left-[3.75rem] text-[1.5rem] leading-[125%] flex items-center w-[44.38rem]">
          "Join the transformative Elon Fellowship, empowering aspiring startups
          with extensive training, funding, and mentorship to bring their
          innovative ideas to life."
        </div>
      </div>
      <div className="absolute top-[57.88rem] left-[58.13rem] w-[26.13rem] h-[44.44rem] text-[1.5rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-[32px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-[26.13rem] h-[44.44rem] overflow-hidden mix-blend-normal">
          <div className="absolute top-[30.81rem] left-[1.75rem] rounded-2xl bg-snow-200 box-border w-[16.88rem] h-[5.56rem] overflow-hidden border-[1px] border-solid border-black">
            <div className="absolute top-[0.94rem] left-[1.13rem] leading-[125%]">
              <p className="m-0">Applications Close in</p>
              <p className="m-0 text-crimson-100">{`50d : 11h : 14m `}</p>
            </div>
          </div>
          <div className="absolute top-[24.38rem] left-[3.5rem] text-[1.13rem] leading-[125%] text-gray-1">
            Starts From
          </div>
          <div className="absolute top-[26.44rem] left-[3.38rem] leading-[125%]">
            14th Sept to 14th Oct
          </div>
          <div className="absolute top-[24.13rem] left-[1.94rem] box-border w-[0.5rem] h-[4.44rem] border-r-[4px] border-solid border-crimson-100" />
          <div className="absolute top-[3rem] left-[1.75rem] text-[2rem] leading-[125%] inline-block w-[23.44rem] font-avnextb">
            Elon Fellowship for budding entrepreneurs
          </div>
          <div className="absolute top-[8.88rem] left-[1.94rem] text-[1rem] leading-[125%] inline-block w-[22.25rem] h-[9.31rem] text-gray-1">
            The Fellowship is a prestigious program designed to foster and
            support aspiring entrepreneurs in their journey to build successful
            businesses and create a positive impact in the entrepreneurial
            ecosystem.
          </div>
          <Image
            className="absolute top-[19.06rem] left-[2.19rem] w-[3.75rem] h-[3.75rem]"
            alt=""
            src={twittericon}
          />
          <Image
            className="absolute top-[19.06rem] left-[14.06rem] w-[3.75rem] h-[3.75rem]"
            alt=""
            src={linkedinicon}
          />
          <Image
            className="absolute top-[19.06rem] left-[8.13rem] w-[3.75rem] h-[3.75rem]"
            alt=""
            src={linkicon}
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-crimson-100 absolute top-[38.31rem] left-[1.88rem] rounded-2xl w-[16.88rem] h-[3.44rem] overflow-hidden">
          <div className="absolute top-[0.81rem] left-[4.56rem] text-[1.5rem] leading-[125%]  text-white text-left">
            Apply now
          </div>
        </button>
      </div>
    </>
  );
};
