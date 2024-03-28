This is a simple CRUD application that uses LocalStorage to store data.
To use the application, simply open the index.html file in Chrome. You will see a list of all the items in LocalStorage. You can add, edit, or delete items by clicking on the corresponding buttons.
To add an item, enter the name and value of the item in the input fields and click the "Add" button. The item will be added to LocalStorage and displayed in the list.
To edit an item, click on the "Edit" button next to the item you want to edit. The item's name and value will be displayed in the input fields. Make your changes and click the "Update" button. The item will be updated in LocalStorage and displayed in the list.
To delete an item, click on the "Delete" button next to the item you want to delete. The item will be deleted from LocalStorage and removed from the list.

**How to use LocalStorage in Chrome**

To use LocalStorage in Chrome, you can use the following JavaScript code:

// Get the LocalStorage object
var localStorage = window.localStorage;

// Set a value in LocalStorage
localStorage.setItem('key', 'value');

// Get a value from LocalStorage
var value = localStorage.getItem('key');

// Remove a value from LocalStorage
localStorage.removeItem('key');
