/* @macrome
 * @generated-from ./$consume.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';

let warnedCallbackDeprecation = false;

const warnCallbackDeprecation = () => {
  if (!warnedCallbackDeprecation) {
    console.warn(
      `\`${'consume'}(callback, iterable)\` is deprecated and will be removed in iter-tools@8. ` +
        `Instead use ${'forEach'}(callback, iterable)`,
    );
    warnedCallbackDeprecation = true;
  }
};

export function consume(iterable, callback = () => {}) {
  let c = 0;
  for (const item of iterable) {
    callback(item, c++);
  }
}

export default iterableCurry(consume, {
  reduces: true,
  minArgs: 0,
  maxArgs: 1,

  validateArgs(args) {
    if (typeof args[0] === 'function') {
      warnCallbackDeprecation();
    }
  },
});
