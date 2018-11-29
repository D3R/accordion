# Accordion
Simple accordion package

# Recommended markup

## Single
A single accordion.

```
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger">Accordion title</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is some sample text</p>
        </div>
    </div>
</div>
```

```javascript
var accordion = new Accordion({
    selector: '.js-accordion',
    selectorTrigger: '.js-accordion__trigger'
});
```

## List
A list of accordions. When an accordion is opened, any currently open accordions are closed.

```html
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger">Accordion title 1</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is some sample text</p>
        </div>
    </div>
</div>
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger">Accordion title 2</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is some more sample text</p>
        </div>
    </div>
</div>
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger">Accordion title 3</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is a little but more sample text</p>
        </div>
    </div>
</div>
```

```javascript
var accordion = new Accordion({
    selector: '.js-accordion',
    selectorTrigger: '.js-accordion__trigger',
    limit: 'all'
});
```

## Groups
A list of accordions, split into groups. When an accordion is opened, any currently open accordions that belong to the same group (e.g. group_1, group_2) are closed.

```html
<h1>Group 1</h1>
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger" data-accordion-group="group_1">Accordion title 1.1</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is some sample text</p>
        </div>
    </div>
</div>
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger" data-accordion-group="group_1">Accordion title 1.2</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is some more sample text</p>
        </div>
    </div>
</div>
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger" data-accordion-group="group_1">Accordion title 1.3</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is a little but more sample text</p>
        </div>
    </div>
</div>
<h1>Group 2</h1>
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger" data-accordion-group="group_2">Accordion title 2.1</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is some sample text</p>
        </div>
    </div>
</div>
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger" data-accordion-group="group_2">Accordion title 2.2</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is some more sample text</p>
        </div>
    </div>
</div>
<div class="accordion js-accordion>
    <div class="accordion__head js-accordion__trigger" data-accordion-group="group_2">Accordion title 2.3</div>
    <div class="accordion__wrap">
        <div class="richtext accordion__body">
            <p>This is a little but more sample text</p>
        </div>
    </div>
</div>
```

```javascript
var accordion = new Accordion({
    selector: '.js-accordion',
    selectorTrigger: '.js-accordion__trigger',
    limit: 'group'
});
```

# Options

Option | Type | default | Description
--- | --- | --- | --- |
selector | selector | '.js-accordion' | The element that is the base of the accordion
selectorTrigger | selector | '.js-accordion__trigger' | The element that acts as the trigger within the accordion, ideally within the top of the *selector*
limit | string | null | Determine if currently open accordions should be closed when a new one is opened. 'group' affects those within the same group, 'all' affects all within the instance of the plugin, null ignores this
scrollTo | boolean | true | Should the opened accordion be scrolled into view?
preDelay | int | 1 | Time elapsed before the accordion opens or closes
postDelay | int | 500 | Time elapsed before the *afterOpen* or *afterClose* function is called
scrollDuration | int | 500 | Time elapsed for the accordion to be scrolled into view
openOnLoad | boolean, object | false | Should an accordion be opened on load? If the boolean value is true, then the first item is opened. If a valid element selector is provided, then this item is opened
animate | boolean | true | Should the accordion use animations?
toggling | boolean | true | Can an accordion be closed by clicking on it when it is open
beforeOpen | function | empty | A function to be called before the accordion is opened
afterOpen | function | empty | A function to be called after the accordion is opened
beforeClose | function | empty | A function to be called before the accordion is closed
afterClose | function | empty | A function to be called after the accordion is closed
afterResize | function | empty | A function to be called after the window has been resized
