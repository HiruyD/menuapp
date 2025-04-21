// Imports and Initial Setup
import { menuArray } from "./data.js";
const menu = document.querySelector(".orderMenu");
const selectedItems = [];
let totalPriceEl = document.getElementById("totalPrice");

// Event Listeners
document.getElementById("compOrder").addEventListener("click", function () {
  alert("Your order has been completed!");
  selectedItems.length = 0; // Clear the selected items array
  totalPriceEl.innerText = "$0.00"; // Reset the total price display
  menu.style.display = "none"; // Hide the order menu
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
  // Update this condition
  if (e.target.classList.contains("remover")) {
    const itemId = e.target.dataset.remove; // Get the ID from data-remove attribute
    console.log("Removing item with ID:", itemId); // Debug log to track ID
    removeItem(itemId); // Call remove function with the item's ID
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
  const targetItem = menuArray.filter(function (menuItem) {
    return menuItem.id == food;
  })[0];
  if (!selectedItems.includes(targetItem)) {
    selectedItems.push(targetItem);
  }
  targetItem.count++;
  calculateTotalPrice();
  renderTwo();
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
                        data-remove="${itemEl.id}"
                        type="button">
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

function removeItem(itemId) {
  // Log current state of selected items for debugging
  console.log("Selected Items before removal:", selectedItems);

  // Find the index of the item in selectedItems array
  // Using == instead of === because itemId might be string while item.id might be number
  const index = selectedItems.findIndex((item) => item.id == itemId);

  // Log the found index for debugging
  console.log("Found index:", index);

  // Only proceed if item was found (-1 means not found)
  if (index !== -1) {
    // Decrease the item's count by 1
    selectedItems[index].count--;

    // Log the new count for debugging
    console.log("New count:", selectedItems[index].count);

    // If count reaches 0, remove item completely from array
    if (selectedItems[index].count === 0) {
      selectedItems.splice(index, 1);
    }

    // Update the total price display
    calculateTotalPrice();

    // Re-render the order display
    renderTwo();

    // If no items left, hide the order menu
    if (selectedItems.length === 0) {
      menu.style.display = "none";
    }
  }
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
