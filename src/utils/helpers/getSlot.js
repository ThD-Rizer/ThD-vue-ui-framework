/**
 * @param {Object} context VueOptions
 * @param {string} slotName
 * @param {Object} scope
 * @returns {*}
 */
export default function getSlot(context, slotName = 'default', scope = {}) {
  const slot = context.$slots[slotName];

  if (slot) return slot;

  const scopedSlot = context.$scopedSlots[slotName];

  return scopedSlot ? scopedSlot(scope) : null;
}
