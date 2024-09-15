// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Sample prices for menu items
const prices = {
    "Garlic Bread": 5.00,
    "Bruschetta": 6.00,
    "Margherita Pizza": 12.00,
    "Spaghetti Carbonara": 14.00,
    "Tiramisu": 7.00,
    "Cheesecake": 6.50
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        // Create a list element to represent a list of items
        const itemsList = document.createElement('ul');

        // Append the list of items element to the menu container
        menuContainer.appendChild(itemsList);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const itemElement = document.createElement('li');
            itemElement.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            itemElement.addEventListener('click', () => addToOrder(item));

            // Append the list item to the list of items
            itemsList.appendChild(itemElement);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderItemElement = document.createElement('li');
    orderItemElement.textContent = itemName;

    // Append the list item to the order items list
    orderItemsList.appendChild(orderItemElement);

    // Calculate and update the total price
    const itemPrice = prices [itemName];
    let currentTotal = parseFloat(orderTotalElement.textContent);
    currentTotal += itemPrice;

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = currentTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
