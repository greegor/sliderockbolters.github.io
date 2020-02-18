jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function() {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;
    else var str = $(this).serialize();
    var action = $(this).attr('action');
    if( ! action ) {
      action = '../mail/send_contact.php';
    }
    $.ajax({
      type: "POST",
      url: action,
      data: str,
      //success: function(msg) {
        // alert(msg);
        //if (msg == 'OK') {
        //  $("#sendmessage").addClass("show");
        //  $("#errormessage").removeClass("show");
        //  $('.contactForm').find("input, textarea").val("");
        //} else {
        //  $("#sendmessage").removeClass("show");
        //  $("#errormessage").addClass("show");
        //  $('#errormessage').html(msg);
        //}
       //}
	   success: function() {
			// Success message
			$('#success').html("<div class='alert alert-success'>");
			$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
				.append("</button>");
			$('#success > .alert-success')
				.append("<strong>Your message has been sent. </strong>");
			$('#success > .alert-success')
				.append('</div>');

			//clear all fields
			$('#contactForm').trigger("reset");
		},
		error: function() {
			// Fail message
			$('#success').html("<div class='alert alert-danger'>");
			$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
				.append("</button>");
			$('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
			$('#success > .alert-danger').append('</div>');
			//clear all fields
			$('#contactForm').trigger("reset");
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });
    return false;
  });

});
