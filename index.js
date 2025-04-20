import { menuArray } from "./data.js";
const selectedItems = [];

document.addEventListener("click", function (e) {
  if (e.target.dataset.additem) {
    addFood(e.target.dataset.additem);
    const menu = document.querySelector(".orderMenu");

    if (selectedItems.length > 0) {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  }
});

function addFood(food) {
  const targetItem = menuArray.filter(function (me) {
    return me.id == food;
  })[0];
  if (selectedItems.includes(targetItem)) {
    alert("Item already added to order!");
    return;
  }
  selectedItems.push(targetItem);
  renderTwo();
}

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

function renderTwo() {
  const orderList = document.getElementById("order");
  orderList.innerHTML = addItemtoOrder();
}

function addItemtoOrder() {
  let feedHtmltwo = "";
  selectedItems
    .map(function (itemEl) {
      feedHtmltwo += `
            <div class ="orderFoodtab">
                <div class="orderFood">
                        <h3>${itemEl.name}</h3>                        
                        <h4>$${itemEl.price}</h4>              
                    </div>
                </div>`;
    })
    .join("");
  return feedHtmltwo;
}

renderOne();
