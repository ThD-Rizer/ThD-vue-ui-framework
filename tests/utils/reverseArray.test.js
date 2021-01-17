import reverseArray from '@/utils/reverseArray';

describe('reverseArray.js', () => {
  describe('Testing primitives', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const referenceArray = [5, 4, 3, 2, 1];

    const reveredArray = reverseArray(originalArray);

    test('New array is reversed', () => {
      expect(reveredArray).toEqual(referenceArray);
    });

    test('Original array unchanged', () => {
      expect(originalArray).not.toEqual(referenceArray);
    });
  });

  describe('Testing complex types', () => {
    const originalArray = [{ id: 1 }, { id: 2 }, ['a', 'b'], [], {}];
    const referenceArray = [{}, [], ['a', 'b'], { id: 2 }, { id: 1 }];

    const reveredArray = reverseArray(originalArray);

    test('New array is reversed', () => {
      expect(reveredArray).toEqual(referenceArray);
    });

    test('Original array unchanged', () => {
      expect(originalArray).not.toEqual(referenceArray);
    });
  });
});
