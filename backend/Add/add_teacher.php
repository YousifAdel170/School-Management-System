<?php 

// Include the configuration file
require '../config.php';

// Include the reusable function file
require '../db_functions.php'; 

// Get JSON data from request
$data = json_decode(file_get_contents('php://input'), true);

// Check if the necessary data fields are provided
if (!isset($data['username'], $data['email'], $data['password'], $data['name'], $data['salary'], $data['specialization'], $data['address'])) {
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
$sql_checkEmail = "SELECT * FROM users WHERE email = '$email'";
$result_checkEmail = $conn->query($sql_checkEmail);

if ($result_checkEmail->num_rows > 0) {
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

        $gender_label = ($gender == 1) ? "Male" : "Female";
        $currentDate = date("Y-m-d");

        // Prepare specialization label
        switch($specialization) {
            case 1: $specialization_label = "Software"; break;
            case 2: $specialization_label = "History"; break;
            case 3: $specialization_label = "Mathematics"; break;
            case 4: $specialization_label = "Physics"; break;
            case 5: $specialization_label = "Biology"; break;
            case 6: $specialization_label = "Computer Science"; break;
            case 7: $specialization_label = "Literature"; break;
            default: $specialization_label = ""; break;
        }

        // Prepare data for insertion into the teachingstaff table
        $teacher_data = [
            'name' => $name,
            'specialization' => $specialization_label,
            'address' => $address,
            'bod' => $BOD,
            'hire_date' => $currentDate,
            'gender' => $gender_label,
            'salary' => $salary,
            'supervisorID' => 1, // Assuming supervisor ID is static or can be adjusted
            'user_id' => $user_id
        ];

        // Insert teacher into the teachingstaff table
        $response_teacher = insertData($conn, 'teachingstaff', $teacher_data);
        echo json_encode($response_teacher);
    
    } else {
        echo json_encode(["success" => false, "message" => "Failed to add Teacher to the users table. " . $conn->error]);
    }


    
}






$conn->close();
