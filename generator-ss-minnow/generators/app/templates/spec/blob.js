import { blob } from '../src/assets/scripts/blob';

describe('Blob', () => {
    var b;

    beforeEach(() => {
        b = blob();
    });

    it('THEN calls the blob function', () => {
        expect(b).toBe(true);
    });
});