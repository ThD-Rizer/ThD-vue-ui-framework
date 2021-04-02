# Changelog

Все заметные изменения в этом проекте будут документированы в этом файле

## Релизы

## v0.28.0

### Добавлено

* Утилиты для работы с датой `isValidDate`, `formatDate`, `convertDateToObject`, `convertObjectToDate` и `resetDateTimes`
* Утилита `formatBytes`
* Утилита `swapArrayElements`
* Компонент `UiSelect` (только заготовка)

## v0.27.6

### Изменено

* Зависимость `axios` в утилите `downloadFileToBrowser` заменена на нативный `fetch`

## v0.27.5

### Добавлено

* Утилиты `archiveFilesToZip`, `downloadFile`, `downloadFileToBrowser`, `freezeDeep`
  и `removeDomElement`
* Утилиты инспекции `isElement`, `isInteger` и `isSymbol`
* Утилита логгера `prepareError`

### Изменено

* Удален импорт пакета `normalize.scss` в глобальном файле стилей.
  Теперь его необходимо устанавливать непосредственно в проект
* Утилиты `Logger` и `LogModel`

## v0.27.4

### Добавлено

* Утилита `createScssVariablesDictionary`, создающая многоуровневый словарь из экспортированных
  scss переменных, с учетом бесконечной вложенности
* Экспорт `styles` утилит в билд библиотеки

### Изменено

* Утилиты `getScssVariable`, `getScssVariableByMap` и `getScssVariablesMap` обзавелись валидаторами
  аргументов и избавились от зависимости `styles/export.scss`.
  Теперь аргумент `dictionary` идет первый по счету и является обязательным
* Экспортируемые (`styles/export.scss`) scss переменные `grid-*` переименованы в `breakpoints-*`
* Удалена директива `qa`

## v0.27.3

### Исправлено

* Импорт scss переменных в утилиты `getScssVariable`, `getScssVariableByMap` и `getScssVariablesMap`
  сделан относительным, для возможности использования данных утилит вне фреймворка.
  Также в утилиты добавлен аргумент `dictionary` для возможности использования своих собственных
  scss переменных

## v0.27.2

### Исправлено

* Имя свойства `$angle` в scss миксине `backgroundLinearGradient`

## v0.27.1

### Добавлено

* Поддержка кастомных иконок компонентом `UiIcon`
* Утилита логгера `LogModel`
* Экспорт утилит в билд библиотеки

## v0.27.0

### Добавлено

* Компонент `UiCheckboxGroup`
* Компонент `UiRadio`
* Компонент `UiRadioGroup`
* Свойство `direction` в компоненте `UiButtonGroup`
* Визуальный разделитель между кнопками в компоненте `UiButtonGroup`
* Визуальный эффект кнопки очистки при получении ей фокуса в компоненте `UiInput`
* Стили компонента `UiLink` в состоянии focus
* Стили компонента `UiCheckbox` в состоянии focus
* Миксины `providable` и `injectable`, работающие в паре
* Утилиты `isEmptyObject` и `isEqual`

### Исправлено

* Отсутствие установленных классов на дочерних кнопках компонента `UiButtonGroup`
* Устранена возможность менять значение у компонента `UiInput` в состоянии readonly

### Изменено

* Обновлены до последних версий все npm модули проекта
* Стили компонента `UiButton` в состояниях focus и active
* Компонент `UiCheckbox` теперь имеет поддержку передачу в модели данных массива и объекта
  для работы с группой элементов.
  Также добавлена поддержка проброса модели данных из компонента `UiCheckboxGroup`

## v0.26.4

### Добавлено

* Компоненты `UiInput`, `UiLink` и `UiText` получили поддержку темизации
* Scss переменные со всеми вариантами начертания шрифта в `typography.scss`
* В компонент `UiText` добавлена поддержка всех вариантов начертания шрифта
* В компонент `UiInput` добавлены свойства `iconAfter` и `textAlign`
* В компонент `UiInput` добавлен блок обертка `wrapper` для иконок, инпута и кнопки "очистить"

### Изменено

* Входящее свойство `resetDefaultStyles` кастомных installed стилей при инициализации фреймворка
  заменено на `installedResetDefaultStyles`
* Отключена обязательность входящий опций миксина `stylable`

### Исправлено

* Пропадание текста при потере фокуса компонента `UiInput`, если отсутствует модель

## v0.26.3

### Добавлено

* Пакет `stylelint` для проверки стилей
* Переменные для стилей `font-weight` в `typography.scss`

## v0.26.2

### Изменено

* Удалена валидация свойства `theme` на основе коллекции имен в js миксине `stylable`

## v0.26.1

### Добавлено

* Scss миксин `fontFace`

## v0.26.0

### Добавлено

* Компонент `UiCheckbox`
* Хэлпер для получения слотов `getSlot`
* Свойство `clearable` для активации кнопки очистки в компоненте `UiInput`
* Свойства `readOnly` и `placeholder` в компоненте `UiInput`
* Хэш ссылки на заголовки в компоненте `UiMarkdownViewer`
* Иконки `check` и `cross-thin`

### Изменено

* Замена методов `genDefaultSlot` на хэлпер `getSlot` в компонентах `UiApp`, `UiButton`,
  `UiButtonGroup`, `UiCol`, `UiContainer`, `UiDatepicker`, `UiDrawer`, `UiLink`, `UiOverlay`,
  `UiRow`, `UiSuspense`, `UiText`
* Удален сайд-эффект с передачей свойств в дочерние компоненты компонента `UiButtonGroup`
* Код иконки `cross` заменен на жирную версию

### Исправлено

* Передача `value` и флагов `required`, `disabled` в компоненте `UiInput`
* Стили положения `label` в компоненте `UiInput`

## v0.25.2

### Исправлено

* Обработчики событий в компоненте `UiButton`

## v0.25.1

### Исправлено

* Обработчики событий в компоненте `UiButton`
* Заблокирована обработка событий компонента `UiLink` в состоянии disabled

## v0.25.0

### Добавлено

* Зависимости `vue-markdown`, `raw-loader`
* Компонент [UiMarkdownViewer](./src/components/UiMarkdownViewer/README.md)
* Страница `ErrorNotFound` для демо
* Отображение `CHANGELOG.md` на главной странице в демо

## v0.24.0

### Добавлено

* Компонент [UiButtonHamburger](./src/components/UiButtonHamburger/README.md)

### Изменено

* Логика метода `toggle` в js миксине `toggleable`

### Исправлено

* Исключен рендер пустых строк в компоненте `UiButtonGroup`

## v0.23.4

### Изменено

* Удален debug в компоненте `UiButtonGroup`

### Исправлено

* `UiButtonGroup` исправлено поведение методов `genDefaultSlot` и `genButton`

## v0.23.3

### Исправлено

* Удалены стили `text-align` у flex утилит

## v0.23.2

### Исправлено

* Добавлен импорт `flex` утилит в главный файл `utils.scss`

## v0.23.1

### Изменено

* В компоненте `UiLink` удалено значение по умолчанию у свойств `activeClass` и `exactActiveClass`
* Добавлен debug в метод `genButton` компонента `UiButtonGroup`
