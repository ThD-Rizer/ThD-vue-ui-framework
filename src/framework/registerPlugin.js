import FrameworkError from '@/utils/errors';

/**
 * Регистрация нового плагина фреймворка
 *
 * @param {UiFramework} instance
 * @param {String} name Название плагина
 * @param {Class<UiFramework>} plugin
 * @returns {void}
 */
export default function registerPlugin(instance, name, plugin) {
  const pluginName = name.startsWith('$') ? name : `$${name}`;

  if (pluginName in instance) {
    throw new FrameworkError(
      `Plugin with name "${pluginName}" has registered in Framework instance already`,
    );
  }

  // eslint-disable-next-line no-param-reassign, new-cap
  instance[pluginName] = new plugin(instance);
}
