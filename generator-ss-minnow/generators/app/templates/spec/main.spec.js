/* global define, it, describe, before, beforeEach, after, afterEach, expect, spyOn, xdescribe, xit */
import Main from '../src/assets/scripts/main';

describe('Main class', () => {
    it('THEN instantiates the Main class', () => {
        const main = new Main();
        expect(main).toBeDefined();
    });

    describe('WHEN _disable is called', () => {
        it('THEN _destroy() is also called', () => {
            const main = new Main();
            spyOn(main, '_destroy');
            main._disable();
            expect(main._destroy).toHaveBeenCalled();
        });
    });
});
