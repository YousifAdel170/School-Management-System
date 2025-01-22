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
$roleID = 1;
$feeID = 20;
$classID = 6;
$BOD = $data['BOD'];
$gender = $data['gender'];
$admission_date = date('Y-m-d');


// Check if email already exists
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Email is already registered"]);
} else {
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (username, email, password, roleID) VALUES ('$username', '$email', '$password_hash', '$roleID')";
    
    if ($conn->query($sql) === TRUE) {
        $sql_getUserID = "SELECT ID FROM users WHERE email = '$email'";
        $result_getUserID = $conn->query($sql_getUserID);
        $row = $result_getUserID->fetch_assoc();
        $user_id = $row['ID'];  

        // Assuming you have the $gender variable already
        if ($gender == 1) {
            $gender_label = "Male";
        } else {
            $gender_label = "Female";
        }


        $sql_students = "INSERT INTO students (name, gender, student_status, bod, user_id, feeID, classID, admission_date) VALUES ('$username', '$gender_label', 'Active', '$BOD', '$user_id', '$feeID', '$classID', '$admission_date')";

        if ($conn->query($sql_students) === TRUE) {
            echo json_encode(["success" => true, "message" => "Student has been added successfully to both tables"]);
        }else{
            echo json_encode(["success" => false, "message" => "Failed to add student to the students table: " . $conn->error]);
        }
    
    } else {
        echo json_encode(["success" => false, "message" => "Failed to add student to the users table: " . $conn->error]);
    }


    
}






$conn->close();
