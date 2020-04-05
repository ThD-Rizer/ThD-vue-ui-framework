# Plugins

For better development experience, Framework has plugins, which will be helpful for developer to work with different parts of application.

## Installation

Framework plugins already installed if you are using global installation like this.

```js
import Vue from 'vue';
import UI from '@moex/ui-framework';

Vue.use(UI);
```

If you don't, you can install Framework plugins manually like in example bellow.

```js
import Vue from 'vue';
import { FrameworkPlugin, ComponentsPlugin, DirectivesPlugin } from '@moex/ui-framework';

Vue.use(FrameworkPlugin);  // global helpers
Vue.use(ComponentsPlugin); // all components
Vue.use(DirectivesPlugin); // all directives
```

## Usage

You can use build-in features of `FrameworkPlugin` through `this.$ui` inside Vue components.

#### `$version`

Current Framework version

#### `$appContainer`

Instance of [uiApp](../components/uiApp/README.md) component

## Service-plugins

`FrameworkPlugin` includes all core service-plugins inside like `$notifications` and many more.
Of course, you can include only what you need.

```js
Vue.use(FrameworkPlugin, [
  'notifications',
]);
```

List of all service-plugins which you can use through `$ui`:

* [$notifications](./plugins/notifications/README.md)
