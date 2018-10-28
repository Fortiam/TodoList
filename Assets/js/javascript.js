'use strict';
// check out todos by clickie
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});
// click on x to delete
$("ul").on("click", "span", function(event){
	for(let i = 0; i<STORE.length; i++){
		if($(this).parent()[0].textContent === STORE[i].name){
			STORE[i].deleteMe = true;
		}
	}
	removeFromStore();
	event.stopPropagation();
	renderList();
});

// add listener to input[text]
$("input[type='text']").keypress(function(event){
	if(event.which === 13 ){				//code 13 for enter
		var todoText =	$(this).val();
		//append a new li to the ul and then apply todoText to it
		STORE.push({showHtml: `<li><span><i class='fas fa-trash'></i></span>${todoText}</li>`, name: `${todoText}`, deleteMe: false});
		$(this).val(""); // blanks input for next user input
		renderList();
	}
});

//show or hide the add new list input bar
$("#fontTrash").click(function(){
	$("input[type='text']").fadeToggle();
});

let STORE = [];

function renderList(){
	let showStore = STORE.map(index => index.showHtml);
	$("ul").html(showStore);
}

function removeFromStore(){
	STORE = STORE.filter(element => (element.deleteMe === false));
}

function init(){
	renderList();
};

init();
