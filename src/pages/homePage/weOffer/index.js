import styles from './weOffer.module.scss';
import Image from 'next/image';

import offer1 from '../../../assets/images/webp/offer1.webp';
import offer2 from '../../../assets/images/webp/offer2.webp';
import offer3 from '../../../assets/images/webp/offer3.webp';
import offer4 from '../../../assets/images/webp/offer4.webp';

export default function WeOffer() {
    return (
        <section className={styles.weOffer}>
            <div className={styles.container2}>
                <div className={styles.weOfferHead}>
                    <h2>What We Offer</h2>
                    <p>Explore tailored solutions designed to maximize efficiency and productivity. Unlock potential with innovative tools for streamlined operations and exceptional results in your business journey.</p>
                </div>
                <div className={styles.weOfferContent}>
                    <div className={styles.weOfferItem}>
                        <Image src={offer1} alt="offer1" />
                        <div className={styles.weOfferItemText}>
                            <h3>Workflows <br /> That Work</h3>
                            <p>Optimize processes with proven strategies. Boost efficiency by implementing adaptable, scalable workflows tailored to meet diverse business needs, ensuring consistent progress and measurable success at every stage.</p>
                        </div>
                    </div>
                    <div className={styles.weOfferItem}>
                        <Image src={offer2} alt="offer2" />
                        <div className={styles.weOfferItemText}>
                            <h3>All-In-One <br /> Solution</h3>
                            <p>Streamline operations with a comprehensive suite of tools. Manage projects, communication, and analytics in one platform, designed to simplify tasks and enhance team collaboration effectively.</p>
                        </div>
                    </div>
                    <div className={styles.weOfferItem}>
                        <Image src={offer3} alt="offer3" />
                        <div className={styles.weOfferItemText}>
                            <h3>Comprehensive <br /> Customer Support</h3>
                            <p>Receive top-tier assistance tailored to your needs. Our dedicated team provides personalized solutions, ensuring satisfaction and prompt resolutions for seamless operations and improved client relationships.</p>
                        </div>
                    </div>
                    <div className={styles.weOfferItem}>
                        <Image src={offer4} alt="offer4" />
                        <div className={styles.weOfferItemText}>
                            <h3>Smart <br /> Automation Tools</h3>
                            <p>Automate routine tasks with cutting-edge tools, freeing up valuable time. Increase productivity and accuracy by integrating intelligent solutions that adapt to evolving business requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
