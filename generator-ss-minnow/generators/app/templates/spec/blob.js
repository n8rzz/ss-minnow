var Blob = require('../src/assets/scripts/blob');

describe('Blob', function() {
    var blob;

    beforeEach(function() {
        blob = Blob();
    });

    it('THEN calls the blob function', function() {
        expect(blob).toBe(true);
    });
});