import { Blog } from "../Components/Home/Blog";
import { ContentSection } from "../Components/Home/ContentSection";
import { Footer } from "../Components/Home/Footer";
import { Navbar } from "../Components/Home/Navbar";

export default function Home() {
  return (
    <div className="relative bg-whitesmoke-100 h-screen overtext-left text-[1rem] text-black font-avnext ">
      <Navbar />
      <ContentSection />
      <Blog />
      <Footer />
    </div>
  );
}
