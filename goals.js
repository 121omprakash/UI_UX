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
if (localStorage.getItem("authenticated") !== "true") {
    window.location.href = "../../Login/login.html";
}
