/**
 * @generated-from ./$to-object.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncToObject } from '../../..';
import { asyncWrap } from '../../../__tests__/__framework__/async-wrap';

describe('asyncToObject', () => {
  it('turns an iterable into an object', async () => {
    expect(
      await asyncToObject(asyncWrap([['foo', 'fox'], ['bar', 'box'], ['baz', 'rox']])),
    ).toEqual({
      foo: 'fox',
      bar: 'box',
      baz: 'rox',
    });
  });
});