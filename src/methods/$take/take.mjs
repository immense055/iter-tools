/* @macrome
 * @generated-from ./$take.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';

export function* take(iterable, n) {
  let i = 0;
  for (const item of iterable) {
    if (i++ === n) break;
    yield item;
  }
}

export default iterableCurry(take);
