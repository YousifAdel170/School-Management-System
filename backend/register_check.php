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
if (!isset($data['username'], $data['email'], $data['password'])) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

$username = $data['username'];
$email = $data['email'];
$password = $data['password'];
$roleID = $data['roleID'];

// Check if email already exists
$sql = "SELECT * FROM admission WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Email is already registered"]);
} else {
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO admission (username, email, password, roleID) VALUES ('$username', '$email', '$password_hash', '$roleID')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Registration successful"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error in registration: " . $conn->error]);
    }
}

$conn->close();
