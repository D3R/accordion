/**
 * Mail exposed plugin for the grid
 */
export class Accordion
{
    /**
     * Construct the object and build the initial elements
     *
     * @param {string} selector
     */
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.bind();
    }

    /**
     * Bind all relavent events
     */
    bind() {
        this.delegate('click', '.accordion', (e) => {
        });
    }
}
