import jump from 'jump.js'
import debounce from 'debounce';
import elementClosest from 'element-closest';

/**
 * Accordion plugin
 */
export class Accordion
{
    /**
     * Construct the object and build the initial elements
     *
     * @param {string} selector
     */
    constructor(options) {
        this.default = {
            limit: null,
            scrollTo: true,
            beforeOpen: function() {},
            afterOpen: function() {},
            beforeClose: function() {},
            afterClose: function() {},
            afterResize: function() {},
            preDelay: 1,
            postDelay: 500,
            scrollDuration: 500,
            openOnLoad: false,
            animate: true
        };

        this.options = Object.assign({}, this.default, options);

        this.element = document.querySelectorAll('.accordion');

        this.checkAnimation();
        this.bind();
    }

    /**
     * Decide if the accordion will be animated or not
     */
    checkAnimation() {
        if (this.options.animate) {
            for (const el of this.element) {
                el.classList.add('accordion--animate');
            }
        }
    }

    /**
     * Bind all relevant events
     */
    bind() {
        // On click
        this.delegate('click', this.options.selector, (e) => {

            const element = e.parentNode;

            if (element.classList.contains('accordion--active')) {
                this.deactivate(element, true);
            } else {
                this.activate(element, true);
            }
        });

        // On page load
        window.onload = (e) => {
            if (window.location.hash) {
                // If there is a URL hash, and the element concerned is an accordion, then activate it
                if (document.querySelector(window.location.hash).classList.contains('accordion')) {
                    this.activate(document.querySelector(window.location.hash));
                }
            } else if (this.options.openOnLoad) {
                if (typeof this.options.openOnLoad == 'boolean' && this.options.openOnLoad) {
                    // If openOnLoad is set to true, then activate the first accordion on the page
                    this.activate(this.element[0]);
                } else if (typeof this.options.openOnLoad == 'object') {
                    // If openOnLoad is an object, and the element concerned is an accordion, then activate it
                    if (this.options.openOnLoad.classList.contains('accordion')) {
                        this.activate(this.options.openOnLoad);
                    }
                }
            }
        }

        // On window resize
        if (typeof this.options.afterResize == 'function') {
            window.onresize = debounce(this.options.afterResize, 200);
        }
    }

    /**
     * Activate the accordion
     *
     * @param {Element} element
     * @param {Boolean} clicked
     */
    activate(element, clicked) {
        this.beforeOpen(element, clicked);
        this.open(element, clicked);
        this.afterOpen(element, clicked);
    }

    /**
     * Deactivate the accordion
     *
     * @param {Element} element
     * @param {Boolean} clicked
     */
    deactivate(element, clicked) {
        this.beforeClose(element, clicked);
        this.close(element, clicked);
        this.afterClose(element, clicked);
    }

    /**
     * Add event delegate
     *
     * @param {string} event
     * @param {string} selector
     * @param {function} callback
     */
    delegate(event, selector, callback)
    {
        document.addEventListener(event, (e) => {
            if (e.target) {
                if (e.target.matches(selector)) {
                    callback(e.target);
                } else if (e.target.closest(selector)) {
                    callback(e.target.closest(selector));
                }
            }
        });
    }

    /**
     * Additional function(s) to be called before the accordion is opened
     * Close currently open accordion(s) - if set in options
     *
     * @param {Element} element
     */
    beforeOpen(element, clicked) {
        if (this.options.limit == 'group') {
            this.closeOthers(element);
        } else if (this.options.limit == 'page') {
            this.closeOthers();
        }
        if (typeof this.options.beforeOpen == 'function' && clicked) {
            this.options.beforeOpen();
        }
    }

    /**
     * Open the accordion
     *
     * @param {Element} element
     */
    open(element, clicked) {
        let self = this;

        setTimeout(function() {
            element.classList.add('accordion--active');
            if (self.options.animate) {
                element.querySelector('.accordion__wrap').style.maxHeight = element.querySelector('.accordion__body').clientHeight + 'px';
            }
            if (self.options.scrollTo && !self.options.animate && clicked) {
                window.scrollTo(0, element.offsetTop);
            }
        }, this.options.preDelay);
    }

    /**
     * Additional function(s) to be called after the accordion is opened
     *
     * @param {Element} element
     */
    afterOpen(element, clicked) {
        let self = this;

        setTimeout(function() {
            if (self.options.animate) {
                element.querySelector('.accordion__wrap').style.maxHeight = 'none';
            }
            if (clicked) {
                if (typeof self.options.afterOpen == 'function') {
                    self.options.afterOpen();
                }
                if (self.options.scrollTo && self.options.animate) {
                    jump(element, {
                        duration: self.options.scrollDuration
                    })
                }
            }
        }, this.options.postDelay);
    }

    /**
     * Additional function(s) to be called before the accordion is closed
     *
     * @param {Element} element
     */
    beforeClose(element, clicked) {
        if (clicked && typeof this.options.beforeClose == 'function') {
            this.options.beforeClose();
        }
        if (this.options.animate) {
            element.querySelector('.accordion__wrap').style.maxHeight = element.querySelector('.accordion__body').clientHeight + 'px';
        }
    }

    /**
     * Close the accordion
     *
     * @param {Element} element
     */
    close(element, clicked) {
        let self = this;

        setTimeout(function() {
            element.classList.remove('accordion--active');
            if (self.options.animate) {
                element.querySelector('.accordion__wrap').style.maxHeight = 0;
            }
        }, this.options.preDelay);
    }

    /**
     * Additional function(s) to be called after the accordion is closed
     *
     * @param {Element} element
     */
    afterClose(element, clicked) {
        let self = this;

        setTimeout(function() {
            if (clicked && typeof self.options.afterClose == 'function') {
                self.options.afterClose();
            }
        }, this.options.postDelay);
    }

    /**
     * Close all currently open accordions, within the specified set (group or page)
     *
     * @param {Element} element
     */
    closeOthers(element) {
        let group = this.element;
        if (element != undefined) {
            group = document.querySelectorAll('[data-accordion-group="' + element.getAttribute('data-accordion-group') + '"]');
        }
        for (const el of group) {
            if (el.classList.contains('accordion--active')) {
                this.deactivate(el);
            }
        }
    }

    /**
     * Click an accordion externally
     *
     * @param {Element} element
     */
    triggerClick(element) {
        element.querySelector(this.options.selector).click();
    }

    /**
     * Show an accordion externally
     *
     * @param {Element} element
     */
    triggerShow(element) {
        if (!element.classList.contains('accordion--active')) {
            // If the accordion is deactivate, activate it
            element.querySelector(this.options.selector).click();
        } else {
            // Otherwise, show the accordion
            if (this.options.scrollTo) {
                if (this.options.animate) {
                    jump(element, {
                        duration: this.options.scrollDuration
                    })
                } else {
                    window.scrollTo(0, element.offsetTop);
                }
            }
        }
    }
}
