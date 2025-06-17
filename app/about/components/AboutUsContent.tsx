/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
// File: app/about/components/AboutUsContent.tsx
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FaBookOpen,
  FaBullseye,
  FaRocket,
  FaHandshake,
  FaStar,
  FaChild,
  FaUsers,
  FaHeart,
  FaGlobe,
  FaIndustry,
} from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/ui/Banner";
import CTA from "@/components/CTA/CTA";

interface AboutUsContentProps {
  scrollTarget?: "overview" | "mission" | "vision";
}

const values = [
  {
    name: "Integrity",
    description:
      "We uphold honesty, transparency, and integrity in all interactions.",
  },
  {
    name: "Excellence",
    description:
      "We strive to exceed expectations, delivering the highest quality of service and talent.",
  },
  {
    name: "Reliability",
    description:
      "Our commitment to consistency and dependability ensures our clients can always count on us.",
  },
  {
    name: "Collaboration",
    description:
      "We build strong partnerships with clients and employees, fostering mutual growth and success.",
  },
  {
    name: "Respect",
    description:
      "We value diversity, inclusivity, and treat everyone with dignity and respect.",
  },
];

export default function AboutUsContent({ scrollTarget }: AboutUsContentProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (scrollTarget && typeof window !== "undefined") {
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [scrollTarget]);

  return (
    <div className="min-h-screen mt-22">
      <Banner
        title="About Us"
        // subtitle="Discover our story, mission, and the passionate team behind our success"
        backgroundImage="/About-us.jpg"
        height="xl"
        priority={true}
        enableAnimation={true}
        animationDelay={300}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Overview Section */}
        <section
          id="overview"
          className="scroll-mt-24 py-24 relative text-center"
        >
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <img
                    className="rounded-xl object-contain"
                    src="https://pagedone.io/asset/uploads/1717741205.png"
                    alt="about Us image"
                  />
                </div>
                <img
                  className="sm:ml-0 ml-auto rounded-xl object-contain"
                  src="https://pagedone.io/asset/uploads/1717741215.png"
                  alt="about Us image"
                />
              </div>
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <span className="rounded-full bg-[#42568C25] px-3 py-1.5 sm:text-md text-[12px] whitespace-nowrap text-[#42568C]">
                      About Us{" "}
                    </span>{" "}
                    <h2 className="text-[#42568C] sm:text-3xl text-2xl font-extrabold leading-normal lg:text-start text-center">
                      Elite Global Service Company – Your Workforce Partner
                    </h2>
                    <p className="text-gray-500 sm:text-base text-[12px] font-normal lg:text-justify text-justify">
                      Welcome to Elite Global Service Company, your trusted
                      partner in connecting skilled professionals with
                      businesses across Australia. Specializing in workforce
                      solutions tailored to the unique needs of industries
                      including Manufacturing, Food Processing, Trades and
                      Construction, Industrial, Office Staff, and Professional &
                      Finance, we are dedicated to sourcing and providing the
                      best talent to drive your business forward.
                    </p>
                  </div>
                  <div className="w-full lg:justify-start justify-center items-center sm:gap-5 gap-5 flex flex-col">
                    <p className="text-gray-500 sm:text-base text-[12px] font-normal lg:text-justify text-justify">
                      At Elite Global Service Company, we understand the
                      critical role the right people play in business success.
                      Our rigorous recruitment processes ensure that we deliver
                      reliable, motivated, and highly skilled workers who
                      seamlessly integrate into your operations, enhancing
                      productivity and efficiency from day one.
                    </p>
                    <p className="text-gray-500 sm:text-base text-[12px] font-normal lg:text-justify text-justify">
                      Whether you’re a company looking for reliable, skilled
                      staff or an individual seeking rewarding employment
                      opportunities, Elite Global Service Company is here to
                      facilitate meaningful connections and lasting
                      partnerships.
                    </p>
                    <p className="text-[#42568C] sm:text-base text-[12px] font-normal lg:text-start text-center italic">
                      Let us help you build your team, strengthen your business,
                      and achieve excellence together.
                    </p>
                  </div>
                </div>
                {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-[#42568C] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Get in Touch
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </section>
        {/* Vision, Mission & Values Section */}
        <section id="mission" className="scroll-mt-24 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-[#42568C] rounded-xl">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-16 p-6">
              {/* Left Column - Values */}
              <div className="space-y-8">
                <h2 className="text-4xl font-extrabold text-[#42568C] tracking-wide italic uppercase">
                  Our VALUES
                </h2>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-extrabold mb-1 text-[#42568C]">
                      Integrity:
                    </h3>
                    <p className="text-gray-600 text-justify text-sm">
                      We uphold honesty, transparency, and integrity in all
                      interactions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold mb-1 text-[#42568C]">
                      Excellence:
                    </h3>
                    <p className="text-gray-600 text-justify text-sm">
                      We strive to exceed expectations, delivering the highest
                      quality of service and talent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold mb-1 text-[#42568C]">
                      Reliability:
                    </h3>
                    <p className="text-gray-600 text-justify text-sm">
                      Our commitment to consistency and dependability ensures
                      our clients can always count on us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold mb-1 text-[#42568C]">
                      Collaboration:
                    </h3>
                    <p className="text-gray-600 text-justify font-jakarta text-sm">
                      We build strong partnerships with clients and employees,
                      fostering mutual growth and success.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold mb-1 text-[#42568C]">
                      Respect:
                    </h3>
                    <p className="text-gray-600 text-justify text-sm">
                      We value diversity, inclusivity, and treat everyone with
                      dignity and respect.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-[47vh] w-px bg-[#42568C] w-6"></div>

              {/* Right Column - Vision & Mission */}
              <div className="space-y-8 lg:pl-8">
                {/* Vision Section */}
                <div>
                  <h2 className="text-4xl font-extrabold text-[#42568C] tracking-wide mb-6 italic uppercase">
                    OUR VISION
                  </h2>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight italic">
                    Our Milestone Is Our Dream Till We Achieve It
                  </h3>
                  <p className="text-gray-600 text-justify text-sm">
                    To become Australia&apos;s leading labour hire company,
                    recognised for our integrity, service excellence, and
                    unparalleled commitment to workforce quality and client
                    satisfaction.
                  </p>
                </div>

                {/* Mission Section */}
                <div>
                  <h2 className="text-4xl font-extrabold text-[#42568C] tracking-wide mb-6 italic uppercase">
                    MISSION:
                  </h2>
                  <p className="text-gray-600 text-justify mb-6 text-sm">
                    To connect people and businesses through reliable, ethical,
                    and responsive staffing solutions—empowering growth,
                    opportunity, and success for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border border-[#42568C] rounded-xl -mt-20 mb-20">
            <h2 className="sm:text-4xl text-2xl font-extrabold text-[#42568C] tracking-wide italic uppercase">
              Background, Expertise, and Industry Experience:
            </h2>
            <p className="text-gray-600 text-justify text-sm mt-5 mb-5">
              Elite Global Service Company is a trusted provider of
              comprehensive staffing solutions across diverse sectors including
              Manufacturing, Food Processing, Trades and Construction,
              Industrial, Office Staff, Professional, and Finance. With
              operational presence in both Australia and Saudi Arabia, our deep
              industry knowledge and extensive network enable us to precisely
              match the right candidates with the right opportunities, enhancing
              efficiency and productivity for our partners.
            </p>

            <p className="text-gray-600 text-justify text-sm mb-5">
              With years of expertise in workforce management and talent
              acquisition, we have developed proven strategies to address labour
              shortages and skill gaps effectively. Our team&apos;s thorough
              understanding of industry-specific requirements ensures seamless
              integration and outstanding performance.
            </p>
          </div>
        </section>
      </div>
      <div className="mb-40">
        <CTA />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
