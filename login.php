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

// Check if request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Check if required fields exist
    if (isset($_POST['username'], $_POST['password'])) {
        
        // Sanitize inputs to prevent SQL injection
        $username = htmlspecialchars(strip_tags($_POST['username']));
        $password = $_POST['password'];

        // Prepare SQL statement
        $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
        if (!$stmt) {
            echo json_encode(["error" => "Database error: " . $conn->error]);
            exit();
        }

        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->bind_result($hashed_password);
        
        if ($stmt->fetch()) {
            // Close statement before checking password to avoid issues
            $stmt->close();

            // Verify password
            if (password_verify($password, $hashed_password)) {
                echo json_encode(["message" => "Login successful!", "success" => true]);  // Add success flag
            } else {
                echo json_encode(["error" => "Invalid username or password!"]);
            }
        } else {
            echo json_encode(["error" => "User not found!"]);
        }

        $conn->close();
        
    } else {
        echo json_encode(["error" => "Missing required fields!"]);
    }

} else {
    echo json_encode(["error" => "Invalid request method!"]);
}
?>
