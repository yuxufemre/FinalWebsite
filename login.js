


// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic Validation (Replace with actual authentication in a real application)
    if (username === '' || password === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate Login Success and Save User Info to localStorage
    localStorage.setItem('loggedInUser', JSON.stringify({ username }));
    alert(`Welcome, ${username}!`);
    window.location.href = 'profile.html'; // Redirect to profile page
});
document.getElementById('google-login').addEventListener('click', function () {
    alert('Google Login not implemented yet.');
    // Add Google OAuth functionality here
});