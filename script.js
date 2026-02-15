document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');
    const responseMsg = document.getElementById('responseMsg');

    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('userEmail').value;

        // Visual feedback for the owner (Simulation of Automation)
        responseMsg.style.color = "green";
        responseMsg.innerText = "Processing... Welcome to the Inner Circle!";

        // In a real project, you would use fetch() to send this to Mailchimp API
        console.log(`New Lead captured for Himalayan Java: ${email}`);

        // Reset form
        setTimeout(() => {
            leadForm.reset();
            responseMsg.innerText = "Success! Check your inbox for your 10% discount.";
        }, 2000);
    });

    // Simple Video Play/Pause Logic
    const video = document.getElementById('brandVideo');
    video.addEventListener('click', () => {
        if (video.paused) video.play();
        else video.pause();
    });
});
