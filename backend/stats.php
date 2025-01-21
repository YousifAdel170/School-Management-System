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
$sql = "select count(DISTINCT studentID)as std_counter 
from exam";
$result_students = $conn->query($sql);

// $sql_subject = "select count(subjects.ID)as counter FROM subjects";
$sql_subject = "select count(DISTINCT subjectID)as subject_counter 
from exam";
$result_subjects = $conn->query($sql_subject);

$sql_average = "select avg(std_counter) as average
from (
	select subjectID, count(DISTINCT studentID) as std_counter
    from exam
    GROUP BY subjectID
)as average_std_subj;
";
$result_average = $conn->query($sql_average);

if ($result_students->num_rows > 0) {
    $statsData = [];
    $row_student = $result_students->fetch_assoc();
    $statsData[] = $row_student;
    if($result_subjects->num_rows > 0){
        $row_subject = $result_subjects->fetch_assoc();
        $statsData[] = $row_subject;
        if($result_average->num_rows > 0){
            $row_average = $result_average->fetch_assoc();
            $statsData[] = $row_average;
        }
    }
    echo json_encode(["success" => true, "message" => "Statisctics Data Subjects Received Successfully", "statsData" => $statsData]);
}else{
    echo json_encode(["success" => false, "message" => "Statisctics Data Failed"]);
}

$conn->close();
?>
