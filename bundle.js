// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).isoWeeksInYear=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return e&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,i=n;var a=function(r){return i.call(r)},o=Object.prototype.hasOwnProperty;var u=function(r,e){return null!=r&&o.call(r,e)},c="function"==typeof Symbol?Symbol.toStringTag:"",f=u,s=c,l=n;var p=a,v=function(r){var e,t,n;if(null==r)return l.call(r);t=r[s],e=f(r,s);try{r[s]=void 0}catch(e){return l.call(r)}return n=l.call(r),e?r[s]=t:delete r[s],n},g=t()?v:p,d=Date.prototype.getDay;var h=g,m=function(r){try{return d.call(r),!0}catch(r){return!1}},b=t();var y=function(r){return"object"==typeof r&&(r instanceof Date||(b?m(r):"[object Date]"===h(r)))},w="function"==typeof Object.defineProperty?Object.defineProperty:null;var j=function(){try{return w({},"x",{}),!0}catch(r){return!1}},E=Object.defineProperty,P=Object.prototype,_=P.toString,T=P.__defineGetter__,O=P.__defineSetter__,x=P.__lookupGetter__,V=P.__lookupSetter__;var S=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===_.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===_.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(x.call(r,e)||V.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r},k=E,I=S,A=j()?k:I;var F=function(r,e,t){A(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},R=F;var $=function(r){return"number"==typeof r},M=Number,C=M.prototype.toString;var N=g,B=M,D=function(r){try{return C.call(r),!0}catch(r){return!1}},G=t();var L=function(r){return"object"==typeof r&&(r instanceof B||(G?D(r):"[object Number]"===N(r)))},W=$,Y=L;var Z=R,X=function(r){return W(r)||Y(r)},z=L;Z(X,"isPrimitive",$),Z(X,"isObject",z);var U=X,q=Number.POSITIVE_INFINITY,H=M.NEGATIVE_INFINITY,J=Math.floor,K=J;var Q=function(r){return K(r)===r},rr=q,er=H,tr=Q;var nr=function(r){return r<rr&&r>er&&tr(r)},ir=U.isPrimitive,ar=nr;var or=function(r){return ir(r)&&ar(r)},ur=U.isObject,cr=nr;var fr=function(r){return ur(r)&&cr(r.valueOf())},sr=or,lr=fr;var pr=R,vr=function(r){return sr(r)||lr(r)},gr=fr;pr(vr,"isPrimitive",or),pr(vr,"isObject",gr);var dr=vr;var hr=function(r){return"string"==typeof r},mr=String.prototype.valueOf;var br=g,yr=function(r){try{return mr.call(r),!0}catch(r){return!1}},wr=t();var jr=function(r){return"object"==typeof r&&(r instanceof String||(wr?yr(r):"[object String]"===br(r)))},Er=hr,Pr=jr;var _r=R,Tr=function(r){return Er(r)||Pr(r)},Or=jr;_r(Tr,"isPrimitive",hr),_r(Tr,"isObject",Or);var xr=Tr,Vr=Q;var Sr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Vr(r.length)&&r.length>=0&&r.length<=9007199254740991};var kr=function(r){return r!=r},Ir=U.isPrimitive,Ar=kr;var Fr=function(r){return Ir(r)&&Ar(r)},Rr=U.isObject,$r=kr;var Mr=function(r){return Rr(r)&&$r(r.valueOf())},Cr=Fr,Nr=Mr;var Br=R,Dr=function(r){return Cr(r)||Nr(r)},Gr=Mr;Br(Dr,"isPrimitive",Fr),Br(Dr,"isObject",Gr);var Lr=Sr,Wr=dr.isPrimitive,Yr=xr.isPrimitive,Zr=Dr.isPrimitive;var Xr=function(r,e,t){var n,i,a;if(!Lr(r)&&!Yr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Wr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Yr(r)){if(!Yr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Zr(e)){for(a=i;a<n;a++)if(Zr(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},zr=Xr,Ur=xr.isPrimitive;var qr=function(r){if(!Ur(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Hr=xr.isPrimitive;var Jr=function(r){if(!Hr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Kr=qr,Qr=Jr,re=xr.isPrimitive;var ee=function(r){return re(r)&&r===Qr(r)&&r!==Kr(r)},te=q,ne=H;var ie=function(r){return r==r&&r>ne&&r<te},ae=dr.isPrimitive;var oe=function(r){return ae(r)&&r>=0},ue=dr.isObject;var ce=function(r){return ue(r)&&r.valueOf()>=0},fe=oe,se=ce;var le=R,pe=function(r){return fe(r)||se(r)},ve=ce;le(pe,"isPrimitive",oe),le(pe,"isObject",ve);var ge=pe.isPrimitive,de=xr.isPrimitive;var he=function(r,e){var t,n;if(!de(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ge(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},me=dr.isPrimitive,be=xr.isPrimitive;var ye=function(r,e,t){var n,i;if(!be(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!be(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!me(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},we=he,je=ye;var Ee=function(r,e,t){var n=!1,i=e-r.length;return i<0||(je(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+we("0",i):we("0",i)+r,n&&(r="-"+r)),r},Pe=ee,_e=Jr,Te=qr,Oe=ie,xe=U.isPrimitive,Ve=Ee;var Se=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Oe(n)){if(!xe(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ve(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ve(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Pe(r.specifier)?_e(t):Te(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},ke=xr.isPrimitive,Ie=/[-\/\\^$*+?.()|[\]{}]/g;var Ae=function(r){var e,t;if(!ke(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Ie,"\\$&"):(e=(e=r.substring(1,t)).replace(Ie,"\\$&"),r=r[0]+e+r.substring(t))},Fe=/./;var Re=function(r){return"boolean"==typeof r},$e=Boolean.prototype.toString;var Me=g,Ce=function(r){try{return $e.call(r),!0}catch(r){return!1}},Ne=t();var Be=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ne?Ce(r):"[object Boolean]"===Me(r)))},De=Re,Ge=Be;var Le=R,We=function(r){return De(r)||Ge(r)},Ye=Be;Le(We,"isPrimitive",Re),Le(We,"isObject",Ye);var Ze=We;var Xe=function(){return new Function("return this;")()},ze="object"==typeof self?self:null,Ue="object"==typeof window?window:null,qe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},He="object"==typeof qe?qe:null;module.exports=He;var Je=Ze.isPrimitive,Ke=Xe,Qe=ze,rt=Ue,et=r(Object.freeze({__proto__:null}));var tt=function(r){if(arguments.length){if(!Je(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ke()}if(Qe)return Qe;if(rt)return rt;if(et)return et;throw new Error("unexpected error. Unable to resolve global object.")},nt=tt(),it=nt.document&&nt.document.childNodes,at=Int8Array,ot=Fe,ut=it,ct=at;var ft=function(){return"function"==typeof ot||"object"==typeof ct||"function"==typeof ut};var st=function(){return/^\s*function\s*([^(]*)/i},lt=st;R(lt,"REGEXP",st());var pt=lt,vt=g;var gt=Array.isArray?Array.isArray:function(r){return"[object Array]"===vt(r)};var dt=function(r){return null!==r&&"object"==typeof r};R(dt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!gt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dt));var ht=dt;var mt=g,bt=pt.REGEXP,yt=function(r){return ht(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wt=function(r){var e,t,n;if(("Object"===(t=mt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=bt.exec(n.toString()))return e[1]}return yt(r)?"Buffer":t},jt=wt;var Et=wt;var Pt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?jt(r).toLowerCase():e},_t=function(r){return Et(r).toLowerCase()},Tt=ft()?_t:Pt;var Ot=function(r){return"function"===Tt(r)},xt=RegExp.prototype.exec;var Vt=g,St=function(r){try{return xt.call(r),!0}catch(r){return!1}},kt=t();var It=Ae,At=Ot,Ft=xr.isPrimitive,Rt=function(r){return"object"==typeof r&&(r instanceof RegExp||(kt?St(r):"[object RegExp]"===Vt(r)))};var $t=ee,Mt=Jr,Ct=qr,Nt=function(r,e,t){if(!Ft(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Ft(e))e=It(e),e=new RegExp(e,"g");else if(!Rt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Ft(t)&&!At(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Bt=ie,Dt=U.isPrimitive,Gt=function(r){return Math.abs(r)},Lt=/e\+(\d)$/,Wt=/e-(\d)$/,Yt=/^(\d+)$/,Zt=/^(\d+)e/,Xt=/\.0$/,zt=/\.0*e/,Ut=/(\..*[^0])0*e/;var qt=function(r){var e,t,n=parseFloat(r.arg);if(!Bt(n)){if(!Dt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Gt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Nt(t,Ut,"$1e"),t=Nt(t,zt,"e"),t=Nt(t,Xt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Nt(t,Lt,"e+0$1"),t=Nt(t,Wt,"e-0$1"),r.alternate&&(t=Nt(t,Yt,"$1."),t=Nt(t,Zt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=$t(r.specifier)?Mt(t):Ct(t)},Ht=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Jt=he;var Kt=xr.isPrimitive,Qt=zr,rn=kr,en=Se,tn=qt,nn=function(r){var e,t,n,i,a;for(e=0,n=[],a=Ht.exec(r);a;)(t=r.slice(e,Ht.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Ht.lastIndex,a=Ht.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},an=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Jt(" ",n):Jt(" ",n)+r},on=Ee,un=String.fromCharCode;var cn=function(r){var e,t,n,i,a,o,u,c,f;if(!Kt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=nn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Kt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Qt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,rn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,rn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=en(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!rn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=rn(a)?String(n.arg):un(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=tn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=on(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=an(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},fn=y,sn=dr.isPrimitive,ln=cn,pn=J;function vn(r){return(r+pn(r/4)-pn(r/100)+pn(r/400))%7}var gn=function(r){var e;if(arguments.length)if(fn(r))e=r.getFullYear();else{if(!sn(r))throw new TypeError(ln("invalid argument. Must provide either an integer or a `Date` object. Value: `%s`.",r));e=r}else e=(new Date).getFullYear();return 4===vn(e)||3===vn(e-1)?53:52};return gn}));
//# sourceMappingURL=bundle.js.map
