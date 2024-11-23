document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault(); 

 
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;

  
    const formData = {
        jobTitle: jobTitle,
        email: email,
        company: company
    };

    try {
        const response = await fetch('https://your-api-endpoint.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

       
        if (response.ok) {
            const result = await response.json();
            alert('Registration successful: ' + JSON.stringify(result));
        } else {
            alert('Failed to register: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
