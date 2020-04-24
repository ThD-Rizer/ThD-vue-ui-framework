import { trimSlotText, propValidator, kebabToCamel } from '@/utils/helpers';
import routable from '@/mixins/routable';
import { factoryStylable } from '@/mixins/stylable';

import defaultStyles from './UiButton.scss';
import themePrimaryStyles from './UiButton.themePrimary.scss';
import themeSecondaryStyles from './UiButton.themeSecondary.scss';
import themeSuccessStyles from './UiButton.themeSuccess.scss';
import themeDangerStyles from './UiButton.themeDanger.scss';
import themeWarningStyles from './UiButton.themeWarning.scss';
import themeInfoStyles from './UiButton.themeInfo.scss';
import themeLightStyles from './UiButton.themeLight.scss';
import themeDarkStyles from './UiButton.themeDark.scss';
import themeSilentStyles from './UiButton.themeSilent.scss';

const themesStyles = {
  primary: themePrimaryStyles,
  secondary: themeSecondaryStyles,
  success: themeSuccessStyles,
  danger: themeDangerStyles,
  warning: themeWarningStyles,
  info: themeInfoStyles,
  light: themeLightStyles,
  dark: themeDarkStyles,
  silent: themeSilentStyles,
};
const defaultTheme = 'secondary';

const tagValidator = propValidator('tag', ['button', 'a', 'div']);
const typeValidator = propValidator('type', ['button', 'submit', 'reset']);
const sizeValidator = propValidator('size', ['small', 'normal', 'large']);
const contentAlignValidator = propValidator('contentAlign', [
  'left',
  'center',
  'right',
  'justify',
]);

const stylable = factoryStylable({
  defaultStyles,
  themesStyles,
  defaultTheme,
});

export default {
  name: 'UiButton',
  mixins: [
    routable,
    stylable,
  ],
  props: {
    tag: {
      type: String,
      default: 'button',
      ...tagValidator,
    },
    type: {
      type: String,
      default: 'button',
      ...typeValidator,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
      ...sizeValidator,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    squared: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    depressed: {
      type: Boolean,
      default: false,
    },
    contentAlign: {
      type: String,
      default: 'center',
      ...contentAlignValidator,
    },
  },

  computed: {
    attributes() {
      if (this.tag !== 'button') return null;
      return { type: this.type };
    },
    classesRoot() {
      const {
        size,
        flat,
        contentAlign,
      } = this;
      return {
        [this.styles.root]: true,
        [this.styles.isFluid]: this.fluid,
        [this.styles.isRound]: this.round,
        [this.styles.isCircle]: this.circle,
        [this.styles.isSquared]: this.squared,
        [this.styles.isFlat]: flat,
        [this.styles.isDepressed]: (this.depressed && !flat),
        [this.styles.isActive]: this.active,
        [this.styles.hasIcon]: this.hasIcon,
        [this.styles.isDisabled]: this.disabled,
        [this.styles[kebabToCamel(`size-${size}`)]]: size,
        [this.styles[kebabToCamel(`contentAlign-${contentAlign}`)]]: contentAlign,
      };
    },
  },

  methods: {
    genRoot(childNodes = []) {
      const { tag, data } = this.generateRouterLink(this.classesRoot);

      data.attrs = { ...data.attrs, ...this.attributes };

      return this.$createElement(tag, data, childNodes);
    },
    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;

      if (!defaultSlot) return null;

      return trimSlotText(defaultSlot());
    },
    genContent(childNodes = []) {
      return this.$createElement('span', {
        class: this.styles.inner,
      }, childNodes);
    },
  },

  render() {
    return this.genRoot([
      this.genContent([
        this.genDefaultSlot(),
      ]),
    ]);
  },
};
