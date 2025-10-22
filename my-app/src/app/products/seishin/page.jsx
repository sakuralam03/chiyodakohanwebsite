"use client";
import { motion } from "framer-motion";
import styles from "./SeishinProducts.module.css";
import Head from "next/head";


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
    img: ["/jetblaster.png"],
    items: ["Blows powerful air to remove adhering powder and prevent clogging"],
  },
  {
    title: "Ceramic Hose",
    img: ["/chiyoda_seishin_ceramic_hose.png", "/chiyoda_seishin_group.jpg"],
    items: [],
  },
    {
    title: "Octagon200",
    img: ["/Octagon200.png", ],
    items: [],
  },
      {
    title: "RO Tap Shaker",
    img: ["/RO Tap Shaker.png", ],
    items: [],
  },
       {
    title: "GA 6",
    img: ["/GA 6.png", ],
    items: [],
  },
         {
    title: "Robot Sifter RPS 02",
    img: ["/Robot Sifter RPS 02.png", ],
    items: [],
  },
           {
    title: "Robot Sifter RPS 01",
    img: ["/Robot Sifter RPS 01.png", ],
    items: [],
  },
             {
    title: "Auto Sieve Shaker",
    img: ["/Auto sieve shaker.png", ],
    items: [],
  },

];

export default function SeishinProducts() {
  return (
     <>
      <Head>
        <title>Seishin Products | Chiyoda Kohan</title>
        <meta
          name="description"
          content="Explore Chiyoda Kohan's Seishin products including Air Knocker, Jet Blaster, and Ceramic Hose for industrial and commercial use."
        />
        <meta
          name="keywords"
          content="Seishin, Air Knocker, Jet Blaster, Ceramic Hose, industrial, commercial, Chiyoda Kohan Singapore"
        />
        <meta name="author" content="Chiyoda Kohan" />
        <meta property="og:title" content="Seishin Products | Chiyoda Kohan" />
        <meta
          property="og:description"
          content="Innovative Seishin solutions for industrial applications."
        />
        <meta property="og:image" content="/Air-Knocker-1.png" />
        <meta property="og:url" content="https://chiyodakohan.sg/seishin-products" />
      </Head>
    
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
    </>
  );
}
