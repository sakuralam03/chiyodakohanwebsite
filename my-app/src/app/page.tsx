"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./Hero.module.css";
import stylesAbout from './About.module.css';


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const facilityImages = [
    {
      src: "/chiyoda_clean_fac_1.png",
      alt: "Cleanroom Construction",
      label: "Cleanroom Construction",
    },
    {
      src: "/chiyoda_clean_fac_2.png",
      alt: "Clean Enclosure Fabrication",
      label: "Clean Enclosure Fabrication",
    },
    {
      src: "/chiyoda_clean_fact_3.png",
      alt: "F&B Grade SS Piping Installation",
      label: "F&B Grade SS Piping Installation",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % facilityImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
  };

  return (
    <>
      <Navbar />

      {/* Animated Waves */}
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <main className="space-y-32 px-6 py-12">
        {/* Hero Section */}
        <motion.section
          id="hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className={styles.heroSection}
        >
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroTitle}>Chiyoda Kohan Singapore Pte Ltd</h1>
            <p className={styles.heroSubtitle}>
              Making our world a better place in the new millennium
            </p>
          </div>
          <img
            src="/chiyodakohan.png"
            alt="pic of products"
            className={styles.heroBg}
          />
        </motion.section>

      {/* About Section */}
<motion.section
  id="about"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  variants={fadeIn}
  className={stylesAbout.aboutSection}
>
  <h2 className={stylesAbout.sectionTitle}>About Us</h2>
  <div className={stylesAbout.sectionText}>
    <p>
      Chiyoda Kohan (Singapore) was incorporated on 10 August 2001 with the objective of developing and expanding to the ASEAN markets. As a continuation of our parent company’s vision, we hope to contribute to society based on our accumulated experience in developing new technologies and systems.
    </p>
    <p>
      Chiyoda Kohan is a leading manufacturer of ultraviolet disinfection systems in Japan specializing in environmental problems such as water purification and waste management. To provide excellent service, we have formed strategic alliances with more than 200 manufacturers and suppliers to offer complete solutions to our valued clients.
    </p>
    <p>
      Underlying our commitment to service and development is the constant drive of our dynamic pioneer team of sales personnel and support staff. With dedication and enthusiasm, we are confident in gaining access to tomorrow’s technologies and markets.
    </p>
    <p>
      Having forged close links with our customers and partners, Chiyoda Kohan (Singapore)’s strategy for the millennium is to uncover customers’ needs and translate them into custom-made solutions while achieving our vision of “Making our world a better place in the new millennium”.
    </p>
  </div>
</motion.section>

{/* Why Choose Us Section */}
<motion.section
  id="why-choose-us"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  variants={fadeIn}
  className={stylesAbout.aboutSection}
>
  <h2 className={stylesAbout.sectionTitle}>Why Choose Us?</h2>

  {/* One Stop Solution Card */}
  <div className={stylesAbout.featureCard}>
    <h3 className={stylesAbout.subheading}>One Stop Solution</h3>
    <p className={stylesAbout.paragraph}>
      We provide total solutions to meet your needs — from design, supply, installation, commissioning to after-sales service. From our vendor factory in Japan to your destination.
    </p>
    <img
      src="/chiyoda_one_stop_solution.png"
      alt="One Stop Solution"
      className={stylesAbout.featureImage}
    />
  </div>

  {/* Clean Facilities Carousel Card */}
  <div className={stylesAbout.featureCard}>
    <h3 className={stylesAbout.subheading}>Clean Facilities and Installation</h3>
    <p className={stylesAbout.paragraph}>
      We ensure all installations are carried out in a clean and safe manner, minimizing any disruption to your operations.
    </p>

    <div className={stylesAbout.carousel}>
      <button onClick={handlePrev} className={stylesAbout.arrow}>←</button>

      <div className={stylesAbout.carouselContent}>
        <h4 className={stylesAbout.carouselLabel}>
          {facilityImages[currentIndex].label}
        </h4>
        <img
          src={facilityImages[currentIndex].src}
          alt={facilityImages[currentIndex].alt}
          className={stylesAbout.carouselImage}
        />
      </div>

      <button onClick={handleNext} className={stylesAbout.arrow}>→</button>
    </div>
  </div>
</motion.section>




        {/* Products Section */}
        <motion.section
          id="products"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
  variants={fadeIn}
  className="max-w-3xl mx-auto"
>
  <h2 className="text-3xl font-semibold mb-5">Our Products</h2>
      <img src="homepage.png" alt="pic of products" />
 

  {/*UV 1  */}
 <h2 className="text-2xl font-bold  mb-4">Ultra Violet System</h2>
  <img src="uv.png" alt="pic of uv "></img>
    <div className="mb-6">
        <h3 className="text-xl font-bold ">UV Steralizer Steritron UEX</h3>
        <img src="uv1.jpg" alt="pic of uv1 "></img>
        <ul className="list-disc pl-6 space-y-1">
                    <li>UV sterilizer: STERITRON series
Energy-Saving & Space-Saving
With the use of the new highly efficient UV lamp, electronic ballast, light and the simulation technology of the fluid, the power consumption can be reduced up to 55%
It can also achieve a reduction of up to 27% in installation space.
Improvement in Maintenance
With the use of an independent control panel, maintenance as well as overhaul can be easily managed.

Loaded with the Function of estimating the life span of UV lamps
The timing for replacement of UV lamps can be known and set beforehand which is extremely useful for the purpose of planning and scheduling.

Ideal for
– Food & Beverage industries
– Semiconductor industries
– Waste water treatment system</li>
        <li>Food & Beverage Lines</li>
        <li>Semi-Conductor Process Lines</li>
        <li>High-Tech Agriculture (Poultry, Ornamental Fish Farming)</li>

     
        </ul>
    </div>

    {/* UV 2 */}
    <div className="mb-6">
        <h3 className="text-xl font-bold ">Flonlizer</h3>
        <ul className="list-disc pl-6 space-y-1">
               <img src="uv2.png" alt="pic of uv2 "></img>
        
       
        <li>Sea Water Application</li>
        <li>Live Fish & Aquarium Use</li>

        </ul>
    </div>

       {/* otheruv products */}
    <div className="mb-6">
        <h3 className="text-xl font-bold ">Tank Immerage Type</h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="chiyoda_tank_immerge type.png" alt="pic of uv3 "></img>
        
       

        </ul>
    </div>
           {/* otheruv products */}
    <div className="mb-6">
        <h3 className="text-xl font-bold ">High Temperature Liquid Type</h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="chiyoda_liquid sugar.png" alt="pic of uv4 "></img>
        <li>Liquid Sugar/Syrup etc </li>
    
        </ul>
    </div>
        {/* otheruv products */}
    <div className="mb-6">
        <h3 className="text-xl font-bold ">Tank Surface Type </h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="chiyoda_UV_tank surface type.png" alt="pic of uv5 "></img>

    
        </ul>
    </div>
        {/* otheruv products */}
    <div className="mb-6">
        <h3 className="text-xl font-bold ">Open Air Surface Cap Type   </h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="chiyoda_UV_open air surface cap type.png" alt="pic of uv6 "></img>

    
        </ul>
    </div>
      {/* otheruv products */}
    <div className="mb-6">
        <h3 className="text-xl font-bold ">TOC Type   </h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="chiyoda_UV_toc type.png" alt="pic of uv6 "></img>

    
        </ul>
    </div>

      {/* otheruv products */}
    <div className="mb-6">
        <h3 className="text-xl font-bold ">UV Application</h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="chiyoda_application example of UV.jpg" alt="pic of app "></img>
        <img src="chiyoda_application example of UV_2.png" alt="pic of uv "></img>

    
        </ul>
    </div>

 <h2 className="text-2xl font-bold  mb-4">Membrane </h2>
 <img src="kubota.jpeg" alt="pic of membrane "></img>

    {/* Membrane Applications */}
    <div className="mb-6">
        <h3 className="text-xl font-bold ">Kubota Membrane Bio Reactor Membrane Application</h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="chiyoda_membrane_app_1.png" alt="pic of membrane  "></img>
        <img src="chiyoda_membrane_app_2.png" alt="pic of membrane  "></img>
        <li>Various Applications
Since every wastewater has different characteristics, MBR plant design would be different.
KUBOTA Corporation has a great number of applications and un-paralleled experience to meet your specific requirements.
Features of the KUBOTA Submerged Membrane Unit
1. Simple Structure
2. Simple Chemical Cleaning
3. Simple Maintenance
4. Simple Replacement

Merits for End user
– Assured Compliance
– Reduce land Area
– Water Reuse / Recycling</li>

   
        </ul>
    </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold ">Example of Installation of Membrane </h3>
        <ul className="list-disc pl-6 space-y-1">
     <img src="chiyoda_membrane_app_1.png" alt="pic of membrane  "></img>
        <img src="chiyoda_membrane_app_3.png" alt="pic of membrane  "></img>
          <img src="chiyoda_membrane_app_4.png" alt="pic of membrane  "></img>
           <img src="chiyoda_membrane_app_5.png" alt="pic of membrane  "></img>
        </ul>
    </div>
 

           <h3 className="text-2xl font-bold mb-4">Seishin Products</h3>
           <img src="1_Seishin_Air_Knocker_SK.png" alt="pic of seishin  "></img>
     {/* Seishin Product Highlights */}
      <div className="mb-6">
        <h3 className="text-xl font-bold ">Air Knocker</h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="Air-Knocker-1.png" alt="pic of air knocker  "></img>
        <li>Air knocker is a unique equipment to remove powders clogged to an object such as hopper, tank and chute for storage, carriage, drying, pulverizing and dust collection.
Air knocker operates only by compressed air and therefore is highly safe. When compressed air is supplied to an air knocker, an inside piston strikes its base plate. The impact power is transmitted to a hopper through the base plate, and clogging or bridge of powders in the hopper is resolved. Then the powder materials are removed and product flow is maintained without blockage or interruption.

Our air knocker’s main body is made of aluminum alloy casting and has a simple
structure. Therefore, it is lighter than other similar products made of steel. Set up
and replacement of spare parts are very easy, too.</li>
        <img src="chiyoda_seishin_air_knocker.png" alt="pic of air knocker  "></img>
    
        </ul>
    </div>
     {/*Jet BLASTERRR   */}
      <div className="mb-6">
        <h3 className="text-xl font-bold ">Jet Blaster  </h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="Jet-Blaster-1.jpg" alt="pic of jet blaster  "></img>
        <li>”Jet Blaster” is a device that blows powerful air directly onto adhering powder to remove it and prevent clogging and adhesion.</li>
    
        </ul>
    </div>
        {/*cer hose   */}
      <div className="mb-6">
        <h3 className="text-xl font-bold ">Ceramic Hose   </h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="chiyoda_seishin_ceramic_hose.png" alt="pic of ceramic hose  "></img>
       <img src="chiyoda_seishin_group.jpg" alt="pic of ceramic hose  "></img>
    
        </ul>
    </div>

           <h3 className="text-2xl font-bold mb-4">LED product application </h3>
           <img src="chiyoda_LED_app_2.png" alt="pic of seishin  "></img>

                 <div className="mb-6">
        <h3 className="text-xl font-bold ">High Power LED moveable lamp</h3>
        <ul className="list-disc pl-6 space-y-1">
        <img src="chiyoda_LED_app_1.png" alt="pic of LED lamp  "></img>
       <img src="chiyoda_LED_app_2.png" alt="pic of LED lamp  "></img>

        </ul>
    </div>
        </motion.section>
 {/* Branches Section */}
        <motion.section
  id="branches"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  variants={fadeIn}
  className="max-w-3xl mx-auto"
>
  <h2 className="text-2xl font-semibold mb-4">Overseas Branches</h2>

  {/* Japan */}
  <div className="mb-12">
    <h3 className="text-xl font-bold text-green-700">Chiyoda Kohan Japan Co., Ltd.</h3>
    <p>KPP Yaesu Bldg. 9th FL, 1-10-7 Kyobashi, Chuo-ku, Tokyo 104-8115 Japan</p>
    <p>Main Line: +81(0)3-3564-5511 | Fax: +81(0)3-3564-5527</p>
    <p>Int. Dept: +81(0)3-3564-5519 / +81(0)3-3564-5530</p>
    <p>Email: <a href="mailto:info_kokusai@chiyodakohan.co.jp" className="text-blue-600 underline">info_kokusai@chiyodakohan.co.jp</a></p>
    <p><a href="https://www.chiyodakohan.co.jp" target="_blank" className="text-blue-600 underline">www.chiyodakohan.co.jp</a></p>
  </div>

  {/* Thailand */}
  <div className="mb-12">
    <h3 className="text-xl font-bold text-green-700">Chiyoda Kohan (Thailand) Co., Ltd.</h3>
    <p>230 CS Tower, 14th Floor, Ratchadaphisek Road, Huay-Kwang, Bangkok 10310 Thailand</p>
    <p>Tel: +662-274-0871 | Fax: +662-274-0875</p>
    <p>Email: <a href="mailto:info2@chiyodakohan.co.th" className="text-blue-600 underline">info2@chiyodakohan.co.th</a></p>
    <p><a href="https://www.chiyodakohan.co.th" target="_blank" className="text-blue-600 underline">www.chiyodakohan.co.th</a></p>
  </div>

  {/* Wuxi, China */}
  <div>
    <h3 className="text-xl font-bold text-green-700">Chiyoda Kohan (Wuxi) Environmental Engineering Co., Ltd.</h3>
    <p>千代田工販(無錫)環保科技有限公司</p>
    <p>江蘇省無錫市新呉区長江北路106号 1509・1510室</p>
    <p>(510 Jinyuan Guoji Building, 2-3 Xiangjiang Road, Wuxi, Jiangsu, China)</p>
    <p>Tel: +86-510-8273-7451 | Fax: +86-510-8273-7455</p>
    <p><a href="https://www.chiyodakohan.cn" target="_blank" className="text-blue-600 underline">www.chiyodakohan.cn</a></p>
  </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <form
            action="https://formspree.io/f/yourFormID" // Replace with your Formspree ID
            method="POST"
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="px-6 py-2 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.section>
      </main>

 
    </>
  );
}
