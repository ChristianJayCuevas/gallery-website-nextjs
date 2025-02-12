"use client"; // Required for interactive components

import { ReactNode } from "react";
import { motion } from "framer-motion";

// Define the type for children
interface BackgroundLayoutProps {
  children: ReactNode;
}

export default function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen text-center p-6 bg-gradient-to-b from-[#FFE7EC] to-[#F3E8F7] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-[60vw] h-[150vw] sm:w-[55vw] sm:h-[35vw] bg-[#fac5c1] rounded-full blur-3xl -m-16"></div>
      <div className="absolute top-0 right-0 w-[70vw] h-[120vw] sm:w-[55vw] sm:h-[35vw] bg-[#ebbff3] rounded-full blur-3xl -m-16"></div>
      <div className="absolute bottom-0 left-0 w-[100vw] h-[100vw] sm:w-[55vw] sm:h-[35vw] bg-[#C1DFB8] rounded-full blur-3xl -m-16"></div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[100vw] sm:w-[55vw] sm:h-[35vw] bg-[#79E9E1] rounded-full blur-3xl -m-16"></div>

      {/* Centered Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-[180px] -translate-y-[150px] w-[100px] h-[100px] max-w-[100px] max-h-[100px] bg-gradient-to-b from-[#fbe6fd] to-[#e7b4ee] rounded-full"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5 }}
        className="z-10 absolute left-1/2 top-1/2 translate-x-[90px] -translate-y-[130px] w-[60px] h-[60px] max-w-[60px] max-h-[60px] bg-gradient-to-b from-[#fbe6fd] to-[#e7b4ee] rounded-full"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-[180px] translate-y-[50px] w-[80px] h-[80px] max-w-[80px] max-h-[80px] bg-gradient-to-b from-[#fbe6fd] to-[#e7b4ee] rounded-full"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5 }}
        className="absolute left-1/2 top-1/2 translate-x-[40px] translate-y-[60px] w-[100px] h-[100px] max-w-[100px] max-h-[100px] bg-gradient-to-b from-[#fbe6fd] to-[#e7b4ee] rounded-full"
      ></motion.div>

      {/* Render page-specific content inside this layout */}
      {children}
    </div>
  );
}
