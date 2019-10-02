import { $MaybePromise } from '../../../generate/async.macro';

import { $SourceIterable } from '../../types/$iterable';

declare function $toArray<T>(iterable: $SourceIterable<T>): $MaybePromise<T[]>;

export default $toArray;
