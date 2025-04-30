"use strict";var Ar=Object.create;var D=Object.defineProperty;var Ur=Object.getOwnPropertyDescriptor;var Tr=Object.getOwnPropertyNames;var Ir=Object.getPrototypeOf,kr=Object.prototype.hasOwnProperty;var Cr=(t,r)=>()=>(t&&(r=t(t=0)),r);var N=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),Lr=(t,r)=>{for(var e in r)D(t,e,{get:r[e],enumerable:!0})},rr=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Tr(r))!kr.call(t,o)&&o!==e&&D(t,o,{get:()=>r[o],enumerable:!(n=Ur(r,o))||n.enumerable});return t};var er=(t,r,e)=>(e=t!=null?Ar(Ir(t)):{},rr(r||!t||!t.__esModule?D(e,"default",{value:t,enumerable:!0}):e,t)),Sr=t=>rr(D({},"__esModule",{value:!0}),t);var or=N(z=>{"use strict";w();z.byteLength=Mr;z.toByteArray=Nr;z.fromByteArray=Yr;var y=[],x=[],Rr=typeof Uint8Array!="undefined"?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(U=0,tr=X.length;U<tr;++U)y[U]=X[U],x[X.charCodeAt(U)]=U;var U,tr;x["-".charCodeAt(0)]=62;x["_".charCodeAt(0)]=63;function nr(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");e===-1&&(e=r);var n=e===r?0:4-e%4;return[e,n]}function Mr(t){var r=nr(t),e=r[0],n=r[1];return(e+n)*3/4-n}function Dr(t,r,e){return(r+e)*3/4-e}function Nr(t){var r,e=nr(t),n=e[0],o=e[1],i=new Rr(Dr(t,n,o)),a=0,u=o>0?n-4:n,l;for(l=0;l<u;l+=4)r=x[t.charCodeAt(l)]<<18|x[t.charCodeAt(l+1)]<<12|x[t.charCodeAt(l+2)]<<6|x[t.charCodeAt(l+3)],i[a++]=r>>16&255,i[a++]=r>>8&255,i[a++]=r&255;return o===2&&(r=x[t.charCodeAt(l)]<<2|x[t.charCodeAt(l+1)]>>4,i[a++]=r&255),o===1&&(r=x[t.charCodeAt(l)]<<10|x[t.charCodeAt(l+1)]<<4|x[t.charCodeAt(l+2)]>>2,i[a++]=r>>8&255,i[a++]=r&255),i}function zr(t){return y[t>>18&63]+y[t>>12&63]+y[t>>6&63]+y[t&63]}function Wr(t,r,e){for(var n,o=[],i=r;i<e;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),o.push(zr(n));return o.join("")}function Yr(t){for(var r,e=t.length,n=e%3,o=[],i=16383,a=0,u=e-n;a<u;a+=i)o.push(Wr(t,a,a+i>u?u:a+i));return n===1?(r=t[e-1],o.push(y[r>>2]+y[r<<4&63]+"==")):n===2&&(r=(t[e-2]<<8)+t[e-1],o.push(y[r>>10]+y[r>>4&63]+y[r<<2&63]+"=")),o.join("")}});var ir=N(G=>{w();G.read=function(t,r,e,n,o){var i,a,u=o*8-n-1,l=(1<<u)-1,f=l>>1,h=-7,c=e?o-1:0,g=e?-1:1,_=t[r+c];for(c+=g,i=_&(1<<-h)-1,_>>=-h,h+=u;h>0;i=i*256+t[r+c],c+=g,h-=8);for(a=i&(1<<-h)-1,i>>=-h,h+=n;h>0;a=a*256+t[r+c],c+=g,h-=8);if(i===0)i=1-f;else{if(i===l)return a?NaN:(_?-1:1)*(1/0);a=a+Math.pow(2,n),i=i-f}return(_?-1:1)*a*Math.pow(2,i-n)};G.write=function(t,r,e,n,o,i){var a,u,l,f=i*8-o-1,h=(1<<f)-1,c=h>>1,g=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=n?0:i-1,k=n?1:-1,Br=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,a=h):(a=Math.floor(Math.log(r)/Math.LN2),r*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?r+=g/l:r+=g*Math.pow(2,1-c),r*l>=2&&(a++,l/=2),a+c>=h?(u=0,a=h):a+c>=1?(u=(r*l-1)*Math.pow(2,o),a=a+c):(u=r*Math.pow(2,c-1)*Math.pow(2,o),a=0));o>=8;t[e+_]=u&255,_+=k,u/=256,o-=8);for(a=a<<o|u,f+=o;f>0;t[e+_]=a&255,_+=k,a/=256,f-=8);t[e+_-k]|=Br*128}});var gr=N(L=>{"use strict";w();var J=or(),C=ir(),ar=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;L.Buffer=p;L.SlowBuffer=Qr;L.INSPECT_MAX_BYTES=50;var Y=2147483647;L.kMaxLength=Y;p.TYPED_ARRAY_SUPPORT=qr();!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function qr(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),t.foo()===42}catch(e){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.buffer}});Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.byteOffset}});function F(t){if(t>Y)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,p.prototype),r}function p(t,r,e){if(typeof t=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return O(t)}return lr(t,r,e)}p.poolSize=8192;function lr(t,r,e){if(typeof t=="string")return Xr(t,r);if(ArrayBuffer.isView(t))return Gr(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(b(t,ArrayBuffer)||t&&b(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(b(t,SharedArrayBuffer)||t&&b(t.buffer,SharedArrayBuffer)))return V(t,r,e);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return p.from(n,r,e);var o=Jr(t);if(o)return o;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return p.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}p.from=function(t,r,e){return lr(t,r,e)};Object.setPrototypeOf(p.prototype,Uint8Array.prototype);Object.setPrototypeOf(p,Uint8Array);function cr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Hr(t,r,e){return cr(t),t<=0?F(t):r!==void 0?typeof e=="string"?F(t).fill(r,e):F(t).fill(r):F(t)}p.alloc=function(t,r,e){return Hr(t,r,e)};function O(t){return cr(t),F(t<0?0:Z(t)|0)}p.allocUnsafe=function(t){return O(t)};p.allocUnsafeSlow=function(t){return O(t)};function Xr(t,r){if((typeof r!="string"||r==="")&&(r="utf8"),!p.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=fr(t,r)|0,n=F(e),o=n.write(t,r);return o!==e&&(n=n.slice(0,o)),n}function Q(t){for(var r=t.length<0?0:Z(t.length)|0,e=F(r),n=0;n<r;n+=1)e[n]=t[n]&255;return e}function Gr(t){if(b(t,Uint8Array)){var r=new Uint8Array(t);return V(r.buffer,r.byteOffset,r.byteLength)}return Q(t)}function V(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;return r===void 0&&e===void 0?n=new Uint8Array(t):e===void 0?n=new Uint8Array(t,r):n=new Uint8Array(t,r,e),Object.setPrototypeOf(n,p.prototype),n}function Jr(t){if(p.isBuffer(t)){var r=Z(t.length)|0,e=F(r);return e.length===0||t.copy(e,0,0,r),e}if(t.length!==void 0)return typeof t.length!="number"||P(t.length)?F(0):Q(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Q(t.data)}function Z(t){if(t>=Y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Y.toString(16)+" bytes");return t|0}function Qr(t){return+t!=t&&(t=0),p.alloc(+t)}p.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==p.prototype};p.compare=function(r,e){if(b(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),b(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(r)||!p.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var n=r.length,o=e.length,i=0,a=Math.min(n,o);i<a;++i)if(r[i]!==e[i]){n=r[i],o=e[i];break}return n<o?-1:o<n?1:0};p.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};p.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return p.alloc(0);var n;if(e===void 0)for(e=0,n=0;n<r.length;++n)e+=r[n].length;var o=p.allocUnsafe(e),i=0;for(n=0;n<r.length;++n){var a=r[n];if(b(a,Uint8Array))i+a.length>o.length?p.from(a).copy(o,i):Uint8Array.prototype.set.call(o,a,i);else if(p.isBuffer(a))a.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return o};function fr(t,r){if(p.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||b(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return K(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return xr(t).length;default:if(o)return n?-1:K(t).length;r=(""+r).toLowerCase(),o=!0}}p.byteLength=fr;function Vr(t,r,e){var n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(t||(t="utf8");;)switch(t){case"hex":return ne(this,r,e);case"utf8":case"utf-8":return sr(this,r,e);case"ascii":return ee(this,r,e);case"latin1":case"binary":return te(this,r,e);case"base64":return jr(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return oe(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}p.prototype._isBuffer=!0;function T(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}p.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)T(this,e,e+1);return this};p.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)T(this,e,e+3),T(this,e+1,e+2);return this};p.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)T(this,e,e+7),T(this,e+1,e+6),T(this,e+2,e+5),T(this,e+3,e+4);return this};p.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?sr(this,0,r):Vr.apply(this,arguments)};p.prototype.toLocaleString=p.prototype.toString;p.prototype.equals=function(r){if(!p.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:p.compare(this,r)===0};p.prototype.inspect=function(){var r="",e=L.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};ar&&(p.prototype[ar]=p.prototype.inspect);p.prototype.compare=function(r,e,n,o,i){if(b(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),!p.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),n===void 0&&(n=r?r.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),e<0||n>r.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&e>=n)return 0;if(o>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,o>>>=0,i>>>=0,this===r)return 0;for(var a=i-o,u=n-e,l=Math.min(a,u),f=this.slice(o,i),h=r.slice(e,n),c=0;c<l;++c)if(f[c]!==h[c]){a=f[c],u=h[c];break}return a<u?-1:u<a?1:0};function hr(t,r,e,n,o){if(t.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,P(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0)if(o)e=0;else return-1;if(typeof r=="string"&&(r=p.from(r,n)),p.isBuffer(r))return r.length===0?-1:pr(t,r,e,n,o);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):pr(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function pr(t,r,e,n,o){var i=1,a=t.length,u=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||r.length<2)return-1;i=2,a/=2,u/=2,e/=2}function l(_,k){return i===1?_[k]:_.readUInt16BE(k*i)}var f;if(o){var h=-1;for(f=e;f<a;f++)if(l(t,f)===l(r,h===-1?0:f-h)){if(h===-1&&(h=f),f-h+1===u)return h*i}else h!==-1&&(f-=f-h),h=-1}else for(e+u>a&&(e=a-u),f=e;f>=0;f--){for(var c=!0,g=0;g<u;g++)if(l(t,f+g)!==l(r,g)){c=!1;break}if(c)return f}return-1}p.prototype.includes=function(r,e,n){return this.indexOf(r,e,n)!==-1};p.prototype.indexOf=function(r,e,n){return hr(this,r,e,n,!0)};p.prototype.lastIndexOf=function(r,e,n){return hr(this,r,e,n,!1)};function Kr(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n),n>o&&(n=o)):n=o;var i=r.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var u=parseInt(r.substr(a*2,2),16);if(P(u))return a;t[e+a]=u}return a}function Or(t,r,e,n){return q(K(r,t.length-e),t,e,n)}function Zr(t,r,e,n){return q(pe(r),t,e,n)}function Pr(t,r,e,n){return q(xr(r),t,e,n)}function $r(t,r,e,n){return q(ue(r,t.length-e),t,e,n)}p.prototype.write=function(r,e,n,o){if(e===void 0)o="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")o=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((n===void 0||n>i)&&(n=i),r.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var a=!1;;)switch(o){case"hex":return Kr(this,r,e,n);case"utf8":case"utf-8":return Or(this,r,e,n);case"ascii":case"latin1":case"binary":return Zr(this,r,e,n);case"base64":return Pr(this,r,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $r(this,r,e,n);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}};p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function jr(t,r,e){return r===0&&e===t.length?J.fromByteArray(t):J.fromByteArray(t.slice(r,e))}function sr(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i=t[o],a=null,u=i>239?4:i>223?3:i>191?2:1;if(o+u<=e){var l,f,h,c;switch(u){case 1:i<128&&(a=i);break;case 2:l=t[o+1],(l&192)===128&&(c=(i&31)<<6|l&63,c>127&&(a=c));break;case 3:l=t[o+1],f=t[o+2],(l&192)===128&&(f&192)===128&&(c=(i&15)<<12|(l&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(a=c));break;case 4:l=t[o+1],f=t[o+2],h=t[o+3],(l&192)===128&&(f&192)===128&&(h&192)===128&&(c=(i&15)<<18|(l&63)<<12|(f&63)<<6|h&63,c>65535&&c<1114112&&(a=c))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),o+=u}return re(n)}var ur=4096;function re(t){var r=t.length;if(r<=ur)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=ur));return e}function ee(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]&127);return n}function te(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function ne(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=le[t[i]];return o}function oe(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+n[i+1]*256);return o}p.prototype.slice=function(r,e){var n=this.length;r=~~r,e=e===void 0?n:~~e,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<r&&(e=r);var o=this.subarray(r,e);return Object.setPrototypeOf(o,p.prototype),o};function m(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=this[r],i=1,a=0;++a<e&&(i*=256);)o+=this[r+a]*i;return o};p.prototype.readUintBE=p.prototype.readUIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=this[r+--e],i=1;e>0&&(i*=256);)o+=this[r+--e]*i;return o};p.prototype.readUint8=p.prototype.readUInt8=function(r,e){return r=r>>>0,e||m(r,1,this.length),this[r]};p.prototype.readUint16LE=p.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||m(r,2,this.length),this[r]|this[r+1]<<8};p.prototype.readUint16BE=p.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||m(r,2,this.length),this[r]<<8|this[r+1]};p.prototype.readUint32LE=p.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||m(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};p.prototype.readUint32BE=p.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||m(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};p.prototype.readIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=this[r],i=1,a=0;++a<e&&(i*=256);)o+=this[r+a]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o};p.prototype.readIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=e,i=1,a=this[r+--o];o>0&&(i*=256);)a+=this[r+--o]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a};p.prototype.readInt8=function(r,e){return r=r>>>0,e||m(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};p.prototype.readInt16LE=function(r,e){r=r>>>0,e||m(r,2,this.length);var n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n};p.prototype.readInt16BE=function(r,e){r=r>>>0,e||m(r,2,this.length);var n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n};p.prototype.readInt32LE=function(r,e){return r=r>>>0,e||m(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};p.prototype.readInt32BE=function(r,e){return r=r>>>0,e||m(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};p.prototype.readFloatLE=function(r,e){return r=r>>>0,e||m(r,4,this.length),C.read(this,r,!0,23,4)};p.prototype.readFloatBE=function(r,e){return r=r>>>0,e||m(r,4,this.length),C.read(this,r,!1,23,4)};p.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||m(r,8,this.length),C.read(this,r,!0,52,8)};p.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||m(r,8,this.length),C.read(this,r,!1,52,8)};function d(t,r,e,n,o,i){if(!p.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(r,e,n,o){if(r=+r,e=e>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;d(this,r,e,n,i,0)}var a=1,u=0;for(this[e]=r&255;++u<n&&(a*=256);)this[e+u]=r/a&255;return e+n};p.prototype.writeUintBE=p.prototype.writeUIntBE=function(r,e,n,o){if(r=+r,e=e>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;d(this,r,e,n,i,0)}var a=n-1,u=1;for(this[e+a]=r&255;--a>=0&&(u*=256);)this[e+a]=r/u&255;return e+n};p.prototype.writeUint8=p.prototype.writeUInt8=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,1,255,0),this[e]=r&255,e+1};p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};p.prototype.writeIntLE=function(r,e,n,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*n-1);d(this,r,e,n,i-1,-i)}var a=0,u=1,l=0;for(this[e]=r&255;++a<n&&(u*=256);)r<0&&l===0&&this[e+a-1]!==0&&(l=1),this[e+a]=(r/u>>0)-l&255;return e+n};p.prototype.writeIntBE=function(r,e,n,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*n-1);d(this,r,e,n,i-1,-i)}var a=n-1,u=1,l=0;for(this[e+a]=r&255;--a>=0&&(u*=256);)r<0&&l===0&&this[e+a+1]!==0&&(l=1),this[e+a]=(r/u>>0)-l&255;return e+n};p.prototype.writeInt8=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};p.prototype.writeInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};p.prototype.writeInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function mr(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function dr(t,r,e,n,o){return r=+r,e=e>>>0,o||mr(t,r,e,4,34028234663852886e22,-34028234663852886e22),C.write(t,r,e,n,23,4),e+4}p.prototype.writeFloatLE=function(r,e,n){return dr(this,r,e,!0,n)};p.prototype.writeFloatBE=function(r,e,n){return dr(this,r,e,!1,n)};function _r(t,r,e,n,o){return r=+r,e=e>>>0,o||mr(t,r,e,8,17976931348623157e292,-17976931348623157e292),C.write(t,r,e,n,52,8),e+8}p.prototype.writeDoubleLE=function(r,e,n){return _r(this,r,e,!0,n)};p.prototype.writeDoubleBE=function(r,e,n){return _r(this,r,e,!1,n)};p.prototype.copy=function(r,e,n,o){if(!p.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),e>=r.length&&(e=r.length),e||(e=0),o>0&&o<n&&(o=n),o===n||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),r.length-e<o-n&&(o=r.length-e+n);var i=o-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,o):Uint8Array.prototype.set.call(r,this.subarray(n,o),e),i};p.prototype.fill=function(r,e,n,o){if(typeof r=="string"){if(typeof e=="string"?(o=e,e=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!p.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(r.length===1){var i=r.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);var a;if(typeof r=="number")for(a=e;a<n;++a)this[a]=r;else{var u=p.isBuffer(r)?r:p.from(r,o),l=u.length;if(l===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(a=0;a<n-e;++a)this[a+e]=u[a%l]}return this};var ie=/[^+/0-9A-Za-z-_]/g;function ae(t){if(t=t.split("=")[0],t=t.trim().replace(ie,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function K(t,r){r=r||1/0;for(var e,n=t.length,o=null,i=[],a=0;a<n;++a){if(e=t.charCodeAt(a),e>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(a+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=(o-55296<<10|e-56320)+65536}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function pe(t){for(var r=[],e=0;e<t.length;++e)r.push(t.charCodeAt(e)&255);return r}function ue(t,r){for(var e,n,o,i=[],a=0;a<t.length&&!((r-=2)<0);++a)e=t.charCodeAt(a),n=e>>8,o=e%256,i.push(o),i.push(n);return i}function xr(t){return J.toByteArray(ae(t))}function q(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function b(t,r){return t instanceof r||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===r.name}function P(t){return t!==t}var le=function(){for(var t="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var n=e*16,o=0;o<16;++o)r[n+o]=t[e]+t[o];return r}()});var vr=N((ge,Er)=>{w();var s=Er.exports={},E,v;function $(){throw new Error("setTimeout has not been defined")}function j(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?E=setTimeout:E=$}catch(t){E=$}try{typeof clearTimeout=="function"?v=clearTimeout:v=j}catch(t){v=j}})();function wr(t){if(E===setTimeout)return setTimeout(t,0);if((E===$||!E)&&setTimeout)return E=setTimeout,setTimeout(t,0);try{return E(t,0)}catch(r){try{return E.call(null,t,0)}catch(e){return E.call(this,t,0)}}}function ce(t){if(v===clearTimeout)return clearTimeout(t);if((v===j||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(t);try{return v(t)}catch(r){try{return v.call(null,t)}catch(e){return v.call(this,t)}}}var B=[],S=!1,I,H=-1;function fe(){!S||!I||(S=!1,I.length?B=I.concat(B):H=-1,B.length&&yr())}function yr(){if(!S){var t=wr(fe);S=!0;for(var r=B.length;r;){for(I=B,B=[];++H<r;)I&&I[H].run();H=-1,r=B.length}I=null,S=!1,ce(t)}}s.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];B.push(new br(t,r)),B.length===1&&!S&&wr(yr)};function br(t,r){this.fun=t,this.array=r}br.prototype.run=function(){this.fun.apply(null,this.array)};s.title="browser";s.browser=!0;s.env={};s.argv=[];s.version="";s.versions={};function A(){}s.on=A;s.addListener=A;s.once=A;s.off=A;s.removeListener=A;s.removeAllListeners=A;s.emit=A;s.prependListener=A;s.prependOnceListener=A;s.listeners=function(t){return[]};s.binding=function(t){throw new Error("process.binding is not supported")};s.cwd=function(){return"/"};s.chdir=function(t){throw new Error("process.chdir is not supported")};s.umask=function(){return 0}});var R,M,we,w=Cr(()=>{R=er(gr()),M=er(vr()),we=function(t){function r(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return r();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var se={};Lr(se,{css:()=>Fr,default:()=>he});module.exports=Sr(se);w();var Fr=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fr));var he={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};0&&(module.exports={css});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=globals.module.js.map
