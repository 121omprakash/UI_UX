const walletBalance = document.getElementById('walletBalance');
walletBalance.textContent = `$1500`;
// Ensure authentication
const signOutBtn = document.getElementById('signOutBtn');
signOutBtn.addEventListener('click', () => {
    // Redirect to the login page when signing out
    window.location.href = 'https://121omprakash.github.io/UI_UX/'; // Ensure this path is correct based on your file structure
});

