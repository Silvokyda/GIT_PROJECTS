<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  
  // Retrieve the form data
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  
  // Hash the password for security
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);
  
  // Connect to the database
  $db_host = 'localhost';
  $db_user = 'root';
  $db_pass = '';
  $db_name = 'booking_system';
  $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
  
  // Check if the connection was successful
  if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
  }
  
  // Insert the new user data into the database
  $sql = "INSERT INTO customers_tbl (cust_name, email, saved_pass) VALUES ('$username', '$email', '$hashed_password')";
  if (mysqli_query($conn, $sql)) {
    echo "New user created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  
  // Close the database connection
  mysqli_close($conn);
}
?>
