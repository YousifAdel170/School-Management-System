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
    $user_id = intval($_GET['id']); // Ensure it's an integer

    // Delete from students table first
    $sql_student = "DELETE FROM students WHERE user_id = '$user_id'";
    if ($conn->query($sql_student) === TRUE) {
    
        // Delete from users table if student was deleted
        $sql_user = "DELETE FROM users WHERE id = '$user_id'";
        if ($conn->query($sql_user) === TRUE) {
            echo json_encode(["success" => true, "message" => "Student data deleted from both tables successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "Student Didn't Deleted From Students Table"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to delete student from students table: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Student didn't delete from both tables"]);
}

$conn->close();
?>
