import React, { useRef, useState } from "react";
import NavBar from "../NavBar";
import styles from '../Menu.module.css'
import styled from 'styled-components';
import myBalance from './Calculator'
import LineChart from '../../common/LineChartComponent'
import img from '../../common/linechart.jpeg'
import Select from 'react-select';
import contacts from '../../common/UsersList.json'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown'



const Pagebundle = styled.div`
flex: 0 0 100%;
display: flex;
flex-direction: column;
    flex-wrap: wrap; 
    grid-gap: 20px;
    padding: 10px;
`;

const Duescheck = styled.div`
width: 100%
display: flex;
flex-direction: column;
background-color:bisque;
`;

const Dispgraph = styled.div`

background-color:burlywood;
`;

const Duedetails = styled.div`

background-color:#ecc0c0;
`;

const RecentActivity = styled.div`

background-color:#e1c0e1;
`;


function Home() {

    const [currentData] = useState(myBalance());
    const [oweList] = useState(currentData.list.oweList);
    const [owedList] = useState(currentData.list.owedList);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [selectedType, setSelectedType] = useState('');

    let addAmount = useRef('0');
    let addReason = useRef('');

    const userNames = contacts['contactList'].map(a => a.name);
    console.log(userNames);

    const userChange = (user) => {
        setSelectedUser(user.name)
        setSelectedId(user.id)
    }
    const typeUpdate = (type) => {
        setSelectedType(type)
    }


    const handleAdd = () => {



    }

    return (
        <>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>You are adding the expenses</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Transaction with: <span>{selectedUser}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {contacts['contactList'] && contacts['contactList'].map((user) => {
                                    return <Dropdown.Item key={user.id} value={user.name} onClick={() => userChange(user)}>{user.name}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                        <br />
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Transaction Type: <span>{selectedType}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item key={'b'} value={'Borrow'} onClick={() => typeUpdate('Borrow')}>{'Borrow'}</Dropdown.Item>
                                <Dropdown.Item key={'l'} value={'Lend'} onClick={() => typeUpdate('Lend')}>{'Lend'}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <br />
                        <label>Enter Amount: </label>
                        <input type='number' ref={addAmount} /><br />
                        <label>Enter Reason: </label>
                        <input type='text' ref={addReason} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Discard
                        </Button>
                        <Button variant="primary" onClick={handleAdd}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            <div className={styles.wrapper}>
                <div className={styles.nav}>
                    <NavBar />
                </div>
                <div className={styles.maincont}>
                    <Pagebundle>
                        <Duescheck>
                            <div>
                                <Button variant="primary" onClick={handleShow}>
                                    ADD EXPENSE
                                </Button>
                                <button>SETTLE UP</button>
                            </div>
                            <div>
                                <div>
                                    <p>Total Balance</p>
                                    <span>{currentData.borrow}</span>
                                </div>
                                <div>
                                    <p>You Owe</p>
                                    <span>{currentData.owe}</span>
                                </div>
                                <div>
                                    <p>You are owed</p>
                                    <span>{currentData.rem}</span>
                                </div>
                            </div>
                        </Duescheck>

                        <Dispgraph>
                            <img src={img} width={250} height={250} />
                        </Dispgraph>


                        <Duedetails><p>You Owe</p></Duedetails>
                        <table>
                            <tbody>
                                {oweList && oweList.map(user =>
                                    <tr key={user.name}>
                                        <td>{user.name}
                                            <span>{user.owe}</span></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <RecentActivity>
                            <p>You are Owed</p>
                            <table>
                                <tbody>
                                    {owedList && owedList.map(user =>
                                        <tr key={user.name}>
                                            <td>{user.name}
                                                <span>{user.owed}</span></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </RecentActivity>

                    </Pagebundle>

                </div>
            </div>
        </>
    )
}

export default Home;