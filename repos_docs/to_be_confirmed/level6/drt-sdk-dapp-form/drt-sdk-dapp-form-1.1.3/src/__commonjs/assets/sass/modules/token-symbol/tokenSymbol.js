"use strict";var vr=Object.create;var D=Object.defineProperty;var Br=Object.getOwnPropertyDescriptor;var Ar=Object.getOwnPropertyNames;var Ur=Object.getPrototypeOf,Tr=Object.prototype.hasOwnProperty;var Ir=(o,r)=>()=>(o&&(r=o(o=0)),r);var N=(o,r)=>()=>(r||o((r={exports:{}}).exports,r),r.exports),Cr=(o,r)=>{for(var e in r)D(o,e,{get:r[e],enumerable:!0})},rr=(o,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of Ar(r))!Tr.call(o,t)&&t!==e&&D(o,t,{get:()=>r[t],enumerable:!(n=Br(r,t))||n.enumerable});return o};var er=(o,r,e)=>(e=o!=null?vr(Ur(o)):{},rr(r||!o||!o.__esModule?D(e,"default",{value:o,enumerable:!0}):e,o)),Lr=o=>rr(D({},"__esModule",{value:!0}),o);var tr=N(W=>{"use strict";x();W.byteLength=Rr;W.toByteArray=Nr;W.fromByteArray=Yr;var b=[],d=[],Mr=typeof Uint8Array!="undefined"?Uint8Array:Array,G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(B=0,or=G.length;B<or;++B)b[B]=G[B],d[G.charCodeAt(B)]=B;var B,or;d["-".charCodeAt(0)]=62;d["_".charCodeAt(0)]=63;function nr(o){var r=o.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=o.indexOf("=");e===-1&&(e=r);var n=e===r?0:4-e%4;return[e,n]}function Rr(o){var r=nr(o),e=r[0],n=r[1];return(e+n)*3/4-n}function Dr(o,r,e){return(r+e)*3/4-e}function Nr(o){var r,e=nr(o),n=e[0],t=e[1],i=new Mr(Dr(o,n,t)),p=0,a=t>0?n-4:n,u;for(u=0;u<a;u+=4)r=d[o.charCodeAt(u)]<<18|d[o.charCodeAt(u+1)]<<12|d[o.charCodeAt(u+2)]<<6|d[o.charCodeAt(u+3)],i[p++]=r>>16&255,i[p++]=r>>8&255,i[p++]=r&255;return t===2&&(r=d[o.charCodeAt(u)]<<2|d[o.charCodeAt(u+1)]>>4,i[p++]=r&255),t===1&&(r=d[o.charCodeAt(u)]<<10|d[o.charCodeAt(u+1)]<<4|d[o.charCodeAt(u+2)]>>2,i[p++]=r>>8&255,i[p++]=r&255),i}function Wr(o){return b[o>>18&63]+b[o>>12&63]+b[o>>6&63]+b[o&63]}function Xr(o,r,e){for(var n,t=[],i=r;i<e;i+=3)n=(o[i]<<16&16711680)+(o[i+1]<<8&65280)+(o[i+2]&255),t.push(Wr(n));return t.join("")}function Yr(o){for(var r,e=o.length,n=e%3,t=[],i=16383,p=0,a=e-n;p<a;p+=i)t.push(Xr(o,p,p+i>a?a:p+i));return n===1?(r=o[e-1],t.push(b[r>>2]+b[r<<4&63]+"==")):n===2&&(r=(o[e-2]<<8)+o[e-1],t.push(b[r>>10]+b[r>>4&63]+b[r<<2&63]+"=")),t.join("")}});var ir=N(z=>{x();z.read=function(o,r,e,n,t){var i,p,a=t*8-n-1,u=(1<<a)-1,f=u>>1,h=-7,l=e?t-1:0,w=e?-1:1,y=o[r+l];for(l+=w,i=y&(1<<-h)-1,y>>=-h,h+=a;h>0;i=i*256+o[r+l],l+=w,h-=8);for(p=i&(1<<-h)-1,i>>=-h,h+=n;h>0;p=p*256+o[r+l],l+=w,h-=8);if(i===0)i=1-f;else{if(i===u)return p?NaN:(y?-1:1)*(1/0);p=p+Math.pow(2,n),i=i-f}return(y?-1:1)*p*Math.pow(2,i-n)};z.write=function(o,r,e,n,t,i){var p,a,u,f=i*8-t-1,h=(1<<f)-1,l=h>>1,w=t===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=n?0:i-1,T=n?1:-1,Fr=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(a=isNaN(r)?1:0,p=h):(p=Math.floor(Math.log(r)/Math.LN2),r*(u=Math.pow(2,-p))<1&&(p--,u*=2),p+l>=1?r+=w/u:r+=w*Math.pow(2,1-l),r*u>=2&&(p++,u/=2),p+l>=h?(a=0,p=h):p+l>=1?(a=(r*u-1)*Math.pow(2,t),p=p+l):(a=r*Math.pow(2,l-1)*Math.pow(2,t),p=0));t>=8;o[e+y]=a&255,y+=T,a/=256,t-=8);for(p=p<<t|a,f+=t;f>0;o[e+y]=p&255,y+=T,p/=256,f-=8);o[e+y-T]|=Fr*128}});var wr=N(C=>{"use strict";x();var J=tr(),I=ir(),pr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;C.Buffer=c;C.SlowBuffer=Qr;C.INSPECT_MAX_BYTES=50;var Y=2147483647;C.kMaxLength=Y;c.TYPED_ARRAY_SUPPORT=qr();!c.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function qr(){try{var o=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(o,r),o.foo()===42}catch(e){return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.buffer}});Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.byteOffset}});function S(o){if(o>Y)throw new RangeError('The value "'+o+'" is invalid for option "size"');var r=new Uint8Array(o);return Object.setPrototypeOf(r,c.prototype),r}function c(o,r,e){if(typeof o=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return O(o)}return ur(o,r,e)}c.poolSize=8192;function ur(o,r,e){if(typeof o=="string")return Gr(o,r);if(ArrayBuffer.isView(o))return zr(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(g(o,ArrayBuffer)||o&&g(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(g(o,SharedArrayBuffer)||o&&g(o.buffer,SharedArrayBuffer)))return V(o,r,e);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=o.valueOf&&o.valueOf();if(n!=null&&n!==o)return c.from(n,r,e);var t=Jr(o);if(t)return t;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return c.from(o[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}c.from=function(o,r,e){return ur(o,r,e)};Object.setPrototypeOf(c.prototype,Uint8Array.prototype);Object.setPrototypeOf(c,Uint8Array);function lr(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function Hr(o,r,e){return lr(o),o<=0?S(o):r!==void 0?typeof e=="string"?S(o).fill(r,e):S(o).fill(r):S(o)}c.alloc=function(o,r,e){return Hr(o,r,e)};function O(o){return lr(o),S(o<0?0:Z(o)|0)}c.allocUnsafe=function(o){return O(o)};c.allocUnsafeSlow=function(o){return O(o)};function Gr(o,r){if((typeof r!="string"||r==="")&&(r="utf8"),!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=fr(o,r)|0,n=S(e),t=n.write(o,r);return t!==e&&(n=n.slice(0,t)),n}function Q(o){for(var r=o.length<0?0:Z(o.length)|0,e=S(r),n=0;n<r;n+=1)e[n]=o[n]&255;return e}function zr(o){if(g(o,Uint8Array)){var r=new Uint8Array(o);return V(r.buffer,r.byteOffset,r.byteLength)}return Q(o)}function V(o,r,e){if(r<0||o.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;return r===void 0&&e===void 0?n=new Uint8Array(o):e===void 0?n=new Uint8Array(o,r):n=new Uint8Array(o,r,e),Object.setPrototypeOf(n,c.prototype),n}function Jr(o){if(c.isBuffer(o)){var r=Z(o.length)|0,e=S(r);return e.length===0||o.copy(e,0,0,r),e}if(o.length!==void 0)return typeof o.length!="number"||$(o.length)?S(0):Q(o);if(o.type==="Buffer"&&Array.isArray(o.data))return Q(o.data)}function Z(o){if(o>=Y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Y.toString(16)+" bytes");return o|0}function Qr(o){return+o!=o&&(o=0),c.alloc(+o)}c.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==c.prototype};c.compare=function(r,e){if(g(r,Uint8Array)&&(r=c.from(r,r.offset,r.byteLength)),g(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(r)||!c.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var n=r.length,t=e.length,i=0,p=Math.min(n,t);i<p;++i)if(r[i]!==e[i]){n=r[i],t=e[i];break}return n<t?-1:t<n?1:0};c.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};c.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return c.alloc(0);var n;if(e===void 0)for(e=0,n=0;n<r.length;++n)e+=r[n].length;var t=c.allocUnsafe(e),i=0;for(n=0;n<r.length;++n){var p=r[n];if(g(p,Uint8Array))i+p.length>t.length?c.from(p).copy(t,i):Uint8Array.prototype.set.call(t,p,i);else if(c.isBuffer(p))p.copy(t,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=p.length}return t};function fr(o,r){if(c.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||g(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var e=o.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;for(var t=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return K(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return dr(o).length;default:if(t)return n?-1:K(o).length;r=(""+r).toLowerCase(),t=!0}}c.byteLength=fr;function Vr(o,r,e){var n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(o||(o="utf8");;)switch(o){case"hex":return ne(this,r,e);case"utf8":case"utf-8":return mr(this,r,e);case"ascii":return ee(this,r,e);case"latin1":case"binary":return oe(this,r,e);case"base64":return Pr(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return te(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),n=!0}}c.prototype._isBuffer=!0;function A(o,r,e){var n=o[r];o[r]=o[e],o[e]=n}c.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)A(this,e,e+1);return this};c.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)A(this,e,e+3),A(this,e+1,e+2);return this};c.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)A(this,e,e+7),A(this,e+1,e+6),A(this,e+2,e+5),A(this,e+3,e+4);return this};c.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?mr(this,0,r):Vr.apply(this,arguments)};c.prototype.toLocaleString=c.prototype.toString;c.prototype.equals=function(r){if(!c.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:c.compare(this,r)===0};c.prototype.inspect=function(){var r="",e=C.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};pr&&(c.prototype[pr]=c.prototype.inspect);c.prototype.compare=function(r,e,n,t,i){if(g(r,Uint8Array)&&(r=c.from(r,r.offset,r.byteLength)),!c.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),n===void 0&&(n=r?r.length:0),t===void 0&&(t=0),i===void 0&&(i=this.length),e<0||n>r.length||t<0||i>this.length)throw new RangeError("out of range index");if(t>=i&&e>=n)return 0;if(t>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,t>>>=0,i>>>=0,this===r)return 0;for(var p=i-t,a=n-e,u=Math.min(p,a),f=this.slice(t,i),h=r.slice(e,n),l=0;l<u;++l)if(f[l]!==h[l]){p=f[l],a=h[l];break}return p<a?-1:a<p?1:0};function hr(o,r,e,n,t){if(o.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,$(e)&&(e=t?0:o.length-1),e<0&&(e=o.length+e),e>=o.length){if(t)return-1;e=o.length-1}else if(e<0)if(t)e=0;else return-1;if(typeof r=="string"&&(r=c.from(r,n)),c.isBuffer(r))return r.length===0?-1:cr(o,r,e,n,t);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?t?Uint8Array.prototype.indexOf.call(o,r,e):Uint8Array.prototype.lastIndexOf.call(o,r,e):cr(o,[r],e,n,t);throw new TypeError("val must be string, number or Buffer")}function cr(o,r,e,n,t){var i=1,p=o.length,a=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(o.length<2||r.length<2)return-1;i=2,p/=2,a/=2,e/=2}function u(y,T){return i===1?y[T]:y.readUInt16BE(T*i)}var f;if(t){var h=-1;for(f=e;f<p;f++)if(u(o,f)===u(r,h===-1?0:f-h)){if(h===-1&&(h=f),f-h+1===a)return h*i}else h!==-1&&(f-=f-h),h=-1}else for(e+a>p&&(e=p-a),f=e;f>=0;f--){for(var l=!0,w=0;w<a;w++)if(u(o,f+w)!==u(r,w)){l=!1;break}if(l)return f}return-1}c.prototype.includes=function(r,e,n){return this.indexOf(r,e,n)!==-1};c.prototype.indexOf=function(r,e,n){return hr(this,r,e,n,!0)};c.prototype.lastIndexOf=function(r,e,n){return hr(this,r,e,n,!1)};function Kr(o,r,e,n){e=Number(e)||0;var t=o.length-e;n?(n=Number(n),n>t&&(n=t)):n=t;var i=r.length;n>i/2&&(n=i/2);for(var p=0;p<n;++p){var a=parseInt(r.substr(p*2,2),16);if($(a))return p;o[e+p]=a}return p}function Or(o,r,e,n){return q(K(r,o.length-e),o,e,n)}function Zr(o,r,e,n){return q(ce(r),o,e,n)}function $r(o,r,e,n){return q(dr(r),o,e,n)}function jr(o,r,e,n){return q(ae(r,o.length-e),o,e,n)}c.prototype.write=function(r,e,n,t){if(e===void 0)t="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")t=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,t===void 0&&(t="utf8")):(t=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((n===void 0||n>i)&&(n=i),r.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");t||(t="utf8");for(var p=!1;;)switch(t){case"hex":return Kr(this,r,e,n);case"utf8":case"utf-8":return Or(this,r,e,n);case"ascii":case"latin1":case"binary":return Zr(this,r,e,n);case"base64":return $r(this,r,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return jr(this,r,e,n);default:if(p)throw new TypeError("Unknown encoding: "+t);t=(""+t).toLowerCase(),p=!0}};c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Pr(o,r,e){return r===0&&e===o.length?J.fromByteArray(o):J.fromByteArray(o.slice(r,e))}function mr(o,r,e){e=Math.min(o.length,e);for(var n=[],t=r;t<e;){var i=o[t],p=null,a=i>239?4:i>223?3:i>191?2:1;if(t+a<=e){var u,f,h,l;switch(a){case 1:i<128&&(p=i);break;case 2:u=o[t+1],(u&192)===128&&(l=(i&31)<<6|u&63,l>127&&(p=l));break;case 3:u=o[t+1],f=o[t+2],(u&192)===128&&(f&192)===128&&(l=(i&15)<<12|(u&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(p=l));break;case 4:u=o[t+1],f=o[t+2],h=o[t+3],(u&192)===128&&(f&192)===128&&(h&192)===128&&(l=(i&15)<<18|(u&63)<<12|(f&63)<<6|h&63,l>65535&&l<1114112&&(p=l))}}p===null?(p=65533,a=1):p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p),t+=a}return re(n)}var ar=4096;function re(o){var r=o.length;if(r<=ar)return String.fromCharCode.apply(String,o);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,o.slice(n,n+=ar));return e}function ee(o,r,e){var n="";e=Math.min(o.length,e);for(var t=r;t<e;++t)n+=String.fromCharCode(o[t]&127);return n}function oe(o,r,e){var n="";e=Math.min(o.length,e);for(var t=r;t<e;++t)n+=String.fromCharCode(o[t]);return n}function ne(o,r,e){var n=o.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var t="",i=r;i<e;++i)t+=ue[o[i]];return t}function te(o,r,e){for(var n=o.slice(r,e),t="",i=0;i<n.length-1;i+=2)t+=String.fromCharCode(n[i]+n[i+1]*256);return t}c.prototype.slice=function(r,e){var n=this.length;r=~~r,e=e===void 0?n:~~e,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<r&&(e=r);var t=this.subarray(r,e);return Object.setPrototypeOf(t,c.prototype),t};function _(o,r,e){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+r>e)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||_(r,e,this.length);for(var t=this[r],i=1,p=0;++p<e&&(i*=256);)t+=this[r+p]*i;return t};c.prototype.readUintBE=c.prototype.readUIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||_(r,e,this.length);for(var t=this[r+--e],i=1;e>0&&(i*=256);)t+=this[r+--e]*i;return t};c.prototype.readUint8=c.prototype.readUInt8=function(r,e){return r=r>>>0,e||_(r,1,this.length),this[r]};c.prototype.readUint16LE=c.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||_(r,2,this.length),this[r]|this[r+1]<<8};c.prototype.readUint16BE=c.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||_(r,2,this.length),this[r]<<8|this[r+1]};c.prototype.readUint32LE=c.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||_(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};c.prototype.readUint32BE=c.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||_(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};c.prototype.readIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||_(r,e,this.length);for(var t=this[r],i=1,p=0;++p<e&&(i*=256);)t+=this[r+p]*i;return i*=128,t>=i&&(t-=Math.pow(2,8*e)),t};c.prototype.readIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||_(r,e,this.length);for(var t=e,i=1,p=this[r+--t];t>0&&(i*=256);)p+=this[r+--t]*i;return i*=128,p>=i&&(p-=Math.pow(2,8*e)),p};c.prototype.readInt8=function(r,e){return r=r>>>0,e||_(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};c.prototype.readInt16LE=function(r,e){r=r>>>0,e||_(r,2,this.length);var n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n};c.prototype.readInt16BE=function(r,e){r=r>>>0,e||_(r,2,this.length);var n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n};c.prototype.readInt32LE=function(r,e){return r=r>>>0,e||_(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};c.prototype.readInt32BE=function(r,e){return r=r>>>0,e||_(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};c.prototype.readFloatLE=function(r,e){return r=r>>>0,e||_(r,4,this.length),I.read(this,r,!0,23,4)};c.prototype.readFloatBE=function(r,e){return r=r>>>0,e||_(r,4,this.length),I.read(this,r,!1,23,4)};c.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||_(r,8,this.length),I.read(this,r,!0,52,8)};c.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||_(r,8,this.length),I.read(this,r,!1,52,8)};function s(o,r,e,n,t,i){if(!c.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>t||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>o.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(r,e,n,t){if(r=+r,e=e>>>0,n=n>>>0,!t){var i=Math.pow(2,8*n)-1;s(this,r,e,n,i,0)}var p=1,a=0;for(this[e]=r&255;++a<n&&(p*=256);)this[e+a]=r/p&255;return e+n};c.prototype.writeUintBE=c.prototype.writeUIntBE=function(r,e,n,t){if(r=+r,e=e>>>0,n=n>>>0,!t){var i=Math.pow(2,8*n)-1;s(this,r,e,n,i,0)}var p=n-1,a=1;for(this[e+p]=r&255;--p>=0&&(a*=256);)this[e+p]=r/a&255;return e+n};c.prototype.writeUint8=c.prototype.writeUInt8=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,1,255,0),this[e]=r&255,e+1};c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};c.prototype.writeIntLE=function(r,e,n,t){if(r=+r,e=e>>>0,!t){var i=Math.pow(2,8*n-1);s(this,r,e,n,i-1,-i)}var p=0,a=1,u=0;for(this[e]=r&255;++p<n&&(a*=256);)r<0&&u===0&&this[e+p-1]!==0&&(u=1),this[e+p]=(r/a>>0)-u&255;return e+n};c.prototype.writeIntBE=function(r,e,n,t){if(r=+r,e=e>>>0,!t){var i=Math.pow(2,8*n-1);s(this,r,e,n,i-1,-i)}var p=n-1,a=1,u=0;for(this[e+p]=r&255;--p>=0&&(a*=256);)r<0&&u===0&&this[e+p+1]!==0&&(u=1),this[e+p]=(r/a>>0)-u&255;return e+n};c.prototype.writeInt8=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};c.prototype.writeInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};c.prototype.writeInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};c.prototype.writeInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};c.prototype.writeInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||s(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function _r(o,r,e,n,t,i){if(e+n>o.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function sr(o,r,e,n,t){return r=+r,e=e>>>0,t||_r(o,r,e,4,34028234663852886e22,-34028234663852886e22),I.write(o,r,e,n,23,4),e+4}c.prototype.writeFloatLE=function(r,e,n){return sr(this,r,e,!0,n)};c.prototype.writeFloatBE=function(r,e,n){return sr(this,r,e,!1,n)};function yr(o,r,e,n,t){return r=+r,e=e>>>0,t||_r(o,r,e,8,17976931348623157e292,-17976931348623157e292),I.write(o,r,e,n,52,8),e+8}c.prototype.writeDoubleLE=function(r,e,n){return yr(this,r,e,!0,n)};c.prototype.writeDoubleBE=function(r,e,n){return yr(this,r,e,!1,n)};c.prototype.copy=function(r,e,n,t){if(!c.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!t&&t!==0&&(t=this.length),e>=r.length&&(e=r.length),e||(e=0),t>0&&t<n&&(t=n),t===n||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("sourceEnd out of bounds");t>this.length&&(t=this.length),r.length-e<t-n&&(t=r.length-e+n);var i=t-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,t):Uint8Array.prototype.set.call(r,this.subarray(n,t),e),i};c.prototype.fill=function(r,e,n,t){if(typeof r=="string"){if(typeof e=="string"?(t=e,e=0,n=this.length):typeof n=="string"&&(t=n,n=this.length),t!==void 0&&typeof t!="string")throw new TypeError("encoding must be a string");if(typeof t=="string"&&!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);if(r.length===1){var i=r.charCodeAt(0);(t==="utf8"&&i<128||t==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);var p;if(typeof r=="number")for(p=e;p<n;++p)this[p]=r;else{var a=c.isBuffer(r)?r:c.from(r,t),u=a.length;if(u===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(p=0;p<n-e;++p)this[p+e]=a[p%u]}return this};var ie=/[^+/0-9A-Za-z-_]/g;function pe(o){if(o=o.split("=")[0],o=o.trim().replace(ie,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function K(o,r){r=r||1/0;for(var e,n=o.length,t=null,i=[],p=0;p<n;++p){if(e=o.charCodeAt(p),e>55295&&e<57344){if(!t){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(p+1===n){(r-=3)>-1&&i.push(239,191,189);continue}t=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),t=e;continue}e=(t-55296<<10|e-56320)+65536}else t&&(r-=3)>-1&&i.push(239,191,189);if(t=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function ce(o){for(var r=[],e=0;e<o.length;++e)r.push(o.charCodeAt(e)&255);return r}function ae(o,r){for(var e,n,t,i=[],p=0;p<o.length&&!((r-=2)<0);++p)e=o.charCodeAt(p),n=e>>8,t=e%256,i.push(t),i.push(n);return i}function dr(o){return J.toByteArray(pe(o))}function q(o,r,e,n){for(var t=0;t<n&&!(t+e>=r.length||t>=o.length);++t)r[t+e]=o[t];return t}function g(o,r){return o instanceof r||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===r.name}function $(o){return o!==o}var ue=function(){for(var o="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var n=e*16,t=0;t<16;++t)r[n+t]=o[e]+o[t];return r}()});var Er=N((we,kr)=>{x();var m=kr.exports={},k,E;function j(){throw new Error("setTimeout has not been defined")}function P(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?k=setTimeout:k=j}catch(o){k=j}try{typeof clearTimeout=="function"?E=clearTimeout:E=P}catch(o){E=P}})();function xr(o){if(k===setTimeout)return setTimeout(o,0);if((k===j||!k)&&setTimeout)return k=setTimeout,setTimeout(o,0);try{return k(o,0)}catch(r){try{return k.call(null,o,0)}catch(e){return k.call(this,o,0)}}}function le(o){if(E===clearTimeout)return clearTimeout(o);if((E===P||!E)&&clearTimeout)return E=clearTimeout,clearTimeout(o);try{return E(o)}catch(r){try{return E.call(null,o)}catch(e){return E.call(this,o)}}}var F=[],L=!1,U,H=-1;function fe(){!L||!U||(L=!1,U.length?F=U.concat(F):H=-1,F.length&&br())}function br(){if(!L){var o=xr(fe);L=!0;for(var r=F.length;r;){for(U=F,F=[];++H<r;)U&&U[H].run();H=-1,r=F.length}U=null,L=!1,le(o)}}m.nextTick=function(o){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];F.push(new gr(o,r)),F.length===1&&!L&&xr(br)};function gr(o,r){this.fun=o,this.array=r}gr.prototype.run=function(){this.fun.apply(null,this.array)};m.title="browser";m.browser=!0;m.env={};m.argv=[];m.version="";m.versions={};function v(){}m.on=v;m.addListener=v;m.once=v;m.off=v;m.removeListener=v;m.removeAllListeners=v;m.emit=v;m.prependListener=v;m.prependOnceListener=v;m.listeners=function(o){return[]};m.binding=function(o){throw new Error("process.binding is not supported")};m.cwd=function(){return"/"};m.chdir=function(o){throw new Error("process.chdir is not supported")};m.umask=function(){return 0}});var M,R,xe,x=Ir(()=>{M=er(wr()),R=er(Er()),xe=function(o){function r(){var n=this||self;return delete o.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return r();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var me={};Cr(me,{css:()=>Sr,default:()=>he});module.exports=Lr(me);x();var Sr=`:root {
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

.dapp-core-component__tokenSymbol__token-symbol,
.dapp-core-component__tokenSymbol__token-symbol-combined {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 50%;
}
.dapp-core-component__tokenSymbol__token-symbol svg #dapp-core-component__tokenSymbol__rewa-token,
.dapp-core-component__tokenSymbol__token-symbol-combined svg #dapp-core-component__tokenSymbol__rewa-token {
  fill: var(--black);
}

.dapp-core-component__tokenSymbol__token-symbol-combined {
  background-color: transparent;
}

.dapp-core-component__tokenSymbol__token-symbol {
  border: 1px solid var(--black);
  width: 2rem;
  height: 2rem;
}
.dapp-core-component__tokenSymbol__token-symbol img {
  width: 100%;
  height: 100%;
}
.dapp-core-component__tokenSymbol__token-symbol svg {
  width: 1.25rem;
  height: 1.25rem;
}
.dapp-core-component__tokenSymbol__token-symbol svg.dapp-core-component__tokenSymbol__expanded {
  width: 100%;
  height: 100%;
}

.dapp-core-component__tokenSymbol__token-symbol-combined {
  width: 4.5rem;
  height: 4.5rem;
}
.dapp-core-component__tokenSymbol__token-symbol-combined svg {
  filter: drop-shadow(0 0 0.25rem black);
}
.dapp-core-component__tokenSymbol__token-symbol-combined svg circle {
  fill: var(--card-bg);
}
.dapp-core-component__tokenSymbol__token-symbol-combined svg {
  width: 4.25rem;
  height: 4.25rem;
}
.dapp-core-component__tokenSymbol__token-symbol-combined.dapp-core-component__tokenSymbol__small {
  width: 2.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
}
.dapp-core-component__tokenSymbol__token-symbol-combined.dapp-core-component__tokenSymbol__small svg {
  width: 2.5rem;
  height: 2.5rem;
}

.dapp-core-component__tokenSymbol__token-icon-lg .dapp-core-component__tokenSymbol__token-symbol {
  width: 3rem;
  height: 3rem;
}
.dapp-core-component__tokenSymbol__token-icon-lg .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 2.25rem;
  height: 2.25rem;
}

.dapp-core-component__tokenSymbol__token-icon-xl .dapp-core-component__tokenSymbol__token-symbol {
  width: 4rem;
  height: 4rem;
}
.dapp-core-component__tokenSymbol__token-icon-xl .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 2.3rem;
  height: 2.3rem;
}

.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xs .dapp-core-component__tokenSymbol__token-symbol + .dapp-core-component__tokenSymbol__token-symbol {
  margin-left: 0.7rem;
  margin-top: -0.325rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xs .dapp-core-component__tokenSymbol__token-symbol {
  width: 1rem;
  height: 1rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xs .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 0.625rem;
  height: 0.625rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-md .dapp-core-component__tokenSymbol__token-symbol + .dapp-core-component__tokenSymbol__token-symbol {
  margin-left: 1.2rem;
  margin-top: -0.6rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-md .dapp-core-component__tokenSymbol__token-symbol {
  width: 1.8rem;
  height: 1.8rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-md .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 1.2rem;
  height: 1.2rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-lg .dapp-core-component__tokenSymbol__token-symbol + .dapp-core-component__tokenSymbol__token-symbol {
  margin-left: 1.3rem;
  margin-top: -0.725rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-lg .dapp-core-component__tokenSymbol__token-symbol {
  width: 2.3rem;
  height: 2.3rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xl .dapp-core-component__tokenSymbol__token-symbol + .dapp-core-component__tokenSymbol__token-symbol {
  margin-left: 2rem;
  margin-top: -1rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xl .dapp-core-component__tokenSymbol__token-symbol {
  width: 4rem;
  height: 4rem;
}
.dapp-core-component__tokenSymbol__pool-icon.dapp-core-component__tokenSymbol__icon-xl .dapp-core-component__tokenSymbol__token-symbol svg {
  width: 2.3rem;
  height: 2.3rem;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sr));var he={"token-symbol":"dapp-core-component__tokenSymbol__token-symbol",tokenSymbol:"dapp-core-component__tokenSymbol__token-symbol","token-symbol-combined":"dapp-core-component__tokenSymbol__token-symbol-combined",tokenSymbolCombined:"dapp-core-component__tokenSymbol__token-symbol-combined","rewa-token":"dapp-core-component__tokenSymbol__rewa-token",rewaToken:"dapp-core-component__tokenSymbol__rewa-token",expanded:"dapp-core-component__tokenSymbol__expanded",small:"dapp-core-component__tokenSymbol__small","token-icon-lg":"dapp-core-component__tokenSymbol__token-icon-lg",tokenIconLg:"dapp-core-component__tokenSymbol__token-icon-lg","token-icon-xl":"dapp-core-component__tokenSymbol__token-icon-xl",tokenIconXl:"dapp-core-component__tokenSymbol__token-icon-xl","pool-icon":"dapp-core-component__tokenSymbol__pool-icon",poolIcon:"dapp-core-component__tokenSymbol__pool-icon","icon-xs":"dapp-core-component__tokenSymbol__icon-xs",iconXs:"dapp-core-component__tokenSymbol__icon-xs","icon-md":"dapp-core-component__tokenSymbol__icon-md",iconMd:"dapp-core-component__tokenSymbol__icon-md","icon-lg":"dapp-core-component__tokenSymbol__icon-lg",iconLg:"dapp-core-component__tokenSymbol__icon-lg","icon-xl":"dapp-core-component__tokenSymbol__icon-xl",iconXl:"dapp-core-component__tokenSymbol__icon-xl"};0&&(module.exports={css});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=tokenSymbol.js.map
