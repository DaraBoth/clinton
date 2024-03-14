"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold">
            Great UI/UX design is not just about making things look pretty,
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            it&apos;s about creating seamless and intuitive processes that
            enhance the user experience, and ultimately, drive continuous
            improvement.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href={"/about"}>View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href={"/contact"}>Contact Me</Link>
            </button>
          </div>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="h-1/4 md:h-2/3 lg:h-full lg:w-1/2 relative ml-10">
          <Image
            src="/profile_no_bg.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
