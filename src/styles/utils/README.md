# CSS helper classes

List of common css classes, which you can use inside any components of application

## Display helpers

### `d-none`

Adds `display: none;` to element. Usage example:

```html
<div class="d-none">Always hidden</div>
<div class="d-none-md">Hidden on md breakpoint and higher</div>
```

### `d-flex`

Adds `display: flex;` to element. Usage example:

```html
<div class="d-flex">Always flex</div>
<div class="d-flex-md">Flex on md breakpoint and higher</div>
```

### `d-inline-flex`

Adds `display: inline-flex;` to element. Usage example:

```html
<div class="d-inline-flex">Always inline flex</div>
<div class="d-inline-flex-md">Inline flex on md breakpoint and higher</div>
```

### `d-block`

Adds `display: block;` to element. Usage example:

```html
<div class="d-block">Always block</div>
<div class="d-block-md">Block on md breakpoint and higher</div>
```

### `d-inline-block`

Adds `display: inline-block;` to element. Usage example:

```html
<div class="d-inline-block">Always inline block</div>
<div class="d-inline-block-md">Inline block on md breakpoint and higher</div>
```

### `d-inline`

Adds `display: inline;` to element. Usage example:

```html
<div class="d-inline">Always inline</div>
<div class="d-inline-md">Inline on md breakpoint and higher</div>
```

## Padding helpers

`$size` is a number **from 0 to 20**. This means, that in reality the size will be equal `$size * 4px`.

### `p-$size`

Adds padding for all sides. Usage example:

```html
<div class="p-1">Padding 4px</div>
<div class="p-md-4">Padding 16px on md breakpoint and higher</div>
```

### `pt-$size`

Adds padding for top side. Usage example:

```html
<div class="pt-1">Padding 4px</div>
<div class="pt-md-4">Padding 16px on md breakpoint and higher</div>
```

### `pb-$size`

Adds padding for bottom side. Usage example:

```html
<div class="pb-1">Padding 4px</div>
<div class="pb-md-4">Padding 16px on md breakpoint and higher</div>
```

### `pl-$size`

Adds padding for left side. Usage example:

```html
<div class="pl-1">Padding 4px</div>
<div class="pl-md-4">Padding 16px on md breakpoint and higher</div>
```

### `pr-$size`

Adds padding for right side. Usage example:

```html
<div class="pr-1">Padding 4px</div>
<div class="pr-md-4">Padding 16px on md breakpoint and higher</div>
```

### `px-$size`

Adds padding for x axis (left and right sides). Usage example:

```html
<div class="px-1">Padding 4px</div>
<div class="px-md-4">Padding 16px on md breakpoint and higher</div>
```

### `py-$size`

Adds padding for y axis (top and bottom sides). Usage example:

```html
<div class="py-1">Padding 4px</div>
<div class="py-md-4">Padding 16px on md breakpoint and higher</div>
```

## Margin helpers

`$size` is a number **from 0 to 20**. This means, that in reality the size will be equal `$size * 4px`.

### `m-$size`

Adds margin for all sides. Usage example:

```html
<div class="m-1">Margin 4px</div>
<div class="m-md-4">Margin 16px on md breakpoint and higher</div>
```

### `mt-$size`

Adds margin for top side. Usage example:

```html
<div class="mt-1">Margin 4px</div>
<div class="mt-md-4">Margin 16px on md breakpoint and higher</div>
```

### `mb-$size`

Adds margin for bottom side. Usage example:

```html
<div class="mb-1">Margin 4px</div>
<div class="mb-md-4">Margin 16px on md breakpoint and higher</div>
```

### `ml-$size`

Adds margin for left side. Usage example:

```html
<div class="ml-1">Margin 4px</div>
<div class="ml-md-4">Margin 16px on md breakpoint and higher</div>
```

### `mr-$size`

Adds margin for right side. Usage example:

```html
<div class="mr-1">Margin 4px</div>
<div class="mr-md-4">Margin 16px on md breakpoint and higher</div>
```

### `mx-$size`

Adds margin for x axis (left and right sides). Usage example:

```html
<div class="mx-1">Margin 4px</div>
<div class="mx-md-4">Margin 16px on md breakpoint and higher</div>
```

### `my-$size`

Adds margin for y axis (top and bottom sides). Usage example:

```html
<div class="my-1">Margin 4px</div>
<div class="my-md-4">Margin 16px on md breakpoint and higher</div>
```

## Text helpers

### `t-center`

Adds `text-align: center;` to element. Usage example:

```html
<div class="t-center">Centered text</div>
<div class="t-center-md">Centered text on md breakpoint and higher</div>
```

### `t-left`

Adds `text-align: left;` to element. Usage example:

```html
<div class="t-left">Text left</div>
<div class="t-left-md">Text left on md breakpoint and higher</div>
```

### `t-right`

Adds `text-align: right;` to element. Usage example:

```html
<div class="t-right">Text right</div>
<div class="t-right-md">Text right on md breakpoint and higher</div>
```

### `t-upper`

Adds `text-transform: uppercase;` to element. Usage example:

```html
<div class="t-upper">Text in uppercase</div>
<div class="t-upper-md">Text in uppercase on md breakpoint and higher</div>
```

### `t-lower`

Adds `text-transform: lowercase;` to element. Usage example:

```html
<div class="t-lower">Text in lowercase</div>
<div class="t-lower-md">Text in lowercase on md breakpoint and higher</div>
```

### `t-normal`

Adds `text-transform: none;` to element. Usage example:

```html
<div class="t-normal">Text normalized</div>
<div class="t-normal-md">Text normalized on md breakpoint and higher</div>
```

### `t-light`

Adds `font-weight: 300;` to element. Usage example:

```html
<div class="t-light">Thin text</div>
<div class="t-light-md">Thin text on md breakpoint and higher</div>
```

### `t-regular`

Adds `font-weight: 400;` to element. Usage example:

```html
<div class="t-regular">Regular text</div>
<div class="t-regular-md">Regular text on md breakpoint and higher</div>
```

### `t-medium`

Adds `font-weight: 500;` to element. Usage example:

```html
<div class="t-medium">Medium text</div>
<div class="t-medium-md">Medium text on md breakpoint and higher</div>
```

### `t-bold`

Adds `font-weight: 700;` to element. Usage example:

```html
<div class="t-bold">Bold text</div>
<div class="t-bold-md">Bold text on md breakpoint and higher</div>
```
