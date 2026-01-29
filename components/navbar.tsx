"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full h-[100px] flex items-center justify-between bg-gradient-to-br from-[#371B86] to-[#280689] px-[80px] font-axiforma">
      <div className="flex items-center w-[95px] h-[32px] font-axiforma justify-between">
        <Image
          src="/homeLogo.png"
          alt="My App Logo"
          width={34}
          height={33}
          className="bg-inherit"
        />
        <h2 className="text-[28px] text-white  leading-none text-center">
          enif
        </h2>
      </div>

      <div className="w-[496px] h-[24px] flex items-center justify-between text-[16px] font-[300] leading-[24px] tracking-normal text-white">
        <Link
          href="/"
          className="text-[16px] font-[300] leading-[24px] tracking-normal text-white"
        >
          Conversational AI
        </Link>
        <Link
          href="/"
          className="text-[16px] font-[300] leading-[24px] tracking-normal text-white"
        >
          Automation
        </Link>
        <Link
          href="/"
          className="text-[16px] font-[300] leading-[24px] tracking-normal text-white"
        >
          Sales Pilot
        </Link>
        <Link
          href="/"
          className="text-[16px] font-[300] leading-[24px] tracking-normal text-white"
        >
          Trust Guide
        </Link>
      </div>
      <div className="w-[296px] h-[48px] flex items-center justify-between text-white">
        <Link
          href="/"
          className="border-2 border-[#FEFEFE] h-full w-[140px] flex items-center justify-center leading-none tracking-normal rounded-[32px] pb-[4px]"
        >
          Request Demo
        </Link>
        <Link
          href="/"
          className="h-[48px] w-[140px] flex items-center justify-center  rounded-[32px] text-[#1B0655] bg-[#04FFFF] pb-[4px]"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
