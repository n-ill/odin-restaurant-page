import pizzaIcon from './chicago-pizza-icon.png';

function initialPageLoad() {
    let content = document.getElementById('content');

    let header = document.createElement('div');
    header.id = 'header';

    let icon = document.createElement('img');
    icon.id = 'icon';
    icon.src = pizzaIcon;
    icon.alt = 'Deep dish pizza icon';

    let h1 = document.createElement('h1');
    h1.textContent = 'CHICAGO DEEP DISH PIZZA';

    let menu = document.createElement('a');
    menu.id = 'menu';
    menu.textContent = 'MENU';

    let contact = document.createElement('a');
    contact.textContent = 'CONTACT US';
    contact.id = 'contact';

    header.appendChild(icon);
    header.appendChild(h1);
    header.appendChild(menu);
    header.appendChild(contact);
    content.appendChild(header);

    let flexContainer = document.createElement('div');
    flexContainer.id = 'flex-container';

    let claim = document.createElement('div');
    claim.id = 'claim';
    claim.textContent = 'THE BEST DEEP DISH PIZZA IN THE ENTIRE USA';

    flexContainer.appendChild(claim);
    content.appendChild(flexContainer);
}

export { initialPageLoad };