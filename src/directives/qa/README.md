# QA directive

This directive adds special HTML attributes for QA testing.

> :warning: Don't use this directive on Framework components which have `qa` property,
> because the `qa` property do the same.

## Example

```vue
<ui-checkbox v-qa="'checkbox'" v-qa.checked="true" v-qa.test />
```

In DOM it looks like:

```html
<div data-qa="checkbox" data-qa-checked="true" data-qa-test>
  ...
</div>
```
