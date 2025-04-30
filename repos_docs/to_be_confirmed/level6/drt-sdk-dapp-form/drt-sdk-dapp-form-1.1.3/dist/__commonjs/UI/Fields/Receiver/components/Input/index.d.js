"use strict";import{a as c,b as Re,d as V,e as je,f as F}from"../../../../../../__chunks__/chunk-RGFNPOTZ.js";var ge=Re((an,he)=>{"use strict";F();var De=Object.create,D=Object.defineProperty,We=Object.defineProperties,Ye=Object.getOwnPropertyDescriptor,Ge=Object.getOwnPropertyDescriptors,Ve=Object.getOwnPropertyNames,se=Object.getOwnPropertySymbols,Fe=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,_e=(a,i,_)=>i in a?D(a,i,{enumerable:!0,configurable:!0,writable:!0,value:_}):a[i]=_,Xe=(a,i)=>{for(var _ in i||(i={}))ue.call(i,_)&&_e(a,_,i[_]);if(se)for(var _ of se(i))Ze.call(i,_)&&_e(a,_,i[_]);return a},$e=(a,i)=>We(a,Ge(i)),Je=(a,i)=>()=>(a&&(i=a(a=0)),i),Z=(a,i)=>()=>(i||a((i={exports:{}}).exports,i),i.exports),Ke=(a,i)=>{for(var _ in i)D(a,_,{get:i[_],enumerable:!0})},ve=(a,i,_,b)=>{if(i&&typeof i=="object"||typeof i=="function")for(let y of Ve(i))!ue.call(a,y)&&y!==_&&D(a,y,{get:()=>i[y],enumerable:!(b=Ye(i,y))||b.enumerable});return a},m=(a,i,_)=>(_=a!=null?De(Fe(a)):{},ve(i||!a||!a.__esModule?D(_,"default",{value:a,enumerable:!0}):_,a)),Qe=a=>ve(D({},"__esModule",{value:!0}),a),He=Z(a=>{"use strict";p(),a.byteLength=I,a.toByteArray=T,a.fromByteArray=R;var i=[],_=[],b=typeof Uint8Array!="undefined"?Uint8Array:Array,y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(w=0,h=y.length;w<h;++w)i[w]=y[w],_[y.charCodeAt(w)]=w;var w,h;_["-".charCodeAt(0)]=62,_["_".charCodeAt(0)]=63;function n(u){var f=u.length;if(f%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var g=u.indexOf("=");g===-1&&(g=f);var v=g===f?0:4-g%4;return[g,v]}function I(u){var f=n(u),g=f[0],v=f[1];return(g+v)*3/4-v}function E(u,f,g){return(f+g)*3/4-g}function T(u){var f,g=n(u),v=g[0],S=g[1],q=new b(E(u,v,S)),j=0,z=S>0?v-4:v,k;for(k=0;k<z;k+=4)f=_[u.charCodeAt(k)]<<18|_[u.charCodeAt(k+1)]<<12|_[u.charCodeAt(k+2)]<<6|_[u.charCodeAt(k+3)],q[j++]=f>>16&255,q[j++]=f>>8&255,q[j++]=f&255;return S===2&&(f=_[u.charCodeAt(k)]<<2|_[u.charCodeAt(k+1)]>>4,q[j++]=f&255),S===1&&(f=_[u.charCodeAt(k)]<<10|_[u.charCodeAt(k+1)]<<4|_[u.charCodeAt(k+2)]>>2,q[j++]=f>>8&255,q[j++]=f&255),q}function x(u){return i[u>>18&63]+i[u>>12&63]+i[u>>6&63]+i[u&63]}function U(u,f,g){for(var v,S=[],q=f;q<g;q+=3)v=(u[q]<<16&16711680)+(u[q+1]<<8&65280)+(u[q+2]&255),S.push(x(v));return S.join("")}function R(u){for(var f,g=u.length,v=g%3,S=[],q=16383,j=0,z=g-v;j<z;j+=q)S.push(U(u,j,j+q>z?z:j+q));return v===1?(f=u[g-1],S.push(i[f>>2]+i[f<<4&63]+"==")):v===2&&(f=(u[g-2]<<8)+u[g-1],S.push(i[f>>10]+i[f>>4&63]+i[f<<2&63]+"=")),S.join("")}}),eo=Z(a=>{p(),a.read=function(i,_,b,y,w){var h,n,I=w*8-y-1,E=(1<<I)-1,T=E>>1,x=-7,U=b?w-1:0,R=b?-1:1,u=i[_+U];for(U+=R,h=u&(1<<-x)-1,u>>=-x,x+=I;x>0;h=h*256+i[_+U],U+=R,x-=8);for(n=h&(1<<-x)-1,h>>=-x,x+=y;x>0;n=n*256+i[_+U],U+=R,x-=8);if(h===0)h=1-T;else{if(h===E)return n?NaN:(u?-1:1)*(1/0);n=n+Math.pow(2,y),h=h-T}return(u?-1:1)*n*Math.pow(2,h-y)},a.write=function(i,_,b,y,w,h){var n,I,E,T=h*8-w-1,x=(1<<T)-1,U=x>>1,R=w===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=y?0:h-1,f=y?1:-1,g=_<0||_===0&&1/_<0?1:0;for(_=Math.abs(_),isNaN(_)||_===1/0?(I=isNaN(_)?1:0,n=x):(n=Math.floor(Math.log(_)/Math.LN2),_*(E=Math.pow(2,-n))<1&&(n--,E*=2),n+U>=1?_+=R/E:_+=R*Math.pow(2,1-U),_*E>=2&&(n++,E/=2),n+U>=x?(I=0,n=x):n+U>=1?(I=(_*E-1)*Math.pow(2,w),n=n+U):(I=_*Math.pow(2,U-1)*Math.pow(2,w),n=0));w>=8;i[b+u]=I&255,u+=f,I/=256,w-=8);for(n=n<<w|I,T+=w;T>0;i[b+u]=n&255,u+=f,n/=256,T-=8);i[b+u-f]|=g*128}}),oo=Z(a=>{"use strict";p();var i=He(),_=eo(),b=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;a.Buffer=n,a.SlowBuffer=S,a.INSPECT_MAX_BYTES=50;var y=2147483647;a.kMaxLength=y,n.TYPED_ARRAY_SUPPORT=w(),!n.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function w(){try{var e=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(e,o),e.foo()===42}catch(r){return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function h(e){if(e>y)throw new RangeError('The value "'+e+'" is invalid for option "size"');var o=new Uint8Array(e);return Object.setPrototypeOf(o,n.prototype),o}function n(e,o,r){if(typeof e=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return x(e)}return I(e,o,r)}n.poolSize=8192;function I(e,o,r){if(typeof e=="string")return U(e,o);if(ArrayBuffer.isView(e))return u(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return f(e,o,r);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=e.valueOf&&e.valueOf();if(t!=null&&t!==e)return n.from(t,o,r);var l=g(e);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return n.from(e[Symbol.toPrimitive]("string"),o,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}n.from=function(e,o,r){return I(e,o,r)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function E(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function T(e,o,r){return E(e),e<=0?h(e):o!==void 0?typeof r=="string"?h(e).fill(o,r):h(e).fill(o):h(e)}n.alloc=function(e,o,r){return T(e,o,r)};function x(e){return E(e),h(e<0?0:v(e)|0)}n.allocUnsafe=function(e){return x(e)},n.allocUnsafeSlow=function(e){return x(e)};function U(e,o){if((typeof o!="string"||o==="")&&(o="utf8"),!n.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var r=q(e,o)|0,t=h(r),l=t.write(e,o);return l!==r&&(t=t.slice(0,l)),t}function R(e){for(var o=e.length<0?0:v(e.length)|0,r=h(o),t=0;t<o;t+=1)r[t]=e[t]&255;return r}function u(e){if(N(e,Uint8Array)){var o=new Uint8Array(e);return f(o.buffer,o.byteOffset,o.byteLength)}return R(e)}function f(e,o,r){if(o<0||e.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<o+(r||0))throw new RangeError('"length" is outside of buffer bounds');var t;return o===void 0&&r===void 0?t=new Uint8Array(e):r===void 0?t=new Uint8Array(e,o):t=new Uint8Array(e,o,r),Object.setPrototypeOf(t,n.prototype),t}function g(e){if(n.isBuffer(e)){var o=v(e.length)|0,r=h(o);return r.length===0||e.copy(r,0,0,o),r}if(e.length!==void 0)return typeof e.length!="number"||$(e.length)?h(0):R(e);if(e.type==="Buffer"&&Array.isArray(e.data))return R(e.data)}function v(e){if(e>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return e|0}function S(e){return+e!=e&&(e=0),n.alloc(+e)}n.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==n.prototype},n.compare=function(e,o){if(N(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),N(o,Uint8Array)&&(o=n.from(o,o.offset,o.byteLength)),!n.isBuffer(e)||!n.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var r=e.length,t=o.length,l=0,s=Math.min(r,t);l<s;++l)if(e[l]!==o[l]){r=e[l],t=o[l];break}return r<t?-1:t<r?1:0},n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return n.alloc(0);var r;if(o===void 0)for(o=0,r=0;r<e.length;++r)o+=e[r].length;var t=n.allocUnsafe(o),l=0;for(r=0;r<e.length;++r){var s=e[r];if(N(s,Uint8Array))l+s.length>t.length?n.from(s).copy(t,l):Uint8Array.prototype.set.call(t,s,l);else if(n.isBuffer(s))s.copy(t,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=s.length}return t};function q(e,o){if(n.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&r===0)return 0;for(var l=!1;;)switch(o){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return X(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return ce(e).length;default:if(l)return t?-1:X(e).length;o=(""+o).toLowerCase(),l=!0}}n.byteLength=q;function j(e,o,r){var t=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,o>>>=0,r<=o))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,o,r);case"utf8":case"utf-8":return ee(this,o,r);case"ascii":return Be(this,o,r);case"latin1":case"binary":return Ue(this,o,r);case"base64":return Ae(this,o,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Te(this,o,r);default:if(t)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),t=!0}}n.prototype._isBuffer=!0;function z(e,o,r){var t=e[o];e[o]=e[r],e[r]=t}n.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)z(this,o,o+1);return this},n.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)z(this,o,o+3),z(this,o+1,o+2);return this},n.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)z(this,o,o+7),z(this,o+1,o+6),z(this,o+2,o+5),z(this,o+3,o+4);return this},n.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?ee(this,0,e):j.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(e){if(!n.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:n.compare(this,e)===0},n.prototype.inspect=function(){var e="",o=a.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"},b&&(n.prototype[b]=n.prototype.inspect),n.prototype.compare=function(e,o,r,t,l){if(N(e,Uint8Array)&&(e=n.from(e,e.offset,e.byteLength)),!n.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),r===void 0&&(r=e?e.length:0),t===void 0&&(t=0),l===void 0&&(l=this.length),o<0||r>e.length||t<0||l>this.length)throw new RangeError("out of range index");if(t>=l&&o>=r)return 0;if(t>=l)return-1;if(o>=r)return 1;if(o>>>=0,r>>>=0,t>>>=0,l>>>=0,this===e)return 0;for(var s=l-t,d=r-o,A=Math.min(s,d),C=this.slice(t,l),B=e.slice(o,r),O=0;O<A;++O)if(C[O]!==B[O]){s=C[O],d=B[O];break}return s<d?-1:d<s?1:0};function k(e,o,r,t,l){if(e.length===0)return-1;if(typeof r=="string"?(t=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,$(r)&&(r=l?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(l)return-1;r=e.length-1}else if(r<0)if(l)r=0;else return-1;if(typeof o=="string"&&(o=n.from(o,t)),n.isBuffer(o))return o.length===0?-1:H(e,o,r,t,l);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(e,o,r):Uint8Array.prototype.lastIndexOf.call(e,o,r):H(e,[o],r,t,l);throw new TypeError("val must be string, number or Buffer")}function H(e,o,r,t,l){var s=1,d=e.length,A=o.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(e.length<2||o.length<2)return-1;s=2,d/=2,A/=2,r/=2}function C(pe,le){return s===1?pe[le]:pe.readUInt16BE(le*s)}var B;if(l){var O=-1;for(B=r;B<d;B++)if(C(e,B)===C(o,O===-1?0:B-O)){if(O===-1&&(O=B),B-O+1===A)return O*s}else O!==-1&&(B-=B-O),O=-1}else for(r+A>d&&(r=d-A),B=r;B>=0;B--){for(var M=!0,G=0;G<A;G++)if(C(e,B+G)!==C(o,G)){M=!1;break}if(M)return B}return-1}n.prototype.includes=function(e,o,r){return this.indexOf(e,o,r)!==-1},n.prototype.indexOf=function(e,o,r){return k(this,e,o,r,!0)},n.prototype.lastIndexOf=function(e,o,r){return k(this,e,o,r,!1)};function be(e,o,r,t){r=Number(r)||0;var l=e.length-r;t?(t=Number(t),t>l&&(t=l)):t=l;var s=o.length;t>s/2&&(t=s/2);for(var d=0;d<t;++d){var A=parseInt(o.substr(d*2,2),16);if($(A))return d;e[r+d]=A}return d}function we(e,o,r,t){return Y(X(o,e.length-r),e,r,t)}function xe(e,o,r,t){return Y(Ce(o),e,r,t)}function qe(e,o,r,t){return Y(ce(o),e,r,t)}function Ee(e,o,r,t){return Y(ke(o,e.length-r),e,r,t)}n.prototype.write=function(e,o,r,t){if(o===void 0)t="utf8",r=this.length,o=0;else if(r===void 0&&typeof o=="string")t=o,r=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(r)?(r=r>>>0,t===void 0&&(t="utf8")):(t=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-o;if((r===void 0||r>l)&&(r=l),e.length>0&&(r<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");t||(t="utf8");for(var s=!1;;)switch(t){case"hex":return be(this,e,o,r);case"utf8":case"utf-8":return we(this,e,o,r);case"ascii":case"latin1":case"binary":return xe(this,e,o,r);case"base64":return qe(this,e,o,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ee(this,e,o,r);default:if(s)throw new TypeError("Unknown encoding: "+t);t=(""+t).toLowerCase(),s=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ae(e,o,r){return o===0&&r===e.length?i.fromByteArray(e):i.fromByteArray(e.slice(o,r))}function ee(e,o,r){r=Math.min(e.length,r);for(var t=[],l=o;l<r;){var s=e[l],d=null,A=s>239?4:s>223?3:s>191?2:1;if(l+A<=r){var C,B,O,M;switch(A){case 1:s<128&&(d=s);break;case 2:C=e[l+1],(C&192)===128&&(M=(s&31)<<6|C&63,M>127&&(d=M));break;case 3:C=e[l+1],B=e[l+2],(C&192)===128&&(B&192)===128&&(M=(s&15)<<12|(C&63)<<6|B&63,M>2047&&(M<55296||M>57343)&&(d=M));break;case 4:C=e[l+1],B=e[l+2],O=e[l+3],(C&192)===128&&(B&192)===128&&(O&192)===128&&(M=(s&15)<<18|(C&63)<<12|(B&63)<<6|O&63,M>65535&&M<1114112&&(d=M))}}d===null?(d=65533,A=1):d>65535&&(d-=65536,t.push(d>>>10&1023|55296),d=56320|d&1023),t.push(d),l+=A}return Se(t)}var oe=4096;function Se(e){var o=e.length;if(o<=oe)return String.fromCharCode.apply(String,e);for(var r="",t=0;t<o;)r+=String.fromCharCode.apply(String,e.slice(t,t+=oe));return r}function Be(e,o,r){var t="";r=Math.min(e.length,r);for(var l=o;l<r;++l)t+=String.fromCharCode(e[l]&127);return t}function Ue(e,o,r){var t="";r=Math.min(e.length,r);for(var l=o;l<r;++l)t+=String.fromCharCode(e[l]);return t}function Ie(e,o,r){var t=e.length;(!o||o<0)&&(o=0),(!r||r<0||r>t)&&(r=t);for(var l="",s=o;s<r;++s)l+=Me[e[s]];return l}function Te(e,o,r){for(var t=e.slice(o,r),l="",s=0;s<t.length-1;s+=2)l+=String.fromCharCode(t[s]+t[s+1]*256);return l}n.prototype.slice=function(e,o){var r=this.length;e=~~e,o=o===void 0?r:~~o,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),o<0?(o+=r,o<0&&(o=0)):o>r&&(o=r),o<e&&(o=e);var t=this.subarray(e,o);return Object.setPrototypeOf(t,n.prototype),t};function L(e,o,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+o>r)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(e,o,r){e=e>>>0,o=o>>>0,r||L(e,o,this.length);for(var t=this[e],l=1,s=0;++s<o&&(l*=256);)t+=this[e+s]*l;return t},n.prototype.readUintBE=n.prototype.readUIntBE=function(e,o,r){e=e>>>0,o=o>>>0,r||L(e,o,this.length);for(var t=this[e+--o],l=1;o>0&&(l*=256);)t+=this[e+--o]*l;return t},n.prototype.readUint8=n.prototype.readUInt8=function(e,o){return e=e>>>0,o||L(e,1,this.length),this[e]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||L(e,2,this.length),this[e]|this[e+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||L(e,2,this.length),this[e]<<8|this[e+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||L(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||L(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n.prototype.readIntLE=function(e,o,r){e=e>>>0,o=o>>>0,r||L(e,o,this.length);for(var t=this[e],l=1,s=0;++s<o&&(l*=256);)t+=this[e+s]*l;return l*=128,t>=l&&(t-=Math.pow(2,8*o)),t},n.prototype.readIntBE=function(e,o,r){e=e>>>0,o=o>>>0,r||L(e,o,this.length);for(var t=o,l=1,s=this[e+--t];t>0&&(l*=256);)s+=this[e+--t]*l;return l*=128,s>=l&&(s-=Math.pow(2,8*o)),s},n.prototype.readInt8=function(e,o){return e=e>>>0,o||L(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},n.prototype.readInt16LE=function(e,o){e=e>>>0,o||L(e,2,this.length);var r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r},n.prototype.readInt16BE=function(e,o){e=e>>>0,o||L(e,2,this.length);var r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r},n.prototype.readInt32LE=function(e,o){return e=e>>>0,o||L(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n.prototype.readInt32BE=function(e,o){return e=e>>>0,o||L(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n.prototype.readFloatLE=function(e,o){return e=e>>>0,o||L(e,4,this.length),_.read(this,e,!0,23,4)},n.prototype.readFloatBE=function(e,o){return e=e>>>0,o||L(e,4,this.length),_.read(this,e,!1,23,4)},n.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||L(e,8,this.length),_.read(this,e,!0,52,8)},n.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||L(e,8,this.length),_.read(this,e,!1,52,8)};function P(e,o,r,t,l,s){if(!n.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>l||o<s)throw new RangeError('"value" argument is out of bounds');if(r+t>e.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(e,o,r,t){if(e=+e,o=o>>>0,r=r>>>0,!t){var l=Math.pow(2,8*r)-1;P(this,e,o,r,l,0)}var s=1,d=0;for(this[o]=e&255;++d<r&&(s*=256);)this[o+d]=e/s&255;return o+r},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(e,o,r,t){if(e=+e,o=o>>>0,r=r>>>0,!t){var l=Math.pow(2,8*r)-1;P(this,e,o,r,l,0)}var s=r-1,d=1;for(this[o+s]=e&255;--s>=0&&(d*=256);)this[o+s]=e/d&255;return o+r},n.prototype.writeUint8=n.prototype.writeUInt8=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,1,255,0),this[o]=e&255,o+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4},n.prototype.writeIntLE=function(e,o,r,t){if(e=+e,o=o>>>0,!t){var l=Math.pow(2,8*r-1);P(this,e,o,r,l-1,-l)}var s=0,d=1,A=0;for(this[o]=e&255;++s<r&&(d*=256);)e<0&&A===0&&this[o+s-1]!==0&&(A=1),this[o+s]=(e/d>>0)-A&255;return o+r},n.prototype.writeIntBE=function(e,o,r,t){if(e=+e,o=o>>>0,!t){var l=Math.pow(2,8*r-1);P(this,e,o,r,l-1,-l)}var s=r-1,d=1,A=0;for(this[o+s]=e&255;--s>=0&&(d*=256);)e<0&&A===0&&this[o+s+1]!==0&&(A=1),this[o+s]=(e/d>>0)-A&255;return o+r},n.prototype.writeInt8=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1},n.prototype.writeInt16LE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2},n.prototype.writeInt16BE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2},n.prototype.writeInt32LE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4},n.prototype.writeInt32BE=function(e,o,r){return e=+e,o=o>>>0,r||P(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function re(e,o,r,t,l,s){if(r+t>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function te(e,o,r,t,l){return o=+o,r=r>>>0,l||re(e,o,r,4,34028234663852886e22,-34028234663852886e22),_.write(e,o,r,t,23,4),r+4}n.prototype.writeFloatLE=function(e,o,r){return te(this,e,o,!0,r)},n.prototype.writeFloatBE=function(e,o,r){return te(this,e,o,!1,r)};function ne(e,o,r,t,l){return o=+o,r=r>>>0,l||re(e,o,r,8,17976931348623157e292,-17976931348623157e292),_.write(e,o,r,t,52,8),r+8}n.prototype.writeDoubleLE=function(e,o,r){return ne(this,e,o,!0,r)},n.prototype.writeDoubleBE=function(e,o,r){return ne(this,e,o,!1,r)},n.prototype.copy=function(e,o,r,t){if(!n.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!t&&t!==0&&(t=this.length),o>=e.length&&(o=e.length),o||(o=0),t>0&&t<r&&(t=r),t===r||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("sourceEnd out of bounds");t>this.length&&(t=this.length),e.length-o<t-r&&(t=e.length-o+r);var l=t-r;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,r,t):Uint8Array.prototype.set.call(e,this.subarray(r,t),o),l},n.prototype.fill=function(e,o,r,t){if(typeof e=="string"){if(typeof o=="string"?(t=o,o=0,r=this.length):typeof r=="string"&&(t=r,r=this.length),t!==void 0&&typeof t!="string")throw new TypeError("encoding must be a string");if(typeof t=="string"&&!n.isEncoding(t))throw new TypeError("Unknown encoding: "+t);if(e.length===1){var l=e.charCodeAt(0);(t==="utf8"&&l<128||t==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<r)throw new RangeError("Out of range index");if(r<=o)return this;o=o>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);var s;if(typeof e=="number")for(s=o;s<r;++s)this[s]=e;else{var d=n.isBuffer(e)?e:n.from(e,t),A=d.length;if(A===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<r-o;++s)this[s+o]=d[s%A]}return this};var Oe=/[^+/0-9A-Za-z-_]/g;function Le(e){if(e=e.split("=")[0],e=e.trim().replace(Oe,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function X(e,o){o=o||1/0;for(var r,t=e.length,l=null,s=[],d=0;d<t;++d){if(r=e.charCodeAt(d),r>55295&&r<57344){if(!l){if(r>56319){(o-=3)>-1&&s.push(239,191,189);continue}else if(d+1===t){(o-=3)>-1&&s.push(239,191,189);continue}l=r;continue}if(r<56320){(o-=3)>-1&&s.push(239,191,189),l=r;continue}r=(l-55296<<10|r-56320)+65536}else l&&(o-=3)>-1&&s.push(239,191,189);if(l=null,r<128){if((o-=1)<0)break;s.push(r)}else if(r<2048){if((o-=2)<0)break;s.push(r>>6|192,r&63|128)}else if(r<65536){if((o-=3)<0)break;s.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((o-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return s}function Ce(e){for(var o=[],r=0;r<e.length;++r)o.push(e.charCodeAt(r)&255);return o}function ke(e,o){for(var r,t,l,s=[],d=0;d<e.length&&!((o-=2)<0);++d)r=e.charCodeAt(d),t=r>>8,l=r%256,s.push(l),s.push(t);return s}function ce(e){return i.toByteArray(Le(e))}function Y(e,o,r,t){for(var l=0;l<t&&!(l+r>=o.length||l>=e.length);++l)o[l+r]=e[l];return l}function N(e,o){return e instanceof o||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===o.name}function $(e){return e!==e}var Me=function(){for(var e="0123456789abcdef",o=new Array(256),r=0;r<16;++r)for(var t=r*16,l=0;l<16;++l)o[t+l]=e[r]+e[l];return o}()}),ro=Z((a,i)=>{p();var _=i.exports={},b,y;function w(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?b=setTimeout:b=w}catch(v){b=w}try{typeof clearTimeout=="function"?y=clearTimeout:y=h}catch(v){y=h}})();function n(v){if(b===setTimeout)return setTimeout(v,0);if((b===w||!b)&&setTimeout)return b=setTimeout,setTimeout(v,0);try{return b(v,0)}catch(S){try{return b.call(null,v,0)}catch(q){return b.call(this,v,0)}}}function I(v){if(y===clearTimeout)return clearTimeout(v);if((y===h||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(v);try{return y(v)}catch(S){try{return y.call(null,v)}catch(q){return y.call(this,v)}}}var E=[],T=!1,x,U=-1;function R(){!T||!x||(T=!1,x.length?E=x.concat(E):U=-1,E.length&&u())}function u(){if(!T){var v=n(R);T=!0;for(var S=E.length;S;){for(x=E,E=[];++U<S;)x&&x[U].run();U=-1,S=E.length}x=null,T=!1,I(v)}}_.nextTick=function(v){var S=new Array(arguments.length-1);if(arguments.length>1)for(var q=1;q<arguments.length;q++)S[q-1]=arguments[q];E.push(new f(v,S)),E.length===1&&!T&&n(u)};function f(v,S){this.fun=v,this.array=S}f.prototype.run=function(){this.fun.apply(null,this.array)},_.title="browser",_.browser=!0,_.env={},_.argv=[],_.version="",_.versions={};function g(){}_.on=g,_.addListener=g,_.once=g,_.off=g,_.removeListener=g,_.removeAllListeners=g,_.emit=g,_.prependListener=g,_.prependOnceListener=g,_.listeners=function(v){return[]},_.binding=function(v){throw new Error("process.binding is not supported")},_.cwd=function(){return"/"},_.chdir=function(v){throw new Error("process.chdir is not supported")},_.umask=function(){return 0}}),to,no,co,p=Je(()=>{to=m(oo()),no=m(ro()),co=function(a){function i(){var b=this||self;return delete a.prototype.__magic__,b}if(typeof globalThis=="object")return globalThis;if(this)return i();a.defineProperty(a.prototype,"__magic__",{configurable:!0,get:i});var _=__magic__;return _}(Object)}),ye={};Ke(ye,{renderInput:()=>Oo});he.exports=Qe(ye);p();var po=m(c("react")),lo=c("@terradharitri/sdk-dapp/utils"),so=m(c("classnames")),_o=c("react-select");p();var Lo=m(c("react")),Co=c("@terradharitri/sdk-dapp/constants/index");p();p();p();var ko=m(c("axios"));p();p();p();var Mo=c("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");p();var Ro=c("@terradharitri/sdk-dapp/constants/index");p();p();p();p();p();p();p();var jo=m(c("axios"));p();p();var Po=c("@terradharitri/sdk-dapp/apiCalls/endpoints"),zo=c("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),No=m(c("axios")),Do=m(c("lodash/uniqBy"));p();var Wo=c("@terradharitri/sdk-dapp/apiCalls/endpoints"),Yo=m(c("axios"));p();p();p();var Go=c("@terradharitri/sdk-dapp/types/tokens.types");p();p();p();p();var Vo=c("@terradharitri/sdk-dapp/apiCalls/endpoints"),Fo=m(c("axios"));p();p();var Zo=m(c("axios"));p();var io=m(c("react")),Xo=(0,io.createContext)({});p();p();var ao=m(c("react")),$o=c("@terradharitri/sdk-dapp/constants/index"),Jo=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ko=m(c("bignumber.js")),Qo=c("formik");p();p();p();var Ho=c("bech32");p();p();p();p();p();p();var er=c("@terradharitri/sdk-dapp/constants"),or=c("@terradharitri/sdk-dapp/utils/account/getAccount");p();p();var rr=c("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");p();var tr=c("@terradharitri/sdk-dapp/utils/buildUrlParams");p();var nr=m(c("anchorme"));p();p();var cr=c("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),mo=c("@terradharitri/sdk-dapp/utils/operations/formatAmount"),pr=c("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),lr=c("@terradharitri/sdk-dapp/utils/operations/parseAmount");p();p();var uo=m(c("react")),sr=c("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),_r=c("formik");p();p();var ir=c("@terradharitri/sdk-dapp/constants/index"),ar=c("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),dr=m(c("bignumber.js"));p();p();var mr=c("@terradharitri/sdk-dapp/constants/index");p();var ur=c("@terradharitri/sdk-dapp/constants/index");p();var vr=c("@terradharitri/sdk-dapp/constants/index"),yr=m(c("bignumber.js"));p();var fr=c("@terradharitri/sdk-dapp/constants/index");p();var hr=c("@terradharitri/sdk-dapp/constants/index");p();p();var gr=c("@terradharitri/sdk-core"),br=c("@terradharitri/sdk-dapp/constants/index"),wr=m(c("bignumber.js"));p();p();var xr=c("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");p();var qr=c("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");p();var Er=m(c("bignumber.js"));p();var Ar=c("@terradharitri/sdk-dapp/constants/index"),Sr=c("@terradharitri/sdk-dapp/utils/smartContracts"),Br=c("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ur=m(c("bignumber.js"));p();var Ir=m(c("bignumber.js"));p();var J=c("@terradharitri/sdk-dapp/constants/index"),vo=m(c("bignumber.js")),ie,ae,de,yo=(0,mo.formatAmount)({input:String((ie=J.GAS_PRICE)!=null?ie:1e9),decimals:(ae=J.DECIMALS)!=null?ae:18,showLastNonZeroDecimal:!0,digits:(de=J.DIGITS)!=null?de:4}),Tr=new vo.default(yo).times(10).toString(10);p();var Or=c("@terradharitri/sdk-dapp/constants/index"),Lr=m(c("bignumber.js"));p();var Cr=m(c("bignumber.js"));p();p();var kr=c("yup");p();var me=c("@terradharitri/sdk-dapp/constants/ledger.constants"),fo=m(c("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Q=c("yup"),ho=(0,Q.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(a){let{ledger:i}=this.parent;return!(i&&a&&a.length&&!i.ledgerDataActive)}),go=(0,Q.string)().test({name:"hashSign",test:function(a){let{ledger:i,isGuarded:_}=this.parent;if(i){let{ledgerWithHashSign:b,ledgerWithGuardians:y}=(0,fo.default)(i.version);if(a&&a.length>300&&!b)return this.createError({message:`Data too long. You need at least DharitrI app version ${me.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(_&&!y)return this.createError({message:`You need at least DharitrI app version ${me.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),bo=[ho,go],Mr=bo.reduce((a,i)=>a.concat(i),(0,Q.string)());p();var Rr=c("@terradharitri/sdk-dapp/constants/index"),jr=c("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Pr=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zr=c("yup");p();var Nr=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Dr=m(c("bignumber.js")),Wr=c("yup");p();var Yr=c("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Gr=m(c("bignumber.js")),Vr=c("yup");p();var Fr=c("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Zr=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Xr=m(c("bignumber.js")),$r=c("yup");p();var Jr=m(c("bignumber.js")),Kr=c("yup");p();var Qr=c("@terradharitri/sdk-dapp/constants/index"),Hr=c("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),et=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ot=m(c("bignumber.js")),rt=c("yup");p();var tt=c("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),nt=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ct=c("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),pt=m(c("bignumber.js")),lt=c("yup");p();var st=m(c("bignumber.js")),_t=c("yup");p();var it=c("@terradharitri/sdk-dapp/utils/account/addressIsValid"),at=c("yup");p();var dt=c("@terradharitri/sdk-dapp/utils/account/addressIsValid"),mt=c("yup");p();p();var ut=(0,uo.createContext)({});p();p();var wo=m(c("react")),vt=c("formik"),yt=m(c("lodash/uniqBy"));p();p();var xo=m(c("react")),ft=(0,xo.createContext)({});p();p();var ht=c("react"),gt=c("@terradharitri/sdk-dapp/constants/index"),bt=c("@terradharitri/sdk-dapp/types/enums.types");p();var wt=(0,wo.createContext)({});p();p();var xt=c("@terradharitri/sdk-dapp/constants/index"),qt=c("formik");p();p();var qo=m(c("react")),Et=c("@terradharitri/sdk-dapp/constants/index"),At=c("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),St=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Bt=c("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ut=m(c("bignumber.js")),It=c("formik");p();p();p();p();var Tt=m(c("bignumber.js"));p();var Ot=c("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Lt=m(c("bignumber.js"));p();p();var Ct=c("react"),kt=c("@terradharitri/sdk-dapp/constants/index"),Mt=c("@terradharitri/sdk-dapp/utils/smartContracts"),Rt=m(c("bignumber.js")),jt=c("formik");p();var Pt=c("react");p();p();var zt=c("@terradharitri/sdk-dapp/constants/index"),Nt=m(c("bignumber.js")),Dt=(0,qo.createContext)({}),Wt=(0,ao.createContext)({});p();p();var Eo=m(c("react")),Yt=c("formik"),Gt=(0,Eo.createContext)({});p();p();var Ao=m(c("react")),Vt=c("formik");p();p();p();var Ft=c("react"),Zt=c("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Xt=m(c("lodash/uniqBy"));p();p();var $t=c("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Jt=c("@terradharitri/sdk-dapp/utils");p();var Kt=c("react");p();var Qt=c("react"),Ht=c("@terradharitri/sdk-dapp/utils/account/addressIsValid"),en=(0,Ao.createContext)({});p();p();var So=m(c("react")),on=c("formik");p();p();p();p();p();var rn=c("react"),tn=c("@terradharitri/sdk-dapp/utils");p();var nn=c("react"),cn=c("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");p();p();var pn=c("@terradharitri/sdk-dapp/utils/account/addressIsValid"),ln=m(c("axios"));p();var sn=m(c("axios")),_n=(0,So.createContext)({});p();var fe=m(c("react")),Bo=(0,fe.createContext)({});function Uo(){return(0,fe.useContext)(Bo)}p();var Io=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Io));var K={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};p();p();var To=(a,i)=>{let _=a.current;if(!_||!_.state.focusedOption)return!1;let b=_.state.focusedOption,y=b.label.toLowerCase(),w=b.value.toLowerCase(),h=y!==w,n=h&&y.startsWith(i.toLowerCase());return h&&!i?!0:n},Oo=a=>i=>{let{selectProps:_,value:b}=i,{inputValue:y,menuIsOpen:w}=_,{receiverUsernameInfo:{receiverUsername:h}}=Uo(),n=To(a,y),I=(0,lo.addressIsValid)(String(b)),E=Boolean(h)||n,T=I&&w||!I&&y;return po.default.createElement(_o.components.Input,$e(Xe({},i),{"data-testid":"receiver",className:(0,so.default)(K.receiverSelectInput,{[K.visible]:T,[K.spaced]:E})}))};});var W={};F();V(W,je(ge()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
