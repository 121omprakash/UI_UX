const goals = [
    'Save $5000 for vacation',
    'Pay off credit card debt',
    'Invest in stock market',
];

const goalsList = document.getElementById('goalsList');

goals.forEach(goal => {
    const li = document.createElement('li');
    li.textContent = goal;
    goalsList.appendChild(li);
});
// Ensure authentication
const signOutBtn = document.getElementById('signOutBtn');
signOutBtn.addEventListener('click', () => {
    // Redirect to the login page when signing out
    window.location.href = 'https://121omprakash.github.io/UI_UX/'; // Ensure this path is correct based on your file structure
});

