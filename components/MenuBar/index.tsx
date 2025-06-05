// components/MenuBar.jsx
import { useState } from 'react';
import Link from 'next/link';
import styles from './MenuBar.module.css';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div >
          <Link href="/"><img src='/images/logo-transparent.png' alt="JMSuarez Logo" className={styles.logo} /></Link>
        </div>

        <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        <div className={`${styles.links} ${isOpen ? styles.showMenu : ''}`}>
          <Link href="/">Home</Link>
          <Link href="#AboutMe">About</Link>
          <Link href="#Skills">Skills</Link>
          <Link href="#ContactMe">Contact Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
