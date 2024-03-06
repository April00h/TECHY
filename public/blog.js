// Function to handle creating a new blog
async function newBlogHandler(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the input values for the new blog's title and description
    const title = document.querySelector('#newblog-title').value.trim();
    const description = document.querySelector('#newblog-description').value.trim();

    try {
        // Send a POST request to the server to create a new blog 
        await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ name: title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        // Redirect to the dashboard page after blog creation

        document.location.replace('/dashboard');
    } catch (error) {
        console.error('Error:', error); // Log any errors 

        alert('An error occurred while creating the blog.');
    }
}

document.querySelector('.newblog-form').addEventListener('submit', newBlogHandler);
