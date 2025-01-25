<?php 

// Include the configuration file
require '../config.php';

// Include the reusable function file
require '../db_functions.php'; 

// Get JSON data from request
$data = json_decode(file_get_contents('php://input'), true);

// Validate the required fields
if (!isset($data['username'], $data['email'], $data['password'], $data['name'], $data['userID'])) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

// Assign the received data to variables
$userID = $data['userID']; 
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
$supervisorID = 1;

// Check if email already exists in the users table
$sql_check_email = "SELECT * FROM users WHERE email = '$email' AND ID != '$userID'"; 
$result_check_email = $conn->query($sql_check_email);

if ($result_check_email->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Email is already registered"]);
} else {
    // Hash the password
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    
    // Prepare data for the user update
    $user_update_data = [
        'username' => $username, 
        'email' => $email, 
        'password' => $password_hash
    ];

    // Prepare the condition for the user update
    $user_condition = "ID = '$userID'";

    // Call the reusable updateData function to update the users table
    $user_response = updateData($conn, "users", $user_update_data, $user_condition);

    if ($user_response['success']) {
        // Assign gender label
        $gender_label = ($gender == 1) ? "Male" : "Female";

        $currentDate = date("Y-m-d");

        // Set the specialization label
        $specialization_labels = [
            1 => "Software",
            2 => "History",
            3 => "Mathematics",
            4 => "Physics",
            5 => "Biology",
            6 => "Computer Science",
            7 => "Literature"
        ];
        $specialization_lable = $specialization_labels[$specialization] ?? "";

        // Prepare the data for teacher update
        $teacher_update_data = [
            'name' => $name, 
            'gender' => $gender_label, 
            'hire_date' => $currentDate, 
            'supervisorID' => $supervisorID,
            'bod' => $BOD,
            'specialization' => $specialization_lable, 
            'salary' => $salary, 
            'address' => $address
        ];

        // Prepare the condition for the teacher update
        $teacher_condition = "user_id = '$userID'";

        // Call the reusable updateData function to update the teachingstaff table
        $teacher_response = updateData($conn, "teachingstaff", $teacher_update_data, $teacher_condition);

        if ($teacher_response['success']) {
            echo json_encode([
                "success" => true, 
                "messages" => [
                    "User Has Been Updated Successfully",
                    "Teacher information updated successfully"
                ]
            ]);
        } else {
            echo json_encode(["success" => false, "message" => "Failed to update Teacher information in the teachingstaff table."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update Teacher information in the users table."]);
    }
}

$conn->close();
?>
