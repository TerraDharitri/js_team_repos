"use strict";var ne=Object.create;var $=Object.defineProperty;var ie=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames,yr=Object.getOwnPropertySymbols,pe=Object.getPrototypeOf,xr=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var br=(o,r,e)=>r in o?$(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e,H=(o,r)=>{for(var e in r||(r={}))xr.call(r,e)&&br(o,e,r[e]);if(yr)for(var e of yr(r))le.call(r,e)&&br(o,e,r[e]);return o};var _r=(o,r)=>()=>(o&&(r=o(o=0)),r);var K=(o,r)=>()=>(r||o((r={exports:{}}).exports,r),r.exports),wr=(o,r)=>{for(var e in r)$(o,e,{get:r[e],enumerable:!0})},vr=(o,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of ae(r))!xr.call(o,n)&&n!==e&&$(o,n,{get:()=>r[n],enumerable:!(t=ie(r,n))||t.enumerable});return o};var N=(o,r,e)=>(e=o!=null?ne(pe(o)):{},vr(r||!o||!o.__esModule?$(e,"default",{value:o,enumerable:!0}):e,o)),Tr=o=>vr($({},"__esModule",{value:!0}),o);var Ar=K(q=>{"use strict";l();q.byteLength=se;q.toByteArray=ue;q.fromByteArray=he;var k=[],E=[],ce=typeof Uint8Array!="undefined"?Uint8Array:Array,er="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(M=0,Er=er.length;M<Er;++M)k[M]=er[M],E[er.charCodeAt(M)]=M;var M,Er;E["-".charCodeAt(0)]=62;E["_".charCodeAt(0)]=63;function kr(o){var r=o.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=o.indexOf("=");e===-1&&(e=r);var t=e===r?0:4-e%4;return[e,t]}function se(o){var r=kr(o),e=r[0],t=r[1];return(e+t)*3/4-t}function fe(o,r,e){return(r+e)*3/4-e}function ue(o){var r,e=kr(o),t=e[0],n=e[1],i=new ce(fe(o,t,n)),a=0,c=n>0?t-4:t,s;for(s=0;s<c;s+=4)r=E[o.charCodeAt(s)]<<18|E[o.charCodeAt(s+1)]<<12|E[o.charCodeAt(s+2)]<<6|E[o.charCodeAt(s+3)],i[a++]=r>>16&255,i[a++]=r>>8&255,i[a++]=r&255;return n===2&&(r=E[o.charCodeAt(s)]<<2|E[o.charCodeAt(s+1)]>>4,i[a++]=r&255),n===1&&(r=E[o.charCodeAt(s)]<<10|E[o.charCodeAt(s+1)]<<4|E[o.charCodeAt(s+2)]>>2,i[a++]=r>>8&255,i[a++]=r&255),i}function de(o){return k[o>>18&63]+k[o>>12&63]+k[o>>6&63]+k[o&63]}function me(o,r,e){for(var t,n=[],i=r;i<e;i+=3)t=(o[i]<<16&16711680)+(o[i+1]<<8&65280)+(o[i+2]&255),n.push(de(t));return n.join("")}function he(o){for(var r,e=o.length,t=e%3,n=[],i=16383,a=0,c=e-t;a<c;a+=i)n.push(me(o,a,a+i>c?c:a+i));return t===1?(r=o[e-1],n.push(k[r>>2]+k[r<<4&63]+"==")):t===2&&(r=(o[e-2]<<8)+o[e-1],n.push(k[r>>10]+k[r>>4&63]+k[r<<2&63]+"=")),n.join("")}});var Sr=K(or=>{l();or.read=function(o,r,e,t,n){var i,a,c=n*8-t-1,s=(1<<c)-1,d=s>>1,u=-7,f=e?n-1:0,w=e?-1:1,y=o[r+f];for(f+=w,i=y&(1<<-u)-1,y>>=-u,u+=c;u>0;i=i*256+o[r+f],f+=w,u-=8);for(a=i&(1<<-u)-1,i>>=-u,u+=t;u>0;a=a*256+o[r+f],f+=w,u-=8);if(i===0)i=1-d;else{if(i===s)return a?NaN:(y?-1:1)*(1/0);a=a+Math.pow(2,t),i=i-d}return(y?-1:1)*a*Math.pow(2,i-t)};or.write=function(o,r,e,t,n,i){var a,c,s,d=i*8-n-1,u=(1<<d)-1,f=u>>1,w=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=t?0:i-1,v=t?1:-1,B=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(c=isNaN(r)?1:0,a=u):(a=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-a))<1&&(a--,s*=2),a+f>=1?r+=w/s:r+=w*Math.pow(2,1-f),r*s>=2&&(a++,s/=2),a+f>=u?(c=0,a=u):a+f>=1?(c=(r*s-1)*Math.pow(2,n),a=a+f):(c=r*Math.pow(2,f-1)*Math.pow(2,n),a=0));n>=8;o[e+y]=c&255,y+=v,c/=256,n-=8);for(a=a<<n|c,d+=n;d>0;o[e+y]=a&255,y+=v,a/=256,d-=8);o[e+y-v]|=B*128}});var Vr=K(V=>{"use strict";l();var tr=Ar(),W=Sr(),Fr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;V.Buffer=p;V.SlowBuffer=we;V.INSPECT_MAX_BYTES=50;var J=2147483647;V.kMaxLength=J;p.TYPED_ARRAY_SUPPORT=ge();!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ge(){try{var o=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(o,r),o.foo()===42}catch(e){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.buffer}});Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.byteOffset}});function U(o){if(o>J)throw new RangeError('The value "'+o+'" is invalid for option "size"');var r=new Uint8Array(o);return Object.setPrototypeOf(r,p.prototype),r}function p(o,r,e){if(typeof o=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return pr(o)}return Lr(o,r,e)}p.poolSize=8192;function Lr(o,r,e){if(typeof o=="string")return be(o,r);if(ArrayBuffer.isView(o))return xe(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(A(o,ArrayBuffer)||o&&A(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(A(o,SharedArrayBuffer)||o&&A(o.buffer,SharedArrayBuffer)))return ir(o,r,e);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=o.valueOf&&o.valueOf();if(t!=null&&t!==o)return p.from(t,r,e);var n=_e(o);if(n)return n;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return p.from(o[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}p.from=function(o,r,e){return Lr(o,r,e)};Object.setPrototypeOf(p.prototype,Uint8Array.prototype);Object.setPrototypeOf(p,Uint8Array);function Cr(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function ye(o,r,e){return Cr(o),o<=0?U(o):r!==void 0?typeof e=="string"?U(o).fill(r,e):U(o).fill(r):U(o)}p.alloc=function(o,r,e){return ye(o,r,e)};function pr(o){return Cr(o),U(o<0?0:lr(o)|0)}p.allocUnsafe=function(o){return pr(o)};p.allocUnsafeSlow=function(o){return pr(o)};function be(o,r){if((typeof r!="string"||r==="")&&(r="utf8"),!p.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=Nr(o,r)|0,t=U(e),n=t.write(o,r);return n!==e&&(t=t.slice(0,n)),t}function nr(o){for(var r=o.length<0?0:lr(o.length)|0,e=U(r),t=0;t<r;t+=1)e[t]=o[t]&255;return e}function xe(o){if(A(o,Uint8Array)){var r=new Uint8Array(o);return ir(r.buffer,r.byteOffset,r.byteLength)}return nr(o)}function ir(o,r,e){if(r<0||o.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var t;return r===void 0&&e===void 0?t=new Uint8Array(o):e===void 0?t=new Uint8Array(o,r):t=new Uint8Array(o,r,e),Object.setPrototypeOf(t,p.prototype),t}function _e(o){if(p.isBuffer(o)){var r=lr(o.length)|0,e=U(r);return e.length===0||o.copy(e,0,0,r),e}if(o.length!==void 0)return typeof o.length!="number"||cr(o.length)?U(0):nr(o);if(o.type==="Buffer"&&Array.isArray(o.data))return nr(o.data)}function lr(o){if(o>=J)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+J.toString(16)+" bytes");return o|0}function we(o){return+o!=o&&(o=0),p.alloc(+o)}p.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==p.prototype};p.compare=function(r,e){if(A(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),A(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(r)||!p.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var t=r.length,n=e.length,i=0,a=Math.min(t,n);i<a;++i)if(r[i]!==e[i]){t=r[i],n=e[i];break}return t<n?-1:n<t?1:0};p.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};p.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return p.alloc(0);var t;if(e===void 0)for(e=0,t=0;t<r.length;++t)e+=r[t].length;var n=p.allocUnsafe(e),i=0;for(t=0;t<r.length;++t){var a=r[t];if(A(a,Uint8Array))i+a.length>n.length?p.from(a).copy(n,i):Uint8Array.prototype.set.call(n,a,i);else if(p.isBuffer(a))a.copy(n,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return n};function Nr(o,r){if(p.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||A(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var e=o.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&e===0)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return ar(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return Wr(o).length;default:if(n)return t?-1:ar(o).length;r=(""+r).toLowerCase(),n=!0}}p.byteLength=Nr;function ve(o,r,e){var t=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(o||(o="utf8");;)switch(o){case"hex":return Ce(this,r,e);case"utf8":case"utf-8":return Mr(this,r,e);case"ascii":return Ue(this,r,e);case"latin1":case"binary":return Le(this,r,e);case"base64":return Fe(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ne(this,r,e);default:if(t)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),t=!0}}p.prototype._isBuffer=!0;function R(o,r,e){var t=o[r];o[r]=o[e],o[e]=t}p.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)R(this,e,e+1);return this};p.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)R(this,e,e+3),R(this,e+1,e+2);return this};p.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)R(this,e,e+7),R(this,e+1,e+6),R(this,e+2,e+5),R(this,e+3,e+4);return this};p.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?Mr(this,0,r):ve.apply(this,arguments)};p.prototype.toLocaleString=p.prototype.toString;p.prototype.equals=function(r){if(!p.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:p.compare(this,r)===0};p.prototype.inspect=function(){var r="",e=V.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};Fr&&(p.prototype[Fr]=p.prototype.inspect);p.prototype.compare=function(r,e,t,n,i){if(A(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),!p.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),t===void 0&&(t=r?r.length:0),n===void 0&&(n=0),i===void 0&&(i=this.length),e<0||t>r.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=t)return 0;if(n>=i)return-1;if(e>=t)return 1;if(e>>>=0,t>>>=0,n>>>=0,i>>>=0,this===r)return 0;for(var a=i-n,c=t-e,s=Math.min(a,c),d=this.slice(n,i),u=r.slice(e,t),f=0;f<s;++f)if(d[f]!==u[f]){a=d[f],c=u[f];break}return a<c?-1:c<a?1:0};function Ir(o,r,e,t,n){if(o.length===0)return-1;if(typeof e=="string"?(t=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,cr(e)&&(e=n?0:o.length-1),e<0&&(e=o.length+e),e>=o.length){if(n)return-1;e=o.length-1}else if(e<0)if(n)e=0;else return-1;if(typeof r=="string"&&(r=p.from(r,t)),p.isBuffer(r))return r.length===0?-1:Br(o,r,e,t,n);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(o,r,e):Uint8Array.prototype.lastIndexOf.call(o,r,e):Br(o,[r],e,t,n);throw new TypeError("val must be string, number or Buffer")}function Br(o,r,e,t,n){var i=1,a=o.length,c=r.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(o.length<2||r.length<2)return-1;i=2,a/=2,c/=2,e/=2}function s(y,v){return i===1?y[v]:y.readUInt16BE(v*i)}var d;if(n){var u=-1;for(d=e;d<a;d++)if(s(o,d)===s(r,u===-1?0:d-u)){if(u===-1&&(u=d),d-u+1===c)return u*i}else u!==-1&&(d-=d-u),u=-1}else for(e+c>a&&(e=a-c),d=e;d>=0;d--){for(var f=!0,w=0;w<c;w++)if(s(o,d+w)!==s(r,w)){f=!1;break}if(f)return d}return-1}p.prototype.includes=function(r,e,t){return this.indexOf(r,e,t)!==-1};p.prototype.indexOf=function(r,e,t){return Ir(this,r,e,t,!0)};p.prototype.lastIndexOf=function(r,e,t){return Ir(this,r,e,t,!1)};function Te(o,r,e,t){e=Number(e)||0;var n=o.length-e;t?(t=Number(t),t>n&&(t=n)):t=n;var i=r.length;t>i/2&&(t=i/2);for(var a=0;a<t;++a){var c=parseInt(r.substr(a*2,2),16);if(cr(c))return a;o[e+a]=c}return a}function Ee(o,r,e,t){return Y(ar(r,o.length-e),o,e,t)}function ke(o,r,e,t){return Y(Re(r),o,e,t)}function Ae(o,r,e,t){return Y(Wr(r),o,e,t)}function Se(o,r,e,t){return Y(De(r,o.length-e),o,e,t)}p.prototype.write=function(r,e,t,n){if(e===void 0)n="utf8",t=this.length,e=0;else if(t===void 0&&typeof e=="string")n=e,t=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(t)?(t=t>>>0,n===void 0&&(n="utf8")):(n=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((t===void 0||t>i)&&(t=i),r.length>0&&(t<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return Te(this,r,e,t);case"utf8":case"utf-8":return Ee(this,r,e,t);case"ascii":case"latin1":case"binary":return ke(this,r,e,t);case"base64":return Ae(this,r,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Se(this,r,e,t);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}};p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Fe(o,r,e){return r===0&&e===o.length?tr.fromByteArray(o):tr.fromByteArray(o.slice(r,e))}function Mr(o,r,e){e=Math.min(o.length,e);for(var t=[],n=r;n<e;){var i=o[n],a=null,c=i>239?4:i>223?3:i>191?2:1;if(n+c<=e){var s,d,u,f;switch(c){case 1:i<128&&(a=i);break;case 2:s=o[n+1],(s&192)===128&&(f=(i&31)<<6|s&63,f>127&&(a=f));break;case 3:s=o[n+1],d=o[n+2],(s&192)===128&&(d&192)===128&&(f=(i&15)<<12|(s&63)<<6|d&63,f>2047&&(f<55296||f>57343)&&(a=f));break;case 4:s=o[n+1],d=o[n+2],u=o[n+3],(s&192)===128&&(d&192)===128&&(u&192)===128&&(f=(i&15)<<18|(s&63)<<12|(d&63)<<6|u&63,f>65535&&f<1114112&&(a=f))}}a===null?(a=65533,c=1):a>65535&&(a-=65536,t.push(a>>>10&1023|55296),a=56320|a&1023),t.push(a),n+=c}return Be(t)}var Ur=4096;function Be(o){var r=o.length;if(r<=Ur)return String.fromCharCode.apply(String,o);for(var e="",t=0;t<r;)e+=String.fromCharCode.apply(String,o.slice(t,t+=Ur));return e}function Ue(o,r,e){var t="";e=Math.min(o.length,e);for(var n=r;n<e;++n)t+=String.fromCharCode(o[n]&127);return t}function Le(o,r,e){var t="";e=Math.min(o.length,e);for(var n=r;n<e;++n)t+=String.fromCharCode(o[n]);return t}function Ce(o,r,e){var t=o.length;(!r||r<0)&&(r=0),(!e||e<0||e>t)&&(e=t);for(var n="",i=r;i<e;++i)n+=Pe[o[i]];return n}function Ne(o,r,e){for(var t=o.slice(r,e),n="",i=0;i<t.length-1;i+=2)n+=String.fromCharCode(t[i]+t[i+1]*256);return n}p.prototype.slice=function(r,e){var t=this.length;r=~~r,e=e===void 0?t:~~e,r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),e<r&&(e=r);var n=this.subarray(r,e);return Object.setPrototypeOf(n,p.prototype),n};function _(o,r,e){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+r>e)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(r,e,t){r=r>>>0,e=e>>>0,t||_(r,e,this.length);for(var n=this[r],i=1,a=0;++a<e&&(i*=256);)n+=this[r+a]*i;return n};p.prototype.readUintBE=p.prototype.readUIntBE=function(r,e,t){r=r>>>0,e=e>>>0,t||_(r,e,this.length);for(var n=this[r+--e],i=1;e>0&&(i*=256);)n+=this[r+--e]*i;return n};p.prototype.readUint8=p.prototype.readUInt8=function(r,e){return r=r>>>0,e||_(r,1,this.length),this[r]};p.prototype.readUint16LE=p.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||_(r,2,this.length),this[r]|this[r+1]<<8};p.prototype.readUint16BE=p.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||_(r,2,this.length),this[r]<<8|this[r+1]};p.prototype.readUint32LE=p.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||_(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};p.prototype.readUint32BE=p.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||_(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};p.prototype.readIntLE=function(r,e,t){r=r>>>0,e=e>>>0,t||_(r,e,this.length);for(var n=this[r],i=1,a=0;++a<e&&(i*=256);)n+=this[r+a]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n};p.prototype.readIntBE=function(r,e,t){r=r>>>0,e=e>>>0,t||_(r,e,this.length);for(var n=e,i=1,a=this[r+--n];n>0&&(i*=256);)a+=this[r+--n]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a};p.prototype.readInt8=function(r,e){return r=r>>>0,e||_(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};p.prototype.readInt16LE=function(r,e){r=r>>>0,e||_(r,2,this.length);var t=this[r]|this[r+1]<<8;return t&32768?t|4294901760:t};p.prototype.readInt16BE=function(r,e){r=r>>>0,e||_(r,2,this.length);var t=this[r+1]|this[r]<<8;return t&32768?t|4294901760:t};p.prototype.readInt32LE=function(r,e){return r=r>>>0,e||_(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};p.prototype.readInt32BE=function(r,e){return r=r>>>0,e||_(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};p.prototype.readFloatLE=function(r,e){return r=r>>>0,e||_(r,4,this.length),W.read(this,r,!0,23,4)};p.prototype.readFloatBE=function(r,e){return r=r>>>0,e||_(r,4,this.length),W.read(this,r,!1,23,4)};p.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||_(r,8,this.length),W.read(this,r,!0,52,8)};p.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||_(r,8,this.length),W.read(this,r,!1,52,8)};function T(o,r,e,t,n,i){if(!p.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>n||r<i)throw new RangeError('"value" argument is out of bounds');if(e+t>o.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(r,e,t,n){if(r=+r,e=e>>>0,t=t>>>0,!n){var i=Math.pow(2,8*t)-1;T(this,r,e,t,i,0)}var a=1,c=0;for(this[e]=r&255;++c<t&&(a*=256);)this[e+c]=r/a&255;return e+t};p.prototype.writeUintBE=p.prototype.writeUIntBE=function(r,e,t,n){if(r=+r,e=e>>>0,t=t>>>0,!n){var i=Math.pow(2,8*t)-1;T(this,r,e,t,i,0)}var a=t-1,c=1;for(this[e+a]=r&255;--a>=0&&(c*=256);)this[e+a]=r/c&255;return e+t};p.prototype.writeUint8=p.prototype.writeUInt8=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,1,255,0),this[e]=r&255,e+1};p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};p.prototype.writeIntLE=function(r,e,t,n){if(r=+r,e=e>>>0,!n){var i=Math.pow(2,8*t-1);T(this,r,e,t,i-1,-i)}var a=0,c=1,s=0;for(this[e]=r&255;++a<t&&(c*=256);)r<0&&s===0&&this[e+a-1]!==0&&(s=1),this[e+a]=(r/c>>0)-s&255;return e+t};p.prototype.writeIntBE=function(r,e,t,n){if(r=+r,e=e>>>0,!n){var i=Math.pow(2,8*t-1);T(this,r,e,t,i-1,-i)}var a=t-1,c=1,s=0;for(this[e+a]=r&255;--a>=0&&(c*=256);)r<0&&s===0&&this[e+a+1]!==0&&(s=1),this[e+a]=(r/c>>0)-s&255;return e+t};p.prototype.writeInt8=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};p.prototype.writeInt16LE=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeInt16BE=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeInt32LE=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};p.prototype.writeInt32BE=function(r,e,t){return r=+r,e=e>>>0,t||T(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function Rr(o,r,e,t,n,i){if(e+t>o.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Dr(o,r,e,t,n){return r=+r,e=e>>>0,n||Rr(o,r,e,4,34028234663852886e22,-34028234663852886e22),W.write(o,r,e,t,23,4),e+4}p.prototype.writeFloatLE=function(r,e,t){return Dr(this,r,e,!0,t)};p.prototype.writeFloatBE=function(r,e,t){return Dr(this,r,e,!1,t)};function Pr(o,r,e,t,n){return r=+r,e=e>>>0,n||Rr(o,r,e,8,17976931348623157e292,-17976931348623157e292),W.write(o,r,e,t,52,8),e+8}p.prototype.writeDoubleLE=function(r,e,t){return Pr(this,r,e,!0,t)};p.prototype.writeDoubleBE=function(r,e,t){return Pr(this,r,e,!1,t)};p.prototype.copy=function(r,e,t,n){if(!p.isBuffer(r))throw new TypeError("argument should be a Buffer");if(t||(t=0),!n&&n!==0&&(n=this.length),e>=r.length&&(e=r.length),e||(e=0),n>0&&n<t&&(n=t),n===t||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),r.length-e<n-t&&(n=r.length-e+t);var i=n-t;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,t,n):Uint8Array.prototype.set.call(r,this.subarray(t,n),e),i};p.prototype.fill=function(r,e,t,n){if(typeof r=="string"){if(typeof e=="string"?(n=e,e=0,t=this.length):typeof t=="string"&&(n=t,t=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!p.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(r.length===1){var i=r.charCodeAt(0);(n==="utf8"&&i<128||n==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<t)throw new RangeError("Out of range index");if(t<=e)return this;e=e>>>0,t=t===void 0?this.length:t>>>0,r||(r=0);var a;if(typeof r=="number")for(a=e;a<t;++a)this[a]=r;else{var c=p.isBuffer(r)?r:p.from(r,n),s=c.length;if(s===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(a=0;a<t-e;++a)this[a+e]=c[a%s]}return this};var Ie=/[^+/0-9A-Za-z-_]/g;function Me(o){if(o=o.split("=")[0],o=o.trim().replace(Ie,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function ar(o,r){r=r||1/0;for(var e,t=o.length,n=null,i=[],a=0;a<t;++a){if(e=o.charCodeAt(a),e>55295&&e<57344){if(!n){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(a+1===t){(r-=3)>-1&&i.push(239,191,189);continue}n=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),n=e;continue}e=(n-55296<<10|e-56320)+65536}else n&&(r-=3)>-1&&i.push(239,191,189);if(n=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function Re(o){for(var r=[],e=0;e<o.length;++e)r.push(o.charCodeAt(e)&255);return r}function De(o,r){for(var e,t,n,i=[],a=0;a<o.length&&!((r-=2)<0);++a)e=o.charCodeAt(a),t=e>>8,n=e%256,i.push(n),i.push(t);return i}function Wr(o){return tr.toByteArray(Me(o))}function Y(o,r,e,t){for(var n=0;n<t&&!(n+e>=r.length||n>=o.length);++n)r[n+e]=o[n];return n}function A(o,r){return o instanceof r||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===r.name}function cr(o){return o!==o}var Pe=function(){for(var o="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var t=e*16,n=0;n<16;++n)r[t+n]=o[e]+o[n];return r}()});var Or=K((fo,Xr)=>{l();var b=Xr.exports={},S,F;function sr(){throw new Error("setTimeout has not been defined")}function fr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?S=setTimeout:S=sr}catch(o){S=sr}try{typeof clearTimeout=="function"?F=clearTimeout:F=fr}catch(o){F=fr}})();function Gr(o){if(S===setTimeout)return setTimeout(o,0);if((S===sr||!S)&&setTimeout)return S=setTimeout,setTimeout(o,0);try{return S(o,0)}catch(r){try{return S.call(null,o,0)}catch(e){return S.call(this,o,0)}}}function We(o){if(F===clearTimeout)return clearTimeout(o);if((F===fr||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(o);try{return F(o)}catch(r){try{return F.call(null,o)}catch(e){return F.call(this,o)}}}var L=[],G=!1,D,Z=-1;function Ve(){!G||!D||(G=!1,D.length?L=D.concat(L):Z=-1,L.length&&zr())}function zr(){if(!G){var o=Gr(Ve);G=!0;for(var r=L.length;r;){for(D=L,L=[];++Z<r;)D&&D[Z].run();Z=-1,r=L.length}D=null,G=!1,We(o)}}b.nextTick=function(o){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];L.push(new $r(o,r)),L.length===1&&!G&&Gr(zr)};function $r(o,r){this.fun=o,this.array=r}$r.prototype.run=function(){this.fun.apply(null,this.array)};b.title="browser";b.browser=!0;b.env={};b.argv=[];b.version="";b.versions={};function C(){}b.on=C;b.addListener=C;b.once=C;b.off=C;b.removeListener=C;b.removeAllListeners=C;b.emit=C;b.prependListener=C;b.prependOnceListener=C;b.listeners=function(o){return[]};b.binding=function(o){throw new Error("process.binding is not supported")};b.cwd=function(){return"/"};b.chdir=function(o){throw new Error("process.chdir is not supported")};b.umask=function(){return 0}});var m,h,uo,l=_r(()=>{m=N(Vr()),h=N(Or()),uo=function(o){function r(){var t=this||self;return delete o.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return r();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var Kr={};wr(Kr,{default:()=>eo});var j,ro,eo,qr=_r(()=>{"use strict";l();j=N(require("react")),ro=o=>j.createElement("svg",H({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},o),j.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),j.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),eo=ro});var io={};wr(io,{Token:()=>no});module.exports=Tr(io);l();l();var I=N(require("react"));l();var Ge=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ge));var X={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};l();l();l();var O="0";l();l();var x=N(require("react")),Jr=require("@fortawesome/free-solid-svg-icons"),Yr=require("@fortawesome/react-fontawesome"),Zr=N(require("@terradharitri/sdk-dapp/constants/index")),Qr=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),jr=N(require("classnames"));l();l();l();var ze=require("bech32");l();l();l();l();l();var z=require("@terradharitri/sdk-dapp/types/tokens.types");l();l();var Oe=require("@terradharitri/sdk-dapp/constants"),He=require("@terradharitri/sdk-dapp/utils/account/getAccount");l();l();var Ke=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");l();var qe=require("@terradharitri/sdk-dapp/utils/buildUrlParams");l();var Q=N(require("anchorme")),ur=o=>o.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Hr=(o,r)=>{if(r){let e=`[Message hidden due to suspicious content - ${r.info}]`;if(o.length>1e3)return{output:e,stringWithLinks:o,found:!0};let t=ur(o.normalize("NFKC")),n=Q.default.list(t),i=[];if(n.length>0){let a=e;n.forEach((c,s)=>{let{string:d}=c,u="",f="",w=d;for(let y=0;y<a.length;y++){let v=a.slice(y),[B]=Q.default.list(ur(v));B&&d===B.string&&(u=a.substring(0,y))}for(let y=e.length;y>0;y--){let v=a.slice(0,y),[B]=Q.default.list(ur(v));B&&d===B.string&&(f=a.substring(y))}i.push(u),i.push(w),a=f,s===n.length-1&&i.push(f)})}else i.push(o);return{output:e,stringWithLinks:i.join(""),found:!0}}else return{output:o,stringWithLinks:"",found:!1}};l();l();var Je=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),Ye=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ze=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Qe=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");l();l();l();l();l();l();var je=`:root {
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

.dapp-core-component__styles-module__tokenElement {
  height: 100%;
  display: flex !important;
  align-items: center;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementWrapper {
  display: flex;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementWrapper .dapp-core-component__styles-module__tokenElementCircle {
  border-radius: 50%;
  border: 1px solid var(--dapp-form-select-icon-border);
  background-color: var(--dapp-form-select-icon-bg);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}
.dapp-core-component__styles-module__tokenElement .dapp-core-component__styles-module__tokenElementIdentifier {
  line-height: 1.5;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(je));var P={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"};var oo=(qr(),Tr(Kr)).default,dr=({RewaIcon:o,inDropdown:r=!1,isRewa:e,nftTokenDetails:t,nftType:n,token:i})=>{var mr,hr;let{name:a,identifier:c,balance:s,decimals:d}=i,u=((mr=i.assets)==null?void 0:mr.svgUrl)||((hr=i.assets)==null?void 0:hr.pngUrl)||"",f=u?28:20,[w,y]=(0,x.useState)(a);(0,x.useEffect)(()=>{var gr;((gr=t==null?void 0:t.uris)==null?void 0:gr.some(ee=>{let oe=m.Buffer.from(String(ee),"base64").toString(),{found:te}=Hr(oe,t==null?void 0:t.scamInfo);return te}))||y(a)},[a]);let v=x.default.createElement(Yr.FontAwesomeIcon,{icon:Jr.faDiamond});n==z.NftEnumType.NonFungibleDCDT&&(v=x.default.createElement("div",{className:"nft-type","data-testid":`${c}-type-nft`},"NFT")),n===z.NftEnumType.SemiFungibleDCDT&&(v=x.default.createElement("div",{className:"nft-type","data-testid":`${c}-type-sft`},"SFT"));let B=!r&&n!==z.NftEnumType.NonFungibleDCDT,rr=x.default.createElement("div",{className:P.tokenElementCircle},v);return u&&(rr=x.default.createElement("img",{className:P.tokenElementCircle,src:u,alt:a,height:f})),e&&(rr=x.default.createElement("div",{className:P.tokenElementCircle},o?x.default.createElement(o,{height:36}):x.default.createElement(oo,{height:36}))),x.default.createElement("div",{className:(0,jr.default)(X.value,P.tokenElement)},x.default.createElement("div",{className:P.tokenElementWrapper},rr),x.default.createElement("div",{"data-testid":"tokenName"},x.default.createElement("span",{"data-testid":`${c}-element`},x.default.createElement("span",null,w)," ",x.default.createElement("span",{className:P.tokenElementIdentifier},c)),B&&x.default.createElement(Qr.FormatAmount,{rewaLabel:c,value:s||O,digits:n===z.NftEnumType.SemiFungibleDCDT?0:Zr.DIGITS,token:c,showLabel:!1,decimals:d,"data-testid":`${c}-balance`})))};l();var to=`:root {
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

.dapp-core-component__styles-module__token {
  line-height: 1.5;
}
.dapp-core-component__styles-module__token .dapp-core-component__styles-module__label {
  display: block;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(to));var re={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"};var no=({RewaIcon:o,rewaLabel:r,isDcdtTransaction:e,nft:t,tokenAvatar:n,tokenId:i,tokenIdError:a})=>{var s;let c=(t==null?void 0:t.name)||"";return I.default.createElement("div",{className:re.token},I.default.createElement("span",{className:X.label},t?I.default.createElement("span",null,t==null?void 0:t.name," "):"","Token"),I.default.createElement("div",null,t?I.default.createElement(dr,{inDropdown:!0,token:{name:t==null?void 0:t.name,identifier:t==null?void 0:t.identifier,decimals:0,balance:O,ticker:"",assets:{svgUrl:((s=t==null?void 0:t.assets)==null?void 0:s.svgUrl)||""}}}):I.default.createElement(dr,{inDropdown:!0,token:{name:e?c:"DharitrI eGold",identifier:e?i:r,decimals:0,balance:O,ticker:"",assets:{svgUrl:n||""}},isRewa:i===r,RewaIcon:o})),a&&I.default.createElement("div",{className:X.error},a))};0&&(module.exports={Token});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
