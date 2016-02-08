(function() {

    var $ = require('jquery-browserify');


    /**
     * Entry point for the application
     *
     * @class App
     */
    function App() {
        reutrn this._init();
    }

    /**
     * @method _init
     * @private
     * @chainable
     */
    App.prototype._init = function _init() {
        this.isEnabled = false;

        return this._setupHandlers()
                    ._createChildren()
                    ._enable();
    }

    /**
     * @method _setupHandlers
     * @private
     * @chainable
     */
    App.prototype._setupHandlers = function _setupHandlers() {
        return this;
    };

    /**
     * @method _createChildren
     * @private
     * @chainable
     */
    App.prototype._createChildren = function _createChildren() {
        return this;
    };

    /**
     * @method _enable
     * @private
     * @chainable
     */
    App.prototype._enable = function _enable() {
        if (this.isEnabled) {
            return this;
        }

        this.isEnabled = true;

        return this;
    };

    /**
     * @method _disable
     * @private
     * @chainable
     */
    App.prototype._disable = function _disable() {
        if (!this.isEnabled) {
            return this;
        }

        this.isEnabled = false;

        return this._destroy();
    };

    /**
     * @method _destroy
     * @private
     * @chainable
     */
    App.prototype._destroy = function _destroy() {
        return this;
    };


    return new App();
})();
