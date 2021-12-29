function contactPageLoad() {
    let flexContainer = document.querySelector('#flex-container');
    flexContainer.style.marginTop = '0vh';

    let contactWindow = document.createElement('div');
    contactWindow.className ='window contact-window';
    contactWindow.textContent = 'CONTACT US';

    let info = document.createElement('div');
    info.className = 'contact-info';
    info.textContent = 'If you would like to place an order please call us at: (555)555-5555';

    let info2 = document.createElement('div');
    info2.className = 'contact-info';
    info2.textContent = 'If you have any other questions please call us at (555)555-5556';

    contactWindow.appendChild(info);
    contactWindow.appendChild(info2);
    flexContainer.appendChild(contactWindow);
}

export { contactPageLoad }