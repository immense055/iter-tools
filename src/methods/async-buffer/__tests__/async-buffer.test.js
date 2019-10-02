import { asyncBuffer, asyncToArray } from '../../..';
import { AsyncIterable } from '../../../types/async-iterable';
import delay from '../../../internal/delay';

function intermittent(): AsyncIterable<number> {
  const sequence = [{ delay: 0, value: 0 }, { delay: 400, value: 1 }, { delay: 0, value: 2 }];

  return {
    async *[Symbol.asyncIterator]() {
      for (const item of sequence) {
        await delay(item.delay);
        yield item.value;
      }
    },
  };
}

describe('asyncBuffer', () => {
  it('does not buffers', async () => {
    const iter = intermittent()[Symbol.asyncIterator]();
    const d0 = Date.now();
    await iter.next(); // 0
    await delay(400);

    const d1 = Date.now();
    await iter.next(); // 1
    await delay(400);

    const d2 = Date.now();
    await iter.next(); // 2
    await delay(400);

    const d3 = Date.now();

    expect(d1 - d0).toBeLessThan(700);
    expect(d2 - d1).toBeGreaterThan(700);
    expect(d3 - d2).toBeLessThan(700);
  });

  it('buffers', async () => {
    const iter = asyncBuffer(2, intermittent());
    const d0 = Date.now();
    await iter.next(); // 0
    await delay(400);

    const d1 = Date.now();
    await iter.next(); // 1
    await delay(400);

    const d2 = Date.now();
    await iter.next(); // 2
    await delay(400);

    const d3 = Date.now();

    expect(d1 - d0).toBeLessThan(700);
    expect(d2 - d1).toBeLessThan(700);
    expect(d3 - d2).toBeLessThan(700);
  });

  it('returns all items', async () => {
    const iter = asyncBuffer(2, intermittent());
    expect(await asyncToArray(iter)).toEqual([0, 1, 2]);
  });

  it('buffer using curry', async () => {
    const iter = asyncBuffer(2)(intermittent());
    expect(await asyncToArray(iter)).toEqual([0, 1, 2]);
  });

  it('buffer (bigger then iterable)', async () => {
    const iter = asyncBuffer(10, intermittent());
    expect(await asyncToArray(iter)).toEqual([0, 1, 2]);
  });
});
