"use strict";import{a,b as Ne,d as Y,e as Pe,f as H}from"../../../../__chunks__/chunk-JH2LJGTQ.js";var ve=Ne((nn,ye)=>{"use strict";H();var Fe=Object.create,J=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,We=Object.getOwnPropertyNames,Ve=Object.getPrototypeOf,$e=Object.prototype.hasOwnProperty,Ye=(h,f)=>()=>(h&&(f=h(h=0)),f),Z=(h,f)=>()=>(f||h((f={exports:{}}).exports,f),f.exports),He=(h,f)=>{for(var l in f)J(h,l,{get:f[l],enumerable:!0})},be=(h,f,l,v)=>{if(f&&typeof f=="object"||typeof f=="function")for(let g of We(f))!$e.call(h,g)&&g!==l&&J(h,g,{get:()=>f[g],enumerable:!(v=Ge(f,g))||v.enumerable});return h},d=(h,f,l)=>(l=h!=null?Fe(Ve(h)):{},be(f||!h||!h.__esModule?J(l,"default",{value:h,enumerable:!0}):l,h)),Je=h=>be(J({},"__esModule",{value:!0}),h),Ze=Z(h=>{"use strict";u(),h.byteLength=k,h.toByteArray=I,h.fromByteArray=O;var f=[],l=[],v=typeof Uint8Array!="undefined"?Uint8Array:Array,g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(q=0,y=g.length;q<y;++q)f[q]=g[q],l[g.charCodeAt(q)]=q;var q,y;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;function n(s){var b=s.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var _=s.indexOf("=");_===-1&&(_=b);var m=_===b?0:4-_%4;return[_,m]}function k(s){var b=n(s),_=b[0],m=b[1];return(_+m)*3/4-m}function x(s,b,_){return(b+_)*3/4-_}function I(s){var b,_=n(s),m=_[0],U=_[1],E=new v(x(s,m,U)),N=0,j=U>0?m-4:m,M;for(M=0;M<j;M+=4)b=l[s.charCodeAt(M)]<<18|l[s.charCodeAt(M+1)]<<12|l[s.charCodeAt(M+2)]<<6|l[s.charCodeAt(M+3)],E[N++]=b>>16&255,E[N++]=b>>8&255,E[N++]=b&255;return U===2&&(b=l[s.charCodeAt(M)]<<2|l[s.charCodeAt(M+1)]>>4,E[N++]=b&255),U===1&&(b=l[s.charCodeAt(M)]<<10|l[s.charCodeAt(M+1)]<<4|l[s.charCodeAt(M+2)]>>2,E[N++]=b>>8&255,E[N++]=b&255),E}function w(s){return f[s>>18&63]+f[s>>12&63]+f[s>>6&63]+f[s&63]}function B(s,b,_){for(var m,U=[],E=b;E<_;E+=3)m=(s[E]<<16&16711680)+(s[E+1]<<8&65280)+(s[E+2]&255),U.push(w(m));return U.join("")}function O(s){for(var b,_=s.length,m=_%3,U=[],E=16383,N=0,j=_-m;N<j;N+=E)U.push(B(s,N,N+E>j?j:N+E));return m===1?(b=s[_-1],U.push(f[b>>2]+f[b<<4&63]+"==")):m===2&&(b=(s[_-2]<<8)+s[_-1],U.push(f[b>>10]+f[b>>4&63]+f[b<<2&63]+"=")),U.join("")}}),Xe=Z(h=>{u(),h.read=function(f,l,v,g,q){var y,n,k=q*8-g-1,x=(1<<k)-1,I=x>>1,w=-7,B=v?q-1:0,O=v?-1:1,s=f[l+B];for(B+=O,y=s&(1<<-w)-1,s>>=-w,w+=k;w>0;y=y*256+f[l+B],B+=O,w-=8);for(n=y&(1<<-w)-1,y>>=-w,w+=g;w>0;n=n*256+f[l+B],B+=O,w-=8);if(y===0)y=1-I;else{if(y===x)return n?NaN:(s?-1:1)*(1/0);n=n+Math.pow(2,g),y=y-I}return(s?-1:1)*n*Math.pow(2,y-g)},h.write=function(f,l,v,g,q,y){var n,k,x,I=y*8-q-1,w=(1<<I)-1,B=w>>1,O=q===23?Math.pow(2,-24)-Math.pow(2,-77):0,s=g?0:y-1,b=g?1:-1,_=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(k=isNaN(l)?1:0,n=w):(n=Math.floor(Math.log(l)/Math.LN2),l*(x=Math.pow(2,-n))<1&&(n--,x*=2),n+B>=1?l+=O/x:l+=O*Math.pow(2,1-B),l*x>=2&&(n++,x/=2),n+B>=w?(k=0,n=w):n+B>=1?(k=(l*x-1)*Math.pow(2,q),n=n+B):(k=l*Math.pow(2,B-1)*Math.pow(2,q),n=0));q>=8;f[v+s]=k&255,s+=b,k/=256,q-=8);for(n=n<<q|k,I+=q;I>0;f[v+s]=n&255,s+=b,n/=256,I-=8);f[v+s-b]|=_*128}}),Ke=Z(h=>{"use strict";u();var f=Ze(),l=Xe(),v=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;h.Buffer=n,h.SlowBuffer=U,h.INSPECT_MAX_BYTES=50;var g=2147483647;h.kMaxLength=g,n.TYPED_ARRAY_SUPPORT=q(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function q(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function y(e){if(e>g)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,n.prototype),r}function n(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return k(e,r,t)}n.poolSize=8192;function k(e,r,t){if(typeof e=="string")return B(e,r);if(ArrayBuffer.isView(e))return s(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return b(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return n.from(o,r,t);var i=_(e);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,r,t){return k(e,r,t)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function x(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function I(e,r,t){return x(e),e<=0?y(e):r!==void 0?typeof t=="string"?y(e).fill(r,t):y(e).fill(r):y(e)}n.alloc=function(e,r,t){return I(e,r,t)};function w(e){return x(e),y(e<0?0:m(e)|0)}n.allocUnsafe=function(e){return w(e)},n.allocUnsafeSlow=function(e){return w(e)};function B(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!n.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=E(e,r)|0,o=y(t),i=o.write(e,r);return i!==t&&(o=o.slice(0,i)),o}function O(e){for(var r=e.length<0?0:m(e.length)|0,t=y(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function s(e){if(z(e,Uint8Array)){var r=new Uint8Array(e);return b(r.buffer,r.byteOffset,r.byteLength)}return O(e)}function b(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,n.prototype),o}function _(e){if(n.isBuffer(e)){var r=m(e.length)|0,t=y(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||K(e.length)?y(0):O(e);if(e.type==="Buffer"&&Array.isArray(e.data))return O(e.data)}function m(e){if(e>=g)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+g.toString(16)+" bytes");return e|0}function U(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,r){if(z(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),z(r,Uint8Array)&&(r=n.from(r,r.offset,r.byteLength)),!n.isBuffer(e)||!n.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,i=0,p=Math.min(t,o);i<p;++i)if(e[i]!==r[i]){t=e[i],o=r[i];break}return t<o?-1:o<t?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=n.allocUnsafe(r),i=0;for(t=0;t<e.length;++t){var p=e[t];if(z(p,Uint8Array))i+p.length>o.length?n.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(n.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function E(e,r){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return X(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return pe(e).length;default:if(i)return o?-1:X(e).length;r=(""+r).toLowerCase(),i=!0}}n.byteLength=E;function N(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ce(this,r,t);case"utf8":case"utf-8":return oe(this,r,t);case"ascii":return Te(this,r,t);case"latin1":case"binary":return Ie(this,r,t);case"base64":return Be(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}n.prototype._isBuffer=!0;function j(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)j(this,r,r+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)j(this,r,r+3),j(this,r+1,r+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)j(this,r,r+7),j(this,r+1,r+6),j(this,r+2,r+5),j(this,r+3,r+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?oe(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",r=h.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},v&&(n.prototype[v]=n.prototype.inspect),n.prototype.compare=function(e,r,t,o,i){if(z(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),r<0||t>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&r>=t)return 0;if(o>=i)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var p=i-o,c=t-r,A=Math.min(p,c),S=this.slice(o,i),T=e.slice(r,t),C=0;C<A;++C)if(S[C]!==T[C]){p=S[C],c=T[C];break}return p<c?-1:c<p?1:0};function M(e,r,t,o,i){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,K(t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof r=="string"&&(r=n.from(r,o)),n.isBuffer(r))return r.length===0?-1:te(e,r,t,o,i);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):te(e,[r],t,o,i);throw new TypeError("val must be string, number or Buffer")}function te(e,r,t,o,i){var p=1,c=e.length,A=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,c/=2,A/=2,t/=2}function S(le,fe){return p===1?le[fe]:le.readUInt16BE(fe*p)}var T;if(i){var C=-1;for(T=t;T<c;T++)if(S(e,T)===S(r,C===-1?0:T-C)){if(C===-1&&(C=T),T-C+1===A)return C*p}else C!==-1&&(T-=T-C),C=-1}else for(t+A>c&&(t=c-A),T=t;T>=0;T--){for(var R=!0,$=0;$<A;$++)if(S(e,T+$)!==S(r,$)){R=!1;break}if(R)return T}return-1}n.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},n.prototype.indexOf=function(e,r,t){return M(this,e,r,t,!0)},n.prototype.lastIndexOf=function(e,r,t){return M(this,e,r,t,!1)};function we(e,r,t,o){t=Number(t)||0;var i=e.length-t;o?(o=Number(o),o>i&&(o=i)):o=i;var p=r.length;o>p/2&&(o=p/2);for(var c=0;c<o;++c){var A=parseInt(r.substr(c*2,2),16);if(K(A))return c;e[t+c]=A}return c}function qe(e,r,t,o){return V(X(r,e.length-t),e,t,o)}function Ee(e,r,t,o){return V(Oe(r),e,t,o)}function xe(e,r,t,o){return V(pe(r),e,t,o)}function Ae(e,r,t,o){return V(Me(r,e.length-t),e,t,o)}n.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-r;if((t===void 0||t>i)&&(t=i),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return we(this,e,r,t);case"utf8":case"utf-8":return qe(this,e,r,t);case"ascii":case"latin1":case"binary":return Ee(this,e,r,t);case"base64":return xe(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Be(e,r,t){return r===0&&t===e.length?f.fromByteArray(e):f.fromByteArray(e.slice(r,t))}function oe(e,r,t){t=Math.min(e.length,t);for(var o=[],i=r;i<t;){var p=e[i],c=null,A=p>239?4:p>223?3:p>191?2:1;if(i+A<=t){var S,T,C,R;switch(A){case 1:p<128&&(c=p);break;case 2:S=e[i+1],(S&192)===128&&(R=(p&31)<<6|S&63,R>127&&(c=R));break;case 3:S=e[i+1],T=e[i+2],(S&192)===128&&(T&192)===128&&(R=(p&15)<<12|(S&63)<<6|T&63,R>2047&&(R<55296||R>57343)&&(c=R));break;case 4:S=e[i+1],T=e[i+2],C=e[i+3],(S&192)===128&&(T&192)===128&&(C&192)===128&&(R=(p&15)<<18|(S&63)<<12|(T&63)<<6|C&63,R>65535&&R<1114112&&(c=R))}}c===null?(c=65533,A=1):c>65535&&(c-=65536,o.push(c>>>10&1023|55296),c=56320|c&1023),o.push(c),i+=A}return Ue(o)}var ne=4096;function Ue(e){var r=e.length;if(r<=ne)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=ne));return t}function Te(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]&127);return o}function Ie(e,r,t){var o="";t=Math.min(e.length,t);for(var i=r;i<t;++i)o+=String.fromCharCode(e[i]);return o}function Ce(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var i="",p=r;p<t;++p)i+=Re[e[p]];return i}function ke(e,r,t){for(var o=e.slice(r,t),i="",p=0;p<o.length-1;p+=2)i+=String.fromCharCode(o[p]+o[p+1]*256);return i}n.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,n.prototype),o};function L(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||L(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return o},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||L(e,r,this.length);for(var o=this[e+--r],i=1;r>0&&(i*=256);)o+=this[e+--r]*i;return o},n.prototype.readUint8=n.prototype.readUInt8=function(e,r){return e=e>>>0,r||L(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||L(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||L(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||L(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||L(e,r,this.length);for(var o=this[e],i=1,p=0;++p<r&&(i*=256);)o+=this[e+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},n.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||L(e,r,this.length);for(var o=r,i=1,p=this[e+--o];o>0&&(i*=256);)p+=this[e+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*r)),p},n.prototype.readInt8=function(e,r){return e=e>>>0,r||L(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,r){e=e>>>0,r||L(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},n.prototype.readInt16BE=function(e,r){e=e>>>0,r||L(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},n.prototype.readInt32LE=function(e,r){return e=e>>>0,r||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,r){return e=e>>>0,r||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,r){return e=e>>>0,r||L(e,4,this.length),l.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,r){return e=e>>>0,r||L(e,4,this.length),l.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||L(e,8,this.length),l.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||L(e,8,this.length),l.read(this,e,!1,52,8)};function P(e,r,t,o,i,p){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;P(this,e,r,t,i,0)}var p=1,c=0;for(this[r]=e&255;++c<t&&(p*=256);)this[r+c]=e/p&255;return r+t},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var i=Math.pow(2,8*t)-1;P(this,e,r,t,i,0)}var p=t-1,c=1;for(this[r+p]=e&255;--p>=0&&(c*=256);)this[r+p]=e/c&255;return r+t},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,1,255,0),this[r]=e&255,r+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},n.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);P(this,e,r,t,i-1,-i)}var p=0,c=1,A=0;for(this[r]=e&255;++p<t&&(c*=256);)e<0&&A===0&&this[r+p-1]!==0&&(A=1),this[r+p]=(e/c>>0)-A&255;return r+t},n.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var i=Math.pow(2,8*t-1);P(this,e,r,t,i-1,-i)}var p=t-1,c=1,A=0;for(this[r+p]=e&255;--p>=0&&(c*=256);)e<0&&A===0&&this[r+p+1]!==0&&(A=1),this[r+p]=(e/c>>0)-A&255;return r+t},n.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},n.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},n.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},n.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},n.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ae(e,r,t,o,i,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ie(e,r,t,o,i){return r=+r,t=t>>>0,i||ae(e,r,t,4,34028234663852886e22,-34028234663852886e22),l.write(e,r,t,o,23,4),t+4}n.prototype.writeFloatLE=function(e,r,t){return ie(this,e,r,!0,t)},n.prototype.writeFloatBE=function(e,r,t){return ie(this,e,r,!1,t)};function ue(e,r,t,o,i){return r=+r,t=t>>>0,i||ae(e,r,t,8,17976931348623157e292,-17976931348623157e292),l.write(e,r,t,o,52,8),t+8}n.prototype.writeDoubleLE=function(e,r,t){return ue(this,e,r,!0,t)},n.prototype.writeDoubleBE=function(e,r,t){return ue(this,e,r,!1,t)},n.prototype.copy=function(e,r,t,o){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var i=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),i},n.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var i=e.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(e=i)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var c=n.isBuffer(e)?e:n.from(e,o),A=c.length;if(A===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=c[p%A]}return this};var Le=/[^+/0-9A-Za-z-_]/g;function Se(e){if(e=e.split("=")[0],e=e.trim().replace(Le,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function X(e,r){r=r||1/0;for(var t,o=e.length,i=null,p=[],c=0;c<o;++c){if(t=e.charCodeAt(c),t>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(c+1===o){(r-=3)>-1&&p.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(r-=3)>-1&&p.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function Oe(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Me(e,r){for(var t,o,i,p=[],c=0;c<e.length&&!((r-=2)<0);++c)t=e.charCodeAt(c),o=t>>8,i=t%256,p.push(i),p.push(o);return p}function pe(e){return f.toByteArray(Se(e))}function V(e,r,t,o){for(var i=0;i<o&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function z(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function K(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,i=0;i<16;++i)r[o+i]=e[t]+e[i];return r}()}),Qe=Z((h,f)=>{u();var l=f.exports={},v,g;function q(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?v=setTimeout:v=q}catch(m){v=q}try{typeof clearTimeout=="function"?g=clearTimeout:g=y}catch(m){g=y}})();function n(m){if(v===setTimeout)return setTimeout(m,0);if((v===q||!v)&&setTimeout)return v=setTimeout,setTimeout(m,0);try{return v(m,0)}catch(U){try{return v.call(null,m,0)}catch(E){return v.call(this,m,0)}}}function k(m){if(g===clearTimeout)return clearTimeout(m);if((g===y||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(m);try{return g(m)}catch(U){try{return g.call(null,m)}catch(E){return g.call(this,m)}}}var x=[],I=!1,w,B=-1;function O(){!I||!w||(I=!1,w.length?x=w.concat(x):B=-1,x.length&&s())}function s(){if(!I){var m=n(O);I=!0;for(var U=x.length;U;){for(w=x,x=[];++B<U;)w&&w[B].run();B=-1,U=x.length}w=null,I=!1,k(m)}}l.nextTick=function(m){var U=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)U[E-1]=arguments[E];x.push(new b(m,U)),x.length===1&&!I&&n(s)};function b(m,U){this.fun=m,this.array=U}b.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={};function _(){}l.on=_,l.addListener=_,l.once=_,l.off=_,l.removeListener=_,l.removeAllListeners=_,l.emit=_,l.prependListener=_,l.prependOnceListener=_,l.listeners=function(m){return[]},l.binding=function(m){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(m){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}}),er,rr,tr,u=Ye(()=>{er=d(Ke()),rr=d(Qe()),tr=function(h){function f(){var v=this||self;return delete h.prototype.__magic__,v}if(typeof globalThis=="object")return globalThis;if(this)return f();h.defineProperty(h.prototype,"__magic__",{configurable:!0,get:f});var l=__magic__;return l}(Object)}),ge={};He(ge,{SFTAmount:()=>xr});ye.exports=Je(ge);u();var D=d(a("react")),or=d(a("bignumber.js")),Q=d(a("classnames"));u();var nr=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(nr));var G={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};u();u();var Ar=d(a("react")),Br=a("@terradharitri/sdk-dapp/constants/index");u();u();u();var Ur=d(a("axios"));u();u();u();var Tr=a("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");u();var Ir=a("@terradharitri/sdk-dapp/constants/index");u();u();u();u();u();u();var Cr=d(a("axios"));u();u();var kr=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Lr=a("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Sr=d(a("axios")),Or=d(a("lodash/uniqBy"));u();var Mr=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),Rr=d(a("axios"));u();u();u();var Nr=a("@terradharitri/sdk-dapp/types/tokens.types");u();u();u();u();var Pr=a("@terradharitri/sdk-dapp/apiCalls/endpoints"),jr=d(a("axios"));u();u();var Dr=d(a("axios"));u();var ar=d(a("react")),zr=(0,ar.createContext)({});u();u();var ir=d(a("react")),Fr=a("@terradharitri/sdk-dapp/constants/index"),Gr=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Wr=d(a("bignumber.js")),Vr=a("formik");u();u();u();var $r=a("bech32");u();u();u();var se=(h,f)=>typeof f=="boolean"?f:Array.isArray(f)&&f.includes(h);u();u();u();var Yr=a("@terradharitri/sdk-dapp/constants"),Hr=a("@terradharitri/sdk-dapp/utils/account/getAccount");u();u();var Jr=a("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");u();var Zr=a("@terradharitri/sdk-dapp/utils/buildUrlParams");u();var Xr=d(a("anchorme"));u();u();var Kr=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ur=a("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Qr=a("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),et=a("@terradharitri/sdk-dapp/utils/operations/parseAmount");u();u();var pr=d(a("react")),rt=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),tt=a("formik");u();u();var ot=a("@terradharitri/sdk-dapp/constants/index"),nt=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),at=d(a("bignumber.js"));u();u();var it=a("@terradharitri/sdk-dapp/constants/index");u();var ut=a("@terradharitri/sdk-dapp/constants/index");u();var pt=a("@terradharitri/sdk-dapp/constants/index"),lt=d(a("bignumber.js"));u();var ft=a("@terradharitri/sdk-dapp/constants/index");u();var st=a("@terradharitri/sdk-dapp/constants/index");u();u();var ct=a("@terradharitri/sdk-core"),dt=a("@terradharitri/sdk-dapp/constants/index"),ht=d(a("bignumber.js"));u();u();var mt=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");u();var bt=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");u();var gt=d(a("bignumber.js"));u();var _t=a("@terradharitri/sdk-dapp/constants/index"),yt=a("@terradharitri/sdk-dapp/utils/smartContracts"),vt=a("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),wt=d(a("bignumber.js"));u();var qt=d(a("bignumber.js"));u();var ee=a("@terradharitri/sdk-dapp/constants/index"),lr=d(a("bignumber.js")),ce,de,he,fr=(0,ur.formatAmount)({input:String((ce=ee.GAS_PRICE)!=null?ce:1e9),decimals:(de=ee.DECIMALS)!=null?de:18,showLastNonZeroDecimal:!0,digits:(he=ee.DIGITS)!=null?he:4}),Et=new lr.default(fr).times(10).toString(10);u();var xt=a("@terradharitri/sdk-dapp/constants/index"),At=d(a("bignumber.js"));u();var Bt=d(a("bignumber.js"));u();u();var Ut=a("yup");u();var me=a("@terradharitri/sdk-dapp/constants/ledger.constants"),sr=d(a("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),re=a("yup"),cr=(0,re.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(h){let{ledger:f}=this.parent;return!(f&&h&&h.length&&!f.ledgerDataActive)}),dr=(0,re.string)().test({name:"hashSign",test:function(h){let{ledger:f,isGuarded:l}=this.parent;if(f){let{ledgerWithHashSign:v,ledgerWithGuardians:g}=(0,sr.default)(f.version);if(h&&h.length>300&&!v)return this.createError({message:`Data too long. You need at least DharitrI app version ${me.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(l&&!g)return this.createError({message:`You need at least DharitrI app version ${me.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),hr=[cr,dr],Tt=hr.reduce((h,f)=>h.concat(f),(0,re.string)());u();var It=a("@terradharitri/sdk-dapp/constants/index"),Ct=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),kt=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Lt=a("yup");u();var St=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ot=d(a("bignumber.js")),Mt=a("yup");u();var Rt=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Nt=d(a("bignumber.js")),Pt=a("yup");u();var jt=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Dt=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zt=d(a("bignumber.js")),Ft=a("yup");u();var Gt=d(a("bignumber.js")),Wt=a("yup");u();var Vt=a("@terradharitri/sdk-dapp/constants/index"),$t=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Yt=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ht=d(a("bignumber.js")),Jt=a("yup");u();var Zt=a("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Xt=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Kt=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Qt=d(a("bignumber.js")),eo=a("yup");u();var ro=d(a("bignumber.js")),to=a("yup");u();var oo=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),no=a("yup");u();var ao=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),io=a("yup");u();u();var uo=(0,pr.createContext)({});u();u();var mr=d(a("react")),po=a("formik"),lo=d(a("lodash/uniqBy"));u();u();var br=d(a("react")),fo=(0,br.createContext)({});u();u();var so=a("react"),co=a("@terradharitri/sdk-dapp/constants/index"),ho=a("@terradharitri/sdk-dapp/types/enums.types");u();var mo=(0,mr.createContext)({});u();u();var bo=a("@terradharitri/sdk-dapp/constants/index"),go=a("formik");u();u();var gr=d(a("react")),_o=a("@terradharitri/sdk-dapp/constants/index"),yo=a("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),vo=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),wo=a("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),qo=d(a("bignumber.js")),Eo=a("formik");u();u();u();u();var xo=d(a("bignumber.js"));u();var Ao=a("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Bo=d(a("bignumber.js"));u();u();var Uo=a("react"),To=a("@terradharitri/sdk-dapp/constants/index"),Io=a("@terradharitri/sdk-dapp/utils/smartContracts"),Co=d(a("bignumber.js")),ko=a("formik");u();var Lo=a("react");u();u();var So=a("@terradharitri/sdk-dapp/constants/index"),Oo=d(a("bignumber.js")),Mo=(0,gr.createContext)({}),Ro=(0,ir.createContext)({});u();u();var _r=d(a("react")),No=a("formik"),Po=(0,_r.createContext)({});u();u();var yr=d(a("react")),jo=a("formik");u();u();u();var Do=a("react"),zo=a("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Fo=d(a("lodash/uniqBy"));u();u();var Go=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Wo=a("@terradharitri/sdk-dapp/utils");u();var Vo=a("react");u();var $o=a("react"),Yo=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ho=(0,yr.createContext)({});u();u();var vr=d(a("react")),Jo=a("formik");u();u();u();u();u();var Zo=a("react"),Xo=a("@terradharitri/sdk-dapp/utils");u();var Ko=a("react"),Qo=a("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");u();u();var en=a("@terradharitri/sdk-dapp/utils/account/addressIsValid"),rn=d(a("axios"));u();var tn=d(a("axios")),on=(0,vr.createContext)({});u();var _e=d(a("react")),wr=(0,_e.createContext)({});function qr(){return(0,_e.useContext)(wr)}u();var Er=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Er));var F={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"},xr=h=>{let{className:f}=h,{formInfo:{readonly:l},amountInfo:v,tokensInfo:g}=qr(),{amount:q,error:y,onFocus:n,onBlur:k,onChange:x,isInvalid:I,onMaxClicked:w,maxAmountAvailable:B,isMaxButtonVisible:O}=v,{nft:s}=g,b=s!=null&&s.balance?new or.default(s.balance).isGreaterThan(0):!1,_=m=>{m.preventDefault(),w()};return D.default.createElement("div",{className:(0,Q.default)(F.amount,f)},D.default.createElement("div",{className:F.label},D.default.createElement("label",{htmlFor:"amount",className:G.label},"Amount"),b&&s&&D.default.createElement("div",{"data-value":`${B} ${s.identifier}`,className:(0,Q.default)(F.balance,f)},D.default.createElement("span",null,"Available:")," ",D.default.createElement("span",{"data-testid":`available-${s.identifier}`,className:F.available},D.default.createElement("span",{className:F.amount},B)," ",s.ticker))),D.default.createElement("div",{className:F.wrapper},D.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:q,disabled:se("amount",l),onFocus:n,onBlur:k,onChange:x,autoComplete:"off",className:(0,Q.default)(G.input,{[G.invalid]:I,[G.disabled]:se("amount",l)})}),O&&D.default.createElement("a",{href:"/","data-testid":"maxBtn",className:F.max,onClick:_,onMouseDown:m=>{m.preventDefault()}},"Max")),I&&D.default.createElement("div",{className:G.error,"data-testid":"amountError"},y))};});var W={};H();Y(W,Pe(ve()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
