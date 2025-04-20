<?php
include 'db.php';

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_POST['fullname'], $_POST['username'], $_POST['password'], $_POST['role'])) {

        $fullname = htmlspecialchars(strip_tags($_POST['fullname']));
        $username = htmlspecialchars(strip_tags($_POST['username']));
        $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
        $role = htmlspecialchars(strip_tags($_POST['role']));

        // Validate role
        if (!in_array($role, ['user', 'company'])) {
            echo json_encode(["error" => "Invalid role selected!"]);
            exit();
        }

        // Optional company info (set to null if not provided)
        $companyName = isset($_POST['companyName']) ? htmlspecialchars(strip_tags($_POST['companyName'])) : null;
        $companyDescription = isset($_POST['companyDescription']) ? htmlspecialchars(strip_tags($_POST['companyDescription'])) : null;

        // Check if username already exists
        $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            echo json_encode(["error" => "Username already exists!"]);
            $stmt->close();
            $conn->close();
            exit();
        }
        $stmt->close();

        // Insert into users table (including optional company fields)
        $stmt = $conn->prepare("INSERT INTO users (fullname, username, password, role, companyName, companyDescription) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $fullname, $username, $password, $role, $companyName, $companyDescription);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Registration successful!", "success" => true]);
        } else {
            echo json_encode(["error" => "Failed to register user: " . $stmt->error]);
        }

        $stmt->close();
        $conn->close();

    } else {
        echo json_encode(["error" => "Missing required fields!"]);
    }
} else {
    echo json_encode(["error" => "Invalid request method!"]);
}
?>
