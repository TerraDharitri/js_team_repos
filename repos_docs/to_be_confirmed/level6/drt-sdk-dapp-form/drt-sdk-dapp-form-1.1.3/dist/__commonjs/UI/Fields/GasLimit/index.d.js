"use strict";import{a as n,b as Ne,d as H,e as Me,f as Z}from"../../../../__chunks__/chunk-JH2LJGTQ.js";var ye=Ne((cn,be)=>{"use strict";Z();var Ge=Object.create,X=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,Fe=Object.getOwnPropertyNames,Ye=Object.getPrototypeOf,Ve=Object.prototype.hasOwnProperty,We=(c,l)=>()=>(c&&(l=c(c=0)),l),$=(c,l)=>()=>(l||c((l={exports:{}}).exports,l),l.exports),He=(c,l)=>{for(var s in l)X(c,s,{get:l[s],enumerable:!0})},me=(c,l,s,y)=>{if(l&&typeof l=="object"||typeof l=="function")for(let b of Fe(l))!Ve.call(c,b)&&b!==s&&X(c,b,{get:()=>l[b],enumerable:!(y=ze(l,b))||y.enumerable});return c},h=(c,l,s)=>(s=c!=null?Ge(Ye(c)):{},me(l||!c||!c.__esModule?X(s,"default",{value:c,enumerable:!0}):s,c)),Ze=c=>me(X({},"__esModule",{value:!0}),c),Xe=$(c=>{"use strict";i(),c.byteLength=S,c.toByteArray=I,c.fromByteArray=k;var l=[],s=[],y=typeof Uint8Array!="undefined"?Uint8Array:Array,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(q=0,v=b.length;q<v;++q)l[q]=b[q],s[b.charCodeAt(q)]=q;var q,v;s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63;function a(d){var m=d.length;if(m%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var _=d.indexOf("=");_===-1&&(_=m);var g=_===m?0:4-_%4;return[_,g]}function S(d){var m=a(d),_=m[0],g=m[1];return(_+g)*3/4-g}function E(d,m,_){return(m+_)*3/4-_}function I(d){var m,_=a(d),g=_[0],B=_[1],x=new y(E(d,g,B)),M=0,D=B>0?g-4:g,R;for(R=0;R<D;R+=4)m=s[d.charCodeAt(R)]<<18|s[d.charCodeAt(R+1)]<<12|s[d.charCodeAt(R+2)]<<6|s[d.charCodeAt(R+3)],x[M++]=m>>16&255,x[M++]=m>>8&255,x[M++]=m&255;return B===2&&(m=s[d.charCodeAt(R)]<<2|s[d.charCodeAt(R+1)]>>4,x[M++]=m&255),B===1&&(m=s[d.charCodeAt(R)]<<10|s[d.charCodeAt(R+1)]<<4|s[d.charCodeAt(R+2)]>>2,x[M++]=m>>8&255,x[M++]=m&255),x}function w(d){return l[d>>18&63]+l[d>>12&63]+l[d>>6&63]+l[d&63]}function L(d,m,_){for(var g,B=[],x=m;x<_;x+=3)g=(d[x]<<16&16711680)+(d[x+1]<<8&65280)+(d[x+2]&255),B.push(w(g));return B.join("")}function k(d){for(var m,_=d.length,g=_%3,B=[],x=16383,M=0,D=_-g;M<D;M+=x)B.push(L(d,M,M+x>D?D:M+x));return g===1?(m=d[_-1],B.push(l[m>>2]+l[m<<4&63]+"==")):g===2&&(m=(d[_-2]<<8)+d[_-1],B.push(l[m>>10]+l[m>>4&63]+l[m<<2&63]+"=")),B.join("")}}),$e=$(c=>{i(),c.read=function(l,s,y,b,q){var v,a,S=q*8-b-1,E=(1<<S)-1,I=E>>1,w=-7,L=y?q-1:0,k=y?-1:1,d=l[s+L];for(L+=k,v=d&(1<<-w)-1,d>>=-w,w+=S;w>0;v=v*256+l[s+L],L+=k,w-=8);for(a=v&(1<<-w)-1,v>>=-w,w+=b;w>0;a=a*256+l[s+L],L+=k,w-=8);if(v===0)v=1-I;else{if(v===E)return a?NaN:(d?-1:1)*(1/0);a=a+Math.pow(2,b),v=v-I}return(d?-1:1)*a*Math.pow(2,v-b)},c.write=function(l,s,y,b,q,v){var a,S,E,I=v*8-q-1,w=(1<<I)-1,L=w>>1,k=q===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=b?0:v-1,m=b?1:-1,_=s<0||s===0&&1/s<0?1:0;for(s=Math.abs(s),isNaN(s)||s===1/0?(S=isNaN(s)?1:0,a=w):(a=Math.floor(Math.log(s)/Math.LN2),s*(E=Math.pow(2,-a))<1&&(a--,E*=2),a+L>=1?s+=k/E:s+=k*Math.pow(2,1-L),s*E>=2&&(a++,E/=2),a+L>=w?(S=0,a=w):a+L>=1?(S=(s*E-1)*Math.pow(2,q),a=a+L):(S=s*Math.pow(2,L-1)*Math.pow(2,q),a=0));q>=8;l[y+d]=S&255,d+=m,S/=256,q-=8);for(a=a<<q|S,I+=q;I>0;l[y+d]=a&255,d+=m,a/=256,I-=8);l[y+d-m]|=_*128}}),Je=$(c=>{"use strict";i();var l=Xe(),s=$e(),y=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;c.Buffer=a,c.SlowBuffer=B,c.INSPECT_MAX_BYTES=50;var b=2147483647;c.kMaxLength=b,a.TYPED_ARRAY_SUPPORT=q(),!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function q(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch(t){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function v(e){if(e>b)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,a.prototype),r}function a(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return S(e,r,t)}a.poolSize=8192;function S(e,r,t){if(typeof e=="string")return L(e,r);if(ArrayBuffer.isView(e))return d(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(j(e,ArrayBuffer)||e&&j(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(j(e,SharedArrayBuffer)||e&&j(e.buffer,SharedArrayBuffer)))return m(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(o!=null&&o!==e)return a.from(o,r,t);var u=_(e);if(u)return u;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return a.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}a.from=function(e,r,t){return S(e,r,t)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function E(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function I(e,r,t){return E(e),e<=0?v(e):r!==void 0?typeof t=="string"?v(e).fill(r,t):v(e).fill(r):v(e)}a.alloc=function(e,r,t){return I(e,r,t)};function w(e){return E(e),v(e<0?0:g(e)|0)}a.allocUnsafe=function(e){return w(e)},a.allocUnsafeSlow=function(e){return w(e)};function L(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!a.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=x(e,r)|0,o=v(t),u=o.write(e,r);return u!==t&&(o=o.slice(0,u)),o}function k(e){for(var r=e.length<0?0:g(e.length)|0,t=v(r),o=0;o<r;o+=1)t[o]=e[o]&255;return t}function d(e){if(j(e,Uint8Array)){var r=new Uint8Array(e);return m(r.buffer,r.byteOffset,r.byteLength)}return k(e)}function m(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&t===void 0?o=new Uint8Array(e):t===void 0?o=new Uint8Array(e,r):o=new Uint8Array(e,r,t),Object.setPrototypeOf(o,a.prototype),o}function _(e){if(a.isBuffer(e)){var r=g(e.length)|0,t=v(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||Q(e.length)?v(0):k(e);if(e.type==="Buffer"&&Array.isArray(e.data))return k(e.data)}function g(e){if(e>=b)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+b.toString(16)+" bytes");return e|0}function B(e){return+e!=e&&(e=0),a.alloc(+e)}a.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==a.prototype},a.compare=function(e,r){if(j(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),j(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),!a.isBuffer(e)||!a.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,o=r.length,u=0,p=Math.min(t,o);u<p;++u)if(e[u]!==r[u]){t=e[u],o=r[u];break}return t<o?-1:o<t?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return a.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var o=a.allocUnsafe(r),u=0;for(t=0;t<e.length;++t){var p=e[t];if(j(p,Uint8Array))u+p.length>o.length?a.from(p).copy(o,u):Uint8Array.prototype.set.call(o,p,u);else if(a.isBuffer(p))p.copy(o,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=p.length}return o};function x(e,r){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||j(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&t===0)return 0;for(var u=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return J(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ue(e).length;default:if(u)return o?-1:J(e).length;r=(""+r).toLowerCase(),u=!0}}a.byteLength=x;function M(e,r,t){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ie(this,r,t);case"utf8":case"utf-8":return te(this,r,t);case"ascii":return Le(this,r,t);case"latin1":case"binary":return Ue(this,r,t);case"base64":return Ae(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Te(this,r,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}a.prototype._isBuffer=!0;function D(e,r,t){var o=e[r];e[r]=e[t],e[t]=o}a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)D(this,r,r+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)D(this,r,r+3),D(this,r+1,r+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)D(this,r,r+7),D(this,r+1,r+6),D(this,r+2,r+5),D(this,r+3,r+4);return this},a.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?te(this,0,e):M.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:a.compare(this,e)===0},a.prototype.inspect=function(){var e="",r=c.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},y&&(a.prototype[y]=a.prototype.inspect),a.prototype.compare=function(e,r,t,o,u){if(j(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),o===void 0&&(o=0),u===void 0&&(u=this.length),r<0||t>e.length||o<0||u>this.length)throw new RangeError("out of range index");if(o>=u&&r>=t)return 0;if(o>=u)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,o>>>=0,u>>>=0,this===e)return 0;for(var p=u-o,f=t-r,A=Math.min(p,f),O=this.slice(o,u),U=e.slice(r,t),T=0;T<A;++T)if(O[T]!==U[T]){p=O[T],f=U[T];break}return p<f?-1:f<p?1:0};function R(e,r,t,o,u){if(e.length===0)return-1;if(typeof t=="string"?(o=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Q(t)&&(t=u?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(u)return-1;t=e.length-1}else if(t<0)if(u)t=0;else return-1;if(typeof r=="string"&&(r=a.from(r,o)),a.isBuffer(r))return r.length===0?-1:re(e,r,t,o,u);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?u?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):re(e,[r],t,o,u);throw new TypeError("val must be string, number or Buffer")}function re(e,r,t,o,u){var p=1,f=e.length,A=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(e.length<2||r.length<2)return-1;p=2,f/=2,A/=2,t/=2}function O(pe,se){return p===1?pe[se]:pe.readUInt16BE(se*p)}var U;if(u){var T=-1;for(U=t;U<f;U++)if(O(e,U)===O(r,T===-1?0:U-T)){if(T===-1&&(T=U),U-T+1===A)return T*p}else T!==-1&&(U-=U-T),T=-1}else for(t+A>f&&(t=f-A),U=t;U>=0;U--){for(var N=!0,W=0;W<A;W++)if(O(e,U+W)!==O(r,W)){N=!1;break}if(N)return U}return-1}a.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1},a.prototype.indexOf=function(e,r,t){return R(this,e,r,t,!0)},a.prototype.lastIndexOf=function(e,r,t){return R(this,e,r,t,!1)};function ve(e,r,t,o){t=Number(t)||0;var u=e.length-t;o?(o=Number(o),o>u&&(o=u)):o=u;var p=r.length;o>p/2&&(o=p/2);for(var f=0;f<o;++f){var A=parseInt(r.substr(f*2,2),16);if(Q(A))return f;e[t+f]=A}return f}function we(e,r,t,o){return V(J(r,e.length-t),e,t,o)}function qe(e,r,t,o){return V(ke(r),e,t,o)}function Ee(e,r,t,o){return V(ue(r),e,t,o)}function xe(e,r,t,o){return V(Oe(r,e.length-t),e,t,o)}a.prototype.write=function(e,r,t,o){if(r===void 0)o="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")o=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,o===void 0&&(o="utf8")):(o=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var u=this.length-r;if((t===void 0||t>u)&&(t=u),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return ve(this,e,r,t);case"utf8":case"utf-8":return we(this,e,r,t);case"ascii":case"latin1":case"binary":return qe(this,e,r,t);case"base64":return Ee(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xe(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ae(e,r,t){return r===0&&t===e.length?l.fromByteArray(e):l.fromByteArray(e.slice(r,t))}function te(e,r,t){t=Math.min(e.length,t);for(var o=[],u=r;u<t;){var p=e[u],f=null,A=p>239?4:p>223?3:p>191?2:1;if(u+A<=t){var O,U,T,N;switch(A){case 1:p<128&&(f=p);break;case 2:O=e[u+1],(O&192)===128&&(N=(p&31)<<6|O&63,N>127&&(f=N));break;case 3:O=e[u+1],U=e[u+2],(O&192)===128&&(U&192)===128&&(N=(p&15)<<12|(O&63)<<6|U&63,N>2047&&(N<55296||N>57343)&&(f=N));break;case 4:O=e[u+1],U=e[u+2],T=e[u+3],(O&192)===128&&(U&192)===128&&(T&192)===128&&(N=(p&15)<<18|(O&63)<<12|(U&63)<<6|T&63,N>65535&&N<1114112&&(f=N))}}f===null?(f=65533,A=1):f>65535&&(f-=65536,o.push(f>>>10&1023|55296),f=56320|f&1023),o.push(f),u+=A}return Be(o)}var oe=4096;function Be(e){var r=e.length;if(r<=oe)return String.fromCharCode.apply(String,e);for(var t="",o=0;o<r;)t+=String.fromCharCode.apply(String,e.slice(o,o+=oe));return t}function Le(e,r,t){var o="";t=Math.min(e.length,t);for(var u=r;u<t;++u)o+=String.fromCharCode(e[u]&127);return o}function Ue(e,r,t){var o="";t=Math.min(e.length,t);for(var u=r;u<t;++u)o+=String.fromCharCode(e[u]);return o}function Ie(e,r,t){var o=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>o)&&(t=o);for(var u="",p=r;p<t;++p)u+=Re[e[p]];return u}function Te(e,r,t){for(var o=e.slice(r,t),u="",p=0;p<o.length-1;p+=2)u+=String.fromCharCode(o[p]+o[p+1]*256);return u}a.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var o=this.subarray(e,r);return Object.setPrototypeOf(o,a.prototype),o};function C(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||C(e,r,this.length);for(var o=this[e],u=1,p=0;++p<r&&(u*=256);)o+=this[e+p]*u;return o},a.prototype.readUintBE=a.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||C(e,r,this.length);for(var o=this[e+--r],u=1;r>0&&(u*=256);)o+=this[e+--r]*u;return o},a.prototype.readUint8=a.prototype.readUInt8=function(e,r){return e=e>>>0,r||C(e,1,this.length),this[e]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||C(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||C(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||C(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||C(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||C(e,r,this.length);for(var o=this[e],u=1,p=0;++p<r&&(u*=256);)o+=this[e+p]*u;return u*=128,o>=u&&(o-=Math.pow(2,8*r)),o},a.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||C(e,r,this.length);for(var o=r,u=1,p=this[e+--o];o>0&&(u*=256);)p+=this[e+--o]*u;return u*=128,p>=u&&(p-=Math.pow(2,8*r)),p},a.prototype.readInt8=function(e,r){return e=e>>>0,r||C(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},a.prototype.readInt16LE=function(e,r){e=e>>>0,r||C(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t},a.prototype.readInt16BE=function(e,r){e=e>>>0,r||C(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t},a.prototype.readInt32LE=function(e,r){return e=e>>>0,r||C(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,r){return e=e>>>0,r||C(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,r){return e=e>>>0,r||C(e,4,this.length),s.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,r){return e=e>>>0,r||C(e,4,this.length),s.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||C(e,8,this.length),s.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||C(e,8,this.length),s.read(this,e,!1,52,8)};function P(e,r,t,o,u,p){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>u||r<p)throw new RangeError('"value" argument is out of bounds');if(t+o>e.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var u=Math.pow(2,8*t)-1;P(this,e,r,t,u,0)}var p=1,f=0;for(this[r]=e&255;++f<t&&(p*=256);)this[r+f]=e/p&255;return r+t},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,t=t>>>0,!o){var u=Math.pow(2,8*t)-1;P(this,e,r,t,u,0)}var p=t-1,f=1;for(this[r+p]=e&255;--p>=0&&(f*=256);)this[r+p]=e/f&255;return r+t},a.prototype.writeUint8=a.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,1,255,0),this[r]=e&255,r+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4},a.prototype.writeIntLE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var u=Math.pow(2,8*t-1);P(this,e,r,t,u-1,-u)}var p=0,f=1,A=0;for(this[r]=e&255;++p<t&&(f*=256);)e<0&&A===0&&this[r+p-1]!==0&&(A=1),this[r+p]=(e/f>>0)-A&255;return r+t},a.prototype.writeIntBE=function(e,r,t,o){if(e=+e,r=r>>>0,!o){var u=Math.pow(2,8*t-1);P(this,e,r,t,u-1,-u)}var p=t-1,f=1,A=0;for(this[r+p]=e&255;--p>=0&&(f*=256);)e<0&&A===0&&this[r+p+1]!==0&&(A=1),this[r+p]=(e/f>>0)-A&255;return r+t},a.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1},a.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2},a.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2},a.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},a.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||P(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function ne(e,r,t,o,u,p){if(t+o>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ae(e,r,t,o,u){return r=+r,t=t>>>0,u||ne(e,r,t,4,34028234663852886e22,-34028234663852886e22),s.write(e,r,t,o,23,4),t+4}a.prototype.writeFloatLE=function(e,r,t){return ae(this,e,r,!0,t)},a.prototype.writeFloatBE=function(e,r,t){return ae(this,e,r,!1,t)};function ie(e,r,t,o,u){return r=+r,t=t>>>0,u||ne(e,r,t,8,17976931348623157e292,-17976931348623157e292),s.write(e,r,t,o,52,8),t+8}a.prototype.writeDoubleLE=function(e,r,t){return ie(this,e,r,!0,t)},a.prototype.writeDoubleBE=function(e,r,t){return ie(this,e,r,!1,t)},a.prototype.copy=function(e,r,t,o){if(!a.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!o&&o!==0&&(o=this.length),r>=e.length&&(r=e.length),r||(r=0),o>0&&o<t&&(o=t),o===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-r<o-t&&(o=e.length-r+t);var u=o-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,o):Uint8Array.prototype.set.call(e,this.subarray(t,o),r),u},a.prototype.fill=function(e,r,t,o){if(typeof e=="string"){if(typeof r=="string"?(o=r,r=0,t=this.length):typeof t=="string"&&(o=t,t=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!a.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){var u=e.charCodeAt(0);(o==="utf8"&&u<128||o==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var f=a.isBuffer(e)?e:a.from(e,o),A=f.length;if(A===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=f[p%A]}return this};var Se=/[^+/0-9A-Za-z-_]/g;function Ce(e){if(e=e.split("=")[0],e=e.trim().replace(Se,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function J(e,r){r=r||1/0;for(var t,o=e.length,u=null,p=[],f=0;f<o;++f){if(t=e.charCodeAt(f),t>55295&&t<57344){if(!u){if(t>56319){(r-=3)>-1&&p.push(239,191,189);continue}else if(f+1===o){(r-=3)>-1&&p.push(239,191,189);continue}u=t;continue}if(t<56320){(r-=3)>-1&&p.push(239,191,189),u=t;continue}t=(u-55296<<10|t-56320)+65536}else u&&(r-=3)>-1&&p.push(239,191,189);if(u=null,t<128){if((r-=1)<0)break;p.push(t)}else if(t<2048){if((r-=2)<0)break;p.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;p.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;p.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return p}function ke(e){for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function Oe(e,r){for(var t,o,u,p=[],f=0;f<e.length&&!((r-=2)<0);++f)t=e.charCodeAt(f),o=t>>8,u=t%256,p.push(u),p.push(o);return p}function ue(e){return l.toByteArray(Ce(e))}function V(e,r,t,o){for(var u=0;u<o&&!(u+t>=r.length||u>=e.length);++u)r[u+t]=e[u];return u}function j(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function Q(e){return e!==e}var Re=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var o=t*16,u=0;u<16;++u)r[o+u]=e[t]+e[u];return r}()}),Qe=$((c,l)=>{i();var s=l.exports={},y,b;function q(){throw new Error("setTimeout has not been defined")}function v(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?y=setTimeout:y=q}catch(g){y=q}try{typeof clearTimeout=="function"?b=clearTimeout:b=v}catch(g){b=v}})();function a(g){if(y===setTimeout)return setTimeout(g,0);if((y===q||!y)&&setTimeout)return y=setTimeout,setTimeout(g,0);try{return y(g,0)}catch(B){try{return y.call(null,g,0)}catch(x){return y.call(this,g,0)}}}function S(g){if(b===clearTimeout)return clearTimeout(g);if((b===v||!b)&&clearTimeout)return b=clearTimeout,clearTimeout(g);try{return b(g)}catch(B){try{return b.call(null,g)}catch(x){return b.call(this,g)}}}var E=[],I=!1,w,L=-1;function k(){!I||!w||(I=!1,w.length?E=w.concat(E):L=-1,E.length&&d())}function d(){if(!I){var g=a(k);I=!0;for(var B=E.length;B;){for(w=E,E=[];++L<B;)w&&w[L].run();L=-1,B=E.length}w=null,I=!1,S(g)}}s.nextTick=function(g){var B=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)B[x-1]=arguments[x];E.push(new m(g,B)),E.length===1&&!I&&a(d)};function m(g,B){this.fun=g,this.array=B}m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={};function _(){}s.on=_,s.addListener=_,s.once=_,s.off=_,s.removeListener=_,s.removeAllListeners=_,s.emit=_,s.prependListener=_,s.prependOnceListener=_,s.listeners=function(g){return[]},s.binding=function(g){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(g){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}}),Ke,er,rr,i=We(()=>{Ke=h(Je()),er=h(Qe()),rr=function(c){function l(){var y=this||self;return delete c.prototype.__magic__,y}if(typeof globalThis=="object")return globalThis;if(this)return l();c.defineProperty(c.prototype,"__magic__",{configurable:!0,get:l});var s=__magic__;return s}(Object)}),ge={};He(ge,{GasLimit:()=>Ir});be.exports=Ze(ge);i();var G=h(n("react")),tr=n("@fortawesome/free-solid-svg-icons"),or=n("@fortawesome/react-fontawesome"),nr=h(n("bignumber.js")),le=h(n("classnames")),ar=n("react-number-format");i();var ir=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ir));var F={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};i();i();var _e=h(n("react"));i();var ur=h(n("react")),Tr=(0,ur.createContext)({});i();i();var pr=h(n("react")),Sr=n("@terradharitri/sdk-dapp/constants/index"),Cr=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),kr=h(n("bignumber.js")),Or=n("formik");i();i();i();var Rr=n("bech32");i();i();i();var sr=(c,l)=>typeof l=="boolean"?l:Array.isArray(l)&&l.includes(c);i();i();var Nr=n("@terradharitri/sdk-dapp/types/tokens.types");i();i();var Mr=n("@terradharitri/sdk-dapp/constants"),Pr=n("@terradharitri/sdk-dapp/utils/account/getAccount");i();i();var Dr=n("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");i();var jr=n("@terradharitri/sdk-dapp/utils/buildUrlParams");i();var Gr=h(n("anchorme"));i();i();var zr=n("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),lr=n("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Fr=n("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Yr=n("@terradharitri/sdk-dapp/utils/operations/parseAmount");i();i();i();i();i();i();i();var fr=h(n("react")),Vr=n("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Wr=n("formik");i();i();var Hr=n("@terradharitri/sdk-dapp/constants/index"),Zr=n("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Xr=h(n("bignumber.js"));i();i();var $r=n("@terradharitri/sdk-dapp/constants/index");i();var Jr=n("@terradharitri/sdk-dapp/constants/index");i();i();i();var Qr=n("@terradharitri/sdk-dapp/constants/index"),Kr=h(n("bignumber.js"));i();var et=n("@terradharitri/sdk-dapp/constants/index");i();var rt=n("@terradharitri/sdk-dapp/constants/index");i();i();var tt=n("@terradharitri/sdk-core"),ot=n("@terradharitri/sdk-dapp/constants/index"),nt=h(n("bignumber.js"));i();i();var at=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");i();var it=n("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");i();var ut=h(n("bignumber.js"));i();var pt=n("@terradharitri/sdk-dapp/constants/index"),st=n("@terradharitri/sdk-dapp/utils/smartContracts"),lt=n("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),ft=h(n("bignumber.js"));i();var ct=h(n("bignumber.js"));i();i();var dt=h(n("axios"));i();i();i();var ht=n("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");i();var mt=n("@terradharitri/sdk-dapp/constants/index");i();i();i();var K=n("@terradharitri/sdk-dapp/constants/index"),cr=h(n("bignumber.js")),fe,ce,de,dr=(0,lr.formatAmount)({input:String((fe=K.GAS_PRICE)!=null?fe:1e9),decimals:(ce=K.DECIMALS)!=null?ce:18,showLastNonZeroDecimal:!0,digits:(de=K.DIGITS)!=null?de:4}),gt=new cr.default(dr).times(10).toString(10);i();var _t=n("@terradharitri/sdk-dapp/constants/index"),bt=h(n("bignumber.js"));i();var yt=h(n("bignumber.js"));i();i();var vt=n("yup");i();var he=n("@terradharitri/sdk-dapp/constants/ledger.constants"),hr=h(n("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),ee=n("yup"),mr=(0,ee.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(c){let{ledger:l}=this.parent;return!(l&&c&&c.length&&!l.ledgerDataActive)}),gr=(0,ee.string)().test({name:"hashSign",test:function(c){let{ledger:l,isGuarded:s}=this.parent;if(l){let{ledgerWithHashSign:y,ledgerWithGuardians:b}=(0,hr.default)(l.version);if(c&&c.length>300&&!y)return this.createError({message:`Data too long. You need at least DharitrI app version ${he.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(s&&!b)return this.createError({message:`You need at least DharitrI app version ${he.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),_r=[mr,gr],wt=_r.reduce((c,l)=>c.concat(l),(0,ee.string)());i();var qt=n("@terradharitri/sdk-dapp/constants/index"),Et=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),xt=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),At=n("yup");i();var Bt=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Lt=h(n("bignumber.js")),Ut=n("yup");i();var It=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Tt=h(n("bignumber.js")),St=n("yup");i();var Ct=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),kt=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ot=h(n("bignumber.js")),Rt=n("yup");i();var Nt=h(n("bignumber.js")),Mt=n("yup");i();var Pt=n("@terradharitri/sdk-dapp/constants/index"),Dt=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),jt=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Gt=h(n("bignumber.js")),zt=n("yup");i();var Ft=n("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Yt=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Vt=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Wt=h(n("bignumber.js")),Ht=n("yup");i();var Zt=h(n("bignumber.js")),Xt=n("yup");i();var $t=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Jt=n("yup");i();var Qt=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Kt=n("yup");i();i();var eo=(0,fr.createContext)({});i();i();var br=h(n("react")),ro=n("formik"),to=h(n("lodash/uniqBy"));i();i();i();var oo=h(n("axios"));i();i();var no=h(n("axios"));i();i();var ao=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),io=n("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),uo=h(n("axios")),po=h(n("lodash/uniqBy"));i();var so=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),lo=h(n("axios"));i();var fo=n("@terradharitri/sdk-dapp/apiCalls/endpoints"),co=h(n("axios"));i();i();var yr=h(n("react")),ho=(0,yr.createContext)({});i();i();var mo=n("react"),go=n("@terradharitri/sdk-dapp/constants/index"),_o=n("@terradharitri/sdk-dapp/types/enums.types");i();var bo=(0,br.createContext)({});i();i();var yo=n("@terradharitri/sdk-dapp/constants/index"),vo=n("formik");i();i();var vr=h(n("react")),wo=n("@terradharitri/sdk-dapp/constants/index"),qo=n("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Eo=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),xo=n("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ao=h(n("bignumber.js")),Bo=n("formik");i();i();i();i();var Lo=h(n("bignumber.js"));i();var Uo=n("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Io=h(n("bignumber.js"));i();i();var To=n("react"),So=n("@terradharitri/sdk-dapp/constants/index"),Co=n("@terradharitri/sdk-dapp/utils/smartContracts"),ko=h(n("bignumber.js")),Oo=n("formik");i();var Ro=n("react");i();i();var No=n("@terradharitri/sdk-dapp/constants/index"),Mo=h(n("bignumber.js")),Po=(0,vr.createContext)({}),Do=(0,pr.createContext)({});i();i();var wr=h(n("react")),jo=n("formik"),Go=(0,wr.createContext)({});i();i();var qr=h(n("react")),zo=n("formik");i();i();i();var Fo=n("react"),Yo=n("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Vo=h(n("lodash/uniqBy"));i();i();var Wo=n("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Ho=n("@terradharitri/sdk-dapp/utils");i();var Zo=n("react");i();var Xo=n("react"),$o=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Jo=(0,qr.createContext)({});i();i();var Er=h(n("react")),Qo=n("formik");i();i();i();i();i();var Ko=n("react"),en=n("@terradharitri/sdk-dapp/utils");i();var rn=n("react"),tn=n("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");i();i();var on=n("@terradharitri/sdk-dapp/utils/account/addressIsValid"),nn=h(n("axios"));i();var an=h(n("axios")),un=(0,Er.createContext)({}),xr=(0,_e.createContext)({});function Ar(){return(0,_e.useContext)(xr)}i();i();var pn=n("@terradharitri/sdk-dapp/constants/index"),sn=n("@terradharitri/sdk-dapp/utils/validation"),ln=h(n("bignumber.js"));i();i();var fn=n("react");i();var Br=h(n("bignumber.js")),Lr=c=>{let[l,s]=c.split(""),y=new Br.default(l).isZero();return Boolean(y&&s&&s!==".")};i();var Ur=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ur));var z={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},Ir=()=>{let{formInfo:c,gasInfo:l}=Ar(),{readonly:s}=c,{defaultGasLimit:y,onResetGasLimit:b,onChangeGasLimit:q,onBlurGasLimit:v,gasLimit:a,gasLimitError:S,isGasLimitInvalid:E}=l,I=m=>{m.preventDefault(),b()},w=({value:m,floatValue:_})=>(!_||!(0,nr.default)(_).isNaN())&&!Lr(m),L=m=>{q(m.value,!0)},k=a!==y&&!s,d=sr("gasLimit",s);return G.default.createElement("div",{className:z.gas},G.default.createElement("label",{className:F.label,htmlFor:"gasLimit"},"Gas Limit"),G.default.createElement("div",{className:z.wrapper},G.default.createElement(ar.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:d,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:v,onValueChange:L,required:!0,isAllowed:w,thousandSeparator:",",thousandsGroupStyle:"thousand",value:a,valueIsNumericString:!0,allowNegative:!1,className:(0,le.default)(F.input,z.input,{[F.disabled]:d,[F.invalid]:E,[z.spaced]:k})}),k&&G.default.createElement("div",{className:z.actions},G.default.createElement("div",{onClick:I,"data-testid":"gasLimitResetBtn",className:(0,le.default)(z.action,{[z.disabled]:d})},G.default.createElement(or.FontAwesomeIcon,{icon:tr.faUndo,className:z.icon}))),E&&G.default.createElement("div",{className:F.error,"data-testid":"gasLimitError"},S)))};});var Y={};Z();H(Y,Me(ye()));
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
