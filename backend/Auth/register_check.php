<?php 

// Include the configuration file
require '../config.php';

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
