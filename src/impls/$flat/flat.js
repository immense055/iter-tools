/**
 * @generated-from ./$flat.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry, isLoopable } from '../../internal/iterable.js';
import { validateArgs } from './internal/validate-args.js';

const defaultShouldFlat = (value) => typeof value !== 'string' && isLoopable(value);

function* flatInternal(shouldFlat, depth, currentDepth, source) {
  for (const value of source) {
    if (currentDepth < depth && shouldFlat(value)) {
      yield* flatInternal(shouldFlat, depth, currentDepth + 1, value);
    } else {
      yield value;
    }
  }
}

export function __flat(source, depth = 1, shouldFlat = defaultShouldFlat) {
  return flatInternal(shouldFlat, depth, 0, source);
}

export const flat = /*#__PURE__*/ iterableCurry(__flat, {
  minArgs: 0,
  maxArgs: 2,
  validateArgs,
});
