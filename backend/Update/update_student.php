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
$roleID = 1;
$BOD = $data['BOD'];
$gender = $data['gender'];

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

        // Prepare data for the student update
        $student_update_data = [
            'name' => $name, 
            'gender' => $gender_label, 
            'bod' => $BOD
        ];

        // Prepare the condition for the student update
        $student_condition = "user_id = '$userID'";

        // Call the reusable updateData function to update the students table
        $student_response = updateData($conn, "students", $student_update_data, $student_condition);

        if ($student_response['success']) {
            echo json_encode([
                "success" => true, 
                "messages" => [
                    "Student information updated successfully",
                    "User information updated successfully"
                ]
            ]);       
        } else {
            echo json_encode(["success" => false, "message" => "Failed to update student information in the students table."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Failed to update user information in the users table."]);
    }
}

$conn->close();
?>
