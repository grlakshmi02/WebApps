import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Login.module.css';

function handleLoginSubmit() {
    
}


export function Counter() {


    return (
        <div className={styles.row}>
            <div>
                <form onSubmit={handleLoginSubmit()}>
                Login Here
                <div>
                    <div>
                        <label>Email Address</label>
                    <input />
                    </div>
                    <div>
                        <label>Password</label>
                    <input />
                    </div>
                </div>
                </form>
            </div>
            <div>
                Register Here
            </div>
        </div>
    );
}
