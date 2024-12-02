import Link from "next/link";
import styles from "./sidebar.module.scss";
import LogoIco from "@/assets/images/svg/logo";
import ProfileIco from "@/assets/images/svg/profile";
import { usePathname } from "next/navigation";

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <Link href={"/"} onClick={onClose}>
        <div className={styles.logo}>
          <LogoIco />
          <div className={styles.logoText}>
            <span>WeDu</span>
          </div>
        </div>
      </Link>
      <div className={styles.headerList}>
        <nav>
          <Link href={"/"} className={pathname === '/' ? styles.active : ''} onClick={onClose}>
            <span>Home</span>
          </Link>
          <Link href={"/product"} className={pathname === '/product' ? styles.active : ''} onClick={onClose}>
            <span>Product</span>
          </Link>
          <Link href={"/plans"} className={pathname === '/plans' ? styles.active : ''} onClick={onClose}>
            <span>Product Plans</span>
          </Link>
          <Link href={"/contact"} className={pathname === '/contact' ? styles.active : ''} onClick={onClose}>
            <span>Contact</span>
          </Link>
          <Link href={"/login"} className={pathname === '/login' ? styles.active : ''} onClick={onClose}>
            <ProfileIco /> <span>Log In</span>
          </Link>
        </nav>
        <Link href={"/"} onClick={onClose}>
          <button type="button">Get Started</button>
        </Link>
      </div>
    </aside>
  );
}
