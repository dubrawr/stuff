$( document ).ready(function() {
    console.log( "ready!" );

$('form').on('submit', function(event){
	event.preventDefault();
	var newitem = $('[name="stuff"]').val();
	console.log(newitem);
	$('ul').append('<li><div class="list-item"><img class="x" src="images/x.png"><span>' + newitem + '</span><img class="cbutton" src="images/check.png"></div></li>');
	$('[name="stuff"]').val('');
});

//delete list items
	$('ul').on('click', '.x', function(event){event.preventDefault(); $(this).parent().parent().remove()});


});
