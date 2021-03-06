import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css'
import users from '../../common/TransactList.json'
import contact from '../../common/ContactList.json'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function Login() {

    let loginemail = useRef();
    let loginpassword = useRef();
    let signupname = useRef();
    let signupemail = useRef();
    let signuppassword = useRef();
    let navigate = useNavigate();
    const [signupWarning, setsignupWarning] = useState('');

    // Test login user credentials are stored in browser memory for login validation
    let loginUser = {
        userId: 'test@gmail.com',
        password: 'test'
    }
    localStorage.setItem('loginUser', JSON.stringify(loginUser));
    
    // Login validation of user
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (loginUser.userId === loginemail.current.value && loginUser.password ===  loginpassword.current.value) {
            localStorage.setItem('transact', JSON.stringify(users));
            localStorage.setItem('contacts', JSON.stringify(contact));
            navigate('/home');
        } else {
            setsignupWarning(`No user unidentified, please sign up`);
        }
    }

    // Handle sign up and redirect to home page
    const handleSignupSubmit = () => {
        localStorage.setItem('loginUser', JSON.stringify({userId:signupemail.current.value,password:signuppassword.current.value}));
        navigate('/home');
    }

    return (
        <div className={styles.wrapper}>
            <Container>
            <Row  className={styles.heading}> <p style={{fontSize: '500%'}}> Lend &amp; Borrow </p></Row>
                <Row>
                    <Col className={styles.loginbg}>
                        <form onSubmit={handleLoginSubmit}>
                                <div className={styles.outlining}>
                                    <div>
                                        <label>Email Address:</label>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                ref={loginemail}
                                                type="email"
                                                required
                                            />
                                        </InputGroup>
                                        {/*  <input className={styles.inputs} type='text' ref={loginemail} /> */}
                                    </div>
                                    <div>
                                        <label>Password: </label>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Password"
                                                aria-label="Password"
                                                aria-describedby="basic-addon1"
                                                ref={loginpassword}
                                                type="password"
                                                required
                                            />
                                        </InputGroup>
                                        {/* <input className={styles.inputs} type='text' ref={loginpassword} /> */}
                                    </div>
                                    <Button variant="success" type='submit' size="lg" 
                                    style={{ width: '90%', marginLeft: '1rem'}}>Log In</Button>
                                    <p className={styles.warningtext}>{signupWarning}</p>
                            </div>
                        </form>
                    </Col>
                    <Col className={styles.singupbg}>
                        <form onSubmit={handleSignupSubmit}>
                                <div className={styles.outlining}>
                                    INTRODUCE YOURSELF
                                    <div>
                                        <label>Hi there! My name is</label>
                                        {/* <input className={styles.inputs} type='text' ref={signupname} /> */}
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Your Name"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                ref={signupname}
                                                required
                                            />
                                        </InputGroup>
                                    </div>
                                    <div>
                                        <label>Here's my email Address:</label>
                                        {/* <input className={styles.inputs} type='text' ref={signupemail} /> */}
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Email address"
                                                aria-label="Email address"
                                                aria-describedby="basic-addon1"
                                                ref={signupemail}
                                                type="email"
                                                required
                                            />
                                        </InputGroup>
                                    </div>
                                    <div>
                                        <label>And here's my password:</label>
                                        {/* <input className={styles.inputs} type='text' ref={signuppassword} /> */}
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Password"
                                                aria-label="Password"
                                                aria-describedby="basic-addon1"
                                                ref={signuppassword}
                                                type="password"
                                                required
                                            />
                                        </InputGroup>
                                    </div>
                                    <Button variant="danger" type='submit' size="lg" 
                                    style={{ width: '90%', marginLeft: '1rem'}}>Sign me up!</Button>
                            </div>
                        </form>
                    </Col>
                </Row>

            </Container>


        </div>
    );
}

export default Login;