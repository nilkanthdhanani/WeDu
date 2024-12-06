"use client"
import { loginBg } from '@/assets/images/image'
import styles from './logIn.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import LogoIco from '@/assets/images/svg/logo'
import GoogleIco from '@/assets/images/svg/googleIcon'
import AppleIco from '@/assets/images/svg/appleIcon'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function LogInPage() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
    Aos.refresh();
  }, []);

  return (
    <main>
      <section className={styles.logIn}>
        <div className={styles.logInBg} data-aos="zoom-in">
          <Image src={loginBg} alt="loginBg" />
        </div>
        <div className={styles.logInContent} data-aos="zoom-in">
          <div className={styles.logInDiv}>
            <div className={styles.logInDivLogo}>
              <Link href={"/"}>
                <div className={styles.logo}>
                  <LogoIco />
                  <div className={styles.logoText}>
                    <span>WeDu</span>
                  </div>
                </div>
              </Link>
            </div>
            <form>
              <div className={styles.inputBox}>
                <input type="email" placeholder='email' required />
              </div>
              <div className={styles.inputBox2}>
                <input type="password" placeholder='password' required />
              </div>
              <div className={styles.rememberDiv}>
                <div className={styles.checkboxDiv}>
                  <div className={styles.checkbox}>
                    <input type="checkbox" id="check" required />
                    <span htmlFor="check">
                      <svg viewBox="0,0,50,50">
                        <path d="M5 30 L 20 45 L 45 5"></path>
                      </svg>
                    </span>
                  </div>
                  <label htmlFor="check">Remember me</label>
                </div>
                <Link href={"/login"}>Forgot Password?</Link>
              </div>
              <div className={styles.submitBtn}>
                <button type="submit">Log In</button>
              </div>
            </form>
            <div className={styles.orLine}>
              <span>Or login with</span>
            </div>
            <Link href={"/login"} className={styles.googleLogin}>
              <GoogleIco />
              <span>Google</span>
            </Link>
            <Link href={"/login"} className={styles.googleLogin}>
              <AppleIco />
              <span>Apple</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
