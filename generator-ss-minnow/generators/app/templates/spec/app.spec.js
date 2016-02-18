/* global define, it, describe, before, beforeEach, after, afterEach, expect, spyOn, xdescribe, xit */
import App from '../src/assets/scripts/app';

describe('App class', () => {
    it('THEN instantiates the App class', () => {
        const app = new App();
        expect(app).toBeDefined();
    });

    it('THEN isEnabled is set to true after instantiation', () => {
        const app = new App();
        expect(app.isEnabled).toBe(true);
    });

    describe('WHEN disabled is called', () => {
        let app;

        beforeEach(() => {
            app = new App();
        });

        afterEach(() => {
            app = null;
        });

        it('THEN isEnabled is set to false', () => {
            expect(app.isEnabled).toBe(true);
            app._disable();
            expect(app.isEnabled).toBe(false);
        });

        it('THEN isEnabled is false if it was previously set to false', () => {
            app._disable();
            expect(app.isEnabled).toBe(false);
            app._disable();
            expect(app.isEnabled).toBe(false);
        });
    });

    describe('WHEN enabled is called', () => {
        let app;

        beforeEach(() => {
            app = new App();
        });

        afterEach(() => {
            app = null;
        });

        it('THEN isEnabled is set to true', () => {
            app._disable();
            expect(app.isEnabled).toBe(false);
            app._enable();
            expect(app.isEnabled).toBe(true);
        });

        it('THEN isEnabled is true if it was previously set to true', () => {
            expect(app.isEnabled).toBe(true);
            app._enable();
            expect(app.isEnabled).toBe(true);
        });
    });
});
