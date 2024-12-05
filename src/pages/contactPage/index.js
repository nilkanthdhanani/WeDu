import LeaderBg from '@/assets/images/svg/leaderBg';
import styles from './contact.module.scss';
import ChatEmojiIcon from '@/assets/images/svg/chatEmojiIcon';
import ChatIcon from '@/assets/images/svg/chatIcon';
import MapIcon from '@/assets/images/svg/mapIcon';
import PhoneIcon from '@/assets/images/svg/phoneIcon';
import Link from 'next/link';
import Faq from './faq';

const contactBox = [
    {
        title: 'Chat to sales',
        content: 'Speack to our friendly team',
        link: 'sales@wedu.com',
        linkUrl: '/',
        icon: <ChatEmojiIcon />
    },
    {
        title: 'Chat to support',
        content: "We're here to help",
        link: 'support@wedu.com',
        linkUrl: '/',
        icon: <ChatIcon />
    },
    {
        title: 'Visit us',
        content: 'Visit our office HQ.',
        link: 'View on google maps',
        linkUrl: '/',
        icon: <MapIcon />
    },
    {
        title: 'Call us',
        content: 'Mon-Fri from Bam to 5pm.',
        link: '+1 (555) 000-0000',
        linkUrl: '/',
        icon: <PhoneIcon />
    },
]

export default function ContactPage() {
    return (
        <main>
            <section className={styles.contactHead}>
                <div className={styles.container2}>
                    <div className={styles.contactHeadContent}>
                        <h1>Contact Our Friendly Team</h1>
                        <p>Let us know how we can help.</p>
                    </div>
                </div>
            </section>
            <section className={styles.contact}>
                <div className={styles.contactBg}><LeaderBg /></div>
                <div className={styles.container2}>
                    <div className={styles.contactContent}>
                        {contactBox.map((data, index) => (
                            <div className={styles.contactContentBox} key={index}>
                                <div className={styles.contactContentLine}>
                                    <div className={styles.contactLineDot}></div>
                                    <div className={styles.contactLineDot}></div>
                                    <div className={styles.contactLineDot}></div>
                                </div>
                                <div className={styles.contactText}>
                                    <div className={styles.contactIcon}>{data.icon}</div>
                                    <h2>{data.title}</h2>
                                    <p>{data.content}</p>
                                    <Link href={data.linkUrl}>{data.link}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Faq />
        </main>
    )
}
