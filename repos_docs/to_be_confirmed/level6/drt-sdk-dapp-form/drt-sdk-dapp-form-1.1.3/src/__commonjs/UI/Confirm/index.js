"use strict";var po=Object.create;var ae=Object.defineProperty;var so=Object.getOwnPropertyDescriptor;var co=Object.getOwnPropertyNames,Ke=Object.getOwnPropertySymbols,lo=Object.getPrototypeOf,je=Object.prototype.hasOwnProperty,mo=Object.prototype.propertyIsEnumerable;var Ye=(o,e,r)=>e in o?ae(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,W=(o,e)=>{for(var r in e||(e={}))je.call(e,r)&&Ye(o,r,e[r]);if(Ke)for(var r of Ke(e))mo.call(e,r)&&Ye(o,r,e[r]);return o};var Ae=(o,e)=>()=>(o&&(e=o(o=0)),e);var de=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),Le=(o,e)=>{for(var r in e)ae(o,r,{get:e[r],enumerable:!0})},Je=(o,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of co(e))!je.call(o,n)&&n!==r&&ae(o,n,{get:()=>e[n],enumerable:!(t=so(e,n))||t.enumerable});return o};var _=(o,e,r)=>(r=o!=null?po(lo(o)):{},Je(e||!o||!o.__esModule?ae(r,"default",{value:o,enumerable:!0}):r,o)),ue=o=>Je(ae({},"__esModule",{value:!0}),o);var rr=de(ge=>{"use strict";i();ge.byteLength=uo;ge.toByteArray=bo;ge.fromByteArray=yo;var C=[],N=[],fo=typeof Uint8Array!="undefined"?Uint8Array:Array,Se="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(X=0,Qe=Se.length;X<Qe;++X)C[X]=Se[X],N[Se.charCodeAt(X)]=X;var X,Qe;N["-".charCodeAt(0)]=62;N["_".charCodeAt(0)]=63;function er(o){var e=o.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=o.indexOf("=");r===-1&&(r=e);var t=r===e?0:4-r%4;return[r,t]}function uo(o){var e=er(o),r=e[0],t=e[1];return(r+t)*3/4-t}function go(o,e,r){return(e+r)*3/4-r}function bo(o){var e,r=er(o),t=r[0],n=r[1],a=new fo(go(o,t,n)),p=0,f=n>0?t-4:t,d;for(d=0;d<f;d+=4)e=N[o.charCodeAt(d)]<<18|N[o.charCodeAt(d+1)]<<12|N[o.charCodeAt(d+2)]<<6|N[o.charCodeAt(d+3)],a[p++]=e>>16&255,a[p++]=e>>8&255,a[p++]=e&255;return n===2&&(e=N[o.charCodeAt(d)]<<2|N[o.charCodeAt(d+1)]>>4,a[p++]=e&255),n===1&&(e=N[o.charCodeAt(d)]<<10|N[o.charCodeAt(d+1)]<<4|N[o.charCodeAt(d+2)]>>2,a[p++]=e>>8&255,a[p++]=e&255),a}function ho(o){return C[o>>18&63]+C[o>>12&63]+C[o>>6&63]+C[o&63]}function _o(o,e,r){for(var t,n=[],a=e;a<r;a+=3)t=(o[a]<<16&16711680)+(o[a+1]<<8&65280)+(o[a+2]&255),n.push(ho(t));return n.join("")}function yo(o){for(var e,r=o.length,t=r%3,n=[],a=16383,p=0,f=r-t;p<f;p+=a)n.push(_o(o,p,p+a>f?f:p+a));return t===1?(e=o[r-1],n.push(C[e>>2]+C[e<<4&63]+"==")):t===2&&(e=(o[r-2]<<8)+o[r-1],n.push(C[e>>10]+C[e>>4&63]+C[e<<2&63]+"=")),n.join("")}});var or=de(Ne=>{i();Ne.read=function(o,e,r,t,n){var a,p,f=n*8-t-1,d=(1<<f)-1,b=d>>1,g=-7,u=r?n-1:0,w=r?-1:1,h=o[e+u];for(u+=w,a=h&(1<<-g)-1,h>>=-g,g+=f;g>0;a=a*256+o[e+u],u+=w,g-=8);for(p=a&(1<<-g)-1,a>>=-g,g+=t;g>0;p=p*256+o[e+u],u+=w,g-=8);if(a===0)a=1-b;else{if(a===d)return p?NaN:(h?-1:1)*(1/0);p=p+Math.pow(2,t),a=a-b}return(h?-1:1)*p*Math.pow(2,a-t)};Ne.write=function(o,e,r,t,n,a){var p,f,d,b=a*8-n-1,g=(1<<b)-1,u=g>>1,w=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=t?0:a-1,E=t?1:-1,S=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(f=isNaN(e)?1:0,p=g):(p=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-p))<1&&(p--,d*=2),p+u>=1?e+=w/d:e+=w*Math.pow(2,1-u),e*d>=2&&(p++,d/=2),p+u>=g?(f=0,p=g):p+u>=1?(f=(e*d-1)*Math.pow(2,n),p=p+u):(f=e*Math.pow(2,u-1)*Math.pow(2,n),p=0));n>=8;o[r+h]=f&255,h+=E,f/=256,n-=8);for(p=p<<n|f,b+=n;b>0;o[r+h]=p&255,h+=E,p/=256,b-=8);o[r+h-E]|=S*128}});var gr=de(re=>{"use strict";i();var Ie=rr(),ee=or(),tr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;re.Buffer=s;re.SlowBuffer=ko;re.INSPECT_MAX_BYTES=50;var be=2147483647;re.kMaxLength=be;s.TYPED_ARRAY_SUPPORT=xo();!s.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function xo(){try{var o=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(o,e),o.foo()===42}catch(r){return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(!!s.isBuffer(this))return this.buffer}});Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(!!s.isBuffer(this))return this.byteOffset}});function P(o){if(o>be)throw new RangeError('The value "'+o+'" is invalid for option "size"');var e=new Uint8Array(o);return Object.setPrototypeOf(e,s.prototype),e}function s(o,e,r){if(typeof o=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Ue(o)}return ar(o,e,r)}s.poolSize=8192;function ar(o,e,r){if(typeof o=="string")return To(o,e);if(ArrayBuffer.isView(o))return wo(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(B(o,ArrayBuffer)||o&&B(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(B(o,SharedArrayBuffer)||o&&B(o.buffer,SharedArrayBuffer)))return Ce(o,e,r);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=o.valueOf&&o.valueOf();if(t!=null&&t!==o)return s.from(t,e,r);var n=Eo(o);if(n)return n;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return s.from(o[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}s.from=function(o,e,r){return ar(o,e,r)};Object.setPrototypeOf(s.prototype,Uint8Array.prototype);Object.setPrototypeOf(s,Uint8Array);function pr(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function vo(o,e,r){return pr(o),o<=0?P(o):e!==void 0?typeof r=="string"?P(o).fill(e,r):P(o).fill(e):P(o)}s.alloc=function(o,e,r){return vo(o,e,r)};function Ue(o){return pr(o),P(o<0?0:De(o)|0)}s.allocUnsafe=function(o){return Ue(o)};s.allocUnsafeSlow=function(o){return Ue(o)};function To(o,e){if((typeof e!="string"||e==="")&&(e="utf8"),!s.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=sr(o,e)|0,t=P(r),n=t.write(o,e);return n!==r&&(t=t.slice(0,n)),t}function Fe(o){for(var e=o.length<0?0:De(o.length)|0,r=P(e),t=0;t<e;t+=1)r[t]=o[t]&255;return r}function wo(o){if(B(o,Uint8Array)){var e=new Uint8Array(o);return Ce(e.buffer,e.byteOffset,e.byteLength)}return Fe(o)}function Ce(o,e,r){if(e<0||o.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var t;return e===void 0&&r===void 0?t=new Uint8Array(o):r===void 0?t=new Uint8Array(o,e):t=new Uint8Array(o,e,r),Object.setPrototypeOf(t,s.prototype),t}function Eo(o){if(s.isBuffer(o)){var e=De(o.length)|0,r=P(e);return r.length===0||o.copy(r,0,0,e),r}if(o.length!==void 0)return typeof o.length!="number"||Ge(o.length)?P(0):Fe(o);if(o.type==="Buffer"&&Array.isArray(o.data))return Fe(o.data)}function De(o){if(o>=be)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+be.toString(16)+" bytes");return o|0}function ko(o){return+o!=o&&(o=0),s.alloc(+o)}s.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==s.prototype};s.compare=function(e,r){if(B(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),B(r,Uint8Array)&&(r=s.from(r,r.offset,r.byteLength)),!s.isBuffer(e)||!s.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var t=e.length,n=r.length,a=0,p=Math.min(t,n);a<p;++a)if(e[a]!==r[a]){t=e[a],n=r[a];break}return t<n?-1:n<t?1:0};s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};s.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return s.alloc(0);var t;if(r===void 0)for(r=0,t=0;t<e.length;++t)r+=e[t].length;var n=s.allocUnsafe(r),a=0;for(t=0;t<e.length;++t){var p=e[t];if(B(p,Uint8Array))a+p.length>n.length?s.from(p).copy(n,a):Uint8Array.prototype.set.call(n,p,a);else if(s.isBuffer(p))p.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=p.length}return n};function sr(o,e){if(s.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||B(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var r=o.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&r===0)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Be(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return ur(o).length;default:if(n)return t?-1:Be(o).length;e=(""+e).toLowerCase(),n=!0}}s.byteLength=sr;function Ao(o,e,r){var t=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(o||(o="utf8");;)switch(o){case"hex":return Go(this,e,r);case"utf8":case"utf-8":return lr(this,e,r);case"ascii":return Uo(this,e,r);case"latin1":case"binary":return Do(this,e,r);case"base64":return Co(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Po(this,e,r);default:if(t)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),t=!0}}s.prototype._isBuffer=!0;function H(o,e,r){var t=o[e];o[e]=o[r],o[r]=t}s.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)H(this,r,r+1);return this};s.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)H(this,r,r+3),H(this,r+1,r+2);return this};s.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)H(this,r,r+7),H(this,r+1,r+6),H(this,r+2,r+5),H(this,r+3,r+4);return this};s.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?lr(this,0,e):Ao.apply(this,arguments)};s.prototype.toLocaleString=s.prototype.toString;s.prototype.equals=function(e){if(!s.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:s.compare(this,e)===0};s.prototype.inspect=function(){var e="",r=re.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};tr&&(s.prototype[tr]=s.prototype.inspect);s.prototype.compare=function(e,r,t,n,a){if(B(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),t===void 0&&(t=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),r<0||t>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&r>=t)return 0;if(n>=a)return-1;if(r>=t)return 1;if(r>>>=0,t>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var p=a-n,f=t-r,d=Math.min(p,f),b=this.slice(n,a),g=e.slice(r,t),u=0;u<d;++u)if(b[u]!==g[u]){p=b[u],f=g[u];break}return p<f?-1:f<p?1:0};function cr(o,e,r,t,n){if(o.length===0)return-1;if(typeof r=="string"?(t=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,Ge(r)&&(r=n?0:o.length-1),r<0&&(r=o.length+r),r>=o.length){if(n)return-1;r=o.length-1}else if(r<0)if(n)r=0;else return-1;if(typeof e=="string"&&(e=s.from(e,t)),s.isBuffer(e))return e.length===0?-1:nr(o,e,r,t,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(o,e,r):Uint8Array.prototype.lastIndexOf.call(o,e,r):nr(o,[e],r,t,n);throw new TypeError("val must be string, number or Buffer")}function nr(o,e,r,t,n){var a=1,p=o.length,f=e.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(o.length<2||e.length<2)return-1;a=2,p/=2,f/=2,r/=2}function d(h,E){return a===1?h[E]:h.readUInt16BE(E*a)}var b;if(n){var g=-1;for(b=r;b<p;b++)if(d(o,b)===d(e,g===-1?0:b-g)){if(g===-1&&(g=b),b-g+1===f)return g*a}else g!==-1&&(b-=b-g),g=-1}else for(r+f>p&&(r=p-f),b=r;b>=0;b--){for(var u=!0,w=0;w<f;w++)if(d(o,b+w)!==d(e,w)){u=!1;break}if(u)return b}return-1}s.prototype.includes=function(e,r,t){return this.indexOf(e,r,t)!==-1};s.prototype.indexOf=function(e,r,t){return cr(this,e,r,t,!0)};s.prototype.lastIndexOf=function(e,r,t){return cr(this,e,r,t,!1)};function Lo(o,e,r,t){r=Number(r)||0;var n=o.length-r;t?(t=Number(t),t>n&&(t=n)):t=n;var a=e.length;t>a/2&&(t=a/2);for(var p=0;p<t;++p){var f=parseInt(e.substr(p*2,2),16);if(Ge(f))return p;o[r+p]=f}return p}function So(o,e,r,t){return he(Be(e,o.length-r),o,r,t)}function No(o,e,r,t){return he(qo(e),o,r,t)}function Io(o,e,r,t){return he(ur(e),o,r,t)}function Fo(o,e,r,t){return he(Ro(e,o.length-r),o,r,t)}s.prototype.write=function(e,r,t,n){if(r===void 0)n="utf8",t=this.length,r=0;else if(t===void 0&&typeof r=="string")n=r,t=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(t)?(t=t>>>0,n===void 0&&(n="utf8")):(n=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-r;if((t===void 0||t>a)&&(t=a),e.length>0&&(t<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return Lo(this,e,r,t);case"utf8":case"utf-8":return So(this,e,r,t);case"ascii":case"latin1":case"binary":return No(this,e,r,t);case"base64":return Io(this,e,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Fo(this,e,r,t);default:if(p)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}};s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Co(o,e,r){return e===0&&r===o.length?Ie.fromByteArray(o):Ie.fromByteArray(o.slice(e,r))}function lr(o,e,r){r=Math.min(o.length,r);for(var t=[],n=e;n<r;){var a=o[n],p=null,f=a>239?4:a>223?3:a>191?2:1;if(n+f<=r){var d,b,g,u;switch(f){case 1:a<128&&(p=a);break;case 2:d=o[n+1],(d&192)===128&&(u=(a&31)<<6|d&63,u>127&&(p=u));break;case 3:d=o[n+1],b=o[n+2],(d&192)===128&&(b&192)===128&&(u=(a&15)<<12|(d&63)<<6|b&63,u>2047&&(u<55296||u>57343)&&(p=u));break;case 4:d=o[n+1],b=o[n+2],g=o[n+3],(d&192)===128&&(b&192)===128&&(g&192)===128&&(u=(a&15)<<18|(d&63)<<12|(b&63)<<6|g&63,u>65535&&u<1114112&&(p=u))}}p===null?(p=65533,f=1):p>65535&&(p-=65536,t.push(p>>>10&1023|55296),p=56320|p&1023),t.push(p),n+=f}return Bo(t)}var ir=4096;function Bo(o){var e=o.length;if(e<=ir)return String.fromCharCode.apply(String,o);for(var r="",t=0;t<e;)r+=String.fromCharCode.apply(String,o.slice(t,t+=ir));return r}function Uo(o,e,r){var t="";r=Math.min(o.length,r);for(var n=e;n<r;++n)t+=String.fromCharCode(o[n]&127);return t}function Do(o,e,r){var t="";r=Math.min(o.length,r);for(var n=e;n<r;++n)t+=String.fromCharCode(o[n]);return t}function Go(o,e,r){var t=o.length;(!e||e<0)&&(e=0),(!r||r<0||r>t)&&(r=t);for(var n="",a=e;a<r;++a)n+=Wo[o[a]];return n}function Po(o,e,r){for(var t=o.slice(e,r),n="",a=0;a<t.length-1;a+=2)n+=String.fromCharCode(t[a]+t[a+1]*256);return n}s.prototype.slice=function(e,r){var t=this.length;e=~~e,r=r===void 0?t:~~r,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),r<e&&(r=e);var n=this.subarray(e,r);return Object.setPrototypeOf(n,s.prototype),n};function T(o,e,r){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+e>r)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var n=this[e],a=1,p=0;++p<r&&(a*=256);)n+=this[e+p]*a;return n};s.prototype.readUintBE=s.prototype.readUIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var n=this[e+--r],a=1;r>0&&(a*=256);)n+=this[e+--r]*a;return n};s.prototype.readUint8=s.prototype.readUInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]};s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]|this[e+1]<<8};s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||T(e,2,this.length),this[e]<<8|this[e+1]};s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};s.prototype.readIntLE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var n=this[e],a=1,p=0;++p<r&&(a*=256);)n+=this[e+p]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*r)),n};s.prototype.readIntBE=function(e,r,t){e=e>>>0,r=r>>>0,t||T(e,r,this.length);for(var n=r,a=1,p=this[e+--n];n>0&&(a*=256);)p+=this[e+--n]*a;return a*=128,p>=a&&(p-=Math.pow(2,8*r)),p};s.prototype.readInt8=function(e,r){return e=e>>>0,r||T(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};s.prototype.readInt16LE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t};s.prototype.readInt16BE=function(e,r){e=e>>>0,r||T(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t};s.prototype.readInt32LE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};s.prototype.readInt32BE=function(e,r){return e=e>>>0,r||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};s.prototype.readFloatLE=function(e,r){return e=e>>>0,r||T(e,4,this.length),ee.read(this,e,!0,23,4)};s.prototype.readFloatBE=function(e,r){return e=e>>>0,r||T(e,4,this.length),ee.read(this,e,!1,23,4)};s.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||T(e,8,this.length),ee.read(this,e,!0,52,8)};s.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||T(e,8,this.length),ee.read(this,e,!1,52,8)};function k(o,e,r,t,n,a){if(!s.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(r+t>o.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,r,t,n){if(e=+e,r=r>>>0,t=t>>>0,!n){var a=Math.pow(2,8*t)-1;k(this,e,r,t,a,0)}var p=1,f=0;for(this[r]=e&255;++f<t&&(p*=256);)this[r+f]=e/p&255;return r+t};s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,r,t,n){if(e=+e,r=r>>>0,t=t>>>0,!n){var a=Math.pow(2,8*t)-1;k(this,e,r,t,a,0)}var p=t-1,f=1;for(this[r+p]=e&255;--p>=0&&(f*=256);)this[r+p]=e/f&255;return r+t};s.prototype.writeUint8=s.prototype.writeUInt8=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,1,255,0),this[r]=e&255,r+1};s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};s.prototype.writeIntLE=function(e,r,t,n){if(e=+e,r=r>>>0,!n){var a=Math.pow(2,8*t-1);k(this,e,r,t,a-1,-a)}var p=0,f=1,d=0;for(this[r]=e&255;++p<t&&(f*=256);)e<0&&d===0&&this[r+p-1]!==0&&(d=1),this[r+p]=(e/f>>0)-d&255;return r+t};s.prototype.writeIntBE=function(e,r,t,n){if(e=+e,r=r>>>0,!n){var a=Math.pow(2,8*t-1);k(this,e,r,t,a-1,-a)}var p=t-1,f=1,d=0;for(this[r+p]=e&255;--p>=0&&(f*=256);)e<0&&d===0&&this[r+p+1]!==0&&(d=1),this[r+p]=(e/f>>0)-d&255;return r+t};s.prototype.writeInt8=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};s.prototype.writeInt16LE=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};s.prototype.writeInt16BE=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};s.prototype.writeInt32LE=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};s.prototype.writeInt32BE=function(e,r,t){return e=+e,r=r>>>0,t||k(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function mr(o,e,r,t,n,a){if(r+t>o.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function fr(o,e,r,t,n){return e=+e,r=r>>>0,n||mr(o,e,r,4,34028234663852886e22,-34028234663852886e22),ee.write(o,e,r,t,23,4),r+4}s.prototype.writeFloatLE=function(e,r,t){return fr(this,e,r,!0,t)};s.prototype.writeFloatBE=function(e,r,t){return fr(this,e,r,!1,t)};function dr(o,e,r,t,n){return e=+e,r=r>>>0,n||mr(o,e,r,8,17976931348623157e292,-17976931348623157e292),ee.write(o,e,r,t,52,8),r+8}s.prototype.writeDoubleLE=function(e,r,t){return dr(this,e,r,!0,t)};s.prototype.writeDoubleBE=function(e,r,t){return dr(this,e,r,!1,t)};s.prototype.copy=function(e,r,t,n){if(!s.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!n&&n!==0&&(n=this.length),r>=e.length&&(r=e.length),r||(r=0),n>0&&n<t&&(n=t),n===t||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-r<n-t&&(n=e.length-r+t);var a=n-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,t,n):Uint8Array.prototype.set.call(e,this.subarray(t,n),r),a};s.prototype.fill=function(e,r,t,n){if(typeof e=="string"){if(typeof r=="string"?(n=r,r=0,t=this.length):typeof t=="string"&&(n=t,t=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var a=e.charCodeAt(0);(n==="utf8"&&a<128||n==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<t)throw new RangeError("Out of range index");if(t<=r)return this;r=r>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=r;p<t;++p)this[p]=e;else{var f=s.isBuffer(e)?e:s.from(e,n),d=f.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-r;++p)this[p+r]=f[p%d]}return this};var Mo=/[^+/0-9A-Za-z-_]/g;function Vo(o){if(o=o.split("=")[0],o=o.trim().replace(Mo,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function Be(o,e){e=e||1/0;for(var r,t=o.length,n=null,a=[],p=0;p<t;++p){if(r=o.charCodeAt(p),r>55295&&r<57344){if(!n){if(r>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(p+1===t){(e-=3)>-1&&a.push(239,191,189);continue}n=r;continue}if(r<56320){(e-=3)>-1&&a.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,r<128){if((e-=1)<0)break;a.push(r)}else if(r<2048){if((e-=2)<0)break;a.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;a.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return a}function qo(o){for(var e=[],r=0;r<o.length;++r)e.push(o.charCodeAt(r)&255);return e}function Ro(o,e){for(var r,t,n,a=[],p=0;p<o.length&&!((e-=2)<0);++p)r=o.charCodeAt(p),t=r>>8,n=r%256,a.push(n),a.push(t);return a}function ur(o){return Ie.toByteArray(Vo(o))}function he(o,e,r,t){for(var n=0;n<t&&!(n+r>=e.length||n>=o.length);++n)e[n+r]=o[n];return n}function B(o,e){return o instanceof e||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===e.name}function Ge(o){return o!==o}var Wo=function(){for(var o="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var t=r*16,n=0;n<16;++n)e[t+n]=o[r]+o[n];return e}()});var xr=de((zt,yr)=>{i();var y=yr.exports={},U,D;function Pe(){throw new Error("setTimeout has not been defined")}function Me(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?U=setTimeout:U=Pe}catch(o){U=Pe}try{typeof clearTimeout=="function"?D=clearTimeout:D=Me}catch(o){D=Me}})();function br(o){if(U===setTimeout)return setTimeout(o,0);if((U===Pe||!U)&&setTimeout)return U=setTimeout,setTimeout(o,0);try{return U(o,0)}catch(e){try{return U.call(null,o,0)}catch(r){return U.call(this,o,0)}}}function zo(o){if(D===clearTimeout)return clearTimeout(o);if((D===Me||!D)&&clearTimeout)return D=clearTimeout,clearTimeout(o);try{return D(o)}catch(e){try{return D.call(null,o)}catch(r){return D.call(this,o)}}}var M=[],oe=!1,K,_e=-1;function Oo(){!oe||!K||(oe=!1,K.length?M=K.concat(M):_e=-1,M.length&&hr())}function hr(){if(!oe){var o=br(Oo);oe=!0;for(var e=M.length;e;){for(K=M,M=[];++_e<e;)K&&K[_e].run();_e=-1,e=M.length}K=null,oe=!1,zo(o)}}y.nextTick=function(o){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];M.push(new _r(o,e)),M.length===1&&!oe&&br(hr)};function _r(o,e){this.fun=o,this.array=e}_r.prototype.run=function(){this.fun.apply(null,this.array)};y.title="browser";y.browser=!0;y.env={};y.argv=[];y.version="";y.versions={};function V(){}y.on=V;y.addListener=V;y.once=V;y.off=V;y.removeListener=V;y.removeAllListeners=V;y.emit=V;y.prependListener=V;y.prependOnceListener=V;y.listeners=function(o){return[]};y.binding=function(o){throw new Error("process.binding is not supported")};y.cwd=function(){return"/"};y.chdir=function(o){throw new Error("process.chdir is not supported")};y.umask=function(){return 0}});var c,l,Ot,i=Ae(()=>{c=_(gr()),l=_(xr()),Ot=function(o){function e(){var t=this||self;return delete o.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return e();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var We={};Le(We,{default:()=>Qo});var xe,Jo,Qo,ze=Ae(()=>{"use strict";i();xe=_(require("react")),Jo=o=>xe.createElement("svg",W({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},o),xe.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),xe.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Qo=Jo});var Vr={};Le(Vr,{default:()=>Ft});var ke,It,Ft,qr=Ae(()=>{"use strict";i();ke=_(require("react")),It=o=>ke.createElement("svg",W({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},o),ke.createElement("g",null,ke.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Ft=It});var Pt={};Le(Pt,{Confirm:()=>R,default:()=>Gt});module.exports=ue(Pt);i();var to=require("react");i();i();var q=_(require("react")),we=require("@terradharitri/sdk-dapp/constants/index"),$e=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),kr=require("@terradharitri/sdk-dapp/UI/UsdValue/index");i();var $o=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($o));var A={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};i();i();i();i();var Zo=require("bech32");i();i();i();i();i();var z=require("@terradharitri/sdk-dapp/types/tokens.types");i();i();var Xo=require("@terradharitri/sdk-dapp/constants"),Ho=require("@terradharitri/sdk-dapp/utils/account/getAccount");i();i();var Ko=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");i();var Yo=require("@terradharitri/sdk-dapp/utils/buildUrlParams");i();var ye=_(require("anchorme")),qe=o=>o.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),vr=(o,e)=>{if(e){let r=`[Message hidden due to suspicious content - ${e.info}]`;if(o.length>1e3)return{output:r,stringWithLinks:o,found:!0};let t=qe(o.normalize("NFKC")),n=ye.default.list(t),a=[];if(n.length>0){let p=r;n.forEach((f,d)=>{let{string:b}=f,g="",u="",w=b;for(let h=0;h<p.length;h++){let E=p.slice(h),[S]=ye.default.list(qe(E));S&&b===S.string&&(g=p.substring(0,h))}for(let h=r.length;h>0;h--){let E=p.slice(0,h),[S]=ye.default.list(qe(E));S&&b===S.string&&(u=p.substring(h))}a.push(g),a.push(w),p=u,d===n.length-1&&a.push(u)})}else a.push(o);return{output:r,stringWithLinks:a.join(""),found:!0}}else return{output:o,stringWithLinks:"",found:!1}};i();i();var Tr=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ne=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Re=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),j=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");i();i();i();i();i();i();i();var G=_(require("react")),wr=require("@fortawesome/free-solid-svg-icons"),Er=require("@fortawesome/react-fontawesome"),Oe=_(require("classnames"));i();var jo=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(jo));var O={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var et=(ze(),ue(We)).default,ve=o=>{let{avatar:e,type:r}=o;return r==="NonFungibleDCDT"?G.default.createElement("div",{className:(0,Oe.default)(O.tokenAvatar,O.tokenAvatarNFT)},"NFT"):r==="SemiFungibleDCDT"?G.default.createElement("div",{className:(0,Oe.default)(O.tokenAvatar,O.tokenAvatarSFT)},"SFT"):r==="REWA"?G.default.createElement("div",{className:O.tokenAvatar},o.RewaIcon?G.default.createElement(o.RewaIcon,null):G.default.createElement(et,null)):e?G.default.createElement("div",{className:O.tokenAvatar},G.default.createElement("img",{src:e})):G.default.createElement("div",{className:O.tokenAvatar},G.default.createElement(Er.FontAwesomeIcon,{icon:wr.faDiamond}))};i();var rt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rt));var pe={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Ar=({label:o="Amount",amount:e,txType:r,tokenDecimals:t,tokenId:n,rewaLabel:a,rewaPriceInUsd:p,nft:f,tokenAvatar:d})=>{let b=(f==null?void 0:f.decimals)||0,g=r==="DCDT",u=r==="MetaDCDT",w=r==="NonFungibleDCDT",h=u?(0,j.parseAmount)(e,f==null?void 0:f.decimals):e,E=Boolean(f&&e),S=n.split("-")[0],Q=g?t:we.DECIMALS,fe=E?q.default.createElement($e.FormatAmount,{rewaLabel:a,value:h,decimals:b,digits:r==="MetaDCDT"?we.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):q.default.createElement($e.FormatAmount,{rewaLabel:a,value:(0,j.parseAmount)(e,Q),showLabel:!1,decimals:Q,showLastNonZeroDecimal:!0,token:g?S:a,"data-testid":"confirmAmount"});return w?null:q.default.createElement("div",{className:pe.amount},q.default.createElement("span",{className:A.label},o),q.default.createElement("div",{className:pe.token},q.default.createElement(ve,{type:r,avatar:d}),q.default.createElement("div",{className:pe.value},fe," ",S)),!g&&q.default.createElement(kr.UsdValue,{amount:e,usd:p,"data-testid":"confirmUsdValue",className:pe.price}))};i();i();var x=_(require("react")),Lr=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");i();var ot=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ot));var se={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var tt=(o,e)=>[...o.matchAll(new RegExp(e,"gi"))].map(r=>r.index),Sr=({label:o="Data",scCallLabel:e="SC Call",data:r,highlight:t,isScCall:n})=>{let a=x.default.createElement(x.default.Fragment,null,r),[p,...f]=t&&n?t.split("@"):[];if(r&&t&&tt(r,t).length===1)switch(!0){case r.startsWith(t):{let[,d]=r.split(t);a=x.default.createElement(x.default.Fragment,null,t,x.default.createElement("span",null,d));break}case r.endsWith(t):{let[d]=r.split(t);a=x.default.createElement(x.default.Fragment,null,x.default.createElement("span",null,d),t);break}default:{let[d,b]=r.split(t);a=x.default.createElement(x.default.Fragment,null,x.default.createElement("span",null,d),t,x.default.createElement("span",null,b));break}}return x.default.createElement(x.default.Fragment,null,p&&x.default.createElement("div",{className:se.data},x.default.createElement("span",{className:A.label},e),x.default.createElement("div",{"data-testid":"confirmScCall",className:se.value},[(0,Lr.decodePart)(p),...f].join("@"))),x.default.createElement("div",{className:se.data},x.default.createElement("span",{className:A.label},o),x.default.createElement("div",{"data-testid":"confirmData",className:se.value},r?a:"N/A")))};i();i();var $=_(require("react")),Pr=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");i();i();var I="0";i();i();var ce=require("@terradharitri/sdk-dapp/constants/index");function Nr({feeLimit:o,rewaPriceInUsd:e}){let r=(0,ne.formatAmount)({input:o,decimals:ce.DECIMALS,digits:ce.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Re.getUsdValue)({amount:r,usd:e,decimals:ce.DIGITS})}`}i();var nt=require("@terradharitri/sdk-dapp/constants/index");i();var Fr=require("@terradharitri/sdk-dapp/constants/index"),at=_(require("bignumber.js"));i();var it=require("@terradharitri/sdk-dapp/constants/index");i();var pt=require("@terradharitri/sdk-dapp/constants/index");i();i();var le=require("@terradharitri/sdk-core"),st=require("@terradharitri/sdk-dapp/constants/index"),ct=_(require("bignumber.js"));i();i();var ft=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");i();var dt=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");i();var ut=_(require("bignumber.js"));i();var Tt=require("@terradharitri/sdk-dapp/constants/index"),wt=require("@terradharitri/sdk-dapp/utils/smartContracts"),Et=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),kt=_(require("bignumber.js"));i();var yt=_(require("bignumber.js"));i();i();var _t=_(require("axios"));i();i();i();var ht=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");i();var bt=require("@terradharitri/sdk-dapp/constants/index");i();i();i();var ie=require("@terradharitri/sdk-dapp/constants/index"),Gr=_(require("bignumber.js"));var Br,Ur,Dr,At=(0,ne.formatAmount)({input:String((Br=ie.GAS_PRICE)!=null?Br:1e9),decimals:(Ur=ie.DECIMALS)!=null?Ur:18,showLastNonZeroDecimal:!0,digits:(Dr=ie.DIGITS)!=null?Dr:4}),Fa=new Gr.default(At).times(10).toString(10);i();var Ee=require("@terradharitri/sdk-dapp/constants/index"),Lt=_(require("bignumber.js"));i();var St=_(require("bignumber.js"));i();var Nt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Nt));var me={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Mr=({rewaPriceInUsd:o,label:e="Fee",feeLimit:r,rewaLabel:t})=>$.default.createElement("div",{className:me.fee},$.default.createElement("span",{className:A.label},e),$.default.createElement("div",{className:me.token},$.default.createElement(ve,{type:"REWA"}),$.default.createElement("div",{className:me.value},$.default.createElement(Pr.FormatAmount,{rewaLabel:t,value:r,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),r!==I&&$.default.createElement("span",{className:me.price},Nr({feeLimit:r,rewaPriceInUsd:o})));i();i();var L=_(require("react")),Wr=require("@fortawesome/free-solid-svg-icons"),zr=require("@fortawesome/react-fontawesome"),Or=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),$r=require("@terradharitri/sdk-dapp/UI/CopyButton"),Zr=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Xr=require("@terradharitri/sdk-dapp/UI/Trim"),Hr=_(require("classnames"));i();var{default:Rr}=(qr(),ue(Vr));i();var Ct=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ct));var F={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"};var Kr=({label:o="Receiver",receiver:e,scamReport:r,receiverUsername:t})=>{let n=Boolean(t),a=t!=null?t:e;return L.default.createElement("div",{className:F.confirmReceiver},L.default.createElement("span",{className:A.label},o),L.default.createElement("span",{className:(0,Hr.default)(F.value,{[F.shrunk]:n}),"data-testid":"confirmReceiver"},n&&L.default.createElement(Rr,{className:F.icon}),a,n&&L.default.createElement(Zr.ExplorerLink,{page:`/${Or.ACCOUNTS_ENDPOINT}/${e}`,className:F.explorer})),n&&L.default.createElement("span",{className:F.subValue},L.default.createElement(Xr.Trim,{text:e,className:F.subValueTrim}),L.default.createElement($r.CopyButton,{text:e,className:F.subValueCopy})),r&&L.default.createElement("div",{className:F.scam},L.default.createElement("span",null,L.default.createElement(zr.FontAwesomeIcon,{icon:Wr.faExclamationTriangle,className:F.icon}),L.default.createElement("small",{"data-testid":"confirmScamReport"},r))))};i();i();var Z=_(require("react"));i();i();var v=_(require("react")),Yr=require("@fortawesome/free-solid-svg-icons"),jr=require("@fortawesome/react-fontawesome"),Jr=_(require("@terradharitri/sdk-dapp/constants/index")),Qr=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),eo=_(require("classnames"));i();var Bt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bt));var J={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var Ut=(ze(),ue(We)).default,Ze=({RewaIcon:o,inDropdown:e=!1,isRewa:r,nftTokenDetails:t,nftType:n,token:a})=>{var fe,Xe;let{name:p,identifier:f,balance:d,decimals:b}=a,g=((fe=a.assets)==null?void 0:fe.svgUrl)||((Xe=a.assets)==null?void 0:Xe.pngUrl)||"",u=g?28:20,[w,h]=(0,v.useState)(p);(0,v.useEffect)(()=>{var He;((He=t==null?void 0:t.uris)==null?void 0:He.some(no=>{let io=c.Buffer.from(String(no),"base64").toString(),{found:ao}=vr(io,t==null?void 0:t.scamInfo);return ao}))||h(p)},[p]);let E=v.default.createElement(jr.FontAwesomeIcon,{icon:Yr.faDiamond});n==z.NftEnumType.NonFungibleDCDT&&(E=v.default.createElement("div",{className:"nft-type","data-testid":`${f}-type-nft`},"NFT")),n===z.NftEnumType.SemiFungibleDCDT&&(E=v.default.createElement("div",{className:"nft-type","data-testid":`${f}-type-sft`},"SFT"));let S=!e&&n!==z.NftEnumType.NonFungibleDCDT,Q=v.default.createElement("div",{className:J.tokenElementCircle},E);return g&&(Q=v.default.createElement("img",{className:J.tokenElementCircle,src:g,alt:p,height:u})),r&&(Q=v.default.createElement("div",{className:J.tokenElementCircle},o?v.default.createElement(o,{height:36}):v.default.createElement(Ut,{height:36}))),v.default.createElement("div",{className:(0,eo.default)(A.value,J.tokenElement)},v.default.createElement("div",{className:J.tokenElementWrapper},Q),v.default.createElement("div",{"data-testid":"tokenName"},v.default.createElement("span",{"data-testid":`${f}-element`},v.default.createElement("span",null,w)," ",v.default.createElement("span",{className:J.tokenElementIdentifier},f)),S&&v.default.createElement(Qr.FormatAmount,{rewaLabel:f,value:d||I,digits:n===z.NftEnumType.SemiFungibleDCDT?0:Jr.DIGITS,token:f,showLabel:!1,decimals:b,"data-testid":`${f}-balance`})))};i();var Dt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Dt));var ro={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var oo=({RewaIcon:o,rewaLabel:e,isDcdtTransaction:r,nft:t,tokenAvatar:n,tokenId:a,tokenIdError:p})=>{var d;let f=(t==null?void 0:t.name)||"";return Z.default.createElement("div",{className:ro.token},Z.default.createElement("span",{className:A.label},t?Z.default.createElement("span",null,t==null?void 0:t.name," "):"","Token"),Z.default.createElement("div",null,t?Z.default.createElement(Ze,{inDropdown:!0,token:{name:t==null?void 0:t.name,identifier:t==null?void 0:t.identifier,decimals:0,balance:I,ticker:"",assets:{svgUrl:((d=t==null?void 0:t.assets)==null?void 0:d.svgUrl)||""}}}):Z.default.createElement(Ze,{inDropdown:!0,token:{name:r?f:"DharitrI eGold",identifier:r?a:e,decimals:0,balance:I,ticker:"",assets:{svgUrl:n||""}},isRewa:a===e,RewaIcon:o})),p&&Z.default.createElement("div",{className:A.error},p))};var R=class extends to.Component{render(){return null}};R.Receiver=Kr,R.Amount=Ar,R.Fee=Mr,R.Data=Sr,R.Token=oo;var Gt=R;0&&(module.exports={Confirm});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
