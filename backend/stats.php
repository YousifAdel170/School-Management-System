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

// $sql = "select roles.roleName , count(users.roleID) as counter
// from roles LEFT outer join users 
// on roles.roleID = users.roleID
// GROUP by roles.roleName
// having roles.roleName = 'student' ";
$sql_students = "select count(DISTINCT studentID)as std_counter from exam";

// $sql_subject = "select count(subjects.ID)as counter FROM subjects";
$sql_subjects = "select count(DISTINCT subjectID)as subject_counter from exam";
$sql_average = "select avg(std_counter) as average from (
        select subjectID, count(DISTINCT studentID) as std_counter
        from exam
        GROUP BY subjectID
    ) as average_std_subj;";

// Execute queries
$result_students = $conn->query($sql_students);
$result_subjects = $conn->query($sql_subjects);
$result_average = $conn->query($sql_average);

if ($result_students->num_rows > 0) {
    $Data = [];
    $row_student = $result_students->fetch_assoc();
    $row_subject = $result_subjects->fetch_assoc();
    $row_average = $result_average->fetch_assoc();

    // Combine all results into a single data array
    $Data = [$row_student, $row_subject, $row_average];

    echo json_encode(["success" => true, "message" => "Statistics Data Received Successfully", "Data" => $Data]);
    
}else{
    echo json_encode(["success" => false, "message" => "Statistics Data Failed", "Data" => $Data]);
}

$conn->close();
?>
