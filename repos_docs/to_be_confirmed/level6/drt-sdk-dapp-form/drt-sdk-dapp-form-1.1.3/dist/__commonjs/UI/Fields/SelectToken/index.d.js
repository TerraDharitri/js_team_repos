"use strict";import{a,b as er,d as Q,e as rr,f as ee}from"../../../../__chunks__/chunk-RGFNPOTZ.js";var Fe=er((Un,ze)=>{"use strict";ee();var ar=Object.create,H=Object.defineProperty,ir=Object.defineProperties,ur=Object.getOwnPropertyDescriptor,lr=Object.getOwnPropertyDescriptors,pr=Object.getOwnPropertyNames,we=Object.getOwnPropertySymbols,fr=Object.getPrototypeOf,Ie=Object.prototype.hasOwnProperty,sr=Object.prototype.propertyIsEnumerable,Ee=(s,f,l)=>f in s?H(s,f,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[f]=l,F=(s,f)=>{for(var l in f||(f={}))Ie.call(f,l)&&Ee(s,l,f[l]);if(we)for(var l of we(f))sr.call(f,l)&&Ee(s,l,f[l]);return s},W=(s,f)=>ir(s,lr(f)),Le=(s,f)=>()=>(s&&(f=s(s=0)),f),oe=(s,f)=>()=>(f||s((f={exports:{}}).exports,f),f.exports),Be=(s,f)=>{for(var l in f)H(s,l,{get:f[l],enumerable:!0})},Ue=(s,f,l,g)=>{if(f&&typeof f=="object"||typeof f=="function")for(let m of pr(f))!Ie.call(s,m)&&m!==l&&H(s,m,{get:()=>f[m],enumerable:!(g=ur(f,m))||g.enumerable});return s},d=(s,f,l)=>(l=s!=null?ar(fr(s)):{},Ue(f||!s||!s.__esModule?H(l,"default",{value:s,enumerable:!0}):l,s)),Se=s=>Ue(H({},"__esModule",{value:!0}),s),cr=(s,f,l)=>new Promise((g,m)=>{var E=x=>{try{n(l.next(x))}catch(_){m(_)}},y=x=>{try{n(l.throw(x))}catch(_){m(_)}},n=x=>x.done?g(x.value):Promise.resolve(x.value).then(E,y);n((l=l.apply(s,f)).next())}),dr=oe(s=>{"use strict";i(),s.byteLength=x,s.toByteArray=L,s.fromByteArray=T;var f=[],l=[],g=typeof Uint8Array!="undefined"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(E=0,y=m.length;E<y;++E)f[E]=m[E],l[m.charCodeAt(E)]=E;var E,y;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(c){var b=c.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var w=c.indexOf("=");w===-1&&(w=b);var v=w===b?0:4-w%4;return[w,v]}function x(c){var b=n(c),w=b[0],v=b[1];return(w+v)*3/4-v}function _(c,b,w){return(b+w)*3/4-w}function L(c){var b,w=n(c),v=w[0],C=w[1],k=new g(_(c,v,C)),O=0,R=C>0?v-4:v,S;for(S=0;S<R;S+=4)b=l[c.charCodeAt(S)]<<18|l[c.charCodeAt(S+1)]<<12|l[c.charCodeAt(S+2)]<<6|l[c.charCodeAt(S+3)],k[O++]=b>>16&255,k[O++]=b>>8&255,k[O++]=b&255;return C===2&&(b=l[c.charCodeAt(S)]<<2|l[c.charCodeAt(S+1)]>>4,k[O++]=b&255),C===1&&(b=l[c.charCodeAt(S)]<<10|l[c.charCodeAt(S+1)]<<4|l[c.charCodeAt(S+2)]>>2,k[O++]=b>>8&255,k[O++]=b&255),k}function q(c){return f[c>>18&63]+f[c>>12&63]+f[c>>6&63]+f[c&63]}function A(c,b,w){for(var v,C=[],k=b;k<w;k+=3)v=(c[k]<<16&16711680)+(c[k+1]<<8&65280)+(c[k+2]&255),C.push(q(v));return C.join("")}function T(c){for(var b,w=c.length,v=w%3,C=[],k=16383,O=0,R=w-v;O<R;O+=k)C.push(A(c,O,O+k>R?R:O+k));return v===1?(b=c[w-1],C.push(f[b>>2]+f[b<<4&63]+"==")):v===2&&(b=(c[w-2]<<8)+c[w-1],C.push(f[b>>10]+f[b>>4&63]+f[b<<2&63]+"=")),C.join("")}}),hr=oe(s=>{i(),s.read=function(f,l,g,m,E){var y,n,x=E*8-m-1,_=(1<<x)-1,L=_>>1,q=-7,A=g?E-1:0,T=g?-1:1,c=f[l+A];for(A+=T,y=c&(1<<-q)-1,c>>=-q,q+=x;q>0;y=y*256+f[l+A],A+=T,q-=8);for(n=y&(1<<-q)-1,y>>=-q,q+=m;q>0;n=n*256+f[l+A],A+=T,q-=8);if(y===0)y=1-L;else{if(y===_)return n?NaN:(c?-1:1)*(1/0);n=n+Math.pow(2,m),y=y-L}return(c?-1:1)*n*Math.pow(2,y-m)},s.write=function(f,l,g,m,E,y){var n,x,_,L=y*8-E-1,q=(1<<L)-1,A=q>>1,T=E===23?Math.pow(2,-24)-Math.pow(2,-77):0,c=m?0:y-1,b=m?1:-1,w=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(x=isNaN(l)?1:0,n=q):(n=Math.floor(Math.log(l)/Math.LN2),l*(_=Math.pow(2,-n))<1&&(n--,_*=2),n+A>=1?l+=T/_:l+=T*Math.pow(2,1-A),l*_>=2&&(n++,_/=2),n+A>=q?(x=0,n=q):n+A>=1?(x=(l*_-1)*Math.pow(2,E),n=n+A):(x=l*Math.pow(2,A-1)*Math.pow(2,E),n=0));E>=8;f[g+c]=x&255,c+=b,x/=256,E-=8);for(n=n<<E|x,L+=E;L>0;f[g+c]=n&255,c+=b,n/=256,L-=8);f[g+c-b]|=w*128}}),mr=oe(s=>{"use strict";i();var f=dr(),l=hr(),g=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;s.Buffer=n,s.SlowBuffer=C,s.INSPECT_MAX_BYTES=50;var m=2147483647;s.kMaxLength=m,n.TYPED_ARRAY_SUPPORT=E(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function E(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function y(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return q(e)}return x(e,r,t)}n.poolSize=8192;function x(e,r,t){if(typeof e=="string")return A(e,r);if(ArrayBuffer.isView(e))return c(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(G(e,ArrayBuffer)||e&&G(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(G(e,SharedArrayBuffer)||e&&G(e.buffer,SharedArrayBuffer)))return b(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var u=w(e);if(u)return u;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return x(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function _(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function L(e,r,t){return _(e),e<=0?y(e):r!==void 0?typeof t=="string"?y(e).fill(r,t):y(e).fill(r):y(e)}n.alloc=function(e,r,t){return L(e,r,t)};function q(e){return _(e),y(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return q(e)},n.allocUnsafeSlow=function(e){return q(e)};function A(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=k(e,r)|0,o=y(t),u=o.write(e,r);return u!==t&&(o=o.slice(0,u)),o}function T(e){for(var r=e.length<0?0:v(e.length)|0,t=y(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function c(e){if(G(e,Uint8Array)){var r=new Uint8Array(e);return b(r.buffer,r.byteOffset,r.byteLength)}return T(e)}function b(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function w(e){if(n.isBuffer(e)){var r=v(e.length)|0,t=y(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||le(e.length)?y(0):T(e);if(e.type==="Buffer"&&Array.isArray(e.data))return T(e.data)}function v(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return e|0}function C(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(G(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),G(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,u=0,p=Math.min(t,o);u<p;++u)if(e[u]!==r[u]){t=e[u],o=r[u];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),u=0;for(t=0;t<e.length;++t){var p=e[t];if(G(p,Uint8Array))u+p.length>o.length?n.from(p).copy(o,u):Uint8Array.prototype.set.call(o,p,u);else if(n.isBuffer(p))p.copy(o,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=p.length}return o};function k(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||G(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var u=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ue(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ve(e).length;default:if(u)return o?-1:ue(e).length;r=(""+r).toLowerCase(),u=!0}}n.byteLength=k;function O(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return He(this,r,t);case"utf8":case"utf-8":return de(this,r,t);case"ascii":return $e(this,r,t);case"latin1":case"binary":return Ve(this,r,t);case"base64":return We(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ye(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function R(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)R(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)R(this,r,r+3),R(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)R(this,r,r+7),R(this,r+1,r+6),R(this,r+2,r+5),R(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?de(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=s.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},g&&(n.prototype[g]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,u){if(G(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),u===void 0&&(u=this.length),r<0||t>e.length||o<0||u>this.length)throw new RangeError("out of range index");if(o>=u&&r>=t)return 0;if(o>=u)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,u>>>=0,this===e)return 0;for(var p=u-o,h=t-r,I=Math.min(p,h),D=this.slice(o,u),B=e.slice(r,t),U=0;U<I;++U)if(D[U]!==B[U]){p=D[U],h=B[U];break}return p<h?-1:h<p?1:0};function S(e,r,t,o,u){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,le(t)&&(t=u?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(u)return-1;t=e.length-1}else if(t<0)if(u)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:P(e,r,t,o,u);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?u?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):P(e,[r],t,o,u);throw new TypeError("val must be string, number or Buffer")}function P(e,r,t,o,u){var p=1,h=e.length,I=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,h/=2,I/=2,t/=2}function D(ye,_e){return p===1?ye[_e]:ye.readUInt16BE(_e*p)}var B;if(u){var U=-1;for(B=t;B<h;B++)if(D(e,B)===D(r,U===-1?0:B-U)){if(U===-1&&(U=B),B-U+1===I)return U*p}else U!==-1&&(B-=B-U),U=-1}else for(t+I>h&&(t=h-I),B=t;B>=0;B--){for(var j=!0,J=0;J<I;J++)if(D(e,B+J)!==D(r,J)){j=!1;break}if(j)return B}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return S(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return S(this,e,r,t,!1)};function ne(e,r,t,o){t=Number(t)||0;var u=e.length-t;o?(o=Number(o),o>u&&(o=u)):o=u;var p=r.length;o>p/2&&(o=p/2);for(var h=0;h<o;++h){var I=parseInt(r.substr(h*2,2),16);if(le(I))return h;e[t+h]=I}return h}function Z(e,r,t,o){return X(ue(r,e.length-t),e,t,o)}function ae(e,r,t,o){return X(Xe(r),e,t,o)}function K(e,r,t,o){return X(ve(r),e,t,o)}function ie(e,r,t,o){return X(Je(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var u=this.length-r;if((t===void 0||t>u)&&(t=u),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return ne(this,e,r,t);case"utf8":case"utf-8":return Z(this,e,r,t);case"ascii":case"latin1":case"binary":return ae(this,e,r,t);case"base64":return K(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function We(e,r,t){return r===0&&t===e.length?f.fromByteArray(e):f.fromByteArray(e.slice(r,t))}function de(e,r,t){t=Math.min(e.length,t);for(var o=[],u=r;u<t;){var p=e[u],h=null,I=p>239?4:p>223?3:p>191?2:1;if(u+I<=t){var D,B,U,j;switch(I){case 1:p<128&&(h=p);break;case 2:D=e[u+1],(D&192)===128&&(j=(p&31)<<6|D&63,j>127&&(h=j));break;case 3:D=e[u+1],B=e[u+2],(D&192)===128&&(B&192)===128&&(j=(p&15)<<12|(D&63)<<6|B&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:D=e[u+1],B=e[u+2],U=e[u+3],(D&192)===128&&(B&192)===128&&(U&192)===128&&(j=(p&15)<<18|(D&63)<<12|(B&63)<<6|U&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,I=1):h>65535&&(h-=65536,o.push(h>>>10&1023|55296),h=56320|h&1023),o.push(h),u+=I}return Ge(o)}var he=4096;function Ge(e){var r=e.length;if(r<=he)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=he));return t}function $e(e,r,t){var o="";t=Math.min(e.length,t);for(var u=r;u<t;++u)o+=String.fromCharCode(e[u]&127);return o}function Ve(e,r,t){var o="";t=Math.min(e.length,t);for(var u=r;u<t;++u)o+=String.fromCharCode(e[u]);return o}function He(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var u="",p=r;p<t;++p)u+=Qe[e[p]];return u}function Ye(e,r,t){for(var o=e.slice(r,t),u="",p=0;p<o.length-1;p+=2)u+=String.fromCharCode(o[p]+o[p+1]*256);return u}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function N(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||N(e,r,this.length);for(var o=this[e],u=1,p=0;++p<r&&(u*=256);)o+=this[e+p]*u;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||N(e,r,this.length);for(var o=this[e+--r],u=1;r>0&&(u*=256);)o+=this[e+--r]*u;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||N(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||N(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||N(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||N(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||N(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||N(e,r,this.length);for(var o=this[e],u=1,p=0;++p<r&&(u*=256);)o+=this[e+p]*u;return u*=128,o>=u&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||N(e,r,this.length);for(var o=r,u=1,p=this[e+--o];o>0&&(u*=256);)p+=this[e+--o]*u;return u*=128,p>=u&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||N(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||N(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||N(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||N(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||N(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||N(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||N(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||N(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||N(e,8,this.length),l.read(this,e,!1,52,8)};function z(e,r,t,o,u,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>u||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var u=Math.pow(2,8*t)-1;z(this,e,r,t,u,0)}var p=1,h=0;for(this[r]=e&255;++h<t&&(p*=256);)this[r+h]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var u=Math.pow(2,8*t)-1;z(this,e,r,t,u,0)}var p=t-1,h=1;for(this[r+p]=e&255;--p>=0&&(h*=256);)this[r+p]=e/h&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var u=Math.pow(2,8*t-1);z(this,e,r,t,u-1,-u)}var p=0,h=1,I=0;for(this[r]=e&255;++p<t&&(h*=256);)e<0&&I===0&&this[r+p-1]!==0&&(I=1),this[r+p]=(e/h>>0)-I&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var u=Math.pow(2,8*t-1);z(this,e,r,t,u-1,-u)}var p=t-1,h=1,I=0;for(this[r+p]=e&255;--p>=0&&(h*=256);)e<0&&I===0&&this[r+p+1]!==0&&(I=1),this[r+p]=(e/h>>0)-I&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||z(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function me(e,r,t,o,u,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ge(e,r,t,o,u){return r=+r,t=t>>>0,u||me(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ge(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ge(this,e,r,!1,t)};function be(e,r,t,o,u){return r=+r,t=t>>>0,u||me(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return be(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return be(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var u=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),u},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var u=e.charCodeAt(0);(o==="utf8"&&u<128||o==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var h=n.isBuffer(e)?e:n.from(e,o),I=h.length;if(I===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=h[p%I]}return this};var Ze=/[^+/0-9A-Za-z-_]/g;function Ke(e){if(e=e.split("=")[0],e=e.trim().replace(Ze,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ue(e,r){r=r||1/0;for(var t,o=e.length,u=null,p=[],h=0;h<o;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!u){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(h+1===o){(r-=3)>-1&&p.push(239,191,189);continue}u=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),u=t;continue}t=(u-55296<<10|t-56320)+65536}else u&&(r-=3)>-1&&p.push(239,191,189);if(u=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Xe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Je(e,r){for(var t,o,u,p=[],h=0;h<e.length&&!((r-=2)<0);++h)t=e.charCodeAt(h),o=t>>8,u=t%256,p.push(u),p.push(o);return p}function ve(e){return f.toByteArray(Ke(e))}function X(e,r,t,o){for(var u=0;u<o&&!(u+t>=r.length||u>=e.length);++u)r[u+t]=e[u];return u}function G(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function le(e){return e!==e}var Qe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,u=0;u<16;++u)r[o+u]=e[t]+e[u];return r}()}),gr=oe((s,f)=>{i();var l=f.exports={},g,m;function E(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=E}catch(v){g=E}try{typeof clearTimeout=="function"?m=clearTimeout:m=y}catch(v){m=y}})();function n(v){if(g===setTimeout)return setTimeout(v,0);if((g===E||!g)&&setTimeout)return g=setTimeout,setTimeout(v,0);try{return g(v,0)}catch(C){try{return g.call(null,v,0)}catch(k){return g.call(this,v,0)}}}function x(v){if(m===clearTimeout)return clearTimeout(v);if((m===y||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(v);try{return m(v)}catch(C){try{return m.call(null,v)}catch(k){return m.call(this,v)}}}var _=[],L=!1,q,A=-1;function T(){!L||!q||(L=!1,q.length?_=q.concat(_):A=-1,_.length&&c())}function c(){if(!L){var v=n(T);L=!0;for(var C=_.length;C;){for(q=_,_=[];++A<C;)q&&q[A].run();A=-1,C=_.length}q=null,L=!1,x(v)}}l.nextTick=function(v){var C=new Array(arguments.length-1);if(arguments.length>1)for(var k=1;k<arguments.length;k++)C[k-1]=arguments[k];_.push(new b(v,C)),_.length===1&&!L&&n(c)};function b(v,C){this.fun=v,this.array=C}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function w(){}l.on=w,l.addListener=w,l.once=w,l.off=w,l.removeListener=w,l.removeAllListeners=w,l.emit=w,l.prependListener=w,l.prependOnceListener=w,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Oe,br,vr,i=Le(()=>{Oe=d(mr()),br=d(gr()),vr=function(s){function f(){var g=this||self;return delete s.prototype.__magic__,g}if(typeof globalThis=="object")return globalThis;if(this)return f();s.defineProperty(s.prototype,"__magic__",{configurable:!0,get:f});var l=__magic__;return l}(Object)}),Ne={};Be(Ne,{default:()=>Re});var re,qe,Re,yr=Le(()=>{"use strict";i(),re=d(a("react")),qe=s=>re.createElement("svg",F({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},s),re.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),re.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Re=qe}),Pe={};Be(Pe,{SelectToken:()=>rt});ze.exports=Se(Pe);i();var $=d(a("react")),_r=d(a("@terradharitri/sdk-dapp/constants/index")),wr=d(a("classnames")),De=d(a("react-select"));i();var Er=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Er));var Me={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};i();i();var je=d(a("react"));i();var qr=d(a("react")),tt=(0,qr.createContext)({});i();i();var xr=d(a("react")),ot=a("@terradharitri/sdk-dapp/constants/index"),nt=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),at=d(a("bignumber.js")),it=a("formik");i();i();i();var ut=a("bech32");i();i();i();var kr=(s,f)=>typeof f=="boolean"?f:Array.isArray(f)&&f.includes(s);i();i();var te=a("@terradharitri/sdk-dapp/types/tokens.types");i();i();var lt=a("@terradharitri/sdk-dapp/constants"),pt=a("@terradharitri/sdk-dapp/utils/account/getAccount");i();i();var ft=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");i();var st=a("@terradharitri/sdk-dapp/utils/buildUrlParams");i();var pe=d(a("anchorme")),fe=s=>s.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Cr=(s,f)=>{if(f){let l=`[Message hidden due to suspicious content - ${f.info}]`;if(s.length>1e3)return{output:l,stringWithLinks:s,found:!0};let g=fe(s.normalize("NFKC")),m=pe.default.list(g),E=[];if(m.length>0){let y=l;m.forEach((n,x)=>{let{string:_}=n,L="",q="",A=_;for(let T=0;T<y.length;T++){let c=y.slice(T),[b]=pe.default.list(fe(c));b&&_===b.string&&(L=y.substring(0,T))}for(let T=l.length;T>0;T--){let c=y.slice(0,T),[b]=pe.default.list(fe(c));b&&_===b.string&&(q=y.substring(T))}E.push(L),E.push(A),y=q,x===m.length-1&&E.push(q)})}else E.push(s);return{output:l,stringWithLinks:E.join(""),found:!0}}else return{output:s,stringWithLinks:"",found:!1}};i();function Ar({docStyle:s}){let f={hoverColor:s.getPropertyValue("--border-color"),primaryColor:s.getPropertyValue("--primary"),bgColor:s.getPropertyValue("--card-bg"),mutedColor:s.getPropertyValue("--muted"),blackColor:s.getPropertyValue("--black")};return{valueContainer:()=>({padding:"0.125rem 0 0.125rem 0.2rem",lineHeight:"1.5",fontSize:"0.8125rem",maxWidth:"85%",display:"flex"}),control:(l,g)=>W(F({},l),{minHeight:"0",flexWrap:"nowrap",backgroundColor:g.isDisabled?"#e9ecef":"transparent",borderColor:g.isDisabled?f.hoverColor:g.isFocused?f.primaryColor:f.blackColor,boxShadow:g.isFocused?`0 0 0 0.2rem #${f.primaryColor.replace("#","").trim()}33`:null,"&:hover":{borderColor:g.isFocused?f.primaryColor:"#b0b0b0"}}),input:l=>W(F({},l),{paddingLeft:"0.4rem",marginLeft:"0",marginRight:"0"}),indicatorSeparator:l=>W(F({},l),{marginTop:"0.3rem",marginBottom:"0.3rem"}),indicatorsContainer:l=>W(F({},l),{zIndex:"0"}),dropdownIndicator:l=>W(F({},l),{padding:"0 0.4rem"}),multiValue:l=>W(F({},l),{backgroundColor:f.hoverColor,borderRadius:"4px"}),multiValueRemove:l=>W(F({},l),{cursor:"pointer"}),multiValueLebel:l=>W(F({},l),{lineHeight:"1.5"}),placeholder:l=>W(F({},l),{marginLeft:"0",lineHeight:"2"}),option:(l,{isFocused:g,isSelected:m})=>W(F({},l),{fontSize:"0.8125rem",cursor:"pointer",align:"left",backgroundColor:m?f.primaryColor:g?f.hoverColor:"transparent"}),menu:l=>W(F({},l),{marginTop:"0.2rem",zIndex:"5"})}}i();var ct=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Tr=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),dt=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),ht=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");i();i();i();i();i();i();i();var Ir=d(a("react")),mt=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),gt=a("formik");i();i();var bt=a("@terradharitri/sdk-dapp/constants/index"),vt=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),yt=d(a("bignumber.js"));i();i();var _t=a("@terradharitri/sdk-dapp/constants/index");i();var wt=a("@terradharitri/sdk-dapp/constants/index");i();i();var Lr="0";i();var Et=a("@terradharitri/sdk-dapp/constants/index"),qt=d(a("bignumber.js"));i();var xt=a("@terradharitri/sdk-dapp/constants/index");i();var kt=a("@terradharitri/sdk-dapp/constants/index");i();i();var Ct=a("@terradharitri/sdk-core"),At=a("@terradharitri/sdk-dapp/constants/index"),Tt=d(a("bignumber.js"));i();i();var It=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");i();var Lt=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");i();var Bt=d(a("bignumber.js"));i();var Ut=a("@terradharitri/sdk-dapp/constants/index"),St=a("@terradharitri/sdk-dapp/utils/smartContracts"),Ot=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Nt=d(a("bignumber.js"));i();var Rt=d(a("bignumber.js"));i();i();var Pt=d(a("axios"));i();i();i();var Dt=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");i();var Mt=a("@terradharitri/sdk-dapp/constants/index");i();i();i();var se=a("@terradharitri/sdk-dapp/constants/index"),Br=d(a("bignumber.js")),xe,ke,Ce,Ur=(0,Tr.formatAmount)({input:String((xe=se.GAS_PRICE)!=null?xe:1e9),decimals:(ke=se.DECIMALS)!=null?ke:18,showLastNonZeroDecimal:!0,digits:(Ce=se.DIGITS)!=null?Ce:4}),jt=new Br.default(Ur).times(10).toString(10);i();var zt=a("@terradharitri/sdk-dapp/constants/index"),Ft=d(a("bignumber.js"));i();var Wt=d(a("bignumber.js"));i();i();var Gt=a("yup");i();var Ae=a("@terradharitri/sdk-dapp/constants/ledger.constants"),Sr=d(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),ce=a("yup"),Or=(0,ce.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(s){let{ledger:f}=this.parent;return!(f&&s&&s.length&&!f.ledgerDataActive)}),Nr=(0,ce.string)().test({name:"hashSign",test:function(s){let{ledger:f,isGuarded:l}=this.parent;if(f){let{ledgerWithHashSign:g,ledgerWithGuardians:m}=(0,Sr.default)(f.version);if(s&&s.length>300&&!g)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ae.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!m)return this.createError({message:`You need at least DharitrI app version ${Ae.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Rr=[Or,Nr],$t=Rr.reduce((s,f)=>s.concat(f),(0,ce.string)());i();var Vt=a("@terradharitri/sdk-dapp/constants/index"),Ht=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Yt=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Zt=a("yup");i();var Kt=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Xt=d(a("bignumber.js")),Jt=a("yup");i();var Qt=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),eo=d(a("bignumber.js")),ro=a("yup");i();var to=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),oo=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),no=d(a("bignumber.js")),ao=a("yup");i();var io=d(a("bignumber.js")),uo=a("yup");i();var lo=a("@terradharitri/sdk-dapp/constants/index"),po=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),fo=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),so=d(a("bignumber.js")),co=a("yup");i();var ho=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),mo=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),go=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),bo=d(a("bignumber.js")),vo=a("yup");i();var yo=d(a("bignumber.js")),_o=a("yup");i();var wo=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Eo=a("yup");i();var qo=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),xo=a("yup");i();i();var ko=(0,Ir.createContext)({});i();i();var Pr=d(a("react")),Co=a("formik"),Ao=d(a("lodash/uniqBy"));i();i();i();var To=d(a("axios"));i();i();var Io=d(a("axios"));i();i();var Lo=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Bo=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Uo=d(a("axios")),So=d(a("lodash/uniqBy"));i();var Oo=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),No=d(a("axios"));i();var Ro=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Po=d(a("axios"));i();i();var Dr=d(a("react")),Do=(0,Dr.createContext)({});i();i();var Mo=a("react"),jo=a("@terradharitri/sdk-dapp/constants/index"),zo=a("@terradharitri/sdk-dapp/types/enums.types");i();var Fo=(0,Pr.createContext)({});i();i();var Wo=a("@terradharitri/sdk-dapp/constants/index"),Go=a("formik");i();i();var Mr=d(a("react")),$o=a("@terradharitri/sdk-dapp/constants/index"),Vo=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ho=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Yo=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Zo=d(a("bignumber.js")),Ko=a("formik");i();i();i();i();var Xo=d(a("bignumber.js"));i();var Jo=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Qo=d(a("bignumber.js"));i();i();var en=a("react"),rn=a("@terradharitri/sdk-dapp/constants/index"),tn=a("@terradharitri/sdk-dapp/utils/smartContracts"),on=d(a("bignumber.js")),nn=a("formik");i();var an=a("react");i();i();var un=a("@terradharitri/sdk-dapp/constants/index"),ln=d(a("bignumber.js")),pn=(0,Mr.createContext)({}),fn=(0,xr.createContext)({});i();i();var jr=d(a("react")),sn=a("formik"),cn=(0,jr.createContext)({});i();i();var zr=d(a("react")),dn=a("formik");i();i();i();var hn=a("react"),mn=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),gn=d(a("lodash/uniqBy"));i();i();var bn=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),vn=a("@terradharitri/sdk-dapp/utils");i();var yn=a("react");i();var _n=a("react"),wn=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),En=(0,zr.createContext)({});i();i();var Fr=d(a("react")),qn=a("formik");i();i();i();i();i();var xn=a("react"),kn=a("@terradharitri/sdk-dapp/utils");i();var Cn=a("react"),An=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");i();i();var Tn=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),In=d(a("axios"));i();var Ln=d(a("axios")),Bn=(0,Fr.createContext)({}),Wr=(0,je.createContext)({});function Gr(){return(0,je.useContext)(Wr)}i();var $r=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($r));var Te={selectTokenContainer:"dapp-core-component__styles-module__selectTokenContainer"};i();i();var M=d(a("react")),Vr=a("@fortawesome/free-solid-svg-icons"),Hr=a("@fortawesome/react-fontawesome"),Yr=d(a("@terradharitri/sdk-dapp/constants/index")),Zr=a("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Kr=d(a("classnames"));i();var Xr=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xr));var V={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},Jr=(yr(),Se(Ne)).default,Qr=({RewaIcon:s,inDropdown:f=!1,isRewa:l,nftTokenDetails:g,nftType:m,token:E})=>{var y,n;let{name:x,identifier:_,balance:L,decimals:q}=E,A=((y=E.assets)==null?void 0:y.svgUrl)||((n=E.assets)==null?void 0:n.pngUrl)||"",T=A?28:20,[c,b]=(0,M.useState)(x);(0,M.useEffect)(()=>{var k;(k=g==null?void 0:g.uris)!=null&&k.some(O=>{let R=Oe.Buffer.from(String(O),"base64").toString(),{found:S}=Cr(R,g==null?void 0:g.scamInfo);return S})||b(x)},[x]);let w=M.default.createElement(Hr.FontAwesomeIcon,{icon:Vr.faDiamond});m==te.NftEnumType.NonFungibleDCDT&&(w=M.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-nft`},"NFT")),m===te.NftEnumType.SemiFungibleDCDT&&(w=M.default.createElement("div",{className:"nft-type","data-testid":`${_}-type-sft`},"SFT"));let v=!f&&m!==te.NftEnumType.NonFungibleDCDT,C=M.default.createElement("div",{className:V.tokenElementCircle},w);return A&&(C=M.default.createElement("img",{className:V.tokenElementCircle,src:A,alt:x,height:T})),l&&(C=M.default.createElement("div",{className:V.tokenElementCircle},s?M.default.createElement(s,{height:36}):M.default.createElement(Jr,{height:36}))),M.default.createElement("div",{className:(0,Kr.default)(Me.value,V.tokenElement)},M.default.createElement("div",{className:V.tokenElementWrapper},C),M.default.createElement("div",{"data-testid":"tokenName"},M.default.createElement("span",{"data-testid":`${_}-element`},M.default.createElement("span",null,c)," ",M.default.createElement("span",{className:V.tokenElementIdentifier},_)),v&&M.default.createElement(Zr.FormatAmount,{rewaLabel:_,value:L||Lr,digits:m===te.NftEnumType.SemiFungibleDCDT?0:Yr.DIGITS,token:_,showLabel:!1,decimals:q,"data-testid":`${_}-balance`})))},et=s=>$.default.createElement("div",{className:`token-option ${s.isSelected?"is-selected":""}`,"data-testid":`${s.value}-option`},$.default.createElement(De.components.Option,F({},s))),rt=({className:s,label:f})=>{let{formInfo:l,accountInfo:g,tokensInfo:m}=Gr(),{readonly:E}=l,{balance:y}=g,{getTokens:n,areTokensLoading:x,tokens:_,tokenId:L,rewaLabel:q,RewaIcon:A,tokenIdError:T,onChangeTokenId:c,isTokenIdInvalid:b}=m,w=({token:P})=>$.default.createElement(Qr,{inDropdown:!0,token:P,isRewa:P.identifier===q,RewaIcon:A}),v=[{name:"DharitrI eGold",identifier:q,balance:y,decimals:_r.DECIMALS,ticker:""},..._].map(P=>({value:P.identifier,label:P.name,assets:P.assets,token:P}));function C(){return cr(this,null,function*(){yield n()})}let k=P=>{P&&c(P.value)},O=({value:P,label:ne},Z)=>{if(Boolean(Z)){let ae=Z.trim().toLowerCase(),K=ie=>ie.toLowerCase().indexOf(ae)>-1;return K(P)||K(ne)}return!0},R=window.getComputedStyle(document.documentElement),S=Ar({docStyle:R});return $.default.createElement("div",{className:(0,wr.default)(Te.selectTokenContainer,s)},f&&$.default.createElement("label",{htmlFor:"tokenId","data-testid":"tokenIdLabel",className:Te.selectTokenLabel},f),$.default.createElement(De.default,{className:"selectToken",classNamePrefix:"selectToken",components:{Option:et},filterOption:O,formatOptionLabel:w,inputId:"tokenId",isDisabled:kr("tokenId",E),isLoading:x,name:"tokenId",onChange:k,onMenuOpen:C,openMenuOnFocus:!0,options:v,styles:s?{}:S,value:v.find(({value:P})=>P===L)||void 0}),b&&$.default.createElement("div",{className:Me.error,"data-testid":"tokenIdError"},$.default.createElement("small",null,T)))};});var Y={};ee();Q(Y,rr(Fe()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
