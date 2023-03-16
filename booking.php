<?php
// Establish database connection
$db_host = 'localhost';
$db_user = 'your_db_username';
$db_pass = 'your_db_password';
$db_name = 'your_db_name';
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if (!$conn) {
  die('Failed to connect to the database: ' . mysqli_connect_error());
}

// Handle form submission
if (isset($_POST['submit'])) {
  $customer_id = $_POST['customer_id'];
  $bus_id = $_POST['bus_id'];
  $seats_booked = $_POST['seats_booked'];

  // Insert booking record into database
  $sql = "INSERT INTO bookings_tbl (customer_id, bus_id, seats_booked) VALUES ('$customer_id', '$bus_id', '$seats_booked')";
  if (mysqli_query($conn, $sql)) {
    echo "Booking successful!";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
}

// Close database connection
mysqli_close($conn);
?>
