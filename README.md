# accordion
Simple accordion package

# Recommended markup
A basic example

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
