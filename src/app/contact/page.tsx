"use client";
import React from "react";
import { Meteors } from "../../../components/ui/Meteor";

function page() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          {/* <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div> */}

          {/* <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            Meteors because they&apos;re cool
          </h1>
 
          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>
 
          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            Explore
          </button> */}

          <div className="flex flex-col justify-end items-center h-full w-1/2 p-2">
            <h1 className="mb-6 text-6xl font-bold">Contact Us</h1>
            <p className="mx-24 mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque vero magni quidem possimus repellendus? Ea voluptas,
              ullam ut obcaecati excepturi recusandae, optio necessitatibus
              eaque distinctio maxime atque delectus voluptates nemo!F
            </p>
            <div className="flex flex-col w-full h-1/3 mb-4">
              <input
                className="bg-black h-16 rounded-lg mb-4 text-center"
                type="text"
                placeholder="Enter Your Email"
              />

              <input
                className="bg-black h-full rounded-lg text-center"
                type="textarea"
                placeholder="Your Message"
              />
            </div>
            <button className="bg-blue-500 rounded-lg h-10 p-2">Send Message</button>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={40} />
        </div>
      </div>
    </div>
  );
}

export default page;
