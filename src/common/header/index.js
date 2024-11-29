"use client"
import { useState, useEffect } from 'react';
import LogoIco from '@/assets/images/svg/logo';
import styles from './header.module.scss';
import Link from 'next/link';
import ProfileIco from '@/assets/images/svg/profile';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
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
              <Link href={"/"}><span>Home</span></Link>
              <Link href={"/"}><span>Product</span></Link>
              <Link href={"/"}><span>Product Plans</span></Link>
              <Link href={"/"}><span>Contact</span></Link>
              <Link href={"/"}><ProfileIco /> <span>Log In</span></Link>
            </nav>
            <Link href={"/"}>
              <button type="button">Get Started</button>
            </Link>
          </div>
          <div className={styles.menuIcon}>
            <label>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
