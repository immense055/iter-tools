/* @macrome
 * @generated-from ./$cycle.spec.ts
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import assert from 'static-type-assert';
import { ResultIterable } from '../../../types/iterable';
import { cycle } from '../../..';

declare const Ø: never;

assert<ResultIterable<0 | 1 | 2>>(cycle(Ø as [0, 1, 2]));

assert<ResultIterable<never> | ResultIterable<0 | 1> | ResultIterable<string | number | boolean>>(
  cycle(Ø as [] | [0, 1] | [string, number, boolean]),
);

assert<ResultIterable<string | number | boolean>>(
  cycle(Ø as [] | [0, 1] | [string, number, boolean]),
);

assert<ResultIterable<string>>(cycle(Ø as string));

assert<ResultIterable<0 | 1 | 2>>(cycle(Ø as Set<0 | 1 | 2>));
