"use strict";import{a as n,b as er,d as X,e as rr,f as K}from"../../../../__chunks__/chunk-JH2LJGTQ.js";var Re=er((Dn,Oe)=>{"use strict";K();var ar=Object.create,W=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyNames,he=Object.getOwnPropertySymbols,lr=Object.getPrototypeOf,Be=Object.prototype.hasOwnProperty,ur=Object.prototype.propertyIsEnumerable,_e=(c,s,l)=>s in c?W(c,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[s]=l,ge=(c,s)=>{for(var l in s||(s={}))Be.call(s,l)&&_e(c,l,s[l]);if(he)for(var l of he(s))ur.call(s,l)&&_e(c,l,s[l]);return c},sr=(c,s)=>()=>(c&&(s=c(c=0)),s),Q=(c,s)=>()=>(s||c((s={exports:{}}).exports,s),s.exports),cr=(c,s)=>{for(var l in s)W(c,l,{get:s[l],enumerable:!0})},Ie=(c,s,l,y)=>{if(s&&typeof s=="object"||typeof s=="function")for(let b of pr(s))!Be.call(c,b)&&b!==l&&W(c,b,{get:()=>s[b],enumerable:!(y=ir(s,b))||y.enumerable});return c},f=(c,s,l)=>(l=c!=null?ar(lr(c)):{},Ie(s||!c||!c.__esModule?W(l,"default",{value:c,enumerable:!0}):l,c)),fr=c=>Ie(W({},"__esModule",{value:!0}),c),dr=Q(c=>{"use strict";i(),c.byteLength=C,c.toByteArray=I,c.fromByteArray=T;var s=[],l=[],y=typeof Uint8Array!="undefined"?Uint8Array:Array,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(q=0,v=b.length;q<v;++q)s[q]=b[q],l[b.charCodeAt(q)]=q;var q,v;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function a(d){var h=d.length;if(h%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var g=d.indexOf("=");g===-1&&(g=h);var _=g===h?0:4-g%4;return[g,_]}function C(d){var h=a(d),g=h[0],_=h[1];return(g+_)*3/4-_}function E(d,h,g){return(h+g)*3/4-g}function I(d){var h,g=a(d),_=g[0],B=g[1],A=new y(E(d,_,B)),M=0,j=B>0?_-4:_,O;for(O=0;O<j;O+=4)h=l[d.charCodeAt(O)]<<18|l[d.charCodeAt(O+1)]<<12|l[d.charCodeAt(O+2)]<<6|l[d.charCodeAt(O+3)],A[M++]=h>>16&255,A[M++]=h>>8&255,A[M++]=h&255;return B===2&&(h=l[d.charCodeAt(O)]<<2|l[d.charCodeAt(O+1)]>>4,A[M++]=h&255),B===1&&(h=l[d.charCodeAt(O)]<<10|l[d.charCodeAt(O+1)]<<4|l[d.charCodeAt(O+2)]>>2,A[M++]=h>>8&255,A[M++]=h&255),A}function w(d){return s[d>>18&63]+s[d>>12&63]+s[d>>6&63]+s[d&63]}function x(d,h,g){for(var _,B=[],A=h;A<g;A+=3)_=(d[A]<<16&16711680)+(d[A+1]<<8&65280)+(d[A+2]&255),B.push(w(_));return B.join("")}function T(d){for(var h,g=d.length,_=g%3,B=[],A=16383,M=0,j=g-_;M<j;M+=A)B.push(x(d,M,M+A>j?j:M+A));return _===1?(h=d[g-1],B.push(s[h>>2]+s[h<<4&63]+"==")):_===2&&(h=(d[g-2]<<8)+d[g-1],B.push(s[h>>10]+s[h>>4&63]+s[h<<2&63]+"=")),B.join("")}}),mr=Q(c=>{i(),c.read=function(s,l,y,b,q){var v,a,C=q*8-b-1,E=(1<<C)-1,I=E>>1,w=-7,x=y?q-1:0,T=y?-1:1,d=s[l+x];for(x+=T,v=d&(1<<-w)-1,d>>=-w,w+=C;w>0;v=v*256+s[l+x],x+=T,w-=8);for(a=v&(1<<-w)-1,v>>=-w,w+=b;w>0;a=a*256+s[l+x],x+=T,w-=8);if(v===0)v=1-I;else{if(v===E)return a?NaN:(d?-1:1)*(1/0);a=a+Math.pow(2,b),v=v-I}return(d?-1:1)*a*Math.pow(2,v-b)},c.write=function(s,l,y,b,q,v){var a,C,E,I=v*8-q-1,w=(1<<I)-1,x=w>>1,T=q===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=b?0:v-1,h=b?1:-1,g=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(C=isNaN(l)?1:0,a=w):(a=Math.floor(Math.log(l)/Math.LN2),l*(E=Math.pow(2,-a))<1&&(a--,E*=2),a+x>=1?l+=T/E:l+=T*Math.pow(2,1-x),l*E>=2&&(a++,E/=2),a+x>=w?(C=0,a=w):a+x>=1?(C=(l*E-1)*Math.pow(2,q),a=a+x):(C=l*Math.pow(2,x-1)*Math.pow(2,q),a=0));q>=8;s[y+d]=C&255,d+=h,C/=256,q-=8);for(a=a<<q|C,I+=q;I>0;s[y+d]=a&255,d+=h,a/=256,I-=8);s[y+d-h]|=g*128}}),hr=Q(c=>{"use strict";i();var s=dr(),l=mr(),y=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=a,c.SlowBuffer=B,c.INSPECT_MAX_BYTES=50;var b=2147483647;c.kMaxLength=b,a.TYPED_ARRAY_SUPPORT=q(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function q(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function v(e){if(e>b)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,a.prototype),r}function a(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return C(e,r,t)}a.poolSize=8192;function C(e,r,t){if(typeof e=="string")return x(e,r);if(ArrayBuffer.isView(e))return d(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(F(e,ArrayBuffer)||e&&F(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(F(e,SharedArrayBuffer)||e&&F(e.buffer,SharedArrayBuffer)))return h(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return a.from(o,r,t);var p=g(e);if(p)return p;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,r,t){return C(e,r,t)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function E(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function I(e,r,t){return E(e),e<=0?v(e):r!==void 0?typeof t=="string"?v(e).fill(r,t):v(e).fill(r):v(e)}a.alloc=function(e,r,t){return I(e,r,t)};function w(e){return E(e),v(e<0?0:_(e)|0)}a.allocUnsafe=function(e){return w(e)},a.allocUnsafeSlow=function(e){return w(e)};function x(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!a.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=A(e,r)|0,o=v(t),p=o.write(e,r);return p!==t&&(o=o.slice(0,p)),o}function T(e){for(var r=e.length<0?0:_(e.length)|0,t=v(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function d(e){if(F(e,Uint8Array)){var r=new Uint8Array(e);return h(r.buffer,r.byteOffset,r.byteLength)}return T(e)}function h(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,a.prototype),o}function g(e){if(a.isBuffer(e)){var r=_(e.length)|0,t=v(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||re(e.length)?v(0):T(e);if(e.type==="Buffer"&&Array.isArray(e.data))return T(e.data)}function _(e){if(e>=b)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+b.toString(16)+" bytes");return e|0}function B(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,r){if(F(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),F(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),!a.isBuffer(e)||!a.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,p=0,u=Math.min(t,o);p<u;++p)if(e[p]!==r[p]){t=e[p],o=r[p];break}return t<o?-1:o<t?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=a.allocUnsafe(r),p=0;for(t=0;t<e.length;++t){var u=e[t];if(F(u,Uint8Array))p+u.length>o.length?a.from(u).copy(o,p):Uint8Array.prototype.set.call(o,u,p);else if(a.isBuffer(u))u.copy(o,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=u.length}return o};function A(e,r){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||F(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var p=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ee(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return fe(e).length;default:if(p)return o?-1:ee(e).length;r=(""+r).toLowerCase(),p=!0}}a.byteLength=A;function M(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return We(this,r,t);case"utf8":case"utf-8":return pe(this,r,t);case"ascii":return Ze(this,r,t);case"latin1":case"binary":return Ye(this,r,t);case"base64":return Fe(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $e(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}a.prototype._isBuffer=!0;function j(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)j(this,r,r+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)j(this,r,r+3),j(this,r+1,r+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)j(this,r,r+7),j(this,r+1,r+6),j(this,r+2,r+5),j(this,r+3,r+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?pe(this,0,e):M.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",r=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},y&&(a.prototype[y]=a.prototype.inspect),a.prototype.compare=function(e,r,t,o,p){if(F(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),p===void 0&&(p=this.length),r<0||t>e.length||o<0||p>this.length)throw new RangeError("out of range index");if(o>=p&&r>=t)return 0;if(o>=p)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,p>>>=0,this===e)return 0;for(var u=p-o,m=t-r,L=Math.min(u,m),k=this.slice(o,p),U=e.slice(r,t),N=0;N<L;++N)if(k[N]!==U[N]){u=k[N],m=U[N];break}return u<m?-1:m<u?1:0};function O(e,r,t,o,p){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,re(t)&&(t=p?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(p)return-1;t=e.length-1}else if(t<0)if(p)t=0;else return-1;if(typeof r=="string"&&(r=a.from(r,o)),a.isBuffer(r))return r.length===0?-1:ie(e,r,t,o,p);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):ie(e,[r],t,o,p);throw new TypeError("val must be string, number or Buffer")}function ie(e,r,t,o,p){var u=1,m=e.length,L=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;u=2,m/=2,L/=2,t/=2}function k(de,me){return u===1?de[me]:de.readUInt16BE(me*u)}var U;if(p){var N=-1;for(U=t;U<m;U++)if(k(e,U)===k(r,N===-1?0:U-N)){if(N===-1&&(N=U),U-N+1===L)return N*u}else N!==-1&&(U-=U-N),N=-1}else for(t+L>m&&(t=m-L),U=t;U>=0;U--){for(var R=!0,J=0;J<L;J++)if(k(e,U+J)!==k(r,J)){R=!1;break}if(R)return U}return-1}a.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},a.prototype.indexOf=function(e,r,t){return O(this,e,r,t,!0)},a.prototype.lastIndexOf=function(e,r,t){return O(this,e,r,t,!1)};function Me(e,r,t,o){t=Number(t)||0;var p=e.length-t;o?(o=Number(o),o>p&&(o=p)):o=p;var u=r.length;o>u/2&&(o=u/2);for(var m=0;m<o;++m){var L=parseInt(r.substr(m*2,2),16);if(re(L))return m;e[t+m]=L}return m}function De(e,r,t,o){return H(ee(r,e.length-t),e,t,o)}function je(e,r,t,o){return H(Xe(r),e,t,o)}function Ge(e,r,t,o){return H(fe(r),e,t,o)}function ze(e,r,t,o){return H(Ke(r,e.length-t),e,t,o)}a.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-r;if((t===void 0||t>p)&&(t=p),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var u=!1;;)switch(o){case"hex":return Me(this,e,r,t);case"utf8":case"utf-8":return De(this,e,r,t);case"ascii":case"latin1":case"binary":return je(this,e,r,t);case"base64":return Ge(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ze(this,e,r,t);default:if(u)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),u=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Fe(e,r,t){return r===0&&t===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(r,t))}function pe(e,r,t){t=Math.min(e.length,t);for(var o=[],p=r;p<t;){var u=e[p],m=null,L=u>239?4:u>223?3:u>191?2:1;if(p+L<=t){var k,U,N,R;switch(L){case 1:u<128&&(m=u);break;case 2:k=e[p+1],(k&192)===128&&(R=(u&31)<<6|k&63,R>127&&(m=R));break;case 3:k=e[p+1],U=e[p+2],(k&192)===128&&(U&192)===128&&(R=(u&15)<<12|(k&63)<<6|U&63,R>2047&&(R<55296||R>57343)&&(m=R));break;case 4:k=e[p+1],U=e[p+2],N=e[p+3],(k&192)===128&&(U&192)===128&&(N&192)===128&&(R=(u&15)<<18|(k&63)<<12|(U&63)<<6|N&63,R>65535&&R<1114112&&(m=R))}}m===null?(m=65533,L=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),p+=L}return Ve(o)}var le=4096;function Ve(e){var r=e.length;if(r<=le)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=le));return t}function Ze(e,r,t){var o="";t=Math.min(e.length,t);for(var p=r;p<t;++p)o+=String.fromCharCode(e[p]&127);return o}function Ye(e,r,t){var o="";t=Math.min(e.length,t);for(var p=r;p<t;++p)o+=String.fromCharCode(e[p]);return o}function We(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var p="",u=r;u<t;++u)p+=Qe[e[u]];return p}function $e(e,r,t){for(var o=e.slice(r,t),p="",u=0;u<o.length-1;u+=2)p+=String.fromCharCode(o[u]+o[u+1]*256);return p}a.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,a.prototype),o};function S(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||S(e,r,this.length);for(var o=this[e],p=1,u=0;++u<r&&(p*=256);)o+=this[e+u]*p;return o},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||S(e,r,this.length);for(var o=this[e+--r],p=1;r>0&&(p*=256);)o+=this[e+--r]*p;return o},a.prototype.readUint8=a.prototype.readUInt8=function(e,r){return e=e>>>0,r||S(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||S(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||S(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||S(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||S(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||S(e,r,this.length);for(var o=this[e],p=1,u=0;++u<r&&(p*=256);)o+=this[e+u]*p;return p*=128,o>=p&&(o-=Math.pow(2,8*r)),o},a.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||S(e,r,this.length);for(var o=r,p=1,u=this[e+--o];o>0&&(p*=256);)u+=this[e+--o]*p;return p*=128,u>=p&&(u-=Math.pow(2,8*r)),u},a.prototype.readInt8=function(e,r){return e=e>>>0,r||S(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,r){e=e>>>0,r||S(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},a.prototype.readInt16BE=function(e,r){e=e>>>0,r||S(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},a.prototype.readInt32LE=function(e,r){return e=e>>>0,r||S(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,r){return e=e>>>0,r||S(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,r){return e=e>>>0,r||S(e,4,this.length),l.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,r){return e=e>>>0,r||S(e,4,this.length),l.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||S(e,8,this.length),l.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||S(e,8,this.length),l.read(this,e,!1,52,8)};function D(e,r,t,o,p,u){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>p||r<u)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var p=Math.pow(2,8*t)-1;D(this,e,r,t,p,0)}var u=1,m=0;for(this[r]=e&255;++m<t&&(u*=256);)this[r+m]=e/u&255;return r+t},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var p=Math.pow(2,8*t)-1;D(this,e,r,t,p,0)}var u=t-1,m=1;for(this[r+u]=e&255;--u>=0&&(m*=256);)this[r+u]=e/m&255;return r+t},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,255,0),this[r]=e&255,r+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},a.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var p=Math.pow(2,8*t-1);D(this,e,r,t,p-1,-p)}var u=0,m=1,L=0;for(this[r]=e&255;++u<t&&(m*=256);)e<0&&L===0&&this[r+u-1]!==0&&(L=1),this[r+u]=(e/m>>0)-L&255;return r+t},a.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var p=Math.pow(2,8*t-1);D(this,e,r,t,p-1,-p)}var u=t-1,m=1,L=0;for(this[r+u]=e&255;--u>=0&&(m*=256);)e<0&&L===0&&this[r+u+1]!==0&&(L=1),this[r+u]=(e/m>>0)-L&255;return r+t},a.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},a.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},a.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},a.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},a.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||D(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ue(e,r,t,o,p,u){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function se(e,r,t,o,p){return r=+r,t=t>>>0,p||ue(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}a.prototype.writeFloatLE=function(e,r,t){return se(this,e,r,!0,t)},a.prototype.writeFloatBE=function(e,r,t){return se(this,e,r,!1,t)};function ce(e,r,t,o,p){return r=+r,t=t>>>0,p||ue(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}a.prototype.writeDoubleLE=function(e,r,t){return ce(this,e,r,!0,t)},a.prototype.writeDoubleBE=function(e,r,t){return ce(this,e,r,!1,t)},a.prototype.copy=function(e,r,t,o){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var p=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),p},a.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!a.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var p=e.charCodeAt(0);(o==="utf8"&&p<128||o==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var u;if(typeof e=="number")for(u=r;u<t;++u)this[u]=e;else{var m=a.isBuffer(e)?e:a.from(e,o),L=m.length;if(L===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(u=0;u<t-r;++u)this[u+r]=m[u%L]}return this};var He=/[^+/0-9A-Za-z-_]/g;function Je(e){if(e=e.split("=")[0],e=e.trim().replace(He,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ee(e,r){r=r||1/0;for(var t,o=e.length,p=null,u=[],m=0;m<o;++m){if(t=e.charCodeAt(m),t>55295&&t<57344){if(!p){if(t>56319){(r-=3)>-1&&u.push(239,191,189);continue}else if(m+1===o){(r-=3)>-1&&u.push(239,191,189);continue}p=t;continue}if(t<56320){(r-=3)>-1&&u.push(239,191,189),p=t;continue}t=(p-55296<<10|t-56320)+65536}else p&&(r-=3)>-1&&u.push(239,191,189);if(p=null,t<128){if((r-=1)<0)break;u.push(t)}else if(t<2048){if((r-=2)<0)break;u.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;u.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;u.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return u}function Xe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Ke(e,r){for(var t,o,p,u=[],m=0;m<e.length&&!((r-=2)<0);++m)t=e.charCodeAt(m),o=t>>8,p=t%256,u.push(p),u.push(o);return u}function fe(e){return s.toByteArray(Je(e))}function H(e,r,t,o){for(var p=0;p<o&&!(p+t>=r.length||p>=e.length);++p)r[p+t]=e[p];return p}function F(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function re(e){return e!==e}var Qe=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,p=0;p<16;++p)r[o+p]=e[t]+e[p];return r}()}),_r=Q((c,s)=>{i();var l=s.exports={},y,b;function q(){throw new Error("setTimeout has not been defined")}function v(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?y=setTimeout:y=q}catch(_){y=q}try{typeof clearTimeout=="function"?b=clearTimeout:b=v}catch(_){b=v}})();function a(_){if(y===setTimeout)return setTimeout(_,0);if((y===q||!y)&&setTimeout)return y=setTimeout,setTimeout(_,0);try{return y(_,0)}catch(B){try{return y.call(null,_,0)}catch(A){return y.call(this,_,0)}}}function C(_){if(b===clearTimeout)return clearTimeout(_);if((b===v||!b)&&clearTimeout)return b=clearTimeout,clearTimeout(_);try{return b(_)}catch(B){try{return b.call(null,_)}catch(A){return b.call(this,_)}}}var E=[],I=!1,w,x=-1;function T(){!I||!w||(I=!1,w.length?E=w.concat(E):x=-1,E.length&&d())}function d(){if(!I){var _=a(T);I=!0;for(var B=E.length;B;){for(w=E,E=[];++x<B;)w&&w[x].run();x=-1,B=E.length}w=null,I=!1,C(_)}}l.nextTick=function(_){var B=new Array(arguments.length-1);if(arguments.length>1)for(var A=1;A<arguments.length;A++)B[A-1]=arguments[A];E.push(new h(_,B)),E.length===1&&!I&&a(d)};function h(_,B){this.fun=_,this.array=B}h.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function g(){}l.on=g,l.addListener=g,l.once=g,l.off=g,l.removeListener=g,l.removeAllListeners=g,l.emit=g,l.prependListener=g,l.prependOnceListener=g,l.listeners=function(_){return[]},l.binding=function(_){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(_){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),gr,br,yr,i=sr(()=>{gr=f(hr()),br=f(_r()),yr=function(c){function s(){var y=this||self;return delete c.prototype.__magic__,y}if(typeof globalThis=="object")return globalThis;if(this)return s();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:s});var l=__magic__;return l}(Object)}),Ue={};cr(Ue,{FeeAccordion:()=>ot});Oe.exports=fr(Ue);i();var G=f(n("react")),be=n("@fortawesome/free-solid-svg-icons"),ye=n("@fortawesome/react-fontawesome"),vr=n("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),ve=f(n("classnames")),wr=f(n("react-collapsed"));i();var qr=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qr));var z={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};i();i();var Ce=f(n("react"));i();var Er=f(n("react")),nt=(0,Er.createContext)({});i();i();var xr=f(n("react")),at=n("@terradharitri/sdk-dapp/constants/index"),it=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),pt=f(n("bignumber.js")),lt=n("formik");i();i();i();var ut=n("bech32");i();i();i();var Te=(c,s)=>typeof s=="boolean"?s:Array.isArray(s)&&s.includes(c);i();i();var st=n("@terradharitri/sdk-dapp/types/tokens.types");i();i();var ct=n("@terradharitri/sdk-dapp/constants"),ft=n("@terradharitri/sdk-dapp/utils/account/getAccount");i();i();var dt=n("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");i();var mt=n("@terradharitri/sdk-dapp/utils/buildUrlParams");i();var ht=f(n("anchorme"));i();i();var _t=n("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ne=n("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ar=n("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),gt=n("@terradharitri/sdk-dapp/utils/operations/parseAmount");i();i();i();i();i();i();i();var Lr=f(n("react")),bt=n("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),yt=n("formik");i();i();var vt=n("@terradharitri/sdk-dapp/constants/index"),wt=n("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),qt=f(n("bignumber.js"));i();i();var te=n("@terradharitri/sdk-dapp/constants/index");function Br({feeLimit:c,rewaPriceInUsd:s}){let l=(0,Ne.formatAmount)({input:c,decimals:te.DECIMALS,digits:te.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Ar.getUsdValue)({amount:l,usd:s,decimals:te.DIGITS})}`}i();var Et=n("@terradharitri/sdk-dapp/constants/index");i();i();var Ir="0";i();var xt=n("@terradharitri/sdk-dapp/constants/index"),At=f(n("bignumber.js"));i();var Lt=n("@terradharitri/sdk-dapp/constants/index");i();var Bt=n("@terradharitri/sdk-dapp/constants/index");i();i();var It=n("@terradharitri/sdk-core"),Ut=n("@terradharitri/sdk-dapp/constants/index"),Ct=f(n("bignumber.js"));i();i();var Tt=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");i();var Nt=n("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");i();var St=f(n("bignumber.js"));i();var kt=n("@terradharitri/sdk-dapp/constants/index"),Pt=n("@terradharitri/sdk-dapp/utils/smartContracts"),Ot=n("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Rt=f(n("bignumber.js"));i();var Mt=f(n("bignumber.js"));i();i();var Dt=f(n("axios"));i();i();i();var jt=n("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");i();var Gt=n("@terradharitri/sdk-dapp/constants/index");i();i();i();var oe=n("@terradharitri/sdk-dapp/constants/index"),Ur=f(n("bignumber.js")),we,qe,Ee,Se=(0,Ne.formatAmount)({input:String((we=oe.GAS_PRICE)!=null?we:1e9),decimals:(qe=oe.DECIMALS)!=null?qe:18,showLastNonZeroDecimal:!0,digits:(Ee=oe.DIGITS)!=null?Ee:4}),zt=new Ur.default(Se).times(10).toString(10);i();var Ft=n("@terradharitri/sdk-dapp/constants/index"),Vt=f(n("bignumber.js"));i();var Zt=f(n("bignumber.js"));i();i();var Yt=n("yup");i();var xe=n("@terradharitri/sdk-dapp/constants/ledger.constants"),Cr=f(n("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),ne=n("yup"),Tr=(0,ne.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(c){let{ledger:s}=this.parent;return!(s&&c&&c.length&&!s.ledgerDataActive)}),Nr=(0,ne.string)().test({name:"hashSign",test:function(c){let{ledger:s,isGuarded:l}=this.parent;if(s){let{ledgerWithHashSign:y,ledgerWithGuardians:b}=(0,Cr.default)(s.version);if(c&&c.length>300&&!y)return this.createError({message:`Data too long. You need at least DharitrI app version ${xe.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!b)return this.createError({message:`You need at least DharitrI app version ${xe.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Sr=[Tr,Nr],Wt=Sr.reduce((c,s)=>c.concat(s),(0,ne.string)());i();var $t=n("@terradharitri/sdk-dapp/constants/index"),Ht=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Jt=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Xt=n("yup");i();var Kt=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Qt=f(n("bignumber.js")),eo=n("yup");i();var ro=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),to=f(n("bignumber.js")),oo=n("yup");i();var no=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ao=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),io=f(n("bignumber.js")),po=n("yup");i();var lo=f(n("bignumber.js")),uo=n("yup");i();var so=n("@terradharitri/sdk-dapp/constants/index"),co=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),fo=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),mo=f(n("bignumber.js")),ho=n("yup");i();var _o=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),go=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),bo=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),yo=f(n("bignumber.js")),vo=n("yup");i();var wo=f(n("bignumber.js")),qo=n("yup");i();var Eo=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),xo=n("yup");i();var Ao=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Lo=n("yup");i();i();var Bo=(0,Lr.createContext)({});i();i();var kr=f(n("react")),Io=n("formik"),Uo=f(n("lodash/uniqBy"));i();i();i();var Co=f(n("axios"));i();i();var To=f(n("axios"));i();i();var No=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),So=n("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),ko=f(n("axios")),Po=f(n("lodash/uniqBy"));i();var Oo=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ro=f(n("axios"));i();var Mo=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),Do=f(n("axios"));i();i();var ke=f(n("react")),Pr=(0,ke.createContext)({});function Or(){return(0,ke.useContext)(Pr)}i();i();var jo=n("react"),Go=n("@terradharitri/sdk-dapp/constants/index"),zo=n("@terradharitri/sdk-dapp/types/enums.types");i();var Fo=(0,kr.createContext)({});i();i();var Vo=n("@terradharitri/sdk-dapp/constants/index"),Zo=n("formik");i();i();var Rr=f(n("react")),Yo=n("@terradharitri/sdk-dapp/constants/index"),Wo=n("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),$o=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ho=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Jo=f(n("bignumber.js")),Xo=n("formik");i();i();i();i();var Ko=f(n("bignumber.js"));i();var Qo=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),en=f(n("bignumber.js"));i();i();var rn=n("react"),tn=n("@terradharitri/sdk-dapp/constants/index"),on=n("@terradharitri/sdk-dapp/utils/smartContracts"),nn=f(n("bignumber.js")),an=n("formik");i();var pn=n("react");i();i();var ln=n("@terradharitri/sdk-dapp/constants/index"),un=f(n("bignumber.js")),sn=(0,Rr.createContext)({}),cn=(0,xr.createContext)({});i();i();var Mr=f(n("react")),fn=n("formik"),dn=(0,Mr.createContext)({});i();i();var Dr=f(n("react")),mn=n("formik");i();i();i();var hn=n("react"),_n=n("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),gn=f(n("lodash/uniqBy"));i();i();var bn=n("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),yn=n("@terradharitri/sdk-dapp/utils");i();var vn=n("react");i();var wn=n("react"),qn=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),En=(0,Dr.createContext)({});i();i();var jr=f(n("react")),xn=n("formik");i();i();i();i();i();var An=n("react"),Ln=n("@terradharitri/sdk-dapp/utils");i();var Bn=n("react"),In=n("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");i();i();var Un=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Cn=f(n("axios"));i();var Tn=f(n("axios")),Nn=(0,jr.createContext)({}),Gr=(0,Ce.createContext)({});function ae(){return(0,Ce.useContext)(Gr)}i();var V=f(n("react")),zr=n("@fortawesome/free-solid-svg-icons"),Fr=n("@fortawesome/react-fontawesome"),Vr=f(n("bignumber.js")),Ae=f(n("classnames")),Zr=n("react-number-format");i();i();var Sn=n("@terradharitri/sdk-dapp/constants/index"),kn=n("@terradharitri/sdk-dapp/utils/validation"),Pn=f(n("bignumber.js"));i();i();var On=n("react");i();var Yr=f(n("bignumber.js")),Pe=c=>{let[s,l]=c.split(""),y=new Yr.default(s).isZero();return Boolean(y&&l&&l!==".")};i();var Wr=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wr));var P={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},$r=()=>{let{formInfo:c,gasInfo:s}=ae(),{readonly:l}=c,{defaultGasLimit:y,onResetGasLimit:b,onChangeGasLimit:q,onBlurGasLimit:v,gasLimit:a,gasLimitError:C,isGasLimitInvalid:E}=s,I=h=>{h.preventDefault(),b()},w=({value:h,floatValue:g})=>(!g||!(0,Vr.default)(g).isNaN())&&!Pe(h),x=h=>{q(h.value,!0)},T=a!==y&&!l,d=Te("gasLimit",l);return V.default.createElement("div",{className:P.gas},V.default.createElement("label",{className:z.label,htmlFor:"gasLimit"},"Gas Limit"),V.default.createElement("div",{className:P.wrapper},V.default.createElement(Zr.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:d,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:v,onValueChange:x,required:!0,isAllowed:w,thousandSeparator:",",thousandsGroupStyle:"thousand",value:a,valueIsNumericString:!0,allowNegative:!1,className:(0,Ae.default)(z.input,P.input,{[z.disabled]:d,[z.invalid]:E,[P.spaced]:T})}),T&&V.default.createElement("div",{className:P.actions},V.default.createElement("div",{onClick:I,"data-testid":"gasLimitResetBtn",className:(0,Ae.default)(P.action,{[P.disabled]:d})},V.default.createElement(Fr.FontAwesomeIcon,{icon:zr.faUndo,className:P.icon}))),E&&V.default.createElement("div",{className:z.error,"data-testid":"gasLimitError"},C)))};i();i();var Z=f(n("react")),Hr=n("@fortawesome/free-solid-svg-icons"),Jr=n("@fortawesome/react-fontawesome"),Xr=f(n("bignumber.js")),Le=f(n("classnames")),Kr=n("react-number-format");i();var Rn=f(n("react")),Mn=n("@terradharitri/sdk-dapp/constants/index"),Qr=()=>{let{networkConfig:c}=Or(),{gasInfo:s,formInfo:l}=ae(),{readonly:y}=l,{rewaLabel:b}=c,{gasPrice:q,gasPriceError:v,isGasPriceInvalid:a,onChangeGasPrice:C,onBlurGasPrice:E,onResetGasPrice:I}=s,w=q!==Se&&!y,x=Te("gasPrice",y),T=({value:g,floatValue:_})=>(!_||!(0,Xr.default)(_).isNaN())&&!Pe(g),d=g=>{g.preventDefault(),I()},h=g=>{C(g.value,!0)};return Z.default.createElement("div",{className:P.gas},Z.default.createElement("label",{className:z.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),Z.default.createElement("div",{className:P.wrapper},Z.default.createElement(Kr.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:x,id:"gasPrice",inputMode:"decimal",isAllowed:T,name:"gasPrice",onBlur:E,onValueChange:h,required:!0,suffix:` ${b}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:q,valueIsNumericString:!0,allowNegative:!1,className:(0,Le.default)(z.input,P.input,{[z.disabled]:x,[z.invalid]:a,[P.spaced]:w})}),w&&Z.default.createElement("div",{className:P.actions},Z.default.createElement("div",{onClick:d,className:(0,Le.default)(P.action,{[P.disabled]:x})},Z.default.createElement(Jr.FontAwesomeIcon,{icon:Hr.faUndo,className:P.icon})))),a&&Z.default.createElement("div",{className:z.error,"data-testid":"gasPriceError"},v))};i();var et=f(n("react"));i();var rt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rt));var Y={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"},tt=({feeLimit:c,rewaPriceInUsd:s})=>c===Ir?null:et.default.createElement("span",{className:Y.fiat,"data-testid":"feeInFiat"},"(",Br({feeLimit:c,rewaPriceInUsd:s}),")"),ot=({className:c})=>{let{gasInfo:s,tokensInfo:l}=ae(),{feeLimit:y,gasCostLoading:b,gasPriceError:q,gasLimitError:v}=s,{rewaPriceInUsd:a,rewaLabel:C}=l,[E,I]=(0,G.useState)(Boolean(q||v)),{getCollapseProps:w,getToggleProps:x}=(0,wr.default)({isExpanded:E}),T=()=>{I(d=>!d)};return G.default.createElement("div",{className:(0,ve.default)(Y.fee,c)},G.default.createElement("label",{className:z.label},"Fee"),G.default.createElement("div",ge({className:Y.trigger},x({onClick:T})),G.default.createElement("span",{className:Y.limit,"data-testid":"feeLimit"},G.default.createElement(vr.FormatAmount,{value:y,showLastNonZeroDecimal:!0,rewaLabel:C})),b&&G.default.createElement(ye.FontAwesomeIcon,{icon:be.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),G.default.createElement(tt,{rewaPriceInUsd:a,feeLimit:y}),G.default.createElement(ye.FontAwesomeIcon,{icon:be.faChevronRight,className:(0,ve.default)(Y.arrow,{[Y.active]:E})})),G.default.createElement("div",ge({className:Y.expandable},w()),G.default.createElement("div",{className:Y.content},G.default.createElement(Qr,null),G.default.createElement($r,null))))};});var $={};K();X($,rr(Re()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
