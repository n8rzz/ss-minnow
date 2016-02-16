import $ from 'jquery-browserify';
import App from './app';

$(document).ready(function() {
    const $element = $('[data-controller="js-app"]');
    const app = new App($element);
});
