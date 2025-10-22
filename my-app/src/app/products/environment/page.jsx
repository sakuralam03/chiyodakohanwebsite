"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import styles from "./environment.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function EnvironmentProducts() {
  return (
    <>
      <Head>
        <title>Environment Products | Chiyoda Kohan</title>
        <meta
          name="description"
          content="Explore Chiyoda Kohan's environmental products including SpaceCool, eVIO100 sterilizer, and Fly Ash Humidifier for industrial and commercial use."
        />
        <meta
          name="keywords"
          content="SpaceCool, eVIO100, Fly Ash Humidifier, Abe Iron Work, air sterilizer, surface sterilizer, environmental products, industrial humidifier, Chiyoda Kohan Singapore"
        />
        <meta name="author" content="Chiyoda Kohan" />
        <meta property="og:title" content="Environment Products | Chiyoda Kohan" />
        <meta
          property="og:description"
          content="Innovative environmental solutions including UV and LED systems for industrial and commercial use."
        />
        <meta property="og:image" content="/spacecool.png" />
        <meta property="og:url" content="https://chiyodakohan.sg/environment-products" />
      </Head>

      <motion.section
        id="environment-products"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
        className={styles.ledSection}
      >
        <h2 className={styles.sectionTitle}>Environment Products</h2>

        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>SpaceCool</h3>
          <img src="/spacecool.png" alt="SpaceCool" className={styles.productImage} />
        </div>

        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>eVIO100 (Surface and Air Sterilizer)</h3>
          <img src="/evio100.png" alt="eVIO100" className={styles.productImage} />
        </div>

        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>Fly Ash Humidifier By Abe Iron Work</h3>
          <img src="/fly_ash_humidifier.png" alt="Fly Ash Humidifier" className={styles.productImage} />
        </div>
      </motion.section>
    </>
  );
}
