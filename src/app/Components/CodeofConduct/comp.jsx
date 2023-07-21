// export const comp = () => {
//   return <div>just for example</div>;
// };

// import blog2 from "./images/blog2.svg";
import Image from "next/image";
import homeicon from "./images/homeicon.svg";
import logo from "./images/logo.svg";
import mailicon from "./images/mailicon.svg";


const CodeOfConduct = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[205.53rem] text-left text-[1.56rem] text-crimson font-nunito-sans">
      <div className="absolute h-[calc(100%_-_3056px)] w-[calc(100%_-_640px)] top-[0rem] right-[20rem] bottom-[191rem] left-[20rem] text-[1.88rem] font-avnextb">
        <b className="absolute top-[10.81rem] left-[0rem] leading-[2.75rem] text-[#D81F1F]">
          Terms of Use
        </b>
        {/* <img
          className="absolute top-[6.25rem] left-[0rem] w-[10.13rem] h-[3.06rem] overflow-hidden"
          alt=""
          src="./images/logo-svg.svg"
        /> */}
        <Image src={logo}
            height={49}
            width={162}
            alt="logo"
            className=" absolute top-[6.25rem] left-[0rem] overflow-hidden">
           
        </Image>
      </div>
      <div className="absolute h-[calc(100%_-_2913px)] w-[calc(100%_-_640px)] top-[14.53rem] right-[20rem] bottom-[167.53rem] left-[20rem] text-[1.06rem] text-gray">
        <div className="absolute h-[calc(100%_-_332.5px)] w-full top-[1.44rem] right-[0rem] bottom-[19.34rem] left-[0rem] box-border text-[1.56rem] text-crimson font-avnextb border-b-[1px] border-solid border-lightgray-100">
          <b className="absolute top-[0rem] left-[0rem] leading-[2.31rem] text-[#D81F1F]">
            Applicability
          </b>
        </div>
        <div className="absolute h-[calc(100%_-_325.5px)] w-[calc(100%_+_10px)] top-[5.63rem] right-[-0.31rem] bottom-[14.72rem] left-[-0.31rem] ">
          <div className="absolute top-[0rem] left-[0rem] leading-[1.56rem] flex items-center w-[49.69rem] font-normal"
//           style={{
//             color: "#07131A",
// // fontFamily: "nunito",
// fontSize: "17px",
// fontStyle: "normal",
// fontWeight: "400",
// lineHeight: "25px"
//           }}
          >

          
            This policy applies to all areas associated with Champlook,
            including the following and their online equivalents (if
            applicable):
          </div>
        </div>
        <div className="absolute h-[calc(100%_-_247.5px)] top-[9.81rem] bottom-[5.66rem] left-[calc(50%_-_448.5px)] flex flex-col py-[0rem] pr-[33.25rem] pl-[2.5rem] box-border items-start justify-start text-[inherit] font-inherit">
          <div className="relative leading-[1.59rem]">
            <ul className="m-0 pl-[1.35rem]  font-normal">Hackathons</ul>
          </div>
          <div className="relative leading-[1.59rem] mt-[-0.03rem] font-normal">
            <ul className="m-0 pl-[1.35rem]">
              Talks, presentations, or demonstrations
            </ul>
          </div>
          <div className="relative leading-[1.59rem] mt-[-0.03rem] font-normal">
            <ul className="m-0 pl-[1.35rem]">Workshops</ul>
          </div>
          <div className="relative leading-[1.59rem] mt-[-0.03rem] font-normal">
            <ul className="m-0 pl-[1.35rem]">Parties and social events</ul>
          </div>
          <div className="relative leading-[1.59rem] mt-[-0.03rem] font-normal">
            <ul className="m-0 pl-[1.35rem]">Social media channels, etc.</ul>
          </div>
        </div>
        <div className="absolute top-[19.63rem] left-[0.34rem] leading-[1.56rem] font-normal">
          This Code of Conduct also extends to sponsors, partners, and all
          projects created during the hackathon
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_2974px)] w-[calc(100%_-_640px)] top-[38rem] right-[20rem] bottom-[147.88rem] left-[20rem] text-[1.06rem] text-gray">
        <div className="absolute h-[calc(100%_-_271.5px)] w-full top-[1.44rem] right-[0rem] bottom-[15.53rem] left-[0rem] box-border flex font-avnextb flex-row pt-[0rem] pb-[0.38rem] pr-[21.88rem] pl-[0rem] items-start justify-start text-[1.56rem] text-crimson border-b-[1px] border-solid border-lightgray-100">
          <b className="relative leading-[2.31rem] text-[#D81F1F]">
            No plagiarism or re-using of past work
          </b>
        </div>
        <div className="absolute h-[calc(100%_-_189.5px)] w-[calc(100%_-_1px)] top-[4.84rem] right-[0.03rem] bottom-[7rem] left-[0.03rem] flex flex-row py-[0rem] pr-[0.06rem] pl-[0rem] box-border items-start justify-start">
          <div className="relative leading-[1.56rem] flex items-center w-[49.88rem] shrink-0">
            <span className="[line-break:anywhere] w-full font-normal">
              <p className="m-0">
                We encourage participants to submit projects that have been
                developed exclusively during the hackathon. However, if you
                choose to submit projects that contain reused code or resubmit a
                project previously submitted to another hackathon, you must
                disclose such previous use and its extent during submission.
              </p>
            </span>
          </div>
        </div>
        <div className="absolute h-[calc(100%_-_239.5px)] w-[calc(100%_-_24px)] top-[13.44rem] right-[1.5rem] bottom-[1.53rem] left-[0rem] flex flex-row py-[0rem] pr-[1.56rem] pl-[0rem] box-border items-start justify-start">
          <div className="relative leading-[1.56rem]">
            <p className="m-0">{`If a project is found to contain undisclosed reused code upon inspection, the organizer may request `}</p>
            <p className="m-0">{`the participant to identify similarities and differences between the old and new work. Failure to comply `}</p>
            <p className="m-0 font-normal">
              or the presence of undisclosed reused code may result in automatic
              disqualification from winning awards.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_2683px)] w-[calc(100%_-_640px)] top-[57.66rem] right-[20rem] bottom-[110.03rem] left-[20rem] text-gray">
        <div className="absolute h-[calc(100%_-_562.5px)] w-full top-[1.44rem] right-[0rem] bottom-[33.72rem] left-[0rem] box-border flex flex-row pt-[0rem] pb-[0.38rem] pr-[37.31rem] pl-[0rem] items-start justify-start text-crimson border-b-[1px] border-solid border-lightgray-100">
          <b className="relative leading-[2.31rem] text-[#D81F1F] font-avnextb ">No discrimination</b>
        </div>
        <div className="absolute h-[calc(100%_-_555.5px)] w-[calc(100%_-_15px)] top-[6.41rem] right-[0.47rem] bottom-[28.31rem] left-[0.47rem] flex flex-row py-[0rem] pr-[2.94rem] pl-[0rem] box-border items-start justify-start text-[1.06rem]">
          <div className="relative leading-[1.56rem] flex items-center w-[46.13rem] shrink-0 font-normal">
            Champlook-hosted hackathons are committed to providing a safe and
            inclusive environment, free from discrimination. The following
            factors shall not be the basis for any form of discrimination:
          </div>
        </div>
        <div className="absolute w-[calc(100%_+_39px)] top-[calc(50%_-_120.75px)] right-[-1.22rem] left-[-1.22rem] flex flex-col py-[0rem] pr-[26.38rem] pl-[2.5rem] box-border items-start justify-start text-[inherit] font-nunito-sans font-normal">
          <div className="relative leading-[1.59rem]">
            <ul className="m-0 pl-[1.35rem]">
              <li className="mb-[false]">Gender</li>
              <li className="mb-[false]">Gender identity and expression</li>
              <li className="mb-[false]">Age</li>
              <li className="mb-[false]">Sexual orientation</li>
              <li className="mb-[false]">Disability</li>
              <li className="mb-[false]">Physical appearance</li>
              <li className="mb-[false]">Body size</li>
              <li className="mb-[false]">Race</li>
              <li className="mb-[false]">Ethnicity</li>
              <li className="mb-[false]">Nationality</li>
              <li className="mb-[false]">Religion</li>
              <li className="mb-[false]">Political views</li>
              <li className="mb-[false]">
                Previous hackathon attendance or lack thereof
              </li>
              <li className="mb-[false]">
                Computing experience or lack thereof
              </li>
              <li>Chosen programming language or tech stack</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_3074.5px)] w-[calc(100%_-_640px)] top-[95.5rem] right-[20rem] bottom-[96.66rem] left-[20rem] flex flex-col pt-[1.44rem] px-[0rem] pb-[1.5rem] box-border items-start justify-start gap-[1.5rem]">
        <div className="flex flex-row pt-[0rem] pb-[0.38rem] pr-[39rem] pl-[0rem] items-start justify-start border-b-[1px] border-solid border-lightgray-100">
          <b className="relative leading-[2.31rem] text-[#D81F1F] font-avnextb">No harassment</b>
        </div>
        <div className="flex flex-row py-[0rem] pr-[0.81rem] pl-[0rem] items-start justify-start text-[1.06rem] text-gray">
          <div className="relative leading-[1.56rem]">
            <p className="m-0">{`Harassment of hackathon participants in any form is strictly prohibited. This includes offensive `}</p>
            <p className="m-0">{`discriminatory verbal comments, public display of sexual material, deliberate intimidation, stalking, `}</p>
            <p className="m-0">{`disruption, inappropriate physical contact, unwelcome sexual advances, and unauthorized photography `}</p>
            <p className="m-0">or video recordings without consent.</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_2933.5px)] w-[calc(100%_-_640px)] top-[108.88rem] right-[20rem] bottom-[74.47rem] left-[20rem] text-[1.06rem] text-gray">
        <div className="absolute h-[calc(100%_-_312px)] w-full top-[1.13rem] right-[0rem] bottom-[18.38rem] left-[0rem] box-border flex flex-row pt-[0rem] pb-[0.38rem] pr-[28.44rem] pl-[0rem] items-start justify-start text-[1.56rem] text-crimson border-b-[1px] border-solid border-lightgray-100">
          <b className="relative leading-[2.31rem] text-[#D81F1F] font-avnextb">
            No recording without consent
          </b>
        </div>
        <div className="absolute h-[calc(100%_-_255px)] w-[calc(100%_+_9px)] top-[4.53rem] right-[-0.28rem] bottom-[11.41rem] left-[-0.28rem] flex flex-row py-[0rem] pr-[0.56rem] pl-[0rem] box-border items-start justify-start">
          <div className="relative leading-[1.56rem] flex items-center w-[50rem] shrink-0 font-normal">
            While photography and videography are encouraged, participants must
            have the opportunity to opt out of being photographed. If a
            participant expresses their objection after their photo or video has
            been taken, please delete it and, if shared online, make reasonable
            efforts to remove it from social media platforms.
          </div>
        </div>
        <div className="absolute h-[calc(100%_-_305px)] w-[calc(100%_-_4px)] top-[13.13rem] right-[0.13rem] bottom-[5.94rem] left-[0.13rem] flex flex-row py-[0rem] pr-[1.63rem] pl-[0rem] box-border items-start justify-start">
          <div className="relative leading-[1.56rem] flex items-center w-[48.13rem] shrink-0 font-normal">
            It is inappropriate to take photographs in settings where
            individuals have a reasonable expectation of privacy, such as
            bathrooms or sleeping areas.
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_3099.5px)] w-[calc(100%_-_608px)] top-[131.06rem] right-[18rem] bottom-[62.66rem] left-[20rem] flex flex-col pt-[1.44rem] px-[0rem] pb-[1.5rem] box-border items-start justify-start gap-[1.5rem]">
        <div className="flex flex-row pt-[0rem] pb-[0.38rem] pr-[32.69rem] pl-[0rem] items-start justify-start border-b-[1px] border-solid border-lightgray-100">
          <b className="relative leading-[2.31rem] text-[#D81F1F] font-avnextb">Creation of a safe space</b>
        </div>
        <div className="flex flex-row py-[0rem] pr-[2.44rem] pl-[0rem] items-start justify-start text-[1.06rem] text-gray">
          <div className="relative leading-[1.56rem]">
            <p className="m-0">{`Sponsors, partners, and participants are prohibited from using sexualised images, activities, or materials `}</p>
            <p className="m-0">{`for any unauthorised purposes at the hackathons. This includes the use of sexualised clothing, uniforms, `}</p>
            <p className="m-0 font-normal">
              costumes, or anything that creates a sexualised environment.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_3074.5px)] w-[calc(100%_-_598px)] top-[142.88rem] right-[17.38rem] bottom-[49.28rem] left-[20rem] flex flex-col pt-[1.44rem] px-[0rem] pb-[1.5rem] box-border items-start justify-start gap-[1.5rem]">
        <div className="flex flex-row pt-[0rem] pb-[0.38rem] pr-[34.94rem] pl-[0rem] items-start justify-start border-b-[1px] border-solid border-lightgray-100">
          <b className="relative leading-[2.31rem] text-[#D81F1F] font-avnextb">Intellectual Property</b>
        </div>
        <div className="flex flex-row py-[0rem] pr-[1.06rem] pl-[0rem] items-start justify-start text-[1.06rem] text-gray">
          <div className="relative leading-[1.56rem]">
            <p className="m-0">{`You will retain ownership of any developments you create, including the intellectual property rights therein. `}</p>
            <p className="m-0">{`By posting your submission on Champlook, you grant Champlook a non-exclusive, worldwide, royalty-free `}</p>
            <p className="m-0 font-normal">
              license to use, distribute, display, and reproduce your submission
              solely to the extent necessary for providing
            </p>
            <p className="m-0 font-normal">
              {" "}
              services on the Champlook platform. We will never attempt to steal
              or exploit your creations.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_3049px)] w-[calc(100%_-_640px)] top-[156.25rem] right-[20rem] bottom-[34.31rem] left-[20rem]">
        <div className="absolute h-[calc(100%_-_196.5px)] w-full top-[1.44rem] right-[0rem] bottom-[10.84rem] left-[0rem] box-border flex flex-row pt-[0rem] pb-[0.38rem] pr-[39.63rem] pl-[0rem] items-start justify-start border-b-[1px] border-solid border-lightgray-100">
          <b className="relative leading-[2.31rem] text-[#D81F1F] font-avnextb">Always report</b>
        </div>
        <div className="absolute w-[calc(100%_-_12px)] top-[calc(50%_+_33.25px)] right-[0.38rem] left-[0.38rem] flex flex-row py-[0rem] pr-[2.81rem] pl-[0rem] box-border items-start justify-start text-[1.06rem] text-gray">
          <div className="relative leading-[1.56rem] flex items-center w-[46.44rem] h-[0.06rem] shrink-0">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0 font-normal">
                If you witness any violations of this Code of Conduct, encounter
                suspicious behavior, or have concerns, please immediately
                contact a member of the hackathon organising committee. We are
                here to assist and ensure the safety of all participants. We can
                help you reach out to local security or law enforcement if
                needed. Your presence is valuable to us.
              </p>
            </span>
          </div>
        </div>
        <div className="absolute h-[calc(100%_-_189.5px)] w-full top-[10.34rem] right-[0rem] bottom-[1.5rem] left-[0rem]" />
      </div>
      <div className="absolute h-[calc(100%_-_3039px)] w-[calc(100%_-_640px)] top-[171.22rem] right-[20rem] bottom-[18.72rem] left-[20rem]">
        <div className="absolute h-[calc(100%_-_206.5px)] w-full top-[1.44rem] right-[0rem] bottom-[11.47rem] left-[0rem] box-border flex flex-row pt-[0rem] pb-[0.38rem] pr-[30.25rem] pl-[0rem] items-start justify-start border-b-[1px] border-solid border-lightgray-100">
          <b className="relative leading-[2.31rem] text-[#D81F1F] font-avnextb">
            Consequences of violations
          </b>
        </div>
        <div className="absolute top-[5.09rem] left-[-0.37rem] text-[inherit] leading-[1.56rem] font-inherit text-gray">
          <p className="m-0">
            If a participant breaches this Code of Conduct, the organiser
            reserves the right to take the following actions
          </p>
          <p className="m-0"> at their discretion:</p>
          <ul className="m-0 pl-[1.35rem]">
            <li className="mb-[false]">
              Expel the participant from the hackathon without refund (if
              applicable)
            </li>
            <li className="mb-[false]">
              Restrict the participant's access to Champlook resources,
              including the website
            </li>
            <li className="mb-[false]">
              Report the participant's behaviour to local law enforcement.
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute top-[190.53rem] left-[19.97rem] box-border w-[50rem] h-[0.06rem] border-t-[1px] border-solid border-lightgray-200 " />
      <div className="absolute h-[calc(100%_-_3103px)] w-[calc(100%_-_595px)] top-[192.44rem] right-[17.19rem] bottom-[1.5rem] left-[20rem]" />
      <div className="absolute w-[calc(100%_-_1052px)] top-[calc(50%_+_1434.75px)] right-[46rem] left-[19.75rem] h-[11.59rem] text-[1.06rem] text-white ">
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-lg bg-crimson shadow-[0px_1px_4px_rgba(0,_0,_0,_0.08)] flex flex-row pt-[1.5rem] px-[1.5rem] pb-[2.28rem] box-border items-start justify-start ">
          <div className="flex flex-row py-[0rem] pr-[0.13rem] pl-[0rem] items-start justify-start p-36 m-10 bg-[#D81F1F] rounded-md">
            <div className="relative leading-[1.56rem] font-semibold ">
              <p className="m-0">If you have witnessed or experienced any</p>
              <p className="m-0">transgressions of this Code of Conduct at a</p>
              <p className="m-0">hackathon hosted on Champlook, please</p>
              <p className="m-0">
                report it to your hackathon organiser, or get
              </p>
              <p className="m-0">in touch with Champlook.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_3103px)] w-[calc(100%_-_1015px)] top-[192.44rem] right-[17.19rem] bottom-[1.5rem] left-[46.25rem]">
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-lg bg-white shadow-[0px_1px_4px_rgba(0,_0,_0,_0.1)]" />
      </div>
      <div className="absolute h-[calc(100%_-_3262.5px)] w-[calc(100%_-_1063px)] top-[196.75rem] right-[18.69rem] bottom-[7.16rem] left-[47.75rem] flex flex-row py-[0rem] pr-[9.13rem] pl-[0rem] box-border items-center justify-start gap-[1rem] text-[1.06rem] text-royalblue">
        <div className="relative w-[1.25rem] h-[1.25rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[1.25rem] overflow-hidden flex flex-row items-start justify-center">
            <div className="relative w-[1.25rem] h-[1.25rem]" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative leading-[1.59rem]">
            support@champlook.com
          </div>
        </div>
      </div>
      <b className="absolute top-[193.88rem] left-[47.75rem] leading-[2.31rem] text-midnightblue">
        Champlook
      </b>
      {/* <img
        className="absolute h-[0.56%] w-[1.16%] top-[97.24%] right-[45.67%] bottom-[2.2%] left-[53.17%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="./images/home-icon.svg"
      /> */}
      <Image src={homeicon}
            height={13.333}
            width={16.667}
            alt="logo"
            className="absolute top-[97.24%] right-[45.67%] bottom-[2.2%] left-[50.17%] max-w-full overflow-hidden max-h-full"
      >

      </Image>
      {/* <img
        className="absolute h-[0.46%] w-[1.27%] top-[95.89%] right-[45.61%] bottom-[3.65%] left-[53.11%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="./images/mail-icon.svg"
      /> */}

      <Image src={mailicon}
            height={13.333}
            width={16.667}
            alt="logo"
            className="absolute top-[95.89%] right-[45.61%] bottom-[3.65%] left-[50.11%] max-w-full overflow-hidden max-h-full"
      ></Image>

      <div className="absolute top-[199rem] left-[50.31rem] text-[1.06rem] leading-[1.59rem] text-black flex items-center w-[22.69rem]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">
            35-3-87A, Devudu Cheruvu, Ongole, Prakasam, Andhra Pradesh,India -
            523001
          </p>
        </span>
      </div>
      <b className="absolute top-[188.25rem] left-[20rem] leading-[2.31rem] text-midnightblue">
        Contact us
      </b>
    </div>
  );
};

export default CodeOfConduct;
