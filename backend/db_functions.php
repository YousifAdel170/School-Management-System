<?php 
/**
 * Fetches all rows from a specified database table.
 *
 * @param mysqli $conn        The database connection object.
 * @param string $tableName   The name of the table to fetch data from.
 * @return array              Returns the query results as an associative array with a success or failure message.
 */
function getAllData ($conn, $tableName, ...$attr){
    // Build the SQL query
    $sql = "SELECT * FROM `$tableName`";

    // Execute the query
    $result = $conn->query($sql);

    // Check if rows exist
    if($result->num_rows > 0){
        $Data = [];
        while ($row = $result->fetch_assoc()) {
            $Data[] = $row;
        }
        return ["success" => true, "message" => "Data retrieved successfully from $tableName.", "Data" => $Data];
    } else{
        return ["success" => false, "message" => "No data found in $tableName."];
    }
}


/**
 * Execute a custom SQL query and fetch data.
 *
 * @param mysqli $conn   The database connection object.
 * @param string $sql    The SQL query to execute.
 * @return array         Returns an associative array with a success or failure message and data.
 */
function getData($conn, $sql){
    // Execute the query
    $result = $conn->query($sql);

    // Check if rows exists 
    if($result){
        if($result->num_rows > 0){
            $Data = [];
            while ($row = $result->fetch_assoc()) {
                $Data[] = $row;
            }
            return ["success" => true, "message" => "Query executed successfully.", "Data" => $Data];
        } else{
            return ["success" => true, "message" => "No data found.", "data" => []];
        }
    }else{
        return ["success" => false, "message" => "Query execution failed: " . $conn->error];
    }
}


/**
 * A simple function to update a record in a given table.
 *
 * @param object $conn The database connection object
 * @param string $table The name of the table
 * @param array $data The data to update in the form of key-value pairs
 * @param string $condition The condition to identify which record to update (e.g., ID = 1)
 * @return array The response with success or failure message
 */
function updateData($conn, $table, $data, $condition) {
    // Prepare the update part of the SQL query
    $updateQuery = "";
    foreach ($data as $key => $value) {
        $updateQuery .= "`$key` = '$value', ";  // Add each column and its new value
    }

    // Remove the last comma and space
    $updateQuery = rtrim($updateQuery, ", ");

    // Build the full SQL query
    $sql = "UPDATE `$table` SET $updateQuery WHERE $condition";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        return ["success" => true, "message" => "Data updated successfully in $table"];
    } else {
        return ["success" => false, "message" => "Error updating record: " . $conn->error];
    }
}

/**
 * This function deletes a row from a table based on the ID.
 * 
 * @param mysqli $conn The database connection
 * @param string $table The name of the table (e.g., 'subjects', 'users', etc.)
 * @param int $id The ID of the row to delete
 * 
 * @return array The result of the delete operation (success or failure)
 */
function deleteData($conn, $table, $id) {
    // Ensure the ID is a valid number
    if (!is_numeric($id)) {
        return [
            "success" => false,
            "message" => "The ID is not valid or not numeric."
        ];
    }

    // If the table requires deletion from both the user-related table (e.g., 'students', 'teachingstaff', 'parent')
    if ($table === "students" || $table === "teachingstaff" || $table === "parent") {
        // Delete the record from the specific table
        $sql_delete = "DELETE FROM $table WHERE user_id = $id";
        if ($conn->query($sql_delete) === TRUE) {
            // After deleting from the main table, delete from the users table
            $sql_user = "DELETE FROM users WHERE id = $id";
            if ($conn->query($sql_user) === TRUE) {
                return [
                    "success" => true,
                    "message" => "Data deleted from both $table and users tables successfully."
                ];
            } else {
                return [
                    "success" => false,
                    "message" => "Failed to delete data from users table."
                ];
            }
        } else {
            return [
                "success" => false,
                "message" => "Failed to delete data from $table table."
            ];
        }
    }

    // If the table is any other, just delete the record from that table
    $sql = "DELETE FROM $table WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        return [
            "success" => true,
            "message" => "Record deleted successfully from the $table table."
        ];
    } else {
        return [
            "success" => false,
            "message" => "Failed to delete the record from the $table table: " . $conn->error
        ];
    }
}


/**
 * Inserts data into a specified table in the database.
 * 
 * @param mysqli $conn The database connection object. This is used to execute queries on the database.
 * @param string $table The name of the table where the data will be inserted (e.g., 'students', 'subjects').
 * @param array $data An associative array where the keys are column names, and the values are the data to be inserted into those columns.
 * 
 * @return array Returns an associative array with the result of the operation:
 *               - "success": A boolean indicating whether the operation was successful.
 *               - "message": A message providing additional details about the result (success or error).
 */
function insertData($conn, $table, $data) {
    // Check if the data is provided as an associative array
    if (!is_array($data) || empty($data)) {
        return [
            "success" => false,
            "message" => "The data is not valid. Please provide valid data."
        ];
    }

    // Prepare the columns and values part of the SQL query
    $columns = "";
    $values = "";

    // Loop through the data to prepare the columns and values
    foreach ($data as $key => $value) {
        $columns .= "`$key`, ";  // Add each column
        $values .= "'$value', ";  // Add each value
    }

    // Remove the last comma and space from the columns and values
    $columns = rtrim($columns, ", ");
    $values = rtrim($values, ", ");

    // Build the full SQL query
    $sql = "INSERT INTO `$table` ($columns) VALUES ($values)";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        return [
            "success" => true,
            "message" => "Data has been added successfully to the '$table' table."
        ];
    } else {
        return [
            "success" => false,
            "message" => "Error inserting data into '$table' table: " . $conn->error
        ];
    }
}




?>