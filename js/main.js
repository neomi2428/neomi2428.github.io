/*jslint browser:true*/
/*global window*/

// This method is for template/main.html
// It dynamically loads DOMs in the above file.
const loadTemplates = (a) => {
    var load = a.concat('load event detected!');
    console.log(load);

    var mainHtml = document.querySelector('link[rel="import"]');
    var content = mainHtml.import;

    var header = content.querySelector('header');
    var nav = content.querySelector('nav');
    document.body.insertAdjacentElement('afterbegin', nav.cloneNode(true));
    document.body.insertAdjacentElement('afterbegin', header.cloneNode(true));
};

const loadFont = () => {
    var link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Open+Sans';
    link.rel = 'stylesheet';
    document.head.insertAdjacentElement('afterbegin', link);
};

class MenuHandler {
    // menuArray should have id and url properties
    // add validation steps to make sure this
    constructor (menuArray) {
        this.menuArray = menuArray
        this.homeMenu = menuArray[0]
        this.currentMenuClassName = "current-menu"
    }
    initialize() {
        for (var menu of this.menuArray) {
            (function(menuModel) {

                var menuElement = document.getElementById(menuModel.id);
                if (menuModel.id === this.homeMenu.id) {
                    menuElement.classList.add(this.currentMenuClassName);
                }

                menuElement.addEventListener("click", (function() {
                    this.onClick(menuModel, menuElement);
                }).bind(this), false);

            }).bind(this)(menu);
        }
    }
    onClick(menuModel, menuElement) {
        history.pushState(menuModel, menuModel.id, menuModel.url);
        this.selectMenu(menuElement);
        document.getElementsByTagName('content')[0].innerHTML = menuModel.content;
    }
    selectMenu(menuElement) {
        for (var menu of this.menuArray) {
            document.getElementById(menu.id).classList.remove(this.currentMenuClassName);
        }
        menuElement.classList.add(this.currentMenuClassName);
    }
}

const setContent = (content) => {
    ;
};

const initialize = () => {
    loadFont();
    menuHandler.initialize();
    history.replaceState(menuHandler.homeMenu, menuHandler.homeMenu.id, "");
};

const menuHandler = new MenuHandler([
    { "id": "home-menu", "url": "home", "content": "Hello, World!" },
    { "id": "about-menu", "url": "about", "content": "About" }
]);

window.onload = initialize();
window.onpopstate = function(event) {
    if (event.state) {
        var menuModel = event.state;
        menuHandler.selectMenu(document.getElementById(menuModel.id));
        document.getElementsByTagName('content')[0].innerHTML = menuModel.content;
    }
}