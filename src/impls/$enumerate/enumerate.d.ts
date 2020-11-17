/**
 * @generated-from ./$enumerate.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable, ResultIterable } from '../../types/iterable';

declare function enumerate<T>(iterable: SourceIterable<T>): ResultIterable<[number, T]>;

declare function enumerate<T>(
  firstIdx: number,
  source: SourceIterable<T>,
): ResultIterable<[number, T]>;

declare function enumerate(
  firstIdx: number,
): <T>(source: SourceIterable<T>) => ResultIterable<[number, T]>;

export default enumerate;