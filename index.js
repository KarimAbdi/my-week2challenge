const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = querySelector('button');

button.onClick = function() {
    let newItem = input.value;
    input.value = '';

    let itemList = document.createElement('li');
    let itemText = document.createElement('span');
    let itemBtn = document.createElement('button')

    itemList.appendChild(itemText);
    itemText.textContent = newItem;

    itemList.appendChild(itemBtn);
    itemBtn.textContent = 'Delete';
    
    list.appendChild(itemList);

    itemBtn.onclick = function () {
        list.removeChild(itemList);
    }

    input.focus();

}