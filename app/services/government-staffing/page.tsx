/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Banner from "@/components/ui/Banner";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";
import {
  FaShieldAlt,
  FaUserTie,
  FaCogs,
  FaBuilding,
  FaFileContract,
  FaChartLine,
  FaClock,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    name: "Procurement Expertise:",
    description: "Expertise in procurement frameworks (Standing Offers, Panels)",
    icon: FaFileContract,
  },
  {
    id: 2,
    name: "Proven Track Record:",
    description: "Proven history delivering in government settings",
    icon: FaChartLine,
  },
  {
    id: 3,
    name: "Rapid Response:",
    description: "Fast response to urgent workforce requirements",
    icon: FaClock,
  },
  {
    id: 4,
    name: "Full Compliance:",
    description: "Full transparency, reporting, and background checks",
    icon: ShieldCheckIcon,
  },
];

const services = [
  {
    icon: FaShieldAlt,
    title: "Security Clearances",
    description: "Staff with Baseline/NV1 clearances"
  },
  {
    icon: FaUserTie,
    title: "Administration",
    description: "Administration & project officers"
  },
  {
    icon: FaFileContract,
    title: "Policy & Finance",
    description: "Policy advisors, planners, finance officers"
  },
  {
    icon: FaCogs,
    title: "ICT & Security",
    description: "ICT, data, and cyber security professionals"
  },
  {
    icon: FaBuilding,
    title: "Contract Compliance",
    description: "Panel supplier and contract compliance"
  },
  {
    icon: FaChartLine,
    title: "Strategic Planning",
    description: "Strategic analysts and business development specialists"
  }
];

export default function GovernmentStaffingPage() {
  return (
    <>
      <Banner
        title="Government Staffing"
        backgroundImage="/HeroBaner/G-Staff.jpg"
        height="xl"
        priority={true}
        enableAnimation={true}
        animationDelay={300}
        className="sm:mt-28 mt-20"
      />
      <p className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mt-20">
        Security-Cleared Professionals for All Government Levels
      </p>
      <p className="mx-auto mt-3 max-w-prose sm:text-md text-[13px] text-gray-500 text-center">
        We specialise in staffing for local, state, and federal government contracts—compliant, credentialed, and cleared.
      </p>

      {/* Why Government Clients Choose Us */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <span className="rounded-full bg-[#42568C25] px-3 py-1.5 sm:text-md text-[12px] whitespace-nowrap text-[#42568C]">
                  Why Government Clients Choose Us
                </span>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-pretty text-[#42568C] sm:text-4xl uppercase italic">
                  Why Government Clients Choose Us
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Our deep understanding of government requirements, compliance standards, and procurement processes makes us the trusted partner for public sector staffing needs.
                </p>
                <dl className="mt-10 max-w-xl space-y-6 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.id} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 uppercase italic">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-[#42568C]"
                        />
                        {feature.name} <br />
                      </dt>
                      <dd className="inline font-light">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-[#42568C] px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
                />
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <img
                    alt="Government staffing services"
                    src="/Services/G-staff-nnew-1.jpg"
                    width={932}
                    height={842}
                    className="-mb-12 w-[900px] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Include */}
        <div className="bg-[#42568C] py-12 px-4 mt-40">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-4 leading-relaxed">
                Services Include
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Comprehensive government staffing solutions across all departments and agencies, with full security clearance capabilities and compliance expertise.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 mx-auto gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl group p-8 text-center bg-white text-[#42568C] hover:shadow-xl transition duration-300"
                >
                  <service.icon className="w-8 h-8 mb-6 mx-auto" />
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Past Performance */}
      <section className="py-16 bg-white mb-30 relative overflow-hidden">
        {/* Left Background SVG */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-25">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="200"
              cy="200"
              r="150"
              stroke="#42568C"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="100"
              stroke="#42568C"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              r="50"
              stroke="#42568C"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M200 50 L350 200 L200 350 L50 200 Z"
              stroke="#42568C"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="200" cy="200" r="8" fill="#42568C" />
          </svg>
        </div>

        {/* Right Background SVG */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 opacity-25">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 200 Q200 50 350 200 Q200 350 50 200"
              stroke="#42568C"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M100 200 Q200 100 300 200 Q200 300 100 200"
              stroke="#42568C"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M150 200 Q200 150 250 200 Q200 250 150 200"
              stroke="#42568C"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="50" cy="200" r="6" fill="#42568C" />
            <circle cx="350" cy="200" r="6" fill="#42568C" />
            <circle cx="200" cy="50" r="4" fill="#42568C" />
            <circle cx="200" cy="350" r="4" fill="#42568C" />
          </svg>
        </div>

        {/* Top decorative elements */}
        <div className="absolute top-8 left-1/4 opacity-30">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="30,5 50,45 10,45"
              stroke="#42568C"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="30" cy="30" r="3" fill="#42568C" />
          </svg>
        </div>

        <div className="absolute top-8 right-1/4 opacity-30">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="15"
              y="15"
              width="30"
              height="30"
              stroke="#42568C"
              strokeWidth="1"
              fill="none"
              transform="rotate(45 30 30)"
            />
            <circle cx="30" cy="30" r="4" fill="#42568C" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#42568C] mb-1 uppercase italic">
              Past Performance
            </h2>
            <p className="text-md text-gray-600 font-light">
              Proven track record in government staffing excellence
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <FaBuilding className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                Long-term Staffing for State Departments
              </h3>
              <p className="text-gray-600 text-sm">
                Sustained excellence in providing qualified personnel for ongoing government operations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <FaCogs className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                Support for Short-term Projects and Campaigns
              </h3>
              <p className="text-gray-600 text-sm">
                Flexible solutions for time-sensitive government initiatives and special projects
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <ServerIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                National Capacity with Local Reach
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive coverage across all government levels nationwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 border-t-2 border-[#42568C] mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#42568C] mb-4 uppercase italic">
              Security & Compliance Assured
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to government standards means every placement meets the highest security, compliance, and performance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-[#42568C] rounded-xl">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#42568C] uppercase italic">
                Security Clearances
              </h3>
              <p className="text-gray-600">
                Baseline and NV1 cleared candidates ready for immediate deployment in secure environments
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-[#42568C] rounded-xl">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFileContract className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#42568C] uppercase italic">
                Procurement Compliance
              </h3>
              <p className="text-gray-600">
                Full compliance with government procurement processes and panel requirements
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-[#42568C] rounded-xl">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#42568C] uppercase italic">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous vetting, continuous monitoring, and performance reporting for government peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 mb-30">
        <CTA />
      </div>
      <Footer />
    </>
  );
}