"use strict";import{a as t,b as Lr,d as vo,e as Dr,f as bo}from"../../../__chunks__/chunk-RGFNPOTZ.js";var Ir=Lr((_m,Er)=>{"use strict";bo();var Rr=Object.create,so=Object.defineProperty,Pr=Object.defineProperties,Or=Object.getOwnPropertyDescriptor,Mr=Object.getOwnPropertyDescriptors,Vr=Object.getOwnPropertyNames,No=Object.getOwnPropertySymbols,Wr=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable,mt=(r,a,c)=>a in r?so(r,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[a]=c,U=(r,a)=>{for(var c in a||(a={}))tt.call(a,c)&&mt(r,c,a[c]);if(No)for(var c of No(a))Zt.call(a,c)&&mt(r,c,a[c]);return r},Q=(r,a)=>Pr(r,Mr(a)),Yt=(r,a)=>{var c={};for(var d in r)tt.call(r,d)&&a.indexOf(d)<0&&(c[d]=r[d]);if(r!=null&&No)for(var d of No(r))a.indexOf(d)<0&&Zt.call(r,d)&&(c[d]=r[d]);return c},rt=(r,a)=>()=>(r&&(a=r(r=0)),a),To=(r,a)=>()=>(a||r((a={exports:{}}).exports,a),a.exports),Co=(r,a)=>{for(var c in a)so(r,c,{get:a[c],enumerable:!0})},Kt=(r,a,c,d)=>{if(a&&typeof a=="object"||typeof a=="function")for(let m of Vr(a))!tt.call(r,m)&&m!==c&&so(r,m,{get:()=>a[m],enumerable:!(d=Or(a,m))||d.enumerable});return r},u=(r,a,c)=>(c=r!=null?Rr(Wr(r)):{},Kt(a||!r||!r.__esModule?so(c,"default",{value:r,enumerable:!0}):c,r)),no=r=>Kt(so({},"__esModule",{value:!0}),r),Me=(r,a,c)=>new Promise((d,m)=>{var _=b=>{try{p(c.next(b))}catch(v){m(v)}},i=b=>{try{p(c.throw(b))}catch(v){m(v)}},p=b=>b.done?d(b.value):Promise.resolve(b.value).then(_,i);p((c=c.apply(r,a)).next())}),zr=To(r=>{"use strict";l(),r.byteLength=b,r.toByteArray=w,r.fromByteArray=I;var a=[],c=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,i=m.length;_<i;++_)a[_]=m[_],c[m.charCodeAt(_)]=_;var _,i;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63;function p(g){var k=g.length;if(k%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var S=g.indexOf("=");S===-1&&(S=k);var E=S===k?0:4-S%4;return[S,E]}function b(g){var k=p(g),S=k[0],E=k[1];return(S+E)*3/4-E}function v(g,k,S){return(k+S)*3/4-S}function w(g){var k,S=p(g),E=S[0],N=S[1],T=new d(v(g,E,N)),F=0,R=N>0?E-4:E,O;for(O=0;O<R;O+=4)k=c[g.charCodeAt(O)]<<18|c[g.charCodeAt(O+1)]<<12|c[g.charCodeAt(O+2)]<<6|c[g.charCodeAt(O+3)],T[F++]=k>>16&255,T[F++]=k>>8&255,T[F++]=k&255;return N===2&&(k=c[g.charCodeAt(O)]<<2|c[g.charCodeAt(O+1)]>>4,T[F++]=k&255),N===1&&(k=c[g.charCodeAt(O)]<<10|c[g.charCodeAt(O+1)]<<4|c[g.charCodeAt(O+2)]>>2,T[F++]=k>>8&255,T[F++]=k&255),T}function h(g){return a[g>>18&63]+a[g>>12&63]+a[g>>6&63]+a[g&63]}function x(g,k,S){for(var E,N=[],T=k;T<S;T+=3)E=(g[T]<<16&16711680)+(g[T+1]<<8&65280)+(g[T+2]&255),N.push(h(E));return N.join("")}function I(g){for(var k,S=g.length,E=S%3,N=[],T=16383,F=0,R=S-E;F<R;F+=T)N.push(x(g,F,F+T>R?R:F+T));return E===1?(k=g[S-1],N.push(a[k>>2]+a[k<<4&63]+"==")):E===2&&(k=(g[S-2]<<8)+g[S-1],N.push(a[k>>10]+a[k>>4&63]+a[k<<2&63]+"=")),N.join("")}}),Gr=To(r=>{l(),r.read=function(a,c,d,m,_){var i,p,b=_*8-m-1,v=(1<<b)-1,w=v>>1,h=-7,x=d?_-1:0,I=d?-1:1,g=a[c+x];for(x+=I,i=g&(1<<-h)-1,g>>=-h,h+=b;h>0;i=i*256+a[c+x],x+=I,h-=8);for(p=i&(1<<-h)-1,i>>=-h,h+=m;h>0;p=p*256+a[c+x],x+=I,h-=8);if(i===0)i=1-w;else{if(i===v)return p?NaN:(g?-1:1)*(1/0);p=p+Math.pow(2,m),i=i-w}return(g?-1:1)*p*Math.pow(2,i-m)},r.write=function(a,c,d,m,_,i){var p,b,v,w=i*8-_-1,h=(1<<w)-1,x=h>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=m?0:i-1,k=m?1:-1,S=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(b=isNaN(c)?1:0,p=h):(p=Math.floor(Math.log(c)/Math.LN2),c*(v=Math.pow(2,-p))<1&&(p--,v*=2),p+x>=1?c+=I/v:c+=I*Math.pow(2,1-x),c*v>=2&&(p++,v/=2),p+x>=h?(b=0,p=h):p+x>=1?(b=(c*v-1)*Math.pow(2,_),p=p+x):(b=c*Math.pow(2,x-1)*Math.pow(2,_),p=0));_>=8;a[d+g]=b&255,g+=k,b/=256,_-=8);for(p=p<<_|b,w+=_;w>0;a[d+g]=p&255,g+=k,p/=256,w-=8);a[d+g-k]|=S*128}}),jr=To(r=>{"use strict";l();var a=zr(),c=Gr(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=p,r.SlowBuffer=N,r.INSPECT_MAX_BYTES=50;var m=2147483647;r.kMaxLength=m,p.TYPED_ARRAY_SUPPORT=_(),!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(n){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.buffer}}),Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.byteOffset}});function i(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,p.prototype),o}function p(e,o,n){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return b(e,o,n)}p.poolSize=8192;function b(e,o,n){if(typeof e=="string")return x(e,o);if(ArrayBuffer.isView(e))return g(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Ee(e,ArrayBuffer)||e&&Ee(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Ee(e,SharedArrayBuffer)||e&&Ee(e.buffer,SharedArrayBuffer)))return k(e,o,n);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(s!=null&&s!==e)return p.from(s,o,n);var f=S(e);if(f)return f;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return p.from(e[Symbol.toPrimitive]("string"),o,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}p.from=function(e,o,n){return b(e,o,n)},Object.setPrototypeOf(p.prototype,Uint8Array.prototype),Object.setPrototypeOf(p,Uint8Array);function v(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function w(e,o,n){return v(e),e<=0?i(e):o!==void 0?typeof n=="string"?i(e).fill(o,n):i(e).fill(o):i(e)}p.alloc=function(e,o,n){return w(e,o,n)};function h(e){return v(e),i(e<0?0:E(e)|0)}p.allocUnsafe=function(e){return h(e)},p.allocUnsafeSlow=function(e){return h(e)};function x(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!p.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var n=T(e,o)|0,s=i(n),f=s.write(e,o);return f!==n&&(s=s.slice(0,f)),s}function I(e){for(var o=e.length<0?0:E(e.length)|0,n=i(o),s=0;s<o;s+=1)n[s]=e[s]&255;return n}function g(e){if(Ee(e,Uint8Array)){var o=new Uint8Array(e);return k(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function k(e,o,n){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(n||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&n===void 0?s=new Uint8Array(e):n===void 0?s=new Uint8Array(e,o):s=new Uint8Array(e,o,n),Object.setPrototypeOf(s,p.prototype),s}function S(e){if(p.isBuffer(e)){var o=E(e.length)|0,n=i(o);return n.length===0||e.copy(n,0,0,o),n}if(e.length!==void 0)return typeof e.length!="number"||Bo(e.length)?i(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function E(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function N(e){return+e!=e&&(e=0),p.alloc(+e)}p.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==p.prototype},p.compare=function(e,o){if(Ee(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),Ee(o,Uint8Array)&&(o=p.from(o,o.offset,o.byteLength)),!p.isBuffer(e)||!p.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,s=o.length,f=0,y=Math.min(n,s);f<y;++f)if(e[f]!==o[f]){n=e[f],s=o[f];break}return n<s?-1:s<n?1:0},p.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return p.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var s=p.allocUnsafe(o),f=0;for(n=0;n<e.length;++n){var y=e[n];if(Ee(y,Uint8Array))f+y.length>s.length?p.from(y).copy(s,f):Uint8Array.prototype.set.call(s,y,f);else if(p.isBuffer(y))y.copy(s,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=y.length}return s};function T(e,o){if(p.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Ee(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&n===0)return 0;for(var f=!1;;)switch(o){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Do(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return pt(e).length;default:if(f)return s?-1:Do(e).length;o=(""+o).toLowerCase(),f=!0}}p.byteLength=T;function F(e,o,n){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,o>>>=0,n<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return de(this,o,n);case"utf8":case"utf-8":return P(this,o,n);case"ascii":return re(this,o,n);case"latin1":case"binary":return ye(this,o,n);case"base64":return B(this,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,o,n);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}p.prototype._isBuffer=!0;function R(e,o,n){var s=e[o];e[o]=e[n],e[n]=s}p.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)R(this,o,o+1);return this},p.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)R(this,o,o+3),R(this,o+1,o+2);return this},p.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)R(this,o,o+7),R(this,o+1,o+6),R(this,o+2,o+5),R(this,o+3,o+4);return this},p.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?P(this,0,e):F.apply(this,arguments)},p.prototype.toLocaleString=p.prototype.toString,p.prototype.equals=function(e){if(!p.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:p.compare(this,e)===0},p.prototype.inspect=function(){var e="",o=r.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(p.prototype[d]=p.prototype.inspect),p.prototype.compare=function(e,o,n,s,f){if(Ee(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),s===void 0&&(s=0),f===void 0&&(f=this.length),o<0||n>e.length||s<0||f>this.length)throw new RangeError("out of range index");if(s>=f&&o>=n)return 0;if(s>=f)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,s>>>=0,f>>>=0,this===e)return 0;for(var y=f-s,q=n-o,V=Math.min(y,q),J=this.slice(s,f),W=e.slice(o,n),$=0;$<V;++$)if(J[$]!==W[$]){y=J[$],q=W[$];break}return y<q?-1:q<y?1:0};function O(e,o,n,s,f){if(e.length===0)return-1;if(typeof n=="string"?(s=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Bo(n)&&(n=f?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(f)return-1;n=e.length-1}else if(n<0)if(f)n=0;else return-1;if(typeof o=="string"&&(o=p.from(o,s)),p.isBuffer(o))return o.length===0?-1:_e(e,o,n,s,f);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?f?Uint8Array.prototype.indexOf.call(e,o,n):Uint8Array.prototype.lastIndexOf.call(e,o,n):_e(e,[o],n,s,f);throw new TypeError("val must be string, number or Buffer")}function _e(e,o,n,s,f){var y=1,q=e.length,V=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(e.length<2||o.length<2)return-1;y=2,q/=2,V/=2,n/=2}function J(dt,st){return y===1?dt[st]:dt.readUInt16BE(st*y)}var W;if(f){var $=-1;for(W=n;W<q;W++)if(J(e,W)===J(o,$===-1?0:W-$)){if($===-1&&($=W),W-$+1===V)return $*y}else $!==-1&&(W-=W-$),$=-1}else for(n+V>q&&(n=q-V),W=n;W>=0;W--){for(var se=!0,fo=0;fo<V;fo++)if(J(e,W+fo)!==J(o,fo)){se=!1;break}if(se)return W}return-1}p.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1},p.prototype.indexOf=function(e,o,n){return O(this,e,o,n,!0)},p.prototype.lastIndexOf=function(e,o,n){return O(this,e,o,n,!1)};function G(e,o,n,s){n=Number(n)||0;var f=e.length-n;s?(s=Number(s),s>f&&(s=f)):s=f;var y=o.length;s>y/2&&(s=y/2);for(var q=0;q<s;++q){var V=parseInt(o.substr(q*2,2),16);if(Bo(V))return q;e[n+q]=V}return q}function K(e,o,n,s){return uo(Do(o,e.length-n),e,n,s)}function z(e,o,n,s){return uo(Tr(o),e,n,s)}function ue(e,o,n,s){return uo(pt(o),e,n,s)}function pe(e,o,n,s){return uo(Cr(o,e.length-n),e,n,s)}p.prototype.write=function(e,o,n,s){if(o===void 0)s="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")s=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,s===void 0&&(s="utf8")):(s=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var f=this.length-o;if((n===void 0||n>f)&&(n=f),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var y=!1;;)switch(s){case"hex":return G(this,e,o,n);case"utf8":case"utf-8":return K(this,e,o,n);case"ascii":case"latin1":case"binary":return z(this,e,o,n);case"base64":return ue(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,e,o,n);default:if(y)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),y=!0}},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function B(e,o,n){return o===0&&n===e.length?a.fromByteArray(e):a.fromByteArray(e.slice(o,n))}function P(e,o,n){n=Math.min(e.length,n);for(var s=[],f=o;f<n;){var y=e[f],q=null,V=y>239?4:y>223?3:y>191?2:1;if(f+V<=n){var J,W,$,se;switch(V){case 1:y<128&&(q=y);break;case 2:J=e[f+1],(J&192)===128&&(se=(y&31)<<6|J&63,se>127&&(q=se));break;case 3:J=e[f+1],W=e[f+2],(J&192)===128&&(W&192)===128&&(se=(y&15)<<12|(J&63)<<6|W&63,se>2047&&(se<55296||se>57343)&&(q=se));break;case 4:J=e[f+1],W=e[f+2],$=e[f+3],(J&192)===128&&(W&192)===128&&($&192)===128&&(se=(y&15)<<18|(J&63)<<12|(W&63)<<6|$&63,se>65535&&se<1114112&&(q=se))}}q===null?(q=65533,V=1):q>65535&&(q-=65536,s.push(q>>>10&1023|55296),q=56320|q&1023),s.push(q),f+=V}return te(s)}var M=4096;function te(e){var o=e.length;if(o<=M)return String.fromCharCode.apply(String,e);for(var n="",s=0;s<o;)n+=String.fromCharCode.apply(String,e.slice(s,s+=M));return n}function re(e,o,n){var s="";n=Math.min(e.length,n);for(var f=o;f<n;++f)s+=String.fromCharCode(e[f]&127);return s}function ye(e,o,n){var s="";n=Math.min(e.length,n);for(var f=o;f<n;++f)s+=String.fromCharCode(e[f]);return s}function de(e,o,n){var s=e.length;(!o||o<0)&&(o=0),(!n||n<0||n>s)&&(n=s);for(var f="",y=o;y<n;++y)f+=Ar[e[y]];return f}function ne(e,o,n){for(var s=e.slice(o,n),f="",y=0;y<s.length-1;y+=2)f+=String.fromCharCode(s[y]+s[y+1]*256);return f}p.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var s=this.subarray(e,o);return Object.setPrototypeOf(s,p.prototype),s};function D(e,o,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>n)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||D(e,o,this.length);for(var s=this[e],f=1,y=0;++y<o&&(f*=256);)s+=this[e+y]*f;return s},p.prototype.readUintBE=p.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||D(e,o,this.length);for(var s=this[e+--o],f=1;o>0&&(f*=256);)s+=this[e+--o]*f;return s},p.prototype.readUint8=p.prototype.readUInt8=function(e,o){return e=e>>>0,o||D(e,1,this.length),this[e]},p.prototype.readUint16LE=p.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||D(e,2,this.length),this[e]|this[e+1]<<8},p.prototype.readUint16BE=p.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||D(e,2,this.length),this[e]<<8|this[e+1]},p.prototype.readUint32LE=p.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},p.prototype.readUint32BE=p.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||D(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},p.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||D(e,o,this.length);for(var s=this[e],f=1,y=0;++y<o&&(f*=256);)s+=this[e+y]*f;return f*=128,s>=f&&(s-=Math.pow(2,8*o)),s},p.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||D(e,o,this.length);for(var s=o,f=1,y=this[e+--s];s>0&&(f*=256);)y+=this[e+--s]*f;return f*=128,y>=f&&(y-=Math.pow(2,8*o)),y},p.prototype.readInt8=function(e,o){return e=e>>>0,o||D(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},p.prototype.readInt16LE=function(e,o){e=e>>>0,o||D(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},p.prototype.readInt16BE=function(e,o){e=e>>>0,o||D(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},p.prototype.readInt32LE=function(e,o){return e=e>>>0,o||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},p.prototype.readInt32BE=function(e,o){return e=e>>>0,o||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},p.prototype.readFloatLE=function(e,o){return e=e>>>0,o||D(e,4,this.length),c.read(this,e,!0,23,4)},p.prototype.readFloatBE=function(e,o){return e=e>>>0,o||D(e,4,this.length),c.read(this,e,!1,23,4)},p.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||D(e,8,this.length),c.read(this,e,!0,52,8)},p.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||D(e,8,this.length),c.read(this,e,!1,52,8)};function j(e,o,n,s,f,y){if(!p.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>f||o<y)throw new RangeError('"value" argument is out of bounds');if(n+s>e.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(e,o,n,s){if(e=+e,o=o>>>0,n=n>>>0,!s){var f=Math.pow(2,8*n)-1;j(this,e,o,n,f,0)}var y=1,q=0;for(this[o]=e&255;++q<n&&(y*=256);)this[o+q]=e/y&255;return o+n},p.prototype.writeUintBE=p.prototype.writeUIntBE=function(e,o,n,s){if(e=+e,o=o>>>0,n=n>>>0,!s){var f=Math.pow(2,8*n)-1;j(this,e,o,n,f,0)}var y=n-1,q=1;for(this[o+y]=e&255;--y>=0&&(q*=256);)this[o+y]=e/q&255;return o+n},p.prototype.writeUint8=p.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,1,255,0),this[o]=e&255,o+1},p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},p.prototype.writeIntLE=function(e,o,n,s){if(e=+e,o=o>>>0,!s){var f=Math.pow(2,8*n-1);j(this,e,o,n,f-1,-f)}var y=0,q=1,V=0;for(this[o]=e&255;++y<n&&(q*=256);)e<0&&V===0&&this[o+y-1]!==0&&(V=1),this[o+y]=(e/q>>0)-V&255;return o+n},p.prototype.writeIntBE=function(e,o,n,s){if(e=+e,o=o>>>0,!s){var f=Math.pow(2,8*n-1);j(this,e,o,n,f-1,-f)}var y=n-1,q=1,V=0;for(this[o+y]=e&255;--y>=0&&(q*=256);)e<0&&V===0&&this[o+y+1]!==0&&(V=1),this[o+y]=(e/q>>0)-V&255;return o+n},p.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},p.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},p.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},p.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},p.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||j(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function Ve(e,o,n,s,f,y){if(n+s>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function _o(e,o,n,s,f){return o=+o,n=n>>>0,f||Ve(e,o,n,4,34028234663852886e22,-34028234663852886e22),c.write(e,o,n,s,23,4),n+4}p.prototype.writeFloatLE=function(e,o,n){return _o(this,e,o,!0,n)},p.prototype.writeFloatBE=function(e,o,n){return _o(this,e,o,!1,n)};function be(e,o,n,s,f){return o=+o,n=n>>>0,f||Ve(e,o,n,8,17976931348623157e292,-17976931348623157e292),c.write(e,o,n,s,52,8),n+8}p.prototype.writeDoubleLE=function(e,o,n){return be(this,e,o,!0,n)},p.prototype.writeDoubleBE=function(e,o,n){return be(this,e,o,!1,n)},p.prototype.copy=function(e,o,n,s){if(!p.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!s&&s!==0&&(s=this.length),o>=e.length&&(o=e.length),o||(o=0),s>0&&s<n&&(s=n),s===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),e.length-o<s-n&&(s=e.length-o+n);var f=s-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,s):Uint8Array.prototype.set.call(e,this.subarray(n,s),o),f},p.prototype.fill=function(e,o,n,s){if(typeof e=="string"){if(typeof o=="string"?(s=o,o=0,n=this.length):typeof n=="string"&&(s=n,n=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!p.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(e.length===1){var f=e.charCodeAt(0);(s==="utf8"&&f<128||s==="latin1")&&(e=f)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var y;if(typeof e=="number")for(y=o;y<n;++y)this[y]=e;else{var q=p.isBuffer(e)?e:p.from(e,s),V=q.length;if(V===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(y=0;y<n-o;++y)this[y+o]=q[y%V]}return this};var Nr=/[^+/0-9A-Za-z-_]/g;function qr(e){if(e=e.split("=")[0],e=e.trim().replace(Nr,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function Do(e,o){o=o||1/0;for(var n,s=e.length,f=null,y=[],q=0;q<s;++q){if(n=e.charCodeAt(q),n>55295&&n<57344){if(!f){if(n>56319){(o-=3)>-1&&y.push(239,191,189);continue}else if(q+1===s){(o-=3)>-1&&y.push(239,191,189);continue}f=n;continue}if(n<56320){(o-=3)>-1&&y.push(239,191,189),f=n;continue}n=(f-55296<<10|n-56320)+65536}else f&&(o-=3)>-1&&y.push(239,191,189);if(f=null,n<128){if((o-=1)<0)break;y.push(n)}else if(n<2048){if((o-=2)<0)break;y.push(n>>6|192,n&63|128)}else if(n<65536){if((o-=3)<0)break;y.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((o-=4)<0)break;y.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return y}function Tr(e){for(var o=[],n=0;n<e.length;++n)o.push(e.charCodeAt(n)&255);return o}function Cr(e,o){for(var n,s,f,y=[],q=0;q<e.length&&!((o-=2)<0);++q)n=e.charCodeAt(q),s=n>>8,f=n%256,y.push(f),y.push(s);return y}function pt(e){return a.toByteArray(qr(e))}function uo(e,o,n,s){for(var f=0;f<s&&!(f+n>=o.length||f>=e.length);++f)o[f+n]=e[f];return f}function Ee(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Bo(e){return e!==e}var Ar=function(){for(var e="0123456789abcdef",o=new Array(256),n=0;n<16;++n)for(var s=n*16,f=0;f<16;++f)o[s+f]=e[n]+e[f];return o}()}),$r=To((r,a)=>{l();var c=a.exports={},d,m;function _(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(E){d=_}try{typeof clearTimeout=="function"?m=clearTimeout:m=i}catch(E){m=i}})();function p(E){if(d===setTimeout)return setTimeout(E,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(E,0);try{return d(E,0)}catch(N){try{return d.call(null,E,0)}catch(T){return d.call(this,E,0)}}}function b(E){if(m===clearTimeout)return clearTimeout(E);if((m===i||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(E);try{return m(E)}catch(N){try{return m.call(null,E)}catch(T){return m.call(this,E)}}}var v=[],w=!1,h,x=-1;function I(){!w||!h||(w=!1,h.length?v=h.concat(v):x=-1,v.length&&g())}function g(){if(!w){var E=p(I);w=!0;for(var N=v.length;N;){for(h=v,v=[];++x<N;)h&&h[x].run();x=-1,N=v.length}h=null,w=!1,b(E)}}c.nextTick=function(E){var N=new Array(arguments.length-1);if(arguments.length>1)for(var T=1;T<arguments.length;T++)N[T-1]=arguments[T];v.push(new k(E,N)),v.length===1&&!w&&p(g)};function k(E,N){this.fun=E,this.array=N}k.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={};function S(){}c.on=S,c.addListener=S,c.once=S,c.off=S,c.removeListener=S,c.removeAllListeners=S,c.emit=S,c.prependListener=S,c.prependOnceListener=S,c.listeners=function(E){return[]},c.binding=function(E){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(E){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}}),Xt,Hr,Zr,l=rt(()=>{Xt=u(jr()),Hr=u($r()),Zr=function(r){function a(){var d=this||self;return delete r.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return a();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:a});var c=__magic__;return c}(Object)}),mo={};Co(mo,{default:()=>Qt});var go,it,Qt,Ao=rt(()=>{"use strict";l(),go=u(t("react")),it=r=>go.createElement("svg",U({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},r),go.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),go.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Qt=it}),Jt={};Co(Jt,{default:()=>er});var yo,_t,er,Yr=rt(()=>{"use strict";l(),yo=u(t("react")),_t=r=>yo.createElement("svg",U({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},r),yo.createElement("g",null,yo.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),er=_t}),or={};Co(or,{Form:()=>Kp});Er.exports=no(or);l();var H=u(t("react")),ut=t("@terradharitri/sdk-core/out"),Kr=u(t("classnames")),Xr=t("formik");l();var Qr=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__globals-module__error {
  width: 100%;
  display: block;
  color: var(--dapp-form-error-color);
  line-height: 1;
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 8px;
  font-size: 12px;
}
.dapp-core-component__globals-module__error.dapp-core-component__globals-module__scam svg {
  margin-right: 4px;
  color: var(--dapp-form-error-color) !important;
}

.dapp-core-component__globals-module__label {
  margin-bottom: 8px;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  display: block;
}

.dapp-core-component__globals-module__value {
  color: var(--dapp-form-input-color);
  display: block;
  background: var(--dapp-form-input-bg) !important;
  border-radius: var(--dapp-form-input-border-radius);
  padding: 12px;
  margin-top: 4px;
  font-size: 1rem;
}

.dapp-core-component__globals-module__input,
.dapp-core-component__globals-module__textarea {
  font-weight: 400;
  line-height: 1;
  color: var(--dapp-form-input-color) !important;
  background-clip: padding-box;
  border: 1px solid var(--dapp-form-input-bg);
  border-radius: var(--dapp-form-input-border-radius);
  width: 100%;
  box-sizing: border-box;
  background-color: var(--dapp-form-input-bg) !important;
  transition: all 200ms ease;
  padding: 12px;
  font-size: 14px;
}
.dapp-core-component__globals-module__input::placeholder,
.dapp-core-component__globals-module__textarea::placeholder {
  color: var(--dapp-form-placeholder-color) !important;
}
.dapp-core-component__globals-module__input.dapp-core-component__globals-module__disabled,
.dapp-core-component__globals-module__textarea.dapp-core-component__globals-module__disabled {
  pointer-events: none;
  color: var(--dapp-form-input-color-disabled) !important;
}
.dapp-core-component__globals-module__input.dapp-core-component__globals-module__disabled::placeholder,
.dapp-core-component__globals-module__textarea.dapp-core-component__globals-module__disabled::placeholder {
  color: var(--dapp-form-input-color-disabled) !important;
}
.dapp-core-component__globals-module__input.dapp-core-component__globals-module__invalid,
.dapp-core-component__globals-module__textarea.dapp-core-component__globals-module__invalid {
  margin: 0;
  border-color: var(--dapp-form-error-color);
  font-size: 1rem;
}
.dapp-core-component__globals-module__input:focus,
.dapp-core-component__globals-module__textarea:focus {
  outline: 0;
  color: var(--dapp-form-input-color) !important;
  border-color: var(--dapp-form-input-border-focus);
}

.dapp-core-component__globals-module__textarea {
  line-height: 1.25;
  min-height: 80px;
}

.dapp-core-component__globals-module__button-send {
  margin: 0 auto;
  align-self: center;
  line-height: 1;
  font-family: "Inter";
  transition: all 200ms ease;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  border: none;
  box-shadow: none;
  background-color: var(--dapp-form-btn-bg);
}
.dapp-core-component__globals-module__button-send:hover {
  background-color: var(--dapp-form-btn-bg-hover);
}

.dapp-core-component__globals-module__button-text {
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 200ms ease;
  color: var(--dapp-form-btn-bg);
  background-color: transparent;
  border: none;
  padding: 0;
}
@media (min-width: 768px) {
  .dapp-core-component__globals-module__button-text {
    margin-top: 32px;
  }
}
.dapp-core-component__globals-module__button-text:hover {
  color: var(--dapp-form-btn-bg-hover);
}

.dapp-core-component__globals-module__btn {
  padding: 0.375rem 0.75rem;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: var(--dapp-form-input-border-radius);
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnPrimary {
  background-color: var(--primary);
  color: var(--white);
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnPrimary:hover {
  background-color: var(--btn-blue);
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnWarning {
  background-color: var(--warning);
  color: var(--brown);
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnLink {
  color: var(--primary-light);
  background: none;
  padding: 0;
}
.dapp-core-component__globals-module__btn.dapp-core-component__globals-module__btnLink:hover {
  text-decoration: underline;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qr));var A={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};l();l();var tr=u(t("react"));l();var Jr=u(t("react")),Xp=(0,Jr.createContext)({});l();l();var en=u(t("react")),Qp=t("@terradharitri/sdk-dapp/constants/index"),Jp=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ed=u(t("bignumber.js")),od=t("formik");l();l();l();var td=t("bech32");l();l();l();var Qe=(r,a)=>typeof a=="boolean"?a:Array.isArray(a)&&a.includes(r);l();l();var Xe=t("@terradharitri/sdk-dapp/types/tokens.types"),on=r=>!["REWA","DCDT"].includes(r);l();l();var tn=t("@terradharitri/sdk-dapp/constants"),rn=t("@terradharitri/sdk-dapp/utils/account/getAccount"),nn=r=>Me(void 0,null,function*(){let a=r.txType==="REWA"?r.amount:tn.ZERO,c=on(r.txType),d=yield(0,rn.getAccount)(r.receiver),m=d==null?void 0:d.username,_=c?r.senderUsername:m,i=Q(U({},r),{amount:a,receiverUsername:_});return delete i.rawReceiverUsername,i});l();l();var ft=t("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),an=({nft:r,skipDescription:a})=>{var c,d;let{name:m,metadata:_,media:i,isNsfw:p,scamInfo:b,verified:v}=r,w="Scam - ",{isSuspicious:h,message:x}=(0,ft.getScamFlag)({verified:v,message:m,isNsfw:p,scamInfo:b,messagePrefix:w});if(!(_!=null&&_.description)||a){let E=h?"placeholder":(c=i==null?void 0:i[0])==null?void 0:c.thumbnailUrl;return{isSuspicious:h,name:m||x,thumbnail:E,description:""}}let{message:I,isSuspicious:g}=(0,ft.getScamFlag)({message:_.description,messagePrefix:w,verified:v}),k=h||g,S=k?"placeholder":(d=i==null?void 0:i[0])==null?void 0:d.thumbnailUrl;return{isSuspicious:k,name:m||x,thumbnail:S,description:I||_.description}};l();var rd=t("@terradharitri/sdk-dapp/utils/buildUrlParams");l();var Uo=u(t("anchorme")),Fo=r=>r.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),ln=(r,a)=>{if(a){let c=`[Message hidden due to suspicious content - ${a.info}]`;if(r.length>1e3)return{output:c,stringWithLinks:r,found:!0};let d=Fo(r.normalize("NFKC")),m=Uo.default.list(d),_=[];if(m.length>0){let i=c;m.forEach((p,b)=>{let{string:v}=p,w="",h="",x=v;for(let I=0;I<i.length;I++){let g=i.slice(I),[k]=Uo.default.list(Fo(g));k&&v===k.string&&(w=i.substring(0,I))}for(let I=c.length;I>0;I--){let g=i.slice(0,I),[k]=Uo.default.list(Fo(g));k&&v===k.string&&(h=i.substring(I))}_.push(w),_.push(x),i=h,b===m.length-1&&_.push(h)})}else _.push(r);return{output:c,stringWithLinks:_.join(""),found:!0}}else return{output:r,stringWithLinks:"",found:!1}};l();l();var nd=t("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),rr=t("@terradharitri/sdk-dapp/utils/operations/formatAmount"),cn=t("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),lo=t("@terradharitri/sdk-dapp/utils/operations/parseAmount");l();l();l();l();l();l();l();var nr=u(t("react")),ad=t("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),ld=t("formik");l();l();var cd=t("@terradharitri/sdk-dapp/constants/index"),pd=t("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),dd=u(t("bignumber.js"));l();l();var Ro=t("@terradharitri/sdk-dapp/constants/index");function ar({feeLimit:r,rewaPriceInUsd:a}){let c=(0,rr.formatAmount)({input:r,decimals:Ro.DECIMALS,digits:Ro.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,cn.getUsdValue)({amount:c,usd:a,decimals:Ro.DIGITS})}`}l();var sd=t("@terradharitri/sdk-dapp/constants/index");l();l();var pn="Token can only be transfered to one of the following addresses:",dn="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.",lr="5000000000000000",co="0",sn="WREWA-bd4d79";l();var md=t("@terradharitri/sdk-dapp/constants/index"),id=u(t("bignumber.js"));l();var _d=t("@terradharitri/sdk-dapp/constants/index");l();var ud=t("@terradharitri/sdk-dapp/constants/index");l();l();var Je=t("@terradharitri/sdk-core"),mn=t("@terradharitri/sdk-dapp/constants/index"),_n=u(t("bignumber.js"));function un({amount:r,data:a,nonce:c,receiver:d,receiverUsername:m,sender:_,senderUsername:i,gasPrice:p,gasLimit:b,chainId:v}){let w=new _n.default((0,lo.parseAmount)(r));return new Je.Transaction({nonce:c,value:Je.TokenPayment.rewaFromBigInteger(w.toString(10)),sender:new Je.Address(_),receiver:new Je.Address(d),gasPrice:parseInt(p),gasLimit:parseInt(b),senderUsername:i,receiverUsername:m,data:new Je.TransactionPayload(a),chainID:v,version:new Je.TransactionVersion(mn.VERSION)})}l();function fn(r){return isNaN(Number(r))||r===""?(0,lo.parseAmount)("0"):(0,lo.parseAmount)(r)}function vn(r){return Me(this,null,function*(){let{address:a,balance:c,chainId:d,nonce:m,values:_}=r,{amount:i,receiver:p,data:b,gasLimit:v,gasPrice:w,nft:h,receiverUsername:x,senderUsername:I}=_,g=Boolean(h)?a:p;try{return un({balance:c,amount:String(i),gasLimit:String(v),gasPrice:fn(w),data:b.trim(),receiver:g,receiverUsername:x,senderUsername:I,sender:a,nonce:m,chainId:d})}catch(k){throw console.log("Prepare transaction error",k),k}})}l();var fd=t("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");l();var vd=t("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");l();var bd=u(t("bignumber.js"));l();var gd=t("@terradharitri/sdk-dapp/constants/index"),yd=t("@terradharitri/sdk-dapp/utils/smartContracts"),hd=t("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),wd=u(t("bignumber.js"));l();var kd=u(t("bignumber.js"));l();l();var xd=u(t("axios"));l();l();l();var bn=t("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");l();var gn=t("@terradharitri/sdk-dapp/constants/index");l();var yn={D:"devnet",T:"testnet",1:"mainnet"},hn={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function wn(r){return yn[r]}function cr(r){return hn[r]||sn}function kn(r){let a=wn(r),c=gn.fallbackNetworkConfigurations[a].apiAddress;if(!c)throw"Could not extract api address for environment, check if you have a valid chainID";return c}function xn(r){return Me(this,null,function*(){let a=kn(r);return yield(0,bn.getServerConfiguration)(a)})}l();var qo={value:null};function Sn(r){return qo.value={baseURL:r.apiAddress,timeout:Number(r.apiTimeout)},qo.value}function En(r){return Me(this,null,function*(){if(qo.value!=null)return qo.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),r!=null){let c=yield xn(r);return Sn(c)}let a="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(a),a})}l();var Po=t("@terradharitri/sdk-dapp/constants/index"),In=u(t("bignumber.js")),vt,bt,gt,pr=(0,rr.formatAmount)({input:String((vt=Po.GAS_PRICE)!=null?vt:1e9),decimals:(bt=Po.DECIMALS)!=null?bt:18,showLastNonZeroDecimal:!0,digits:(gt=Po.DIGITS)!=null?gt:4}),Sd=new In.default(pr).times(10).toString(10);l();var Ed=t("@terradharitri/sdk-dapp/constants/index"),Id=u(t("bignumber.js"));l();var Nd=u(t("bignumber.js"));l();l();var qd=t("yup");l();var yt=t("@terradharitri/sdk-dapp/constants/ledger.constants"),Nn=u(t("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),nt=t("yup"),qn=(0,nt.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(r){let{ledger:a}=this.parent;return!(a&&r&&r.length&&!a.ledgerDataActive)}),Tn=(0,nt.string)().test({name:"hashSign",test:function(r){let{ledger:a,isGuarded:c}=this.parent;if(a){let{ledgerWithHashSign:d,ledgerWithGuardians:m}=(0,Nn.default)(a.version);if(r&&r.length>300&&!d)return this.createError({message:`Data too long. You need at least DharitrI app version ${yt.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(c&&!m)return this.createError({message:`You need at least DharitrI app version ${yt.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Cn=[qn,Tn],Td=Cn.reduce((r,a)=>r.concat(a),(0,nt.string)());l();var Cd=t("@terradharitri/sdk-dapp/constants/index"),Ad=t("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ld=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Dd=t("yup");l();var Bd=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ud=u(t("bignumber.js")),Fd=t("yup");l();var Rd=t("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Pd=u(t("bignumber.js")),Od=t("yup");l();var Md=t("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Vd=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Wd=u(t("bignumber.js")),zd=t("yup");l();var Gd=u(t("bignumber.js")),jd=t("yup");l();var $d=t("@terradharitri/sdk-dapp/constants/index"),Hd=t("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Zd=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Yd=u(t("bignumber.js")),Kd=t("yup");l();var Xd=t("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Qd=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Jd=t("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),es=u(t("bignumber.js")),os=t("yup");l();var ts=u(t("bignumber.js")),rs=t("yup");l();var ns=t("@terradharitri/sdk-dapp/utils/account/addressIsValid"),as=t("yup");l();var ls=t("@terradharitri/sdk-dapp/utils/account/addressIsValid"),cs=t("yup");l();l();var An=(0,nr.createContext)({});function dr(){return(0,nr.useContext)(An)}l();l();var Ln=u(t("react")),ps=t("formik"),ds=u(t("lodash/uniqBy"));l();l();l();var ss=u(t("axios"));l();l();var Dn=u(t("axios"));function Bn(){return Me(this,null,function*(){try{let r=yield En(),{data:a}=yield Dn.default.get("economics",r);return a}catch(r){return console.error("err fetching economics info",r),null}})}l();l();var ms=t("@terradharitri/sdk-dapp/apiCalls/endpoints"),is=t("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),_s=u(t("axios")),us=u(t("lodash/uniqBy"));l();var fs=t("@terradharitri/sdk-dapp/apiCalls/endpoints"),vs=u(t("axios"));l();var bs=t("@terradharitri/sdk-dapp/apiCalls/endpoints"),gs=u(t("axios"));l();l();var sr=u(t("react")),Un=(0,sr.createContext)({});function Lo(){return(0,sr.useContext)(Un)}l();l();var ht=t("react"),Fn=t("@terradharitri/sdk-dapp/constants/index"),Oo=t("@terradharitri/sdk-dapp/types/enums.types");function Rn(){let{networkConfig:r}=Lo(),[a,c]=(0,ht.useState)(0);function d(){return Me(this,null,function*(){let m=yield Bn(),_=(m==null?void 0:m.price)||0;c(_)})}return(0,ht.useEffect)(()=>{![Oo.EnvironmentsEnum.mainnet,Oo.EnvironmentsEnum.testnet,Oo.EnvironmentsEnum.devnet].includes(r==null?void 0:r.id)||d()},[r==null?void 0:r.id]),{rewaLabel:r.rewaLabel,rewaPriceInUsd:a,digits:Fn.DIGITS}}l();var ys=(0,Ln.createContext)({});l();l();var hs=t("@terradharitri/sdk-dapp/constants/index"),ws=t("formik");l();l();var Pn=u(t("react")),ks=t("@terradharitri/sdk-dapp/constants/index"),xs=t("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ss=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Es=t("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Is=u(t("bignumber.js")),Ns=t("formik");l();l();l();l();var qs=u(t("bignumber.js"));l();var Ts=t("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Cs=u(t("bignumber.js"));l();l();var As=t("react"),Ls=t("@terradharitri/sdk-dapp/constants/index"),Ds=t("@terradharitri/sdk-dapp/utils/smartContracts"),Bs=u(t("bignumber.js")),Us=t("formik");l();var Fs=t("react");l();l();var Rs=t("@terradharitri/sdk-dapp/constants/index"),Ps=u(t("bignumber.js")),Os=(0,Pn.createContext)({}),Ms=(0,en.createContext)({});l();l();var On=u(t("react")),Vs=t("formik"),Ws=(0,On.createContext)({});l();l();var mr=u(t("react")),zs=t("formik");l();l();l();var Gs=t("react"),js=t("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),$s=u(t("lodash/uniqBy"));l();l();var Hs=t("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Zs=t("@terradharitri/sdk-dapp/utils");l();var Ys=t("react");l();var Ks=t("react"),Xs=t("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Mn=(0,mr.createContext)({});function Vn(){return(0,mr.useContext)(Mn)}l();l();var ir=u(t("react")),Qs=t("formik");l();l();var Wn=({knownAddresses:r,inputValue:a,key:c})=>!r||!a?!1:r.some(d=>{var m;return Boolean((m=d[c])==null?void 0:m.startsWith(a))});l();l();l();var Js=t("react"),em=t("@terradharitri/sdk-dapp/utils");l();var om=t("react"),tm=t("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");l();l();var rm=t("@terradharitri/sdk-dapp/utils/account/addressIsValid"),nm=u(t("axios"));l();var am=u(t("axios")),zn=(0,ir.createContext)({});function _r(){return(0,ir.useContext)(zn)}var Gn=(0,tr.createContext)({});function ie(){return(0,tr.useContext)(Gn)}l();l();var Mo=u(t("react")),jn=u(t("classnames"));l();l();l();var me=u(t("react")),$n=t("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");l();var lm=u(t("react")),cm=t("@terradharitri/sdk-dapp/constants/index");l();var Hn=t("react");l();l();var Ae=u(t("react")),wt=t("@terradharitri/sdk-dapp/constants/index"),kt=t("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Zn=t("@terradharitri/sdk-dapp/UI/UsdValue/index");l();l();var Ne=u(t("react")),Yn=t("@fortawesome/free-solid-svg-icons"),Kn=t("@fortawesome/react-fontawesome"),xt=u(t("classnames"));l();var Xn=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-transform: uppercase;
  border-radius: 50%;
  min-width: 20px;
  min-height: 20px;
  border: 1px solid var(--dapp-form-select-icon-border);
  margin-right: 4px;
  position: relative;
  font-size: 6px;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar:before {
  content: "";
  border-radius: 50%;
  position: absolute;
  inset: 0;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar img {
  max-width: 100%;
  height: auto;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarNFT {
  border: none;
  color: #fef08a;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarNFT:before {
  background: linear-gradient(90deg, rgba(240, 152, 25, 0.4), rgba(237, 222, 93, 0.4));
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarSFT {
  border: none;
  color: #fed7aa;
}
.dapp-core-component__tokenAvatar-styles__tokenAvatar.dapp-core-component__tokenAvatar-styles__tokenAvatarSFT:before {
  background: linear-gradient(90deg, rgba(240, 77, 25, 0.4), rgba(237, 136, 93, 0.4));
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xn));var We={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},Qn=(Ao(),no(mo)).default,ur=r=>{let{avatar:a,type:c}=r;return c==="NonFungibleDCDT"?Ne.default.createElement("div",{className:(0,xt.default)(We.tokenAvatar,We.tokenAvatarNFT)},"NFT"):c==="SemiFungibleDCDT"?Ne.default.createElement("div",{className:(0,xt.default)(We.tokenAvatar,We.tokenAvatarSFT)},"SFT"):c==="REWA"?Ne.default.createElement("div",{className:We.tokenAvatar},r.RewaIcon?Ne.default.createElement(r.RewaIcon,null):Ne.default.createElement(Qn,null)):a?Ne.default.createElement("div",{className:We.tokenAvatar},Ne.default.createElement("img",{src:a})):Ne.default.createElement("div",{className:We.tokenAvatar},Ne.default.createElement(Kn.FontAwesomeIcon,{icon:Yn.faDiamond}))};l();var Jn=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__amount {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__token {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__token .dapp-core-component__styles-module__value {
  font-size: 14px;
  font-weight: 500;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__price {
  font-size: 12px;
  color: var(--dapp-form-placeholder-color);
  line-height: 1;
  margin-top: 8px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Jn));var ho={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},ea=({label:r="Amount",amount:a,txType:c,tokenDecimals:d,tokenId:m,rewaLabel:_,rewaPriceInUsd:i,nft:p,tokenAvatar:b})=>{let v=(p==null?void 0:p.decimals)||0,w=c==="DCDT",h=c==="MetaDCDT",x=c==="NonFungibleDCDT",I=h?(0,lo.parseAmount)(a,p==null?void 0:p.decimals):a,g=Boolean(p&&a),k=m.split("-")[0],S=w?d:wt.DECIMALS,E=g?Ae.default.createElement(kt.FormatAmount,{rewaLabel:_,value:I,decimals:v,digits:c==="MetaDCDT"?wt.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):Ae.default.createElement(kt.FormatAmount,{rewaLabel:_,value:(0,lo.parseAmount)(a,S),showLabel:!1,decimals:S,showLastNonZeroDecimal:!0,token:w?k:_,"data-testid":"confirmAmount"});return x?null:Ae.default.createElement("div",{className:ho.amount},Ae.default.createElement("span",{className:A.label},r),Ae.default.createElement("div",{className:ho.token},Ae.default.createElement(ur,{type:c,avatar:b}),Ae.default.createElement("div",{className:ho.value},E," ",k)),!w&&Ae.default.createElement(Zn.UsdValue,{amount:a,usd:i,"data-testid":"confirmUsdValue",className:ho.price}))};l();l();var Z=u(t("react")),oa=t("@terradharitri/sdk-dapp/utils/decoders/decodePart");l();var ta=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__data {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__data .dapp-core-component__styles-module__value {
  min-height: 80px;
  font-size: 14px;
  padding: 12px;
  line-height: 1.25;
  border-radius: 6px;
  border: 1px solid var(--dapp-form-input-data-border);
  word-break: break-all;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ta));var wo={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},ra=(r,a)=>[...r.matchAll(new RegExp(a,"gi"))].map(c=>c.index),na=({label:r="Data",scCallLabel:a="SC Call",data:c,highlight:d,isScCall:m})=>{let _=Z.default.createElement(Z.default.Fragment,null,c),[i,...p]=d&&m?d.split("@"):[];if(c&&d&&ra(c,d).length===1)switch(!0){case c.startsWith(d):{let[,b]=c.split(d);_=Z.default.createElement(Z.default.Fragment,null,d,Z.default.createElement("span",null,b));break}case c.endsWith(d):{let[b]=c.split(d);_=Z.default.createElement(Z.default.Fragment,null,Z.default.createElement("span",null,b),d);break}default:{let[b,v]=c.split(d);_=Z.default.createElement(Z.default.Fragment,null,Z.default.createElement("span",null,b),d,Z.default.createElement("span",null,v));break}}return Z.default.createElement(Z.default.Fragment,null,i&&Z.default.createElement("div",{className:wo.data},Z.default.createElement("span",{className:A.label},a),Z.default.createElement("div",{"data-testid":"confirmScCall",className:wo.value},[(0,oa.decodePart)(i),...p].join("@"))),Z.default.createElement("div",{className:wo.data},Z.default.createElement("span",{className:A.label},r),Z.default.createElement("div",{"data-testid":"confirmData",className:wo.value},c?_:"N/A")))};l();l();var ze=u(t("react")),aa=t("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");l();var la=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__fee {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__token {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__token .dapp-core-component__styles-module__value {
  font-size: 14px;
  font-weight: 500;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__price {
  font-size: 12px;
  color: var(--dapp-form-placeholder-color);
  line-height: 1;
  margin-top: 8px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(la));var ko={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},ca=({rewaPriceInUsd:r,label:a="Fee",feeLimit:c,rewaLabel:d})=>ze.default.createElement("div",{className:ko.fee},ze.default.createElement("span",{className:A.label},a),ze.default.createElement("div",{className:ko.token},ze.default.createElement(ur,{type:"REWA"}),ze.default.createElement("div",{className:ko.value},ze.default.createElement(aa.FormatAmount,{rewaLabel:d,value:c,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),c!==co&&ze.default.createElement("span",{className:ko.price},ar({feeLimit:c,rewaPriceInUsd:r})));l();l();var ge=u(t("react")),pa=t("@fortawesome/free-solid-svg-icons"),da=t("@fortawesome/react-fontawesome"),sa=t("@terradharitri/sdk-dapp/apiCalls/endpoints"),ma=t("@terradharitri/sdk-dapp/UI/CopyButton"),ia=t("@terradharitri/sdk-dapp/UI/ExplorerLink"),_a=t("@terradharitri/sdk-dapp/UI/Trim"),ua=u(t("classnames"));l();var{default:po}=(Yr(),no(Jt));l();var fa=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__confirmReceiver {
  display: block;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__value {
  font-size: 14px;
  word-break: break-all;
  line-height: 1.5;
  display: block;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__value.dapp-core-component__styles-module__shrunk {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  margin-bottom: 8px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueTrim {
  line-height: 1;
  color: var(--dapp-form-placeholder-color);
  font-size: 12px;
  display: flex;
  align-items: flex-end;
  max-width: none;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueTrim [class*=left] *,
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueTrim [class*=right] * {
  color: var(--dapp-form-placeholder-color);
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueCopy {
  font-size: 12px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__explorer {
  margin-left: 0;
  font-size: 12px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__explorer svg {
  color: var(--dapp-form-placeholder-color) !important;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__explorer:hover svg {
  color: var(--dapp-form-btn-bg) !important;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__icon {
  height: 16px;
  position: relative;
  width: auto;
  top: 1px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fa));var Ie={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},va=({label:r="Receiver",receiver:a,scamReport:c,receiverUsername:d})=>{let m=Boolean(d),_=d!=null?d:a;return ge.default.createElement("div",{className:Ie.confirmReceiver},ge.default.createElement("span",{className:A.label},r),ge.default.createElement("span",{className:(0,ua.default)(Ie.value,{[Ie.shrunk]:m}),"data-testid":"confirmReceiver"},m&&ge.default.createElement(po,{className:Ie.icon}),_,m&&ge.default.createElement(ia.ExplorerLink,{page:`/${sa.ACCOUNTS_ENDPOINT}/${a}`,className:Ie.explorer})),m&&ge.default.createElement("span",{className:Ie.subValue},ge.default.createElement(_a.Trim,{text:a,className:Ie.subValueTrim}),ge.default.createElement(ma.CopyButton,{text:a,className:Ie.subValueCopy})),c&&ge.default.createElement("div",{className:Ie.scam},ge.default.createElement("span",null,ge.default.createElement(da.FontAwesomeIcon,{icon:pa.faExclamationTriangle,className:Ie.icon}),ge.default.createElement("small",{"data-testid":"confirmScamReport"},c))))};l();l();var Ge=u(t("react"));l();l();var ee=u(t("react")),ba=t("@fortawesome/free-solid-svg-icons"),ga=t("@fortawesome/react-fontawesome"),ya=u(t("@terradharitri/sdk-dapp/constants/index")),ha=t("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),wa=u(t("classnames"));l();var ka=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__tokenElement {
  height: 100%;
  display: flex !important;
  align-items: center;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementWrapper {
  display: flex;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementWrapper .dapp-core-component__styles-module__tokenElementCircle {
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  background-color: var(--dapp-form-select-icon-bg);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementIdentifier {
  line-height: 1.5;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ka));var eo={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},xa=(Ao(),no(mo)).default,St=({RewaIcon:r,inDropdown:a=!1,isRewa:c,nftTokenDetails:d,nftType:m,token:_})=>{var i,p;let{name:b,identifier:v,balance:w,decimals:h}=_,x=((i=_.assets)==null?void 0:i.svgUrl)||((p=_.assets)==null?void 0:p.pngUrl)||"",I=x?28:20,[g,k]=(0,ee.useState)(b);(0,ee.useEffect)(()=>{var T;(T=d==null?void 0:d.uris)!=null&&T.some(F=>{let R=Xt.Buffer.from(String(F),"base64").toString(),{found:O}=ln(R,d==null?void 0:d.scamInfo);return O})||k(b)},[b]);let S=ee.default.createElement(ga.FontAwesomeIcon,{icon:ba.faDiamond});m==Xe.NftEnumType.NonFungibleDCDT&&(S=ee.default.createElement("div",{className:"nft-type","data-testid":`${v}-type-nft`},"NFT")),m===Xe.NftEnumType.SemiFungibleDCDT&&(S=ee.default.createElement("div",{className:"nft-type","data-testid":`${v}-type-sft`},"SFT"));let E=!a&&m!==Xe.NftEnumType.NonFungibleDCDT,N=ee.default.createElement("div",{className:eo.tokenElementCircle},S);return x&&(N=ee.default.createElement("img",{className:eo.tokenElementCircle,src:x,alt:b,height:I})),c&&(N=ee.default.createElement("div",{className:eo.tokenElementCircle},r?ee.default.createElement(r,{height:36}):ee.default.createElement(xa,{height:36}))),ee.default.createElement("div",{className:(0,wa.default)(A.value,eo.tokenElement)},ee.default.createElement("div",{className:eo.tokenElementWrapper},N),ee.default.createElement("div",{"data-testid":"tokenName"},ee.default.createElement("span",{"data-testid":`${v}-element`},ee.default.createElement("span",null,g)," ",ee.default.createElement("span",{className:eo.tokenElementIdentifier},v)),E&&ee.default.createElement(ha.FormatAmount,{rewaLabel:v,value:w||co,digits:m===Xe.NftEnumType.SemiFungibleDCDT?0:ya.DIGITS,token:v,showLabel:!1,decimals:h,"data-testid":`${v}-balance`})))};l();var Sa=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__token {
  line-height: 1.5;
}
.dapp-core-component__styles-module__token .dapp-core-component__styles-module__label {
  display: block;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sa));var Ea={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},Ia=({RewaIcon:r,rewaLabel:a,isDcdtTransaction:c,nft:d,tokenAvatar:m,tokenId:_,tokenIdError:i})=>{var p;let b=(d==null?void 0:d.name)||"";return Ge.default.createElement("div",{className:Ea.token},Ge.default.createElement("span",{className:A.label},d?Ge.default.createElement("span",null,d==null?void 0:d.name," "):"","Token"),Ge.default.createElement("div",null,d?Ge.default.createElement(St,{inDropdown:!0,token:{name:d==null?void 0:d.name,identifier:d==null?void 0:d.identifier,decimals:0,balance:co,ticker:"",assets:{svgUrl:((p=d==null?void 0:d.assets)==null?void 0:p.svgUrl)||""}}}):Ge.default.createElement(St,{inDropdown:!0,token:{name:c?b:"DharitrI eGold",identifier:c?_:a,decimals:0,balance:co,ticker:"",assets:{svgUrl:m||""}},isRewa:_===a,RewaIcon:r})),i&&Ge.default.createElement("div",{className:A.error},i))},ro=class extends Hn.Component{render(){return null}};ro.Receiver=va,ro.Amount=ea,ro.Fee=ca,ro.Data=na,ro.Token=Ia;var Vo=ro;l();l();var Le=u(t("react")),Et=u(t("classnames"));l();var Na=`.dapp-core-component__styles-module__preview {
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--dapp-form-nftsft-preview-bg);
}
.dapp-core-component__styles-module__preview.dapp-core-component__styles-module__clickable {
  cursor: pointer;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__image {
  min-width: 64px;
  min-height: 64px;
  max-width: 64px;
  max-height: 64px;
  height: auto;
  width: auto;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content {
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left {
  gap: 8px;
  line-height: 1;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left .dapp-core-component__styles-module__name {
  font-size: 12px;
  font-weight: 600;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left .dapp-core-component__styles-module__identifier {
  color: var(--dapp-form-placeholder-color);
  font-size: 12px;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge {
  line-height: 1;
  font-weight: 500;
  font-size: 12px;
  padding: 4px 8px;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: var(--dapp-form-nftsft-preview-badge-bg);
  position: relative;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge:before {
  content: "";
  border-radius: 4px;
  position: absolute;
  inset: 0;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__nft {
  color: #fef08a;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__nft:before {
  background: linear-gradient(90deg, rgba(240, 152, 25, 0.4), rgba(237, 222, 93, 0.4));
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__sft {
  color: #fed7aa;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__sft:before {
  background: linear-gradient(90deg, rgba(240, 77, 25, 0.4), rgba(237, 136, 93, 0.4));
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Na));var he={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"},fr=r=>{let a=r,{txType:c,onClick:d,identifier:m}=a,_=Yt(a,["txType","onClick","identifier"]),{name:i,thumbnail:p}=an({nft:_}),b=["NonFungibleDCDT","SemiFungibleDCDT"].includes(c),v=c==="NonFungibleDCDT"?"NFT":"SFT",w=h=>{h.preventDefault(),d&&d(h,Object.assign(_,{identifier:m}))};return b?Le.default.createElement("div",{onClick:w,"data-testid":"token-preview",className:(0,Et.default)(he.preview,{[he.clickable]:Boolean(d)})},Le.default.createElement("img",{src:p,className:he.image}),Le.default.createElement("div",{className:he.content},Le.default.createElement("div",{className:he.left},Le.default.createElement("div",{"data-testid":"token-preview-name",className:he.name},i),Le.default.createElement("div",{"data-testid":"token-preview-identifier",className:he.identifier},m)),Le.default.createElement("div",{className:he.right},Le.default.createElement("div",{className:(0,Et.default)(he.badge,{[he.nft]:c==="NonFungibleDCDT",[he.sft]:c==="SemiFungibleDCDT"})},v)))):null};l();var qa=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__confirmScreen-module__summary {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields {
  gap: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields .dapp-core-component__confirmScreen-module__columns {
  display: flex;
  column-gap: 16px;
  row-gap: 32px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields .dapp-core-component__confirmScreen-module__columns .dapp-core-component__confirmScreen-module__column {
  min-width: calc(50% - 8px);
  text-align: left;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__buttons {
    padding-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qa));var Ke={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};l();l();var Wo=t("@terradharitri/sdk-dapp/types/enums.types"),Ta=({providerType:r,hasGuardianScreen:a})=>a?"Confirm & Continue":r===Wo.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":r===Wo.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":r===Wo.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";l();var Ca=({receiverAddress:r,knownAddresses:a,existingReceiverUsername:c})=>{if(c)return c;let d=a==null?void 0:a.find(m=>m.address===r);return d==null?void 0:d.username},Aa=({isConfirmCloseBtnVisible:r=!0,providerType:a})=>{var c;let{setIsGuardianScreenVisible:d}=dr(),{receiverUsernameInfo:{receiverUsername:m},receiverInfo:{scamError:_,receiver:i,knownAddresses:p},formInfo:b,gasInfo:{gasCostError:v,feeLimit:w},accountInfo:{isGuarded:h},dataFieldInfo:{data:x},amountInfo:I,tokensInfo:g}=ie(),{tokenId:k,tokenDetails:S,nft:E,rewaPriceInUsd:N,rewaLabel:T}=g,{readonly:F,onCloseForm:R,onInvalidateForm:O,onPreviewClick:_e,onSubmitForm:G,txType:K,hasGuardianScreen:z}=b,ue=()=>{d(!0)},[pe,B]=(0,me.useState)(!1),P=K==="NonFungibleDCDT",M=Ta({providerType:a,hasGuardianScreen:z}),te=ne=>{ne.preventDefault(),F?R():O()},re=()=>{if(h&&z)return ue();B(!0),G()},ye=!["REWA","DCDT","MetaDCDT"].includes(K),de=Ca({knownAddresses:p,receiverAddress:i,existingReceiverUsername:m});return me.default.createElement("div",{className:Ke.summary},me.default.createElement("div",{className:Ke.fields},ye&&E&&me.default.createElement(fr,U({onClick:_e,txType:K},E)),me.default.createElement($n.ConfirmReceiver,{amount:I.amount,scamReport:_!=null?_:null,receiver:i,receiverUsername:de}),me.default.createElement("div",{className:Ke.columns},!P&&me.default.createElement("div",{className:Ke.column},me.default.createElement(Vo.Amount,{txType:K,tokenId:k,tokenDecimals:S.decimals,amount:String(I.amount),nft:E,rewaPriceInUsd:N,rewaLabel:T,tokenLabel:S.name,tokenAvatar:((c=S.assets)==null?void 0:c.svgUrl)||""})),me.default.createElement("div",{className:Ke.column},me.default.createElement(Vo.Fee,{rewaLabel:T,rewaPriceInUsd:N,feeLimit:w}))),me.default.createElement(Vo.Data,{data:x}),v&&me.default.createElement("p",{className:A.error},v)),me.default.createElement("div",{className:Ke.buttons},me.default.createElement("button",{className:A.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:pe,onClick:re},M),r&&me.default.createElement("button",{className:A.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:te},F?"Close":"Back")))},La=r=>{let{formInfo:{setHasGuardianScreen:a}}=ie();return(0,Mo.useEffect)(()=>{r.hasGuardianScreen&&a(!0)},[]),Mo.default.createElement("div",{className:(0,jn.default)(Ke.confirm,r.className),"data-testid":"confirmScreen"},Mo.default.createElement(Aa,U({},r)))};l();l();l();var X=u(t("react")),It=t("@fortawesome/free-solid-svg-icons"),Nt=t("@fortawesome/react-fontawesome"),zo=u(t("classnames")),Da=t("formik"),Ba=u(t("react-select"));l();l();var Ua=u(t("react")),Fa=t("react-select");l();var Ra=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__receiver {
  position: relative;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete {
  position: relative;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete input[aria-hidden=true] {
  display: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu {
  left: 0px;
  top: 0px;
  float: left;
  min-width: 10rem;
  font-size: 1rem;
  color: var(--brown);
  text-align: left;
  list-style: none;
  background-color: var(--white);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: var(--dapp-form-input-border-radius);
  z-index: 1000;
  inset: unset;
  max-height: 300px;
  overflow: unset;
  transform: none;
  overflow-x: scroll;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item {
  display: inline-block;
  line-height: 1.5;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: var(--brown);
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  text-decoration: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item:hover, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item.dapp-core-component__styles-module__highlighted {
  color: #16181b;
  text-decoration: none;
  background-color: #e9ecef;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item:first-child {
  margin-top: 0.675rem;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item:last-child {
  margin-bottom: 0.675rem;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item .dapp-core-component__styles-module__trim {
  display: flex;
  align-items: flex-end;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container {
  background-color: var(--body-bg);
  border: 1px solid transparent;
  transition: var(--transition);
  border-radius: 8px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__invalid {
  border-color: var(--danger);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__focused {
  border-color: var(--primary);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__expanded {
  z-index: 3;
  position: relative;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__opened + div {
  display: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control {
  background-color: transparent !important;
  border: none;
  box-shadow: none;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value {
  padding: 0;
  display: flex;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single {
  padding: 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: var(--action-color);
  margin: 0;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single.dapp-core-component__styles-module__disabled {
  color: var(--dapp-form-input-color-disabled);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single.dapp-core-component__styles-module__disabled [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single.dapp-core-component__styles-module__disabled [class*=__right] * {
  color: var(--dapp-form-input-color-disabled);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-username {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-username .dapp-core-component__styles-module__receiver-select-single-username-icon {
  height: 20px;
  width: 20px;
  background: var(--black);
  border-radius: 4px;
  padding: 3px;
  padding-bottom: 2px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper {
  display: flex;
  gap: 4px;
  color: var(--placeholder-color);
  align-items: center;
  overflow: hidden;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper .dapp-core-component__styles-module__receiver-select-single-trim {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper .dapp-core-component__styles-module__receiver-select-single-trim [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper .dapp-core-component__styles-module__receiver-select-single-trim [class*=__right] * {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim {
  align-items: center;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--action-color);
  margin-right: 4px;
  font-size: 1rem;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single [class*=__left],
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single [class*=__right] {
  line-height: 17px;
  height: 17px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input:after {
  content: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input.dapp-core-component__styles-module__visible input {
  opacity: 1 !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input.dapp-core-component__styles-module__spaced input {
  padding-left: 36px !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input input {
  flex: 1;
  min-height: auto;
  border-radius: 8px;
  padding: 12px !important;
  line-height: 17px !important;
  font-size: 14px !important;
  opacity: 0 !important;
  color: var(--action-color) !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-spinner {
  margin-right: 12px;
  font-size: 16px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator {
  transition: var(--transition);
  margin-left: -12px;
  z-index: 1;
  pointer-events: all;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator svg path {
  fill: var(--heading-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator:hover svg path {
  fill: var(--heading-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator.dapp-core-component__styles-module__expanded {
  transform: rotateZ(180deg);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator.dapp-core-component__styles-module__hidden {
  display: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu {
  background-color: var(--body-bg);
  border: 2px solid var(--action-bg);
  border-radius: var(--border-radius-low);
  margin: 8px 0 0;
  padding: 4px;
  z-index: 1;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu:before {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  border: 8px solid var(--body-bg);
  left: 0;
  top: 0;
  border-radius: var(--border-radius-low);
  z-index: 1;
  pointer-events: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete {
  font-size: 14px;
  padding: 12px;
  border: 1px solid transparent;
  bottom: calc(100% + 8px - 1px);
  border-right: 0;
  position: absolute;
  pointer-events: none;
  color: var(--placeholder-color);
  left: -1px;
  right: 24px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete > * {
  max-width: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__left],
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__right],
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__ellipsis] {
  line-height: 17px;
  height: 17px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__right] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__ellipsis] * {
  color: var(--placeholder-color) !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete.dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed {
  text-overflow: ellipsis;
  line-height: 17px;
  overflow: hidden;
  white-space: nowrap;
  display: block;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete.dapp-core-component__styles-module__receiver-select-autocomplete-username {
  padding-left: 36px;
  white-space: nowrap;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-icon {
  min-width: 20px;
  flex: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  height: 20px;
  width: 20px;
  background: var(--black);
  border-radius: 4px;
  padding: 3px;
  padding-bottom: 2px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-icon.dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted {
  opacity: 0.75;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-wrapper [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-wrapper [class*=__right] * {
  color: var(--card-subtitle) !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-collection {
  margin-left: 4px;
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list {
  padding: 0;
  gap: 4px;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar {
  width: 12px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar-track {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: var(--border-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar-thumb, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar-thumb:hover {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option {
  cursor: pointer;
  line-height: 1.25;
  padding: 12px !important;
  border-radius: 6px;
  background-color: transparent;
  width: calc(100% - 8px);
  margin: 0 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:first-child {
  margin-top: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:last-child {
  margin-bottom: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused {
  background-color: var(--action-bg);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--action-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] *, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--action-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] *, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-username, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-username {
  color: var(--action-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-collection, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-collection {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover strong, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused strong {
  font-weight: 900 !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
  color: var(--card-subtitle);
  font-size: 1rem;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper * {
  font-size: 1rem !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-username {
  font-size: 1rem;
  position: relative;
  padding-left: 28px;
  color: var(--placeholder-color);
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-username * {
  white-space: nowrap;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-username .dapp-core-component__styles-module__receiver-select-option-username-icon {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--black);
  border-radius: 4px;
  left: 0;
  padding: 3px;
  padding-bottom: 2px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--placeholder-color);
  align-items: flex-end;
  display: flex;
  max-width: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-collection {
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-collection strong {
  color: var(--action-color);
  font-weight: 400;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__found,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__loading {
  top: 0;
  font-size: 12px;
  line-height: 1;
  position: absolute;
  right: 0;
  color: var(--dapp-form-label-color);
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__found .dapp-core-component__styles-module__svg,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__loading .dapp-core-component__styles-module__svg {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ra));var C={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},Pa=r=>Ua.default.createElement(Fa.components.Control,Q(U({},r),{className:C.receiverSelectControl}));l();l();var Go=u(t("react")),Oa=t("@fortawesome/free-solid-svg-icons"),Ma=t("@fortawesome/react-fontawesome"),Va=u(t("classnames")),Wa=t("react-select");l();l();var at=(r,a)=>{let c=a.toLowerCase(),d=r.label.toLowerCase(),m=r.value.toLowerCase();return a?d.includes(c)||m.includes(c):!0};l();var za=t("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Ga=t("@terradharitri/sdk-dapp/utils"),qt=r=>r?r.filter(a=>(0,Ga.addressIsValid)(a.address)).map(a=>{let c=a.username?String((0,za.trimUsernameDomain)(a.username)):a.address;return{value:a.address,label:c}}):[];l();var ja=({setOption:r,setAllValues:a})=>(c,d)=>{["input-blur","menu-close"].includes(d.action)||(a(c),c||r(null))};l();var $a=({setInputValue:r,setOption:a,changeAndBlurInput:c})=>d=>{!d||(a(d),c(d.value),d.value!==d.label?r(d.label):r(d.value))};l();var Ha=({options:r,usernameAccounts:a,knownAddresses:c,setFieldValue:d,setInputValue:m,setOption:_})=>i=>{var p,b,v,w;let h=r.find(N=>N.value===i&&N.value!==N.label),x=h==null?void 0:h.label,I,g,k=(p=a[i])==null?void 0:p.username;k&&(x=k,I=k,g=(b=a[i])==null?void 0:b.rawUsername);let S=c.find(N=>N.address===i);S!=null&&S.username&&(x=S==null?void 0:S.username,I=S==null?void 0:S.username,g=S==null?void 0:S.rawUsername);let E=x!=null?x:i;m(E),_({value:i,label:E}),d("receiver",(w=(v=a[i])==null?void 0:v.address)!=null?w:i),d("receiverUsername",I),d("rawReceiverUsername",g)},Za=r=>{let{selectProps:a,isDisabled:c,options:d}=r,{menuIsOpen:m,value:_,isLoading:i}=a,p=(0,Go.useMemo)(()=>d.find(h=>{let x=h,I=_;return I?at(x,I.label):null}),[_,d]),b=d.length===0&&!i,v=Boolean(_)&&!p,w=c||b||v;return i?Go.default.createElement(Ma.FontAwesomeIcon,{icon:Oa.faSpinner,spin:!0,className:C.receiverSelectSpinner}):Go.default.createElement(Wa.components.DropdownIndicator,Q(U({},r),{className:(0,Va.default)(C.receiverSelectIndicator,{[C.expanded]:m,[C.hidden]:w})}))};l();l();var Ya=u(t("react")),Ka=t("@terradharitri/sdk-dapp/utils"),Xa=u(t("classnames")),Qa=t("react-select");l();l();var Ja=(r,a)=>{let c=r.current;if(!c||!c.state.focusedOption)return!1;let d=c.state.focusedOption,m=d.label.toLowerCase(),_=d.value.toLowerCase(),i=m!==_,p=i&&m.startsWith(a.toLowerCase());return i&&!a?!0:p},el=r=>a=>{let{selectProps:c,value:d}=a,{inputValue:m,menuIsOpen:_}=c,{receiverUsernameInfo:{receiverUsername:i}}=ie(),p=Ja(r,m),b=(0,Ka.addressIsValid)(String(d)),v=Boolean(i)||p,w=b&&_||!b&&m;return Ya.default.createElement(Qa.components.Input,Q(U({},a),{"data-testid":"receiver",className:(0,Xa.default)(C.receiverSelectInput,{[C.visible]:w,[C.spaced]:v})}))};l();l();var ol=u(t("react")),tl=t("react-select"),rl=r=>ol.default.createElement(tl.components.Menu,Q(U({},r),{className:C.receiverSelectMenu}));l();l();var ae=u(t("react")),jo=t("@terradharitri/sdk-dapp/UI/Trim"),xo=u(t("classnames")),nl=t("react-select"),al=r=>{let{selectProps:a,focusedOption:c}=r,{value:d,inputValue:m}=a,_=c,i=_?_.label.toLowerCase():null,p=_&&_.label!==_.value,b=(i&&(!d||d&&m)?i.startsWith(m.toLowerCase()):!1)&&_?_.label.replace(_.label.substring(0,m.length),m):null,v=b&&!m,w=b&&m.length<b.length/2,h=b&&Boolean(m)&&w,x=b&&Boolean(m);return ae.default.createElement(ae.default.Fragment,null,h&&!p&&ae.default.createElement("div",{className:(0,xo.default)(C.receiverSelectAutocomplete,C.receiverSelectAutocompleteUntrimmed)},b),x&&p&&ae.default.createElement("div",{className:(0,xo.default)(C.receiverSelectAutocomplete,C.receiverSelectAutocompleteUsername)},ae.default.createElement(po,{className:C.receiverSelectAutocompleteIcon}),b,ae.default.createElement("span",{className:C.receiverSelectAutocompleteWrapper},"(",ae.default.createElement(jo.Trim,{text:_.value}),")")),v&&ae.default.createElement("span",{className:(0,xo.default)(C.receiverSelectAutocomplete,{[C.receiverSelectAutocompleteUsername]:p})},p?ae.default.createElement(ae.default.Fragment,null,ae.default.createElement("span",null,ae.default.createElement(po,{className:(0,xo.default)(C.receiverSelectAutocompleteIcon,C.receiverSelectAutocompleteIconMuted)}),_.label),ae.default.createElement("span",{className:C.receiverSelectAutocompleteWrapper},"(",ae.default.createElement(jo.Trim,{text:_.value}),")")):ae.default.createElement(jo.Trim,{text:b})),ae.default.createElement(nl.components.MenuList,Q(U({},r),{className:C.receiverSelectList})))};l();l();var qe=u(t("react")),Tt=t("@terradharitri/sdk-dapp/UI/Trim"),ll=u(t("classnames")),cl=t("react-select");l();l();var So=u(t("react"));l();var pl=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pl));var dl={highlight:"dapp-core-component__styles-modules__highlight"},vr=({highlight:r,text:a=""})=>{let c=a.split(" "),d=r.toLowerCase(),m=new RegExp(`(${d})`,"gi"),_=c.map(i=>i.split(m).filter(p=>p));return So.default.createElement("span",{className:dl.highlight},_.map((i,p)=>{let b=`${i}-${p}`;return So.default.createElement("span",{key:b},i.map((v,w)=>{let h=v.toLowerCase()===d,x=d&&h,I=`${v}-${w}`;return x?So.default.createElement("strong",{key:I},v):So.default.createElement("span",{key:I},v)}))}))},sl=r=>{let{isFocused:a,data:c,selectProps:d}=r,{inputValue:m}=d,_=c,i=_.value!==_.label;return qe.default.createElement(cl.components.Option,Q(U({},r),{className:(0,ll.default)(C.receiverSelectOption,{[C.focused]:a})}),i?qe.default.createElement(qe.default.Fragment,null,qe.default.createElement("span",{className:C.receiverSelectOptionUsername},qe.default.createElement(po,{className:C.receiverSelectOptionUsernameIcon}),qe.default.createElement(vr,{text:_.label,highlight:m})),qe.default.createElement("span",{className:C.receiverSelectOptionNameWrapper},"(",qe.default.createElement(Tt.Trim,{text:_.value,className:C.receiverSelectOptionName}),")")):qe.default.createElement(Tt.Trim,{text:_.value,className:C.receiverSelectOptionName}))};l();l();var ml=u(t("react")),il=u(t("classnames")),_l=t("react-select"),ul=r=>{let{selectProps:a,isFocused:c,className:d}=r,{menuIsOpen:m}=a;return ml.default.createElement(_l.components.SelectContainer,Q(U({},r),{className:(0,il.default)(d,{[C.expanded]:m,[C.focused]:c&&m})}))};l();l();var Te=u(t("react")),Ct=t("@terradharitri/sdk-dapp/UI/Trim"),fl=t("@terradharitri/sdk-dapp/utils"),vl=u(t("classnames")),bl=t("react-select"),gl=r=>{let{selectProps:a,isDisabled:c}=r,{value:d,menuIsOpen:m}=a,_=d,{receiverInfo:{receiver:i},receiverUsernameInfo:{receiverUsername:p}}=ie(),b=p!=null?p:_&&_.value!==_.label,v=_?{value:i!=null?i:_.value,label:_.label}:null,w=v&&(b||!b&&!m)&&(0,fl.addressIsValid)(v.value);return Te.default.createElement(bl.components.ValueContainer,Q(U({},r),{className:C.receiverSelectValue}),w&&Te.default.createElement("span",{className:(0,vl.default)(C.receiverSelectSingle,{[C.disabled]:c})},b?Te.default.createElement(Te.default.Fragment,null,Te.default.createElement("span",{className:C.receiverSelectSingleUsername},Te.default.createElement(po,{className:C.receiverSelectSingleUsernameIcon}),v.label),Te.default.createElement("span",{className:C.receiverSelectSingleTrimWrapper},"(",Te.default.createElement(Ct.Trim,{text:v.value,className:C.receiverSelectSingleTrim}),")")):Te.default.createElement(Ct.Trim,{text:v.value,className:C.receiverSelectSingleTrim})),r.children)};l();l();var yl=t("formik"),br=()=>{let{receiverInfo:{receiverError:r,isReceiverInvalid:a},receiverUsernameInfo:{receiverUsernameError:c,isReceiverUsernameInvalid:d,receiverUsername:m}}=ie(),{touched:{receiver:_}}=(0,yl.useFormikContext)(),i=a&&_||d;return m!=null&&m.startsWith("drt1")?{isInvalid:a,receiverErrorDataTestId:"receiverError",error:r}:{isInvalid:i,receiverErrorDataTestId:d?"receiverUsernameError":"receiverError",error:d?c:r}};l();l();var hl=t("@terradharitri/sdk-dapp/utils"),wl=t("formik");l();l();var kl=({knownAddresses:r,inputValue:a})=>!r||!a?!1:r.filter(c=>{var d;let m=(d=c.username)!=null?d:c.address,_=c.address;return at({label:m,value:_,data:{label:m,value:_}},a)}).length>0,xl=({menuIsOpen:r})=>{let{isInvalid:a}=br(),{values:{nft:c}}=(0,wl.useFormikContext)(),{showUsernameError:d,isUsernameLoading:m,isUsernameDebouncing:_,usernameIsAmongKnown:i,searchQueryIsAddress:p}=_r(),{receiverInputValue:b,knownAddresses:v}=Vn(),w=Wn({key:"address",knownAddresses:v,inputValue:b}),h=kl({inputValue:b,knownAddresses:v}),x=p&&(!w||!r)&&!(0,hl.addressIsValid)(b),I=Boolean(d&&!(r&&w)&&!(r&&i));return{isAddressError:x||(c?a:!1),isUsernameError:I,isRequiredError:a&&!I&&!m&&!_&&!x&&!h&&!b,isReceiverDropdownOpened:b&&h&&r}},Sl=r=>{let a=(0,X.useRef)(null),{className:c}=r,{setFieldValue:d}=(0,Da.useFormikContext)(),{receiverInfo:{scamError:m,fetchingScamAddress:_,receiverInputValue:i,setReceiverInputValue:p,knownAddresses:b,receiver:v,onBlurReceiver:w,onChangeReceiver:h},receiverUsernameInfo:{receiverUsername:x},formInfo:{readonly:I}}=ie(),[g,k]=(0,X.useState)(!1),[S,E]=(0,X.useState)(v?{label:v,value:v}:null),{receiverErrorDataTestId:N,error:T}=br(),{isAddressError:F,isUsernameError:R,isRequiredError:O,isReceiverDropdownOpened:_e}=xl({menuIsOpen:g}),{usernameAccounts:G,isUsernameLoading:K}=_r(),z=()=>{w(new Event("blur"));let D=b==null?void 0:b.find(j=>j.username===i&&j.address===v);D&&(d("receiver",D.address),d("receiverUsername",D.username),d("rawReceiverUsername",D.rawUsername))},ue=b==null?void 0:b.find(D=>D.username===i&&D.address===v),pe=(0,X.useMemo)(()=>qt(b),[b]),B=ue?qt([ue]):pe,P=Ha({setFieldValue:d,setInputValue:p,setOption:E,options:B,knownAddresses:b!=null?b:[],usernameAccounts:G}),M=(0,X.useCallback)(ja({setAllValues:P,setOption:E}),[]),te=(0,X.useCallback)(D=>{h(D?D.trim():""),setTimeout(z)},[]),re=$a({changeAndBlurInput:te,setOption:E,setInputValue:p}),ye=(0,X.useMemo)(()=>el(a),[a]);(0,X.useEffect)(()=>{if(!v)return;let D=Object.keys(G).find(j=>{var Ve;return((Ve=G[j])==null?void 0:Ve.address)===v});P(D!=null?D:v),D&&p(D)},[G,v]);let de=F||R||O,ne=de&&!g;return X.default.createElement("div",{className:(0,zo.default)(C.receiver,c)},X.default.createElement("div",{className:A.label,"data-testid":"receiverLabel","data-loading":_},"Receiver"),X.default.createElement(Ba.default,{value:S,onInputChange:M,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:Qe("receiver",I),options:B,filterOption:at,noOptionsMessage:()=>null,onChange:re,onBlur:z,isMulti:!1,ref:a,inputValue:i,onMenuClose:()=>k(!1),onMenuOpen:()=>k(!0),components:{Menu:rl,Input:ye,Control:Pa,ValueContainer:gl,DropdownIndicator:Za,SelectContainer:ul,MenuList:al,Option:sl,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,zo.default)(C.receiverSelectContainer,{[C.opened]:_e,[C.invalid]:de||m})}),ne&&X.default.createElement("div",{"data-testid":N,className:A.error},T),K&&X.default.createElement("div",{className:C.loading},"Loading..."),x&&X.default.createElement("span",{className:C.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",X.default.createElement(Nt.FontAwesomeIcon,{icon:It.faCheck,className:C.foundIcon})),m&&X.default.createElement("div",{"data-testid":"receiverScam",className:(0,zo.default)(A.error,A.scam)},X.default.createElement("span",null,X.default.createElement(Nt.FontAwesomeIcon,{icon:It.faExclamationTriangle}),X.default.createElement("small",null,m))))};l();l();var we=u(t("react")),El=u(t("bignumber.js")),$o=u(t("classnames"));l();var Il=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__amount {
  position: relative;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label label {
  margin: 0;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label .dapp-core-component__styles-module__balance {
  line-height: 1;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  display: flex;
  overflow: hidden;
  min-width: 0;
  align-items: center;
  gap: 4px;
  max-width: 75%;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label .dapp-core-component__styles-module__balance .dapp-core-component__styles-module__available {
  color: var(--dapp-form-input-color);
  display: flex;
  align-items: center;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  gap: 4px;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label .dapp-core-component__styles-module__balance .dapp-core-component__styles-module__available .dapp-core-component__styles-module__amount {
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__wrapper {
  position: relative;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__max {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 16px;
  margin-right: 8px;
  background-color: var(--dapp-form-max-btn-bg);
  color: var(--dapp-form-max-btn-color);
  text-transform: uppercase;
  padding: 6px 0;
  font-size: 12px;
  transition: all 200ms ease;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__max:hover {
  color: var(--dapp-form-max-btn-color);
  background-color: var(--dapp-form-max-hover-btn-bg);
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Il));var je={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"},Nl=r=>{let{className:a}=r,{formInfo:{readonly:c},amountInfo:d,tokensInfo:m}=ie(),{amount:_,error:i,onFocus:p,onBlur:b,onChange:v,isInvalid:w,onMaxClicked:h,maxAmountAvailable:x,isMaxButtonVisible:I}=d,{nft:g}=m,k=g!=null&&g.balance?new El.default(g.balance).isGreaterThan(0):!1,S=E=>{E.preventDefault(),h()};return we.default.createElement("div",{className:(0,$o.default)(je.amount,a)},we.default.createElement("div",{className:je.label},we.default.createElement("label",{htmlFor:"amount",className:A.label},"Amount"),k&&g&&we.default.createElement("div",{"data-value":`${x} ${g.identifier}`,className:(0,$o.default)(je.balance,a)},we.default.createElement("span",null,"Available:")," ",we.default.createElement("span",{"data-testid":`available-${g.identifier}`,className:je.available},we.default.createElement("span",{className:je.amount},x)," ",g.ticker))),we.default.createElement("div",{className:je.wrapper},we.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:_,disabled:Qe("amount",c),onFocus:p,onBlur:b,onChange:v,autoComplete:"off",className:(0,$o.default)(A.input,{[A.invalid]:w,[A.disabled]:Qe("amount",c)})}),I&&we.default.createElement("a",{href:"/","data-testid":"maxBtn",className:je.max,onClick:S,onMouseDown:E=>{E.preventDefault()}},"Max")),w&&we.default.createElement("div",{className:A.error,"data-testid":"amountError"},i))};l();l();var fe=u(t("react")),At=t("@fortawesome/free-solid-svg-icons"),Lt=t("@fortawesome/react-fontawesome"),ql=t("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Dt=u(t("classnames")),Tl=u(t("react-collapsed"));l();var De=u(t("react")),Cl=t("@fortawesome/free-solid-svg-icons"),Al=t("@fortawesome/react-fontawesome"),Ll=u(t("bignumber.js")),Bt=u(t("classnames")),Dl=t("react-number-format");l();l();var $e=t("@terradharitri/sdk-dapp/constants/index"),Bl=t("@terradharitri/sdk-dapp/utils/validation"),Be=u(t("bignumber.js")),Ul=(r,a)=>{let c=a!=null?a:$e.DIGITS;if((0,Bl.stringIsFloat)(r)){if(new Be.default(r).isZero())return"0";let d=new Be.default(r).toFormat(c);return d=parseFloat(d)>0?d:new Be.default(r).toFormat($e.DIGITS),d=parseFloat(d)>0?d:new Be.default(r).toFormat($e.DIGITS+2),d=parseFloat(d)>0?d:new Be.default(r).toFormat($e.DIGITS+4),d=parseFloat(d)>0?d:new Be.default(r).toFormat($e.DIGITS+6),d=parseFloat(d)>0?d:new Be.default(r).toFormat($e.DIGITS+10),parseFloat(d)>0?d:new Be.default(r).toFormat($e.DIGITS+14)}return"0"};l();var Ut=r=>r.replace(/,/g,"");l();var Ft=t("react"),Fl={value:"",count:0},Rl=(r,a)=>{let[c,d]=(0,Ft.useState)(Fl);return(0,Ft.useEffect)(()=>{let m=setTimeout(()=>{d(r)},a);return()=>clearTimeout(m)},[r.count]),c};l();var Pl=u(t("bignumber.js")),lt=r=>{let[a,c]=r.split(""),d=new Pl.default(a).isZero();return Boolean(d&&c&&c!==".")};l();var Ol=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__gas {
  position: relative;
}
.dapp-core-component__styles-module__gas:last-child {
  margin-bottom: 0;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input {
  display: initial;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input.dapp-core-component__styles-module__spaced {
  padding-right: 44px;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions {
  right: 0;
  top: 0;
  position: absolute;
  bottom: 0;
  display: flex;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action {
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:hover .dapp-core-component__styles-module__icon {
  color: #23f7dd;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child) {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child):before {
  background-color: var(--dapp-form-placeholder-color);
  width: 1px;
  top: 16px;
  bottom: 16px;
  left: 0;
  content: "";
  position: absolute;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action .dapp-core-component__styles-module__icon {
  color: var(--dapp-form-placeholder-color);
  transition: all 200ms ease;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ol));var ce={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},Ml=()=>{let{formInfo:r,gasInfo:a}=ie(),{readonly:c}=r,{defaultGasLimit:d,onResetGasLimit:m,onChangeGasLimit:_,onBlurGasLimit:i,gasLimit:p,gasLimitError:b,isGasLimitInvalid:v}=a,w=k=>{k.preventDefault(),m()},h=({value:k,floatValue:S})=>(!S||!(0,Ll.default)(S).isNaN())&&!lt(k),x=k=>{_(k.value,!0)},I=p!==d&&!c,g=Qe("gasLimit",c);return De.default.createElement("div",{className:ce.gas},De.default.createElement("label",{className:A.label,htmlFor:"gasLimit"},"Gas Limit"),De.default.createElement("div",{className:ce.wrapper},De.default.createElement(Dl.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:g,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:i,onValueChange:x,required:!0,isAllowed:h,thousandSeparator:",",thousandsGroupStyle:"thousand",value:p,valueIsNumericString:!0,allowNegative:!1,className:(0,Bt.default)(A.input,ce.input,{[A.disabled]:g,[A.invalid]:v,[ce.spaced]:I})}),I&&De.default.createElement("div",{className:ce.actions},De.default.createElement("div",{onClick:w,"data-testid":"gasLimitResetBtn",className:(0,Bt.default)(ce.action,{[ce.disabled]:g})},De.default.createElement(Al.FontAwesomeIcon,{icon:Cl.faUndo,className:ce.icon}))),v&&De.default.createElement("div",{className:A.error,"data-testid":"gasLimitError"},b)))};l();l();var Ue=u(t("react")),Vl=t("@fortawesome/free-solid-svg-icons"),Wl=t("@fortawesome/react-fontawesome"),zl=u(t("bignumber.js")),Rt=u(t("classnames")),Gl=t("react-number-format"),jl=()=>{let{networkConfig:r}=Lo(),{gasInfo:a,formInfo:c}=ie(),{readonly:d}=c,{rewaLabel:m}=r,{gasPrice:_,gasPriceError:i,isGasPriceInvalid:p,onChangeGasPrice:b,onBlurGasPrice:v,onResetGasPrice:w}=a,h=_!==pr&&!d,x=Qe("gasPrice",d),I=({value:S,floatValue:E})=>(!E||!(0,zl.default)(E).isNaN())&&!lt(S),g=S=>{S.preventDefault(),w()},k=S=>{b(S.value,!0)};return Ue.default.createElement("div",{className:ce.gas},Ue.default.createElement("label",{className:A.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),Ue.default.createElement("div",{className:ce.wrapper},Ue.default.createElement(Gl.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:x,id:"gasPrice",inputMode:"decimal",isAllowed:I,name:"gasPrice",onBlur:v,onValueChange:k,required:!0,suffix:` ${m}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:_,valueIsNumericString:!0,allowNegative:!1,className:(0,Rt.default)(A.input,ce.input,{[A.disabled]:x,[A.invalid]:p,[ce.spaced]:h})}),h&&Ue.default.createElement("div",{className:ce.actions},Ue.default.createElement("div",{onClick:g,className:(0,Rt.default)(ce.action,{[ce.disabled]:x})},Ue.default.createElement(Wl.FontAwesomeIcon,{icon:Vl.faUndo,className:ce.icon})))),p&&Ue.default.createElement("div",{className:A.error,"data-testid":"gasPriceError"},i))};l();var $l=u(t("react"));l();var Hl=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__fee {
  color: var(--dapp-form-input-color);
  width: 100%;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger {
  align-items: center;
  background: var(--dapp-form-input-bg);
  border-radius: var(--border-radius-low);
  cursor: pointer;
  display: flex;
  flex-flow: row;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1rem;
  word-break: break-all;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__label, .dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__fiat, .dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__arrow {
  color: var(--dapp-form-input-color);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__fiat {
  font-size: 12px;
  margin-left: 0.25rem;
  transition: all 200ms ease;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__arrow {
  transition: all 200ms ease;
  color: var(--dapp-form-label-color);
  margin-left: auto;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__arrow.dapp-core-component__styles-module__active {
  transform: rotateZ(90deg);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__expandable .dapp-core-component__styles-module__content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hl));var Pe={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"},Zl=({feeLimit:r,rewaPriceInUsd:a})=>r===co?null:$l.default.createElement("span",{className:Pe.fiat,"data-testid":"feeInFiat"},"(",ar({feeLimit:r,rewaPriceInUsd:a}),")"),Yl=({className:r})=>{let{gasInfo:a,tokensInfo:c}=ie(),{feeLimit:d,gasCostLoading:m,gasPriceError:_,gasLimitError:i}=a,{rewaPriceInUsd:p,rewaLabel:b}=c,[v,w]=(0,fe.useState)(Boolean(_||i)),{getCollapseProps:h,getToggleProps:x}=(0,Tl.default)({isExpanded:v}),I=()=>{w(g=>!g)};return fe.default.createElement("div",{className:(0,Dt.default)(Pe.fee,r)},fe.default.createElement("label",{className:A.label},"Fee"),fe.default.createElement("div",U({className:Pe.trigger},x({onClick:I})),fe.default.createElement("span",{className:Pe.limit,"data-testid":"feeLimit"},fe.default.createElement(ql.FormatAmount,{value:d,showLastNonZeroDecimal:!0,rewaLabel:b})),m&&fe.default.createElement(Lt.FontAwesomeIcon,{icon:At.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),fe.default.createElement(Zl,{rewaPriceInUsd:p,feeLimit:d}),fe.default.createElement(Lt.FontAwesomeIcon,{icon:At.faChevronRight,className:(0,Dt.default)(Pe.arrow,{[Pe.active]:v})})),fe.default.createElement("div",U({className:Pe.expandable},h()),fe.default.createElement("div",{className:Pe.content},fe.default.createElement(jl,null),fe.default.createElement(Ml,null))))};l();l();var pm=u(t("react")),dm=u(t("@terradharitri/sdk-dapp/constants/index")),sm=u(t("classnames")),mm=u(t("react-select"));l();var Kl=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__selectTokenContainer {
  margin-bottom: 1.5rem;
  z-index: 8;
  position: relative;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Kl));l();l();var ke=u(t("react")),Ho=u(t("classnames"));l();var Xl=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__amountSelect-module__amount {
  display: block;
  position: relative;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper {
  align-items: center;
  background: var(--dapp-form-input-bg);
  border: 1px solid var(--dapp-form-input-bg);
  border-radius: var(--dapp-form-input-border-radius);
  display: flex;
  position: relative;
  padding: 4px;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper.dapp-core-component__amountSelect-module__error {
  border-color: var(--dapp-form-error-color);
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper.dapp-core-component__amountSelect-module__disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper .dapp-core-component__amountSelect-module__interaction {
  align-items: center;
  bottom: 0;
  display: flex;
  position: absolute;
  right: 4px;
  top: 0;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__label label {
  margin: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xl));var Oe={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};l();l();l();var oe=u(t("react")),Ql=t("@terradharitri/sdk-dapp/utils/validation"),Zo=u(t("bignumber.js")),Pt=u(t("classnames")),Jl=t("react-number-format");l();var ec=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__amountInput-module__amount-input {
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: var(--black);
  font-variant-numeric: tabular-nums;
  font-weight: 500;
  height: 100%;
  padding: 1rem;
  width: 100%;
}
.dapp-core-component__amountInput-module__amount-input::focused, .dapp-core-component__amountInput-module__amount-input::active {
  box-shadow: none;
}
.dapp-core-component__amountInput-module__amount-input::placeholder {
  font-weight: 300;
}
@media (max-width: 575px) {
  .dapp-core-component__amountInput-module__amount-input::placeholder {
    font-size: 1rem;
  }
}
@media (max-width: 767px) {
  .dapp-core-component__amountInput-module__amount-input::placeholder {
    font-size: 1rem;
  }
}

.dapp-core-component__amountInput-module__amount-holder {
  max-width: 50%;
  position: relative;
  width: 100%;
}
.dapp-core-component__amountInput-module__amount-holder.dapp-core-component__amountInput-module__show-usd-value .dapp-core-component__amountInput-module__amount-input {
  padding-top: 0.375rem;
  padding-bottom: 1.5rem;
}
.dapp-core-component__amountInput-module__amount-holder .dapp-core-component__amountInput-module__amount-holder-usd {
  display: flex;
  font-size: 1rem;
  line-height: 1;
  padding: 0 1rem;
  position: absolute;
  color: var(--dapp-form-label-color);
  top: 1.875rem;
  width: 100%;
}
.dapp-core-component__amountInput-module__amount-holder .dapp-core-component__amountInput-module__amount-holder-usd small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dapp-core-component__amountInput-module__amount-holder .dapp-core-component__amountInput-module__input {
  height: 70px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ec));var Eo={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"},oc=500,Ot=1e13,tc=({"data-testid":r,InfoDustComponent:a,disabled:c,handleBlur:d,handleChange:m,name:_,onDebounceChange:i,onFocus:p,onKeyDown:b,placeholder:v,required:w,usdPrice:h,value:x,usdValue:I,className:g,autoFocus:k,suffix:S})=>{let E=(0,oe.useRef)(null),[N,T]=(0,oe.useState)(),[F,R]=(0,oe.useState)(!1),[O,_e]=(0,oe.useState)({value:x,count:0}),[G,K]=(0,oe.useState)(),z=Rl(O,oc),ue=P=>{P.stopPropagation(),R(!0);let M=Ut(P.target.value),te=(0,Zo.default)(M).isLessThanOrEqualTo(Ot);if((M===""||te)&&(T(M),P.target.value=M,m(P),i)){let re={value:M,count:O.count+1};_e(re)}},pe=()=>{if(I)return K(`$${I}`);if(!h||!x)return K(void 0);let P=Ut(x);if(!(x!==""&&(0,Ql.stringIsFloat)(P))||P==="")return K(void 0);let M=Ul(new Zo.default(P).times(h!=null?h:0).toString(10),2);K(`$${M}`)},B=({value:P,floatValue:M})=>(!M||(0,Zo.default)(M).isLessThanOrEqualTo(Ot))&&!lt(P);return(0,oe.useEffect)(()=>{i&&F&&(R(!1),i(z.value))},[z]),(0,oe.useEffect)(pe,[x,I,h]),(0,oe.useEffect)(()=>{x!==N&&T(x)},[x]),oe.default.createElement("div",{ref:E,className:(0,Pt.default)(Eo.amountHolder,{[Eo.showUsdValue]:Boolean(G)},g)},oe.default.createElement(Jl.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":r||_,decimalSeparator:".",disabled:Boolean(c),id:_,inputMode:"decimal",isAllowed:B,name:_,onBlur:d,onChange:ue,onFocus:p,onKeyDown:b,placeholder:v,required:w,thousandSeparator:",",thousandsGroupStyle:"thousand",value:N,suffix:S,valueIsNumericString:!0,allowNegative:!1,autoFocus:k,className:(0,Pt.default)(A.input,Eo.amountInput,{[A.disabled]:Boolean(c)})}),G&&oe.default.createElement("span",{className:Eo.amountHolderUsd},oe.default.createElement("small",{"data-testid":`tokenPrice_${h}`},G!=="$0"?oe.default.createElement(oe.default.Fragment,null,"\u2248 "):oe.default.createElement(oe.default.Fragment,null),G),a))},rc=(0,oe.memo)(tc,(r,a)=>r.value===a.value&&r.usdPrice===a.usdPrice&&r.className===a.className&&r.disabled===a.disabled&&r.usdValue===a.usdValue);l();l();var Mt=u(t("react"));l();l();var ao=u(t("react")),nc=t("@fortawesome/free-solid-svg-icons"),ac=t("@fortawesome/react-fontawesome"),lc=t("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),cc=t("react-tooltip"),im=t("react-tooltip/dist/react-tooltip.css");l();var pc=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__infoDust {
  display: inline-block;
  position: relative;
}
.dapp-core-component__styles-module__infoDust .dapp-core-component__styles-module__infoDustTrigger {
  cursor: pointer;
  color: var(--primary-light);
}
.dapp-core-component__styles-module__infoDust .dapp-core-component__styles-module__infoDustTrigger:hover {
  color: var(--link-hover-color);
}
.dapp-core-component__styles-module__infoDust .dapp-core-component__styles-module__infoDustTooltip {
  width: 200px;
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: var(--white);
  text-align: center;
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--black);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(pc));var Yo={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},dc=({rewaLabel:r})=>ao.default.createElement("div",{className:Yo.infoDust},ao.default.createElement(cc.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:Yo.infoDustTooltip},"A minimal amount of"," ",ao.default.createElement(lc.FormatAmount,{rewaLabel:r,value:lr,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),ao.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:Yo.infoDustTrigger},ao.default.createElement(ac.FontAwesomeIcon,{icon:nc.faInfoCircle,className:"i-icon"}))),sc=({rewaLabel:r,amount:a,maxAmountMinusDust:c,isMaxClicked:d,tokenId:m})=>a===c&&d&&m===r?Mt.default.createElement("span",{style:{marginLeft:"0.2rem"}},Mt.default.createElement(dc,{rewaLabel:r})):null;l();l();var mc=u(t("react")),ic=t("@terradharitri/sdk-dapp/constants"),Vt=u(t("bignumber.js")),_c=u(t("classnames"));l();var Wt=u(t("bignumber.js")),uc=r=>{let a=new Wt.default(r!=null?r:"0"),c=new Wt.default(lr),d=a.minus(c);return d.isGreaterThan(0)?d.toString(10):"0"};l();var fc=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__maxButton-module__max {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 16px;
  margin-right: 8px;
  background-color: var(--dapp-form-max-btn-bg);
  color: var(--dapp-form-max-btn-color);
  text-transform: uppercase;
  width: 48px;
  padding: 6px 0;
  font-size: 12px;
  transition: all 200ms ease;
}
.dapp-core-component__maxButton-module__max:hover {
  color: var(--dapp-form-max-btn-color);
  background-color: var(--dapp-form-max-hover-btn-bg);
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fc));var vc={max:"dapp-core-component__maxButton-module__max"};l();var He=t("@terradharitri/sdk-dapp/constants"),bc=t("@terradharitri/sdk-dapp/utils/operations/formatAmount"),gc=t("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ct=({amount:r="0",decimals:a=0,digits:c=He.DIGITS,addCommas:d=!1,showLastNonZeroDecimal:m=!1})=>{if(r==null||!(0,gc.stringIsInteger)(r))return"0";let _=p=>(0,bc.formatAmount)({input:r,digits:p,decimals:a,addCommas:d,showLastNonZeroDecimal:m}),i=_(c);return i=parseFloat(i)>0?i:_(He.DIGITS),i=parseFloat(i)>0?i:_(He.DIGITS+2),i=parseFloat(i)>0?i:_(He.DIGITS+4),i=parseFloat(i)>0?i:_(He.DIGITS+6),i=parseFloat(i)>0?i:_(He.DIGITS+10),parseFloat(i)>0?i:_(He.DIGITS+14)},yc=({token:r,rewaLabel:a,inputAmount:c,className:d,onMaxClick:m})=>{var _;let i=(r==null?void 0:r.identifier)===a,p=(_=r==null?void 0:r.balance)!=null?_:"0";if(p==="0")return null;let b=ct({amount:i?uc(p):p,decimals:(r==null?void 0:r.decimals)||ic.DECIMALS}),v=new Vt.default(c).isEqualTo(new Vt.default(b)),w=h=>{h.preventDefault(),m==null||m(b)};return v?null:mc.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,_c.default)(vc.max,d),onClick:w,onMouseDown:h=>{h.preventDefault()}},"Max")};l();l();var Fe=u(t("react")),hc=u(t("classnames")),wc=u(t("react-select")),gr={};Co(gr,{Control:()=>Pc,IndicatorsContainer:()=>$c,Input:()=>qc,Menu:()=>Uc,MenuList:()=>Ac,DharitrIIcon:()=>wr,Placeholder:()=>Wc,SmallLoader:()=>Sc,ValueComponent:()=>yr,getOption:()=>kr,getSingleValue:()=>xr,getValueContainer:()=>hr});l();l();var zt=u(t("react")),kc=t("@fortawesome/free-solid-svg-icons"),xc=t("@fortawesome/react-fontawesome"),Sc=({show:r,color:a})=>r?zt.default.createElement("div",{className:"d-flex"},zt.default.createElement(xc.FontAwesomeIcon,{icon:kc.faSpinner,className:`fa-spin fast-spin ${a||"text-primary"}`})):null;l();l();var Ec=u(t("react")),Ic=t("react-select");l();var Nc=`.dapp-core-component__tokenSelect-module__label {
  display: none;
}

.dapp-core-component__tokenSelect-module__select {
  width: auto;
  margin-left: auto;
  position: relative;
}
.dapp-core-component__tokenSelect-module__select.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
  background-color: var(--dapp-form-bg);
  border: transparent;
  border-radius: var(--dapp-form-input-border-radius);
  width: 8rem;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control {
    margin-left: 0.2rem;
    width: 11rem;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__indicator svg {
  fill: var(--dapp-form-select-indicator-fill-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control:hover .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
  line-height: 1.5;
  font-size: 1rem;
  height: 3.625rem;
  padding: 4px 0 4px 10px;
  flex: 1;
  cursor: pointer;
  display: flex;
}
@media (min-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container {
    padding-left: 4px;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
  width: 40px;
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  margin-right: 8px;
  flex: 1;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  justify-content: center;
  overflow: hidden;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon img {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__asset .dapp-core-component__tokenSelect-module__diamond {
  width: 100%;
  height: 100%;
  display: block;
}
@media (max-width: 768px) {
  .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__icon {
    display: none;
  }
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload {
  min-width: 0;
  flex: 1;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper > [class*=css] {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single {
  color: var(--dapp-form-select-input-color);
  font-size: 16px;
  margin: 0;
  transition: all 200ms ease;
  font-weight: 300;
  white-space: normal;
  left: 0;
  right: 0;
  line-height: 1.25;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  top: auto;
  transform: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single + div {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__single.dapp-core-component__tokenSelect-module__focused {
  color: var(--dapp-form-select-input-color-hover) !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown {
  padding: 0;
  margin: 0;
  display: flex;
  line-height: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input {
  margin: 0 !important;
  min-height: 20px !important;
  background-color: transparent !important;
  font-size: 16px !important;
  border: none !important;
  color: var(--dapp-form-select-input-color) !important;
  line-height: 1.25 !important;
  border-radius: 0 !important;
  min-width: 100% !important;
  font-weight: 300 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:after {
  content: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:focus, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__dropdown input:hover {
  opacity: 1 !important;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__container .dapp-core-component__tokenSelect-module__payload .dapp-core-component__tokenSelect-module__wrapper .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  color: var(--dapp-form-label-color);
  font-size: 12px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator {
  cursor: pointer;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator svg {
  transition: all 200ms ease;
  fill: var(--dapp-form-select-indicator-fill);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator.dapp-core-component__tokenSelect-module__expanded svg {
  transform: rotateZ(180deg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__control .dapp-core-component__tokenSelect-module__indicator:hover svg {
  fill: var(--dapp-form-select-indicator-fill-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__loading {
  height: 150px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu {
  border: 1px solid var(--dapp-form-select-menu-border);
  border-radius: 6px;
  width: auto;
  right: -1px;
  overflow: hidden;
  background-color: var(--dapp-form-select-option-bg);
  z-index: 99999;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list {
  background-color: var(--dapp-form-select-menu-bg);
  max-height: 260px;
  padding: 0;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-track:hover, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-corner {
  background-color: var(--dapp-form-select-menu-scroll-track);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar:horizontal {
  height: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb, .dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:horizontal {
  border-radius: var(--dapp-form-input-border-radius);
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2.5px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-thumb:hover {
  background-color: var(--dapp-form-seleet-menu-scroll-thumb);
  border: 2px solid transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-scrollbar-button {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list::-webkit-resizer {
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0;
  background-color: var(--dapp-form-select-option-bg);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected {
  background-color: var(--dapp-form-select-option-bg-selected);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__selected:hover {
  background-color: var(--dapp-form-select-option-bg-hover);
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option.dapp-core-component__tokenSelect-module__disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
  background-color: transparent;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dapp-form-select-icon-bg);
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  margin-right: 8px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond {
  font-size: 24px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__icon .dapp-core-component__tokenSelect-module__diamond path {
  fill: #fff;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  text-align: left;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value {
  color: var(--dapp-form-select-option-color);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__value strong,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__value strong {
  font-weight: 900;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__left .dapp-core-component__tokenSelect-module__price,
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right .dapp-core-component__tokenSelect-module__price {
  line-height: 1.25;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  margin-top: 4px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__info .dapp-core-component__tokenSelect-module__right {
  text-align: right;
  margin-left: 16px;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__menu .dapp-core-component__tokenSelect-module__list .dapp-core-component__tokenSelect-module__option .dapp-core-component__tokenSelect-module__children {
  display: none;
}
.dapp-core-component__tokenSelect-module__select .dapp-core-component__tokenSelect-module__ticker {
  display: flex;
  align-items: center;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nc));var L={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},qc=r=>Ec.default.createElement(Ic.components.Input,Q(U({},r),{className:L.dropdown,"data-testid":"tokenSelectInput"}));l();var Tc=u(t("react")),Cc=t("react-select"),Ac=r=>{let a=r,{rx:c}=a,d=Yt(a,["rx"]);return Tc.default.createElement(Cc.components.MenuList,Q(U({},d),{className:L.list}))};l();var Ko=u(t("react")),Lc=t("@fortawesome/free-solid-svg-icons"),Dc=t("@fortawesome/react-fontawesome"),Bc=t("react-select"),Uc=r=>Ko.default.createElement(Bc.components.Menu,Q(U({},r),{className:L.menu}),r.selectProps.isLoading?Ko.default.createElement("div",{className:L.loading},Ko.default.createElement(Dc.FontAwesomeIcon,{icon:Lc.faCircleNotch,className:"fa-spin",size:"lg"})):r.children);l();var Fc=u(t("react")),Rc=t("react-select"),Pc=r=>Fc.default.createElement(Rc.components.Control,Q(U({},r),{className:L.control}));l();var Oc=u(t("react")),Mc=u(t("classnames")),Vc=t("react-select"),Wc=r=>Oc.default.createElement(Vc.components.Placeholder,Q(U({},r),{className:(0,Mc.default)(L.placeholder,{[L.focused]:r.isFocused})}));l();var zc=u(t("react")),Gc=u(t("classnames")),jc=t("react-select"),$c=r=>zc.default.createElement(jc.components.IndicatorsContainer,Q(U({},r),{className:(0,Gc.default)(L.indicator,{[L.expanded]:r.selectProps.menuIsOpen})}));l();var ve=u(t("react")),Hc=t("@fortawesome/free-solid-svg-icons"),Zc=t("@fortawesome/react-fontawesome"),Yc=t("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Kc=u(t("classnames")),Xc=t("react-select"),Qc=(Ao(),no(mo)).default,yr=({RewaIcon:r,tokenId:a,icon:c})=>{let{isRewa:d}=(0,Yc.getIdentifierType)(a);return d?ve.default.createElement("span",{className:L.asset},r?ve.default.createElement(r,{className:L.diamond}):ve.default.createElement(Qc,{className:L.diamond})):c?ve.default.createElement("img",{src:c,className:L.asset}):ve.default.createElement(Zc.FontAwesomeIcon,{icon:Hc.faDiamond,className:L.asset})},Jc=({children:r})=>ve.default.createElement("div",{className:L.wrapper},r),hr=(r,a,c)=>d=>{var m,_;let{selectProps:i,isDisabled:p,children:b}=d,v=i.value,w=(_=(m=v==null?void 0:v.assets)==null?void 0:m.svgUrl)!=null?_:null,h=(0,ve.useMemo)(()=>{let x=String(v==null?void 0:v.token.usdPrice);return x!=null&&x.includes("$")?v==null?void 0:v.token.usdPrice:`$${v==null?void 0:v.token.usdPrice}`},[v==null?void 0:v.token.usdPrice]);return ve.default.createElement(Xc.components.ValueContainer,Q(U({},d),{className:L.container}),ve.default.createElement("div",{className:(0,Kc.default)(L.icon,a)},ve.default.createElement(yr,{RewaIcon:c,rewaLabel:r,icon:w,isDisabled:p,tokenId:v==null?void 0:v.value})),ve.default.createElement("div",{className:L.payload},ve.default.createElement(Jc,null,b,(v==null?void 0:v.token.usdPrice)&&ve.default.createElement("small",{className:L.price},h))))};l();var Y=u(t("react")),ep=t("@fortawesome/free-solid-svg-icons"),op=t("@fortawesome/react-fontawesome"),tp=t("@terradharitri/sdk-dapp/constants"),rp=t("@terradharitri/sdk-dapp/UI/UsdValue"),np=t("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),ap=u(t("classnames")),lp=t("react-select"),{default:wr}=(Ao(),no(mo)),kr=({RewaIcon:r,TokenTickerIcon:a,showBalanceUsdValue:c,showTokenPrice:d})=>m=>{var _,i,p,b;let{data:v,isSelected:w,isFocused:h,isDisabled:x,selectProps:I}=m,g=v,{isRewa:k}=(0,np.getIdentifierType)(g.value),S=g.token.assets?g.token.assets.svgUrl:null,E=ct({amount:g.token.balance,decimals:g.token.decimals||tp.DECIMALS,addCommas:!0}),N=(i=(_=g.token)==null?void 0:_.usdPrice)==null?void 0:i.toString(),T=(b=(p=g.token)==null?void 0:p.valueUSD)==null?void 0:b.toString();return Y.default.createElement("div",{"data-testid":`${m.value}-option`},Y.default.createElement(lp.components.Option,Q(U({},m),{className:(0,ap.default)(L.option,{[L.selected]:w||h,[L.disabled]:x})}),Y.default.createElement("div",{className:L.image},k?Y.default.createElement("span",{className:L.icon},r?Y.default.createElement(r,null):Y.default.createElement(wr,null)):S?Y.default.createElement("img",{src:S,className:L.icon}):Y.default.createElement("span",{className:L.icon},Y.default.createElement(op.FontAwesomeIcon,{icon:ep.faDiamond,className:L.diamond}))),Y.default.createElement("div",{className:L.info},Y.default.createElement("div",{className:L.left},Y.default.createElement("div",{className:L.ticker},Y.default.createElement("span",{className:L.value},I.inputValue?Y.default.createElement(vr,{text:g.token.ticker,highlight:I.inputValue}):g.token.ticker),a&&Y.default.createElement(a,{token:g.token})),d&&Y.default.createElement("small",{className:L.price},N)),Y.default.createElement("div",{className:L.right},Y.default.createElement("span",{className:L.value},E),c&&T&&Y.default.createElement(rp.UsdValue,{usd:1,decimals:4,amount:T,"data-testid":"token-price-usd-value",className:L.price,addEqualSign:!1}))),Y.default.createElement("div",{className:L.children},m.children)))};l();var Xo=u(t("react")),cp=u(t("classnames")),pp=t("react-select"),xr=r=>a=>{let{selectProps:c,children:d}=a,m=c.value;return Xo.default.createElement(pp.components.SingleValue,Q(U({},a),{className:(0,cp.default)(L.single,{[L.focused]:a.selectProps.menuIsOpen})}),Xo.default.createElement("div",{className:L.ticker},d,r&&Xo.default.createElement(r,{token:m==null?void 0:m.token})))},{Menu:dp,Control:sp,Input:mp,MenuList:ip,IndicatorsContainer:_p,Placeholder:up}=gr,fp=r=>{let{name:a,options:c,isLoading:d=!1,className:m="",noOptionsMessage:_="No Tokens",disabledOption:i,rewaLabel:p,RewaIcon:b,disabled:v,value:w,onBlur:h,onFocus:x,onChange:I,onMenuOpen:g,chainId:k,wrapperClassName:S="",showTokenPrice:E=!1,showBalanceUsdValue:N=!1,selectedTokenIconClassName:T,TokenTickerIcon:F}=r,R=(0,Fe.useRef)(null),O=[p,cr(k)],_e=(0,Fe.useMemo)(()=>kr({rewaLabel:p,RewaIcon:b,showTokenPrice:E,showBalanceUsdValue:N,TokenTickerIcon:F}),[]),G=(0,Fe.useMemo)(()=>hr(p,T,b),[]),K=(0,Fe.useMemo)(()=>xr(F),[]);(0,Fe.useEffect)(()=>{let B=c.find(M=>M.value===(w==null?void 0:w.value)),P=(B==null?void 0:B.token.balance)===(w==null?void 0:w.token.balance);!B||P||I(B)},[c]);let z=B=>O.includes(B),ue=B=>{var P;let M=B.value===(i==null?void 0:i.value),te=z(B.value),re=z((P=i==null?void 0:i.value)!=null?P:"");return M||te&&re},pe=(B,P)=>{let M=B.data.token.ticker?B.data.token.ticker.toLowerCase().includes(P.toLowerCase()):!1,te=B.data.token.name.toLowerCase().includes(P.toLowerCase());return Boolean(P)?M||te:!0};return Fe.default.createElement("div",{"data-testid":`${a}Select`,className:`${S} ${d?"select-holder-loading":""}`},Fe.default.createElement("label",{htmlFor:a,"data-testid":"tokenIdLabel",className:L.label},"Token"),Fe.default.createElement(wc.default,{ref:R,inputId:a,name:a,options:c,openMenuOnFocus:!0,isDisabled:v,isLoading:d,value:w,isOptionDisabled:ue,onBlur:h,filterOption:pe,onFocus:x,onChange:B=>{I(B),R&&R.current!==null&&R.current.blur()},isSearchable:r.isSearchable,maxMenuHeight:260,onMenuOpen:g,noOptionsMessage:()=>_,className:(0,hc.default)(L.select,m,{[L.disabled]:r.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:dp,Control:sp,Input:mp,MenuList:ip,IndicatorsContainer:_p,ValueContainer:G,Placeholder:up,Option:_e,SingleValue:K}}))};l();l();var vp=u(t("react")),bp=u(t("classnames")),gp=({hasErrors:r,className:a,error:c,"data-testid":d})=>r?vp.default.createElement("div",{className:(0,bp.default)(A.error,a),"data-testid":d},c):null;l();l();var Qo=u(t("react")),yp=u(t("classnames"));l();var hp=`.dapp-core-component__tokenBalance-module__balance {
  line-height: 1;
  font-size: 12px;
  color: var(--dapp-form-input-color);
  max-width: 75%;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  gap: 4px;
}
.dapp-core-component__tokenBalance-module__balance span {
  color: var(--dapp-form-label-color);
}
.dapp-core-component__tokenBalance-module__balance .dapp-core-component__tokenBalance-module__value {
  overflow: hidden;
  text-overflow: ellipsis;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hp));var Jo={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},wp=({label:r,value:a,className:c,token:d,"data-testid":m,"data-value":_})=>Qo.default.createElement("div",{"data-testid":m,"data-value":_,className:(0,yp.default)(Jo.balance,c)},Qo.default.createElement("span",{className:Jo.label},r,": "),Qo.default.createElement("span",{className:Jo.value},a)," ",d==null?void 0:d.ticker),kp=({className:r,label:a,name:c,wrapperControlsClassName:d,tokenSelectProps:m,tokenBalanceProps:_,amountInputProps:i,amountErrorProps:p,maxButtonProps:b,readonly:v})=>ke.default.createElement("div",{className:(0,Ho.default)(Oe.amount,r)},ke.default.createElement("div",{className:Oe.label},a&&ke.default.createElement("label",{htmlFor:c,className:A.label,"data-testid":"amountLabel"},a),ke.default.createElement(wp,U({},_))),ke.default.createElement("div",{className:(0,Ho.default)(Oe.wrapper,d,{[Oe.error]:i.isInvalid||m.isInvalid||p.hasErrors,[Oe.disabled]:v})},ke.default.createElement(rc,U({},i)),ke.default.createElement("div",{className:(0,Ho.default)(Oe.interaction,b.wrapperClassName)},b.isMaxButtonVisible&&ke.default.createElement(yc,U({},b)),ke.default.createElement("div",{className:Oe.select},ke.default.createElement(fp,U({},m))))),ke.default.createElement(gp,U({},p)));l();var et=u(t("react")),xp=t("@terradharitri/sdk-dapp/constants"),Sp=t("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ep=()=>{var r,a;let{checkInvalid:c}=dr(),{tokensInfo:d,amountInfo:m,formInfo:_}=ie(),{readonly:i}=_,{networkConfig:{rewaLabel:p,chainId:b}}=Lo(),{rewaPriceInUsd:v}=Rn(),{amount:w,onBlur:h,onChange:x,onMaxClicked:I,error:g,isInvalid:k,onFocus:S,maxAmountAvailable:E,isMaxClicked:N,isMaxButtonVisible:T,maxAmountMinusDust:F}=m,{allAvailableTokens:R,areTokensLoading:O,getTokens:_e,isTokenIdInvalid:G,RewaIcon:K,nft:z,onChangeTokenId:ue,tokenDetails:pe,tokenId:B,tokenIdError:P}=d,M=R.map(be=>({value:be.identifier,label:String(be.ticker),assets:be.assets,token:be})),{isRewa:te}=(0,Sp.getIdentifierType)(B),re=M.find(({value:be})=>be===B),ye={id:"tokenId",value:re,name:"tokenId",isLoading:O,options:M,isSearchable:!0,onChange:be=>{be&&(ue(be.value),x(""))},onMenuOpen:_e,disabled:Qe("tokenId",i),error:P,isInvalid:G,rewaLabel:p,chainId:b,RewaIcon:K},de=(0,et.useMemo)(()=>et.default.createElement(sc,{amount:w,rewaLabel:p,maxAmountMinusDust:F,tokenId:B,isMaxClicked:N}),[w,p,F,B,N]),ne={name:"amount",required:!0,value:w,placeholder:"Amount",handleBlur:h,"data-testid":"amount",handleChange:x,onFocus:S,usdPrice:te?v:void 0,error:g,isInvalid:k,InfoDustComponent:de},D={token:pe,inputAmount:w,onMaxClick:I,isMaxClicked:N,isMaxButtonVisible:T},j=c("amount")&&!ne.value,Ve={hasErrors:ne.isInvalid||ye.isInvalid||j,error:ne.error||ye.error,className:A.error,"data-testid":ne.error?"amountError":"tokenIdError"},_o={"data-testid":`available-${(r=z==null?void 0:z.identifier)!=null?r:B}`,"data-value":`${E} ${(a=z==null?void 0:z.identifier)!=null?a:B}`,label:"Available",token:re==null?void 0:re.token,value:ct({amount:pe.balance,decimals:pe.decimals||xp.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(z==null?void 0:z.type)===Xe.NftEnumType.NonFungibleDCDT?null:et.default.createElement(kp,{name:"tokenId",amountErrorProps:Ve,tokenSelectProps:ye,amountInputProps:ne,tokenBalanceProps:_o,maxButtonProps:D,label:"Amount",readonly:i})};l();l();var Ze=u(t("react")),Gt=u(t("classnames"));l();l();l();var Ce=u(t("react")),jt=t("@fortawesome/free-solid-svg-icons"),$t=t("@fortawesome/react-fontawesome"),Ip=t("formik");l();l();var Sr=()=>{let{formInfo:{isRewaTransaction:r,readonly:a},dataFieldInfo:{isAdvancedModeEnabled:c}}=ie();return c?!1:!r||Qe("data",a)};l();var Np=`.dapp-core-component__styles-module__advanced {
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  top: 0;
  color: var(--dapp-form-label-color);
  transition: all 200ms ease;
  right: 0;
  cursor: pointer;
  position: absolute;
}
.dapp-core-component__styles-module__advanced svg path {
  transition: all 200ms ease;
  fill: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__advanced:hover .dapp-core-component__styles-module__advanced-text {
  color: var(--dapp-form-btn-bg);
}
.dapp-core-component__styles-module__advanced:hover svg path {
  fill: var(--dapp-form-btn-bg);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Np));var Io={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"},qp=()=>{let{formInfo:{readonly:r,isRewaTransaction:a}}=ie(),{setFieldValue:c,values:d}=(0,Ip.useFormikContext)(),[m,_]=(0,Ce.useState)(!1),[i,p]=(0,Ce.useState)(!1),b=Sr(),v=!m&&!r&&b&&Boolean(d.data),w=()=>{_(!0),c("isAdvancedModeEnabled",!0)},h=()=>{p(!0),setTimeout(()=>{p(!1)},5e3)};return(0,Ce.useEffect)(()=>{!a&&m&&_(!1)},[a,d.amount]),v?i?Ce.default.createElement("div",{className:Io.advanced,"data-testid":"confirmAdvancedMode",onClick:w},Ce.default.createElement($t.FontAwesomeIcon,{icon:jt.faCheck,className:"i-icon"}),Ce.default.createElement("span",{className:Io.advancedText},"Confirm")):Ce.default.createElement("div",{"data-testid":"enableAdvancedMode",className:Io.advanced,onClick:h},Ce.default.createElement($t.FontAwesomeIcon,{icon:jt.faScrewdriverWrench,className:"i-icon"}),Ce.default.createElement("span",{className:Io.advancedText},"Advanced")):null};l();var Tp=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__data {
  display: flex;
  position: relative;
}
.dapp-core-component__styles-module__data .dapp-core-component__styles-module__wrapper {
  display: flex;
  position: relative;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Tp));var Ht={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"},Cp=({className:r})=>{let{dataFieldInfo:{data:a,dataError:c,isDataInvalid:d,onChange:m,onBlur:_}}=ie(),i=Sr();return Ze.default.createElement("div",{className:(0,Gt.default)(Ht.data,r)},Ze.default.createElement("div",{className:Oe.label},Ze.default.createElement("label",{htmlFor:"data",className:A.label},"Data"),Ze.default.createElement(qp,null)),Ze.default.createElement("div",{className:Ht.wrapper},Ze.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:i,"data-testid":"data",value:a,onBlur:_,onChange:m,spellCheck:"false",placeholder:"Add transaction data",className:(0,Gt.default)(A.textarea,{[A.invalid]:d,[A.disabled]:i})})),d&&Ze.default.createElement("div",{className:A.error,"data-testid":"dataError"},c))};l();l();l();var Re=u(t("react")),Ye=u(t("classnames"));l();var Ap=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange {
  position: relative;
  display: flex;
  margin: 10px 16px 30px 0;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange:after {
  width: 100%;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  position: absolute;
  background: var(--border-color);
  height: 4px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput {
  width: calc(100% + 16px);
  opacity: 0;
  z-index: 6;
  cursor: pointer;
  height: 1.25rem;
  margin-right: -16px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput.dapp-core-component__styles-module__disabled {
  pointer-events: none;
  cursor: default;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb {
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: var(--black);
  z-index: 5;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb.dapp-core-component__styles-module__disabled {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  line-height: 1;
  opacity: 0;
  transition: all 400ms ease;
  color: var(--white);
  font-weight: 500;
  position: absolute;
  left: 50%;
  padding: 0.25rem 0.35rem;
  background: var(--black);
  border-radius: var(--dapp-form-input-border-radius);
  font-size: 11px;
  transform: translateX(-50%);
  bottom: calc(100% + 0.25rem);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion {
  height: 4px;
  background: var(--primary);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 3;
  margin-left: 2px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion.dapp-core-component__styles-module__disabled {
  background: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint {
  position: absolute;
  transform: translate(-25%, -50%);
  padding: 15px;
  top: 50%;
  z-index: 4;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint:after {
  content: "";
  position: absolute;
  height: 12px;
  border-radius: 50%;
  background-color: var(--white);
  border: 2px solid var(--primary);
  width: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after {
  background-color: var(--primary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after.dapp-core-component__styles-module__disabled:after {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__disabled:after {
  border-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage {
  position: absolute;
  left: 50%;
  transform: translateX(-25%);
  z-index: 7;
  padding: 1.5rem 0 0;
  line-height: 1;
  color: var(--black);
  font-size: 12px;
  cursor: pointer;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__exact {
  font-weight: bold;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__disabled {
  pointer-events: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ap));var le={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"},Lp=({disabled:r,percentageValue:a=0,onPercentageChange:c,className:d})=>{let m=[0,25,50,75,100],_="amountSlider";return Re.default.createElement("div",{className:(0,Ye.default)(le.amountSlider,d)},Re.default.createElement("div",{className:le.amountSliderRange},Re.default.createElement("input",{name:_,id:_,"data-testid":_,type:"range",disabled:r,min:0,max:100,value:String(a),className:(0,Ye.default)(le.amountSliderInput,{[le.disabled]:r}),onChange:i=>{c(Number(i.target.value))}}),Re.default.createElement("div",{style:{width:`${a}%`},className:(0,Ye.default)(le.amountSliderCompletion,{[le.disabled]:r})}),m.map(i=>Re.default.createElement("span",{onClick:()=>c(i),key:`breakpoint-${i}`,style:{left:`${i}%`},className:(0,Ye.default)(le.amountSliderBreakpoint,{[le.completed]:i<=a,[le.disabled]:r})})),m.map(i=>Re.default.createElement("span",{style:{left:`${i}%`},key:`breakpoint-${i}`,onClick:()=>c(i),className:(0,Ye.default)(le.amountSliderPercentage,{[le.exact]:i===a,[le.disabled]:r})},i,"%")),Re.default.createElement("span",{style:{left:`${a}%`},className:(0,Ye.default)(le.amountSliderThumb,{[le.disabled]:r})},Re.default.createElement("strong",{className:(0,Ye.default)(le.amountSliderThumbPercentage,{[le.hidden]:m.includes(a)})},Math.round(a),"%"))))};l();l();var xe=u(t("react")),Dp=t("@fortawesome/free-solid-svg-icons"),Bp=t("@fortawesome/react-fontawesome"),Up=t("@terradharitri/sdk-dapp/apiCalls/endpoints"),Fp=t("@terradharitri/sdk-dapp/UI/CopyButton"),Rp=t("@terradharitri/sdk-dapp/UI/ExplorerLink"),Pp=t("@terradharitri/sdk-dapp/UI/Trim"),Op=u(t("classnames")),Mp=t("formik");l();var Vp=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__can-transfer-warning {
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--action-bg);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-heading {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-heading .dapp-core-component__styles-module__can-transfer-warning-icon {
  margin-right: 12px;
  color: #ffc107;
  font-size: 24px;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-heading .dapp-core-component__styles-module__can-transfer-warning-label {
  color: #ffc107;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 12px;
  color: var(--dapp-form-label-color);
  gap: 8px;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address:before {
  position: absolute;
  content: "";
  left: 0;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid var(--dapp-form-placeholder-color);
  top: 50%;
  transform: translateY(-50%);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=ellipsis] {
  display: flex;
  align-items: flex-end;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=left],
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=right],
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=ellipsis] {
  line-height: 1.25;
  color: var(--dapp-form-placeholder-color);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=left] *,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=right] *,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=ellipsis] * {
  color: var(--dapp-form-placeholder-color);
  line-height: 1.25;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-explorer,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-copy {
  color: var(--dapp-form-placeholder-color) !important;
  margin: 0;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-explorer svg path,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-copy svg path {
  fill: var(--dapp-form-placeholder-color);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vp));var Se={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"},Wp=r=>{let{className:a}=r,{values:{nft:c,address:d}}=(0,Mp.useFormikContext)();return!(c!=null&&c.allowedReceivers)||c.allowedReceivers.includes(d)?null:xe.default.createElement("div",{className:(0,Op.default)(Se.canTransferWarning,a),"data-testid":"canTransferWarning"},xe.default.createElement("div",{className:Se.canTransferWarningHeading},xe.default.createElement(Bp.FontAwesomeIcon,{icon:Dp.faExclamationTriangle,className:Se.canTransferWarningIcon,size:"lg"}),xe.default.createElement("div",{className:Se.canTransferWarningTitle},xe.default.createElement("div",{className:Se.canTransferWarningLabel},"Warning!"),xe.default.createElement("div",{className:Se.canTransferWarningMessage},pn))),xe.default.createElement("div",{className:Se.canTransferWarningAddresses},c.allowedReceivers.map(m=>xe.default.createElement("div",{className:Se.canTransferWarningAddress,key:m},xe.default.createElement(Pp.Trim,{text:m,className:Se.canTransferWarningAddressTrim}),xe.default.createElement(Fp.CopyButton,{text:m,className:Se.canTransferWarningAddressCopy}),xe.default.createElement(Rp.ExplorerLink,{page:`/${Up.ACCOUNTS_ENDPOINT}/${m}`,className:Se.canTransferWarningAddressExplorer})))))};l();l();var oo=u(t("react")),zp=t("@fortawesome/free-solid-svg-icons"),Gp=t("@fortawesome/react-fontawesome"),jp=u(t("classnames"));l();var $p=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__styles-module__wrewa-warning {
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--action-bg);
}
.dapp-core-component__styles-module__wrewa-warning .dapp-core-component__styles-module__wrewa-warning-heading {
  display: flex;
  align-items: center;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__wrewa-warning .dapp-core-component__styles-module__wrewa-warning-heading .dapp-core-component__styles-module__wrewa-warning-icon {
  margin-right: 12px;
  color: #ffc107;
  font-size: 24px;
}
.dapp-core-component__styles-module__wrewa-warning .dapp-core-component__styles-module__wrewa-warning-heading .dapp-core-component__styles-module__wrewa-warning-label {
  color: #ffc107;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($p));var to={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"},Hp=r=>{let{tokenId:a,className:c}=r,{networkConfig:{chainId:d}}=Lo();return cr(d)!==a?null:oo.default.createElement("div",{className:(0,jp.default)(to.wrewaWarning,c)},oo.default.createElement("div",{className:to.wrewaWarningHeading},oo.default.createElement(Gp.FontAwesomeIcon,{icon:zp.faExclamationTriangle,className:to.wrewaWarningIcon,size:"lg"}),oo.default.createElement("div",{className:to.wrewaWarningTitle},oo.default.createElement("div",{className:to.wrewaWarningLabel},"Warning!"),oo.default.createElement("div",{className:to.wrewaWarningMessage},dn))))};l();var Zp=`:root {
  --primary: #1b46c2;
  --primary-light: #1392ff;
  --border-color: #dee2e6;
  --card-bg: white;
  --black: black;
  --light: #fafafa;
  --secondary: #6c757d;
  --card-bg: #ffffff;
  --border-color: #dee2e6;
  --warning: #ffc107;
  --btn-blue: #163aa0;
  --brown: #212529;
  --link-hover-color: #122e7f;
  --dapp-form-bg: #242526;
  --dapp-form-label-color: #9ba5b4;
  --dapp-form-input-bg: #131313;
  --dapp-form-placeholder-color: #9ba5b4;
  --dapp-form-input-color: #ffffff;
  --dapp-form-error-color: #ff4f8a;
  --dapp-form-max-btn-bg: #242526;
  --dapp-form-max-hover-btn-bg: #3066ff;
  --dapp-form-max-btn-color: #ffffff;
  --dapp-form-input-border-radius: 8px;
  --dapp-form-input-border-color: #ced4da;
  --dapp-form-input-border-focus: #7191eb;
  --dapp-form-select-bg: #242526;
  --dapp-form-select-input-color: #ffffff;
  --dapp-form-select-input-color-hover: #9ba5b4;
  --dapp-form-select-icon-border: #49494d;
  --dapp-form-select-icon-bg: #2c2d2f;
  --dapp-form-select-indicator-fill: #ffffff;
  --dapp-form-select-indicator-fill-hover: #9ba5b4;
  --dapp-form-select-menu-bg: #18191a;
  --dapp-form-select-menu-border: #49494d;
  --dapp-form-select-menu-scroll-track: transparent;
  --dapp-form-seleet-menu-scroll-thumb: #4a4b4d;
  --dapp-form-select-option-bg: #18191a;
  --dapp-form-select-option-bg-hover: #393b3c;
  --dapp-form-select-option-bg-selected: #393b3c;
  --dapp-form-select-option-color: #ffffff;
  --dapp-form-btn-bg: #23f7dd;
  --dapp-form-btn-bg-hover: #0ac2ae;
  --dapp-form-nftsft-preview-bg: #262626;
}

.dapp-core-component__form-module__form {
  background-color: var(--dapp-form-bg);
  border-radius: 12px;
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__formFieldset {
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
  gap: 32px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__formWrapper {
  margin-bottom: 1.5rem;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__form-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__form-module__form .dapp-core-component__form-module__form-buttons {
    padding-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zp));var ot={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};l();l();var Yp=r=>{var a,c;return((a=r.nft)==null?void 0:a.type)===Xe.NftEnumType.NonFungibleDCDT?"NFT":((c=r.nft)==null?void 0:c.type)===Xe.NftEnumType.SemiFungibleDCDT?"SFT":r.tokenDetails.ticker},Kp=({className:r,GuardianScreen:a})=>{let{formInfo:c,accountInfo:d,amountInfo:m,tokensInfo:_}=ie(),{values:i}=(0,Xr.useFormikContext)(),{txType:p,tokenId:b,address:v,balance:w,chainId:h,ledger:x}=i,{nft:I}=_,[g,k]=(0,H.useState)(),{amountRange:S,onSetAmountPercentage:E}=m,{renderKey:N,onValidateForm:T,onInvalidateForm:F,onCloseForm:R,onSubmitForm:O,onPreviewClick:_e,areValidatedValuesReady:G,isGuardianScreenVisible:K,uiOptions:z,readonly:ue,setGuardedTransaction:pe,setHasGuardianScreen:B}=c,P=()=>Me(void 0,null,function*(){if(!G)return;let de=yield nn(i);try{let ne=yield vn({address:v,balance:w,chainId:h,nonce:d.nonce,values:de});ne.setVersion(ut.TransactionVersion.withTxOptions());let D=U({guarded:!0},x?{hashSign:!0}:{});ne.setOptions(ut.TransactionOptions.withOptions(D)),k({0:ne})}catch(ne){k({})}});(0,H.useEffect)(()=>{P()},[i,G]),(0,H.useEffect)(()=>{B(Boolean(a))},[]),(0,H.useEffect)(()=>{if(!g)return;let de=g[0];de&&pe(de)},[g]);let M=de=>{de.preventDefault(),R()},te=p==="NonFungibleDCDT",re=p==="SemiFungibleDCDT",ye={onSignTransaction:()=>Me(void 0,null,function*(){setTimeout(()=>{O()})}),onPrev:F,address:v,title:"",className:r,signedTransactions:g,setSignedTransactions:k,signStepInnerClasses:{}};return a&&K?H.default.createElement(a,U({},ye)):G?H.default.createElement(La,{providerType:d.providerType}):H.default.createElement("form",{key:N,onSubmit:T,className:(0,Kr.default)(ot.form,r)},H.default.createElement("fieldset",{className:ot.formFieldset},(te||re)&&I&&H.default.createElement(fr,U({onClick:_e,txType:p},I)),H.default.createElement(Sl,null),re?H.default.createElement(Nl,null):H.default.createElement(Ep,null),(z==null?void 0:z.showAmountSlider)&&!te&&H.default.createElement(Lp,{onPercentageChange:E,percentageValue:S,disabled:Boolean(ue)}),H.default.createElement(Hp,{tokenId:b}),H.default.createElement(Wp,null),H.default.createElement(Yl,null),H.default.createElement(Cp,null)),H.default.createElement("div",{className:ot.formButtons},H.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:T,className:A.buttonSend},"Send ",Yp(_)),H.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:M,className:A.buttonText},"Cancel")))};});var io={};bo();vo(io,Dr(Ir()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
