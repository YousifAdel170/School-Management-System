<?php 


// Include the configuration file
require '../config.php';

// Include the reusable function file
require '../db_functions.php'; 

// Get JSON data from request
$data = json_decode(file_get_contents('php://input'), true);

// Check if the necessary data fields are provided
if (!isset($data['username'], $data['email'], $data['password'], $data['gender'], $data['BOD'])) {
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

    // Prepare data for insertion into the users table
    $user_data = [
        'username' => $username,
        'email' => $email,
        'password' => $password_hash,
        'roleID' => $roleID
    ];
    
    // Insert user into the users table
    $response = insertData($conn, 'users', $user_data);
    
    
    if ($response['success'] === true) {
        // Get the user ID after insertion
        $sql_getUserID = "SELECT ID FROM users WHERE email = '$email'";
        $result_getUserID = $conn->query($sql_getUserID);
        $row = $result_getUserID->fetch_assoc();
        $user_id = $row['ID'];   

        // Prepare data for insertion into the students table
        if ($gender == 1) {
            $gender_label = "Male";
        } else {
            $gender_label = "Female";
        }

        $student_data = [
            'name' => $username,
            'gender' => $gender_label,
            'student_status' => 'Active',
            'bod' => $BOD,
            'user_id' => $user_id,
            'feeID' => $feeID,
            'classID' => $classID,
            'admission_date' => $admission_date
        ];

        // Insert student into the students table
        $response_students = insertData($conn, 'students', $student_data);
        echo json_encode($response_students);


    } else {
        echo json_encode(["success" => false, "message" => "Failed to add student to the users table. " . $conn->error]);
    }
}

// Close the connection
$conn->close();

?>