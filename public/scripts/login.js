window.scrollTo({ top: 0});
document.body.style.overflow = "hidden";
document.body.style.height = "100 %";

// Get DOM elements
const userType = document.getElementById("user_type");
const loginField = document.querySelector("#login_field");
const passwordField = document.querySelector("#password_field");
const submitter = document.querySelector("#login_form");

userType.value = "level_1";

loginField.innerHTML = `
    <label for="login_input">Ονοματεπώνυμο:</label>
    <input type="text" id="login_input" name="login_input" autocomplete="off">
`;

// Add event listener to permission level dropdown
userType.addEventListener("change", () => {
  // Show/hide login/password fields based on permission level
    switch (userType.value) {
        case "level_1":
            loginField.innerHTML = `
                <label for="login_input">Ονοματεπώνυμο:</label>
                <input type="text" id="login_input" name="login_input" autocomplete="off">
            `;
            passwordField.hidden = true;
            break;
        case "level_2":
            loginField.innerHTML = `
                <label for="login_input">Αριθμός Μητρώου:</label>
                <input type="text" id="login_input" name="login_input" autocomplete="off">
            `;
            passwordField.hidden = true;
            break;
        case "level_3":
            loginField.innerHTML = `
                <label for="username_input">Αριθμός Μητρώου:</label>
                <input type="text" id="username_input" name="login_input" autocomplete="off">
            `;
            passwordField.innerHTML = `
                <label for="password_input">Κωδικός:</label>
                <input type="password" id="password_input" name="password_input" autocomplete="off">
            `;
            passwordField.hidden = false;
            loginField.style.margin = "0px";
            break;
        default:
            break;
    }
});

submitter.addEventListener("submit", (e)=>{
	e.preventDefault(); 

    const formData = new FormData(submitter);
    const loginData = {
        userType: userType.value,
        username: formData.get("login_input"),
        password: formData.get("password_input")
    };

    fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      })
        .then(response => {
            if (response.ok) {
                console.log("Login successful");
                window.location.href = response.url;
            } else {
                console.log("Login failed");
            }
        })
        .catch(error => {
          console.error("Error:", error);
    });
});