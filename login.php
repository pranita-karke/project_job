<?php
include 'db.php';

// Clean any previous output
ob_clean();

// CORS + Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$response = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!isset($_POST['username'], $_POST['password'], $_POST['role'])) {
        echo json_encode(["error" => "Missing required fields!"]);
        exit();
    }

    $username = htmlspecialchars(strip_tags($_POST['username']));
    $password = $_POST['password'];
    $role = htmlspecialchars(strip_tags($_POST['role']));

    $stmt = $conn->prepare("SELECT password, role, companyName, companyDescription FROM users WHERE username = ?");
    if (!$stmt) {
        echo json_encode(["error" => "Database error: " . $conn->error]);
        exit();
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($hashed_password, $db_role, $companyName, $companyDescription);
        $stmt->fetch();

        if ($role !== $db_role) {
            echo json_encode(["error" => "Incorrect role selected!"]);
            exit();
        }

        if (password_verify($password, $hashed_password)) {
            $response = [
                "success" => true,
                "message" => "Login successful!",
                "role" => $db_role,
                "username" => $username,
                "company_name" => $companyName ?? "",
                "company_description" => $companyDescription ?? ""
            ];
        } else {
            $response = ["error" => "Invalid password!"];
        }
    } else {
        $response = ["error" => "User not found!"];
    }

    $stmt->close();
    $conn->close();
} else {
    $response = ["error" => "Invalid request method!"];
}

echo json_encode($response);
exit();
?>
