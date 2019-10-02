/**
 * @generated-from ./$first-or.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { AsyncIterable } from '../../../types/async-iterable';
import { asyncFirstOr } from '../../..';
declare const Ø: never;
assert<Promise<null>>(asyncFirstOr(Ø as null, Ø as []));
assert<Promise<0>>(asyncFirstOr(Ø as null, Ø as [0, 1, 2, 3]));
assert<Promise<number>>(asyncFirstOr(Ø as null, Ø as [number, ...any[]]));
assert<Promise<number | null>>(asyncFirstOr(Ø as null, Ø as AsyncIterable<number>));
assert<Promise<string | null>>(asyncFirstOr(Ø as null, Ø as string));
