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

$sql = "SELECT * FROM teachingstaff";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $Data = [];
    while($row = $result->fetch_assoc()){    
        $Data[] = $row;
    }
    echo json_encode(["success" => true, "message" => "Teachers Data Received Successfully", "Data" => $Data]);
} else {
    echo json_encode(["success" => false, "message" => "Currently, there is no data in the teachingstaff table."]);
}

$conn->close();
?>
