import styles from "./Navbar.module.css";
import cv from "../Pages/about-me/Cv";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/home">Home</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/cv">About me</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink href="/contacts">Contacts</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
