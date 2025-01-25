<?php 

// Include the configuration file
require '../config.php';

// Read JSON data from the request
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$password = $data['password'];

// Validate username and password 
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Verify the password 
    if ($row['password'] == $password) {
        echo json_encode(["success" => true, "message" => "Login successful Redirecting...", "roleID" => $row['roleID'],  "ID" => $row['ID']]);
    } else {
        echo json_encode(["success" => false, "message" => "You have entered a wrong password"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "You have entered a wrong email"]);
}

$conn->close();
?>
