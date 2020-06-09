/* @macrome
 * @generated-from ./$cycle.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncCycle, asyncSlice, asyncToArray } from '../../..';
import { asyncRange } from '../../../__tests__/async-range';

describe('asyncCycle', () => {
  it('cycles iterable infinitely', async () => {
    expect(await asyncToArray(asyncSlice(0, 7, asyncCycle(asyncRange(1, 4))))).toEqual([
      1,
      2,
      3,
      1,
      2,
      3,
      1,
    ]);
  });
});
