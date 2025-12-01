"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  console.log(active);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="navbar py-4 bg-white shadow-md w-full z-50">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <Image
              src="/Logo Cretivox - black.png"
              alt="Cretivox Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          <ul
            className={`menu flex font-semibold items-center gap-10 
            md:static fixed 
            ${active ? "top-20 opacity-100" : "-top-96 opacity-0"} 
            left-1/2 
            -translate-x-1/2 md:translate-x-0 
            md:flex-row flex-col 
            md:bg-transparent bg-white 
            w-full md:w-auto 
            md:py-0 py-10 
            text-black 
            transition-all duration-300 
            md:opacity-100 
            z-9999`}
          >
            <li>
              <Link href={"#beranda"}>Beranda</Link>
            </li>
            <li>
              <Link href={"#skill"}>Skill</Link>
            </li>
            <li>
              <Link href={"#journey"}>Journey</Link>
            </li>
            <li>
              <Link href={"#project"}>Project</Link>
            </li>
            <li>
              <Link href={"#kontak"}>Kontak</Link>
            </li>
          </ul>
          <div className="md:hidden block" onClick={() => handleClick()}>
            <i className="ri-menu-3-line ri-2x font-bold text-black"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
