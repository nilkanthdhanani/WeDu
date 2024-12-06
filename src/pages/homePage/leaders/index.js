import Image from 'next/image'
import styles from './leaders.module.scss'
import LeaderBg from '@/assets/images/svg/leaderBg'
import { leader1, leader2, leader3, leader4, leader5, leader6, leader7, leader8 } from '@/assets/images/image'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';

const leaders = [
    {
        image: leader1,
        alt: "leader1",
    },
    {
        image: leader2,
        alt: "leader2",
    },
    {
        image: leader3,
        alt: "leader3",
    },
    {
        image: leader4,
        alt: "leader4",
    },
    {
        image: leader5,
        alt: "leader5",
    },
    {
        image: leader6,
        alt: "leader6",
    },
    {
        image: leader7,
        alt: "leader7",
    },
    {
        image: leader8,
        alt: "leader8",
    },
]

export default function Leaders() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: false,
        });
        Aos.refresh();
    }, []);

    return (
        <section className={styles.leaders}>
            <div className={styles.leadersBg}>
                <LeaderBg />
            </div>
            <div className={styles.container2}>
                <div className={styles.leadersContent}>
                    <div className={styles.leadersContentHead} data-aos="zoom-in">
                        <h2>Trusted Among Industry Leaders</h2>
                        <p>Our solutions are the backbone of success for industry pioneers worldwide. Built on reliability and innovation, we empower businesses to achieve their goals with confidence. Trusted by top organizations, we deliver cutting-edge technology that drives growth, efficiency, and scalability, ensuring you stay ahead in a competitive market. Join the leaders who trust us to shape the future.</p>
                    </div>
                    <div className={styles.leadersContentGrid}>
                        {leaders.map((data, index) => (
                            <div className={styles.leadersContentBox} key={index} data-aos="fade-up">
                                <Image src={data.image} alt={data.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
