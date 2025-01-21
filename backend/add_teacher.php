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
if (!isset($data['username'], $data['email'], $data['password'], $data['name'], $data['salary'])) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

$name = $data['name'];
$username = $data['username'];
$email = $data['email'];
$password = $data['password'];
$roleID = 2;
$BOD = $data['BOD'];
$gender = $data['gender'];
$salary = $data['salary'];
$specialization = $data['specialization'];
$address = $data['address'];


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

        $gender_label = ($gender == 1) ? "Male" : "Female";
        $currentDate = date("Y-m-d");

        switch($specialization){
            case 1: 
                $specialization_lable = "Software";
                break;
            case 2: 
                $specialization_lable = "History";
                break;
            case 3: 
                $specialization_lable = "Mathematics";
                break;
            case 4: 
                $specialization_lable = "Physics";
                break;
            case 5: 
                $specialization_lable = "Biology";
                break;
            case 6: 
                $specialization_lable = "Computer Science";
                break;
            case 7: 
                $specialization_lable = "Literature";
                break;
            default:
                $specialization_lable = "";
                break;
        }

        $sql_teacher = "INSERT INTO teachingstaff (name, specialization, address, bod, hire_date, gender, salary, supervisorID, user_id) 
        VALUES ('$name', '$specialization_lable', '$address', '$BOD', '$currentDate', '$gender_label', '$salary', 1, '$user_id')";


        if ($conn->query($sql_teacher) === TRUE) {
            echo json_encode([
                "success" => true, 
                "messages" => [
                    "Teacher Has Been Added Successfully into the users table",
                    "Teacher information updated successfully in the teachingstaff table"
                ]
            ]);       
        }else{
            echo json_encode(["success" => false, "message" => "Failed to add Teacher to the Teaching-staff table: " . $conn->error]);
        }
    
    } else {
        echo json_encode(["success" => false, "message" => "Failed to add Teacher to the users table: " . $conn->error]);
    }


    
}






$conn->close();
