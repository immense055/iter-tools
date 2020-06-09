/* @macrome
 * @generated-from ./async-to-array.test.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncToArray } from '../../..';
import { asyncRange } from '../../../__tests__/async-range';

describe('asyncToArray', () => {
  it('turns an iterable into an array', async () => {
    expect(await asyncToArray(asyncRange(0, 3))).toEqual([0, 1, 2]);
  });
});
