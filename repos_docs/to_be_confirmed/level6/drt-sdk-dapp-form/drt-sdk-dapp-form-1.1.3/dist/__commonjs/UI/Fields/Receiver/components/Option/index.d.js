"use strict";import{a as D,b as qe,d as Z,e as De,f as H}from"../../../../../../__chunks__/chunk-JH2LJGTQ.js";var Ee=qe((vo,xe)=>{"use strict";H();var $e=Object.create,Y=Object.defineProperty,Ve=Object.defineProperties,Ze=Object.getOwnPropertyDescriptor,He=Object.getOwnPropertyDescriptors,Ge=Object.getOwnPropertyNames,_e=Object.getOwnPropertySymbols,Ke=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,ie=(_,s,l)=>s in _?Y(_,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):_[s]=l,ue=(_,s)=>{for(var l in s||(s={}))me.call(s,l)&&ie(_,l,s[l]);if(_e)for(var l of _e(s))Qe.call(s,l)&&ie(_,l,s[l]);return _},Je=(_,s)=>Ve(_,He(s)),ye=(_,s)=>()=>(_&&(s=_(_=0)),s),Q=(_,s)=>()=>(s||_((s={exports:{}}).exports,s),s.exports),ve=(_,s)=>{for(var l in s)Y(_,l,{get:s[l],enumerable:!0})},fe=(_,s,l,f)=>{if(s&&typeof s=="object"||typeof s=="function")for(let y of Ge(s))!me.call(_,y)&&y!==l&&Y(_,y,{get:()=>s[y],enumerable:!(f=Ze(s,y))||f.enumerable});return _},F=(_,s,l)=>(l=_!=null?$e(Ke(_)):{},fe(s||!_||!_.__esModule?Y(l,"default",{value:_,enumerable:!0}):l,_)),he=_=>fe(Y({},"__esModule",{value:!0}),_),Xe=Q(_=>{"use strict";P(),_.byteLength=T,_.toByteArray=S,_.fromByteArray=O;var s=[],l=[],f=typeof Uint8Array!="undefined"?Uint8Array:Array,y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(h=0,m=y.length;h<m;++h)s[h]=y[h],l[y.charCodeAt(h)]=h;var h,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function c(a){var u=a.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=a.indexOf("=");v===-1&&(v=u);var d=v===u?0:4-v%4;return[v,d]}function T(a){var u=c(a),v=u[0],d=u[1];return(v+d)*3/4-d}function b(a,u,v){return(u+v)*3/4-v}function S(a){var u,v=c(a),d=v[0],E=v[1],w=new f(b(a,d,E)),M=0,j=E>0?d-4:d,I;for(I=0;I<j;I+=4)u=l[a.charCodeAt(I)]<<18|l[a.charCodeAt(I+1)]<<12|l[a.charCodeAt(I+2)]<<6|l[a.charCodeAt(I+3)],w[M++]=u>>16&255,w[M++]=u>>8&255,w[M++]=u&255;return E===2&&(u=l[a.charCodeAt(I)]<<2|l[a.charCodeAt(I+1)]>>4,w[M++]=u&255),E===1&&(u=l[a.charCodeAt(I)]<<10|l[a.charCodeAt(I+1)]<<4|l[a.charCodeAt(I+2)]>>2,w[M++]=u>>8&255,w[M++]=u&255),w}function g(a){return s[a>>18&63]+s[a>>12&63]+s[a>>6&63]+s[a&63]}function A(a,u,v){for(var d,E=[],w=u;w<v;w+=3)d=(a[w]<<16&16711680)+(a[w+1]<<8&65280)+(a[w+2]&255),E.push(g(d));return E.join("")}function O(a){for(var u,v=a.length,d=v%3,E=[],w=16383,M=0,j=v-d;M<j;M+=w)E.push(A(a,M,M+w>j?j:M+w));return d===1?(u=a[v-1],E.push(s[u>>2]+s[u<<4&63]+"==")):d===2&&(u=(a[v-2]<<8)+a[v-1],E.push(s[u>>10]+s[u>>4&63]+s[u<<2&63]+"=")),E.join("")}}),eo=Q(_=>{P(),_.read=function(s,l,f,y,h){var m,c,T=h*8-y-1,b=(1<<T)-1,S=b>>1,g=-7,A=f?h-1:0,O=f?-1:1,a=s[l+A];for(A+=O,m=a&(1<<-g)-1,a>>=-g,g+=T;g>0;m=m*256+s[l+A],A+=O,g-=8);for(c=m&(1<<-g)-1,m>>=-g,g+=y;g>0;c=c*256+s[l+A],A+=O,g-=8);if(m===0)m=1-S;else{if(m===b)return c?NaN:(a?-1:1)*(1/0);c=c+Math.pow(2,y),m=m-S}return(a?-1:1)*c*Math.pow(2,m-y)},_.write=function(s,l,f,y,h,m){var c,T,b,S=m*8-h-1,g=(1<<S)-1,A=g>>1,O=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,a=y?0:m-1,u=y?1:-1,v=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(T=isNaN(l)?1:0,c=g):(c=Math.floor(Math.log(l)/Math.LN2),l*(b=Math.pow(2,-c))<1&&(c--,b*=2),c+A>=1?l+=O/b:l+=O*Math.pow(2,1-A),l*b>=2&&(c++,b/=2),c+A>=g?(T=0,c=g):c+A>=1?(T=(l*b-1)*Math.pow(2,h),c=c+A):(T=l*Math.pow(2,A-1)*Math.pow(2,h),c=0));h>=8;s[f+a]=T&255,a+=u,T/=256,h-=8);for(c=c<<h|T,S+=h;S>0;s[f+a]=c&255,a+=u,c/=256,S-=8);s[f+a-u]|=v*128}}),oo=Q(_=>{"use strict";P();var s=Xe(),l=eo(),f=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;_.Buffer=c,_.SlowBuffer=E,_.INSPECT_MAX_BYTES=50;var y=2147483647;_.kMaxLength=y,c.TYPED_ARRAY_SUPPORT=h(),!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}});function m(e){if(e>y)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,c.prototype),o}function c(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return g(e)}return T(e,o,t)}c.poolSize=8192;function T(e,o,t){if(typeof e=="string")return A(e,o);if(ArrayBuffer.isView(e))return a(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return u(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return c.from(r,o,t);var n=v(e);if(n)return n;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return c.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}c.from=function(e,o,t){return T(e,o,t)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function b(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function S(e,o,t){return b(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}c.alloc=function(e,o,t){return S(e,o,t)};function g(e){return b(e),m(e<0?0:d(e)|0)}c.allocUnsafe=function(e){return g(e)},c.allocUnsafeSlow=function(e){return g(e)};function A(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!c.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=w(e,o)|0,r=m(t),n=r.write(e,o);return n!==t&&(r=r.slice(0,n)),r}function O(e){for(var o=e.length<0?0:d(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function a(e){if(N(e,Uint8Array)){var o=new Uint8Array(e);return u(o.buffer,o.byteOffset,o.byteLength)}return O(e)}function u(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,c.prototype),r}function v(e){if(c.isBuffer(e)){var o=d(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||X(e.length)?m(0):O(e);if(e.type==="Buffer"&&Array.isArray(e.data))return O(e.data)}function d(e){if(e>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return e|0}function E(e){return+e!=e&&(e=0),c.alloc(+e)}c.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==c.prototype},c.compare=function(e,o){if(N(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),N(o,Uint8Array)&&(o=c.from(o,o.offset,o.byteLength)),!c.isBuffer(e)||!c.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,n=0,p=Math.min(t,r);n<p;++n)if(e[n]!==o[n]){t=e[n],r=o[n];break}return t<r?-1:r<t?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return c.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=c.allocUnsafe(o),n=0;for(t=0;t<e.length;++t){var p=e[t];if(N(p,Uint8Array))n+p.length>r.length?c.from(p).copy(r,n):Uint8Array.prototype.set.call(r,p,n);else if(c.isBuffer(p))p.copy(r,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=p.length}return r};function w(e,o){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var n=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return J(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return pe(e).length;default:if(n)return r?-1:J(e).length;o=(""+o).toLowerCase(),n=!0}}c.byteLength=w;function M(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ce(this,o,t);case"utf8":case"utf-8":return oe(this,o,t);case"ascii":return ke(this,o,t);case"latin1":case"binary":return Ie(this,o,t);case"base64":return Le(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}c.prototype._isBuffer=!0;function j(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}c.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)j(this,o,o+1);return this},c.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)j(this,o,o+3),j(this,o+1,o+2);return this},c.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)j(this,o,o+7),j(this,o+1,o+6),j(this,o+2,o+5),j(this,o+3,o+4);return this},c.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?oe(this,0,e):M.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:c.compare(this,e)===0},c.prototype.inspect=function(){var e="",o=_.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},f&&(c.prototype[f]=c.prototype.inspect),c.prototype.compare=function(e,o,t,r,n){if(N(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),n===void 0&&(n=this.length),o<0||t>e.length||r<0||n>this.length)throw new RangeError("out of range index");if(r>=n&&o>=t)return 0;if(r>=n)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,n>>>=0,this===e)return 0;for(var p=n-r,i=t-o,x=Math.min(p,i),k=this.slice(r,n),B=e.slice(o,t),U=0;U<x;++U)if(k[U]!==B[U]){p=k[U],i=B[U];break}return p<i?-1:i<p?1:0};function I(e,o,t,r,n){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,X(t)&&(t=n?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(n)return-1;t=e.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof o=="string"&&(o=c.from(o,r)),c.isBuffer(o))return o.length===0?-1:ee(e,o,t,r,n);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):ee(e,[o],t,r,n);throw new TypeError("val must be string, number or Buffer")}function ee(e,o,t,r,n){var p=1,i=e.length,x=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;p=2,i/=2,x/=2,t/=2}function k(le,se){return p===1?le[se]:le.readUInt16BE(se*p)}var B;if(n){var U=-1;for(B=t;B<i;B++)if(k(e,B)===k(o,U===-1?0:B-U)){if(U===-1&&(U=B),B-U+1===x)return U*p}else U!==-1&&(B-=B-U),U=-1}else for(t+x>i&&(t=i-x),B=t;B>=0;B--){for(var C=!0,V=0;V<x;V++)if(k(e,B+V)!==k(o,V)){C=!1;break}if(C)return B}return-1}c.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},c.prototype.indexOf=function(e,o,t){return I(this,e,o,t,!0)},c.prototype.lastIndexOf=function(e,o,t){return I(this,e,o,t,!1)};function Ae(e,o,t,r){t=Number(t)||0;var n=e.length-t;r?(r=Number(r),r>n&&(r=n)):r=n;var p=o.length;r>p/2&&(r=p/2);for(var i=0;i<r;++i){var x=parseInt(o.substr(i*2,2),16);if(X(x))return i;e[t+i]=x}return i}function Be(e,o,t,r){return $(J(o,e.length-t),e,t,r)}function Se(e,o,t,r){return $(Pe(o),e,t,r)}function Ue(e,o,t,r){return $(pe(o),e,t,r)}function Te(e,o,t,r){return $(Ne(o,e.length-t),e,t,r)}c.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var n=this.length-o;if((t===void 0||t>n)&&(t=n),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var p=!1;;)switch(r){case"hex":return Ae(this,e,o,t);case"utf8":case"utf-8":return Be(this,e,o,t);case"ascii":case"latin1":case"binary":return Se(this,e,o,t);case"base64":return Ue(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Te(this,e,o,t);default:if(p)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Le(e,o,t){return o===0&&t===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(o,t))}function oe(e,o,t){t=Math.min(e.length,t);for(var r=[],n=o;n<t;){var p=e[n],i=null,x=p>239?4:p>223?3:p>191?2:1;if(n+x<=t){var k,B,U,C;switch(x){case 1:p<128&&(i=p);break;case 2:k=e[n+1],(k&192)===128&&(C=(p&31)<<6|k&63,C>127&&(i=C));break;case 3:k=e[n+1],B=e[n+2],(k&192)===128&&(B&192)===128&&(C=(p&15)<<12|(k&63)<<6|B&63,C>2047&&(C<55296||C>57343)&&(i=C));break;case 4:k=e[n+1],B=e[n+2],U=e[n+3],(k&192)===128&&(B&192)===128&&(U&192)===128&&(C=(p&15)<<18|(k&63)<<12|(B&63)<<6|U&63,C>65535&&C<1114112&&(i=C))}}i===null?(i=65533,x=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|i&1023),r.push(i),n+=x}return Oe(r)}var te=4096;function Oe(e){var o=e.length;if(o<=te)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=te));return t}function ke(e,o,t){var r="";t=Math.min(e.length,t);for(var n=o;n<t;++n)r+=String.fromCharCode(e[n]&127);return r}function Ie(e,o,t){var r="";t=Math.min(e.length,t);for(var n=o;n<t;++n)r+=String.fromCharCode(e[n]);return r}function Ce(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var n="",p=o;p<t;++p)n+=ze[e[p]];return n}function Me(e,o,t){for(var r=e.slice(o,t),n="",p=0;p<r.length-1;p+=2)n+=String.fromCharCode(r[p]+r[p+1]*256);return n}c.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,c.prototype),r};function L(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||L(e,o,this.length);for(var r=this[e],n=1,p=0;++p<o&&(n*=256);)r+=this[e+p]*n;return r},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||L(e,o,this.length);for(var r=this[e+--o],n=1;o>0&&(n*=256);)r+=this[e+--o]*n;return r},c.prototype.readUint8=c.prototype.readUInt8=function(e,o){return e=e>>>0,o||L(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||L(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||L(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||L(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||L(e,o,this.length);for(var r=this[e],n=1,p=0;++p<o&&(n*=256);)r+=this[e+p]*n;return n*=128,r>=n&&(r-=Math.pow(2,8*o)),r},c.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||L(e,o,this.length);for(var r=o,n=1,p=this[e+--r];r>0&&(n*=256);)p+=this[e+--r]*n;return n*=128,p>=n&&(p-=Math.pow(2,8*o)),p},c.prototype.readInt8=function(e,o){return e=e>>>0,o||L(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},c.prototype.readInt16LE=function(e,o){e=e>>>0,o||L(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},c.prototype.readInt16BE=function(e,o){e=e>>>0,o||L(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},c.prototype.readInt32LE=function(e,o){return e=e>>>0,o||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,o){return e=e>>>0,o||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,o){return e=e>>>0,o||L(e,4,this.length),l.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,o){return e=e>>>0,o||L(e,4,this.length),l.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||L(e,8,this.length),l.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||L(e,8,this.length),l.read(this,e,!1,52,8)};function R(e,o,t,r,n,p){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>n||o<p)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var n=Math.pow(2,8*t)-1;R(this,e,o,t,n,0)}var p=1,i=0;for(this[o]=e&255;++i<t&&(p*=256);)this[o+i]=e/p&255;return o+t},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var n=Math.pow(2,8*t)-1;R(this,e,o,t,n,0)}var p=t-1,i=1;for(this[o+p]=e&255;--p>=0&&(i*=256);)this[o+p]=e/i&255;return o+t},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,1,255,0),this[o]=e&255,o+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},c.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var n=Math.pow(2,8*t-1);R(this,e,o,t,n-1,-n)}var p=0,i=1,x=0;for(this[o]=e&255;++p<t&&(i*=256);)e<0&&x===0&&this[o+p-1]!==0&&(x=1),this[o+p]=(e/i>>0)-x&255;return o+t},c.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var n=Math.pow(2,8*t-1);R(this,e,o,t,n-1,-n)}var p=t-1,i=1,x=0;for(this[o+p]=e&255;--p>=0&&(i*=256);)e<0&&x===0&&this[o+p+1]!==0&&(x=1),this[o+p]=(e/i>>0)-x&255;return o+t},c.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},c.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},c.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},c.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},c.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||R(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function re(e,o,t,r,n,p){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ce(e,o,t,r,n){return o=+o,t=t>>>0,n||re(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}c.prototype.writeFloatLE=function(e,o,t){return ce(this,e,o,!0,t)},c.prototype.writeFloatBE=function(e,o,t){return ce(this,e,o,!1,t)};function ne(e,o,t,r,n){return o=+o,t=t>>>0,n||re(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}c.prototype.writeDoubleLE=function(e,o,t){return ne(this,e,o,!0,t)},c.prototype.writeDoubleBE=function(e,o,t){return ne(this,e,o,!1,t)},c.prototype.copy=function(e,o,t,r){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var n=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),n},c.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var n=e.charCodeAt(0);(r==="utf8"&&n<128||r==="latin1")&&(e=n)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<t;++p)this[p]=e;else{var i=c.isBuffer(e)?e:c.from(e,r),x=i.length;if(x===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-o;++p)this[p+o]=i[p%x]}return this};var Re=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Re,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function J(e,o){o=o||1/0;for(var t,r=e.length,n=null,p=[],i=0;i<r;++i){if(t=e.charCodeAt(i),t>55295&&t<57344){if(!n){if(t>56319){(o-=3)>-1&&p.push(239,191,189);continue}else if(i+1===r){(o-=3)>-1&&p.push(239,191,189);continue}n=t;continue}if(t<56320){(o-=3)>-1&&p.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(o-=3)>-1&&p.push(239,191,189);if(n=null,t<128){if((o-=1)<0)break;p.push(t)}else if(t<2048){if((o-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Pe(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function Ne(e,o){for(var t,r,n,p=[],i=0;i<e.length&&!((o-=2)<0);++i)t=e.charCodeAt(i),r=t>>8,n=t%256,p.push(n),p.push(r);return p}function pe(e){return s.toByteArray(je(e))}function $(e,o,t,r){for(var n=0;n<r&&!(n+t>=o.length||n>=e.length);++n)o[n+t]=e[n];return n}function N(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function X(e){return e!==e}var ze=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,n=0;n<16;++n)o[r+n]=e[t]+e[n];return o}()}),to=Q((_,s)=>{P();var l=s.exports={},f,y;function h(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?f=setTimeout:f=h}catch(d){f=h}try{typeof clearTimeout=="function"?y=clearTimeout:y=m}catch(d){y=m}})();function c(d){if(f===setTimeout)return setTimeout(d,0);if((f===h||!f)&&setTimeout)return f=setTimeout,setTimeout(d,0);try{return f(d,0)}catch(E){try{return f.call(null,d,0)}catch(w){return f.call(this,d,0)}}}function T(d){if(y===clearTimeout)return clearTimeout(d);if((y===m||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(d);try{return y(d)}catch(E){try{return y.call(null,d)}catch(w){return y.call(this,d)}}}var b=[],S=!1,g,A=-1;function O(){!S||!g||(S=!1,g.length?b=g.concat(b):A=-1,b.length&&a())}function a(){if(!S){var d=c(O);S=!0;for(var E=b.length;E;){for(g=b,b=[];++A<E;)g&&g[A].run();A=-1,E=b.length}g=null,S=!1,T(d)}}l.nextTick=function(d){var E=new Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)E[w-1]=arguments[w];b.push(new u(d,E)),b.length===1&&!S&&c(a)};function u(d,E){this.fun=d,this.array=E}u.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function v(){}l.on=v,l.addListener=v,l.once=v,l.off=v,l.removeListener=v,l.removeAllListeners=v,l.emit=v,l.prependListener=v,l.prependOnceListener=v,l.listeners=function(d){return[]},l.binding=function(d){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(d){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),ro,co,no,P=ye(()=>{ro=F(oo()),co=F(to()),no=function(_){function s(){var f=this||self;return delete _.prototype.__magic__,f}if(typeof globalThis=="object")return globalThis;if(this)return s();_.defineProperty(_.prototype,"__magic__",{configurable:!0,get:s});var l=__magic__;return l}(Object)}),ge={};ve(ge,{default:()=>be});var G,ae,be,po=ye(()=>{"use strict";P(),G=F(D("react")),ae=_=>G.createElement("svg",ue({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},_),G.createElement("g",null,G.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),be=ae}),we={};ve(we,{Option:()=>yo});xe.exports=he(we);P();var z=F(D("react")),de=D("@terradharitri/sdk-dapp/UI/Trim"),lo=F(D("classnames")),so=D("react-select");P();P();var K=F(D("react"));P();var _o=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_o));var io={highlight:"dapp-core-component__styles-modules__highlight"},ao=({highlight:_,text:s=""})=>{let l=s.split(" "),f=_.toLowerCase(),y=new RegExp(`(${f})`,"gi"),h=l.map(m=>m.split(y).filter(c=>c));return K.default.createElement("span",{className:io.highlight},h.map((m,c)=>{let T=`${m}-${c}`;return K.default.createElement("span",{key:T},m.map((b,S)=>{let g=b.toLowerCase()===f,A=f&&g,O=`${b}-${S}`;return A?K.default.createElement("strong",{key:O},b):K.default.createElement("span",{key:O},b)}))}))};P();var mo=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mo));var q={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};P();var{default:uo}=(po(),he(ge)),yo=_=>{let{isFocused:s,data:l,selectProps:f}=_,{inputValue:y}=f,h=l,m=h.value!==h.label;return z.default.createElement(so.components.Option,Je(ue({},_),{className:(0,lo.default)(q.receiverSelectOption,{[q.focused]:s})}),m?z.default.createElement(z.default.Fragment,null,z.default.createElement("span",{className:q.receiverSelectOptionUsername},z.default.createElement(uo,{className:q.receiverSelectOptionUsernameIcon}),z.default.createElement(ao,{text:h.label,highlight:y})),z.default.createElement("span",{className:q.receiverSelectOptionNameWrapper},"(",z.default.createElement(de.Trim,{text:h.value,className:q.receiverSelectOptionName}),")")):z.default.createElement(de.Trim,{text:h.value,className:q.receiverSelectOptionName}))};});var W={};H();Z(W,De(Ee()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
