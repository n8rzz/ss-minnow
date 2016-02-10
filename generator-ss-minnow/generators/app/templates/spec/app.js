var App = require('../src/assets/scripts/app');

describe('App', function() {
    beforeEach(function() {
        var app = new App();
    });

    it('THEN instantiates the App class', function() {
        expect(app).toBeDefined();
    });
});
