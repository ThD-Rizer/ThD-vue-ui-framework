import { isEqual } from '@/utils/helpers';
import mergeStyles from './mergeStyles';

export const factoryStylable = (defaultStyles = null) => ({
  props: {
    themeStyles: {
      type: Object,
      default: null,
    },
    resetDefaultStyles: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    styles: null,
  }),
  computed: {
    isUpdateStyles() {
      const {
        themeStyles,
        resetDefaultStyles,
      } = this;

      return {
        themeStyles,
        resetDefaultStyles,
      };
    },
  },
  watch: {
    isUpdateStyles({ themeStyles, resetDefaultStyles }, oldProps) {
      if (
        isEqual(themeStyles, oldProps?.themeStyles)
        && resetDefaultStyles !== oldProps?.resetDefaultStyles
      ) {
        return;
      }

      this.setStyles(themeStyles, resetDefaultStyles);
    },
  },
  created() {
    const {
      themeStyles,
      resetDefaultStyles,
    } = this;

    this.setStyles(themeStyles, resetDefaultStyles);
  },
  methods: {
    setStyles(themeStyles, resetDefaultStyles) {
      this.styles = resetDefaultStyles
        ? themeStyles
        : mergeStyles(defaultStyles, themeStyles);
    },
  },
});
