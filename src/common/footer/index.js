
import LogoIco from '@/assets/images/svg/logo';
import styles from './footer.module.scss';
import Link from 'next/link';
import InstagramIco from '@/assets/images/svg/instagram';
import TwitterIco from '@/assets/images/svg/twitter';
import FacebookIco from '@/assets/images/svg/facebook';
import YoutubeIco from '@/assets/images/svg/youtube';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerFirst}>
          <Link href={"/"}>
            <div className={styles.footerLogo}>
              <LogoIco />
              <div className={styles.logoText}>
                <span>WeDu</span>
                <p>Communicate. Collaborate. Create.</p>
              </div>
            </div>
          </Link>
          <div className={styles.footerSocial}>
            <Link href={"https://www.instagram.com/"} target='_blank' aria-label='instagram'>
              <InstagramIco />
            </Link>
            <Link href={"https://x.com/"} target='_blank' aria-label='twitter'>
              <TwitterIco />
            </Link>
            <Link href={"https://www.facebook.com/"} target='_blank' aria-label='facebook'>
              <FacebookIco />
            </Link>
            <Link href={"https://www.youtube.com/"} target='_blank' aria-label='youtube'>
              <YoutubeIco />
            </Link>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className={styles.footerLinks}>
          <div className={styles.footerLinkDiv}>
            <h2>Contact</h2>
            <div className={styles.footerContact}>
              <p>500 Terry Francine Street San Francisco, CA 94158</p>
              <p>Sales: <Link href={"mailto:info@mysite.com"}>info@mysite.com</Link></p>
              <p>General Inquiries: <span>123-456-7890</span></p>
              <p>Customer Care: <Link href={"mailto:info@mysite.com"}>info@mysite.com</Link></p>
            </div>
          </div>
          <div className={styles.footerLinkDiv2}>
            <h2>Quik Links</h2>
            <Link href={"/"}>Terms & Conditions</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </div>
          <div className={styles.footerLinkDiv3}>
            <h2>Follow</h2>
            <p>Sign up to get the latest news on our product.</p>
            <form>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" required />
              <div className={styles.checkboxDiv}>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="check" required />
                  <span htmlFor="check">
                    <svg viewBox="0,0,50,50">
                      <path d="M5 30 L 20 45 L 45 5"></path>
                    </svg>
                  </span>
                </div>
                <label htmlFor="check">I agree to the terms and conditions.</label>
              </div>
              <div className={styles.subscribeBtn}>
                <button>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>© 2035 by WeDu. All rights reserved</div>
    </footer>
  )
}
