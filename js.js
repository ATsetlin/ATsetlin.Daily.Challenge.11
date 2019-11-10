let heading = document.createElement("h1");
	heading.innerText = "shopping list";

let body = document.querySelector("body");
	body.appendChild(heading);

let userInput = document.createElement("input");
	body.appendChild(userInput);

let list = document.createElement("ul");
	body.appendChild(list);

let add = document.createElement("button");
	body.appendChild(button);
	button.innerText = "Add Item";

let clear = document.createElement("button");
	body.appendChild(button);
	button.innerText = "Clear List";

add.addEventListener("click", addListItems);
clear.addEventListener("click", clearList);


function addListItems() {
	let element = document.createElement("li");
	list.appendChild(element);
	element.innerText = userInput.value;
	clearInputField();
}

function clearInputField() {
	userInput.value = "";
}

function clearList() {
	var itemsInList = document.getElementsByTagName("li")
	var length = itemsInList.length;

		for (let i = 1; i < length; i++ ) {
			itemsInList[0].remove();
		}
}