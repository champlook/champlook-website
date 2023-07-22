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
    </div>
  );
}
