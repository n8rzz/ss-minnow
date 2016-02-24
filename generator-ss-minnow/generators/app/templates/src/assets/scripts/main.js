import $ from 'jquery-browserify';
import App from './app';

/**
 * Entry point for the app.
 * This class is responsable for finding the container html element and passing it
 * to the App class.
 *
 * @class Main
 */
export default class Main {
    constructor() {
        this.$element = null;
        this.app = null;

        return this._createChildren()
                    ._enable();
    }

    /**
     * @private
     * @method _createChildren
     * @chainable
     */
    _createChildren() {
        this.$element = $('.js-app');
        this.app = new App(this.$element);

        return this;
    }

    /**
     * @private
     * @method _enable
     * @chainable
     */
    _enable() {
        return this;
    }

    /**
     * @private
     * @method _disable
     * @chainable
     */
    _disable() {
        return this._destroy();
    }

    /**
     * @private
     * @method _destroy
     * @chainable
     */
    _destroy() {
        this.$element = null;
        this.app = null;

        return this;
    }
}
