"use strict";var fe=Object.create;var X=Object.defineProperty;var me=Object.getOwnPropertyDescriptor;var de=Object.getOwnPropertyNames,_r=Object.getOwnPropertySymbols,ge=Object.getPrototypeOf,wr=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var Tr=(t,r,e)=>r in t?X(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,R=(t,r)=>{for(var e in r||(r={}))wr.call(r,e)&&Tr(t,e,r[e]);if(_r)for(var e of _r(r))he.call(r,e)&&Tr(t,e,r[e]);return t};var vr=(t,r)=>()=>(t&&(r=t(t=0)),r);var j=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),Er=(t,r)=>{for(var e in r)X(t,e,{get:r[e],enumerable:!0})},Ar=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of de(r))!wr.call(t,o)&&o!==e&&X(t,o,{get:()=>r[o],enumerable:!(n=me(r,o))||n.enumerable});return t};var b=(t,r,e)=>(e=t!=null?fe(ge(t)):{},Ar(r||!t||!t.__esModule?X(e,"default",{value:t,enumerable:!0}):e,t)),Lr=t=>Ar(X({},"__esModule",{value:!0}),t);var Ir=j(Q=>{"use strict";p();Q.byteLength=xe;Q.toByteArray=_e;Q.fromByteArray=ve;var E=[],w=[],ye=typeof Uint8Array!="undefined"?Uint8Array:Array,ir="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(U=0,kr=ir.length;U<kr;++U)E[U]=ir[U],w[ir.charCodeAt(U)]=U;var U,kr;w["-".charCodeAt(0)]=62;w["_".charCodeAt(0)]=63;function Sr(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");e===-1&&(e=r);var n=e===r?0:4-e%4;return[e,n]}function xe(t){var r=Sr(t),e=r[0],n=r[1];return(e+n)*3/4-n}function be(t,r,e){return(r+e)*3/4-e}function _e(t){var r,e=Sr(t),n=e[0],o=e[1],i=new ye(be(t,n,o)),a=0,f=o>0?n-4:n,m;for(m=0;m<f;m+=4)r=w[t.charCodeAt(m)]<<18|w[t.charCodeAt(m+1)]<<12|w[t.charCodeAt(m+2)]<<6|w[t.charCodeAt(m+3)],i[a++]=r>>16&255,i[a++]=r>>8&255,i[a++]=r&255;return o===2&&(r=w[t.charCodeAt(m)]<<2|w[t.charCodeAt(m+1)]>>4,i[a++]=r&255),o===1&&(r=w[t.charCodeAt(m)]<<10|w[t.charCodeAt(m+1)]<<4|w[t.charCodeAt(m+2)]>>2,i[a++]=r>>8&255,i[a++]=r&255),i}function Te(t){return E[t>>18&63]+E[t>>12&63]+E[t>>6&63]+E[t&63]}function we(t,r,e){for(var n,o=[],i=r;i<e;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),o.push(Te(n));return o.join("")}function ve(t){for(var r,e=t.length,n=e%3,o=[],i=16383,a=0,f=e-n;a<f;a+=i)o.push(we(t,a,a+i>f?f:a+i));return n===1?(r=t[e-1],o.push(E[r>>2]+E[r<<4&63]+"==")):n===2&&(r=(t[e-2]<<8)+t[e-1],o.push(E[r>>10]+E[r>>4&63]+E[r<<2&63]+"=")),o.join("")}});var Fr=j(ar=>{p();ar.read=function(t,r,e,n,o){var i,a,f=o*8-n-1,m=(1<<f)-1,g=m>>1,h=-7,d=e?o-1:0,v=e?-1:1,T=t[r+d];for(d+=v,i=T&(1<<-h)-1,T>>=-h,h+=f;h>0;i=i*256+t[r+d],d+=v,h-=8);for(a=i&(1<<-h)-1,i>>=-h,h+=n;h>0;a=a*256+t[r+d],d+=v,h-=8);if(i===0)i=1-g;else{if(i===m)return a?NaN:(T?-1:1)*(1/0);a=a+Math.pow(2,n),i=i-g}return(T?-1:1)*a*Math.pow(2,i-n)};ar.write=function(t,r,e,n,o,i){var a,f,m,g=i*8-o-1,h=(1<<g)-1,d=h>>1,v=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,T=n?0:i-1,P=n?1:-1,ue=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,a=h):(a=Math.floor(Math.log(r)/Math.LN2),r*(m=Math.pow(2,-a))<1&&(a--,m*=2),a+d>=1?r+=v/m:r+=v*Math.pow(2,1-d),r*m>=2&&(a++,m/=2),a+d>=h?(f=0,a=h):a+d>=1?(f=(r*m-1)*Math.pow(2,o),a=a+d):(f=r*Math.pow(2,d-1)*Math.pow(2,o),a=0));o>=8;t[e+T]=f&255,T+=P,f/=256,o-=8);for(a=a<<o|f,g+=o;g>0;t[e+T]=a&255,T+=P,a/=256,g-=8);t[e+T-P]|=ue*128}});var zr=j(V=>{"use strict";p();var pr=Ir(),q=Fr(),Nr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;V.Buffer=s;V.SlowBuffer=Ie;V.INSPECT_MAX_BYTES=50;var J=2147483647;V.kMaxLength=J;s.TYPED_ARRAY_SUPPORT=Ee();!s.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Ee(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),t.foo()===42}catch(e){return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(!!s.isBuffer(this))return this.buffer}});Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(!!s.isBuffer(this))return this.byteOffset}});function I(t){if(t>J)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,s.prototype),r}function s(t,r,e){if(typeof t=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ur(t)}return Ur(t,r,e)}s.poolSize=8192;function Ur(t,r,e){if(typeof t=="string")return Le(t,r);if(ArrayBuffer.isView(t))return ke(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(A(t,ArrayBuffer)||t&&A(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(A(t,SharedArrayBuffer)||t&&A(t.buffer,SharedArrayBuffer)))return cr(t,r,e);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return s.from(n,r,e);var o=Se(t);if(o)return o;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return s.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}s.from=function(t,r,e){return Ur(t,r,e)};Object.setPrototypeOf(s.prototype,Uint8Array.prototype);Object.setPrototypeOf(s,Uint8Array);function Gr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Ae(t,r,e){return Gr(t),t<=0?I(t):r!==void 0?typeof e=="string"?I(t).fill(r,e):I(t).fill(r):I(t)}s.alloc=function(t,r,e){return Ae(t,r,e)};function ur(t){return Gr(t),I(t<0?0:fr(t)|0)}s.allocUnsafe=function(t){return ur(t)};s.allocUnsafeSlow=function(t){return ur(t)};function Le(t,r){if((typeof r!="string"||r==="")&&(r="utf8"),!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=Dr(t,r)|0,n=I(e),o=n.write(t,r);return o!==e&&(n=n.slice(0,o)),n}function sr(t){for(var r=t.length<0?0:fr(t.length)|0,e=I(r),n=0;n<r;n+=1)e[n]=t[n]&255;return e}function ke(t){if(A(t,Uint8Array)){var r=new Uint8Array(t);return cr(r.buffer,r.byteOffset,r.byteLength)}return sr(t)}function cr(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;return r===void 0&&e===void 0?n=new Uint8Array(t):e===void 0?n=new Uint8Array(t,r):n=new Uint8Array(t,r,e),Object.setPrototypeOf(n,s.prototype),n}function Se(t){if(s.isBuffer(t)){var r=fr(t.length)|0,e=I(r);return e.length===0||t.copy(e,0,0,r),e}if(t.length!==void 0)return typeof t.length!="number"||mr(t.length)?I(0):sr(t);if(t.type==="Buffer"&&Array.isArray(t.data))return sr(t.data)}function fr(t){if(t>=J)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+J.toString(16)+" bytes");return t|0}function Ie(t){return+t!=t&&(t=0),s.alloc(+t)}s.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==s.prototype};s.compare=function(r,e){if(A(r,Uint8Array)&&(r=s.from(r,r.offset,r.byteLength)),A(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(r)||!s.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var n=r.length,o=e.length,i=0,a=Math.min(n,o);i<a;++i)if(r[i]!==e[i]){n=r[i],o=e[i];break}return n<o?-1:o<n?1:0};s.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};s.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return s.alloc(0);var n;if(e===void 0)for(e=0,n=0;n<r.length;++n)e+=r[n].length;var o=s.allocUnsafe(e),i=0;for(n=0;n<r.length;++n){var a=r[n];if(A(a,Uint8Array))i+a.length>o.length?s.from(a).copy(o,i):Uint8Array.prototype.set.call(o,a,i);else if(s.isBuffer(a))a.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return o};function Dr(t,r){if(s.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||A(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return lr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return Wr(t).length;default:if(o)return n?-1:lr(t).length;r=(""+r).toLowerCase(),o=!0}}s.byteLength=Dr;function Fe(t,r,e){var n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(t||(t="utf8");;)switch(t){case"hex":return qe(this,r,e);case"utf8":case"utf-8":return Pr(this,r,e);case"ascii":return Pe(this,r,e);case"latin1":case"binary":return Re(this,r,e);case"base64":return De(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ve(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}s.prototype._isBuffer=!0;function G(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}s.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)G(this,e,e+1);return this};s.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)G(this,e,e+3),G(this,e+1,e+2);return this};s.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)G(this,e,e+7),G(this,e+1,e+6),G(this,e+2,e+5),G(this,e+3,e+4);return this};s.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?Pr(this,0,r):Fe.apply(this,arguments)};s.prototype.toLocaleString=s.prototype.toString;s.prototype.equals=function(r){if(!s.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:s.compare(this,r)===0};s.prototype.inspect=function(){var r="",e=V.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};Nr&&(s.prototype[Nr]=s.prototype.inspect);s.prototype.compare=function(r,e,n,o,i){if(A(r,Uint8Array)&&(r=s.from(r,r.offset,r.byteLength)),!s.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),n===void 0&&(n=r?r.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),e<0||n>r.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&e>=n)return 0;if(o>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,o>>>=0,i>>>=0,this===r)return 0;for(var a=i-o,f=n-e,m=Math.min(a,f),g=this.slice(o,i),h=r.slice(e,n),d=0;d<m;++d)if(g[d]!==h[d]){a=g[d],f=h[d];break}return a<f?-1:f<a?1:0};function Mr(t,r,e,n,o){if(t.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,mr(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0)if(o)e=0;else return-1;if(typeof r=="string"&&(r=s.from(r,n)),s.isBuffer(r))return r.length===0?-1:Br(t,r,e,n,o);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):Br(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function Br(t,r,e,n,o){var i=1,a=t.length,f=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||r.length<2)return-1;i=2,a/=2,f/=2,e/=2}function m(T,P){return i===1?T[P]:T.readUInt16BE(P*i)}var g;if(o){var h=-1;for(g=e;g<a;g++)if(m(t,g)===m(r,h===-1?0:g-h)){if(h===-1&&(h=g),g-h+1===f)return h*i}else h!==-1&&(g-=g-h),h=-1}else for(e+f>a&&(e=a-f),g=e;g>=0;g--){for(var d=!0,v=0;v<f;v++)if(m(t,g+v)!==m(r,v)){d=!1;break}if(d)return g}return-1}s.prototype.includes=function(r,e,n){return this.indexOf(r,e,n)!==-1};s.prototype.indexOf=function(r,e,n){return Mr(this,r,e,n,!0)};s.prototype.lastIndexOf=function(r,e,n){return Mr(this,r,e,n,!1)};function Ne(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n),n>o&&(n=o)):n=o;var i=r.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var f=parseInt(r.substr(a*2,2),16);if(mr(f))return a;t[e+a]=f}return a}function Be(t,r,e,n){return rr(lr(r,t.length-e),t,e,n)}function Ce(t,r,e,n){return rr(Oe(r),t,e,n)}function Ue(t,r,e,n){return rr(Wr(r),t,e,n)}function Ge(t,r,e,n){return rr($e(r,t.length-e),t,e,n)}s.prototype.write=function(r,e,n,o){if(e===void 0)o="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")o=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((n===void 0||n>i)&&(n=i),r.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var a=!1;;)switch(o){case"hex":return Ne(this,r,e,n);case"utf8":case"utf-8":return Be(this,r,e,n);case"ascii":case"latin1":case"binary":return Ce(this,r,e,n);case"base64":return Ue(this,r,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ge(this,r,e,n);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}};s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function De(t,r,e){return r===0&&e===t.length?pr.fromByteArray(t):pr.fromByteArray(t.slice(r,e))}function Pr(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i=t[o],a=null,f=i>239?4:i>223?3:i>191?2:1;if(o+f<=e){var m,g,h,d;switch(f){case 1:i<128&&(a=i);break;case 2:m=t[o+1],(m&192)===128&&(d=(i&31)<<6|m&63,d>127&&(a=d));break;case 3:m=t[o+1],g=t[o+2],(m&192)===128&&(g&192)===128&&(d=(i&15)<<12|(m&63)<<6|g&63,d>2047&&(d<55296||d>57343)&&(a=d));break;case 4:m=t[o+1],g=t[o+2],h=t[o+3],(m&192)===128&&(g&192)===128&&(h&192)===128&&(d=(i&15)<<18|(m&63)<<12|(g&63)<<6|h&63,d>65535&&d<1114112&&(a=d))}}a===null?(a=65533,f=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),o+=f}return Me(n)}var Cr=4096;function Me(t){var r=t.length;if(r<=Cr)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=Cr));return e}function Pe(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]&127);return n}function Re(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function qe(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=Ze[t[i]];return o}function Ve(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+n[i+1]*256);return o}s.prototype.slice=function(r,e){var n=this.length;r=~~r,e=e===void 0?n:~~e,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<r&&(e=r);var o=this.subarray(r,e);return Object.setPrototypeOf(o,s.prototype),o};function x(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||x(r,e,this.length);for(var o=this[r],i=1,a=0;++a<e&&(i*=256);)o+=this[r+a]*i;return o};s.prototype.readUintBE=s.prototype.readUIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||x(r,e,this.length);for(var o=this[r+--e],i=1;e>0&&(i*=256);)o+=this[r+--e]*i;return o};s.prototype.readUint8=s.prototype.readUInt8=function(r,e){return r=r>>>0,e||x(r,1,this.length),this[r]};s.prototype.readUint16LE=s.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||x(r,2,this.length),this[r]|this[r+1]<<8};s.prototype.readUint16BE=s.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||x(r,2,this.length),this[r]<<8|this[r+1]};s.prototype.readUint32LE=s.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||x(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};s.prototype.readUint32BE=s.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||x(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};s.prototype.readIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||x(r,e,this.length);for(var o=this[r],i=1,a=0;++a<e&&(i*=256);)o+=this[r+a]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o};s.prototype.readIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||x(r,e,this.length);for(var o=e,i=1,a=this[r+--o];o>0&&(i*=256);)a+=this[r+--o]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a};s.prototype.readInt8=function(r,e){return r=r>>>0,e||x(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};s.prototype.readInt16LE=function(r,e){r=r>>>0,e||x(r,2,this.length);var n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n};s.prototype.readInt16BE=function(r,e){r=r>>>0,e||x(r,2,this.length);var n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n};s.prototype.readInt32LE=function(r,e){return r=r>>>0,e||x(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};s.prototype.readInt32BE=function(r,e){return r=r>>>0,e||x(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};s.prototype.readFloatLE=function(r,e){return r=r>>>0,e||x(r,4,this.length),q.read(this,r,!0,23,4)};s.prototype.readFloatBE=function(r,e){return r=r>>>0,e||x(r,4,this.length),q.read(this,r,!1,23,4)};s.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||x(r,8,this.length),q.read(this,r,!0,52,8)};s.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||x(r,8,this.length),q.read(this,r,!1,52,8)};function _(t,r,e,n,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(r,e,n,o){if(r=+r,e=e>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;_(this,r,e,n,i,0)}var a=1,f=0;for(this[e]=r&255;++f<n&&(a*=256);)this[e+f]=r/a&255;return e+n};s.prototype.writeUintBE=s.prototype.writeUIntBE=function(r,e,n,o){if(r=+r,e=e>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;_(this,r,e,n,i,0)}var a=n-1,f=1;for(this[e+a]=r&255;--a>=0&&(f*=256);)this[e+a]=r/f&255;return e+n};s.prototype.writeUint8=s.prototype.writeUInt8=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,1,255,0),this[e]=r&255,e+1};s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};s.prototype.writeIntLE=function(r,e,n,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*n-1);_(this,r,e,n,i-1,-i)}var a=0,f=1,m=0;for(this[e]=r&255;++a<n&&(f*=256);)r<0&&m===0&&this[e+a-1]!==0&&(m=1),this[e+a]=(r/f>>0)-m&255;return e+n};s.prototype.writeIntBE=function(r,e,n,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*n-1);_(this,r,e,n,i-1,-i)}var a=n-1,f=1,m=0;for(this[e+a]=r&255;--a>=0&&(f*=256);)r<0&&m===0&&this[e+a+1]!==0&&(m=1),this[e+a]=(r/f>>0)-m&255;return e+n};s.prototype.writeInt8=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};s.prototype.writeInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};s.prototype.writeInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};s.prototype.writeInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};s.prototype.writeInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function Rr(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function qr(t,r,e,n,o){return r=+r,e=e>>>0,o||Rr(t,r,e,4,34028234663852886e22,-34028234663852886e22),q.write(t,r,e,n,23,4),e+4}s.prototype.writeFloatLE=function(r,e,n){return qr(this,r,e,!0,n)};s.prototype.writeFloatBE=function(r,e,n){return qr(this,r,e,!1,n)};function Vr(t,r,e,n,o){return r=+r,e=e>>>0,o||Rr(t,r,e,8,17976931348623157e292,-17976931348623157e292),q.write(t,r,e,n,52,8),e+8}s.prototype.writeDoubleLE=function(r,e,n){return Vr(this,r,e,!0,n)};s.prototype.writeDoubleBE=function(r,e,n){return Vr(this,r,e,!1,n)};s.prototype.copy=function(r,e,n,o){if(!s.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),e>=r.length&&(e=r.length),e||(e=0),o>0&&o<n&&(o=n),o===n||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),r.length-e<o-n&&(o=r.length-e+n);var i=o-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,o):Uint8Array.prototype.set.call(r,this.subarray(n,o),e),i};s.prototype.fill=function(r,e,n,o){if(typeof r=="string"){if(typeof e=="string"?(o=e,e=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!s.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(r.length===1){var i=r.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);var a;if(typeof r=="number")for(a=e;a<n;++a)this[a]=r;else{var f=s.isBuffer(r)?r:s.from(r,o),m=f.length;if(m===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(a=0;a<n-e;++a)this[a+e]=f[a%m]}return this};var We=/[^+/0-9A-Za-z-_]/g;function ze(t){if(t=t.split("=")[0],t=t.trim().replace(We,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function lr(t,r){r=r||1/0;for(var e,n=t.length,o=null,i=[],a=0;a<n;++a){if(e=t.charCodeAt(a),e>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(a+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=(o-55296<<10|e-56320)+65536}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function Oe(t){for(var r=[],e=0;e<t.length;++e)r.push(t.charCodeAt(e)&255);return r}function $e(t,r){for(var e,n,o,i=[],a=0;a<t.length&&!((r-=2)<0);++a)e=t.charCodeAt(a),n=e>>8,o=e%256,i.push(o),i.push(n);return i}function Wr(t){return pr.toByteArray(ze(t))}function rr(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function A(t,r){return t instanceof r||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===r.name}function mr(t){return t!==t}var Ze=function(){for(var t="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var n=e*16,o=0;o<16;++o)r[n+o]=t[e]+t[o];return r}()});var Kr=j((Pt,Xr)=>{p();var y=Xr.exports={},L,k;function dr(){throw new Error("setTimeout has not been defined")}function gr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?L=setTimeout:L=dr}catch(t){L=dr}try{typeof clearTimeout=="function"?k=clearTimeout:k=gr}catch(t){k=gr}})();function Or(t){if(L===setTimeout)return setTimeout(t,0);if((L===dr||!L)&&setTimeout)return L=setTimeout,setTimeout(t,0);try{return L(t,0)}catch(r){try{return L.call(null,t,0)}catch(e){return L.call(this,t,0)}}}function Xe(t){if(k===clearTimeout)return clearTimeout(t);if((k===gr||!k)&&clearTimeout)return k=clearTimeout,clearTimeout(t);try{return k(t)}catch(r){try{return k.call(null,t)}catch(e){return k.call(this,t)}}}var F=[],W=!1,D,er=-1;function Ke(){!W||!D||(W=!1,D.length?F=D.concat(F):er=-1,F.length&&$r())}function $r(){if(!W){var t=Or(Ke);W=!0;for(var r=F.length;r;){for(D=F,F=[];++er<r;)D&&D[er].run();er=-1,r=F.length}D=null,W=!1,Xe(t)}}y.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];F.push(new Zr(t,r)),F.length===1&&!W&&Or($r)};function Zr(t,r){this.fun=t,this.array=r}Zr.prototype.run=function(){this.fun.apply(null,this.array)};y.title="browser";y.browser=!0;y.env={};y.argv=[];y.version="";y.versions={};function N(){}y.on=N;y.addListener=N;y.once=N;y.off=N;y.removeListener=N;y.removeAllListeners=N;y.emit=N;y.prependListener=N;y.prependOnceListener=N;y.listeners=function(t){return[]};y.binding=function(t){throw new Error("process.binding is not supported")};y.cwd=function(){return"/"};y.chdir=function(t){throw new Error("process.chdir is not supported")};y.umask=function(){return 0}});var c,l,Rt,p=vr(()=>{c=b(zr()),l=b(Kr()),Rt=function(t){function r(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return r();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var ie={};Er(ie,{default:()=>It});var or,St,It,ae=vr(()=>{"use strict";p();or=b(require("react")),St=t=>or.createElement("svg",R({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),or.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),or.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),It=St});var Ct={};Er(Ct,{Fee:()=>Bt});module.exports=Lr(Ct);p();p();var C=b(require("react")),le=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");p();var Ye=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ye));var Yr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};p();p();p();var M="0";p();p();var K=require("@terradharitri/sdk-dapp/constants/index");p();p();p();var He=require("bech32");p();p();p();p();p();var hr=require("@terradharitri/sdk-dapp/types/tokens.types");p();p();var je=require("@terradharitri/sdk-dapp/constants"),Qe=require("@terradharitri/sdk-dapp/utils/account/getAccount");p();p();var Je=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");p();var rt=require("@terradharitri/sdk-dapp/utils/buildUrlParams");p();var et=b(require("anchorme"));p();p();var Hr=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),$=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),xr=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),tr=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");function jr({feeLimit:t,rewaPriceInUsd:r}){let e=(0,$.formatAmount)({input:t,decimals:K.DECIMALS,digits:K.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,xr.getUsdValue)({amount:e,usd:r,decimals:K.DIGITS})}`}p();var tt=require("@terradharitri/sdk-dapp/constants/index");p();p();p();p();p();p();var Jr=require("@terradharitri/sdk-dapp/constants/index"),ot=b(require("bignumber.js"));p();var nt=require("@terradharitri/sdk-dapp/constants/index");p();var it=require("@terradharitri/sdk-dapp/constants/index");p();p();var Y=require("@terradharitri/sdk-core"),at=require("@terradharitri/sdk-dapp/constants/index"),pt=b(require("bignumber.js"));p();p();var lt=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");p();var ut=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");p();var ft=b(require("bignumber.js"));p();var _t=require("@terradharitri/sdk-dapp/constants/index"),Tt=require("@terradharitri/sdk-dapp/utils/smartContracts"),wt=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),vt=b(require("bignumber.js"));p();var yt=b(require("bignumber.js"));p();p();var ht=b(require("axios"));p();p();p();var gt=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");p();var dt=require("@terradharitri/sdk-dapp/constants/index");p();p();p();var Z=require("@terradharitri/sdk-dapp/constants/index"),oe=b(require("bignumber.js"));var ee,te,ne,Et=(0,$.formatAmount)({input:String((ee=Z.GAS_PRICE)!=null?ee:1e9),decimals:(te=Z.DECIMALS)!=null?te:18,showLastNonZeroDecimal:!0,digits:(ne=Z.DIGITS)!=null?ne:4}),ti=new oe.default(Et).times(10).toString(10);p();var nr=require("@terradharitri/sdk-dapp/constants/index"),At=b(require("bignumber.js"));p();var Lt=b(require("bignumber.js"));p();p();var S=b(require("react")),pe=require("@fortawesome/free-solid-svg-icons"),se=require("@fortawesome/react-fontawesome"),br=b(require("classnames"));p();var kt=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(kt));var B={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var Ft=(ae(),Lr(ie)).default,ce=t=>{let{avatar:r,type:e}=t;return e==="NonFungibleDCDT"?S.default.createElement("div",{className:(0,br.default)(B.tokenAvatar,B.tokenAvatarNFT)},"NFT"):e==="SemiFungibleDCDT"?S.default.createElement("div",{className:(0,br.default)(B.tokenAvatar,B.tokenAvatarSFT)},"SFT"):e==="REWA"?S.default.createElement("div",{className:B.tokenAvatar},t.RewaIcon?S.default.createElement(t.RewaIcon,null):S.default.createElement(Ft,null)):r?S.default.createElement("div",{className:B.tokenAvatar},S.default.createElement("img",{src:r})):S.default.createElement("div",{className:B.tokenAvatar},S.default.createElement(se.FontAwesomeIcon,{icon:pe.faDiamond}))};p();var Nt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nt));var H={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Bt=({rewaPriceInUsd:t,label:r="Fee",feeLimit:e,rewaLabel:n})=>C.default.createElement("div",{className:H.fee},C.default.createElement("span",{className:Yr.label},r),C.default.createElement("div",{className:H.token},C.default.createElement(ce,{type:"REWA"}),C.default.createElement("div",{className:H.value},C.default.createElement(le.FormatAmount,{rewaLabel:n,value:e,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),e!==M&&C.default.createElement("span",{className:H.price},jr({feeLimit:e,rewaPriceInUsd:t})));0&&(module.exports={Fee});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
