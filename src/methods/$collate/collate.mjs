/* @macrome
 * @generated-from ./$collate.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';

import { interleave } from '../$interleave/interleave';

function* byComparison({ comparator }, canTakeAny, ...buffers) {
  let candidateBuffer;
  while ((candidateBuffer = canTakeAny())) {
    let candidateItem = candidateBuffer.peek();

    for (const buffer of buffers) {
      const item = buffer.peek();
      if (buffer.canTake() && comparator(candidateItem, item) < 0) {
        candidateItem = item;
        candidateBuffer = buffer;
      }
    }

    yield candidateBuffer.take();
  }
}

export function collate(sources, comparator) {
  return interleave(sources, byComparison, {
    comparator,
  });
}

export default iterableCurry(collate, {
  variadic: true,
});
