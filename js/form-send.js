/* form send */
function doSend() {
	/*valid = true;
	msg = '';
	if ($("#name").val() == "") { 
		msg += "Your name is required...<br/>";
		valid = false;
	}
	if ($("#email").val() == "") { 
		msg += "Your email address is required...";
		valid = false;
	} else {
		filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test( $("#email").val() )) {
			msg += "A valid email address is required...";
			valid = false;
		}
	}
	// ajax send if valid entries
	if (!valid) {
		
		$('#status').html(msg);
		$('.cd-popup').addClass('is-visible');
		
	} else {
	*/	
		$.get("../inc/send_contact.php",
			/*{ "name":    $("#name", "#form1").val(),
				"email":   $("#email", "#form1").val(),
				"message": $("#message", "#form1").val()
			},*/
			{ "name":    $("#name").val(),
				"email":   $("#email").val(),
				"message": $("#message").val()
			},
			function(data,status,xhr) {
				//$('#status').text(data);
				//$('.cd-popup').addClass('is-visible');
				$("#name").val('');
				$("#email").val(''); 
				$("#message").val('');
				alert('here');
			}
		);
		
	/*}*/
}

/*$( document ).ready(function() {
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('.cd-popup').removeClass('is-visible');
		}
	});
});*/
