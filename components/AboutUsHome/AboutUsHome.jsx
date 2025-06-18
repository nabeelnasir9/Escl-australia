"use client"
import React from "react";
import { useRouter } from "next/navigation";

const AboutUsHome = () => {
  const router = useRouter();

  const handleAboutPage = () => {
    router.push('/about');
  };
  return (
    <section className="py-24 relative text-center">
      
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
                  Welcome to Elite Global Service Company, your trusted partner
                  in connecting skilled professionals with businesses across
                  Australia. Specializing in workforce solutions tailored to the
                  unique needs of industries including Manufacturing, Food
                  Processing, Trades and Construction, Industrial, Office Staff,
                  and Professional & Finance, we are dedicated to sourcing and
                  providing the best talent to drive your business forward.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-5 gap-5 flex flex-col">
                <p className="text-gray-500 sm:text-base text-[12px] font-normal lg:text-justify text-justify">
                  At Elite Global Service Company, we understand the critical
                  role the right people play in business success. Our rigorous
                  recruitment processes ensure that we deliver reliable,
                  motivated, and highly skilled workers who seamlessly integrate
                  into your operations, enhancing productivity and efficiency
                  from day one.
                </p>
                <p className="text-[#42568C] sm:text-base text-[12px] font-normal lg:text-start text-justify italic">
                  Let us help you build your team, strengthen your business, and
                  achieve excellence together.
                </p>
              </div>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-[#42568C] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex" onClick={handleAboutPage}>
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Read More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
