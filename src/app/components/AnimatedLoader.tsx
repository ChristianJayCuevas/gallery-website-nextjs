"use client"; // Required in App Router for interactive components

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation"; 
const AnimatedLoader = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter(); 
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);
  const handleButtonClick = () => {
    router.push("/newpage"); // Replace "/newpage" with your actual route
  };
  return (
    <>
      {loading ? (
        <div className="relative flex justify-center items-center h-screen bg-gradient-to-b from-[#FFE7EC] to-[#F3E8F7] overflow-hidden">
          
          <div className="absolute top-0 left-0 w-[40vw] h-[100vw] sm:w-[55vw] sm:h-[35vw] bg-[#fac5c1] rounded-full blur-3xl -m-16"></div>
          <div className="absolute top-0 right-0 w-[70vw] h-[120vw] sm:w-[55vw] sm:h-[35vw] bg-[#ebbff3] rounded-full blur-3xl -m-16"></div>
          <div className="absolute bottom-0 left-0 w-[70vw] h-[100vw] sm:w-[55vw] sm:h-[35vw] bg-[#C1DFB8] rounded-full blur-3xl -m-16"></div>
          <div className="absolute bottom-0 right-0 w-[50vw] h-[70vw] sm:w-[55vw] sm:h-[35vw] bg-[#79E9E1] rounded-full blur-3xl -m-16"></div>
          
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="relative flex justify-center items-center flex-col p-6 text-center h-screen bg-gradient-to-b from-[#FFE7EC] to-[#F3E8F7] overflow-hidden">

          <div className="absolute top-0 left-0 w-[40vw] h-[100vw] sm:w-[55vw] sm:h-[35vw] bg-[#fac5c1] rounded-full blur-3xl -m-16"></div>
          <div className="absolute top-0 right-0 w-[70vw] h-[120vw] sm:w-[55vw] sm:h-[35vw] bg-[#ebbff3] rounded-full blur-3xl -m-16"></div>
          <div className="absolute bottom-0 left-0 w-[70vw] h-[100vw] sm:w-[55vw] sm:h-[35vw] bg-[#C1DFB8] rounded-full blur-3xl -m-16"></div>
          <div className="absolute bottom-0 right-0 w-[50vw] h-[70vw] sm:w-[55vw] sm:h-[35vw] bg-[#79E9E1] rounded-full blur-3xl -m-16"></div>
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className="absolute top-[90vw] left-20 w-[30vw] h-[30vw] sm:w-[55vw] sm:h-[35vw] bg-gradient-to-b from-[#fbe6fd] to-[#e7b4ee] rounded-full -m-16"></motion.div>
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className="absolute z-10 top-[90vw] left-[85vw] w-[17vw] h-[17vw] sm:w-[55vw] sm:h-[35vw] bg-gradient-to-b from-[#fbe6fd] to-[#e7b4ee] rounded-full -m-16"></motion.div>
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className="absolute top-[130vw] left-[70vw] w-[30vw] h-[30vw] sm:w-[55vw] sm:h-[35vw] bg-gradient-to-b from-[#fbe6fd] to-[#e7b4ee] rounded-full -m-16"></motion.div>
          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} className="absolute top-[130vw] left-[20vw] w-[20vw] h-[20vw] sm:w-[55vw] sm:h-[35vw] bg-gradient-to-b from-[#fbe6fd] to-[#e7b4ee] rounded-full -m-16"></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="card z-0 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg p-6 relative shadow-xl"
          >
            <motion.img
              src="/images/Happy I Love You Sticker.gif"
              className="absolute top-[-140px] left-1/2 transform -translate-x-1/2 w-40 h-auto"
            ></motion.img>
  
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-2xl font-bold mb-4"
            >
              Every Moment With You is a Memory I Cherish
            </motion.h1>
  
            <motion.button
              onClick={handleButtonClick} 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="btn btn-outline btn-primary text-white"
            >
              Click Me!
            </motion.button>
          </motion.div>
        </div>
      )}
    </>
  );
  
};

export default dynamic(() => Promise.resolve(AnimatedLoader), { ssr: false });
