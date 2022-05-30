import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css'

function Login() {

    let loginemail = useRef();
    let loginpassword = useRef();
    let signupname = useRef();
    let signupemail = useRef();
    let signuppassword = useRef();
    let navigate = useNavigate();

    const handleLoginSubmit = () => {
        navigate('/home');
        console.log('form submitted login');
    }

    const handleSignupSubmit = () => {
        navigate('/home');
        console.log('form submitted signup');
    }

    return (
        <div className={styles.wrapper}>
            <div>
                {/* Login form starts */}
                <form onSubmit={handleLoginSubmit}>
                    <div className={styles.loginbg}>
                        <p>Login Here</p>
                        <div className={styles.divider}>
                            <div>
                                <label>Email Address</label>
                                <input className={styles.inputs} type='text' ref={loginemail} />
                            </div>
                            <div>
                                <label>Password</label>
                                <input className={styles.inputs} type='text' ref={loginpassword} />
                            </div>
                            <input type="submit" value="Log In" />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                {/* Register form starts */}
                <form onSubmit={handleSignupSubmit}>
                    <div className={styles.singupbg}>
                        <p>Sing up Here</p>
                        <div className={styles.divider}>
                            INTRODUCE YOURSELF
                            <div>
                                <label>Hi there! My name is</label>
                                <input className={styles.inputs} type='text' ref={signupname} />
                            </div>
                            <div>
                                <label>Here's my email Address:</label>
                                <input className={styles.inputs} type='text' ref={signupemail} />
                            </div>
                            <div>
                                <label>And here's my password:</label>
                                <input className={styles.inputs} type='text' ref={signuppassword} />
                            </div>
                            <input type="submit" value="Sign me up!" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;