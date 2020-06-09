/* @macrome
 * @generated-from ./$batch.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';

export async function* asyncBatch(source, size) {
  let batch = [];
  for await (const item of source) {
    batch.push(item);
    if (batch.length === size) {
      yield batch;
      batch = [];
    }
  }
  if (batch.length) {
    yield batch;
  }
}

export default asyncIterableCurry(asyncBatch, {
  validateArgs([size]) {
    if (typeof size !== 'number' || size < 1) {
      throw new TypeError('batch size should be a number greater than zero');
    }
  },
});
