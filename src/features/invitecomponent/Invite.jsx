import React from "react";
import NavBar from "../NavBar";
import styles from '../Menu.module.css'
import { ImWarning } from 'react-icons/im';

function Invite(params) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <NavBar />
            </div>
            <div className={styles.maincont}>
                <p> This is Invite page, work in progress... <ImWarning /></p>
            </div>
        </div>
    );
}

export default Invite;