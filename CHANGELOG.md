# Changelog

Все заметные изменения в этом проекте будут документированы в этом файле

## Releases

## v0.27.2

### Fixed

* Исправлено имя свойства `$angle` в scss миксине `backgroundLinearGradient`

## v0.27.1

### Added

* Поддержка кастомных иконок компонентом `UiIcon`
* Утилита логгера `LogModel`
* Экспорт утилит в билд библиотеки

## v0.27.0

### Added

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

### Fixed

* Отсутствие установленных классов на дочерних кнопках компонента `UiButtonGroup`
* Устранена возможность менять значение у компонента `UiInput` в состоянии readonly

### Changed

* Обновлены до последних версий все npm модули проекта
* Стили компонента `UiButton` в состояниях focus и active
* Компонент `UiCheckbox` теперь имеет поддержку передачу в модели данных массива и объекта
 для работы с группой элементов.
 Также добавлена поддержка проброса модели данных из компонента `UiCheckboxGroup`

## v0.26.4

### Added

* Компоненты `UiInput`, `UiLink` и `UiText` получили поддержку темизации
* Scss переменные со всеми вариантами начертания шрифта в `typography.scss`
* В компонент `UiText` добавлена поддержка всех вариантов начертания шрифта
* В компонент `UiInput` добавлены свойства `iconAfter` и `textAlign`
* В компонент `UiInput` добавлен блок обертка `wrapper` для иконок, инпута и кнопки "очистить"

### Changed

* Входящее свойство `resetDefaultStyles` кастомных installed стилей при инициализации фреймворка
 заменено на `installedResetDefaultStyles`
* Отключена обязательность входящий опций миксина `stylable`

### Fixed

* Пропадание текста при потере фокуса компонента `UiInput`, если отсутствует модель

## v0.26.3

### Added

* Пакет `stylelint` для проверки стилей
* Переменные для стилей `font-weight` в `typography.scss`

## v0.26.2

### Changed

* Удалена валидация свойства `theme` на основе коллекции имен в js миксине `stylable`

## v0.26.1

### Added

* Scss миксин `fontFace`

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

* Логика метода `toggle` в js миксине `toggleable`

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
