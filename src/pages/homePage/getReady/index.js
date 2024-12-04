import GetReadyBg from '@/assets/images/svg/getReadyBg';
import styles from './getReady.module.scss';
import Link from 'next/link';

export default function GetReady() {
  return (
    <section className={styles.getReady}>
      <div className={styles.getReadyBg}>
      </div>
      <div className={styles.container2}>
        <div className={styles.getRedayHead}>
          <h2>Get Ready to Maximize Your Productivity With Our Workflow Solutions</h2>
          <Link href="/plans">
          <button type="button">Get Started</button>
          </Link>
          <GetReadyBg />
        </div>
      </div>
    </section>
  )
}
