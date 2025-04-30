"use strict";import{a as O,b as ze,d as K,e as Fe,f as G}from"../../../../../__chunks__/chunk-RGFNPOTZ.js";var Ae=ze((kt,xe)=>{"use strict";G();var Ze=Object.create,W=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Ge=Object.getOwnPropertyNames,se=Object.getOwnPropertySymbols,He=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,ce=(f,l,p)=>l in f?W(f,l,{enumerable:!0,configurable:!0,writable:!0,value:p}):f[l]=p,Qe=(f,l)=>{for(var p in l||(l={}))he.call(l,p)&&ce(f,p,l[p]);if(se)for(var p of se(l))Je.call(l,p)&&ce(f,p,l[p]);return f},me=(f,l)=>()=>(f&&(l=f(f=0)),l),Q=(f,l)=>()=>(l||f((l={exports:{}}).exports,l),l.exports),ge=(f,l)=>{for(var p in l)W(f,p,{get:l[p],enumerable:!0})},be=(f,l,p,v)=>{if(l&&typeof l=="object"||typeof l=="function")for(let h of Ge(l))!he.call(f,h)&&h!==p&&W(f,h,{get:()=>l[h],enumerable:!(v=Ke(l,h))||v.enumerable});return f},z=(f,l,p)=>(p=f!=null?Ze(He(f)):{},be(l||!f||!f.__esModule?W(p,"default",{value:f,enumerable:!0}):p,f)),ye=f=>be(W({},"__esModule",{value:!0}),f),Ve=Q(f=>{"use strict";w(),f.byteLength=T,f.toByteArray=U,f.fromByteArray=B;var l=[],p=[],v=typeof Uint8Array!="undefined"?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(y=0,m=h.length;y<m;++y)l[y]=h[y],p[h.charCodeAt(y)]=y;var y,m;p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63;function n(u){var c=u.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var g=u.indexOf("=");g===-1&&(g=c);var d=g===c?0:4-g%4;return[g,d]}function T(u){var c=n(u),g=c[0],d=c[1];return(g+d)*3/4-d}function b(u,c,g){return(c+g)*3/4-g}function U(u){var c,g=n(u),d=g[0],x=g[1],E=new v(b(u,d,x)),M=0,P=x>0?d-4:d,S;for(S=0;S<P;S+=4)c=p[u.charCodeAt(S)]<<18|p[u.charCodeAt(S+1)]<<12|p[u.charCodeAt(S+2)]<<6|p[u.charCodeAt(S+3)],E[M++]=c>>16&255,E[M++]=c>>8&255,E[M++]=c&255;return x===2&&(c=p[u.charCodeAt(S)]<<2|p[u.charCodeAt(S+1)]>>4,E[M++]=c&255),x===1&&(c=p[u.charCodeAt(S)]<<10|p[u.charCodeAt(S+1)]<<4|p[u.charCodeAt(S+2)]>>2,E[M++]=c>>8&255,E[M++]=c&255),E}function _(u){return l[u>>18&63]+l[u>>12&63]+l[u>>6&63]+l[u&63]}function A(u,c,g){for(var d,x=[],E=c;E<g;E+=3)d=(u[E]<<16&16711680)+(u[E+1]<<8&65280)+(u[E+2]&255),x.push(_(d));return x.join("")}function B(u){for(var c,g=u.length,d=g%3,x=[],E=16383,M=0,P=g-d;M<P;M+=E)x.push(A(u,M,M+E>P?P:M+E));return d===1?(c=u[g-1],x.push(l[c>>2]+l[c<<4&63]+"==")):d===2&&(c=(u[g-2]<<8)+u[g-1],x.push(l[c>>10]+l[c>>4&63]+l[c<<2&63]+"=")),x.join("")}}),Xe=Q(f=>{w(),f.read=function(l,p,v,h,y){var m,n,T=y*8-h-1,b=(1<<T)-1,U=b>>1,_=-7,A=v?y-1:0,B=v?-1:1,u=l[p+A];for(A+=B,m=u&(1<<-_)-1,u>>=-_,_+=T;_>0;m=m*256+l[p+A],A+=B,_-=8);for(n=m&(1<<-_)-1,m>>=-_,_+=h;_>0;n=n*256+l[p+A],A+=B,_-=8);if(m===0)m=1-U;else{if(m===b)return n?NaN:(u?-1:1)*(1/0);n=n+Math.pow(2,h),m=m-U}return(u?-1:1)*n*Math.pow(2,m-h)},f.write=function(l,p,v,h,y,m){var n,T,b,U=m*8-y-1,_=(1<<U)-1,A=_>>1,B=y===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=h?0:m-1,c=h?1:-1,g=p<0||p===0&&1/p<0?1:0;for(p=Math.abs(p),isNaN(p)||p===1/0?(T=isNaN(p)?1:0,n=_):(n=Math.floor(Math.log(p)/Math.LN2),p*(b=Math.pow(2,-n))<1&&(n--,b*=2),n+A>=1?p+=B/b:p+=B*Math.pow(2,1-A),p*b>=2&&(n++,b/=2),n+A>=_?(T=0,n=_):n+A>=1?(T=(p*b-1)*Math.pow(2,y),n=n+A):(T=p*Math.pow(2,A-1)*Math.pow(2,y),n=0));y>=8;l[v+u]=T&255,u+=c,T/=256,y-=8);for(n=n<<y|T,U+=y;U>0;l[v+u]=n&255,u+=c,n/=256,U-=8);l[v+u-c]|=g*128}}),et=Q(f=>{"use strict";w();var l=Ve(),p=Xe(),v=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;f.Buffer=n,f.SlowBuffer=x,f.INSPECT_MAX_BYTES=50;var h=2147483647;f.kMaxLength=h,n.TYPED_ARRAY_SUPPORT=y(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>h)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,n.prototype),t}function n(e,t,r){if(typeof e=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _(e)}return T(e,t,r)}n.poolSize=8192;function T(e,t,r){if(typeof e=="string")return A(e,t);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(D(e,ArrayBuffer)||e&&D(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(D(e,SharedArrayBuffer)||e&&D(e.buffer,SharedArrayBuffer)))return c(e,t,r);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,t,r);var i=g(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,t,r){return T(e,t,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function b(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function U(e,t,r){return b(e),e<=0?m(e):t!==void 0?typeof r=="string"?m(e).fill(t,r):m(e).fill(t):m(e)}n.alloc=function(e,t,r){return U(e,t,r)};function _(e){return b(e),m(e<0?0:d(e)|0)}n.allocUnsafe=function(e){return _(e)},n.allocUnsafeSlow=function(e){return _(e)};function A(e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!n.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=E(e,t)|0,o=m(r),i=o.write(e,t);return i!==r&&(o=o.slice(0,i)),o}function B(e){for(var t=e.length<0?0:d(e.length)|0,r=m(t),o=0;o<t;o+=1)r[o]=e[o]&255;return r}function u(e){if(D(e,Uint8Array)){var t=new Uint8Array(e);return c(t.buffer,t.byteOffset,t.byteLength)}return B(e)}function c(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return t===void 0&&r===void 0?o=new Uint8Array(e):r===void 0?o=new Uint8Array(e,t):o=new Uint8Array(e,t,r),Object.setPrototypeOf(o,n.prototype),o}function g(e){if(n.isBuffer(e)){var t=d(e.length)|0,r=m(t);return r.length===0||e.copy(r,0,0,t),r}if(e.length!==void 0)return typeof e.length!="number"||X(e.length)?m(0):B(e);if(e.type==="Buffer"&&Array.isArray(e.data))return B(e.data)}function d(e){if(e>=h)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+h.toString(16)+" bytes");return e|0}function x(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,t){if(D(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),D(t,Uint8Array)&&(t=n.from(t,t.offset,t.byteLength)),!n.isBuffer(e)||!n.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,o=t.length,i=0,a=Math.min(r,o);i<a;++i)if(e[i]!==t[i]){r=e[i],o=t[i];break}return r<o?-1:o<r?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var o=n.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(D(a,Uint8Array))i+a.length>o.length?n.from(a).copy(o,i):Uint8Array.prototype.set.call(o,a,i);else if(n.isBuffer(a))a.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return o};function E(e,t){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||D(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return le(e).length;default:if(i)return o?-1:V(e).length;t=(""+t).toLowerCase(),i=!0}}n.byteLength=E;function M(e,t,r){var o=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,t>>>=0,r<=t))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ne(this,t,r);case"utf8":case"utf-8":return oe(this,t,r);case"ascii":return Oe(this,t,r);case"latin1":case"binary":return Se(this,t,r);case"base64":return Ce(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Re(this,t,r);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function P(e,t,r){var o=e[t];e[t]=e[r],e[r]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?oe(this,0,e):M.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",t=f.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(n.prototype[v]=n.prototype.inspect),n.prototype.compare=function(e,t,r,o,i){if(D(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),t<0||r>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&t>=r)return 0;if(o>=i)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var a=i-o,s=r-t,k=Math.min(a,s),N=this.slice(o,i),L=e.slice(t,r),C=0;C<k;++C)if(N[C]!==L[C]){a=N[C],s=L[C];break}return a<s?-1:s<a?1:0};function S(e,t,r,o,i){if(e.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,X(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof t=="string"&&(t=n.from(t,o)),n.isBuffer(t))return t.length===0?-1:re(e,t,r,o,i);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):re(e,[t],r,o,i);throw new TypeError("val must be string, number or Buffer")}function re(e,t,r,o,i){var a=1,s=e.length,k=t.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||t.length<2)return-1;a=2,s/=2,k/=2,r/=2}function N(fe,ue){return a===1?fe[ue]:fe.readUInt16BE(ue*a)}var L;if(i){var C=-1;for(L=r;L<s;L++)if(N(e,L)===N(t,C===-1?0:L-C)){if(C===-1&&(C=L),L-C+1===k)return C*a}else C!==-1&&(L-=L-C),C=-1}else for(r+k>s&&(r=s-k),L=r;L>=0;L--){for(var j=!0,Z=0;Z<k;Z++)if(N(e,L+Z)!==N(t,Z)){j=!1;break}if(j)return L}return-1}n.prototype.includes=function(e,t,r){return this.indexOf(e,t,r)!==-1},n.prototype.indexOf=function(e,t,r){return S(this,e,t,r,!0)},n.prototype.lastIndexOf=function(e,t,r){return S(this,e,t,r,!1)};function Be(e,t,r,o){r=Number(r)||0;var i=e.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var a=t.length;o>a/2&&(o=a/2);for(var s=0;s<o;++s){var k=parseInt(t.substr(s*2,2),16);if(X(k))return s;e[r+s]=k}return s}function ke(e,t,r,o){return $(V(t,e.length-r),e,r,o)}function Te(e,t,r,o){return $(je(t),e,r,o)}function Le(e,t,r,o){return $(le(t),e,r,o)}function Ue(e,t,r,o){return $(qe(t,e.length-r),e,r,o)}n.prototype.write=function(e,t,r,o){if(t===void 0)o="utf8",r=this.length,t=0;else if(r===void 0&&typeof t=="string")o=t,r=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-t;if((r===void 0||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var a=!1;;)switch(o){case"hex":return Be(this,e,t,r);case"utf8":case"utf-8":return ke(this,e,t,r);case"ascii":case"latin1":case"binary":return Te(this,e,t,r);case"base64":return Le(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ue(this,e,t,r);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ce(e,t,r){return t===0&&r===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(t,r))}function oe(e,t,r){r=Math.min(e.length,r);for(var o=[],i=t;i<r;){var a=e[i],s=null,k=a>239?4:a>223?3:a>191?2:1;if(i+k<=r){var N,L,C,j;switch(k){case 1:a<128&&(s=a);break;case 2:N=e[i+1],(N&192)===128&&(j=(a&31)<<6|N&63,j>127&&(s=j));break;case 3:N=e[i+1],L=e[i+2],(N&192)===128&&(L&192)===128&&(j=(a&15)<<12|(N&63)<<6|L&63,j>2047&&(j<55296||j>57343)&&(s=j));break;case 4:N=e[i+1],L=e[i+2],C=e[i+3],(N&192)===128&&(L&192)===128&&(C&192)===128&&(j=(a&15)<<18|(N&63)<<12|(L&63)<<6|C&63,j>65535&&j<1114112&&(s=j))}}s===null?(s=65533,k=1):s>65535&&(s-=65536,o.push(s>>>10&1023|55296),s=56320|s&1023),o.push(s),i+=k}return Ie(o)}var ne=4096;function Ie(e){var t=e.length;if(t<=ne)return String.fromCharCode.apply(String,e);for(var r="",o=0;o<t;)r+=String.fromCharCode.apply(String,e.slice(o,o+=ne));return r}function Oe(e,t,r){var o="";r=Math.min(e.length,r);for(var i=t;i<r;++i)o+=String.fromCharCode(e[i]&127);return o}function Se(e,t,r){var o="";r=Math.min(e.length,r);for(var i=t;i<r;++i)o+=String.fromCharCode(e[i]);return o}function Ne(e,t,r){var o=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>o)&&(r=o);for(var i="",a=t;a<r;++a)i+=De[e[a]];return i}function Re(e,t,r){for(var o=e.slice(t,r),i="",a=0;a<o.length-1;a+=2)i+=String.fromCharCode(o[a]+o[a+1]*256);return i}n.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),t<e&&(t=e);var o=this.subarray(e,t);return Object.setPrototypeOf(o,n.prototype),o};function I(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||I(e,t,this.length);for(var o=this[e],i=1,a=0;++a<t&&(i*=256);)o+=this[e+a]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||I(e,t,this.length);for(var o=this[e+--t],i=1;t>0&&(i*=256);)o+=this[e+--t]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,t){return e=e>>>0,t||I(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||I(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||I(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,t,r){e=e>>>0,t=t>>>0,r||I(e,t,this.length);for(var o=this[e],i=1,a=0;++a<t&&(i*=256);)o+=this[e+a]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},n.prototype.readIntBE=function(e,t,r){e=e>>>0,t=t>>>0,r||I(e,t,this.length);for(var o=t,i=1,a=this[e+--o];o>0&&(i*=256);)a+=this[e+--o]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*t)),a},n.prototype.readInt8=function(e,t){return e=e>>>0,t||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,t){e=e>>>0,t||I(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(e,t){e=e>>>0,t||I(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(e,t){return e=e>>>0,t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,t){return e=e>>>0,t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,t){return e=e>>>0,t||I(e,4,this.length),p.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,t){return e=e>>>0,t||I(e,4,this.length),p.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||I(e,8,this.length),p.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||I(e,8,this.length),p.read(this,e,!1,52,8)};function q(e,t,r,o,i,a){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(r+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var i=Math.pow(2,8*r)-1;q(this,e,t,r,i,0)}var a=1,s=0;for(this[t]=e&255;++s<r&&(a*=256);)this[t+s]=e/a&255;return t+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,r=r>>>0,!o){var i=Math.pow(2,8*r)-1;q(this,e,t,r,i,0)}var a=r-1,s=1;for(this[t+a]=e&255;--a>=0&&(s*=256);)this[t+a]=e/s&255;return t+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,1,255,0),this[t]=e&255,t+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},n.prototype.writeIntLE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var i=Math.pow(2,8*r-1);q(this,e,t,r,i-1,-i)}var a=0,s=1,k=0;for(this[t]=e&255;++a<r&&(s*=256);)e<0&&k===0&&this[t+a-1]!==0&&(k=1),this[t+a]=(e/s>>0)-k&255;return t+r},n.prototype.writeIntBE=function(e,t,r,o){if(e=+e,t=t>>>0,!o){var i=Math.pow(2,8*r-1);q(this,e,t,r,i-1,-i)}var a=r-1,s=1,k=0;for(this[t+a]=e&255;--a>=0&&(s*=256);)e<0&&k===0&&this[t+a+1]!==0&&(k=1),this[t+a]=(e/s>>0)-k&255;return t+r},n.prototype.writeInt8=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},n.prototype.writeInt16LE=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},n.prototype.writeInt16BE=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},n.prototype.writeInt32LE=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},n.prototype.writeInt32BE=function(e,t,r){return e=+e,t=t>>>0,r||q(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ie(e,t,r,o,i,a){if(r+o>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function ae(e,t,r,o,i){return t=+t,r=r>>>0,i||ie(e,t,r,4,34028234663852886e22,-34028234663852886e22),p.write(e,t,r,o,23,4),r+4}n.prototype.writeFloatLE=function(e,t,r){return ae(this,e,t,!0,r)},n.prototype.writeFloatBE=function(e,t,r){return ae(this,e,t,!1,r)};function pe(e,t,r,o,i){return t=+t,r=r>>>0,i||ie(e,t,r,8,17976931348623157e292,-17976931348623157e292),p.write(e,t,r,o,52,8),r+8}n.prototype.writeDoubleLE=function(e,t,r){return pe(this,e,t,!0,r)},n.prototype.writeDoubleBE=function(e,t,r){return pe(this,e,t,!1,r)},n.prototype.copy=function(e,t,r,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);var i=o-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),t),i},n.prototype.fill=function(e,t,r,o){if(typeof e=="string"){if(typeof t=="string"?(o=t,t=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t=t>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var a;if(typeof e=="number")for(a=t;a<r;++a)this[a]=e;else{var s=n.isBuffer(e)?e:n.from(e,o),k=s.length;if(k===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<r-t;++a)this[a+t]=s[a%k]}return this};var Me=/[^+/0-9A-Za-z-_]/g;function Pe(e){if(e=e.split("=")[0],e=e.trim().replace(Me,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function V(e,t){t=t||1/0;for(var r,o=e.length,i=null,a=[],s=0;s<o;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}else if(s+1===o){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,r&63|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return a}function je(e){for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r)&255);return t}function qe(e,t){for(var r,o,i,a=[],s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),o=r>>8,i=r%256,a.push(i),a.push(o);return a}function le(e){return l.toByteArray(Pe(e))}function $(e,t,r,o){for(var i=0;i<o&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function D(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function X(e){return e!==e}var De=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)t[o+i]=e[r]+e[i];return t}()}),tt=Q((f,l)=>{w();var p=l.exports={},v,h;function y(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?v=setTimeout:v=y}catch(d){v=y}try{typeof clearTimeout=="function"?h=clearTimeout:h=m}catch(d){h=m}})();function n(d){if(v===setTimeout)return setTimeout(d,0);if((v===y||!v)&&setTimeout)return v=setTimeout,setTimeout(d,0);try{return v(d,0)}catch(x){try{return v.call(null,d,0)}catch(E){return v.call(this,d,0)}}}function T(d){if(h===clearTimeout)return clearTimeout(d);if((h===m||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(d);try{return h(d)}catch(x){try{return h.call(null,d)}catch(E){return h.call(this,d)}}}var b=[],U=!1,_,A=-1;function B(){!U||!_||(U=!1,_.length?b=_.concat(b):A=-1,b.length&&u())}function u(){if(!U){var d=n(B);U=!0;for(var x=b.length;x;){for(_=b,b=[];++A<x;)_&&_[A].run();A=-1,x=b.length}_=null,U=!1,T(d)}}p.nextTick=function(d){var x=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)x[E-1]=arguments[E];b.push(new c(d,x)),b.length===1&&!U&&n(u)};function c(d,x){this.fun=d,this.array=x}c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={};function g(){}p.on=g,p.addListener=g,p.once=g,p.off=g,p.removeListener=g,p.removeAllListeners=g,p.emit=g,p.prependListener=g,p.prependOnceListener=g,p.listeners=function(d){return[]},p.binding=function(d){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(d){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}),_e,rt,ot,w=me(()=>{_e=z(et()),rt=z(tt()),ot=function(f){function l(){var v=this||self;return delete f.prototype.__magic__,v}if(typeof globalThis=="object")return globalThis;if(this)return l();f.defineProperty(f.prototype,"__magic__",{configurable:!0,get:l});var p=__magic__;return p}(Object)}),ve={};ge(ve,{default:()=>we});var H,de,we,nt=me(()=>{"use strict";w(),H=z(O("react")),de=f=>H.createElement("svg",Qe({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},f),H.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),H.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),we=de}),Ee={};ge(Ee,{TokenElement:()=>gt});xe.exports=ye(Ee);w();var R=z(O("react")),it=O("@fortawesome/free-solid-svg-icons"),at=O("@fortawesome/react-fontawesome"),pt=z(O("@terradharitri/sdk-dapp/constants/index")),lt=O("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),ft=z(O("classnames"));w();var ut=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ut));var st={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};w();w();w();var ct="0";w();w();w();var bt=O("bech32");w();w();w();w();w();var J=O("@terradharitri/sdk-dapp/types/tokens.types");w();w();var yt=O("@terradharitri/sdk-dapp/constants"),_t=O("@terradharitri/sdk-dapp/utils/account/getAccount");w();w();var vt=O("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");w();var wt=O("@terradharitri/sdk-dapp/utils/buildUrlParams");w();var ee=z(O("anchorme")),te=f=>f.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),dt=(f,l)=>{if(l){let p=`[Message hidden due to suspicious content - ${l.info}]`;if(f.length>1e3)return{output:p,stringWithLinks:f,found:!0};let v=te(f.normalize("NFKC")),h=ee.default.list(v),y=[];if(h.length>0){let m=p;h.forEach((n,T)=>{let{string:b}=n,U="",_="",A=b;for(let B=0;B<m.length;B++){let u=m.slice(B),[c]=ee.default.list(te(u));c&&b===c.string&&(U=m.substring(0,B))}for(let B=p.length;B>0;B--){let u=m.slice(0,B),[c]=ee.default.list(te(u));c&&b===c.string&&(_=m.substring(B))}y.push(U),y.push(A),m=_,T===h.length-1&&y.push(_)})}else y.push(f);return{output:p,stringWithLinks:y.join(""),found:!0}}else return{output:f,stringWithLinks:"",found:!1}};w();w();var Et=O("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),xt=O("@terradharitri/sdk-dapp/utils/operations/formatAmount"),At=O("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Bt=O("@terradharitri/sdk-dapp/utils/operations/parseAmount");w();w();w();w();w();w();var ht=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ht));var F={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},mt=(nt(),ye(ve)).default,gt=({RewaIcon:f,inDropdown:l=!1,isRewa:p,nftTokenDetails:v,nftType:h,token:y})=>{var m,n;let{name:T,identifier:b,balance:U,decimals:_}=y,A=((m=y.assets)==null?void 0:m.svgUrl)||((n=y.assets)==null?void 0:n.pngUrl)||"",B=A?28:20,[u,c]=(0,R.useState)(T);(0,R.useEffect)(()=>{var E;(E=v==null?void 0:v.uris)!=null&&E.some(M=>{let P=_e.Buffer.from(String(M),"base64").toString(),{found:S}=dt(P,v==null?void 0:v.scamInfo);return S})||c(T)},[T]);let g=R.default.createElement(at.FontAwesomeIcon,{icon:it.faDiamond});h==J.NftEnumType.NonFungibleDCDT&&(g=R.default.createElement("div",{className:"nft-type","data-testid":`${b}-type-nft`},"NFT")),h===J.NftEnumType.SemiFungibleDCDT&&(g=R.default.createElement("div",{className:"nft-type","data-testid":`${b}-type-sft`},"SFT"));let d=!l&&h!==J.NftEnumType.NonFungibleDCDT,x=R.default.createElement("div",{className:F.tokenElementCircle},g);return A&&(x=R.default.createElement("img",{className:F.tokenElementCircle,src:A,alt:T,height:B})),p&&(x=R.default.createElement("div",{className:F.tokenElementCircle},f?R.default.createElement(f,{height:36}):R.default.createElement(mt,{height:36}))),R.default.createElement("div",{className:(0,ft.default)(st.value,F.tokenElement)},R.default.createElement("div",{className:F.tokenElementWrapper},x),R.default.createElement("div",{"data-testid":"tokenName"},R.default.createElement("span",{"data-testid":`${b}-element`},R.default.createElement("span",null,u)," ",R.default.createElement("span",{className:F.tokenElementIdentifier},b)),d&&R.default.createElement(lt.FormatAmount,{rewaLabel:b,value:U||ct,digits:h===J.NftEnumType.SemiFungibleDCDT?0:pt.DIGITS,token:b,showLabel:!1,decimals:_,"data-testid":`${b}-balance`})))};});var Y={};G();K(Y,Fe(Ae()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
