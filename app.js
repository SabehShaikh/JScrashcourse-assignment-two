// QUESTION 01
// 1. Write a function that creates a closure and returns a function that can add a 
// specific number to any number passed to it. For example, if the closure is 
// created with 5, the returned function should add 5 to any number passed to it.

function add(numberToAdd) {
    return function (number) {
        return number + numberToAdd;
    };
}

let addFive = add(5);
console.log(addFive(5));
console.log(addFive(10));


// QUESTION 02 
// 2. Write a recursive function that searches an array  for a specific value. The function should return 
// true if the value is  found, and false if it is not.You can assume that the array is not nested.

function findArray(arr, value, index = 0) {
    if (index >= arr.length) {
        return false;
    }
    if (arr[index] === value) {
        return true;
    }
    return findArray(arr, value, index + 1);
}
let arr = [1, 3, 5, 7, 9];
console.log(findArray(arr, 3));
console.log(findArray(arr, 6));

// QUESTION 03
// 3. Write a function that adds a new paragraph element to the bottom of an HTML document.
// The function should take a string argument that will be used as the text content of the new paragraph element.

function addText(text) {
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);

}
addText('This is a new added paragraph');

// // Question 04
// // 4. Write a function that adds a new list item to an unordered list in an HTML document.
// // The function should take a string argument that will be used as the text content of the new list item.

function addListItem(text) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

addListItem('New item list is added');


// // Question 05
// // 5. Write a function that changes the background color of an HTML element. The function should take two arguments:
// //  the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.


function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

let myElement = document.getElementById('my-heading');

let myButton = document.getElementById('my-button');
myButton.addEventListener('click', function () {
    changeBackgroundColor(myElement, 'red');
});


// // Question 06
// // 6. Write a function that saves an object to localStorage. The function should take two arguments:
// // the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

function saveToLocalStorage(key, obj) {
    let serializedObj = JSON.stringify(obj);
    localStorage.setItem(key, serializedObj);
}
let myObject = { name: 'Sabeh', age: 19 };
saveToLocalStorage('my-object', myObject);

// // Question 07
// // 7. Write a function that retrieves an object from localStorage. The function should take one argument,
// //  which is a string representing the key used to store the object. The function should return the object.

function getObjectFromLocalStorage(key) {
    let item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}
let myObj = getObjectFromLocalStorage('myKey');
console.log(myObj);


// QUESTION 08
// 8. Write a function that takes an object and saves each property to localStorage using the property name as the key and the
//  property value as the value. The function should also retrieve the object from localStorage and return it as a new object.

function saveObjectToLocalStorage(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            localStorage.setItem(prop, JSON.stringify(obj[prop]));
        }
    }
    let newReturn = {};
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        newReturn[key] = JSON.parse(localStorage.getItem(key));
    }
    return newReturn;
}
let myReturn = { name: 'Ahmad', age: 20, city: 'Karachi' };
let newReturn = saveObjectToLocalStorage(myReturn);
console.log(newReturn); 
