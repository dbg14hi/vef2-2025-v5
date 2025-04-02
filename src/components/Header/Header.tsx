// components/Header.tsx
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          📖 Fréttastofan
        </Link>
        <nav className={styles.nav}>
          <Link href="/greinar" className={styles.navlink}>
            Fréttir
          </Link>
          <Link href="/contact" className={styles.navlink}>
            Hafðu samband
          </Link>
        </nav>
      </div>
    </header>
  );
}
