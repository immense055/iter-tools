/**
 * @generated-from ./$flat-map.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { map } from '../$map/map';
export function* flatMap(func, iterable) {
  for (const item of map(func, iterable)) {
    yield* item;
  }
}
export default iterableCurry(flatMap);