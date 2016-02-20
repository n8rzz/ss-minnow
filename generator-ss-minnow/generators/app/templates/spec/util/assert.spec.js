/* global define, it, describe, before, beforeEach, after, afterEach, expect, spyOn, xdescribe, xit */
import * as assert from '../../src/assets/scripts/util/assert.js';

const msg = 'An assertion message';
let UNDEFINED;
const DEFINED = 'defined';
const STRING = 'string';
const NUMBER = 33;
const OBJECT = { k: 'val' };
const ARRAY = [1, 2, 3, 4];

describe('Assert assertCondition helper', () => {
    it('THEN throws if the condition is false', () => {
        expect(() => {
            assert.assertCondition(typeof NUMBER === 'undefined', msg);
        }).toThrow(new TypeError(msg));
    });

    it('THEN does not throw if the condition is true', () => {
        expect(() => {
            assert.assertCondition(typeof NUMBER === 'number', msg);
        }).not.toThrow(new TypeError(msg));
    });
});

describe('Assert assertParameter helper', () => {
    const parameterErrorMessage = `Error with parameter: ${msg}`;

    it('THEN throws if the condition is false', () => {
        expect(() => {
            assert.assertParameter(typeof NUMBER === 'undefined', msg);
        }).toThrow(new Error(parameterErrorMessage));
    });

    it('THEN does not throw if the condition is true', () => {
        expect(() => {
            assert.assertParameter(typeof NUMBER === 'number', msg);
        }).not.toThrow(new TypeError(parameterErrorMessage));
    });
});

describe('Assert.isNumber helper', () => {
    it('THEN returns true if a number is passed', () => {
        expect(
            assert.isNumber(NUMBER)
        ).toBe(true);
    });

    it('THEN returns true if NaN is passed', () => {
        expect(
            assert.isNumber(NaN)
        ).toBe(true);
    });

    it('THEN returns false if a non-number is passed', () => {
        expect(
            assert.isNumber(STRING)
        ).toBe(false);
    });
});

describe('Assert.isDefined helper', () => {
    it('THEN returns true if the property is defined', () => {
        expect(
            assert.isDefined(DEFINED)
        ).toBe(true);
    });

    it('THEN returns false if the property is not defined', () => {
        expect(
            assert.isDefined(UNDEFINED)
        ).toBe(false);
    });
});

describe('Assert.isString helper', () => {
    it('THEN returns true if a string is passed', () => {
        expect(
            assert.isString(STRING)
        ).toBe(true);
    });

    it('THEN returns false if a non-string is passed', () => {
        expect(
            assert.isString(NUMBER)
        ).toBe(false);
    });
});

describe('Assert.isObject helper', () => {
    it('THEN returns true if an object is passed', () => {
        expect(
            assert.isObject(OBJECT)
        ).toBe(true);
    });

    it('THEN returns true if an array is passed', () => {
        expect(
            assert.isObject(ARRAY)
        ).toBe(true);
    });

    it('THEN returns false if a non-object is passed', () => {
        expect(
            assert.isObject(STRING)
        ).toBe(false);
    });
});

describe('Assert.isArray helper', () => {
    it('THEN returns true if an array is passed', () => {
        expect(
            assert.isArray(ARRAY)
        ).toBe(true);
    });

    it('THEN returns true if an object is passed', () => {
        expect(
            assert.isArray(OBJECT)
        ).toBe(false);
    });

    it('THEN returns false if a non-array is passed', () => {
        expect(
            assert.isArray(STRING)
        ).toBe(false);
    });
});
