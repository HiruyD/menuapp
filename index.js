// Imports and Initial Setup
import { menuArray } from "./data.js";
const menu = document.querySelector(".orderMenu");
const selectedItems = [];
let totalPriceEl = document.getElementById("totalPrice");

// Event Listeners
document.getElementById("compOrder").addEventListener("click", function () {
  alert("still in progress");
});

document.addEventListener("click", function (e) {
  if (e.target.dataset.additem) {
    addFood(e.target.dataset.additem);
    if (selectedItems.length > 0) {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  }
  if (!e.target.id === `${menuArray.id}`) {
    remover();
  }
  if (e.target.classList.contains("remover")) {
    const itemId = e.target.dataset.remove;
    removeItem(itemId);
  }
});

// Menu Rendering Functions
function getList() {
  let feedHtmlOne = "";
  menuArray
    .map(function (element) {
      feedHtmlOne += `
                <div class="foodTab">
                    <div class="food">
                        <span class="emoji">${element.emoji}</span>  
                        <div class="foodDescription">
                            <h3>${element.name}</h3>                
                            <p>${element.ingredients}</p>            
                            <h4>$${element.price}</h4>              
                        </div>
                        <button class="addItem" data-additem="${element.id}">+</button> 
                </div>`;
    })
    .join("");
  return feedHtmlOne;
}

function renderOne() {
  const menuList = document.getElementById("menu");
  menuList.innerHTML = getList();
}

// Order Management Functions
function addFood(food) {
  const targetItem = menuArray.filter(function (me) {
    return me.id == food;
  })[0];
  if (!selectedItems.includes(targetItem)) {
    selectedItems.push(targetItem);
  }
  targetItem.count++;
  calculateTotalPrice();
  renderTwo();
}

function removeItem(itemId) {
  const itemIndex = selectedItems.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    const item = selectedItems[itemIndex];
    item.count--;
    if (item.count === 0) {
      selectedItems.splice(itemIndex, 1);
    }
    calculateTotalPrice();
    renderTwo();
    if (selectedItems.length === 0) {
      menu.style.display = "none";
    }
  }
}

function remover() {
  menu.style.display = "none";
  if (selectedItems.length > 0) {
    selectedItems.count--;
  }
}

// Order Display Functions
function addItemtoOrder() {
  let feedHtmltwo = "";
  selectedItems
    .map(function (itemEl) {
      feedHtmltwo += `
            <div class="orderFoodtab">
                    <div class="orderFood">
                            <div class="orderName">
                                  <h3>${itemEl.name}</h3> 
                            </div>
                               <span class="counter">x ${itemEl.count}</span>
                               <button 
                                  class="remover" 
                                  data-remove="${itemEl.id}">
                                  remove
                               </button>
                            <div>                      
                                  <h4 class="amount">$${
                                    itemEl.price * itemEl.count
                                  }</h4>              
                            </div>
                      </div>
                    </div>`;
    })
    .join("");
  return feedHtmltwo;
}

function renderTwo() {
  const orderList = document.getElementById("order");
  orderList.innerHTML = addItemtoOrder();
}

// Price Calculation
function calculateTotalPrice() {
  let totalPrice = 0;
  selectedItems.forEach(function (item) {
    totalPrice += item.price * item.count;
  });
  totalPriceEl.innerText = `$${totalPrice.toFixed(2)}`;
}

// Initialize
renderOne();
