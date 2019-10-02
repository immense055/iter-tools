/**
 * @generated-from ./async-interleave.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncIterable } from '../../../types/async-iterable';
import { asyncInterleave, AsyncInterleaveBuffer, asyncToArray } from '../../..';
describe('asyncInterleave', () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [7, 8, 9];
  it('can be used to implement a round robin interleave', async () => {
    const roundRobin = asyncInterleave(async function*(
      canTakeAny: () => Promise<AsyncInterleaveBuffer<number> | null>,
      a: AsyncInterleaveBuffer<number>,
      b: AsyncInterleaveBuffer<number>,
      c: AsyncInterleaveBuffer<number>,
    ) {
      while (await canTakeAny()) {
        if (await a.canTake()) yield await a.take();
        if (await b.canTake()) yield await b.take();
        if (await c.canTake()) yield await c.take();
      }
    });
    expect(await asyncToArray(roundRobin(a, b, c))).toEqual([1, 4, 7, 2, 5, 8, 3, 6, 9]);
  });
  it('can be passed options for the generator', async () => {
    const options = {};
    expect.assertions(1);
    await asyncToArray(
      asyncInterleave(
        async function*(o: {}): AsyncIterable<any> {
          expect(o).toBe(options);
        },
        options,
        null,
      ),
    );
  });
});
