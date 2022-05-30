
import users from '../../common/UsersList.json'

let contactList = [
        {
            "id": 1,
            "name": "Lakshmi",
            "borrow": 10,
            "lend": 5,
            "month": "Jan"
        },
        {
            "id": 2,
            "name": "Vinod",
            "borrow": 20,
            "lend": 6,
            "label": "Jan"
        },
        {
            "id": 3,
            "name": "Vijay",
            "borrow": 10,
            "lend": 30,
            "label": "Jan"
        },
        {
            "id": 4,
            "name": "Yami",
            "borrow": 10,
            "lend": 20,
            "label": "Jan"
        }
    ]

const oweListCal = () => {

    let oweList = [];
    let owedList = [];
    let detail = {
        name: '',
        due: 0
    };
    contactList.forEach(user => {
        detail = {
            name: '',
        }
        if ( user.borrow > user.lend ) {
            detail.name = user.name;
            detail.owe = user.borrow - user.lend;
            oweList.push(detail);
        } else {
            detail.name = user.name;
            detail.owed = user.lend - user.borrow;
            owedList.push(detail);
        }
    });
     let list = {
        oweList: oweList,
        owedList: owedList
    } 
    return list

}

const myBalance = () => {
    let borrowTotal = contactList.reduce((sum, p) => sum + p.borrow, 0);
    let oweTotal = contactList.reduce((sum, p) => sum + p.lend, 0);
    let rem = Math.abs(borrowTotal - oweTotal);
    let list = oweListCal();

    let totalBal = {
        borrow: borrowTotal,
        owe: oweTotal,
        rem: rem,
        list: list
    };
    return totalBal;
}

export default myBalance;