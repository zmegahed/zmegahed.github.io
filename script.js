// Simple contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Displaying an alert with form details
    alert(`Thank you ${name}!\nYour message: "${message}" has been sent from ${email}.`);
    
    // Reset form after submission
    document.getElementById('contactForm').reset();
});