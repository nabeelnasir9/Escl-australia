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
  DocumentTextIcon,
} from "@heroicons/react/20/solid";
import {
  FaSearch,
  FaGavel,
  FaChartLine,
  FaUsers,
  FaFileAlt,
  FaShieldAlt,
  FaBuilding,
  FaUserTie,
  FaHandshake,
  FaClock,
  FaMapMarkerAlt,
  FaQuoteLeft,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    name: "Workplace Investigations:",
    description: "Professional workplace investigations with discretion and thoroughness",
    icon: FaSearch,
  },
  {
    id: 2,
    name: "IR & Fair Work Advice:",
    description: "Expert industrial relations and Fair Work compliance guidance",
    icon: FaGavel,
  },
  {
    id: 3,
    name: "Performance Management:",
    description: "Comprehensive performance management systems and frameworks",
    icon: FaChartLine,
  },
  {
    id: 4,
    name: "Workforce Planning:",
    description: "Strategic workforce planning aligned with business objectives",
    icon: FaUsers,
  },
  {
    id: 5,
    name: "Policy Development:",
    description: "Policy and procedure development tailored to your organization",
    icon: FaFileAlt,
  },
  {
    id: 6,
    name: "Compliance & Risk:",
    description: "Compliance audits & risk management to protect your business",
    icon: FaShieldAlt,
  },
];

const clientTypes = [
  {
    icon: FaBuilding,
    title: "SMEs",
    description: "SMEs needing occasional HR support"
  },
  {
    icon: FaChartLine,
    title: "Growing Businesses",
    description: "Growing businesses ready to formalise systems"
  },
  {
    icon: FaUserTie,
    title: "HR Teams",
    description: "HR teams seeking external guidance"
  },
  {
    icon: FaHandshake,
    title: "Complex Issues",
    description: "Employers navigating complex people issues"
  }
];

export default function HRWorkforceConsultingPage() {
  return (
    <>
      <Banner
        title="HR & Workforce Consulting"
        backgroundImage="/HeroBaner/Consulting.jpg"
        height="xl"
        priority={true}
        enableAnimation={true}
        animationDelay={300}
        className="sm:mt-28 mt-20"
      />
      <p className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mt-20">
        Strategic HR Support That Delivers Results
      </p>
      <p className="mx-auto mt-3 max-w-prose sm:text-md text-[13px] text-gray-500 text-center">
        Our HR consultants help you resolve issues, improve performance, and grow with compliance and confidence.
      </p>

      {/* Our Expertise */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <span className="rounded-full bg-[#42568C25] px-3 py-1.5 sm:text-md text-[12px] whitespace-nowrap text-[#42568C]">
                  Our Expertise
                </span>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-pretty text-[#42568C] sm:text-4xl uppercase italic">
                  Our Expertise
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Our comprehensive HR consulting services address every aspect of people management, from sensitive workplace issues to strategic workforce planning and compliance.
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
                    alt="HR consulting services"
                    src="/Services/Consulting-new.jpg"
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

        {/* Who We Work With */}
        <div className="bg-[#42568C] py-12 px-4 mt-40">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-4 leading-relaxed">
                Who We Work With
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                From small businesses to established organizations, we provide tailored HR consulting services that meet your specific needs and challenges.
              </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-auto gap-5">
              {clientTypes.map((client, index) => (
                <div
                  key={index}
                  className="rounded-xl group p-8 text-center bg-white text-[#42568C] hover:shadow-xl transition duration-300"
                >
                  <client.icon className="w-8 h-8 mb-6 mx-auto" />
                  <h3 className="text-lg font-semibold mb-3">{client.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailored Consulting */}
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
              Tailored Consulting
            </h2>
            <p className="text-md text-gray-600 font-light">
              Flexible HR consulting solutions designed around your needs
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <FaClock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                On-demand HR Support
              </h3>
              <p className="text-gray-600 text-sm">
                Immediate access to HR expertise when you need it most
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <DocumentTextIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                Fixed-fee Packages or Hourly Rates
              </h3>
              <p className="text-gray-600 text-sm">
                Transparent pricing options to suit your budget and project scope
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <FaMapMarkerAlt className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 uppercase italic">
                On-site or Remote Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Flexible service delivery to meet your operational preferences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 border-t-2 border-[#42568C] mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#42568C] mb-4 uppercase italic">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real feedback from clients who have experienced the difference our HR consulting makes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center p-8 bg-[#42568C] rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-[#42568C]">
              <div className="w-16 h-16 bg-white text-[#42568C] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaQuoteLeft className="w-8 h-8" />
              </div>
              <blockquote className="text-xl text-white mb-6 italic">
                &apos;Their team helped us resolve a sensitive employee issue with discretion and professionalism.&apos;
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-white font-semibold uppercase italic">HR Manager</p>
                <p className="text-white">Construction Firm</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-[#42568C]">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#42568C] uppercase italic">
                Professional Service
              </h3>
              <p className="text-gray-600">
                Discrete, professional handling of sensitive workplace matters
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-[#42568C]">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#42568C] uppercase italic">
                Compliance Confidence
              </h3>
              <p className="text-gray-600">
                Expert guidance ensuring full compliance with employment law
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-[#42568C]">
              <div className="w-16 h-16 bg-[#42568C] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#42568C] uppercase italic">
                Measurable Results
              </h3>
              <p className="text-gray-600">
                Strategic solutions that deliver improved performance and outcomes
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