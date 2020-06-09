/* @macrome
 * @generated-from ./$reverse.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { reverse, toArray, wrap } from '../../..';

describe('reverse', () => {
  it('Reverses an iterable', () => {
    expect(toArray(reverse(wrap([1, 2, 3])))).toEqual([3, 2, 1]);
  });

  it('Reverses an array', () => {
    expect(toArray(reverse([1, 2, 3]))).toEqual([3, 2, 1]);
  });
});
