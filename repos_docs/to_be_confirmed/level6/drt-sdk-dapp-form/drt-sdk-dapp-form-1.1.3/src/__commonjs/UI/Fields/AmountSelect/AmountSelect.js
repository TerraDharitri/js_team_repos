"use strict";var $t=Object.create;var ie=Object.defineProperty,Xt=Object.defineProperties,qt=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Zt=Object.getOwnPropertyNames,fe=Object.getOwnPropertySymbols,Kt=Object.getPrototypeOf,Ue=Object.prototype.hasOwnProperty,io=Object.prototype.propertyIsEnumerable;var lo=(t,e,o)=>e in t?ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,y=(t,e)=>{for(var o in e||(e={}))Ue.call(e,o)&&lo(t,o,e[o]);if(fe)for(var o of fe(e))io.call(e,o)&&lo(t,o,e[o]);return t},E=(t,e)=>Xt(t,Jt(e));var mo=(t,e)=>{var o={};for(var n in t)Ue.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&fe)for(var n of fe(t))e.indexOf(n)<0&&io.call(t,n)&&(o[n]=t[n]);return o};var uo=(t,e)=>()=>(t&&(e=t(t=0)),e);var he=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Me=(t,e)=>{for(var o in e)ie(t,o,{get:e[o],enumerable:!0})},so=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Zt(e))!Ue.call(t,r)&&r!==o&&ie(t,r,{get:()=>e[r],enumerable:!(n=qt(e,r))||n.enumerable});return t};var b=(t,e,o)=>(o=t!=null?$t(Kt(t)):{},so(e||!t||!t.__esModule?ie(o,"default",{value:t,enumerable:!0}):o,t)),De=t=>so(ie({},"__esModule",{value:!0}),t);var ho=he(ge=>{"use strict";l();ge.byteLength=jt;ge.toByteArray=Rt;ge.fromByteArray=tn;var D=[],N=[],Yt=typeof Uint8Array!="undefined"?Uint8Array:Array,Pe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(j=0,_o=Pe.length;j<_o;++j)D[j]=Pe[j],N[Pe.charCodeAt(j)]=j;var j,_o;N["-".charCodeAt(0)]=62;N["_".charCodeAt(0)]=63;function fo(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function jt(t){var e=fo(t),o=e[0],n=e[1];return(o+n)*3/4-n}function Qt(t,e,o){return(e+o)*3/4-o}function Rt(t){var e,o=fo(t),n=o[0],r=o[1],a=new Yt(Qt(t,n,r)),p=0,i=r>0?n-4:n,m;for(m=0;m<i;m+=4)e=N[t.charCodeAt(m)]<<18|N[t.charCodeAt(m+1)]<<12|N[t.charCodeAt(m+2)]<<6|N[t.charCodeAt(m+3)],a[p++]=e>>16&255,a[p++]=e>>8&255,a[p++]=e&255;return r===2&&(e=N[t.charCodeAt(m)]<<2|N[t.charCodeAt(m+1)]>>4,a[p++]=e&255),r===1&&(e=N[t.charCodeAt(m)]<<10|N[t.charCodeAt(m+1)]<<4|N[t.charCodeAt(m+2)]>>2,a[p++]=e>>8&255,a[p++]=e&255),a}function en(t){return D[t>>18&63]+D[t>>12&63]+D[t>>6&63]+D[t&63]}function on(t,e,o){for(var n,r=[],a=e;a<o;a+=3)n=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(t[a+2]&255),r.push(en(n));return r.join("")}function tn(t){for(var e,o=t.length,n=o%3,r=[],a=16383,p=0,i=o-n;p<i;p+=a)r.push(on(t,p,p+a>i?i:p+a));return n===1?(e=t[o-1],r.push(D[e>>2]+D[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],r.push(D[e>>10]+D[e>>4&63]+D[e<<2&63]+"=")),r.join("")}});var go=he(Ve=>{l();Ve.read=function(t,e,o,n,r){var a,p,i=r*8-n-1,m=(1<<i)-1,g=m>>1,d=-7,u=o?r-1:0,x=o?-1:1,S=t[e+u];for(u+=x,a=S&(1<<-d)-1,S>>=-d,d+=i;d>0;a=a*256+t[e+u],u+=x,d-=8);for(p=a&(1<<-d)-1,a>>=-d,d+=n;d>0;p=p*256+t[e+u],u+=x,d-=8);if(a===0)a=1-g;else{if(a===m)return p?NaN:(S?-1:1)*(1/0);p=p+Math.pow(2,n),a=a-g}return(S?-1:1)*p*Math.pow(2,a-n)};Ve.write=function(t,e,o,n,r,a){var p,i,m,g=a*8-r-1,d=(1<<g)-1,u=d>>1,x=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,S=n?0:a-1,F=n?1:-1,$=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,p=d):(p=Math.floor(Math.log(e)/Math.LN2),e*(m=Math.pow(2,-p))<1&&(p--,m*=2),p+u>=1?e+=x/m:e+=x*Math.pow(2,1-u),e*m>=2&&(p++,m/=2),p+u>=d?(i=0,p=d):p+u>=1?(i=(e*m-1)*Math.pow(2,r),p=p+u):(i=e*Math.pow(2,u-1)*Math.pow(2,r),p=0));r>=8;t[o+S]=i&255,S+=F,i/=256,r-=8);for(p=p<<r|i,g+=r;g>0;t[o+S]=p&255,S+=F,p/=256,g-=8);t[o+S-F]|=$*128}});var Co=he(ae=>{"use strict";l();var Oe=ho(),pe=go(),bo=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ae.Buffer=c;ae.SlowBuffer=ln;ae.INSPECT_MAX_BYTES=50;var be=2147483647;ae.kMaxLength=be;c.TYPED_ARRAY_SUPPORT=nn();!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function nn(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.buffer}});Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.byteOffset}});function W(t){if(t>be)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,c.prototype),e}function c(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return He(t)}return yo(t,e,o)}c.poolSize=8192;function yo(t,e,o){if(typeof t=="string")return pn(t,e);if(ArrayBuffer.isView(t))return an(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(P(t,ArrayBuffer)||t&&P(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(P(t,SharedArrayBuffer)||t&&P(t.buffer,SharedArrayBuffer)))return ze(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return c.from(n,e,o);var r=cn(t);if(r)return r;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return c.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}c.from=function(t,e,o){return yo(t,e,o)};Object.setPrototypeOf(c.prototype,Uint8Array.prototype);Object.setPrototypeOf(c,Uint8Array);function So(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function rn(t,e,o){return So(t),t<=0?W(t):e!==void 0?typeof o=="string"?W(t).fill(e,o):W(t).fill(e):W(t)}c.alloc=function(t,e,o){return rn(t,e,o)};function He(t){return So(t),W(t<0?0:$e(t)|0)}c.allocUnsafe=function(t){return He(t)};c.allocUnsafeSlow=function(t){return He(t)};function pn(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!c.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=wo(t,e)|0,n=W(o),r=n.write(t,e);return r!==o&&(n=n.slice(0,r)),n}function We(t){for(var e=t.length<0?0:$e(t.length)|0,o=W(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function an(t){if(P(t,Uint8Array)){var e=new Uint8Array(t);return ze(e.buffer,e.byteOffset,e.byteLength)}return We(t)}function ze(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,c.prototype),n}function cn(t){if(c.isBuffer(t)){var e=$e(t.length)|0,o=W(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||Xe(t.length)?W(0):We(t);if(t.type==="Buffer"&&Array.isArray(t.data))return We(t.data)}function $e(t){if(t>=be)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+be.toString(16)+" bytes");return t|0}function ln(t){return+t!=t&&(t=0),c.alloc(+t)}c.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==c.prototype};c.compare=function(e,o){if(P(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),P(o,Uint8Array)&&(o=c.from(o,o.offset,o.byteLength)),!c.isBuffer(e)||!c.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,r=o.length,a=0,p=Math.min(n,r);a<p;++a)if(e[a]!==o[a]){n=e[a],r=o[a];break}return n<r?-1:r<n?1:0};c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};c.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return c.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var r=c.allocUnsafe(o),a=0;for(n=0;n<e.length;++n){var p=e[n];if(P(p,Uint8Array))a+p.length>r.length?c.from(p).copy(r,a):Uint8Array.prototype.set.call(r,p,a);else if(c.isBuffer(p))p.copy(r,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=p.length}return r};function wo(t,e){if(c.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||P(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Ge(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Bo(t).length;default:if(r)return n?-1:Ge(t).length;e=(""+e).toLowerCase(),r=!0}}c.byteLength=wo;function mn(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return kn(this,e,o);case"utf8":case"utf-8":return To(this,e,o);case"ascii":return bn(this,e,o);case"latin1":case"binary":return xn(this,e,o);case"base64":return hn(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yn(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}c.prototype._isBuffer=!0;function Q(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}c.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)Q(this,o,o+1);return this};c.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)Q(this,o,o+3),Q(this,o+1,o+2);return this};c.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)Q(this,o,o+7),Q(this,o+1,o+6),Q(this,o+2,o+5),Q(this,o+3,o+4);return this};c.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?To(this,0,e):mn.apply(this,arguments)};c.prototype.toLocaleString=c.prototype.toString;c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:c.compare(this,e)===0};c.prototype.inspect=function(){var e="",o=ae.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};bo&&(c.prototype[bo]=c.prototype.inspect);c.prototype.compare=function(e,o,n,r,a){if(P(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),a===void 0&&(a=this.length),o<0||n>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&o>=n)return 0;if(r>=a)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,r>>>=0,a>>>=0,this===e)return 0;for(var p=a-r,i=n-o,m=Math.min(p,i),g=this.slice(r,a),d=e.slice(o,n),u=0;u<m;++u)if(g[u]!==d[u]){p=g[u],i=d[u];break}return p<i?-1:i<p?1:0};function vo(t,e,o,n,r){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Xe(o)&&(o=r?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(r)return-1;o=t.length-1}else if(o<0)if(r)o=0;else return-1;if(typeof e=="string"&&(e=c.from(e,n)),c.isBuffer(e))return e.length===0?-1:xo(t,e,o,n,r);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):xo(t,[e],o,n,r);throw new TypeError("val must be string, number or Buffer")}function xo(t,e,o,n,r){var a=1,p=t.length,i=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;a=2,p/=2,i/=2,o/=2}function m(S,F){return a===1?S[F]:S.readUInt16BE(F*a)}var g;if(r){var d=-1;for(g=o;g<p;g++)if(m(t,g)===m(e,d===-1?0:g-d)){if(d===-1&&(d=g),g-d+1===i)return d*a}else d!==-1&&(g-=g-d),d=-1}else for(o+i>p&&(o=p-i),g=o;g>=0;g--){for(var u=!0,x=0;x<i;x++)if(m(t,g+x)!==m(e,x)){u=!1;break}if(u)return g}return-1}c.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};c.prototype.indexOf=function(e,o,n){return vo(this,e,o,n,!0)};c.prototype.lastIndexOf=function(e,o,n){return vo(this,e,o,n,!1)};function dn(t,e,o,n){o=Number(o)||0;var r=t.length-o;n?(n=Number(n),n>r&&(n=r)):n=r;var a=e.length;n>a/2&&(n=a/2);for(var p=0;p<n;++p){var i=parseInt(e.substr(p*2,2),16);if(Xe(i))return p;t[o+p]=i}return p}function un(t,e,o,n){return xe(Ge(e,t.length-o),t,o,n)}function sn(t,e,o,n){return xe(vn(e),t,o,n)}function _n(t,e,o,n){return xe(Bo(e),t,o,n)}function fn(t,e,o,n){return xe(Tn(e,t.length-o),t,o,n)}c.prototype.write=function(e,o,n,r){if(o===void 0)r="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")r=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,r===void 0&&(r="utf8")):(r=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-o;if((n===void 0||n>a)&&(n=a),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var p=!1;;)switch(r){case"hex":return dn(this,e,o,n);case"utf8":case"utf-8":return un(this,e,o,n);case"ascii":case"latin1":case"binary":return sn(this,e,o,n);case"base64":return _n(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fn(this,e,o,n);default:if(p)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}};c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function hn(t,e,o){return e===0&&o===t.length?Oe.fromByteArray(t):Oe.fromByteArray(t.slice(e,o))}function To(t,e,o){o=Math.min(t.length,o);for(var n=[],r=e;r<o;){var a=t[r],p=null,i=a>239?4:a>223?3:a>191?2:1;if(r+i<=o){var m,g,d,u;switch(i){case 1:a<128&&(p=a);break;case 2:m=t[r+1],(m&192)===128&&(u=(a&31)<<6|m&63,u>127&&(p=u));break;case 3:m=t[r+1],g=t[r+2],(m&192)===128&&(g&192)===128&&(u=(a&15)<<12|(m&63)<<6|g&63,u>2047&&(u<55296||u>57343)&&(p=u));break;case 4:m=t[r+1],g=t[r+2],d=t[r+3],(m&192)===128&&(g&192)===128&&(d&192)===128&&(u=(a&15)<<18|(m&63)<<12|(g&63)<<6|d&63,u>65535&&u<1114112&&(p=u))}}p===null?(p=65533,i=1):p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p),r+=i}return gn(n)}var ko=4096;function gn(t){var e=t.length;if(e<=ko)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=ko));return o}function bn(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]&127);return n}function xn(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]);return n}function kn(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var r="",a=e;a<o;++a)r+=En[t[a]];return r}function yn(t,e,o){for(var n=t.slice(e,o),r="",a=0;a<n.length-1;a+=2)r+=String.fromCharCode(n[a]+n[a+1]*256);return r}c.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,c.prototype),r};function I(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||I(e,o,this.length);for(var r=this[e],a=1,p=0;++p<o&&(a*=256);)r+=this[e+p]*a;return r};c.prototype.readUintBE=c.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||I(e,o,this.length);for(var r=this[e+--o],a=1;o>0&&(a*=256);)r+=this[e+--o]*a;return r};c.prototype.readUint8=c.prototype.readUInt8=function(e,o){return e=e>>>0,o||I(e,1,this.length),this[e]};c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||I(e,2,this.length),this[e]|this[e+1]<<8};c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||I(e,2,this.length),this[e]<<8|this[e+1]};c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||I(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};c.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||I(e,o,this.length);for(var r=this[e],a=1,p=0;++p<o&&(a*=256);)r+=this[e+p]*a;return a*=128,r>=a&&(r-=Math.pow(2,8*o)),r};c.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||I(e,o,this.length);for(var r=o,a=1,p=this[e+--r];r>0&&(a*=256);)p+=this[e+--r]*a;return a*=128,p>=a&&(p-=Math.pow(2,8*o)),p};c.prototype.readInt8=function(e,o){return e=e>>>0,o||I(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};c.prototype.readInt16LE=function(e,o){e=e>>>0,o||I(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};c.prototype.readInt16BE=function(e,o){e=e>>>0,o||I(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};c.prototype.readInt32LE=function(e,o){return e=e>>>0,o||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};c.prototype.readInt32BE=function(e,o){return e=e>>>0,o||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};c.prototype.readFloatLE=function(e,o){return e=e>>>0,o||I(e,4,this.length),pe.read(this,e,!0,23,4)};c.prototype.readFloatBE=function(e,o){return e=e>>>0,o||I(e,4,this.length),pe.read(this,e,!1,23,4)};c.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||I(e,8,this.length),pe.read(this,e,!0,52,8)};c.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||I(e,8,this.length),pe.read(this,e,!1,52,8)};function C(t,e,o,n,r,a){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<a)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var a=Math.pow(2,8*n)-1;C(this,e,o,n,a,0)}var p=1,i=0;for(this[o]=e&255;++i<n&&(p*=256);)this[o+i]=e/p&255;return o+n};c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var a=Math.pow(2,8*n)-1;C(this,e,o,n,a,0)}var p=n-1,i=1;for(this[o+p]=e&255;--p>=0&&(i*=256);)this[o+p]=e/i&255;return o+n};c.prototype.writeUint8=c.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,1,255,0),this[o]=e&255,o+1};c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};c.prototype.writeIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*n-1);C(this,e,o,n,a-1,-a)}var p=0,i=1,m=0;for(this[o]=e&255;++p<n&&(i*=256);)e<0&&m===0&&this[o+p-1]!==0&&(m=1),this[o+p]=(e/i>>0)-m&255;return o+n};c.prototype.writeIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var a=Math.pow(2,8*n-1);C(this,e,o,n,a-1,-a)}var p=n-1,i=1,m=0;for(this[o+p]=e&255;--p>=0&&(i*=256);)e<0&&m===0&&this[o+p+1]!==0&&(m=1),this[o+p]=(e/i>>0)-m&255;return o+n};c.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};c.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};c.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};c.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};c.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||C(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function Eo(t,e,o,n,r,a){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function Io(t,e,o,n,r){return e=+e,o=o>>>0,r||Eo(t,e,o,4,34028234663852886e22,-34028234663852886e22),pe.write(t,e,o,n,23,4),o+4}c.prototype.writeFloatLE=function(e,o,n){return Io(this,e,o,!0,n)};c.prototype.writeFloatBE=function(e,o,n){return Io(this,e,o,!1,n)};function Ao(t,e,o,n,r){return e=+e,o=o>>>0,r||Eo(t,e,o,8,17976931348623157e292,-17976931348623157e292),pe.write(t,e,o,n,52,8),o+8}c.prototype.writeDoubleLE=function(e,o,n){return Ao(this,e,o,!0,n)};c.prototype.writeDoubleBE=function(e,o,n){return Ao(this,e,o,!1,n)};c.prototype.copy=function(e,o,n,r){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-n&&(r=e.length-o+n);var a=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),o),a};c.prototype.fill=function(e,o,n,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,n=this.length):typeof n=="string"&&(r=n,n=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var a=e.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<n;++p)this[p]=e;else{var i=c.isBuffer(e)?e:c.from(e,r),m=i.length;if(m===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<n-o;++p)this[p+o]=i[p%m]}return this};var Sn=/[^+/0-9A-Za-z-_]/g;function wn(t){if(t=t.split("=")[0],t=t.trim().replace(Sn,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Ge(t,e){e=e||1/0;for(var o,n=t.length,r=null,a=[],p=0;p<n;++p){if(o=t.charCodeAt(p),o>55295&&o<57344){if(!r){if(o>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(p+1===n){(e-=3)>-1&&a.push(239,191,189);continue}r=o;continue}if(o<56320){(e-=3)>-1&&a.push(239,191,189),r=o;continue}o=(r-55296<<10|o-56320)+65536}else r&&(e-=3)>-1&&a.push(239,191,189);if(r=null,o<128){if((e-=1)<0)break;a.push(o)}else if(o<2048){if((e-=2)<0)break;a.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;a.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;a.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return a}function vn(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function Tn(t,e){for(var o,n,r,a=[],p=0;p<t.length&&!((e-=2)<0);++p)o=t.charCodeAt(p),n=o>>8,r=o%256,a.push(r),a.push(n);return a}function Bo(t){return Oe.toByteArray(wn(t))}function xe(t,e,o,n){for(var r=0;r<n&&!(r+o>=e.length||r>=t.length);++r)e[r+o]=t[r];return r}function P(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function Xe(t){return t!==t}var En=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,r=0;r<16;++r)e[n+r]=t[o]+t[r];return e}()});var Mo=he((gr,Uo)=>{l();var v=Uo.exports={},V,O;function qe(){throw new Error("setTimeout has not been defined")}function Je(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?V=setTimeout:V=qe}catch(t){V=qe}try{typeof clearTimeout=="function"?O=clearTimeout:O=Je}catch(t){O=Je}})();function Fo(t){if(V===setTimeout)return setTimeout(t,0);if((V===qe||!V)&&setTimeout)return V=setTimeout,setTimeout(t,0);try{return V(t,0)}catch(e){try{return V.call(null,t,0)}catch(o){return V.call(this,t,0)}}}function In(t){if(O===clearTimeout)return clearTimeout(t);if((O===Je||!O)&&clearTimeout)return O=clearTimeout,clearTimeout(t);try{return O(t)}catch(e){try{return O.call(null,t)}catch(o){return O.call(this,t)}}}var z=[],ce=!1,R,ke=-1;function An(){!ce||!R||(ce=!1,R.length?z=R.concat(z):ke=-1,z.length&&No())}function No(){if(!ce){var t=Fo(An);ce=!0;for(var e=z.length;e;){for(R=z,z=[];++ke<e;)R&&R[ke].run();ke=-1,e=z.length}R=null,ce=!1,In(t)}}v.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];z.push(new Lo(t,e)),z.length===1&&!ce&&Fo(No)};function Lo(t,e){this.fun=t,this.array=e}Lo.prototype.run=function(){this.fun.apply(null,this.array)};v.title="browser";v.browser=!0;v.env={};v.argv=[];v.version="";v.versions={};function G(){}v.on=G;v.addListener=G;v.once=G;v.off=G;v.removeListener=G;v.removeAllListeners=G;v.emit=G;v.prependListener=G;v.prependOnceListener=G;v.listeners=function(t){return[]};v.binding=function(t){throw new Error("process.binding is not supported")};v.cwd=function(){return"/"};v.chdir=function(t){throw new Error("process.chdir is not supported")};v.umask=function(){return 0}});var s,_,br,l=uo(()=>{s=b(Co()),_=b(Mo()),br=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var oo={};Me(oo,{default:()=>Rn});var Te,Qn,Rn,to=uo(()=>{"use strict";l();Te=b(require("react")),Qn=t=>Te.createElement("svg",y({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),Te.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Te.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Rn=Qn});var dr={};Me(dr,{AmountSelect:()=>mr});module.exports=De(dr);l();var U=b(require("react")),Be=b(require("classnames"));l();var Bn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bn));var ee={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};l();l();var Cn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Cn));var X={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};l();l();l();var w=b(require("react")),Go=require("@terradharitri/sdk-dapp/utils/validation"),Se=b(require("bignumber.js")),Ke=b(require("classnames")),Ho=require("react-number-format");l();var Fn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fn));var me={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};l();l();var q=require("@terradharitri/sdk-dapp/constants/index"),Do=require("@terradharitri/sdk-dapp/utils/validation"),H=b(require("bignumber.js")),Po=(t,e)=>{let o=e!=null?e:q.DIGITS;if((0,Do.stringIsFloat)(t)){if(new H.default(t).isZero())return"0";let r=new H.default(t).toFormat(o);return r=parseFloat(r)>0?r:new H.default(t).toFormat(q.DIGITS),r=parseFloat(r)>0?r:new H.default(t).toFormat(q.DIGITS+2),r=parseFloat(r)>0?r:new H.default(t).toFormat(q.DIGITS+4),r=parseFloat(r)>0?r:new H.default(t).toFormat(q.DIGITS+6),r=parseFloat(r)>0?r:new H.default(t).toFormat(q.DIGITS+10),parseFloat(r)>0?r:new H.default(t).toFormat(q.DIGITS+14)}return"0"};l();var Ze=t=>t.replace(/,/g,"");l();var ye=require("react"),Nn={value:"",count:0},Vo=(t,e)=>{let[o,n]=(0,ye.useState)(Nn);return(0,ye.useEffect)(()=>{let a=setTimeout(()=>{n(t)},e);return()=>clearTimeout(a)},[t.count]),o};l();var Oo=b(require("bignumber.js")),Wo=t=>{let[e,o]=t.split(""),n=new Oo.default(e).isZero();return Boolean(n&&o&&!(o==="."))};var Ln=500,zo=1e13,Un=({"data-testid":t,InfoDustComponent:e,disabled:o,handleBlur:n,handleChange:r,name:a,onDebounceChange:p,onFocus:i,onKeyDown:m,placeholder:g,required:d,usdPrice:u,value:x,usdValue:S,className:F,autoFocus:$,suffix:oe})=>{let te=(0,w.useRef)(null),[Z,K]=(0,w.useState)(),[ue,Y]=(0,w.useState)(!1),[se,Ce]=(0,w.useState)({value:x,count:0}),[ne,re]=(0,w.useState)(),Fe=Vo(se,Ln),_e=k=>{k.stopPropagation(),Y(!0);let A=Ze(k.target.value),M=(0,Se.default)(A).isLessThanOrEqualTo(zo);if((A===""||M)&&(K(A),k.target.value=A,r(k),p)){let le={value:A,count:se.count+1};Ce(le)}},Ne=()=>{if(S)return re(`$${S}`);if(!u||!x)return re(void 0);let k=Ze(x);if(!(x!==""&&(0,Go.stringIsFloat)(k))||k==="")return re(void 0);let M=Po(new Se.default(k).times(u!=null?u:0).toString(10),2);re(`$${M}`)},Le=({value:k,floatValue:A})=>(!A||(0,Se.default)(A).isLessThanOrEqualTo(zo))&&!Wo(k);return(0,w.useEffect)(()=>{p&&ue&&(Y(!1),p(Fe.value))},[Fe]),(0,w.useEffect)(Ne,[x,S,u]),(0,w.useEffect)(()=>{x!==Z&&K(x)},[x]),w.default.createElement("div",{ref:te,className:(0,Ke.default)(me.amountHolder,{[me.showUsdValue]:Boolean(ne)},F)},w.default.createElement(Ho.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":t||a,decimalSeparator:".",disabled:Boolean(o),id:a,inputMode:"decimal",isAllowed:Le,name:a,onBlur:n,onChange:_e,onFocus:i,onKeyDown:m,placeholder:g,required:d,thousandSeparator:",",thousandsGroupStyle:"thousand",value:Z,suffix:oe,valueIsNumericString:!0,allowNegative:!1,autoFocus:$,className:(0,Ke.default)(ee.input,me.amountInput,{[ee.disabled]:Boolean(o)})}),ne&&w.default.createElement("span",{className:me.amountHolderUsd},w.default.createElement("small",{"data-testid":`tokenPrice_${u}`},ne!=="$0"?w.default.createElement(w.default.Fragment,null,"\u2248 "):w.default.createElement(w.default.Fragment,null),ne),e))},$o=(0,w.memo)(Un,(t,e)=>t.value===e.value&&t.usdPrice===e.usdPrice&&t.className===e.className&&t.disabled===e.disabled&&t.usdValue===e.usdValue);l();l();var zn=b(require("react"));l();l();var Dn=b(require("react")),Pn=require("@fortawesome/free-solid-svg-icons"),Vn=require("@fortawesome/react-fontawesome"),On=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Wn=require("react-tooltip"),Zr=require("react-tooltip/dist/react-tooltip.css");l();l();var Ye="5000000000000000";var Xo="WREWA-bd4d79";l();var Mn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mn));l();l();var Yo=b(require("react")),jo=require("@terradharitri/sdk-dapp/constants"),Re=b(require("bignumber.js")),Qo=b(require("classnames"));l();var Qe=b(require("bignumber.js"));var qo=t=>{let e=new Qe.default(t!=null?t:"0"),o=new Qe.default(Ye),n=e.minus(o);return n.isGreaterThan(0)?n.toString(10):"0"};l();var Gn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Gn));var Jo={max:"dapp-core-component__maxButton-module__max"};l();var J=require("@terradharitri/sdk-dapp/constants"),Zo=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ko=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),we=({amount:t="0",decimals:e=0,digits:o=J.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:r=!1})=>{if(t==null||!(0,Ko.stringIsInteger)(t))return"0";let a=i=>(0,Zo.formatAmount)({input:t,digits:i,decimals:e,addCommas:n,showLastNonZeroDecimal:r}),p=a(o);return p=parseFloat(p)>0?p:a(J.DIGITS),p=parseFloat(p)>0?p:a(J.DIGITS+2),p=parseFloat(p)>0?p:a(J.DIGITS+4),p=parseFloat(p)>0?p:a(J.DIGITS+6),p=parseFloat(p)>0?p:a(J.DIGITS+10),parseFloat(p)>0?p:a(J.DIGITS+14)};var Ro=({token:t,rewaLabel:e,inputAmount:o,className:n,onMaxClick:r})=>{var d;let a=(t==null?void 0:t.identifier)===e,p=(d=t==null?void 0:t.balance)!=null?d:"0";if(p==="0")return null;let i=we({amount:a?qo(p):p,decimals:(t==null?void 0:t.decimals)||jo.DECIMALS}),m=new Re.default(o).isEqualTo(new Re.default(i)),g=u=>{u.preventDefault(),r==null||r(i)};return m?null:Yo.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,Qo.default)(Jo.max,n),onClick:g,onMouseDown:u=>{u.preventDefault()}},"Max")};l();l();var L=b(require("react")),Dt=b(require("classnames")),Pt=b(require("react-select"));l();var Hn={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function et(t){return Hn[t]||Xo}var ao={};Me(ao,{Control:()=>Kn,IndicatorsContainer:()=>jn,Input:()=>qn,Menu:()=>Zn,MenuList:()=>Jn,DharitrIIcon:()=>Lt,Placeholder:()=>Yn,SmallLoader:()=>$n,ValueComponent:()=>wt,getOption:()=>ro,getSingleValue:()=>po,getValueContainer:()=>no});l();l();var eo=b(require("react")),ot=require("@fortawesome/free-solid-svg-icons"),tt=require("@fortawesome/react-fontawesome"),$n=({show:t,color:e})=>t?eo.default.createElement("div",{className:"d-flex"},eo.default.createElement(tt.FontAwesomeIcon,{icon:ot.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;l();l();var nt=b(require("react")),rt=require("react-select");l();var Xn=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xn));var h={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var qn=t=>nt.default.createElement(rt.components.Input,E(y({},t),{className:h.dropdown,"data-testid":"tokenSelectInput"}));l();var pt=b(require("react")),at=require("react-select");var Jn=t=>{let n=t,{rx:e}=n,o=mo(n,["rx"]);return pt.default.createElement(at.components.MenuList,E(y({},o),{className:h.list}))};l();var ve=b(require("react")),ct=require("@fortawesome/free-solid-svg-icons"),lt=require("@fortawesome/react-fontawesome"),it=require("react-select");var Zn=t=>ve.default.createElement(it.components.Menu,E(y({},t),{className:h.menu}),t.selectProps.isLoading?ve.default.createElement("div",{className:h.loading},ve.default.createElement(lt.FontAwesomeIcon,{icon:ct.faCircleNotch,className:"fa-spin",size:"lg"})):t.children);l();var mt=b(require("react")),dt=require("react-select");var Kn=t=>mt.default.createElement(dt.components.Control,E(y({},t),{className:h.control}));l();var ut=b(require("react")),st=b(require("classnames")),_t=require("react-select");var Yn=t=>ut.default.createElement(_t.components.Placeholder,E(y({},t),{className:(0,st.default)(h.placeholder,{[h.focused]:t.isFocused})}));l();var ft=b(require("react")),ht=b(require("classnames")),gt=require("react-select");var jn=t=>ft.default.createElement(gt.components.IndicatorsContainer,E(y({},t),{className:(0,ht.default)(h.indicator,{[h.expanded]:t.selectProps.menuIsOpen})}));l();var B=b(require("react")),bt=require("@fortawesome/free-solid-svg-icons"),xt=require("@fortawesome/react-fontawesome"),kt=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),yt=b(require("classnames")),St=require("react-select");var er=(to(),De(oo)).default,wt=({RewaIcon:t,tokenId:e,icon:o})=>{let{isRewa:n}=(0,kt.getIdentifierType)(e);return n?B.default.createElement("span",{className:h.asset},t?B.default.createElement(t,{className:h.diamond}):B.default.createElement(er,{className:h.diamond})):o?B.default.createElement("img",{src:o,className:h.asset}):B.default.createElement(xt.FontAwesomeIcon,{icon:bt.faDiamond,className:h.asset})},or=({children:t})=>B.default.createElement("div",{className:h.wrapper},t),no=(t,e,o)=>n=>{var d,u;let{selectProps:r,isDisabled:a,children:p}=n,i=r.value,m=(u=(d=i==null?void 0:i.assets)==null?void 0:d.svgUrl)!=null?u:null,g=(0,B.useMemo)(()=>{let x=String(i==null?void 0:i.token.usdPrice);return x!=null&&x.includes("$")?i==null?void 0:i.token.usdPrice:`$${i==null?void 0:i.token.usdPrice}`},[i==null?void 0:i.token.usdPrice]);return B.default.createElement(St.components.ValueContainer,E(y({},n),{className:h.container}),B.default.createElement("div",{className:(0,yt.default)(h.icon,e)},B.default.createElement(wt,{RewaIcon:o,rewaLabel:t,icon:m,isDisabled:a,tokenId:i==null?void 0:i.value})),B.default.createElement("div",{className:h.payload},B.default.createElement(or,null,p,(i==null?void 0:i.token.usdPrice)&&B.default.createElement("small",{className:h.price},g))))};l();var T=b(require("react")),Et=require("@fortawesome/free-solid-svg-icons"),It=require("@fortawesome/react-fontawesome"),At=require("@terradharitri/sdk-dapp/constants"),Bt=require("@terradharitri/sdk-dapp/UI/UsdValue"),Ct=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ft=b(require("classnames")),Nt=require("react-select");l();l();var de=b(require("react"));l();var tr=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tr));var vt={highlight:"dapp-core-component__styles-modules__highlight"};var Tt=({highlight:t,text:e=""})=>{let o=e.split(" "),n=t.toLowerCase(),r=new RegExp(`(${n})`,"gi"),a=o.map(p=>p.split(r).filter(i=>i));return de.default.createElement("span",{className:vt.highlight},a.map((p,i)=>{let m=`${p}-${i}`;return de.default.createElement("span",{key:m},p.map((g,d)=>{let u=g.toLowerCase()===n,x=n&&u,S=`${g}-${d}`;return x?de.default.createElement("strong",{key:S},g):de.default.createElement("span",{key:S},g)}))}))};var{default:Lt}=(to(),De(oo)),ro=({RewaIcon:t,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>r=>{var oe,te,Z,K;let{data:a,isSelected:p,isFocused:i,isDisabled:m,selectProps:g}=r,d=a,{isRewa:u}=(0,Ct.getIdentifierType)(d.value),x=d.token.assets?d.token.assets.svgUrl:null,S=we({amount:d.token.balance,decimals:d.token.decimals||At.DECIMALS,addCommas:!0}),F=(te=(oe=d.token)==null?void 0:oe.usdPrice)==null?void 0:te.toString(),$=(K=(Z=d.token)==null?void 0:Z.valueUSD)==null?void 0:K.toString();return T.default.createElement("div",{"data-testid":`${r.value}-option`},T.default.createElement(Nt.components.Option,E(y({},r),{className:(0,Ft.default)(h.option,{[h.selected]:p||i,[h.disabled]:m})}),T.default.createElement("div",{className:h.image},u?T.default.createElement("span",{className:h.icon},t?T.default.createElement(t,null):T.default.createElement(Lt,null)):x?T.default.createElement("img",{src:x,className:h.icon}):T.default.createElement("span",{className:h.icon},T.default.createElement(It.FontAwesomeIcon,{icon:Et.faDiamond,className:h.diamond}))),T.default.createElement("div",{className:h.info},T.default.createElement("div",{className:h.left},T.default.createElement("div",{className:h.ticker},T.default.createElement("span",{className:h.value},g.inputValue?T.default.createElement(Tt,{text:d.token.ticker,highlight:g.inputValue}):d.token.ticker),e&&T.default.createElement(e,{token:d.token})),n&&T.default.createElement("small",{className:h.price},F)),T.default.createElement("div",{className:h.right},T.default.createElement("span",{className:h.value},S),o&&$&&T.default.createElement(Bt.UsdValue,{usd:1,decimals:4,amount:$,"data-testid":"token-price-usd-value",className:h.price,addEqualSign:!1}))),T.default.createElement("div",{className:h.children},r.children)))};l();var Ee=b(require("react")),Ut=b(require("classnames")),Mt=require("react-select");var po=t=>e=>{let{selectProps:o,children:n}=e,r=o.value;return Ee.default.createElement(Mt.components.SingleValue,E(y({},e),{className:(0,Ut.default)(h.single,{[h.focused]:e.selectProps.menuIsOpen})}),Ee.default.createElement("div",{className:h.ticker},n,t&&Ee.default.createElement(t,{token:r==null?void 0:r.token})))};var{Menu:nr,Control:rr,Input:pr,MenuList:ar,IndicatorsContainer:cr,Placeholder:lr}=ao,Vt=t=>{let{name:e,options:o,isLoading:n=!1,className:r="",noOptionsMessage:a="No Tokens",disabledOption:p,rewaLabel:i,RewaIcon:m,disabled:g,value:d,onBlur:u,onFocus:x,onChange:S,onMenuOpen:F,chainId:$,wrapperClassName:oe="",showTokenPrice:te=!1,showBalanceUsdValue:Z=!1,selectedTokenIconClassName:K,TokenTickerIcon:ue}=t,Y=(0,L.useRef)(null),se=[i,et($)],Ce=(0,L.useMemo)(()=>ro({rewaLabel:i,RewaIcon:m,showTokenPrice:te,showBalanceUsdValue:Z,TokenTickerIcon:ue}),[]),ne=(0,L.useMemo)(()=>no(i,K,m),[]),re=(0,L.useMemo)(()=>po(ue),[]);(0,L.useEffect)(()=>{let k=o.find(M=>M.value===(d==null?void 0:d.value)),A=(k==null?void 0:k.token.balance)===(d==null?void 0:d.token.balance);!k||A||S(k)},[o]);let _e=k=>se.includes(k),Ne=k=>{var co;let A=k.value===(p==null?void 0:p.value),M=_e(k.value),le=_e((co=p==null?void 0:p.value)!=null?co:"");return A||M&&le},Le=(k,A)=>{let M=k.data.token.ticker?k.data.token.ticker.toLowerCase().includes(A.toLowerCase()):!1,le=k.data.token.name.toLowerCase().includes(A.toLowerCase());return Boolean(A)?M||le:!0};return L.default.createElement("div",{"data-testid":`${e}Select`,className:`${oe} ${n?"select-holder-loading":""}`},L.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:h.label},"Token"),L.default.createElement(Pt.default,{ref:Y,inputId:e,name:e,options:o,openMenuOnFocus:!0,isDisabled:g,isLoading:n,value:d,isOptionDisabled:Ne,onBlur:u,filterOption:Le,onFocus:x,onChange:k=>{S(k),Y&&Y.current!==null&&Y.current.blur()},isSearchable:t.isSearchable,maxMenuHeight:260,onMenuOpen:F,noOptionsMessage:()=>a,className:(0,Dt.default)(h.select,r,{[h.disabled]:t.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:nr,Control:rr,Input:pr,MenuList:ar,IndicatorsContainer:cr,ValueContainer:ne,Placeholder:lr,Option:Ce,SingleValue:re}}))};l();l();var Ot=b(require("react")),Wt=b(require("classnames"));var zt=({hasErrors:t,className:e,error:o,"data-testid":n})=>t?Ot.default.createElement("div",{className:(0,Wt.default)(ee.error,e),"data-testid":n},o):null;l();l();var Ae=b(require("react")),Gt=b(require("classnames"));l();var ir=`.dapp-core-component__tokenBalance-module__balance {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ir));var Ie={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"};var Ht=({label:t,value:e,className:o,token:n,"data-testid":r,"data-value":a})=>Ae.default.createElement("div",{"data-testid":r,"data-value":a,className:(0,Gt.default)(Ie.balance,o)},Ae.default.createElement("span",{className:Ie.label},t,": "),Ae.default.createElement("span",{className:Ie.value},e)," ",n==null?void 0:n.ticker);var mr=({className:t,label:e,name:o,wrapperControlsClassName:n,tokenSelectProps:r,tokenBalanceProps:a,amountInputProps:p,amountErrorProps:i,maxButtonProps:m,readonly:g})=>U.default.createElement("div",{className:(0,Be.default)(X.amount,t)},U.default.createElement("div",{className:X.label},e&&U.default.createElement("label",{htmlFor:o,className:ee.label,"data-testid":"amountLabel"},e),U.default.createElement(Ht,y({},a))),U.default.createElement("div",{className:(0,Be.default)(X.wrapper,n,{[X.error]:p.isInvalid||r.isInvalid||i.hasErrors,[X.disabled]:g})},U.default.createElement($o,y({},p)),U.default.createElement("div",{className:(0,Be.default)(X.interaction,m.wrapperClassName)},m.isMaxButtonVisible&&U.default.createElement(Ro,y({},m)),U.default.createElement("div",{className:X.select},U.default.createElement(Vt,y({},r))))),U.default.createElement(zt,y({},i)));0&&(module.exports={AmountSelect});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=AmountSelect.js.map
