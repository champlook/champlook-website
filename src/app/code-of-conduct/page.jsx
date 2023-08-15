import Image from "next/image";
import logo from "../Components/CodeofConduct/images/logo.svg";
import Applicability from "../Components/CodeofConduct/Applicability";
import Plagiarism from "../Components/CodeofConduct/Plagiarism";
import Discrimination from "../Components/CodeofConduct/Discrimination";
import Harrasment from "../Components/CodeofConduct/Harrasment";
import Recording from "../Components/CodeofConduct/Recording";
import SafeSpace from "../Components/CodeofConduct/SafeSpace";
import Intellectual from "../Components/CodeofConduct/Intellectual";
import Report from "../Components/CodeofConduct/Report";
import Consequences from "../Components/CodeofConduct/Consequences";
import Footer from "../Components/CodeofConduct/Footer";

const codeOfConduct = () => {
  return (
    <>

      <div className=" bg-[#F5F7F7] pl-[1.8rem]  pr-[1.8rem] sm:pl-[3rem] sm:pr-[2rem] md:pr-[5rem] md:pl-[3rem] lg:pr-[7rem] lg:pl-[6rem]  xl:pl-[20rem] xl:pr-[17rem]">
        {/* logo  */}
        <div className="">
          <Image
            src={logo}
            height={49}
            width={162}
            alt="logo"
            className="pt-[6.25rem] sm:center"

          >
          </Image>
        </div>
        <div className="  text-[#D81F1F] font-bold text-3xl pt-4" >Terms of Use</div>
        

        <Applicability />
        <Plagiarism />
        <Discrimination />
        <Harrasment />
        <Recording />
        <SafeSpace />
        <Intellectual />
        <Report />
        <Consequences />
        <Footer
          content="If you have witnessed or experienced any
                    transgressions of this Code of Conduct at a
                    hackathon hosted on Champlook, please
                    report it to your hackathon organiser, or get
                    in touch with Champlook."
        />
      </div>
      
    </>
  );
};

export default codeOfConduct;
