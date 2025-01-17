<?php
echo "<script>console.log('PHP Output: Hello from PHP!');</script>";
error_reporting(-1);
ini_set('display_errors', 'On');
$errors = [];

if (!empty($_POST)) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
 
  if (empty($name)) {
      $errors[] = 'Name is empty';
  }

  if (empty($email)) {
      $errors[] = 'Email is empty';
  } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = 'Email is invalid';
  }

  if (empty($message)) {
      $errors[] = 'Message is empty';
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $from_and_to = "achoe@umd.edu";
    echo "<script>console.log('PHP Output: Hello from PHP!');</script>";

    // Get all POST information
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $header = "From: $from_and_to\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($from_and_to, "TEST", "ABCDEF", $header)) {
        echo "YA"
    } else {
        echo "NA"
    }
}
?>