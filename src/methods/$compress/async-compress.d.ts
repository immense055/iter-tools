/* @macrome
 * @generated-from ./$compress.d.ts
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncCompress<T>(
  source: AsyncSourceIterable<T>,
  included: AsyncSourceIterable<boolean>,
): AsyncResultIterable<T>;

export default asyncCompress;
