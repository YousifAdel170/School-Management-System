<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "school_management_system";

// Connect to database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed: " . $conn->connect_error]);
    exit();
}

// Get JSON data from request
$data = json_decode(file_get_contents('php://input'), true);
if (!isset($data['username'], $data['email'], $data['password'], $data['name'], $data['userID'])) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

$userID = $data['userID']; 
$name = $data['name'];
$username = $data['username'];
$email = $data['email'];
$password = $data['password'];
$roleID = 1;
$BOD = $data['BOD'];
$gender = $data['gender'];

// Check if email already exists
$sql_check_email = "SELECT * FROM users WHERE email = '$email' AND ID != '$userID'"; 
$result_check_email = $conn->query($sql_check_email);

if ($result_check_email->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Email is already registered"]);
} else {
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $sql_user = "UPDATE users SET username = '$username', email = '$email', password = '$password_hash' WHERE ID = '$userID'";
    
    if ($conn->query($sql_user) === TRUE) {
        // Assign gender label
        $gender_label = ($gender == 1) ? "Male" : "Female";

        // Update student information
        $sql_student = "UPDATE students SET name = '$name', gender = '$gender_label', bod = '$BOD' WHERE user_id = '$userID'";

        if ($conn->query($sql_student) === TRUE) {
            echo json_encode([
                "success" => true, 
                "messages" => [
                    "Student Has Been Added Successfully into the users table",
                    "Student information updated successfully"
                ]
            ]);        
        } else {
            echo json_encode(["success" => false, "message" => "Failed to update student information in the students table." . $conn->error]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update student information in the users table." . $conn->error]);
    }
}

$conn->close();
?>
