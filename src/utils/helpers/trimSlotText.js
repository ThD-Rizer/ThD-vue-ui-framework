import { InvalidTypeError } from '@/utils/errors';
import { isArray } from '@/utils/inspect';
import trimLeft from './trimLeft';
import trimRight from './trimRight';

/**
 * Вырезание пробелов у крайних элементов слота, слева и справа соответственно
 *
 * @param {Array} slotParts
 * @returns {Array}
 */
export default function trimSlotText(slotParts) {
  if (!isArray(slotParts)) {
    throw new InvalidTypeError(slotParts, 'slotParts', 'Array');
  }

  const lastIndex = slotParts.length - 1;

  return slotParts.map((slot, index) => {
    if (![0, lastIndex].includes(index)) {
      return slot;
    }

    let { text } = slot;

    if (index === 0) {
      text = text ? trimLeft(text) : null;
    }
    if (index === lastIndex) {
      text = text ? trimRight(text) : null;
    }

    return {
      ...slot,
      ...text && { text },
    };
  });
}
