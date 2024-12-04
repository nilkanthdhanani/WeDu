"use client";
import { useState, useEffect } from "react";
import LogoIco from "@/assets/images/svg/logo";
import styles from "./header.module.scss";
import Link from "next/link";
import ProfileIco from "@/assets/images/svg/profile";
import Sidebar from "../sidebar";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <div className={styles.headerDiv}>
            <Link href={"/"}>
              <div className={styles.logo}>
                <LogoIco />
                <div className={styles.logoText}>
                  <span>WeDu</span>
                </div>
              </div>
            </Link>
            <div className={styles.headerList}>
              <nav>
                <Link href={"/"} className={pathname === '/' ? styles.active : ''}>
                  <span>Home</span>
                </Link>
                <Link href={"/#product"} className={pathname === '/#product' ? styles.active : ''}>
                  <span>Product</span>
                </Link>
                <Link href={"/plans"} className={pathname === '/plans' ? styles.active : ''}>
                  <span>Pricing Plans</span>
                </Link>
                <Link href={"/contact"} className={pathname === '/contact' ? styles.active : ''}>
                  <span>Contact</span>
                </Link>
                <Link href={"/login"} className={pathname === '/login' ? styles.active : ''}>
                  <ProfileIco /> <span>Log In</span>
                </Link>
              </nav>
              <Link href={"/plans"}>
                <button type="button">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.menuIcon}>
        <label>
          <input type="checkbox" onClick={toggleSidebar} checked={isSidebarOpen} readOnly />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}
