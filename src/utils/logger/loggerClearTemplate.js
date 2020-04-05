/**
 * Remove auxiliary code spaces in template strings
 * @see original function https://habr.com/ru/post/280928/
 * @param {string|string[]} strings
 * @param {*} expressions
 * @returns {string}
 */
export default function loggerClearTemplate(strings, ...expressions) {
  /**
   * @TODO: add validations
   */

  const match = strings[0].match(/\n+( *)/);
  const len = match ? match[1].length : 0;
  const indent = new RegExp(`\n {${len}}`, 'g');

  return expressions.reduce(
    (acc, expr, i) => `${acc}${expr}${strings[i + 1].replace(indent, '\n')}`,
    strings[0].replace(indent, '\n'),
  ).replace(/^\n|\n$/g, '');
}
