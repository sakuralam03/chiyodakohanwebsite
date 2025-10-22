"use client";
import { motion } from "framer-motion";
import styles from "./MembraneProducts.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const installationImages = [
  {
    src: "chiyoda_membrane_app_1.png",
    alt: "Installation 1",
    label: "Compact MBR Setup",
  },
  {
    src: "chiyoda_membrane_app_3.png",
    alt: "Installation 2",
    label: "Industrial Wastewater Integration",
  },
  {
    src: "chiyoda_membrane_app_4.png",
    alt: "Installation 3",
    label: "Underground Tank Configuration",
  },
  {
    src: "chiyoda_membrane_app_5.png",
    alt: "Installation 4",
    label: "Surface-Level Deployment",
  },
];

export default function MembraneProducts() {
  return (
        <>
      <Head>
        <title>Membrane Products | Chiyoda Kohan</title>
        <meta
          name="description"
          content="Explore Chiyoda Kohan's membrane products including Kubota Membrane Bio Reactor for industrial and commercial use."
        />
        <meta
          name="keywords"
          content="membrane, wastewater, bio reactor, cleaning, water, Kubota Membrane Bio Reactor, water reuse, Industrial Wastewater Integration, Chiyoda Kohan Singapore"
        />
        <meta name="author" content="Chiyoda Kohan" />
        <meta property="og:title" content="Membrane Products | Chiyoda Kohan" />
        <meta
          property="og:description"
          content="Innovative membrane solutions for water treatments."
        />
        <meta property="og:image" content="/kubota.jpeg" />
        <meta property="og:url" content="https://chiyodakohan.sg/membrane-products" />
      </Head>

    <motion.section
      id="membrane-products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeIn}
      className={styles.membraneSection}
    >
      <h2 className={styles.bannerTitle}>Membrane</h2>
      <img src="/kubota.jpeg" alt="Membrane" className={styles.bannerBg} />

      {/* Kubota MBR */}
      <div className={styles.glassCard}>
        <h3 className={styles.productTitle}>Kubota Membrane Bio Reactor</h3>
        <div className={styles.imageGrid}>
          <img src="/chiyoda_membrane_app_1.png" alt="Membrane App 1" className={styles.productImage} />
          <img src="/chiyoda_membrane_app_2.png" alt="Membrane App 2" className={styles.productImage} />
        </div>
        <ul className={styles.productList}>
          <li>Custom MBR designs for varied wastewater types</li>
          <li>Simple structure, cleaning, maintenance, and replacement</li>
          <li>Benefits: compliance, land savings, water reuse</li>
        </ul>
      </div>

      {/* Installation Showcase */}
      <div className={styles.glassCard}>
        <h3 className={styles.productTitle}>Example of Installation</h3>
        <div className={styles.linearGallery}>
          {installationImages.map((image) => (
            <div key={image.src} className={styles.galleryItem}>
              <h4 className={styles.carouselLabel}>{image.label}</h4>
              <img
                src={`/${image.src}`}
                alt={image.alt}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
    </>
  );
}
