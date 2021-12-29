function contactPageLoad() {
    let flexContainer = document.querySelector('#flex-container');
    flexContainer.style.marginTop = '0vh';

    let contactWindow = document.createElement('div');
    contactWindow.className ='window contact-window';
    contactWindow.textContent = 'CONTACT US';

    flexContainer.appendChild(contactWindow);
}

export { contactPageLoad }