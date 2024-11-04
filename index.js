const list = document.querySelector('ul');
const input = document.querySelector('input');
const addButton = document.querySelector('button.add');
const clearButton = document.querySelector('button.clear');

// Load existing items from local storage
let items = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Function to render the list
function renderList() {
    list.innerHTML = ''; // Clear the existing list
    items.forEach(item => {
        const itemList = document.createElement('li');
        const itemText = document.createElement('span');
        const itemBtn = document.createElement('button');

        itemText.textContent = item.text;
        if (item.purchased) {
            itemList.classList.add('purchased');
        }

        itemList.appendChild(itemText);
        itemBtn.textContent = 'Delete';
        itemList.appendChild(itemBtn);

        // Mark as purchased
        itemList.addEventListener('click', () => {
            item.purchased = !item.purchased;
            renderList();
        });

        // Delete item
        itemBtn.onclick = (event) => {
            event.stopPropagation(); // Prevent triggering the list item click
            items = items.filter(i => i !== item);
            saveItems();
            renderList();
        };

        list.appendChild(itemList);
    });
}

// Save items to local storage
function saveItems() {
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

// Add new item
addButton.onclick = function() {
    const newItemText = input.value.trim();
    if (newItemText) {
        items.push({ text: newItemText, purchased: false });
        saveItems();
        renderList();
        input.value = ''; // Clear the input field
    }
    input.focus();
};

// Clear the entire list
clearButton.onclick = function() {
    items = [];
    saveItems();
    renderList();
};

// Initial render
renderList();
