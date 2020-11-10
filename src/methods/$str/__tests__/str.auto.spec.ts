/**
 * @generated-from ./str.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { str } from '../../..';
import { wrap } from '../../../__tests__/__framework__/wrap';

describe('str', () => {
  it('joins an iterable of strings into a single string', () => {
    expect(str(wrap(['1', '2', '3']))).toEqual('123');
  });

  it('coerces non-strings into strings', () => {
    const iterable: any = [1, 2, 3];
    expect(str(wrap(iterable))).toEqual('123');
  });
});