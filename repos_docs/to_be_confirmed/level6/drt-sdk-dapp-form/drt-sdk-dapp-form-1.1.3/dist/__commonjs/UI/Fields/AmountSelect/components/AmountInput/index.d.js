"use strict";import{a as D,b as kt,d as G,e as Ct,f as ot}from"../../../../../../__chunks__/chunk-JH2LJGTQ.js";var Gt=kt((Ze,Vt)=>{"use strict";ot();var Xt=Object.create,yt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyNames,te=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty,re=(p,f)=>()=>(p&&(f=p(p=0)),f),bt=(p,f)=>()=>(f||p((f={exports:{}}).exports,f),f.exports),oe=(p,f)=>{for(var u in f)yt(p,u,{get:f[u],enumerable:!0})},qt=(p,f,u,h)=>{if(f&&typeof f=="object"||typeof f=="function")for(let m of Qt(f))!ee.call(p,m)&&m!==u&&yt(p,m,{get:()=>f[m],enumerable:!(h=Jt(f,m))||h.enumerable});return p},et=(p,f,u)=>(u=p!=null?Xt(te(p)):{},qt(f||!p||!p.__esModule?yt(u,"default",{value:p,enumerable:!0}):u,p)),ne=p=>qt(yt({},"__esModule",{value:!0}),p),ie=bt(p=>{"use strict";q(),p.byteLength=U,p.toByteArray=I,p.fromByteArray=k;var f=[],u=[],h=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(w=0,y=m.length;w<y;++w)f[w]=m[w],u[m.charCodeAt(w)]=w;var w,y;u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63;function n(l){var d=l.length;if(d%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var g=l.indexOf("=");g===-1&&(g=d);var c=g===d?0:4-g%4;return[g,c]}function U(l){var d=n(l),g=d[0],c=d[1];return(g+c)*3/4-c}function B(l,d,g){return(d+g)*3/4-g}function I(l){var d,g=n(l),c=g[0],E=g[1],v=new h(B(l,c,E)),C=0,M=E>0?c-4:c,O;for(O=0;O<M;O+=4)d=u[l.charCodeAt(O)]<<18|u[l.charCodeAt(O+1)]<<12|u[l.charCodeAt(O+2)]<<6|u[l.charCodeAt(O+3)],v[C++]=d>>16&255,v[C++]=d>>8&255,v[C++]=d&255;return E===2&&(d=u[l.charCodeAt(O)]<<2|u[l.charCodeAt(O+1)]>>4,v[C++]=d&255),E===1&&(d=u[l.charCodeAt(O)]<<10|u[l.charCodeAt(O+1)]<<4|u[l.charCodeAt(O+2)]>>2,v[C++]=d>>8&255,v[C++]=d&255),v}function b(l){return f[l>>18&63]+f[l>>12&63]+f[l>>6&63]+f[l&63]}function _(l,d,g){for(var c,E=[],v=d;v<g;v+=3)c=(l[v]<<16&16711680)+(l[v+1]<<8&65280)+(l[v+2]&255),E.push(b(c));return E.join("")}function k(l){for(var d,g=l.length,c=g%3,E=[],v=16383,C=0,M=g-c;C<M;C+=v)E.push(_(l,C,C+v>M?M:C+v));return c===1?(d=l[g-1],E.push(f[d>>2]+f[d<<4&63]+"==")):c===2&&(d=(l[g-2]<<8)+l[g-1],E.push(f[d>>10]+f[d>>4&63]+f[d<<2&63]+"=")),E.join("")}}),ae=bt(p=>{q(),p.read=function(f,u,h,m,w){var y,n,U=w*8-m-1,B=(1<<U)-1,I=B>>1,b=-7,_=h?w-1:0,k=h?-1:1,l=f[u+_];for(_+=k,y=l&(1<<-b)-1,l>>=-b,b+=U;b>0;y=y*256+f[u+_],_+=k,b-=8);for(n=y&(1<<-b)-1,y>>=-b,b+=m;b>0;n=n*256+f[u+_],_+=k,b-=8);if(y===0)y=1-I;else{if(y===B)return n?NaN:(l?-1:1)*(1/0);n=n+Math.pow(2,m),y=y-I}return(l?-1:1)*n*Math.pow(2,y-m)},p.write=function(f,u,h,m,w,y){var n,U,B,I=y*8-w-1,b=(1<<I)-1,_=b>>1,k=w===23?Math.pow(2,-24)-Math.pow(2,-77):0,l=m?0:y-1,d=m?1:-1,g=u<0||u===0&&1/u<0?1:0;for(u=Math.abs(u),isNaN(u)||u===1/0?(U=isNaN(u)?1:0,n=b):(n=Math.floor(Math.log(u)/Math.LN2),u*(B=Math.pow(2,-n))<1&&(n--,B*=2),n+_>=1?u+=k/B:u+=k*Math.pow(2,1-_),u*B>=2&&(n++,B/=2),n+_>=b?(U=0,n=b):n+_>=1?(U=(u*B-1)*Math.pow(2,w),n=n+_):(U=u*Math.pow(2,_-1)*Math.pow(2,w),n=0));w>=8;f[h+l]=U&255,l+=d,U/=256,w-=8);for(n=n<<w|U,I+=w;I>0;f[h+l]=n&255,l+=d,n/=256,I-=8);f[h+l-d]|=g*128}}),ue=bt(p=>{"use strict";q();var f=ie(),u=ae(),h=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=E,p.INSPECT_MAX_BYTES=50;var m=2147483647;p.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=w(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function w(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function y(t){if(t>m)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,n.prototype),e}function n(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(t)}return U(t,e,r)}n.poolSize=8192;function U(t,e,r){if(typeof t=="string")return _(t,e);if(ArrayBuffer.isView(t))return l(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(j(t,ArrayBuffer)||t&&j(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(j(t,SharedArrayBuffer)||t&&j(t.buffer,SharedArrayBuffer)))return d(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return n.from(o,e,r);var i=g(t);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return n.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}n.from=function(t,e,r){return U(t,e,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function B(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function I(t,e,r){return B(t),t<=0?y(t):e!==void 0?typeof r=="string"?y(t).fill(e,r):y(t).fill(e):y(t)}n.alloc=function(t,e,r){return I(t,e,r)};function b(t){return B(t),y(t<0?0:c(t)|0)}n.allocUnsafe=function(t){return b(t)},n.allocUnsafeSlow=function(t){return b(t)};function _(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!n.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=v(t,e)|0,o=y(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function k(t){for(var e=t.length<0?0:c(t.length)|0,r=y(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function l(t){if(j(t,Uint8Array)){var e=new Uint8Array(t);return d(e.buffer,e.byteOffset,e.byteLength)}return k(t)}function d(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,n.prototype),o}function g(t){if(n.isBuffer(t)){var e=c(t.length)|0,r=y(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||Q(t.length)?y(0):k(t);if(t.type==="Buffer"&&Array.isArray(t.data))return k(t.data)}function c(t){if(t>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return t|0}function E(t){return+t!=t&&(t=0),n.alloc(+t)}n.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==n.prototype},n.compare=function(t,e){if(j(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),j(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(t)||!n.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,o=e.length,i=0,a=Math.min(r,o);i<a;++i)if(t[i]!==e[i]){r=t[i],o=e[i];break}return r<o?-1:o<r?1:0},n.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return n.alloc(0);var r;if(e===void 0)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var o=n.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var a=t[r];if(j(a,Uint8Array))i+a.length>o.length?n.from(a).copy(o,i):Uint8Array.prototype.set.call(o,a,i);else if(n.isBuffer(a))a.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return o};function v(t,e){if(n.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||j(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return J(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return ct(t).length;default:if(i)return o?-1:J(t).length;e=(""+e).toLowerCase(),i=!0}}n.byteLength=v;function C(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return At(this,e,r);case"utf8":case"utf-8":return F(this,e,r);case"ascii":return ft(this,e,r);case"latin1":case"binary":return Et(this,e,r);case"base64":return at(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bt(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function M(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}n.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)M(this,e,e+1);return this},n.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)M(this,e,e+3),M(this,e+1,e+2);return this},n.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)M(this,e,e+7),M(this,e+1,e+6),M(this,e+2,e+5),M(this,e+3,e+4);return this},n.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?F(this,0,t):C.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(t){if(!n.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:n.compare(this,t)===0},n.prototype.inspect=function(){var t="",e=p.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},h&&(n.prototype[h]=n.prototype.inspect),n.prototype.compare=function(t,e,r,o,i){if(j(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),!n.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),r===void 0&&(r=t?t.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),e<0||r>t.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&e>=r)return 0;if(o>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,o>>>=0,i>>>=0,this===t)return 0;for(var a=i-o,s=r-e,A=Math.min(a,s),S=this.slice(o,i),T=t.slice(e,r),x=0;x<A;++x)if(S[x]!==T[x]){a=S[x],s=T[x];break}return a<s?-1:s<a?1:0};function O(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Q(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=n.from(e,o)),n.isBuffer(e))return e.length===0?-1:X(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):X(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function X(t,e,r,o,i){var a=1,s=t.length,A=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;a=2,s/=2,A/=2,r/=2}function S(ht,dt){return a===1?ht[dt]:ht.readUInt16BE(dt*a)}var T;if(i){var x=-1;for(T=r;T<s;T++)if(S(t,T)===S(e,x===-1?0:T-x)){if(x===-1&&(x=T),T-x+1===A)return x*a}else x!==-1&&(T-=T-x),x=-1}else for(r+A>s&&(r=s-A),T=r;T>=0;T--){for(var R=!0,H=0;H<A;H++)if(S(t,T+H)!==S(e,H)){R=!1;break}if(R)return T}return-1}n.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},n.prototype.indexOf=function(t,e,r){return O(this,t,e,r,!0)},n.prototype.lastIndexOf=function(t,e,r){return O(this,t,e,r,!1)};function Z(t,e,r,o){r=Number(r)||0;var i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var a=e.length;o>a/2&&(o=a/2);for(var s=0;s<o;++s){var A=parseInt(e.substr(s*2,2),16);if(Q(A))return s;t[r+s]=A}return s}function K(t,e,r,o){return $(J(e,t.length-r),t,r,o)}function rt(t,e,r,o){return $(It(e),t,r,o)}function nt(t,e,r,o){return $(ct(e),t,r,o)}function it(t,e,r,o){return $(Ut(e,t.length-r),t,r,o)}n.prototype.write=function(t,e,r,o){if(e===void 0)o="utf8",r=this.length,e=0;else if(r===void 0&&typeof e=="string")o=e,r=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((r===void 0||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var a=!1;;)switch(o){case"hex":return Z(this,t,e,r);case"utf8":case"utf-8":return K(this,t,e,r);case"ascii":case"latin1":case"binary":return rt(this,t,e,r);case"base64":return nt(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return it(this,t,e,r);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function at(t,e,r){return e===0&&r===t.length?f.fromByteArray(t):f.fromByteArray(t.slice(e,r))}function F(t,e,r){r=Math.min(t.length,r);for(var o=[],i=e;i<r;){var a=t[i],s=null,A=a>239?4:a>223?3:a>191?2:1;if(i+A<=r){var S,T,x,R;switch(A){case 1:a<128&&(s=a);break;case 2:S=t[i+1],(S&192)===128&&(R=(a&31)<<6|S&63,R>127&&(s=R));break;case 3:S=t[i+1],T=t[i+2],(S&192)===128&&(T&192)===128&&(R=(a&15)<<12|(S&63)<<6|T&63,R>2047&&(R<55296||R>57343)&&(s=R));break;case 4:S=t[i+1],T=t[i+2],x=t[i+3],(S&192)===128&&(T&192)===128&&(x&192)===128&&(R=(a&15)<<18|(S&63)<<12|(T&63)<<6|x&63,R>65535&&R<1114112&&(s=R))}}s===null?(s=65533,A=1):s>65535&&(s-=65536,o.push(s>>>10&1023|55296),s=56320|s&1023),o.push(s),i+=A}return ut(o)}var z=4096;function ut(t){var e=t.length;if(e<=z)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=z));return r}function ft(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function Et(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function At(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",a=e;a<r;++a)i+=Lt[t[a]];return i}function Bt(t,e,r){for(var o=t.slice(e,r),i="",a=0;a<o.length-1;a+=2)i+=String.fromCharCode(o[a]+o[a+1]*256);return i}n.prototype.slice=function(t,e){var r=this.length;t=~~t,e=e===void 0?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);var o=this.subarray(t,e);return Object.setPrototypeOf(o,n.prototype),o};function L(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||L(t,e,this.length);for(var o=this[t],i=1,a=0;++a<e&&(i*=256);)o+=this[t+a]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||L(t,e,this.length);for(var o=this[t+--e],i=1;e>0&&(i*=256);)o+=this[t+--e]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(t,e){return t=t>>>0,e||L(t,1,this.length),this[t]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||L(t,2,this.length),this[t]|this[t+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||L(t,2,this.length),this[t]<<8|this[t+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||L(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},n.prototype.readIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||L(t,e,this.length);for(var o=this[t],i=1,a=0;++a<e&&(i*=256);)o+=this[t+a]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},n.prototype.readIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||L(t,e,this.length);for(var o=e,i=1,a=this[t+--o];o>0&&(i*=256);)a+=this[t+--o]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a},n.prototype.readInt8=function(t,e){return t=t>>>0,e||L(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},n.prototype.readInt16LE=function(t,e){t=t>>>0,e||L(t,2,this.length);var r=this[t]|this[t+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(t,e){t=t>>>0,e||L(t,2,this.length);var r=this[t+1]|this[t]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(t,e){return t=t>>>0,e||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},n.prototype.readInt32BE=function(t,e){return t=t>>>0,e||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},n.prototype.readFloatLE=function(t,e){return t=t>>>0,e||L(t,4,this.length),u.read(this,t,!0,23,4)},n.prototype.readFloatBE=function(t,e){return t=t>>>0,e||L(t,4,this.length),u.read(this,t,!1,23,4)},n.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||L(t,8,this.length),u.read(this,t,!0,52,8)},n.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||L(t,8,this.length),u.read(this,t,!1,52,8)};function P(t,e,r,o,i,a){if(!n.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<a)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(t,e,r,o){if(t=+t,e=e>>>0,r=r>>>0,!o){var i=Math.pow(2,8*r)-1;P(this,t,e,r,i,0)}var a=1,s=0;for(this[e]=t&255;++s<r&&(a*=256);)this[e+s]=t/a&255;return e+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(t,e,r,o){if(t=+t,e=e>>>0,r=r>>>0,!o){var i=Math.pow(2,8*r)-1;P(this,t,e,r,i,0)}var a=r-1,s=1;for(this[e+a]=t&255;--a>=0&&(s*=256);)this[e+a]=t/s&255;return e+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,1,255,0),this[e]=t&255,e+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},n.prototype.writeIntLE=function(t,e,r,o){if(t=+t,e=e>>>0,!o){var i=Math.pow(2,8*r-1);P(this,t,e,r,i-1,-i)}var a=0,s=1,A=0;for(this[e]=t&255;++a<r&&(s*=256);)t<0&&A===0&&this[e+a-1]!==0&&(A=1),this[e+a]=(t/s>>0)-A&255;return e+r},n.prototype.writeIntBE=function(t,e,r,o){if(t=+t,e=e>>>0,!o){var i=Math.pow(2,8*r-1);P(this,t,e,r,i-1,-i)}var a=r-1,s=1,A=0;for(this[e+a]=t&255;--a>=0&&(s*=256);)t<0&&A===0&&this[e+a+1]!==0&&(A=1),this[e+a]=(t/s>>0)-A&255;return e+r},n.prototype.writeInt8=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},n.prototype.writeInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},n.prototype.writeInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},n.prototype.writeInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},n.prototype.writeInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function pt(t,e,r,o,i,a){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function st(t,e,r,o,i){return e=+e,r=r>>>0,i||pt(t,e,r,4,34028234663852886e22,-34028234663852886e22),u.write(t,e,r,o,23,4),r+4}n.prototype.writeFloatLE=function(t,e,r){return st(this,t,e,!0,r)},n.prototype.writeFloatBE=function(t,e,r){return st(this,t,e,!1,r)};function lt(t,e,r,o,i){return e=+e,r=r>>>0,i||pt(t,e,r,8,17976931348623157e292,-17976931348623157e292),u.write(t,e,r,o,52,8),r+8}n.prototype.writeDoubleLE=function(t,e,r){return lt(this,t,e,!0,r)},n.prototype.writeDoubleBE=function(t,e,r){return lt(this,t,e,!1,r)},n.prototype.copy=function(t,e,r,o){if(!n.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),e>=t.length&&(e=t.length),e||(e=0),o>0&&o<r&&(o=r),o===r||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-e<o-r&&(o=t.length-e+r);var i=o-r;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,r,o):Uint8Array.prototype.set.call(t,this.subarray(r,o),e),i},n.prototype.fill=function(t,e,r,o){if(typeof t=="string"){if(typeof e=="string"?(o=e,e=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(t.length===1){var i=t.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(t=i)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e=e>>>0,r=r===void 0?this.length:r>>>0,t||(t=0);var a;if(typeof t=="number")for(a=e;a<r;++a)this[a]=t;else{var s=n.isBuffer(t)?t:n.from(t,o),A=s.length;if(A===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(a=0;a<r-e;++a)this[a+e]=s[a%A]}return this};var Tt=/[^+/0-9A-Za-z-_]/g;function xt(t){if(t=t.split("=")[0],t=t.trim().replace(Tt,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function J(t,e){e=e||1/0;for(var r,o=t.length,i=null,a=[],s=0;s<o;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===o){(e-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;a.push(r)}else if(r<2048){if((e-=2)<0)break;a.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;a.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return a}function It(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function Ut(t,e){for(var r,o,i,a=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),o=r>>8,i=r%256,a.push(i),a.push(o);return a}function ct(t){return f.toByteArray(xt(t))}function $(t,e,r,o){for(var i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function j(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Q(t){return t!==t}var Lt=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)e[o+i]=t[r]+t[i];return e}()}),fe=bt((p,f)=>{q();var u=f.exports={},h,m;function w(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?h=setTimeout:h=w}catch(c){h=w}try{typeof clearTimeout=="function"?m=clearTimeout:m=y}catch(c){m=y}})();function n(c){if(h===setTimeout)return setTimeout(c,0);if((h===w||!h)&&setTimeout)return h=setTimeout,setTimeout(c,0);try{return h(c,0)}catch(E){try{return h.call(null,c,0)}catch(v){return h.call(this,c,0)}}}function U(c){if(m===clearTimeout)return clearTimeout(c);if((m===y||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(c);try{return m(c)}catch(E){try{return m.call(null,c)}catch(v){return m.call(this,c)}}}var B=[],I=!1,b,_=-1;function k(){!I||!b||(I=!1,b.length?B=b.concat(B):_=-1,B.length&&l())}function l(){if(!I){var c=n(k);I=!0;for(var E=B.length;E;){for(b=B,B=[];++_<E;)b&&b[_].run();_=-1,E=B.length}b=null,I=!1,U(c)}}u.nextTick=function(c){var E=new Array(arguments.length-1);if(arguments.length>1)for(var v=1;v<arguments.length;v++)E[v-1]=arguments[v];B.push(new d(c,E)),B.length===1&&!I&&n(l)};function d(c,E){this.fun=c,this.array=E}d.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={};function g(){}u.on=g,u.addListener=g,u.once=g,u.off=g,u.removeListener=g,u.removeAllListeners=g,u.emit=g,u.prependListener=g,u.prependOnceListener=g,u.listeners=function(c){return[]},u.binding=function(c){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(c){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}}),pe,se,le,q=re(()=>{pe=et(ue()),se=et(fe()),le=function(p){function f(){var h=this||self;return delete p.prototype.__magic__,h}if(typeof globalThis=="object")return globalThis;if(this)return f();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:f});var u=__magic__;return u}(Object)}),Yt={};oe(Yt,{AmountInput:()=>Be});Vt.exports=ne(Yt);q();var N=et(D("react")),ce=D("@terradharitri/sdk-dapp/utils/validation"),St=et(D("bignumber.js")),Rt=et(D("classnames")),he=D("react-number-format");q();var de=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(de));var Mt={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};q();var me=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(me));var gt={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};q();q();var tt=D("@terradharitri/sdk-dapp/constants/index"),ge=D("@terradharitri/sdk-dapp/utils/validation"),W=et(D("bignumber.js")),ye=(p,f)=>{let u=f!=null?f:tt.DIGITS;if((0,ge.stringIsFloat)(p)){if(new W.default(p).isZero())return"0";let h=new W.default(p).toFormat(u);return h=parseFloat(h)>0?h:new W.default(p).toFormat(tt.DIGITS),h=parseFloat(h)>0?h:new W.default(p).toFormat(tt.DIGITS+2),h=parseFloat(h)>0?h:new W.default(p).toFormat(tt.DIGITS+4),h=parseFloat(h)>0?h:new W.default(p).toFormat(tt.DIGITS+6),h=parseFloat(h)>0?h:new W.default(p).toFormat(tt.DIGITS+10),parseFloat(h)>0?h:new W.default(p).toFormat(tt.DIGITS+14)}return"0"};q();var Pt=p=>p.replace(/,/g,"");q();var jt=D("react"),be={value:"",count:0},ve=(p,f)=>{let[u,h]=(0,jt.useState)(be);return(0,jt.useEffect)(()=>{let m=setTimeout(()=>{h(p)},f);return()=>clearTimeout(m)},[p.count]),u};q();var we=et(D("bignumber.js")),_e=p=>{let[f,u]=p.split(""),h=new we.default(f).isZero();return Boolean(h&&u&&u!==".")},Ee=500,Dt=1e13,Ae=({"data-testid":p,InfoDustComponent:f,disabled:u,handleBlur:h,handleChange:m,name:w,onDebounceChange:y,onFocus:n,onKeyDown:U,placeholder:B,required:I,usdPrice:b,value:_,usdValue:k,className:l,autoFocus:d,suffix:g})=>{let c=(0,N.useRef)(null),[E,v]=(0,N.useState)(),[C,M]=(0,N.useState)(!1),[O,X]=(0,N.useState)({value:_,count:0}),[Z,K]=(0,N.useState)(),rt=ve(O,Ee),nt=F=>{F.stopPropagation(),M(!0);let z=Pt(F.target.value),ut=(0,St.default)(z).isLessThanOrEqualTo(Dt);if((z===""||ut)&&(v(z),F.target.value=z,m(F),y)){let ft={value:z,count:O.count+1};X(ft)}},it=()=>{if(k)return K(`$${k}`);if(!b||!_)return K(void 0);let F=Pt(_);if(!(_!==""&&(0,ce.stringIsFloat)(F))||F==="")return K(void 0);let z=ye(new St.default(F).times(b!=null?b:0).toString(10),2);K(`$${z}`)},at=({value:F,floatValue:z})=>(!z||(0,St.default)(z).isLessThanOrEqualTo(Dt))&&!_e(F);return(0,N.useEffect)(()=>{y&&C&&(M(!1),y(rt.value))},[rt]),(0,N.useEffect)(it,[_,k,b]),(0,N.useEffect)(()=>{_!==E&&v(_)},[_]),N.default.createElement("div",{ref:c,className:(0,Rt.default)(gt.amountHolder,{[gt.showUsdValue]:Boolean(Z)},l)},N.default.createElement(he.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":p||w,decimalSeparator:".",disabled:Boolean(u),id:w,inputMode:"decimal",isAllowed:at,name:w,onBlur:h,onChange:nt,onFocus:n,onKeyDown:U,placeholder:B,required:I,thousandSeparator:",",thousandsGroupStyle:"thousand",value:E,suffix:g,valueIsNumericString:!0,allowNegative:!1,autoFocus:d,className:(0,Rt.default)(Mt.input,gt.amountInput,{[Mt.disabled]:Boolean(u)})}),Z&&N.default.createElement("span",{className:gt.amountHolderUsd},N.default.createElement("small",{"data-testid":`tokenPrice_${b}`},Z!=="$0"?N.default.createElement(N.default.Fragment,null,"\u2248 "):N.default.createElement(N.default.Fragment,null),Z),f))},Be=(0,N.memo)(Ae,(p,f)=>p.value===f.value&&p.usdPrice===f.usdPrice&&p.className===f.className&&p.disabled===f.disabled&&p.usdValue===f.usdValue);});var Wt=kt((We,Kt)=>{"use strict";ot();var Te=Object.create,wt=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,Ie=Object.getOwnPropertyNames,Ue=Object.getPrototypeOf,Le=Object.prototype.hasOwnProperty,Se=(p,f)=>()=>(p&&(f=p(p=0)),f),_t=(p,f)=>()=>(f||p((f={exports:{}}).exports,f),f.exports),Oe=(p,f)=>{for(var u in f)wt(p,u,{get:f[u],enumerable:!0})},Ht=(p,f,u,h)=>{if(f&&typeof f=="object"||typeof f=="function")for(let m of Ie(f))!Le.call(p,m)&&m!==u&&wt(p,m,{get:()=>f[m],enumerable:!(h=xe(f,m))||h.enumerable});return p},vt=(p,f,u)=>(u=p!=null?Te(Ue(p)):{},Ht(f||!p||!p.__esModule?wt(u,"default",{value:p,enumerable:!0}):u,p)),ke=p=>Ht(wt({},"__esModule",{value:!0}),p),Ce=_t(p=>{"use strict";Y(),p.byteLength=U,p.toByteArray=I,p.fromByteArray=k;var f=[],u=[],h=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(w=0,y=m.length;w<y;++w)f[w]=m[w],u[m.charCodeAt(w)]=w;var w,y;u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63;function n(l){var d=l.length;if(d%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var g=l.indexOf("=");g===-1&&(g=d);var c=g===d?0:4-g%4;return[g,c]}function U(l){var d=n(l),g=d[0],c=d[1];return(g+c)*3/4-c}function B(l,d,g){return(d+g)*3/4-g}function I(l){var d,g=n(l),c=g[0],E=g[1],v=new h(B(l,c,E)),C=0,M=E>0?c-4:c,O;for(O=0;O<M;O+=4)d=u[l.charCodeAt(O)]<<18|u[l.charCodeAt(O+1)]<<12|u[l.charCodeAt(O+2)]<<6|u[l.charCodeAt(O+3)],v[C++]=d>>16&255,v[C++]=d>>8&255,v[C++]=d&255;return E===2&&(d=u[l.charCodeAt(O)]<<2|u[l.charCodeAt(O+1)]>>4,v[C++]=d&255),E===1&&(d=u[l.charCodeAt(O)]<<10|u[l.charCodeAt(O+1)]<<4|u[l.charCodeAt(O+2)]>>2,v[C++]=d>>8&255,v[C++]=d&255),v}function b(l){return f[l>>18&63]+f[l>>12&63]+f[l>>6&63]+f[l&63]}function _(l,d,g){for(var c,E=[],v=d;v<g;v+=3)c=(l[v]<<16&16711680)+(l[v+1]<<8&65280)+(l[v+2]&255),E.push(b(c));return E.join("")}function k(l){for(var d,g=l.length,c=g%3,E=[],v=16383,C=0,M=g-c;C<M;C+=v)E.push(_(l,C,C+v>M?M:C+v));return c===1?(d=l[g-1],E.push(f[d>>2]+f[d<<4&63]+"==")):c===2&&(d=(l[g-2]<<8)+l[g-1],E.push(f[d>>10]+f[d>>4&63]+f[d<<2&63]+"=")),E.join("")}}),Re=_t(p=>{Y(),p.read=function(f,u,h,m,w){var y,n,U=w*8-m-1,B=(1<<U)-1,I=B>>1,b=-7,_=h?w-1:0,k=h?-1:1,l=f[u+_];for(_+=k,y=l&(1<<-b)-1,l>>=-b,b+=U;b>0;y=y*256+f[u+_],_+=k,b-=8);for(n=y&(1<<-b)-1,y>>=-b,b+=m;b>0;n=n*256+f[u+_],_+=k,b-=8);if(y===0)y=1-I;else{if(y===B)return n?NaN:(l?-1:1)*(1/0);n=n+Math.pow(2,m),y=y-I}return(l?-1:1)*n*Math.pow(2,y-m)},p.write=function(f,u,h,m,w,y){var n,U,B,I=y*8-w-1,b=(1<<I)-1,_=b>>1,k=w===23?Math.pow(2,-24)-Math.pow(2,-77):0,l=m?0:y-1,d=m?1:-1,g=u<0||u===0&&1/u<0?1:0;for(u=Math.abs(u),isNaN(u)||u===1/0?(U=isNaN(u)?1:0,n=b):(n=Math.floor(Math.log(u)/Math.LN2),u*(B=Math.pow(2,-n))<1&&(n--,B*=2),n+_>=1?u+=k/B:u+=k*Math.pow(2,1-_),u*B>=2&&(n++,B/=2),n+_>=b?(U=0,n=b):n+_>=1?(U=(u*B-1)*Math.pow(2,w),n=n+_):(U=u*Math.pow(2,_-1)*Math.pow(2,w),n=0));w>=8;f[h+l]=U&255,l+=d,U/=256,w-=8);for(n=n<<w|U,I+=w;I>0;f[h+l]=n&255,l+=d,n/=256,I-=8);f[h+l-d]|=g*128}}),Me=_t(p=>{"use strict";Y();var f=Ce(),u=Re(),h=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;p.Buffer=n,p.SlowBuffer=E,p.INSPECT_MAX_BYTES=50;var m=2147483647;p.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=w(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function w(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function y(t){if(t>m)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,n.prototype),e}function n(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(t)}return U(t,e,r)}n.poolSize=8192;function U(t,e,r){if(typeof t=="string")return _(t,e);if(ArrayBuffer.isView(t))return l(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(j(t,ArrayBuffer)||t&&j(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(j(t,SharedArrayBuffer)||t&&j(t.buffer,SharedArrayBuffer)))return d(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return n.from(o,e,r);var i=g(t);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return n.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}n.from=function(t,e,r){return U(t,e,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function B(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function I(t,e,r){return B(t),t<=0?y(t):e!==void 0?typeof r=="string"?y(t).fill(e,r):y(t).fill(e):y(t)}n.alloc=function(t,e,r){return I(t,e,r)};function b(t){return B(t),y(t<0?0:c(t)|0)}n.allocUnsafe=function(t){return b(t)},n.allocUnsafeSlow=function(t){return b(t)};function _(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!n.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=v(t,e)|0,o=y(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function k(t){for(var e=t.length<0?0:c(t.length)|0,r=y(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function l(t){if(j(t,Uint8Array)){var e=new Uint8Array(t);return d(e.buffer,e.byteOffset,e.byteLength)}return k(t)}function d(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,n.prototype),o}function g(t){if(n.isBuffer(t)){var e=c(t.length)|0,r=y(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||Q(t.length)?y(0):k(t);if(t.type==="Buffer"&&Array.isArray(t.data))return k(t.data)}function c(t){if(t>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return t|0}function E(t){return+t!=t&&(t=0),n.alloc(+t)}n.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==n.prototype},n.compare=function(t,e){if(j(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),j(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(t)||!n.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,o=e.length,i=0,a=Math.min(r,o);i<a;++i)if(t[i]!==e[i]){r=t[i],o=e[i];break}return r<o?-1:o<r?1:0},n.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return n.alloc(0);var r;if(e===void 0)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var o=n.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var a=t[r];if(j(a,Uint8Array))i+a.length>o.length?n.from(a).copy(o,i):Uint8Array.prototype.set.call(o,a,i);else if(n.isBuffer(a))a.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return o};function v(t,e){if(n.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||j(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return J(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return ct(t).length;default:if(i)return o?-1:J(t).length;e=(""+e).toLowerCase(),i=!0}}n.byteLength=v;function C(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return At(this,e,r);case"utf8":case"utf-8":return F(this,e,r);case"ascii":return ft(this,e,r);case"latin1":case"binary":return Et(this,e,r);case"base64":return at(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bt(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function M(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}n.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)M(this,e,e+1);return this},n.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)M(this,e,e+3),M(this,e+1,e+2);return this},n.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)M(this,e,e+7),M(this,e+1,e+6),M(this,e+2,e+5),M(this,e+3,e+4);return this},n.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?F(this,0,t):C.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(t){if(!n.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:n.compare(this,t)===0},n.prototype.inspect=function(){var t="",e=p.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},h&&(n.prototype[h]=n.prototype.inspect),n.prototype.compare=function(t,e,r,o,i){if(j(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),!n.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),r===void 0&&(r=t?t.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),e<0||r>t.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&e>=r)return 0;if(o>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,o>>>=0,i>>>=0,this===t)return 0;for(var a=i-o,s=r-e,A=Math.min(a,s),S=this.slice(o,i),T=t.slice(e,r),x=0;x<A;++x)if(S[x]!==T[x]){a=S[x],s=T[x];break}return a<s?-1:s<a?1:0};function O(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Q(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=n.from(e,o)),n.isBuffer(e))return e.length===0?-1:X(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):X(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function X(t,e,r,o,i){var a=1,s=t.length,A=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;a=2,s/=2,A/=2,r/=2}function S(ht,dt){return a===1?ht[dt]:ht.readUInt16BE(dt*a)}var T;if(i){var x=-1;for(T=r;T<s;T++)if(S(t,T)===S(e,x===-1?0:T-x)){if(x===-1&&(x=T),T-x+1===A)return x*a}else x!==-1&&(T-=T-x),x=-1}else for(r+A>s&&(r=s-A),T=r;T>=0;T--){for(var R=!0,H=0;H<A;H++)if(S(t,T+H)!==S(e,H)){R=!1;break}if(R)return T}return-1}n.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},n.prototype.indexOf=function(t,e,r){return O(this,t,e,r,!0)},n.prototype.lastIndexOf=function(t,e,r){return O(this,t,e,r,!1)};function Z(t,e,r,o){r=Number(r)||0;var i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var a=e.length;o>a/2&&(o=a/2);for(var s=0;s<o;++s){var A=parseInt(e.substr(s*2,2),16);if(Q(A))return s;t[r+s]=A}return s}function K(t,e,r,o){return $(J(e,t.length-r),t,r,o)}function rt(t,e,r,o){return $(It(e),t,r,o)}function nt(t,e,r,o){return $(ct(e),t,r,o)}function it(t,e,r,o){return $(Ut(e,t.length-r),t,r,o)}n.prototype.write=function(t,e,r,o){if(e===void 0)o="utf8",r=this.length,e=0;else if(r===void 0&&typeof e=="string")o=e,r=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((r===void 0||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var a=!1;;)switch(o){case"hex":return Z(this,t,e,r);case"utf8":case"utf-8":return K(this,t,e,r);case"ascii":case"latin1":case"binary":return rt(this,t,e,r);case"base64":return nt(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return it(this,t,e,r);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function at(t,e,r){return e===0&&r===t.length?f.fromByteArray(t):f.fromByteArray(t.slice(e,r))}function F(t,e,r){r=Math.min(t.length,r);for(var o=[],i=e;i<r;){var a=t[i],s=null,A=a>239?4:a>223?3:a>191?2:1;if(i+A<=r){var S,T,x,R;switch(A){case 1:a<128&&(s=a);break;case 2:S=t[i+1],(S&192)===128&&(R=(a&31)<<6|S&63,R>127&&(s=R));break;case 3:S=t[i+1],T=t[i+2],(S&192)===128&&(T&192)===128&&(R=(a&15)<<12|(S&63)<<6|T&63,R>2047&&(R<55296||R>57343)&&(s=R));break;case 4:S=t[i+1],T=t[i+2],x=t[i+3],(S&192)===128&&(T&192)===128&&(x&192)===128&&(R=(a&15)<<18|(S&63)<<12|(T&63)<<6|x&63,R>65535&&R<1114112&&(s=R))}}s===null?(s=65533,A=1):s>65535&&(s-=65536,o.push(s>>>10&1023|55296),s=56320|s&1023),o.push(s),i+=A}return ut(o)}var z=4096;function ut(t){var e=t.length;if(e<=z)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=z));return r}function ft(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function Et(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function At(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",a=e;a<r;++a)i+=Lt[t[a]];return i}function Bt(t,e,r){for(var o=t.slice(e,r),i="",a=0;a<o.length-1;a+=2)i+=String.fromCharCode(o[a]+o[a+1]*256);return i}n.prototype.slice=function(t,e){var r=this.length;t=~~t,e=e===void 0?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);var o=this.subarray(t,e);return Object.setPrototypeOf(o,n.prototype),o};function L(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||L(t,e,this.length);for(var o=this[t],i=1,a=0;++a<e&&(i*=256);)o+=this[t+a]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||L(t,e,this.length);for(var o=this[t+--e],i=1;e>0&&(i*=256);)o+=this[t+--e]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(t,e){return t=t>>>0,e||L(t,1,this.length),this[t]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||L(t,2,this.length),this[t]|this[t+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||L(t,2,this.length),this[t]<<8|this[t+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||L(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},n.prototype.readIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||L(t,e,this.length);for(var o=this[t],i=1,a=0;++a<e&&(i*=256);)o+=this[t+a]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},n.prototype.readIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||L(t,e,this.length);for(var o=e,i=1,a=this[t+--o];o>0&&(i*=256);)a+=this[t+--o]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a},n.prototype.readInt8=function(t,e){return t=t>>>0,e||L(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},n.prototype.readInt16LE=function(t,e){t=t>>>0,e||L(t,2,this.length);var r=this[t]|this[t+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(t,e){t=t>>>0,e||L(t,2,this.length);var r=this[t+1]|this[t]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(t,e){return t=t>>>0,e||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},n.prototype.readInt32BE=function(t,e){return t=t>>>0,e||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},n.prototype.readFloatLE=function(t,e){return t=t>>>0,e||L(t,4,this.length),u.read(this,t,!0,23,4)},n.prototype.readFloatBE=function(t,e){return t=t>>>0,e||L(t,4,this.length),u.read(this,t,!1,23,4)},n.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||L(t,8,this.length),u.read(this,t,!0,52,8)},n.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||L(t,8,this.length),u.read(this,t,!1,52,8)};function P(t,e,r,o,i,a){if(!n.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<a)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(t,e,r,o){if(t=+t,e=e>>>0,r=r>>>0,!o){var i=Math.pow(2,8*r)-1;P(this,t,e,r,i,0)}var a=1,s=0;for(this[e]=t&255;++s<r&&(a*=256);)this[e+s]=t/a&255;return e+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(t,e,r,o){if(t=+t,e=e>>>0,r=r>>>0,!o){var i=Math.pow(2,8*r)-1;P(this,t,e,r,i,0)}var a=r-1,s=1;for(this[e+a]=t&255;--a>=0&&(s*=256);)this[e+a]=t/s&255;return e+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,1,255,0),this[e]=t&255,e+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},n.prototype.writeIntLE=function(t,e,r,o){if(t=+t,e=e>>>0,!o){var i=Math.pow(2,8*r-1);P(this,t,e,r,i-1,-i)}var a=0,s=1,A=0;for(this[e]=t&255;++a<r&&(s*=256);)t<0&&A===0&&this[e+a-1]!==0&&(A=1),this[e+a]=(t/s>>0)-A&255;return e+r},n.prototype.writeIntBE=function(t,e,r,o){if(t=+t,e=e>>>0,!o){var i=Math.pow(2,8*r-1);P(this,t,e,r,i-1,-i)}var a=r-1,s=1,A=0;for(this[e+a]=t&255;--a>=0&&(s*=256);)t<0&&A===0&&this[e+a+1]!==0&&(A=1),this[e+a]=(t/s>>0)-A&255;return e+r},n.prototype.writeInt8=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},n.prototype.writeInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},n.prototype.writeInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},n.prototype.writeInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},n.prototype.writeInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||P(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function pt(t,e,r,o,i,a){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function st(t,e,r,o,i){return e=+e,r=r>>>0,i||pt(t,e,r,4,34028234663852886e22,-34028234663852886e22),u.write(t,e,r,o,23,4),r+4}n.prototype.writeFloatLE=function(t,e,r){return st(this,t,e,!0,r)},n.prototype.writeFloatBE=function(t,e,r){return st(this,t,e,!1,r)};function lt(t,e,r,o,i){return e=+e,r=r>>>0,i||pt(t,e,r,8,17976931348623157e292,-17976931348623157e292),u.write(t,e,r,o,52,8),r+8}n.prototype.writeDoubleLE=function(t,e,r){return lt(this,t,e,!0,r)},n.prototype.writeDoubleBE=function(t,e,r){return lt(this,t,e,!1,r)},n.prototype.copy=function(t,e,r,o){if(!n.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),e>=t.length&&(e=t.length),e||(e=0),o>0&&o<r&&(o=r),o===r||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-e<o-r&&(o=t.length-e+r);var i=o-r;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,r,o):Uint8Array.prototype.set.call(t,this.subarray(r,o),e),i},n.prototype.fill=function(t,e,r,o){if(typeof t=="string"){if(typeof e=="string"?(o=e,e=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(t.length===1){var i=t.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(t=i)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e=e>>>0,r=r===void 0?this.length:r>>>0,t||(t=0);var a;if(typeof t=="number")for(a=e;a<r;++a)this[a]=t;else{var s=n.isBuffer(t)?t:n.from(t,o),A=s.length;if(A===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(a=0;a<r-e;++a)this[a+e]=s[a%A]}return this};var Tt=/[^+/0-9A-Za-z-_]/g;function xt(t){if(t=t.split("=")[0],t=t.trim().replace(Tt,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function J(t,e){e=e||1/0;for(var r,o=t.length,i=null,a=[],s=0;s<o;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===o){(e-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;a.push(r)}else if(r<2048){if((e-=2)<0)break;a.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;a.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return a}function It(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function Ut(t,e){for(var r,o,i,a=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),o=r>>8,i=r%256,a.push(i),a.push(o);return a}function ct(t){return f.toByteArray(xt(t))}function $(t,e,r,o){for(var i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function j(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Q(t){return t!==t}var Lt=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)e[o+i]=t[r]+t[i];return e}()}),Pe=_t((p,f)=>{Y();var u=f.exports={},h,m;function w(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?h=setTimeout:h=w}catch(c){h=w}try{typeof clearTimeout=="function"?m=clearTimeout:m=y}catch(c){m=y}})();function n(c){if(h===setTimeout)return setTimeout(c,0);if((h===w||!h)&&setTimeout)return h=setTimeout,setTimeout(c,0);try{return h(c,0)}catch(E){try{return h.call(null,c,0)}catch(v){return h.call(this,c,0)}}}function U(c){if(m===clearTimeout)return clearTimeout(c);if((m===y||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(c);try{return m(c)}catch(E){try{return m.call(null,c)}catch(v){return m.call(this,c)}}}var B=[],I=!1,b,_=-1;function k(){!I||!b||(I=!1,b.length?B=b.concat(B):_=-1,B.length&&l())}function l(){if(!I){var c=n(k);I=!0;for(var E=B.length;E;){for(b=B,B=[];++_<E;)b&&b[_].run();_=-1,E=B.length}b=null,I=!1,U(c)}}u.nextTick=function(c){var E=new Array(arguments.length-1);if(arguments.length>1)for(var v=1;v<arguments.length;v++)E[v-1]=arguments[v];B.push(new d(c,E)),B.length===1&&!I&&n(l)};function d(c,E){this.fun=c,this.array=E}d.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={};function g(){}u.on=g,u.addListener=g,u.once=g,u.off=g,u.removeListener=g,u.removeAllListeners=g,u.emit=g,u.prependListener=g,u.prependOnceListener=g,u.listeners=function(c){return[]},u.binding=function(c){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(c){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}}),je,De,Ne,Y=Se(()=>{je=vt(Me()),De=vt(Pe()),Ne=function(p){function f(){var h=this||self;return delete p.prototype.__magic__,h}if(typeof globalThis=="object")return globalThis;if(this)return f();p.defineProperty(p.prototype,"__magic__",{configurable:!0,get:f});var u=__magic__;return u}(Object)}),Zt={};Oe(Zt,{RewaInfoDust:()=>He});Kt.exports=ke(Zt);Y();Y();var $t=vt(D("react"));Y();Y();var mt=vt(D("react")),Fe=D("@fortawesome/free-solid-svg-icons"),ze=D("@fortawesome/react-fontawesome"),qe=D("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Ye=D("react-tooltip"),Ke=D("react-tooltip/dist/react-tooltip.css");Y();Y();Y();var Ve="5000000000000000";Y();var Ge=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ge));var Ot={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},$e=({rewaLabel:p})=>mt.default.createElement("div",{className:Ot.infoDust},mt.default.createElement(Ye.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:Ot.infoDustTooltip},"A minimal amount of"," ",mt.default.createElement(qe.FormatAmount,{rewaLabel:p,value:Ve,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),mt.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:Ot.infoDustTrigger},mt.default.createElement(ze.FontAwesomeIcon,{icon:Fe.faInfoCircle,className:"i-icon"}))),He=({rewaLabel:p,amount:f,maxAmountMinusDust:u,isMaxClicked:h,tokenId:m})=>f===u&&h&&m===p?$t.default.createElement("span",{style:{marginLeft:"0.2rem"}},$t.default.createElement($e,{rewaLabel:p})):null;});var V={};ot();G(V,Ct(Gt()));G(V,Ct(Wt()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
