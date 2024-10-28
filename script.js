function goHome() {
    // You can modify this function to add more logic if needed
    window.location.href = "index.html";
}

function exploreCrafts() {
    window.location.href = "explore.html"; // Redirect to the explore page
}


function goToCreatePage() {
    window.location.href = "create.html";
}

function searchProjects() {
    // You can add logic for the search functionality
    alert("Search functionality goes here!");
}

function showLoginForm() {
    var loginForm = document.getElementById("login-form");
    loginForm.style.display = "block";
}

function showRegisterForm() {
    var registerForm = document.getElementById("register-form");
    registerForm.style.display = "block";
}

// Function to update user name and description
function updateProfile() {
    var newName = document.getElementById("name").value;
    var newDescription = document.getElementById("description").value;
    
    document.getElementById("userName").textContent = newName;
    // You can save newName and newDescription to the server here via AJAX if needed
}

// Function to add a new work
function addWork() {
    var newWork = document.getElementById("work").value;
    var worksList = document.getElementById("worksList");
    var listItem = document.createElement("li");
    listItem.textContent = newWork;
    worksList.appendChild(listItem);
    // You can save newWork to the server here via AJAX if needed
}
