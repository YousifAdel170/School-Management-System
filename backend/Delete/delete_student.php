<?php 

// Include the configuration file
require '../config.php';

// Include the reusable function file
require '../db_functions.php'; 

// Check if the ID is passed and is numeric
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $user_id = intval($_GET['id']); // Ensure it's an integer

    // Use the deleteData function to handle the deletion
    $response = deleteData($conn, 'students', $user_id); 

    // Return the response
    echo json_encode($response);
} else {
    // Invalid or missing ID
    echo json_encode([
        "success" => false, 
        "message" => "The ID is not valid or missing."
    ]);
}

// Close the connection
$conn->close();
?>
