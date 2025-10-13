"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <>

      <main className="space-y-32 px-6 py-12">
        {/* Hero Section */}
        <motion.section
          id="hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold mb-4 text-green-700">
            Chiyoda Kohan Singapore Pte Ltd
          </h1>
          <p className="text-lg text-gray-700 italic">
            Making our world a better place in the new millennium
          </p>
          <img src="homepage.png" alt="pic of products "></img>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>
            Chiyoda Kohan (Singapore) was incorporated on 10 August 2001 with the objective of developing and expanding to the ASEAN markets. As a continuation of our parent company’s vision, we hope to contribute to the society based on our accumulated experience in the development of new technologies and systems.

Chiyoda Kohan is a leading manufacturer of ultraviolet disinfection system in Japan specializing in managing environmental problems such as water purification as well as waste management. In a continuous effort to excellent service, we have joined strategic alliances with more than 200 manufacturers and suppliers in order to provide complete solutions to our valued clients.

Underlying our commitment to service and development is the constant drive by our dynamic pioneer team of sales personnel and support staff. With our dedication and enthusiasm, we are confident in gaining access to tomorrow’s technologies and markets.

Having forged close links with our customers and strategic partners, Chiyoda Kohan (Singapore)’s strategy for the millennium is to meet its objective of uncovering customers’ needs and translate them into custom made solutions. At the same time, we hope to achieve our vision of “Making our world a better place in the new millennium”.
          </p>
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
  <h2 className="text-2xl font-semibold mb-4">Our Products</h2>

  {/* Core Solutions */}
  <div className="mb-6">
    <h3 className="text-xl font-bold text-green-700">Core Solutions</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Industrial Equipment</li>
      <li>Automation Solutions</li>
      <li>Custom Fabrication</li>
      <li>Food & Beverage Lines</li>
      <li>Semi-Conductor Process Lines</li>
      <li>High-Tech Agriculture (Poultry, Ornamental Fish Farming)</li>
    </ul>
  </div>

  {/* UV Systems */}
  <div className="mb-6">
    <h3 className="text-xl font-bold text-green-700">Ultra Violet Systems</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Tank Immerge Type</li>
      <li>Tank Surface Type</li>
      <li>Open Air Surface Cap Type</li>
      <li>TOC Type</li>
      <li>High Temperature Liquid Type (e.g., Syrup)</li>
      <li>Sea Water Application</li>
      <li>Live Fish & Aquarium Use</li>
      <li>Steritron UEX / Flonlizer / UV Systems</li>
    </ul>
  </div>

  {/* Specialized Applications */}
  <div className="mb-6">
    <h3 className="text-xl font-bold text-green-700">Specialized Applications</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Membrane Application</li>
      <li>Seishin Products Application</li>
      <li>LED Products Application</li>
    </ul>
  </div>

  {/* Clean Facilities */}
  <div className="mb-6">
    <h3 className="text-xl font-bold text-green-700">Clean Facilities & Installation</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Cleanroom Construction</li>
      <li>Clean Enclosure Fabrication</li>
      <li>F&B Grade SS Piping Installation</li>
      <li>One-Stop Solution</li>
    </ul>
  </div>

  {/* Seishin Product Highlights */}
  <div>
    <h3 className="text-xl font-bold text-green-700">Seishin Product Highlights</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Ceramic Hose</li>
      <li>Air Blaster / Jet Blaster</li>
      <li>High-Power Moveable LED Working Lamp</li>
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
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Tel: 65-62786780 | Fax: 65-62786779</p>
          <p>
            Email:{" "}
            <a
              href="mailto:ckslenakim@chiyodakohan.com.sg"
              className="text-blue-600 underline"
            >
              ckslenakim@chiyodakohan.com.sg
            </a>
          </p>
        </motion.section>
      </main>
 
    </>
  );
}
