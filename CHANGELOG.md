# Changelog

Все заметные изменения в этом проекте будут документированы в этом файле

## Releases

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
