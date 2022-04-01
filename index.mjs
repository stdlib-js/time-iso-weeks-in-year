// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";var i=e,n=t.isPrimitive,a=s,d=r;function l(e){return(e+d(e/4)-d(e/100)+d(e/400))%7}var m=function(e){var t;if(arguments.length)if(i(e))t=e.getFullYear();else{if(!n(e))throw new TypeError(a("invalid argument. Must provide either an integer or a `Date` object. Value: `%s`.",e));t=e}else t=(new Date).getFullYear();return 4===l(t)||3===l(t-1)?53:52};export{m as default};
//# sourceMappingURL=index.mjs.map
