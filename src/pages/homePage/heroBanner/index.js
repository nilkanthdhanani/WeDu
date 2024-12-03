import HeroBannerIco from '@/assets/images/svg/heroBanner'
import styles from './heroBanner.module.scss'
import { detailIcon1, detailIcon2, detailIcon3 } from '@/assets/images/image'
import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.container2}>
        <div className={styles.bannerDiv}>
          <div className={styles.bannerDivContent}>
            <h1>Communicate. Collaborate. Create.</h1>
            <p>WeDu provides an effective and powerful way to manage your projects</p>
            <button>Get Started</button>
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
          <div className={styles.bannerDivImg}>
            <div className={styles.bannerDivImgDiv}>
              <HeroBannerIco />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
