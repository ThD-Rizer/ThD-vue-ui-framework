import packageJson from '@root/package.json';
import { FrameworkError } from '@/utils/errors';

/**
 * Регистрация нового плагина фреймворка
 *
 * @param {UiFramework} instance
 * @param {String} name Название плагина
 * @param {Function} plugin Функция конструктора плагина
 */
// function registerPlugin(instance, name, plugin) {
//   const pluginName = name.startsWith('$') ? name : `$${name}`;
//
//   if (pluginName in instance) {
//     throw new FrameworkError(
//       `Plugin with name "${pluginName}" has registered in Framework instance already`,
//     );
//   }
//
//   // eslint-disable-next-line no-param-reassign, new-cap
//   instance[pluginName] = new plugin(instance);
// }

/**
 * UI фреймворк
 *
 * @param {Array} plugins
 * @constructor
 */
export default function UiFramework(plugins) {
  if (!Array.isArray(plugins)) {
    throw new FrameworkError('Invalid plugins given');
  }

  this.$version = packageJson.version;
  this.$appContainer = null;
}

/**
 * Регистрация экземпляра компонента UiApp
 *
 * @param {Vue} app
 */
UiFramework.prototype.setAppContainer = function setAppContainer(app) {
  this.$appContainer = app;
};
