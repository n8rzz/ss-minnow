import App from '../src/assets/scripts/app';

describe('App class', () => {
    it('THEN instantiates the App class', () => {
        const app = new App();
        expect(app).toBeDefined();
    });

    describe('WHEN disabled is called', () => {
        let app;

        beforeEach(() => {
            app = new App();
        });

        it('THEN isEnabled after instantiation', () => {
            expect(app.isEnabled).toBe(true);
        });

        it('THEN is not enabled after .disable() is called', () => {
            app._disable();
            expect(app.isEnabled).not.toBe(true);
        });
    });
});
