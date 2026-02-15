// Modal Logic
function setupModal(triggerId, modalId, closeId) {
    const trigger = document.getElementById(triggerId);
    const modal = document.getElementById(modalId);
    const close = document.getElementById(closeId);

    trigger.onclick = (e) => { e.preventDefault(); modal.style.display = "block"; }
    close.onclick = () => modal.style.display = "none";
    window.addEventListener('click', (e) => { if (e.target == modal) modal.style.display = "none"; });
}

setupModal('menuTrigger', 'menuModal', 'closeMenu');
setupModal('contactTrigger', 'contactModal', 'closeContact');

// Tab Logic for Menu
function openTab(evt, tabName) {
    let content = document.getElementsByClassName("tab-content");
    for (let i = 0; i < content.length; i++) content[i].style.display = "none";

    let buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) buttons[i].className = buttons[i].className.replace(" active", "");

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
