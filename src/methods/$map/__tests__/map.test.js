/* @macrome
 * @generated-from ./$map.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { map, toArray, range } from '../../..';

describe('map', () => {
  it('returns mapped iterable', () => {
    const iter = map(item => item * 2, [1, 2, 3]);
    expect(toArray(iter)).toEqual([2, 4, 6]);
  });

  it('returns mapped iterable from iterable', () => {
    const iter = map(item => item * 2, range(1, 4));
    expect(toArray(iter)).toEqual([2, 4, 6]);
  });

  it('returns mapped iterable (curried version)', () => {
    const iter = map((item: number) => item * 2);
    expect(toArray(iter(range(1, 4)))).toEqual([2, 4, 6]);
  });

  it('returns empty iterable from null', () => {
    expect(toArray(map((item: never) => item * 2, null))).toEqual([]);
  });
});
