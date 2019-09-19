/**
 * @generated-from ./$is-sorted.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, MaybePromise } from '../../internal/iterable';
declare function isSorted(iterable: InputIterable<any>): MaybePromise<boolean>;
declare function isSorted<T = any>(
  comparator: (a: T, b: T) => number,
  iterable: InputIterable<T>,
): MaybePromise<boolean>;
export default isSorted;