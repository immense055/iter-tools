/* @macrome
 * @generated-from ./$starts-with-any.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncStartsWith_ } from '../$starts-with_/async-starts-with_';

const config = {
  any: true,
  subseq: false,
};

export function asyncStartsWithAny(iterable, value) {
  return asyncStartsWith_(iterable, config, value);
}

export default asyncIterableCurry(asyncStartsWithAny, {
  reduces: true,
});
