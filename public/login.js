async function loginFormHandler(event) {
    event.preventDefault();

    // Get username and password 
    const username = document.querySelector("#login-username").value.trim();
    const password = document.querySelector("#login-password").value.trim();

    if (username && password) {
        try {
            // Send a POST request to the login route 
            const response = await fetch("/api/user/login", {
                method: "POST",
                body: JSON.stringify({ username, password }), 

                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                
                document.location.replace("/dashboard");
            } else {
                
                alert(response.statusText);
            }
        } catch (err) {
            console.error("Error:", err); 
        }
    }
}

// Add event listener 
document.querySelector(".login-form").addEventListener("submit", loginFormHandler);

async function signUpHandler(event) {
    event.preventDefault();

    // Get username and password values
    const username = document.querySelector("#signup-username").value.trim();
    const password = document.querySelector("#signup-password").value.trim();

    // Check if both username and password are present

    if (username && password) {
        try {
            // Send a POST request to the server 

            const response = await fetch("/api/user", {
                method: "POST",
                body: JSON.stringify({ username, password }), 

                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                
                await document.location.replace("/dashboard");
            } else {
                
                alert(response.statusText);
            }
        } catch (error) {
            console.error("Error:", error); 

            alert("An error occurred while signing up."); 
        }
    }
}

// Add event listener to the sign up form
document.querySelector(".signup-form").addEventListener("submit", signUpHandler);
