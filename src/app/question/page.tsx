"use client"; // Required in App Router for interactive components

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);
}