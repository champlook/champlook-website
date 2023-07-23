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
    <div className="container ">
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
