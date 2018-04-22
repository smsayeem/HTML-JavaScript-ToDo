
//check off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//insert new todo
$("input[type='text']").on("keypress", function(event){

	if(event.which===13){
		//grab new todo text from input
		var todoText = ($(this).val());		//getter
		$(this).val("");		//setter set empty string in the input text field
		//create a new LI and add to UL
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})
//work on pencil icon

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});