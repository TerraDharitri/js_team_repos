"use strict";var Lo=Object.create;var q=Object.defineProperty,Io=Object.defineProperties,No=Object.getOwnPropertyDescriptor,Mo=Object.getOwnPropertyDescriptors,Po=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,Vo=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var ye=(t,e,o)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,w=(t,e)=>{for(var o in e||(e={}))te.call(e,o)&&ye(t,o,e[o]);if(R)for(var o of R(e))ge.call(e,o)&&ye(t,o,e[o]);return t},v=(t,e)=>Io(t,Mo(e));var ve=(t,e)=>{var o={};for(var n in t)te.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&R)for(var n of R(t))e.indexOf(n)<0&&ge.call(t,n)&&(o[n]=t[n]);return o};var be=(t,e)=>()=>(t&&(e=t(t=0)),e);var G=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ee=(t,e)=>{for(var o in e)q(t,o,{get:e[o],enumerable:!0})},Ae=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Po(e))!te.call(t,r)&&r!==o&&q(t,r,{get:()=>e[r],enumerable:!(n=No(e,r))||n.enumerable});return t};var b=(t,e,o)=>(o=t!=null?Lo(Vo(t)):{},Ae(e||!t||!t.__esModule?q(o,"default",{value:t,enumerable:!0}):o,t)),ne=t=>Ae(q({},"__esModule",{value:!0}),t);var Ue=G(Y=>{"use strict";d();Y.byteLength=Wo;Y.toByteArray=Ho;Y.fromByteArray=qo;var U=[],F=[],Oo=typeof Uint8Array!="undefined"?Uint8Array:Array,re="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(O=0,Be=re.length;O<Be;++O)U[O]=re[O],F[re.charCodeAt(O)]=O;var O,Be;F["-".charCodeAt(0)]=62;F["_".charCodeAt(0)]=63;function Fe(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function Wo(t){var e=Fe(t),o=e[0],n=e[1];return(o+n)*3/4-n}function zo(t,e,o){return(e+o)*3/4-o}function Ho(t){var e,o=Fe(t),n=o[0],r=o[1],c=new Oo(zo(t,n,r)),p=0,l=r>0?n-4:n,a;for(a=0;a<l;a+=4)e=F[t.charCodeAt(a)]<<18|F[t.charCodeAt(a+1)]<<12|F[t.charCodeAt(a+2)]<<6|F[t.charCodeAt(a+3)],c[p++]=e>>16&255,c[p++]=e>>8&255,c[p++]=e&255;return r===2&&(e=F[t.charCodeAt(a)]<<2|F[t.charCodeAt(a+1)]>>4,c[p++]=e&255),r===1&&(e=F[t.charCodeAt(a)]<<10|F[t.charCodeAt(a+1)]<<4|F[t.charCodeAt(a+2)]>>2,c[p++]=e>>8&255,c[p++]=e&255),c}function Xo(t){return U[t>>18&63]+U[t>>12&63]+U[t>>6&63]+U[t&63]}function $o(t,e,o){for(var n,r=[],c=e;c<o;c+=3)n=(t[c]<<16&16711680)+(t[c+1]<<8&65280)+(t[c+2]&255),r.push(Xo(n));return r.join("")}function qo(t){for(var e,o=t.length,n=o%3,r=[],c=16383,p=0,l=o-n;p<l;p+=c)r.push($o(t,p,p+c>l?l:p+c));return n===1?(e=t[o-1],r.push(U[e>>2]+U[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],r.push(U[e>>10]+U[e>>4&63]+U[e<<2&63]+"=")),r.join("")}});var Ce=G(pe=>{d();pe.read=function(t,e,o,n,r){var c,p,l=r*8-n-1,a=(1<<l)-1,s=a>>1,_=-7,u=o?r-1:0,x=o?-1:1,g=t[e+u];for(u+=x,c=g&(1<<-_)-1,g>>=-_,_+=l;_>0;c=c*256+t[e+u],u+=x,_-=8);for(p=c&(1<<-_)-1,c>>=-_,_+=n;_>0;p=p*256+t[e+u],u+=x,_-=8);if(c===0)c=1-s;else{if(c===a)return p?NaN:(g?-1:1)*(1/0);p=p+Math.pow(2,n),c=c-s}return(g?-1:1)*p*Math.pow(2,c-n)};pe.write=function(t,e,o,n,r,c){var p,l,a,s=c*8-r-1,_=(1<<s)-1,u=_>>1,x=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:c-1,P=n?1:-1,J=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,p=_):(p=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-p))<1&&(p--,a*=2),p+u>=1?e+=x/a:e+=x*Math.pow(2,1-u),e*a>=2&&(p++,a/=2),p+u>=_?(l=0,p=_):p+u>=1?(l=(e*a-1)*Math.pow(2,r),p=p+u):(l=e*Math.pow(2,u-1)*Math.pow(2,r),p=0));r>=8;t[o+g]=l&255,g+=P,l/=256,r-=8);for(p=p<<r|l,s+=r;s>0;t[o+g]=p&255,g+=P,p/=256,s-=8);t[o+g-P]|=J*128}});var $e=G(X=>{"use strict";d();var ce=Ue(),H=Ce(),Te=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;X.Buffer=i;X.SlowBuffer=Zo;X.INSPECT_MAX_BYTES=50;var Z=2147483647;X.kMaxLength=Z;i.TYPED_ARRAY_SUPPORT=Do();!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Do(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.buffer}});Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.byteOffset}});function I(t){if(t>Z)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,i.prototype),e}function i(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _e(t)}return Ne(t,e,o)}i.poolSize=8192;function Ne(t,e,o){if(typeof t=="string")return Ro(t,e);if(ArrayBuffer.isView(t))return Go(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(C(t,ArrayBuffer)||t&&C(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(C(t,SharedArrayBuffer)||t&&C(t.buffer,SharedArrayBuffer)))return le(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return i.from(n,e,o);var r=Yo(t);if(r)return r;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return i.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}i.from=function(t,e,o){return Ne(t,e,o)};Object.setPrototypeOf(i.prototype,Uint8Array.prototype);Object.setPrototypeOf(i,Uint8Array);function Me(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Jo(t,e,o){return Me(t),t<=0?I(t):e!==void 0?typeof o=="string"?I(t).fill(e,o):I(t).fill(e):I(t)}i.alloc=function(t,e,o){return Jo(t,e,o)};function _e(t){return Me(t),I(t<0?0:me(t)|0)}i.allocUnsafe=function(t){return _e(t)};i.allocUnsafeSlow=function(t){return _e(t)};function Ro(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Pe(t,e)|0,n=I(o),r=n.write(t,e);return r!==o&&(n=n.slice(0,r)),n}function ie(t){for(var e=t.length<0?0:me(t.length)|0,o=I(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function Go(t){if(C(t,Uint8Array)){var e=new Uint8Array(t);return le(e.buffer,e.byteOffset,e.byteLength)}return ie(t)}function le(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,i.prototype),n}function Yo(t){if(i.isBuffer(t)){var e=me(t.length)|0,o=I(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||ue(t.length)?I(0):ie(t);if(t.type==="Buffer"&&Array.isArray(t.data))return ie(t.data)}function me(t){if(t>=Z)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Z.toString(16)+" bytes");return t|0}function Zo(t){return+t!=t&&(t=0),i.alloc(+t)}i.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==i.prototype};i.compare=function(e,o){if(C(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),C(o,Uint8Array)&&(o=i.from(o,o.offset,o.byteLength)),!i.isBuffer(e)||!i.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,r=o.length,c=0,p=Math.min(n,r);c<p;++c)if(e[c]!==o[c]){n=e[c],r=o[c];break}return n<r?-1:r<n?1:0};i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};i.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return i.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var r=i.allocUnsafe(o),c=0;for(n=0;n<e.length;++n){var p=e[n];if(C(p,Uint8Array))c+p.length>r.length?i.from(p).copy(r,c):Uint8Array.prototype.set.call(r,p,c);else if(i.isBuffer(p))p.copy(r,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return r};function Pe(t,e){if(i.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||C(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ae(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Xe(t).length;default:if(r)return n?-1:ae(t).length;e=(""+e).toLowerCase(),r=!0}}i.byteLength=Pe;function Ko(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return it(this,e,o);case"utf8":case"utf-8":return Oe(this,e,o);case"ascii":return pt(this,e,o);case"latin1":case"binary":return ct(this,e,o);case"base64":return nt(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return lt(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}i.prototype._isBuffer=!0;function W(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}i.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)W(this,o,o+1);return this};i.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)W(this,o,o+3),W(this,o+1,o+2);return this};i.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)W(this,o,o+7),W(this,o+1,o+6),W(this,o+2,o+5),W(this,o+3,o+4);return this};i.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Oe(this,0,e):Ko.apply(this,arguments)};i.prototype.toLocaleString=i.prototype.toString;i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:i.compare(this,e)===0};i.prototype.inspect=function(){var e="",o=X.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};Te&&(i.prototype[Te]=i.prototype.inspect);i.prototype.compare=function(e,o,n,r,c){if(C(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),c===void 0&&(c=this.length),o<0||n>e.length||r<0||c>this.length)throw new RangeError("out of range index");if(r>=c&&o>=n)return 0;if(r>=c)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,r>>>=0,c>>>=0,this===e)return 0;for(var p=c-r,l=n-o,a=Math.min(p,l),s=this.slice(r,c),_=e.slice(o,n),u=0;u<a;++u)if(s[u]!==_[u]){p=s[u],l=_[u];break}return p<l?-1:l<p?1:0};function Ve(t,e,o,n,r){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,ue(o)&&(o=r?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(r)return-1;o=t.length-1}else if(o<0)if(r)o=0;else return-1;if(typeof e=="string"&&(e=i.from(e,n)),i.isBuffer(e))return e.length===0?-1:Le(t,e,o,n,r);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):Le(t,[e],o,n,r);throw new TypeError("val must be string, number or Buffer")}function Le(t,e,o,n,r){var c=1,p=t.length,l=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;c=2,p/=2,l/=2,o/=2}function a(g,P){return c===1?g[P]:g.readUInt16BE(P*c)}var s;if(r){var _=-1;for(s=o;s<p;s++)if(a(t,s)===a(e,_===-1?0:s-_)){if(_===-1&&(_=s),s-_+1===l)return _*c}else _!==-1&&(s-=s-_),_=-1}else for(o+l>p&&(o=p-l),s=o;s>=0;s--){for(var u=!0,x=0;x<l;x++)if(a(t,s+x)!==a(e,x)){u=!1;break}if(u)return s}return-1}i.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};i.prototype.indexOf=function(e,o,n){return Ve(this,e,o,n,!0)};i.prototype.lastIndexOf=function(e,o,n){return Ve(this,e,o,n,!1)};function Qo(t,e,o,n){o=Number(o)||0;var r=t.length-o;n?(n=Number(n),n>r&&(n=r)):n=r;var c=e.length;n>c/2&&(n=c/2);for(var p=0;p<n;++p){var l=parseInt(e.substr(p*2,2),16);if(ue(l))return p;t[o+p]=l}return p}function jo(t,e,o,n){return K(ae(e,t.length-o),t,o,n)}function et(t,e,o,n){return K(mt(e),t,o,n)}function ot(t,e,o,n){return K(Xe(e),t,o,n)}function tt(t,e,o,n){return K(ut(e,t.length-o),t,o,n)}i.prototype.write=function(e,o,n,r){if(o===void 0)r="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")r=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,r===void 0&&(r="utf8")):(r=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-o;if((n===void 0||n>c)&&(n=c),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var p=!1;;)switch(r){case"hex":return Qo(this,e,o,n);case"utf8":case"utf-8":return jo(this,e,o,n);case"ascii":case"latin1":case"binary":return et(this,e,o,n);case"base64":return ot(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tt(this,e,o,n);default:if(p)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}};i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function nt(t,e,o){return e===0&&o===t.length?ce.fromByteArray(t):ce.fromByteArray(t.slice(e,o))}function Oe(t,e,o){o=Math.min(t.length,o);for(var n=[],r=e;r<o;){var c=t[r],p=null,l=c>239?4:c>223?3:c>191?2:1;if(r+l<=o){var a,s,_,u;switch(l){case 1:c<128&&(p=c);break;case 2:a=t[r+1],(a&192)===128&&(u=(c&31)<<6|a&63,u>127&&(p=u));break;case 3:a=t[r+1],s=t[r+2],(a&192)===128&&(s&192)===128&&(u=(c&15)<<12|(a&63)<<6|s&63,u>2047&&(u<55296||u>57343)&&(p=u));break;case 4:a=t[r+1],s=t[r+2],_=t[r+3],(a&192)===128&&(s&192)===128&&(_&192)===128&&(u=(c&15)<<18|(a&63)<<12|(s&63)<<6|_&63,u>65535&&u<1114112&&(p=u))}}p===null?(p=65533,l=1):p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p),r+=l}return rt(n)}var Ie=4096;function rt(t){var e=t.length;if(e<=Ie)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=Ie));return o}function pt(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]&127);return n}function ct(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]);return n}function it(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var r="",c=e;c<o;++c)r+=dt[t[c]];return r}function lt(t,e,o){for(var n=t.slice(e,o),r="",c=0;c<n.length-1;c+=2)r+=String.fromCharCode(n[c]+n[c+1]*256);return r}i.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,i.prototype),r};function E(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=this[e],c=1,p=0;++p<o&&(c*=256);)r+=this[e+p]*c;return r};i.prototype.readUintBE=i.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=this[e+--o],c=1;o>0&&(c*=256);)r+=this[e+--o]*c;return r};i.prototype.readUint8=i.prototype.readUInt8=function(e,o){return e=e>>>0,o||E(e,1,this.length),this[e]};i.prototype.readUint16LE=i.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||E(e,2,this.length),this[e]|this[e+1]<<8};i.prototype.readUint16BE=i.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||E(e,2,this.length),this[e]<<8|this[e+1]};i.prototype.readUint32LE=i.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||E(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};i.prototype.readUint32BE=i.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||E(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};i.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=this[e],c=1,p=0;++p<o&&(c*=256);)r+=this[e+p]*c;return c*=128,r>=c&&(r-=Math.pow(2,8*o)),r};i.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=o,c=1,p=this[e+--r];r>0&&(c*=256);)p+=this[e+--r]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*o)),p};i.prototype.readInt8=function(e,o){return e=e>>>0,o||E(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};i.prototype.readInt16LE=function(e,o){e=e>>>0,o||E(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};i.prototype.readInt16BE=function(e,o){e=e>>>0,o||E(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};i.prototype.readInt32LE=function(e,o){return e=e>>>0,o||E(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};i.prototype.readInt32BE=function(e,o){return e=e>>>0,o||E(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};i.prototype.readFloatLE=function(e,o){return e=e>>>0,o||E(e,4,this.length),H.read(this,e,!0,23,4)};i.prototype.readFloatBE=function(e,o){return e=e>>>0,o||E(e,4,this.length),H.read(this,e,!1,23,4)};i.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||E(e,8,this.length),H.read(this,e,!0,52,8)};i.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||E(e,8,this.length),H.read(this,e,!1,52,8)};function B(t,e,o,n,r,c){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<c)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var c=Math.pow(2,8*n)-1;B(this,e,o,n,c,0)}var p=1,l=0;for(this[o]=e&255;++l<n&&(p*=256);)this[o+l]=e/p&255;return o+n};i.prototype.writeUintBE=i.prototype.writeUIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var c=Math.pow(2,8*n)-1;B(this,e,o,n,c,0)}var p=n-1,l=1;for(this[o+p]=e&255;--p>=0&&(l*=256);)this[o+p]=e/l&255;return o+n};i.prototype.writeUint8=i.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,1,255,0),this[o]=e&255,o+1};i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};i.prototype.writeIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*n-1);B(this,e,o,n,c-1,-c)}var p=0,l=1,a=0;for(this[o]=e&255;++p<n&&(l*=256);)e<0&&a===0&&this[o+p-1]!==0&&(a=1),this[o+p]=(e/l>>0)-a&255;return o+n};i.prototype.writeIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*n-1);B(this,e,o,n,c-1,-c)}var p=n-1,l=1,a=0;for(this[o+p]=e&255;--p>=0&&(l*=256);)e<0&&a===0&&this[o+p+1]!==0&&(a=1),this[o+p]=(e/l>>0)-a&255;return o+n};i.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};i.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};i.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function We(t,e,o,n,r,c){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ze(t,e,o,n,r){return e=+e,o=o>>>0,r||We(t,e,o,4,34028234663852886e22,-34028234663852886e22),H.write(t,e,o,n,23,4),o+4}i.prototype.writeFloatLE=function(e,o,n){return ze(this,e,o,!0,n)};i.prototype.writeFloatBE=function(e,o,n){return ze(this,e,o,!1,n)};function He(t,e,o,n,r){return e=+e,o=o>>>0,r||We(t,e,o,8,17976931348623157e292,-17976931348623157e292),H.write(t,e,o,n,52,8),o+8}i.prototype.writeDoubleLE=function(e,o,n){return He(this,e,o,!0,n)};i.prototype.writeDoubleBE=function(e,o,n){return He(this,e,o,!1,n)};i.prototype.copy=function(e,o,n,r){if(!i.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-n&&(r=e.length-o+n);var c=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),o),c};i.prototype.fill=function(e,o,n,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,n=this.length):typeof n=="string"&&(r=n,n=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var c=e.charCodeAt(0);(r==="utf8"&&c<128||r==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<n;++p)this[p]=e;else{var l=i.isBuffer(e)?e:i.from(e,r),a=l.length;if(a===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<n-o;++p)this[p+o]=l[p%a]}return this};var at=/[^+/0-9A-Za-z-_]/g;function _t(t){if(t=t.split("=")[0],t=t.trim().replace(at,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function ae(t,e){e=e||1/0;for(var o,n=t.length,r=null,c=[],p=0;p<n;++p){if(o=t.charCodeAt(p),o>55295&&o<57344){if(!r){if(o>56319){(e-=3)>-1&&c.push(239,191,189);continue}else if(p+1===n){(e-=3)>-1&&c.push(239,191,189);continue}r=o;continue}if(o<56320){(e-=3)>-1&&c.push(239,191,189),r=o;continue}o=(r-55296<<10|o-56320)+65536}else r&&(e-=3)>-1&&c.push(239,191,189);if(r=null,o<128){if((e-=1)<0)break;c.push(o)}else if(o<2048){if((e-=2)<0)break;c.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;c.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;c.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return c}function mt(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function ut(t,e){for(var o,n,r,c=[],p=0;p<t.length&&!((e-=2)<0);++p)o=t.charCodeAt(p),n=o>>8,r=o%256,c.push(r),c.push(n);return c}function Xe(t){return ce.toByteArray(_t(t))}function K(t,e,o,n){for(var r=0;r<n&&!(r+o>=e.length||r>=t.length);++r)e[r+o]=t[r];return r}function C(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function ue(t){return t!==t}var dt=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,r=0;r<16;++r)e[n+r]=t[o]+t[r];return e}()});var Ge=G((Vt,Re)=>{d();var k=Re.exports={},T,L;function de(){throw new Error("setTimeout has not been defined")}function se(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?T=setTimeout:T=de}catch(t){T=de}try{typeof clearTimeout=="function"?L=clearTimeout:L=se}catch(t){L=se}})();function qe(t){if(T===setTimeout)return setTimeout(t,0);if((T===de||!T)&&setTimeout)return T=setTimeout,setTimeout(t,0);try{return T(t,0)}catch(e){try{return T.call(null,t,0)}catch(o){return T.call(this,t,0)}}}function st(t){if(L===clearTimeout)return clearTimeout(t);if((L===se||!L)&&clearTimeout)return L=clearTimeout,clearTimeout(t);try{return L(t)}catch(e){try{return L.call(null,t)}catch(o){return L.call(this,t)}}}var N=[],$=!1,z,Q=-1;function ft(){!$||!z||($=!1,z.length?N=z.concat(N):Q=-1,N.length&&De())}function De(){if(!$){var t=qe(ft);$=!0;for(var e=N.length;e;){for(z=N,N=[];++Q<e;)z&&z[Q].run();Q=-1,e=N.length}z=null,$=!1,st(t)}}k.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];N.push(new Je(t,e)),N.length===1&&!$&&qe(De)};function Je(t,e){this.fun=t,this.array=e}Je.prototype.run=function(){this.fun.apply(null,this.array)};k.title="browser";k.browser=!0;k.env={};k.argv=[];k.version="";k.versions={};function M(){}k.on=M;k.addListener=M;k.once=M;k.off=M;k.removeListener=M;k.removeAllListeners=M;k.emit=M;k.prependListener=M;k.prependOnceListener=M;k.listeners=function(t){return[]};k.binding=function(t){throw new Error("process.binding is not supported")};k.cwd=function(){return"/"};k.chdir=function(t){throw new Error("process.chdir is not supported")};k.umask=function(){return 0}});var f,h,Ot,d=be(()=>{f=b($e()),h=b(Ge()),Ot=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var fe={};Ee(fe,{default:()=>Et});var ee,bt,Et,he=be(()=>{"use strict";d();ee=b(require("react")),bt=t=>ee.createElement("svg",w({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),ee.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),ee.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Et=bt});var Lt={};Ee(Lt,{Control:()=>yt,IndicatorsContainer:()=>vt,Input:()=>St,Menu:()=>wt,MenuList:()=>xt,DharitrIIcon:()=>Uo,Placeholder:()=>gt,ValueComponent:()=>ho,getOption:()=>Ct,getSingleValue:()=>Tt,getValueContainer:()=>Ft});module.exports=ne(Lt);d();d();var Ye=b(require("react")),Ze=require("react-select");d();d();var ht=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ht));var m={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var St=t=>Ye.default.createElement(Ze.components.Input,v(w({},t),{className:m.dropdown,"data-testid":"tokenSelectInput"}));d();var Ke=b(require("react")),Qe=require("react-select");var xt=t=>{let n=t,{rx:e}=n,o=ve(n,["rx"]);return Ke.default.createElement(Qe.components.MenuList,v(w({},o),{className:m.list}))};d();var j=b(require("react")),je=require("@fortawesome/free-solid-svg-icons"),eo=require("@fortawesome/react-fontawesome"),oo=require("react-select");var wt=t=>j.default.createElement(oo.components.Menu,v(w({},t),{className:m.menu}),t.selectProps.isLoading?j.default.createElement("div",{className:m.loading},j.default.createElement(eo.FontAwesomeIcon,{icon:je.faCircleNotch,className:"fa-spin",size:"lg"})):t.children);d();var to=b(require("react")),no=require("react-select");var yt=t=>to.default.createElement(no.components.Control,v(w({},t),{className:m.control}));d();var ro=b(require("react")),po=b(require("classnames")),co=require("react-select");var gt=t=>ro.default.createElement(co.components.Placeholder,v(w({},t),{className:(0,po.default)(m.placeholder,{[m.focused]:t.isFocused})}));d();var io=b(require("react")),lo=b(require("classnames")),ao=require("react-select");var vt=t=>io.default.createElement(ao.components.IndicatorsContainer,v(w({},t),{className:(0,lo.default)(m.indicator,{[m.expanded]:t.selectProps.menuIsOpen})}));d();var A=b(require("react")),_o=require("@fortawesome/free-solid-svg-icons"),mo=require("@fortawesome/react-fontawesome"),uo=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),so=b(require("classnames")),fo=require("react-select");var At=(he(),ne(fe)).default,ho=({RewaIcon:t,tokenId:e,icon:o})=>{let{isRewa:n}=(0,uo.getIdentifierType)(e);return n?A.default.createElement("span",{className:m.asset},t?A.default.createElement(t,{className:m.diamond}):A.default.createElement(At,{className:m.diamond})):o?A.default.createElement("img",{src:o,className:m.asset}):A.default.createElement(mo.FontAwesomeIcon,{icon:_o.faDiamond,className:m.asset})},Bt=({children:t})=>A.default.createElement("div",{className:m.wrapper},t),Ft=(t,e,o)=>n=>{var _,u;let{selectProps:r,isDisabled:c,children:p}=n,l=r.value,a=(u=(_=l==null?void 0:l.assets)==null?void 0:_.svgUrl)!=null?u:null,s=(0,A.useMemo)(()=>{let x=String(l==null?void 0:l.token.usdPrice);return x!=null&&x.includes("$")?l==null?void 0:l.token.usdPrice:`$${l==null?void 0:l.token.usdPrice}`},[l==null?void 0:l.token.usdPrice]);return A.default.createElement(fo.components.ValueContainer,v(w({},n),{className:m.container}),A.default.createElement("div",{className:(0,so.default)(m.icon,e)},A.default.createElement(ho,{RewaIcon:o,rewaLabel:t,icon:a,isDisabled:c,tokenId:l==null?void 0:l.value})),A.default.createElement("div",{className:m.payload},A.default.createElement(Bt,null,p,(l==null?void 0:l.token.usdPrice)&&A.default.createElement("small",{className:m.price},s))))};d();var S=b(require("react")),go=require("@fortawesome/free-solid-svg-icons"),vo=require("@fortawesome/react-fontawesome"),bo=require("@terradharitri/sdk-dapp/constants"),Eo=require("@terradharitri/sdk-dapp/UI/UsdValue"),Ao=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Bo=b(require("classnames")),Fo=require("react-select");d();d();var D=b(require("react"));d();var Ut=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ut));var ko={highlight:"dapp-core-component__styles-modules__highlight"};var So=({highlight:t,text:e=""})=>{let o=e.split(" "),n=t.toLowerCase(),r=new RegExp(`(${n})`,"gi"),c=o.map(p=>p.split(r).filter(l=>l));return D.default.createElement("span",{className:ko.highlight},c.map((p,l)=>{let a=`${p}-${l}`;return D.default.createElement("span",{key:a},p.map((s,_)=>{let u=s.toLowerCase()===n,x=n&&u,g=`${s}-${_}`;return x?D.default.createElement("strong",{key:g},s):D.default.createElement("span",{key:g},s)}))}))};d();var V=require("@terradharitri/sdk-dapp/constants"),xo=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),wo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),yo=({amount:t="0",decimals:e=0,digits:o=V.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:r=!1})=>{if(t==null||!(0,wo.stringIsInteger)(t))return"0";let c=l=>(0,xo.formatAmount)({input:t,digits:l,decimals:e,addCommas:n,showLastNonZeroDecimal:r}),p=c(o);return p=parseFloat(p)>0?p:c(V.DIGITS),p=parseFloat(p)>0?p:c(V.DIGITS+2),p=parseFloat(p)>0?p:c(V.DIGITS+4),p=parseFloat(p)>0?p:c(V.DIGITS+6),p=parseFloat(p)>0?p:c(V.DIGITS+10),parseFloat(p)>0?p:c(V.DIGITS+14)};var{default:Uo}=(he(),ne(fe)),Ct=({RewaIcon:t,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>r=>{var ke,Se,xe,we;let{data:c,isSelected:p,isFocused:l,isDisabled:a,selectProps:s}=r,_=c,{isRewa:u}=(0,Ao.getIdentifierType)(_.value),x=_.token.assets?_.token.assets.svgUrl:null,g=yo({amount:_.token.balance,decimals:_.token.decimals||bo.DECIMALS,addCommas:!0}),P=(Se=(ke=_.token)==null?void 0:ke.usdPrice)==null?void 0:Se.toString(),J=(we=(xe=_.token)==null?void 0:xe.valueUSD)==null?void 0:we.toString();return S.default.createElement("div",{"data-testid":`${r.value}-option`},S.default.createElement(Fo.components.Option,v(w({},r),{className:(0,Bo.default)(m.option,{[m.selected]:p||l,[m.disabled]:a})}),S.default.createElement("div",{className:m.image},u?S.default.createElement("span",{className:m.icon},t?S.default.createElement(t,null):S.default.createElement(Uo,null)):x?S.default.createElement("img",{src:x,className:m.icon}):S.default.createElement("span",{className:m.icon},S.default.createElement(vo.FontAwesomeIcon,{icon:go.faDiamond,className:m.diamond}))),S.default.createElement("div",{className:m.info},S.default.createElement("div",{className:m.left},S.default.createElement("div",{className:m.ticker},S.default.createElement("span",{className:m.value},s.inputValue?S.default.createElement(So,{text:_.token.ticker,highlight:s.inputValue}):_.token.ticker),e&&S.default.createElement(e,{token:_.token})),n&&S.default.createElement("small",{className:m.price},P)),S.default.createElement("div",{className:m.right},S.default.createElement("span",{className:m.value},g),o&&J&&S.default.createElement(Eo.UsdValue,{usd:1,decimals:4,amount:J,"data-testid":"token-price-usd-value",className:m.price,addEqualSign:!1}))),S.default.createElement("div",{className:m.children},r.children)))};d();var oe=b(require("react")),Co=b(require("classnames")),To=require("react-select");var Tt=t=>e=>{let{selectProps:o,children:n}=e,r=o.value;return oe.default.createElement(To.components.SingleValue,v(w({},e),{className:(0,Co.default)(m.single,{[m.focused]:e.selectProps.menuIsOpen})}),oe.default.createElement("div",{className:m.ticker},n,t&&oe.default.createElement(t,{token:r==null?void 0:r.token})))};0&&(module.exports={Control,IndicatorsContainer,Input,Menu,MenuList,DharitrIIcon,Placeholder,ValueComponent,getOption,getSingleValue,getValueContainer});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
