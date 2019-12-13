/**
 * @generated-from ./$to-array.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncToArray } from '../../..';
import { asyncRange } from '../../../__tests__/async-range';
describe('asyncToArray', () => {
  it('turns an iterable into an array', async () => {
    expect(await asyncToArray(asyncRange(0, 3))).toEqual([0, 1, 2]);
  });
});
