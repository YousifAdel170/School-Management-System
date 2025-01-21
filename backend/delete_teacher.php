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

    // Delete from Teachers table first
    $sql_teacher = "DELETE FROM teachingstaff WHERE user_id = '$user_id'";
    if ($conn->query($sql_teacher) === TRUE) {
    
        // Delete from users table if Teacher was deleted
        $sql_user = "DELETE FROM users WHERE id = '$user_id'";
        if ($conn->query($sql_user) === TRUE) {
            echo json_encode(["success" => true, "message" => "Teacher data deleted from both tables successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "Teacher Didn't Deleted From Teachers Table"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to delete Teacher from Teachers table: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Teacher didn't delete from both tables"]);
}

$conn->close();
?>
