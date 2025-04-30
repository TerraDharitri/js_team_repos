"use strict";import{a as p,b as No,d as G,e as Bo,f as Ce}from"../../__chunks__/chunk-RGFNPOTZ.js";var Va=No((H2,Wa)=>{"use strict";Ce();var Pi=Object.create,ur=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Fi=Object.getOwnPropertyNames,ji=Object.getPrototypeOf,zi=Object.prototype.hasOwnProperty,Wi=(c,i)=>()=>(c&&(i=c(c=0)),i),mr=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports),Vi=(c,i)=>{for(var l in i)ur(c,l,{get:i[l],enumerable:!0})},ja=(c,i,l,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of Fi(i))!zi.call(c,u)&&u!==l&&ur(c,u,{get:()=>i[u],enumerable:!(d=Mi(i,u))||d.enumerable});return c},bn=(c,i,l)=>(l=c!=null?Pi(ji(c)):{},ja(i||!c||!c.__esModule?ur(l,"default",{value:c,enumerable:!0}):l,c)),Gi=c=>ja(ur({},"__esModule",{value:!0}),c),$i=mr(c=>{"use strict";Ao(),c.byteLength=E,c.toByteArray=x,c.fromByteArray=I;var i=[],l=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,m=u.length;_<m;++_)i[_]=u[_],l[u.charCodeAt(_)]=_;var _,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(f){var b=f.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=f.indexOf("=");y===-1&&(y=b);var v=y===b?0:4-y%4;return[y,v]}function E(f){var b=n(f),y=b[0],v=b[1];return(y+v)*3/4-v}function g(f,b,y){return(b+y)*3/4-y}function x(f){var b,y=n(f),v=y[0],A=y[1],S=new d(g(f,v,A)),O=0,D=A>0?v-4:v,U;for(U=0;U<D;U+=4)b=l[f.charCodeAt(U)]<<18|l[f.charCodeAt(U+1)]<<12|l[f.charCodeAt(U+2)]<<6|l[f.charCodeAt(U+3)],S[O++]=b>>16&255,S[O++]=b>>8&255,S[O++]=b&255;return A===2&&(b=l[f.charCodeAt(U)]<<2|l[f.charCodeAt(U+1)]>>4,S[O++]=b&255),A===1&&(b=l[f.charCodeAt(U)]<<10|l[f.charCodeAt(U+1)]<<4|l[f.charCodeAt(U+2)]>>2,S[O++]=b>>8&255,S[O++]=b&255),S}function w(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function k(f,b,y){for(var v,A=[],S=b;S<y;S+=3)v=(f[S]<<16&16711680)+(f[S+1]<<8&65280)+(f[S+2]&255),A.push(w(v));return A.join("")}function I(f){for(var b,y=f.length,v=y%3,A=[],S=16383,O=0,D=y-v;O<D;O+=S)A.push(k(f,O,O+S>D?D:O+S));return v===1?(b=f[y-1],A.push(i[b>>2]+i[b<<4&63]+"==")):v===2&&(b=(f[y-2]<<8)+f[y-1],A.push(i[b>>10]+i[b>>4&63]+i[b<<2&63]+"=")),A.join("")}}),Yi=mr(c=>{Ao(),c.read=function(i,l,d,u,_){var m,n,E=_*8-u-1,g=(1<<E)-1,x=g>>1,w=-7,k=d?_-1:0,I=d?-1:1,f=i[l+k];for(k+=I,m=f&(1<<-w)-1,f>>=-w,w+=E;w>0;m=m*256+i[l+k],k+=I,w-=8);for(n=m&(1<<-w)-1,m>>=-w,w+=u;w>0;n=n*256+i[l+k],k+=I,w-=8);if(m===0)m=1-x;else{if(m===g)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,u),m=m-x}return(f?-1:1)*n*Math.pow(2,m-u)},c.write=function(i,l,d,u,_,m){var n,E,g,x=m*8-_-1,w=(1<<x)-1,k=w>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=u?0:m-1,b=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(E=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-n))<1&&(n--,g*=2),n+k>=1?l+=I/g:l+=I*Math.pow(2,1-k),l*g>=2&&(n++,g/=2),n+k>=w?(E=0,n=w):n+k>=1?(E=(l*g-1)*Math.pow(2,_),n=n+k):(E=l*Math.pow(2,k-1)*Math.pow(2,_),n=0));_>=8;i[d+f]=E&255,f+=b,E/=256,_-=8);for(n=n<<_|E,x+=_;x>0;i[d+f]=n&255,f+=b,n/=256,x-=8);i[d+f-b]|=y*128}}),Zi=mr(c=>{"use strict";Ao();var i=$i(),l=Yi(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=n,c.SlowBuffer=A,c.INSPECT_MAX_BYTES=50;var u=2147483647;c.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return k(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return b(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var a=y(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function g(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function x(e,o,t){return g(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}n.alloc=function(e,o,t){return x(e,o,t)};function w(e){return g(e),m(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function k(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=S(e,o)|0,r=m(t),a=r.write(e,o);return a!==t&&(r=r.slice(0,a)),r}function I(e){for(var o=e.length<0?0:v(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if($(e,Uint8Array)){var o=new Uint8Array(e);return b(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function b(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?m(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function v(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),$(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,a=0,s=Math.min(t,r);a<s;++a)if(e[a]!==o[a]){t=e[a],r=o[a];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),a=0;for(t=0;t<e.length;++t){var s=e[t];if($(s,Uint8Array))a+s.length>r.length?n.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else if(n.isBuffer(s))s.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return r};function S(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ae(e).length;default:if(a)return r?-1:ye(e).length;o=(""+o).toLowerCase(),a=!0}}n.byteLength=S;function O(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,o,t);case"utf8":case"utf-8":return Y(this,o,t);case"ascii":return ie(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return Z(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function D(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)D(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)D(this,o,o+3),D(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)D(this,o,o+7),D(this,o+1,o+6),D(this,o+2,o+5),D(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,a){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||t>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=t)return 0;if(r>=a)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var s=a-r,h=t-o,C=Math.min(s,h),P=this.slice(r,a),N=e.slice(o,t),L=0;L<C;++L)if(P[L]!==N[L]){s=P[L],h=N[L];break}return s<h?-1:h<s?1:0};function U(e,o,t,r,a){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,we(t)&&(t=a?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(a)return-1;t=e.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:J(e,o,t,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):J(e,[o],t,r,a);throw new TypeError("val must be string, number or Buffer")}function J(e,o,t,r,a){var s=1,h=e.length,C=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,h/=2,C/=2,t/=2}function P(Te,Ie){return s===1?Te[Ie]:Te.readUInt16BE(Ie*s)}var N;if(a){var L=-1;for(N=t;N<h;N++)if(P(e,N)===P(o,L===-1?0:N-L)){if(L===-1&&(L=N),N-L+1===C)return L*s}else L!==-1&&(N-=N-L),L=-1}else for(t+C>h&&(t=h-C),N=t;N>=0;N--){for(var j=!0,de=0;de<C;de++)if(P(e,N+de)!==P(o,de)){j=!1;break}if(j)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return U(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return U(this,e,o,t,!1)};function ee(e,o,t,r){t=Number(t)||0;var a=e.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var h=0;h<r;++h){var C=parseInt(o.substr(h*2,2),16);if(we(C))return h;e[t+h]=C}return h}function oe(e,o,t,r){return se(ye(o,e.length-t),e,t,r)}function Q(e,o,t,r){return se(ze(o),e,t,r)}function pe(e,o,t,r){return se(Ae(o),e,t,r)}function ne(e,o,t,r){return se(We(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ee(this,e,o,t);case"utf8":case"utf-8":return oe(this,e,o,t);case"ascii":case"latin1":case"binary":return Q(this,e,o,t);case"base64":return pe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,o,t);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Z(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function Y(e,o,t){t=Math.min(e.length,t);for(var r=[],a=o;a<t;){var s=e[a],h=null,C=s>239?4:s>223?3:s>191?2:1;if(a+C<=t){var P,N,L,j;switch(C){case 1:s<128&&(h=s);break;case 2:P=e[a+1],(P&192)===128&&(j=(s&31)<<6|P&63,j>127&&(h=j));break;case 3:P=e[a+1],N=e[a+2],(P&192)===128&&(N&192)===128&&(j=(s&15)<<12|(P&63)<<6|N&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:P=e[a+1],N=e[a+2],L=e[a+3],(P&192)===128&&(N&192)===128&&(L&192)===128&&(j=(s&15)<<18|(P&63)<<12|(N&63)<<6|L&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,C=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|h&1023),r.push(h),a+=C}return ce(r)}var X=4096;function ce(e){var o=e.length;if(o<=X)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=X));return t}function ie(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]);return r}function he(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var a="",s=o;s<t;++s)a+=Ve[e[s]];return a}function me(e,o,t){for(var r=e.slice(o,t),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=o,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!1,52,8)};function M(e,o,t,r,a,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=1,h=0;for(this[o]=e&255;++h<t&&(s*=256);)this[o+h]=e/s&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=t-1,h=1;for(this[o+s]=e&255;--s>=0&&(h*=256);)this[o+s]=e/h&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=0,h=1,C=0;for(this[o]=e&255;++s<t&&(h*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=t-1,h=1,C=0;for(this[o+s]=e&255;--s>=0&&(h*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ve(e,o,t,r,a,s){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xe(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return xe(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return xe(this,e,o,!1,t)};function re(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var a=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),a},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<t;++s)this[s]=e;else{var h=n.isBuffer(e)?e:n.from(e,r),C=h.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<t-o;++s)this[s+o]=h[s%C]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,o){o=o||1/0;for(var t,r=e.length,a=null,s=[],h=0;h<r;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!a){if(t>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(h+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=t;continue}if(t<56320){(o-=3)>-1&&s.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,t<128){if((o-=1)<0)break;s.push(t)}else if(t<2048){if((o-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function We(e,o){for(var t,r,a,s=[],h=0;h<e.length&&!((o-=2)<0);++h)t=e.charCodeAt(h),r=t>>8,a=t%256,s.push(a),s.push(r);return s}function Ae(e){return i.toByteArray(je(e))}function se(e,o,t,r){for(var a=0;a<r&&!(a+t>=o.length||a>=e.length);++a)o[a+t]=e[a];return a}function $(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function we(e){return e!==e}var Ve=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)o[r+a]=e[t]+e[a];return o}()}),Hi=mr((c,i)=>{Ao();var l=i.exports={},d,u;function _(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(v){d=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=m}catch(v){u=m}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(A){try{return d.call(null,v,0)}catch(S){return d.call(this,v,0)}}}function E(v){if(u===clearTimeout)return clearTimeout(v);if((u===m||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(v);try{return u(v)}catch(A){try{return u.call(null,v)}catch(S){return u.call(this,v)}}}var g=[],x=!1,w,k=-1;function I(){!x||!w||(x=!1,w.length?g=w.concat(g):k=-1,g.length&&f())}function f(){if(!x){var v=n(I);x=!0;for(var A=g.length;A;){for(w=g,g=[];++k<A;)w&&w[k].run();k=-1,A=g.length}w=null,x=!1,E(v)}}l.nextTick=function(v){var A=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)A[S-1]=arguments[S];g.push(new b(v,A)),g.length===1&&!x&&n(f)};function b(v,A){this.fun=v,this.array=A}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Xi,Ki,Ji,Ao=Wi(()=>{Xi=bn(Zi()),Ki=bn(Hi()),Ji=function(c){function i(){var d=this||self;return delete c.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),za={};Vi(za,{InfoDust:()=>as});Wa.exports=Gi(za);Ao();Ao();var Jt=bn(p("react")),Qi=p("@fortawesome/free-solid-svg-icons"),es=p("@fortawesome/react-fontawesome"),os=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),ts=p("react-tooltip"),Z2=p("react-tooltip/dist/react-tooltip.css");Ao();Ao();Ao();var rs="5000000000000000";Ao();var ns=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ns));var vn={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},as=({rewaLabel:c})=>Jt.default.createElement("div",{className:vn.infoDust},Jt.default.createElement(ts.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:vn.infoDustTooltip},"A minimal amount of"," ",Jt.default.createElement(os.FormatAmount,{rewaLabel:c,value:rs,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),Jt.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:vn.infoDustTrigger},Jt.default.createElement(es.FontAwesomeIcon,{icon:Qi.faInfoCircle,className:"i-icon"})));});var Ha=No((X2,Za)=>{"use strict";Ce();var ls=Object.create,fr=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,cs=Object.getOwnPropertyNames,is=Object.getPrototypeOf,ss=Object.prototype.hasOwnProperty,ds=(c,i)=>()=>(c&&(i=c(c=0)),i),_r=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports),us=(c,i)=>{for(var l in i)fr(c,l,{get:i[l],enumerable:!0})},$a=(c,i,l,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of cs(i))!ss.call(c,u)&&u!==l&&fr(c,u,{get:()=>i[u],enumerable:!(d=ps(i,u))||d.enumerable});return c},yn=(c,i,l)=>(l=c!=null?ls(is(c)):{},$a(i||!c||!c.__esModule?fr(l,"default",{value:c,enumerable:!0}):l,c)),ms=c=>$a(fr({},"__esModule",{value:!0}),c),fs=_r(c=>{"use strict";ft(),c.byteLength=E,c.toByteArray=x,c.fromByteArray=I;var i=[],l=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,m=u.length;_<m;++_)i[_]=u[_],l[u.charCodeAt(_)]=_;var _,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(f){var b=f.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=f.indexOf("=");y===-1&&(y=b);var v=y===b?0:4-y%4;return[y,v]}function E(f){var b=n(f),y=b[0],v=b[1];return(y+v)*3/4-v}function g(f,b,y){return(b+y)*3/4-y}function x(f){var b,y=n(f),v=y[0],A=y[1],S=new d(g(f,v,A)),O=0,D=A>0?v-4:v,U;for(U=0;U<D;U+=4)b=l[f.charCodeAt(U)]<<18|l[f.charCodeAt(U+1)]<<12|l[f.charCodeAt(U+2)]<<6|l[f.charCodeAt(U+3)],S[O++]=b>>16&255,S[O++]=b>>8&255,S[O++]=b&255;return A===2&&(b=l[f.charCodeAt(U)]<<2|l[f.charCodeAt(U+1)]>>4,S[O++]=b&255),A===1&&(b=l[f.charCodeAt(U)]<<10|l[f.charCodeAt(U+1)]<<4|l[f.charCodeAt(U+2)]>>2,S[O++]=b>>8&255,S[O++]=b&255),S}function w(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function k(f,b,y){for(var v,A=[],S=b;S<y;S+=3)v=(f[S]<<16&16711680)+(f[S+1]<<8&65280)+(f[S+2]&255),A.push(w(v));return A.join("")}function I(f){for(var b,y=f.length,v=y%3,A=[],S=16383,O=0,D=y-v;O<D;O+=S)A.push(k(f,O,O+S>D?D:O+S));return v===1?(b=f[y-1],A.push(i[b>>2]+i[b<<4&63]+"==")):v===2&&(b=(f[y-2]<<8)+f[y-1],A.push(i[b>>10]+i[b>>4&63]+i[b<<2&63]+"=")),A.join("")}}),_s=_r(c=>{ft(),c.read=function(i,l,d,u,_){var m,n,E=_*8-u-1,g=(1<<E)-1,x=g>>1,w=-7,k=d?_-1:0,I=d?-1:1,f=i[l+k];for(k+=I,m=f&(1<<-w)-1,f>>=-w,w+=E;w>0;m=m*256+i[l+k],k+=I,w-=8);for(n=m&(1<<-w)-1,m>>=-w,w+=u;w>0;n=n*256+i[l+k],k+=I,w-=8);if(m===0)m=1-x;else{if(m===g)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,u),m=m-x}return(f?-1:1)*n*Math.pow(2,m-u)},c.write=function(i,l,d,u,_,m){var n,E,g,x=m*8-_-1,w=(1<<x)-1,k=w>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=u?0:m-1,b=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(E=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-n))<1&&(n--,g*=2),n+k>=1?l+=I/g:l+=I*Math.pow(2,1-k),l*g>=2&&(n++,g/=2),n+k>=w?(E=0,n=w):n+k>=1?(E=(l*g-1)*Math.pow(2,_),n=n+k):(E=l*Math.pow(2,k-1)*Math.pow(2,_),n=0));_>=8;i[d+f]=E&255,f+=b,E/=256,_-=8);for(n=n<<_|E,x+=_;x>0;i[d+f]=n&255,f+=b,n/=256,x-=8);i[d+f-b]|=y*128}}),hs=_r(c=>{"use strict";ft();var i=fs(),l=_s(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=n,c.SlowBuffer=A,c.INSPECT_MAX_BYTES=50;var u=2147483647;c.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return k(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return b(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var a=y(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function g(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function x(e,o,t){return g(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}n.alloc=function(e,o,t){return x(e,o,t)};function w(e){return g(e),m(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function k(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=S(e,o)|0,r=m(t),a=r.write(e,o);return a!==t&&(r=r.slice(0,a)),r}function I(e){for(var o=e.length<0?0:v(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if($(e,Uint8Array)){var o=new Uint8Array(e);return b(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function b(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?m(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function v(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),$(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,a=0,s=Math.min(t,r);a<s;++a)if(e[a]!==o[a]){t=e[a],r=o[a];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),a=0;for(t=0;t<e.length;++t){var s=e[t];if($(s,Uint8Array))a+s.length>r.length?n.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else if(n.isBuffer(s))s.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return r};function S(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ae(e).length;default:if(a)return r?-1:ye(e).length;o=(""+o).toLowerCase(),a=!0}}n.byteLength=S;function O(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,o,t);case"utf8":case"utf-8":return Y(this,o,t);case"ascii":return ie(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return Z(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function D(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)D(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)D(this,o,o+3),D(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)D(this,o,o+7),D(this,o+1,o+6),D(this,o+2,o+5),D(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,a){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||t>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=t)return 0;if(r>=a)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var s=a-r,h=t-o,C=Math.min(s,h),P=this.slice(r,a),N=e.slice(o,t),L=0;L<C;++L)if(P[L]!==N[L]){s=P[L],h=N[L];break}return s<h?-1:h<s?1:0};function U(e,o,t,r,a){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,we(t)&&(t=a?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(a)return-1;t=e.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:J(e,o,t,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):J(e,[o],t,r,a);throw new TypeError("val must be string, number or Buffer")}function J(e,o,t,r,a){var s=1,h=e.length,C=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,h/=2,C/=2,t/=2}function P(Te,Ie){return s===1?Te[Ie]:Te.readUInt16BE(Ie*s)}var N;if(a){var L=-1;for(N=t;N<h;N++)if(P(e,N)===P(o,L===-1?0:N-L)){if(L===-1&&(L=N),N-L+1===C)return L*s}else L!==-1&&(N-=N-L),L=-1}else for(t+C>h&&(t=h-C),N=t;N>=0;N--){for(var j=!0,de=0;de<C;de++)if(P(e,N+de)!==P(o,de)){j=!1;break}if(j)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return U(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return U(this,e,o,t,!1)};function ee(e,o,t,r){t=Number(t)||0;var a=e.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var h=0;h<r;++h){var C=parseInt(o.substr(h*2,2),16);if(we(C))return h;e[t+h]=C}return h}function oe(e,o,t,r){return se(ye(o,e.length-t),e,t,r)}function Q(e,o,t,r){return se(ze(o),e,t,r)}function pe(e,o,t,r){return se(Ae(o),e,t,r)}function ne(e,o,t,r){return se(We(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ee(this,e,o,t);case"utf8":case"utf-8":return oe(this,e,o,t);case"ascii":case"latin1":case"binary":return Q(this,e,o,t);case"base64":return pe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,o,t);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Z(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function Y(e,o,t){t=Math.min(e.length,t);for(var r=[],a=o;a<t;){var s=e[a],h=null,C=s>239?4:s>223?3:s>191?2:1;if(a+C<=t){var P,N,L,j;switch(C){case 1:s<128&&(h=s);break;case 2:P=e[a+1],(P&192)===128&&(j=(s&31)<<6|P&63,j>127&&(h=j));break;case 3:P=e[a+1],N=e[a+2],(P&192)===128&&(N&192)===128&&(j=(s&15)<<12|(P&63)<<6|N&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:P=e[a+1],N=e[a+2],L=e[a+3],(P&192)===128&&(N&192)===128&&(L&192)===128&&(j=(s&15)<<18|(P&63)<<12|(N&63)<<6|L&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,C=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|h&1023),r.push(h),a+=C}return ce(r)}var X=4096;function ce(e){var o=e.length;if(o<=X)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=X));return t}function ie(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]);return r}function he(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var a="",s=o;s<t;++s)a+=Ve[e[s]];return a}function me(e,o,t){for(var r=e.slice(o,t),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=o,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!1,52,8)};function M(e,o,t,r,a,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=1,h=0;for(this[o]=e&255;++h<t&&(s*=256);)this[o+h]=e/s&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=t-1,h=1;for(this[o+s]=e&255;--s>=0&&(h*=256);)this[o+s]=e/h&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=0,h=1,C=0;for(this[o]=e&255;++s<t&&(h*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=t-1,h=1,C=0;for(this[o+s]=e&255;--s>=0&&(h*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ve(e,o,t,r,a,s){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xe(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return xe(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return xe(this,e,o,!1,t)};function re(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var a=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),a},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<t;++s)this[s]=e;else{var h=n.isBuffer(e)?e:n.from(e,r),C=h.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<t-o;++s)this[s+o]=h[s%C]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,o){o=o||1/0;for(var t,r=e.length,a=null,s=[],h=0;h<r;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!a){if(t>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(h+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=t;continue}if(t<56320){(o-=3)>-1&&s.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,t<128){if((o-=1)<0)break;s.push(t)}else if(t<2048){if((o-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function We(e,o){for(var t,r,a,s=[],h=0;h<e.length&&!((o-=2)<0);++h)t=e.charCodeAt(h),r=t>>8,a=t%256,s.push(a),s.push(r);return s}function Ae(e){return i.toByteArray(je(e))}function se(e,o,t,r){for(var a=0;a<r&&!(a+t>=o.length||a>=e.length);++a)o[a+t]=e[a];return a}function $(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function we(e){return e!==e}var Ve=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)o[r+a]=e[t]+e[a];return o}()}),gs=_r((c,i)=>{ft();var l=i.exports={},d,u;function _(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(v){d=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=m}catch(v){u=m}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(A){try{return d.call(null,v,0)}catch(S){return d.call(this,v,0)}}}function E(v){if(u===clearTimeout)return clearTimeout(v);if((u===m||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(v);try{return u(v)}catch(A){try{return u.call(null,v)}catch(S){return u.call(this,v)}}}var g=[],x=!1,w,k=-1;function I(){!x||!w||(x=!1,w.length?g=w.concat(g):k=-1,g.length&&f())}function f(){if(!x){var v=n(I);x=!0;for(var A=g.length;A;){for(w=g,g=[];++k<A;)w&&w[k].run();k=-1,A=g.length}w=null,x=!1,E(v)}}l.nextTick=function(v){var A=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)A[S-1]=arguments[S];g.push(new b(v,A)),g.length===1&&!x&&n(f)};function b(v,A){this.fun=v,this.array=A}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),vs,bs,ys,ft=ds(()=>{vs=yn(hs()),bs=yn(gs()),ys=function(c){function i(){var d=this||self;return delete c.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Ya={};us(Ya,{Loader:()=>xs});Za.exports=ms(Ya);ft();ft();var Ga=yn(p("react")),ws=p("@terradharitri/sdk-dapp/UI/Loader/index");ft();var Es=`:root {
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

.dapp-core-component__styles-module__loader p {
  margin: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Es));var ks={loader:"dapp-core-component__styles-module__loader"},xs=()=>Ga.default.createElement("div",{className:ks.loader},Ga.default.createElement(ws.Loader,null));});var dp=No((m6,sp)=>{"use strict";Ce();var Ss=Object.create,rr=Object.defineProperty,As=Object.defineProperties,Ts=Object.getOwnPropertyDescriptor,Is=Object.getOwnPropertyDescriptors,qs=Object.getOwnPropertyNames,Sr=Object.getOwnPropertySymbols,Cs=Object.getPrototypeOf,zn=Object.prototype.hasOwnProperty,Ll=Object.prototype.propertyIsEnumerable,Xa=(c,i,l)=>i in c?rr(c,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[i]=l,Ee=(c,i)=>{for(var l in i||(i={}))zn.call(i,l)&&Xa(c,l,i[l]);if(Sr)for(var l of Sr(i))Ll.call(i,l)&&Xa(c,l,i[l]);return c},Me=(c,i)=>As(c,Is(i)),Ul=(c,i)=>{var l={};for(var d in c)zn.call(c,d)&&i.indexOf(d)<0&&(l[d]=c[d]);if(c!=null&&Sr)for(var d of Sr(c))i.indexOf(d)<0&&Ll.call(c,d)&&(l[d]=c[d]);return l},Wn=(c,i)=>()=>(c&&(i=c(c=0)),i),Tr=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports),Ir=(c,i)=>{for(var l in i)rr(c,l,{get:i[l],enumerable:!0})},Ol=(c,i,l,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of qs(i))!zn.call(c,u)&&u!==l&&rr(c,u,{get:()=>i[u],enumerable:!(d=Ts(i,u))||d.enumerable});return c},F=(c,i,l)=>(l=c!=null?Ss(Cs(c)):{},Ol(i||!c||!c.__esModule?rr(l,"default",{value:c,enumerable:!0}):l,c)),Gt=c=>Ol(rr({},"__esModule",{value:!0}),c),et=(c,i,l)=>new Promise((d,u)=>{var _=E=>{try{n(l.next(E))}catch(g){u(g)}},m=E=>{try{n(l.throw(E))}catch(g){u(g)}},n=E=>E.done?d(E.value):Promise.resolve(E.value).then(_,m);n((l=l.apply(c,i)).next())}),Ns=Tr(c=>{"use strict";T(),c.byteLength=E,c.toByteArray=x,c.fromByteArray=I;var i=[],l=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,m=u.length;_<m;++_)i[_]=u[_],l[u.charCodeAt(_)]=_;var _,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(f){var b=f.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=f.indexOf("=");y===-1&&(y=b);var v=y===b?0:4-y%4;return[y,v]}function E(f){var b=n(f),y=b[0],v=b[1];return(y+v)*3/4-v}function g(f,b,y){return(b+y)*3/4-y}function x(f){var b,y=n(f),v=y[0],A=y[1],S=new d(g(f,v,A)),O=0,D=A>0?v-4:v,U;for(U=0;U<D;U+=4)b=l[f.charCodeAt(U)]<<18|l[f.charCodeAt(U+1)]<<12|l[f.charCodeAt(U+2)]<<6|l[f.charCodeAt(U+3)],S[O++]=b>>16&255,S[O++]=b>>8&255,S[O++]=b&255;return A===2&&(b=l[f.charCodeAt(U)]<<2|l[f.charCodeAt(U+1)]>>4,S[O++]=b&255),A===1&&(b=l[f.charCodeAt(U)]<<10|l[f.charCodeAt(U+1)]<<4|l[f.charCodeAt(U+2)]>>2,S[O++]=b>>8&255,S[O++]=b&255),S}function w(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function k(f,b,y){for(var v,A=[],S=b;S<y;S+=3)v=(f[S]<<16&16711680)+(f[S+1]<<8&65280)+(f[S+2]&255),A.push(w(v));return A.join("")}function I(f){for(var b,y=f.length,v=y%3,A=[],S=16383,O=0,D=y-v;O<D;O+=S)A.push(k(f,O,O+S>D?D:O+S));return v===1?(b=f[y-1],A.push(i[b>>2]+i[b<<4&63]+"==")):v===2&&(b=(f[y-2]<<8)+f[y-1],A.push(i[b>>10]+i[b>>4&63]+i[b<<2&63]+"=")),A.join("")}}),Bs=Tr(c=>{T(),c.read=function(i,l,d,u,_){var m,n,E=_*8-u-1,g=(1<<E)-1,x=g>>1,w=-7,k=d?_-1:0,I=d?-1:1,f=i[l+k];for(k+=I,m=f&(1<<-w)-1,f>>=-w,w+=E;w>0;m=m*256+i[l+k],k+=I,w-=8);for(n=m&(1<<-w)-1,m>>=-w,w+=u;w>0;n=n*256+i[l+k],k+=I,w-=8);if(m===0)m=1-x;else{if(m===g)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,u),m=m-x}return(f?-1:1)*n*Math.pow(2,m-u)},c.write=function(i,l,d,u,_,m){var n,E,g,x=m*8-_-1,w=(1<<x)-1,k=w>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=u?0:m-1,b=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(E=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-n))<1&&(n--,g*=2),n+k>=1?l+=I/g:l+=I*Math.pow(2,1-k),l*g>=2&&(n++,g/=2),n+k>=w?(E=0,n=w):n+k>=1?(E=(l*g-1)*Math.pow(2,_),n=n+k):(E=l*Math.pow(2,k-1)*Math.pow(2,_),n=0));_>=8;i[d+f]=E&255,f+=b,E/=256,_-=8);for(n=n<<_|E,x+=_;x>0;i[d+f]=n&255,f+=b,n/=256,x-=8);i[d+f-b]|=y*128}}),Ls=Tr(c=>{"use strict";T();var i=Ns(),l=Bs(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=n,c.SlowBuffer=A,c.INSPECT_MAX_BYTES=50;var u=2147483647;c.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return k(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return b(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var a=y(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function g(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function x(e,o,t){return g(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}n.alloc=function(e,o,t){return x(e,o,t)};function w(e){return g(e),m(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function k(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=S(e,o)|0,r=m(t),a=r.write(e,o);return a!==t&&(r=r.slice(0,a)),r}function I(e){for(var o=e.length<0?0:v(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if($(e,Uint8Array)){var o=new Uint8Array(e);return b(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function b(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?m(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function v(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),$(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,a=0,s=Math.min(t,r);a<s;++a)if(e[a]!==o[a]){t=e[a],r=o[a];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),a=0;for(t=0;t<e.length;++t){var s=e[t];if($(s,Uint8Array))a+s.length>r.length?n.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else if(n.isBuffer(s))s.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return r};function S(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ae(e).length;default:if(a)return r?-1:ye(e).length;o=(""+o).toLowerCase(),a=!0}}n.byteLength=S;function O(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,o,t);case"utf8":case"utf-8":return Y(this,o,t);case"ascii":return ie(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return Z(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function D(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)D(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)D(this,o,o+3),D(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)D(this,o,o+7),D(this,o+1,o+6),D(this,o+2,o+5),D(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,a){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||t>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=t)return 0;if(r>=a)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var s=a-r,h=t-o,C=Math.min(s,h),P=this.slice(r,a),N=e.slice(o,t),L=0;L<C;++L)if(P[L]!==N[L]){s=P[L],h=N[L];break}return s<h?-1:h<s?1:0};function U(e,o,t,r,a){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,we(t)&&(t=a?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(a)return-1;t=e.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:J(e,o,t,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):J(e,[o],t,r,a);throw new TypeError("val must be string, number or Buffer")}function J(e,o,t,r,a){var s=1,h=e.length,C=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,h/=2,C/=2,t/=2}function P(Te,Ie){return s===1?Te[Ie]:Te.readUInt16BE(Ie*s)}var N;if(a){var L=-1;for(N=t;N<h;N++)if(P(e,N)===P(o,L===-1?0:N-L)){if(L===-1&&(L=N),N-L+1===C)return L*s}else L!==-1&&(N-=N-L),L=-1}else for(t+C>h&&(t=h-C),N=t;N>=0;N--){for(var j=!0,de=0;de<C;de++)if(P(e,N+de)!==P(o,de)){j=!1;break}if(j)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return U(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return U(this,e,o,t,!1)};function ee(e,o,t,r){t=Number(t)||0;var a=e.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var h=0;h<r;++h){var C=parseInt(o.substr(h*2,2),16);if(we(C))return h;e[t+h]=C}return h}function oe(e,o,t,r){return se(ye(o,e.length-t),e,t,r)}function Q(e,o,t,r){return se(ze(o),e,t,r)}function pe(e,o,t,r){return se(Ae(o),e,t,r)}function ne(e,o,t,r){return se(We(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ee(this,e,o,t);case"utf8":case"utf-8":return oe(this,e,o,t);case"ascii":case"latin1":case"binary":return Q(this,e,o,t);case"base64":return pe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,o,t);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Z(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function Y(e,o,t){t=Math.min(e.length,t);for(var r=[],a=o;a<t;){var s=e[a],h=null,C=s>239?4:s>223?3:s>191?2:1;if(a+C<=t){var P,N,L,j;switch(C){case 1:s<128&&(h=s);break;case 2:P=e[a+1],(P&192)===128&&(j=(s&31)<<6|P&63,j>127&&(h=j));break;case 3:P=e[a+1],N=e[a+2],(P&192)===128&&(N&192)===128&&(j=(s&15)<<12|(P&63)<<6|N&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:P=e[a+1],N=e[a+2],L=e[a+3],(P&192)===128&&(N&192)===128&&(L&192)===128&&(j=(s&15)<<18|(P&63)<<12|(N&63)<<6|L&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,C=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|h&1023),r.push(h),a+=C}return ce(r)}var X=4096;function ce(e){var o=e.length;if(o<=X)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=X));return t}function ie(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]);return r}function he(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var a="",s=o;s<t;++s)a+=Ve[e[s]];return a}function me(e,o,t){for(var r=e.slice(o,t),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=o,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!1,52,8)};function M(e,o,t,r,a,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=1,h=0;for(this[o]=e&255;++h<t&&(s*=256);)this[o+h]=e/s&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=t-1,h=1;for(this[o+s]=e&255;--s>=0&&(h*=256);)this[o+s]=e/h&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=0,h=1,C=0;for(this[o]=e&255;++s<t&&(h*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=t-1,h=1,C=0;for(this[o+s]=e&255;--s>=0&&(h*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ve(e,o,t,r,a,s){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xe(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return xe(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return xe(this,e,o,!1,t)};function re(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var a=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),a},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<t;++s)this[s]=e;else{var h=n.isBuffer(e)?e:n.from(e,r),C=h.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<t-o;++s)this[s+o]=h[s%C]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,o){o=o||1/0;for(var t,r=e.length,a=null,s=[],h=0;h<r;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!a){if(t>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(h+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=t;continue}if(t<56320){(o-=3)>-1&&s.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,t<128){if((o-=1)<0)break;s.push(t)}else if(t<2048){if((o-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function We(e,o){for(var t,r,a,s=[],h=0;h<e.length&&!((o-=2)<0);++h)t=e.charCodeAt(h),r=t>>8,a=t%256,s.push(a),s.push(r);return s}function Ae(e){return i.toByteArray(je(e))}function se(e,o,t,r){for(var a=0;a<r&&!(a+t>=o.length||a>=e.length);++a)o[a+t]=e[a];return a}function $(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function we(e){return e!==e}var Ve=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)o[r+a]=e[t]+e[a];return o}()}),Us=Tr((c,i)=>{T();var l=i.exports={},d,u;function _(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(v){d=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=m}catch(v){u=m}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(A){try{return d.call(null,v,0)}catch(S){return d.call(this,v,0)}}}function E(v){if(u===clearTimeout)return clearTimeout(v);if((u===m||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(v);try{return u(v)}catch(A){try{return u.call(null,v)}catch(S){return u.call(this,v)}}}var g=[],x=!1,w,k=-1;function I(){!x||!w||(x=!1,w.length?g=w.concat(g):k=-1,g.length&&f())}function f(){if(!x){var v=n(I);x=!0;for(var A=g.length;A;){for(w=g,g=[];++k<A;)w&&w[k].run();k=-1,A=g.length}w=null,x=!1,E(v)}}l.nextTick=function(v){var A=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)A[S-1]=arguments[S];g.push(new b(v,A)),g.length===1&&!x&&n(f)};function b(v,A){this.fun=v,this.array=A}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Rl,Os,Rs,T=Wn(()=>{Rl=F(Ls()),Os=F(Us()),Rs=function(c){function i(){var d=this||self;return delete c.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),nr={};Ir(nr,{default:()=>Dl});var hr,Ka,Dl,qr=Wn(()=>{"use strict";T(),hr=F(p("react")),Ka=c=>hr.createElement("svg",Ee({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},c),hr.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),hr.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Dl=Ka}),Pl={};Ir(Pl,{default:()=>Ml});var gr,Ja,Ml,Ds=Wn(()=>{"use strict";T(),gr=F(p("react")),Ja=c=>gr.createElement("svg",Ee({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},c),gr.createElement("g",null,gr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Ml=Ja}),Fl={};Ir(Fl,{Form:()=>P_});sp.exports=Gt(Fl);T();T();var Ne=F(p("react")),Qa=p("@terradharitri/sdk-core/out"),Ps=F(p("classnames")),Ms=p("formik");T();var Fs=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fs));var ue={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};T();T();var jl=F(p("react"));T();var js=F(p("react")),K2=(0,js.createContext)({});T();T();var zs=F(p("react")),J2=p("@terradharitri/sdk-dapp/constants/index"),Q2=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ew=F(p("bignumber.js")),ow=p("formik");T();T();T();var tw=p("bech32");T();T();T();var St=(c,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(c);T();T();var xt=p("@terradharitri/sdk-dapp/types/tokens.types"),Ws=c=>!["REWA","DCDT"].includes(c);T();T();var Vs=p("@terradharitri/sdk-dapp/constants"),Gs=p("@terradharitri/sdk-dapp/utils/account/getAccount"),$s=c=>et(void 0,null,function*(){let i=c.txType==="REWA"?c.amount:Vs.ZERO,l=Ws(c.txType),d=yield(0,Gs.getAccount)(c.receiver),u=d==null?void 0:d.username,_=l?c.senderUsername:u,m=Me(Ee({},c),{amount:i,receiverUsername:_});return delete m.rawReceiverUsername,m});T();T();var el=p("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),Ys=({nft:c,skipDescription:i})=>{var l,d;let{name:u,metadata:_,media:m,isNsfw:n,scamInfo:E,verified:g}=c,x="Scam - ",{isSuspicious:w,message:k}=(0,el.getScamFlag)({verified:g,message:u,isNsfw:n,scamInfo:E,messagePrefix:x});if(!(_!=null&&_.description)||i){let v=w?"placeholder":(l=m==null?void 0:m[0])==null?void 0:l.thumbnailUrl;return{isSuspicious:w,name:u||k,thumbnail:v,description:""}}let{message:I,isSuspicious:f}=(0,el.getScamFlag)({message:_.description,messagePrefix:x,verified:g}),b=w||f,y=b?"placeholder":(d=m==null?void 0:m[0])==null?void 0:d.thumbnailUrl;return{isSuspicious:b,name:u||k,thumbnail:y,description:I||_.description}};T();var rw=p("@terradharitri/sdk-dapp/utils/buildUrlParams");T();var wn=F(p("anchorme")),En=c=>c.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Zs=(c,i)=>{if(i){let l=`[Message hidden due to suspicious content - ${i.info}]`;if(c.length>1e3)return{output:l,stringWithLinks:c,found:!0};let d=En(c.normalize("NFKC")),u=wn.default.list(d),_=[];if(u.length>0){let m=l;u.forEach((n,E)=>{let{string:g}=n,x="",w="",k=g;for(let I=0;I<m.length;I++){let f=m.slice(I),[b]=wn.default.list(En(f));b&&g===b.string&&(x=m.substring(0,I))}for(let I=l.length;I>0;I--){let f=m.slice(0,I),[b]=wn.default.list(En(f));b&&g===b.string&&(w=m.substring(I))}_.push(x),_.push(k),m=w,E===u.length-1&&_.push(w)})}else _.push(c);return{output:l,stringWithLinks:_.join(""),found:!0}}else return{output:c,stringWithLinks:"",found:!1}};T();T();var nw=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),zl=p("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Hs=p("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),er=p("@terradharitri/sdk-dapp/utils/operations/parseAmount");T();T();T();T();T();T();T();var Wl=F(p("react")),aw=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),lw=p("formik");T();T();var pw=p("@terradharitri/sdk-dapp/constants/index"),cw=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),iw=F(p("bignumber.js"));T();T();var kn=p("@terradharitri/sdk-dapp/constants/index");function Vl({feeLimit:c,rewaPriceInUsd:i}){let l=(0,zl.formatAmount)({input:c,decimals:kn.DECIMALS,digits:kn.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Hs.getUsdValue)({amount:l,usd:i,decimals:kn.DIGITS})}`}T();var sw=p("@terradharitri/sdk-dapp/constants/index");T();T();var Xs="Token can only be transfered to one of the following addresses:",Ks="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.",Gl="5000000000000000",or="0",Js="WREWA-bd4d79";T();var dw=p("@terradharitri/sdk-dapp/constants/index"),uw=F(p("bignumber.js"));T();var mw=p("@terradharitri/sdk-dapp/constants/index");T();var fw=p("@terradharitri/sdk-dapp/constants/index");T();T();var Ft=p("@terradharitri/sdk-core"),Qs=p("@terradharitri/sdk-dapp/constants/index"),ed=F(p("bignumber.js"));function od({amount:c,data:i,nonce:l,receiver:d,receiverUsername:u,sender:_,senderUsername:m,gasPrice:n,gasLimit:E,chainId:g}){let x=new ed.default((0,er.parseAmount)(c));return new Ft.Transaction({nonce:l,value:Ft.TokenPayment.rewaFromBigInteger(x.toString(10)),sender:new Ft.Address(_),receiver:new Ft.Address(d),gasPrice:parseInt(n),gasLimit:parseInt(E),senderUsername:m,receiverUsername:u,data:new Ft.TransactionPayload(i),chainID:g,version:new Ft.TransactionVersion(Qs.VERSION)})}T();function td(c){return isNaN(Number(c))||c===""?(0,er.parseAmount)("0"):(0,er.parseAmount)(c)}function rd(c){return et(this,null,function*(){let{address:i,balance:l,chainId:d,nonce:u,values:_}=c,{amount:m,receiver:n,data:E,gasLimit:g,gasPrice:x,nft:w,receiverUsername:k,senderUsername:I}=_,f=Boolean(w)?i:n;try{return od({balance:l,amount:String(m),gasLimit:String(g),gasPrice:td(x),data:E.trim(),receiver:f,receiverUsername:k,senderUsername:I,sender:i,nonce:u,chainId:d})}catch(b){throw console.log("Prepare transaction error",b),b}})}T();var _w=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");T();var hw=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");T();var gw=F(p("bignumber.js"));T();var vw=p("@terradharitri/sdk-dapp/constants/index"),bw=p("@terradharitri/sdk-dapp/utils/smartContracts"),yw=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),ww=F(p("bignumber.js"));T();var Ew=F(p("bignumber.js"));T();T();var kw=F(p("axios"));T();T();T();var nd=p("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");T();var ad=p("@terradharitri/sdk-dapp/constants/index");T();var ld={D:"devnet",T:"testnet",1:"mainnet"},pd={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function cd(c){return ld[c]}function $l(c){return pd[c]||Js}function id(c){let i=cd(c),l=ad.fallbackNetworkConfigurations[i].apiAddress;if(!l)throw"Could not extract api address for environment, check if you have a valid chainID";return l}function sd(c){return et(this,null,function*(){let i=id(c);return yield(0,nd.getServerConfiguration)(i)})}T();var Ar={value:null};function dd(c){return Ar.value={baseURL:c.apiAddress,timeout:Number(c.apiTimeout)},Ar.value}function ud(c){return et(this,null,function*(){if(Ar.value!=null)return Ar.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),c!=null){let l=yield sd(c);return dd(l)}let i="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(i),i})}T();var xn=p("@terradharitri/sdk-dapp/constants/index"),md=F(p("bignumber.js")),ol,tl,rl,Yl=(0,zl.formatAmount)({input:String((ol=xn.GAS_PRICE)!=null?ol:1e9),decimals:(tl=xn.DECIMALS)!=null?tl:18,showLastNonZeroDecimal:!0,digits:(rl=xn.DIGITS)!=null?rl:4}),xw=new md.default(Yl).times(10).toString(10);T();var Sw=p("@terradharitri/sdk-dapp/constants/index"),Aw=F(p("bignumber.js"));T();var Tw=F(p("bignumber.js"));T();T();var Iw=p("yup");T();var nl=p("@terradharitri/sdk-dapp/constants/ledger.constants"),fd=F(p("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Vn=p("yup"),_d=(0,Vn.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(c){let{ledger:i}=this.parent;return!(i&&c&&c.length&&!i.ledgerDataActive)}),hd=(0,Vn.string)().test({name:"hashSign",test:function(c){let{ledger:i,isGuarded:l}=this.parent;if(i){let{ledgerWithHashSign:d,ledgerWithGuardians:u}=(0,fd.default)(i.version);if(c&&c.length>300&&!d)return this.createError({message:`Data too long. You need at least DharitrI app version ${nl.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!u)return this.createError({message:`You need at least DharitrI app version ${nl.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),gd=[_d,hd],qw=gd.reduce((c,i)=>c.concat(i),(0,Vn.string)());T();var Cw=p("@terradharitri/sdk-dapp/constants/index"),Nw=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Bw=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Lw=p("yup");T();var Uw=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ow=F(p("bignumber.js")),Rw=p("yup");T();var Dw=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Pw=F(p("bignumber.js")),Mw=p("yup");T();var Fw=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),jw=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zw=F(p("bignumber.js")),Ww=p("yup");T();var Vw=F(p("bignumber.js")),Gw=p("yup");T();var $w=p("@terradharitri/sdk-dapp/constants/index"),Yw=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Zw=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Hw=F(p("bignumber.js")),Xw=p("yup");T();var Kw=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Jw=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Qw=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),e4=F(p("bignumber.js")),o4=p("yup");T();var t4=F(p("bignumber.js")),r4=p("yup");T();var n4=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),a4=p("yup");T();var l4=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),p4=p("yup");T();T();var vd=(0,Wl.createContext)({});function Zl(){return(0,Wl.useContext)(vd)}T();T();var bd=F(p("react")),c4=p("formik"),i4=F(p("lodash/uniqBy"));T();T();T();var s4=F(p("axios"));T();T();var yd=F(p("axios"));function wd(){return et(this,null,function*(){try{let c=yield ud(),{data:i}=yield yd.default.get("economics",c);return i}catch(c){return console.error("err fetching economics info",c),null}})}T();T();var d4=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),u4=p("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),m4=F(p("axios")),f4=F(p("lodash/uniqBy"));T();var _4=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),h4=F(p("axios"));T();var g4=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),v4=F(p("axios"));T();T();var Hl=F(p("react")),Ed=(0,Hl.createContext)({});function Cr(){return(0,Hl.useContext)(Ed)}T();T();var al=p("react"),kd=p("@terradharitri/sdk-dapp/constants/index"),Sn=p("@terradharitri/sdk-dapp/types/enums.types");function xd(){let{networkConfig:c}=Cr(),[i,l]=(0,al.useState)(0);function d(){return et(this,null,function*(){let u=yield wd(),_=(u==null?void 0:u.price)||0;l(_)})}return(0,al.useEffect)(()=>{![Sn.EnvironmentsEnum.mainnet,Sn.EnvironmentsEnum.testnet,Sn.EnvironmentsEnum.devnet].includes(c==null?void 0:c.id)||d()},[c==null?void 0:c.id]),{rewaLabel:c.rewaLabel,rewaPriceInUsd:i,digits:kd.DIGITS}}T();var b4=(0,bd.createContext)({});T();T();var y4=p("@terradharitri/sdk-dapp/constants/index"),w4=p("formik");T();T();var Sd=F(p("react")),E4=p("@terradharitri/sdk-dapp/constants/index"),k4=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),x4=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),S4=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),A4=F(p("bignumber.js")),T4=p("formik");T();T();T();T();var I4=F(p("bignumber.js"));T();var q4=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),C4=F(p("bignumber.js"));T();T();var N4=p("react"),B4=p("@terradharitri/sdk-dapp/constants/index"),L4=p("@terradharitri/sdk-dapp/utils/smartContracts"),U4=F(p("bignumber.js")),O4=p("formik");T();var R4=p("react");T();T();var D4=p("@terradharitri/sdk-dapp/constants/index"),P4=F(p("bignumber.js")),M4=(0,Sd.createContext)({}),F4=(0,zs.createContext)({});T();T();var Ad=F(p("react")),j4=p("formik"),z4=(0,Ad.createContext)({});T();T();var Xl=F(p("react")),W4=p("formik");T();T();T();var V4=p("react"),G4=p("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),$4=F(p("lodash/uniqBy"));T();T();var Y4=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Z4=p("@terradharitri/sdk-dapp/utils");T();var H4=p("react");T();var X4=p("react"),K4=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Td=(0,Xl.createContext)({});function Id(){return(0,Xl.useContext)(Td)}T();T();var Kl=F(p("react")),J4=p("formik");T();T();var qd=({knownAddresses:c,inputValue:i,key:l})=>!c||!i?!1:c.some(d=>{var u;return Boolean((u=d[l])==null?void 0:u.startsWith(i))});T();T();T();var Q4=p("react"),e6=p("@terradharitri/sdk-dapp/utils");T();var o6=p("react"),t6=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");T();T();var r6=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),n6=F(p("axios"));T();var a6=F(p("axios")),Cd=(0,Kl.createContext)({});function Jl(){return(0,Kl.useContext)(Cd)}var Nd=(0,jl.createContext)({});function no(){return(0,jl.useContext)(Nd)}T();T();var An=F(p("react")),Bd=F(p("classnames"));T();T();T();var ro=F(p("react")),Ld=p("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");T();var l6=F(p("react")),p6=p("@terradharitri/sdk-dapp/constants/index");T();var Ud=p("react");T();T();var Go=F(p("react")),ll=p("@terradharitri/sdk-dapp/constants/index"),pl=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Od=p("@terradharitri/sdk-dapp/UI/UsdValue/index");T();T();var Ro=F(p("react")),Rd=p("@fortawesome/free-solid-svg-icons"),Dd=p("@fortawesome/react-fontawesome"),cl=F(p("classnames"));T();var Pd=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pd));var _t={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},Md=(qr(),Gt(nr)).default,Ql=c=>{let{avatar:i,type:l}=c;return l==="NonFungibleDCDT"?Ro.default.createElement("div",{className:(0,cl.default)(_t.tokenAvatar,_t.tokenAvatarNFT)},"NFT"):l==="SemiFungibleDCDT"?Ro.default.createElement("div",{className:(0,cl.default)(_t.tokenAvatar,_t.tokenAvatarSFT)},"SFT"):l==="REWA"?Ro.default.createElement("div",{className:_t.tokenAvatar},c.RewaIcon?Ro.default.createElement(c.RewaIcon,null):Ro.default.createElement(Md,null)):i?Ro.default.createElement("div",{className:_t.tokenAvatar},Ro.default.createElement("img",{src:i})):Ro.default.createElement("div",{className:_t.tokenAvatar},Ro.default.createElement(Dd.FontAwesomeIcon,{icon:Rd.faDiamond}))};T();var Fd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fd));var vr={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},jd=({label:c="Amount",amount:i,txType:l,tokenDecimals:d,tokenId:u,rewaLabel:_,rewaPriceInUsd:m,nft:n,tokenAvatar:E})=>{let g=(n==null?void 0:n.decimals)||0,x=l==="DCDT",w=l==="MetaDCDT",k=l==="NonFungibleDCDT",I=w?(0,er.parseAmount)(i,n==null?void 0:n.decimals):i,f=Boolean(n&&i),b=u.split("-")[0],y=x?d:ll.DECIMALS,v=f?Go.default.createElement(pl.FormatAmount,{rewaLabel:_,value:I,decimals:g,digits:l==="MetaDCDT"?ll.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):Go.default.createElement(pl.FormatAmount,{rewaLabel:_,value:(0,er.parseAmount)(i,y),showLabel:!1,decimals:y,showLastNonZeroDecimal:!0,token:x?b:_,"data-testid":"confirmAmount"});return k?null:Go.default.createElement("div",{className:vr.amount},Go.default.createElement("span",{className:ue.label},c),Go.default.createElement("div",{className:vr.token},Go.default.createElement(Ql,{type:l,avatar:E}),Go.default.createElement("div",{className:vr.value},v," ",b)),!x&&Go.default.createElement(Od.UsdValue,{amount:i,usd:m,"data-testid":"confirmUsdValue",className:vr.price}))};T();T();var Be=F(p("react")),zd=p("@terradharitri/sdk-dapp/utils/decoders/decodePart");T();var Wd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wd));var br={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},Vd=(c,i)=>[...c.matchAll(new RegExp(i,"gi"))].map(l=>l.index),Gd=({label:c="Data",scCallLabel:i="SC Call",data:l,highlight:d,isScCall:u})=>{let _=Be.default.createElement(Be.default.Fragment,null,l),[m,...n]=d&&u?d.split("@"):[];if(l&&d&&Vd(l,d).length===1)switch(!0){case l.startsWith(d):{let[,E]=l.split(d);_=Be.default.createElement(Be.default.Fragment,null,d,Be.default.createElement("span",null,E));break}case l.endsWith(d):{let[E]=l.split(d);_=Be.default.createElement(Be.default.Fragment,null,Be.default.createElement("span",null,E),d);break}default:{let[E,g]=l.split(d);_=Be.default.createElement(Be.default.Fragment,null,Be.default.createElement("span",null,E),d,Be.default.createElement("span",null,g));break}}return Be.default.createElement(Be.default.Fragment,null,m&&Be.default.createElement("div",{className:br.data},Be.default.createElement("span",{className:ue.label},i),Be.default.createElement("div",{"data-testid":"confirmScCall",className:br.value},[(0,zd.decodePart)(m),...n].join("@"))),Be.default.createElement("div",{className:br.data},Be.default.createElement("span",{className:ue.label},c),Be.default.createElement("div",{"data-testid":"confirmData",className:br.value},l?_:"N/A")))};T();T();var ht=F(p("react")),$d=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");T();var Yd=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yd));var yr={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},Zd=({rewaPriceInUsd:c,label:i="Fee",feeLimit:l,rewaLabel:d})=>ht.default.createElement("div",{className:yr.fee},ht.default.createElement("span",{className:ue.label},i),ht.default.createElement("div",{className:yr.token},ht.default.createElement(Ql,{type:"REWA"}),ht.default.createElement("div",{className:yr.value},ht.default.createElement($d.FormatAmount,{rewaLabel:d,value:l,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),l!==or&&ht.default.createElement("span",{className:yr.price},Vl({feeLimit:l,rewaPriceInUsd:c})));T();T();var uo=F(p("react")),Hd=p("@fortawesome/free-solid-svg-icons"),Xd=p("@fortawesome/react-fontawesome"),Kd=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),Jd=p("@terradharitri/sdk-dapp/UI/CopyButton"),Qd=p("@terradharitri/sdk-dapp/UI/ExplorerLink"),eu=p("@terradharitri/sdk-dapp/UI/Trim"),ou=F(p("classnames"));T();var{default:tr}=(Ds(),Gt(Pl));T();var tu=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tu));var To={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},ru=({label:c="Receiver",receiver:i,scamReport:l,receiverUsername:d})=>{let u=Boolean(d),_=d!=null?d:i;return uo.default.createElement("div",{className:To.confirmReceiver},uo.default.createElement("span",{className:ue.label},c),uo.default.createElement("span",{className:(0,ou.default)(To.value,{[To.shrunk]:u}),"data-testid":"confirmReceiver"},u&&uo.default.createElement(tr,{className:To.icon}),_,u&&uo.default.createElement(Qd.ExplorerLink,{page:`/${Kd.ACCOUNTS_ENDPOINT}/${i}`,className:To.explorer})),u&&uo.default.createElement("span",{className:To.subValue},uo.default.createElement(eu.Trim,{text:i,className:To.subValueTrim}),uo.default.createElement(Jd.CopyButton,{text:i,className:To.subValueCopy})),l&&uo.default.createElement("div",{className:To.scam},uo.default.createElement("span",null,uo.default.createElement(Xd.FontAwesomeIcon,{icon:Hd.faExclamationTriangle,className:To.icon}),uo.default.createElement("small",{"data-testid":"confirmScamReport"},l))))};T();T();var gt=F(p("react"));T();T();var Ge=F(p("react")),nu=p("@fortawesome/free-solid-svg-icons"),au=p("@fortawesome/react-fontawesome"),lu=F(p("@terradharitri/sdk-dapp/constants/index")),pu=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),cu=F(p("classnames"));T();var iu=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(iu));var jt={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},su=(qr(),Gt(nr)).default,il=({RewaIcon:c,inDropdown:i=!1,isRewa:l,nftTokenDetails:d,nftType:u,token:_})=>{var m,n;let{name:E,identifier:g,balance:x,decimals:w}=_,k=((m=_.assets)==null?void 0:m.svgUrl)||((n=_.assets)==null?void 0:n.pngUrl)||"",I=k?28:20,[f,b]=(0,Ge.useState)(E);(0,Ge.useEffect)(()=>{var S;(S=d==null?void 0:d.uris)!=null&&S.some(O=>{let D=Rl.Buffer.from(String(O),"base64").toString(),{found:U}=Zs(D,d==null?void 0:d.scamInfo);return U})||b(E)},[E]);let y=Ge.default.createElement(au.FontAwesomeIcon,{icon:nu.faDiamond});u==xt.NftEnumType.NonFungibleDCDT&&(y=Ge.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-nft`},"NFT")),u===xt.NftEnumType.SemiFungibleDCDT&&(y=Ge.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-sft`},"SFT"));let v=!i&&u!==xt.NftEnumType.NonFungibleDCDT,A=Ge.default.createElement("div",{className:jt.tokenElementCircle},y);return k&&(A=Ge.default.createElement("img",{className:jt.tokenElementCircle,src:k,alt:E,height:I})),l&&(A=Ge.default.createElement("div",{className:jt.tokenElementCircle},c?Ge.default.createElement(c,{height:36}):Ge.default.createElement(su,{height:36}))),Ge.default.createElement("div",{className:(0,cu.default)(ue.value,jt.tokenElement)},Ge.default.createElement("div",{className:jt.tokenElementWrapper},A),Ge.default.createElement("div",{"data-testid":"tokenName"},Ge.default.createElement("span",{"data-testid":`${g}-element`},Ge.default.createElement("span",null,f)," ",Ge.default.createElement("span",{className:jt.tokenElementIdentifier},g)),v&&Ge.default.createElement(pu.FormatAmount,{rewaLabel:g,value:x||or,digits:u===xt.NftEnumType.SemiFungibleDCDT?0:lu.DIGITS,token:g,showLabel:!1,decimals:w,"data-testid":`${g}-balance`})))};T();var du=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(du));var uu={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},mu=({RewaIcon:c,rewaLabel:i,isDcdtTransaction:l,nft:d,tokenAvatar:u,tokenId:_,tokenIdError:m})=>{var n;let E=(d==null?void 0:d.name)||"";return gt.default.createElement("div",{className:uu.token},gt.default.createElement("span",{className:ue.label},d?gt.default.createElement("span",null,d==null?void 0:d.name," "):"","Token"),gt.default.createElement("div",null,d?gt.default.createElement(il,{inDropdown:!0,token:{name:d==null?void 0:d.name,identifier:d==null?void 0:d.identifier,decimals:0,balance:or,ticker:"",assets:{svgUrl:((n=d==null?void 0:d.assets)==null?void 0:n.svgUrl)||""}}}):gt.default.createElement(il,{inDropdown:!0,token:{name:l?E:"DharitrI eGold",identifier:l?_:i,decimals:0,balance:or,ticker:"",assets:{svgUrl:u||""}},isRewa:_===i,RewaIcon:c})),m&&gt.default.createElement("div",{className:ue.error},m))},Vt=class extends Ud.Component{render(){return null}};Vt.Receiver=ru,Vt.Amount=jd,Vt.Fee=Zd,Vt.Data=Gd,Vt.Token=mu;var Tn=Vt;T();T();var $o=F(p("react")),sl=F(p("classnames"));T();var fu=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fu));var _o={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"},ep=c=>{let i=c,{txType:l,onClick:d,identifier:u}=i,_=Ul(i,["txType","onClick","identifier"]),{name:m,thumbnail:n}=Ys({nft:_}),E=["NonFungibleDCDT","SemiFungibleDCDT"].includes(l),g=l==="NonFungibleDCDT"?"NFT":"SFT",x=w=>{w.preventDefault(),d&&d(w,Object.assign(_,{identifier:u}))};return E?$o.default.createElement("div",{onClick:x,"data-testid":"token-preview",className:(0,sl.default)(_o.preview,{[_o.clickable]:Boolean(d)})},$o.default.createElement("img",{src:n,className:_o.image}),$o.default.createElement("div",{className:_o.content},$o.default.createElement("div",{className:_o.left},$o.default.createElement("div",{"data-testid":"token-preview-name",className:_o.name},m),$o.default.createElement("div",{"data-testid":"token-preview-identifier",className:_o.identifier},u)),$o.default.createElement("div",{className:_o.right},$o.default.createElement("div",{className:(0,sl.default)(_o.badge,{[_o.nft]:l==="NonFungibleDCDT",[_o.sft]:l==="SemiFungibleDCDT"})},g)))):null};T();var _u=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_u));var kt={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};T();T();var In=p("@terradharitri/sdk-dapp/types/enums.types"),hu=({providerType:c,hasGuardianScreen:i})=>i?"Confirm & Continue":c===In.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":c===In.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":c===In.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";T();var gu=({receiverAddress:c,knownAddresses:i,existingReceiverUsername:l})=>{if(l)return l;let d=i==null?void 0:i.find(u=>u.address===c);return d==null?void 0:d.username},vu=({isConfirmCloseBtnVisible:c=!0,providerType:i})=>{var l;let{setIsGuardianScreenVisible:d}=Zl(),{receiverUsernameInfo:{receiverUsername:u},receiverInfo:{scamError:_,receiver:m,knownAddresses:n},formInfo:E,gasInfo:{gasCostError:g,feeLimit:x},accountInfo:{isGuarded:w},dataFieldInfo:{data:k},amountInfo:I,tokensInfo:f}=no(),{tokenId:b,tokenDetails:y,nft:v,rewaPriceInUsd:A,rewaLabel:S}=f,{readonly:O,onCloseForm:D,onInvalidateForm:U,onPreviewClick:J,onSubmitForm:ee,txType:oe,hasGuardianScreen:Q}=E,pe=()=>{d(!0)},[ne,Z]=(0,ro.useState)(!1),Y=oe==="NonFungibleDCDT",X=hu({providerType:i,hasGuardianScreen:Q}),ce=me=>{me.preventDefault(),O?D():U()},ie=()=>{if(w&&Q)return pe();Z(!0),ee()},be=!["REWA","DCDT","MetaDCDT"].includes(oe),he=gu({knownAddresses:n,receiverAddress:m,existingReceiverUsername:u});return ro.default.createElement("div",{className:kt.summary},ro.default.createElement("div",{className:kt.fields},be&&v&&ro.default.createElement(ep,Ee({onClick:J,txType:oe},v)),ro.default.createElement(Ld.ConfirmReceiver,{amount:I.amount,scamReport:_!=null?_:null,receiver:m,receiverUsername:he}),ro.default.createElement("div",{className:kt.columns},!Y&&ro.default.createElement("div",{className:kt.column},ro.default.createElement(Tn.Amount,{txType:oe,tokenId:b,tokenDecimals:y.decimals,amount:String(I.amount),nft:v,rewaPriceInUsd:A,rewaLabel:S,tokenLabel:y.name,tokenAvatar:((l=y.assets)==null?void 0:l.svgUrl)||""})),ro.default.createElement("div",{className:kt.column},ro.default.createElement(Tn.Fee,{rewaLabel:S,rewaPriceInUsd:A,feeLimit:x}))),ro.default.createElement(Tn.Data,{data:k}),g&&ro.default.createElement("p",{className:ue.error},g)),ro.default.createElement("div",{className:kt.buttons},ro.default.createElement("button",{className:ue.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:ne,onClick:ie},X),c&&ro.default.createElement("button",{className:ue.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:ce},O?"Close":"Back")))},bu=c=>{let{formInfo:{setHasGuardianScreen:i}}=no();return(0,An.useEffect)(()=>{c.hasGuardianScreen&&i(!0)},[]),An.default.createElement("div",{className:(0,Bd.default)(kt.confirm,c.className),"data-testid":"confirmScreen"},An.default.createElement(vu,Ee({},c)))};T();T();T();var De=F(p("react")),dl=p("@fortawesome/free-solid-svg-icons"),ul=p("@fortawesome/react-fontawesome"),qn=F(p("classnames")),yu=p("formik"),wu=F(p("react-select"));T();T();var Eu=F(p("react")),ku=p("react-select");T();var xu=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xu));var ae={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},Su=c=>Eu.default.createElement(ku.components.Control,Me(Ee({},c),{className:ae.receiverSelectControl}));T();T();var Cn=F(p("react")),Au=p("@fortawesome/free-solid-svg-icons"),Tu=p("@fortawesome/react-fontawesome"),Iu=F(p("classnames")),qu=p("react-select");T();T();var Gn=(c,i)=>{let l=i.toLowerCase(),d=c.label.toLowerCase(),u=c.value.toLowerCase();return i?d.includes(l)||u.includes(l):!0};T();var Cu=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Nu=p("@terradharitri/sdk-dapp/utils"),ml=c=>c?c.filter(i=>(0,Nu.addressIsValid)(i.address)).map(i=>{let l=i.username?String((0,Cu.trimUsernameDomain)(i.username)):i.address;return{value:i.address,label:l}}):[];T();var Bu=({setOption:c,setAllValues:i})=>(l,d)=>{["input-blur","menu-close"].includes(d.action)||(i(l),l||c(null))};T();var Lu=({setInputValue:c,setOption:i,changeAndBlurInput:l})=>d=>{!d||(i(d),l(d.value),d.value!==d.label?c(d.label):c(d.value))};T();var Uu=({options:c,usernameAccounts:i,knownAddresses:l,setFieldValue:d,setInputValue:u,setOption:_})=>m=>{var n,E,g,x;let w=c.find(A=>A.value===m&&A.value!==A.label),k=w==null?void 0:w.label,I,f,b=(n=i[m])==null?void 0:n.username;b&&(k=b,I=b,f=(E=i[m])==null?void 0:E.rawUsername);let y=l.find(A=>A.address===m);y!=null&&y.username&&(k=y==null?void 0:y.username,I=y==null?void 0:y.username,f=y==null?void 0:y.rawUsername);let v=k!=null?k:m;u(v),_({value:m,label:v}),d("receiver",(x=(g=i[m])==null?void 0:g.address)!=null?x:m),d("receiverUsername",I),d("rawReceiverUsername",f)},Ou=c=>{let{selectProps:i,isDisabled:l,options:d}=c,{menuIsOpen:u,value:_,isLoading:m}=i,n=(0,Cn.useMemo)(()=>d.find(w=>{let k=w,I=_;return I?Gn(k,I.label):null}),[_,d]),E=d.length===0&&!m,g=Boolean(_)&&!n,x=l||E||g;return m?Cn.default.createElement(Tu.FontAwesomeIcon,{icon:Au.faSpinner,spin:!0,className:ae.receiverSelectSpinner}):Cn.default.createElement(qu.components.DropdownIndicator,Me(Ee({},c),{className:(0,Iu.default)(ae.receiverSelectIndicator,{[ae.expanded]:u,[ae.hidden]:x})}))};T();T();var Ru=F(p("react")),Du=p("@terradharitri/sdk-dapp/utils"),Pu=F(p("classnames")),Mu=p("react-select");T();T();var Fu=(c,i)=>{let l=c.current;if(!l||!l.state.focusedOption)return!1;let d=l.state.focusedOption,u=d.label.toLowerCase(),_=d.value.toLowerCase(),m=u!==_,n=m&&u.startsWith(i.toLowerCase());return m&&!i?!0:n},ju=c=>i=>{let{selectProps:l,value:d}=i,{inputValue:u,menuIsOpen:_}=l,{receiverUsernameInfo:{receiverUsername:m}}=no(),n=Fu(c,u),E=(0,Du.addressIsValid)(String(d)),g=Boolean(m)||n,x=E&&_||!E&&u;return Ru.default.createElement(Mu.components.Input,Me(Ee({},i),{"data-testid":"receiver",className:(0,Pu.default)(ae.receiverSelectInput,{[ae.visible]:x,[ae.spaced]:g})}))};T();T();var zu=F(p("react")),Wu=p("react-select"),Vu=c=>zu.default.createElement(Wu.components.Menu,Me(Ee({},c),{className:ae.receiverSelectMenu}));T();T();var Ke=F(p("react")),Nn=p("@terradharitri/sdk-dapp/UI/Trim"),wr=F(p("classnames")),Gu=p("react-select"),$u=c=>{let{selectProps:i,focusedOption:l}=c,{value:d,inputValue:u}=i,_=l,m=_?_.label.toLowerCase():null,n=_&&_.label!==_.value,E=(m&&(!d||d&&u)?m.startsWith(u.toLowerCase()):!1)&&_?_.label.replace(_.label.substring(0,u.length),u):null,g=E&&!u,x=E&&u.length<E.length/2,w=E&&Boolean(u)&&x,k=E&&Boolean(u);return Ke.default.createElement(Ke.default.Fragment,null,w&&!n&&Ke.default.createElement("div",{className:(0,wr.default)(ae.receiverSelectAutocomplete,ae.receiverSelectAutocompleteUntrimmed)},E),k&&n&&Ke.default.createElement("div",{className:(0,wr.default)(ae.receiverSelectAutocomplete,ae.receiverSelectAutocompleteUsername)},Ke.default.createElement(tr,{className:ae.receiverSelectAutocompleteIcon}),E,Ke.default.createElement("span",{className:ae.receiverSelectAutocompleteWrapper},"(",Ke.default.createElement(Nn.Trim,{text:_.value}),")")),g&&Ke.default.createElement("span",{className:(0,wr.default)(ae.receiverSelectAutocomplete,{[ae.receiverSelectAutocompleteUsername]:n})},n?Ke.default.createElement(Ke.default.Fragment,null,Ke.default.createElement("span",null,Ke.default.createElement(tr,{className:(0,wr.default)(ae.receiverSelectAutocompleteIcon,ae.receiverSelectAutocompleteIconMuted)}),_.label),Ke.default.createElement("span",{className:ae.receiverSelectAutocompleteWrapper},"(",Ke.default.createElement(Nn.Trim,{text:_.value}),")")):Ke.default.createElement(Nn.Trim,{text:E})),Ke.default.createElement(Gu.components.MenuList,Me(Ee({},c),{className:ae.receiverSelectList})))};T();T();var Do=F(p("react")),fl=p("@terradharitri/sdk-dapp/UI/Trim"),Yu=F(p("classnames")),Zu=p("react-select");T();T();var Er=F(p("react"));T();var Hu=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hu));var Xu={highlight:"dapp-core-component__styles-modules__highlight"},op=({highlight:c,text:i=""})=>{let l=i.split(" "),d=c.toLowerCase(),u=new RegExp(`(${d})`,"gi"),_=l.map(m=>m.split(u).filter(n=>n));return Er.default.createElement("span",{className:Xu.highlight},_.map((m,n)=>{let E=`${m}-${n}`;return Er.default.createElement("span",{key:E},m.map((g,x)=>{let w=g.toLowerCase()===d,k=d&&w,I=`${g}-${x}`;return k?Er.default.createElement("strong",{key:I},g):Er.default.createElement("span",{key:I},g)}))}))},Ku=c=>{let{isFocused:i,data:l,selectProps:d}=c,{inputValue:u}=d,_=l,m=_.value!==_.label;return Do.default.createElement(Zu.components.Option,Me(Ee({},c),{className:(0,Yu.default)(ae.receiverSelectOption,{[ae.focused]:i})}),m?Do.default.createElement(Do.default.Fragment,null,Do.default.createElement("span",{className:ae.receiverSelectOptionUsername},Do.default.createElement(tr,{className:ae.receiverSelectOptionUsernameIcon}),Do.default.createElement(op,{text:_.label,highlight:u})),Do.default.createElement("span",{className:ae.receiverSelectOptionNameWrapper},"(",Do.default.createElement(fl.Trim,{text:_.value,className:ae.receiverSelectOptionName}),")")):Do.default.createElement(fl.Trim,{text:_.value,className:ae.receiverSelectOptionName}))};T();T();var Ju=F(p("react")),Qu=F(p("classnames")),em=p("react-select"),om=c=>{let{selectProps:i,isFocused:l,className:d}=c,{menuIsOpen:u}=i;return Ju.default.createElement(em.components.SelectContainer,Me(Ee({},c),{className:(0,Qu.default)(d,{[ae.expanded]:u,[ae.focused]:l&&u})}))};T();T();var Po=F(p("react")),_l=p("@terradharitri/sdk-dapp/UI/Trim"),tm=p("@terradharitri/sdk-dapp/utils"),rm=F(p("classnames")),nm=p("react-select"),am=c=>{let{selectProps:i,isDisabled:l}=c,{value:d,menuIsOpen:u}=i,_=d,{receiverInfo:{receiver:m},receiverUsernameInfo:{receiverUsername:n}}=no(),E=n!=null?n:_&&_.value!==_.label,g=_?{value:m!=null?m:_.value,label:_.label}:null,x=g&&(E||!E&&!u)&&(0,tm.addressIsValid)(g.value);return Po.default.createElement(nm.components.ValueContainer,Me(Ee({},c),{className:ae.receiverSelectValue}),x&&Po.default.createElement("span",{className:(0,rm.default)(ae.receiverSelectSingle,{[ae.disabled]:l})},E?Po.default.createElement(Po.default.Fragment,null,Po.default.createElement("span",{className:ae.receiverSelectSingleUsername},Po.default.createElement(tr,{className:ae.receiverSelectSingleUsernameIcon}),g.label),Po.default.createElement("span",{className:ae.receiverSelectSingleTrimWrapper},"(",Po.default.createElement(_l.Trim,{text:g.value,className:ae.receiverSelectSingleTrim}),")")):Po.default.createElement(_l.Trim,{text:g.value,className:ae.receiverSelectSingleTrim})),c.children)};T();T();var lm=p("formik"),tp=()=>{let{receiverInfo:{receiverError:c,isReceiverInvalid:i},receiverUsernameInfo:{receiverUsernameError:l,isReceiverUsernameInvalid:d,receiverUsername:u}}=no(),{touched:{receiver:_}}=(0,lm.useFormikContext)(),m=i&&_||d;return u!=null&&u.startsWith("drt1")?{isInvalid:i,receiverErrorDataTestId:"receiverError",error:c}:{isInvalid:m,receiverErrorDataTestId:d?"receiverUsernameError":"receiverError",error:d?l:c}};T();T();var pm=p("@terradharitri/sdk-dapp/utils"),cm=p("formik");T();T();var im=({knownAddresses:c,inputValue:i})=>!c||!i?!1:c.filter(l=>{var d;let u=(d=l.username)!=null?d:l.address,_=l.address;return Gn({label:u,value:_,data:{label:u,value:_}},i)}).length>0,sm=({menuIsOpen:c})=>{let{isInvalid:i}=tp(),{values:{nft:l}}=(0,cm.useFormikContext)(),{showUsernameError:d,isUsernameLoading:u,isUsernameDebouncing:_,usernameIsAmongKnown:m,searchQueryIsAddress:n}=Jl(),{receiverInputValue:E,knownAddresses:g}=Id(),x=qd({key:"address",knownAddresses:g,inputValue:E}),w=im({inputValue:E,knownAddresses:g}),k=n&&(!x||!c)&&!(0,pm.addressIsValid)(E),I=Boolean(d&&!(c&&x)&&!(c&&m));return{isAddressError:k||(l?i:!1),isUsernameError:I,isRequiredError:i&&!I&&!u&&!_&&!k&&!w&&!E,isReceiverDropdownOpened:E&&w&&c}},dm=c=>{let i=(0,De.useRef)(null),{className:l}=c,{setFieldValue:d}=(0,yu.useFormikContext)(),{receiverInfo:{scamError:u,fetchingScamAddress:_,receiverInputValue:m,setReceiverInputValue:n,knownAddresses:E,receiver:g,onBlurReceiver:x,onChangeReceiver:w},receiverUsernameInfo:{receiverUsername:k},formInfo:{readonly:I}}=no(),[f,b]=(0,De.useState)(!1),[y,v]=(0,De.useState)(g?{label:g,value:g}:null),{receiverErrorDataTestId:A,error:S}=tp(),{isAddressError:O,isUsernameError:D,isRequiredError:U,isReceiverDropdownOpened:J}=sm({menuIsOpen:f}),{usernameAccounts:ee,isUsernameLoading:oe}=Jl(),Q=()=>{x(new Event("blur"));let B=E==null?void 0:E.find(M=>M.username===m&&M.address===g);B&&(d("receiver",B.address),d("receiverUsername",B.username),d("rawReceiverUsername",B.rawUsername))},pe=E==null?void 0:E.find(B=>B.username===m&&B.address===g),ne=(0,De.useMemo)(()=>ml(E),[E]),Z=pe?ml([pe]):ne,Y=Uu({setFieldValue:d,setInputValue:n,setOption:v,options:Z,knownAddresses:E!=null?E:[],usernameAccounts:ee}),X=(0,De.useCallback)(Bu({setAllValues:Y,setOption:v}),[]),ce=(0,De.useCallback)(B=>{w(B?B.trim():""),setTimeout(Q)},[]),ie=Lu({changeAndBlurInput:ce,setOption:v,setInputValue:n}),be=(0,De.useMemo)(()=>ju(i),[i]);(0,De.useEffect)(()=>{if(!g)return;let B=Object.keys(ee).find(M=>{var ve;return((ve=ee[M])==null?void 0:ve.address)===g});Y(B!=null?B:g),B&&n(B)},[ee,g]);let he=O||D||U,me=he&&!f;return De.default.createElement("div",{className:(0,qn.default)(ae.receiver,l)},De.default.createElement("div",{className:ue.label,"data-testid":"receiverLabel","data-loading":_},"Receiver"),De.default.createElement(wu.default,{value:y,onInputChange:X,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:St("receiver",I),options:Z,filterOption:Gn,noOptionsMessage:()=>null,onChange:ie,onBlur:Q,isMulti:!1,ref:i,inputValue:m,onMenuClose:()=>b(!1),onMenuOpen:()=>b(!0),components:{Menu:Vu,Input:be,Control:Su,ValueContainer:am,DropdownIndicator:Ou,SelectContainer:om,MenuList:$u,Option:Ku,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,qn.default)(ae.receiverSelectContainer,{[ae.opened]:J,[ae.invalid]:he||u})}),me&&De.default.createElement("div",{"data-testid":A,className:ue.error},S),oe&&De.default.createElement("div",{className:ae.loading},"Loading..."),k&&De.default.createElement("span",{className:ae.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",De.default.createElement(ul.FontAwesomeIcon,{icon:dl.faCheck,className:ae.foundIcon})),u&&De.default.createElement("div",{"data-testid":"receiverScam",className:(0,qn.default)(ue.error,ue.scam)},De.default.createElement("span",null,De.default.createElement(ul.FontAwesomeIcon,{icon:dl.faExclamationTriangle}),De.default.createElement("small",null,u))))};T();T();var ho=F(p("react")),um=F(p("bignumber.js")),Bn=F(p("classnames"));T();var mm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mm));var vt={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"},fm=c=>{let{className:i}=c,{formInfo:{readonly:l},amountInfo:d,tokensInfo:u}=no(),{amount:_,error:m,onFocus:n,onBlur:E,onChange:g,isInvalid:x,onMaxClicked:w,maxAmountAvailable:k,isMaxButtonVisible:I}=d,{nft:f}=u,b=f!=null&&f.balance?new um.default(f.balance).isGreaterThan(0):!1,y=v=>{v.preventDefault(),w()};return ho.default.createElement("div",{className:(0,Bn.default)(vt.amount,i)},ho.default.createElement("div",{className:vt.label},ho.default.createElement("label",{htmlFor:"amount",className:ue.label},"Amount"),b&&f&&ho.default.createElement("div",{"data-value":`${k} ${f.identifier}`,className:(0,Bn.default)(vt.balance,i)},ho.default.createElement("span",null,"Available:")," ",ho.default.createElement("span",{"data-testid":`available-${f.identifier}`,className:vt.available},ho.default.createElement("span",{className:vt.amount},k)," ",f.ticker))),ho.default.createElement("div",{className:vt.wrapper},ho.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:_,disabled:St("amount",l),onFocus:n,onBlur:E,onChange:g,autoComplete:"off",className:(0,Bn.default)(ue.input,{[ue.invalid]:x,[ue.disabled]:St("amount",l)})}),I&&ho.default.createElement("a",{href:"/","data-testid":"maxBtn",className:vt.max,onClick:y,onMouseDown:v=>{v.preventDefault()}},"Max")),x&&ho.default.createElement("div",{className:ue.error,"data-testid":"amountError"},m))};T();T();var lo=F(p("react")),hl=p("@fortawesome/free-solid-svg-icons"),gl=p("@fortawesome/react-fontawesome"),_m=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),vl=F(p("classnames")),hm=F(p("react-collapsed"));T();var Yo=F(p("react")),gm=p("@fortawesome/free-solid-svg-icons"),vm=p("@fortawesome/react-fontawesome"),bm=F(p("bignumber.js")),bl=F(p("classnames")),ym=p("react-number-format");T();T();var bt=p("@terradharitri/sdk-dapp/constants/index"),wm=p("@terradharitri/sdk-dapp/utils/validation"),Zo=F(p("bignumber.js")),Em=(c,i)=>{let l=i!=null?i:bt.DIGITS;if((0,wm.stringIsFloat)(c)){if(new Zo.default(c).isZero())return"0";let d=new Zo.default(c).toFormat(l);return d=parseFloat(d)>0?d:new Zo.default(c).toFormat(bt.DIGITS),d=parseFloat(d)>0?d:new Zo.default(c).toFormat(bt.DIGITS+2),d=parseFloat(d)>0?d:new Zo.default(c).toFormat(bt.DIGITS+4),d=parseFloat(d)>0?d:new Zo.default(c).toFormat(bt.DIGITS+6),d=parseFloat(d)>0?d:new Zo.default(c).toFormat(bt.DIGITS+10),parseFloat(d)>0?d:new Zo.default(c).toFormat(bt.DIGITS+14)}return"0"};T();var yl=c=>c.replace(/,/g,"");T();var wl=p("react"),km={value:"",count:0},xm=(c,i)=>{let[l,d]=(0,wl.useState)(km);return(0,wl.useEffect)(()=>{let u=setTimeout(()=>{d(c)},i);return()=>clearTimeout(u)},[c.count]),l};T();var Sm=F(p("bignumber.js")),$n=c=>{let[i,l]=c.split(""),d=new Sm.default(i).isZero();return Boolean(d&&l&&l!==".")};T();var Am=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Am));var Qe={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},Tm=()=>{let{formInfo:c,gasInfo:i}=no(),{readonly:l}=c,{defaultGasLimit:d,onResetGasLimit:u,onChangeGasLimit:_,onBlurGasLimit:m,gasLimit:n,gasLimitError:E,isGasLimitInvalid:g}=i,x=b=>{b.preventDefault(),u()},w=({value:b,floatValue:y})=>(!y||!(0,bm.default)(y).isNaN())&&!$n(b),k=b=>{_(b.value,!0)},I=n!==d&&!l,f=St("gasLimit",l);return Yo.default.createElement("div",{className:Qe.gas},Yo.default.createElement("label",{className:ue.label,htmlFor:"gasLimit"},"Gas Limit"),Yo.default.createElement("div",{className:Qe.wrapper},Yo.default.createElement(ym.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:f,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:m,onValueChange:k,required:!0,isAllowed:w,thousandSeparator:",",thousandsGroupStyle:"thousand",value:n,valueIsNumericString:!0,allowNegative:!1,className:(0,bl.default)(ue.input,Qe.input,{[ue.disabled]:f,[ue.invalid]:g,[Qe.spaced]:I})}),I&&Yo.default.createElement("div",{className:Qe.actions},Yo.default.createElement("div",{onClick:x,"data-testid":"gasLimitResetBtn",className:(0,bl.default)(Qe.action,{[Qe.disabled]:f})},Yo.default.createElement(vm.FontAwesomeIcon,{icon:gm.faUndo,className:Qe.icon}))),g&&Yo.default.createElement("div",{className:ue.error,"data-testid":"gasLimitError"},E)))};T();T();var Ho=F(p("react")),Im=p("@fortawesome/free-solid-svg-icons"),qm=p("@fortawesome/react-fontawesome"),Cm=F(p("bignumber.js")),El=F(p("classnames")),Nm=p("react-number-format"),Bm=()=>{let{networkConfig:c}=Cr(),{gasInfo:i,formInfo:l}=no(),{readonly:d}=l,{rewaLabel:u}=c,{gasPrice:_,gasPriceError:m,isGasPriceInvalid:n,onChangeGasPrice:E,onBlurGasPrice:g,onResetGasPrice:x}=i,w=_!==Yl&&!d,k=St("gasPrice",d),I=({value:y,floatValue:v})=>(!v||!(0,Cm.default)(v).isNaN())&&!$n(y),f=y=>{y.preventDefault(),x()},b=y=>{E(y.value,!0)};return Ho.default.createElement("div",{className:Qe.gas},Ho.default.createElement("label",{className:ue.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),Ho.default.createElement("div",{className:Qe.wrapper},Ho.default.createElement(Nm.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:k,id:"gasPrice",inputMode:"decimal",isAllowed:I,name:"gasPrice",onBlur:g,onValueChange:b,required:!0,suffix:` ${u}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:_,valueIsNumericString:!0,allowNegative:!1,className:(0,El.default)(ue.input,Qe.input,{[ue.disabled]:k,[ue.invalid]:n,[Qe.spaced]:w})}),w&&Ho.default.createElement("div",{className:Qe.actions},Ho.default.createElement("div",{onClick:f,className:(0,El.default)(Qe.action,{[Qe.disabled]:k})},Ho.default.createElement(qm.FontAwesomeIcon,{icon:Im.faUndo,className:Qe.icon})))),n&&Ho.default.createElement("div",{className:ue.error,"data-testid":"gasPriceError"},m))};T();var Lm=F(p("react"));T();var Um=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Um));var Jo={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"},Om=({feeLimit:c,rewaPriceInUsd:i})=>c===or?null:Lm.default.createElement("span",{className:Jo.fiat,"data-testid":"feeInFiat"},"(",Vl({feeLimit:c,rewaPriceInUsd:i}),")"),Rm=({className:c})=>{let{gasInfo:i,tokensInfo:l}=no(),{feeLimit:d,gasCostLoading:u,gasPriceError:_,gasLimitError:m}=i,{rewaPriceInUsd:n,rewaLabel:E}=l,[g,x]=(0,lo.useState)(Boolean(_||m)),{getCollapseProps:w,getToggleProps:k}=(0,hm.default)({isExpanded:g}),I=()=>{x(f=>!f)};return lo.default.createElement("div",{className:(0,vl.default)(Jo.fee,c)},lo.default.createElement("label",{className:ue.label},"Fee"),lo.default.createElement("div",Ee({className:Jo.trigger},k({onClick:I})),lo.default.createElement("span",{className:Jo.limit,"data-testid":"feeLimit"},lo.default.createElement(_m.FormatAmount,{value:d,showLastNonZeroDecimal:!0,rewaLabel:E})),u&&lo.default.createElement(gl.FontAwesomeIcon,{icon:hl.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),lo.default.createElement(Om,{rewaPriceInUsd:n,feeLimit:d}),lo.default.createElement(gl.FontAwesomeIcon,{icon:hl.faChevronRight,className:(0,vl.default)(Jo.arrow,{[Jo.active]:g})})),lo.default.createElement("div",Ee({className:Jo.expandable},w()),lo.default.createElement("div",{className:Jo.content},lo.default.createElement(Bm,null),lo.default.createElement(Tm,null))))};T();T();var c6=F(p("react")),i6=F(p("@terradharitri/sdk-dapp/constants/index")),s6=F(p("classnames")),d6=F(p("react-select"));T();var Dm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dm));T();T();var go=F(p("react")),Ln=F(p("classnames"));T();var Pm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pm));var Qo={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};T();T();T();var $e=F(p("react")),Mm=p("@terradharitri/sdk-dapp/utils/validation"),Un=F(p("bignumber.js")),kl=F(p("classnames")),Fm=p("react-number-format");T();var jm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jm));var kr={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"},zm=500,xl=1e13,Wm=({"data-testid":c,InfoDustComponent:i,disabled:l,handleBlur:d,handleChange:u,name:_,onDebounceChange:m,onFocus:n,onKeyDown:E,placeholder:g,required:x,usdPrice:w,value:k,usdValue:I,className:f,autoFocus:b,suffix:y})=>{let v=(0,$e.useRef)(null),[A,S]=(0,$e.useState)(),[O,D]=(0,$e.useState)(!1),[U,J]=(0,$e.useState)({value:k,count:0}),[ee,oe]=(0,$e.useState)(),Q=xm(U,zm),pe=Y=>{Y.stopPropagation(),D(!0);let X=yl(Y.target.value),ce=(0,Un.default)(X).isLessThanOrEqualTo(xl);if((X===""||ce)&&(S(X),Y.target.value=X,u(Y),m)){let ie={value:X,count:U.count+1};J(ie)}},ne=()=>{if(I)return oe(`$${I}`);if(!w||!k)return oe(void 0);let Y=yl(k);if(!(k!==""&&(0,Mm.stringIsFloat)(Y))||Y==="")return oe(void 0);let X=Em(new Un.default(Y).times(w!=null?w:0).toString(10),2);oe(`$${X}`)},Z=({value:Y,floatValue:X})=>(!X||(0,Un.default)(X).isLessThanOrEqualTo(xl))&&!$n(Y);return(0,$e.useEffect)(()=>{m&&O&&(D(!1),m(Q.value))},[Q]),(0,$e.useEffect)(ne,[k,I,w]),(0,$e.useEffect)(()=>{k!==A&&S(k)},[k]),$e.default.createElement("div",{ref:v,className:(0,kl.default)(kr.amountHolder,{[kr.showUsdValue]:Boolean(ee)},f)},$e.default.createElement(Fm.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":c||_,decimalSeparator:".",disabled:Boolean(l),id:_,inputMode:"decimal",isAllowed:Z,name:_,onBlur:d,onChange:pe,onFocus:n,onKeyDown:E,placeholder:g,required:x,thousandSeparator:",",thousandsGroupStyle:"thousand",value:A,suffix:y,valueIsNumericString:!0,allowNegative:!1,autoFocus:b,className:(0,kl.default)(ue.input,kr.amountInput,{[ue.disabled]:Boolean(l)})}),ee&&$e.default.createElement("span",{className:kr.amountHolderUsd},$e.default.createElement("small",{"data-testid":`tokenPrice_${w}`},ee!=="$0"?$e.default.createElement($e.default.Fragment,null,"\u2248 "):$e.default.createElement($e.default.Fragment,null),ee),i))},Vm=(0,$e.memo)(Wm,(c,i)=>c.value===i.value&&c.usdPrice===i.usdPrice&&c.className===i.className&&c.disabled===i.disabled&&c.usdValue===i.usdValue);T();T();var Sl=F(p("react"));T();T();var Qt=F(p("react")),Gm=p("@fortawesome/free-solid-svg-icons"),$m=p("@fortawesome/react-fontawesome"),Ym=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Zm=p("react-tooltip"),u6=p("react-tooltip/dist/react-tooltip.css");T();var Hm=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hm));var On={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},Xm=({rewaLabel:c})=>Qt.default.createElement("div",{className:On.infoDust},Qt.default.createElement(Zm.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:On.infoDustTooltip},"A minimal amount of"," ",Qt.default.createElement(Ym.FormatAmount,{rewaLabel:c,value:Gl,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),Qt.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:On.infoDustTrigger},Qt.default.createElement($m.FontAwesomeIcon,{icon:Gm.faInfoCircle,className:"i-icon"}))),Km=({rewaLabel:c,amount:i,maxAmountMinusDust:l,isMaxClicked:d,tokenId:u})=>i===l&&d&&u===c?Sl.default.createElement("span",{style:{marginLeft:"0.2rem"}},Sl.default.createElement(Xm,{rewaLabel:c})):null;T();T();var Jm=F(p("react")),Qm=p("@terradharitri/sdk-dapp/constants"),Al=F(p("bignumber.js")),ef=F(p("classnames"));T();var Tl=F(p("bignumber.js")),of=c=>{let i=new Tl.default(c!=null?c:"0"),l=new Tl.default(Gl),d=i.minus(l);return d.isGreaterThan(0)?d.toString(10):"0"};T();var tf=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tf));var rf={max:"dapp-core-component__maxButton-module__max"};T();var yt=p("@terradharitri/sdk-dapp/constants"),nf=p("@terradharitri/sdk-dapp/utils/operations/formatAmount"),af=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Yn=({amount:c="0",decimals:i=0,digits:l=yt.DIGITS,addCommas:d=!1,showLastNonZeroDecimal:u=!1})=>{if(c==null||!(0,af.stringIsInteger)(c))return"0";let _=n=>(0,nf.formatAmount)({input:c,digits:n,decimals:i,addCommas:d,showLastNonZeroDecimal:u}),m=_(l);return m=parseFloat(m)>0?m:_(yt.DIGITS),m=parseFloat(m)>0?m:_(yt.DIGITS+2),m=parseFloat(m)>0?m:_(yt.DIGITS+4),m=parseFloat(m)>0?m:_(yt.DIGITS+6),m=parseFloat(m)>0?m:_(yt.DIGITS+10),parseFloat(m)>0?m:_(yt.DIGITS+14)},lf=({token:c,rewaLabel:i,inputAmount:l,className:d,onMaxClick:u})=>{var _;let m=(c==null?void 0:c.identifier)===i,n=(_=c==null?void 0:c.balance)!=null?_:"0";if(n==="0")return null;let E=Yn({amount:m?of(n):n,decimals:(c==null?void 0:c.decimals)||Qm.DECIMALS}),g=new Al.default(l).isEqualTo(new Al.default(E)),x=w=>{w.preventDefault(),u==null||u(E)};return g?null:Jm.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,ef.default)(rf.max,d),onClick:x,onMouseDown:w=>{w.preventDefault()}},"Max")};T();T();var Xo=F(p("react")),pf=F(p("classnames")),cf=F(p("react-select")),rp={};Ir(rp,{Control:()=>Af,IndicatorsContainer:()=>Uf,Input:()=>hf,Menu:()=>kf,MenuList:()=>bf,DharitrIIcon:()=>lp,Placeholder:()=>Cf,SmallLoader:()=>uf,ValueComponent:()=>np,getOption:()=>pp,getSingleValue:()=>cp,getValueContainer:()=>ap});T();T();var Il=F(p("react")),sf=p("@fortawesome/free-solid-svg-icons"),df=p("@fortawesome/react-fontawesome"),uf=({show:c,color:i})=>c?Il.default.createElement("div",{className:"d-flex"},Il.default.createElement(df.FontAwesomeIcon,{icon:sf.faSpinner,className:`fa-spin fast-spin ${i||"text-primary"}`})):null;T();T();var mf=F(p("react")),ff=p("react-select");T();var _f=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_f));var fe={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},hf=c=>mf.default.createElement(ff.components.Input,Me(Ee({},c),{className:fe.dropdown,"data-testid":"tokenSelectInput"}));T();var gf=F(p("react")),vf=p("react-select"),bf=c=>{let i=c,{rx:l}=i,d=Ul(i,["rx"]);return gf.default.createElement(vf.components.MenuList,Me(Ee({},d),{className:fe.list}))};T();var Rn=F(p("react")),yf=p("@fortawesome/free-solid-svg-icons"),wf=p("@fortawesome/react-fontawesome"),Ef=p("react-select"),kf=c=>Rn.default.createElement(Ef.components.Menu,Me(Ee({},c),{className:fe.menu}),c.selectProps.isLoading?Rn.default.createElement("div",{className:fe.loading},Rn.default.createElement(wf.FontAwesomeIcon,{icon:yf.faCircleNotch,className:"fa-spin",size:"lg"})):c.children);T();var xf=F(p("react")),Sf=p("react-select"),Af=c=>xf.default.createElement(Sf.components.Control,Me(Ee({},c),{className:fe.control}));T();var Tf=F(p("react")),If=F(p("classnames")),qf=p("react-select"),Cf=c=>Tf.default.createElement(qf.components.Placeholder,Me(Ee({},c),{className:(0,If.default)(fe.placeholder,{[fe.focused]:c.isFocused})}));T();var Nf=F(p("react")),Bf=F(p("classnames")),Lf=p("react-select"),Uf=c=>Nf.default.createElement(Lf.components.IndicatorsContainer,Me(Ee({},c),{className:(0,Bf.default)(fe.indicator,{[fe.expanded]:c.selectProps.menuIsOpen})}));T();var po=F(p("react")),Of=p("@fortawesome/free-solid-svg-icons"),Rf=p("@fortawesome/react-fontawesome"),Df=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Pf=F(p("classnames")),Mf=p("react-select"),Ff=(qr(),Gt(nr)).default,np=({RewaIcon:c,tokenId:i,icon:l})=>{let{isRewa:d}=(0,Df.getIdentifierType)(i);return d?po.default.createElement("span",{className:fe.asset},c?po.default.createElement(c,{className:fe.diamond}):po.default.createElement(Ff,{className:fe.diamond})):l?po.default.createElement("img",{src:l,className:fe.asset}):po.default.createElement(Rf.FontAwesomeIcon,{icon:Of.faDiamond,className:fe.asset})},jf=({children:c})=>po.default.createElement("div",{className:fe.wrapper},c),ap=(c,i,l)=>d=>{var u,_;let{selectProps:m,isDisabled:n,children:E}=d,g=m.value,x=(_=(u=g==null?void 0:g.assets)==null?void 0:u.svgUrl)!=null?_:null,w=(0,po.useMemo)(()=>{let k=String(g==null?void 0:g.token.usdPrice);return k!=null&&k.includes("$")?g==null?void 0:g.token.usdPrice:`$${g==null?void 0:g.token.usdPrice}`},[g==null?void 0:g.token.usdPrice]);return po.default.createElement(Mf.components.ValueContainer,Me(Ee({},d),{className:fe.container}),po.default.createElement("div",{className:(0,Pf.default)(fe.icon,i)},po.default.createElement(np,{RewaIcon:l,rewaLabel:c,icon:x,isDisabled:n,tokenId:g==null?void 0:g.value})),po.default.createElement("div",{className:fe.payload},po.default.createElement(jf,null,E,(g==null?void 0:g.token.usdPrice)&&po.default.createElement("small",{className:fe.price},w))))};T();var Le=F(p("react")),zf=p("@fortawesome/free-solid-svg-icons"),Wf=p("@fortawesome/react-fontawesome"),Vf=p("@terradharitri/sdk-dapp/constants"),Gf=p("@terradharitri/sdk-dapp/UI/UsdValue"),$f=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Yf=F(p("classnames")),Zf=p("react-select"),{default:lp}=(qr(),Gt(nr)),pp=({RewaIcon:c,TokenTickerIcon:i,showBalanceUsdValue:l,showTokenPrice:d})=>u=>{var _,m,n,E;let{data:g,isSelected:x,isFocused:w,isDisabled:k,selectProps:I}=u,f=g,{isRewa:b}=(0,$f.getIdentifierType)(f.value),y=f.token.assets?f.token.assets.svgUrl:null,v=Yn({amount:f.token.balance,decimals:f.token.decimals||Vf.DECIMALS,addCommas:!0}),A=(m=(_=f.token)==null?void 0:_.usdPrice)==null?void 0:m.toString(),S=(E=(n=f.token)==null?void 0:n.valueUSD)==null?void 0:E.toString();return Le.default.createElement("div",{"data-testid":`${u.value}-option`},Le.default.createElement(Zf.components.Option,Me(Ee({},u),{className:(0,Yf.default)(fe.option,{[fe.selected]:x||w,[fe.disabled]:k})}),Le.default.createElement("div",{className:fe.image},b?Le.default.createElement("span",{className:fe.icon},c?Le.default.createElement(c,null):Le.default.createElement(lp,null)):y?Le.default.createElement("img",{src:y,className:fe.icon}):Le.default.createElement("span",{className:fe.icon},Le.default.createElement(Wf.FontAwesomeIcon,{icon:zf.faDiamond,className:fe.diamond}))),Le.default.createElement("div",{className:fe.info},Le.default.createElement("div",{className:fe.left},Le.default.createElement("div",{className:fe.ticker},Le.default.createElement("span",{className:fe.value},I.inputValue?Le.default.createElement(op,{text:f.token.ticker,highlight:I.inputValue}):f.token.ticker),i&&Le.default.createElement(i,{token:f.token})),d&&Le.default.createElement("small",{className:fe.price},A)),Le.default.createElement("div",{className:fe.right},Le.default.createElement("span",{className:fe.value},v),l&&S&&Le.default.createElement(Gf.UsdValue,{usd:1,decimals:4,amount:S,"data-testid":"token-price-usd-value",className:fe.price,addEqualSign:!1}))),Le.default.createElement("div",{className:fe.children},u.children)))};T();var Dn=F(p("react")),Hf=F(p("classnames")),Xf=p("react-select"),cp=c=>i=>{let{selectProps:l,children:d}=i,u=l.value;return Dn.default.createElement(Xf.components.SingleValue,Me(Ee({},i),{className:(0,Hf.default)(fe.single,{[fe.focused]:i.selectProps.menuIsOpen})}),Dn.default.createElement("div",{className:fe.ticker},d,c&&Dn.default.createElement(c,{token:u==null?void 0:u.token})))},{Menu:Kf,Control:Jf,Input:Qf,MenuList:e_,IndicatorsContainer:o_,Placeholder:t_}=rp,r_=c=>{let{name:i,options:l,isLoading:d=!1,className:u="",noOptionsMessage:_="No Tokens",disabledOption:m,rewaLabel:n,RewaIcon:E,disabled:g,value:x,onBlur:w,onFocus:k,onChange:I,onMenuOpen:f,chainId:b,wrapperClassName:y="",showTokenPrice:v=!1,showBalanceUsdValue:A=!1,selectedTokenIconClassName:S,TokenTickerIcon:O}=c,D=(0,Xo.useRef)(null),U=[n,$l(b)],J=(0,Xo.useMemo)(()=>pp({rewaLabel:n,RewaIcon:E,showTokenPrice:v,showBalanceUsdValue:A,TokenTickerIcon:O}),[]),ee=(0,Xo.useMemo)(()=>ap(n,S,E),[]),oe=(0,Xo.useMemo)(()=>cp(O),[]);(0,Xo.useEffect)(()=>{let Z=l.find(X=>X.value===(x==null?void 0:x.value)),Y=(Z==null?void 0:Z.token.balance)===(x==null?void 0:x.token.balance);!Z||Y||I(Z)},[l]);let Q=Z=>U.includes(Z),pe=Z=>{var Y;let X=Z.value===(m==null?void 0:m.value),ce=Q(Z.value),ie=Q((Y=m==null?void 0:m.value)!=null?Y:"");return X||ce&&ie},ne=(Z,Y)=>{let X=Z.data.token.ticker?Z.data.token.ticker.toLowerCase().includes(Y.toLowerCase()):!1,ce=Z.data.token.name.toLowerCase().includes(Y.toLowerCase());return Boolean(Y)?X||ce:!0};return Xo.default.createElement("div",{"data-testid":`${i}Select`,className:`${y} ${d?"select-holder-loading":""}`},Xo.default.createElement("label",{htmlFor:i,"data-testid":"tokenIdLabel",className:fe.label},"Token"),Xo.default.createElement(cf.default,{ref:D,inputId:i,name:i,options:l,openMenuOnFocus:!0,isDisabled:g,isLoading:d,value:x,isOptionDisabled:pe,onBlur:w,filterOption:ne,onFocus:k,onChange:Z=>{I(Z),D&&D.current!==null&&D.current.blur()},isSearchable:c.isSearchable,maxMenuHeight:260,onMenuOpen:f,noOptionsMessage:()=>_,className:(0,pf.default)(fe.select,u,{[fe.disabled]:c.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:Kf,Control:Jf,Input:Qf,MenuList:e_,IndicatorsContainer:o_,ValueContainer:ee,Placeholder:t_,Option:J,SingleValue:oe}}))};T();T();var n_=F(p("react")),a_=F(p("classnames")),l_=({hasErrors:c,className:i,error:l,"data-testid":d})=>c?n_.default.createElement("div",{className:(0,a_.default)(ue.error,i),"data-testid":d},l):null;T();T();var Pn=F(p("react")),p_=F(p("classnames"));T();var c_=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(c_));var Mn={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},i_=({label:c,value:i,className:l,token:d,"data-testid":u,"data-value":_})=>Pn.default.createElement("div",{"data-testid":u,"data-value":_,className:(0,p_.default)(Mn.balance,l)},Pn.default.createElement("span",{className:Mn.label},c,": "),Pn.default.createElement("span",{className:Mn.value},i)," ",d==null?void 0:d.ticker),s_=({className:c,label:i,name:l,wrapperControlsClassName:d,tokenSelectProps:u,tokenBalanceProps:_,amountInputProps:m,amountErrorProps:n,maxButtonProps:E,readonly:g})=>go.default.createElement("div",{className:(0,Ln.default)(Qo.amount,c)},go.default.createElement("div",{className:Qo.label},i&&go.default.createElement("label",{htmlFor:l,className:ue.label,"data-testid":"amountLabel"},i),go.default.createElement(i_,Ee({},_))),go.default.createElement("div",{className:(0,Ln.default)(Qo.wrapper,d,{[Qo.error]:m.isInvalid||u.isInvalid||n.hasErrors,[Qo.disabled]:g})},go.default.createElement(Vm,Ee({},m)),go.default.createElement("div",{className:(0,Ln.default)(Qo.interaction,E.wrapperClassName)},E.isMaxButtonVisible&&go.default.createElement(lf,Ee({},E)),go.default.createElement("div",{className:Qo.select},go.default.createElement(r_,Ee({},u))))),go.default.createElement(l_,Ee({},n)));T();var Fn=F(p("react")),d_=p("@terradharitri/sdk-dapp/constants"),u_=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),m_=()=>{var c,i;let{checkInvalid:l}=Zl(),{tokensInfo:d,amountInfo:u,formInfo:_}=no(),{readonly:m}=_,{networkConfig:{rewaLabel:n,chainId:E}}=Cr(),{rewaPriceInUsd:g}=xd(),{amount:x,onBlur:w,onChange:k,onMaxClicked:I,error:f,isInvalid:b,onFocus:y,maxAmountAvailable:v,isMaxClicked:A,isMaxButtonVisible:S,maxAmountMinusDust:O}=u,{allAvailableTokens:D,areTokensLoading:U,getTokens:J,isTokenIdInvalid:ee,RewaIcon:oe,nft:Q,onChangeTokenId:pe,tokenDetails:ne,tokenId:Z,tokenIdError:Y}=d,X=D.map(re=>({value:re.identifier,label:String(re.ticker),assets:re.assets,token:re})),{isRewa:ce}=(0,u_.getIdentifierType)(Z),ie=X.find(({value:re})=>re===Z),be={id:"tokenId",value:ie,name:"tokenId",isLoading:U,options:X,isSearchable:!0,onChange:re=>{re&&(pe(re.value),k(""))},onMenuOpen:J,disabled:St("tokenId",m),error:Y,isInvalid:ee,rewaLabel:n,chainId:E,RewaIcon:oe},he=(0,Fn.useMemo)(()=>Fn.default.createElement(Km,{amount:x,rewaLabel:n,maxAmountMinusDust:O,tokenId:Z,isMaxClicked:A}),[x,n,O,Z,A]),me={name:"amount",required:!0,value:x,placeholder:"Amount",handleBlur:w,"data-testid":"amount",handleChange:k,onFocus:y,usdPrice:ce?g:void 0,error:f,isInvalid:b,InfoDustComponent:he},B={token:ne,inputAmount:x,onMaxClick:I,isMaxClicked:A,isMaxButtonVisible:S},M=l("amount")&&!me.value,ve={hasErrors:me.isInvalid||be.isInvalid||M,error:me.error||be.error,className:ue.error,"data-testid":me.error?"amountError":"tokenIdError"},xe={"data-testid":`available-${(c=Q==null?void 0:Q.identifier)!=null?c:Z}`,"data-value":`${v} ${(i=Q==null?void 0:Q.identifier)!=null?i:Z}`,label:"Available",token:ie==null?void 0:ie.token,value:Yn({amount:ne.balance,decimals:ne.decimals||d_.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(Q==null?void 0:Q.type)===xt.NftEnumType.NonFungibleDCDT?null:Fn.default.createElement(s_,{name:"tokenId",amountErrorProps:ve,tokenSelectProps:be,amountInputProps:me,tokenBalanceProps:xe,maxButtonProps:B,label:"Amount",readonly:m})};T();T();var wt=F(p("react")),ql=F(p("classnames"));T();T();T();var Mo=F(p("react")),Cl=p("@fortawesome/free-solid-svg-icons"),Nl=p("@fortawesome/react-fontawesome"),f_=p("formik");T();T();var ip=()=>{let{formInfo:{isRewaTransaction:c,readonly:i},dataFieldInfo:{isAdvancedModeEnabled:l}}=no();return l?!1:!c||St("data",i)};T();var __=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(__));var xr={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"},h_=()=>{let{formInfo:{readonly:c,isRewaTransaction:i}}=no(),{setFieldValue:l,values:d}=(0,f_.useFormikContext)(),[u,_]=(0,Mo.useState)(!1),[m,n]=(0,Mo.useState)(!1),E=ip(),g=!u&&!c&&E&&Boolean(d.data),x=()=>{_(!0),l("isAdvancedModeEnabled",!0)},w=()=>{n(!0),setTimeout(()=>{n(!1)},5e3)};return(0,Mo.useEffect)(()=>{!i&&u&&_(!1)},[i,d.amount]),g?m?Mo.default.createElement("div",{className:xr.advanced,"data-testid":"confirmAdvancedMode",onClick:x},Mo.default.createElement(Nl.FontAwesomeIcon,{icon:Cl.faCheck,className:"i-icon"}),Mo.default.createElement("span",{className:xr.advancedText},"Confirm")):Mo.default.createElement("div",{"data-testid":"enableAdvancedMode",className:xr.advanced,onClick:w},Mo.default.createElement(Nl.FontAwesomeIcon,{icon:Cl.faScrewdriverWrench,className:"i-icon"}),Mo.default.createElement("span",{className:xr.advancedText},"Advanced")):null};T();var g_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(g_));var Bl={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"},v_=({className:c})=>{let{dataFieldInfo:{data:i,dataError:l,isDataInvalid:d,onChange:u,onBlur:_}}=no(),m=ip();return wt.default.createElement("div",{className:(0,ql.default)(Bl.data,c)},wt.default.createElement("div",{className:Qo.label},wt.default.createElement("label",{htmlFor:"data",className:ue.label},"Data"),wt.default.createElement(h_,null)),wt.default.createElement("div",{className:Bl.wrapper},wt.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:m,"data-testid":"data",value:i,onBlur:_,onChange:u,spellCheck:"false",placeholder:"Add transaction data",className:(0,ql.default)(ue.textarea,{[ue.invalid]:d,[ue.disabled]:m})})),d&&wt.default.createElement("div",{className:ue.error,"data-testid":"dataError"},l))};T();T();T();var Ko=F(p("react")),Et=F(p("classnames"));T();var b_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(b_));var Je={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"},y_=({disabled:c,percentageValue:i=0,onPercentageChange:l,className:d})=>{let u=[0,25,50,75,100],_="amountSlider";return Ko.default.createElement("div",{className:(0,Et.default)(Je.amountSlider,d)},Ko.default.createElement("div",{className:Je.amountSliderRange},Ko.default.createElement("input",{name:_,id:_,"data-testid":_,type:"range",disabled:c,min:0,max:100,value:String(i),className:(0,Et.default)(Je.amountSliderInput,{[Je.disabled]:c}),onChange:m=>{l(Number(m.target.value))}}),Ko.default.createElement("div",{style:{width:`${i}%`},className:(0,Et.default)(Je.amountSliderCompletion,{[Je.disabled]:c})}),u.map(m=>Ko.default.createElement("span",{onClick:()=>l(m),key:`breakpoint-${m}`,style:{left:`${m}%`},className:(0,Et.default)(Je.amountSliderBreakpoint,{[Je.completed]:m<=i,[Je.disabled]:c})})),u.map(m=>Ko.default.createElement("span",{style:{left:`${m}%`},key:`breakpoint-${m}`,onClick:()=>l(m),className:(0,Et.default)(Je.amountSliderPercentage,{[Je.exact]:m===i,[Je.disabled]:c})},m,"%")),Ko.default.createElement("span",{style:{left:`${i}%`},className:(0,Et.default)(Je.amountSliderThumb,{[Je.disabled]:c})},Ko.default.createElement("strong",{className:(0,Et.default)(Je.amountSliderThumbPercentage,{[Je.hidden]:u.includes(i)})},Math.round(i),"%"))))};T();T();var vo=F(p("react")),w_=p("@fortawesome/free-solid-svg-icons"),E_=p("@fortawesome/react-fontawesome"),k_=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),x_=p("@terradharitri/sdk-dapp/UI/CopyButton"),S_=p("@terradharitri/sdk-dapp/UI/ExplorerLink"),A_=p("@terradharitri/sdk-dapp/UI/Trim"),T_=F(p("classnames")),I_=p("formik");T();var q_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(q_));var bo={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"},C_=c=>{let{className:i}=c,{values:{nft:l,address:d}}=(0,I_.useFormikContext)();return!(l!=null&&l.allowedReceivers)||l.allowedReceivers.includes(d)?null:vo.default.createElement("div",{className:(0,T_.default)(bo.canTransferWarning,i),"data-testid":"canTransferWarning"},vo.default.createElement("div",{className:bo.canTransferWarningHeading},vo.default.createElement(E_.FontAwesomeIcon,{icon:w_.faExclamationTriangle,className:bo.canTransferWarningIcon,size:"lg"}),vo.default.createElement("div",{className:bo.canTransferWarningTitle},vo.default.createElement("div",{className:bo.canTransferWarningLabel},"Warning!"),vo.default.createElement("div",{className:bo.canTransferWarningMessage},Xs))),vo.default.createElement("div",{className:bo.canTransferWarningAddresses},l.allowedReceivers.map(u=>vo.default.createElement("div",{className:bo.canTransferWarningAddress,key:u},vo.default.createElement(A_.Trim,{text:u,className:bo.canTransferWarningAddressTrim}),vo.default.createElement(x_.CopyButton,{text:u,className:bo.canTransferWarningAddressCopy}),vo.default.createElement(S_.ExplorerLink,{page:`/${k_.ACCOUNTS_ENDPOINT}/${u}`,className:bo.canTransferWarningAddressExplorer})))))};T();T();var zt=F(p("react")),N_=p("@fortawesome/free-solid-svg-icons"),B_=p("@fortawesome/react-fontawesome"),L_=F(p("classnames"));T();var U_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(U_));var Wt={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"},O_=c=>{let{tokenId:i,className:l}=c,{networkConfig:{chainId:d}}=Cr();return $l(d)!==i?null:zt.default.createElement("div",{className:(0,L_.default)(Wt.wrewaWarning,l)},zt.default.createElement("div",{className:Wt.wrewaWarningHeading},zt.default.createElement(B_.FontAwesomeIcon,{icon:N_.faExclamationTriangle,className:Wt.wrewaWarningIcon,size:"lg"}),zt.default.createElement("div",{className:Wt.wrewaWarningTitle},zt.default.createElement("div",{className:Wt.wrewaWarningLabel},"Warning!"),zt.default.createElement("div",{className:Wt.wrewaWarningMessage},Ks))))};T();var R_=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(R_));var jn={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};T();T();var D_=c=>{var i,l;return((i=c.nft)==null?void 0:i.type)===xt.NftEnumType.NonFungibleDCDT?"NFT":((l=c.nft)==null?void 0:l.type)===xt.NftEnumType.SemiFungibleDCDT?"SFT":c.tokenDetails.ticker},P_=({className:c,GuardianScreen:i})=>{let{formInfo:l,accountInfo:d,amountInfo:u,tokensInfo:_}=no(),{values:m}=(0,Ms.useFormikContext)(),{txType:n,tokenId:E,address:g,balance:x,chainId:w,ledger:k}=m,{nft:I}=_,[f,b]=(0,Ne.useState)(),{amountRange:y,onSetAmountPercentage:v}=u,{renderKey:A,onValidateForm:S,onInvalidateForm:O,onCloseForm:D,onSubmitForm:U,onPreviewClick:J,areValidatedValuesReady:ee,isGuardianScreenVisible:oe,uiOptions:Q,readonly:pe,setGuardedTransaction:ne,setHasGuardianScreen:Z}=l,Y=()=>et(void 0,null,function*(){if(!ee)return;let he=yield $s(m);try{let me=yield rd({address:g,balance:x,chainId:w,nonce:d.nonce,values:he});me.setVersion(Qa.TransactionVersion.withTxOptions());let B=Ee({guarded:!0},k?{hashSign:!0}:{});me.setOptions(Qa.TransactionOptions.withOptions(B)),b({0:me})}catch(me){b({})}});(0,Ne.useEffect)(()=>{Y()},[m,ee]),(0,Ne.useEffect)(()=>{Z(Boolean(i))},[]),(0,Ne.useEffect)(()=>{if(!f)return;let he=f[0];he&&ne(he)},[f]);let X=he=>{he.preventDefault(),D()},ce=n==="NonFungibleDCDT",ie=n==="SemiFungibleDCDT",be={onSignTransaction:()=>et(void 0,null,function*(){setTimeout(()=>{U()})}),onPrev:O,address:g,title:"",className:c,signedTransactions:f,setSignedTransactions:b,signStepInnerClasses:{}};return i&&oe?Ne.default.createElement(i,Ee({},be)):ee?Ne.default.createElement(bu,{providerType:d.providerType}):Ne.default.createElement("form",{key:A,onSubmit:S,className:(0,Ps.default)(jn.form,c)},Ne.default.createElement("fieldset",{className:jn.formFieldset},(ce||ie)&&I&&Ne.default.createElement(ep,Ee({onClick:J,txType:n},I)),Ne.default.createElement(dm,null),ie?Ne.default.createElement(fm,null):Ne.default.createElement(m_,null),(Q==null?void 0:Q.showAmountSlider)&&!ce&&Ne.default.createElement(y_,{onPercentageChange:v,percentageValue:y,disabled:Boolean(pe)}),Ne.default.createElement(O_,{tokenId:E}),Ne.default.createElement(C_,null),Ne.default.createElement(Rm,null),Ne.default.createElement(v_,null)),Ne.default.createElement("div",{className:jn.formButtons},Ne.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:S,className:ue.buttonSend},"Send ",D_(_)),Ne.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:X,className:ue.buttonText},"Cancel")))};});var yc=No((U5,bc)=>{"use strict";Ce();var M_=Object.create,pr=Object.defineProperty,F_=Object.defineProperties,j_=Object.getOwnPropertyDescriptor,z_=Object.getOwnPropertyDescriptors,W_=Object.getOwnPropertyNames,Dr=Object.getOwnPropertySymbols,V_=Object.getPrototypeOf,da=Object.prototype.hasOwnProperty,Wp=Object.prototype.propertyIsEnumerable,up=(c,i,l)=>i in c?pr(c,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[i]=l,ge=(c,i)=>{for(var l in i||(i={}))da.call(i,l)&&up(c,l,i[l]);if(Dr)for(var l of Dr(i))Wp.call(i,l)&&up(c,l,i[l]);return c},Se=(c,i)=>F_(c,z_(i)),G_=(c,i)=>{var l={};for(var d in c)da.call(c,d)&&i.indexOf(d)<0&&(l[d]=c[d]);if(c!=null&&Dr)for(var d of Dr(c))i.indexOf(d)<0&&Wp.call(c,d)&&(l[d]=c[d]);return l},ua=(c,i)=>()=>(c&&(i=c(c=0)),i),Fr=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports),jr=(c,i)=>{for(var l in i)pr(c,l,{get:i[l],enumerable:!0})},Vp=(c,i,l,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of W_(i))!da.call(c,u)&&u!==l&&pr(c,u,{get:()=>i[u],enumerable:!(d=j_(i,u))||d.enumerable});return c},W=(c,i,l)=>(l=c!=null?M_(V_(c)):{},Vp(i||!c||!c.__esModule?pr(l,"default",{value:c,enumerable:!0}):l,c)),cr=c=>Vp(pr({},"__esModule",{value:!0}),c),ir=(c,i,l)=>new Promise((d,u)=>{var _=E=>{try{n(l.next(E))}catch(g){u(g)}},m=E=>{try{n(l.throw(E))}catch(g){u(g)}},n=E=>E.done?d(E.value):Promise.resolve(E.value).then(_,m);n((l=l.apply(c,i)).next())}),$_=Fr(c=>{"use strict";q(),c.byteLength=E,c.toByteArray=x,c.fromByteArray=I;var i=[],l=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,m=u.length;_<m;++_)i[_]=u[_],l[u.charCodeAt(_)]=_;var _,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(f){var b=f.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=f.indexOf("=");y===-1&&(y=b);var v=y===b?0:4-y%4;return[y,v]}function E(f){var b=n(f),y=b[0],v=b[1];return(y+v)*3/4-v}function g(f,b,y){return(b+y)*3/4-y}function x(f){var b,y=n(f),v=y[0],A=y[1],S=new d(g(f,v,A)),O=0,D=A>0?v-4:v,U;for(U=0;U<D;U+=4)b=l[f.charCodeAt(U)]<<18|l[f.charCodeAt(U+1)]<<12|l[f.charCodeAt(U+2)]<<6|l[f.charCodeAt(U+3)],S[O++]=b>>16&255,S[O++]=b>>8&255,S[O++]=b&255;return A===2&&(b=l[f.charCodeAt(U)]<<2|l[f.charCodeAt(U+1)]>>4,S[O++]=b&255),A===1&&(b=l[f.charCodeAt(U)]<<10|l[f.charCodeAt(U+1)]<<4|l[f.charCodeAt(U+2)]>>2,S[O++]=b>>8&255,S[O++]=b&255),S}function w(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function k(f,b,y){for(var v,A=[],S=b;S<y;S+=3)v=(f[S]<<16&16711680)+(f[S+1]<<8&65280)+(f[S+2]&255),A.push(w(v));return A.join("")}function I(f){for(var b,y=f.length,v=y%3,A=[],S=16383,O=0,D=y-v;O<D;O+=S)A.push(k(f,O,O+S>D?D:O+S));return v===1?(b=f[y-1],A.push(i[b>>2]+i[b<<4&63]+"==")):v===2&&(b=(f[y-2]<<8)+f[y-1],A.push(i[b>>10]+i[b>>4&63]+i[b<<2&63]+"=")),A.join("")}}),Y_=Fr(c=>{q(),c.read=function(i,l,d,u,_){var m,n,E=_*8-u-1,g=(1<<E)-1,x=g>>1,w=-7,k=d?_-1:0,I=d?-1:1,f=i[l+k];for(k+=I,m=f&(1<<-w)-1,f>>=-w,w+=E;w>0;m=m*256+i[l+k],k+=I,w-=8);for(n=m&(1<<-w)-1,m>>=-w,w+=u;w>0;n=n*256+i[l+k],k+=I,w-=8);if(m===0)m=1-x;else{if(m===g)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,u),m=m-x}return(f?-1:1)*n*Math.pow(2,m-u)},c.write=function(i,l,d,u,_,m){var n,E,g,x=m*8-_-1,w=(1<<x)-1,k=w>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=u?0:m-1,b=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(E=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-n))<1&&(n--,g*=2),n+k>=1?l+=I/g:l+=I*Math.pow(2,1-k),l*g>=2&&(n++,g/=2),n+k>=w?(E=0,n=w):n+k>=1?(E=(l*g-1)*Math.pow(2,_),n=n+k):(E=l*Math.pow(2,k-1)*Math.pow(2,_),n=0));_>=8;i[d+f]=E&255,f+=b,E/=256,_-=8);for(n=n<<_|E,x+=_;x>0;i[d+f]=n&255,f+=b,n/=256,x-=8);i[d+f-b]|=y*128}}),Z_=Fr(c=>{"use strict";q();var i=$_(),l=Y_(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=n,c.SlowBuffer=A,c.INSPECT_MAX_BYTES=50;var u=2147483647;c.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return k(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return b(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var a=y(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function g(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function x(e,o,t){return g(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}n.alloc=function(e,o,t){return x(e,o,t)};function w(e){return g(e),m(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function k(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=S(e,o)|0,r=m(t),a=r.write(e,o);return a!==t&&(r=r.slice(0,a)),r}function I(e){for(var o=e.length<0?0:v(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if($(e,Uint8Array)){var o=new Uint8Array(e);return b(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function b(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?m(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function v(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),$(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,a=0,s=Math.min(t,r);a<s;++a)if(e[a]!==o[a]){t=e[a],r=o[a];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),a=0;for(t=0;t<e.length;++t){var s=e[t];if($(s,Uint8Array))a+s.length>r.length?n.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else if(n.isBuffer(s))s.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return r};function S(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ae(e).length;default:if(a)return r?-1:ye(e).length;o=(""+o).toLowerCase(),a=!0}}n.byteLength=S;function O(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,o,t);case"utf8":case"utf-8":return Y(this,o,t);case"ascii":return ie(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return Z(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function D(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)D(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)D(this,o,o+3),D(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)D(this,o,o+7),D(this,o+1,o+6),D(this,o+2,o+5),D(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,a){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||t>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=t)return 0;if(r>=a)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var s=a-r,h=t-o,C=Math.min(s,h),P=this.slice(r,a),N=e.slice(o,t),L=0;L<C;++L)if(P[L]!==N[L]){s=P[L],h=N[L];break}return s<h?-1:h<s?1:0};function U(e,o,t,r,a){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,we(t)&&(t=a?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(a)return-1;t=e.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:J(e,o,t,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):J(e,[o],t,r,a);throw new TypeError("val must be string, number or Buffer")}function J(e,o,t,r,a){var s=1,h=e.length,C=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,h/=2,C/=2,t/=2}function P(Te,Ie){return s===1?Te[Ie]:Te.readUInt16BE(Ie*s)}var N;if(a){var L=-1;for(N=t;N<h;N++)if(P(e,N)===P(o,L===-1?0:N-L)){if(L===-1&&(L=N),N-L+1===C)return L*s}else L!==-1&&(N-=N-L),L=-1}else for(t+C>h&&(t=h-C),N=t;N>=0;N--){for(var j=!0,de=0;de<C;de++)if(P(e,N+de)!==P(o,de)){j=!1;break}if(j)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return U(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return U(this,e,o,t,!1)};function ee(e,o,t,r){t=Number(t)||0;var a=e.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var h=0;h<r;++h){var C=parseInt(o.substr(h*2,2),16);if(we(C))return h;e[t+h]=C}return h}function oe(e,o,t,r){return se(ye(o,e.length-t),e,t,r)}function Q(e,o,t,r){return se(ze(o),e,t,r)}function pe(e,o,t,r){return se(Ae(o),e,t,r)}function ne(e,o,t,r){return se(We(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ee(this,e,o,t);case"utf8":case"utf-8":return oe(this,e,o,t);case"ascii":case"latin1":case"binary":return Q(this,e,o,t);case"base64":return pe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,o,t);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Z(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function Y(e,o,t){t=Math.min(e.length,t);for(var r=[],a=o;a<t;){var s=e[a],h=null,C=s>239?4:s>223?3:s>191?2:1;if(a+C<=t){var P,N,L,j;switch(C){case 1:s<128&&(h=s);break;case 2:P=e[a+1],(P&192)===128&&(j=(s&31)<<6|P&63,j>127&&(h=j));break;case 3:P=e[a+1],N=e[a+2],(P&192)===128&&(N&192)===128&&(j=(s&15)<<12|(P&63)<<6|N&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:P=e[a+1],N=e[a+2],L=e[a+3],(P&192)===128&&(N&192)===128&&(L&192)===128&&(j=(s&15)<<18|(P&63)<<12|(N&63)<<6|L&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,C=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|h&1023),r.push(h),a+=C}return ce(r)}var X=4096;function ce(e){var o=e.length;if(o<=X)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=X));return t}function ie(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]);return r}function he(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var a="",s=o;s<t;++s)a+=Ve[e[s]];return a}function me(e,o,t){for(var r=e.slice(o,t),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=o,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!1,52,8)};function M(e,o,t,r,a,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=1,h=0;for(this[o]=e&255;++h<t&&(s*=256);)this[o+h]=e/s&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=t-1,h=1;for(this[o+s]=e&255;--s>=0&&(h*=256);)this[o+s]=e/h&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=0,h=1,C=0;for(this[o]=e&255;++s<t&&(h*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=t-1,h=1,C=0;for(this[o+s]=e&255;--s>=0&&(h*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ve(e,o,t,r,a,s){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xe(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return xe(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return xe(this,e,o,!1,t)};function re(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var a=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),a},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<t;++s)this[s]=e;else{var h=n.isBuffer(e)?e:n.from(e,r),C=h.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<t-o;++s)this[s+o]=h[s%C]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,o){o=o||1/0;for(var t,r=e.length,a=null,s=[],h=0;h<r;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!a){if(t>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(h+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=t;continue}if(t<56320){(o-=3)>-1&&s.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,t<128){if((o-=1)<0)break;s.push(t)}else if(t<2048){if((o-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function We(e,o){for(var t,r,a,s=[],h=0;h<e.length&&!((o-=2)<0);++h)t=e.charCodeAt(h),r=t>>8,a=t%256,s.push(a),s.push(r);return s}function Ae(e){return i.toByteArray(je(e))}function se(e,o,t,r){for(var a=0;a<r&&!(a+t>=o.length||a>=e.length);++a)o[a+t]=e[a];return a}function $(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function we(e){return e!==e}var Ve=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)o[r+a]=e[t]+e[a];return o}()}),H_=Fr((c,i)=>{q();var l=i.exports={},d,u;function _(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(v){d=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=m}catch(v){u=m}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(A){try{return d.call(null,v,0)}catch(S){return d.call(this,v,0)}}}function E(v){if(u===clearTimeout)return clearTimeout(v);if((u===m||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(v);try{return u(v)}catch(A){try{return u.call(null,v)}catch(S){return u.call(this,v)}}}var g=[],x=!1,w,k=-1;function I(){!x||!w||(x=!1,w.length?g=w.concat(g):k=-1,g.length&&f())}function f(){if(!x){var v=n(I);x=!0;for(var A=g.length;A;){for(w=g,g=[];++k<A;)w&&w[k].run();k=-1,A=g.length}w=null,x=!1,E(v)}}l.nextTick=function(v){var A=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)A[S-1]=arguments[S];g.push(new b(v,A)),g.length===1&&!x&&n(f)};function b(v,A){this.fun=v,this.array=A}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Gp,X_,K_,q=ua(()=>{Gp=W(Z_()),X_=W(H_()),K_=function(c){function i(){var d=this||self;return delete c.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),$p={};jr($p,{default:()=>Yp});var Nr,mp,Yp,J_=ua(()=>{"use strict";q(),Nr=W(p("react")),mp=c=>Nr.createElement("svg",ge({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},c),Nr.createElement("g",null,Nr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Yp=mp}),zr={};jr(zr,{default:()=>Zp});var Br,fp,Zp,ma=ua(()=>{"use strict";q(),Br=W(p("react")),fp=c=>Br.createElement("svg",ge({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},c),Br.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Br.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Zp=fp}),Hp={};jr(Hp,{AmountSelect:()=>gc,AmountSelectInput:()=>Pb,AmountSlider:()=>Gb,Data:()=>Wb,FeeAccordion:()=>Kg,GasLimit:()=>cc,GasPrice:()=>ic,Receiver:()=>Ig,SFTAmount:()=>Ng,SelectToken:()=>sv});bc.exports=cr(Hp);q();q();q();var Pe=W(p("react")),_p=p("@fortawesome/free-solid-svg-icons"),hp=p("@fortawesome/react-fontawesome"),Zn=W(p("classnames")),Q_=p("formik"),eh=W(p("react-select"));q();var oh=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(oh));var ke={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};q();q();q();var Xp=W(p("react")),_6=p("formik");q();q();var Kp=W(p("react")),h6=p("formik");q();q();var Jp=W(p("react")),g6=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),v6=p("formik");q();q();q();var lr=p("@terradharitri/sdk-dapp/types/tokens.types");q();q();q();q();q();var b6=p("@terradharitri/sdk-dapp/constants/index"),y6=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),w6=W(p("bignumber.js"));q();q();q();var E6=p("bech32");q();q();q();var it=(c,i)=>typeof i=="boolean"?i:Array.isArray(i)&&i.includes(c);q();q();q();var k6=p("@terradharitri/sdk-dapp/constants"),x6=p("@terradharitri/sdk-dapp/utils/account/getAccount");q();q();var S6=p("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");q();var A6=p("@terradharitri/sdk-dapp/utils/buildUrlParams");q();var Hn=W(p("anchorme")),Xn=c=>c.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),th=(c,i)=>{if(i){let l=`[Message hidden due to suspicious content - ${i.info}]`;if(c.length>1e3)return{output:l,stringWithLinks:c,found:!0};let d=Xn(c.normalize("NFKC")),u=Hn.default.list(d),_=[];if(u.length>0){let m=l;u.forEach((n,E)=>{let{string:g}=n,x="",w="",k=g;for(let I=0;I<m.length;I++){let f=m.slice(I),[b]=Hn.default.list(Xn(f));b&&g===b.string&&(x=m.substring(0,I))}for(let I=l.length;I>0;I--){let f=m.slice(0,I),[b]=Hn.default.list(Xn(f));b&&g===b.string&&(w=m.substring(I))}_.push(x),_.push(k),m=w,E===u.length-1&&_.push(w)})}else _.push(c);return{output:l,stringWithLinks:_.join(""),found:!0}}else return{output:c,stringWithLinks:"",found:!1}};q();function rh({docStyle:c}){let i={hoverColor:c.getPropertyValue("--border-color"),primaryColor:c.getPropertyValue("--primary"),bgColor:c.getPropertyValue("--card-bg"),mutedColor:c.getPropertyValue("--muted"),blackColor:c.getPropertyValue("--black")};return{valueContainer:()=>({padding:"0.125rem 0 0.125rem 0.2rem",lineHeight:"1.5",fontSize:"0.8125rem",maxWidth:"85%",display:"flex"}),control:(l,d)=>Se(ge({},l),{minHeight:"0",flexWrap:"nowrap",backgroundColor:d.isDisabled?"#e9ecef":"transparent",borderColor:d.isDisabled?i.hoverColor:d.isFocused?i.primaryColor:i.blackColor,boxShadow:d.isFocused?`0 0 0 0.2rem #${i.primaryColor.replace("#","").trim()}33`:null,"&:hover":{borderColor:d.isFocused?i.primaryColor:"#b0b0b0"}}),input:l=>Se(ge({},l),{paddingLeft:"0.4rem",marginLeft:"0",marginRight:"0"}),indicatorSeparator:l=>Se(ge({},l),{marginTop:"0.3rem",marginBottom:"0.3rem"}),indicatorsContainer:l=>Se(ge({},l),{zIndex:"0"}),dropdownIndicator:l=>Se(ge({},l),{padding:"0 0.4rem"}),multiValue:l=>Se(ge({},l),{backgroundColor:i.hoverColor,borderRadius:"4px"}),multiValueRemove:l=>Se(ge({},l),{cursor:"pointer"}),multiValueLebel:l=>Se(ge({},l),{lineHeight:"1.5"}),placeholder:l=>Se(ge({},l),{marginLeft:"0",lineHeight:"2"}),option:(l,{isFocused:d,isSelected:u})=>Se(ge({},l),{fontSize:"0.8125rem",cursor:"pointer",align:"left",backgroundColor:u?i.primaryColor:d?i.hoverColor:"transparent"}),menu:l=>Se(ge({},l),{marginTop:"0.2rem",zIndex:"5"})}}q();var T6=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Qp=p("@terradharitri/sdk-dapp/utils/operations/formatAmount"),nh=p("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),I6=p("@terradharitri/sdk-dapp/utils/operations/parseAmount");q();q();var Kn=p("@terradharitri/sdk-dapp/constants/index");function ah({feeLimit:c,rewaPriceInUsd:i}){let l=(0,Qp.formatAmount)({input:c,decimals:Kn.DECIMALS,digits:Kn.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,nh.getUsdValue)({amount:l,usd:i,decimals:Kn.DIGITS})}`}q();var q6=p("@terradharitri/sdk-dapp/constants/index");q();q();var ec="5000000000000000",oc="0",lh="WREWA-bd4d79";q();var C6=p("@terradharitri/sdk-dapp/constants/index"),N6=W(p("bignumber.js"));q();var B6=p("@terradharitri/sdk-dapp/constants/index");q();var L6=p("@terradharitri/sdk-dapp/constants/index");q();q();var U6=p("@terradharitri/sdk-core"),O6=p("@terradharitri/sdk-dapp/constants/index"),R6=W(p("bignumber.js"));q();q();var D6=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");q();var P6=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");q();var M6=W(p("bignumber.js"));q();var F6=p("@terradharitri/sdk-dapp/constants/index"),j6=p("@terradharitri/sdk-dapp/utils/smartContracts"),z6=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),W6=W(p("bignumber.js"));q();var V6=W(p("bignumber.js"));q();q();var G6=W(p("axios"));q();q();q();var ph=p("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");q();var ch=p("@terradharitri/sdk-dapp/constants/index");q();var ih={D:"devnet",T:"testnet",1:"mainnet"},sh={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function dh(c){return ih[c]}function uh(c){return sh[c]||lh}function mh(c){let i=dh(c),l=ch.fallbackNetworkConfigurations[i].apiAddress;if(!l)throw"Could not extract api address for environment, check if you have a valid chainID";return l}function fh(c){return ir(this,null,function*(){let i=mh(c);return yield(0,ph.getServerConfiguration)(i)})}q();var Pr={value:null};function _h(c){return Pr.value={baseURL:c.apiAddress,timeout:Number(c.apiTimeout)},Pr.value}function hh(c){return ir(this,null,function*(){if(Pr.value!=null)return Pr.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),c!=null){let l=yield fh(c);return _h(l)}let i="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(i),i})}q();var Jn=p("@terradharitri/sdk-dapp/constants/index"),gh=W(p("bignumber.js")),gp,vp,bp,tc=(0,Qp.formatAmount)({input:String((gp=Jn.GAS_PRICE)!=null?gp:1e9),decimals:(vp=Jn.DECIMALS)!=null?vp:18,showLastNonZeroDecimal:!0,digits:(bp=Jn.DIGITS)!=null?bp:4}),$6=new gh.default(tc).times(10).toString(10);q();var Y6=p("@terradharitri/sdk-dapp/constants/index"),Z6=W(p("bignumber.js"));q();var H6=W(p("bignumber.js"));q();q();var X6=p("yup");q();var yp=p("@terradharitri/sdk-dapp/constants/ledger.constants"),vh=W(p("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),fa=p("yup"),bh=(0,fa.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(c){let{ledger:i}=this.parent;return!(i&&c&&c.length&&!i.ledgerDataActive)}),yh=(0,fa.string)().test({name:"hashSign",test:function(c){let{ledger:i,isGuarded:l}=this.parent;if(i){let{ledgerWithHashSign:d,ledgerWithGuardians:u}=(0,vh.default)(i.version);if(c&&c.length>300&&!d)return this.createError({message:`Data too long. You need at least DharitrI app version ${yp.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!u)return this.createError({message:`You need at least DharitrI app version ${yp.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),wh=[bh,yh],K6=wh.reduce((c,i)=>c.concat(i),(0,fa.string)());q();var J6=p("@terradharitri/sdk-dapp/constants/index"),Q6=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),eE=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),oE=p("yup");q();var tE=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),rE=W(p("bignumber.js")),nE=p("yup");q();var aE=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),lE=W(p("bignumber.js")),pE=p("yup");q();var cE=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),iE=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),sE=W(p("bignumber.js")),dE=p("yup");q();var uE=W(p("bignumber.js")),mE=p("yup");q();var fE=p("@terradharitri/sdk-dapp/constants/index"),_E=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),hE=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),gE=W(p("bignumber.js")),vE=p("yup");q();var bE=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),yE=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),wE=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),EE=W(p("bignumber.js")),kE=p("yup");q();var xE=W(p("bignumber.js")),SE=p("yup");q();var AE=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),TE=p("yup");q();var IE=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),qE=p("yup");q();q();var Eh=(0,Jp.createContext)({});function kh(){return(0,Jp.useContext)(Eh)}q();q();q();var CE=p("react"),NE=p("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),BE=W(p("lodash/uniqBy"));q();q();q();var LE=W(p("axios"));q();q();var xh=W(p("axios"));function Sh(){return ir(this,null,function*(){try{let c=yield hh(),{data:i}=yield xh.default.get("economics",c);return i}catch(c){return console.error("err fetching economics info",c),null}})}q();q();var UE=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),OE=p("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),RE=W(p("axios")),DE=W(p("lodash/uniqBy"));q();var PE=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),ME=W(p("axios"));q();var FE=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),jE=W(p("axios"));q();var Ah=W(p("react")),zE=(0,Ah.createContext)({});q();q();var WE=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),VE=p("@terradharitri/sdk-dapp/utils");q();var GE=p("react");q();var $E=p("react"),YE=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Th=(0,Kp.createContext)({});function Ih(){return(0,Kp.useContext)(Th)}q();var ZE=p("react");q();q();var qh=({knownAddresses:c,inputValue:i,key:l})=>!c||!i?!1:c.some(d=>{var u;return Boolean((u=d[l])==null?void 0:u.startsWith(i))});q();q();q();var HE=p("react"),XE=p("@terradharitri/sdk-dapp/utils");q();var KE=p("react"),JE=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");q();q();var QE=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),e5=W(p("axios"));q();var o5=W(p("axios")),Ch=(0,Xp.createContext)({});function rc(){return(0,Xp.useContext)(Ch)}q();var nc=W(p("react"));q();q();var Nh=W(p("react")),t5=p("@terradharitri/sdk-dapp/constants/index"),r5=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),n5=W(p("bignumber.js")),a5=p("formik");q();q();var Bh=W(p("react")),l5=p("formik"),p5=W(p("lodash/uniqBy"));q();q();var ac=W(p("react")),Lh=(0,ac.createContext)({});function _a(){return(0,ac.useContext)(Lh)}q();q();var wp=p("react"),Uh=p("@terradharitri/sdk-dapp/constants/index"),Qn=p("@terradharitri/sdk-dapp/types/enums.types");function Oh(){let{networkConfig:c}=_a(),[i,l]=(0,wp.useState)(0);function d(){return ir(this,null,function*(){let u=yield Sh(),_=(u==null?void 0:u.price)||0;l(_)})}return(0,wp.useEffect)(()=>{![Qn.EnvironmentsEnum.mainnet,Qn.EnvironmentsEnum.testnet,Qn.EnvironmentsEnum.devnet].includes(c==null?void 0:c.id)||d()},[c==null?void 0:c.id]),{rewaLabel:c.rewaLabel,rewaPriceInUsd:i,digits:Uh.DIGITS}}q();var c5=(0,Bh.createContext)({});q();q();var i5=p("@terradharitri/sdk-dapp/constants/index"),s5=p("formik");q();q();var Rh=W(p("react")),d5=p("@terradharitri/sdk-dapp/constants/index"),u5=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),m5=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),f5=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),_5=W(p("bignumber.js")),h5=p("formik");q();q();q();q();var g5=W(p("bignumber.js"));q();var v5=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),b5=W(p("bignumber.js"));q();q();var y5=p("react"),w5=p("@terradharitri/sdk-dapp/constants/index"),E5=p("@terradharitri/sdk-dapp/utils/smartContracts"),k5=W(p("bignumber.js")),x5=p("formik");q();q();var S5=p("@terradharitri/sdk-dapp/constants/index"),A5=W(p("bignumber.js")),T5=(0,Rh.createContext)({}),I5=(0,Nh.createContext)({});q();q();var Dh=W(p("react")),q5=p("formik"),C5=(0,Dh.createContext)({}),Ph=(0,nc.createContext)({});function so(){return(0,nc.useContext)(Ph)}q();q();var Mh=W(p("react")),Fh=p("react-select");q();var jh=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jh));var le={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},zh=c=>Mh.default.createElement(Fh.components.Control,Se(ge({},c),{className:le.receiverSelectControl}));q();q();var ea=W(p("react")),Wh=p("@fortawesome/free-solid-svg-icons"),Vh=p("@fortawesome/react-fontawesome"),Gh=W(p("classnames")),$h=p("react-select");q();q();var ha=(c,i)=>{let l=i.toLowerCase(),d=c.label.toLowerCase(),u=c.value.toLowerCase();return i?d.includes(l)||u.includes(l):!0};q();var Yh=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Zh=p("@terradharitri/sdk-dapp/utils"),Ep=c=>c?c.filter(i=>(0,Zh.addressIsValid)(i.address)).map(i=>{let l=i.username?String((0,Yh.trimUsernameDomain)(i.username)):i.address;return{value:i.address,label:l}}):[];q();var Hh=({setOption:c,setAllValues:i})=>(l,d)=>{["input-blur","menu-close"].includes(d.action)||(i(l),l||c(null))};q();var Xh=({setInputValue:c,setOption:i,changeAndBlurInput:l})=>d=>{!d||(i(d),l(d.value),d.value!==d.label?c(d.label):c(d.value))};q();var Kh=({options:c,usernameAccounts:i,knownAddresses:l,setFieldValue:d,setInputValue:u,setOption:_})=>m=>{var n,E,g,x;let w=c.find(A=>A.value===m&&A.value!==A.label),k=w==null?void 0:w.label,I,f,b=(n=i[m])==null?void 0:n.username;b&&(k=b,I=b,f=(E=i[m])==null?void 0:E.rawUsername);let y=l.find(A=>A.address===m);y!=null&&y.username&&(k=y==null?void 0:y.username,I=y==null?void 0:y.username,f=y==null?void 0:y.rawUsername);let v=k!=null?k:m;u(v),_({value:m,label:v}),d("receiver",(x=(g=i[m])==null?void 0:g.address)!=null?x:m),d("receiverUsername",I),d("rawReceiverUsername",f)},Jh=c=>{let{selectProps:i,isDisabled:l,options:d}=c,{menuIsOpen:u,value:_,isLoading:m}=i,n=(0,ea.useMemo)(()=>d.find(w=>{let k=w,I=_;return I?ha(k,I.label):null}),[_,d]),E=d.length===0&&!m,g=Boolean(_)&&!n,x=l||E||g;return m?ea.default.createElement(Vh.FontAwesomeIcon,{icon:Wh.faSpinner,spin:!0,className:le.receiverSelectSpinner}):ea.default.createElement($h.components.DropdownIndicator,Se(ge({},c),{className:(0,Gh.default)(le.receiverSelectIndicator,{[le.expanded]:u,[le.hidden]:x})}))};q();q();var Qh=W(p("react")),eg=p("@terradharitri/sdk-dapp/utils"),og=W(p("classnames")),tg=p("react-select");q();var N5=W(p("react")),B5=p("@terradharitri/sdk-dapp/constants/index");q();q();var rg=(c,i)=>{let l=c.current;if(!l||!l.state.focusedOption)return!1;let d=l.state.focusedOption,u=d.label.toLowerCase(),_=d.value.toLowerCase(),m=u!==_,n=m&&u.startsWith(i.toLowerCase());return m&&!i?!0:n},ng=c=>i=>{let{selectProps:l,value:d}=i,{inputValue:u,menuIsOpen:_}=l,{receiverUsernameInfo:{receiverUsername:m}}=so(),n=rg(c,u),E=(0,eg.addressIsValid)(String(d)),g=Boolean(m)||n,x=E&&_||!E&&u;return Qh.default.createElement(tg.components.Input,Se(ge({},i),{"data-testid":"receiver",className:(0,og.default)(le.receiverSelectInput,{[le.visible]:x,[le.spaced]:g})}))};q();q();var ag=W(p("react")),lg=p("react-select"),pg=c=>ag.default.createElement(lg.components.Menu,Se(ge({},c),{className:le.receiverSelectMenu}));q();q();var eo=W(p("react")),oa=p("@terradharitri/sdk-dapp/UI/Trim"),Lr=W(p("classnames")),cg=p("react-select");q();var{default:Mr}=(J_(),cr($p)),ig=c=>{let{selectProps:i,focusedOption:l}=c,{value:d,inputValue:u}=i,_=l,m=_?_.label.toLowerCase():null,n=_&&_.label!==_.value,E=(m&&(!d||d&&u)?m.startsWith(u.toLowerCase()):!1)&&_?_.label.replace(_.label.substring(0,u.length),u):null,g=E&&!u,x=E&&u.length<E.length/2,w=E&&Boolean(u)&&x,k=E&&Boolean(u);return eo.default.createElement(eo.default.Fragment,null,w&&!n&&eo.default.createElement("div",{className:(0,Lr.default)(le.receiverSelectAutocomplete,le.receiverSelectAutocompleteUntrimmed)},E),k&&n&&eo.default.createElement("div",{className:(0,Lr.default)(le.receiverSelectAutocomplete,le.receiverSelectAutocompleteUsername)},eo.default.createElement(Mr,{className:le.receiverSelectAutocompleteIcon}),E,eo.default.createElement("span",{className:le.receiverSelectAutocompleteWrapper},"(",eo.default.createElement(oa.Trim,{text:_.value}),")")),g&&eo.default.createElement("span",{className:(0,Lr.default)(le.receiverSelectAutocomplete,{[le.receiverSelectAutocompleteUsername]:n})},n?eo.default.createElement(eo.default.Fragment,null,eo.default.createElement("span",null,eo.default.createElement(Mr,{className:(0,Lr.default)(le.receiverSelectAutocompleteIcon,le.receiverSelectAutocompleteIconMuted)}),_.label),eo.default.createElement("span",{className:le.receiverSelectAutocompleteWrapper},"(",eo.default.createElement(oa.Trim,{text:_.value}),")")):eo.default.createElement(oa.Trim,{text:E})),eo.default.createElement(cg.components.MenuList,Se(ge({},c),{className:le.receiverSelectList})))};q();q();var Fo=W(p("react")),kp=p("@terradharitri/sdk-dapp/UI/Trim"),sg=W(p("classnames")),dg=p("react-select");q();q();var Ur=W(p("react"));q();var ug=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ug));var mg={highlight:"dapp-core-component__styles-modules__highlight"},lc=({highlight:c,text:i=""})=>{let l=i.split(" "),d=c.toLowerCase(),u=new RegExp(`(${d})`,"gi"),_=l.map(m=>m.split(u).filter(n=>n));return Ur.default.createElement("span",{className:mg.highlight},_.map((m,n)=>{let E=`${m}-${n}`;return Ur.default.createElement("span",{key:E},m.map((g,x)=>{let w=g.toLowerCase()===d,k=d&&w,I=`${g}-${x}`;return k?Ur.default.createElement("strong",{key:I},g):Ur.default.createElement("span",{key:I},g)}))}))},fg=c=>{let{isFocused:i,data:l,selectProps:d}=c,{inputValue:u}=d,_=l,m=_.value!==_.label;return Fo.default.createElement(dg.components.Option,Se(ge({},c),{className:(0,sg.default)(le.receiverSelectOption,{[le.focused]:i})}),m?Fo.default.createElement(Fo.default.Fragment,null,Fo.default.createElement("span",{className:le.receiverSelectOptionUsername},Fo.default.createElement(Mr,{className:le.receiverSelectOptionUsernameIcon}),Fo.default.createElement(lc,{text:_.label,highlight:u})),Fo.default.createElement("span",{className:le.receiverSelectOptionNameWrapper},"(",Fo.default.createElement(kp.Trim,{text:_.value,className:le.receiverSelectOptionName}),")")):Fo.default.createElement(kp.Trim,{text:_.value,className:le.receiverSelectOptionName}))};q();q();var _g=W(p("react")),hg=W(p("classnames")),gg=p("react-select"),vg=c=>{let{selectProps:i,isFocused:l,className:d}=c,{menuIsOpen:u}=i;return _g.default.createElement(gg.components.SelectContainer,Se(ge({},c),{className:(0,hg.default)(d,{[le.expanded]:u,[le.focused]:l&&u})}))};q();q();var jo=W(p("react")),xp=p("@terradharitri/sdk-dapp/UI/Trim"),bg=p("@terradharitri/sdk-dapp/utils"),yg=W(p("classnames")),wg=p("react-select"),Eg=c=>{let{selectProps:i,isDisabled:l}=c,{value:d,menuIsOpen:u}=i,_=d,{receiverInfo:{receiver:m},receiverUsernameInfo:{receiverUsername:n}}=so(),E=n!=null?n:_&&_.value!==_.label,g=_?{value:m!=null?m:_.value,label:_.label}:null,x=g&&(E||!E&&!u)&&(0,bg.addressIsValid)(g.value);return jo.default.createElement(wg.components.ValueContainer,Se(ge({},c),{className:le.receiverSelectValue}),x&&jo.default.createElement("span",{className:(0,yg.default)(le.receiverSelectSingle,{[le.disabled]:l})},E?jo.default.createElement(jo.default.Fragment,null,jo.default.createElement("span",{className:le.receiverSelectSingleUsername},jo.default.createElement(Mr,{className:le.receiverSelectSingleUsernameIcon}),g.label),jo.default.createElement("span",{className:le.receiverSelectSingleTrimWrapper},"(",jo.default.createElement(xp.Trim,{text:g.value,className:le.receiverSelectSingleTrim}),")")):jo.default.createElement(xp.Trim,{text:g.value,className:le.receiverSelectSingleTrim})),c.children)};q();q();var kg=p("formik"),pc=()=>{let{receiverInfo:{receiverError:c,isReceiverInvalid:i},receiverUsernameInfo:{receiverUsernameError:l,isReceiverUsernameInvalid:d,receiverUsername:u}}=so(),{touched:{receiver:_}}=(0,kg.useFormikContext)(),m=i&&_||d;return u!=null&&u.startsWith("drt1")?{isInvalid:i,receiverErrorDataTestId:"receiverError",error:c}:{isInvalid:m,receiverErrorDataTestId:d?"receiverUsernameError":"receiverError",error:d?l:c}};q();q();var xg=p("@terradharitri/sdk-dapp/utils"),Sg=p("formik");q();q();var Ag=({knownAddresses:c,inputValue:i})=>!c||!i?!1:c.filter(l=>{var d;let u=(d=l.username)!=null?d:l.address,_=l.address;return ha({label:u,value:_,data:{label:u,value:_}},i)}).length>0,Tg=({menuIsOpen:c})=>{let{isInvalid:i}=pc(),{values:{nft:l}}=(0,Sg.useFormikContext)(),{showUsernameError:d,isUsernameLoading:u,isUsernameDebouncing:_,usernameIsAmongKnown:m,searchQueryIsAddress:n}=rc(),{receiverInputValue:E,knownAddresses:g}=Ih(),x=qh({key:"address",knownAddresses:g,inputValue:E}),w=Ag({inputValue:E,knownAddresses:g}),k=n&&(!x||!c)&&!(0,xg.addressIsValid)(E),I=Boolean(d&&!(c&&x)&&!(c&&m));return{isAddressError:k||(l?i:!1),isUsernameError:I,isRequiredError:i&&!I&&!u&&!_&&!k&&!w&&!E,isReceiverDropdownOpened:E&&w&&c}},Ig=c=>{let i=(0,Pe.useRef)(null),{className:l}=c,{setFieldValue:d}=(0,Q_.useFormikContext)(),{receiverInfo:{scamError:u,fetchingScamAddress:_,receiverInputValue:m,setReceiverInputValue:n,knownAddresses:E,receiver:g,onBlurReceiver:x,onChangeReceiver:w},receiverUsernameInfo:{receiverUsername:k},formInfo:{readonly:I}}=so(),[f,b]=(0,Pe.useState)(!1),[y,v]=(0,Pe.useState)(g?{label:g,value:g}:null),{receiverErrorDataTestId:A,error:S}=pc(),{isAddressError:O,isUsernameError:D,isRequiredError:U,isReceiverDropdownOpened:J}=Tg({menuIsOpen:f}),{usernameAccounts:ee,isUsernameLoading:oe}=rc(),Q=()=>{x(new Event("blur"));let B=E==null?void 0:E.find(M=>M.username===m&&M.address===g);B&&(d("receiver",B.address),d("receiverUsername",B.username),d("rawReceiverUsername",B.rawUsername))},pe=E==null?void 0:E.find(B=>B.username===m&&B.address===g),ne=(0,Pe.useMemo)(()=>Ep(E),[E]),Z=pe?Ep([pe]):ne,Y=Kh({setFieldValue:d,setInputValue:n,setOption:v,options:Z,knownAddresses:E!=null?E:[],usernameAccounts:ee}),X=(0,Pe.useCallback)(Hh({setAllValues:Y,setOption:v}),[]),ce=(0,Pe.useCallback)(B=>{w(B?B.trim():""),setTimeout(Q)},[]),ie=Xh({changeAndBlurInput:ce,setOption:v,setInputValue:n}),be=(0,Pe.useMemo)(()=>ng(i),[i]);(0,Pe.useEffect)(()=>{if(!g)return;let B=Object.keys(ee).find(M=>{var ve;return((ve=ee[M])==null?void 0:ve.address)===g});Y(B!=null?B:g),B&&n(B)},[ee,g]);let he=O||D||U,me=he&&!f;return Pe.default.createElement("div",{className:(0,Zn.default)(le.receiver,l)},Pe.default.createElement("div",{className:ke.label,"data-testid":"receiverLabel","data-loading":_},"Receiver"),Pe.default.createElement(eh.default,{value:y,onInputChange:X,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:it("receiver",I),options:Z,filterOption:ha,noOptionsMessage:()=>null,onChange:ie,onBlur:Q,isMulti:!1,ref:i,inputValue:m,onMenuClose:()=>b(!1),onMenuOpen:()=>b(!0),components:{Menu:pg,Input:be,Control:zh,ValueContainer:Eg,DropdownIndicator:Jh,SelectContainer:vg,MenuList:ig,Option:fg,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,Zn.default)(le.receiverSelectContainer,{[le.opened]:J,[le.invalid]:he||u})}),me&&Pe.default.createElement("div",{"data-testid":A,className:ke.error},S),oe&&Pe.default.createElement("div",{className:le.loading},"Loading..."),k&&Pe.default.createElement("span",{className:le.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",Pe.default.createElement(hp.FontAwesomeIcon,{icon:_p.faCheck,className:le.foundIcon})),u&&Pe.default.createElement("div",{"data-testid":"receiverScam",className:(0,Zn.default)(ke.error,ke.scam)},Pe.default.createElement("span",null,Pe.default.createElement(hp.FontAwesomeIcon,{icon:_p.faExclamationTriangle}),Pe.default.createElement("small",null,u))))};q();q();var yo=W(p("react")),qg=W(p("bignumber.js")),ta=W(p("classnames"));q();var Cg=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cg));var At={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"},Ng=c=>{let{className:i}=c,{formInfo:{readonly:l},amountInfo:d,tokensInfo:u}=so(),{amount:_,error:m,onFocus:n,onBlur:E,onChange:g,isInvalid:x,onMaxClicked:w,maxAmountAvailable:k,isMaxButtonVisible:I}=d,{nft:f}=u,b=f!=null&&f.balance?new qg.default(f.balance).isGreaterThan(0):!1,y=v=>{v.preventDefault(),w()};return yo.default.createElement("div",{className:(0,ta.default)(At.amount,i)},yo.default.createElement("div",{className:At.label},yo.default.createElement("label",{htmlFor:"amount",className:ke.label},"Amount"),b&&f&&yo.default.createElement("div",{"data-value":`${k} ${f.identifier}`,className:(0,ta.default)(At.balance,i)},yo.default.createElement("span",null,"Available:")," ",yo.default.createElement("span",{"data-testid":`available-${f.identifier}`,className:At.available},yo.default.createElement("span",{className:At.amount},k)," ",f.ticker))),yo.default.createElement("div",{className:At.wrapper},yo.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:_,disabled:it("amount",l),onFocus:n,onBlur:E,onChange:g,autoComplete:"off",className:(0,ta.default)(ke.input,{[ke.invalid]:x,[ke.disabled]:it("amount",l)})}),I&&yo.default.createElement("a",{href:"/","data-testid":"maxBtn",className:At.max,onClick:y,onMouseDown:v=>{v.preventDefault()}},"Max")),x&&yo.default.createElement("div",{className:ke.error,"data-testid":"amountError"},m))};q();q();var co=W(p("react")),Sp=p("@fortawesome/free-solid-svg-icons"),Ap=p("@fortawesome/react-fontawesome"),Bg=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Tp=W(p("classnames")),Lg=W(p("react-collapsed"));q();var ot=W(p("react")),Ug=p("@fortawesome/free-solid-svg-icons"),Og=p("@fortawesome/react-fontawesome"),Rg=W(p("bignumber.js")),Ip=W(p("classnames")),Dg=p("react-number-format");q();q();var Tt=p("@terradharitri/sdk-dapp/constants/index"),Pg=p("@terradharitri/sdk-dapp/utils/validation"),tt=W(p("bignumber.js")),Mg=(c,i)=>{let l=i!=null?i:Tt.DIGITS;if((0,Pg.stringIsFloat)(c)){if(new tt.default(c).isZero())return"0";let d=new tt.default(c).toFormat(l);return d=parseFloat(d)>0?d:new tt.default(c).toFormat(Tt.DIGITS),d=parseFloat(d)>0?d:new tt.default(c).toFormat(Tt.DIGITS+2),d=parseFloat(d)>0?d:new tt.default(c).toFormat(Tt.DIGITS+4),d=parseFloat(d)>0?d:new tt.default(c).toFormat(Tt.DIGITS+6),d=parseFloat(d)>0?d:new tt.default(c).toFormat(Tt.DIGITS+10),parseFloat(d)>0?d:new tt.default(c).toFormat(Tt.DIGITS+14)}return"0"};q();var qp=c=>c.replace(/,/g,"");q();var Cp=p("react"),Fg={value:"",count:0},jg=(c,i)=>{let[l,d]=(0,Cp.useState)(Fg);return(0,Cp.useEffect)(()=>{let u=setTimeout(()=>{d(c)},i);return()=>clearTimeout(u)},[c.count]),l};q();var zg=W(p("bignumber.js")),ga=c=>{let[i,l]=c.split(""),d=new zg.default(i).isZero();return Boolean(d&&l&&l!==".")};q();var Wg=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Wg));var to={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},cc=()=>{let{formInfo:c,gasInfo:i}=so(),{readonly:l}=c,{defaultGasLimit:d,onResetGasLimit:u,onChangeGasLimit:_,onBlurGasLimit:m,gasLimit:n,gasLimitError:E,isGasLimitInvalid:g}=i,x=b=>{b.preventDefault(),u()},w=({value:b,floatValue:y})=>(!y||!(0,Rg.default)(y).isNaN())&&!ga(b),k=b=>{_(b.value,!0)},I=n!==d&&!l,f=it("gasLimit",l);return ot.default.createElement("div",{className:to.gas},ot.default.createElement("label",{className:ke.label,htmlFor:"gasLimit"},"Gas Limit"),ot.default.createElement("div",{className:to.wrapper},ot.default.createElement(Dg.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:f,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:m,onValueChange:k,required:!0,isAllowed:w,thousandSeparator:",",thousandsGroupStyle:"thousand",value:n,valueIsNumericString:!0,allowNegative:!1,className:(0,Ip.default)(ke.input,to.input,{[ke.disabled]:f,[ke.invalid]:g,[to.spaced]:I})}),I&&ot.default.createElement("div",{className:to.actions},ot.default.createElement("div",{onClick:x,"data-testid":"gasLimitResetBtn",className:(0,Ip.default)(to.action,{[to.disabled]:f})},ot.default.createElement(Og.FontAwesomeIcon,{icon:Ug.faUndo,className:to.icon}))),g&&ot.default.createElement("div",{className:ke.error,"data-testid":"gasLimitError"},E)))};q();q();var rt=W(p("react")),Vg=p("@fortawesome/free-solid-svg-icons"),Gg=p("@fortawesome/react-fontawesome"),$g=W(p("bignumber.js")),Np=W(p("classnames")),Yg=p("react-number-format"),ic=()=>{let{networkConfig:c}=_a(),{gasInfo:i,formInfo:l}=so(),{readonly:d}=l,{rewaLabel:u}=c,{gasPrice:_,gasPriceError:m,isGasPriceInvalid:n,onChangeGasPrice:E,onBlurGasPrice:g,onResetGasPrice:x}=i,w=_!==tc&&!d,k=it("gasPrice",d),I=({value:y,floatValue:v})=>(!v||!(0,$g.default)(v).isNaN())&&!ga(y),f=y=>{y.preventDefault(),x()},b=y=>{E(y.value,!0)};return rt.default.createElement("div",{className:to.gas},rt.default.createElement("label",{className:ke.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),rt.default.createElement("div",{className:to.wrapper},rt.default.createElement(Yg.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:k,id:"gasPrice",inputMode:"decimal",isAllowed:I,name:"gasPrice",onBlur:g,onValueChange:b,required:!0,suffix:` ${u}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:_,valueIsNumericString:!0,allowNegative:!1,className:(0,Np.default)(ke.input,to.input,{[ke.disabled]:k,[ke.invalid]:n,[to.spaced]:w})}),w&&rt.default.createElement("div",{className:to.actions},rt.default.createElement("div",{onClick:f,className:(0,Np.default)(to.action,{[to.disabled]:k})},rt.default.createElement(Gg.FontAwesomeIcon,{icon:Vg.faUndo,className:to.icon})))),n&&rt.default.createElement("div",{className:ke.error,"data-testid":"gasPriceError"},m))};q();var Zg=W(p("react"));q();var Hg=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hg));var lt={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"},Xg=({feeLimit:c,rewaPriceInUsd:i})=>c===oc?null:Zg.default.createElement("span",{className:lt.fiat,"data-testid":"feeInFiat"},"(",ah({feeLimit:c,rewaPriceInUsd:i}),")"),Kg=({className:c})=>{let{gasInfo:i,tokensInfo:l}=so(),{feeLimit:d,gasCostLoading:u,gasPriceError:_,gasLimitError:m}=i,{rewaPriceInUsd:n,rewaLabel:E}=l,[g,x]=(0,co.useState)(Boolean(_||m)),{getCollapseProps:w,getToggleProps:k}=(0,Lg.default)({isExpanded:g}),I=()=>{x(f=>!f)};return co.default.createElement("div",{className:(0,Tp.default)(lt.fee,c)},co.default.createElement("label",{className:ke.label},"Fee"),co.default.createElement("div",ge({className:lt.trigger},k({onClick:I})),co.default.createElement("span",{className:lt.limit,"data-testid":"feeLimit"},co.default.createElement(Bg.FormatAmount,{value:d,showLastNonZeroDecimal:!0,rewaLabel:E})),u&&co.default.createElement(Ap.FontAwesomeIcon,{icon:Sp.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),co.default.createElement(Xg,{rewaPriceInUsd:n,feeLimit:d}),co.default.createElement(Ap.FontAwesomeIcon,{icon:Sp.faChevronRight,className:(0,Tp.default)(lt.arrow,{[lt.active]:g})})),co.default.createElement("div",ge({className:lt.expandable},w()),co.default.createElement("div",{className:lt.content},co.default.createElement(ic,null),co.default.createElement(cc,null))))};q();q();var ct=W(p("react")),Jg=W(p("@terradharitri/sdk-dapp/constants/index")),Qg=W(p("classnames")),sc=W(p("react-select"));q();var ev=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ev));var Bp={selectTokenContainer:"dapp-core-component__styles-module__selectTokenContainer"};q();q();var Ye=W(p("react")),ov=p("@fortawesome/free-solid-svg-icons"),tv=p("@fortawesome/react-fontawesome"),rv=W(p("@terradharitri/sdk-dapp/constants/index")),nv=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),av=W(p("classnames"));q();var lv=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(lv));var $t={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},pv=(ma(),cr(zr)).default,cv=({RewaIcon:c,inDropdown:i=!1,isRewa:l,nftTokenDetails:d,nftType:u,token:_})=>{var m,n;let{name:E,identifier:g,balance:x,decimals:w}=_,k=((m=_.assets)==null?void 0:m.svgUrl)||((n=_.assets)==null?void 0:n.pngUrl)||"",I=k?28:20,[f,b]=(0,Ye.useState)(E);(0,Ye.useEffect)(()=>{var S;(S=d==null?void 0:d.uris)!=null&&S.some(O=>{let D=Gp.Buffer.from(String(O),"base64").toString(),{found:U}=th(D,d==null?void 0:d.scamInfo);return U})||b(E)},[E]);let y=Ye.default.createElement(tv.FontAwesomeIcon,{icon:ov.faDiamond});u==lr.NftEnumType.NonFungibleDCDT&&(y=Ye.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-nft`},"NFT")),u===lr.NftEnumType.SemiFungibleDCDT&&(y=Ye.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-sft`},"SFT"));let v=!i&&u!==lr.NftEnumType.NonFungibleDCDT,A=Ye.default.createElement("div",{className:$t.tokenElementCircle},y);return k&&(A=Ye.default.createElement("img",{className:$t.tokenElementCircle,src:k,alt:E,height:I})),l&&(A=Ye.default.createElement("div",{className:$t.tokenElementCircle},c?Ye.default.createElement(c,{height:36}):Ye.default.createElement(pv,{height:36}))),Ye.default.createElement("div",{className:(0,av.default)(ke.value,$t.tokenElement)},Ye.default.createElement("div",{className:$t.tokenElementWrapper},A),Ye.default.createElement("div",{"data-testid":"tokenName"},Ye.default.createElement("span",{"data-testid":`${g}-element`},Ye.default.createElement("span",null,f)," ",Ye.default.createElement("span",{className:$t.tokenElementIdentifier},g)),v&&Ye.default.createElement(nv.FormatAmount,{rewaLabel:g,value:x||oc,digits:u===lr.NftEnumType.SemiFungibleDCDT?0:rv.DIGITS,token:g,showLabel:!1,decimals:w,"data-testid":`${g}-balance`})))},iv=c=>ct.default.createElement("div",{className:`token-option ${c.isSelected?"is-selected":""}`,"data-testid":`${c.value}-option`},ct.default.createElement(sc.components.Option,ge({},c))),sv=({className:c,label:i})=>{let{formInfo:l,accountInfo:d,tokensInfo:u}=so(),{readonly:_}=l,{balance:m}=d,{getTokens:n,areTokensLoading:E,tokens:g,tokenId:x,rewaLabel:w,RewaIcon:k,tokenIdError:I,onChangeTokenId:f,isTokenIdInvalid:b}=u,y=({token:J})=>ct.default.createElement(cv,{inDropdown:!0,token:J,isRewa:J.identifier===w,RewaIcon:k}),v=[{name:"DharitrI eGold",identifier:w,balance:m,decimals:Jg.DECIMALS,ticker:""},...g].map(J=>({value:J.identifier,label:J.name,assets:J.assets,token:J}));function A(){return ir(this,null,function*(){yield n()})}let S=J=>{J&&f(J.value)},O=({value:J,label:ee},oe)=>{if(Boolean(oe)){let Q=oe.trim().toLowerCase(),pe=ne=>ne.toLowerCase().indexOf(Q)>-1;return pe(J)||pe(ee)}return!0},D=window.getComputedStyle(document.documentElement),U=rh({docStyle:D});return ct.default.createElement("div",{className:(0,Qg.default)(Bp.selectTokenContainer,c)},i&&ct.default.createElement("label",{htmlFor:"tokenId","data-testid":"tokenIdLabel",className:Bp.selectTokenLabel},i),ct.default.createElement(sc.default,{className:"selectToken",classNamePrefix:"selectToken",components:{Option:iv},filterOption:O,formatOptionLabel:y,inputId:"tokenId",isDisabled:it("tokenId",_),isLoading:E,name:"tokenId",onChange:S,onMenuOpen:A,openMenuOnFocus:!0,options:v,styles:c?{}:U,value:v.find(({value:J})=>J===x)||void 0}),b&&ct.default.createElement("div",{className:ke.error,"data-testid":"tokenIdError"},ct.default.createElement("small",null,I)))};q();q();var wo=W(p("react")),ra=W(p("classnames"));q();var dv=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dv));var pt={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};q();q();q();var Ze=W(p("react")),uv=p("@terradharitri/sdk-dapp/utils/validation"),na=W(p("bignumber.js")),Lp=W(p("classnames")),mv=p("react-number-format");q();var fv=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fv));var Or={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"},_v=500,Up=1e13,hv=({"data-testid":c,InfoDustComponent:i,disabled:l,handleBlur:d,handleChange:u,name:_,onDebounceChange:m,onFocus:n,onKeyDown:E,placeholder:g,required:x,usdPrice:w,value:k,usdValue:I,className:f,autoFocus:b,suffix:y})=>{let v=(0,Ze.useRef)(null),[A,S]=(0,Ze.useState)(),[O,D]=(0,Ze.useState)(!1),[U,J]=(0,Ze.useState)({value:k,count:0}),[ee,oe]=(0,Ze.useState)(),Q=jg(U,_v),pe=Y=>{Y.stopPropagation(),D(!0);let X=qp(Y.target.value),ce=(0,na.default)(X).isLessThanOrEqualTo(Up);if((X===""||ce)&&(S(X),Y.target.value=X,u(Y),m)){let ie={value:X,count:U.count+1};J(ie)}},ne=()=>{if(I)return oe(`$${I}`);if(!w||!k)return oe(void 0);let Y=qp(k);if(!(k!==""&&(0,uv.stringIsFloat)(Y))||Y==="")return oe(void 0);let X=Mg(new na.default(Y).times(w!=null?w:0).toString(10),2);oe(`$${X}`)},Z=({value:Y,floatValue:X})=>(!X||(0,na.default)(X).isLessThanOrEqualTo(Up))&&!ga(Y);return(0,Ze.useEffect)(()=>{m&&O&&(D(!1),m(Q.value))},[Q]),(0,Ze.useEffect)(ne,[k,I,w]),(0,Ze.useEffect)(()=>{k!==A&&S(k)},[k]),Ze.default.createElement("div",{ref:v,className:(0,Lp.default)(Or.amountHolder,{[Or.showUsdValue]:Boolean(ee)},f)},Ze.default.createElement(mv.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":c||_,decimalSeparator:".",disabled:Boolean(l),id:_,inputMode:"decimal",isAllowed:Z,name:_,onBlur:d,onChange:pe,onFocus:n,onKeyDown:E,placeholder:g,required:x,thousandSeparator:",",thousandsGroupStyle:"thousand",value:A,suffix:y,valueIsNumericString:!0,allowNegative:!1,autoFocus:b,className:(0,Lp.default)(ke.input,Or.amountInput,{[ke.disabled]:Boolean(l)})}),ee&&Ze.default.createElement("span",{className:Or.amountHolderUsd},Ze.default.createElement("small",{"data-testid":`tokenPrice_${w}`},ee!=="$0"?Ze.default.createElement(Ze.default.Fragment,null,"\u2248 "):Ze.default.createElement(Ze.default.Fragment,null),ee),i))},gv=(0,Ze.memo)(hv,(c,i)=>c.value===i.value&&c.usdPrice===i.usdPrice&&c.className===i.className&&c.disabled===i.disabled&&c.usdValue===i.usdValue);q();q();var Op=W(p("react"));q();q();var ar=W(p("react")),vv=p("@fortawesome/free-solid-svg-icons"),bv=p("@fortawesome/react-fontawesome"),yv=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),wv=p("react-tooltip"),L5=p("react-tooltip/dist/react-tooltip.css");q();var Ev=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ev));var aa={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},kv=({rewaLabel:c})=>ar.default.createElement("div",{className:aa.infoDust},ar.default.createElement(wv.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:aa.infoDustTooltip},"A minimal amount of"," ",ar.default.createElement(yv.FormatAmount,{rewaLabel:c,value:ec,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),ar.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:aa.infoDustTrigger},ar.default.createElement(bv.FontAwesomeIcon,{icon:vv.faInfoCircle,className:"i-icon"}))),xv=({rewaLabel:c,amount:i,maxAmountMinusDust:l,isMaxClicked:d,tokenId:u})=>i===l&&d&&u===c?Op.default.createElement("span",{style:{marginLeft:"0.2rem"}},Op.default.createElement(kv,{rewaLabel:c})):null;q();q();var Sv=W(p("react")),Av=p("@terradharitri/sdk-dapp/constants"),Rp=W(p("bignumber.js")),Tv=W(p("classnames"));q();var Dp=W(p("bignumber.js")),Iv=c=>{let i=new Dp.default(c!=null?c:"0"),l=new Dp.default(ec),d=i.minus(l);return d.isGreaterThan(0)?d.toString(10):"0"};q();var qv=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qv));var Cv={max:"dapp-core-component__maxButton-module__max"};q();var It=p("@terradharitri/sdk-dapp/constants"),Nv=p("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Bv=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),va=({amount:c="0",decimals:i=0,digits:l=It.DIGITS,addCommas:d=!1,showLastNonZeroDecimal:u=!1})=>{if(c==null||!(0,Bv.stringIsInteger)(c))return"0";let _=n=>(0,Nv.formatAmount)({input:c,digits:n,decimals:i,addCommas:d,showLastNonZeroDecimal:u}),m=_(l);return m=parseFloat(m)>0?m:_(It.DIGITS),m=parseFloat(m)>0?m:_(It.DIGITS+2),m=parseFloat(m)>0?m:_(It.DIGITS+4),m=parseFloat(m)>0?m:_(It.DIGITS+6),m=parseFloat(m)>0?m:_(It.DIGITS+10),parseFloat(m)>0?m:_(It.DIGITS+14)},Lv=({token:c,rewaLabel:i,inputAmount:l,className:d,onMaxClick:u})=>{var _;let m=(c==null?void 0:c.identifier)===i,n=(_=c==null?void 0:c.balance)!=null?_:"0";if(n==="0")return null;let E=va({amount:m?Iv(n):n,decimals:(c==null?void 0:c.decimals)||Av.DECIMALS}),g=new Rp.default(l).isEqualTo(new Rp.default(E)),x=w=>{w.preventDefault(),u==null||u(E)};return g?null:Sv.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,Tv.default)(Cv.max,d),onClick:x,onMouseDown:w=>{w.preventDefault()}},"Max")};q();q();var nt=W(p("react")),Uv=W(p("classnames")),Ov=W(p("react-select")),dc={};jr(dc,{Control:()=>Jv,IndicatorsContainer:()=>lb,Input:()=>zv,Menu:()=>Hv,MenuList:()=>Gv,DharitrIIcon:()=>fc,Placeholder:()=>tb,SmallLoader:()=>Pv,ValueComponent:()=>uc,getOption:()=>_c,getSingleValue:()=>hc,getValueContainer:()=>mc});q();q();var Pp=W(p("react")),Rv=p("@fortawesome/free-solid-svg-icons"),Dv=p("@fortawesome/react-fontawesome"),Pv=({show:c,color:i})=>c?Pp.default.createElement("div",{className:"d-flex"},Pp.default.createElement(Dv.FontAwesomeIcon,{icon:Rv.faSpinner,className:`fa-spin fast-spin ${i||"text-primary"}`})):null;q();q();var Mv=W(p("react")),Fv=p("react-select");q();var jv=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jv));var _e={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},zv=c=>Mv.default.createElement(Fv.components.Input,Se(ge({},c),{className:_e.dropdown,"data-testid":"tokenSelectInput"}));q();var Wv=W(p("react")),Vv=p("react-select"),Gv=c=>{let i=c,{rx:l}=i,d=G_(i,["rx"]);return Wv.default.createElement(Vv.components.MenuList,Se(ge({},d),{className:_e.list}))};q();var la=W(p("react")),$v=p("@fortawesome/free-solid-svg-icons"),Yv=p("@fortawesome/react-fontawesome"),Zv=p("react-select"),Hv=c=>la.default.createElement(Zv.components.Menu,Se(ge({},c),{className:_e.menu}),c.selectProps.isLoading?la.default.createElement("div",{className:_e.loading},la.default.createElement(Yv.FontAwesomeIcon,{icon:$v.faCircleNotch,className:"fa-spin",size:"lg"})):c.children);q();var Xv=W(p("react")),Kv=p("react-select"),Jv=c=>Xv.default.createElement(Kv.components.Control,Se(ge({},c),{className:_e.control}));q();var Qv=W(p("react")),eb=W(p("classnames")),ob=p("react-select"),tb=c=>Qv.default.createElement(ob.components.Placeholder,Se(ge({},c),{className:(0,eb.default)(_e.placeholder,{[_e.focused]:c.isFocused})}));q();var rb=W(p("react")),nb=W(p("classnames")),ab=p("react-select"),lb=c=>rb.default.createElement(ab.components.IndicatorsContainer,Se(ge({},c),{className:(0,nb.default)(_e.indicator,{[_e.expanded]:c.selectProps.menuIsOpen})}));q();var io=W(p("react")),pb=p("@fortawesome/free-solid-svg-icons"),cb=p("@fortawesome/react-fontawesome"),ib=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),sb=W(p("classnames")),db=p("react-select"),ub=(ma(),cr(zr)).default,uc=({RewaIcon:c,tokenId:i,icon:l})=>{let{isRewa:d}=(0,ib.getIdentifierType)(i);return d?io.default.createElement("span",{className:_e.asset},c?io.default.createElement(c,{className:_e.diamond}):io.default.createElement(ub,{className:_e.diamond})):l?io.default.createElement("img",{src:l,className:_e.asset}):io.default.createElement(cb.FontAwesomeIcon,{icon:pb.faDiamond,className:_e.asset})},mb=({children:c})=>io.default.createElement("div",{className:_e.wrapper},c),mc=(c,i,l)=>d=>{var u,_;let{selectProps:m,isDisabled:n,children:E}=d,g=m.value,x=(_=(u=g==null?void 0:g.assets)==null?void 0:u.svgUrl)!=null?_:null,w=(0,io.useMemo)(()=>{let k=String(g==null?void 0:g.token.usdPrice);return k!=null&&k.includes("$")?g==null?void 0:g.token.usdPrice:`$${g==null?void 0:g.token.usdPrice}`},[g==null?void 0:g.token.usdPrice]);return io.default.createElement(db.components.ValueContainer,Se(ge({},d),{className:_e.container}),io.default.createElement("div",{className:(0,sb.default)(_e.icon,i)},io.default.createElement(uc,{RewaIcon:l,rewaLabel:c,icon:x,isDisabled:n,tokenId:g==null?void 0:g.value})),io.default.createElement("div",{className:_e.payload},io.default.createElement(mb,null,E,(g==null?void 0:g.token.usdPrice)&&io.default.createElement("small",{className:_e.price},w))))};q();var Ue=W(p("react")),fb=p("@fortawesome/free-solid-svg-icons"),_b=p("@fortawesome/react-fontawesome"),hb=p("@terradharitri/sdk-dapp/constants"),gb=p("@terradharitri/sdk-dapp/UI/UsdValue"),vb=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),bb=W(p("classnames")),yb=p("react-select"),{default:fc}=(ma(),cr(zr)),_c=({RewaIcon:c,TokenTickerIcon:i,showBalanceUsdValue:l,showTokenPrice:d})=>u=>{var _,m,n,E;let{data:g,isSelected:x,isFocused:w,isDisabled:k,selectProps:I}=u,f=g,{isRewa:b}=(0,vb.getIdentifierType)(f.value),y=f.token.assets?f.token.assets.svgUrl:null,v=va({amount:f.token.balance,decimals:f.token.decimals||hb.DECIMALS,addCommas:!0}),A=(m=(_=f.token)==null?void 0:_.usdPrice)==null?void 0:m.toString(),S=(E=(n=f.token)==null?void 0:n.valueUSD)==null?void 0:E.toString();return Ue.default.createElement("div",{"data-testid":`${u.value}-option`},Ue.default.createElement(yb.components.Option,Se(ge({},u),{className:(0,bb.default)(_e.option,{[_e.selected]:x||w,[_e.disabled]:k})}),Ue.default.createElement("div",{className:_e.image},b?Ue.default.createElement("span",{className:_e.icon},c?Ue.default.createElement(c,null):Ue.default.createElement(fc,null)):y?Ue.default.createElement("img",{src:y,className:_e.icon}):Ue.default.createElement("span",{className:_e.icon},Ue.default.createElement(_b.FontAwesomeIcon,{icon:fb.faDiamond,className:_e.diamond}))),Ue.default.createElement("div",{className:_e.info},Ue.default.createElement("div",{className:_e.left},Ue.default.createElement("div",{className:_e.ticker},Ue.default.createElement("span",{className:_e.value},I.inputValue?Ue.default.createElement(lc,{text:f.token.ticker,highlight:I.inputValue}):f.token.ticker),i&&Ue.default.createElement(i,{token:f.token})),d&&Ue.default.createElement("small",{className:_e.price},A)),Ue.default.createElement("div",{className:_e.right},Ue.default.createElement("span",{className:_e.value},v),l&&S&&Ue.default.createElement(gb.UsdValue,{usd:1,decimals:4,amount:S,"data-testid":"token-price-usd-value",className:_e.price,addEqualSign:!1}))),Ue.default.createElement("div",{className:_e.children},u.children)))};q();var pa=W(p("react")),wb=W(p("classnames")),Eb=p("react-select"),hc=c=>i=>{let{selectProps:l,children:d}=i,u=l.value;return pa.default.createElement(Eb.components.SingleValue,Se(ge({},i),{className:(0,wb.default)(_e.single,{[_e.focused]:i.selectProps.menuIsOpen})}),pa.default.createElement("div",{className:_e.ticker},d,c&&pa.default.createElement(c,{token:u==null?void 0:u.token})))},{Menu:kb,Control:xb,Input:Sb,MenuList:Ab,IndicatorsContainer:Tb,Placeholder:Ib}=dc,qb=c=>{let{name:i,options:l,isLoading:d=!1,className:u="",noOptionsMessage:_="No Tokens",disabledOption:m,rewaLabel:n,RewaIcon:E,disabled:g,value:x,onBlur:w,onFocus:k,onChange:I,onMenuOpen:f,chainId:b,wrapperClassName:y="",showTokenPrice:v=!1,showBalanceUsdValue:A=!1,selectedTokenIconClassName:S,TokenTickerIcon:O}=c,D=(0,nt.useRef)(null),U=[n,uh(b)],J=(0,nt.useMemo)(()=>_c({rewaLabel:n,RewaIcon:E,showTokenPrice:v,showBalanceUsdValue:A,TokenTickerIcon:O}),[]),ee=(0,nt.useMemo)(()=>mc(n,S,E),[]),oe=(0,nt.useMemo)(()=>hc(O),[]);(0,nt.useEffect)(()=>{let Z=l.find(X=>X.value===(x==null?void 0:x.value)),Y=(Z==null?void 0:Z.token.balance)===(x==null?void 0:x.token.balance);!Z||Y||I(Z)},[l]);let Q=Z=>U.includes(Z),pe=Z=>{var Y;let X=Z.value===(m==null?void 0:m.value),ce=Q(Z.value),ie=Q((Y=m==null?void 0:m.value)!=null?Y:"");return X||ce&&ie},ne=(Z,Y)=>{let X=Z.data.token.ticker?Z.data.token.ticker.toLowerCase().includes(Y.toLowerCase()):!1,ce=Z.data.token.name.toLowerCase().includes(Y.toLowerCase());return Boolean(Y)?X||ce:!0};return nt.default.createElement("div",{"data-testid":`${i}Select`,className:`${y} ${d?"select-holder-loading":""}`},nt.default.createElement("label",{htmlFor:i,"data-testid":"tokenIdLabel",className:_e.label},"Token"),nt.default.createElement(Ov.default,{ref:D,inputId:i,name:i,options:l,openMenuOnFocus:!0,isDisabled:g,isLoading:d,value:x,isOptionDisabled:pe,onBlur:w,filterOption:ne,onFocus:k,onChange:Z=>{I(Z),D&&D.current!==null&&D.current.blur()},isSearchable:c.isSearchable,maxMenuHeight:260,onMenuOpen:f,noOptionsMessage:()=>_,className:(0,Uv.default)(_e.select,u,{[_e.disabled]:c.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:kb,Control:xb,Input:Sb,MenuList:Ab,IndicatorsContainer:Tb,ValueContainer:ee,Placeholder:Ib,Option:J,SingleValue:oe}}))};q();q();var Cb=W(p("react")),Nb=W(p("classnames")),Bb=({hasErrors:c,className:i,error:l,"data-testid":d})=>c?Cb.default.createElement("div",{className:(0,Nb.default)(ke.error,i),"data-testid":d},l):null;q();q();var ca=W(p("react")),Lb=W(p("classnames"));q();var Ub=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ub));var ia={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},Ob=({label:c,value:i,className:l,token:d,"data-testid":u,"data-value":_})=>ca.default.createElement("div",{"data-testid":u,"data-value":_,className:(0,Lb.default)(ia.balance,l)},ca.default.createElement("span",{className:ia.label},c,": "),ca.default.createElement("span",{className:ia.value},i)," ",d==null?void 0:d.ticker),gc=({className:c,label:i,name:l,wrapperControlsClassName:d,tokenSelectProps:u,tokenBalanceProps:_,amountInputProps:m,amountErrorProps:n,maxButtonProps:E,readonly:g})=>wo.default.createElement("div",{className:(0,ra.default)(pt.amount,c)},wo.default.createElement("div",{className:pt.label},i&&wo.default.createElement("label",{htmlFor:l,className:ke.label,"data-testid":"amountLabel"},i),wo.default.createElement(Ob,ge({},_))),wo.default.createElement("div",{className:(0,ra.default)(pt.wrapper,d,{[pt.error]:m.isInvalid||u.isInvalid||n.hasErrors,[pt.disabled]:g})},wo.default.createElement(gv,ge({},m)),wo.default.createElement("div",{className:(0,ra.default)(pt.interaction,E.wrapperClassName)},E.isMaxButtonVisible&&wo.default.createElement(Lv,ge({},E)),wo.default.createElement("div",{className:pt.select},wo.default.createElement(qb,ge({},u))))),wo.default.createElement(Bb,ge({},n)));q();var sa=W(p("react")),Rb=p("@terradharitri/sdk-dapp/constants"),Db=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Pb=()=>{var c,i;let{checkInvalid:l}=kh(),{tokensInfo:d,amountInfo:u,formInfo:_}=so(),{readonly:m}=_,{networkConfig:{rewaLabel:n,chainId:E}}=_a(),{rewaPriceInUsd:g}=Oh(),{amount:x,onBlur:w,onChange:k,onMaxClicked:I,error:f,isInvalid:b,onFocus:y,maxAmountAvailable:v,isMaxClicked:A,isMaxButtonVisible:S,maxAmountMinusDust:O}=u,{allAvailableTokens:D,areTokensLoading:U,getTokens:J,isTokenIdInvalid:ee,RewaIcon:oe,nft:Q,onChangeTokenId:pe,tokenDetails:ne,tokenId:Z,tokenIdError:Y}=d,X=D.map(re=>({value:re.identifier,label:String(re.ticker),assets:re.assets,token:re})),{isRewa:ce}=(0,Db.getIdentifierType)(Z),ie=X.find(({value:re})=>re===Z),be={id:"tokenId",value:ie,name:"tokenId",isLoading:U,options:X,isSearchable:!0,onChange:re=>{re&&(pe(re.value),k(""))},onMenuOpen:J,disabled:it("tokenId",m),error:Y,isInvalid:ee,rewaLabel:n,chainId:E,RewaIcon:oe},he=(0,sa.useMemo)(()=>sa.default.createElement(xv,{amount:x,rewaLabel:n,maxAmountMinusDust:O,tokenId:Z,isMaxClicked:A}),[x,n,O,Z,A]),me={name:"amount",required:!0,value:x,placeholder:"Amount",handleBlur:w,"data-testid":"amount",handleChange:k,onFocus:y,usdPrice:ce?g:void 0,error:f,isInvalid:b,InfoDustComponent:he},B={token:ne,inputAmount:x,onMaxClick:I,isMaxClicked:A,isMaxButtonVisible:S},M=l("amount")&&!me.value,ve={hasErrors:me.isInvalid||be.isInvalid||M,error:me.error||be.error,className:ke.error,"data-testid":me.error?"amountError":"tokenIdError"},xe={"data-testid":`available-${(c=Q==null?void 0:Q.identifier)!=null?c:Z}`,"data-value":`${v} ${(i=Q==null?void 0:Q.identifier)!=null?i:Z}`,label:"Available",token:ie==null?void 0:ie.token,value:va({amount:ne.balance,decimals:ne.decimals||Rb.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(Q==null?void 0:Q.type)===lr.NftEnumType.NonFungibleDCDT?null:sa.default.createElement(gc,{name:"tokenId",amountErrorProps:ve,tokenSelectProps:be,amountInputProps:me,tokenBalanceProps:xe,maxButtonProps:B,label:"Amount",readonly:m})};q();q();var qt=W(p("react")),Mp=W(p("classnames"));q();q();q();var zo=W(p("react")),Fp=p("@fortawesome/free-solid-svg-icons"),jp=p("@fortawesome/react-fontawesome"),Mb=p("formik");q();q();var vc=()=>{let{formInfo:{isRewaTransaction:c,readonly:i},dataFieldInfo:{isAdvancedModeEnabled:l}}=so();return l?!1:!c||it("data",i)};q();var Fb=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fb));var Rr={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"},jb=()=>{let{formInfo:{readonly:c,isRewaTransaction:i}}=so(),{setFieldValue:l,values:d}=(0,Mb.useFormikContext)(),[u,_]=(0,zo.useState)(!1),[m,n]=(0,zo.useState)(!1),E=vc(),g=!u&&!c&&E&&Boolean(d.data),x=()=>{_(!0),l("isAdvancedModeEnabled",!0)},w=()=>{n(!0),setTimeout(()=>{n(!1)},5e3)};return(0,zo.useEffect)(()=>{!i&&u&&_(!1)},[i,d.amount]),g?m?zo.default.createElement("div",{className:Rr.advanced,"data-testid":"confirmAdvancedMode",onClick:x},zo.default.createElement(jp.FontAwesomeIcon,{icon:Fp.faCheck,className:"i-icon"}),zo.default.createElement("span",{className:Rr.advancedText},"Confirm")):zo.default.createElement("div",{"data-testid":"enableAdvancedMode",className:Rr.advanced,onClick:w},zo.default.createElement(jp.FontAwesomeIcon,{icon:Fp.faScrewdriverWrench,className:"i-icon"}),zo.default.createElement("span",{className:Rr.advancedText},"Advanced")):null};q();var zb=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zb));var zp={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"},Wb=({className:c})=>{let{dataFieldInfo:{data:i,dataError:l,isDataInvalid:d,onChange:u,onBlur:_}}=so(),m=vc();return qt.default.createElement("div",{className:(0,Mp.default)(zp.data,c)},qt.default.createElement("div",{className:pt.label},qt.default.createElement("label",{htmlFor:"data",className:ke.label},"Data"),qt.default.createElement(jb,null)),qt.default.createElement("div",{className:zp.wrapper},qt.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:m,"data-testid":"data",value:i,onBlur:_,onChange:u,spellCheck:"false",placeholder:"Add transaction data",className:(0,Mp.default)(ke.textarea,{[ke.invalid]:d,[ke.disabled]:m})})),d&&qt.default.createElement("div",{className:ke.error,"data-testid":"dataError"},l))};q();q();q();var at=W(p("react")),Ct=W(p("classnames"));q();var Vb=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vb));var oo={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"},Gb=({disabled:c,percentageValue:i=0,onPercentageChange:l,className:d})=>{let u=[0,25,50,75,100],_="amountSlider";return at.default.createElement("div",{className:(0,Ct.default)(oo.amountSlider,d)},at.default.createElement("div",{className:oo.amountSliderRange},at.default.createElement("input",{name:_,id:_,"data-testid":_,type:"range",disabled:c,min:0,max:100,value:String(i),className:(0,Ct.default)(oo.amountSliderInput,{[oo.disabled]:c}),onChange:m=>{l(Number(m.target.value))}}),at.default.createElement("div",{style:{width:`${i}%`},className:(0,Ct.default)(oo.amountSliderCompletion,{[oo.disabled]:c})}),u.map(m=>at.default.createElement("span",{onClick:()=>l(m),key:`breakpoint-${m}`,style:{left:`${m}%`},className:(0,Ct.default)(oo.amountSliderBreakpoint,{[oo.completed]:m<=i,[oo.disabled]:c})})),u.map(m=>at.default.createElement("span",{style:{left:`${m}%`},key:`breakpoint-${m}`,onClick:()=>l(m),className:(0,Ct.default)(oo.amountSliderPercentage,{[oo.exact]:m===i,[oo.disabled]:c})},m,"%")),at.default.createElement("span",{style:{left:`${i}%`},className:(0,Ct.default)(oo.amountSliderThumb,{[oo.disabled]:c})},at.default.createElement("strong",{className:(0,Ct.default)(oo.amountSliderThumbPercentage,{[oo.hidden]:u.includes(i)})},Math.round(i),"%"))))};});var Gc=No((sk,Vc)=>{"use strict";Ce();var $b=Object.create,sr=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,Zb=Object.getOwnPropertyNames,wc=Object.getOwnPropertySymbols,Hb=Object.getPrototypeOf,Lc=Object.prototype.hasOwnProperty,Xb=Object.prototype.propertyIsEnumerable,Ec=(c,i,l)=>i in c?sr(c,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[i]=l,Uc=(c,i)=>{for(var l in i||(i={}))Lc.call(i,l)&&Ec(c,l,i[l]);if(wc)for(var l of wc(i))Xb.call(i,l)&&Ec(c,l,i[l]);return c},ka=(c,i)=>()=>(c&&(i=c(c=0)),i),Xr=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports),xa=(c,i)=>{for(var l in i)sr(c,l,{get:i[l],enumerable:!0})},Oc=(c,i,l,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of Zb(i))!Lc.call(c,u)&&u!==l&&sr(c,u,{get:()=>i[u],enumerable:!(d=Yb(i,u))||d.enumerable});return c},qe=(c,i,l)=>(l=c!=null?$b(Hb(c)):{},Oc(i||!c||!c.__esModule?sr(l,"default",{value:c,enumerable:!0}):l,c)),Kr=c=>Oc(sr({},"__esModule",{value:!0}),c),Kb=Xr(c=>{"use strict";H(),c.byteLength=E,c.toByteArray=x,c.fromByteArray=I;var i=[],l=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,m=u.length;_<m;++_)i[_]=u[_],l[u.charCodeAt(_)]=_;var _,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(f){var b=f.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=f.indexOf("=");y===-1&&(y=b);var v=y===b?0:4-y%4;return[y,v]}function E(f){var b=n(f),y=b[0],v=b[1];return(y+v)*3/4-v}function g(f,b,y){return(b+y)*3/4-y}function x(f){var b,y=n(f),v=y[0],A=y[1],S=new d(g(f,v,A)),O=0,D=A>0?v-4:v,U;for(U=0;U<D;U+=4)b=l[f.charCodeAt(U)]<<18|l[f.charCodeAt(U+1)]<<12|l[f.charCodeAt(U+2)]<<6|l[f.charCodeAt(U+3)],S[O++]=b>>16&255,S[O++]=b>>8&255,S[O++]=b&255;return A===2&&(b=l[f.charCodeAt(U)]<<2|l[f.charCodeAt(U+1)]>>4,S[O++]=b&255),A===1&&(b=l[f.charCodeAt(U)]<<10|l[f.charCodeAt(U+1)]<<4|l[f.charCodeAt(U+2)]>>2,S[O++]=b>>8&255,S[O++]=b&255),S}function w(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function k(f,b,y){for(var v,A=[],S=b;S<y;S+=3)v=(f[S]<<16&16711680)+(f[S+1]<<8&65280)+(f[S+2]&255),A.push(w(v));return A.join("")}function I(f){for(var b,y=f.length,v=y%3,A=[],S=16383,O=0,D=y-v;O<D;O+=S)A.push(k(f,O,O+S>D?D:O+S));return v===1?(b=f[y-1],A.push(i[b>>2]+i[b<<4&63]+"==")):v===2&&(b=(f[y-2]<<8)+f[y-1],A.push(i[b>>10]+i[b>>4&63]+i[b<<2&63]+"=")),A.join("")}}),Jb=Xr(c=>{H(),c.read=function(i,l,d,u,_){var m,n,E=_*8-u-1,g=(1<<E)-1,x=g>>1,w=-7,k=d?_-1:0,I=d?-1:1,f=i[l+k];for(k+=I,m=f&(1<<-w)-1,f>>=-w,w+=E;w>0;m=m*256+i[l+k],k+=I,w-=8);for(n=m&(1<<-w)-1,m>>=-w,w+=u;w>0;n=n*256+i[l+k],k+=I,w-=8);if(m===0)m=1-x;else{if(m===g)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,u),m=m-x}return(f?-1:1)*n*Math.pow(2,m-u)},c.write=function(i,l,d,u,_,m){var n,E,g,x=m*8-_-1,w=(1<<x)-1,k=w>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=u?0:m-1,b=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(E=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-n))<1&&(n--,g*=2),n+k>=1?l+=I/g:l+=I*Math.pow(2,1-k),l*g>=2&&(n++,g/=2),n+k>=w?(E=0,n=w):n+k>=1?(E=(l*g-1)*Math.pow(2,_),n=n+k):(E=l*Math.pow(2,k-1)*Math.pow(2,_),n=0));_>=8;i[d+f]=E&255,f+=b,E/=256,_-=8);for(n=n<<_|E,x+=_;x>0;i[d+f]=n&255,f+=b,n/=256,x-=8);i[d+f-b]|=y*128}}),Qb=Xr(c=>{"use strict";H();var i=Kb(),l=Jb(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=n,c.SlowBuffer=A,c.INSPECT_MAX_BYTES=50;var u=2147483647;c.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return k(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return b(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var a=y(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function g(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function x(e,o,t){return g(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}n.alloc=function(e,o,t){return x(e,o,t)};function w(e){return g(e),m(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function k(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=S(e,o)|0,r=m(t),a=r.write(e,o);return a!==t&&(r=r.slice(0,a)),r}function I(e){for(var o=e.length<0?0:v(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if($(e,Uint8Array)){var o=new Uint8Array(e);return b(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function b(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?m(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function v(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),$(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,a=0,s=Math.min(t,r);a<s;++a)if(e[a]!==o[a]){t=e[a],r=o[a];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),a=0;for(t=0;t<e.length;++t){var s=e[t];if($(s,Uint8Array))a+s.length>r.length?n.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else if(n.isBuffer(s))s.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return r};function S(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ae(e).length;default:if(a)return r?-1:ye(e).length;o=(""+o).toLowerCase(),a=!0}}n.byteLength=S;function O(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,o,t);case"utf8":case"utf-8":return Y(this,o,t);case"ascii":return ie(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return Z(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function D(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)D(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)D(this,o,o+3),D(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)D(this,o,o+7),D(this,o+1,o+6),D(this,o+2,o+5),D(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,a){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||t>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=t)return 0;if(r>=a)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var s=a-r,h=t-o,C=Math.min(s,h),P=this.slice(r,a),N=e.slice(o,t),L=0;L<C;++L)if(P[L]!==N[L]){s=P[L],h=N[L];break}return s<h?-1:h<s?1:0};function U(e,o,t,r,a){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,we(t)&&(t=a?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(a)return-1;t=e.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:J(e,o,t,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):J(e,[o],t,r,a);throw new TypeError("val must be string, number or Buffer")}function J(e,o,t,r,a){var s=1,h=e.length,C=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,h/=2,C/=2,t/=2}function P(Te,Ie){return s===1?Te[Ie]:Te.readUInt16BE(Ie*s)}var N;if(a){var L=-1;for(N=t;N<h;N++)if(P(e,N)===P(o,L===-1?0:N-L)){if(L===-1&&(L=N),N-L+1===C)return L*s}else L!==-1&&(N-=N-L),L=-1}else for(t+C>h&&(t=h-C),N=t;N>=0;N--){for(var j=!0,de=0;de<C;de++)if(P(e,N+de)!==P(o,de)){j=!1;break}if(j)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return U(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return U(this,e,o,t,!1)};function ee(e,o,t,r){t=Number(t)||0;var a=e.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var h=0;h<r;++h){var C=parseInt(o.substr(h*2,2),16);if(we(C))return h;e[t+h]=C}return h}function oe(e,o,t,r){return se(ye(o,e.length-t),e,t,r)}function Q(e,o,t,r){return se(ze(o),e,t,r)}function pe(e,o,t,r){return se(Ae(o),e,t,r)}function ne(e,o,t,r){return se(We(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ee(this,e,o,t);case"utf8":case"utf-8":return oe(this,e,o,t);case"ascii":case"latin1":case"binary":return Q(this,e,o,t);case"base64":return pe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,o,t);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Z(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function Y(e,o,t){t=Math.min(e.length,t);for(var r=[],a=o;a<t;){var s=e[a],h=null,C=s>239?4:s>223?3:s>191?2:1;if(a+C<=t){var P,N,L,j;switch(C){case 1:s<128&&(h=s);break;case 2:P=e[a+1],(P&192)===128&&(j=(s&31)<<6|P&63,j>127&&(h=j));break;case 3:P=e[a+1],N=e[a+2],(P&192)===128&&(N&192)===128&&(j=(s&15)<<12|(P&63)<<6|N&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:P=e[a+1],N=e[a+2],L=e[a+3],(P&192)===128&&(N&192)===128&&(L&192)===128&&(j=(s&15)<<18|(P&63)<<12|(N&63)<<6|L&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,C=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|h&1023),r.push(h),a+=C}return ce(r)}var X=4096;function ce(e){var o=e.length;if(o<=X)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=X));return t}function ie(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]);return r}function he(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var a="",s=o;s<t;++s)a+=Ve[e[s]];return a}function me(e,o,t){for(var r=e.slice(o,t),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=o,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!1,52,8)};function M(e,o,t,r,a,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=1,h=0;for(this[o]=e&255;++h<t&&(s*=256);)this[o+h]=e/s&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=t-1,h=1;for(this[o+s]=e&255;--s>=0&&(h*=256);)this[o+s]=e/h&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=0,h=1,C=0;for(this[o]=e&255;++s<t&&(h*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=t-1,h=1,C=0;for(this[o+s]=e&255;--s>=0&&(h*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ve(e,o,t,r,a,s){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xe(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return xe(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return xe(this,e,o,!1,t)};function re(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var a=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),a},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<t;++s)this[s]=e;else{var h=n.isBuffer(e)?e:n.from(e,r),C=h.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<t-o;++s)this[s+o]=h[s%C]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,o){o=o||1/0;for(var t,r=e.length,a=null,s=[],h=0;h<r;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!a){if(t>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(h+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=t;continue}if(t<56320){(o-=3)>-1&&s.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,t<128){if((o-=1)<0)break;s.push(t)}else if(t<2048){if((o-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function We(e,o){for(var t,r,a,s=[],h=0;h<e.length&&!((o-=2)<0);++h)t=e.charCodeAt(h),r=t>>8,a=t%256,s.push(a),s.push(r);return s}function Ae(e){return i.toByteArray(je(e))}function se(e,o,t,r){for(var a=0;a<r&&!(a+t>=o.length||a>=e.length);++a)o[a+t]=e[a];return a}function $(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function we(e){return e!==e}var Ve=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)o[r+a]=e[t]+e[a];return o}()}),ey=Xr((c,i)=>{H();var l=i.exports={},d,u;function _(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(v){d=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=m}catch(v){u=m}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(A){try{return d.call(null,v,0)}catch(S){return d.call(this,v,0)}}}function E(v){if(u===clearTimeout)return clearTimeout(v);if((u===m||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(v);try{return u(v)}catch(A){try{return u.call(null,v)}catch(S){return u.call(this,v)}}}var g=[],x=!1,w,k=-1;function I(){!x||!w||(x=!1,w.length?g=w.concat(g):k=-1,g.length&&f())}function f(){if(!x){var v=n(I);x=!0;for(var A=g.length;A;){for(w=g,g=[];++k<A;)w&&w[k].run();k=-1,A=g.length}w=null,x=!1,E(v)}}l.nextTick=function(v){var A=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)A[S-1]=arguments[S];g.push(new b(v,A)),g.length===1&&!x&&n(f)};function b(v,A){this.fun=v,this.array=A}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),Rc,oy,ty,H=ka(()=>{Rc=qe(Qb()),oy=qe(ey()),ty=function(c){function i(){var d=this||self;return delete c.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Sa={};xa(Sa,{default:()=>Dc});var Wr,kc,Dc,Pc=ka(()=>{"use strict";H(),Wr=qe(p("react")),kc=c=>Wr.createElement("svg",Uc({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},c),Wr.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Wr.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Dc=kc}),Mc={};xa(Mc,{default:()=>Fc});var Vr,xc,Fc,ry=ka(()=>{"use strict";H(),Vr=qe(p("react")),xc=c=>Vr.createElement("svg",Uc({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},c),Vr.createElement("g",null,Vr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Fc=xc}),jc={};xa(jc,{Confirm:()=>Ut,default:()=>Gy});Vc.exports=Kr(jc);H();var ny=p("react");H();H();var st=qe(p("react")),Sc=p("@terradharitri/sdk-dapp/constants/index"),Ac=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),ay=p("@terradharitri/sdk-dapp/UI/UsdValue/index");H();var ly=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ly));var dt={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};H();H();H();H();var O5=p("bech32");H();H();H();H();H();var Gr=p("@terradharitri/sdk-dapp/types/tokens.types");H();H();var R5=p("@terradharitri/sdk-dapp/constants"),D5=p("@terradharitri/sdk-dapp/utils/account/getAccount");H();H();var P5=p("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");H();var M5=p("@terradharitri/sdk-dapp/utils/buildUrlParams");H();var ba=qe(p("anchorme")),ya=c=>c.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),py=(c,i)=>{if(i){let l=`[Message hidden due to suspicious content - ${i.info}]`;if(c.length>1e3)return{output:l,stringWithLinks:c,found:!0};let d=ya(c.normalize("NFKC")),u=ba.default.list(d),_=[];if(u.length>0){let m=l;u.forEach((n,E)=>{let{string:g}=n,x="",w="",k=g;for(let I=0;I<m.length;I++){let f=m.slice(I),[b]=ba.default.list(ya(f));b&&g===b.string&&(x=m.substring(0,I))}for(let I=l.length;I>0;I--){let f=m.slice(0,I),[b]=ba.default.list(ya(f));b&&g===b.string&&(w=m.substring(I))}_.push(x),_.push(k),m=w,E===u.length-1&&_.push(w)})}else _.push(c);return{output:l,stringWithLinks:_.join(""),found:!0}}else return{output:c,stringWithLinks:"",found:!1}};H();H();var F5=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),zc=p("@terradharitri/sdk-dapp/utils/operations/formatAmount"),cy=p("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Tc=p("@terradharitri/sdk-dapp/utils/operations/parseAmount");H();H();H();H();H();H();H();var Wo=qe(p("react")),iy=p("@fortawesome/free-solid-svg-icons"),sy=p("@fortawesome/react-fontawesome"),Ic=qe(p("classnames"));H();var dy=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dy));var Nt={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},uy=(Pc(),Kr(Sa)).default,Wc=c=>{let{avatar:i,type:l}=c;return l==="NonFungibleDCDT"?Wo.default.createElement("div",{className:(0,Ic.default)(Nt.tokenAvatar,Nt.tokenAvatarNFT)},"NFT"):l==="SemiFungibleDCDT"?Wo.default.createElement("div",{className:(0,Ic.default)(Nt.tokenAvatar,Nt.tokenAvatarSFT)},"SFT"):l==="REWA"?Wo.default.createElement("div",{className:Nt.tokenAvatar},c.RewaIcon?Wo.default.createElement(c.RewaIcon,null):Wo.default.createElement(uy,null)):i?Wo.default.createElement("div",{className:Nt.tokenAvatar},Wo.default.createElement("img",{src:i})):Wo.default.createElement("div",{className:Nt.tokenAvatar},Wo.default.createElement(sy.FontAwesomeIcon,{icon:iy.faDiamond}))};H();var my=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(my));var $r={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},fy=({label:c="Amount",amount:i,txType:l,tokenDecimals:d,tokenId:u,rewaLabel:_,rewaPriceInUsd:m,nft:n,tokenAvatar:E})=>{let g=(n==null?void 0:n.decimals)||0,x=l==="DCDT",w=l==="MetaDCDT",k=l==="NonFungibleDCDT",I=w?(0,Tc.parseAmount)(i,n==null?void 0:n.decimals):i,f=Boolean(n&&i),b=u.split("-")[0],y=x?d:Sc.DECIMALS,v=f?st.default.createElement(Ac.FormatAmount,{rewaLabel:_,value:I,decimals:g,digits:l==="MetaDCDT"?Sc.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):st.default.createElement(Ac.FormatAmount,{rewaLabel:_,value:(0,Tc.parseAmount)(i,y),showLabel:!1,decimals:y,showLastNonZeroDecimal:!0,token:x?b:_,"data-testid":"confirmAmount"});return k?null:st.default.createElement("div",{className:$r.amount},st.default.createElement("span",{className:dt.label},c),st.default.createElement("div",{className:$r.token},st.default.createElement(Wc,{type:l,avatar:E}),st.default.createElement("div",{className:$r.value},v," ",b)),!x&&st.default.createElement(ay.UsdValue,{amount:i,usd:m,"data-testid":"confirmUsdValue",className:$r.price}))};H();H();var Oe=qe(p("react")),_y=p("@terradharitri/sdk-dapp/utils/decoders/decodePart");H();var hy=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(hy));var Yr={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},gy=(c,i)=>[...c.matchAll(new RegExp(i,"gi"))].map(l=>l.index),vy=({label:c="Data",scCallLabel:i="SC Call",data:l,highlight:d,isScCall:u})=>{let _=Oe.default.createElement(Oe.default.Fragment,null,l),[m,...n]=d&&u?d.split("@"):[];if(l&&d&&gy(l,d).length===1)switch(!0){case l.startsWith(d):{let[,E]=l.split(d);_=Oe.default.createElement(Oe.default.Fragment,null,d,Oe.default.createElement("span",null,E));break}case l.endsWith(d):{let[E]=l.split(d);_=Oe.default.createElement(Oe.default.Fragment,null,Oe.default.createElement("span",null,E),d);break}default:{let[E,g]=l.split(d);_=Oe.default.createElement(Oe.default.Fragment,null,Oe.default.createElement("span",null,E),d,Oe.default.createElement("span",null,g));break}}return Oe.default.createElement(Oe.default.Fragment,null,m&&Oe.default.createElement("div",{className:Yr.data},Oe.default.createElement("span",{className:dt.label},i),Oe.default.createElement("div",{"data-testid":"confirmScCall",className:Yr.value},[(0,_y.decodePart)(m),...n].join("@"))),Oe.default.createElement("div",{className:Yr.data},Oe.default.createElement("span",{className:dt.label},c),Oe.default.createElement("div",{"data-testid":"confirmData",className:Yr.value},l?_:"N/A")))};H();H();var Bt=qe(p("react")),by=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");H();H();var Hr="0";H();H();var wa=p("@terradharitri/sdk-dapp/constants/index");function yy({feeLimit:c,rewaPriceInUsd:i}){let l=(0,zc.formatAmount)({input:c,decimals:wa.DECIMALS,digits:wa.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,cy.getUsdValue)({amount:l,usd:i,decimals:wa.DIGITS})}`}H();var j5=p("@terradharitri/sdk-dapp/constants/index");H();var z5=p("@terradharitri/sdk-dapp/constants/index"),W5=qe(p("bignumber.js"));H();var V5=p("@terradharitri/sdk-dapp/constants/index");H();var G5=p("@terradharitri/sdk-dapp/constants/index");H();H();var $5=p("@terradharitri/sdk-core"),Y5=p("@terradharitri/sdk-dapp/constants/index"),Z5=qe(p("bignumber.js"));H();H();var H5=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");H();var X5=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");H();var K5=qe(p("bignumber.js"));H();var J5=p("@terradharitri/sdk-dapp/constants/index"),Q5=p("@terradharitri/sdk-dapp/utils/smartContracts"),ek=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),ok=qe(p("bignumber.js"));H();var tk=qe(p("bignumber.js"));H();H();var rk=qe(p("axios"));H();H();H();var nk=p("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");H();var ak=p("@terradharitri/sdk-dapp/constants/index");H();H();H();var Ea=p("@terradharitri/sdk-dapp/constants/index"),wy=qe(p("bignumber.js")),qc,Cc,Nc,Ey=(0,zc.formatAmount)({input:String((qc=Ea.GAS_PRICE)!=null?qc:1e9),decimals:(Cc=Ea.DECIMALS)!=null?Cc:18,showLastNonZeroDecimal:!0,digits:(Nc=Ea.DIGITS)!=null?Nc:4}),lk=new wy.default(Ey).times(10).toString(10);H();var pk=p("@terradharitri/sdk-dapp/constants/index"),ck=qe(p("bignumber.js"));H();var ik=qe(p("bignumber.js"));H();var ky=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ky));var Zr={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},xy=({rewaPriceInUsd:c,label:i="Fee",feeLimit:l,rewaLabel:d})=>Bt.default.createElement("div",{className:Zr.fee},Bt.default.createElement("span",{className:dt.label},i),Bt.default.createElement("div",{className:Zr.token},Bt.default.createElement(Wc,{type:"REWA"}),Bt.default.createElement("div",{className:Zr.value},Bt.default.createElement(by.FormatAmount,{rewaLabel:d,value:l,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),l!==Hr&&Bt.default.createElement("span",{className:Zr.price},yy({feeLimit:l,rewaPriceInUsd:c})));H();H();var mo=qe(p("react")),Sy=p("@fortawesome/free-solid-svg-icons"),Ay=p("@fortawesome/react-fontawesome"),Ty=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),Iy=p("@terradharitri/sdk-dapp/UI/CopyButton"),qy=p("@terradharitri/sdk-dapp/UI/ExplorerLink"),Cy=p("@terradharitri/sdk-dapp/UI/Trim"),Ny=qe(p("classnames"));H();var{default:By}=(ry(),Kr(Mc));H();var Ly=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ly));var Io={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},Uy=({label:c="Receiver",receiver:i,scamReport:l,receiverUsername:d})=>{let u=Boolean(d),_=d!=null?d:i;return mo.default.createElement("div",{className:Io.confirmReceiver},mo.default.createElement("span",{className:dt.label},c),mo.default.createElement("span",{className:(0,Ny.default)(Io.value,{[Io.shrunk]:u}),"data-testid":"confirmReceiver"},u&&mo.default.createElement(By,{className:Io.icon}),_,u&&mo.default.createElement(qy.ExplorerLink,{page:`/${Ty.ACCOUNTS_ENDPOINT}/${i}`,className:Io.explorer})),u&&mo.default.createElement("span",{className:Io.subValue},mo.default.createElement(Cy.Trim,{text:i,className:Io.subValueTrim}),mo.default.createElement(Iy.CopyButton,{text:i,className:Io.subValueCopy})),l&&mo.default.createElement("div",{className:Io.scam},mo.default.createElement("span",null,mo.default.createElement(Ay.FontAwesomeIcon,{icon:Sy.faExclamationTriangle,className:Io.icon}),mo.default.createElement("small",{"data-testid":"confirmScamReport"},l))))};H();H();var Lt=qe(p("react"));H();H();var He=qe(p("react")),Oy=p("@fortawesome/free-solid-svg-icons"),Ry=p("@fortawesome/react-fontawesome"),Dy=qe(p("@terradharitri/sdk-dapp/constants/index")),Py=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),My=qe(p("classnames"));H();var Fy=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fy));var Yt={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},jy=(Pc(),Kr(Sa)).default,Bc=({RewaIcon:c,inDropdown:i=!1,isRewa:l,nftTokenDetails:d,nftType:u,token:_})=>{var m,n;let{name:E,identifier:g,balance:x,decimals:w}=_,k=((m=_.assets)==null?void 0:m.svgUrl)||((n=_.assets)==null?void 0:n.pngUrl)||"",I=k?28:20,[f,b]=(0,He.useState)(E);(0,He.useEffect)(()=>{var S;(S=d==null?void 0:d.uris)!=null&&S.some(O=>{let D=Rc.Buffer.from(String(O),"base64").toString(),{found:U}=py(D,d==null?void 0:d.scamInfo);return U})||b(E)},[E]);let y=He.default.createElement(Ry.FontAwesomeIcon,{icon:Oy.faDiamond});u==Gr.NftEnumType.NonFungibleDCDT&&(y=He.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-nft`},"NFT")),u===Gr.NftEnumType.SemiFungibleDCDT&&(y=He.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-sft`},"SFT"));let v=!i&&u!==Gr.NftEnumType.NonFungibleDCDT,A=He.default.createElement("div",{className:Yt.tokenElementCircle},y);return k&&(A=He.default.createElement("img",{className:Yt.tokenElementCircle,src:k,alt:E,height:I})),l&&(A=He.default.createElement("div",{className:Yt.tokenElementCircle},c?He.default.createElement(c,{height:36}):He.default.createElement(jy,{height:36}))),He.default.createElement("div",{className:(0,My.default)(dt.value,Yt.tokenElement)},He.default.createElement("div",{className:Yt.tokenElementWrapper},A),He.default.createElement("div",{"data-testid":"tokenName"},He.default.createElement("span",{"data-testid":`${g}-element`},He.default.createElement("span",null,f)," ",He.default.createElement("span",{className:Yt.tokenElementIdentifier},g)),v&&He.default.createElement(Py.FormatAmount,{rewaLabel:g,value:x||Hr,digits:u===Gr.NftEnumType.SemiFungibleDCDT?0:Dy.DIGITS,token:g,showLabel:!1,decimals:w,"data-testid":`${g}-balance`})))};H();var zy=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zy));var Wy={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},Vy=({RewaIcon:c,rewaLabel:i,isDcdtTransaction:l,nft:d,tokenAvatar:u,tokenId:_,tokenIdError:m})=>{var n;let E=(d==null?void 0:d.name)||"";return Lt.default.createElement("div",{className:Wy.token},Lt.default.createElement("span",{className:dt.label},d?Lt.default.createElement("span",null,d==null?void 0:d.name," "):"","Token"),Lt.default.createElement("div",null,d?Lt.default.createElement(Bc,{inDropdown:!0,token:{name:d==null?void 0:d.name,identifier:d==null?void 0:d.identifier,decimals:0,balance:Hr,ticker:"",assets:{svgUrl:((n=d==null?void 0:d.assets)==null?void 0:n.svgUrl)||""}}}):Lt.default.createElement(Bc,{inDropdown:!0,token:{name:l?E:"DharitrI eGold",identifier:l?_:i,decimals:0,balance:Hr,ticker:"",assets:{svgUrl:u||""}},isRewa:_===i,RewaIcon:c})),m&&Lt.default.createElement("div",{className:dt.error},m))},Ut=class extends ny.Component{render(){return null}};Ut.Receiver=Uy,Ut.Amount=fy,Ut.Fee=xy,Ut.Data=vy,Ut.Token=Vy;var Gy=Ut;});var yi=No((D3,bi)=>{"use strict";Ce();var $y=Object.create,dr=Object.defineProperty,Yy=Object.getOwnPropertyDescriptor,Zy=Object.getOwnPropertyNames,nn=Object.getOwnPropertySymbols,Hy=Object.getPrototypeOf,La=Object.prototype.hasOwnProperty,li=Object.prototype.propertyIsEnumerable,$c=(c,i,l)=>i in c?dr(c,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[i]=l,ln=(c,i)=>{for(var l in i||(i={}))La.call(i,l)&&$c(c,l,i[l]);if(nn)for(var l of nn(i))li.call(i,l)&&$c(c,l,i[l]);return c},Xy=(c,i)=>{var l={};for(var d in c)La.call(c,d)&&i.indexOf(d)<0&&(l[d]=c[d]);if(c!=null&&nn)for(var d of nn(c))i.indexOf(d)<0&&li.call(c,d)&&(l[d]=c[d]);return l},Ua=(c,i)=>()=>(c&&(i=c(c=0)),i),pn=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports),Oa=(c,i)=>{for(var l in i)dr(c,l,{get:i[l],enumerable:!0})},pi=(c,i,l,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of Zy(i))!La.call(c,u)&&u!==l&&dr(c,u,{get:()=>i[u],enumerable:!(d=Yy(i,u))||d.enumerable});return c},K=(c,i,l)=>(l=c!=null?$y(Hy(c)):{},pi(i||!c||!c.__esModule?dr(l,"default",{value:c,enumerable:!0}):l,c)),cn=c=>pi(dr({},"__esModule",{value:!0}),c),Ky=pn(c=>{"use strict";R(),c.byteLength=E,c.toByteArray=x,c.fromByteArray=I;var i=[],l=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,m=u.length;_<m;++_)i[_]=u[_],l[u.charCodeAt(_)]=_;var _,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(f){var b=f.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=f.indexOf("=");y===-1&&(y=b);var v=y===b?0:4-y%4;return[y,v]}function E(f){var b=n(f),y=b[0],v=b[1];return(y+v)*3/4-v}function g(f,b,y){return(b+y)*3/4-y}function x(f){var b,y=n(f),v=y[0],A=y[1],S=new d(g(f,v,A)),O=0,D=A>0?v-4:v,U;for(U=0;U<D;U+=4)b=l[f.charCodeAt(U)]<<18|l[f.charCodeAt(U+1)]<<12|l[f.charCodeAt(U+2)]<<6|l[f.charCodeAt(U+3)],S[O++]=b>>16&255,S[O++]=b>>8&255,S[O++]=b&255;return A===2&&(b=l[f.charCodeAt(U)]<<2|l[f.charCodeAt(U+1)]>>4,S[O++]=b&255),A===1&&(b=l[f.charCodeAt(U)]<<10|l[f.charCodeAt(U+1)]<<4|l[f.charCodeAt(U+2)]>>2,S[O++]=b>>8&255,S[O++]=b&255),S}function w(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function k(f,b,y){for(var v,A=[],S=b;S<y;S+=3)v=(f[S]<<16&16711680)+(f[S+1]<<8&65280)+(f[S+2]&255),A.push(w(v));return A.join("")}function I(f){for(var b,y=f.length,v=y%3,A=[],S=16383,O=0,D=y-v;O<D;O+=S)A.push(k(f,O,O+S>D?D:O+S));return v===1?(b=f[y-1],A.push(i[b>>2]+i[b<<4&63]+"==")):v===2&&(b=(f[y-2]<<8)+f[y-1],A.push(i[b>>10]+i[b>>4&63]+i[b<<2&63]+"=")),A.join("")}}),Jy=pn(c=>{R(),c.read=function(i,l,d,u,_){var m,n,E=_*8-u-1,g=(1<<E)-1,x=g>>1,w=-7,k=d?_-1:0,I=d?-1:1,f=i[l+k];for(k+=I,m=f&(1<<-w)-1,f>>=-w,w+=E;w>0;m=m*256+i[l+k],k+=I,w-=8);for(n=m&(1<<-w)-1,m>>=-w,w+=u;w>0;n=n*256+i[l+k],k+=I,w-=8);if(m===0)m=1-x;else{if(m===g)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,u),m=m-x}return(f?-1:1)*n*Math.pow(2,m-u)},c.write=function(i,l,d,u,_,m){var n,E,g,x=m*8-_-1,w=(1<<x)-1,k=w>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=u?0:m-1,b=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(E=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-n))<1&&(n--,g*=2),n+k>=1?l+=I/g:l+=I*Math.pow(2,1-k),l*g>=2&&(n++,g/=2),n+k>=w?(E=0,n=w):n+k>=1?(E=(l*g-1)*Math.pow(2,_),n=n+k):(E=l*Math.pow(2,k-1)*Math.pow(2,_),n=0));_>=8;i[d+f]=E&255,f+=b,E/=256,_-=8);for(n=n<<_|E,x+=_;x>0;i[d+f]=n&255,f+=b,n/=256,x-=8);i[d+f-b]|=y*128}}),Qy=pn(c=>{"use strict";R();var i=Ky(),l=Jy(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=n,c.SlowBuffer=A,c.INSPECT_MAX_BYTES=50;var u=2147483647;c.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return k(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return b(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var a=y(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function g(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function x(e,o,t){return g(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}n.alloc=function(e,o,t){return x(e,o,t)};function w(e){return g(e),m(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function k(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=S(e,o)|0,r=m(t),a=r.write(e,o);return a!==t&&(r=r.slice(0,a)),r}function I(e){for(var o=e.length<0?0:v(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if($(e,Uint8Array)){var o=new Uint8Array(e);return b(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function b(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?m(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function v(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),$(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,a=0,s=Math.min(t,r);a<s;++a)if(e[a]!==o[a]){t=e[a],r=o[a];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),a=0;for(t=0;t<e.length;++t){var s=e[t];if($(s,Uint8Array))a+s.length>r.length?n.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else if(n.isBuffer(s))s.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return r};function S(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ae(e).length;default:if(a)return r?-1:ye(e).length;o=(""+o).toLowerCase(),a=!0}}n.byteLength=S;function O(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,o,t);case"utf8":case"utf-8":return Y(this,o,t);case"ascii":return ie(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return Z(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function D(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)D(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)D(this,o,o+3),D(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)D(this,o,o+7),D(this,o+1,o+6),D(this,o+2,o+5),D(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,a){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||t>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=t)return 0;if(r>=a)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var s=a-r,h=t-o,C=Math.min(s,h),P=this.slice(r,a),N=e.slice(o,t),L=0;L<C;++L)if(P[L]!==N[L]){s=P[L],h=N[L];break}return s<h?-1:h<s?1:0};function U(e,o,t,r,a){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,we(t)&&(t=a?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(a)return-1;t=e.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:J(e,o,t,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):J(e,[o],t,r,a);throw new TypeError("val must be string, number or Buffer")}function J(e,o,t,r,a){var s=1,h=e.length,C=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,h/=2,C/=2,t/=2}function P(Te,Ie){return s===1?Te[Ie]:Te.readUInt16BE(Ie*s)}var N;if(a){var L=-1;for(N=t;N<h;N++)if(P(e,N)===P(o,L===-1?0:N-L)){if(L===-1&&(L=N),N-L+1===C)return L*s}else L!==-1&&(N-=N-L),L=-1}else for(t+C>h&&(t=h-C),N=t;N>=0;N--){for(var j=!0,de=0;de<C;de++)if(P(e,N+de)!==P(o,de)){j=!1;break}if(j)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return U(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return U(this,e,o,t,!1)};function ee(e,o,t,r){t=Number(t)||0;var a=e.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var h=0;h<r;++h){var C=parseInt(o.substr(h*2,2),16);if(we(C))return h;e[t+h]=C}return h}function oe(e,o,t,r){return se(ye(o,e.length-t),e,t,r)}function Q(e,o,t,r){return se(ze(o),e,t,r)}function pe(e,o,t,r){return se(Ae(o),e,t,r)}function ne(e,o,t,r){return se(We(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ee(this,e,o,t);case"utf8":case"utf-8":return oe(this,e,o,t);case"ascii":case"latin1":case"binary":return Q(this,e,o,t);case"base64":return pe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,o,t);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Z(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function Y(e,o,t){t=Math.min(e.length,t);for(var r=[],a=o;a<t;){var s=e[a],h=null,C=s>239?4:s>223?3:s>191?2:1;if(a+C<=t){var P,N,L,j;switch(C){case 1:s<128&&(h=s);break;case 2:P=e[a+1],(P&192)===128&&(j=(s&31)<<6|P&63,j>127&&(h=j));break;case 3:P=e[a+1],N=e[a+2],(P&192)===128&&(N&192)===128&&(j=(s&15)<<12|(P&63)<<6|N&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:P=e[a+1],N=e[a+2],L=e[a+3],(P&192)===128&&(N&192)===128&&(L&192)===128&&(j=(s&15)<<18|(P&63)<<12|(N&63)<<6|L&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,C=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|h&1023),r.push(h),a+=C}return ce(r)}var X=4096;function ce(e){var o=e.length;if(o<=X)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=X));return t}function ie(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]);return r}function he(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var a="",s=o;s<t;++s)a+=Ve[e[s]];return a}function me(e,o,t){for(var r=e.slice(o,t),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=o,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!1,52,8)};function M(e,o,t,r,a,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=1,h=0;for(this[o]=e&255;++h<t&&(s*=256);)this[o+h]=e/s&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=t-1,h=1;for(this[o+s]=e&255;--s>=0&&(h*=256);)this[o+s]=e/h&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=0,h=1,C=0;for(this[o]=e&255;++s<t&&(h*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=t-1,h=1,C=0;for(this[o+s]=e&255;--s>=0&&(h*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ve(e,o,t,r,a,s){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xe(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return xe(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return xe(this,e,o,!1,t)};function re(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var a=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),a},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<t;++s)this[s]=e;else{var h=n.isBuffer(e)?e:n.from(e,r),C=h.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<t-o;++s)this[s+o]=h[s%C]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,o){o=o||1/0;for(var t,r=e.length,a=null,s=[],h=0;h<r;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!a){if(t>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(h+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=t;continue}if(t<56320){(o-=3)>-1&&s.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,t<128){if((o-=1)<0)break;s.push(t)}else if(t<2048){if((o-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function We(e,o){for(var t,r,a,s=[],h=0;h<e.length&&!((o-=2)<0);++h)t=e.charCodeAt(h),r=t>>8,a=t%256,s.push(a),s.push(r);return s}function Ae(e){return i.toByteArray(je(e))}function se(e,o,t,r){for(var a=0;a<r&&!(a+t>=o.length||a>=e.length);++a)o[a+t]=e[a];return a}function $(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function we(e){return e!==e}var Ve=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)o[r+a]=e[t]+e[a];return o}()}),e0=pn((c,i)=>{R();var l=i.exports={},d,u;function _(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(v){d=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=m}catch(v){u=m}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(A){try{return d.call(null,v,0)}catch(S){return d.call(this,v,0)}}}function E(v){if(u===clearTimeout)return clearTimeout(v);if((u===m||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(v);try{return u(v)}catch(A){try{return u.call(null,v)}catch(S){return u.call(this,v)}}}var g=[],x=!1,w,k=-1;function I(){!x||!w||(x=!1,w.length?g=w.concat(g):k=-1,g.length&&f())}function f(){if(!x){var v=n(I);x=!0;for(var A=g.length;A;){for(w=g,g=[];++k<A;)w&&w[k].run();k=-1,A=g.length}w=null,x=!1,E(v)}}l.nextTick=function(v){var A=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)A[S-1]=arguments[S];g.push(new b(v,A)),g.length===1&&!x&&n(f)};function b(v,A){this.fun=v,this.array=A}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),ci,o0,t0,R=Ua(()=>{ci=K(Qy()),o0=K(e0()),t0=function(c){function i(){var d=this||self;return delete c.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Ra={};Oa(Ra,{default:()=>ii});var Jr,Yc,ii,si=Ua(()=>{"use strict";R(),Jr=K(p("react")),Yc=c=>Jr.createElement("svg",ln({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},c),Jr.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Jr.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),ii=Yc}),di={};Oa(di,{default:()=>ui});var Qr,Zc,ui,r0=Ua(()=>{"use strict";R(),Qr=K(p("react")),Zc=c=>Qr.createElement("svg",ln({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},c),Qr.createElement("g",null,Qr.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),ui=Zc}),mi={};Oa(mi,{ConfirmScreen:()=>_1});bi.exports=cn(mi);R();R();var Aa=K(p("react")),n0=K(p("classnames"));R();R();var fi=K(p("react"));R();var a0=K(p("react")),uk=(0,a0.createContext)({});R();R();var l0=K(p("react")),mk=p("@terradharitri/sdk-dapp/constants/index"),fk=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),_k=K(p("bignumber.js")),hk=p("formik");R();R();R();var gk=p("bech32");R();R();R();R();R();var en=p("@terradharitri/sdk-dapp/types/tokens.types");R();R();var vk=p("@terradharitri/sdk-dapp/constants"),bk=p("@terradharitri/sdk-dapp/utils/account/getAccount");R();R();var Hc=p("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),p0=({nft:c,skipDescription:i})=>{var l,d;let{name:u,metadata:_,media:m,isNsfw:n,scamInfo:E,verified:g}=c,x="Scam - ",{isSuspicious:w,message:k}=(0,Hc.getScamFlag)({verified:g,message:u,isNsfw:n,scamInfo:E,messagePrefix:x});if(!(_!=null&&_.description)||i){let v=w?"placeholder":(l=m==null?void 0:m[0])==null?void 0:l.thumbnailUrl;return{isSuspicious:w,name:u||k,thumbnail:v,description:""}}let{message:I,isSuspicious:f}=(0,Hc.getScamFlag)({message:_.description,messagePrefix:x,verified:g}),b=w||f,y=b?"placeholder":(d=m==null?void 0:m[0])==null?void 0:d.thumbnailUrl;return{isSuspicious:b,name:u||k,thumbnail:y,description:I||_.description}};R();var yk=p("@terradharitri/sdk-dapp/utils/buildUrlParams");R();var Ta=K(p("anchorme")),Ia=c=>c.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),c0=(c,i)=>{if(i){let l=`[Message hidden due to suspicious content - ${i.info}]`;if(c.length>1e3)return{output:l,stringWithLinks:c,found:!0};let d=Ia(c.normalize("NFKC")),u=Ta.default.list(d),_=[];if(u.length>0){let m=l;u.forEach((n,E)=>{let{string:g}=n,x="",w="",k=g;for(let I=0;I<m.length;I++){let f=m.slice(I),[b]=Ta.default.list(Ia(f));b&&g===b.string&&(x=m.substring(0,I))}for(let I=l.length;I>0;I--){let f=m.slice(0,I),[b]=Ta.default.list(Ia(f));b&&g===b.string&&(w=m.substring(I))}_.push(x),_.push(k),m=w,E===u.length-1&&_.push(w)})}else _.push(c);return{output:l,stringWithLinks:_.join(""),found:!0}}else return{output:c,stringWithLinks:"",found:!1}};R();R();var wk=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),_i=p("@terradharitri/sdk-dapp/utils/operations/formatAmount"),i0=p("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Xc=p("@terradharitri/sdk-dapp/utils/operations/parseAmount");R();R();R();R();R();R();R();var hi=K(p("react")),Ek=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),kk=p("formik");R();R();var xk=p("@terradharitri/sdk-dapp/constants/index"),Sk=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ak=K(p("bignumber.js"));R();R();var qa=p("@terradharitri/sdk-dapp/constants/index");function s0({feeLimit:c,rewaPriceInUsd:i}){let l=(0,_i.formatAmount)({input:c,decimals:qa.DECIMALS,digits:qa.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,i0.getUsdValue)({amount:l,usd:i,decimals:qa.DIGITS})}`}R();var Tk=p("@terradharitri/sdk-dapp/constants/index");R();R();var an="0";R();var Ik=p("@terradharitri/sdk-dapp/constants/index"),qk=K(p("bignumber.js"));R();var Ck=p("@terradharitri/sdk-dapp/constants/index");R();var Nk=p("@terradharitri/sdk-dapp/constants/index");R();R();var Bk=p("@terradharitri/sdk-core"),Lk=p("@terradharitri/sdk-dapp/constants/index"),Uk=K(p("bignumber.js"));R();R();var Ok=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");R();var Rk=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");R();var Dk=K(p("bignumber.js"));R();var Pk=p("@terradharitri/sdk-dapp/constants/index"),Mk=p("@terradharitri/sdk-dapp/utils/smartContracts"),Fk=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),jk=K(p("bignumber.js"));R();var zk=K(p("bignumber.js"));R();R();var Wk=K(p("axios"));R();R();R();var Vk=p("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");R();var Gk=p("@terradharitri/sdk-dapp/constants/index");R();R();R();var Ca=p("@terradharitri/sdk-dapp/constants/index"),d0=K(p("bignumber.js")),Kc,Jc,Qc,u0=(0,_i.formatAmount)({input:String((Kc=Ca.GAS_PRICE)!=null?Kc:1e9),decimals:(Jc=Ca.DECIMALS)!=null?Jc:18,showLastNonZeroDecimal:!0,digits:(Qc=Ca.DIGITS)!=null?Qc:4}),$k=new d0.default(u0).times(10).toString(10);R();var Yk=p("@terradharitri/sdk-dapp/constants/index"),Zk=K(p("bignumber.js"));R();var Hk=K(p("bignumber.js"));R();R();var Xk=p("yup");R();var ei=p("@terradharitri/sdk-dapp/constants/ledger.constants"),m0=K(p("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Da=p("yup"),f0=(0,Da.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(c){let{ledger:i}=this.parent;return!(i&&c&&c.length&&!i.ledgerDataActive)}),_0=(0,Da.string)().test({name:"hashSign",test:function(c){let{ledger:i,isGuarded:l}=this.parent;if(i){let{ledgerWithHashSign:d,ledgerWithGuardians:u}=(0,m0.default)(i.version);if(c&&c.length>300&&!d)return this.createError({message:`Data too long. You need at least DharitrI app version ${ei.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!u)return this.createError({message:`You need at least DharitrI app version ${ei.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),h0=[f0,_0],Kk=h0.reduce((c,i)=>c.concat(i),(0,Da.string)());R();var Jk=p("@terradharitri/sdk-dapp/constants/index"),Qk=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ex=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ox=p("yup");R();var tx=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),rx=K(p("bignumber.js")),nx=p("yup");R();var ax=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),lx=K(p("bignumber.js")),px=p("yup");R();var cx=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ix=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),sx=K(p("bignumber.js")),dx=p("yup");R();var ux=K(p("bignumber.js")),mx=p("yup");R();var fx=p("@terradharitri/sdk-dapp/constants/index"),_x=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),hx=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),gx=K(p("bignumber.js")),vx=p("yup");R();var bx=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),yx=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),wx=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ex=K(p("bignumber.js")),kx=p("yup");R();var xx=K(p("bignumber.js")),Sx=p("yup");R();var Ax=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Tx=p("yup");R();var Ix=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),qx=p("yup");R();R();var g0=(0,hi.createContext)({});function v0(){return(0,hi.useContext)(g0)}R();R();var b0=K(p("react")),Cx=p("formik"),Nx=K(p("lodash/uniqBy"));R();R();R();var Bx=K(p("axios"));R();R();var Lx=K(p("axios"));R();R();var Ux=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ox=p("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Rx=K(p("axios")),Dx=K(p("lodash/uniqBy"));R();var Px=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),Mx=K(p("axios"));R();var Fx=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),jx=K(p("axios"));R();R();var y0=K(p("react")),zx=(0,y0.createContext)({});R();R();var Wx=p("react"),Vx=p("@terradharitri/sdk-dapp/constants/index"),Gx=p("@terradharitri/sdk-dapp/types/enums.types");R();var $x=(0,b0.createContext)({});R();R();var Yx=p("@terradharitri/sdk-dapp/constants/index"),Zx=p("formik");R();R();var w0=K(p("react")),Hx=p("@terradharitri/sdk-dapp/constants/index"),Xx=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Kx=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Jx=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Qx=K(p("bignumber.js")),e3=p("formik");R();R();R();R();var o3=K(p("bignumber.js"));R();var t3=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),r3=K(p("bignumber.js"));R();R();var n3=p("react"),a3=p("@terradharitri/sdk-dapp/constants/index"),l3=p("@terradharitri/sdk-dapp/utils/smartContracts"),p3=K(p("bignumber.js")),c3=p("formik");R();var i3=p("react");R();R();var s3=p("@terradharitri/sdk-dapp/constants/index"),d3=K(p("bignumber.js")),u3=(0,w0.createContext)({}),m3=(0,l0.createContext)({});R();R();var E0=K(p("react")),f3=p("formik"),_3=(0,E0.createContext)({});R();R();var k0=K(p("react")),h3=p("formik");R();R();R();var g3=p("react"),v3=p("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),b3=K(p("lodash/uniqBy"));R();R();var y3=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),w3=p("@terradharitri/sdk-dapp/utils");R();var E3=p("react");R();var k3=p("react"),x3=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),S3=(0,k0.createContext)({});R();R();var x0=K(p("react")),A3=p("formik");R();R();R();R();R();var T3=p("react"),I3=p("@terradharitri/sdk-dapp/utils");R();var q3=p("react"),C3=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");R();R();var N3=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),B3=K(p("axios"));R();var L3=K(p("axios")),U3=(0,x0.createContext)({}),S0=(0,fi.createContext)({});function gi(){return(0,fi.useContext)(S0)}R();R();R();var ao=K(p("react")),A0=p("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");R();var T0=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(T0));var ko={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};R();var O3=K(p("react")),R3=p("@terradharitri/sdk-dapp/constants/index");R();var I0=p("react");R();R();var ut=K(p("react")),oi=p("@terradharitri/sdk-dapp/constants/index"),ti=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),q0=p("@terradharitri/sdk-dapp/UI/UsdValue/index");R();R();var Vo=K(p("react")),C0=p("@fortawesome/free-solid-svg-icons"),N0=p("@fortawesome/react-fontawesome"),ri=K(p("classnames"));R();var B0=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(B0));var Ot={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},L0=(si(),cn(Ra)).default,vi=c=>{let{avatar:i,type:l}=c;return l==="NonFungibleDCDT"?Vo.default.createElement("div",{className:(0,ri.default)(Ot.tokenAvatar,Ot.tokenAvatarNFT)},"NFT"):l==="SemiFungibleDCDT"?Vo.default.createElement("div",{className:(0,ri.default)(Ot.tokenAvatar,Ot.tokenAvatarSFT)},"SFT"):l==="REWA"?Vo.default.createElement("div",{className:Ot.tokenAvatar},c.RewaIcon?Vo.default.createElement(c.RewaIcon,null):Vo.default.createElement(L0,null)):i?Vo.default.createElement("div",{className:Ot.tokenAvatar},Vo.default.createElement("img",{src:i})):Vo.default.createElement("div",{className:Ot.tokenAvatar},Vo.default.createElement(N0.FontAwesomeIcon,{icon:C0.faDiamond}))};R();var U0=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(U0));var on={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},O0=({label:c="Amount",amount:i,txType:l,tokenDecimals:d,tokenId:u,rewaLabel:_,rewaPriceInUsd:m,nft:n,tokenAvatar:E})=>{let g=(n==null?void 0:n.decimals)||0,x=l==="DCDT",w=l==="MetaDCDT",k=l==="NonFungibleDCDT",I=w?(0,Xc.parseAmount)(i,n==null?void 0:n.decimals):i,f=Boolean(n&&i),b=u.split("-")[0],y=x?d:oi.DECIMALS,v=f?ut.default.createElement(ti.FormatAmount,{rewaLabel:_,value:I,decimals:g,digits:l==="MetaDCDT"?oi.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):ut.default.createElement(ti.FormatAmount,{rewaLabel:_,value:(0,Xc.parseAmount)(i,y),showLabel:!1,decimals:y,showLastNonZeroDecimal:!0,token:x?b:_,"data-testid":"confirmAmount"});return k?null:ut.default.createElement("div",{className:on.amount},ut.default.createElement("span",{className:ko.label},c),ut.default.createElement("div",{className:on.token},ut.default.createElement(vi,{type:l,avatar:E}),ut.default.createElement("div",{className:on.value},v," ",b)),!x&&ut.default.createElement(q0.UsdValue,{amount:i,usd:m,"data-testid":"confirmUsdValue",className:on.price}))};R();R();var Re=K(p("react")),R0=p("@terradharitri/sdk-dapp/utils/decoders/decodePart");R();var D0=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(D0));var tn={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},P0=(c,i)=>[...c.matchAll(new RegExp(i,"gi"))].map(l=>l.index),M0=({label:c="Data",scCallLabel:i="SC Call",data:l,highlight:d,isScCall:u})=>{let _=Re.default.createElement(Re.default.Fragment,null,l),[m,...n]=d&&u?d.split("@"):[];if(l&&d&&P0(l,d).length===1)switch(!0){case l.startsWith(d):{let[,E]=l.split(d);_=Re.default.createElement(Re.default.Fragment,null,d,Re.default.createElement("span",null,E));break}case l.endsWith(d):{let[E]=l.split(d);_=Re.default.createElement(Re.default.Fragment,null,Re.default.createElement("span",null,E),d);break}default:{let[E,g]=l.split(d);_=Re.default.createElement(Re.default.Fragment,null,Re.default.createElement("span",null,E),d,Re.default.createElement("span",null,g));break}}return Re.default.createElement(Re.default.Fragment,null,m&&Re.default.createElement("div",{className:tn.data},Re.default.createElement("span",{className:ko.label},i),Re.default.createElement("div",{"data-testid":"confirmScCall",className:tn.value},[(0,R0.decodePart)(m),...n].join("@"))),Re.default.createElement("div",{className:tn.data},Re.default.createElement("span",{className:ko.label},c),Re.default.createElement("div",{"data-testid":"confirmData",className:tn.value},l?_:"N/A")))};R();R();var Rt=K(p("react")),F0=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");R();var j0=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(j0));var rn={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},z0=({rewaPriceInUsd:c,label:i="Fee",feeLimit:l,rewaLabel:d})=>Rt.default.createElement("div",{className:rn.fee},Rt.default.createElement("span",{className:ko.label},i),Rt.default.createElement("div",{className:rn.token},Rt.default.createElement(vi,{type:"REWA"}),Rt.default.createElement("div",{className:rn.value},Rt.default.createElement(F0.FormatAmount,{rewaLabel:d,value:l,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),l!==an&&Rt.default.createElement("span",{className:rn.price},s0({feeLimit:l,rewaPriceInUsd:c})));R();R();var fo=K(p("react")),W0=p("@fortawesome/free-solid-svg-icons"),V0=p("@fortawesome/react-fontawesome"),G0=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),$0=p("@terradharitri/sdk-dapp/UI/CopyButton"),Y0=p("@terradharitri/sdk-dapp/UI/ExplorerLink"),Z0=p("@terradharitri/sdk-dapp/UI/Trim"),H0=K(p("classnames"));R();var{default:X0}=(r0(),cn(di));R();var K0=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(K0));var qo={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},J0=({label:c="Receiver",receiver:i,scamReport:l,receiverUsername:d})=>{let u=Boolean(d),_=d!=null?d:i;return fo.default.createElement("div",{className:qo.confirmReceiver},fo.default.createElement("span",{className:ko.label},c),fo.default.createElement("span",{className:(0,H0.default)(qo.value,{[qo.shrunk]:u}),"data-testid":"confirmReceiver"},u&&fo.default.createElement(X0,{className:qo.icon}),_,u&&fo.default.createElement(Y0.ExplorerLink,{page:`/${G0.ACCOUNTS_ENDPOINT}/${i}`,className:qo.explorer})),u&&fo.default.createElement("span",{className:qo.subValue},fo.default.createElement(Z0.Trim,{text:i,className:qo.subValueTrim}),fo.default.createElement($0.CopyButton,{text:i,className:qo.subValueCopy})),l&&fo.default.createElement("div",{className:qo.scam},fo.default.createElement("span",null,fo.default.createElement(V0.FontAwesomeIcon,{icon:W0.faExclamationTriangle,className:qo.icon}),fo.default.createElement("small",{"data-testid":"confirmScamReport"},l))))};R();R();var Dt=K(p("react"));R();R();var Xe=K(p("react")),Q0=p("@fortawesome/free-solid-svg-icons"),e1=p("@fortawesome/react-fontawesome"),o1=K(p("@terradharitri/sdk-dapp/constants/index")),t1=p("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),r1=K(p("classnames"));R();var n1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(n1));var Zt={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},a1=(si(),cn(Ra)).default,ni=({RewaIcon:c,inDropdown:i=!1,isRewa:l,nftTokenDetails:d,nftType:u,token:_})=>{var m,n;let{name:E,identifier:g,balance:x,decimals:w}=_,k=((m=_.assets)==null?void 0:m.svgUrl)||((n=_.assets)==null?void 0:n.pngUrl)||"",I=k?28:20,[f,b]=(0,Xe.useState)(E);(0,Xe.useEffect)(()=>{var S;(S=d==null?void 0:d.uris)!=null&&S.some(O=>{let D=ci.Buffer.from(String(O),"base64").toString(),{found:U}=c0(D,d==null?void 0:d.scamInfo);return U})||b(E)},[E]);let y=Xe.default.createElement(e1.FontAwesomeIcon,{icon:Q0.faDiamond});u==en.NftEnumType.NonFungibleDCDT&&(y=Xe.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-nft`},"NFT")),u===en.NftEnumType.SemiFungibleDCDT&&(y=Xe.default.createElement("div",{className:"nft-type","data-testid":`${g}-type-sft`},"SFT"));let v=!i&&u!==en.NftEnumType.NonFungibleDCDT,A=Xe.default.createElement("div",{className:Zt.tokenElementCircle},y);return k&&(A=Xe.default.createElement("img",{className:Zt.tokenElementCircle,src:k,alt:E,height:I})),l&&(A=Xe.default.createElement("div",{className:Zt.tokenElementCircle},c?Xe.default.createElement(c,{height:36}):Xe.default.createElement(a1,{height:36}))),Xe.default.createElement("div",{className:(0,r1.default)(ko.value,Zt.tokenElement)},Xe.default.createElement("div",{className:Zt.tokenElementWrapper},A),Xe.default.createElement("div",{"data-testid":"tokenName"},Xe.default.createElement("span",{"data-testid":`${g}-element`},Xe.default.createElement("span",null,f)," ",Xe.default.createElement("span",{className:Zt.tokenElementIdentifier},g)),v&&Xe.default.createElement(t1.FormatAmount,{rewaLabel:g,value:x||an,digits:u===en.NftEnumType.SemiFungibleDCDT?0:o1.DIGITS,token:g,showLabel:!1,decimals:w,"data-testid":`${g}-balance`})))};R();var l1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(l1));var p1={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},c1=({RewaIcon:c,rewaLabel:i,isDcdtTransaction:l,nft:d,tokenAvatar:u,tokenId:_,tokenIdError:m})=>{var n;let E=(d==null?void 0:d.name)||"";return Dt.default.createElement("div",{className:p1.token},Dt.default.createElement("span",{className:ko.label},d?Dt.default.createElement("span",null,d==null?void 0:d.name," "):"","Token"),Dt.default.createElement("div",null,d?Dt.default.createElement(ni,{inDropdown:!0,token:{name:d==null?void 0:d.name,identifier:d==null?void 0:d.identifier,decimals:0,balance:an,ticker:"",assets:{svgUrl:((n=d==null?void 0:d.assets)==null?void 0:n.svgUrl)||""}}}):Dt.default.createElement(ni,{inDropdown:!0,token:{name:l?E:"DharitrI eGold",identifier:l?_:i,decimals:0,balance:an,ticker:"",assets:{svgUrl:u||""}},isRewa:_===i,RewaIcon:c})),m&&Dt.default.createElement("div",{className:ko.error},m))},Ht=class extends I0.Component{render(){return null}};Ht.Receiver=J0,Ht.Amount=O0,Ht.Fee=z0,Ht.Data=M0,Ht.Token=c1;var Na=Ht;R();R();var mt=K(p("react")),ai=K(p("classnames"));R();var i1=`.dapp-core-component__styles-module__preview {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(i1));var Eo={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"},s1=c=>{let i=c,{txType:l,onClick:d,identifier:u}=i,_=Xy(i,["txType","onClick","identifier"]),{name:m,thumbnail:n}=p0({nft:_}),E=["NonFungibleDCDT","SemiFungibleDCDT"].includes(l),g=l==="NonFungibleDCDT"?"NFT":"SFT",x=w=>{w.preventDefault(),d&&d(w,Object.assign(_,{identifier:u}))};return E?mt.default.createElement("div",{onClick:x,"data-testid":"token-preview",className:(0,ai.default)(Eo.preview,{[Eo.clickable]:Boolean(d)})},mt.default.createElement("img",{src:n,className:Eo.image}),mt.default.createElement("div",{className:Eo.content},mt.default.createElement("div",{className:Eo.left},mt.default.createElement("div",{"data-testid":"token-preview-name",className:Eo.name},m),mt.default.createElement("div",{"data-testid":"token-preview-identifier",className:Eo.identifier},u)),mt.default.createElement("div",{className:Eo.right},mt.default.createElement("div",{className:(0,ai.default)(Eo.badge,{[Eo.nft]:l==="NonFungibleDCDT",[Eo.sft]:l==="SemiFungibleDCDT"})},g)))):null};R();var d1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(d1));var Pt={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};R();R();var Ba=p("@terradharitri/sdk-dapp/types/enums.types"),u1=({providerType:c,hasGuardianScreen:i})=>i?"Confirm & Continue":c===Ba.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":c===Ba.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":c===Ba.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";R();var m1=({receiverAddress:c,knownAddresses:i,existingReceiverUsername:l})=>{if(l)return l;let d=i==null?void 0:i.find(u=>u.address===c);return d==null?void 0:d.username},f1=({isConfirmCloseBtnVisible:c=!0,providerType:i})=>{var l;let{setIsGuardianScreenVisible:d}=v0(),{receiverUsernameInfo:{receiverUsername:u},receiverInfo:{scamError:_,receiver:m,knownAddresses:n},formInfo:E,gasInfo:{gasCostError:g,feeLimit:x},accountInfo:{isGuarded:w},dataFieldInfo:{data:k},amountInfo:I,tokensInfo:f}=gi(),{tokenId:b,tokenDetails:y,nft:v,rewaPriceInUsd:A,rewaLabel:S}=f,{readonly:O,onCloseForm:D,onInvalidateForm:U,onPreviewClick:J,onSubmitForm:ee,txType:oe,hasGuardianScreen:Q}=E,pe=()=>{d(!0)},[ne,Z]=(0,ao.useState)(!1),Y=oe==="NonFungibleDCDT",X=u1({providerType:i,hasGuardianScreen:Q}),ce=me=>{me.preventDefault(),O?D():U()},ie=()=>{if(w&&Q)return pe();Z(!0),ee()},be=!["REWA","DCDT","MetaDCDT"].includes(oe),he=m1({knownAddresses:n,receiverAddress:m,existingReceiverUsername:u});return ao.default.createElement("div",{className:Pt.summary},ao.default.createElement("div",{className:Pt.fields},be&&v&&ao.default.createElement(s1,ln({onClick:J,txType:oe},v)),ao.default.createElement(A0.ConfirmReceiver,{amount:I.amount,scamReport:_!=null?_:null,receiver:m,receiverUsername:he}),ao.default.createElement("div",{className:Pt.columns},!Y&&ao.default.createElement("div",{className:Pt.column},ao.default.createElement(Na.Amount,{txType:oe,tokenId:b,tokenDecimals:y.decimals,amount:String(I.amount),nft:v,rewaPriceInUsd:A,rewaLabel:S,tokenLabel:y.name,tokenAvatar:((l=y.assets)==null?void 0:l.svgUrl)||""})),ao.default.createElement("div",{className:Pt.column},ao.default.createElement(Na.Fee,{rewaLabel:S,rewaPriceInUsd:A,feeLimit:x}))),ao.default.createElement(Na.Data,{data:k}),g&&ao.default.createElement("p",{className:ko.error},g)),ao.default.createElement("div",{className:Pt.buttons},ao.default.createElement("button",{className:ko.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:ne,onClick:ie},X),c&&ao.default.createElement("button",{className:ko.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:ce},O?"Close":"Back")))},_1=c=>{let{formInfo:{setHasGuardianScreen:i}}=gi();return(0,Aa.useEffect)(()=>{c.hasGuardianScreen&&i(!0)},[]),Aa.default.createElement("div",{className:(0,n0.default)(Pt.confirm,c.className),"data-testid":"confirmScreen"},Aa.default.createElement(f1,ln({},c)))};});var xi=No((M3,ki)=>{"use strict";Ce();var h1=Object.create,dn=Object.defineProperty,g1=Object.getOwnPropertyDescriptor,v1=Object.getOwnPropertyNames,b1=Object.getPrototypeOf,y1=Object.prototype.hasOwnProperty,w1=(c,i)=>()=>(c&&(i=c(c=0)),i),un=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports),E1=(c,i)=>{for(var l in i)dn(c,l,{get:i[l],enumerable:!0})},wi=(c,i,l,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of v1(i))!y1.call(c,u)&&u!==l&&dn(c,u,{get:()=>i[u],enumerable:!(d=g1(i,u))||d.enumerable});return c},sn=(c,i,l)=>(l=c!=null?h1(b1(c)):{},wi(i||!c||!c.__esModule?dn(l,"default",{value:c,enumerable:!0}):l,c)),k1=c=>wi(dn({},"__esModule",{value:!0}),c),x1=un(c=>{"use strict";Co(),c.byteLength=E,c.toByteArray=x,c.fromByteArray=I;var i=[],l=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,m=u.length;_<m;++_)i[_]=u[_],l[u.charCodeAt(_)]=_;var _,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(f){var b=f.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=f.indexOf("=");y===-1&&(y=b);var v=y===b?0:4-y%4;return[y,v]}function E(f){var b=n(f),y=b[0],v=b[1];return(y+v)*3/4-v}function g(f,b,y){return(b+y)*3/4-y}function x(f){var b,y=n(f),v=y[0],A=y[1],S=new d(g(f,v,A)),O=0,D=A>0?v-4:v,U;for(U=0;U<D;U+=4)b=l[f.charCodeAt(U)]<<18|l[f.charCodeAt(U+1)]<<12|l[f.charCodeAt(U+2)]<<6|l[f.charCodeAt(U+3)],S[O++]=b>>16&255,S[O++]=b>>8&255,S[O++]=b&255;return A===2&&(b=l[f.charCodeAt(U)]<<2|l[f.charCodeAt(U+1)]>>4,S[O++]=b&255),A===1&&(b=l[f.charCodeAt(U)]<<10|l[f.charCodeAt(U+1)]<<4|l[f.charCodeAt(U+2)]>>2,S[O++]=b>>8&255,S[O++]=b&255),S}function w(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function k(f,b,y){for(var v,A=[],S=b;S<y;S+=3)v=(f[S]<<16&16711680)+(f[S+1]<<8&65280)+(f[S+2]&255),A.push(w(v));return A.join("")}function I(f){for(var b,y=f.length,v=y%3,A=[],S=16383,O=0,D=y-v;O<D;O+=S)A.push(k(f,O,O+S>D?D:O+S));return v===1?(b=f[y-1],A.push(i[b>>2]+i[b<<4&63]+"==")):v===2&&(b=(f[y-2]<<8)+f[y-1],A.push(i[b>>10]+i[b>>4&63]+i[b<<2&63]+"=")),A.join("")}}),S1=un(c=>{Co(),c.read=function(i,l,d,u,_){var m,n,E=_*8-u-1,g=(1<<E)-1,x=g>>1,w=-7,k=d?_-1:0,I=d?-1:1,f=i[l+k];for(k+=I,m=f&(1<<-w)-1,f>>=-w,w+=E;w>0;m=m*256+i[l+k],k+=I,w-=8);for(n=m&(1<<-w)-1,m>>=-w,w+=u;w>0;n=n*256+i[l+k],k+=I,w-=8);if(m===0)m=1-x;else{if(m===g)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,u),m=m-x}return(f?-1:1)*n*Math.pow(2,m-u)},c.write=function(i,l,d,u,_,m){var n,E,g,x=m*8-_-1,w=(1<<x)-1,k=w>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=u?0:m-1,b=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(E=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-n))<1&&(n--,g*=2),n+k>=1?l+=I/g:l+=I*Math.pow(2,1-k),l*g>=2&&(n++,g/=2),n+k>=w?(E=0,n=w):n+k>=1?(E=(l*g-1)*Math.pow(2,_),n=n+k):(E=l*Math.pow(2,k-1)*Math.pow(2,_),n=0));_>=8;i[d+f]=E&255,f+=b,E/=256,_-=8);for(n=n<<_|E,x+=_;x>0;i[d+f]=n&255,f+=b,n/=256,x-=8);i[d+f-b]|=y*128}}),A1=un(c=>{"use strict";Co();var i=x1(),l=S1(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=n,c.SlowBuffer=A,c.INSPECT_MAX_BYTES=50;var u=2147483647;c.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return k(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return b(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var a=y(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function g(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function x(e,o,t){return g(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}n.alloc=function(e,o,t){return x(e,o,t)};function w(e){return g(e),m(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function k(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=S(e,o)|0,r=m(t),a=r.write(e,o);return a!==t&&(r=r.slice(0,a)),r}function I(e){for(var o=e.length<0?0:v(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if($(e,Uint8Array)){var o=new Uint8Array(e);return b(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function b(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?m(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function v(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),$(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,a=0,s=Math.min(t,r);a<s;++a)if(e[a]!==o[a]){t=e[a],r=o[a];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),a=0;for(t=0;t<e.length;++t){var s=e[t];if($(s,Uint8Array))a+s.length>r.length?n.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else if(n.isBuffer(s))s.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return r};function S(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ae(e).length;default:if(a)return r?-1:ye(e).length;o=(""+o).toLowerCase(),a=!0}}n.byteLength=S;function O(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,o,t);case"utf8":case"utf-8":return Y(this,o,t);case"ascii":return ie(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return Z(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function D(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)D(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)D(this,o,o+3),D(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)D(this,o,o+7),D(this,o+1,o+6),D(this,o+2,o+5),D(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,a){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||t>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=t)return 0;if(r>=a)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var s=a-r,h=t-o,C=Math.min(s,h),P=this.slice(r,a),N=e.slice(o,t),L=0;L<C;++L)if(P[L]!==N[L]){s=P[L],h=N[L];break}return s<h?-1:h<s?1:0};function U(e,o,t,r,a){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,we(t)&&(t=a?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(a)return-1;t=e.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:J(e,o,t,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):J(e,[o],t,r,a);throw new TypeError("val must be string, number or Buffer")}function J(e,o,t,r,a){var s=1,h=e.length,C=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,h/=2,C/=2,t/=2}function P(Te,Ie){return s===1?Te[Ie]:Te.readUInt16BE(Ie*s)}var N;if(a){var L=-1;for(N=t;N<h;N++)if(P(e,N)===P(o,L===-1?0:N-L)){if(L===-1&&(L=N),N-L+1===C)return L*s}else L!==-1&&(N-=N-L),L=-1}else for(t+C>h&&(t=h-C),N=t;N>=0;N--){for(var j=!0,de=0;de<C;de++)if(P(e,N+de)!==P(o,de)){j=!1;break}if(j)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return U(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return U(this,e,o,t,!1)};function ee(e,o,t,r){t=Number(t)||0;var a=e.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var h=0;h<r;++h){var C=parseInt(o.substr(h*2,2),16);if(we(C))return h;e[t+h]=C}return h}function oe(e,o,t,r){return se(ye(o,e.length-t),e,t,r)}function Q(e,o,t,r){return se(ze(o),e,t,r)}function pe(e,o,t,r){return se(Ae(o),e,t,r)}function ne(e,o,t,r){return se(We(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ee(this,e,o,t);case"utf8":case"utf-8":return oe(this,e,o,t);case"ascii":case"latin1":case"binary":return Q(this,e,o,t);case"base64":return pe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,o,t);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Z(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function Y(e,o,t){t=Math.min(e.length,t);for(var r=[],a=o;a<t;){var s=e[a],h=null,C=s>239?4:s>223?3:s>191?2:1;if(a+C<=t){var P,N,L,j;switch(C){case 1:s<128&&(h=s);break;case 2:P=e[a+1],(P&192)===128&&(j=(s&31)<<6|P&63,j>127&&(h=j));break;case 3:P=e[a+1],N=e[a+2],(P&192)===128&&(N&192)===128&&(j=(s&15)<<12|(P&63)<<6|N&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:P=e[a+1],N=e[a+2],L=e[a+3],(P&192)===128&&(N&192)===128&&(L&192)===128&&(j=(s&15)<<18|(P&63)<<12|(N&63)<<6|L&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,C=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|h&1023),r.push(h),a+=C}return ce(r)}var X=4096;function ce(e){var o=e.length;if(o<=X)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=X));return t}function ie(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]);return r}function he(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var a="",s=o;s<t;++s)a+=Ve[e[s]];return a}function me(e,o,t){for(var r=e.slice(o,t),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=o,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!1,52,8)};function M(e,o,t,r,a,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=1,h=0;for(this[o]=e&255;++h<t&&(s*=256);)this[o+h]=e/s&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=t-1,h=1;for(this[o+s]=e&255;--s>=0&&(h*=256);)this[o+s]=e/h&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=0,h=1,C=0;for(this[o]=e&255;++s<t&&(h*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=t-1,h=1,C=0;for(this[o+s]=e&255;--s>=0&&(h*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ve(e,o,t,r,a,s){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xe(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return xe(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return xe(this,e,o,!1,t)};function re(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var a=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),a},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<t;++s)this[s]=e;else{var h=n.isBuffer(e)?e:n.from(e,r),C=h.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<t-o;++s)this[s+o]=h[s%C]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,o){o=o||1/0;for(var t,r=e.length,a=null,s=[],h=0;h<r;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!a){if(t>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(h+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=t;continue}if(t<56320){(o-=3)>-1&&s.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,t<128){if((o-=1)<0)break;s.push(t)}else if(t<2048){if((o-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function We(e,o){for(var t,r,a,s=[],h=0;h<e.length&&!((o-=2)<0);++h)t=e.charCodeAt(h),r=t>>8,a=t%256,s.push(a),s.push(r);return s}function Ae(e){return i.toByteArray(je(e))}function se(e,o,t,r){for(var a=0;a<r&&!(a+t>=o.length||a>=e.length);++a)o[a+t]=e[a];return a}function $(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function we(e){return e!==e}var Ve=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)o[r+a]=e[t]+e[a];return o}()}),T1=un((c,i)=>{Co();var l=i.exports={},d,u;function _(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(v){d=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=m}catch(v){u=m}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(A){try{return d.call(null,v,0)}catch(S){return d.call(this,v,0)}}}function E(v){if(u===clearTimeout)return clearTimeout(v);if((u===m||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(v);try{return u(v)}catch(A){try{return u.call(null,v)}catch(S){return u.call(this,v)}}}var g=[],x=!1,w,k=-1;function I(){!x||!w||(x=!1,w.length?g=w.concat(g):k=-1,g.length&&f())}function f(){if(!x){var v=n(I);x=!0;for(var A=g.length;A;){for(w=g,g=[];++k<A;)w&&w[k].run();k=-1,A=g.length}w=null,x=!1,E(v)}}l.nextTick=function(v){var A=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)A[S-1]=arguments[S];g.push(new b(v,A)),g.length===1&&!x&&n(f)};function b(v,A){this.fun=v,this.array=A}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),I1,q1,C1,Co=w1(()=>{I1=sn(A1()),q1=sn(T1()),C1=function(c){function i(){var d=this||self;return delete c.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Ei={};E1(Ei,{NFTCanTransferWarning:()=>j1});ki.exports=k1(Ei);Co();Co();var xo=sn(p("react")),N1=p("@fortawesome/free-solid-svg-icons"),B1=p("@fortawesome/react-fontawesome"),L1=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),U1=p("@terradharitri/sdk-dapp/UI/CopyButton"),O1=p("@terradharitri/sdk-dapp/UI/ExplorerLink"),R1=p("@terradharitri/sdk-dapp/UI/Trim"),D1=sn(p("classnames")),P1=p("formik");Co();Co();var M1="Token can only be transfered to one of the following addresses:";Co();Co();var F1=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(F1));var So={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"},j1=c=>{let{className:i}=c,{values:{nft:l,address:d}}=(0,P1.useFormikContext)();return!(l!=null&&l.allowedReceivers)||l.allowedReceivers.includes(d)?null:xo.default.createElement("div",{className:(0,D1.default)(So.canTransferWarning,i),"data-testid":"canTransferWarning"},xo.default.createElement("div",{className:So.canTransferWarningHeading},xo.default.createElement(B1.FontAwesomeIcon,{icon:N1.faExclamationTriangle,className:So.canTransferWarningIcon,size:"lg"}),xo.default.createElement("div",{className:So.canTransferWarningTitle},xo.default.createElement("div",{className:So.canTransferWarningLabel},"Warning!"),xo.default.createElement("div",{className:So.canTransferWarningMessage},M1))),xo.default.createElement("div",{className:So.canTransferWarningAddresses},l.allowedReceivers.map(u=>xo.default.createElement("div",{className:So.canTransferWarningAddress,key:u},xo.default.createElement(R1.Trim,{text:u,className:So.canTransferWarningAddressTrim}),xo.default.createElement(U1.CopyButton,{text:u,className:So.canTransferWarningAddressCopy}),xo.default.createElement(O1.ExplorerLink,{page:`/${L1.ACCOUNTS_ENDPOINT}/${u}`,className:So.canTransferWarningAddressExplorer})))))};});var Li=No((v9,Bi)=>{"use strict";Ce();var z1=Object.create,mn=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,V1=Object.getOwnPropertyNames,G1=Object.getPrototypeOf,$1=Object.prototype.hasOwnProperty,Y1=(c,i)=>()=>(c&&(i=c(c=0)),i),fn=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports),Z1=(c,i)=>{for(var l in i)mn(c,l,{get:i[l],enumerable:!0})},qi=(c,i,l,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of V1(i))!$1.call(c,u)&&u!==l&&mn(c,u,{get:()=>i[u],enumerable:!(d=W1(i,u))||d.enumerable});return c},te=(c,i,l)=>(l=c!=null?z1(G1(c)):{},qi(i||!c||!c.__esModule?mn(l,"default",{value:c,enumerable:!0}):l,c)),H1=c=>qi(mn({},"__esModule",{value:!0}),c),X1=fn(c=>{"use strict";z(),c.byteLength=E,c.toByteArray=x,c.fromByteArray=I;var i=[],l=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,m=u.length;_<m;++_)i[_]=u[_],l[u.charCodeAt(_)]=_;var _,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(f){var b=f.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=f.indexOf("=");y===-1&&(y=b);var v=y===b?0:4-y%4;return[y,v]}function E(f){var b=n(f),y=b[0],v=b[1];return(y+v)*3/4-v}function g(f,b,y){return(b+y)*3/4-y}function x(f){var b,y=n(f),v=y[0],A=y[1],S=new d(g(f,v,A)),O=0,D=A>0?v-4:v,U;for(U=0;U<D;U+=4)b=l[f.charCodeAt(U)]<<18|l[f.charCodeAt(U+1)]<<12|l[f.charCodeAt(U+2)]<<6|l[f.charCodeAt(U+3)],S[O++]=b>>16&255,S[O++]=b>>8&255,S[O++]=b&255;return A===2&&(b=l[f.charCodeAt(U)]<<2|l[f.charCodeAt(U+1)]>>4,S[O++]=b&255),A===1&&(b=l[f.charCodeAt(U)]<<10|l[f.charCodeAt(U+1)]<<4|l[f.charCodeAt(U+2)]>>2,S[O++]=b>>8&255,S[O++]=b&255),S}function w(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function k(f,b,y){for(var v,A=[],S=b;S<y;S+=3)v=(f[S]<<16&16711680)+(f[S+1]<<8&65280)+(f[S+2]&255),A.push(w(v));return A.join("")}function I(f){for(var b,y=f.length,v=y%3,A=[],S=16383,O=0,D=y-v;O<D;O+=S)A.push(k(f,O,O+S>D?D:O+S));return v===1?(b=f[y-1],A.push(i[b>>2]+i[b<<4&63]+"==")):v===2&&(b=(f[y-2]<<8)+f[y-1],A.push(i[b>>10]+i[b>>4&63]+i[b<<2&63]+"=")),A.join("")}}),K1=fn(c=>{z(),c.read=function(i,l,d,u,_){var m,n,E=_*8-u-1,g=(1<<E)-1,x=g>>1,w=-7,k=d?_-1:0,I=d?-1:1,f=i[l+k];for(k+=I,m=f&(1<<-w)-1,f>>=-w,w+=E;w>0;m=m*256+i[l+k],k+=I,w-=8);for(n=m&(1<<-w)-1,m>>=-w,w+=u;w>0;n=n*256+i[l+k],k+=I,w-=8);if(m===0)m=1-x;else{if(m===g)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,u),m=m-x}return(f?-1:1)*n*Math.pow(2,m-u)},c.write=function(i,l,d,u,_,m){var n,E,g,x=m*8-_-1,w=(1<<x)-1,k=w>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=u?0:m-1,b=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(E=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-n))<1&&(n--,g*=2),n+k>=1?l+=I/g:l+=I*Math.pow(2,1-k),l*g>=2&&(n++,g/=2),n+k>=w?(E=0,n=w):n+k>=1?(E=(l*g-1)*Math.pow(2,_),n=n+k):(E=l*Math.pow(2,k-1)*Math.pow(2,_),n=0));_>=8;i[d+f]=E&255,f+=b,E/=256,_-=8);for(n=n<<_|E,x+=_;x>0;i[d+f]=n&255,f+=b,n/=256,x-=8);i[d+f-b]|=y*128}}),J1=fn(c=>{"use strict";z();var i=X1(),l=K1(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=n,c.SlowBuffer=A,c.INSPECT_MAX_BYTES=50;var u=2147483647;c.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return k(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return b(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var a=y(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function g(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function x(e,o,t){return g(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}n.alloc=function(e,o,t){return x(e,o,t)};function w(e){return g(e),m(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function k(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=S(e,o)|0,r=m(t),a=r.write(e,o);return a!==t&&(r=r.slice(0,a)),r}function I(e){for(var o=e.length<0?0:v(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if($(e,Uint8Array)){var o=new Uint8Array(e);return b(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function b(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?m(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function v(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),$(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,a=0,s=Math.min(t,r);a<s;++a)if(e[a]!==o[a]){t=e[a],r=o[a];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),a=0;for(t=0;t<e.length;++t){var s=e[t];if($(s,Uint8Array))a+s.length>r.length?n.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else if(n.isBuffer(s))s.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return r};function S(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ae(e).length;default:if(a)return r?-1:ye(e).length;o=(""+o).toLowerCase(),a=!0}}n.byteLength=S;function O(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,o,t);case"utf8":case"utf-8":return Y(this,o,t);case"ascii":return ie(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return Z(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function D(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)D(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)D(this,o,o+3),D(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)D(this,o,o+7),D(this,o+1,o+6),D(this,o+2,o+5),D(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,a){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||t>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=t)return 0;if(r>=a)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var s=a-r,h=t-o,C=Math.min(s,h),P=this.slice(r,a),N=e.slice(o,t),L=0;L<C;++L)if(P[L]!==N[L]){s=P[L],h=N[L];break}return s<h?-1:h<s?1:0};function U(e,o,t,r,a){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,we(t)&&(t=a?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(a)return-1;t=e.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:J(e,o,t,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):J(e,[o],t,r,a);throw new TypeError("val must be string, number or Buffer")}function J(e,o,t,r,a){var s=1,h=e.length,C=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,h/=2,C/=2,t/=2}function P(Te,Ie){return s===1?Te[Ie]:Te.readUInt16BE(Ie*s)}var N;if(a){var L=-1;for(N=t;N<h;N++)if(P(e,N)===P(o,L===-1?0:N-L)){if(L===-1&&(L=N),N-L+1===C)return L*s}else L!==-1&&(N-=N-L),L=-1}else for(t+C>h&&(t=h-C),N=t;N>=0;N--){for(var j=!0,de=0;de<C;de++)if(P(e,N+de)!==P(o,de)){j=!1;break}if(j)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return U(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return U(this,e,o,t,!1)};function ee(e,o,t,r){t=Number(t)||0;var a=e.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var h=0;h<r;++h){var C=parseInt(o.substr(h*2,2),16);if(we(C))return h;e[t+h]=C}return h}function oe(e,o,t,r){return se(ye(o,e.length-t),e,t,r)}function Q(e,o,t,r){return se(ze(o),e,t,r)}function pe(e,o,t,r){return se(Ae(o),e,t,r)}function ne(e,o,t,r){return se(We(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ee(this,e,o,t);case"utf8":case"utf-8":return oe(this,e,o,t);case"ascii":case"latin1":case"binary":return Q(this,e,o,t);case"base64":return pe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,o,t);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Z(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function Y(e,o,t){t=Math.min(e.length,t);for(var r=[],a=o;a<t;){var s=e[a],h=null,C=s>239?4:s>223?3:s>191?2:1;if(a+C<=t){var P,N,L,j;switch(C){case 1:s<128&&(h=s);break;case 2:P=e[a+1],(P&192)===128&&(j=(s&31)<<6|P&63,j>127&&(h=j));break;case 3:P=e[a+1],N=e[a+2],(P&192)===128&&(N&192)===128&&(j=(s&15)<<12|(P&63)<<6|N&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:P=e[a+1],N=e[a+2],L=e[a+3],(P&192)===128&&(N&192)===128&&(L&192)===128&&(j=(s&15)<<18|(P&63)<<12|(N&63)<<6|L&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,C=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|h&1023),r.push(h),a+=C}return ce(r)}var X=4096;function ce(e){var o=e.length;if(o<=X)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=X));return t}function ie(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]);return r}function he(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var a="",s=o;s<t;++s)a+=Ve[e[s]];return a}function me(e,o,t){for(var r=e.slice(o,t),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=o,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!1,52,8)};function M(e,o,t,r,a,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=1,h=0;for(this[o]=e&255;++h<t&&(s*=256);)this[o+h]=e/s&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=t-1,h=1;for(this[o+s]=e&255;--s>=0&&(h*=256);)this[o+s]=e/h&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=0,h=1,C=0;for(this[o]=e&255;++s<t&&(h*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=t-1,h=1,C=0;for(this[o+s]=e&255;--s>=0&&(h*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ve(e,o,t,r,a,s){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xe(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return xe(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return xe(this,e,o,!1,t)};function re(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var a=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),a},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<t;++s)this[s]=e;else{var h=n.isBuffer(e)?e:n.from(e,r),C=h.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<t-o;++s)this[s+o]=h[s%C]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,o){o=o||1/0;for(var t,r=e.length,a=null,s=[],h=0;h<r;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!a){if(t>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(h+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=t;continue}if(t<56320){(o-=3)>-1&&s.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,t<128){if((o-=1)<0)break;s.push(t)}else if(t<2048){if((o-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function We(e,o){for(var t,r,a,s=[],h=0;h<e.length&&!((o-=2)<0);++h)t=e.charCodeAt(h),r=t>>8,a=t%256,s.push(a),s.push(r);return s}function Ae(e){return i.toByteArray(je(e))}function se(e,o,t,r){for(var a=0;a<r&&!(a+t>=o.length||a>=e.length);++a)o[a+t]=e[a];return a}function $(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function we(e){return e!==e}var Ve=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)o[r+a]=e[t]+e[a];return o}()}),Q1=fn((c,i)=>{z();var l=i.exports={},d,u;function _(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(v){d=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=m}catch(v){u=m}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(A){try{return d.call(null,v,0)}catch(S){return d.call(this,v,0)}}}function E(v){if(u===clearTimeout)return clearTimeout(v);if((u===m||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(v);try{return u(v)}catch(A){try{return u.call(null,v)}catch(S){return u.call(this,v)}}}var g=[],x=!1,w,k=-1;function I(){!x||!w||(x=!1,w.length?g=w.concat(g):k=-1,g.length&&f())}function f(){if(!x){var v=n(I);x=!0;for(var A=g.length;A;){for(w=g,g=[];++k<A;)w&&w[k].run();k=-1,A=g.length}w=null,x=!1,E(v)}}l.nextTick=function(v){var A=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)A[S-1]=arguments[S];g.push(new b(v,A)),g.length===1&&!x&&n(f)};function b(v,A){this.fun=v,this.array=A}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),e2,o2,t2,z=Y1(()=>{e2=te(J1()),o2=te(Q1()),t2=function(c){function i(){var d=this||self;return delete c.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Ci={};Z1(Ci,{WREWAWarning:()=>q2});Bi.exports=H1(Ci);z();z();var Xt=te(p("react")),r2=p("@fortawesome/free-solid-svg-icons"),n2=p("@fortawesome/react-fontawesome"),a2=te(p("classnames"));z();z();z();var F3=te(p("axios"));z();z();z();var j3=p("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");z();var z3=p("@terradharitri/sdk-dapp/constants/index");z();z();z();var l2="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.";z();var p2="WREWA-bd4d79",c2={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function i2(c){return c2[c]||p2}z();z();z();var W3=te(p("axios"));z();z();var V3=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),G3=p("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),$3=te(p("axios")),Y3=te(p("lodash/uniqBy"));z();var Z3=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),H3=te(p("axios"));z();z();z();var X3=p("@terradharitri/sdk-dapp/types/tokens.types");z();z();z();z();var K3=p("@terradharitri/sdk-dapp/apiCalls/endpoints"),J3=te(p("axios"));z();z();var Q3=te(p("axios"));z();var e8=te(p("react")),o8=p("@terradharitri/sdk-dapp/constants/index");z();var s2=te(p("react")),t8=(0,s2.createContext)({});z();z();var d2=te(p("react")),r8=p("@terradharitri/sdk-dapp/constants/index"),n8=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),a8=te(p("bignumber.js")),l8=p("formik");z();z();z();var p8=p("bech32");z();z();z();z();z();z();var c8=p("@terradharitri/sdk-dapp/constants"),i8=p("@terradharitri/sdk-dapp/utils/account/getAccount");z();z();var s8=p("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");z();var d8=p("@terradharitri/sdk-dapp/utils/buildUrlParams");z();var u8=te(p("anchorme"));z();z();var m8=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),u2=p("@terradharitri/sdk-dapp/utils/operations/formatAmount"),f8=p("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),_8=p("@terradharitri/sdk-dapp/utils/operations/parseAmount");z();z();var m2=te(p("react")),h8=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),g8=p("formik");z();z();var v8=p("@terradharitri/sdk-dapp/constants/index"),b8=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),y8=te(p("bignumber.js"));z();z();var w8=p("@terradharitri/sdk-dapp/constants/index");z();var E8=p("@terradharitri/sdk-dapp/constants/index");z();var k8=p("@terradharitri/sdk-dapp/constants/index"),x8=te(p("bignumber.js"));z();var S8=p("@terradharitri/sdk-dapp/constants/index");z();var A8=p("@terradharitri/sdk-dapp/constants/index");z();z();var T8=p("@terradharitri/sdk-core"),I8=p("@terradharitri/sdk-dapp/constants/index"),q8=te(p("bignumber.js"));z();z();var C8=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");z();var N8=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");z();var B8=te(p("bignumber.js"));z();var L8=p("@terradharitri/sdk-dapp/constants/index"),U8=p("@terradharitri/sdk-dapp/utils/smartContracts"),O8=p("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),R8=te(p("bignumber.js"));z();var D8=te(p("bignumber.js"));z();var Pa=p("@terradharitri/sdk-dapp/constants/index"),f2=te(p("bignumber.js")),Si,Ai,Ti,_2=(0,u2.formatAmount)({input:String((Si=Pa.GAS_PRICE)!=null?Si:1e9),decimals:(Ai=Pa.DECIMALS)!=null?Ai:18,showLastNonZeroDecimal:!0,digits:(Ti=Pa.DIGITS)!=null?Ti:4}),P8=new f2.default(_2).times(10).toString(10);z();var M8=p("@terradharitri/sdk-dapp/constants/index"),F8=te(p("bignumber.js"));z();var j8=te(p("bignumber.js"));z();z();var z8=p("yup");z();var Ii=p("@terradharitri/sdk-dapp/constants/ledger.constants"),h2=te(p("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ma=p("yup"),g2=(0,Ma.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(c){let{ledger:i}=this.parent;return!(i&&c&&c.length&&!i.ledgerDataActive)}),v2=(0,Ma.string)().test({name:"hashSign",test:function(c){let{ledger:i,isGuarded:l}=this.parent;if(i){let{ledgerWithHashSign:d,ledgerWithGuardians:u}=(0,h2.default)(i.version);if(c&&c.length>300&&!d)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ii.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!u)return this.createError({message:`You need at least DharitrI app version ${Ii.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),b2=[g2,v2],W8=b2.reduce((c,i)=>c.concat(i),(0,Ma.string)());z();var V8=p("@terradharitri/sdk-dapp/constants/index"),G8=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),$8=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Y8=p("yup");z();var Z8=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),H8=te(p("bignumber.js")),X8=p("yup");z();var K8=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),J8=te(p("bignumber.js")),Q8=p("yup");z();var eS=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),oS=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),tS=te(p("bignumber.js")),rS=p("yup");z();var nS=te(p("bignumber.js")),aS=p("yup");z();var lS=p("@terradharitri/sdk-dapp/constants/index"),pS=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),cS=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),iS=te(p("bignumber.js")),sS=p("yup");z();var dS=p("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),uS=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),mS=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),fS=te(p("bignumber.js")),_S=p("yup");z();var hS=te(p("bignumber.js")),gS=p("yup");z();var vS=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),bS=p("yup");z();var yS=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),wS=p("yup");z();z();var ES=(0,m2.createContext)({});z();z();var y2=te(p("react")),kS=p("formik"),xS=te(p("lodash/uniqBy"));z();z();var Ni=te(p("react")),w2=(0,Ni.createContext)({});function E2(){return(0,Ni.useContext)(w2)}z();z();var SS=p("react"),AS=p("@terradharitri/sdk-dapp/constants/index"),TS=p("@terradharitri/sdk-dapp/types/enums.types");z();var IS=(0,y2.createContext)({});z();z();var qS=p("@terradharitri/sdk-dapp/constants/index"),CS=p("formik");z();z();var k2=te(p("react")),NS=p("@terradharitri/sdk-dapp/constants/index"),BS=p("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),LS=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),US=p("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),OS=te(p("bignumber.js")),RS=p("formik");z();z();z();z();var DS=te(p("bignumber.js"));z();var PS=p("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),MS=te(p("bignumber.js"));z();z();var FS=p("react"),jS=p("@terradharitri/sdk-dapp/constants/index"),zS=p("@terradharitri/sdk-dapp/utils/smartContracts"),WS=te(p("bignumber.js")),VS=p("formik");z();var GS=p("react");z();z();var $S=p("@terradharitri/sdk-dapp/constants/index"),YS=te(p("bignumber.js")),ZS=(0,k2.createContext)({}),HS=(0,d2.createContext)({});z();z();var x2=te(p("react")),XS=p("formik"),KS=(0,x2.createContext)({});z();z();var S2=te(p("react")),JS=p("formik");z();z();z();var QS=p("react"),e9=p("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),o9=te(p("lodash/uniqBy"));z();z();var t9=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),r9=p("@terradharitri/sdk-dapp/utils");z();var n9=p("react");z();var a9=p("react"),l9=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),p9=(0,S2.createContext)({});z();z();var A2=te(p("react")),c9=p("formik");z();z();z();z();z();var i9=p("react"),s9=p("@terradharitri/sdk-dapp/utils");z();var d9=p("react"),u9=p("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");z();z();var m9=p("@terradharitri/sdk-dapp/utils/account/addressIsValid"),f9=te(p("axios"));z();var _9=te(p("axios")),h9=(0,A2.createContext)({});z();var T2=te(p("react")),g9=(0,T2.createContext)({});z();var I2=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(I2));var Kt={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"},q2=c=>{let{tokenId:i,className:l}=c,{networkConfig:{chainId:d}}=E2();return i2(d)!==i?null:Xt.default.createElement("div",{className:(0,a2.default)(Kt.wrewaWarning,l)},Xt.default.createElement("div",{className:Kt.wrewaWarningHeading},Xt.default.createElement(n2.FontAwesomeIcon,{icon:r2.faExclamationTriangle,className:Kt.wrewaWarningIcon,size:"lg"}),Xt.default.createElement("div",{className:Kt.wrewaWarningTitle},Xt.default.createElement("div",{className:Kt.wrewaWarningLabel},"Warning!"),Xt.default.createElement("div",{className:Kt.wrewaWarningMessage},l2))))};});var Di=No((b9,Ri)=>{"use strict";Ce();var C2=Object.create,hn=Object.defineProperty,N2=Object.getOwnPropertyDescriptor,B2=Object.getOwnPropertyNames,L2=Object.getPrototypeOf,U2=Object.prototype.hasOwnProperty,O2=(c,i)=>()=>(c&&(i=c(c=0)),i),gn=(c,i)=>()=>(i||c((i={exports:{}}).exports,i),i.exports),R2=(c,i)=>{for(var l in i)hn(c,l,{get:i[l],enumerable:!0})},Ui=(c,i,l,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of B2(i))!U2.call(c,u)&&u!==l&&hn(c,u,{get:()=>i[u],enumerable:!(d=N2(i,u))||d.enumerable});return c},Fa=(c,i,l)=>(l=c!=null?C2(L2(c)):{},Ui(i||!c||!c.__esModule?hn(l,"default",{value:c,enumerable:!0}):l,c)),D2=c=>Ui(hn({},"__esModule",{value:!0}),c),P2=gn(c=>{"use strict";Mt(),c.byteLength=E,c.toByteArray=x,c.fromByteArray=I;var i=[],l=[],d=typeof Uint8Array!="undefined"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_=0,m=u.length;_<m;++_)i[_]=u[_],l[u.charCodeAt(_)]=_;var _,m;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(f){var b=f.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var y=f.indexOf("=");y===-1&&(y=b);var v=y===b?0:4-y%4;return[y,v]}function E(f){var b=n(f),y=b[0],v=b[1];return(y+v)*3/4-v}function g(f,b,y){return(b+y)*3/4-y}function x(f){var b,y=n(f),v=y[0],A=y[1],S=new d(g(f,v,A)),O=0,D=A>0?v-4:v,U;for(U=0;U<D;U+=4)b=l[f.charCodeAt(U)]<<18|l[f.charCodeAt(U+1)]<<12|l[f.charCodeAt(U+2)]<<6|l[f.charCodeAt(U+3)],S[O++]=b>>16&255,S[O++]=b>>8&255,S[O++]=b&255;return A===2&&(b=l[f.charCodeAt(U)]<<2|l[f.charCodeAt(U+1)]>>4,S[O++]=b&255),A===1&&(b=l[f.charCodeAt(U)]<<10|l[f.charCodeAt(U+1)]<<4|l[f.charCodeAt(U+2)]>>2,S[O++]=b>>8&255,S[O++]=b&255),S}function w(f){return i[f>>18&63]+i[f>>12&63]+i[f>>6&63]+i[f&63]}function k(f,b,y){for(var v,A=[],S=b;S<y;S+=3)v=(f[S]<<16&16711680)+(f[S+1]<<8&65280)+(f[S+2]&255),A.push(w(v));return A.join("")}function I(f){for(var b,y=f.length,v=y%3,A=[],S=16383,O=0,D=y-v;O<D;O+=S)A.push(k(f,O,O+S>D?D:O+S));return v===1?(b=f[y-1],A.push(i[b>>2]+i[b<<4&63]+"==")):v===2&&(b=(f[y-2]<<8)+f[y-1],A.push(i[b>>10]+i[b>>4&63]+i[b<<2&63]+"=")),A.join("")}}),M2=gn(c=>{Mt(),c.read=function(i,l,d,u,_){var m,n,E=_*8-u-1,g=(1<<E)-1,x=g>>1,w=-7,k=d?_-1:0,I=d?-1:1,f=i[l+k];for(k+=I,m=f&(1<<-w)-1,f>>=-w,w+=E;w>0;m=m*256+i[l+k],k+=I,w-=8);for(n=m&(1<<-w)-1,m>>=-w,w+=u;w>0;n=n*256+i[l+k],k+=I,w-=8);if(m===0)m=1-x;else{if(m===g)return n?NaN:(f?-1:1)*(1/0);n=n+Math.pow(2,u),m=m-x}return(f?-1:1)*n*Math.pow(2,m-u)},c.write=function(i,l,d,u,_,m){var n,E,g,x=m*8-_-1,w=(1<<x)-1,k=w>>1,I=_===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=u?0:m-1,b=u?1:-1,y=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(E=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(g=Math.pow(2,-n))<1&&(n--,g*=2),n+k>=1?l+=I/g:l+=I*Math.pow(2,1-k),l*g>=2&&(n++,g/=2),n+k>=w?(E=0,n=w):n+k>=1?(E=(l*g-1)*Math.pow(2,_),n=n+k):(E=l*Math.pow(2,k-1)*Math.pow(2,_),n=0));_>=8;i[d+f]=E&255,f+=b,E/=256,_-=8);for(n=n<<_|E,x+=_;x>0;i[d+f]=n&255,f+=b,n/=256,x-=8);i[d+f-b]|=y*128}}),F2=gn(c=>{"use strict";Mt();var i=P2(),l=M2(),d=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=n,c.SlowBuffer=A,c.INSPECT_MAX_BYTES=50;var u=2147483647;c.kMaxLength=u,n.TYPED_ARRAY_SUPPORT=_(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function _(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function m(e){if(e>u)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,t){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return E(e,o,t)}n.poolSize=8192;function E(e,o,t){if(typeof e=="string")return k(e,o);if(ArrayBuffer.isView(e))return f(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if($(e,ArrayBuffer)||e&&$(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&($(e,SharedArrayBuffer)||e&&$(e.buffer,SharedArrayBuffer)))return b(e,o,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return n.from(r,o,t);var a=y(e);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,t){return E(e,o,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function g(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function x(e,o,t){return g(e),e<=0?m(e):o!==void 0?typeof t=="string"?m(e).fill(o,t):m(e).fill(o):m(e)}n.alloc=function(e,o,t){return x(e,o,t)};function w(e){return g(e),m(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function k(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var t=S(e,o)|0,r=m(t),a=r.write(e,o);return a!==t&&(r=r.slice(0,a)),r}function I(e){for(var o=e.length<0?0:v(e.length)|0,t=m(o),r=0;r<o;r+=1)t[r]=e[r]&255;return t}function f(e){if($(e,Uint8Array)){var o=new Uint8Array(e);return b(o.buffer,o.byteOffset,o.byteLength)}return I(e)}function b(e,o,t){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(t||0))throw new RangeError('"length" is outside of buffer bounds');var r;return o===void 0&&t===void 0?r=new Uint8Array(e):t===void 0?r=new Uint8Array(e,o):r=new Uint8Array(e,o,t),Object.setPrototypeOf(r,n.prototype),r}function y(e){if(n.isBuffer(e)){var o=v(e.length)|0,t=m(o);return t.length===0||e.copy(t,0,0,o),t}if(e.length!==void 0)return typeof e.length!="number"||we(e.length)?m(0):I(e);if(e.type==="Buffer"&&Array.isArray(e.data))return I(e.data)}function v(e){if(e>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return e|0}function A(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),$(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,r=o.length,a=0,s=Math.min(t,r);a<s;++a)if(e[a]!==o[a]){t=e[a],r=o[a];break}return t<r?-1:r<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var r=n.allocUnsafe(o),a=0;for(t=0;t<e.length;++t){var s=e[t];if($(s,Uint8Array))a+s.length>r.length?n.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else if(n.isBuffer(s))s.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return r};function S(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||$(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&t===0)return 0;for(var a=!1;;)switch(o){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return ye(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ae(e).length;default:if(a)return r?-1:ye(e).length;o=(""+o).toLowerCase(),a=!0}}n.byteLength=S;function O(e,o,t){var r=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,o>>>=0,t<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return he(this,o,t);case"utf8":case"utf-8":return Y(this,o,t);case"ascii":return ie(this,o,t);case"latin1":case"binary":return be(this,o,t);case"base64":return Z(this,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me(this,o,t);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}n.prototype._isBuffer=!0;function D(e,o,t){var r=e[o];e[o]=e[t],e[t]=r}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)D(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)D(this,o,o+3),D(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)D(this,o,o+7),D(this,o+1,o+6),D(this,o+2,o+5),D(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):O.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},d&&(n.prototype[d]=n.prototype.inspect),n.prototype.compare=function(e,o,t,r,a){if($(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||t>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=t)return 0;if(r>=a)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var s=a-r,h=t-o,C=Math.min(s,h),P=this.slice(r,a),N=e.slice(o,t),L=0;L<C;++L)if(P[L]!==N[L]){s=P[L],h=N[L];break}return s<h?-1:h<s?1:0};function U(e,o,t,r,a){if(e.length===0)return-1;if(typeof t=="string"?(r=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,we(t)&&(t=a?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(a)return-1;t=e.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof o=="string"&&(o=n.from(o,r)),n.isBuffer(o))return o.length===0?-1:J(e,o,t,r,a);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(e,o,t):Uint8Array.prototype.lastIndexOf.call(e,o,t):J(e,[o],t,r,a);throw new TypeError("val must be string, number or Buffer")}function J(e,o,t,r,a){var s=1,h=e.length,C=o.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,h/=2,C/=2,t/=2}function P(Te,Ie){return s===1?Te[Ie]:Te.readUInt16BE(Ie*s)}var N;if(a){var L=-1;for(N=t;N<h;N++)if(P(e,N)===P(o,L===-1?0:N-L)){if(L===-1&&(L=N),N-L+1===C)return L*s}else L!==-1&&(N-=N-L),L=-1}else for(t+C>h&&(t=h-C),N=t;N>=0;N--){for(var j=!0,de=0;de<C;de++)if(P(e,N+de)!==P(o,de)){j=!1;break}if(j)return N}return-1}n.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1},n.prototype.indexOf=function(e,o,t){return U(this,e,o,t,!0)},n.prototype.lastIndexOf=function(e,o,t){return U(this,e,o,t,!1)};function ee(e,o,t,r){t=Number(t)||0;var a=e.length-t;r?(r=Number(r),r>a&&(r=a)):r=a;var s=o.length;r>s/2&&(r=s/2);for(var h=0;h<r;++h){var C=parseInt(o.substr(h*2,2),16);if(we(C))return h;e[t+h]=C}return h}function oe(e,o,t,r){return se(ye(o,e.length-t),e,t,r)}function Q(e,o,t,r){return se(ze(o),e,t,r)}function pe(e,o,t,r){return se(Ae(o),e,t,r)}function ne(e,o,t,r){return se(We(o,e.length-t),e,t,r)}n.prototype.write=function(e,o,t,r){if(o===void 0)r="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")r=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,r===void 0&&(r="utf8")):(r=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return ee(this,e,o,t);case"utf8":case"utf-8":return oe(this,e,o,t);case"ascii":case"latin1":case"binary":return Q(this,e,o,t);case"base64":return pe(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,e,o,t);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Z(e,o,t){return o===0&&t===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,t))}function Y(e,o,t){t=Math.min(e.length,t);for(var r=[],a=o;a<t;){var s=e[a],h=null,C=s>239?4:s>223?3:s>191?2:1;if(a+C<=t){var P,N,L,j;switch(C){case 1:s<128&&(h=s);break;case 2:P=e[a+1],(P&192)===128&&(j=(s&31)<<6|P&63,j>127&&(h=j));break;case 3:P=e[a+1],N=e[a+2],(P&192)===128&&(N&192)===128&&(j=(s&15)<<12|(P&63)<<6|N&63,j>2047&&(j<55296||j>57343)&&(h=j));break;case 4:P=e[a+1],N=e[a+2],L=e[a+3],(P&192)===128&&(N&192)===128&&(L&192)===128&&(j=(s&15)<<18|(P&63)<<12|(N&63)<<6|L&63,j>65535&&j<1114112&&(h=j))}}h===null?(h=65533,C=1):h>65535&&(h-=65536,r.push(h>>>10&1023|55296),h=56320|h&1023),r.push(h),a+=C}return ce(r)}var X=4096;function ce(e){var o=e.length;if(o<=X)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<o;)t+=String.fromCharCode.apply(String,e.slice(r,r+=X));return t}function ie(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]&127);return r}function be(e,o,t){var r="";t=Math.min(e.length,t);for(var a=o;a<t;++a)r+=String.fromCharCode(e[a]);return r}function he(e,o,t){var r=e.length;(!o||o<0)&&(o=0),(!t||t<0||t>r)&&(t=r);for(var a="",s=o;s<t;++s)a+=Ve[e[s]];return a}function me(e,o,t){for(var r=e.slice(o,t),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+r[s+1]*256);return a}n.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,n.prototype),r};function B(e,o,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return r},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||B(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=this[e],a=1,s=0;++s<o&&(a*=256);)r+=this[e+s]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r},n.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||B(e,o,this.length);for(var r=o,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||B(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||B(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||B(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||B(e,8,this.length),l.read(this,e,!1,52,8)};function M(e,o,t,r,a,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>a||o<s)throw new RangeError('"value" argument is out of bounds');if(t+r>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=1,h=0;for(this[o]=e&255;++h<t&&(s*=256);)this[o+h]=e/s&255;return o+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,t=t>>>0,!r){var a=Math.pow(2,8*t)-1;M(this,e,o,t,a,0)}var s=t-1,h=1;for(this[o+s]=e&255;--s>=0&&(h*=256);)this[o+s]=e/h&255;return o+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=0,h=1,C=0;for(this[o]=e&255;++s<t&&(h*=256);)e<0&&C===0&&this[o+s-1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeIntBE=function(e,o,t,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*t-1);M(this,e,o,t,a-1,-a)}var s=t-1,h=1,C=0;for(this[o+s]=e&255;--s>=0&&(h*=256);)e<0&&C===0&&this[o+s+1]!==0&&(C=1),this[o+s]=(e/h>>0)-C&255;return o+t},n.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||M(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ve(e,o,t,r,a,s){if(t+r>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xe(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,o,t,r,23,4),t+4}n.prototype.writeFloatLE=function(e,o,t){return xe(this,e,o,!0,t)},n.prototype.writeFloatBE=function(e,o,t){return xe(this,e,o,!1,t)};function re(e,o,t,r,a){return o=+o,t=t>>>0,a||ve(e,o,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,o,t,r,52,8),t+8}n.prototype.writeDoubleLE=function(e,o,t){return re(this,e,o,!0,t)},n.prototype.writeDoubleBE=function(e,o,t){return re(this,e,o,!1,t)},n.prototype.copy=function(e,o,t,r){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<t&&(r=t),r===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-t&&(r=e.length-o+t);var a=r-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,r):Uint8Array.prototype.set.call(e,this.subarray(t,r),o),a},n.prototype.fill=function(e,o,t,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,t=this.length):typeof t=="string"&&(r=t,t=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<t;++s)this[s]=e;else{var h=n.isBuffer(e)?e:n.from(e,r),C=h.length;if(C===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<t-o;++s)this[s+o]=h[s%C]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function je(e){if(e=e.split("=")[0],e=e.trim().replace(Fe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function ye(e,o){o=o||1/0;for(var t,r=e.length,a=null,s=[],h=0;h<r;++h){if(t=e.charCodeAt(h),t>55295&&t<57344){if(!a){if(t>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(h+1===r){(o-=3)>-1&&s.push(239,191,189);continue}a=t;continue}if(t<56320){(o-=3)>-1&&s.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(o-=3)>-1&&s.push(239,191,189);if(a=null,t<128){if((o-=1)<0)break;s.push(t)}else if(t<2048){if((o-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((o-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((o-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function ze(e){for(var o=[],t=0;t<e.length;++t)o.push(e.charCodeAt(t)&255);return o}function We(e,o){for(var t,r,a,s=[],h=0;h<e.length&&!((o-=2)<0);++h)t=e.charCodeAt(h),r=t>>8,a=t%256,s.push(a),s.push(r);return s}function Ae(e){return i.toByteArray(je(e))}function se(e,o,t,r){for(var a=0;a<r&&!(a+t>=o.length||a>=e.length);++a)o[a+t]=e[a];return a}function $(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function we(e){return e!==e}var Ve=function(){for(var e="0123456789abcdef",o=new Array(256),t=0;t<16;++t)for(var r=t*16,a=0;a<16;++a)o[r+a]=e[t]+e[a];return o}()}),j2=gn((c,i)=>{Mt();var l=i.exports={},d,u;function _(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?d=setTimeout:d=_}catch(v){d=_}try{typeof clearTimeout=="function"?u=clearTimeout:u=m}catch(v){u=m}})();function n(v){if(d===setTimeout)return setTimeout(v,0);if((d===_||!d)&&setTimeout)return d=setTimeout,setTimeout(v,0);try{return d(v,0)}catch(A){try{return d.call(null,v,0)}catch(S){return d.call(this,v,0)}}}function E(v){if(u===clearTimeout)return clearTimeout(v);if((u===m||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(v);try{return u(v)}catch(A){try{return u.call(null,v)}catch(S){return u.call(this,v)}}}var g=[],x=!1,w,k=-1;function I(){!x||!w||(x=!1,w.length?g=w.concat(g):k=-1,g.length&&f())}function f(){if(!x){var v=n(I);x=!0;for(var A=g.length;A;){for(w=g,g=[];++k<A;)w&&w[k].run();k=-1,A=g.length}w=null,x=!1,E(v)}}l.nextTick=function(v){var A=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)A[S-1]=arguments[S];g.push(new b(v,A)),g.length===1&&!x&&n(f)};function b(v,A){this.fun=v,this.array=A}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function y(){}l.on=y,l.addListener=y,l.once=y,l.off=y,l.removeListener=y,l.removeAllListeners=y,l.emit=y,l.prependListener=y,l.prependOnceListener=y,l.listeners=function(v){return[]},l.binding=function(v){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(v){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),z2,W2,V2,Mt=O2(()=>{z2=Fa(F2()),W2=Fa(j2()),V2=function(c){function i(){var d=this||self;return delete c.prototype.__magic__,d}if(typeof globalThis=="object")return globalThis;if(this)return i();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:i});var l=__magic__;return l}(Object)}),Oi={};R2(Oi,{HighlightText:()=>Y2});Ri.exports=D2(Oi);Mt();Mt();var _n=Fa(p("react"));Mt();var G2=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(G2));var $2={highlight:"dapp-core-component__styles-modules__highlight"},Y2=({highlight:c,text:i=""})=>{let l=i.split(" "),d=c.toLowerCase(),u=new RegExp(`(${d})`,"gi"),_=l.map(m=>m.split(u).filter(n=>n));return _n.default.createElement("span",{className:$2.highlight},_.map((m,n)=>{let E=`${m}-${n}`;return _n.default.createElement("span",{key:E},m.map((g,x)=>{let w=g.toLowerCase()===d,k=d&&w,I=`${g}-${x}`;return k?_n.default.createElement("strong",{key:I},g):_n.default.createElement("span",{key:I},g)}))}))};});var V={};Ce();G(V,Bo(Va()));G(V,Bo(Ha()));G(V,Bo(dp()));G(V,Bo(yc()));G(V,Bo(Gc()));G(V,Bo(yi()));G(V,Bo(xi()));G(V,Bo(Li()));G(V,Bo(Di()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
