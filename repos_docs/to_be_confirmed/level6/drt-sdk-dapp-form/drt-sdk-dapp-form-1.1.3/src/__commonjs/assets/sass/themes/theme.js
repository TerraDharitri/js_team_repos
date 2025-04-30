"use strict";var Ar=Object.create;var D=Object.defineProperty;var Ur=Object.getOwnPropertyDescriptor;var Tr=Object.getOwnPropertyNames;var Ir=Object.getPrototypeOf,kr=Object.prototype.hasOwnProperty;var Cr=(t,r)=>()=>(t&&(r=t(t=0)),r);var N=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),Sr=(t,r)=>{for(var e in r)D(t,e,{get:r[e],enumerable:!0})},rr=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Tr(r))!kr.call(t,o)&&o!==e&&D(t,o,{get:()=>r[o],enumerable:!(n=Ur(r,o))||n.enumerable});return t};var er=(t,r,e)=>(e=t!=null?Ar(Ir(t)):{},rr(r||!t||!t.__esModule?D(e,"default",{value:t,enumerable:!0}):e,t)),Lr=t=>rr(D({},"__esModule",{value:!0}),t);var or=N(W=>{"use strict";w();W.byteLength=Mr;W.toByteArray=Nr;W.fromByteArray=qr;var g=[],y=[],Rr=typeof Uint8Array!="undefined"?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(U=0,tr=X.length;U<tr;++U)g[U]=X[U],y[X.charCodeAt(U)]=U;var U,tr;y["-".charCodeAt(0)]=62;y["_".charCodeAt(0)]=63;function nr(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");e===-1&&(e=r);var n=e===r?0:4-e%4;return[e,n]}function Mr(t){var r=nr(t),e=r[0],n=r[1];return(e+n)*3/4-n}function Dr(t,r,e){return(r+e)*3/4-e}function Nr(t){var r,e=nr(t),n=e[0],o=e[1],i=new Rr(Dr(t,n,o)),p=0,c=o>0?n-4:n,u;for(u=0;u<c;u+=4)r=y[t.charCodeAt(u)]<<18|y[t.charCodeAt(u+1)]<<12|y[t.charCodeAt(u+2)]<<6|y[t.charCodeAt(u+3)],i[p++]=r>>16&255,i[p++]=r>>8&255,i[p++]=r&255;return o===2&&(r=y[t.charCodeAt(u)]<<2|y[t.charCodeAt(u+1)]>>4,i[p++]=r&255),o===1&&(r=y[t.charCodeAt(u)]<<10|y[t.charCodeAt(u+1)]<<4|y[t.charCodeAt(u+2)]>>2,i[p++]=r>>8&255,i[p++]=r&255),i}function Wr(t){return g[t>>18&63]+g[t>>12&63]+g[t>>6&63]+g[t&63]}function Yr(t,r,e){for(var n,o=[],i=r;i<e;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),o.push(Wr(n));return o.join("")}function qr(t){for(var r,e=t.length,n=e%3,o=[],i=16383,p=0,c=e-n;p<c;p+=i)o.push(Yr(t,p,p+i>c?c:p+i));return n===1?(r=t[e-1],o.push(g[r>>2]+g[r<<4&63]+"==")):n===2&&(r=(t[e-2]<<8)+t[e-1],o.push(g[r>>10]+g[r>>4&63]+g[r<<2&63]+"=")),o.join("")}});var ir=N(G=>{w();G.read=function(t,r,e,n,o){var i,p,c=o*8-n-1,u=(1<<c)-1,f=u>>1,l=-7,h=e?o-1:0,x=e?-1:1,d=t[r+h];for(h+=x,i=d&(1<<-l)-1,d>>=-l,l+=c;l>0;i=i*256+t[r+h],h+=x,l-=8);for(p=i&(1<<-l)-1,i>>=-l,l+=n;l>0;p=p*256+t[r+h],h+=x,l-=8);if(i===0)i=1-f;else{if(i===u)return p?NaN:(d?-1:1)*(1/0);p=p+Math.pow(2,n),i=i-f}return(d?-1:1)*p*Math.pow(2,i-n)};G.write=function(t,r,e,n,o,i){var p,c,u,f=i*8-o-1,l=(1<<f)-1,h=l>>1,x=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:i-1,k=n?1:-1,Br=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(c=isNaN(r)?1:0,p=l):(p=Math.floor(Math.log(r)/Math.LN2),r*(u=Math.pow(2,-p))<1&&(p--,u*=2),p+h>=1?r+=x/u:r+=x*Math.pow(2,1-h),r*u>=2&&(p++,u/=2),p+h>=l?(c=0,p=l):p+h>=1?(c=(r*u-1)*Math.pow(2,o),p=p+h):(c=r*Math.pow(2,h-1)*Math.pow(2,o),p=0));o>=8;t[e+d]=c&255,d+=k,c/=256,o-=8);for(p=p<<o|c,f+=o;f>0;t[e+d]=p&255,d+=k,p/=256,f-=8);t[e+d-k]|=Br*128}});var xr=N(S=>{"use strict";w();var J=or(),C=ir(),pr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;S.Buffer=a;S.SlowBuffer=Or;S.INSPECT_MAX_BYTES=50;var q=2147483647;S.kMaxLength=q;a.TYPED_ARRAY_SUPPORT=zr();!a.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function zr(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),t.foo()===42}catch(e){return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(!!a.isBuffer(this))return this.buffer}});Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(!!a.isBuffer(this))return this.byteOffset}});function F(t){if(t>q)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,a.prototype),r}function a(t,r,e){if(typeof t=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return K(t)}return ur(t,r,e)}a.poolSize=8192;function ur(t,r,e){if(typeof t=="string")return Xr(t,r);if(ArrayBuffer.isView(t))return Gr(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(b(t,ArrayBuffer)||t&&b(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(b(t,SharedArrayBuffer)||t&&b(t.buffer,SharedArrayBuffer)))return Q(t,r,e);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return a.from(n,r,e);var o=Jr(t);if(o)return o;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return a.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}a.from=function(t,r,e){return ur(t,r,e)};Object.setPrototypeOf(a.prototype,Uint8Array.prototype);Object.setPrototypeOf(a,Uint8Array);function hr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Hr(t,r,e){return hr(t),t<=0?F(t):r!==void 0?typeof e=="string"?F(t).fill(r,e):F(t).fill(r):F(t)}a.alloc=function(t,r,e){return Hr(t,r,e)};function K(t){return hr(t),F(t<0?0:Z(t)|0)}a.allocUnsafe=function(t){return K(t)};a.allocUnsafeSlow=function(t){return K(t)};function Xr(t,r){if((typeof r!="string"||r==="")&&(r="utf8"),!a.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=fr(t,r)|0,n=F(e),o=n.write(t,r);return o!==e&&(n=n.slice(0,o)),n}function O(t){for(var r=t.length<0?0:Z(t.length)|0,e=F(r),n=0;n<r;n+=1)e[n]=t[n]&255;return e}function Gr(t){if(b(t,Uint8Array)){var r=new Uint8Array(t);return Q(r.buffer,r.byteOffset,r.byteLength)}return O(t)}function Q(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;return r===void 0&&e===void 0?n=new Uint8Array(t):e===void 0?n=new Uint8Array(t,r):n=new Uint8Array(t,r,e),Object.setPrototypeOf(n,a.prototype),n}function Jr(t){if(a.isBuffer(t)){var r=Z(t.length)|0,e=F(r);return e.length===0||t.copy(e,0,0,r),e}if(t.length!==void 0)return typeof t.length!="number"||$(t.length)?F(0):O(t);if(t.type==="Buffer"&&Array.isArray(t.data))return O(t.data)}function Z(t){if(t>=q)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+q.toString(16)+" bytes");return t|0}function Or(t){return+t!=t&&(t=0),a.alloc(+t)}a.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==a.prototype};a.compare=function(r,e){if(b(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),b(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(r)||!a.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var n=r.length,o=e.length,i=0,p=Math.min(n,o);i<p;++i)if(r[i]!==e[i]){n=r[i],o=e[i];break}return n<o?-1:o<n?1:0};a.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};a.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return a.alloc(0);var n;if(e===void 0)for(e=0,n=0;n<r.length;++n)e+=r[n].length;var o=a.allocUnsafe(e),i=0;for(n=0;n<r.length;++n){var p=r[n];if(b(p,Uint8Array))i+p.length>o.length?a.from(p).copy(o,i):Uint8Array.prototype.set.call(o,p,i);else if(a.isBuffer(p))p.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return o};function fr(t,r){if(a.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||b(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return V(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return yr(t).length;default:if(o)return n?-1:V(t).length;r=(""+r).toLowerCase(),o=!0}}a.byteLength=fr;function Qr(t,r,e){var n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(t||(t="utf8");;)switch(t){case"hex":return ne(this,r,e);case"utf8":case"utf-8":return sr(this,r,e);case"ascii":return ee(this,r,e);case"latin1":case"binary":return te(this,r,e);case"base64":return Pr(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return oe(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}a.prototype._isBuffer=!0;function T(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}a.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)T(this,e,e+1);return this};a.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)T(this,e,e+3),T(this,e+1,e+2);return this};a.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)T(this,e,e+7),T(this,e+1,e+6),T(this,e+2,e+5),T(this,e+3,e+4);return this};a.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?sr(this,0,r):Qr.apply(this,arguments)};a.prototype.toLocaleString=a.prototype.toString;a.prototype.equals=function(r){if(!a.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:a.compare(this,r)===0};a.prototype.inspect=function(){var r="",e=S.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};pr&&(a.prototype[pr]=a.prototype.inspect);a.prototype.compare=function(r,e,n,o,i){if(b(r,Uint8Array)&&(r=a.from(r,r.offset,r.byteLength)),!a.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),n===void 0&&(n=r?r.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),e<0||n>r.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&e>=n)return 0;if(o>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,o>>>=0,i>>>=0,this===r)return 0;for(var p=i-o,c=n-e,u=Math.min(p,c),f=this.slice(o,i),l=r.slice(e,n),h=0;h<u;++h)if(f[h]!==l[h]){p=f[h],c=l[h];break}return p<c?-1:c<p?1:0};function lr(t,r,e,n,o){if(t.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,$(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0)if(o)e=0;else return-1;if(typeof r=="string"&&(r=a.from(r,n)),a.isBuffer(r))return r.length===0?-1:ar(t,r,e,n,o);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):ar(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function ar(t,r,e,n,o){var i=1,p=t.length,c=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||r.length<2)return-1;i=2,p/=2,c/=2,e/=2}function u(d,k){return i===1?d[k]:d.readUInt16BE(k*i)}var f;if(o){var l=-1;for(f=e;f<p;f++)if(u(t,f)===u(r,l===-1?0:f-l)){if(l===-1&&(l=f),f-l+1===c)return l*i}else l!==-1&&(f-=f-l),l=-1}else for(e+c>p&&(e=p-c),f=e;f>=0;f--){for(var h=!0,x=0;x<c;x++)if(u(t,f+x)!==u(r,x)){h=!1;break}if(h)return f}return-1}a.prototype.includes=function(r,e,n){return this.indexOf(r,e,n)!==-1};a.prototype.indexOf=function(r,e,n){return lr(this,r,e,n,!0)};a.prototype.lastIndexOf=function(r,e,n){return lr(this,r,e,n,!1)};function Vr(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n),n>o&&(n=o)):n=o;var i=r.length;n>i/2&&(n=i/2);for(var p=0;p<n;++p){var c=parseInt(r.substr(p*2,2),16);if($(c))return p;t[e+p]=c}return p}function Kr(t,r,e,n){return z(V(r,t.length-e),t,e,n)}function Zr(t,r,e,n){return z(ae(r),t,e,n)}function $r(t,r,e,n){return z(yr(r),t,e,n)}function jr(t,r,e,n){return z(ce(r,t.length-e),t,e,n)}a.prototype.write=function(r,e,n,o){if(e===void 0)o="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")o=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((n===void 0||n>i)&&(n=i),r.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return Vr(this,r,e,n);case"utf8":case"utf-8":return Kr(this,r,e,n);case"ascii":case"latin1":case"binary":return Zr(this,r,e,n);case"base64":return $r(this,r,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return jr(this,r,e,n);default:if(p)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}};a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Pr(t,r,e){return r===0&&e===t.length?J.fromByteArray(t):J.fromByteArray(t.slice(r,e))}function sr(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i=t[o],p=null,c=i>239?4:i>223?3:i>191?2:1;if(o+c<=e){var u,f,l,h;switch(c){case 1:i<128&&(p=i);break;case 2:u=t[o+1],(u&192)===128&&(h=(i&31)<<6|u&63,h>127&&(p=h));break;case 3:u=t[o+1],f=t[o+2],(u&192)===128&&(f&192)===128&&(h=(i&15)<<12|(u&63)<<6|f&63,h>2047&&(h<55296||h>57343)&&(p=h));break;case 4:u=t[o+1],f=t[o+2],l=t[o+3],(u&192)===128&&(f&192)===128&&(l&192)===128&&(h=(i&15)<<18|(u&63)<<12|(f&63)<<6|l&63,h>65535&&h<1114112&&(p=h))}}p===null?(p=65533,c=1):p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p),o+=c}return re(n)}var cr=4096;function re(t){var r=t.length;if(r<=cr)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=cr));return e}function ee(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]&127);return n}function te(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function ne(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=ue[t[i]];return o}function oe(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+n[i+1]*256);return o}a.prototype.slice=function(r,e){var n=this.length;r=~~r,e=e===void 0?n:~~e,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<r&&(e=r);var o=this.subarray(r,e);return Object.setPrototypeOf(o,a.prototype),o};function m(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=this[r],i=1,p=0;++p<e&&(i*=256);)o+=this[r+p]*i;return o};a.prototype.readUintBE=a.prototype.readUIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=this[r+--e],i=1;e>0&&(i*=256);)o+=this[r+--e]*i;return o};a.prototype.readUint8=a.prototype.readUInt8=function(r,e){return r=r>>>0,e||m(r,1,this.length),this[r]};a.prototype.readUint16LE=a.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||m(r,2,this.length),this[r]|this[r+1]<<8};a.prototype.readUint16BE=a.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||m(r,2,this.length),this[r]<<8|this[r+1]};a.prototype.readUint32LE=a.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||m(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};a.prototype.readUint32BE=a.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||m(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};a.prototype.readIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=this[r],i=1,p=0;++p<e&&(i*=256);)o+=this[r+p]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o};a.prototype.readIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=e,i=1,p=this[r+--o];o>0&&(i*=256);)p+=this[r+--o]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*e)),p};a.prototype.readInt8=function(r,e){return r=r>>>0,e||m(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};a.prototype.readInt16LE=function(r,e){r=r>>>0,e||m(r,2,this.length);var n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n};a.prototype.readInt16BE=function(r,e){r=r>>>0,e||m(r,2,this.length);var n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n};a.prototype.readInt32LE=function(r,e){return r=r>>>0,e||m(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};a.prototype.readInt32BE=function(r,e){return r=r>>>0,e||m(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};a.prototype.readFloatLE=function(r,e){return r=r>>>0,e||m(r,4,this.length),C.read(this,r,!0,23,4)};a.prototype.readFloatBE=function(r,e){return r=r>>>0,e||m(r,4,this.length),C.read(this,r,!1,23,4)};a.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||m(r,8,this.length),C.read(this,r,!0,52,8)};a.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||m(r,8,this.length),C.read(this,r,!1,52,8)};function _(t,r,e,n,o,i){if(!a.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(r,e,n,o){if(r=+r,e=e>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;_(this,r,e,n,i,0)}var p=1,c=0;for(this[e]=r&255;++c<n&&(p*=256);)this[e+c]=r/p&255;return e+n};a.prototype.writeUintBE=a.prototype.writeUIntBE=function(r,e,n,o){if(r=+r,e=e>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;_(this,r,e,n,i,0)}var p=n-1,c=1;for(this[e+p]=r&255;--p>=0&&(c*=256);)this[e+p]=r/c&255;return e+n};a.prototype.writeUint8=a.prototype.writeUInt8=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,1,255,0),this[e]=r&255,e+1};a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};a.prototype.writeIntLE=function(r,e,n,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*n-1);_(this,r,e,n,i-1,-i)}var p=0,c=1,u=0;for(this[e]=r&255;++p<n&&(c*=256);)r<0&&u===0&&this[e+p-1]!==0&&(u=1),this[e+p]=(r/c>>0)-u&255;return e+n};a.prototype.writeIntBE=function(r,e,n,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*n-1);_(this,r,e,n,i-1,-i)}var p=n-1,c=1,u=0;for(this[e+p]=r&255;--p>=0&&(c*=256);)r<0&&u===0&&this[e+p+1]!==0&&(u=1),this[e+p]=(r/c>>0)-u&255;return e+n};a.prototype.writeInt8=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};a.prototype.writeInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};a.prototype.writeInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};a.prototype.writeInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};a.prototype.writeInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||_(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function mr(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function _r(t,r,e,n,o){return r=+r,e=e>>>0,o||mr(t,r,e,4,34028234663852886e22,-34028234663852886e22),C.write(t,r,e,n,23,4),e+4}a.prototype.writeFloatLE=function(r,e,n){return _r(this,r,e,!0,n)};a.prototype.writeFloatBE=function(r,e,n){return _r(this,r,e,!1,n)};function dr(t,r,e,n,o){return r=+r,e=e>>>0,o||mr(t,r,e,8,17976931348623157e292,-17976931348623157e292),C.write(t,r,e,n,52,8),e+8}a.prototype.writeDoubleLE=function(r,e,n){return dr(this,r,e,!0,n)};a.prototype.writeDoubleBE=function(r,e,n){return dr(this,r,e,!1,n)};a.prototype.copy=function(r,e,n,o){if(!a.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),e>=r.length&&(e=r.length),e||(e=0),o>0&&o<n&&(o=n),o===n||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),r.length-e<o-n&&(o=r.length-e+n);var i=o-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,o):Uint8Array.prototype.set.call(r,this.subarray(n,o),e),i};a.prototype.fill=function(r,e,n,o){if(typeof r=="string"){if(typeof e=="string"?(o=e,e=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!a.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(r.length===1){var i=r.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);var p;if(typeof r=="number")for(p=e;p<n;++p)this[p]=r;else{var c=a.isBuffer(r)?r:a.from(r,o),u=c.length;if(u===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(p=0;p<n-e;++p)this[p+e]=c[p%u]}return this};var ie=/[^+/0-9A-Za-z-_]/g;function pe(t){if(t=t.split("=")[0],t=t.trim().replace(ie,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function V(t,r){r=r||1/0;for(var e,n=t.length,o=null,i=[],p=0;p<n;++p){if(e=t.charCodeAt(p),e>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(p+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=(o-55296<<10|e-56320)+65536}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function ae(t){for(var r=[],e=0;e<t.length;++e)r.push(t.charCodeAt(e)&255);return r}function ce(t,r){for(var e,n,o,i=[],p=0;p<t.length&&!((r-=2)<0);++p)e=t.charCodeAt(p),n=e>>8,o=e%256,i.push(o),i.push(n);return i}function yr(t){return J.toByteArray(pe(t))}function z(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function b(t,r){return t instanceof r||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===r.name}function $(t){return t!==t}var ue=function(){for(var t="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var n=e*16,o=0;o<16;++o)r[n+o]=t[e]+t[o];return r}()});var vr=N((xe,Er)=>{w();var s=Er.exports={},E,v;function j(){throw new Error("setTimeout has not been defined")}function P(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?E=setTimeout:E=j}catch(t){E=j}try{typeof clearTimeout=="function"?v=clearTimeout:v=P}catch(t){v=P}})();function wr(t){if(E===setTimeout)return setTimeout(t,0);if((E===j||!E)&&setTimeout)return E=setTimeout,setTimeout(t,0);try{return E(t,0)}catch(r){try{return E.call(null,t,0)}catch(e){return E.call(this,t,0)}}}function he(t){if(v===clearTimeout)return clearTimeout(t);if((v===P||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(t);try{return v(t)}catch(r){try{return v.call(null,t)}catch(e){return v.call(this,t)}}}var B=[],L=!1,I,H=-1;function fe(){!L||!I||(L=!1,I.length?B=I.concat(B):H=-1,B.length&&gr())}function gr(){if(!L){var t=wr(fe);L=!0;for(var r=B.length;r;){for(I=B,B=[];++H<r;)I&&I[H].run();H=-1,r=B.length}I=null,L=!1,he(t)}}s.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];B.push(new br(t,r)),B.length===1&&!L&&wr(gr)};function br(t,r){this.fun=t,this.array=r}br.prototype.run=function(){this.fun.apply(null,this.array)};s.title="browser";s.browser=!0;s.env={};s.argv=[];s.version="";s.versions={};function A(){}s.on=A;s.addListener=A;s.once=A;s.off=A;s.removeListener=A;s.removeAllListeners=A;s.emit=A;s.prependListener=A;s.prependOnceListener=A;s.listeners=function(t){return[]};s.binding=function(t){throw new Error("process.binding is not supported")};s.cwd=function(){return"/"};s.chdir=function(t){throw new Error("process.chdir is not supported")};s.umask=function(){return 0}});var R,M,we,w=Cr(()=>{R=er(xr()),M=er(vr()),we=function(t){function r(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return r();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var se={};Sr(se,{css:()=>Fr,default:()=>le});module.exports=Lr(se);w();var Fr=`:root {
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

/* Bootstrap overrides
-------------------------------------------------- */
/* Do not move the imports from here.
Override Bootstrap variables only above.
-------------------------------------------------- */
/* Base
  -------------------------------------------------- */
html {
  min-height: 100%;
  font-size: 14px;
}

a,
.dapp-core-component__theme__link-style {
  color: var(--primary-light);
}

.dapp-core-component__theme__link-second-style {
  color: var(--secondary);
}
.dapp-core-component__theme__link-second-style:hover {
  color: var(--primary-light);
}
.dapp-core-component__theme__link-second-style:hover svg {
  color: var(--primary-light);
}

.dapp-core-component__theme__wrapper {
  min-height: 100vh;
}

.dapp-core-component__theme__opacity-6 {
  opacity: 0.6;
}

.dapp-core-component__theme__dapp-icon {
  padding: 5px;
  border-radius: 50%;
  background-color: var(--light);
  width: toRem(65);
  height: toRem(65);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.dapp-core-component__theme__dapp-icon.dapp-core-component__theme__icon-medium {
  width: 80px;
  height: 80px;
}

.dapp-core-component__theme__centering {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dapp-core-component__theme__border-n {
  border: none;
}

.dapp-core-component__theme__text {
  color: #9dabbd;
}

.dapp-core-component__theme__t-shadow {
  text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
}

.dapp-core-component__theme__btn {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}

.dapp-core-component__theme__media {
  display: flex;
  align-items: flex-start;
}

.dapp-core-component__theme__media-body {
  flex: 1;
}

.dapp-core-component__theme__connect-btns .dapp-core-component__theme__btn {
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: var(--primary-light);
  padding: 15px 20px 15px 16px;
  border-radius: 6px;
  gap: 8px;
}
.dapp-core-component__theme__connect-btns .dapp-core-component__theme__btn:hover, .dapp-core-component__theme__connect-btns .dapp-core-component__theme__btn:active {
  background-color: var(--primary-light);
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
}
.dapp-core-component__theme__connect-btns .dapp-core-component__theme__info {
  color: var(--primary-light);
  margin-left: 48px;
}

.dapp-core-component__theme__btn {
  transition: none;
}

.dapp-core-component__theme__trust-badge {
  width: 20px;
  height: 20px;
}

/* Navbar
  -------------------------------------------------- */
.dapp-core-component__theme__navbar .dapp-core-component__theme__dapp-name {
  display: flex;
  align-items: center;
  font-size: toRem(24);
  font-weight: 400;
  color: #9ba5b4;
  margin-left: 1.6428571429rem;
}
.dapp-core-component__theme__navbar .dapp-core-component__theme__dapp-name:before {
  content: "";
  display: block;
  width: 1px;
  height: toRem(42);
  margin-right: toRem(24);
}

/* Dashboard
  -------------------------------------------------- */
.dapp-core-component__theme__action-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  margin: 0 7px;
}
.dapp-core-component__theme__action-btn button {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: var(--white);
}
.dapp-core-component__theme__action-btn button:hover {
  opacity: 0.9;
}

.dapp-core-component__theme__transactions .dapp-core-component__theme__transaction-icon {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.dapp-core-component__theme__transactions.dapp-core-component__theme__table td {
  white-space: nowrap;
  vertical-align: middle;
}
.dapp-core-component__theme__transactions.dapp-core-component__theme__table tr:last-of-type td {
  border-bottom: 1px solid var(--border-color);
}

/* Loader, Transaction Success/Fail
  -------------------------------------------------- */
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__bg-blue .dapp-core-component__theme__lds-ellipsis div {
  background: rgba(255, 255, 255, 0.4);
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: dapp-core-component__theme__lds-ellipsis1 0.6s infinite;
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: dapp-core-component__theme__lds-ellipsis2 0.6s infinite;
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: dapp-core-component__theme__lds-ellipsis2 0.6s infinite;
}
.dapp-core-component__theme__page-state .dapp-core-component__theme__lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: dapp-core-component__theme__lds-ellipsis3 0.6s infinite;
}
@keyframes dapp-core-component__theme__lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes dapp-core-component__theme__lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes dapp-core-component__theme__lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fr));var le={"link-style":"dapp-core-component__theme__link-style",linkStyle:"dapp-core-component__theme__link-style","link-second-style":"dapp-core-component__theme__link-second-style",linkSecondStyle:"dapp-core-component__theme__link-second-style",wrapper:"dapp-core-component__theme__wrapper","opacity-6":"dapp-core-component__theme__opacity-6",opacity6:"dapp-core-component__theme__opacity-6","dapp-icon":"dapp-core-component__theme__dapp-icon",dappIcon:"dapp-core-component__theme__dapp-icon","icon-medium":"dapp-core-component__theme__icon-medium",iconMedium:"dapp-core-component__theme__icon-medium",centering:"dapp-core-component__theme__centering","border-n":"dapp-core-component__theme__border-n",borderN:"dapp-core-component__theme__border-n",text:"dapp-core-component__theme__text","t-shadow":"dapp-core-component__theme__t-shadow",tShadow:"dapp-core-component__theme__t-shadow",btn:"dapp-core-component__theme__btn",media:"dapp-core-component__theme__media","media-body":"dapp-core-component__theme__media-body",mediaBody:"dapp-core-component__theme__media-body","connect-btns":"dapp-core-component__theme__connect-btns",connectBtns:"dapp-core-component__theme__connect-btns",info:"dapp-core-component__theme__info","trust-badge":"dapp-core-component__theme__trust-badge",trustBadge:"dapp-core-component__theme__trust-badge",navbar:"dapp-core-component__theme__navbar","dapp-name":"dapp-core-component__theme__dapp-name",dappName:"dapp-core-component__theme__dapp-name","action-btn":"dapp-core-component__theme__action-btn",actionBtn:"dapp-core-component__theme__action-btn",transactions:"dapp-core-component__theme__transactions","transaction-icon":"dapp-core-component__theme__transaction-icon",transactionIcon:"dapp-core-component__theme__transaction-icon",table:"dapp-core-component__theme__table","page-state":"dapp-core-component__theme__page-state",pageState:"dapp-core-component__theme__page-state","lds-ellipsis":"dapp-core-component__theme__lds-ellipsis",ldsEllipsis:"dapp-core-component__theme__lds-ellipsis","bg-blue":"dapp-core-component__theme__bg-blue",bgBlue:"dapp-core-component__theme__bg-blue","lds-ellipsis1":"dapp-core-component__theme__lds-ellipsis1",ldsEllipsis1:"dapp-core-component__theme__lds-ellipsis1","lds-ellipsis2":"dapp-core-component__theme__lds-ellipsis2",ldsEllipsis2:"dapp-core-component__theme__lds-ellipsis2","lds-ellipsis3":"dapp-core-component__theme__lds-ellipsis3",ldsEllipsis3:"dapp-core-component__theme__lds-ellipsis3"};0&&(module.exports={css});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=theme.js.map
