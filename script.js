document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. AUTOMATION: EXPIRY DATE CALCULATION ---
    const setExpiryDate = () => {
        const today = new Date();
        const expiry = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = expiry.toLocaleDateString(undefined, options);
        
        document.getElementById('expiry_date').value = formattedDate;
    };
    setExpiryDate();

    // --- 2. AUTOMATION: EMAILJS SUBMISSION ---
    const emailForm = document.getElementById('automation-form');
    const statusMsg = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // IDs provided by NK Digital Services / Mrtechnician
        const serviceID = 'service_h6rqwqd';
        const templateID = 'template_a31dujf';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                submitBtn.innerText = 'Claim My 10% Off';
                submitBtn.disabled = false;
                statusMsg.style.color = "#d4af37";
                statusMsg.innerText = "Check your inbox! Your 10% discount is on the way.";
                emailForm.reset();
                setExpiryDate(); 
            }, (err) => {
                submitBtn.innerText = 'Claim My 10% Off';
                submitBtn.disabled = false;
                statusMsg.style.color = "red";
                statusMsg.innerText = "Oops! Something went wrong. Please try again.";
                console.log('EmailJS Error:', err);
            });
    });

    // --- 3. MODAL CONTROLS (Menu & Contact) ---
    const menuModal = document.getElementById('menuModal');
    const contactModal = document.getElementById('contactModal');
    
    const menuTrigger = document.getElementById('menuTrigger');
    const contactTrigger = document.getElementById('contactTrigger');
    
    const closeMenu = document.getElementById('closeMenu');
    const closeContact = document.getElementById('closeContact');

    menuTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        menuModal.style.display = 'block';
    });

    contactTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.style.display = 'block';
    });

    closeMenu.onclick = () => menuModal.style.display = 'none';
    closeContact.onclick = () => contactModal.style.display = 'none';

    window.onclick = (event) => {
        if (event.target == menuModal) menuModal.style.display = 'none';
        if (event.target == contactModal) contactModal.style.display = 'none';
    };
});

// --- 4. MENU TAB LOGIC ---
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
      }
