/*jslint browser:true*/
/*global window*/

const loadFont = () => {
    var link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Open+Sans';
    link.rel = 'stylesheet';
    document.head.insertAdjacentElement('afterbegin', link);
};

const initialize = () => {
    loadFont();
};

const MainContent = { template: '<div>Hello World!</div>' };
const AboutContent = { template: '<div>About</div>' };

const routes = [
    { path: '/', component: MainContent },
    { path: '/about', component: AboutContent }
];

const router = new VueRouter({
    mode: 'history',
    routes  // same as routes: routes
});

const app = new Vue({
    router
}).$mount('#app');

window.onload = initialize();
