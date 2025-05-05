import Link from 'next/link';
import styles from './MenuBar.module.css'

const MenuBar =()=> {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                <div className={styles.logo}>
                    <Link href="/">MyWebsite</Link>
                </div>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="#Services">Services</Link>
                    <Link href="#OurClients">Our Clients</Link>
                    <Link href="#ContactUs">Contact Us</Link>
                </div>
            </div>
        </nav>
      );
}

export default MenuBar