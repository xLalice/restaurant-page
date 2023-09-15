import { createInitialPage } from './initialPageModule';
import { createMenuPage } from './menuPage';
import { createContactPage } from './contactPage';
import "./styles.css"

let activeTab = 'Home';

function toggleColor() {
    const links = document.querySelectorAll('ul > li > a');

    links.forEach((link) => {
      if (link.style.color === 'black') {
        link.style.color = 'white';
      } else {
        link.style.color = 'black';
      }
    });
}

function wipeout(){
    const content = document.querySelector("#content")
    content.innerHTML = ""
}

function createNavItem(text, link) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = text;
    a.href = link;
    li.appendChild(a);
    return li;
}

function switchTab(moduleFunction, tabName) {
    wipeout();
    moduleFunction();
    activeTab = tabName; 
  }

const ul = document.createElement('ul');
ul.id = "nav-menu"



const home = createNavItem('Home', '#');
home.addEventListener("click", (event) => {
    switchTab(createInitialPage.addHeader, 'Home');
    if (activeTab !== "Menu"){
        toggleColor()
    }
})

const menu = createNavItem('Menu', '#menu');
menu.addEventListener("click", (event) => {
    switchTab(createMenuPage.addmenu, 'Menu');
    if (activeTab !== "Menu" || activeTab !== "Contacts"){
        toggleColor()
    }
})

const contacts = createNavItem('Contacts', '#contacts');
contacts.addEventListener("click", (event) => {
    if (activeTab === "Home"){
        toggleColor()
    }
    switchTab(createContactPage, 'Contacts'); 
  
})
ul.appendChild(home);
ul.appendChild(menu);
ul.appendChild(contacts);


document.body.appendChild(ul)

createInitialPage.addHeader()



