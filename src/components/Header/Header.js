import Logo from '../../assets/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo" />
        </header>
    )
}

export default Header;
