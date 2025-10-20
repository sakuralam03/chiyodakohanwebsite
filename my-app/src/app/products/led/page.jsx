"use client";
import { motion } from "framer-motion";
import styles from "./LEDProducts.module.css";

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
      className={styles.ledSection}
    >
      <h2 className={styles.sectionTitle}>LED Product Application</h2>
   

      <div className={styles.productCard}>
        <h3 className={styles.productTitle}>High Power LED Moveable Lamp</h3>
        <img src="/chiyoda_LED_app_1.png" alt="LED Lamp 1" className={styles.productImage} />
        <img src="/chiyoda_LED_app_2.png" alt="LED Lamp 2" className={styles.productImage} />
        <ul className={styles.productList}>
          <li>Portable high-power LED lamp for industrial and field use</li>
          <li>Energy-efficient and durable design</li>
          <li>Ideal for inspection, maintenance, and emergency lighting</li>
        </ul>
      </div>
    </motion.section>
  );
}
