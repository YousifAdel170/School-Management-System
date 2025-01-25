<?php 

// Include the configuration file
require '../config.php';

// Include the reusable function file
require '../db_functions.php'; 

$response = getAllData($conn, "students");

// Return The JSON Response
echo json_encode($response);

// Close the database connection
$conn->close();
?>
