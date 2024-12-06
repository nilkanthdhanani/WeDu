import HeroBannerIco from '@/assets/images/svg/heroBanner'
import styles from './heroBanner.module.scss'
import { detailIcon1, detailIcon2, detailIcon3 } from '@/assets/images/image'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function HeroBanner() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
    Aos.refresh();
  }, []);

  return (
    <section className={styles.heroBanner}>
      <div className={styles.container2}>
        <div className={styles.bannerDiv}>
          <div className={styles.bannerDivContent} data-aos="zoom-in">
            <h1>Communicate. Collaborate. Create.</h1>
            <p>WeDu provides an effective and powerful way to manage your projects</p>
            <Link href="/plans">
              <button>Get Started</button>
            </Link>
            <div className={styles.bannerDivContentGrid}>
              <div className={styles.gridBox}>
                <Image src={detailIcon1} alt="detailIcon1" />
                <span>Speed & Security</span>
              </div>
              <div className={styles.gridBox}>
                <Image src={detailIcon2} alt="detailIcon2" />
                <span>Flexibility & Scalability</span>
              </div>
              <div className={styles.gridBox}>
                <Image src={detailIcon3} alt="detailIcon3" />
                <span>Better Collaboration</span>
              </div>
            </div>
          </div>
          <div className={styles.bannerDivImg} data-aos="zoom-in">
            <div className={styles.bannerDivImgDiv}>
              <HeroBannerIco />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
