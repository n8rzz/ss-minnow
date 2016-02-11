import App from '../src/assets/scripts/app';

describe('App', () => {
    var app;

    beforeEach(() => {
        app = new App();
    });

    it('THEN instantiates the App class', () => {
        expect(app).toBeDefined();
    });
});
