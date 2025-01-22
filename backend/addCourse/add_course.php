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

// Get JSON data from request
$data = json_decode(file_get_contents('php://input'), true);
if (!isset($data['subjectName'], $data['subjectCode'], $data['teachingstaffID'])) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

$subjectName = $data['subjectName'];
$subjectCode = $data['subjectCode'];
$teachingstaffID = $data['teachingstaffID'];


// Check if subject already exists
$sql_checkSubject = "SELECT * FROM subjects WHERE subject_name = '$subjectName'";
$result_checkSubject = $conn->query($sql_checkSubject);

if ($result_checkSubject->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "The subject is already in the system."]);
} else {
    $sql_insertion = "INSERT INTO subjects (subject_name, subject_code, teachingstaff_ID) VALUES ('$subjectName', '$subjectCode', '$teachingstaffID')";
    
    if ($conn->query($sql_insertion) === TRUE) {
        echo json_encode(["success" => true, "message" => "Subject Has Been Added Successfully into the users table"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to add Subject to the Subjects table: " . $conn->error]);
    }
}

$conn->close();
?>
