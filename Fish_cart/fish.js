function getdata() {
  var xmlrequest = new XMLHttpRequest();
  xmlrequest.open("GET", "http://localhost/fish_cart/Fish.json", false);
  xmlrequest.send();
  if (xmlrequest.readyState == 4 && xmlrequest.status == 200) {
    var result = xmlrequest.responseText;
    var o = JSON.parse(result);
    data = "";
    for (i = 0; i < o.length; i++) {
      data +=
        ' <div class="products"><img src="' +
        o[i]["image"] +
        '" alt="hello" class="pimage"/><h3 class="pname">' +
        o[i]["productname"] +
        '</h3><h4 class="pprice">' +
        o[i]["price"] +
        '</h4><button class="added" onclick="addedtocart(event)">Add To Cart</button></div>';
    }
    var a = document.querySelector(".designs");
    var div = document.createElement("div");
    div.classList.add("design");
    div.innerHTML = data;
    a.append(div);
  }
}

document.addEventListener("DOMContentLoaded", load);
function load() {
  getdata();
}
var closes = document.querySelector("#closebtn");

closes.addEventListener("click", closed);

function closed() {
  var pop = document.querySelector(".cartbar");
  pop.style.display = "none";
}

var open = document.querySelector("#cartopn");
open.addEventListener("click", opn);

function opn() {
  var pop = document.querySelector(".cartbar");
  pop.style.display = "block";
}

let itemlist = [];

function addedtocart(event) {
  if (alert("Product added in your cart"));
  var i = event.target.parentElement;
  var pname = i.querySelector(".pname").innerHTML;
  var pprice = i.querySelector(".pprice").innerHTML;
  var pimage = i.querySelector(".pimage").src;
  var appenitem = document.querySelector(".cartitems");
  var div = document.createElement("div");
  let store = { pname, pprice, pimage };
  store = createcart(pname, pprice, pimage);
  div.innerHTML = store;
  appenitem.append(div);
}
function createcart(pname, pprice, pimage) {
  return `  <div class="cartdata">
                          <img src="${pimage}" alt="cart-things"/>
                          <div class="cartdatas">
                          <h2>Product Name : ${pname}</h2>
                          <h3 class="pprices">${pprice}</h3>
                          <input type="number" min="0" value="0" class="inputs" onchange="nums(event)"></input>
                          <h4 class="tprice">The Total Price :<span class="hlo">0</h4>
                          <button class="removebtn" onclick="removecart(event)">Remove To Cart</button>
                          </div>
                       </div> `;
}

function removecart(event) {
  if (confirm("Are You Sure Remove This Product"));
  event.target.parentElement.parentElement.remove();
}

function nums(event) {
  let qty = event.target.parentElement;
  let quantity = qty.querySelector(".inputs").value;
  let price = qty.querySelector(".pprices").innerHTML;
  let prices = parseFloat(price.replace("Rs: ", ""));
  let total = eval(quantity * prices);
  console.log(total);
  let iprice = qty.querySelector(".hlo");
  iprice.innerHTML = total;
}
function placeorder() {
  alert("your order is placed");
}
