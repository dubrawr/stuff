$( document ).ready(function() {
    console.log( "ready!" );

$('form').on('submit', function(event){
	event.preventDefault();
	var newitem = $('[name="stuff"]').val();
	console.log(newitem);
});


});
