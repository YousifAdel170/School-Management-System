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
if (!isset($data['updatedID'], $data['subjectName'], $data['subjectCode'], $data['teachingstaffID'])) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

$updatedID = $data['updatedID']; 
$subjectName = $data['subjectName'];
$subjectCode = $data['subjectCode'];
$teachingstaffID = $data['teachingstaffID'];

// Check if email already exists
$sql_check_subject = "SELECT * FROM subjects WHERE subject_name = '$subjectName' AND ID != '$updatedID'"; 
$result_check_subject = $conn->query($sql_check_subject);

if ($result_check_subject->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Subject is already in the system"]);
} else {
    $sql_subject = "UPDATE subjects SET subject_name = '$subjectName', subject_code = '$subjectCode', teachingstaff_ID = '$teachingstaffID' WHERE ID = '$updatedID'";
    
    if ($conn->query($sql_subject) === TRUE) {
        echo json_encode(["success" => true, "message" => "Subject Has Been Updated Successfully into the subjects table" . $conn->error]);
      
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update subject information in the subjects table." . $conn->error]);
    }
}                

$conn->close();
?>
