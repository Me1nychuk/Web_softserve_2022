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
        <tr class="table-dark align-middle " id="${order.id+search}">
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
/*
const searchBox = document.getElementById("search");


let onin = searchBox.oninput = () => {
    if (searchBox.value != "")
    {
        for (let index = 0; index < orders.length; index++) {
            if (orders.name!=searchBox.value)
            {
                let ch = order.id+search;
                const check = document.getElementById(ch);
                check.style.visibility = "hidden";    
            }
            
        }
             
    }

}*/


let onin = searchBox.oninput = () => {
    if (searchBox.value != "")
    {
        counter = 0;
        for (let index = 4; index < tableBody.children.length; index++) {
            if (!(tableBody.children[index].innerText.toLowerCase().startsWith(searchBox.value.toLowerCase())) && counter == 0)
            {
                tableBody.children[index].style.visibility = "hidden";
            } else if (counter != 0){
                counter--;
            } else
            {
                counter = 3;
            }
        }
    }
    else {
        for (let index = 4; index < tableBody.children.length; index++) {
            tableBody.children[index].style.visibility = "visible";
        }
    }
}