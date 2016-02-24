/* global define, it, describe, before, beforeEach, after, afterEach, expect, spyOn, xdescribe, xit */
import Main from '../src/assets/scripts/main';

describe('Main class', () => {
    it('THEN instantiates the Main class', () => {
        const main = new Main();
        expect(main.$element).toBeDefined();
        expect(main.app).toBeDefined();
    });

    describe('WHEN _disable is called', () => {
        it('THEN _destroy() is also called', () => {
            const main = new Main();
            spyOn(main, '_destroy');
            main._disable();
            expect(main._destroy).toHaveBeenCalled();
        });

        it('AND Main\'s internal properties are reset', () => {
            const main = new Main();
            main._destroy();
            expect(main.$element).toBe(null);
            expect(main.app).toBe(null);
        });
    });
});
