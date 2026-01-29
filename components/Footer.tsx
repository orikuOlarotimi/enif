"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-[500px] px-[80px] bg-gradient-to-br from-[#371B86] to-[#280689] flex flex-col justify-between">
      <div className="w-full h-[207px] flex items-start justify-between my-[80px]">
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

        <div className=" w-[150px] h-full flex flex-col justify-between">
          <h1 className=" text-[22px] leading-[30px] text-[#FFFFFF] ">
            Solutions
          </h1>
          <div className="w-full h-[153px] flex flex-col justify-between">
            <p className="text-[16px] font-[400] leading-[30px] text-[#E0E0E0]">
              Conversational AI
            </p>
            <p className="text-[16px] font-[400] leading-[30px] text-[#E0E0E0]">
              Automation
            </p>
            <p className="text-[16px] font-[400] leading-[30px] text-[#E0E0E0]">
              Sales Pilot
            </p>
            <p className="text-[16px] font-[400] leading-[30px] text-[#E0E0E0]">
              Trust Guide
            </p>
          </div>
        </div>
        <div className=" w-[175px] h-full flex flex-col justify-between">
          <h1 className=" text-[22px] leading-[30px] text-[#FFFFFF] ">
            Industries
          </h1>
          <div className="w-full h-[153px] flex flex-col justify-between">
            <p className="text-[16px] font-[400] leading-[30px] text-[#E0E0E0]">
              Financial Technology
            </p>
            <p className="text-[16px] font-[400] leading-[30px] text-[#E0E0E0]">
              E-Commerce
            </p>
            <p className="text-[16px] font-[400] leading-[30px] text-[#E0E0E0]">
              Travel and Hospitality
            </p>
            <p className="text-[16px] font-[400] leading-[30px] text-[#E0E0E0]">
              Education
            </p>
          </div>
        </div>

        <div className=" w-[160px] h-[136px] flex flex-col justify-between">
          <Link
            href="/"
            className="h-[56px] w-full flex items-center justify-center  rounded-[32px] text-[#1B0655] bg-[#04FFFF] pb-[4px]"
          >
            Get Started
          </Link>
          <Link
            href="/"
            className="border-2 border-[#FEFEFE] h-[56px] w-full flex items-center justify-center leading-none tracking-normal rounded-[32px] pb-[4px] text-[#FFFFFF]"
          >
            Request Demo
          </Link>
        </div>
      </div>

      <div className="border-t border-[#401F9F] flex items-center justify-between h-[113px] w-full">
        <p className="text-[18px] leading-[30px] text-[#E0E0E0] font-[400] ">
          © 2023 Enif
        </p>
        <div className="flex justify-between items-center w-[112px] h-[48px] ">
          <Image
            src="/twitter.png"
            alt="twitter logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <Image
            src="/linkidin.png"
            alt="twitter logo"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
