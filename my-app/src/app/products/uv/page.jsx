"use client";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function UVProducts() {
  return (
    <motion.section
      id="uv-products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Ultra Violet System</h2>
      <img src="/uv.png" alt="UV System" className="mb-6" />

      {/* UV Sterilizer */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">UV Sterilizer Steritron UEX</h3>
        <img src="/uv1.jpg" alt="Steritron UEX" className="mb-4" />
        <ul className="list-disc pl-6 space-y-2">
          <li>Energy-saving & space-saving with efficient UV lamp and simulation tech</li>
          <li>Independent control panel for easy maintenance</li>
          <li>Lamp lifespan estimation for scheduling</li>
          <li>Ideal for F&B, semiconductor, and wastewater treatment</li>
          <li>Food & Beverage Lines</li>
          <li>Semi-Conductor Process Lines</li>
          <li>High-Tech Agriculture</li>
        </ul>
      </div>

      {/* Other UV Products */}
      {[
        { title: "Flonlizer", img: "/uv2.png", items: ["Sea Water Application", "Live Fish & Aquarium Use"] },
        { title: "Tank Immerage Type", img: "/chiyoda_tank_immerge type.png", items: [] },
        { title: "High Temperature Liquid Type", img: "/chiyoda_liquid sugar.png", items: ["Liquid Sugar/Syrup etc"] },
        { title: "Tank Surface Type", img: "/chiyoda_UV_tank surface type.png", items: [] },
        { title: "Open Air Surface Cap Type", img: "/chiyoda_UV_open air surface cap type.png", items: [] },
        { title: "TOC Type", img: "/chiyoda_UV_toc type.png", items: [] },
        {
          title: "UV Application",
          img: ["/chiyoda_application example of UV.jpg", "/chiyoda_application example of UV_2.png"],
          items: [],
        },
      ].map(({ title, img, items }) => (
        <div key={title} className="mb-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {Array.isArray(img)
            ? img.map((src, i) => <img key={i} src={src} alt={title} className="mb-2" />)
            : <img src={img} alt={title} className="mb-2" />}
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
