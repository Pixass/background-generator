var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");




function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}




ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}










