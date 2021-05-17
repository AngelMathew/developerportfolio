import React from "react";
import * as styles from "./Header.module.scss";
import { useLocation } from "@reach/router";
import Logo from "../../assets/Logo.svg";

const Header=()=>{
    const currentPath = useLocation().pathname;
    const scrollToBottom=()=>{
       window.scrollTo(0,document.body.scrollHeight);
       }

    return(<div className={styles.header}>
        <div className={styles.textClass}><a href="/" aria-label="home"><img src={Logo}></img></a></div>
        
        <ul className={styles.mainNavLink}>
            <li className={styles.navLinks}> <a  href="/"
            className={
              currentPath === "/"
                ? styles.navLink + " " + styles.selected
                : styles.navLink
            }>About</a></li>
            <li className={styles.navLink}>
                <a onClick={()=>scrollToBottom()}>Contacts</a></li>
        </ul>
    </div>)

}

export default Header;