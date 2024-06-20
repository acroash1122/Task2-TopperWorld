
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contactForm');
        const formOutput = document.getElementById('formOutput');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting

            // Fetch form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Example: Display confirmation message
            formOutput.innerHTML = `<p>Thank you, ${name}, for your message!</p>`;

            // Optionally, you can reset the form after submission
            form.reset();
        });
    });
