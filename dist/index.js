"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=u(function(Y,a){
var o=require('@stdlib/assert-is-date-object/dist'),v=require('@stdlib/assert-is-integer/dist').isPrimitive,f=require('@stdlib/error-tools-fmtprodmsg/dist'),i=require('@stdlib/math-base-special-floor/dist'),c=require('@stdlib/time-current-year/dist'),g=52,q=53;function t(e){var r=e+i(e/4)-i(e/100)+i(e/400);return r%7}function l(e){var r;if(arguments.length)if(o(e))r=e.getFullYear();else if(v(e))r=e;else throw new TypeError(f('1QJDx',e));else r=c();return t(r)===4||t(r-1)===3?q:g}a.exports=l
});var m=n();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
