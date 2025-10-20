"use client";
import { motion } from "framer-motion";
import styles from "./UVProducts.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const products = [
  {
    title: "UV Sterilizer Steritron UEX",
    img: "/uv1.jpg",
    items: [
      "Energy-saving & space-saving with efficient UV lamp and simulation tech",
      "Independent control panel for easy maintenance",
      "Lamp lifespan estimation for scheduling",
      "Ideal for F&B, semiconductor, and wastewater treatment",
      "Food & Beverage Lines",
      "Semi-Conductor Process Lines",
      "High-Tech Agriculture",
    ],
  },
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
];

export default function UVProducts() {
  return (
    <motion.section
      id="uv-products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
      className={styles.uvSection}
    >
      <h2 className={styles.bannerTitle}>Ultra Violet System</h2>
      <img src="/uv.png" alt="UV System" className={styles.bannerBg} />

      {products.map(({ title, img, items }) => (
        <div key={title} className={styles.glassCard}>
          <h3 className={styles.productTitle}>{title}</h3>
          {Array.isArray(img)
            ? (
              <div className={styles.imageGrid}>
                {img.map((src, i) => (
                  <img key={i} src={src} alt={`${title} ${i + 1}`} className={styles.productImage} />
                ))}
              </div>
            )
            : <img src={img} alt={title} className={styles.productImage} />}
          {items.length > 0 && (
            <ul className={styles.productList}>
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )}
        </div>
      ))}
    </motion.section>
  );
}
