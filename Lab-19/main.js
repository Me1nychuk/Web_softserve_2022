const nameInp = document.getElementById('name-input');
const counta = document.getElementById('price-input');
const email = document.getElementById('email-input');
const submitBtn = document.getElementById('order-submit');

let orders = [];

submitBtn.onclick = () => {

    let newOrder = {
        id: orders.length + 1,
        name: nameInp.value,
        count: counta.value,
        emaill: email.value
    }
    console.log(newOrder);

    orders.push(newOrder);
    addOrder(newOrder);
};


const tableBody = document.getElementById('table-body');

function addOrder(order) {
    tableBody.innerHTML = tableBody + `
        <tr class="table-dark align-middle">
            <th scope="row">${order.id}</th>
            <td>${order.name}</td>
            <td>${order.counta}</td>
            <td>${order.emaill}</td>
            <td>
                <button type="button" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>`  ;
}

const clearbut = document.getElementById('clear-but');

clearbut.onclick = () =>
{
    tabl.innerHTML = "";
};