/* @macrome
 * @generated-from ./$last-or.d.ts
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncSourceIterable } from '../../types/async-iterable';

declare function asyncLastOr<E, T>(
  whenEmpty: E,
  iterable: AsyncSourceIterable<T>,
): T | E | Promise<T | E>;

export default asyncLastOr;
