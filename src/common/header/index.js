import LogoIco from '@/assets/images/svg/logo';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerDiv}>
          <div className={styles.headerDivLogo}>
            <LogoIco />
          </div>
        </div>
      </div>
    </header>
  );
}
