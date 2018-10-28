'use strict';
let STORE = [];

// check out todos by clickie
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});
// click on x to delete
$("ul").on("click", "span", function(event){					//span is the (trash icon) html child element on the li
	for(let i = 0; i<STORE.length; i++){						//loops thru STORE
		if($(this).parent()[0].textContent === STORE[i].name){	//finds any matches for the text of the line on which the user has clicked trash icon.
			STORE[i].deleteMe = true;							//and flags them to be removed
		}
	}
	removeFromStore();
	event.stopPropagation();
});

// add listener to input[text] class add
$(".add").keypress(function(event){
	if(event.which === 13 ){				//code 13 for enter
		let todoText = $(this).val();
		//append a new li to the ul and then apply todoText to it
		STORE.push({showHtml: `<li><span><i class='fas fa-trash'></i></span>${todoText}</li>`, name: `${todoText}`, deleteMe: false});
		$(this).val(""); // blanks input for next user input
		renderList();
	}
});

$(".del").keypress(function(event){
	if(event.which === 13 ){				//code 13 for enter
		let deleteText = $(this).val();		    //sets a variable to what the user has typed into Remove Todo Input-box
		for(let i = 0; i<STORE.length; i++){
			if(STORE[i].name === deleteText){	//finds all the store items that match
				STORE[i].deleteMe = true;		//flags matches to be removed
			}
		}
		$(this).val(""); // blanks input for next user input
		removeFromStore();
	}
});

//show or hide the add new list input bar
$("#fontTrash").click(function(){
	$("input[type='text']").fadeToggle();
});

function renderList(){
	let showStore = STORE.map(index => index.showHtml);
	$("ul").html(showStore);
}

function removeFromStore(){
	STORE = STORE.filter(element => (element.deleteMe === false));
	renderList();
}

function init(){
	renderList();
}

init();
