const ctx = document.getElementById('spendingChart').getContext('2d');
const spendingChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Spending',
            data: [1200, 1900, 3000, 500, 2000, 3000],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Ensure authentication
const signOutBtn = document.getElementById('signOutBtn');
signOutBtn.addEventListener('click', () => {
    // Redirect to the login page when signing out
    window.location.href = 'https://121omprakash.github.io/UI_UX/'; // Ensure this path is correct based on your file structure
});


