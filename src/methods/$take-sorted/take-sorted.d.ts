/* @macrome
 * @generated-from ./$take-sorted.d.ts
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable, ResultIterable } from '../../types/iterable';

declare function takeSorted<T>(iterable: SourceIterable<T>): ResultIterable<T>;

declare function takeSorted<T>(n: number): (source: SourceIterable<T>) => ResultIterable<T>;

declare function takeSorted<T>(
  n: number,
  func: (a: T, b: T) => number,
): (source: SourceIterable<T>) => ResultIterable<T>;

declare function takeSorted<T>(
  func: (a: T, b: T) => number,
): (source: SourceIterable<T>) => ResultIterable<T>;

declare function takeSorted<T>(n: number, source: SourceIterable<T>): ResultIterable<T>;

declare function takeSorted<T>(
  n: number,
  func: (a: T, b: T) => number,
  source: SourceIterable<T>,
): ResultIterable<T>;

declare function takeSorted<T>(
  func: (a: T, b: T) => number,
  source: SourceIterable<T>,
): ResultIterable<T>;

export default takeSorted;
