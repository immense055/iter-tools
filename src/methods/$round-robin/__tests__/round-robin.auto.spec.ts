/* @macrome
 * @generated-from ./round-robin.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { roundRobin, toArray } from '../../..';

describe('roundRobin', () => {
  it('starts at 0 with step 1 if given no config arguments', () => {
    const iter = roundRobin([1, 4, 7], [2, 5, 8], [3, 6, 9]);
    expect(toArray(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have a configurable step', () => {
    const iter = roundRobin(2, [1, 4, 7], [3, 6, 9], [2, 5, 8]);
    expect(toArray(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have a configurable start and step', () => {
    const iter = roundRobin(1, 2, [2, 5, 8], [1, 4, 7], [3, 6, 9]);
    expect(toArray(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('can have start and step specified in a config object', () => {
    const iter = roundRobin(
      {
        start: 1,
        step: 1,
      },
      [3, 6, 9],
      [1, 4, 7],
      [2, 5, 8],
    );
    expect(toArray(iter)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('works with input iterables of different lengths', () => {
    const iter = roundRobin([], [1, 3], [2]);
    expect(toArray(iter)).toEqual([1, 2, 3]);
  });
});
