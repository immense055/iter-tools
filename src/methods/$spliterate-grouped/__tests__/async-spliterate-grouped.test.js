/**
 * @generated-from ./$spliterate-grouped.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { asyncSpliterateGrouped } from '../../..';
import { asyncUnwrapDeep as asyncUw } from '../../../__tests__/async-helpers';
import { split } from '../async-spliterate-grouped';

async function* asyncIdentityStrategy(_split: any, _options: any, source: any) {
  yield* source;
}

describe('asyncSpliterateGrouped', () => {
  const asyncTestSpliterator = asyncSpliterateGrouped(asyncIdentityStrategy, {});

  describe('when spliterator is empty', () => {
    it('yields no groups', async () => {
      expect(await asyncUw(asyncTestSpliterator([]))).toEqual([]);
    });
  });

  describe('when spliterator contains only a split', () => {
    it('yields two empty groups', async () => {
      expect(await asyncUw(asyncTestSpliterator([split, 'key']))).toEqual([['key', []]]);
    });
  });

  describe('when spliterator contains two splits', () => {
    it('yields three empty groups', async () => {
      expect(await asyncUw(asyncTestSpliterator([split, 'key1', split, 'key2']))).toEqual([
        ['key1', []],
        ['key2', []],
      ]);
    });
  });
});