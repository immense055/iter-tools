import { $, $isSync, $async, $await } from '../../../../generate/async.macro.cjs';

import { $includes } from 'iter-tools-es';
import { $wrap } from '../../../test/$helpers.js';

describe($`includes`, () => {
  describe('when iterable includes value', () => {
    it(
      'returns true',
      $async(() => {
        expect($await($includes(1, $wrap([1, 2, 3])))).toBe(true);
        expect($await($includes(2, $wrap([1, 2, 3])))).toBe(true);
        expect($await($includes(3, $wrap([1, 2, 3])))).toBe(true);
      }),
    );
  });

  describe('when iterable does not include value', () => {
    it(
      'returns false',
      $async(() => {
        expect($await($includes(4, $wrap([1, 2, 3])))).toBe(false);
        expect($await($includes(null, $wrap([1, 2, 3])))).toBe(false);
      }),
    );
  });

  describe('when iterable is empty', () => {
    it(
      'returns false',
      $async(() => {
        expect($await($includes(undefined, $wrap([])))).toBe(false);
      }),
    );
  });

  describe('when same function is specified', () => {
    const same = (a: number, b: number) => Math.abs(a) === Math.abs(b);
    it(
      'uses same value to do comparison',
      $async(() => {
        expect($await($includes(same, -2, $wrap([1, 2, 3])))).toBe(true);
        expect($await($includes(() => false, 2, $wrap([1, 2, 3])))).toBe(false);
      }),
    );
  });

  if ($isSync) {
    describe('when iterable is a string', () => {
      it(
        'warns',
        $async(() => {
          $includes([], 'abc');
          expect(console.warn).callsMatchSnapshot();
        }),
      );
    });
  }
});
