<?php 

// Allow all origins (you can specify a specific domain here if needed)
header("Access-Control-Allow-Origin: *");               // Allow requests from all origins
header("Access-Control-Allow-Methods: POST");           // Allow specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type");   // Allow specific HTTP headers


// Change database connection credentials
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "school_management_system"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $deleted_id = intval($_GET['id']); // Ensure it's an integer

    // Delete from students table first
    $sql_subject = "DELETE FROM subjects WHERE id = '$deleted_id'";
    if ($conn->query($sql_subject) === TRUE) {
        echo json_encode(["success" => true, "message" => "subject data deleted from subject table successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to delete subject from subjects table: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "The ID not getting right or it is not integer"]);
}

$conn->close();
?>



