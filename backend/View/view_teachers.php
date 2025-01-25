
<?php 

// Include the configuration file
require '../config.php';

// Include the reusable function file
require '../db_functions.php'; 

$sql = "SELECT ID, name  FROM teachingstaff";

$response = getData($conn, $sql);
// $response = getsAllData($conn, "teachingstaff", ['ID', 'name']);

// Return The JSON Response
echo json_encode($response);

// Close the database connection
$conn->close();

?>
