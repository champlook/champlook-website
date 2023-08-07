import { Blog } from "../Components/Home/Blog";
import { ContentSection } from "../Components/Home/ContentSection";
import { Footer } from "../Components/Home/Footer";
import { Navbar } from "../Components/Home/Navbar";

export default function Home() {
  return (
    <div className=" bg-gray-300 h-auto  text-[1rem] text-black font-avnext ">
      <div>
      {/* <Navbar /> */}
      <ContentSection />
      <Blog />
      <Footer/>
      </div>
    </div>
  );
}
