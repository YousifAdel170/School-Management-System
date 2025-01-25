<?php 

// Include the configuration file
require '../config.php';

// Include the reusable function file
require '../db_functions.php'; 

// Get JSON data from request
$data = json_decode(file_get_contents('php://input'), true);

// Check if the necessary data fields are provided
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
    // Prepare data for insertion
    $data_to_insert = [
        'subject_name' => $subjectName,
        'subject_code' => $subjectCode,
        'teachingstaff_ID' => $teachingstaffID
    ];


    // Call the insertData function to insert into the 'subjects' table
    $response = insertData($conn, 'subjects', $data_to_insert);
    echo json_encode($response);
}

// Close the connection
$conn->close();
?>
