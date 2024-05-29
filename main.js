const menu = [
  {
    id: 0,
    item: "우동",
    price: 5000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 1,
    item: "짜장면",
    price: 6000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 2,
    item: "짬뽕",
    price: 7000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 3,
    item: "볶음밥",
    price: 8000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 4,
    item: "탕수육",
    price: 20000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 5,
    item: "동파육",
    price: 30000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 6,
    item: "양장피",
    price: 35000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 7,
    item: "사천탕면",
    price: 6000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 8,
    item: "군만두",
    price: 6000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 9,
    item: "유산슬",
    price: 6000,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 10,
    item: "고량주",
    price: 10000,
    num: 0,
    itemPrice: 0,
  },
];

let menuTable = document.getElementById("menuTable");
let sumPrice = document.getElementById("sum");

function generateTable() {
  menuTable.innerHTML = "";
  menu.forEach(function (item) {
    let tr = `<tr>
    <td>${item.id}</td>
    <td>${item.item}</td>
    <td>${new Intl.NumberFormat().format(item.price)}</td>
    <td>${new Intl.NumberFormat().format(item.num)}</td>
     <td>${new Intl.NumberFormat().format(item.itemPrice)}</td>
   <td> <button type="button" class="btn btn-primary" onclick="select(${
     item.id
   })"> + </button> </td>
   <td> <button type="button" class="btn btn-secondary" onclick="unselect(${
     item.id
   })"> - </button> </td>
    <td> <button type="button" class="btn btn-secondary" onclick="unselect(${
      item.id
    })"> x </button> </td>
    </tr>`;
    menuTable.innerHTML += tr;
  });
}

generateTable();
calcSum();

function select(item) {
  menu[item].num += 1;
  menu[item].itemPrice = menu[item].price * menu[item].num;
  generateTable();
  calcSum();
}

function decrease(item) {
  if (menu[item].num >= 1) menu[item].num -= 1;
  menu[item].itemPrice = menu[item].price * menu[item].num;
  generateTable();
  calcSum();
}

function unselect(item) {
  menu[item].num = 0;
  menu[item].itemPrice = menu[item].price * menu[item].num;
  generateTable();
  calcSum();
}

function calcSum() {
  let sum = 0;
  menu.forEach(function (item) {
    sum += item.price * item.num;
  });
  sumPrice.innerHTML = new Intl.NumberFormat().format(sum);
}
