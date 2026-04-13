/* eslint-disable @next/next/no-img-element */
import React from "react";
import Banner from "@/components/ui/Banner";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import {
  ClockIcon,
  UserGroupIcon,
  ScaleIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/solid';
import {
  FaWarehouse,
  FaTools,
  FaCogs,
  FaHardHat,
  FaConciergeBell,
  FaTruck
} from "react-icons/fa";

const features = [
  {
    id: 1,
    name: "24/7 Availability:",
    description: "24/7 availability for urgent placements",
    icon: ClockIcon,
  },
  {
    id: 2,
    name: "Pre-vetted Workers:",
    description: "Pre-vetted, fully referenced workers",
    icon: UserGroupIcon,
  },
  {
    id: 3,
    name: "Scalable Staffing:",
    description: "Scalable staffing—from one-off jobs to large crews",
    icon: ScaleIcon,
  },
  {
    id: 4,
    name: "Full Service Management:",
    description: "All compliance, payroll, and insurance managed in-house",
    icon: DocumentCheckIcon,
  },
];

export default function LabourHirePage() {
  return (
    <>
      <Banner
        title="Labour Hire & Casual Staffing"
        // subtitle="Get Skilled, Reliable Staff—Fast"
        backgroundImage="/Services/Labour-new.jpg"
        height="xl"
        priority={true}
        enableAnimation={true}
        animationDelay={300}
        className="sm:mt-28 mt-20"
      />
      <p className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mt-20">
        Get Skilled, Reliable Staff—Fast{" "}
      </p>
      <p className="mx-auto mt-3 max-w-prose sm:text-md text-[13px] text-gray-500 text-center">
        Whether you&apos;re scaling up for a project or filling last-minute
        shifts, we deliver fast, flexible labour solutions across warehousing,
        trades, civil construction, manufacturing, and more.
      </p>
      {/* Why Choose Us */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <span className="rounded-full bg-[#42568C25] px-3 py-1.5 sm:text-md text-[12px] whitespace-nowrap text-[#42568C]">
                  Why Choose Us?{" "}
                </span>{" "}
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-pretty text-[#42568C] sm:text-4xl uppercase italic">
                  Why Choose Us?
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                Flexible, scalable workforce solutions across warehousing, trades, civil construction, manufacturing, and more.
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
                      </dt>{" "}
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
                    alt="Product screenshot"
                    src="/Services/Labour-new-1.jpg"
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
        <div className="bg-[#42568C] py-12 px-4 mt-40">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-4 leading-relaxed">
                Industry-Leading Staffing Solutions
              </h2>
              <p className="text-slate-300 group-hover:text-slate-600 text-sm leading-relaxed">
                From warehouses to construction sites, we provide skilled,
                reliable workers across all major industries. Our comprehensive
                staffing solutions ensure you get the right people, at the right
                time, for any project.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto gap-5">
              <div className="rounded-xl group p-8 text-center bg-white text-[#42568C] hover:shadow-xl transition duration-300">
                <FaWarehouse className="w-8 h-8 mb-6 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Warehousing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Pickers, packers, forklift drivers
                </p>
              </div>

              <div className="rounded-xl group p-8 text-center bg-white text-[#42568C] hover:shadow-xl transition duration-300">
                <FaTools className="w-8 h-8 mb-6 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Trades</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  General labourers, electricians, carpenters{" "}
                </p>
              </div>

              <div className="rounded-xl group p-8 text-center bg-white text-[#42568C] hover:shadow-xl transition duration-300">
                <FaCogs className="w-8 h-8 mb-6 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">Manufacturing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Process workers, machine operators
                </p>
              </div>

              <div className="rounded-xl group p-8 text-center bg-white text-[#42568C] hover:shadow-xl transition duration-300">
                <FaHardHat className="w-8 h-8 mb-6 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">
                  Civil Construction
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Traffic control, plant operators
                </p>
              </div>

              <div className="rounded-xl group p-8 text-center bg-white text-[#42568C] hover:shadow-xl transition duration-300">
                <FaConciergeBell className="w-8 h-8 mb-6 mx-auto" />
                <h3 className="text-lg font-semibold mb-3">
                  Hospitality & Events
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Set-up crews, waitstaff
                </p>
              </div>
              <div className="rounded-xl group p-8 text-center bg-white text-[#42568C] hover:shadow-xl transition duration-300">
    <FaTruck className="w-8 h-8 mb-6 mx-auto" />
    <h3 className="text-lg font-semibold mb-3">
      Transport & Logistics
    </h3>
    <p className="text-slate-600 text-sm leading-relaxed">
      Drivers, delivery personnel, dispatchers
    </p>
  </div>
            </div>
          </div>
        </div>
      </div>
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
              How It Works
            </h2>
            <p className="text-md text-gray-600 font-light">
              A systematic approach to finding your perfect candidate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                Tell us How we can help for you?
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                We match you with work-ready staff
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                Onboarding, inductions, and admin handled by us
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                Ongoing support and replacements if needed
              </h3>
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
