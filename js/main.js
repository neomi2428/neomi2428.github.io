/*jslint browser:true*/
/*global window*/
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

const initialize = () => {
    loadTemplates('a ');
    loadFont();
};

window.onload = initialize();