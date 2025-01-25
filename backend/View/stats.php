<?php 

// Include the configuration file
require '../config.php';

// Include the reusable function file
require '../db_functions.php'; 


// $sql = "select roles.roleName , count(users.roleID) as counter
// from roles LEFT outer join users 
// on roles.roleID = users.roleID
// GROUP by roles.roleName
// having roles.roleName = 'student' ";
$sql_students = "select count(DISTINCT studentID)as std_counter from exam";
// $sql_subject = "select count(subjects.ID)as counter FROM subjects";
$sql_subjects = "select count(DISTINCT subjectID)as subject_counter from exam";
$sql_average = "select avg(std_counter) as average from 
                (
                    select subjectID, count(DISTINCT studentID) as std_counter
                    from exam
                    GROUP BY subjectID
                ) as average_std_subj;";


// Fetch data using the reusable function
$response_students = getData($conn, $sql_students);
$response_subjects = getData($conn, $sql_subjects);
$response_average = getData($conn, $sql_average);

// Initialize the combined data array
$Data = [];

if ($response_students['success'] && $response_subjects['success'] && $response_average['success']) {
    $row_student = $response_students['Data'][0] ?? [];
    $row_subject = $response_subjects['Data'][0] ?? [];
    $row_average = $response_average['Data'][0] ?? [];

    // Combine all results into a single data array
    $Data = [$row_student, $row_subject, $row_average];

    echo json_encode([
        "success" => true,
        "message" => "Statistics Data Received Successfully",
        "Data" => $Data
    ]);

} else{
    // Prepare error messages for failed queries
    $errors = [
        "students_error" => $response_students['message'],
        "subjects_error" => $response_subjects['message'],
        "average_error" => $response_average['message']
    ];

    echo json_encode([
        "success" => false,
        "message" => "Statistics Data Retrieval Failed",
        "errors" => $errors
    ]);
}

// Close the database connection
$conn->close();


?>
