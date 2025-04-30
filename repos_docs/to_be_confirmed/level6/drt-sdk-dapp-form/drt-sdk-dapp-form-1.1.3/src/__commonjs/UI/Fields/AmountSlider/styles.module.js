"use strict";var Br=Object.create;var D=Object.defineProperty;var Ar=Object.getOwnPropertyDescriptor;var Tr=Object.getOwnPropertyNames;var Ur=Object.getPrototypeOf,Ir=Object.prototype.hasOwnProperty;var Rr=(t,r)=>()=>(t&&(r=t(t=0)),r);var N=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),Cr=(t,r)=>{for(var e in r)D(t,e,{get:r[e],enumerable:!0})},rr=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Tr(r))!Ir.call(t,o)&&o!==e&&D(t,o,{get:()=>r[o],enumerable:!(n=Ar(r,o))||n.enumerable});return t};var er=(t,r,e)=>(e=t!=null?Br(Ur(t)):{},rr(r||!t||!t.__esModule?D(e,"default",{value:t,enumerable:!0}):e,t)),kr=t=>rr(D({},"__esModule",{value:!0}),t);var or=N(z=>{"use strict";w();z.byteLength=Mr;z.toByteArray=Nr;z.fromByteArray=Pr;var g=[],y=[],Lr=typeof Uint8Array!="undefined"?Uint8Array:Array,q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(A=0,tr=q.length;A<tr;++A)g[A]=q[A],y[q.charCodeAt(A)]=A;var A,tr;y["-".charCodeAt(0)]=62;y["_".charCodeAt(0)]=63;function nr(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");e===-1&&(e=r);var n=e===r?0:4-e%4;return[e,n]}function Mr(t){var r=nr(t),e=r[0],n=r[1];return(e+n)*3/4-n}function Dr(t,r,e){return(r+e)*3/4-e}function Nr(t){var r,e=nr(t),n=e[0],o=e[1],i=new Lr(Dr(t,n,o)),a=0,p=o>0?n-4:n,l;for(l=0;l<p;l+=4)r=y[t.charCodeAt(l)]<<18|y[t.charCodeAt(l+1)]<<12|y[t.charCodeAt(l+2)]<<6|y[t.charCodeAt(l+3)],i[a++]=r>>16&255,i[a++]=r>>8&255,i[a++]=r&255;return o===2&&(r=y[t.charCodeAt(l)]<<2|y[t.charCodeAt(l+1)]>>4,i[a++]=r&255),o===1&&(r=y[t.charCodeAt(l)]<<10|y[t.charCodeAt(l+1)]<<4|y[t.charCodeAt(l+2)]>>2,i[a++]=r>>8&255,i[a++]=r&255),i}function zr(t){return g[t>>18&63]+g[t>>12&63]+g[t>>6&63]+g[t&63]}function Yr(t,r,e){for(var n,o=[],i=r;i<e;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),o.push(zr(n));return o.join("")}function Pr(t){for(var r,e=t.length,n=e%3,o=[],i=16383,a=0,p=e-n;a<p;a+=i)o.push(Yr(t,a,a+i>p?p:a+i));return n===1?(r=t[e-1],o.push(g[r>>2]+g[r<<4&63]+"==")):n===2&&(r=(t[e-2]<<8)+t[e-1],o.push(g[r>>10]+g[r>>4&63]+g[r<<2&63]+"=")),o.join("")}});var ir=N(H=>{w();H.read=function(t,r,e,n,o){var i,a,p=o*8-n-1,l=(1<<p)-1,f=l>>1,s=-7,c=e?o-1:0,x=e?-1:1,_=t[r+c];for(c+=x,i=_&(1<<-s)-1,_>>=-s,s+=p;s>0;i=i*256+t[r+c],c+=x,s-=8);for(a=i&(1<<-s)-1,i>>=-s,s+=n;s>0;a=a*256+t[r+c],c+=x,s-=8);if(i===0)i=1-f;else{if(i===l)return a?NaN:(_?-1:1)*(1/0);a=a+Math.pow(2,n),i=i-f}return(_?-1:1)*a*Math.pow(2,i-n)};H.write=function(t,r,e,n,o,i){var a,p,l,f=i*8-o-1,s=(1<<f)-1,c=s>>1,x=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=n?0:i-1,I=n?1:-1,Sr=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(p=isNaN(r)?1:0,a=s):(a=Math.floor(Math.log(r)/Math.LN2),r*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?r+=x/l:r+=x*Math.pow(2,1-c),r*l>=2&&(a++,l/=2),a+c>=s?(p=0,a=s):a+c>=1?(p=(r*l-1)*Math.pow(2,o),a=a+c):(p=r*Math.pow(2,c-1)*Math.pow(2,o),a=0));o>=8;t[e+_]=p&255,_+=I,p/=256,o-=8);for(a=a<<o|p,f+=o;f>0;t[e+_]=a&255,_+=I,a/=256,f-=8);t[e+_-I]|=Sr*128}});var xr=N(C=>{"use strict";w();var G=or(),R=ir(),ar=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;C.Buffer=u;C.SlowBuffer=Jr;C.INSPECT_MAX_BYTES=50;var P=2147483647;C.kMaxLength=P;u.TYPED_ARRAY_SUPPORT=Wr();!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Wr(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),t.foo()===42}catch(e){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.buffer}});Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(!!u.isBuffer(this))return this.byteOffset}});function F(t){if(t>P)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,u.prototype),r}function u(t,r,e){if(typeof t=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return K(t)}return lr(t,r,e)}u.poolSize=8192;function lr(t,r,e){if(typeof t=="string")return qr(t,r);if(ArrayBuffer.isView(t))return Hr(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(E(t,ArrayBuffer)||t&&E(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(E(t,SharedArrayBuffer)||t&&E(t.buffer,SharedArrayBuffer)))return Q(t,r,e);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return u.from(n,r,e);var o=Gr(t);if(o)return o;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return u.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}u.from=function(t,r,e){return lr(t,r,e)};Object.setPrototypeOf(u.prototype,Uint8Array.prototype);Object.setPrototypeOf(u,Uint8Array);function cr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Xr(t,r,e){return cr(t),t<=0?F(t):r!==void 0?typeof e=="string"?F(t).fill(r,e):F(t).fill(r):F(t)}u.alloc=function(t,r,e){return Xr(t,r,e)};function K(t){return cr(t),F(t<0?0:O(t)|0)}u.allocUnsafe=function(t){return K(t)};u.allocUnsafeSlow=function(t){return K(t)};function qr(t,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=fr(t,r)|0,n=F(e),o=n.write(t,r);return o!==e&&(n=n.slice(0,o)),n}function J(t){for(var r=t.length<0?0:O(t.length)|0,e=F(r),n=0;n<r;n+=1)e[n]=t[n]&255;return e}function Hr(t){if(E(t,Uint8Array)){var r=new Uint8Array(t);return Q(r.buffer,r.byteOffset,r.byteLength)}return J(t)}function Q(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var n;return r===void 0&&e===void 0?n=new Uint8Array(t):e===void 0?n=new Uint8Array(t,r):n=new Uint8Array(t,r,e),Object.setPrototypeOf(n,u.prototype),n}function Gr(t){if(u.isBuffer(t)){var r=O(t.length)|0,e=F(r);return e.length===0||t.copy(e,0,0,r),e}if(t.length!==void 0)return typeof t.length!="number"||Z(t.length)?F(0):J(t);if(t.type==="Buffer"&&Array.isArray(t.data))return J(t.data)}function O(t){if(t>=P)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+P.toString(16)+" bytes");return t|0}function Jr(t){return+t!=t&&(t=0),u.alloc(+t)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype};u.compare=function(r,e){if(E(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),E(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(r)||!u.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var n=r.length,o=e.length,i=0,a=Math.min(n,o);i<a;++i)if(r[i]!==e[i]){n=r[i],o=e[i];break}return n<o?-1:o<n?1:0};u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);var n;if(e===void 0)for(e=0,n=0;n<r.length;++n)e+=r[n].length;var o=u.allocUnsafe(e),i=0;for(n=0;n<r.length;++n){var a=r[n];if(E(a,Uint8Array))i+a.length>o.length?u.from(a).copy(o,i):Uint8Array.prototype.set.call(o,a,i);else if(u.isBuffer(a))a.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return o};function fr(t,r){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||E(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return V(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return yr(t).length;default:if(o)return n?-1:V(t).length;r=(""+r).toLowerCase(),o=!0}}u.byteLength=fr;function Qr(t,r,e){var n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(t||(t="utf8");;)switch(t){case"hex":return ne(this,r,e);case"utf8":case"utf-8":return hr(this,r,e);case"ascii":return ee(this,r,e);case"latin1":case"binary":return te(this,r,e);case"base64":return jr(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return oe(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}u.prototype._isBuffer=!0;function T(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}u.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)T(this,e,e+1);return this};u.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)T(this,e,e+3),T(this,e+1,e+2);return this};u.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)T(this,e,e+7),T(this,e+1,e+6),T(this,e+2,e+5),T(this,e+3,e+4);return this};u.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?hr(this,0,r):Qr.apply(this,arguments)};u.prototype.toLocaleString=u.prototype.toString;u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0};u.prototype.inspect=function(){var r="",e=C.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};ar&&(u.prototype[ar]=u.prototype.inspect);u.prototype.compare=function(r,e,n,o,i){if(E(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),n===void 0&&(n=r?r.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),e<0||n>r.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&e>=n)return 0;if(o>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,o>>>=0,i>>>=0,this===r)return 0;for(var a=i-o,p=n-e,l=Math.min(a,p),f=this.slice(o,i),s=r.slice(e,n),c=0;c<l;++c)if(f[c]!==s[c]){a=f[c],p=s[c];break}return a<p?-1:p<a?1:0};function sr(t,r,e,n,o){if(t.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,Z(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0)if(o)e=0;else return-1;if(typeof r=="string"&&(r=u.from(r,n)),u.isBuffer(r))return r.length===0?-1:ur(t,r,e,n,o);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):ur(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function ur(t,r,e,n,o){var i=1,a=t.length,p=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||r.length<2)return-1;i=2,a/=2,p/=2,e/=2}function l(_,I){return i===1?_[I]:_.readUInt16BE(I*i)}var f;if(o){var s=-1;for(f=e;f<a;f++)if(l(t,f)===l(r,s===-1?0:f-s)){if(s===-1&&(s=f),f-s+1===p)return s*i}else s!==-1&&(f-=f-s),s=-1}else for(e+p>a&&(e=a-p),f=e;f>=0;f--){for(var c=!0,x=0;x<p;x++)if(l(t,f+x)!==l(r,x)){c=!1;break}if(c)return f}return-1}u.prototype.includes=function(r,e,n){return this.indexOf(r,e,n)!==-1};u.prototype.indexOf=function(r,e,n){return sr(this,r,e,n,!0)};u.prototype.lastIndexOf=function(r,e,n){return sr(this,r,e,n,!1)};function Vr(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n),n>o&&(n=o)):n=o;var i=r.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var p=parseInt(r.substr(a*2,2),16);if(Z(p))return a;t[e+a]=p}return a}function Kr(t,r,e,n){return W(V(r,t.length-e),t,e,n)}function Or(t,r,e,n){return W(ue(r),t,e,n)}function Zr(t,r,e,n){return W(yr(r),t,e,n)}function $r(t,r,e,n){return W(pe(r,t.length-e),t,e,n)}u.prototype.write=function(r,e,n,o){if(e===void 0)o="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")o=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((n===void 0||n>i)&&(n=i),r.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var a=!1;;)switch(o){case"hex":return Vr(this,r,e,n);case"utf8":case"utf-8":return Kr(this,r,e,n);case"ascii":case"latin1":case"binary":return Or(this,r,e,n);case"base64":return Zr(this,r,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $r(this,r,e,n);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function jr(t,r,e){return r===0&&e===t.length?G.fromByteArray(t):G.fromByteArray(t.slice(r,e))}function hr(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i=t[o],a=null,p=i>239?4:i>223?3:i>191?2:1;if(o+p<=e){var l,f,s,c;switch(p){case 1:i<128&&(a=i);break;case 2:l=t[o+1],(l&192)===128&&(c=(i&31)<<6|l&63,c>127&&(a=c));break;case 3:l=t[o+1],f=t[o+2],(l&192)===128&&(f&192)===128&&(c=(i&15)<<12|(l&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(a=c));break;case 4:l=t[o+1],f=t[o+2],s=t[o+3],(l&192)===128&&(f&192)===128&&(s&192)===128&&(c=(i&15)<<18|(l&63)<<12|(f&63)<<6|s&63,c>65535&&c<1114112&&(a=c))}}a===null?(a=65533,p=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),o+=p}return re(n)}var pr=4096;function re(t){var r=t.length;if(r<=pr)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=pr));return e}function ee(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]&127);return n}function te(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function ne(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=le[t[i]];return o}function oe(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+n[i+1]*256);return o}u.prototype.slice=function(r,e){var n=this.length;r=~~r,e=e===void 0?n:~~e,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<r&&(e=r);var o=this.subarray(r,e);return Object.setPrototypeOf(o,u.prototype),o};function m(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=this[r],i=1,a=0;++a<e&&(i*=256);)o+=this[r+a]*i;return o};u.prototype.readUintBE=u.prototype.readUIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=this[r+--e],i=1;e>0&&(i*=256);)o+=this[r+--e]*i;return o};u.prototype.readUint8=u.prototype.readUInt8=function(r,e){return r=r>>>0,e||m(r,1,this.length),this[r]};u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||m(r,2,this.length),this[r]|this[r+1]<<8};u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||m(r,2,this.length),this[r]<<8|this[r+1]};u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||m(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||m(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};u.prototype.readIntLE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=this[r],i=1,a=0;++a<e&&(i*=256);)o+=this[r+a]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o};u.prototype.readIntBE=function(r,e,n){r=r>>>0,e=e>>>0,n||m(r,e,this.length);for(var o=e,i=1,a=this[r+--o];o>0&&(i*=256);)a+=this[r+--o]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a};u.prototype.readInt8=function(r,e){return r=r>>>0,e||m(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};u.prototype.readInt16LE=function(r,e){r=r>>>0,e||m(r,2,this.length);var n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n};u.prototype.readInt16BE=function(r,e){r=r>>>0,e||m(r,2,this.length);var n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n};u.prototype.readInt32LE=function(r,e){return r=r>>>0,e||m(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};u.prototype.readInt32BE=function(r,e){return r=r>>>0,e||m(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};u.prototype.readFloatLE=function(r,e){return r=r>>>0,e||m(r,4,this.length),R.read(this,r,!0,23,4)};u.prototype.readFloatBE=function(r,e){return r=r>>>0,e||m(r,4,this.length),R.read(this,r,!1,23,4)};u.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||m(r,8,this.length),R.read(this,r,!0,52,8)};u.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||m(r,8,this.length),R.read(this,r,!1,52,8)};function d(t,r,e,n,o,i){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,e,n,o){if(r=+r,e=e>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;d(this,r,e,n,i,0)}var a=1,p=0;for(this[e]=r&255;++p<n&&(a*=256);)this[e+p]=r/a&255;return e+n};u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,e,n,o){if(r=+r,e=e>>>0,n=n>>>0,!o){var i=Math.pow(2,8*n)-1;d(this,r,e,n,i,0)}var a=n-1,p=1;for(this[e+a]=r&255;--a>=0&&(p*=256);)this[e+a]=r/p&255;return e+n};u.prototype.writeUint8=u.prototype.writeUInt8=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,1,255,0),this[e]=r&255,e+1};u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};u.prototype.writeIntLE=function(r,e,n,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*n-1);d(this,r,e,n,i-1,-i)}var a=0,p=1,l=0;for(this[e]=r&255;++a<n&&(p*=256);)r<0&&l===0&&this[e+a-1]!==0&&(l=1),this[e+a]=(r/p>>0)-l&255;return e+n};u.prototype.writeIntBE=function(r,e,n,o){if(r=+r,e=e>>>0,!o){var i=Math.pow(2,8*n-1);d(this,r,e,n,i-1,-i)}var a=n-1,p=1,l=0;for(this[e+a]=r&255;--a>=0&&(p*=256);)r<0&&l===0&&this[e+a+1]!==0&&(l=1),this[e+a]=(r/p>>0)-l&255;return e+n};u.prototype.writeInt8=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};u.prototype.writeInt16LE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};u.prototype.writeInt16BE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};u.prototype.writeInt32LE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};u.prototype.writeInt32BE=function(r,e,n){return r=+r,e=e>>>0,n||d(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function mr(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function dr(t,r,e,n,o){return r=+r,e=e>>>0,o||mr(t,r,e,4,34028234663852886e22,-34028234663852886e22),R.write(t,r,e,n,23,4),e+4}u.prototype.writeFloatLE=function(r,e,n){return dr(this,r,e,!0,n)};u.prototype.writeFloatBE=function(r,e,n){return dr(this,r,e,!1,n)};function _r(t,r,e,n,o){return r=+r,e=e>>>0,o||mr(t,r,e,8,17976931348623157e292,-17976931348623157e292),R.write(t,r,e,n,52,8),e+8}u.prototype.writeDoubleLE=function(r,e,n){return _r(this,r,e,!0,n)};u.prototype.writeDoubleBE=function(r,e,n){return _r(this,r,e,!1,n)};u.prototype.copy=function(r,e,n,o){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),e>=r.length&&(e=r.length),e||(e=0),o>0&&o<n&&(o=n),o===n||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),r.length-e<o-n&&(o=r.length-e+n);var i=o-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,n,o):Uint8Array.prototype.set.call(r,this.subarray(n,o),e),i};u.prototype.fill=function(r,e,n,o){if(typeof r=="string"){if(typeof e=="string"?(o=e,e=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!u.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(r.length===1){var i=r.charCodeAt(0);(o==="utf8"&&i<128||o==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);var a;if(typeof r=="number")for(a=e;a<n;++a)this[a]=r;else{var p=u.isBuffer(r)?r:u.from(r,o),l=p.length;if(l===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(a=0;a<n-e;++a)this[a+e]=p[a%l]}return this};var ie=/[^+/0-9A-Za-z-_]/g;function ae(t){if(t=t.split("=")[0],t=t.trim().replace(ie,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function V(t,r){r=r||1/0;for(var e,n=t.length,o=null,i=[],a=0;a<n;++a){if(e=t.charCodeAt(a),e>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(a+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=(o-55296<<10|e-56320)+65536}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function ue(t){for(var r=[],e=0;e<t.length;++e)r.push(t.charCodeAt(e)&255);return r}function pe(t,r){for(var e,n,o,i=[],a=0;a<t.length&&!((r-=2)<0);++a)e=t.charCodeAt(a),n=e>>8,o=e%256,i.push(o),i.push(n);return i}function yr(t){return G.toByteArray(ae(t))}function W(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function E(t,r){return t instanceof r||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===r.name}function Z(t){return t!==t}var le=function(){for(var t="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var n=e*16,o=0;o<16;++o)r[n+o]=t[e]+t[o];return r}()});var vr=N((xe,br)=>{w();var h=br.exports={},b,v;function $(){throw new Error("setTimeout has not been defined")}function j(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?b=setTimeout:b=$}catch(t){b=$}try{typeof clearTimeout=="function"?v=clearTimeout:v=j}catch(t){v=j}})();function wr(t){if(b===setTimeout)return setTimeout(t,0);if((b===$||!b)&&setTimeout)return b=setTimeout,setTimeout(t,0);try{return b(t,0)}catch(r){try{return b.call(null,t,0)}catch(e){return b.call(this,t,0)}}}function ce(t){if(v===clearTimeout)return clearTimeout(t);if((v===j||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(t);try{return v(t)}catch(r){try{return v.call(null,t)}catch(e){return v.call(this,t)}}}var S=[],k=!1,U,X=-1;function fe(){!k||!U||(k=!1,U.length?S=U.concat(S):X=-1,S.length&&gr())}function gr(){if(!k){var t=wr(fe);k=!0;for(var r=S.length;r;){for(U=S,S=[];++X<r;)U&&U[X].run();X=-1,r=S.length}U=null,k=!1,ce(t)}}h.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];S.push(new Er(t,r)),S.length===1&&!k&&wr(gr)};function Er(t,r){this.fun=t,this.array=r}Er.prototype.run=function(){this.fun.apply(null,this.array)};h.title="browser";h.browser=!0;h.env={};h.argv=[];h.version="";h.versions={};function B(){}h.on=B;h.addListener=B;h.once=B;h.off=B;h.removeListener=B;h.removeAllListeners=B;h.emit=B;h.prependListener=B;h.prependOnceListener=B;h.listeners=function(t){return[]};h.binding=function(t){throw new Error("process.binding is not supported")};h.cwd=function(){return"/"};h.chdir=function(t){throw new Error("process.chdir is not supported")};h.umask=function(){return 0}});var L,M,we,w=Rr(()=>{L=er(xr()),M=er(vr()),we=function(t){function r(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return r();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var he={};Cr(he,{css:()=>Fr,default:()=>se});module.exports=kr(he);w();var Fr=`:root {
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

.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange {
  position: relative;
  display: flex;
  margin: 10px 16px 30px 0;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange:after {
  width: 100%;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  position: absolute;
  background: var(--border-color);
  height: 4px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput {
  width: calc(100% + 16px);
  opacity: 0;
  z-index: 6;
  cursor: pointer;
  height: 1.25rem;
  margin-right: -16px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput.dapp-core-component__styles-module__disabled {
  pointer-events: none;
  cursor: default;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderInput:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb {
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: var(--black);
  z-index: 5;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb.dapp-core-component__styles-module__disabled {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  line-height: 1;
  opacity: 0;
  transition: all 400ms ease;
  color: var(--white);
  font-weight: 500;
  position: absolute;
  left: 50%;
  padding: 0.25rem 0.35rem;
  background: var(--black);
  border-radius: var(--dapp-form-input-border-radius);
  font-size: 11px;
  transform: translateX(-50%);
  bottom: calc(100% + 0.25rem);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion {
  height: 4px;
  background: var(--primary);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 3;
  margin-left: 2px;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderCompletion.dapp-core-component__styles-module__disabled {
  background: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint {
  position: absolute;
  transform: translate(-25%, -50%);
  padding: 15px;
  top: 50%;
  z-index: 4;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint:after {
  content: "";
  position: absolute;
  height: 12px;
  border-radius: 50%;
  background-color: var(--white);
  border: 2px solid var(--primary);
  width: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after {
  background-color: var(--primary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__completed:after.dapp-core-component__styles-module__disabled:after {
  background-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderBreakpoint.dapp-core-component__styles-module__disabled:after {
  border-color: var(--secondary);
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage {
  position: absolute;
  left: 50%;
  transform: translateX(-25%);
  z-index: 7;
  padding: 1.5rem 0 0;
  line-height: 1;
  color: var(--black);
  font-size: 12px;
  cursor: pointer;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage:hover ~ .dapp-core-component__styles-module__amountSliderThumb .dapp-core-component__styles-module__amountSliderThumbPercentage {
  opacity: 1;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__exact {
  font-weight: bold;
}
.dapp-core-component__styles-module__amountSlider .dapp-core-component__styles-module__amountSliderRange .dapp-core-component__styles-module__amountSliderPercentage.dapp-core-component__styles-module__disabled {
  pointer-events: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Fr));var se={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"};0&&(module.exports={css});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=styles.module.js.map
