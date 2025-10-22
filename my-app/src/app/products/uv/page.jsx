"use client";
import { motion } from "framer-motion";
import Head from "next/head";
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
  {
    title: "Flonlizer",
    img: "/uv2.png",
    items: ["Sea Water Application", "Live Fish & Aquarium Use"],
  },
  {
    title: "Tank Immerage Type",
    img: "/chiyoda_tank_immerge type.png",
    items: [],
  },
  {
    title: "High Temperature Liquid Type",
    img: "/chiyoda_liquid sugar.png",
    items: ["Liquid Sugar/Syrup etc"],
  },
  {
    title: "Tank Surface Type",
    img: "/chiyoda_UV_tank surface type.png",
    items: [],
  },
  {
    title: "Open Air Surface Cap Type",
    img: "/chiyoda_UV_open air surface cap type.png",
    items: [],
  },
  {
    title: "TOC Type",
    img: "/chiyoda_UV_toc type.png",
    items: [],
  },
  {
    title: "UV Steriliser",
    img: "/UV Steriliser.png",
    items: [
      `Control Panel & UV cylinder are separated (Control panel wall mount type)
Cable - L1.0m Between Control panel to Cylinder
Function & Feature:
• ON/OFF/Auto Switch
• Power ON LED light indicator
• UV Lamps ON LED light indicator (Burn or Faulty LED light indicator will be off)
• UV Lamp Faulty Alarm LED indicator
Power: 220V/50Hz/1Ph`,
    ],
  },
  {
    title: "UV Application",
    img: [
      "/chiyoda_application example of UV.jpg",
      "/chiyoda_application example of UV_2.png",
    ],
    items: [],
  },
];

export default function UVProducts() {
  return (
    <>
      <Head>
        <title>UV Products | Chiyoda Kohan</title>
        <meta
          name="description"
          content="Explore Chiyoda Kohan's UV products including Steritron UEX, Flonlizer, and TOC Type UV systems for industrial and commercial use."
        />
        <meta
          name="keywords"
          content="UV sterilizer, Steritron UEX, Flonlizer, TOC Type, UV lamp, wastewater treatment, semiconductor sterilization, food and beverage UV systems, Chiyoda Kohan Singapore"
        />
        <meta name="author" content="Chiyoda Kohan" />
        <meta property="og:title" content="UV Products | Chiyoda Kohan" />
        <meta
          property="og:description"
          content="Innovative UV solutions for industrial applications including sterilization and process line treatment."
        />
        <meta property="og:image" content="/uv1.jpg" />
        <meta property="og:url" content="https://chiyodakohan.sg/uv-products" />
      </Head>

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

            {Array.isArray(img) ? (
              <div className={styles.imageGrid}>
                {img.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${title} ${i + 1}`}
                    className={styles.productImage}
                  />
                ))}
              </div>
            ) : (
              <img src={img} alt={title} className={styles.productImage} />
            )}

            {items.length > 0 && (
              <ul className={styles.productList}>
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </motion.section>
    </>
  );
}
