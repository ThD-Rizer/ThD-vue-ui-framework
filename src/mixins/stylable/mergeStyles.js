/**
 * @param {Object} left
 * @param {Object} right
 * @return {Object}
 */
export default function mergeStyles(left, right) {
  if (!right) return left;

  const result = { ...left };
  const listsRight = Object.keys(right);

  for (let i = 0; i < listsRight.length; i += 1) {
    const nameStyle = listsRight[i];

    result[nameStyle] = result[nameStyle] ? `${result[nameStyle]} ${right[nameStyle]}` : right[nameStyle];
  }

  return result;
}
