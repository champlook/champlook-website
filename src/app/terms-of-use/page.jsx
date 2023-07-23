import Footer from "../Components/CodeofConduct/Footer";
import Logo from "../Components/PrivacyPolicy/Logo";
import AboutChampluk from "../Components/TermsofUse/AboutChampluk";
import ChamplukServiceProvider from "../Components/TermsofUse/ChamplukServiceProvider";
import Changes from "../Components/TermsofUse/Changes";
import ExternalSites from "../Components/TermsofUse/ExternalSites";
import GoverningLawDisputes from "../Components/TermsofUse/GoverningLawDisputes";
import Identification from "../Components/TermsofUse/Identification";
import Miscellaneous from "../Components/TermsofUse/Miscellaneous";
import Payment from "../Components/TermsofUse/Payment";
import Privacy from "../Components/TermsofUse/Privacy";
import RelevantParties from "../Components/TermsofUse/RelevantParties";
import RightsReserved from "../Components/TermsofUse/RightsReserved";
import TermsOfUse from "../Components/TermsofUse/TermsOfUse";
import UserEligibility from "../Components/TermsofUse/UserEligibility";
import UserObligationProhibitedUse from "../Components/TermsofUse/UserObligationProhibitedUse";
import WarrantiesDisclaimers from "../Components/TermsofUse/WarrantiesDisclaimers";

export default function Termsofuse() {
  return (
    <div className="container ">
      <Logo />
      <TermsOfUse />
      <AboutChampluk />
      <RelevantParties />
      <ChamplukServiceProvider />
      <UserEligibility />
      <UserObligationProhibitedUse />
      <Payment />
      <RightsReserved />
      <Privacy />
      <WarrantiesDisclaimers />
      <ExternalSites />
      <GoverningLawDisputes />
      <Identification />
      <Miscellaneous />
      <Changes />
      <Footer content="If you want to delete your account and data, or have any other requests, queries, questions, or clarifications to seek, please get in touch with us." />
    </div>
  );
}
