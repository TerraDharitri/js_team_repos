"use strict";var Te=Object.create;var z=Object.defineProperty,Re=Object.defineProperties,Me=Object.getOwnPropertyDescriptor,Ne=Object.getOwnPropertyDescriptors,ze=Object.getOwnPropertyNames,oe=Object.getOwnPropertySymbols,We=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var te=(t,e,o)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,re=(t,e)=>{for(var o in e||(e={}))ne.call(e,o)&&te(t,o,e[o]);if(oe)for(var o of oe(e))Ye.call(e,o)&&te(t,o,e[o]);return t},ce=(t,e)=>Re(t,Ne(e));var qe=(t,e)=>()=>(t&&(e=t(t=0)),e);var W=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ve=(t,e)=>{for(var o in e)z(t,o,{get:e[o],enumerable:!0})},pe=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ze(e))!ne.call(t,r)&&r!==o&&z(t,r,{get:()=>e[r],enumerable:!(n=Me(e,r))||n.enumerable});return t};var X=(t,e,o)=>(o=t!=null?Te(We(t)):{},pe(e||!t||!t.__esModule?z(o,"default",{value:t,enumerable:!0}):o,t)),He=t=>pe(z({},"__esModule",{value:!0}),t);var _e=W(Y=>{"use strict";h();Y.byteLength=Ge;Y.toByteArray=Qe;Y.fromByteArray=Oe;var x=[],S=[],Xe=typeof Uint8Array!="undefined"?Uint8Array:Array,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(A=0,ie=G.length;A<ie;++A)x[A]=G[A],S[G.charCodeAt(A)]=A;var A,ie;S["-".charCodeAt(0)]=62;S["_".charCodeAt(0)]=63;function le(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function Ge(t){var e=le(t),o=e[0],n=e[1];return(o+n)*3/4-n}function Je(t,e,o){return(e+o)*3/4-o}function Qe(t){var e,o=le(t),n=o[0],r=o[1],c=new Xe(Je(t,n,r)),p=0,l=r>0?n-4:n,_;for(_=0;_<l;_+=4)e=S[t.charCodeAt(_)]<<18|S[t.charCodeAt(_+1)]<<12|S[t.charCodeAt(_+2)]<<6|S[t.charCodeAt(_+3)],c[p++]=e>>16&255,c[p++]=e>>8&255,c[p++]=e&255;return r===2&&(e=S[t.charCodeAt(_)]<<2|S[t.charCodeAt(_+1)]>>4,c[p++]=e&255),r===1&&(e=S[t.charCodeAt(_)]<<10|S[t.charCodeAt(_+1)]<<4|S[t.charCodeAt(_+2)]>>2,c[p++]=e>>8&255,c[p++]=e&255),c}function Ze(t){return x[t>>18&63]+x[t>>12&63]+x[t>>6&63]+x[t&63]}function Ke(t,e,o){for(var n,r=[],c=e;c<o;c+=3)n=(t[c]<<16&16711680)+(t[c+1]<<8&65280)+(t[c+2]&255),r.push(Ze(n));return r.join("")}function Oe(t){for(var e,o=t.length,n=o%3,r=[],c=16383,p=0,l=o-n;p<l;p+=c)r.push(Ke(t,p,p+c>l?l:p+c));return n===1?(e=t[o-1],r.push(x[e>>2]+x[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],r.push(x[e>>10]+x[e>>4&63]+x[e<<2&63]+"=")),r.join("")}});var ae=W(J=>{h();J.read=function(t,e,o,n,r){var c,p,l=r*8-n-1,_=(1<<l)-1,u=_>>1,d=-7,a=o?r-1:0,w=o?-1:1,k=t[e+a];for(a+=w,c=k&(1<<-d)-1,k>>=-d,d+=l;d>0;c=c*256+t[e+a],a+=w,d-=8);for(p=c&(1<<-d)-1,c>>=-d,d+=n;d>0;p=p*256+t[e+a],a+=w,d-=8);if(c===0)c=1-u;else{if(c===_)return p?NaN:(k?-1:1)*(1/0);p=p+Math.pow(2,n),c=c-u}return(k?-1:1)*p*Math.pow(2,c-n)};J.write=function(t,e,o,n,r,c){var p,l,_,u=c*8-r-1,d=(1<<u)-1,a=d>>1,w=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=n?0:c-1,I=n?1:-1,Ie=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,p=d):(p=Math.floor(Math.log(e)/Math.LN2),e*(_=Math.pow(2,-p))<1&&(p--,_*=2),p+a>=1?e+=w/_:e+=w*Math.pow(2,1-a),e*_>=2&&(p++,_/=2),p+a>=d?(l=0,p=d):p+a>=1?(l=(e*_-1)*Math.pow(2,r),p=p+a):(l=e*Math.pow(2,a-1)*Math.pow(2,r),p=0));r>=8;t[o+k]=l&255,k+=I,l/=256,r-=8);for(p=p<<r|l,u+=r;u>0;t[o+k]=p&255,k+=I,p/=256,u-=8);t[o+k-I]|=Ie*128}});var ve=W(M=>{"use strict";h();var Q=_e(),R=ae(),ue=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;M.Buffer=i;M.SlowBuffer=oo;M.INSPECT_MAX_BYTES=50;var q=2147483647;M.kMaxLength=q;i.TYPED_ARRAY_SUPPORT=je();!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function je(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.buffer}});Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.byteOffset}});function b(t){if(t>q)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,i.prototype),e}function i(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return j(t)}return fe(t,e,o)}i.poolSize=8192;function fe(t,e,o){if(typeof t=="string")return $e(t,e);if(ArrayBuffer.isView(t))return De(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(y(t,ArrayBuffer)||t&&y(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(y(t,SharedArrayBuffer)||t&&y(t.buffer,SharedArrayBuffer)))return K(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return i.from(n,e,o);var r=eo(t);if(r)return r;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return i.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}i.from=function(t,e,o){return fe(t,e,o)};Object.setPrototypeOf(i.prototype,Uint8Array.prototype);Object.setPrototypeOf(i,Uint8Array);function he(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Pe(t,e,o){return he(t),t<=0?b(t):e!==void 0?typeof o=="string"?b(t).fill(e,o):b(t).fill(e):b(t)}i.alloc=function(t,e,o){return Pe(t,e,o)};function j(t){return he(t),b(t<0?0:P(t)|0)}i.allocUnsafe=function(t){return j(t)};i.allocUnsafeSlow=function(t){return j(t)};function $e(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=se(t,e)|0,n=b(o),r=n.write(t,e);return r!==o&&(n=n.slice(0,r)),n}function Z(t){for(var e=t.length<0?0:P(t.length)|0,o=b(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function De(t){if(y(t,Uint8Array)){var e=new Uint8Array(t);return K(e.buffer,e.byteOffset,e.byteLength)}return Z(t)}function K(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,i.prototype),n}function eo(t){if(i.isBuffer(t)){var e=P(t.length)|0,o=b(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||$(t.length)?b(0):Z(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Z(t.data)}function P(t){if(t>=q)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+q.toString(16)+" bytes");return t|0}function oo(t){return+t!=t&&(t=0),i.alloc(+t)}i.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==i.prototype};i.compare=function(e,o){if(y(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),y(o,Uint8Array)&&(o=i.from(o,o.offset,o.byteLength)),!i.isBuffer(e)||!i.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,r=o.length,c=0,p=Math.min(n,r);c<p;++c)if(e[c]!==o[c]){n=e[c],r=o[c];break}return n<r?-1:r<n?1:0};i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};i.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return i.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var r=i.allocUnsafe(o),c=0;for(n=0;n<e.length;++n){var p=e[n];if(y(p,Uint8Array))c+p.length>r.length?i.from(p).copy(r,c):Uint8Array.prototype.set.call(r,p,c);else if(i.isBuffer(p))p.copy(r,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return r};function se(t,e){if(i.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||y(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return O(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return ge(t).length;default:if(r)return n?-1:O(t).length;e=(""+e).toLowerCase(),r=!0}}i.byteLength=se;function to(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return mo(this,e,o);case"utf8":case"utf-8":return Se(this,e,o);case"ascii":return ao(this,e,o);case"latin1":case"binary":return uo(this,e,o);case"base64":return lo(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fo(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}i.prototype._isBuffer=!0;function C(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}i.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)C(this,o,o+1);return this};i.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)C(this,o,o+3),C(this,o+1,o+2);return this};i.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)C(this,o,o+7),C(this,o+1,o+6),C(this,o+2,o+5),C(this,o+3,o+4);return this};i.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Se(this,0,e):to.apply(this,arguments)};i.prototype.toLocaleString=i.prototype.toString;i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:i.compare(this,e)===0};i.prototype.inspect=function(){var e="",o=M.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};ue&&(i.prototype[ue]=i.prototype.inspect);i.prototype.compare=function(e,o,n,r,c){if(y(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),c===void 0&&(c=this.length),o<0||n>e.length||r<0||c>this.length)throw new RangeError("out of range index");if(r>=c&&o>=n)return 0;if(r>=c)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,r>>>=0,c>>>=0,this===e)return 0;for(var p=c-r,l=n-o,_=Math.min(p,l),u=this.slice(r,c),d=e.slice(o,n),a=0;a<_;++a)if(u[a]!==d[a]){p=u[a],l=d[a];break}return p<l?-1:l<p?1:0};function ke(t,e,o,n,r){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,$(o)&&(o=r?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(r)return-1;o=t.length-1}else if(o<0)if(r)o=0;else return-1;if(typeof e=="string"&&(e=i.from(e,n)),i.isBuffer(e))return e.length===0?-1:de(t,e,o,n,r);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):de(t,[e],o,n,r);throw new TypeError("val must be string, number or Buffer")}function de(t,e,o,n,r){var c=1,p=t.length,l=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;c=2,p/=2,l/=2,o/=2}function _(k,I){return c===1?k[I]:k.readUInt16BE(I*c)}var u;if(r){var d=-1;for(u=o;u<p;u++)if(_(t,u)===_(e,d===-1?0:u-d)){if(d===-1&&(d=u),u-d+1===l)return d*c}else d!==-1&&(u-=u-d),d=-1}else for(o+l>p&&(o=p-l),u=o;u>=0;u--){for(var a=!0,w=0;w<l;w++)if(_(t,u+w)!==_(e,w)){a=!1;break}if(a)return u}return-1}i.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};i.prototype.indexOf=function(e,o,n){return ke(this,e,o,n,!0)};i.prototype.lastIndexOf=function(e,o,n){return ke(this,e,o,n,!1)};function no(t,e,o,n){o=Number(o)||0;var r=t.length-o;n?(n=Number(n),n>r&&(n=r)):n=r;var c=e.length;n>c/2&&(n=c/2);for(var p=0;p<n;++p){var l=parseInt(e.substr(p*2,2),16);if($(l))return p;t[o+p]=l}return p}function ro(t,e,o,n){return V(O(e,t.length-o),t,o,n)}function co(t,e,o,n){return V(ko(e),t,o,n)}function po(t,e,o,n){return V(ge(e),t,o,n)}function io(t,e,o,n){return V(So(e,t.length-o),t,o,n)}i.prototype.write=function(e,o,n,r){if(o===void 0)r="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")r=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,r===void 0&&(r="utf8")):(r=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-o;if((n===void 0||n>c)&&(n=c),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var p=!1;;)switch(r){case"hex":return no(this,e,o,n);case"utf8":case"utf-8":return ro(this,e,o,n);case"ascii":case"latin1":case"binary":return co(this,e,o,n);case"base64":return po(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return io(this,e,o,n);default:if(p)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}};i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function lo(t,e,o){return e===0&&o===t.length?Q.fromByteArray(t):Q.fromByteArray(t.slice(e,o))}function Se(t,e,o){o=Math.min(t.length,o);for(var n=[],r=e;r<o;){var c=t[r],p=null,l=c>239?4:c>223?3:c>191?2:1;if(r+l<=o){var _,u,d,a;switch(l){case 1:c<128&&(p=c);break;case 2:_=t[r+1],(_&192)===128&&(a=(c&31)<<6|_&63,a>127&&(p=a));break;case 3:_=t[r+1],u=t[r+2],(_&192)===128&&(u&192)===128&&(a=(c&15)<<12|(_&63)<<6|u&63,a>2047&&(a<55296||a>57343)&&(p=a));break;case 4:_=t[r+1],u=t[r+2],d=t[r+3],(_&192)===128&&(u&192)===128&&(d&192)===128&&(a=(c&15)<<18|(_&63)<<12|(u&63)<<6|d&63,a>65535&&a<1114112&&(p=a))}}p===null?(p=65533,l=1):p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p),r+=l}return _o(n)}var me=4096;function _o(t){var e=t.length;if(e<=me)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=me));return o}function ao(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]&127);return n}function uo(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]);return n}function mo(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var r="",c=e;c<o;++c)r+=wo[t[c]];return r}function fo(t,e,o){for(var n=t.slice(e,o),r="",c=0;c<n.length-1;c+=2)r+=String.fromCharCode(n[c]+n[c+1]*256);return r}i.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,i.prototype),r};function f(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||f(e,o,this.length);for(var r=this[e],c=1,p=0;++p<o&&(c*=256);)r+=this[e+p]*c;return r};i.prototype.readUintBE=i.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||f(e,o,this.length);for(var r=this[e+--o],c=1;o>0&&(c*=256);)r+=this[e+--o]*c;return r};i.prototype.readUint8=i.prototype.readUInt8=function(e,o){return e=e>>>0,o||f(e,1,this.length),this[e]};i.prototype.readUint16LE=i.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||f(e,2,this.length),this[e]|this[e+1]<<8};i.prototype.readUint16BE=i.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||f(e,2,this.length),this[e]<<8|this[e+1]};i.prototype.readUint32LE=i.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||f(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};i.prototype.readUint32BE=i.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||f(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};i.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||f(e,o,this.length);for(var r=this[e],c=1,p=0;++p<o&&(c*=256);)r+=this[e+p]*c;return c*=128,r>=c&&(r-=Math.pow(2,8*o)),r};i.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||f(e,o,this.length);for(var r=o,c=1,p=this[e+--r];r>0&&(c*=256);)p+=this[e+--r]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*o)),p};i.prototype.readInt8=function(e,o){return e=e>>>0,o||f(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};i.prototype.readInt16LE=function(e,o){e=e>>>0,o||f(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};i.prototype.readInt16BE=function(e,o){e=e>>>0,o||f(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};i.prototype.readInt32LE=function(e,o){return e=e>>>0,o||f(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};i.prototype.readInt32BE=function(e,o){return e=e>>>0,o||f(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};i.prototype.readFloatLE=function(e,o){return e=e>>>0,o||f(e,4,this.length),R.read(this,e,!0,23,4)};i.prototype.readFloatBE=function(e,o){return e=e>>>0,o||f(e,4,this.length),R.read(this,e,!1,23,4)};i.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||f(e,8,this.length),R.read(this,e,!0,52,8)};i.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||f(e,8,this.length),R.read(this,e,!1,52,8)};function s(t,e,o,n,r,c){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<c)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var c=Math.pow(2,8*n)-1;s(this,e,o,n,c,0)}var p=1,l=0;for(this[o]=e&255;++l<n&&(p*=256);)this[o+l]=e/p&255;return o+n};i.prototype.writeUintBE=i.prototype.writeUIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var c=Math.pow(2,8*n)-1;s(this,e,o,n,c,0)}var p=n-1,l=1;for(this[o+p]=e&255;--p>=0&&(l*=256);)this[o+p]=e/l&255;return o+n};i.prototype.writeUint8=i.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,1,255,0),this[o]=e&255,o+1};i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};i.prototype.writeIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*n-1);s(this,e,o,n,c-1,-c)}var p=0,l=1,_=0;for(this[o]=e&255;++p<n&&(l*=256);)e<0&&_===0&&this[o+p-1]!==0&&(_=1),this[o+p]=(e/l>>0)-_&255;return o+n};i.prototype.writeIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*n-1);s(this,e,o,n,c-1,-c)}var p=n-1,l=1,_=0;for(this[o+p]=e&255;--p>=0&&(l*=256);)e<0&&_===0&&this[o+p+1]!==0&&(_=1),this[o+p]=(e/l>>0)-_&255;return o+n};i.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};i.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};i.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||s(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function we(t,e,o,n,r,c){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function xe(t,e,o,n,r){return e=+e,o=o>>>0,r||we(t,e,o,4,34028234663852886e22,-34028234663852886e22),R.write(t,e,o,n,23,4),o+4}i.prototype.writeFloatLE=function(e,o,n){return xe(this,e,o,!0,n)};i.prototype.writeFloatBE=function(e,o,n){return xe(this,e,o,!1,n)};function ye(t,e,o,n,r){return e=+e,o=o>>>0,r||we(t,e,o,8,17976931348623157e292,-17976931348623157e292),R.write(t,e,o,n,52,8),o+8}i.prototype.writeDoubleLE=function(e,o,n){return ye(this,e,o,!0,n)};i.prototype.writeDoubleBE=function(e,o,n){return ye(this,e,o,!1,n)};i.prototype.copy=function(e,o,n,r){if(!i.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-n&&(r=e.length-o+n);var c=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),o),c};i.prototype.fill=function(e,o,n,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,n=this.length):typeof n=="string"&&(r=n,n=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var c=e.charCodeAt(0);(r==="utf8"&&c<128||r==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<n;++p)this[p]=e;else{var l=i.isBuffer(e)?e:i.from(e,r),_=l.length;if(_===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<n-o;++p)this[p+o]=l[p%_]}return this};var ho=/[^+/0-9A-Za-z-_]/g;function so(t){if(t=t.split("=")[0],t=t.trim().replace(ho,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function O(t,e){e=e||1/0;for(var o,n=t.length,r=null,c=[],p=0;p<n;++p){if(o=t.charCodeAt(p),o>55295&&o<57344){if(!r){if(o>56319){(e-=3)>-1&&c.push(239,191,189);continue}else if(p+1===n){(e-=3)>-1&&c.push(239,191,189);continue}r=o;continue}if(o<56320){(e-=3)>-1&&c.push(239,191,189),r=o;continue}o=(r-55296<<10|o-56320)+65536}else r&&(e-=3)>-1&&c.push(239,191,189);if(r=null,o<128){if((e-=1)<0)break;c.push(o)}else if(o<2048){if((e-=2)<0)break;c.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;c.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;c.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return c}function ko(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function So(t,e){for(var o,n,r,c=[],p=0;p<t.length&&!((e-=2)<0);++p)o=t.charCodeAt(p),n=o>>8,r=o%256,c.push(r),c.push(n);return c}function ge(t){return Q.toByteArray(so(t))}function V(t,e,o,n){for(var r=0;r<n&&!(r+o>=e.length||r>=t.length);++r)e[r+o]=t[r];return r}function y(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function $(t){return t!==t}var wo=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,r=0;r<16;++r)e[n+r]=t[o]+t[r];return e}()});var Ue=W((Fo,Ae)=>{h();var m=Ae.exports={},g,v;function D(){throw new Error("setTimeout has not been defined")}function ee(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=D}catch(t){g=D}try{typeof clearTimeout=="function"?v=clearTimeout:v=ee}catch(t){v=ee}})();function be(t){if(g===setTimeout)return setTimeout(t,0);if((g===D||!g)&&setTimeout)return g=setTimeout,setTimeout(t,0);try{return g(t,0)}catch(e){try{return g.call(null,t,0)}catch(o){return g.call(this,t,0)}}}function xo(t){if(v===clearTimeout)return clearTimeout(t);if((v===ee||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(t);try{return v(t)}catch(e){try{return v.call(null,t)}catch(o){return v.call(this,t)}}}var E=[],N=!1,L,H=-1;function yo(){!N||!L||(N=!1,L.length?E=L.concat(E):H=-1,E.length&&Ee())}function Ee(){if(!N){var t=be(yo);N=!0;for(var e=E.length;e;){for(L=E,E=[];++H<e;)L&&L[H].run();H=-1,e=E.length}L=null,N=!1,xo(t)}}m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];E.push(new Be(t,e)),E.length===1&&!N&&be(Ee)};function Be(t,e){this.fun=t,this.array=e}Be.prototype.run=function(){this.fun.apply(null,this.array)};m.title="browser";m.browser=!0;m.env={};m.argv=[];m.version="";m.versions={};function B(){}m.on=B;m.addListener=B;m.once=B;m.off=B;m.removeListener=B;m.removeAllListeners=B;m.emit=B;m.prependListener=B;m.prependOnceListener=B;m.listeners=function(t){return[]};m.binding=function(t){throw new Error("process.binding is not supported")};m.cwd=function(){return"/"};m.chdir=function(t){throw new Error("process.chdir is not supported")};m.umask=function(){return 0}});var U,F,Co,h=qe(()=>{U=X(ve()),F=X(Ue()),Co=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var bo={};Ve(bo,{Input:()=>vo});module.exports=He(bo);h();var Ce=X(require("react")),Le=require("react-select");h();h();var go=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(go));var Fe={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var vo=t=>Ce.default.createElement(Le.components.Input,ce(re({},t),{className:Fe.dropdown,"data-testid":"tokenSelectInput"}));0&&(module.exports={Input});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=Input.js.map
