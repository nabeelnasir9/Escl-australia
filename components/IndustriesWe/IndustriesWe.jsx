import React from "react";
import {
  FaIndustry,
  FaTruck,
  FaHardHat,
  FaDice,
  FaHeartbeat,
  FaUniversity,
} from "react-icons/fa";
import { GiHammerBreak } from "react-icons/gi";

const industries = [
  {
    name: "Manufacturing & Production",
    description:
      "Connecting skilled professionals with manufacturing facilities and production lines across various sectors.",
    icon: FaIndustry,
  },
  {
    name: "Logistics & Transport",
    description:
      "Specialized staffing solutions for warehousing, distribution centers, and transportation companies.",
    icon: FaTruck,
  },
  {
    name: "Construction & Infrastructure",
    description:
      "Expert placement of trades professionals, civil engineers, and construction workers for major projects.",
    icon: FaHardHat,
  },
  {
    name: "Mining & Resources",
    description:
      "Comprehensive staffing services for mining operations, resource extraction, and energy sectors.",
    icon: GiHammerBreak,
  },
  {
    name: "Healthcare & Aged Care",
    description:
      "Dedicated recruitment for healthcare professionals, aged care workers, and disability support staff.",
    icon: FaHeartbeat,
  },
  {
    name: "Government & Public Sector",
    description:
      "Reliable staffing solutions for government agencies, public institutions, and community services.",
    icon: FaUniversity,
  },
];

export default function IndustriesWe() {
  return (
    <div className="relative bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <span className="rounded-full bg-[#42568C25] px-3 py-1.5 sm:text-md text-[12px] whitespace-nowrap text-[#42568C]">
        Who We Help{" "}
        </span>{" "}
        <p className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Industries We Serve
        </p>
        <p className="mx-auto mt-3 max-w-prose sm:text-md text-[13px] text-gray-500">
          We specialize in staffing across a wide range of industries, providing
          tailored recruitment solutions that match the unique demands of each
          sector and deliver the right talent for your specific needs.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.name} className="pt-6">
                <div className="flow-root rounded-lg border border-[#42568C] px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-[#42568C] p-3 shadow-lg">
                        <industry.icon
                          aria-hidden="true"
                          className="size-8 text-white"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg/8 font-semibold tracking-tight text-gray-900">
                      {industry.name}
                    </h3>
                    <p className="mt-5 text-base/7 text-gray-600">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
