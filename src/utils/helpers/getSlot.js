/**
 * @param {Object<VueInstance>} parent
 * @param {String} slotName
 * @param {Object} scope
 * @returns {*}
 */
export default function getSlot(parent, slotName = 'default', scope = {}) {
  const slot = parent.$slots[slotName];
  const scopedSlot = parent.$scopedSlots[slotName];

  if (slot) {
    return slot;
  }

  return scopedSlot ? scopedSlot(scope) : null;
}
