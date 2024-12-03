import WithRightBg from '@/assets/images/svg/withRightBg'
import styles from './withRight.module.scss'

export default function WithRight() {
    return (
        <section className={styles.withRight}>
            <div className={styles.withRightBg}>
                <WithRightBg />
            </div>
            <div className={styles.container2}>
                <div className={styles.withRightContent}>
                    <div className={styles.wrContentHead}>
                        <h2>With the Right Software, Great Things Can Happen</h2>
                    </div>
                    <div className={styles.wrContentPera}>
                        <p>Unlock the power of innovation with cutting-edge software solutions designed to transform your vision into reality. From streamlining operations to driving growth, the right tools empower businesses to achieve remarkable outcomes. Let technology work for you and unprecedented success. Embrace the future with software that makes great things happen.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
