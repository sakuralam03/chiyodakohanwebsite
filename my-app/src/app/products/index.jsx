"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Products.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductsPage() {
  const sections = [
    {
      title: "Ultra Violet System",
      image: "/uv.png",
      link: "/products/uv",
    },
    {
      title: "Membrane",
      image: "/kubota.jpeg",
      link: "/products/membrane",
    },
    {
      title: "Seishin Products",
      image: "/1_Seishin_Air_Knocker_SK.png",
      link: "/products/seishin",
    },
    {
      title: "LED Applications",
      image: "/chiyoda_LED_app_2.png",
      link: "/products/led",
    },
  ];

  return (
    <motion.section
      id="products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
      className={styles.productsSection}
    >
      <h2 className={styles.sectionTitle}>Our Products</h2>

      <div className={styles.grid}>
        {sections.map((section) => (
          <Link href={section.link} key={section.title} className={styles.card}>
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>{section.title}</h3>
            </div>
            <Image
              src={section.image}
              alt={section.title}
              fill
              className={styles.cardImage}
            />
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
