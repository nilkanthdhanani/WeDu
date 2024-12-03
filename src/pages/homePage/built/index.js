import styles from './built.module.scss';

import { detailIcon4, detailIcon5, detailIcon6 } from '@/assets/images/image';
import BuiltBg from '@/assets/images/svg/builtBg';
import BuiltCurveBg from '@/assets/images/svg/builtCurveBg';
import BuiltRoundBg from '@/assets/images/svg/builtRoundBg';
import BuiltSqureBg from '@/assets/images/svg/builtSqureBg';
import Image from 'next/image';

export default function Built() {
  return (
    <section className={styles.built}>
      <div className={styles.container2}>
        <div className={styles.builtDiv}>
          <div className={styles.builtDivImg}>
            <div className={styles.builtRoundBg}>
              <BuiltRoundBg />
            </div>
            <div className={styles.builtSqureBg}>
              <BuiltSqureBg />
            </div>
            <div className={styles.builtCurveBg}>
              <BuiltCurveBg />
            </div>
            <div className={styles.builtDivImgDiv}>
              <BuiltBg />
            </div>
          </div>
          <div className={styles.builtDivContent}>
            <div className={styles.builtContentDiv}>
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
