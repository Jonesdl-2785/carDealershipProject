<?php

/**
*
*
* MailChimp API documentation:
* http://apidocs.mailchimp.com/api/
*
*
*/
 
// Owner Information
$api_key = '96ddff4f3d7c070ba2e0687f2247f5a2';
$datacenter = 'us4';
$list_id = 'cb01456127';
$username = 'userexample';

// Subscriber Information
$email = $_POST['email'];
$status = 'pending';

// Status of the subscription is pending unless specified otherwise
if(!empty($_POST['status'])){
    $status = $_POST['status'];
}

// Connection Data
$url = 'https://'. $datacenter .'.api.mailchimp.com/3.0/lists/'. $list_id .'/members/';
$data = array("email_address" => $email,"status" => $status);
$data_string = json_encode($data);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$username:$api_key");
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);

$result=curl_exec ($ch);
curl_close ($ch);

echo $result;
?>