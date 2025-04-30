"use strict";var An=Object.create;var Re=Object.defineProperty,In=Object.defineProperties,Ln=Object.getOwnPropertyDescriptor,Nn=Object.getOwnPropertyDescriptors,Pn=Object.getOwnPropertyNames,He=Object.getOwnPropertySymbols,Fn=Object.getPrototypeOf,bo=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable;var it=(t,e,o)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,y=(t,e)=>{for(var o in e||(e={}))bo.call(e,o)&&it(t,o,e[o]);if(He)for(var o of He(e))st.call(e,o)&&it(t,o,e[o]);return t},S=(t,e)=>In(t,Nn(e));var pt=(t,e)=>{var o={};for(var n in t)bo.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&He)for(var n of He(t))e.indexOf(n)<0&&st.call(t,n)&&(o[n]=t[n]);return o};var ct=(t,e)=>()=>(t&&(e=t(t=0)),e);var Xe=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),vo=(t,e)=>{for(var o in e)Re(t,o,{get:e[o],enumerable:!0})},lt=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Pn(e))!bo.call(t,a)&&a!==o&&Re(t,a,{get:()=>e[a],enumerable:!(n=Ln(e,a))||n.enumerable});return t};var u=(t,e,o)=>(o=t!=null?An(Fn(t)):{},lt(e||!t||!t.__esModule?Re(o,"default",{value:t,enumerable:!0}):o,t)),ko=t=>lt(Re({},"__esModule",{value:!0}),t);var k=(t,e,o)=>new Promise((n,a)=>{var l=f=>{try{d(o.next(f))}catch(h){a(h)}},c=f=>{try{d(o.throw(f))}catch(h){a(h)}},d=f=>f.done?n(f.value):Promise.resolve(f.value).then(l,c);d((o=o.apply(t,e)).next())});var ut=Xe(je=>{"use strict";r();je.byteLength=Dn;je.toByteArray=Vn;je.fromByteArray=Rn;var W=[],G=[],Bn=typeof Uint8Array!="undefined"?Uint8Array:Array,So="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_e=0,mt=So.length;_e<mt;++_e)W[_e]=So[_e],G[So.charCodeAt(_e)]=_e;var _e,mt;G["-".charCodeAt(0)]=62;G["_".charCodeAt(0)]=63;function dt(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function Dn(t){var e=dt(t),o=e[0],n=e[1];return(o+n)*3/4-n}function Gn(t,e,o){return(e+o)*3/4-o}function Vn(t){var e,o=dt(t),n=o[0],a=o[1],l=new Bn(Gn(t,n,a)),c=0,d=a>0?n-4:n,f;for(f=0;f<d;f+=4)e=G[t.charCodeAt(f)]<<18|G[t.charCodeAt(f+1)]<<12|G[t.charCodeAt(f+2)]<<6|G[t.charCodeAt(f+3)],l[c++]=e>>16&255,l[c++]=e>>8&255,l[c++]=e&255;return a===2&&(e=G[t.charCodeAt(f)]<<2|G[t.charCodeAt(f+1)]>>4,l[c++]=e&255),a===1&&(e=G[t.charCodeAt(f)]<<10|G[t.charCodeAt(f+1)]<<4|G[t.charCodeAt(f+2)]>>2,l[c++]=e>>8&255,l[c++]=e&255),l}function Un(t){return W[t>>18&63]+W[t>>12&63]+W[t>>6&63]+W[t&63]}function Mn(t,e,o){for(var n,a=[],l=e;l<o;l+=3)n=(t[l]<<16&16711680)+(t[l+1]<<8&65280)+(t[l+2]&255),a.push(Un(n));return a.join("")}function Rn(t){for(var e,o=t.length,n=o%3,a=[],l=16383,c=0,d=o-n;c<d;c+=l)a.push(Mn(t,c,c+l>d?d:c+l));return n===1?(e=t[o-1],a.push(W[e>>2]+W[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],a.push(W[e>>10]+W[e>>4&63]+W[e<<2&63]+"=")),a.join("")}});var ft=Xe(wo=>{r();wo.read=function(t,e,o,n,a){var l,c,d=a*8-n-1,f=(1<<d)-1,h=f>>1,_=-7,g=o?a-1:0,T=o?-1:1,v=t[e+g];for(g+=T,l=v&(1<<-_)-1,v>>=-_,_+=d;_>0;l=l*256+t[e+g],g+=T,_-=8);for(c=l&(1<<-_)-1,l>>=-_,_+=n;_>0;c=c*256+t[e+g],g+=T,_-=8);if(l===0)l=1-h;else{if(l===f)return c?NaN:(v?-1:1)*(1/0);c=c+Math.pow(2,n),l=l-h}return(v?-1:1)*c*Math.pow(2,l-n)};wo.write=function(t,e,o,n,a,l){var c,d,f,h=l*8-a-1,_=(1<<h)-1,g=_>>1,T=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=n?0:l-1,P=n?1:-1,O=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(d=isNaN(e)?1:0,c=_):(c=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-c))<1&&(c--,f*=2),c+g>=1?e+=T/f:e+=T*Math.pow(2,1-g),e*f>=2&&(c++,f/=2),c+g>=_?(d=0,c=_):c+g>=1?(d=(e*f-1)*Math.pow(2,a),c=c+g):(d=e*Math.pow(2,g-1)*Math.pow(2,a),c=0));a>=8;t[o+v]=d&255,v+=P,d/=256,a-=8);for(c=c<<a|d,h+=a;h>0;t[o+v]=c&255,v+=P,c/=256,h-=8);t[o+v-P]|=O*128}});var Ct=Xe(Ae=>{"use strict";r();var Eo=ut(),Ce=ft(),_t=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ae.Buffer=m;Ae.SlowBuffer=Kn;Ae.INSPECT_MAX_BYTES=50;var Je=2147483647;Ae.kMaxLength=Je;m.TYPED_ARRAY_SUPPORT=On();!m.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function On(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.buffer}});Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.byteOffset}});function Q(t){if(t>Je)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,m.prototype),e}function m(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Lo(t)}return xt(t,e,o)}m.poolSize=8192;function xt(t,e,o){if(typeof t=="string")return $n(t,e);if(ArrayBuffer.isView(t))return Wn(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(z(t,ArrayBuffer)||t&&z(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(z(t,SharedArrayBuffer)||t&&z(t.buffer,SharedArrayBuffer)))return Ao(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return m.from(n,e,o);var a=zn(t);if(a)return a;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return m.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}m.from=function(t,e,o){return xt(t,e,o)};Object.setPrototypeOf(m.prototype,Uint8Array.prototype);Object.setPrototypeOf(m,Uint8Array);function yt(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function qn(t,e,o){return yt(t),t<=0?Q(t):e!==void 0?typeof o=="string"?Q(t).fill(e,o):Q(t).fill(e):Q(t)}m.alloc=function(t,e,o){return qn(t,e,o)};function Lo(t){return yt(t),Q(t<0?0:No(t)|0)}m.allocUnsafe=function(t){return Lo(t)};m.allocUnsafeSlow=function(t){return Lo(t)};function $n(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!m.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Tt(t,e)|0,n=Q(o),a=n.write(t,e);return a!==o&&(n=n.slice(0,a)),n}function Co(t){for(var e=t.length<0?0:No(t.length)|0,o=Q(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function Wn(t){if(z(t,Uint8Array)){var e=new Uint8Array(t);return Ao(e.buffer,e.byteOffset,e.byteLength)}return Co(t)}function Ao(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,m.prototype),n}function zn(t){if(m.isBuffer(t)){var e=No(t.length)|0,o=Q(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||Po(t.length)?Q(0):Co(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Co(t.data)}function No(t){if(t>=Je)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Je.toString(16)+" bytes");return t|0}function Kn(t){return+t!=t&&(t=0),m.alloc(+t)}m.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==m.prototype};m.compare=function(e,o){if(z(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),z(o,Uint8Array)&&(o=m.from(o,o.offset,o.byteLength)),!m.isBuffer(e)||!m.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,a=o.length,l=0,c=Math.min(n,a);l<c;++l)if(e[l]!==o[l]){n=e[l],a=o[l];break}return n<a?-1:a<n?1:0};m.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};m.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return m.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var a=m.allocUnsafe(o),l=0;for(n=0;n<e.length;++n){var c=e[n];if(z(c,Uint8Array))l+c.length>a.length?m.from(c).copy(a,l):Uint8Array.prototype.set.call(a,c,l);else if(m.isBuffer(c))c.copy(a,l);else throw new TypeError('"list" argument must be an Array of Buffers');l+=c.length}return a};function Tt(t,e){if(m.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||z(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var a=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Io(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Et(t).length;default:if(a)return n?-1:Io(t).length;e=(""+e).toLowerCase(),a=!0}}m.byteLength=Tt;function Zn(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return ra(this,e,o);case"utf8":case"utf-8":return vt(this,e,o);case"ascii":return oa(this,e,o);case"latin1":case"binary":return ta(this,e,o);case"base64":return Qn(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return na(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}m.prototype._isBuffer=!0;function ge(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}m.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)ge(this,o,o+1);return this};m.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)ge(this,o,o+3),ge(this,o+1,o+2);return this};m.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)ge(this,o,o+7),ge(this,o+1,o+6),ge(this,o+2,o+5),ge(this,o+3,o+4);return this};m.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?vt(this,0,e):Zn.apply(this,arguments)};m.prototype.toLocaleString=m.prototype.toString;m.prototype.equals=function(e){if(!m.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:m.compare(this,e)===0};m.prototype.inspect=function(){var e="",o=Ae.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};_t&&(m.prototype[_t]=m.prototype.inspect);m.prototype.compare=function(e,o,n,a,l){if(z(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),!m.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),a===void 0&&(a=0),l===void 0&&(l=this.length),o<0||n>e.length||a<0||l>this.length)throw new RangeError("out of range index");if(a>=l&&o>=n)return 0;if(a>=l)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,a>>>=0,l>>>=0,this===e)return 0;for(var c=l-a,d=n-o,f=Math.min(c,d),h=this.slice(a,l),_=e.slice(o,n),g=0;g<f;++g)if(h[g]!==_[g]){c=h[g],d=_[g];break}return c<d?-1:d<c?1:0};function bt(t,e,o,n,a){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Po(o)&&(o=a?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(a)return-1;o=t.length-1}else if(o<0)if(a)o=0;else return-1;if(typeof e=="string"&&(e=m.from(e,n)),m.isBuffer(e))return e.length===0?-1:gt(t,e,o,n,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):gt(t,[e],o,n,a);throw new TypeError("val must be string, number or Buffer")}function gt(t,e,o,n,a){var l=1,c=t.length,d=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;l=2,c/=2,d/=2,o/=2}function f(v,P){return l===1?v[P]:v.readUInt16BE(P*l)}var h;if(a){var _=-1;for(h=o;h<c;h++)if(f(t,h)===f(e,_===-1?0:h-_)){if(_===-1&&(_=h),h-_+1===d)return _*l}else _!==-1&&(h-=h-_),_=-1}else for(o+d>c&&(o=c-d),h=o;h>=0;h--){for(var g=!0,T=0;T<d;T++)if(f(t,h+T)!==f(e,T)){g=!1;break}if(g)return h}return-1}m.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};m.prototype.indexOf=function(e,o,n){return bt(this,e,o,n,!0)};m.prototype.lastIndexOf=function(e,o,n){return bt(this,e,o,n,!1)};function Hn(t,e,o,n){o=Number(o)||0;var a=t.length-o;n?(n=Number(n),n>a&&(n=a)):n=a;var l=e.length;n>l/2&&(n=l/2);for(var c=0;c<n;++c){var d=parseInt(e.substr(c*2,2),16);if(Po(d))return c;t[o+c]=d}return c}function Xn(t,e,o,n){return Ye(Io(e,t.length-o),t,o,n)}function jn(t,e,o,n){return Ye(sa(e),t,o,n)}function Jn(t,e,o,n){return Ye(Et(e),t,o,n)}function Yn(t,e,o,n){return Ye(pa(e,t.length-o),t,o,n)}m.prototype.write=function(e,o,n,a){if(o===void 0)a="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")a=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,a===void 0&&(a="utf8")):(a=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var l=this.length-o;if((n===void 0||n>l)&&(n=l),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var c=!1;;)switch(a){case"hex":return Hn(this,e,o,n);case"utf8":case"utf-8":return Xn(this,e,o,n);case"ascii":case"latin1":case"binary":return jn(this,e,o,n);case"base64":return Jn(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yn(this,e,o,n);default:if(c)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),c=!0}};m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Qn(t,e,o){return e===0&&o===t.length?Eo.fromByteArray(t):Eo.fromByteArray(t.slice(e,o))}function vt(t,e,o){o=Math.min(t.length,o);for(var n=[],a=e;a<o;){var l=t[a],c=null,d=l>239?4:l>223?3:l>191?2:1;if(a+d<=o){var f,h,_,g;switch(d){case 1:l<128&&(c=l);break;case 2:f=t[a+1],(f&192)===128&&(g=(l&31)<<6|f&63,g>127&&(c=g));break;case 3:f=t[a+1],h=t[a+2],(f&192)===128&&(h&192)===128&&(g=(l&15)<<12|(f&63)<<6|h&63,g>2047&&(g<55296||g>57343)&&(c=g));break;case 4:f=t[a+1],h=t[a+2],_=t[a+3],(f&192)===128&&(h&192)===128&&(_&192)===128&&(g=(l&15)<<18|(f&63)<<12|(h&63)<<6|_&63,g>65535&&g<1114112&&(c=g))}}c===null?(c=65533,d=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|c&1023),n.push(c),a+=d}return ea(n)}var ht=4096;function ea(t){var e=t.length;if(e<=ht)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=ht));return o}function oa(t,e,o){var n="";o=Math.min(t.length,o);for(var a=e;a<o;++a)n+=String.fromCharCode(t[a]&127);return n}function ta(t,e,o){var n="";o=Math.min(t.length,o);for(var a=e;a<o;++a)n+=String.fromCharCode(t[a]);return n}function ra(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var a="",l=e;l<o;++l)a+=ca[t[l]];return a}function na(t,e,o){for(var n=t.slice(e,o),a="",l=0;l<n.length-1;l+=2)a+=String.fromCharCode(n[l]+n[l+1]*256);return a}m.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var a=this.subarray(e,o);return Object.setPrototypeOf(a,m.prototype),a};function I(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}m.prototype.readUintLE=m.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||I(e,o,this.length);for(var a=this[e],l=1,c=0;++c<o&&(l*=256);)a+=this[e+c]*l;return a};m.prototype.readUintBE=m.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||I(e,o,this.length);for(var a=this[e+--o],l=1;o>0&&(l*=256);)a+=this[e+--o]*l;return a};m.prototype.readUint8=m.prototype.readUInt8=function(e,o){return e=e>>>0,o||I(e,1,this.length),this[e]};m.prototype.readUint16LE=m.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||I(e,2,this.length),this[e]|this[e+1]<<8};m.prototype.readUint16BE=m.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||I(e,2,this.length),this[e]<<8|this[e+1]};m.prototype.readUint32LE=m.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};m.prototype.readUint32BE=m.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};m.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||I(e,o,this.length);for(var a=this[e],l=1,c=0;++c<o&&(l*=256);)a+=this[e+c]*l;return l*=128,a>=l&&(a-=Math.pow(2,8*o)),a};m.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||I(e,o,this.length);for(var a=o,l=1,c=this[e+--a];a>0&&(l*=256);)c+=this[e+--a]*l;return l*=128,c>=l&&(c-=Math.pow(2,8*o)),c};m.prototype.readInt8=function(e,o){return e=e>>>0,o||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};m.prototype.readInt16LE=function(e,o){e=e>>>0,o||I(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};m.prototype.readInt16BE=function(e,o){e=e>>>0,o||I(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};m.prototype.readInt32LE=function(e,o){return e=e>>>0,o||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};m.prototype.readInt32BE=function(e,o){return e=e>>>0,o||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};m.prototype.readFloatLE=function(e,o){return e=e>>>0,o||I(e,4,this.length),Ce.read(this,e,!0,23,4)};m.prototype.readFloatBE=function(e,o){return e=e>>>0,o||I(e,4,this.length),Ce.read(this,e,!1,23,4)};m.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||I(e,8,this.length),Ce.read(this,e,!0,52,8)};m.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||I(e,8,this.length),Ce.read(this,e,!1,52,8)};function B(t,e,o,n,a,l){if(!m.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<l)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}m.prototype.writeUintLE=m.prototype.writeUIntLE=function(e,o,n,a){if(e=+e,o=o>>>0,n=n>>>0,!a){var l=Math.pow(2,8*n)-1;B(this,e,o,n,l,0)}var c=1,d=0;for(this[o]=e&255;++d<n&&(c*=256);)this[o+d]=e/c&255;return o+n};m.prototype.writeUintBE=m.prototype.writeUIntBE=function(e,o,n,a){if(e=+e,o=o>>>0,n=n>>>0,!a){var l=Math.pow(2,8*n)-1;B(this,e,o,n,l,0)}var c=n-1,d=1;for(this[o+c]=e&255;--c>=0&&(d*=256);)this[o+c]=e/d&255;return o+n};m.prototype.writeUint8=m.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,1,255,0),this[o]=e&255,o+1};m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};m.prototype.writeIntLE=function(e,o,n,a){if(e=+e,o=o>>>0,!a){var l=Math.pow(2,8*n-1);B(this,e,o,n,l-1,-l)}var c=0,d=1,f=0;for(this[o]=e&255;++c<n&&(d*=256);)e<0&&f===0&&this[o+c-1]!==0&&(f=1),this[o+c]=(e/d>>0)-f&255;return o+n};m.prototype.writeIntBE=function(e,o,n,a){if(e=+e,o=o>>>0,!a){var l=Math.pow(2,8*n-1);B(this,e,o,n,l-1,-l)}var c=n-1,d=1,f=0;for(this[o+c]=e&255;--c>=0&&(d*=256);)e<0&&f===0&&this[o+c+1]!==0&&(f=1),this[o+c]=(e/d>>0)-f&255;return o+n};m.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};m.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};m.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};m.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};m.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function kt(t,e,o,n,a,l){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function St(t,e,o,n,a){return e=+e,o=o>>>0,a||kt(t,e,o,4,34028234663852886e22,-34028234663852886e22),Ce.write(t,e,o,n,23,4),o+4}m.prototype.writeFloatLE=function(e,o,n){return St(this,e,o,!0,n)};m.prototype.writeFloatBE=function(e,o,n){return St(this,e,o,!1,n)};function wt(t,e,o,n,a){return e=+e,o=o>>>0,a||kt(t,e,o,8,17976931348623157e292,-17976931348623157e292),Ce.write(t,e,o,n,52,8),o+8}m.prototype.writeDoubleLE=function(e,o,n){return wt(this,e,o,!0,n)};m.prototype.writeDoubleBE=function(e,o,n){return wt(this,e,o,!1,n)};m.prototype.copy=function(e,o,n,a){if(!m.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!a&&a!==0&&(a=this.length),o>=e.length&&(o=e.length),o||(o=0),a>0&&a<n&&(a=n),a===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-o<a-n&&(a=e.length-o+n);var l=a-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,a):Uint8Array.prototype.set.call(e,this.subarray(n,a),o),l};m.prototype.fill=function(e,o,n,a){if(typeof e=="string"){if(typeof o=="string"?(a=o,o=0,n=this.length):typeof n=="string"&&(a=n,n=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!m.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){var l=e.charCodeAt(0);(a==="utf8"&&l<128||a==="latin1")&&(e=l)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var c;if(typeof e=="number")for(c=o;c<n;++c)this[c]=e;else{var d=m.isBuffer(e)?e:m.from(e,a),f=d.length;if(f===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<n-o;++c)this[c+o]=d[c%f]}return this};var aa=/[^+/0-9A-Za-z-_]/g;function ia(t){if(t=t.split("=")[0],t=t.trim().replace(aa,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Io(t,e){e=e||1/0;for(var o,n=t.length,a=null,l=[],c=0;c<n;++c){if(o=t.charCodeAt(c),o>55295&&o<57344){if(!a){if(o>56319){(e-=3)>-1&&l.push(239,191,189);continue}else if(c+1===n){(e-=3)>-1&&l.push(239,191,189);continue}a=o;continue}if(o<56320){(e-=3)>-1&&l.push(239,191,189),a=o;continue}o=(a-55296<<10|o-56320)+65536}else a&&(e-=3)>-1&&l.push(239,191,189);if(a=null,o<128){if((e-=1)<0)break;l.push(o)}else if(o<2048){if((e-=2)<0)break;l.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;l.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;l.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return l}function sa(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function pa(t,e){for(var o,n,a,l=[],c=0;c<t.length&&!((e-=2)<0);++c)o=t.charCodeAt(c),n=o>>8,a=o%256,l.push(a),l.push(n);return l}function Et(t){return Eo.toByteArray(ia(t))}function Ye(t,e,o,n){for(var a=0;a<n&&!(a+o>=e.length||a>=t.length);++a)e[a+o]=t[a];return a}function z(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Po(t){return t!==t}var ca=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,a=0;a<16;++a)e[n+a]=t[o]+t[a];return e}()});var Pt=Xe((ip,Nt)=>{r();var C=Nt.exports={},K,Z;function Fo(){throw new Error("setTimeout has not been defined")}function Bo(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?K=setTimeout:K=Fo}catch(t){K=Fo}try{typeof clearTimeout=="function"?Z=clearTimeout:Z=Bo}catch(t){Z=Bo}})();function At(t){if(K===setTimeout)return setTimeout(t,0);if((K===Fo||!K)&&setTimeout)return K=setTimeout,setTimeout(t,0);try{return K(t,0)}catch(e){try{return K.call(null,t,0)}catch(o){return K.call(this,t,0)}}}function la(t){if(Z===clearTimeout)return clearTimeout(t);if((Z===Bo||!Z)&&clearTimeout)return Z=clearTimeout,clearTimeout(t);try{return Z(t)}catch(e){try{return Z.call(null,t)}catch(o){return Z.call(this,t)}}}var ee=[],Ie=!1,he,Qe=-1;function ma(){!Ie||!he||(Ie=!1,he.length?ee=he.concat(ee):Qe=-1,ee.length&&It())}function It(){if(!Ie){var t=At(ma);Ie=!0;for(var e=ee.length;e;){for(he=ee,ee=[];++Qe<e;)he&&he[Qe].run();Qe=-1,e=ee.length}he=null,Ie=!1,la(t)}}C.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];ee.push(new Lt(t,e)),ee.length===1&&!Ie&&At(It)};function Lt(t,e){this.fun=t,this.array=e}Lt.prototype.run=function(){this.fun.apply(null,this.array)};C.title="browser";C.browser=!0;C.env={};C.argv=[];C.version="";C.versions={};function oe(){}C.on=oe;C.addListener=oe;C.once=oe;C.off=oe;C.removeListener=oe;C.removeAllListeners=oe;C.emit=oe;C.prependListener=oe;C.prependOnceListener=oe;C.listeners=function(t){return[]};C.binding=function(t){throw new Error("process.binding is not supported")};C.cwd=function(){return"/"};C.chdir=function(t){throw new Error("process.chdir is not supported")};C.umask=function(){return 0}});var i,s,sp,r=ct(()=>{i=u(Ct()),s=u(Pt()),sp=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var qo={};vo(qo,{default:()=>Na});var ao,La,Na,$o=ct(()=>{"use strict";r();ao=u(require("react")),La=t=>ao.createElement("svg",y({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),ao.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),ao.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Na=La});var op={};vo(op,{AmountSelect:()=>Ho,AmountSelectInput:()=>ep});module.exports=ko(op);r();r();var U=u(require("react")),co=u(require("classnames"));r();var da=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(da));var te={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};r();r();var ua=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ua));var pe={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};r();r();r();var E=u(require("react")),Mt=require("@terradharitri/sdk-dapp/utils/validation"),oo=u(require("bignumber.js")),Go=u(require("classnames")),Rt=require("react-number-format");r();var fa=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fa));var Oe={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};r();r();var ce=require("@terradharitri/sdk-dapp/constants/index"),Ft=require("@terradharitri/sdk-dapp/utils/validation"),re=u(require("bignumber.js")),Bt=(t,e)=>{let o=e!=null?e:ce.DIGITS;if((0,Ft.stringIsFloat)(t)){if(new re.default(t).isZero())return"0";let a=new re.default(t).toFormat(o);return a=parseFloat(a)>0?a:new re.default(t).toFormat(ce.DIGITS),a=parseFloat(a)>0?a:new re.default(t).toFormat(ce.DIGITS+2),a=parseFloat(a)>0?a:new re.default(t).toFormat(ce.DIGITS+4),a=parseFloat(a)>0?a:new re.default(t).toFormat(ce.DIGITS+6),a=parseFloat(a)>0?a:new re.default(t).toFormat(ce.DIGITS+10),parseFloat(a)>0?a:new re.default(t).toFormat(ce.DIGITS+14)}return"0"};r();var Do=t=>t.replace(/,/g,"");r();var eo=require("react"),_a={value:"",count:0},Dt=(t,e)=>{let[o,n]=(0,eo.useState)(_a);return(0,eo.useEffect)(()=>{let l=setTimeout(()=>{n(t)},e);return()=>clearTimeout(l)},[t.count]),o};r();var Gt=u(require("bignumber.js")),Vt=t=>{let[e,o]=t.split(""),n=new Gt.default(e).isZero();return Boolean(n&&o&&!(o==="."))};var ga=500,Ut=1e13,ha=({"data-testid":t,InfoDustComponent:e,disabled:o,handleBlur:n,handleChange:a,name:l,onDebounceChange:c,onFocus:d,onKeyDown:f,placeholder:h,required:_,usdPrice:g,value:T,usdValue:v,className:P,autoFocus:O,suffix:q})=>{let ie=(0,E.useRef)(null),[$,j]=(0,E.useState)(),[ke,J]=(0,E.useState)(!1),[Se,Ue]=(0,E.useState)({value:T,count:0}),[L,se]=(0,E.useState)(),ue=Dt(Se,ga),M=b=>{b.stopPropagation(),J(!0);let w=Do(b.target.value),F=(0,oo.default)(w).isLessThanOrEqualTo(Ut);if((w===""||F)&&(j(w),b.target.value=w,a(b),c)){let fe={value:w,count:Se.count+1};Ue(fe)}},Me=()=>{if(v)return se(`$${v}`);if(!g||!T)return se(void 0);let b=Do(T);if(!(T!==""&&(0,Mt.stringIsFloat)(b))||b==="")return se(void 0);let F=Bt(new oo.default(b).times(g!=null?g:0).toString(10),2);se(`$${F}`)},we=({value:b,floatValue:w})=>(!w||(0,oo.default)(w).isLessThanOrEqualTo(Ut))&&!Vt(b);return(0,E.useEffect)(()=>{c&&ke&&(J(!1),c(ue.value))},[ue]),(0,E.useEffect)(Me,[T,v,g]),(0,E.useEffect)(()=>{T!==$&&j(T)},[T]),E.default.createElement("div",{ref:ie,className:(0,Go.default)(Oe.amountHolder,{[Oe.showUsdValue]:Boolean(L)},P)},E.default.createElement(Rt.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":t||l,decimalSeparator:".",disabled:Boolean(o),id:l,inputMode:"decimal",isAllowed:we,name:l,onBlur:n,onChange:M,onFocus:d,onKeyDown:f,placeholder:h,required:_,thousandSeparator:",",thousandsGroupStyle:"thousand",value:$,suffix:q,valueIsNumericString:!0,allowNegative:!1,autoFocus:O,className:(0,Go.default)(te.input,Oe.amountInput,{[te.disabled]:Boolean(o)})}),L&&E.default.createElement("span",{className:Oe.amountHolderUsd},E.default.createElement("small",{"data-testid":`tokenPrice_${g}`},L!=="$0"?E.default.createElement(E.default.Fragment,null,"\u2248 "):E.default.createElement(E.default.Fragment,null),L),e))},Ot=(0,E.memo)(ha,(t,e)=>t.value===e.value&&t.usdPrice===e.usdPrice&&t.className===e.className&&t.disabled===e.disabled&&t.usdValue===e.usdValue);r();r();var Uo=u(require("react"));r();r();var Le=u(require("react")),$t=require("@fortawesome/free-solid-svg-icons"),Wt=require("@fortawesome/react-fontawesome"),zt=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Kt=require("react-tooltip"),Gp=require("react-tooltip/dist/react-tooltip.css");r();r();var qe="5000000000000000";var qt="WREWA-bd4d79";r();var xa=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(xa));var to={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"};var Zt=({rewaLabel:t})=>Le.default.createElement("div",{className:to.infoDust},Le.default.createElement(Kt.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:to.infoDustTooltip},"A minimal amount of"," ",Le.default.createElement(zt.FormatAmount,{rewaLabel:t,value:qe,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),Le.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:to.infoDustTrigger},Le.default.createElement(Wt.FontAwesomeIcon,{icon:$t.faInfoCircle,className:"i-icon"})));var Ht=({rewaLabel:t,amount:e,maxAmountMinusDust:o,isMaxClicked:n,tokenId:a})=>e===o&&n&&a===t?Uo.default.createElement("span",{style:{marginLeft:"0.2rem"}},Uo.default.createElement(Zt,{rewaLabel:t})):null;r();r();var Qt=u(require("react")),er=require("@terradharitri/sdk-dapp/constants"),Ro=u(require("bignumber.js")),or=u(require("classnames"));r();var Mo=u(require("bignumber.js"));var Xt=t=>{let e=new Mo.default(t!=null?t:"0"),o=new Mo.default(qe),n=e.minus(o);return n.isGreaterThan(0)?n.toString(10):"0"};r();var ya=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ya));var jt={max:"dapp-core-component__maxButton-module__max"};r();var le=require("@terradharitri/sdk-dapp/constants"),Jt=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Yt=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ne=({amount:t="0",decimals:e=0,digits:o=le.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:a=!1})=>{if(t==null||!(0,Yt.stringIsInteger)(t))return"0";let l=d=>(0,Jt.formatAmount)({input:t,digits:d,decimals:e,addCommas:n,showLastNonZeroDecimal:a}),c=l(o);return c=parseFloat(c)>0?c:l(le.DIGITS),c=parseFloat(c)>0?c:l(le.DIGITS+2),c=parseFloat(c)>0?c:l(le.DIGITS+4),c=parseFloat(c)>0?c:l(le.DIGITS+6),c=parseFloat(c)>0?c:l(le.DIGITS+10),parseFloat(c)>0?c:l(le.DIGITS+14)};var tr=({token:t,rewaLabel:e,inputAmount:o,className:n,onMaxClick:a})=>{var _;let l=(t==null?void 0:t.identifier)===e,c=(_=t==null?void 0:t.balance)!=null?_:"0";if(c==="0")return null;let d=Ne({amount:l?Xt(c):c,decimals:(t==null?void 0:t.decimals)||er.DECIMALS}),f=new Ro.default(o).isEqualTo(new Ro.default(d)),h=g=>{g.preventDefault(),a==null||a(d)};return f?null:Qt.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,or.default)(jt.max,n),onClick:h,onMouseDown:g=>{g.preventDefault()}},"Max")};r();r();var V=u(require("react")),Mr=u(require("classnames")),Rr=u(require("react-select"));r();var Ta={D:"devnet",T:"testnet",1:"mainnet"},ba={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function ro(t){return Ta[t]}function rr(t){return ba[t]||qt}var Zo={};vo(Zo,{Control:()=>Ca,IndicatorsContainer:()=>Ia,Input:()=>Sa,Menu:()=>Ea,MenuList:()=>wa,DharitrIIcon:()=>Gr,Placeholder:()=>Aa,SmallLoader:()=>va,ValueComponent:()=>Er,getOption:()=>zo,getSingleValue:()=>Ko,getValueContainer:()=>Wo});r();r();var Oo=u(require("react")),nr=require("@fortawesome/free-solid-svg-icons"),ar=require("@fortawesome/react-fontawesome"),va=({show:t,color:e})=>t?Oo.default.createElement("div",{className:"d-flex"},Oo.default.createElement(ar.FontAwesomeIcon,{icon:nr.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;r();r();var ir=u(require("react")),sr=require("react-select");r();var ka=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ka));var x={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var Sa=t=>ir.default.createElement(sr.components.Input,S(y({},t),{className:x.dropdown,"data-testid":"tokenSelectInput"}));r();var pr=u(require("react")),cr=require("react-select");var wa=t=>{let n=t,{rx:e}=n,o=pt(n,["rx"]);return pr.default.createElement(cr.components.MenuList,S(y({},o),{className:x.list}))};r();var no=u(require("react")),lr=require("@fortawesome/free-solid-svg-icons"),mr=require("@fortawesome/react-fontawesome"),dr=require("react-select");var Ea=t=>no.default.createElement(dr.components.Menu,S(y({},t),{className:x.menu}),t.selectProps.isLoading?no.default.createElement("div",{className:x.loading},no.default.createElement(mr.FontAwesomeIcon,{icon:lr.faCircleNotch,className:"fa-spin",size:"lg"})):t.children);r();var ur=u(require("react")),fr=require("react-select");var Ca=t=>ur.default.createElement(fr.components.Control,S(y({},t),{className:x.control}));r();var _r=u(require("react")),gr=u(require("classnames")),hr=require("react-select");var Aa=t=>_r.default.createElement(hr.components.Placeholder,S(y({},t),{className:(0,gr.default)(x.placeholder,{[x.focused]:t.isFocused})}));r();var xr=u(require("react")),yr=u(require("classnames")),Tr=require("react-select");var Ia=t=>xr.default.createElement(Tr.components.IndicatorsContainer,S(y({},t),{className:(0,yr.default)(x.indicator,{[x.expanded]:t.selectProps.menuIsOpen})}));r();var N=u(require("react")),br=require("@fortawesome/free-solid-svg-icons"),vr=require("@fortawesome/react-fontawesome"),kr=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Sr=u(require("classnames")),wr=require("react-select");var Pa=($o(),ko(qo)).default,Er=({RewaIcon:t,tokenId:e,icon:o})=>{let{isRewa:n}=(0,kr.getIdentifierType)(e);return n?N.default.createElement("span",{className:x.asset},t?N.default.createElement(t,{className:x.diamond}):N.default.createElement(Pa,{className:x.diamond})):o?N.default.createElement("img",{src:o,className:x.asset}):N.default.createElement(vr.FontAwesomeIcon,{icon:br.faDiamond,className:x.asset})},Fa=({children:t})=>N.default.createElement("div",{className:x.wrapper},t),Wo=(t,e,o)=>n=>{var _,g;let{selectProps:a,isDisabled:l,children:c}=n,d=a.value,f=(g=(_=d==null?void 0:d.assets)==null?void 0:_.svgUrl)!=null?g:null,h=(0,N.useMemo)(()=>{let T=String(d==null?void 0:d.token.usdPrice);return T!=null&&T.includes("$")?d==null?void 0:d.token.usdPrice:`$${d==null?void 0:d.token.usdPrice}`},[d==null?void 0:d.token.usdPrice]);return N.default.createElement(wr.components.ValueContainer,S(y({},n),{className:x.container}),N.default.createElement("div",{className:(0,Sr.default)(x.icon,e)},N.default.createElement(Er,{RewaIcon:o,rewaLabel:t,icon:f,isDisabled:l,tokenId:d==null?void 0:d.value})),N.default.createElement("div",{className:x.payload},N.default.createElement(Fa,null,c,(d==null?void 0:d.token.usdPrice)&&N.default.createElement("small",{className:x.price},h))))};r();var A=u(require("react")),Ir=require("@fortawesome/free-solid-svg-icons"),Lr=require("@fortawesome/react-fontawesome"),Nr=require("@terradharitri/sdk-dapp/constants"),Pr=require("@terradharitri/sdk-dapp/UI/UsdValue"),Fr=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Br=u(require("classnames")),Dr=require("react-select");r();r();var $e=u(require("react"));r();var Ba=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ba));var Cr={highlight:"dapp-core-component__styles-modules__highlight"};var Ar=({highlight:t,text:e=""})=>{let o=e.split(" "),n=t.toLowerCase(),a=new RegExp(`(${n})`,"gi"),l=o.map(c=>c.split(a).filter(d=>d));return $e.default.createElement("span",{className:Cr.highlight},l.map((c,d)=>{let f=`${c}-${d}`;return $e.default.createElement("span",{key:f},c.map((h,_)=>{let g=h.toLowerCase()===n,T=n&&g,v=`${h}-${_}`;return T?$e.default.createElement("strong",{key:v},h):$e.default.createElement("span",{key:v},h)}))}))};var{default:Gr}=($o(),ko(qo)),zo=({RewaIcon:t,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>a=>{var q,ie,$,j;let{data:l,isSelected:c,isFocused:d,isDisabled:f,selectProps:h}=a,_=l,{isRewa:g}=(0,Fr.getIdentifierType)(_.value),T=_.token.assets?_.token.assets.svgUrl:null,v=Ne({amount:_.token.balance,decimals:_.token.decimals||Nr.DECIMALS,addCommas:!0}),P=(ie=(q=_.token)==null?void 0:q.usdPrice)==null?void 0:ie.toString(),O=(j=($=_.token)==null?void 0:$.valueUSD)==null?void 0:j.toString();return A.default.createElement("div",{"data-testid":`${a.value}-option`},A.default.createElement(Dr.components.Option,S(y({},a),{className:(0,Br.default)(x.option,{[x.selected]:c||d,[x.disabled]:f})}),A.default.createElement("div",{className:x.image},g?A.default.createElement("span",{className:x.icon},t?A.default.createElement(t,null):A.default.createElement(Gr,null)):T?A.default.createElement("img",{src:T,className:x.icon}):A.default.createElement("span",{className:x.icon},A.default.createElement(Lr.FontAwesomeIcon,{icon:Ir.faDiamond,className:x.diamond}))),A.default.createElement("div",{className:x.info},A.default.createElement("div",{className:x.left},A.default.createElement("div",{className:x.ticker},A.default.createElement("span",{className:x.value},h.inputValue?A.default.createElement(Ar,{text:_.token.ticker,highlight:h.inputValue}):_.token.ticker),e&&A.default.createElement(e,{token:_.token})),n&&A.default.createElement("small",{className:x.price},P)),A.default.createElement("div",{className:x.right},A.default.createElement("span",{className:x.value},v),o&&O&&A.default.createElement(Pr.UsdValue,{usd:1,decimals:4,amount:O,"data-testid":"token-price-usd-value",className:x.price,addEqualSign:!1}))),A.default.createElement("div",{className:x.children},a.children)))};r();var io=u(require("react")),Vr=u(require("classnames")),Ur=require("react-select");var Ko=t=>e=>{let{selectProps:o,children:n}=e,a=o.value;return io.default.createElement(Ur.components.SingleValue,S(y({},e),{className:(0,Vr.default)(x.single,{[x.focused]:e.selectProps.menuIsOpen})}),io.default.createElement("div",{className:x.ticker},n,t&&io.default.createElement(t,{token:a==null?void 0:a.token})))};var{Menu:Da,Control:Ga,Input:Va,MenuList:Ua,IndicatorsContainer:Ma,Placeholder:Ra}=Zo,Or=t=>{let{name:e,options:o,isLoading:n=!1,className:a="",noOptionsMessage:l="No Tokens",disabledOption:c,rewaLabel:d,RewaIcon:f,disabled:h,value:_,onBlur:g,onFocus:T,onChange:v,onMenuOpen:P,chainId:O,wrapperClassName:q="",showTokenPrice:ie=!1,showBalanceUsdValue:$=!1,selectedTokenIconClassName:j,TokenTickerIcon:ke}=t,J=(0,V.useRef)(null),Se=[d,rr(O)],Ue=(0,V.useMemo)(()=>zo({rewaLabel:d,RewaIcon:f,showTokenPrice:ie,showBalanceUsdValue:$,TokenTickerIcon:ke}),[]),L=(0,V.useMemo)(()=>Wo(d,j,f),[]),se=(0,V.useMemo)(()=>Ko(ke),[]);(0,V.useEffect)(()=>{let b=o.find(F=>F.value===(_==null?void 0:_.value)),w=(b==null?void 0:b.token.balance)===(_==null?void 0:_.token.balance);!b||w||v(b)},[o]);let M=b=>Se.includes(b),Me=b=>{var Ze;let w=b.value===(c==null?void 0:c.value),F=M(b.value),fe=M((Ze=c==null?void 0:c.value)!=null?Ze:"");return w||F&&fe},we=(b,w)=>{let F=b.data.token.ticker?b.data.token.ticker.toLowerCase().includes(w.toLowerCase()):!1,fe=b.data.token.name.toLowerCase().includes(w.toLowerCase());return Boolean(w)?F||fe:!0};return V.default.createElement("div",{"data-testid":`${e}Select`,className:`${q} ${n?"select-holder-loading":""}`},V.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:x.label},"Token"),V.default.createElement(Rr.default,{ref:J,inputId:e,name:e,options:o,openMenuOnFocus:!0,isDisabled:h,isLoading:n,value:_,isOptionDisabled:Me,onBlur:g,filterOption:we,onFocus:T,onChange:b=>{v(b),J&&J.current!==null&&J.current.blur()},isSearchable:t.isSearchable,maxMenuHeight:260,onMenuOpen:P,noOptionsMessage:()=>l,className:(0,Mr.default)(x.select,a,{[x.disabled]:t.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:Da,Control:Ga,Input:Va,MenuList:Ua,IndicatorsContainer:Ma,ValueContainer:L,Placeholder:Ra,Option:Ue,SingleValue:se}}))};r();r();var qr=u(require("react")),$r=u(require("classnames"));var Wr=({hasErrors:t,className:e,error:o,"data-testid":n})=>t?qr.default.createElement("div",{className:(0,$r.default)(te.error,e),"data-testid":n},o):null;r();r();var po=u(require("react")),zr=u(require("classnames"));r();var Oa=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Oa));var so={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"};var Kr=({label:t,value:e,className:o,token:n,"data-testid":a,"data-value":l})=>po.default.createElement("div",{"data-testid":a,"data-value":l,className:(0,zr.default)(so.balance,o)},po.default.createElement("span",{className:so.label},t,": "),po.default.createElement("span",{className:so.value},e)," ",n==null?void 0:n.ticker);var Ho=({className:t,label:e,name:o,wrapperControlsClassName:n,tokenSelectProps:a,tokenBalanceProps:l,amountInputProps:c,amountErrorProps:d,maxButtonProps:f,readonly:h})=>U.default.createElement("div",{className:(0,co.default)(pe.amount,t)},U.default.createElement("div",{className:pe.label},e&&U.default.createElement("label",{htmlFor:o,className:te.label,"data-testid":"amountLabel"},e),U.default.createElement(Kr,y({},l))),U.default.createElement("div",{className:(0,co.default)(pe.wrapper,n,{[pe.error]:c.isInvalid||a.isInvalid||d.hasErrors,[pe.disabled]:h})},U.default.createElement(Ot,y({},c)),U.default.createElement("div",{className:(0,co.default)(pe.interaction,f.wrapperClassName)},f.isMaxButtonVisible&&U.default.createElement(tr,y({},f)),U.default.createElement("div",{className:pe.select},U.default.createElement(Or,y({},a))))),U.default.createElement(Wr,y({},d)));r();var Ke=u(require("react")),kn=require("@terradharitri/sdk-dapp/constants"),Sn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");r();var rt=u(require("react")),Qs=require("@terradharitri/sdk-dapp/constants/index");r();r();r();var qa=u(require("axios"));r();r();r();var Xr=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");r();var Zr=require("@terradharitri/sdk-dapp/constants/index");function Hr(t){let e=ro(t),o=Zr.fallbackNetworkConfigurations[e].apiAddress;if(!o)throw"Could not extract api address for environment, check if you have a valid chainID";return o}function Xo(t){return k(this,null,function*(){let e=Hr(t);return yield(0,Xr.getServerConfiguration)(e)})}r();var lo={value:null};function jr(t){return lo.value={baseURL:t.apiAddress,timeout:Number(t.apiTimeout)},lo.value}function H(t){return k(this,null,function*(){if(lo.value!=null)return lo.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),t!=null){let o=yield Xo(t);return jr(o)}let e="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(e),e})}r();r();var Jr=u(require("axios"));function Yr(){return k(this,null,function*(){try{let t=yield H(),{data:e}=yield Jr.default.get("economics",t);return e}catch(t){return console.error("err fetching economics info",t),null}})}r();r();var Qr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),$a=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Wa=u(require("axios")),za=u(require("lodash/uniqBy"));r();var Ka=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Za=u(require("axios"));r();r();r();var me=require("@terradharitri/sdk-dapp/types/tokens.types");r();r();r();r();var en=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ha=u(require("axios"));r();r();var Xa=u(require("axios"));r();var mo=u(require("react")),Nm=(0,mo.createContext)({});r();r();var ve=u(require("react")),Ls=require("@terradharitri/sdk-dapp/constants/index"),Ns=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ps=u(require("bignumber.js")),Fs=require("formik");r();r();r();var ja=require("bech32");r();r();r();var jo=(t,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(t);r();r();r();var Ya=require("@terradharitri/sdk-dapp/constants"),Qa=require("@terradharitri/sdk-dapp/utils/account/getAccount");r();r();var ei=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");r();var oi=require("@terradharitri/sdk-dapp/utils/buildUrlParams");r();var ti=u(require("anchorme"));r();r();var on=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Pe=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),tn=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),ne=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");r();r();var ye=u(require("react")),is=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),ss=require("formik");r();r();var ln=require("@terradharitri/sdk-dapp/constants/index"),ki=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Si=u(require("bignumber.js"));r();r();var rn=require("@terradharitri/sdk-dapp/constants/index");r();var ni=require("@terradharitri/sdk-dapp/constants/index");r();var nn=require("@terradharitri/sdk-dapp/constants/index"),ii=u(require("bignumber.js"));r();var ai=require("@terradharitri/sdk-dapp/constants/index");r();var si=require("@terradharitri/sdk-dapp/constants/index");r();r();var We=require("@terradharitri/sdk-core"),pi=require("@terradharitri/sdk-dapp/constants/index"),ci=u(require("bignumber.js"));r();r();var mi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");r();var di=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");r();var fi=u(require("bignumber.js"));r();var gi=require("@terradharitri/sdk-dapp/constants/index"),hi=require("@terradharitri/sdk-dapp/utils/smartContracts"),xi=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),yi=u(require("bignumber.js"));r();var _i=u(require("bignumber.js"));r();var Be=require("@terradharitri/sdk-dapp/constants/index"),cn=u(require("bignumber.js"));var an,sn,pn,Qo=(0,Pe.formatAmount)({input:String((an=Be.GAS_PRICE)!=null?an:1e9),decimals:(sn=Be.DECIMALS)!=null?sn:18,showLastNonZeroDecimal:!0,digits:(pn=Be.DIGITS)!=null?pn:4}),Ti=new cn.default(Qo).times(10).toString(10);r();var _o=require("@terradharitri/sdk-dapp/constants/index"),bi=u(require("bignumber.js"));r();var vi=u(require("bignumber.js"));r();r();var un=require("yup");r();var go=require("@terradharitri/sdk-dapp/constants/ledger.constants"),mn=u(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),ho=require("yup"),wi=(0,ho.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:o}=this.parent;return!(o&&e&&e.length&&!o.ledgerDataActive)}),Ei=(0,ho.string)().test({name:"hashSign",test:function(e){let{ledger:o,isGuarded:n}=this.parent;if(o){let{ledgerWithHashSign:a,ledgerWithGuardians:l}=(0,mn.default)(o.version);if(e&&e.length>300&&!a)return this.createError({message:`Data too long. You need at least DharitrI app version ${go.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(n&&!l)return this.createError({message:`You need at least DharitrI app version ${go.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Ci=[wi,Ei],Bu=Ci.reduce((t,e)=>t.concat(e),(0,ho.string)());r();var Ai=require("@terradharitri/sdk-dapp/constants/index"),Ii=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Li=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ni=require("yup");r();var Di=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Gi=u(require("bignumber.js")),Vi=require("yup");r();var Pi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Fi=u(require("bignumber.js")),Bi=require("yup");r();var Ui=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Mi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ri=u(require("bignumber.js")),Oi=require("yup");r();var qi=u(require("bignumber.js")),$i=require("yup");r();var Wi=require("@terradharitri/sdk-dapp/constants/index"),zi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ki=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Zi=u(require("bignumber.js")),Hi=require("yup");r();var Xi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ji=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ji=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Yi=u(require("bignumber.js")),Qi=require("yup");r();var es=u(require("bignumber.js")),os=require("yup");r();var ts=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),rs=require("yup");r();var ns=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),as=require("yup");r();r();var ps=(0,ye.createContext)({});function X(){return(0,ye.useContext)(ps)}r();r();var ae=u(require("react")),ms=require("formik"),ds=u(require("lodash/uniqBy"));r();r();var Te=u(require("react"));var cs=(0,Te.createContext)({});function de(){return(0,Te.useContext)(cs)}r();r();var yo=require("react"),fn=require("@terradharitri/sdk-dapp/constants/index");var xo=require("@terradharitri/sdk-dapp/types/enums.types");function ot(){let{networkConfig:t}=de(),[e,o]=(0,yo.useState)(0);function n(){return k(this,null,function*(){let a=yield Yr(),l=(a==null?void 0:a.price)||0;o(l)})}return(0,yo.useEffect)(()=>{![xo.EnvironmentsEnum.mainnet,xo.EnvironmentsEnum.testnet,xo.EnvironmentsEnum.devnet].includes(t==null?void 0:t.id)||n()},[t==null?void 0:t.id]),{rewaLabel:t.rewaLabel,rewaPriceInUsd:e,digits:fn.DIGITS}}r();var M_=(0,ae.createContext)({});r();r();var Tn=require("@terradharitri/sdk-dapp/constants/index"),Is=require("formik");r();r();var be=u(require("react")),xn=require("@terradharitri/sdk-dapp/constants/index"),Ss=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ws=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Es=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Cs=u(require("bignumber.js")),As=require("formik");r();r();r();r();var us=u(require("bignumber.js"));r();var fs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),_s=u(require("bignumber.js"));r();r();var hn=require("react"),hs=require("@terradharitri/sdk-dapp/constants/index"),xs=require("@terradharitri/sdk-dapp/utils/smartContracts"),ys=u(require("bignumber.js")),Ts=require("formik");r();var _n=require("react");r();r();var bs=require("@terradharitri/sdk-dapp/constants/index"),vs=u(require("bignumber.js"));var Wg=(0,be.createContext)({});var Th=(0,ve.createContext)({});r();r();var Ge=u(require("react")),Bs=require("formik");var Dh=(0,Ge.createContext)({});r();r();var Ve=u(require("react")),qs=require("formik");r();r();r();var bn=require("react"),Vs=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Us=u(require("lodash/uniqBy"));r();r();var Ds=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Gs=require("@terradharitri/sdk-dapp/utils");r();var Os=require("react");r();var Ms=require("react"),Rs=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var drt=(0,Ve.createContext)({});r();r();var To=u(require("react")),Js=require("formik");r();r();r();r();r();var Hs=require("react"),Xs=require("@terradharitri/sdk-dapp/utils");r();var Ks=require("react"),Zs=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");r();r();var $s=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ws=u(require("axios"));r();var zs=u(require("axios"));var Hx=(0,To.createContext)({});r();var ze=u(require("react"));var Ys=(0,ze.createContext)({});function vn(){return(0,ze.useContext)(Ys)}var ep=()=>{var nt,at;let{checkInvalid:t}=X(),{tokensInfo:e,amountInfo:o,formInfo:n}=vn(),{readonly:a}=n,{networkConfig:{rewaLabel:l,chainId:c}}=de(),{rewaPriceInUsd:d}=ot(),{amount:f,onBlur:h,onChange:_,onMaxClicked:g,error:T,isInvalid:v,onFocus:P,maxAmountAvailable:O,isMaxClicked:q,isMaxButtonVisible:ie,maxAmountMinusDust:$}=o,{allAvailableTokens:j,areTokensLoading:ke,getTokens:J,isTokenIdInvalid:Se,RewaIcon:Ue,nft:L,onChangeTokenId:se,tokenDetails:ue,tokenId:M,tokenIdError:Me}=e,we=j.map(Y=>({value:Y.identifier,label:String(Y.ticker),assets:Y.assets,token:Y})),{isRewa:b}=(0,Sn.getIdentifierType)(M),w=we.find(({value:Y})=>Y===M),F={id:"tokenId",value:w,name:"tokenId",isLoading:ke,options:we,isSearchable:!0,onChange:Y=>{Y&&(se(Y.value),_(""))},onMenuOpen:J,disabled:jo("tokenId",a),error:Me,isInvalid:Se,rewaLabel:l,chainId:c,RewaIcon:Ue},fe=(0,Ke.useMemo)(()=>Ke.default.createElement(Ht,{amount:f,rewaLabel:l,maxAmountMinusDust:$,tokenId:M,isMaxClicked:q}),[f,l,$,M,q]),Ee={name:"amount",required:!0,value:f,placeholder:"Amount",handleBlur:h,"data-testid":"amount",handleChange:_,onFocus:P,usdPrice:b?d:void 0,error:T,isInvalid:v,InfoDustComponent:fe},Ze={token:ue,inputAmount:f,onMaxClick:g,isMaxClicked:q,isMaxButtonVisible:ie},wn=t("amount")&&!Ee.value,En={hasErrors:Ee.isInvalid||F.isInvalid||wn,error:Ee.error||F.error,className:te.error,"data-testid":Ee.error?`${"amount"}Error`:`${"tokenId"}Error`},Cn={"data-testid":`available-${(nt=L==null?void 0:L.identifier)!=null?nt:M}`,"data-value":`${O} ${(at=L==null?void 0:L.identifier)!=null?at:M}`,label:"Available",token:w==null?void 0:w.token,value:Ne({amount:ue.balance,decimals:ue.decimals||kn.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(L==null?void 0:L.type)===me.NftEnumType.NonFungibleDCDT?null:Ke.default.createElement(Ho,{name:"tokenId",amountErrorProps:En,tokenSelectProps:F,amountInputProps:Ee,tokenBalanceProps:Cn,maxButtonProps:Ze,label:"Amount",readonly:a})};0&&(module.exports={AmountSelect,AmountSelectInput});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
