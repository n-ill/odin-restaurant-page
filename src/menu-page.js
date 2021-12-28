import cheesePizzaPic from './cheese-pizza.png';
import pepperoniPizzaPic from './pepperoni-pizza.png'

function menuPageLoad() {
    let flexContainer = document.querySelector('#flex-container');
    flexContainer.style.marginTop = '0vh';

    let menuWindow = document.createElement('div');
    menuWindow.className ='window menu-window';
    menuWindow.textContent = 'MENU';

    let menuItemContainer1 = document.createElement('div');
    menuItemContainer1.className = 'menu-item-container';

    let cheesePizza = document.createElement('img');
    cheesePizza.className = 'pizza-pics';
    cheesePizza.src = cheesePizzaPic;

    let cheesePizzaDescription = document.createElement('div');
    cheesePizzaDescription.textContent = '14 inch Cheese Pizza';

    menuItemContainer1.appendChild(cheesePizza);
    menuItemContainer1.appendChild(cheesePizzaDescription);

    menuWindow.appendChild(menuItemContainer1);


    let menuItemContainer2 = document.createElement('div');
    menuItemContainer2.className = 'menu-item-container';

    let pepperoniPizza = document.createElement('img');
    pepperoniPizza.className = 'pizza-pics';
    pepperoniPizza.src = pepperoniPizzaPic;

    let pepperoniPizzaDescription = document.createElement('div');
    pepperoniPizzaDescription.textContent = '14 inch Pepperoni Pizza';

    menuItemContainer2.appendChild(pepperoniPizza);
    menuItemContainer2.appendChild(pepperoniPizzaDescription);

    menuWindow.appendChild(menuItemContainer2);

    flexContainer.appendChild(menuWindow);

}

export { menuPageLoad }