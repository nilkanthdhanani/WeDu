import styles from './weOffer.module.scss';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

import offer1 from '../../../assets/images/webp/offer1.webp';
import offer2 from '../../../assets/images/webp/offer2.webp';
import offer3 from '../../../assets/images/webp/offer3.webp';
import offer4 from '../../../assets/images/webp/offer4.webp';
import { useEffect } from 'react';

export default function WeOffer() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: false,
        });
        Aos.refresh();
    }, []);

    const offers = [
        {
            image: offer1,
            alt: "offer1",
            title: <>Workflows <br /> That Work</>,
            description: "Optimize processes with proven strategies. Boost efficiency by implementing adaptable, scalable workflows tailored to meet diverse business needs, ensuring consistent progress and measurable success at every stage.",
        },
        {
            image: offer2,
            alt: "offer2",
            title: <>All-In-One <br /> Solution</>,
            description: "Streamline operations with a comprehensive suite of tools. Manage projects, communication, and analytics in one platform, designed to simplify tasks and enhance team collaboration effectively.",
        },
        {
            image: offer3,
            alt: "offer3",
            title: <>Comprehensive <br /> Customer Support</>,
            description: "Receive top-tier assistance tailored to your needs. Our dedicated team provides personalized solutions, ensuring satisfaction and prompt resolutions for seamless operations and improved client relationships.",
        },
        {
            image: offer4,
            alt: "offer4",
            title: <>Smart <br /> Automation Tools</>,
            description: "Automate routine tasks with cutting-edge tools, freeing up valuable time. Increase productivity and accuracy by integrating intelligent solutions that adapt to evolving business requirements.",
        },
    ];


    return (
        <section className={styles.weOffer} id="product">
            <div className={styles.container2}>
                <div className={styles.weOfferHead} data-aos="zoom-in">
                    <h2>What We Offer</h2>
                    <p>Explore tailored solutions designed to maximize efficiency and productivity. Unlock potential with innovative tools for streamlined operations and exceptional results in your business journey.</p>
                </div>
                <div className={styles.weOfferContent}>
                    {offers.map((offer, index) => (
                        <div className={styles.weOfferItem} key={index} data-aos="fade-up">
                            <Image src={offer.image} alt={offer.alt} />
                            <div className={styles.weOfferItemText}>
                                <h3>{offer.title}</h3>
                                <p>{offer.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
