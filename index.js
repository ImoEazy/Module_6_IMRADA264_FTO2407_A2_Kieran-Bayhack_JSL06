// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {// menu is object. Each property is a category of menu items e.g 'starters, MainCoursees, desserts. each prop is array of menu item names
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// created sample prices for menu item
const prices = {
    "Garlic Bread": 10.50,// created price object to link each menu item to its price
    "Bruschetta": 17.00,
    "Margherita Pizza": 75.00,
    "Spaghetti Carbonara": 35.00,
    "Tiramisu": 20.00,
    "Cheesecake": 20.00,
};

// Function to display menu items by category 
// This function will dynamically generate and display the menu items on the page, 
// allowing users to click on items to add them to their order.//

function displayMenuItems(menu) {   //Creates categories and lists menu items under each category
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const category in menu) {//loops through each category 'starters,maincourse etc
        // Create an element to represent the category
        const categoryElement = document.createElement('h3');//Creates an <h3> element for name category
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        // Create a list element to represent a list of items
        const itemsList = document.createElement('ul');// unordered list <ul> created for each category, adds to menu container

        // Append the list of items element to the menu container
        menuContainer.appendChild(itemsList);//aads to menu container

        // Loop through the items in the category and create list items
        menu[category].forEach(item => { //loops through items category
            // Create a list item element
            const itemElement = document.createElement('li');//creates list item <li> for each menu item.
            itemElement.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            itemElement.addEventListener('click', () => addToOrder(item));//makes each item clickable, calls 'addToOrder' when clicked

            // Append the list item to the list of items
            itemsList.appendChild(itemElement);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) { //function is called when menu item is clicked.Adds selected items to the order list, updates the total price based on prices above
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderItemElement = document.createElement('li');// create new list item <li> for selected items then adds to order item list
    orderItemElement.textContent = itemName;

    // Append the list item to the order items list
    orderItemsList.appendChild(orderItemElement);

    // Calculate and update the total price
    const itemPrice = prices [itemName];// specifies parameter regarding itemprice and number
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
