import $ from 'jquery-browserify';
import App from './app';

$(document).ready(function() {
    var $element = $('[data-controller="js-app"]');
    var app = new App($element);
});