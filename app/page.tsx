import Navbar from "@/components/common/Navbar";
import FAQ from "@/components/landingpage/FAQ";
import Hero from "@/components/landingpage/Hero";
import How_we_work from "@/components/landingpage/How_we_work";
import MarqueeDemo from "@/components/landingpage/Marquee";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <How_we_work/>
      <MarqueeDemo/>
      <FAQ/>
    </div>
  );
}
