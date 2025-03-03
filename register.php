<?php
include 'db.php';

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Enable Error Reporting (for debugging)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Check if required fields are provided
    if (isset($_POST['fullname'], $_POST['username'], $_POST['password'])) {

        // Sanitize input to prevent SQL Injection
        $fullname = htmlspecialchars(strip_tags($_POST['fullname']));
        $username = htmlspecialchars(strip_tags($_POST['username']));
        $password = password_hash($_POST['password'], PASSWORD_BCRYPT); 

        // Check if the username already exists
        $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            // Username exists
            echo json_encode(["error" => "Username already exists!"]);
            $stmt->close();
            $conn->close();
            exit();
        }

        // Prepare SQL statement to insert user
        $stmt = $conn->prepare("INSERT INTO users (fullname, username, password) VALUES (?, ?, ?)");
        if (!$stmt) {
            echo json_encode(["error" => "Database error: " . $conn->error]);
            exit();
        }

        $stmt->bind_param("sss", $fullname, $username, $password);

        // Execute query and return appropriate response
        if ($stmt->execute()) {
            echo json_encode(["message" => "Registration successful!"]);
        } else {
            echo json_encode(["error" => "Failed to register user!"]);
        }

        // Close statement & connection
        $stmt->close();
        $conn->close();
        
    } else {
        echo json_encode(["error" => "Missing required fields!"]);
    }

} else {
    echo json_encode(["error" => "Invalid request method!"]);
}
?>
