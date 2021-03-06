/**
 * @generated-from ./$spliterate-grouped.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { AsyncGroupsIterator } from '../../internal/async-groups-iterator.js';
import { __asyncMap } from '../$map/async-map.js';
import { __asyncWrap } from '../$wrap/async-wrap.js';

export function __asyncSpliterateGrouped(source, strategy, options = {}) {
  return new AsyncGroupsIterator(source, strategy, options);
}

export const asyncSpliterateGrouped = /*#__PURE__*/ asyncIterableCurry(
  function $spliterateGrouped(...args) {
    return __asyncMap(__asyncSpliterateGrouped(...args), __asyncWrap);
  },
  {
    minArgs: 1,
    maxArgs: 2,
    growRight: true,
  },
);
