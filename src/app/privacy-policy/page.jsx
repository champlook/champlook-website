import Footer from "../Components/CodeofConduct/Footer";
import Applicability from "../Components/PrivacyPolicy/Applicability";
import ChangesToPolicy from "../Components/PrivacyPolicy/ChangesToPolicy";
import InformationCollect from "../Components/PrivacyPolicy/InformationCollect";
import Logo from "../Components/PrivacyPolicy/Logo";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import SharingInformation from "../Components/PrivacyPolicy/SharingInformation";
import StorageSecurity from "../Components/PrivacyPolicy/StorageSecurity";
import ThirdPartyServices from "../Components/PrivacyPolicy/ThirdPartyServices";
export default function Privacypolicy() {
  return (
    <div className="container max-[639px]:pl-[1.8rem]  max-[639px]:pr-[1.8rem] sm:pl-[3rem] sm:pr-[2rem] md:pr-[5rem] md:pl-[3rem] lg:pr-[7rem] lg:pl-[6rem]  xl:pl-[20rem] xl:pr-[17rem]">
      <Logo />
      <PrivacyPolicy />
      <Applicability />
      <InformationCollect />
      <SharingInformation />
      <StorageSecurity />
      <ThirdPartyServices />
      <ChangesToPolicy />
      <Footer content="For any data-related consent withdrawal, access, review, correction, modification, deletion of personal information, or the exercise of data rights under the EU GDPR or any other privacy law, or for any related requests or inquiries, please feel free to contact us." />
    </div>
  );
}
