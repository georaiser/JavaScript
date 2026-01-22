/* Main Script for AlkeWallet */
console.log('AlkeWallet Loaded');


document.addEventListener('DOMContentLoaded', function() {
    // Login Logic
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const email = document.getElementById('emailInput').value;
            // Simple extraction of name from email (before @)
            const name = email.split('@')[0];
            // Provide a fallback or capitalize
            const formattedName = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'User';
            
            localStorage.setItem('userName', formattedName);
            window.location.href = 'menu.html';
        });
    }

    // Dashboard Logic
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            userNameElement.textContent = storedName;
        }
    }
});
