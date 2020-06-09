/* @macrome
 * @generated-from ./$split.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncMap } from '../$map/async-map';

function* iterableOf(item) {
  yield item;
}

export function asyncSplit(source) {
  // String iterators already return an exploded version of the string.
  if (typeof source === 'string') {
    return source;
  } else {
    return asyncMap(source, item => iterableOf(item));
  }
}

export default asyncSplit;
