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


//duplicate this for the add button v, make the strikeout thicker. and then i think i am done unless
//i feel like trying to make it draggable...Lol hurr hurr...
$('ul').on('click', '.cbutton', function(){
	var clickeditem = $(this).closest('li').text();
	$('ul').on('click', '.cbutton', function(event){event.preventDefault(); $(this).parent().parent().remove()});
$('ul').append('<li><div class="checked-item"><img class="x" src="images/x.png"><span>' + clickeditem + '</span><img class="abutton" src="images/add.png"></div></li>');

});
});


//try replaceWith, if not, simplify that .onClick, div background color turns gray, and checkmark turns green, could probably do with a parent thing
//OMG IT'S WORKING NOW YAY HAHDSFLKSJAFKHSALKFA