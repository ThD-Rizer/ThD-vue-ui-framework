import UiButtonStyles from '@demo/styles/UiButton.scss';
import UiButtonThemeCoolStyles from '@demo/styles/UiButton.themeCool.scss';
import UiInputStyles from '@demo/styles/UiInput.scss';

export default {
  UiButton: {
    installedStyles: UiButtonStyles,
    installedThemesStyles: {
      cool: UiButtonThemeCoolStyles,
    },
  },
  UiInput: {
    installedStyles: UiInputStyles,
    installedResetDefaultStyles: true,
  },
};
