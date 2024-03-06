const logout = async () => {
    try {
        const response = await fetch("/api/user/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {
            // Redirect to login page if logout is successful
            document.location.replace("/login");
        } else {
            alert(response.statusText);
        }
    } catch (err) {
        console.error("Error:", err); 
    }
};

// Add event listener to logout button
document.querySelector("#logout").addEventListener("click", logout);
