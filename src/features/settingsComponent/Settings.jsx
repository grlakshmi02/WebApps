import React from "react";
import NavBar from "../NavBar";
import styles from '../Menu.module.css'
import { ImWarning } from 'react-icons/im';

function Settings(params) {
    return (
        <div className={styles.wrapper}>
        <div className={styles.nav}>
           <NavBar />
       </div>
       <div className={styles.maincont}>
       <p> This is Settings page, work in progress... <ImWarning /></p>
       <span>{ }</span>  
       </div>
   </div>
    );
}

export default Settings;