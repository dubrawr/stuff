$(document).ready(function() {
  console.log("ready!");

  //to enter an item into the list
  $('form').on('submit', function(event) {
    event.preventDefault();
    var newitem = $('[name="stuff"]').val();
    console.log(newitem);
    $('ul').append('<li><div class="list-item"><img class="x" src="images/x.png"><span>' + newitem + '</span><img class="cbutton" src="images/check.png"></div></li>');
    $('[name="stuff"]').val('');
  });

  //delete list items
  $('ul').on('click', '.x', function(event) {
    event.preventDefault();
    $(this).parent().parent().remove()
  });

  //Checkmark button
  
    $('ul').on('click', '.cbutton', function(event) {
      event.preventDefault();
      $(this).closest('li').remove();
        var clickeditem = $(this).closest('li').text();
    $('ul').append('<li><div class="checked-item"><img class="x" src="images/x.png"><span>' + clickeditem + '</span><img class="abutton" src="images/add.png"></div></li>');

  });

  //Add back button
 
    $('ul').on('click', '.abutton', function(event) {
      event.preventDefault();
      $(this).closest('li').remove()
       var additem = $(this).closest('li').text();
    $('ul').append('<li><div class="list-item"><img class="x" src="images/x.png"><span>' + additem + '</span><img class="cbutton" src="images/check.png"></div></li>');

  });

  // going to try sortable now BUT ITS NOT WORKING
	$( '#sortable' ).sortable();
	$( '#sortable' ).disableSelection();

});

