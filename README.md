# accordion
Simple accordion package

# Recommended markup
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

A list of accordions.

```
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
    limit: 'page'
});
```

A list of accordions, split into groups.

```
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
