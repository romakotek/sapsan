import styles from './Navbar.module.css';
import cv from '../Pages/about-me/Cv';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a href="/home">Home</a>
            </div>
            <div className={styles.item}><a href="/cv">About me</a></div>
            <div className={styles.item}><a href="/contacts">Contacts</a></div>
            
        </nav>
    )
}

export default Navbar;
