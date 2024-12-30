// Load User Data from localStorage
const user = JSON.parse(localStorage.getItem('loggedInUser'));

if (!user) {
    // If no user is logged in, redirect to login page
    alert('You must log in first.');
    window.location.href = 'login.html';
} else {
    // Display Username
    document.getElementById('username-display').textContent = user.username;
}

// Logout Functionality
document.getElementById('logout-button').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser'); // Remove user data from localStorage
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Redirect to login page
});
