/* this is the transaction lists we have for reference. This array is collect of current dues with users. 
Dues calculations are performed based in this array. 
This data ideally must be from API */
export const transactList = [{
    "id": 1,
    "name": "Dinesh",
    "borrow": 10,
    "lend": 5,
    "month": "Jan",
    "desc": ""
}, {
    "id": 2,
    "name": "Kalyan",
    "borrow": 50,
    "lend": 6,
    "label": "Jan",
    "desc": ""
}, {
    "id": 3,
    "name": "Ram",
    "borrow": 10,
    "lend": 30,
    "label": "Jan",
    "desc": ""
}, {
    "id": 4,
    "name": "Kiran",
    "borrow": 10,
    "lend": 20,
    "label": "Jan",
    "desc": ""
}];

/* Function to get the owe and owed list. which are displayed on the 'home' page */
const oweListCal = () => {
    let oweList = [];
    let owedList = [];
    let detail = {
        name: '',
        due: 0
    };
    transactList.forEach(user => {
        detail = {
            name: '',
        }
        if (user.borrow > user.lend) {
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

/* Calculations on owed and owes blanace in total
return type is object */
function myBalance() {
    let list = oweListCal();
    let borrowTotal = list.oweList.reduce((sum, p) => sum + p.owe, 0);
    let owedTotal = list.owedList.reduce((sum, p) => sum + p.owed, 0);
    let rem = Math.abs(borrowTotal - owedTotal)
    let color = borrowTotal > owedTotal ? 'red' : 'green';

    let totalBal = {
        borrow: borrowTotal,
        lend: owedTotal,
        rem: rem,
        list: list,
        color: color
    };
    return totalBal;
}
export default myBalance;

/* This function is called on adition of any transactions 
Ideal case: Once the object is created, sent to backend by calling API*/
export const handleAdd = (userId, userName, type, amount, reason) => {
    let index = null;
    for (var i = 0; i < Object.keys(transactList).length; i++) {
        if (transactList[i].id === userId) {
            index = i;
            break;
        }
    }
    /*  If the user already exists in the 'transaction list', append the balance calculated
        else, The new user from 'contact list' is added to the 'transaction list' */
    if (null != index) {
        let updateBal = null;
        if (type === 'borrow') {
            updateBal = transactList[index].borrow + parseInt(amount.value);
            transactList[index].borrow = updateBal;
        } else {
            updateBal = transactList[index].lend + parseInt(amount.value);
            transactList[index].lend = updateBal;
        }
    } else {
        let addNew = {
            id: userId,
            name: userName,
            desc: reason
        }
        if (type === 'borrow') {
            addNew.borrow = parseInt(amount.value);
        } else {
            addNew.lend = parseInt(amount.value);
        }
        transactList.push(addNew);
    }
    /* Iddeally, this new array/object must be send to backend by calling API */
    console.log(transactList);
    //localStorage.setItem('transact', JSON.stringify(transactList));
}