/* @macrome
 * @generated-from ./$join-with.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';
import { joinWithSubseq } from '../$join-with-subseq/join-with-subseq';

export function joinWith(source, separator) {
  return joinWithSubseq(source, [separator]);
}

export default iterableCurry(joinWith);
