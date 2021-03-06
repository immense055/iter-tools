/**
 * @generated-from ./$unwrap.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { isLoopable } from '../../internal/iterable.js';

export function unwrap(iterable) {
  const values = [];

  for (const value of iterable) {
    values.push(value);
  }

  return values;
}

export function unwrapDeep(iterable) {
  const values = [];

  for (const value of iterable) {
    if (typeof value !== 'string' && isLoopable(value)) {
      values.push(unwrapDeep(value));
    } else {
      values.push(value);
    }
  }

  return values;
}
