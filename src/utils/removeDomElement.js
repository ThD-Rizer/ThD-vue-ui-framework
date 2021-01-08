/**
 * @param {Element} element
 * @returns {void}
 */
export default function removeDomElement(element) {
  if (element.remove) {
    element.remove();
  } else {
    // Для IE11
    element.parentNode.removeChild(element);
  }
}
