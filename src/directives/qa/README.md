# QA директива

Эта директива добавляет специальные атрибуты HTML для QA тестирования.

> :warning: не используйте эту директиву для компонентов фреймворка, которые имеют свойство `qa`,
> потому что свойство `qa` делает то же самое.

## Пример

```vue
<UiCheckbox v-qa="'checkbox'" v-qa.checked="true" v-qa.test />
```

В DOM это выглядит так:

```html
<div data-qa="checkbox" data-qa-checked="true" data-qa-test>
  ...
</div>
```
