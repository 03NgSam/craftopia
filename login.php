<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

// Set your hardcoded credentials
$valid_email = "samruddi3504@gmail.com";
$valid_password = "sam0305";

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate the submitted credentials
    if ($email === $valid_email && $password === $valid_password) {
        // Set session variables
        $_SESSION['username'] = "samruddi";

        // Redirect to home page after successful login
        header("refresh:5;url=index.html"); // Redirect after 5 seconds
        echo "Login successful! Redirecting to home page...";
        exit();
    } else {
        // Redirect back to login page with error message
        header("Location: login.html?error=1");
        exit();
    }
} else {
    // If the form is not submitted via POST method, redirect back to the login page
    header("Location: login.html");
    exit();
}
?>
