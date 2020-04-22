import { isPlainObject } from '@/utils/inspect';
import { isEqual } from '@/utils/helpers';
import mergeStyles from './mergeStyles';

/**
 * Фабрика миксина для стилизуемых компонентов.
 * Добавляет функционал, позволяющий частично, либо полностью изменить стандартные стили компонента.
 *
 * Темизация предполагает несколько уровней переопределения:
 * 1) defaultStyles - базовые стили компонента из библиотеки компонентов фреймворка;
 * 2) installedStyles - кастомные стили, добавленные как инъекция при установке компонента;
 * 3) customStyles - кастомные стили, переданные через свойства компонента при его использовании,
 * можно заменять на горячую.
 *
 * @param {Object} [defaultStyles]
 * @return {Object}
 */
export const factoryStylable = (defaultStyles = null) => ({
  props: {
    /**
     * Кастомные стили
     *
     * @type {Object}
     * @property {String | String[]}
     * @example
     * {
     *   root: 'className1',
     *   inner: ['className2', 'className3'],
     * }
     */
    customStyles: {
      type: Object,
      default: null,
    },

    /**
     * Флаг сброса стандартных стилей
     * @type {Boolean}
     */
    resetDefaultStyles: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    /**
     * Настройки компонента.
     * Устанавливаются как инъекция при инициализации фреймворка.
     * @type {Object}
     * @property {Object} installedStyles Кастомные стили
     * @property {Boolean} installedResetDefaultStyles Флаг сброса стандартных стилей
     */
    installedOptions: {
      installedStyles: null,
      installedResetDefaultStyles: false,
    },

    /**
     * Стили блоков компонента.
     * Устанавливается автоматически при инициализации/обновлении компонента.
     * @type {Object}
     */
    styles: null,
  }),

  computed: {
    isUpdateStyles() {
      return {
        customStyles: this.customStyles,
        resetDefaultStyles: this.resetDefaultStyles,
      };
    },
  },

  watch: {
    isUpdateStyles: {
      handler({ customStyles, resetDefaultStyles }, oldProps) {
        if (
          isEqual(customStyles, oldProps?.customStyles)
          && resetDefaultStyles !== oldProps?.resetDefaultStyles
        ) {
          return;
        }

        this.setStyles(customStyles, resetDefaultStyles);
      },
      immediate: true,
    },
  },

  methods: {
    /**
     * @param {Object} customStyles
     * @param {Boolean} resetDefaultStyles
     */
    setStyles(customStyles, resetDefaultStyles) {
      const { installedStyles, installedResetDefaultStyles } = this.installedOptions;
      let styles = defaultStyles;

      if (isPlainObject(installedStyles)) {
        styles = installedResetDefaultStyles
          ? installedStyles
          : mergeStyles(styles, installedStyles);
      }

      styles = resetDefaultStyles
        ? customStyles
        : mergeStyles(styles, customStyles);

      this.styles = styles;
    },
  },
});
