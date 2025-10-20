"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar relative px-4 py-2 flex items-center justify-between bg-white shadow-md z-50">
      {/* Logo + Company Name */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/chiyodakohan.png"
          alt="Chiyoda Kohan Logo"
          width={40}
          height={40}
          priority
        />
        <div className="text-lg font-semibold text-black">Chiyoda Kohan</div>
      </Link>

      {/* Hamburger for small screens */}
      <button
        className="md:hidden text-gray-700 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:flex-row gap-6 text-sm font-medium text-black">
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#products">Products</Link></li>
        <li><Link href="/#branches">Branches</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>

      {/* Mobile Dropdown Navigation */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white text-black p-4 flex flex-col items-start gap-4 text-sm font-medium md:hidden">
          <li><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/#products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link href="/#branches" onClick={() => setMenuOpen(false)}>Branches</Link></li>
          <li><Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
