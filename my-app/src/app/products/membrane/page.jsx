"use client";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MembraneProducts() {
  return (
    <motion.section
      id="membrane-products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Membrane</h2>
      <img src="/kubota.jpeg" alt="Membrane" className="mb-6" />

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Kubota Membrane Bio Reactor</h3>
        <img src="/chiyoda_membrane_app_1.png" alt="Membrane App 1" className="mb-2" />
        <img src="/chiyoda_membrane_app_2.png" alt="Membrane App 2" className="mb-2" />
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom MBR designs for varied wastewater types</li>
          <li>Simple structure, cleaning, maintenance, and replacement</li>
          <li>Benefits: compliance, land savings, water reuse</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Example of Installation</h3>
        {["chiyoda_membrane_app_1.png", "chiyoda_membrane_app_3.png", "chiyoda_membrane_app_4.png", "chiyoda_membrane_app_5.png"].map((src, i) => (
          <img key={i} src={`/${src}`} alt={`Membrane ${i}`} className="mb-2" />
        ))}
      </div>
    </motion.section>
  );
}
