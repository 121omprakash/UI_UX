const walletBalance = document.getElementById('walletBalance');
walletBalance.textContent = `$1500`;
// Ensure authentication
if (localStorage.getItem("authenticated") !== "true") {
    window.location.href = "../../Login/login.html";
}
