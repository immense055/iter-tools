import { asyncBuffer, asyncMap } from 'iter-tools-es';
import { delay } from '../../../internal/delay.js';
import { wrap } from '../../../test/helpers.js';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncBuffer', () => {
  describe('when source is empty', () => {
    it('yields no values', async () => {
      expect(await asyncUnwrap(asyncBuffer(2, null))).toEqual([]);
      expect(await asyncUnwrap(asyncBuffer(2, undefined))).toEqual([]);
      expect(await asyncUnwrap(asyncBuffer(2, asyncWrap([])))).toEqual([]);
    });
  });

  it('returns all values', async () => {
    expect(await asyncUnwrap(asyncBuffer(2, asyncWrap([1, 2, 3])))).toEqual([1, 2, 3]);
    expect(await asyncUnwrap(asyncBuffer(10, asyncWrap([1, 2, 3])))).toEqual([1, 2, 3]);
  });

  it('works on sync iterables', async () => {
    expect(await asyncUnwrap(asyncBuffer(2, wrap([1, 2, 3])))).toEqual([1, 2, 3]);
  });

  it('works the way the docs say it does', async () => {
    const source = asyncMap(() => delay(200), asyncWrap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

    const buffered = asyncBuffer(6, source);

    const nextTimed = async () => {
      const timeStart = Date.now();
      await buffered.next();
      const timeEnd = Date.now();
      return timeEnd - timeStart;
    };

    await delay(800);

    // Four values are already buffered here
    expect(await nextTimed()).toBeLessThan(20); // theretically 0
    expect(await nextTimed()).toBeLessThan(20);
    expect(await nextTimed()).toBeLessThan(20);
    expect(await nextTimed()).toBeLessThan(20);

    // After this point values are being requeste20as fast as they
    // can possibly be fulfilled, so buffer offers no additional benefits.
    expect(await nextTimed()).toBeLessThan(220); // theretically 200
    expect(await nextTimed()).toBeLessThan(220);

    // But if additional delays are incurred in processing values,
    // it has value again!
    await delay(300);

    expect(await nextTimed()).toBeLessThan(20);
    expect(await nextTimed()).toBeLessThan(120);
    expect(await nextTimed()).toBeLessThan(220);

    await buffered.return();
  });

  describe('when n is valid', () => {
    it('does not throw', async () => {
      expect(() => asyncBuffer(undefined as any, null)).not.toThrow();
      expect(() => asyncBuffer(0, null)).not.toThrow();
      expect(() => asyncBuffer(1024, null)).not.toThrow();
    });
  });

  describe('when n is unusable', () => {
    it('throws', async () => {
      expect(() => asyncBuffer('foo' as any, null)).toThrowErrorMatchingSnapshot();
      expect(() => asyncBuffer(-1 as any, null)).toThrowErrorMatchingSnapshot();
      expect(() => asyncBuffer(-Infinity as any, null)).toThrowErrorMatchingSnapshot();
    });
  });

  describe('when n is too large', () => {
    it('throws', async () => {
      expect(() => asyncBuffer(1025, null)).toThrowErrorMatchingSnapshot();
      expect(() => asyncBuffer(Infinity, null)).toThrowErrorMatchingSnapshot();
    });
  });

  describe('when iterable is not', () => {
    it('throws', async () => {
      expect(() => asyncBuffer(2, 4 as any)).toThrowErrorMatchingSnapshot();
    });
  });
});
