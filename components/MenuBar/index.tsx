// components/MenuBar.jsx
import { useState } from 'react';
import Link from 'next/link';
import styles from './MenuBar.module.css';
import Logo from ''

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
          <Link href="#AboutMe">About Me</Link>
          <Link href="#Contact">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
