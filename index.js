// Sample menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        // Create a category heading
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        // Create a list for the items
        const itemList = document.createElement('ul');

        menu[category].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;

            // Attach a click event listener to add the item to the order
            listItem.addEventListener('click', function() {
                addToOrder(item);
            });

            itemList.appendChild(listItem);
        });

        menuContainer.appendChild(itemList);
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderListItem = document.createElement('li');
    orderListItem.textContent = itemName;
    orderItemsList.appendChild(orderListItem);

    // Update the total price (assuming each item costs R60)
    const itemPrice = 60;
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + itemPrice;

    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
