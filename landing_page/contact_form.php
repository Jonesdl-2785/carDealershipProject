<?php

// Fetches the values
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Validates the email
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

	// Message lines should not exceed 70 characters
	$message = wordwrap('Name:' . $name . ' Email:' . $email . '
	Message:' . $message, 70);

	// Sends email
	mail("example@gmail.com", "Contact Form", $message);
	echo "<div class='contact_message'>Your message was successfully sent!</div>";

} else {
	echo "<div class='invalid_email'>The provided e-mail is invalid.</div>";
}

?>