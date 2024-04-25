"use client";

import "./ProgressBar.css";
import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="progressBar"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}
