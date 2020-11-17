/**
 * @generated-from ./$unwrap.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIsIterable } from '../../internal/async-iterable.js';

export async function asyncUnwrap(iterable) {
  const values = [];

  for await (const value of iterable) {
    values.push(value);
  }

  return values;
}

export async function asyncUnwrapDeep(iterable) {
  const values = [];

  for await (const value of iterable) {
    if (typeof value !== 'string' && asyncIsIterable(value)) {
      values.push(await asyncUnwrapDeep(value));
    } else {
      values.push(value);
    }
  }

  return values;
}