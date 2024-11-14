// src/components/Hero.js
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <img src="/assets/Vector.png" alt="Vector" className={styles.vectorImage} />
        <div className={styles.textContent}>
          <h1>Your all-in-one platform<br />for automated marketing,<br />sales, and support</h1>
          <p>Boost sales and build stronger connections...</p>
        </div>
        
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Download</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
        </div>
      <div className={styles.imageContainer}>
        <img src="/assets/iPhone 12 Pro.png" alt="Mobile App Mockup" className={styles.foregroundImage}/>
        <img src="/assets/Group 1261155223.png" alt="group" className={styles.backgroundImage}/>
      </div>
    </section>
  );
}
