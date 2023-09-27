"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaChevronRight,
  FaInfoCircle,
  FaList,
  FaChartPie,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import LogoDark from "@/assets/images/logo_dark.png";
import Logo from "@/assets/images/logo.png";

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`fixed z-40 min-h-screen p-4 ${
        isOpen ? "w-80" : "w-12"
      } flex flex-col bg-primary`}
    >
      <div className="mb-8 flex w-full justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-text hover:text-background"
        >
          <div className="h-12">
            {isOpen ? <IoClose size={34} /> : <FaChevronRight size={24} />}
          </div>
        </button>
      </div>
      <div>
        {isOpen ? (
          <div className="flex flex-col items-start gap-8 text-h5 font-bold text-text">
            <Link
              href="/infos"
              className="flex items-center gap-2 hover:text-background"
            >
              <FaInfoCircle className="cursor-pointer" size={30} />
              <div className="cursor-pointer">INFORMATIONEN</div>
            </Link>
            <Link
              href="/datasets"
              className="flex items-center gap-2 hover:text-background"
            >
              <FaList className="cursor-pointer" size={30} />
              <div className="cursor-pointer">DATENSÄTZE</div>
            </Link>
            <Link
              href="/charts"
              className="flex items-center gap-2 hover:text-background"
            >
              <FaChartPie className="cursor-pointer" size={30} />
              <div className="cursor-pointer">VISUALISIERUNGEN</div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8 text-h5 font-bold text-text">
            <Link href="/infos">
              <FaInfoCircle
                className="cursor-pointer hover:text-background"
                size={30}
              />
            </Link>
            <Link href="/datasets">
              <FaList
                className="cursor-pointer hover:text-background"
                size={30}
              />
            </Link>
            <Link href="/charts">
              <FaChartPie
                className="cursor-pointer hover:text-background"
                size={30}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const TopNavigation = () => {
  const [logoHover, setLogoHover] = useState(false);
  return (
    <div className="flex h-16 w-full bg-primary shadow-lg">
      <button
        className="absolute left-2 top-2 text-h3 font-bold"
        onMouseEnter={() => setLogoHover(true)}
        onMouseLeave={() => setLogoHover(false)}
      >
        <Link href="/datasets">
          <Image
            src={logoHover ? Logo : LogoDark}
            alt="Logo"
            height={48}
            width={48}
          />
        </Link>
      </button>
      <div className="flex w-full items-center justify-center">
        <div className="flex gap-24 text-h5 text-text">
          <Link
            href="/infos"
            className="flex items-center gap-2 hover:text-background"
          >
            <FaInfoCircle className="cursor-pointer" size={30} />
            <div className="cursor-pointer">INFORMATIONEN</div>
          </Link>
          <Link
            href="/datasets"
            className="flex items-center gap-2 hover:text-background"
          >
            <FaList className="cursor-pointer" size={30} />
            <div className="cursor-pointer">DATENSÄTZE</div>
          </Link>
          <Link
            href="/charts"
            className="flex items-center gap-2 hover:text-background"
          >
            <FaChartPie className="cursor-pointer" size={30} />
            <div className="cursor-pointer">VISUALISIERUNGEN</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <TopNavigation />
      </nav>
      <nav className="block lg:hidden">
        <SideNavigation />
      </nav>
    </>
  );
};

export default Navigation;
