// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

//create a const with the item prices for the food
const itemPrices = {
    "Garlic Bread": 50,
    "Bruschetta": 60,
    "Margherita Pizza": 120,
    "Spaghetti Carbonara": 130,
    "Tiramisu": 80,
    "Cheesecake": 90
}
//declare a variable to track the total cost of the meal
let totalMeal = 0;

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");
    //clear any content in the menu container
    menuContainer.innerHTML = "";
    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create an element to represent the category
        const categoryElement = document.createElement('h3');
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;
        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);
        // Create an element to represent a list of items
        const itemList = document.createElement('ul');
        // Append a list of items element to the menu container
        menuContainer.appendChild(itemList);
        // Loop through the items in the category and create list items
        items.forEach(item => {
            // Create a list item element
            const itemElement = document.createElement('li');
            // Set the text content of the list item element to the item name
            itemElement.textContent = item;
            // Attach a click event listener to the list item to add it to the order
            itemElement.addEventListener('click', () => addToOrder(item));
            // Append the list item to the list of items
            itemList.appendChild(itemElement);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    //get the price of the items from the const above
    const price = itemPrices[itemName] || 0; //|| logical OR operator that provides a dault value of 0 if falsy value (IE it can't find the price)
    totalMeal += price; //accumulatively adding the price
    // Create a list item for the order
    const orderItemElement = document.createElement('li');
    // Set the text content of the list item to the item name
    orderItemElement.textContent = itemName;
    // Append the list item to the order items list
    orderItemsList.appendChild(orderItemElement);
    // Calculate and update the total price
    orderTotalElement.textContent = totalMeal
    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
