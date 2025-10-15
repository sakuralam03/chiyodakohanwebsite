"use client";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function LEDProducts() {
  return (
    <motion.section
      id="led-products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">LED Product Application</h2>
      <img src="/chiyoda_LED_app_2.png" alt="LED Overview" className="mb-6 mx-auto" />

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-center">High Power LED Moveable Lamp</h3>
        <ul className="list-disc pl-6 space-y-2">
          <img src="/chiyoda_LED_app_1.png" alt="LED Lamp 1" className="mb-2" />
          <img src="/chiyoda_LED_app_2.png" alt="LED Lamp 2" className="mb-2" />
          <li>Portable high-power LED lamp for industrial and field use</li>
          <li>Energy-efficient and durable design</li>
          <li>Ideal for inspection, maintenance, and emergency lighting</li>
        </ul>
      </div>
    </motion.section>
  );
}
