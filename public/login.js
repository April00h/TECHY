const loginFormHandler = async (event) => {
    event.preventDefault();

    // Get username and password input values
    const username = document.querySelector("#login-username").value.trim();
    const password = document.querySelector("#login-password").value.trim();

    // Check if both username and password are provided
    if (username && password) {
        try {
            
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
};

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
