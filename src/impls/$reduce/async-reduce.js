/**
 * @generated-from ./$reduce.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';
import { __asyncPeekerate } from '../$peekerate/async-peekerate.js';

export async function __asyncReduce(iterable, reducer, initial = undefined) {
  let c = 0;
  let result = initial;
  const peekr = await __asyncPeekerate(iterable);
  try {
    if (initial === undefined) {
      if (peekr.done) {
        throw new Error('Cannot reduce: no initial value specified and iterable was empty');
      }
      result = peekr.value;
      await peekr.advance();
      c = 1;
    }
    while (!peekr.done) {
      result = await reducer(result, peekr.value, c++);
      await peekr.advance();
    }
    return result;
  } finally {
    // close the iterator in case of exceptions
    peekr.return();
  }
}

export const asyncReduce = /*#__PURE__*/ asyncIterableCurry(__asyncReduce, {
  reduces: true,
  minArgs: 1,
  maxArgs: 2,
});
