import WithRightBg from '@/assets/images/svg/withRightBg';
import styles from './pricing.module.scss';
import CheckIcon from '@/assets/images/svg/checkIcon';
import Link from 'next/link';

export default function Pricing() {
    return (
        <section className={styles.pricing}>
            <div className={styles.pricingBg}>
                <WithRightBg />
            </div>
            <div className={styles.container2}>
                <div className={styles.pricingGrid}>
                    <div className={styles.pricingContent}>
                        <h2>Explore Our Pricing Options</h2>
                        <p>Discover flexible pricing plans tailored to meet your needs. Whether you're a startup, a growing business, or an enterprise, our transparent and competitive options ensure you get maximum value. Explore features designed to scale with you, offering the perfect balance of cost and capability. Choose a plan that aligns with your goals and empowers your journey to success.</p>
                        <Link href="/plans">
                            <button type="button">See More</button>
                        </Link>
                    </div>
                    <div className={styles.pricingCardDiv}>
                        <div className={styles.pricingCard}>
                            <div className={styles.bestValue}>Best Value</div>
                            <div className={styles.pricingCardData}>
                                <span>Premium</span>
                                <h3>$ 599</h3>
                                <p>/year</p>
                                <Link href="/plans">
                                    <button type="button">Get Started</button>
                                </Link>
                            </div>
                            <div className={styles.pricingCardList}>
                                <ul>
                                    <li>
                                        <CheckIcon />
                                        <p>Seamlessly upgrade as your business grows, ensuring you always have the tools you need.</p>
                                    </li>
                                    <li>
                                        <CheckIcon />
                                        <p>No hidden costs—know exactly what you're paying for with upfront pricing.</p>
                                    </li>
                                    <li>
                                        <CheckIcon />
                                        <p>Access expert assistance whenever you need it, ensuring smooth operations.</p>
                                    </li>
                                    <li>
                                        <CheckIcon />
                                        <p>Tailor features to match your unique requirements and budget.</p>
                                    </li>
                                    <li>
                                        <CheckIcon />
                                        <p>Enjoy cutting-edge solutions designed to optimize efficiency and drive results.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
