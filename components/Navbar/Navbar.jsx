"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll detection for banner visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Hide banner after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const aboutItems = [
    { name: "Overview", href: "/about/overview" },
    { name: "Vision", href: "/about/vision" },
    { name: "Mission", href: "/about/mission" },
    // { name: "President's Message", href: "/about/presidents-message" },
    // { name: "EHSS & Quality Policy", href: "/about/ehss-quality-policy" },
  ];

  const servicesItems = [
    {
      name: "Labour Hire & Casual Staffing",
      href: "/services/labour-hire-casual-staffing",
    },
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment" },
    { name: "Government Staffing", href: "/services/government-staffing" },
    {
      name: "HR & Workforce Consulting",
      href: "/services/hr-workforce-consulting",
    },
    { name: "Workplace Safety & WHS", href: "/services/workplace-safety-whs" },
    { name: "Training & Development", href: "/services/training-development" },
  ];

  // Animation variants
  const bannerVariants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    hidden: {
      y: -100,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Updated navbar variants with mobile responsiveness
  const navbarVariants = {
    top: {
      top: isMobile ? "10px" : "40px", // Mobile: 10px, Desktop: 40px
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    scrolled: {
      top: "0px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 0.4,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {/* Top Banner */}
      <motion.div
        className="fixed top-0 left-0 right-0 bg-[#191919] hidden md:inline text-white z-[60]"
        initial="visible"
        animate={isScrolled ? "hidden" : "visible"}
        variants={bannerVariants}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-3 text-sm">
            {/* Left side - Working Hours */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="hidden sm:inline font-bold italic">
                Monday - Friday: 9AM - 5PM
              </span>
              {/* <span className="sm:hidden">Sun-Thu 8AM-4PM</span> */}
            </motion.div>

            {/* Right side - Contact Info */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Phone */}
              <motion.div
                className="flex items-center border-r border-gray-400 pr-4 mr-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MdCall className="w-4 h-4 mr-2" />
                <a
                  href="tel:+61 439 349 190"
                  className="hover:opacity-80 transition-opacity font-bold italic"
                >
                  <span className="hidden md:inline">+61 439 349 190</span>
                  {/* <span className="md:hidden">Call</span> */}
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <IoMail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:info@elitegsc.com"
                  className="hover:opacity-80 transition-opacity font-bold italic"
                >
                  <span className="hidden lg:inline">
                  info@elitegsc.com
                  </span>
                  <span className="lg:hidden hidden md:inline">Email</span>
                  <span className="md:hidden">✉</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.header
        className="fixed left-0 right-0 flex border-b border-[#42568C] bg-white min-h-[70px] tracking-wide z-50"
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        variants={navbarVariants}
      >
        <div className="w-full flex flex-wrap items-center justify-between gap-6 sm:px-10 px-6 py-2 relative">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/eclsa.png"
                alt="logo"
                width={534}
                height={40}
                className="w-[174px]"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex lg:items-center lg:gap-x-10">
            <motion.ul
              className="flex gap-x-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >
              {/* Home */}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/"
                  className="hover:text-[#42568C] text-slate-900 font-medium text-[15px] flex items-center transition-colors duration-200"
                >
                  HOME
                </Link>
              </motion.li>

              {/* About with Mega Menu */}
              <motion.li
                className="relative group"
                onMouseEnter={() => handleDropdownHover("about")}
                onMouseLeave={handleDropdownLeave}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/about"
                  className="hover:text-[#42568C] text-slate-900 font-medium text-[15px] flex items-center transition-colors duration-200"
                >
                  ABOUT
                  <motion.div
                    animate={{ rotate: activeDropdown === "about" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown className="ml-1 w-4 h-4" />
                  </motion.div>
                </Link>

                {/* About Mega Menu */}
                <AnimatePresence>
                  {activeDropdown === "about" && (
                    <motion.div
                      className="absolute top-full left-0 z-50 bg-white shadow-lg border border-[#42568C] rounded-lg min-w-[280px]"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                    >
                      <div className="p-6">
                        <h6 className="text-base text-[#42568C] font-semibold mb-4 border-b border-[#42568C] pb-2 uppercase">
                          About Us
                        </h6>
                        <ul className="space-y-1">
                          {aboutItems.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                className="hover:text-[#42568C] text-slate-900 font-normal text-[14px] block py-2 px-3 rounded transition-all duration-200 hover:bg-blue-50"
                              >
                                {item.name}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Services with Mega Menu */}
              <motion.li
                className="relative group"
                onMouseEnter={() => handleDropdownHover("services")}
                onMouseLeave={handleDropdownLeave}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href=""
                  className="hover:text-[#42568C] text-slate-900 font-medium text-[15px] flex items-center transition-colors duration-200"
                >
                  SERVICES
                  <motion.div
                    animate={{
                      rotate: activeDropdown === "services" ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown className="ml-1 w-4 h-4" />
                  </motion.div>
                </Link>

                {/* Services Mega Menu */}
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      className="absolute top-full left-0 z-50 bg-white shadow-lg border border-[#42568C] rounded-lg min-w-[320px]"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                    >
                      <div className="p-6">
                        <h6 className="text-base text-[#42568C] font-semibold mb-4 border-b border-[#42568C] pb-2 uppercase">
                          Our Services
                        </h6>
                        <ul className="space-y-1">
                          {servicesItems.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                className="hover:text-[#42568C] text-slate-900 font-normal text-[14px] block py-2 px-3 rounded transition-all duration-200 hover:bg-blue-50"
                              >
                                {item.name}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Regular Menu Items */}
              {/* <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/clients"
                  className="hover:text-[#42568C] text-slate-900 font-medium text-[15px] transition-colors duration-200"
                >
                  CLIENTS
                </Link>
              </motion.li> */}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  href="/career"
                  className="hover:text-[#42568C] text-slate-900 font-medium text-[15px] transition-colors duration-200"
                >
                  CAREER
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  href="/contact-general"
                  className="hover:text-[#42568C] text-slate-900 font-medium text-[15px] transition-colors duration-200"
                >
                  CONTACT US
                </Link>
              </motion.li>
            </motion.ul>
          </nav>

          {/* Get in Touch Button - Desktop */}
          <motion.div
            className="hidden lg:flex gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.0 }}>
              <Link
                href="/contact-us"
                className="bg-transparent border border-[#42568C] text-[#42568C] px-3 py-2.5 rounded-lg font-bold text-[13px] flex items-center gap-2 transition-all duration-200 hover:shadow-lg font-jakarta"
              >
                For Employers
                {/* <FiArrowRight className="w-4 h-4" /> */}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.0 }}>
              <Link
                href="/career"
                className="bg-[#42568C] text-white px-3 py-2.5 rounded-lg font-bold text-[13px] flex items-center gap-2 transition-all duration-200 hover:shadow-lg font-jakarta"
              >
                For Job Seekers
                {/* <FiArrowRight className="w-4 h-4" /> */}
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="cursor-pointer p-2"
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {!isMobileMenuOpen ? (
                  <FiMenu className="w-7 h-7" />
                ) : (
                  <FiX className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <div className="lg:hidden fixed inset-0 z-50">
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={backdropVariants}
                  onClick={toggleMobileMenu}
                />

                {/* Menu Panel */}
                <motion.div
                  className="fixed right-0 top-0 h-full w-2/3 min-w-[300px] bg-white shadow-md overflow-auto"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={mobileMenuVariants}
                >
                  {/* Close Button */}
                  <motion.button
                    onClick={toggleMobileMenu}
                    className="absolute top-4 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-[#42568C] cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </motion.button>

                  {/* Mobile Menu Items */}
                  <div className="p-4 pt-16">
                    {/* Logo in mobile */}
                    <motion.div
                      className="pb-6 border-b border-gray-300 mb-6"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link href="/">
                        <Image
                          src="/eclsa.png"
                          alt="logo"
                          width={534}
                          height={40}
                          className="w-[174px]"
                        />
                      </Link>
                    </motion.div>

                    <nav className="space-y-3">
                      <motion.div
                        className="px-3 py-2 border-b border-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link
                          href="/"
                          className="text-[#42568C] font-medium text-[15px] block"
                          onClick={toggleMobileMenu}
                        >
                          HOME
                        </Link>
                      </motion.div>

                      {/* About Mobile Menu */}
                      <motion.div
                        className="px-3 py-2 border-b border-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <details className="group">
                          <summary className="text-slate-900 font-medium text-[15px] cursor-pointer list-none flex items-center justify-between">
                            ABOUT
                            <FiChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                          </summary>
                          <motion.div
                            className="mt-3 pl-4 space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {aboutItems.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="block text-slate-600 text-[14px] py-1 hover:text-[#42568C]"
                                onClick={toggleMobileMenu}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        </details>
                      </motion.div>

                      {/* Services Mobile Menu */}
                      <motion.div
                        className="px-3 py-2 border-b border-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <details className="group">
                          <summary className="text-slate-900 font-medium text-[15px] cursor-pointer list-none flex items-center justify-between">
                            SERVICES
                            <FiChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                          </summary>
                          <motion.div
                            className="mt-3 pl-4 space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {servicesItems.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="block text-slate-600 text-[14px] py-1 hover:text-[#42568C]"
                                onClick={toggleMobileMenu}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        </details>
                      </motion.div>

                      {/* <motion.div
                        className="px-3 py-2 border-b border-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Link
                          href="/clients"
                          className="text-slate-900 font-medium text-[15px] block"
                          onClick={toggleMobileMenu}
                        >
                          CLIENTS
                        </Link>
                      </motion.div> */}

                      <motion.div
                        className="px-3 py-2 border-b border-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Link
                          href="/career"
                          className="text-slate-900 font-medium text-[15px] block"
                          onClick={toggleMobileMenu}
                        >
                          CAREER
                        </Link>
                      </motion.div>

                      <motion.div
                        className="px-3 py-2 border-b border-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Link
                          href="/contactus"
                          className="text-slate-900 font-medium text-[15px] block"
                          onClick={toggleMobileMenu}
                        >
                          CONTACT US
                        </Link>
                      </motion.div>
                    </nav>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
