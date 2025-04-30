"use strict";var Cr=Object.create;var P=Object.defineProperty;var Lr=Object.getOwnPropertyDescriptor;var Sr=Object.getOwnPropertyNames;var Tr=Object.getPrototypeOf,Ir=Object.prototype.hasOwnProperty;var Mr=(n,r)=>()=>(n&&(r=n(n=0)),r);var Y=(n,r)=>()=>(r||n((r={exports:{}}).exports,r),r.exports),Nr=(n,r)=>{for(var e in r)P(n,e,{get:r[e],enumerable:!0})},tr=(n,r,e,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of Sr(r))!Ir.call(n,t)&&t!==e&&P(n,t,{get:()=>r[t],enumerable:!(o=Lr(r,t))||o.enumerable});return n};var G=(n,r,e)=>(e=n!=null?Cr(Tr(n)):{},tr(r||!n||!n.__esModule?P(e,"default",{value:n,enumerable:!0}):e,n)),Rr=n=>tr(P({},"__esModule",{value:!0}),n);var pr=Y(q=>{"use strict";m();q.byteLength=zr;q.toByteArray=Yr;q.fromByteArray=Hr;var y=[],g=[],Wr=typeof Uint8Array!="undefined"?Uint8Array:Array,J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(S=0,ir=J.length;S<ir;++S)y[S]=J[S],g[J.charCodeAt(S)]=S;var S,ir;g["-".charCodeAt(0)]=62;g["_".charCodeAt(0)]=63;function ar(n){var r=n.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=n.indexOf("=");e===-1&&(e=r);var o=e===r?0:4-e%4;return[e,o]}function zr(n){var r=ar(n),e=r[0],o=r[1];return(e+o)*3/4-o}function Pr(n,r,e){return(r+e)*3/4-e}function Yr(n){var r,e=ar(n),o=e[0],t=e[1],i=new Wr(Pr(n,o,t)),a=0,u=t>0?o-4:o,l;for(l=0;l<u;l+=4)r=g[n.charCodeAt(l)]<<18|g[n.charCodeAt(l+1)]<<12|g[n.charCodeAt(l+2)]<<6|g[n.charCodeAt(l+3)],i[a++]=r>>16&255,i[a++]=r>>8&255,i[a++]=r&255;return t===2&&(r=g[n.charCodeAt(l)]<<2|g[n.charCodeAt(l+1)]>>4,i[a++]=r&255),t===1&&(r=g[n.charCodeAt(l)]<<10|g[n.charCodeAt(l+1)]<<4|g[n.charCodeAt(l+2)]>>2,i[a++]=r>>8&255,i[a++]=r&255),i}function qr(n){return y[n>>18&63]+y[n>>12&63]+y[n>>6&63]+y[n&63]}function Vr(n,r,e){for(var o,t=[],i=r;i<e;i+=3)o=(n[i]<<16&16711680)+(n[i+1]<<8&65280)+(n[i+2]&255),t.push(qr(o));return t.join("")}function Hr(n){for(var r,e=n.length,o=e%3,t=[],i=16383,a=0,u=e-o;a<u;a+=i)t.push(Vr(n,a,a+i>u?u:a+i));return o===1?(r=n[e-1],t.push(y[r>>2]+y[r<<4&63]+"==")):o===2&&(r=(n[e-2]<<8)+n[e-1],t.push(y[r>>10]+y[r>>4&63]+y[r<<2&63]+"=")),t.join("")}});var lr=Y(O=>{m();O.read=function(n,r,e,o,t){var i,a,u=t*8-o-1,l=(1<<u)-1,f=l>>1,s=-7,c=e?t-1:0,w=e?-1:1,_=n[r+c];for(c+=w,i=_&(1<<-s)-1,_>>=-s,s+=u;s>0;i=i*256+n[r+c],c+=w,s-=8);for(a=i&(1<<-s)-1,i>>=-s,s+=o;s>0;a=a*256+n[r+c],c+=w,s-=8);if(i===0)i=1-f;else{if(i===l)return a?NaN:(_?-1:1)*(1/0);a=a+Math.pow(2,o),i=i-f}return(_?-1:1)*a*Math.pow(2,i-o)};O.write=function(n,r,e,o,t,i){var a,u,l,f=i*8-t-1,s=(1<<f)-1,c=s>>1,w=t===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=o?0:i-1,M=o?1:-1,kr=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,a=s):(a=Math.floor(Math.log(r)/Math.LN2),r*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?r+=w/l:r+=w*Math.pow(2,1-c),r*l>=2&&(a++,l/=2),a+c>=s?(u=0,a=s):a+c>=1?(u=(r*l-1)*Math.pow(2,t),a=a+c):(u=r*Math.pow(2,c-1)*Math.pow(2,t),a=0));t>=8;n[e+_]=u&255,_+=M,u/=256,t-=8);for(a=a<<t|u,f+=t;f>0;n[e+_]=a&255,_+=M,a/=256,f-=8);n[e+_-M]|=kr*128}});var yr=Y(R=>{"use strict";m();var Q=pr(),N=lr(),ur=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;R.Buffer=p;R.SlowBuffer=Kr;R.INSPECT_MAX_BYTES=50;var V=2147483647;R.kMaxLength=V;p.TYPED_ARRAY_SUPPORT=Xr();!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Xr(){try{var n=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(n,r),n.foo()===42}catch(e){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.buffer}});Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.byteOffset}});function F(n){if(n>V)throw new RangeError('The value "'+n+'" is invalid for option "size"');var r=new Uint8Array(n);return Object.setPrototypeOf(r,p.prototype),r}function p(n,r,e){if(typeof n=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return D(n)}return sr(n,r,e)}p.poolSize=8192;function sr(n,r,e){if(typeof n=="string")return Jr(n,r);if(ArrayBuffer.isView(n))return Or(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(v(n,ArrayBuffer)||n&&v(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(v(n,SharedArrayBuffer)||n&&v(n.buffer,SharedArrayBuffer)))return Z(n,r,e);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=n.valueOf&&n.valueOf();if(o!=null&&o!==n)return p.from(o,r,e);var t=Qr(n);if(t)return t;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return p.from(n[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}p.from=function(n,r,e){return sr(n,r,e)};Object.setPrototypeOf(p.prototype,Uint8Array.prototype);Object.setPrototypeOf(p,Uint8Array);function hr(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function Gr(n,r,e){return hr(n),n<=0?F(n):r!==void 0?typeof e=="string"?F(n).fill(r,e):F(n).fill(r):F(n)}p.alloc=function(n,r,e){return Gr(n,r,e)};function D(n){return hr(n),F(n<0?0:j(n)|0)}p.allocUnsafe=function(n){return D(n)};p.allocUnsafeSlow=function(n){return D(n)};function Jr(n,r){if((typeof r!="string"||r==="")&&(r="utf8"),!p.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=dr(n,r)|0,o=F(e),t=o.write(n,r);return t!==e&&(o=o.slice(0,t)),o}function K(n){for(var r=n.length<0?0:j(n.length)|0,e=F(r),o=0;o<r;o+=1)e[o]=n[o]&255;return e}function Or(n){if(v(n,Uint8Array)){var r=new Uint8Array(n);return Z(r.buffer,r.byteOffset,r.byteLength)}return K(n)}function Z(n,r,e){if(r<0||n.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var o;return r===void 0&&e===void 0?o=new Uint8Array(n):e===void 0?o=new Uint8Array(n,r):o=new Uint8Array(n,r,e),Object.setPrototypeOf(o,p.prototype),o}function Qr(n){if(p.isBuffer(n)){var r=j(n.length)|0,e=F(r);return e.length===0||n.copy(e,0,0,r),e}if(n.length!==void 0)return typeof n.length!="number"||rr(n.length)?F(0):K(n);if(n.type==="Buffer"&&Array.isArray(n.data))return K(n.data)}function j(n){if(n>=V)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+V.toString(16)+" bytes");return n|0}function Kr(n){return+n!=n&&(n=0),p.alloc(+n)}p.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==p.prototype};p.compare=function(r,e){if(v(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),v(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(r)||!p.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var o=r.length,t=e.length,i=0,a=Math.min(o,t);i<a;++i)if(r[i]!==e[i]){o=r[i],t=e[i];break}return o<t?-1:t<o?1:0};p.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};p.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return p.alloc(0);var o;if(e===void 0)for(e=0,o=0;o<r.length;++o)e+=r[o].length;var t=p.allocUnsafe(e),i=0;for(o=0;o<r.length;++o){var a=r[o];if(v(a,Uint8Array))i+a.length>t.length?p.from(a).copy(t,i):Uint8Array.prototype.set.call(t,a,i);else if(p.isBuffer(a))a.copy(t,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return t};function dr(n,r){if(p.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||v(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);var e=n.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&e===0)return 0;for(var t=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return $(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return wr(n).length;default:if(t)return o?-1:$(n).length;r=(""+r).toLowerCase(),t=!0}}p.byteLength=dr;function Zr(n,r,e){var o=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(n||(n="utf8");;)switch(n){case"hex":return ae(this,r,e);case"utf8":case"utf-8":return br(this,r,e);case"ascii":return te(this,r,e);case"latin1":case"binary":return ie(this,r,e);case"base64":return ne(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pe(this,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),o=!0}}p.prototype._isBuffer=!0;function T(n,r,e){var o=n[r];n[r]=n[e],n[e]=o}p.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)T(this,e,e+1);return this};p.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)T(this,e,e+3),T(this,e+1,e+2);return this};p.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)T(this,e,e+7),T(this,e+1,e+6),T(this,e+2,e+5),T(this,e+3,e+4);return this};p.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?br(this,0,r):Zr.apply(this,arguments)};p.prototype.toLocaleString=p.prototype.toString;p.prototype.equals=function(r){if(!p.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:p.compare(this,r)===0};p.prototype.inspect=function(){var r="",e=R.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};ur&&(p.prototype[ur]=p.prototype.inspect);p.prototype.compare=function(r,e,o,t,i){if(v(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),!p.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),o===void 0&&(o=r?r.length:0),t===void 0&&(t=0),i===void 0&&(i=this.length),e<0||o>r.length||t<0||i>this.length)throw new RangeError("out of range index");if(t>=i&&e>=o)return 0;if(t>=i)return-1;if(e>=o)return 1;if(e>>>=0,o>>>=0,t>>>=0,i>>>=0,this===r)return 0;for(var a=i-t,u=o-e,l=Math.min(a,u),f=this.slice(t,i),s=r.slice(e,o),c=0;c<l;++c)if(f[c]!==s[c]){a=f[c],u=s[c];break}return a<u?-1:u<a?1:0};function mr(n,r,e,o,t){if(n.length===0)return-1;if(typeof e=="string"?(o=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,rr(e)&&(e=t?0:n.length-1),e<0&&(e=n.length+e),e>=n.length){if(t)return-1;e=n.length-1}else if(e<0)if(t)e=0;else return-1;if(typeof r=="string"&&(r=p.from(r,o)),p.isBuffer(r))return r.length===0?-1:cr(n,r,e,o,t);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?t?Uint8Array.prototype.indexOf.call(n,r,e):Uint8Array.prototype.lastIndexOf.call(n,r,e):cr(n,[r],e,o,t);throw new TypeError("val must be string, number or Buffer")}function cr(n,r,e,o,t){var i=1,a=n.length,u=r.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(n.length<2||r.length<2)return-1;i=2,a/=2,u/=2,e/=2}function l(_,M){return i===1?_[M]:_.readUInt16BE(M*i)}var f;if(t){var s=-1;for(f=e;f<a;f++)if(l(n,f)===l(r,s===-1?0:f-s)){if(s===-1&&(s=f),f-s+1===u)return s*i}else s!==-1&&(f-=f-s),s=-1}else for(e+u>a&&(e=a-u),f=e;f>=0;f--){for(var c=!0,w=0;w<u;w++)if(l(n,f+w)!==l(r,w)){c=!1;break}if(c)return f}return-1}p.prototype.includes=function(r,e,o){return this.indexOf(r,e,o)!==-1};p.prototype.indexOf=function(r,e,o){return mr(this,r,e,o,!0)};p.prototype.lastIndexOf=function(r,e,o){return mr(this,r,e,o,!1)};function $r(n,r,e,o){e=Number(e)||0;var t=n.length-e;o?(o=Number(o),o>t&&(o=t)):o=t;var i=r.length;o>i/2&&(o=i/2);for(var a=0;a<o;++a){var u=parseInt(r.substr(a*2,2),16);if(rr(u))return a;n[e+a]=u}return a}function Dr(n,r,e,o){return H($(r,n.length-e),n,e,o)}function jr(n,r,e,o){return H(ce(r),n,e,o)}function re(n,r,e,o){return H(wr(r),n,e,o)}function ee(n,r,e,o){return H(fe(r,n.length-e),n,e,o)}p.prototype.write=function(r,e,o,t){if(e===void 0)t="utf8",o=this.length,e=0;else if(o===void 0&&typeof e=="string")t=e,o=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(o)?(o=o>>>0,t===void 0&&(t="utf8")):(t=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((o===void 0||o>i)&&(o=i),r.length>0&&(o<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");t||(t="utf8");for(var a=!1;;)switch(t){case"hex":return $r(this,r,e,o);case"utf8":case"utf-8":return Dr(this,r,e,o);case"ascii":case"latin1":case"binary":return jr(this,r,e,o);case"base64":return re(this,r,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ee(this,r,e,o);default:if(a)throw new TypeError("Unknown encoding: "+t);t=(""+t).toLowerCase(),a=!0}};p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ne(n,r,e){return r===0&&e===n.length?Q.fromByteArray(n):Q.fromByteArray(n.slice(r,e))}function br(n,r,e){e=Math.min(n.length,e);for(var o=[],t=r;t<e;){var i=n[t],a=null,u=i>239?4:i>223?3:i>191?2:1;if(t+u<=e){var l,f,s,c;switch(u){case 1:i<128&&(a=i);break;case 2:l=n[t+1],(l&192)===128&&(c=(i&31)<<6|l&63,c>127&&(a=c));break;case 3:l=n[t+1],f=n[t+2],(l&192)===128&&(f&192)===128&&(c=(i&15)<<12|(l&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(a=c));break;case 4:l=n[t+1],f=n[t+2],s=n[t+3],(l&192)===128&&(f&192)===128&&(s&192)===128&&(c=(i&15)<<18|(l&63)<<12|(f&63)<<6|s&63,c>65535&&c<1114112&&(a=c))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,o.push(a>>>10&1023|55296),a=56320|a&1023),o.push(a),t+=u}return oe(o)}var fr=4096;function oe(n){var r=n.length;if(r<=fr)return String.fromCharCode.apply(String,n);for(var e="",o=0;o<r;)e+=String.fromCharCode.apply(String,n.slice(o,o+=fr));return e}function te(n,r,e){var o="";e=Math.min(n.length,e);for(var t=r;t<e;++t)o+=String.fromCharCode(n[t]&127);return o}function ie(n,r,e){var o="";e=Math.min(n.length,e);for(var t=r;t<e;++t)o+=String.fromCharCode(n[t]);return o}function ae(n,r,e){var o=n.length;(!r||r<0)&&(r=0),(!e||e<0||e>o)&&(e=o);for(var t="",i=r;i<e;++i)t+=se[n[i]];return t}function pe(n,r,e){for(var o=n.slice(r,e),t="",i=0;i<o.length-1;i+=2)t+=String.fromCharCode(o[i]+o[i+1]*256);return t}p.prototype.slice=function(r,e){var o=this.length;r=~~r,e=e===void 0?o:~~e,r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),e<r&&(e=r);var t=this.subarray(r,e);return Object.setPrototypeOf(t,p.prototype),t};function b(n,r,e){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+r>e)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(r,e,o){r=r>>>0,e=e>>>0,o||b(r,e,this.length);for(var t=this[r],i=1,a=0;++a<e&&(i*=256);)t+=this[r+a]*i;return t};p.prototype.readUintBE=p.prototype.readUIntBE=function(r,e,o){r=r>>>0,e=e>>>0,o||b(r,e,this.length);for(var t=this[r+--e],i=1;e>0&&(i*=256);)t+=this[r+--e]*i;return t};p.prototype.readUint8=p.prototype.readUInt8=function(r,e){return r=r>>>0,e||b(r,1,this.length),this[r]};p.prototype.readUint16LE=p.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||b(r,2,this.length),this[r]|this[r+1]<<8};p.prototype.readUint16BE=p.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||b(r,2,this.length),this[r]<<8|this[r+1]};p.prototype.readUint32LE=p.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||b(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};p.prototype.readUint32BE=p.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||b(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};p.prototype.readIntLE=function(r,e,o){r=r>>>0,e=e>>>0,o||b(r,e,this.length);for(var t=this[r],i=1,a=0;++a<e&&(i*=256);)t+=this[r+a]*i;return i*=128,t>=i&&(t-=Math.pow(2,8*e)),t};p.prototype.readIntBE=function(r,e,o){r=r>>>0,e=e>>>0,o||b(r,e,this.length);for(var t=e,i=1,a=this[r+--t];t>0&&(i*=256);)a+=this[r+--t]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a};p.prototype.readInt8=function(r,e){return r=r>>>0,e||b(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};p.prototype.readInt16LE=function(r,e){r=r>>>0,e||b(r,2,this.length);var o=this[r]|this[r+1]<<8;return o&32768?o|4294901760:o};p.prototype.readInt16BE=function(r,e){r=r>>>0,e||b(r,2,this.length);var o=this[r+1]|this[r]<<8;return o&32768?o|4294901760:o};p.prototype.readInt32LE=function(r,e){return r=r>>>0,e||b(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};p.prototype.readInt32BE=function(r,e){return r=r>>>0,e||b(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};p.prototype.readFloatLE=function(r,e){return r=r>>>0,e||b(r,4,this.length),N.read(this,r,!0,23,4)};p.prototype.readFloatBE=function(r,e){return r=r>>>0,e||b(r,4,this.length),N.read(this,r,!1,23,4)};p.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||b(r,8,this.length),N.read(this,r,!0,52,8)};p.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||b(r,8,this.length),N.read(this,r,!1,52,8)};function x(n,r,e,o,t,i){if(!p.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>t||r<i)throw new RangeError('"value" argument is out of bounds');if(e+o>n.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(r,e,o,t){if(r=+r,e=e>>>0,o=o>>>0,!t){var i=Math.pow(2,8*o)-1;x(this,r,e,o,i,0)}var a=1,u=0;for(this[e]=r&255;++u<o&&(a*=256);)this[e+u]=r/a&255;return e+o};p.prototype.writeUintBE=p.prototype.writeUIntBE=function(r,e,o,t){if(r=+r,e=e>>>0,o=o>>>0,!t){var i=Math.pow(2,8*o)-1;x(this,r,e,o,i,0)}var a=o-1,u=1;for(this[e+a]=r&255;--a>=0&&(u*=256);)this[e+a]=r/u&255;return e+o};p.prototype.writeUint8=p.prototype.writeUInt8=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,1,255,0),this[e]=r&255,e+1};p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};p.prototype.writeIntLE=function(r,e,o,t){if(r=+r,e=e>>>0,!t){var i=Math.pow(2,8*o-1);x(this,r,e,o,i-1,-i)}var a=0,u=1,l=0;for(this[e]=r&255;++a<o&&(u*=256);)r<0&&l===0&&this[e+a-1]!==0&&(l=1),this[e+a]=(r/u>>0)-l&255;return e+o};p.prototype.writeIntBE=function(r,e,o,t){if(r=+r,e=e>>>0,!t){var i=Math.pow(2,8*o-1);x(this,r,e,o,i-1,-i)}var a=o-1,u=1,l=0;for(this[e+a]=r&255;--a>=0&&(u*=256);)r<0&&l===0&&this[e+a+1]!==0&&(l=1),this[e+a]=(r/u>>0)-l&255;return e+o};p.prototype.writeInt8=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};p.prototype.writeInt16LE=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeInt16BE=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeInt32LE=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};p.prototype.writeInt32BE=function(r,e,o){return r=+r,e=e>>>0,o||x(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function xr(n,r,e,o,t,i){if(e+o>n.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function _r(n,r,e,o,t){return r=+r,e=e>>>0,t||xr(n,r,e,4,34028234663852886e22,-34028234663852886e22),N.write(n,r,e,o,23,4),e+4}p.prototype.writeFloatLE=function(r,e,o){return _r(this,r,e,!0,o)};p.prototype.writeFloatBE=function(r,e,o){return _r(this,r,e,!1,o)};function gr(n,r,e,o,t){return r=+r,e=e>>>0,t||xr(n,r,e,8,17976931348623157e292,-17976931348623157e292),N.write(n,r,e,o,52,8),e+8}p.prototype.writeDoubleLE=function(r,e,o){return gr(this,r,e,!0,o)};p.prototype.writeDoubleBE=function(r,e,o){return gr(this,r,e,!1,o)};p.prototype.copy=function(r,e,o,t){if(!p.isBuffer(r))throw new TypeError("argument should be a Buffer");if(o||(o=0),!t&&t!==0&&(t=this.length),e>=r.length&&(e=r.length),e||(e=0),t>0&&t<o&&(t=o),t===o||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("sourceEnd out of bounds");t>this.length&&(t=this.length),r.length-e<t-o&&(t=r.length-e+o);var i=t-o;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,o,t):Uint8Array.prototype.set.call(r,this.subarray(o,t),e),i};p.prototype.fill=function(r,e,o,t){if(typeof r=="string"){if(typeof e=="string"?(t=e,e=0,o=this.length):typeof o=="string"&&(t=o,o=this.length),t!==void 0&&typeof t!="string")throw new TypeError("encoding must be a string");if(typeof t=="string"&&!p.isEncoding(t))throw new TypeError("Unknown encoding: "+t);if(r.length===1){var i=r.charCodeAt(0);(t==="utf8"&&i<128||t==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<o)throw new RangeError("Out of range index");if(o<=e)return this;e=e>>>0,o=o===void 0?this.length:o>>>0,r||(r=0);var a;if(typeof r=="number")for(a=e;a<o;++a)this[a]=r;else{var u=p.isBuffer(r)?r:p.from(r,t),l=u.length;if(l===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(a=0;a<o-e;++a)this[a+e]=u[a%l]}return this};var le=/[^+/0-9A-Za-z-_]/g;function ue(n){if(n=n.split("=")[0],n=n.trim().replace(le,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function $(n,r){r=r||1/0;for(var e,o=n.length,t=null,i=[],a=0;a<o;++a){if(e=n.charCodeAt(a),e>55295&&e<57344){if(!t){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(a+1===o){(r-=3)>-1&&i.push(239,191,189);continue}t=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),t=e;continue}e=(t-55296<<10|e-56320)+65536}else t&&(r-=3)>-1&&i.push(239,191,189);if(t=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function ce(n){for(var r=[],e=0;e<n.length;++e)r.push(n.charCodeAt(e)&255);return r}function fe(n,r){for(var e,o,t,i=[],a=0;a<n.length&&!((r-=2)<0);++a)e=n.charCodeAt(a),o=e>>8,t=e%256,i.push(t),i.push(o);return i}function wr(n){return Q.toByteArray(ue(n))}function H(n,r,e,o){for(var t=0;t<o&&!(t+e>=r.length||t>=n.length);++t)r[t+e]=n[t];return t}function v(n,r){return n instanceof r||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===r.name}function rr(n){return n!==n}var se=function(){for(var n="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var o=e*16,t=0;t<16;++t)r[o+t]=n[e]+n[t];return r}()});var Ur=Y((Be,Ar)=>{m();var h=Ar.exports={},E,B;function er(){throw new Error("setTimeout has not been defined")}function nr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?E=setTimeout:E=er}catch(n){E=er}try{typeof clearTimeout=="function"?B=clearTimeout:B=nr}catch(n){B=nr}})();function vr(n){if(E===setTimeout)return setTimeout(n,0);if((E===er||!E)&&setTimeout)return E=setTimeout,setTimeout(n,0);try{return E(n,0)}catch(r){try{return E.call(null,n,0)}catch(e){return E.call(this,n,0)}}}function he(n){if(B===clearTimeout)return clearTimeout(n);if((B===nr||!B)&&clearTimeout)return B=clearTimeout,clearTimeout(n);try{return B(n)}catch(r){try{return B.call(null,n)}catch(e){return B.call(this,n)}}}var k=[],W=!1,I,X=-1;function de(){!W||!I||(W=!1,I.length?k=I.concat(k):X=-1,k.length&&Er())}function Er(){if(!W){var n=vr(de);W=!0;for(var r=k.length;r;){for(I=k,k=[];++X<r;)I&&I[X].run();X=-1,r=k.length}I=null,W=!1,he(n)}}h.nextTick=function(n){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];k.push(new Br(n,r)),k.length===1&&!W&&vr(Er)};function Br(n,r){this.fun=n,this.array=r}Br.prototype.run=function(){this.fun.apply(null,this.array)};h.title="browser";h.browser=!0;h.env={};h.argv=[];h.version="";h.versions={};function C(){}h.on=C;h.addListener=C;h.once=C;h.off=C;h.removeListener=C;h.removeAllListeners=C;h.emit=C;h.prependListener=C;h.prependOnceListener=C;h.listeners=function(n){return[]};h.binding=function(n){throw new Error("process.binding is not supported")};h.cwd=function(){return"/"};h.chdir=function(n){throw new Error("process.chdir is not supported")};h.umask=function(){return 0}});var A,U,Ae,m=Mr(()=>{A=G(yr()),U=G(Ur()),Ae=function(n){function r(){var o=this||self;return delete n.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return r();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var ge={};Nr(ge,{Data:()=>_e});module.exports=Rr(ge);m();m();var d=G(require("react")),Fr=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");m();var me=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(me));var or={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};m();m();var be=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(be));var z={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"};var xe=(n,r)=>[...n.matchAll(new RegExp(r,"gi"))].map(e=>e.index),_e=({label:n="Data",scCallLabel:r="SC Call",data:e,highlight:o,isScCall:t})=>{let i=d.default.createElement(d.default.Fragment,null,e),[a,...u]=o&&t?o.split("@"):[];if(e&&o&&xe(e,o).length===1)switch(!0){case e.startsWith(o):{let[,l]=e.split(o);i=d.default.createElement(d.default.Fragment,null,o,d.default.createElement("span",null,l));break}case e.endsWith(o):{let[l]=e.split(o);i=d.default.createElement(d.default.Fragment,null,d.default.createElement("span",null,l),o);break}default:{let[l,f]=e.split(o);i=d.default.createElement(d.default.Fragment,null,d.default.createElement("span",null,l),o,d.default.createElement("span",null,f));break}}return d.default.createElement(d.default.Fragment,null,a&&d.default.createElement("div",{className:z.data},d.default.createElement("span",{className:or.label},r),d.default.createElement("div",{"data-testid":"confirmScCall",className:z.value},[(0,Fr.decodePart)(a),...u].join("@"))),d.default.createElement("div",{className:z.data},d.default.createElement("span",{className:or.label},n),d.default.createElement("div",{"data-testid":"confirmData",className:z.value},e?i:"N/A")))};0&&(module.exports={Data});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
