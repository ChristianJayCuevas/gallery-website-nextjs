"use client";
import { useState } from "react";
import BackgroundLayout from "../components/Background";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function NewPage() {
  const [answer, setAnswer] = useState("");
  const router = useRouter();

  function handleButtonClick(){
    router.push("/calendar");
}
  return (
    <BackgroundLayout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="card z-10 bg-white/25 shadow-lg backdrop-blur-sm border border-white/50 rounded-lg p-6 shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900">Are you Meme?</h1>
        
        {/* Display response if answered */}
        {answer && (
          <p className="text-lg font-semibold mt-3 text-gray-700">{answer}</p>
        )}

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleButtonClick}
            className="btn btn-info"
          >
            Yes
          </button>

          <button
            onClick={() => setAnswer("How dare you say No! 😆")}
            className="btn btn-error"
          >
            No
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="btn btn-warning mt-4"
        >
          Go Back
        </button>
      </motion.div>
    </BackgroundLayout>
  );
}
