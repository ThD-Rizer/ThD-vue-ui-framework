import { isBoolean, isString } from '@/utils/inspect';
import { propValidator } from '@/utils/helpers';
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
import themeLinkStyles from './UiButton.themeLink.scss';

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
  link: themeLinkStyles,
};
const defaultTheme = 'secondary';

export const stylable = factoryStylable({
  defaultStyles,
  themesStyles,
  defaultTheme,
});

const tagValidator = propValidator('tag', [
  'button',
  'a',
  'div',
]);
const typeValidator = propValidator('type', [
  'button',
  'submit',
  'reset',
]);
const sizeValidator = propValidator('size', [
  'small',
  'medium',
  'large',
]);
const squareValidator = {
  validator: (_) => (
    isBoolean(_)
    || (isString(_) && [
      'top',
      'right',
      'bottom',
      'left',
    ].includes(_))
  ),
};
const contentAlignValidator = propValidator('contentAlign', [
  'left',
  'center',
  'right',
  'justify',
]);

export const props = {
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
    default: 'medium',
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
  square: {
    type: [Boolean, String],
    default: false,
    ...squareValidator,
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  contentAlign: {
    type: String,
    default: 'center',
    ...contentAlignValidator,
  },
  empty: {
    type: Boolean,
    default: false,
  },
};
