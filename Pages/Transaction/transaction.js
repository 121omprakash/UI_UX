const transactions = [
    { date: '2024-09-28', description: 'Groceries', amount: -150, type: 'Debit' },
    { date: '2024-09-29', description: 'Salary', amount: 2000, type: 'Credit' },
    { date: '2024-09-30', description: 'Rent', amount: -500, type: 'Debit' },
];

const transactionTableBody = document.getElementById('transactionTableBody');

transactions.forEach(transaction => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.description}</td>
        <td>${transaction.amount}</td>
        <td>${transaction.type}</td>
    `;

    transactionTableBody.appendChild(row);
});
// Ensure authentication
if (localStorage.getItem("authenticated") !== "true") {
    window.location.href = "../../Login/login.html";
}
