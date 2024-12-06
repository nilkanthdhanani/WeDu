import styles from './built.module.scss';

import { detailIcon4, detailIcon5, detailIcon6 } from '@/assets/images/image';
import BuiltBg from '@/assets/images/svg/builtBg';
import BuiltCurveBg from '@/assets/images/svg/builtCurveBg';
import BuiltRoundBg from '@/assets/images/svg/builtRoundBg';
import BuiltSqureBg from '@/assets/images/svg/builtSqureBg';
import Image from 'next/image';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Built() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
    Aos.refresh();
  }, []);

  return (
    <section className={styles.built}>
      <div className={styles.container2}>
        <div className={styles.builtDiv}>
          <div className={styles.builtDiv1}>
            <div className={styles.builtDivImg}>
              <div className={styles.builtRoundBg} data-aos="fade-right">
                <BuiltRoundBg />
              </div>
              <div className={styles.builtSqureBg} data-aos="fade-left">
                <BuiltSqureBg />
              </div>
              <div className={styles.builtCurveBg} data-aos="fade-left">
                <BuiltCurveBg />
              </div>
              <div className={styles.builtDivImgDiv} data-aos="fade-up">
                <BuiltBg />
              </div>
            </div>
          </div>
          <div className={styles.builtDivContent}>
            <div className={styles.builtContentDiv} data-aos="zoom-in">
              <h2>Built for Creatives, by Creatives</h2>
              <p>Our platform is designed by visionaries who truly understand creative workflows. Built with innovation and collaboration in mind, it empowers creators to push boundaries, streamline processes, and bring ideas to life effortlessly. From designers to developers, we provide tools that inspire and elevate your craft, ensuring you focus on what you do best—creating extraordinary experiences.</p>
              <div className={styles.builtDivContentGrid}>
                <div className={styles.gridBox}>
                  <Image src={detailIcon4} alt="detailIcon4" />
                  <span>All-In-One Toolkit</span>
                </div>
                <div className={styles.gridBox}>
                  <Image src={detailIcon5} alt="detailIcon5" />
                  <span>Integrated File Sharing</span>
                </div>
                <div className={styles.gridBox}>
                  <Image src={detailIcon6} alt="detailIcon6" />
                  <span>Toatal Design Freedom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
