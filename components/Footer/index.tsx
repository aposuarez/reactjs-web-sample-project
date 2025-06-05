import styles from './Footer.module.css'

const Footer =()=> {
    return (
        <div className={styles.container}>
            <div className={styles.copywrightText}>&copy; {new Date().getFullYear()} Sample Website. All rights reserved.</div>
        </div>
    )
}

export default Footer