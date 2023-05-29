import React, { useState } from "react";
import { testimonials } from "../const/testimonials";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="carousel-container flex items-center justify-between">
          <button className="carousel-button pr-5" onClick={previousSlide}>
            <ChevronLeft size={20} />
          </button>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p className=" font-heading3 text-gray-600 text-justify">
                {testimonials[currentSlide].text}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src={testimonials[currentSlide].image}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  {testimonials[currentSlide].name}
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">
                  {testimonials[currentSlide].position}
                </div>
              </div>
            </figcaption>
          </figure>
          <button
            className="carousel-button pl-5 rounded-full outline-none focus:outline-2 transition-colors duration-300 hover:text-indigo-500 hover:border-indigo-500"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}



