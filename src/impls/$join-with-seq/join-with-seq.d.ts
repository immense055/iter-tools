/**
 * @generated-from ./$join-with-seq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Wrappable as SyncWrappable, Wrappable, IterableIterator } from '../../types/iterable';

declare function joinWithSeq<W, T>(
  seq: SyncWrappable<W>,
  source: Wrappable<Wrappable<T>>,
): IterableIterator<T | W>;

declare function joinWithSeq<W>(
  seq: SyncWrappable<W>,
): <T>(source: Wrappable<Wrappable<T>>) => IterableIterator<T | W>;

export { joinWithSeq };
