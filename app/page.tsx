// import ClientsMarquee from "@/components/Clients/Client"

import { AppleCardsCarouselDemo } from "@/components/ui/apple-cards-carousel";
import HeroCarousel from "@/components/HeroSection/HeroCarousel";
import Footer from "@/components/Footer/Footer";
import AboutUsHome from "@/components/AboutUsHome/AboutUsHome";
import IndustriesWe from "@/components/IndustriesWe/IndustriesWe";
import CTA from "@/components/CTA/CTA";

export default function Home() {
  return (
    <div className="h-screen sm:mt-22 mt-10">
      {/* <ClientsMarquee/> */}
      <div className="">
        <HeroCarousel />
      </div>
      <div>
        <AboutUsHome />
      </div>
      <div className="bg-[#42568C] sm:rounded-4xl rounded-none sm:m-2 m-0">
        <AppleCardsCarouselDemo />
      </div>
      <div>
        <IndustriesWe />
      </div>
      <div className="mb-40">
        <CTA/>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
