/**
 * @generated-from ./$tap.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable.js';

export async function* __asyncTap(source, callback) {
  let c = 0;
  for await (const value of source) {
    callback(value, c++);
    yield value;
  }
}

export const asyncTap = /*#__PURE__*/ asyncIterableCurry(__asyncTap);
