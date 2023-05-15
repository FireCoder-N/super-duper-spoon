window.scrollTo({ top: 0});
document.body.style.overflow = "hidden";
document.body.style.height = "100 %";

// Get DOM elements
const userType = document.getElementById('user-type');
const loginField = document.querySelector('#login-field');
const passwordField = document.querySelector('#password-field');
const submitter = document.querySelector('#login-form');

userType.value = 'level-1';

loginField.innerHTML = `
    <label for="login-input">Ονοματεπώνυμο:</label>
    <input type="text" id="login-input" name="login-input">
`;

// Add event listener to permission level dropdown
userType.addEventListener('change', () => {
  // Show/hide login/password fields based on permission level
    switch (userType.value) {
        case 'level-1':
            loginField.innerHTML = `
                <label for="login-input">Ονοματεπώνυμο:</label>
                <input type="text" id="login-input" name="login-input">
            `;
            passwordField.hidden = true;
            break;
        case 'level-2':
            loginField.innerHTML = `
                <label for="login-input">Αριθμός Μητρώου:</label>
                <input type="text" id="login-input" name="login-input">
            `;
            passwordField.hidden = true;
            break;
        case 'level-3':
            loginField.innerHTML = `
                <label for="username-input">Αριθμός Μητρώου:</label>
                <input type="text" id="username-input" name="username-input">
            `;
            passwordField.innerHTML = `
                <label for="password-input">Κωδικός:</label>
                <input type="password" id="password-input" name="password-input">
            `;
            passwordField.hidden = false;
            break;
        default:
            break;
    }
});

submitter.addEventListener("submit", (e)=>{
	e.preventDefault();
	window.location.href = "starting_page.html";
})