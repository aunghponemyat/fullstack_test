// src/components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.navList}>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/why-us">Why Us</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <Link href="/free-trial"><button className={styles.freeTrialBtn}>Free Trial</button></Link>
      </ul>
    </nav>
  );
}
