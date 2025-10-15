"use client";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductSection({ title, images = [], children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`${title} ${i}`} className="mb-4 mx-auto" />
      ))}
      {children}
    </motion.section>
  );
}
