<?php 

// Include the configuration file
require '../config.php';

// Include the reusable function file
require '../db_functions.php'; 

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

// Check if subject already exists in the subjects table
$sql_check_subject = "SELECT * FROM subjects WHERE subject_name = '$subjectName' AND ID != '$updatedID'"; 
$result_check_subject = $conn->query($sql_check_subject);

if ($result_check_subject->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Subject is already in the system"]);
} else {
    $updatedData = [
        'subject_name' => $subjectName, 
        'subject_code' => $subjectCode, 
        'teachingstaff_ID' => $teachingstaffID
    ];

    // Condition for where to update
    $condition = "ID = '$updatedID'";

    // Call the reusable updateData function
    $response = updateData($conn, "subjects", $updatedData, $condition);

    // Output the response from the update operation
    echo json_encode($response);
}                

$conn->close();
?>
