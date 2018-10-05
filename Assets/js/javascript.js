// check out todos by clickie
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")});
// click on x to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()})
	event.stopPropagation();
})

// add listener to input[text]
$("input[type='text']").keypress(function(event){
	if(event.which === 13 ){				//code 13 for enter
		var todoText =	$(this).val();
		//append a new li to the ul and then apply todoText to it
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
		 $(this).val(""); // blanks input for next user input
	}
	
})

$("#fontTrash").click(function(){
	$("input[type='text']").fadeToggle();
});


