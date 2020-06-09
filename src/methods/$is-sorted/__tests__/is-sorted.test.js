/* @macrome
 * @generated-from ./$is-sorted.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { isSorted, wrap } from '../../..';

describe('isSorted', () => {
  it('returns true for a numerically sorted input iterable', () => {
    expect(isSorted(wrap([1, 2, 3]))).toEqual(true);
  });

  it('returns true for an alphabetically sorted input string', () => {
    expect(isSorted('abc')).toEqual(true);
  });

  it('returns true for a numerically sorted input iterable with duplicates', () => {
    expect(isSorted(wrap([1, 2, 2, 2, 3]))).toEqual(true);
  });

  it('returns true when the input contains only one item', () => {
    expect(isSorted(wrap([9000]))).toEqual(true);
  });

  it('returns true when the input is empty', () => {
    expect(isSorted(wrap([]))).toEqual(true);
  });

  it('returns false when the input is not sorted', () => {
    expect(isSorted(wrap([2, 1]))).toEqual(false);
  });

  describe('with an explicit comparator', () => {
    it('returns true for a numerically sorted input iterable', () => {
      expect(isSorted((a, b) => a - b, wrap([1, 1, 2, 3, 5, 8]))).toEqual(true);
    });

    it('returns true for reverse sorted input iterable (with reverse comparator)', () => {
      expect(isSorted((a, b) => b - a, wrap([8, 5, 3, 2, 1, 1]))).toEqual(true);
    });

    it('returns false if the comparator returns 1', () => {
      expect(isSorted(_ => 1, wrap([1, 2]))).toEqual(false);
    });
  });
});
