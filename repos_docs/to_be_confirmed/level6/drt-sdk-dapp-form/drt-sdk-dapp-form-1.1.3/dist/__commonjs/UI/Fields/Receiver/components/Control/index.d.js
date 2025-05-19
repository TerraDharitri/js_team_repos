"use strict";import{a as ce,b as Te,d as q,e as Oe,f as V}from"../../../../../../__chunks__/chunk-JH2LJGTQ.js";var ae=Te((ro,ie)=>{"use strict";V();var Ce=Object.create,N=Object.defineProperty,Re=Object.defineProperties,je=Object.getOwnPropertyDescriptor,Pe=Object.getOwnPropertyDescriptors,Me=Object.getOwnPropertyNames,ne=Object.getOwnPropertySymbols,ze=Object.getPrototypeOf,le=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,pe=(i,s,l)=>s in i?N(i,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[s]=l,De=(i,s)=>{for(var l in s||(s={}))le.call(s,l)&&pe(i,l,s[l]);if(ne)for(var l of ne(s))Ne.call(s,l)&&pe(i,l,s[l]);return i},Ye=(i,s)=>Re(i,Pe(s)),Fe=(i,s)=>()=>(i&&(s=i(i=0)),s),W=(i,s)=>()=>(s||i((s={exports:{}}).exports,s),s.exports),qe=(i,s)=>{for(var l in s)N(i,l,{get:s[l],enumerable:!0})},se=(i,s,l,h)=>{if(s&&typeof s=="object"||typeof s=="function")for(let y of Me(s))!le.call(i,y)&&y!==l&&N(i,y,{get:()=>s[y],enumerable:!(h=je(s,y))||h.enumerable});return i},J=(i,s,l)=>(l=i!=null?Ce(ze(i)):{},se(s||!i||!i.__esModule?N(l,"default",{value:i,enumerable:!0}):l,i)),Ve=i=>se(N({},"__esModule",{value:!0}),i),We=W(i=>{"use strict";z(),i.byteLength=O,i.toByteArray=U,i.fromByteArray=C;var s=[],l=[],h=typeof Uint8Array!="undefined"?Uint8Array:Array,y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(w=0,v=y.length;w<v;++w)s[w]=y[w],l[y.charCodeAt(w)]=w;var w,v;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function c(a){var m=a.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var u=a.indexOf("=");u===-1&&(u=m);var d=u===m?0:4-u%4;return[u,d]}function O(a){var m=c(a),u=m[0],d=m[1];return(u+d)*3/4-d}function E(a,m,u){return(m+u)*3/4-u}function U(a){var m,u=c(a),d=u[0],x=u[1],g=new h(E(a,d,x)),R=0,P=x>0?d-4:d,I;for(I=0;I<P;I+=4)m=l[a.charCodeAt(I)]<<18|l[a.charCodeAt(I+1)]<<12|l[a.charCodeAt(I+2)]<<6|l[a.charCodeAt(I+3)],g[R++]=m>>16&255,g[R++]=m>>8&255,g[R++]=m&255;return x===2&&(m=l[a.charCodeAt(I)]<<2|l[a.charCodeAt(I+1)]>>4,g[R++]=m&255),x===1&&(m=l[a.charCodeAt(I)]<<10|l[a.charCodeAt(I+1)]<<4|l[a.charCodeAt(I+2)]>>2,g[R++]=m>>8&255,g[R++]=m&255),g}function f(a){return s[a>>18&63]+s[a>>12&63]+s[a>>6&63]+s[a&63]}function B(a,m,u){for(var d,x=[],g=m;g<u;g+=3)d=(a[g]<<16&16711680)+(a[g+1]<<8&65280)+(a[g+2]&255),x.push(f(d));return x.join("")}function C(a){for(var m,u=a.length,d=u%3,x=[],g=16383,R=0,P=u-d;R<P;R+=g)x.push(B(a,R,R+g>P?P:R+g));return d===1?(m=a[u-1],x.push(s[m>>2]+s[m<<4&63]+"==")):d===2&&(m=(a[u-2]<<8)+a[u-1],x.push(s[m>>10]+s[m>>4&63]+s[m<<2&63]+"=")),x.join("")}}),Xe=W(i=>{z(),i.read=function(s,l,h,y,w){var v,c,O=w*8-y-1,E=(1<<O)-1,U=E>>1,f=-7,B=h?w-1:0,C=h?-1:1,a=s[l+B];for(B+=C,v=a&(1<<-f)-1,a>>=-f,f+=O;f>0;v=v*256+s[l+B],B+=C,f-=8);for(c=v&(1<<-f)-1,v>>=-f,f+=y;f>0;c=c*256+s[l+B],B+=C,f-=8);if(v===0)v=1-U;else{if(v===E)return c?NaN:(a?-1:1)*(1/0);c=c+Math.pow(2,y),v=v-U}return(a?-1:1)*c*Math.pow(2,v-y)},i.write=function(s,l,h,y,w,v){var c,O,E,U=v*8-w-1,f=(1<<U)-1,B=f>>1,C=w===23?Math.pow(2,-24)-Math.pow(2,-77):0,a=y?0:v-1,m=y?1:-1,u=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(O=isNaN(l)?1:0,c=f):(c=Math.floor(Math.log(l)/Math.LN2),l*(E=Math.pow(2,-c))<1&&(c--,E*=2),c+B>=1?l+=C/E:l+=C*Math.pow(2,1-B),l*E>=2&&(c++,E/=2),c+B>=f?(O=0,c=f):c+B>=1?(O=(l*E-1)*Math.pow(2,w),c=c+B):(O=l*Math.pow(2,B-1)*Math.pow(2,w),c=0));w>=8;s[h+a]=O&255,a+=m,O/=256,w-=8);for(c=c<<w|O,U+=w;U>0;s[h+a]=c&255,a+=m,c/=256,U-=8);s[h+a-m]|=u*128}}),Ze=W(i=>{"use strict";z();var s=We(),l=Xe(),h=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=c,i.SlowBuffer=x,i.INSPECT_MAX_BYTES=50;var y=2147483647;i.kMaxLength=y,c.TYPED_ARRAY_SUPPORT=w(),!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function w(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}});function v(e){if(e>y)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,c.prototype),o}function c(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return f(e)}return O(e,o,t)}c.poolSize=8192;function O(e,o,t){if(typeof e=="string")return B(e,o);if(ArrayBuffer.isView(e))return a(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(M(e,ArrayBuffer)||e&&M(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(M(e,SharedArrayBuffer)||e&&M(e.buffer,SharedArrayBuffer)))return m(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return c.from(r,o,t);var n=u(e);if(n)return n;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return c.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}c.from=function(e,o,t){return O(e,o,t)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function E(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function U(e,o,t){return E(e),e<=0?v(e):o!==void 0?typeof t=="string"?v(e).fill(o,t):v(e).fill(o):v(e)}c.alloc=function(e,o,t){return U(e,o,t)};function f(e){return E(e),v(e<0?0:d(e)|0)}c.allocUnsafe=function(e){return f(e)},c.allocUnsafeSlow=function(e){return f(e)};function B(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!c.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=g(e,o)|0,r=v(t),n=r.write(e,o);return n!==t&&(r=r.slice(0,n)),r}function C(e){for(var o=e.length<0?0:d(e.length)|0,t=v(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function a(e){if(M(e,Uint8Array)){var o=new Uint8Array(e);return m(o.buffer,o.byteOffset,o.byteLength)}return C(e)}function m(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,c.prototype),r}function u(e){if(c.isBuffer(e)){var o=d(e.length)|0,t=v(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||Z(e.length)?v(0):C(e);if(e.type==="Buffer"&&Array.isArray(e.data))return C(e.data)}function d(e){if(e>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return e|0}function x(e){return+e!=e&&(e=0),c.alloc(+e)}c.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==c.prototype},c.compare=function(e,o){if(M(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),M(o,Uint8Array)&&(o=c.from(o,o.offset,o.byteLength)),!c.isBuffer(e)||!c.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,n=0,p=Math.min(t,r);n<p;++n)if(e[n]!==o[n]){t=e[n],r=o[n];break}return t<r?-1:r<t?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return c.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=c.allocUnsafe(o),n=0;for(t=0;t<e.length;++t){var p=e[t];if(M(p,Uint8Array))n+p.length>r.length?c.from(p).copy(r,n):Uint8Array.prototype.set.call(r,p,n);else if(c.isBuffer(p))p.copy(r,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=p.length}return r};function g(e,o){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||M(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var n=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return X(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return oe(e).length;default:if(n)return r?-1:X(e).length;o=(""+o).toLowerCase(),n=!0}}c.byteLength=g;function R(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return we(this,o,t);case"utf8":case"utf-8":return K(this,o,t);case"ascii":return ge(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return fe(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xe(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}c.prototype._isBuffer=!0;function P(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}c.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)P(this,o,o+1);return this},c.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)P(this,o,o+3),P(this,o+1,o+2);return this},c.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)P(this,o,o+7),P(this,o+1,o+6),P(this,o+2,o+5),P(this,o+3,o+4);return this},c.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?K(this,0,e):R.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:c.compare(this,e)===0},c.prototype.inspect=function(){var e="",o=i.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},h&&(c.prototype[h]=c.prototype.inspect),c.prototype.compare=function(e,o,t,r,n){if(M(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),n===void 0&&(n=this.length),o<0||t>e.length||r<0||n>this.length)throw new RangeError("out of range index");if(r>=n&&o>=t)return 0;if(r>=n)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,n>>>=0,this===e)return 0;for(var p=n-r,_=t-o,b=Math.min(p,_),k=this.slice(r,n),A=e.slice(o,t),S=0;S<b;++S)if(k[S]!==A[S]){p=k[S],_=A[S];break}return p<_?-1:_<p?1:0};function I(e,o,t,r,n){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Z(t)&&(t=n?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(n)return-1;t=e.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof o=="string"&&(o=c.from(o,r)),c.isBuffer(o))return o.length===0?-1:H(e,o,t,r,n);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):H(e,[o],t,r,n);throw new TypeError("val must be string, number or Buffer")}function H(e,o,t,r,n){var p=1,_=e.length,b=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,_/=2,b/=2,t/=2}function k(te,re){return p===1?te[re]:te.readUInt16BE(re*p)}var A;if(n){var S=-1;for(A=t;A<_;A++)if(k(e,A)===k(o,S===-1?0:A-S)){if(S===-1&&(S=A),A-S+1===b)return S*p}else S!==-1&&(A-=A-S),S=-1}else for(t+b>_&&(t=_-b),A=t;A>=0;A--){for(var L=!0,F=0;F<b;F++)if(k(e,A+F)!==k(o,F)){L=!1;break}if(L)return A}return-1}c.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},c.prototype.indexOf=function(e,o,t){return I(this,e,o,t,!0)},c.prototype.lastIndexOf=function(e,o,t){return I(this,e,o,t,!1)};function de(e,o,t,r){t=Number(t)||0;var n=e.length-t;r?(r=Number(r),r>n&&(r=n)):r=n;var p=o.length;r>p/2&&(r=p/2);for(var _=0;_<r;++_){var b=parseInt(o.substr(_*2,2),16);if(Z(b))return _;e[t+_]=b}return _}function me(e,o,t,r){return Y(X(o,e.length-t),e,t,r)}function ue(e,o,t,r){return Y(Be(o),e,t,r)}function ye(e,o,t,r){return Y(oe(o),e,t,r)}function ve(e,o,t,r){return Y(Se(o,e.length-t),e,t,r)}c.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var n=this.length-o;if((t===void 0||t>n)&&(t=n),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var p=!1;;)switch(r){case"hex":return de(this,e,o,t);case"utf8":case"utf-8":return me(this,e,o,t);case"ascii":case"latin1":case"binary":return ue(this,e,o,t);case"base64":return ye(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,o,t);default:if(p)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function fe(e,o,t){return o===0&&t===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(o,t))}function K(e,o,t){t=Math.min(e.length,t);for(var r=[],n=o;n<t;){var p=e[n],_=null,b=p>239?4:p>223?3:p>191?2:1;if(n+b<=t){var k,A,S,L;switch(b){case 1:p<128&&(_=p);break;case 2:k=e[n+1],(k&192)===128&&(L=(p&31)<<6|k&63,L>127&&(_=L));break;case 3:k=e[n+1],A=e[n+2],(k&192)===128&&(A&192)===128&&(L=(p&15)<<12|(k&63)<<6|A&63,L>2047&&(L<55296||L>57343)&&(_=L));break;case 4:k=e[n+1],A=e[n+2],S=e[n+3],(k&192)===128&&(A&192)===128&&(S&192)===128&&(L=(p&15)<<18|(k&63)<<12|(A&63)<<6|S&63,L>65535&&L<1114112&&(_=L))}}_===null?(_=65533,b=1):_>65535&&(_-=65536,r.push(_>>>10&1023|55296),_=56320|_&1023),r.push(_),n+=b}return he(r)}var Q=4096;function he(e){var o=e.length;if(o<=Q)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=Q));return t}function ge(e,o,t){var r="";t=Math.min(e.length,t);for(var n=o;n<t;++n)r+=String.fromCharCode(e[n]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var n=o;n<t;++n)r+=String.fromCharCode(e[n]);return r}function we(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var n="",p=o;p<t;++p)n+=Ue[e[p]];return n}function xe(e,o,t){for(var r=e.slice(o,t),n="",p=0;p<r.length-1;p+=2)n+=String.fromCharCode(r[p]+r[p+1]*256);return n}c.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,c.prototype),r};function T(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||T(e,o,this.length);for(var r=this[e],n=1,p=0;++p<o&&(n*=256);)r+=this[e+p]*n;return r},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||T(e,o,this.length);for(var r=this[e+--o],n=1;o>0&&(n*=256);)r+=this[e+--o]*n;return r},c.prototype.readUint8=c.prototype.readUInt8=function(e,o){return e=e>>>0,o||T(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||T(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||T(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||T(e,o,this.length);for(var r=this[e],n=1,p=0;++p<o&&(n*=256);)r+=this[e+p]*n;return n*=128,r>=n&&(r-=Math.pow(2,8*o)),r},c.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||T(e,o,this.length);for(var r=o,n=1,p=this[e+--r];r>0&&(n*=256);)p+=this[e+--r]*n;return n*=128,p>=n&&(p-=Math.pow(2,8*o)),p},c.prototype.readInt8=function(e,o){return e=e>>>0,o||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},c.prototype.readInt16LE=function(e,o){e=e>>>0,o||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},c.prototype.readInt16BE=function(e,o){e=e>>>0,o||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},c.prototype.readInt32LE=function(e,o){return e=e>>>0,o||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,o){return e=e>>>0,o||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,o){return e=e>>>0,o||T(e,4,this.length),l.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,o){return e=e>>>0,o||T(e,4,this.length),l.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||T(e,8,this.length),l.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||T(e,8,this.length),l.read(this,e,!1,52,8)};function j(e,o,t,r,n,p){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>n||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var n=Math.pow(2,8*t)-1;j(this,e,o,t,n,0)}var p=1,_=0;for(this[o]=e&255;++_<t&&(p*=256);)this[o+_]=e/p&255;return o+t},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var n=Math.pow(2,8*t)-1;j(this,e,o,t,n,0)}var p=t-1,_=1;for(this[o+p]=e&255;--p>=0&&(_*=256);)this[o+p]=e/_&255;return o+t},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,1,255,0),this[o]=e&255,o+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},c.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var n=Math.pow(2,8*t-1);j(this,e,o,t,n-1,-n)}var p=0,_=1,b=0;for(this[o]=e&255;++p<t&&(_*=256);)e<0&&b===0&&this[o+p-1]!==0&&(b=1),this[o+p]=(e/_>>0)-b&255;return o+t},c.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var n=Math.pow(2,8*t-1);j(this,e,o,t,n-1,-n)}var p=t-1,_=1,b=0;for(this[o+p]=e&255;--p>=0&&(_*=256);)e<0&&b===0&&this[o+p+1]!==0&&(b=1),this[o+p]=(e/_>>0)-b&255;return o+t},c.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},c.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},c.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},c.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},c.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||j(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function $(e,o,t,r,n,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function G(e,o,t,r,n){return o=+o,t=t>>>0,n||$(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}c.prototype.writeFloatLE=function(e,o,t){return G(this,e,o,!0,t)},c.prototype.writeFloatBE=function(e,o,t){return G(this,e,o,!1,t)};function ee(e,o,t,r,n){return o=+o,t=t>>>0,n||$(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}c.prototype.writeDoubleLE=function(e,o,t){return ee(this,e,o,!0,t)},c.prototype.writeDoubleBE=function(e,o,t){return ee(this,e,o,!1,t)},c.prototype.copy=function(e,o,t,r){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var n=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),n},c.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var n=e.charCodeAt(0);(r==="utf8"&&n<128||r==="latin1")&&(e=n)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<t;++p)this[p]=e;else{var _=c.isBuffer(e)?e:c.from(e,r),b=_.length;if(b===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-o;++p)this[p+o]=_[p%b]}return this};var Ee=/[^+/0-9A-Za-z-_]/g;function Ae(e){if(e=e.split("=")[0],e=e.trim().replace(Ee,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function X(e,o){o=o||1/0;for(var t,r=e.length,n=null,p=[],_=0;_<r;++_){if(t=e.charCodeAt(_),t>55295&&t<57344){if(!n){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(_+1===r){(o-=3)>-1&&p.push(239,191,189);continue}n=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(o-=3)>-1&&p.push(239,191,189);if(n=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Be(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Se(e,o){for(var t,r,n,p=[],_=0;_<e.length&&!((o-=2)<0);++_)t=e.charCodeAt(_),r=t>>8,n=t%256,p.push(n),p.push(r);return p}function oe(e){return s.toByteArray(Ae(e))}function Y(e,o,t,r){for(var n=0;n<r&&!(n+t>=o.length||n>=e.length);++n)o[n+t]=e[n];return n}function M(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Z(e){return e!==e}var Ue=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,n=0;n<16;++n)o[r+n]=e[t]+e[n];return o}()}),Je=W((i,s)=>{z();var l=s.exports={},h,y;function w(){throw new Error("setTimeout has not been defined")}function v(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?h=setTimeout:h=w}catch(d){h=w}try{typeof clearTimeout=="function"?y=clearTimeout:y=v}catch(d){y=v}})();function c(d){if(h===setTimeout)return setTimeout(d,0);if((h===w||!h)&&setTimeout)return h=setTimeout,setTimeout(d,0);try{return h(d,0)}catch(x){try{return h.call(null,d,0)}catch(g){return h.call(this,d,0)}}}function O(d){if(y===clearTimeout)return clearTimeout(d);if((y===v||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(d);try{return y(d)}catch(x){try{return y.call(null,d)}catch(g){return y.call(this,d)}}}var E=[],U=!1,f,B=-1;function C(){!U||!f||(U=!1,f.length?E=f.concat(E):B=-1,E.length&&a())}function a(){if(!U){var d=c(C);U=!0;for(var x=E.length;x;){for(f=E,E=[];++B<x;)f&&f[B].run();B=-1,x=E.length}f=null,U=!1,O(d)}}l.nextTick=function(d){var x=new Array(arguments.length-1);if(arguments.length>1)for(var g=1;g<arguments.length;g++)x[g-1]=arguments[g];E.push(new m(d,x)),E.length===1&&!U&&c(a)};function m(d,x){this.fun=d,this.array=x}m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function u(){}l.on=u,l.addListener=u,l.once=u,l.off=u,l.removeListener=u,l.removeAllListeners=u,l.emit=u,l.prependListener=u,l.prependOnceListener=u,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),He,Ke,Qe,z=Fe(()=>{He=J(Ze()),Ke=J(Je()),Qe=function(i){function s(){var h=this||self;return delete i.prototype.__magic__,h}if(typeof globalThis=="object")return globalThis;if(this)return s();i.defineProperty(i.prototype,"__magic__",{configurable:!0,get:s});var l=__magic__;return l}(Object)}),_e={};qe(_e,{Control:()=>to});ie.exports=Ve(_e);z();var $e=J(ce("react")),Ge=ce("react-select");z();var eo=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(eo));var oo={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},to=i=>$e.default.createElement(Ge.components.Control,Ye(De({},i),{className:oo.receiverSelectControl}));});var D={};V();q(D,Oe(ae()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
