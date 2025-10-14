"use client";
import Image from "next/image";
import Link from "next/link"; // ✅ You forgot to import Link

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo + Company Name */}
        <a href="#hero" className="logo">
          <Image
            src="/chiyodakohan.png"
            alt="Chiyoda Kohan Logo"
            width={40}
            height={40}
            priority
          />
          <div className="companyname">Chiyoda Kohan</div>
        </a>

        {/* Anchor Links */}
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#branches">Branches</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
