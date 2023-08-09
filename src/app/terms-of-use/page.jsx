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
    <div className="container max-[639px]:pl-[1.8rem]  max-[639px]:pr-[1.8rem] sm:pl-[3rem] sm:pr-[2rem] md:pr-[5rem] md:pl-[3rem] lg:pr-[7rem] lg:pl-[6rem]  xl:pl-[20rem] xl:pr-[17rem]">
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
