/**
 * @generated-from ./$filter.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable, ResultIterable } from '../../types/iterable';
declare function filter<S extends T, T = any>(
  func: (item: T, i: number) => item is S,
): (iterable: SourceIterable<T>) => ResultIterable<S>;
declare function filter<T = any>(
  func: (item: T, i: number) => boolean,
): (iterable: SourceIterable<T>) => ResultIterable<T>;
declare function filter<S extends T, T = any>(
  func: (item: T, i: number) => item is S,
  iterable: SourceIterable<T>,
): ResultIterable<S>;
declare function filter<T = any>(
  func: (item: T, i: number) => boolean,
  iterable: SourceIterable<T>,
): ResultIterable<T>;
export default filter;
