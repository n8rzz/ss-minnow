/**
 * Copyright (c) 2012-2015 Adam Ranfelt
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * trigger, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * assert utility
 * @author Adam Ranfelt <adamRenny@gmail.com>
 */
export function assertCondition(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

export function assertParameter(condition, message) {
    if (!condition) {
        throw new TypeError('Error with parameter: ' + message);
    }
}

export function isNumber(property) {
    return typeof property === 'number';
}

export function isDefined(property) {
    return typeof property !== 'undefined';
}

export function isString(property) {
    return typeof property === 'string';
}

export function isObject(property) {
    return typeof property === 'object';
}

export function isArray(object) {
    return object instanceof Array;
}
