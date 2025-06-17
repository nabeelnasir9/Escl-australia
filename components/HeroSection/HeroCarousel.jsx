"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoadedStates, setImageLoadedStates] = useState(new Set());
  const router = useRouter();


  // Memoized slide data to prevent recreation
  const slideData = useMemo(
    () => [
      {
        image: "/HeroBaner/Labour.jpg",
        heading: "Labour Hire & Casual Staffing",
        description:
          "Flexible workforce solutions with skilled professionals ready to meet your immediate staffing needs. Our extensive database ensures quick placements across all sectors.",
      },
      {
        image: "/HeroBaner/Recruitment.jpg",
        heading: "Permanent Recruitment",
        description:
          "Finding the perfect long-term talent for your organization. We specialize in matching qualified candidates with permanent positions across diverse industries.",
      },
      {
        image: "/HeroBaner/G-Staff.jpg",
        heading: "Government Staffing",
        description:
          "Trusted government staffing partner delivering qualified personnel for public sector projects. We understand compliance requirements and security clearances.",
      },
      {
        image: "/HeroBaner/Consulting.jpg",
        heading: "HR & Workforce Consulting",
        description:
          "Transform your workforce strategy with our comprehensive HR consulting services. We help optimize operations, improve culture, and drive organizational success.",
      },
      {
        image: "/HeroBaner/Safety.jpg",
        heading: "Workplace Safety & WHS",
        description:
          "Comprehensive WHS solutions ensuring compliance and safety across all work environments. Our certified specialists deliver training and safety management systems.",
      },
      {
        image: "/HeroBaner/T&D.jpg",
        heading: "Training & Development",
        description:
          "Empowering workforce growth through comprehensive training programs. From skills development to leadership training, we build capabilities that drive success.",
      },
    ],
    []
  );

  const handleCareerPage = () => {
    router.push('/career');
  };

  const handleContactPage = () => {
    router.push('/contact-us');
  };

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      slideData.forEach((slide, index) => {
        const img = new Image();
        img.onload = () => {
          setImageLoadedStates((prev) => new Set([...prev, index]));
        };
        img.src = slide.image;
      });
    };

    preloadImages();
  }, [slideData]);

  // Optimized autoplay with cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slideData.length]);

  // Memoized slide change handler
  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Optimized animation variants - reduced complexity
  const slideVariants = useMemo(
    () => ({
      enter: {
        opacity: 0,
      },
      center: {
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.4,
          ease: "easeIn",
        },
      },
    }),
    []
  );

  const textVariants = useMemo(
    () => ({
      enter: {
        x: -50,
        opacity: 0,
      },
      center: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2,
        },
      },
      exit: {
        x: 50,
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      },
    }),
    []
  );

  const descriptionVariants = useMemo(
    () => ({
      enter: {
        x: -30,
        opacity: 0,
      },
      center: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: 0.4,
        },
      },
      exit: {
        x: 30,
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      },
    }),
    []
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Optimized Background Images - Render all but show only current */}
      <div className="absolute inset-0">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-800 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              willChange: index === currentSlide ? "opacity" : "auto",
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start">
            {/* Content Box with Semi-transparent Background */}
            <motion.div
              className="bg-[#00000080] p-6 sm:p-8 lg:p-12 xl:p-16 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Dynamic Heading */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`heading-${currentSlide}`}
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4 sm:mb-6 lg:mb-8 uppercase italic drop-shadow-2xl border-b-2 border-[#42568C]"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {slideData[currentSlide].heading}
                </motion.h1>
              </AnimatePresence>

              {/* Dynamic Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`description-${currentSlide}`}
                  className="text-sm sm:text-lg lg:text-lg xl:text-xl text-white mb-6 sm:mb-8 lg:mb-10 drop-shadow-2xl font-raleway"
                  variants={descriptionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {slideData[currentSlide].description}
                </motion.p>
              </AnimatePresence>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.button
                  className="bg-[#42568C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-100"
                  whileHover={{ scale: 1.0 }}
                  whileTap={{ scale: 1.0 }}
                  onClick={handleCareerPage}
                >
                  Looking for Work?
                </motion.button>
                <motion.button
                  className="bg-white text-[#42568C] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 transform hover:scale-100"
                  whileHover={{ scale: 1.0 }}
                  whileTap={{ scale: 1.0 }}
                  onClick={handleContactPage}
                >
                  Looking for Employees?
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>

      {/* Loading States */}
      {!imageLoadedStates.has(currentSlide) && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#42568C] z-5">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
