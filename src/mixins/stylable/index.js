import { InvalidTypeError } from '@/utils/errors';
import { isString, isPlainObject } from '@/utils/inspect';
import { isEqual, propValidator } from '@/utils/helpers';
import mergeStyles from './mergeStyles';

/**
 * @type {Object}
 */
const DEFAULT_OPTIONS = {
  /**
   * @type {Object}
   */
  defaultStyles: null,
  /**
   * @type {Object}
   */
  themesStyles: null,
  /**
   * @type {String}
   */
  defaultTheme: null,
};

/**
 * Фабрика миксина для стилизуемых компонентов.
 * Добавляет функционал, позволяющий частично, либо полностью изменить стандартные стили компонента.
 *
 * @param {Object} [options]
 * @return {Object}
 */
export const factoryStylable = (options = null) => {
  const {
    defaultStyles,
    themesStyles,
    defaultTheme,
  } = { ...DEFAULT_OPTIONS, ...options };

  if (!isPlainObject(defaultStyles)) {
    throw new InvalidTypeError(defaultStyles, 'defaultStyles', 'Object');
  }
  if (!isPlainObject(themesStyles)) {
    throw new InvalidTypeError(themesStyles, 'themesStyles', 'Object');
  }
  if (!isString(defaultTheme)) {
    throw new InvalidTypeError(defaultTheme, 'defaultTheme', 'String');
  }

  const allowedThemes = Object.keys(themesStyles);
  const themeValidator = propValidator('theme', allowedThemes);

  return {
    props: {
      /**
       * Название темы.
       * Стили темы располагаются в одноименном с компонентом файле стилей с постфиксом названия темы.
       */
      theme: {
        type: String,
        default: defaultTheme,
        ...themeValidator,
      },

      /**
       * Кастомные стили
       *
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
       * @property {Object} installedThemesStyles Кастомные темы
       * @property {Boolean} installedResetDefaultStyles Флаг сброса стандартных стилей
       */
      installedOptions: {
        installedStyles: null,
        installedThemesStyles: null,
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
        const { theme } = this;
        const {
          installedStyles,
          installedThemesStyles,
          installedResetDefaultStyles,
        } = this.installedOptions;
        const installedThemeStyles = installedThemesStyles?.[theme];
        let styles = mergeStyles(defaultStyles, themesStyles?.[theme]);

        if (isPlainObject(installedStyles)) {
          if (installedResetDefaultStyles) {
            styles = mergeStyles(installedStyles, installedThemeStyles);
          } else {
            styles = mergeStyles(styles, installedStyles);
            styles = mergeStyles(styles, installedThemeStyles);
          }
        }

        styles = resetDefaultStyles
          ? customStyles
          : mergeStyles(styles, customStyles);

        this.styles = styles;
      },
    },
  };
};
