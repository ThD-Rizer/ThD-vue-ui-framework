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
     * Флаг сброса стандартных стилей.
     * Не сбрасывает стили, установленные из `installedStyles`.
     */
    resetDefaultStyles: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    /**
     * Кастомные стили.
     * Устанавливается как инъекция при инициализации фреймворка.
     * @type {Object}
     */
    installedStyles: null,
    /**
     * Флаг сброса стандартных стилей.
     * Устанавливается как инъекция при инициализации фреймворка
     * @type {Boolean}
     */
    installedResetDefaultStyles: false,
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
      const { installedStyles, installedResetDefaultStyles } = this;
      let styles = defaultStyles;

      if (installedStyles) {
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
