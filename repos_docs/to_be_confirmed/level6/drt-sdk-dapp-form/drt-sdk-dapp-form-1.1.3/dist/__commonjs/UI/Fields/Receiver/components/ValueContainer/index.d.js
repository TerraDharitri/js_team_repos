"use strict";import{a as c,b as Fe,d as H,e as He,f as $}from"../../../../../../__chunks__/chunk-JH2LJGTQ.js";var Ie=Fe((fn,Ue)=>{"use strict";$();var Ke=Object.create,G=Object.defineProperty,Qe=Object.defineProperties,Xe=Object.getOwnPropertyDescriptor,eo=Object.getOwnPropertyDescriptors,oo=Object.getOwnPropertyNames,ie=Object.getOwnPropertySymbols,ro=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty,to=Object.prototype.propertyIsEnumerable,ae=(a,i,_)=>i in a?G(a,i,{enumerable:!0,configurable:!0,writable:!0,value:_}):a[i]=_,ge=(a,i)=>{for(var _ in i||(i={}))he.call(i,_)&&ae(a,_,i[_]);if(ie)for(var _ of ie(i))to.call(i,_)&&ae(a,_,i[_]);return a},no=(a,i)=>Qe(a,eo(i)),be=(a,i)=>()=>(a&&(i=a(a=0)),i),J=(a,i)=>()=>(i||a((i={exports:{}}).exports,i),i.exports),we=(a,i)=>{for(var _ in i)G(a,_,{get:i[_],enumerable:!0})},xe=(a,i,_,w)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of oo(i))!he.call(a,f)&&f!==_&&G(a,f,{get:()=>i[f],enumerable:!(w=Xe(i,f))||w.enumerable});return a},m=(a,i,_)=>(_=a!=null?Ke(ro(a)):{},xe(i||!a||!a.__esModule?G(_,"default",{value:a,enumerable:!0}):_,a)),qe=a=>xe(G({},"__esModule",{value:!0}),a),co=J(a=>{"use strict";p(),a.byteLength=I,a.toByteArray=T,a.fromByteArray=R;var i=[],_=[],w=typeof Uint8Array!="undefined"?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(b=0,g=f.length;b<g;++b)i[b]=f[b],_[f.charCodeAt(b)]=b;var b,g;_["-".charCodeAt(0)]=62,_["_".charCodeAt(0)]=63;function n(u){var y=u.length;if(y%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var h=u.indexOf("=");h===-1&&(h=y);var v=h===y?0:4-h%4;return[h,v]}function I(u){var y=n(u),h=y[0],v=y[1];return(h+v)*3/4-v}function x(u,y,h){return(y+h)*3/4-h}function T(u){var y,h=n(u),v=h[0],S=h[1],E=new w(x(u,v,S)),N=0,j=S>0?v-4:v,k;for(k=0;k<j;k+=4)y=_[u.charCodeAt(k)]<<18|_[u.charCodeAt(k+1)]<<12|_[u.charCodeAt(k+2)]<<6|_[u.charCodeAt(k+3)],E[N++]=y>>16&255,E[N++]=y>>8&255,E[N++]=y&255;return S===2&&(y=_[u.charCodeAt(k)]<<2|_[u.charCodeAt(k+1)]>>4,E[N++]=y&255),S===1&&(y=_[u.charCodeAt(k)]<<10|_[u.charCodeAt(k+1)]<<4|_[u.charCodeAt(k+2)]>>2,E[N++]=y>>8&255,E[N++]=y&255),E}function q(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function U(u,y,h){for(var v,S=[],E=y;E<h;E+=3)v=(u[E]<<16&16711680)+(u[E+1]<<8&65280)+(u[E+2]&255),S.push(q(v));return S.join("")}function R(u){for(var y,h=u.length,v=h%3,S=[],E=16383,N=0,j=h-v;N<j;N+=E)S.push(U(u,N,N+E>j?j:N+E));return v===1?(y=u[h-1],S.push(i[y>>2]+i[y<<4&63]+"==")):v===2&&(y=(u[h-2]<<8)+u[h-1],S.push(i[y>>10]+i[y>>4&63]+i[y<<2&63]+"=")),S.join("")}}),po=J(a=>{p(),a.read=function(i,_,w,f,b){var g,n,I=b*8-f-1,x=(1<<I)-1,T=x>>1,q=-7,U=w?b-1:0,R=w?-1:1,u=i[_+U];for(U+=R,g=u&(1<<-q)-1,u>>=-q,q+=I;q>0;g=g*256+i[_+U],U+=R,q-=8);for(n=g&(1<<-q)-1,g>>=-q,q+=f;q>0;n=n*256+i[_+U],U+=R,q-=8);if(g===0)g=1-T;else{if(g===x)return n?NaN:(u?-1:1)*(1/0);n=n+Math.pow(2,f),g=g-T}return(u?-1:1)*n*Math.pow(2,g-f)},a.write=function(i,_,w,f,b,g){var n,I,x,T=g*8-b-1,q=(1<<T)-1,U=q>>1,R=b===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=f?0:g-1,y=f?1:-1,h=_<0||_===0&&1/_<0?1:0;for(_=Math.abs(_),isNaN(_)||_===1/0?(I=isNaN(_)?1:0,n=q):(n=Math.floor(Math.log(_)/Math.LN2),_*(x=Math.pow(2,-n))<1&&(n--,x*=2),n+U>=1?_+=R/x:_+=R*Math.pow(2,1-U),_*x>=2&&(n++,x/=2),n+U>=q?(I=0,n=q):n+U>=1?(I=(_*x-1)*Math.pow(2,b),n=n+U):(I=_*Math.pow(2,U-1)*Math.pow(2,b),n=0));b>=8;i[w+u]=I&255,u+=y,I/=256,b-=8);for(n=n<<b|I,T+=b;T>0;i[w+u]=n&255,u+=y,n/=256,T-=8);i[w+u-y]|=h*128}}),lo=J(a=>{"use strict";p();var i=co(),_=po(),w=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;a.Buffer=n,a.SlowBuffer=S,a.INSPECT_MAX_BYTES=50;var f=2147483647;a.kMaxLength=f,n.TYPED_ARRAY_SUPPORT=b(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function b(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function g(e){if(e>f)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,r){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return q(e)}return I(e,o,r)}n.poolSize=8192;function I(e,o,r){if(typeof e=="string")return U(e,o);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(z(e,ArrayBuffer)||e&&z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(e,SharedArrayBuffer)||e&&z(e.buffer,SharedArrayBuffer)))return y(e,o,r);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=e.valueOf&&e.valueOf();if(t!=null&&t!==e)return n.from(t,o,r);var l=h(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,r){return I(e,o,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function x(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function T(e,o,r){return x(e),e<=0?g(e):o!==void 0?typeof r=="string"?g(e).fill(o,r):g(e).fill(o):g(e)}n.alloc=function(e,o,r){return T(e,o,r)};function q(e){return x(e),g(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return q(e)},n.allocUnsafeSlow=function(e){return q(e)};function U(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var r=E(e,o)|0,t=g(r),l=t.write(e,o);return l!==r&&(t=t.slice(0,l)),t}function R(e){for(var o=e.length<0?0:v(e.length)|0,r=g(o),t=0;t<o;t+=1)r[t]=e[t]&255;return r}function u(e){if(z(e,Uint8Array)){var o=new Uint8Array(e);return y(o.buffer,o.byteOffset,o.byteLength)}return R(e)}function y(e,o,r){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(r||0))throw new RangeError('"length" is outside of buffer bounds');var t;return o===void 0&&r===void 0?t=new Uint8Array(e):r===void 0?t=new Uint8Array(e,o):t=new Uint8Array(e,o,r),Object.setPrototypeOf(t,n.prototype),t}function h(e){if(n.isBuffer(e)){var o=v(e.length)|0,r=g(o);return r.length===0||e.copy(r,0,0,o),r}if(e.length!==void 0)return typeof e.length!="number"||Q(e.length)?g(0):R(e);if(e.type==="Buffer"&&Array.isArray(e.data))return R(e.data)}function v(e){if(e>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if(z(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),z(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var r=e.length,t=o.length,l=0,s=Math.min(r,t);l<s;++l)if(e[l]!==o[l]){r=e[l],t=o[l];break}return r<t?-1:t<r?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var r;if(o===void 0)for(o=0,r=0;r<e.length;++r)o+=e[r].length;var t=n.allocUnsafe(o),l=0;for(r=0;r<e.length;++r){var s=e[r];if(z(s,Uint8Array))l+s.length>t.length?n.from(s).copy(t,l):Uint8Array.prototype.set.call(t,s,l);else if(n.isBuffer(s))s.copy(t,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=s.length}return t};function E(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||z(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&r===0)return 0;for(var l=!1;;)switch(o){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return K(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return le(e).length;default:if(l)return t?-1:K(e).length;o=(""+o).toLowerCase(),l=!0}}n.byteLength=E;function N(e,o,r){var t=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,o>>>=0,r<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return je(this,o,r);case"utf8":case"utf-8":return re(this,o,r);case"ascii":return Ne(this,o,r);case"latin1":case"binary":return Pe(this,o,r);case"base64":return Me(this,o,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ze(this,o,r);default:if(t)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),t=!0}}n.prototype._isBuffer=!0;function j(e,o,r){var t=e[o];e[o]=e[r],e[r]=t}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)j(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)j(this,o,o+3),j(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)j(this,o,o+7),j(this,o+1,o+6),j(this,o+2,o+5),j(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?re(this,0,e):N.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=a.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},w&&(n.prototype[w]=n.prototype.inspect),n.prototype.compare=function(e,o,r,t,l){if(z(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),r===void 0&&(r=e?e.length:0),t===void 0&&(t=0),l===void 0&&(l=this.length),o<0||r>e.length||t<0||l>this.length)throw new RangeError("out of range index");if(t>=l&&o>=r)return 0;if(t>=l)return-1;if(o>=r)return 1;if(o>>>=0,r>>>=0,t>>>=0,l>>>=0,this===e)return 0;for(var s=l-t,d=r-o,A=Math.min(s,d),C=this.slice(t,l),B=e.slice(o,r),L=0;L<A;++L)if(C[L]!==B[L]){s=C[L],d=B[L];break}return s<d?-1:d<s?1:0};function k(e,o,r,t,l){if(e.length===0)return-1;if(typeof r=="string"?(t=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Q(r)&&(r=l?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(l)return-1;r=e.length-1}else if(r<0)if(l)r=0;else return-1;if(typeof o=="string"&&(o=n.from(o,t)),n.isBuffer(o))return o.length===0?-1:oe(e,o,r,t,l);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,o,r):Uint8Array.prototype.lastIndexOf.call(e,o,r):oe(e,[o],r,t,l);throw new TypeError("val must be string, number or Buffer")}function oe(e,o,r,t,l){var s=1,d=e.length,A=o.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,d/=2,A/=2,r/=2}function C(se,_e){return s===1?se[_e]:se.readUInt16BE(_e*s)}var B;if(l){var L=-1;for(B=r;B<d;B++)if(C(e,B)===C(o,L===-1?0:B-L)){if(L===-1&&(L=B),B-L+1===A)return L*s}else L!==-1&&(B-=B-L),L=-1}else for(r+A>d&&(r=d-A),B=r;B>=0;B--){for(var M=!0,F=0;F<A;F++)if(C(e,B+F)!==C(o,F)){M=!1;break}if(M)return B}return-1}n.prototype.includes=function(e,o,r){return this.indexOf(e,o,r)!==-1},n.prototype.indexOf=function(e,o,r){return k(this,e,o,r,!0)},n.prototype.lastIndexOf=function(e,o,r){return k(this,e,o,r,!1)};function Te(e,o,r,t){r=Number(r)||0;var l=e.length-r;t?(t=Number(t),t>l&&(t=l)):t=l;var s=o.length;t>s/2&&(t=s/2);for(var d=0;d<t;++d){var A=parseInt(o.substr(d*2,2),16);if(Q(A))return d;e[r+d]=A}return d}function Le(e,o,r,t){return W(K(o,e.length-r),e,r,t)}function Oe(e,o,r,t){return W(Ge(o),e,r,t)}function Ce(e,o,r,t){return W(le(o),e,r,t)}function ke(e,o,r,t){return W(Ve(o,e.length-r),e,r,t)}n.prototype.write=function(e,o,r,t){if(o===void 0)t="utf8",r=this.length,o=0;else if(r===void 0&&typeof o=="string")t=o,r=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(r)?(r=r>>>0,t===void 0&&(t="utf8")):(t=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-o;if((r===void 0||r>l)&&(r=l),e.length>0&&(r<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");t||(t="utf8");for(var s=!1;;)switch(t){case"hex":return Te(this,e,o,r);case"utf8":case"utf-8":return Le(this,e,o,r);case"ascii":case"latin1":case"binary":return Oe(this,e,o,r);case"base64":return Ce(this,e,o,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,e,o,r);default:if(s)throw new TypeError("Unknown encoding: "+t);t=(""+t).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Me(e,o,r){return o===0&&r===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,r))}function re(e,o,r){r=Math.min(e.length,r);for(var t=[],l=o;l<r;){var s=e[l],d=null,A=s>239?4:s>223?3:s>191?2:1;if(l+A<=r){var C,B,L,M;switch(A){case 1:s<128&&(d=s);break;case 2:C=e[l+1],(C&192)===128&&(M=(s&31)<<6|C&63,M>127&&(d=M));break;case 3:C=e[l+1],B=e[l+2],(C&192)===128&&(B&192)===128&&(M=(s&15)<<12|(C&63)<<6|B&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:C=e[l+1],B=e[l+2],L=e[l+3],(C&192)===128&&(B&192)===128&&(L&192)===128&&(M=(s&15)<<18|(C&63)<<12|(B&63)<<6|L&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,A=1):d>65535&&(d-=65536,t.push(d>>>10&1023|55296),d=56320|d&1023),t.push(d),l+=A}return Re(t)}var te=4096;function Re(e){var o=e.length;if(o<=te)return String.fromCharCode.apply(String,e);for(var r="",t=0;t<o;)r+=String.fromCharCode.apply(String,e.slice(t,t+=te));return r}function Ne(e,o,r){var t="";r=Math.min(e.length,r);for(var l=o;l<r;++l)t+=String.fromCharCode(e[l]&127);return t}function Pe(e,o,r){var t="";r=Math.min(e.length,r);for(var l=o;l<r;++l)t+=String.fromCharCode(e[l]);return t}function je(e,o,r){var t=e.length;(!o||o<0)&&(o=0),(!r||r<0||r>t)&&(r=t);for(var l="",s=o;s<r;++s)l+=We[e[s]];return l}function ze(e,o,r){for(var t=e.slice(o,r),l="",s=0;s<t.length-1;s+=2)l+=String.fromCharCode(t[s]+t[s+1]*256);return l}n.prototype.slice=function(e,o){var r=this.length;e=~~e,o=o===void 0?r:~~o,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),o<e&&(o=e);var t=this.subarray(e,o);return Object.setPrototypeOf(t,n.prototype),t};function O(e,o,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,r){e=e>>>0,o=o>>>0,r||O(e,o,this.length);for(var t=this[e],l=1,s=0;++s<o&&(l*=256);)t+=this[e+s]*l;return t},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,r){e=e>>>0,o=o>>>0,r||O(e,o,this.length);for(var t=this[e+--o],l=1;o>0&&(l*=256);)t+=this[e+--o]*l;return t},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||O(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||O(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||O(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||O(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,r){e=e>>>0,o=o>>>0,r||O(e,o,this.length);for(var t=this[e],l=1,s=0;++s<o&&(l*=256);)t+=this[e+s]*l;return l*=128,t>=l&&(t-=Math.pow(2,8*o)),t},n.prototype.readIntBE=function(e,o,r){e=e>>>0,o=o>>>0,r||O(e,o,this.length);for(var t=o,l=1,s=this[e+--t];t>0&&(l*=256);)s+=this[e+--t]*l;return l*=128,s>=l&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||O(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||O(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||O(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||O(e,4,this.length),_.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||O(e,4,this.length),_.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||O(e,8,this.length),_.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||O(e,8,this.length),_.read(this,e,!1,52,8)};function P(e,o,r,t,l,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>l||o<s)throw new RangeError('"value" argument is out of bounds');if(r+t>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,r,t){if(e=+e,o=o>>>0,r=r>>>0,!t){var l=Math.pow(2,8*r)-1;P(this,e,o,r,l,0)}var s=1,d=0;for(this[o]=e&255;++d<r&&(s*=256);)this[o+d]=e/s&255;return o+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,r,t){if(e=+e,o=o>>>0,r=r>>>0,!t){var l=Math.pow(2,8*r)-1;P(this,e,o,r,l,0)}var s=r-1,d=1;for(this[o+s]=e&255;--s>=0&&(d*=256);)this[o+s]=e/d&255;return o+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,r,t){if(e=+e,o=o>>>0,!t){var l=Math.pow(2,8*r-1);P(this,e,o,r,l-1,-l)}var s=0,d=1,A=0;for(this[o]=e&255;++s<r&&(d*=256);)e<0&&A===0&&this[o+s-1]!==0&&(A=1),this[o+s]=(e/d>>0)-A&255;return o+r},n.prototype.writeIntBE=function(e,o,r,t){if(e=+e,o=o>>>0,!t){var l=Math.pow(2,8*r-1);P(this,e,o,r,l-1,-l)}var s=r-1,d=1,A=0;for(this[o+s]=e&255;--s>=0&&(d*=256);)e<0&&A===0&&this[o+s+1]!==0&&(A=1),this[o+s]=(e/d>>0)-A&255;return o+r},n.prototype.writeInt8=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ne(e,o,r,t,l,s){if(r+t>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function ce(e,o,r,t,l){return o=+o,r=r>>>0,l||ne(e,o,r,4,34028234663852886e22,-34028234663852886e22),_.write(e,o,r,t,23,4),r+4}n.prototype.writeFloatLE=function(e,o,r){return ce(this,e,o,!0,r)},n.prototype.writeFloatBE=function(e,o,r){return ce(this,e,o,!1,r)};function pe(e,o,r,t,l){return o=+o,r=r>>>0,l||ne(e,o,r,8,17976931348623157e292,-17976931348623157e292),_.write(e,o,r,t,52,8),r+8}n.prototype.writeDoubleLE=function(e,o,r){return pe(this,e,o,!0,r)},n.prototype.writeDoubleBE=function(e,o,r){return pe(this,e,o,!1,r)},n.prototype.copy=function(e,o,r,t){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!t&&t!==0&&(t=this.length),o>=e.length&&(o=e.length),o||(o=0),t>0&&t<r&&(t=r),t===r||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("sourceEnd out of bounds");t>this.length&&(t=this.length),e.length-o<t-r&&(t=e.length-o+r);var l=t-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,r,t):Uint8Array.prototype.set.call(e,this.subarray(r,t),o),l},n.prototype.fill=function(e,o,r,t){if(typeof e=="string"){if(typeof o=="string"?(t=o,o=0,r=this.length):typeof r=="string"&&(t=r,r=this.length),t!==void 0&&typeof t!="string")throw new TypeError("encoding must be a string");if(typeof t=="string"&&!n.isEncoding(t))throw new TypeError("Unknown encoding: "+t);if(e.length===1){var l=e.charCodeAt(0);(t==="utf8"&&l<128||t==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<r)throw new RangeError("Out of range index");if(r<=o)return this;o=o>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<r;++s)this[s]=e;else{var d=n.isBuffer(e)?e:n.from(e,t),A=d.length;if(A===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-o;++s)this[s+o]=d[s%A]}return this};var De=/[^+/0-9A-Za-z-_]/g;function Ye(e){if(e=e.split("=")[0],e=e.trim().replace(De,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function K(e,o){o=o||1/0;for(var r,t=e.length,l=null,s=[],d=0;d<t;++d){if(r=e.charCodeAt(d),r>55295&&r<57344){if(!l){if(r>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(d+1===t){(o-=3)>-1&&s.push(239,191,189);continue}l=r;continue}if(r<56320){(o-=3)>-1&&s.push(239,191,189),l=r;continue}r=(l-55296<<10|r-56320)+65536}else l&&(o-=3)>-1&&s.push(239,191,189);if(l=null,r<128){if((o-=1)<0)break;s.push(r)}else if(r<2048){if((o-=2)<0)break;s.push(r>>6|192,r&63|128)}else if(r<65536){if((o-=3)<0)break;s.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((o-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return s}function Ge(e){for(var o=[],r=0;r<e.length;++r)o.push(e.charCodeAt(r)&255);return o}function Ve(e,o){for(var r,t,l,s=[],d=0;d<e.length&&!((o-=2)<0);++d)r=e.charCodeAt(d),t=r>>8,l=r%256,s.push(l),s.push(t);return s}function le(e){return i.toByteArray(Ye(e))}function W(e,o,r,t){for(var l=0;l<t&&!(l+r>=o.length||l>=e.length);++l)o[l+r]=e[l];return l}function z(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function Q(e){return e!==e}var We=function(){for(var e="0123456789abcdef",o=new Array(256),r=0;r<16;++r)for(var t=r*16,l=0;l<16;++l)o[t+l]=e[r]+e[l];return o}()}),so=J((a,i)=>{p();var _=i.exports={},w,f;function b(){throw new Error("setTimeout has not been defined")}function g(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?w=setTimeout:w=b}catch(v){w=b}try{typeof clearTimeout=="function"?f=clearTimeout:f=g}catch(v){f=g}})();function n(v){if(w===setTimeout)return setTimeout(v,0);if((w===b||!w)&&setTimeout)return w=setTimeout,setTimeout(v,0);try{return w(v,0)}catch(S){try{return w.call(null,v,0)}catch(E){return w.call(this,v,0)}}}function I(v){if(f===clearTimeout)return clearTimeout(v);if((f===g||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(v);try{return f(v)}catch(S){try{return f.call(null,v)}catch(E){return f.call(this,v)}}}var x=[],T=!1,q,U=-1;function R(){!T||!q||(T=!1,q.length?x=q.concat(x):U=-1,x.length&&u())}function u(){if(!T){var v=n(R);T=!0;for(var S=x.length;S;){for(q=x,x=[];++U<S;)q&&q[U].run();U=-1,S=x.length}q=null,T=!1,I(v)}}_.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)S[E-1]=arguments[E];x.push(new y(v,S)),x.length===1&&!T&&n(u)};function y(v,S){this.fun=v,this.array=S}y.prototype.run=function(){this.fun.apply(null,this.array)},_.title="browser",_.browser=!0,_.env={},_.argv=[],_.version="",_.versions={};function h(){}_.on=h,_.addListener=h,_.once=h,_.off=h,_.removeListener=h,_.removeAllListeners=h,_.emit=h,_.prependListener=h,_.prependOnceListener=h,_.listeners=function(v){return[]},_.binding=function(v){throw new Error("process.binding is not supported")},_.cwd=function(){return"/"},_.chdir=function(v){throw new Error("process.chdir is not supported")},_.umask=function(){return 0}}),_o,io,ao,p=be(()=>{_o=m(lo()),io=m(so()),ao=function(a){function i(){var w=this||self;return delete a.prototype.__magic__,w}if(typeof globalThis=="object")return globalThis;if(this)return i();a.defineProperty(a.prototype,"__magic__",{configurable:!0,get:i});var _=__magic__;return _}(Object)}),Ee={};we(Ee,{default:()=>Ae});var Z,de,Ae,mo=be(()=>{"use strict";p(),Z=m(c("react")),de=a=>Z.createElement("svg",ge({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},a),Z.createElement("g",null,Z.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Ae=de}),Se={};we(Se,{ValueContainer:()=>No});Ue.exports=qe(Se);p();var D=m(c("react")),me=c("@terradharitri/sdk-dapp/UI/Trim"),uo=c("@terradharitri/sdk-dapp/utils"),vo=m(c("classnames")),yo=c("react-select");p();var Po=m(c("react")),jo=c("@terradharitri/sdk-dapp/constants/index");p();p();p();var zo=m(c("axios"));p();p();p();var Do=c("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");p();var Yo=c("@terradharitri/sdk-dapp/constants/index");p();p();p();p();p();p();p();var Go=m(c("axios"));p();p();var Vo=c("@terradharitri/sdk-dapp/apiCalls/endpoints"),Wo=c("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Fo=m(c("axios")),Ho=m(c("lodash/uniqBy"));p();var $o=c("@terradharitri/sdk-dapp/apiCalls/endpoints"),Zo=m(c("axios"));p();p();p();var Jo=c("@terradharitri/sdk-dapp/types/tokens.types");p();p();p();p();var Ko=c("@terradharitri/sdk-dapp/apiCalls/endpoints"),Qo=m(c("axios"));p();p();var Xo=m(c("axios"));p();var fo=m(c("react")),er=(0,fo.createContext)({});p();p();var ho=m(c("react")),or=c("@terradharitri/sdk-dapp/constants/index"),rr=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),tr=m(c("bignumber.js")),nr=c("formik");p();p();p();var cr=c("bech32");p();p();p();p();p();p();var pr=c("@terradharitri/sdk-dapp/constants"),lr=c("@terradharitri/sdk-dapp/utils/account/getAccount");p();p();var sr=c("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");p();var _r=c("@terradharitri/sdk-dapp/utils/buildUrlParams");p();var ir=m(c("anchorme"));p();p();var ar=c("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),go=c("@terradharitri/sdk-dapp/utils/operations/formatAmount"),dr=c("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),mr=c("@terradharitri/sdk-dapp/utils/operations/parseAmount");p();p();var bo=m(c("react")),ur=c("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),vr=c("formik");p();p();var yr=c("@terradharitri/sdk-dapp/constants/index"),fr=c("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),hr=m(c("bignumber.js"));p();p();var gr=c("@terradharitri/sdk-dapp/constants/index");p();var br=c("@terradharitri/sdk-dapp/constants/index");p();var wr=c("@terradharitri/sdk-dapp/constants/index"),xr=m(c("bignumber.js"));p();var qr=c("@terradharitri/sdk-dapp/constants/index");p();var Er=c("@terradharitri/sdk-dapp/constants/index");p();p();var Ar=c("@terradharitri/sdk-core"),Sr=c("@terradharitri/sdk-dapp/constants/index"),Br=m(c("bignumber.js"));p();p();var Ur=c("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");p();var Ir=c("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");p();var Tr=m(c("bignumber.js"));p();var Lr=c("@terradharitri/sdk-dapp/constants/index"),Or=c("@terradharitri/sdk-dapp/utils/smartContracts"),Cr=c("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),kr=m(c("bignumber.js"));p();var Mr=m(c("bignumber.js"));p();var X=c("@terradharitri/sdk-dapp/constants/index"),wo=m(c("bignumber.js")),ue,ve,ye,xo=(0,go.formatAmount)({input:String((ue=X.GAS_PRICE)!=null?ue:1e9),decimals:(ve=X.DECIMALS)!=null?ve:18,showLastNonZeroDecimal:!0,digits:(ye=X.DIGITS)!=null?ye:4}),Rr=new wo.default(xo).times(10).toString(10);p();var Nr=c("@terradharitri/sdk-dapp/constants/index"),Pr=m(c("bignumber.js"));p();var jr=m(c("bignumber.js"));p();p();var zr=c("yup");p();var fe=c("@terradharitri/sdk-dapp/constants/ledger.constants"),qo=m(c("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),ee=c("yup"),Eo=(0,ee.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(a){let{ledger:i}=this.parent;return!(i&&a&&a.length&&!i.ledgerDataActive)}),Ao=(0,ee.string)().test({name:"hashSign",test:function(a){let{ledger:i,isGuarded:_}=this.parent;if(i){let{ledgerWithHashSign:w,ledgerWithGuardians:f}=(0,qo.default)(i.version);if(a&&a.length>300&&!w)return this.createError({message:`Data too long. You need at least DharitrI app version ${fe.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(_&&!f)return this.createError({message:`You need at least DharitrI app version ${fe.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),So=[Eo,Ao],Dr=So.reduce((a,i)=>a.concat(i),(0,ee.string)());p();var Yr=c("@terradharitri/sdk-dapp/constants/index"),Gr=c("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Vr=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Wr=c("yup");p();var Fr=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Hr=m(c("bignumber.js")),$r=c("yup");p();var Zr=c("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Jr=m(c("bignumber.js")),Kr=c("yup");p();var Qr=c("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Xr=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),et=m(c("bignumber.js")),ot=c("yup");p();var rt=m(c("bignumber.js")),tt=c("yup");p();var nt=c("@terradharitri/sdk-dapp/constants/index"),ct=c("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),pt=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),lt=m(c("bignumber.js")),st=c("yup");p();var _t=c("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),it=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),at=c("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),dt=m(c("bignumber.js")),mt=c("yup");p();var ut=m(c("bignumber.js")),vt=c("yup");p();var yt=c("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ft=c("yup");p();var ht=c("@terradharitri/sdk-dapp/utils/account/addressIsValid"),gt=c("yup");p();p();var bt=(0,bo.createContext)({});p();p();var Bo=m(c("react")),wt=c("formik"),xt=m(c("lodash/uniqBy"));p();p();var Uo=m(c("react")),qt=(0,Uo.createContext)({});p();p();var Et=c("react"),At=c("@terradharitri/sdk-dapp/constants/index"),St=c("@terradharitri/sdk-dapp/types/enums.types");p();var Bt=(0,Bo.createContext)({});p();p();var Ut=c("@terradharitri/sdk-dapp/constants/index"),It=c("formik");p();p();var Io=m(c("react")),Tt=c("@terradharitri/sdk-dapp/constants/index"),Lt=c("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ot=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ct=c("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),kt=m(c("bignumber.js")),Mt=c("formik");p();p();p();p();var Rt=m(c("bignumber.js"));p();var Nt=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Pt=m(c("bignumber.js"));p();p();var jt=c("react"),zt=c("@terradharitri/sdk-dapp/constants/index"),Dt=c("@terradharitri/sdk-dapp/utils/smartContracts"),Yt=m(c("bignumber.js")),Gt=c("formik");p();var Vt=c("react");p();p();var Wt=c("@terradharitri/sdk-dapp/constants/index"),Ft=m(c("bignumber.js")),Ht=(0,Io.createContext)({}),$t=(0,ho.createContext)({});p();p();var To=m(c("react")),Zt=c("formik"),Jt=(0,To.createContext)({});p();p();var Lo=m(c("react")),Kt=c("formik");p();p();p();var Qt=c("react"),Xt=c("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),en=m(c("lodash/uniqBy"));p();p();var on=c("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),rn=c("@terradharitri/sdk-dapp/utils");p();var tn=c("react");p();var nn=c("react"),cn=c("@terradharitri/sdk-dapp/utils/account/addressIsValid"),pn=(0,Lo.createContext)({});p();p();var Oo=m(c("react")),ln=c("formik");p();p();p();p();p();var sn=c("react"),_n=c("@terradharitri/sdk-dapp/utils");p();var an=c("react"),dn=c("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");p();p();var mn=c("@terradharitri/sdk-dapp/utils/account/addressIsValid"),un=m(c("axios"));p();var vn=m(c("axios")),yn=(0,Oo.createContext)({});p();var Be=m(c("react")),Co=(0,Be.createContext)({});function ko(){return(0,Be.useContext)(Co)}p();var Mo=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mo));var Y={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};p();var{default:Ro}=(mo(),qe(Ee)),No=a=>{let{selectProps:i,isDisabled:_}=a,{value:w,menuIsOpen:f}=i,b=w,{receiverInfo:{receiver:g},receiverUsernameInfo:{receiverUsername:n}}=ko(),I=n!=null?n:b&&b.value!==b.label,x=b?{value:g!=null?g:b.value,label:b.label}:null,T=x&&(I||!I&&!f)&&(0,uo.addressIsValid)(x.value);return D.default.createElement(yo.components.ValueContainer,no(ge({},a),{className:Y.receiverSelectValue}),T&&D.default.createElement("span",{className:(0,vo.default)(Y.receiverSelectSingle,{[Y.disabled]:_})},I?D.default.createElement(D.default.Fragment,null,D.default.createElement("span",{className:Y.receiverSelectSingleUsername},D.default.createElement(Ro,{className:Y.receiverSelectSingleUsernameIcon}),x.label),D.default.createElement("span",{className:Y.receiverSelectSingleTrimWrapper},"(",D.default.createElement(me.Trim,{text:x.value,className:Y.receiverSelectSingleTrim}),")")):D.default.createElement(me.Trim,{text:x.value,className:Y.receiverSelectSingleTrim})),a.children)};});var V={};$();H(V,He(Ie()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
