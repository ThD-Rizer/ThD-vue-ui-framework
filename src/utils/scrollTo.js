/**
 * @param {Element | Node} el
 * @param {Number} x
 * @param {Number} y
 */
export default function scrollTo(el, x, y) {
  if ('scrollTo' in el) {
    el.scrollTo(x, y);

    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.scrollTop = y;
  // eslint-disable-next-line no-param-reassign
  el.scrollLeft = x;
}
