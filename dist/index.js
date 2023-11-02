"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=s(function(p,a){
var u=require('@stdlib/assert-is-date-object/dist'),o=require('@stdlib/assert-is-integer/dist').isPrimitive,v=require('@stdlib/error-tools-fmtprodmsg/dist'),i=require('@stdlib/math-base-special-floor/dist'),f=require('@stdlib/time-current-year/dist'),c=52,g=53;function t(r){var e=r+i(r/4)-i(r/100)+i(r/400);return e%7}function q(r){var e;if(arguments.length)if(u(r))e=r.getFullYear();else if(o(r))e=r;else throw new TypeError(v('1QJDx',r));else e=f();return t(e)===4||t(e-1)===3?g:c}a.exports=q
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
