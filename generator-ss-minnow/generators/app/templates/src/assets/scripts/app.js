import $ from 'jquery-browserify';
import _ from 'lodash';

/**
 * @class App
 */
export default class App {
    constructor() {
        this.isEnabled = false;

        return this._createChildren()
                   ._enable();
    }

    /**
     * @method _createChildren
     * @private
     * @chainable
     */
    _createChildren() {
        return this;
    }

    /**
     * @method _enable
     * @private
     * @chainable
     */
    _enable() {
        if (this.isEnabled) {
            return this;
        }

        this.isEnabled = true;

        return this;
    }

    /**
     * @method _disable
     * @private
     * @chainable
     */
    _disable() {
        if (!this.isEnabled) {
            return this;
        }

        this.isEnabled = false;

        return this._destroy();
    }

    /**
     * @method _destroy
     * @private
     * @chainable
     */
    _destroy() {
        return this;
    }
}