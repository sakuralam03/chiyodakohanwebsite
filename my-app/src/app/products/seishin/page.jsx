"use client";
import { motion } from "framer-motion";
import styles from "./SeishinProducts.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const products = [
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
];

export default function SeishinProducts() {
  return (
    <motion.section
      id="seishin-products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
      className={styles.seishinSection}
    >
      <h2 className={styles.sectionTitle}>Seishin Products</h2>
     

      {products.map(({ title, img, items }) => (
        <div key={title} className={styles.productCard}>
          <h3 className={styles.productTitle}>{title}</h3>
          {img.map((src, i) => (
            <img key={i} src={src} alt={`${title} ${i + 1}`} className={styles.productImage} />
          ))}
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
