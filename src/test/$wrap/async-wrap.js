/**
 * @generated-from ./$wrap.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

const wrappedIterables = [];

async function* asyncWrap_(iterable) {
  yield* iterable;
}

class AsyncTestWrapper {
  constructor(source, deep = false) {
    this.source = source[Symbol.asyncIterator]();
    this.deep = deep;
    this.started = false;
    this.returned = false;
    this.done = false;

    wrappedIterables.push(this);
  }

  async next() {
    this.started = true;
    const { done, value } = await this.source.next();
    this.done = done;

    return {
      value:
        this.deep && Array.isArray(value) ? new AsyncTestWrapper(asyncWrap_(value), true) : value,
      done,
    };
  }

  async return(value) {
    if (this.done) {
      throw new Error('Called return on an iterator that was done');
    }
    this.returned = this.done = true;
    await this.source.return();
    return { value, done: true };
  }

  [Symbol.asyncIterator]() {
    return this;
  }
}

export function asyncWrap(iterable) {
  return new AsyncTestWrapper(asyncWrap_(iterable));
}

export function asyncWrapDeep(iterable) {
  return new AsyncTestWrapper(asyncWrap_(iterable), true);
}

beforeEach(() => {
  wrappedIterables.length = 0;
});

afterEach(() => {
  for (const wrapped of wrappedIterables) {
    if (wrapped.started && !wrapped.done) {
      throw new Error('Not all iterables returned');
    }
  }
});
