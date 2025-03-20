// Function to show the registration form
function showForm(type) {
    const registrationOptions = document.getElementById('registration-options');
    const homecookForm = document.getElementById('homecook-form');
    const userForm = document.getElementById('user-form');

    // Hide the registration options
    registrationOptions.classList.add('hidden');

    // Show the appropriate form based on the type
    if (type === 'homecook') {
        homecookForm.classList.remove('hidden');
        userForm.classList.add('hidden');
    } else if (type === 'user') {
        userForm.classList.remove('hidden');
        homecookForm.classList.add('hidden');
    }

    // Smooth scroll to the form
    const form = type === 'homecook' ? homecookForm : userForm;
    form.scrollIntoView({ behavior: 'smooth' });

    // Focus on the first input field for accessibility
    const firstInput = form.querySelector('input');
    if (firstInput) firstInput.focus();
}

// Function to handle login (placeholder)
function showLogin() {
    alert('Login functionality will be added soon!');
    // You can redirect to a login page or display a login form here.
}

// Function to show the login form
function showLoginForm() {
    const registrationOptions = document.getElementById('registration-options');
    const loginForm = document.getElementById('login-form');

    // Hide the registration options
    registrationOptions.classList.add('hidden');

    // Show the login form
    loginForm.classList.remove('hidden');

    // Smooth scroll to the login form
    loginForm.scrollIntoView({ behavior: 'smooth' });

    // Focus on the first input field for accessibility
    const firstInput = loginForm.querySelector('input');
    if (firstInput) firstInput.focus();
}