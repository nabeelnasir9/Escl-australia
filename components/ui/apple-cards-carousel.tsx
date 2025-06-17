"use client";

import React from "react";
import { Carousel, Card } from "@/components/Services/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 text-center">
      <span className="rounded-full bg-blue-100 px-3 py-1.5 sm:text-md text-[12px] whitespace-nowrap text-[#42568C] text-center">
      Our Services
      </span>{" "}
      <p className="mt-8 text-3xl font-bold text-center tracking-tight text-white sm:text-4xl">
        Services We Provide{" "}
      </p>
      <p className="mx-auto mt-3 max-w-prose sm:text-md text-[13px] text-center text-white p-2">
        We specialize in staffing across a wide range of industries, providing
        tailored recruitment solutions that match the unique demands of each
        sector and deliver the right talent for your specific needs.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "01",
    title: "Labour Hire & Casual Staffing. ",
    src: "/Services/Labour.jpg",
    content: <DummyContent />,
  },
  {
    category: "02",
    title: "Permanent Recruitment. ",
    src: "/Services/Recruitment.jpg",
    content: <DummyContent />,
  },
  {
    category: "03",
    title: "Government Staffing. ",
    src: "/Services/G-Staff.jpg",
    content: <DummyContent />,
  },

  {
    category: "04",
    title: "HR & Workforce Consulting. ",
    src: "/Services/Consultancy.jpg",
    content: <DummyContent />,
  },
  {
    category: "05",
    title: "Workplace Safety & WHS. ",
    src: "/Services/Safety.jpg",
    content: <DummyContent />,
  },
  {
    category: "06",
    title: "Training & Development. ",
    src: "/Services/Training.jpg",
    content: <DummyContent />,
  },
];
