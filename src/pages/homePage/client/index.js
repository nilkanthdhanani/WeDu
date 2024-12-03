import styles from './client.module.scss'
import ClientIcon1 from '@/assets/images/svg/clientIcon1'
import ClientIcon2 from '@/assets/images/svg/clientIcon2'
import ClientIcon3 from '@/assets/images/svg/clientIcon3'

const clients = [
    {
        id: 1,
        name: 'Deena Levies',
        comment: 'Working with this team has been a game-changer for our business. Their tools are intuitive, reliable, and have significantly boosted our productivity. We couldn’t be more satisfied!"',
        company: 'Mission Bay',
        icon: <ClientIcon1 />,
    },
    {
        id: 2,
        name: 'Tom Smithenson',
        comment: 'Their commitment to excellence and understanding of our needs is unmatched. From day one, they’ve delivered beyond expectations, making them a vital part of our success.',
        company: 'Parkmerced',
        icon: <ClientIcon2 />,
    },
    {
        id: 3,
        name: 'Tilly Green',
        comment: 'The expertise and innovation this company brings to the table are truly remarkable. They don’t just meet our needs—they anticipate them, ensuring we always stay ahead.',
        company: 'Hayes Valley',
        icon: <ClientIcon3 />,
    },
]

export default function Clients() {
    return (
        <section className={styles.client}>
            <div className={styles.container2}>
                <div className={styles.clientHead}>
                    <h2>What Our Clients Say</h2>
                </div>
                <div className={styles.clientGrid}>
                    {clients.map((detail, index) => (
                        <div className={styles.clientContent} key={index}>
                            <div className={styles.clientContentLine}>
                                <div className={styles.clientContentLineDot}></div>
                                <div className={styles.clientContentLineDot}></div>
                                <div className={styles.clientContentLineDot}></div>
                            </div>
                            <div className={styles.clientContentBox}>
                                <div className={styles.clientContentData}>
                                    <p>“{detail.comment}”</p>
                                </div>
                                <div className={styles.clientContentName}>
                                    <h3>{detail.name},</h3>
                                    <h3>{detail.company}</h3>
                                </div>
                            </div>
                            <div className={styles.clientIcon}>{detail.icon}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
