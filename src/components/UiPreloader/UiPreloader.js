import { isBoolean } from '@/utils/inspect';
import { isValidCssColor } from '@/utils/validators';
import { factoryStylable } from '@/mixins/stylable';
import UiIcon from '@/components/UiIcon';
import defaultStyles from './UiPreloader.scss';
import themeLogoStyles from './UiPreloader.themeLogo.scss';
import themeDotsStyles from './UiPreloader.themeDots.scss';
import themePulseStyles from './UiPreloader.themePulse.scss';

const themesStyles = {
  logo: themeLogoStyles,
  dots: themeDotsStyles,
  pulse: themePulseStyles,
};
const defaultTheme = 'logo';

const stylable = factoryStylable({
  defaultStyles,
  themesStyles,
  defaultTheme,
});

export default {
  name: 'UiPreloader',
  mixins: [
    stylable,
  ],
  props: {
    background: {
      type: [String, Boolean],
      default: false,
    },
    fullBlock: {
      type: Boolean,
      default: false,
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    genRoot(childNodes = []) {
      const { background } = this;
      const isBackgroundFlag = background && isBoolean(background);
      const isBackgroundString = background && isValidCssColor(background);

      return this.$createElement('span', {
        class: {
          [this.styles.root]: true,
          [this.styles.isBackground]: isBackgroundFlag,
          [this.styles.isFullBlock]: this.fullBlock,
          [this.styles.isFullScreen]: this.fullScreen,
        },
        style: {
          ...isBackgroundString && {
            backgroundColor: background,
          },
        },
      }, childNodes);
    },

    genContent(theme) {
      switch (theme) {
        case 'logo':
          return this.genContentLogo();
        case 'dots':
          return this.genContentDots();
        case 'pulse':
          return this.genContentPulse();
        default:
          return null;
      }
    },

    genContentLogo() {
      const logo = this.$createElement(UiIcon, {
        class: this.styles.logo,
        props: {
          name: 'logo',
        },
      });
      const circle = this.$createElement('div', {
        class: this.styles.circle,
      });
      const indicatorLine = this.$createElement('div', {
        class: this.styles.indicatorLine,
      });
      const indicator = this.$createElement('div', {
        class: this.styles.indicator,
      }, [indicatorLine]);

      return this.$createElement('div', {
        class: this.styles.container,
      }, [
        circle,
        indicator,
        logo,
      ]);
    },

    genContentDots() {
      const genIndicator = () => this.$createElement('div', {
        class: this.styles.indicator,
      });

      return this.$createElement('div', {
        class: this.styles.container,
      }, [
        genIndicator(),
        genIndicator(),
        genIndicator(),
      ]);
    },

    genContentPulse() {
      return this.$createElement(UiIcon, {
        class: this.styles.iconPulse,
        props: {
          name: 'pulse',
          colorDisabled: true,
        },
      });
    },
  },
  render() {
    return this.genRoot([
      this.genContent(this.theme),
    ]);
  },
};
