# @thd/vue-ui-framework (v0.19.0)

Библиотека с компонентами пользовательского интерфейса для Vue.js/Nuxt.js.

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
   * Формы
     * [UiInput](./src/components/UiInput/README.md)
     * [UiTextarea](./src/components/UiTextarea/README.md)
   * Таблицы
     * @TODO
   * Прочее
     * [UiApp](./src/components/UiApp/README.md)
     * [UiButton](./src/components/UiButton/README.md)
     * [UiDatepicker](./src/components/UiDatepicker/README.md)
     * [UiDrawer](./src/components/UiDrawer/README.md)
     * [UiOverlay](./src/components/UiOverlay/README.md)
     * [UiPreloader](./src/components/UiPreloader/README.md)
     * [UiSuspense](./src/components/UiSuspense/README.md)
4. Дирекивы
   * [QA](./src/directives/qa/README.md)
   * [ClickOutside](./src/directives/clickOutside/README.md)

## Установка

#### NPM

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
    "@thd/vue-ui-framework": "^0.19.0"
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

```vue
<template>
  <UiApp>
    <RouterView />
    <!-- или для Nuxt.js: -->
    <Nuxt />
  </UiApp>
</template>
```

> :warning: компонент `UiApp` можно использовать только один раз.
> Вы получите ошибку в консоли, если пытаетесь использовать его в нескольких местах приложения.

Список компонентов, для которых требуется `UiApp`:

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
