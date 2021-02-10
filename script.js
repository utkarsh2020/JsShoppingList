/*Set background*/
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

function setGradient(){
	body.style.background = 
		"linear-gradient(to right, "
		+color1.value
		+", "
		+color2.value
		+")";
}

/* add, done/undone, delete item*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLi = document.querySelectorAll("li");

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
allLi.forEach(addListenerToLi);//add the listener to all default li items 

function addListenerToLi(item){
	item.addEventListener("click", toggleDone);
	item.addEventListener("dblclick",removeItem);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addListenerToLi(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(item){
	 item.target.classList.toggle("done");
}

function removeItem(item){
	ul.removeChild(item.target);
}





