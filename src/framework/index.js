import packageJson from '@root/package.json';
import { FrameworkError } from '@/utils/errors';

/**
 * Register new Framework plugin
 *
 * @param {uiFramework} instance Framework instance
 * @param {string} name Plugin name
 * @param {function} plugin Plugin constructor function
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
 * Framework
 *
 * @param {Array} plugins
 * @constructor
 */
export default function uiFramework(plugins) {
  if (!Array.isArray(plugins)) {
    throw new FrameworkError('Invalid plugins given');
  }

  this.$version = packageJson.version;
  this.$appContainer = null;
}

/**
 * Register instance of uiApp component
 *
 * @param {Vue} app
 */
uiFramework.prototype.setAppContainer = function setAppContainer(app) {
  this.$appContainer = app;
};
