const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
        {
        label: 'Income',
        data: [1200, 1900, 1700, 2500, 2100, 1400, 1800, 2200],
        backgroundColor: '#ff6347'
        },
        {
        label: 'Expense',
        data: [800, 1100, 1300, 1400, 1100, 1600, 1200, 1500],
        backgroundColor: '#ffddc1'
        }
    ]
    }
});

const ctx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Groceries', 'Shopping', 'Education', 'Subscription', 'Savings', 'Rent'],
            datasets: [{
                data: [25, 30, 7, 10, 20, 8], // Percentage values
                backgroundColor: [
                    '#00c3ff',  // Groceries
                    '#26e070',  // Shopping
                    '#005bff',  // Education
                    '#e2c72f',  // Subscription
                    '#9656e7',  // Savings
                    '#c49a6c'   // Rent
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,  // Disable default legend
                    onClick: (e, legendItem) => {
                        const index = legendItem.index;
                        const meta = pieChart.getDatasetMeta(0);
                        // Toggle visibility of the pie section
                        meta.data[index].hidden = !meta.data[index].hidden;
                        pieChart.update();
                    }
                }
            }
        }
    });
// Dark/Light Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Optional: Save user preference in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    } else {
    localStorage.setItem('dark-mode', 'disabled');
    }
});

if(localStorage.getItem('isLoggedIn')!==true)
{
    window.location.href = 'https://121omprakash.github.io/UI_UX/';
}
// Sign Out Button
const signOutBtn = document.getElementById('signOutBtn');
signOutBtn.addEventListener('click', () => {
    // Redirect to the login page when signing out
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'https://121omprakash.github.io/UI_UX/';
});


