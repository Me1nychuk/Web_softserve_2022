const nameInp = document.getElementById('name-input');
const counta = document.getElementById('price-input');
const email = document.getElementById('email-input');
const submitBtn = document.getElementById('order-submit');

let orders = [];

submitBtn.onclick = () => {

    let newOrder = {
        id: orders.length + 1,
        namee: nameInp.value,
        count: counta.value,
        emaill: email.value
    }
    
    if (nameInp.value !="" &&  counta.value!=0 && email.value!="") {
    console.log(newOrder);
    orders.push(newOrder);
    addOrder(newOrder);
    };
    
};


const tableBody = document.getElementById('table-body');

function addOrder(order) {
    tableBody.innerHTML += `
        <tr class="table-dark align-middle">
            <th scope="row">${order.id}</th>
            <td>${order.namee}</td>
            <td>${order.count}</td>
            <td>${order.emaill}</td>
            <td>
                <button type="button" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>`  ;
};

const clearbut = document.getElementById('clear-but');

clearbut.onclick = () =>
{
    tableBody.innerHTML = "";
};

