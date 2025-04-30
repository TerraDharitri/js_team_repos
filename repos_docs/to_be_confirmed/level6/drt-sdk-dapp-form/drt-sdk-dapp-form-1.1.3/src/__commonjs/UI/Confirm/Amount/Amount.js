"use strict";var Zr=Object.create;var z=Object.defineProperty;var Jr=Object.getOwnPropertyDescriptor;var jr=Object.getOwnPropertyNames,mr=Object.getOwnPropertySymbols,re=Object.getPrototypeOf,gr=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var hr=(t,r,e)=>r in t?z(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,H=(t,r)=>{for(var e in r||(r={}))gr.call(r,e)&&hr(t,e,r[e]);if(mr)for(var e of mr(r))ee.call(r,e)&&hr(t,e,r[e]);return t};var yr=(t,r)=>()=>(t&&(r=t(t=0)),r);var X=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),xr=(t,r)=>{for(var e in r)z(t,e,{get:r[e],enumerable:!0})},br=(t,r,e,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of jr(r))!gr.call(t,n)&&n!==e&&z(t,n,{get:()=>r[n],enumerable:!(o=Jr(r,n))||o.enumerable});return t};var I=(t,r,e)=>(e=t!=null?Zr(re(t)):{},br(r||!t||!t.__esModule?z(e,"default",{value:t,enumerable:!0}):e,t)),_r=t=>br(z({},"__esModule",{value:!0}),t);var Tr=X(q=>{"use strict";l();q.byteLength=oe;q.toByteArray=ie;q.fromByteArray=le;var T=[],v=[],te=typeof Uint8Array!="undefined"?Uint8Array:Array,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(M=0,wr=j.length;M<wr;++M)T[M]=j[M],v[j.charCodeAt(M)]=M;var M,wr;v["-".charCodeAt(0)]=62;v["_".charCodeAt(0)]=63;function vr(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");e===-1&&(e=r);var o=e===r?0:4-e%4;return[e,o]}function oe(t){var r=vr(t),e=r[0],o=r[1];return(e+o)*3/4-o}function ne(t,r,e){return(r+e)*3/4-e}function ie(t){var r,e=vr(t),o=e[0],n=e[1],i=new te(ne(t,o,n)),a=0,c=n>0?o-4:o,s;for(s=0;s<c;s+=4)r=v[t.charCodeAt(s)]<<18|v[t.charCodeAt(s+1)]<<12|v[t.charCodeAt(s+2)]<<6|v[t.charCodeAt(s+3)],i[a++]=r>>16&255,i[a++]=r>>8&255,i[a++]=r&255;return n===2&&(r=v[t.charCodeAt(s)]<<2|v[t.charCodeAt(s+1)]>>4,i[a++]=r&255),n===1&&(r=v[t.charCodeAt(s)]<<10|v[t.charCodeAt(s+1)]<<4|v[t.charCodeAt(s+2)]>>2,i[a++]=r>>8&255,i[a++]=r&255),i}function ae(t){return T[t>>18&63]+T[t>>12&63]+T[t>>6&63]+T[t&63]}function pe(t,r,e){for(var o,n=[],i=r;i<e;i+=3)o=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),n.push(ae(o));return n.join("")}function le(t){for(var r,e=t.length,o=e%3,n=[],i=16383,a=0,c=e-o;a<c;a+=i)n.push(pe(t,a,a+i>c?c:a+i));return o===1?(r=t[e-1],n.push(T[r>>2]+T[r<<4&63]+"==")):o===2&&(r=(t[e-2]<<8)+t[e-1],n.push(T[r>>10]+T[r>>4&63]+T[r<<2&63]+"=")),n.join("")}});var kr=X(rr=>{l();rr.read=function(t,r,e,o,n){var i,a,c=n*8-o-1,s=(1<<c)-1,d=s>>1,f=-7,u=e?n-1:0,w=e?-1:1,b=t[r+u];for(u+=w,i=b&(1<<-f)-1,b>>=-f,f+=c;f>0;i=i*256+t[r+u],u+=w,f-=8);for(a=i&(1<<-f)-1,i>>=-f,f+=o;f>0;a=a*256+t[r+u],u+=w,f-=8);if(i===0)i=1-d;else{if(i===s)return a?NaN:(b?-1:1)*(1/0);a=a+Math.pow(2,o),i=i-d}return(b?-1:1)*a*Math.pow(2,i-o)};rr.write=function(t,r,e,o,n,i){var a,c,s,d=i*8-n-1,f=(1<<d)-1,u=f>>1,w=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=o?0:i-1,N=o?1:-1,$=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(c=isNaN(r)?1:0,a=f):(a=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-a))<1&&(a--,s*=2),a+u>=1?r+=w/s:r+=w*Math.pow(2,1-u),r*s>=2&&(a++,s/=2),a+u>=f?(c=0,a=f):a+u>=1?(c=(r*s-1)*Math.pow(2,n),a=a+u):(c=r*Math.pow(2,u-1)*Math.pow(2,n),a=0));n>=8;t[e+b]=c&255,b+=N,c/=256,n-=8);for(a=a<<n|c,d+=n;d>0;t[e+b]=a&255,b+=N,a/=256,d-=8);t[e+b-N]|=$*128}});var Dr=X(V=>{"use strict";l();var er=Tr(),P=kr(),Ar=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;V.Buffer=p;V.SlowBuffer=me;V.INSPECT_MAX_BYTES=50;var K=2147483647;V.kMaxLength=K;p.TYPED_ARRAY_SUPPORT=ce();!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ce(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),t.foo()===42}catch(e){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.buffer}});Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.byteOffset}});function B(t){if(t>K)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,p.prototype),r}function p(t,r,e){if(typeof t=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ir(t)}return Br(t,r,e)}p.poolSize=8192;function Br(t,r,e){if(typeof t=="string")return ue(t,r);if(ArrayBuffer.isView(t))return fe(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(k(t,ArrayBuffer)||t&&k(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(k(t,SharedArrayBuffer)||t&&k(t.buffer,SharedArrayBuffer)))return or(t,r,e);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return p.from(o,r,e);var n=de(t);if(n)return n;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return p.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}p.from=function(t,r,e){return Br(t,r,e)};Object.setPrototypeOf(p.prototype,Uint8Array.prototype);Object.setPrototypeOf(p,Uint8Array);function Ur(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function se(t,r,e){return Ur(t),t<=0?B(t):r!==void 0?typeof e=="string"?B(t).fill(r,e):B(t).fill(r):B(t)}p.alloc=function(t,r,e){return se(t,r,e)};function ir(t){return Ur(t),B(t<0?0:ar(t)|0)}p.allocUnsafe=function(t){return ir(t)};p.allocUnsafeSlow=function(t){return ir(t)};function ue(t,r){if((typeof r!="string"||r==="")&&(r="utf8"),!p.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=Sr(t,r)|0,o=B(e),n=o.write(t,r);return n!==e&&(o=o.slice(0,n)),o}function tr(t){for(var r=t.length<0?0:ar(t.length)|0,e=B(r),o=0;o<r;o+=1)e[o]=t[o]&255;return e}function fe(t){if(k(t,Uint8Array)){var r=new Uint8Array(t);return or(r.buffer,r.byteOffset,r.byteLength)}return tr(t)}function or(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&e===void 0?o=new Uint8Array(t):e===void 0?o=new Uint8Array(t,r):o=new Uint8Array(t,r,e),Object.setPrototypeOf(o,p.prototype),o}function de(t){if(p.isBuffer(t)){var r=ar(t.length)|0,e=B(r);return e.length===0||t.copy(e,0,0,r),e}if(t.length!==void 0)return typeof t.length!="number"||pr(t.length)?B(0):tr(t);if(t.type==="Buffer"&&Array.isArray(t.data))return tr(t.data)}function ar(t){if(t>=K)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+K.toString(16)+" bytes");return t|0}function me(t){return+t!=t&&(t=0),p.alloc(+t)}p.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==p.prototype};p.compare=function(r,e){if(k(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),k(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(r)||!p.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var o=r.length,n=e.length,i=0,a=Math.min(o,n);i<a;++i)if(r[i]!==e[i]){o=r[i],n=e[i];break}return o<n?-1:n<o?1:0};p.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};p.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return p.alloc(0);var o;if(e===void 0)for(e=0,o=0;o<r.length;++o)e+=r[o].length;var n=p.allocUnsafe(e),i=0;for(o=0;o<r.length;++o){var a=r[o];if(k(a,Uint8Array))i+a.length>n.length?p.from(a).copy(n,i):Uint8Array.prototype.set.call(n,a,i);else if(p.isBuffer(a))a.copy(n,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return n};function Sr(t,r){if(p.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||k(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&e===0)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return nr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return Rr(t).length;default:if(n)return o?-1:nr(t).length;r=(""+r).toLowerCase(),n=!0}}p.byteLength=Sr;function he(t,r,e){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(t||(t="utf8");;)switch(t){case"hex":return Ae(this,r,e);case"utf8":case"utf-8":return Nr(this,r,e);case"ascii":return Te(this,r,e);case"latin1":case"binary":return ke(this,r,e);case"base64":return we(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ee(this,r,e);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}p.prototype._isBuffer=!0;function R(t,r,e){var o=t[r];t[r]=t[e],t[e]=o}p.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)R(this,e,e+1);return this};p.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)R(this,e,e+3),R(this,e+1,e+2);return this};p.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)R(this,e,e+7),R(this,e+1,e+6),R(this,e+2,e+5),R(this,e+3,e+4);return this};p.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?Nr(this,0,r):he.apply(this,arguments)};p.prototype.toLocaleString=p.prototype.toString;p.prototype.equals=function(r){if(!p.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:p.compare(this,r)===0};p.prototype.inspect=function(){var r="",e=V.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};Ar&&(p.prototype[Ar]=p.prototype.inspect);p.prototype.compare=function(r,e,o,n,i){if(k(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),!p.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),o===void 0&&(o=r?r.length:0),n===void 0&&(n=0),i===void 0&&(i=this.length),e<0||o>r.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=o)return 0;if(n>=i)return-1;if(e>=o)return 1;if(e>>>=0,o>>>=0,n>>>=0,i>>>=0,this===r)return 0;for(var a=i-n,c=o-e,s=Math.min(a,c),d=this.slice(n,i),f=r.slice(e,o),u=0;u<s;++u)if(d[u]!==f[u]){a=d[u],c=f[u];break}return a<c?-1:c<a?1:0};function Lr(t,r,e,o,n){if(t.length===0)return-1;if(typeof e=="string"?(o=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,pr(e)&&(e=n?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(n)return-1;e=t.length-1}else if(e<0)if(n)e=0;else return-1;if(typeof r=="string"&&(r=p.from(r,o)),p.isBuffer(r))return r.length===0?-1:Er(t,r,e,o,n);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):Er(t,[r],e,o,n);throw new TypeError("val must be string, number or Buffer")}function Er(t,r,e,o,n){var i=1,a=t.length,c=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||r.length<2)return-1;i=2,a/=2,c/=2,e/=2}function s(b,N){return i===1?b[N]:b.readUInt16BE(N*i)}var d;if(n){var f=-1;for(d=e;d<a;d++)if(s(t,d)===s(r,f===-1?0:d-f)){if(f===-1&&(f=d),d-f+1===c)return f*i}else f!==-1&&(d-=d-f),f=-1}else for(e+c>a&&(e=a-c),d=e;d>=0;d--){for(var u=!0,w=0;w<c;w++)if(s(t,d+w)!==s(r,w)){u=!1;break}if(u)return d}return-1}p.prototype.includes=function(r,e,o){return this.indexOf(r,e,o)!==-1};p.prototype.indexOf=function(r,e,o){return Lr(this,r,e,o,!0)};p.prototype.lastIndexOf=function(r,e,o){return Lr(this,r,e,o,!1)};function ge(t,r,e,o){e=Number(e)||0;var n=t.length-e;o?(o=Number(o),o>n&&(o=n)):o=n;var i=r.length;o>i/2&&(o=i/2);for(var a=0;a<o;++a){var c=parseInt(r.substr(a*2,2),16);if(pr(c))return a;t[e+a]=c}return a}function ye(t,r,e,o){return O(nr(r,t.length-e),t,e,o)}function xe(t,r,e,o){return O(Ue(r),t,e,o)}function be(t,r,e,o){return O(Rr(r),t,e,o)}function _e(t,r,e,o){return O(Se(r,t.length-e),t,e,o)}p.prototype.write=function(r,e,o,n){if(e===void 0)n="utf8",o=this.length,e=0;else if(o===void 0&&typeof e=="string")n=e,o=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(o)?(o=o>>>0,n===void 0&&(n="utf8")):(n=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((o===void 0||o>i)&&(o=i),r.length>0&&(o<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return ge(this,r,e,o);case"utf8":case"utf-8":return ye(this,r,e,o);case"ascii":case"latin1":case"binary":return xe(this,r,e,o);case"base64":return be(this,r,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _e(this,r,e,o);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}};p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function we(t,r,e){return r===0&&e===t.length?er.fromByteArray(t):er.fromByteArray(t.slice(r,e))}function Nr(t,r,e){e=Math.min(t.length,e);for(var o=[],n=r;n<e;){var i=t[n],a=null,c=i>239?4:i>223?3:i>191?2:1;if(n+c<=e){var s,d,f,u;switch(c){case 1:i<128&&(a=i);break;case 2:s=t[n+1],(s&192)===128&&(u=(i&31)<<6|s&63,u>127&&(a=u));break;case 3:s=t[n+1],d=t[n+2],(s&192)===128&&(d&192)===128&&(u=(i&15)<<12|(s&63)<<6|d&63,u>2047&&(u<55296||u>57343)&&(a=u));break;case 4:s=t[n+1],d=t[n+2],f=t[n+3],(s&192)===128&&(d&192)===128&&(f&192)===128&&(u=(i&15)<<18|(s&63)<<12|(d&63)<<6|f&63,u>65535&&u<1114112&&(a=u))}}a===null?(a=65533,c=1):a>65535&&(a-=65536,o.push(a>>>10&1023|55296),a=56320|a&1023),o.push(a),n+=c}return ve(o)}var Fr=4096;function ve(t){var r=t.length;if(r<=Fr)return String.fromCharCode.apply(String,t);for(var e="",o=0;o<r;)e+=String.fromCharCode.apply(String,t.slice(o,o+=Fr));return e}function Te(t,r,e){var o="";e=Math.min(t.length,e);for(var n=r;n<e;++n)o+=String.fromCharCode(t[n]&127);return o}function ke(t,r,e){var o="";e=Math.min(t.length,e);for(var n=r;n<e;++n)o+=String.fromCharCode(t[n]);return o}function Ae(t,r,e){var o=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>o)&&(e=o);for(var n="",i=r;i<e;++i)n+=Le[t[i]];return n}function Ee(t,r,e){for(var o=t.slice(r,e),n="",i=0;i<o.length-1;i+=2)n+=String.fromCharCode(o[i]+o[i+1]*256);return n}p.prototype.slice=function(r,e){var o=this.length;r=~~r,e=e===void 0?o:~~e,r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),e<r&&(e=r);var n=this.subarray(r,e);return Object.setPrototypeOf(n,p.prototype),n};function x(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(r,e,o){r=r>>>0,e=e>>>0,o||x(r,e,this.length);for(var n=this[r],i=1,a=0;++a<e&&(i*=256);)n+=this[r+a]*i;return n};p.prototype.readUintBE=p.prototype.readUIntBE=function(r,e,o){r=r>>>0,e=e>>>0,o||x(r,e,this.length);for(var n=this[r+--e],i=1;e>0&&(i*=256);)n+=this[r+--e]*i;return n};p.prototype.readUint8=p.prototype.readUInt8=function(r,e){return r=r>>>0,e||x(r,1,this.length),this[r]};p.prototype.readUint16LE=p.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||x(r,2,this.length),this[r]|this[r+1]<<8};p.prototype.readUint16BE=p.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||x(r,2,this.length),this[r]<<8|this[r+1]};p.prototype.readUint32LE=p.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||x(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};p.prototype.readUint32BE=p.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||x(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};p.prototype.readIntLE=function(r,e,o){r=r>>>0,e=e>>>0,o||x(r,e,this.length);for(var n=this[r],i=1,a=0;++a<e&&(i*=256);)n+=this[r+a]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n};p.prototype.readIntBE=function(r,e,o){r=r>>>0,e=e>>>0,o||x(r,e,this.length);for(var n=e,i=1,a=this[r+--n];n>0&&(i*=256);)a+=this[r+--n]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a};p.prototype.readInt8=function(r,e){return r=r>>>0,e||x(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};p.prototype.readInt16LE=function(r,e){r=r>>>0,e||x(r,2,this.length);var o=this[r]|this[r+1]<<8;return o&32768?o|4294901760:o};p.prototype.readInt16BE=function(r,e){r=r>>>0,e||x(r,2,this.length);var o=this[r+1]|this[r]<<8;return o&32768?o|4294901760:o};p.prototype.readInt32LE=function(r,e){return r=r>>>0,e||x(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};p.prototype.readInt32BE=function(r,e){return r=r>>>0,e||x(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};p.prototype.readFloatLE=function(r,e){return r=r>>>0,e||x(r,4,this.length),P.read(this,r,!0,23,4)};p.prototype.readFloatBE=function(r,e){return r=r>>>0,e||x(r,4,this.length),P.read(this,r,!1,23,4)};p.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||x(r,8,this.length),P.read(this,r,!0,52,8)};p.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||x(r,8,this.length),P.read(this,r,!1,52,8)};function _(t,r,e,o,n,i){if(!p.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>n||r<i)throw new RangeError('"value" argument is out of bounds');if(e+o>t.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(r,e,o,n){if(r=+r,e=e>>>0,o=o>>>0,!n){var i=Math.pow(2,8*o)-1;_(this,r,e,o,i,0)}var a=1,c=0;for(this[e]=r&255;++c<o&&(a*=256);)this[e+c]=r/a&255;return e+o};p.prototype.writeUintBE=p.prototype.writeUIntBE=function(r,e,o,n){if(r=+r,e=e>>>0,o=o>>>0,!n){var i=Math.pow(2,8*o)-1;_(this,r,e,o,i,0)}var a=o-1,c=1;for(this[e+a]=r&255;--a>=0&&(c*=256);)this[e+a]=r/c&255;return e+o};p.prototype.writeUint8=p.prototype.writeUInt8=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,1,255,0),this[e]=r&255,e+1};p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};p.prototype.writeIntLE=function(r,e,o,n){if(r=+r,e=e>>>0,!n){var i=Math.pow(2,8*o-1);_(this,r,e,o,i-1,-i)}var a=0,c=1,s=0;for(this[e]=r&255;++a<o&&(c*=256);)r<0&&s===0&&this[e+a-1]!==0&&(s=1),this[e+a]=(r/c>>0)-s&255;return e+o};p.prototype.writeIntBE=function(r,e,o,n){if(r=+r,e=e>>>0,!n){var i=Math.pow(2,8*o-1);_(this,r,e,o,i-1,-i)}var a=o-1,c=1,s=0;for(this[e+a]=r&255;--a>=0&&(c*=256);)r<0&&s===0&&this[e+a+1]!==0&&(s=1),this[e+a]=(r/c>>0)-s&255;return e+o};p.prototype.writeInt8=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};p.prototype.writeInt16LE=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeInt16BE=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeInt32LE=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};p.prototype.writeInt32BE=function(r,e,o){return r=+r,e=e>>>0,o||_(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function Cr(t,r,e,o,n,i){if(e+o>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Ir(t,r,e,o,n){return r=+r,e=e>>>0,n||Cr(t,r,e,4,34028234663852886e22,-34028234663852886e22),P.write(t,r,e,o,23,4),e+4}p.prototype.writeFloatLE=function(r,e,o){return Ir(this,r,e,!0,o)};p.prototype.writeFloatBE=function(r,e,o){return Ir(this,r,e,!1,o)};function Mr(t,r,e,o,n){return r=+r,e=e>>>0,n||Cr(t,r,e,8,17976931348623157e292,-17976931348623157e292),P.write(t,r,e,o,52,8),e+8}p.prototype.writeDoubleLE=function(r,e,o){return Mr(this,r,e,!0,o)};p.prototype.writeDoubleBE=function(r,e,o){return Mr(this,r,e,!1,o)};p.prototype.copy=function(r,e,o,n){if(!p.isBuffer(r))throw new TypeError("argument should be a Buffer");if(o||(o=0),!n&&n!==0&&(n=this.length),e>=r.length&&(e=r.length),e||(e=0),n>0&&n<o&&(n=o),n===o||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),r.length-e<n-o&&(n=r.length-e+o);var i=n-o;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,o,n):Uint8Array.prototype.set.call(r,this.subarray(o,n),e),i};p.prototype.fill=function(r,e,o,n){if(typeof r=="string"){if(typeof e=="string"?(n=e,e=0,o=this.length):typeof o=="string"&&(n=o,o=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!p.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(r.length===1){var i=r.charCodeAt(0);(n==="utf8"&&i<128||n==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<o)throw new RangeError("Out of range index");if(o<=e)return this;e=e>>>0,o=o===void 0?this.length:o>>>0,r||(r=0);var a;if(typeof r=="number")for(a=e;a<o;++a)this[a]=r;else{var c=p.isBuffer(r)?r:p.from(r,n),s=c.length;if(s===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(a=0;a<o-e;++a)this[a+e]=c[a%s]}return this};var Fe=/[^+/0-9A-Za-z-_]/g;function Be(t){if(t=t.split("=")[0],t=t.trim().replace(Fe,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function nr(t,r){r=r||1/0;for(var e,o=t.length,n=null,i=[],a=0;a<o;++a){if(e=t.charCodeAt(a),e>55295&&e<57344){if(!n){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(a+1===o){(r-=3)>-1&&i.push(239,191,189);continue}n=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),n=e;continue}e=(n-55296<<10|e-56320)+65536}else n&&(r-=3)>-1&&i.push(239,191,189);if(n=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function Ue(t){for(var r=[],e=0;e<t.length;++e)r.push(t.charCodeAt(e)&255);return r}function Se(t,r){for(var e,o,n,i=[],a=0;a<t.length&&!((r-=2)<0);++a)e=t.charCodeAt(a),o=e>>8,n=e%256,i.push(n),i.push(o);return i}function Rr(t){return er.toByteArray(Be(t))}function O(t,r,e,o){for(var n=0;n<o&&!(n+e>=r.length||n>=t.length);++n)r[n+e]=t[n];return n}function k(t,r){return t instanceof r||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===r.name}function pr(t){return t!==t}var Le=function(){for(var t="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var o=e*16,n=0;n<16;++n)r[o+n]=t[e]+t[n];return r}()});var Gr=X((ot,zr)=>{l();var y=zr.exports={},A,E;function lr(){throw new Error("setTimeout has not been defined")}function cr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?A=setTimeout:A=lr}catch(t){A=lr}try{typeof clearTimeout=="function"?E=clearTimeout:E=cr}catch(t){E=cr}})();function Pr(t){if(A===setTimeout)return setTimeout(t,0);if((A===lr||!A)&&setTimeout)return A=setTimeout,setTimeout(t,0);try{return A(t,0)}catch(r){try{return A.call(null,t,0)}catch(e){return A.call(this,t,0)}}}function Ne(t){if(E===clearTimeout)return clearTimeout(t);if((E===cr||!E)&&clearTimeout)return E=clearTimeout,clearTimeout(t);try{return E(t)}catch(r){try{return E.call(null,t)}catch(e){return E.call(this,t)}}}var U=[],W=!1,D,Y=-1;function Ce(){!W||!D||(W=!1,D.length?U=D.concat(U):Y=-1,U.length&&Vr())}function Vr(){if(!W){var t=Pr(Ce);W=!0;for(var r=U.length;r;){for(D=U,U=[];++Y<r;)D&&D[Y].run();Y=-1,r=U.length}D=null,W=!1,Ne(t)}}y.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];U.push(new Wr(t,r)),U.length===1&&!W&&Pr(Vr)};function Wr(t,r){this.fun=t,this.array=r}Wr.prototype.run=function(){this.fun.apply(null,this.array)};y.title="browser";y.browser=!0;y.env={};y.argv=[];y.version="";y.versions={};function S(){}y.on=S;y.addListener=S;y.once=S;y.off=S;y.removeListener=S;y.removeAllListeners=S;y.emit=S;y.prependListener=S;y.prependOnceListener=S;y.listeners=function(t){return[]};y.binding=function(t){throw new Error("process.binding is not supported")};y.cwd=function(){return"/"};y.chdir=function(t){throw new Error("process.chdir is not supported")};y.umask=function(){return 0}});var m,h,nt,l=yr(()=>{m=I(Dr()),h=I(Gr()),nt=function(t){function r(){var o=this||self;return delete t.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return r();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var Hr={};xr(Hr,{default:()=>Oe});var Z,Ke,Oe,Xr=yr(()=>{"use strict";l();Z=I(require("react")),Ke=t=>Z.createElement("svg",H({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),Z.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Z.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Oe=Ke});var Je={};xr(Je,{Amount:()=>Ze});module.exports=_r(Je);l();var L=I(require("react")),J=require("@terradharitri/sdk-dapp/constants/index"),fr=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Yr=require("@terradharitri/sdk-dapp/UI/UsdValue/index");l();var Ie=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ie));var $r={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};l();l();l();l();var Me=require("bech32");l();l();l();l();l();var Re=require("@terradharitri/sdk-dapp/types/tokens.types");l();l();var Pe=require("@terradharitri/sdk-dapp/constants"),Ve=require("@terradharitri/sdk-dapp/utils/account/getAccount");l();l();var We=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");l();var ze=require("@terradharitri/sdk-dapp/utils/buildUrlParams");l();var Ge=I(require("anchorme"));l();l();var $e=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),He=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Xe=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Q=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");l();l();l();l();l();l();l();var F=I(require("react")),qr=require("@fortawesome/free-solid-svg-icons"),Kr=require("@fortawesome/react-fontawesome"),ur=I(require("classnames"));l();var qe=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qe));var C={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"};var Ye=(Xr(),_r(Hr)).default,Or=t=>{let{avatar:r,type:e}=t;return e==="NonFungibleDCDT"?F.default.createElement("div",{className:(0,ur.default)(C.tokenAvatar,C.tokenAvatarNFT)},"NFT"):e==="SemiFungibleDCDT"?F.default.createElement("div",{className:(0,ur.default)(C.tokenAvatar,C.tokenAvatarSFT)},"SFT"):e==="REWA"?F.default.createElement("div",{className:C.tokenAvatar},t.RewaIcon?F.default.createElement(t.RewaIcon,null):F.default.createElement(Ye,null)):r?F.default.createElement("div",{className:C.tokenAvatar},F.default.createElement("img",{src:r})):F.default.createElement("div",{className:C.tokenAvatar},F.default.createElement(Kr.FontAwesomeIcon,{icon:qr.faDiamond}))};l();var Qe=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qe));var G={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"};var Ze=({label:t="Amount",amount:r,txType:e,tokenDecimals:o,tokenId:n,rewaLabel:i,rewaPriceInUsd:a,nft:c,tokenAvatar:s})=>{let d=(c==null?void 0:c.decimals)||0,f=e==="DCDT",u=e==="MetaDCDT",w=e==="NonFungibleDCDT",b=u?(0,Q.parseAmount)(r,c==null?void 0:c.decimals):r,N=Boolean(c&&r),$=n.split("-")[0],dr=f?o:J.DECIMALS,Qr=N?L.default.createElement(fr.FormatAmount,{rewaLabel:i,value:b,decimals:d,digits:e==="MetaDCDT"?J.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):L.default.createElement(fr.FormatAmount,{rewaLabel:i,value:(0,Q.parseAmount)(r,dr),showLabel:!1,decimals:dr,showLastNonZeroDecimal:!0,token:f?$:i,"data-testid":"confirmAmount"});return w?null:L.default.createElement("div",{className:G.amount},L.default.createElement("span",{className:$r.label},t),L.default.createElement("div",{className:G.token},L.default.createElement(Or,{type:e,avatar:s}),L.default.createElement("div",{className:G.value},Qr," ",$)),!f&&L.default.createElement(Yr.UsdValue,{amount:r,usd:a,"data-testid":"confirmUsdValue",className:G.price}))};0&&(module.exports={Amount});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=Amount.js.map
