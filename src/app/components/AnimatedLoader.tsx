"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import BackgroundLayout from "../components/Background";

const AnimatedLoader = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    router.push("/question");
  };

  return (
    <BackgroundLayout>
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
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
            className="btn btn-outline btn-primary text-white active:scale-95 active:bg-primary active:text-white focus:ring-2 focus:ring-blue-500"
          >
            Click Me!
          </motion.button>
        </motion.div>
      )}
    </BackgroundLayout>
  );
};

export default AnimatedLoader;
