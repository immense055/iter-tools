/**
 * @generated-from ./not-undefined.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { notUndefined } from 'iter-tools-es';

describe('notUndefined', () => {
  describe('when value is undefined', () => {
    it('returns false', () => {
      expect(notUndefined(undefined)).toBe(false);
    });
  });

  describe('when value is not undefined', () => {
    it('returns true', () => {
      expect(notUndefined(null)).toBe(true);
      expect(notUndefined(0)).toBe(true);
      expect(notUndefined({})).toBe(true);
      expect(notUndefined(NaN)).toBe(true);
    });
  });
});