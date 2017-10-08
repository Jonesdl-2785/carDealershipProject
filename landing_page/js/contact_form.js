$(document).ready(function() {

	$("#submit").click(function() {

		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		
		// Cleans previous message
		$("#returnmessage").empty();
	
		// Checks for blank fields
		if (name == '' || email == '') {
			alert("Please fill the required fields.");
		} else {

			$.post("./contact_form.php", {
				name1: name,
				email1: email,
				message1: message
			}, function(data) {

				// Displays returned message
				$("#returnmessage").append(data);
				
				// Resets the fiels if it was successfuly sent
				if (data == "<div class='contact_message'>Your message was successfully sent!</div>") {
					$("#contact_form")[0].reset();
				}

			});
		
		}
	});

});