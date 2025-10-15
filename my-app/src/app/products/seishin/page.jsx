"use client";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SeishinProducts() {
  return (
    <motion.section
      id="seishin-products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Seishin Products</h2>
      <img src="/1_Seishin_Air_Knocker_SK.png" alt="Seishin" className="mb-6" />

      {[
        {
          title: "Air Knocker",
          img: ["/Air-Knocker-1.png", "/chiyoda_seishin_air_knocker.png"],
          items: [
            "Removes powder clogs in hoppers, tanks, chutes",
            "Operates safely with compressed air",
            "Lightweight aluminum body, easy maintenance",
          ],
        },
        {
          title: "Jet Blaster",
          img: ["/Jet-Blaster-1.jpg"],
          items: ["Blows powerful air to remove adhering powder and prevent clogging"],
        },
        {
          title: "Ceramic Hose",
          img: ["/chiyoda_seishin_ceramic_hose.png", "/chiyoda_seishin_group.jpg"],
          items: [],
        },
      ].map(({ title, img, items }) => (
        <div key={title} className="mb-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {img.map((src, i) => <img key={i} src={src} alt={title} className="mb-2" />)}
          {items.length > 0 && (
            <ul className="list-disc pl-6 space-y-1">
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )}
        </div>
      ))}
    </motion.section>
  );
}
