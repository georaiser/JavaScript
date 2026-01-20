/* Main Script for AlkeWallet */
console.log('AlkeWallet Loaded');

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            // TODO: Add validation
            window.location.href = 'menu.html';
        });
    }
});
