# @thd/vue-ui-framework (v0.27.8)

Библиотека с компонентами пользовательского интерфейса для Vue.js/Nuxt.js.

## Демо стэнд

[vue-ui-framework.thd-dev.ru](http://vue-ui-framework.thd-dev.ru/)

## Изменения

Все выпуски с описанием функций, изменений и исправлений вы можете найти в [CHANGELOG](./CHANGELOG.md).

## Содержание

1. [Установка](#installation)
2. [Использование](#usage)
3. Компоненты
   * Сетка
     * [UiContainer](./src/components/UiContainer/README.md)
     * [UiRow](./src/components/UiRow/README.md)
     * [UiCol](./src/components/UiCol/README.md)
   * Типография
     * [UiIcon](./src/components/UiIcon/README.md)
     * [UiLink](./src/components/UiLink/README.md)
     * [UiText](./src/components/UiText/README.md)
   * Кнопки
     * [UiButton](./src/components/UiButton/README.md)
     * [UiButtonGroup](./src/components/UiButtonGroup/README.md)
     * [UiButtonHamburger](./src/components/UiButtonHamburger/README.md)
   * Формы
     * [UiInput](./src/components/UiInput/README.md)
     * [UiTextarea](./src/components/UiTextarea/README.md)
     * [UiCheckbox](./src/components/UiCheckbox/README.md)
     * [UiCheckboxGroup](./src/components/UiCheckboxGroup/README.md)
     * [UiRadio](./src/components/UiRadio/README.md)
     * [UiRadioGroup](./src/components/UiRadioGroup/README.md)
     * [UiDatepicker](./src/components/UiDatepicker/README.md)
   * Таблицы
     * @TODO
   * Прочее
     * [UiApp](./src/components/UiApp/README.md)
     * [UiDrawer](./src/components/UiDrawer/README.md)
     * [UiMarkdownViewer](./src/components/UiMarkdownViewer/README.md)
     * [UiOverlay](./src/components/UiOverlay/README.md)
     * [UiPreloader](./src/components/UiPreloader/README.md)
     * [UiSuspense](./src/components/UiSuspense/README.md)
4. Дирекивы
   * [ClickOutside](./src/directives/clickOutside/README.md)

## Установка

#### Yarn или npm

Прежде всего, вам нужно добавить файл `.yarnrc` в корневой каталог вашего проекта.
Откройте этот файл и вставьте в него следующее содержимое:

```ini
registry ${VERDACCIO_REGISTRY}
strict-ssl false
email ${VERDACCIO_EMAIL}
```

или `.npmrc`

```ini
registry = ${VERDACCIO_REGISTRY}
strict-ssl = false
email = ${VERDACCIO_EMAIL}
```

#### Переменные окружения

Затем вам нужно добавить в систему переменные окружения `VERDACCIO_REGISTRY` и `VERDACCIO_EMAIL`

#### Добавление пакета в зависимости 

Добавьте `@thd/vue-ui-framework` в файл `package.json` и запустите `yarn` или `npm i` в своем терминале:

```json
{
  "dependencies": {
    "@thd/vue-ui-framework": "^0.1.0"
  }
}
```

Или запустите команду ниже в вашем терминале:

```bash
$ yarn add @thd/vue-ui-framework
# или
$ npm i @thd/vue-ui-framework
```

## Использование

Прежде всего вам необходимо включить CSS-пакет фреймворка. Вы можете импортировать его во входной файл вашего приложения следующим образом:

```js
import '@thd/vue-ui-framework/dist/ui.css';
```

Или импортируйте его в свои стили:

```css
@import '@thd/vue-ui-framework/dist/ui.css';
```

CSS Modules:

```css
@import '~@thd/vue-ui-framework/dist/ui.css';
```

Теперь вам нужно зарегистрировать библиотеку. Вот 2 способа, как вы можете сделать это.

#### Регистрация как глобальный плагин

```js
import Vue from 'vue';
import UI from '@thd/vue-ui-framework';

Vue.use(UI);
```

#### Регистрация только того, что вам нужно

```js
import { UiInput } from '@thd/vue-ui-framework';

export default {
  name: 'SomeComponent',
  components: {
    UiInput,
  },
};
```

#### Использование контейнера приложения

Чтобы некоторые компоненты работали правильно, вам нужно заключить ваше приложение в компонент [UiApp](./src/components/UiApp/README.md) следующим образом:

Vue.js:

```vue
<template>
  <UiApp>
    <RouterView />
  </UiApp>
</template>
```

Nuxt.js:

```vue
<template>
  <UiApp>
    <Nuxt />
  </UiApp>
</template>
```

> :warning: компонент `UiApp` можно использовать только один раз.
> Вы получите ошибку в консоли, если пытаетесь использовать его в нескольких местах приложения.

Список компонентов, для которых требуется `UiApp`:

* [UiDrawer](./src/components/UiDrawer/README.md)
* [UiOverlay](./src/components/UiOverlay/README.md)

Прочитайте [документацию](./src/components/UiApp/README.md) по компоненту для получения дополнительной информации.

#### В заключение

Готово! Теперь вы можете использовать фреймворк таким образом:

```vue
<template>
  <UiApp>
    <UiInput v-model="value" />
  </UiApp>
</template>

<script>
  export default {
    data: () => ({
      value: '',
    }),
  };
</script>
```
