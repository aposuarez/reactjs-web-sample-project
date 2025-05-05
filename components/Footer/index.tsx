import styles from './Footer.module.css'

const Footer =()=> {
    return (
        <div className={styles.container}>
            <div className={styles.footerText}>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</div>
        </div>
    )
}

export default Footer