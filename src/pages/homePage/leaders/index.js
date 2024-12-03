import Image from 'next/image'
import styles from './leaders.module.scss'
import LeaderBg from '@/assets/images/svg/leaderBg'
import { leader1, leader2, leader3, leader4, leader5, leader6, leader7, leader8 } from '@/assets/images/image'

export default function Leaders() {
    return (
        <section className={styles.leaders}>
            <div className={styles.leadersBg}>
                <LeaderBg />
            </div>
            <div className={styles.container2}>
                <div className={styles.leadersContent}>
                    <div className={styles.leadersContentHead}>
                        <h2>Trusted Among Industry Leaders</h2>
                        <p>Our solutions are the backbone of success for industry pioneers worldwide. Built on reliability and innovation, we empower businesses to achieve their goals with confidence. Trusted by top organizations, we deliver cutting-edge technology that drives growth, efficiency, and scalability, ensuring you stay ahead in a competitive market. Join the leaders who trust us to shape the future.</p>
                    </div>
                    <div className={styles.leadersContentGrid}>
                        <div className={styles.leadersContentBox}>
                            <Image src={leader1} alt="leader1" />
                        </div>
                        <div className={styles.leadersContentBox}>
                            <Image src={leader2} alt="leader2" />
                        </div>
                        <div className={styles.leadersContentBox}>
                            <Image src={leader3} alt="leader3" />
                        </div>
                        <div className={styles.leadersContentBox}>
                            <Image src={leader4} alt="leader4" />
                        </div>
                        <div className={styles.leadersContentBox}>
                            <Image src={leader5} alt="leader5" />
                        </div>
                        <div className={styles.leadersContentBox}>
                            <Image src={leader6} alt="leader6" />
                        </div>
                        <div className={styles.leadersContentBox}>
                            <Image src={leader7} alt="leader7" />
                        </div>
                        <div className={styles.leadersContentBox}>
                            <Image src={leader8} alt="leader8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
