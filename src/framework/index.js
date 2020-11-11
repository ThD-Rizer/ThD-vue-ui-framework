import { InvalidTypeError } from '@/utils/errors';
import { isArray } from '@/utils/inspect';
import packageJson from '@root/package.json';

/**
 * UI фреймворк
 *
 * @param {Array} plugins
 * @constructor
 */
function UiFramework(plugins) {
  if (!isArray(plugins)) {
    throw new InvalidTypeError(plugins, 'plugins', 'Array');
  }

  this.$version = packageJson.version;
  this.$appContainer = null;
}

/**
 * Регистрация экземпляра компонента UiApp
 *
 * @param {Object<Vue>} app
 */
UiFramework.prototype.setAppContainer = function setAppContainer(app) {
  this.$appContainer = app;
};

export default UiFramework;
