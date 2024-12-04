import LeaderBg from '@/assets/images/svg/leaderBg';
import styles from './plan.module.scss';
import PlanIcon1 from '@/assets/images/svg/planIcon1';
import PlanIcon2 from '@/assets/images/svg/planIcon2';
import Link from 'next/link';
import CheckIcon from '@/assets/images/svg/checkIcon';

const plansCard = [
    {
        title: "Free",
        price: "0",
        duration: "month",
        list: [
            {
                text: "Seamlessly upgrade as your business grows, ensuring you always have the tools you need.",
            },
        ]
    },
    {
        title: "Standard",
        price: "359",
        duration: "year",
        list: [
            {
                text: "Seamlessly upgrade as your business grows, ensuring you always have the tools you need.",
            },
            {
                text: "No hidden costs—know exactly what you're paying for with upfront pricing.",
            },
            {
                text: "Access expert assistance whenever you need it, ensuring smooth operations.",
            },
        ]
    },
    {
        title: "Premium",
        price: "599",
        duration: "year",
        list: [
            {
                text: "Seamlessly upgrade as your business grows, ensuring you always have the tools you need.",
            },
            {
                text: "No hidden costs—know exactly what you're paying for with upfront pricing.",
            },
            {
                text: "Access expert assistance whenever you need it, ensuring smooth operations.",
            },
            {
                text: "Tailor features to match your unique requirements and budget.",
            },
            {
                text: "Enjoy cutting-edge solutions designed to optimize efficiency and drive results.",
            },
        ]
    },
]

export default function PlansPage() {
    return (
        <main>
            <section className={styles.plansHead}>
                <div className={styles.container2}>
                    <div className={styles.plansHeadContent}>
                        <h1>Explore Our Pricing Plans</h1>
                        <p>Discover flexible pricing plans designed to meet your tech needs, offering scalable solutions tailored for businesses of all sizes.</p>
                    </div>
                </div>
            </section>
            <section className={styles.plans}>
                <div className={styles.plansBg}><LeaderBg /></div>
                <div className={styles.container2}>
                    <div className={styles.plansContent}>
                        {plansCard.map((data, index) => (
                            <div className={`${styles.planCard} ${index === 2 ? styles.third : ''}`} key={index}>
                                <div className={styles.bestValue}>Best Value</div>
                                <div className={styles.planCardData}>
                                    <span>{data.title}</span>
                                    <h2>${data.price}</h2>
                                    <p>/{data.duration}</p>
                                    <Link href="/plans">
                                        <button type="button">Get Started</button>
                                    </Link>
                                </div>
                                <div className={styles.planCardList}>
                                    <ul>
                                        {data.list.map((item, i) => (
                                            <li key={i}><CheckIcon /><p>{item.text}</p></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className={styles.plansIcon1}><PlanIcon1 /></div>
                        <div className={styles.plansIcon2}><PlanIcon2 /></div>
                    </div>
                </div>
            </section>
        </main>
    )
}
