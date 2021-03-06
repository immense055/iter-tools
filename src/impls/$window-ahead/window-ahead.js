/**
 * @generated-from ./$window-ahead.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable.js';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer.js';

export function* __windowAhead(source, size, { filler = undefined, useFiller = true } = {}) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  let len = 0;
  for (const value of source) {
    buffer.push(value);
    if (buffer.isFull()) {
      yield bufferReadProxy;
    }
    len++;
  }

  if (useFiller) {
    for (let i = len; i < size; i++) {
      buffer.push(filler);
    }
  }

  if (len > 0 && len < size) yield bufferReadProxy;

  for (let i = 0; i < Math.min(size, len) - 1; i++) {
    buffer.shift();
    if (useFiller) {
      buffer.push(filler);
    }
    yield bufferReadProxy;
  }
}

export const windowAhead = /*#__PURE__*/ iterableCurry(__windowAhead, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs(args) {
    if (typeof args[1] !== 'number') {
      throw new Error(`${'windowAhead'} must be passed a numeric size`);
    }
  },
});
