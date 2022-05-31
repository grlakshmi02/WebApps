import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { IoIosContact, IoMdListBox } from 'react-icons/io';
import styled from 'styled-components';
import img from '../../common/linechart.jpeg';
import myBalance, { handleAdd, transactList } from '../homeComponent/Calculator';
import styles from '../Menu.module.css';
import NavBar from "../NavBar";

const Customwrap = styled.div`
    background-color: rgb(211, 206, 206);
    border-radius: 25px;
    padding: 0.6rem;
    margin: 0.4rem;
    p {
        font-size: 0.8rem;
        margin-bottom: 0;
    }
    span {
        font-size: 2rem;
        font-weight: 600;
    }
`;

const ListTable = styled.div`
    background-color: rgb(211, 206, 206);
    border-radius: 25px;
    padding: 0.6rem;
    margin: 0.4rem;
    height: fit-content;
    p {
        font-size: 1rem;
        font-weight: 600;
    }
    table {
        background-color: #efecec; 
        border-radius: 5px;
    }
    span {
        display: block;
        font-size: x-small;
        margin-left: 2rem;
    }
`;

function Home() {
    /* This list is having all the contacts teh user has.
    Ideally this must be from API*/
    const contacts = [{
        "id": 1,
        "name": "Dinesh"
    },
    {
        "id": 2,
        "name": "Kalyan"
    },
    {
        "id": 3,
        "name": "Ram"
    },
    {
        "id": 4,
        "name": "Kiran"
    },
    {
        "id": 5,
        "name": "Sathwik"
    },
    {
        "id": 6,
        "name": "Charan"
    }];

    /* This list contains users activities.
    Ideally this must be from API*/
    const activities = [{
        "id": 1,
        "name": "You created a group"
    }, {
        "id": 2,
        "name": "You added Demo"
    }, {
        "id": 3,
        "name": "You added shopping"
    }]

    const [currentData] = useState(myBalance());
    const [oweList] = useState(currentData.list.oweList);
    const [owedList] = useState(currentData.list.owedList);
    const [showAdd, setShowAdd] = useState(false);
    const handleClose = () => setShowAdd(false);
    const handleShow = () => setShowAdd(true);
    const [showSettle, setShowSettle] = useState(false);
    const handleCloseSettle = () => setShowSettle(false);
    const handleShowSettle = () => setShowSettle(true);
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [settleText, setSettleText] = useState('');
    const [settleUser, setSettleUser] = useState('');
    const [settleId, setSettleId] = useState('');
    let addAmount = useRef('0');
    let addReason = useRef('');

    /* To update the user on adding a new transaction */
    const userChange = (user) => {
        setSelectedUser(user.name)
        setSelectedId(user.id)
    }
    /* To update transaction type: 'borrow/lend' */
    const typeUpdate = (type) => {
        setSelectedType(type)
    }

    /* To display the data on Modal popup window depending on user operation  */
    const userSettle = (user) => {
        setSettleUser(user.name);
        setSettleId(user.id);
        let settleAmount = Math.abs(user.borrow - user.lend);
        if (user.borrow > user.lend) {
            setSettleText(`You owe ${settleAmount} to ${user.name}`)
        } else {
            setSettleText(`${user.name} owe ${settleAmount} to You`)
        }
    }

    /* called on settling the dues */
    const settleupSave = () => {
        var index = transactList.map(x => {
            return x.id;
        }).indexOf(settleId);
        transactList.splice(index, 1);
        // The updated array/object must be sent to backend for storing of data
        console.log(transactList);
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.nav}>
                    <NavBar />
                </div>
                <div className={styles.maincont}>
                    <Container style={{ textAlign: 'center' }}>
                        <Row style={{ paddingTop: '2rem' }}>
                            <Col>
                                <Row>
                                    <Col><Button variant="success" style={{ width: '160px', height: ' 80px', borderRadius: '15px' }} onClick={handleShow}>
                                        ADD EXPENSE
                                    </Button></Col>
                                    <Col><Button variant="danger" style={{ width: '160px', height: ' 80px', borderRadius: '15px' }} onClick={handleShowSettle}>
                                        SETTLE UP
                                    </Button></Col>
                                </Row>
                                <Row style={{ justifyContent: 'center' }}>
                                    <Customwrap >
                                        <Col><p>Total Balance</p>
                                            <span style={{ color: currentData.color }}>{currentData.rem}</span></Col>
                                    </Customwrap>
                                    <Customwrap >
                                        <Col><p>You Owe</p>
                                            <span style={{ color: 'red' }}>{currentData.borrow}</span></Col>
                                    </Customwrap>
                                    <Customwrap >
                                        <Col> <p>You are owed</p>
                                            <span style={{ color: 'green' }}>{currentData.lend}</span></Col>
                                    </Customwrap>
                                </Row>
                            </Col>
                            <Col>
                                <img src={img} alt="Graph" width="250" height="150" />
                            </Col>
                        </Row>
                        <br /><br />
                        <Row>
                            <Col>
                                <ListTable>
                                    <p>You Owe</p>
                                    <Table>
                                        <tbody>
                                            {oweList && oweList.map(user =>
                                                <tr key={user.name}>

                                                    <td><IoIosContact size={'1.5em'} />  {user.name}
                                                        <span style={{ color: 'red' }}>You Owe {user.owe}</span></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </ListTable>
                            </Col>
                            <Col>
                                <ListTable>
                                    <p>You are Owed</p>
                                    <Table>
                                        <tbody>
                                            {owedList && owedList.map(user =>
                                                <tr key={user.id}>
                                                    <td><IoIosContact size={'1.5em'} />  {user.name}
                                                        <span style={{ color: 'green' }}>Owes you {user.owed}</span></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </ListTable>
                            </Col>
                            <Col>
                                <ListTable>
                                    <p>Recent Activity</p>
                                    <Table>
                                        <tbody>
                                            {activities && activities.map(act =>
                                                <tr key={act.id}>
                                                    <td style={{ textAlign: 'left' }}><IoMdListBox size={'1.5em'} />{act.name}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </ListTable>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <>
                <Modal show={showAdd} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>You are adding the expenses</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Transaction with: <span>{selectedUser}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {contacts && contacts.map((user) => {
                                    return <Dropdown.Item key={user.id} value={user.name} onClick={() => userChange(user)}>{user.name}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                        <br />
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Transaction Type: <span>{selectedType}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu required>
                                <Dropdown.Item key={'b'} value={'Borrow'} onClick={() => typeUpdate('borrow')}>{'Borrow'}</Dropdown.Item>
                                <Dropdown.Item key={'l'} value={'Lend'} onClick={() => typeUpdate('lend')}>{'Lend'}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <br />
                        <label>Enter Amount: </label>
                        <input type='number' ref={addAmount} required /><br />
                        <label>Description: </label>
                        <input type='text' ref={addReason} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Discard
                        </Button>
                        <Button variant="primary" onClick={() => { handleAdd(selectedId, selectedUser, selectedType, addAmount.current, addReason.current) }}>
                            <span onClick={handleClose}>Save Changes</span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            <>
                <Modal show={showSettle} onHide={handleCloseSettle}>
                    <Modal.Header >
                        <Modal.Title>You are adding the expenses</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Transaction with: <span>{settleUser}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {transactList && transactList.map((user) => {
                                    return <Dropdown.Item key={user.id} value={user.name}
                                        onClick={() => userSettle(user)}>{user.name}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                        <p>{settleText}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSettle}>
                            Discard
                        </Button>
                        <Button variant="primary" onClick={() => { handleAdd(selectedId, selectedUser, selectedType, addAmount.current, addReason.current) }}>
                            <span onClick={settleupSave}>Settle up</span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    )
}

export default Home;