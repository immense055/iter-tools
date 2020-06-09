/* @macrome
 * @generated-from ./$is-sorted.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIsSorted, asyncWrap } from '../../..';

describe('asyncIsSorted', () => {
  it('returns true for a numerically sorted input iterable', async () => {
    expect(await asyncIsSorted(asyncWrap([1, 2, 3]))).toEqual(true);
  });

  it('returns true for an alphabetically sorted input string', async () => {
    expect(await asyncIsSorted('abc')).toEqual(true);
  });

  it('returns true for a numerically sorted input iterable with duplicates', async () => {
    expect(await asyncIsSorted(asyncWrap([1, 2, 2, 2, 3]))).toEqual(true);
  });

  it('returns true when the input contains only one item', async () => {
    expect(await asyncIsSorted(asyncWrap([9000]))).toEqual(true);
  });

  it('returns true when the input is empty', async () => {
    expect(await asyncIsSorted(asyncWrap([]))).toEqual(true);
  });

  it('returns false when the input is not sorted', async () => {
    expect(await asyncIsSorted(asyncWrap([2, 1]))).toEqual(false);
  });

  describe('with an explicit comparator', () => {
    it('returns true for a numerically sorted input iterable', async () => {
      expect(await asyncIsSorted((a, b) => a - b, asyncWrap([1, 1, 2, 3, 5, 8]))).toEqual(true);
    });

    it('returns true for reverse sorted input iterable (with reverse comparator)', async () => {
      expect(await asyncIsSorted((a, b) => b - a, asyncWrap([8, 5, 3, 2, 1, 1]))).toEqual(true);
    });

    it('returns false if the comparator returns 1', async () => {
      expect(await asyncIsSorted(_ => 1, asyncWrap([1, 2]))).toEqual(false);
    });
  });
});
