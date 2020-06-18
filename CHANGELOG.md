# Changelog

Все заметные изменения в этом проекте будут документированы в этом файле

## Releases

## v0.27.0

### Added

* Компонент `UiCheckboxGroup`
* Компонент `UiRadio`
* Компонент `UiRadioGroup`
* Свойство `direction` в компоненте `UiButtonGroup`
* Визуальный разделитель между кнопками в компоненте `UiButtonGroup`

### Fixed

* Пробрасывание классов на кнопки в компоненте `UiButtonGroup`

// @TODO: add

## v0.26.0

### Added

* Компонент `UiCheckbox`
* Хэлпер для получения слотов `getSlot`
* Свойство `clearable` для активации кнопки очистки в компоненте `UiInput`
* Свойства `readOnly` и `placeholder` в компоненте `UiInput`
* Хэш ссылки на заголовки в компоненте `UiMarkdownViewer`
* Иконки `check` и `cross-thin`

### Changed

* Замена методов `genDefaultSlot` на хэлпер `getSlot` в компонентах `UiApp`, `UiButton`,
  `UiButtonGroup`, `UiCol`, `UiContainer`, `UiDatepicker`, `UiDrawer`, `UiLink`, `UiOverlay`,
  `UiRow`, `UiSuspense`, `UiText`
* Удален сайд-эффект с передачей свойств в дочерние компоненты компонента `UiButtonGroup`
* Код иконки `cross` заменен на жирную версию

### Fixed

* Передача `value` и флагов `required`, `disabled` в компоненте `UiInput`
* Стили положения `label` в компоненте `UiInput`

## v0.25.2

### Fixed

* Обработчики событий в компоненте `UiButton`

## v0.25.1

### Fixed

* Обработчики событий в компоненте `UiButton`
* Заблокирована обработка событий компонента `UiLink` в состоянии disabled

## v0.25.0

### Added

* Зависимости `vue-markdown`, `raw-loader`
* Компонент [UiMarkdownViewer](./src/components/UiMarkdownViewer/README.md)
* Страница `ErrorNotFound` для демо
* Отображение `CHANGELOG.md` на главной странице в демо

## v0.24.0

### Added

* Компонент [UiButtonHamburger](./src/components/UiButtonHamburger/README.md)

### Changed

* Логика метода `toggle` в миксине `toggleable`

### Fixed

* Исключен рендер пустых строк в компоненте `UiButtonGroup`

## v0.23.4

### Changed

* Удален debug в компоненте `UiButtonGroup`

### Fixed

* `UiButtonGroup` исправлено поведение методов `genDefaultSlot` и `genButton`

## v0.23.3

### Fixed

* Удалены стили `text-align` у flex утилит

## v0.23.2

### Fixed

* Добавлен импорт `flex` утилит в главный файл `utils.scss`

## v0.23.1

### Changed

* В компоненте `UiLink` удалено значение по умолчанию у свойств `activeClass` и `exactActiveClass`
* Добавлен debug в метод `genButton` компонента `UiButtonGroup`
