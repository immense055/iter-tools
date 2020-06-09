/* @macrome
 * @generated-from ./$tap.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';

export function* tap(source, callback) {
  let c = 0;
  for (const item of source) {
    callback(item, c++);
    yield item;
  }
}

export default iterableCurry(tap);
