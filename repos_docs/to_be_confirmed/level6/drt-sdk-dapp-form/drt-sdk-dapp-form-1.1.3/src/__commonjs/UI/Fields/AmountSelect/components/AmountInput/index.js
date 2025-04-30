"use strict";var he=Object.create;var Y=Object.defineProperty;var _e=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var ge=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty;var we=(o,r)=>()=>(o&&(r=o(o=0)),r);var $=(o,r)=>()=>(r||o((r={exports:{}}).exports,r),r.exports),ye=(o,r)=>{for(var e in r)Y(o,e,{get:r[e],enumerable:!0})},Ar=(o,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of be(r))!xe.call(o,n)&&n!==e&&Y(o,n,{get:()=>r[n],enumerable:!(t=_e(r,n))||t.enumerable});return o};var k=(o,r,e)=>(e=o!=null?he(ge(o)):{},Ar(r||!o||!o.__esModule?Y(e,"default",{value:o,enumerable:!0}):e,o)),ve=o=>Ar(Y({},"__esModule",{value:!0}),o);var Fr=$(J=>{"use strict";f();J.byteLength=Ae;J.toByteArray=Be;J.fromByteArray=Te;var I=[],E=[],Ee=typeof Uint8Array!="undefined"?Uint8Array:Array,nr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(R=0,Ir=nr.length;R<Ir;++R)I[R]=nr[R],E[nr.charCodeAt(R)]=R;var R,Ir;E["-".charCodeAt(0)]=62;E["_".charCodeAt(0)]=63;function Br(o){var r=o.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=o.indexOf("=");e===-1&&(e=r);var t=e===r?0:4-e%4;return[e,t]}function Ae(o){var r=Br(o),e=r[0],t=r[1];return(e+t)*3/4-t}function Ie(o,r,e){return(r+e)*3/4-e}function Be(o){var r,e=Br(o),t=e[0],n=e[1],i=new Ee(Ie(o,t,n)),a=0,u=n>0?t-4:t,l;for(l=0;l<u;l+=4)r=E[o.charCodeAt(l)]<<18|E[o.charCodeAt(l+1)]<<12|E[o.charCodeAt(l+2)]<<6|E[o.charCodeAt(l+3)],i[a++]=r>>16&255,i[a++]=r>>8&255,i[a++]=r&255;return n===2&&(r=E[o.charCodeAt(l)]<<2|E[o.charCodeAt(l+1)]>>4,i[a++]=r&255),n===1&&(r=E[o.charCodeAt(l)]<<10|E[o.charCodeAt(l+1)]<<4|E[o.charCodeAt(l+2)]>>2,i[a++]=r>>8&255,i[a++]=r&255),i}function Fe(o){return I[o>>18&63]+I[o>>12&63]+I[o>>6&63]+I[o&63]}function Ue(o,r,e){for(var t,n=[],i=r;i<e;i+=3)t=(o[i]<<16&16711680)+(o[i+1]<<8&65280)+(o[i+2]&255),n.push(Fe(t));return n.join("")}function Te(o){for(var r,e=o.length,t=e%3,n=[],i=16383,a=0,u=e-t;a<u;a+=i)n.push(Ue(o,a,a+i>u?u:a+i));return t===1?(r=o[e-1],n.push(I[r>>2]+I[r<<4&63]+"==")):t===2&&(r=(o[e-2]<<8)+o[e-1],n.push(I[r>>10]+I[r>>4&63]+I[r<<2&63]+"=")),n.join("")}});var Ur=$(ir=>{f();ir.read=function(o,r,e,t,n){var i,a,u=n*8-t-1,l=(1<<u)-1,d=l>>1,s=-7,c=e?n-1:0,g=e?-1:1,y=o[r+c];for(c+=g,i=y&(1<<-s)-1,y>>=-s,s+=u;s>0;i=i*256+o[r+c],c+=g,s-=8);for(a=i&(1<<-s)-1,i>>=-s,s+=t;s>0;a=a*256+o[r+c],c+=g,s-=8);if(i===0)i=1-d;else{if(i===l)return a?NaN:(y?-1:1)*(1/0);a=a+Math.pow(2,t),i=i-d}return(y?-1:1)*a*Math.pow(2,i-t)};ir.write=function(o,r,e,t,n,i){var a,u,l,d=i*8-n-1,s=(1<<d)-1,c=s>>1,g=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=t?0:i-1,N=t?1:-1,tr=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,a=s):(a=Math.floor(Math.log(r)/Math.LN2),r*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?r+=g/l:r+=g*Math.pow(2,1-c),r*l>=2&&(a++,l/=2),a+c>=s?(u=0,a=s):a+c>=1?(u=(r*l-1)*Math.pow(2,n),a=a+c):(u=r*Math.pow(2,c-1)*Math.pow(2,n),a=0));n>=8;o[e+y]=u&255,y+=N,u/=256,n-=8);for(a=a<<n|u,d+=n;d>0;o[e+y]=a&255,y+=N,a/=256,d-=8);o[e+y-N]|=tr*128}});var zr=$(z=>{"use strict";f();var ar=Fr(),G=Ur(),Tr=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;z.Buffer=p;z.SlowBuffer=Ne;z.INSPECT_MAX_BYTES=50;var Q=2147483647;z.kMaxLength=Q;p.TYPED_ARRAY_SUPPORT=ke();!p.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ke(){try{var o=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(o,r),o.foo()===42}catch(e){return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.buffer}});Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(!!p.isBuffer(this))return this.byteOffset}});function L(o){if(o>Q)throw new RangeError('The value "'+o+'" is invalid for option "size"');var r=new Uint8Array(o);return Object.setPrototypeOf(r,p.prototype),r}function p(o,r,e){if(typeof o=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return cr(o)}return Cr(o,r,e)}p.poolSize=8192;function Cr(o,r,e){if(typeof o=="string")return Ce(o,r);if(ArrayBuffer.isView(o))return Se(o);if(o==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o);if(B(o,ArrayBuffer)||o&&B(o.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(B(o,SharedArrayBuffer)||o&&B(o.buffer,SharedArrayBuffer)))return ur(o,r,e);if(typeof o=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=o.valueOf&&o.valueOf();if(t!=null&&t!==o)return p.from(t,r,e);var n=Me(o);if(n)return n;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof o[Symbol.toPrimitive]=="function")return p.from(o[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof o)}p.from=function(o,r,e){return Cr(o,r,e)};Object.setPrototypeOf(p.prototype,Uint8Array.prototype);Object.setPrototypeOf(p,Uint8Array);function Sr(o){if(typeof o!="number")throw new TypeError('"size" argument must be of type number');if(o<0)throw new RangeError('The value "'+o+'" is invalid for option "size"')}function Le(o,r,e){return Sr(o),o<=0?L(o):r!==void 0?typeof e=="string"?L(o).fill(r,e):L(o).fill(r):L(o)}p.alloc=function(o,r,e){return Le(o,r,e)};function cr(o){return Sr(o),L(o<0?0:fr(o)|0)}p.allocUnsafe=function(o){return cr(o)};p.allocUnsafeSlow=function(o){return cr(o)};function Ce(o,r){if((typeof r!="string"||r==="")&&(r="utf8"),!p.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=Mr(o,r)|0,t=L(e),n=t.write(o,r);return n!==e&&(t=t.slice(0,n)),t}function pr(o){for(var r=o.length<0?0:fr(o.length)|0,e=L(r),t=0;t<r;t+=1)e[t]=o[t]&255;return e}function Se(o){if(B(o,Uint8Array)){var r=new Uint8Array(o);return ur(r.buffer,r.byteOffset,r.byteLength)}return pr(o)}function ur(o,r,e){if(r<0||o.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(o.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');var t;return r===void 0&&e===void 0?t=new Uint8Array(o):e===void 0?t=new Uint8Array(o,r):t=new Uint8Array(o,r,e),Object.setPrototypeOf(t,p.prototype),t}function Me(o){if(p.isBuffer(o)){var r=fr(o.length)|0,e=L(r);return e.length===0||o.copy(e,0,0,r),e}if(o.length!==void 0)return typeof o.length!="number"||dr(o.length)?L(0):pr(o);if(o.type==="Buffer"&&Array.isArray(o.data))return pr(o.data)}function fr(o){if(o>=Q)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Q.toString(16)+" bytes");return o|0}function Ne(o){return+o!=o&&(o=0),p.alloc(+o)}p.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==p.prototype};p.compare=function(r,e){if(B(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),B(e,Uint8Array)&&(e=p.from(e,e.offset,e.byteLength)),!p.isBuffer(r)||!p.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===e)return 0;for(var t=r.length,n=e.length,i=0,a=Math.min(t,n);i<a;++i)if(r[i]!==e[i]){t=r[i],n=e[i];break}return t<n?-1:n<t?1:0};p.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};p.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return p.alloc(0);var t;if(e===void 0)for(e=0,t=0;t<r.length;++t)e+=r[t].length;var n=p.allocUnsafe(e),i=0;for(t=0;t<r.length;++t){var a=r[t];if(B(a,Uint8Array))i+a.length>n.length?p.from(a).copy(n,i):Uint8Array.prototype.set.call(n,a,i);else if(p.isBuffer(a))a.copy(n,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=a.length}return n};function Mr(o,r){if(p.isBuffer(o))return o.length;if(ArrayBuffer.isView(o)||B(o,ArrayBuffer))return o.byteLength;if(typeof o!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof o);var e=o.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&e===0)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return lr(o).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return Gr(o).length;default:if(n)return t?-1:lr(o).length;r=(""+r).toLowerCase(),n=!0}}p.byteLength=Mr;function De(o,r,e){var t=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(o||(o="utf8");;)switch(o){case"hex":return Ke(this,r,e);case"utf8":case"utf-8":return Dr(this,r,e);case"ascii":return Xe(this,r,e);case"latin1":case"binary":return Ze(this,r,e);case"base64":return He(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oe(this,r,e);default:if(t)throw new TypeError("Unknown encoding: "+o);o=(o+"").toLowerCase(),t=!0}}p.prototype._isBuffer=!0;function V(o,r,e){var t=o[r];o[r]=o[e],o[e]=t}p.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)V(this,e,e+1);return this};p.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)V(this,e,e+3),V(this,e+1,e+2);return this};p.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)V(this,e,e+7),V(this,e+1,e+6),V(this,e+2,e+5),V(this,e+3,e+4);return this};p.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?Dr(this,0,r):De.apply(this,arguments)};p.prototype.toLocaleString=p.prototype.toString;p.prototype.equals=function(r){if(!p.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:p.compare(this,r)===0};p.prototype.inspect=function(){var r="",e=z.INSPECT_MAX_BYTES;return r=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(r+=" ... "),"<Buffer "+r+">"};Tr&&(p.prototype[Tr]=p.prototype.inspect);p.prototype.compare=function(r,e,t,n,i){if(B(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),!p.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(e===void 0&&(e=0),t===void 0&&(t=r?r.length:0),n===void 0&&(n=0),i===void 0&&(i=this.length),e<0||t>r.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=t)return 0;if(n>=i)return-1;if(e>=t)return 1;if(e>>>=0,t>>>=0,n>>>=0,i>>>=0,this===r)return 0;for(var a=i-n,u=t-e,l=Math.min(a,u),d=this.slice(n,i),s=r.slice(e,t),c=0;c<l;++c)if(d[c]!==s[c]){a=d[c],u=s[c];break}return a<u?-1:u<a?1:0};function Nr(o,r,e,t,n){if(o.length===0)return-1;if(typeof e=="string"?(t=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,dr(e)&&(e=n?0:o.length-1),e<0&&(e=o.length+e),e>=o.length){if(n)return-1;e=o.length-1}else if(e<0)if(n)e=0;else return-1;if(typeof r=="string"&&(r=p.from(r,t)),p.isBuffer(r))return r.length===0?-1:kr(o,r,e,t,n);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(o,r,e):Uint8Array.prototype.lastIndexOf.call(o,r,e):kr(o,[r],e,t,n);throw new TypeError("val must be string, number or Buffer")}function kr(o,r,e,t,n){var i=1,a=o.length,u=r.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(o.length<2||r.length<2)return-1;i=2,a/=2,u/=2,e/=2}function l(y,N){return i===1?y[N]:y.readUInt16BE(N*i)}var d;if(n){var s=-1;for(d=e;d<a;d++)if(l(o,d)===l(r,s===-1?0:d-s)){if(s===-1&&(s=d),d-s+1===u)return s*i}else s!==-1&&(d-=d-s),s=-1}else for(e+u>a&&(e=a-u),d=e;d>=0;d--){for(var c=!0,g=0;g<u;g++)if(l(o,d+g)!==l(r,g)){c=!1;break}if(c)return d}return-1}p.prototype.includes=function(r,e,t){return this.indexOf(r,e,t)!==-1};p.prototype.indexOf=function(r,e,t){return Nr(this,r,e,t,!0)};p.prototype.lastIndexOf=function(r,e,t){return Nr(this,r,e,t,!1)};function Re(o,r,e,t){e=Number(e)||0;var n=o.length-e;t?(t=Number(t),t>n&&(t=n)):t=n;var i=r.length;t>i/2&&(t=i/2);for(var a=0;a<t;++a){var u=parseInt(r.substr(a*2,2),16);if(dr(u))return a;o[e+a]=u}return a}function Ve(o,r,e,t){return P(lr(r,o.length-e),o,e,t)}function We(o,r,e,t){return P(Je(r),o,e,t)}function Ge(o,r,e,t){return P(Gr(r),o,e,t)}function ze(o,r,e,t){return P(Qe(r,o.length-e),o,e,t)}p.prototype.write=function(r,e,t,n){if(e===void 0)n="utf8",t=this.length,e=0;else if(t===void 0&&typeof e=="string")n=e,t=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(t)?(t=t>>>0,n===void 0&&(n="utf8")):(n=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i=this.length-e;if((t===void 0||t>i)&&(t=i),r.length>0&&(t<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return Re(this,r,e,t);case"utf8":case"utf-8":return Ve(this,r,e,t);case"ascii":case"latin1":case"binary":return We(this,r,e,t);case"base64":return Ge(this,r,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ze(this,r,e,t);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}};p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function He(o,r,e){return r===0&&e===o.length?ar.fromByteArray(o):ar.fromByteArray(o.slice(r,e))}function Dr(o,r,e){e=Math.min(o.length,e);for(var t=[],n=r;n<e;){var i=o[n],a=null,u=i>239?4:i>223?3:i>191?2:1;if(n+u<=e){var l,d,s,c;switch(u){case 1:i<128&&(a=i);break;case 2:l=o[n+1],(l&192)===128&&(c=(i&31)<<6|l&63,c>127&&(a=c));break;case 3:l=o[n+1],d=o[n+2],(l&192)===128&&(d&192)===128&&(c=(i&15)<<12|(l&63)<<6|d&63,c>2047&&(c<55296||c>57343)&&(a=c));break;case 4:l=o[n+1],d=o[n+2],s=o[n+3],(l&192)===128&&(d&192)===128&&(s&192)===128&&(c=(i&15)<<18|(l&63)<<12|(d&63)<<6|s&63,c>65535&&c<1114112&&(a=c))}}a===null?(a=65533,u=1):a>65535&&(a-=65536,t.push(a>>>10&1023|55296),a=56320|a&1023),t.push(a),n+=u}return qe(t)}var Lr=4096;function qe(o){var r=o.length;if(r<=Lr)return String.fromCharCode.apply(String,o);for(var e="",t=0;t<r;)e+=String.fromCharCode.apply(String,o.slice(t,t+=Lr));return e}function Xe(o,r,e){var t="";e=Math.min(o.length,e);for(var n=r;n<e;++n)t+=String.fromCharCode(o[n]&127);return t}function Ze(o,r,e){var t="";e=Math.min(o.length,e);for(var n=r;n<e;++n)t+=String.fromCharCode(o[n]);return t}function Ke(o,r,e){var t=o.length;(!r||r<0)&&(r=0),(!e||e<0||e>t)&&(e=t);for(var n="",i=r;i<e;++i)n+=Pe[o[i]];return n}function Oe(o,r,e){for(var t=o.slice(r,e),n="",i=0;i<t.length-1;i+=2)n+=String.fromCharCode(t[i]+t[i+1]*256);return n}p.prototype.slice=function(r,e){var t=this.length;r=~~r,e=e===void 0?t:~~e,r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),e<r&&(e=r);var n=this.subarray(r,e);return Object.setPrototypeOf(n,p.prototype),n};function w(o,r,e){if(o%1!==0||o<0)throw new RangeError("offset is not uint");if(o+r>e)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(r,e,t){r=r>>>0,e=e>>>0,t||w(r,e,this.length);for(var n=this[r],i=1,a=0;++a<e&&(i*=256);)n+=this[r+a]*i;return n};p.prototype.readUintBE=p.prototype.readUIntBE=function(r,e,t){r=r>>>0,e=e>>>0,t||w(r,e,this.length);for(var n=this[r+--e],i=1;e>0&&(i*=256);)n+=this[r+--e]*i;return n};p.prototype.readUint8=p.prototype.readUInt8=function(r,e){return r=r>>>0,e||w(r,1,this.length),this[r]};p.prototype.readUint16LE=p.prototype.readUInt16LE=function(r,e){return r=r>>>0,e||w(r,2,this.length),this[r]|this[r+1]<<8};p.prototype.readUint16BE=p.prototype.readUInt16BE=function(r,e){return r=r>>>0,e||w(r,2,this.length),this[r]<<8|this[r+1]};p.prototype.readUint32LE=p.prototype.readUInt32LE=function(r,e){return r=r>>>0,e||w(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};p.prototype.readUint32BE=p.prototype.readUInt32BE=function(r,e){return r=r>>>0,e||w(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};p.prototype.readIntLE=function(r,e,t){r=r>>>0,e=e>>>0,t||w(r,e,this.length);for(var n=this[r],i=1,a=0;++a<e&&(i*=256);)n+=this[r+a]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n};p.prototype.readIntBE=function(r,e,t){r=r>>>0,e=e>>>0,t||w(r,e,this.length);for(var n=e,i=1,a=this[r+--n];n>0&&(i*=256);)a+=this[r+--n]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*e)),a};p.prototype.readInt8=function(r,e){return r=r>>>0,e||w(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};p.prototype.readInt16LE=function(r,e){r=r>>>0,e||w(r,2,this.length);var t=this[r]|this[r+1]<<8;return t&32768?t|4294901760:t};p.prototype.readInt16BE=function(r,e){r=r>>>0,e||w(r,2,this.length);var t=this[r+1]|this[r]<<8;return t&32768?t|4294901760:t};p.prototype.readInt32LE=function(r,e){return r=r>>>0,e||w(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};p.prototype.readInt32BE=function(r,e){return r=r>>>0,e||w(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};p.prototype.readFloatLE=function(r,e){return r=r>>>0,e||w(r,4,this.length),G.read(this,r,!0,23,4)};p.prototype.readFloatBE=function(r,e){return r=r>>>0,e||w(r,4,this.length),G.read(this,r,!1,23,4)};p.prototype.readDoubleLE=function(r,e){return r=r>>>0,e||w(r,8,this.length),G.read(this,r,!0,52,8)};p.prototype.readDoubleBE=function(r,e){return r=r>>>0,e||w(r,8,this.length),G.read(this,r,!1,52,8)};function v(o,r,e,t,n,i){if(!p.isBuffer(o))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>n||r<i)throw new RangeError('"value" argument is out of bounds');if(e+t>o.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(r,e,t,n){if(r=+r,e=e>>>0,t=t>>>0,!n){var i=Math.pow(2,8*t)-1;v(this,r,e,t,i,0)}var a=1,u=0;for(this[e]=r&255;++u<t&&(a*=256);)this[e+u]=r/a&255;return e+t};p.prototype.writeUintBE=p.prototype.writeUIntBE=function(r,e,t,n){if(r=+r,e=e>>>0,t=t>>>0,!n){var i=Math.pow(2,8*t)-1;v(this,r,e,t,i,0)}var a=t-1,u=1;for(this[e+a]=r&255;--a>=0&&(u*=256);)this[e+a]=r/u&255;return e+t};p.prototype.writeUint8=p.prototype.writeUInt8=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,1,255,0),this[e]=r&255,e+1};p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,2,65535,0),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,2,65535,0),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,4,4294967295,0),this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255,e+4};p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,4,4294967295,0),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};p.prototype.writeIntLE=function(r,e,t,n){if(r=+r,e=e>>>0,!n){var i=Math.pow(2,8*t-1);v(this,r,e,t,i-1,-i)}var a=0,u=1,l=0;for(this[e]=r&255;++a<t&&(u*=256);)r<0&&l===0&&this[e+a-1]!==0&&(l=1),this[e+a]=(r/u>>0)-l&255;return e+t};p.prototype.writeIntBE=function(r,e,t,n){if(r=+r,e=e>>>0,!n){var i=Math.pow(2,8*t-1);v(this,r,e,t,i-1,-i)}var a=t-1,u=1,l=0;for(this[e+a]=r&255;--a>=0&&(u*=256);)r<0&&l===0&&this[e+a+1]!==0&&(l=1),this[e+a]=(r/u>>0)-l&255;return e+t};p.prototype.writeInt8=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,1,127,-128),r<0&&(r=255+r+1),this[e]=r&255,e+1};p.prototype.writeInt16LE=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,2,32767,-32768),this[e]=r&255,this[e+1]=r>>>8,e+2};p.prototype.writeInt16BE=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,2,32767,-32768),this[e]=r>>>8,this[e+1]=r&255,e+2};p.prototype.writeInt32LE=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,4,2147483647,-2147483648),this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24,e+4};p.prototype.writeInt32BE=function(r,e,t){return r=+r,e=e>>>0,t||v(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255,e+4};function Rr(o,r,e,t,n,i){if(e+t>o.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Vr(o,r,e,t,n){return r=+r,e=e>>>0,n||Rr(o,r,e,4,34028234663852886e22,-34028234663852886e22),G.write(o,r,e,t,23,4),e+4}p.prototype.writeFloatLE=function(r,e,t){return Vr(this,r,e,!0,t)};p.prototype.writeFloatBE=function(r,e,t){return Vr(this,r,e,!1,t)};function Wr(o,r,e,t,n){return r=+r,e=e>>>0,n||Rr(o,r,e,8,17976931348623157e292,-17976931348623157e292),G.write(o,r,e,t,52,8),e+8}p.prototype.writeDoubleLE=function(r,e,t){return Wr(this,r,e,!0,t)};p.prototype.writeDoubleBE=function(r,e,t){return Wr(this,r,e,!1,t)};p.prototype.copy=function(r,e,t,n){if(!p.isBuffer(r))throw new TypeError("argument should be a Buffer");if(t||(t=0),!n&&n!==0&&(n=this.length),e>=r.length&&(e=r.length),e||(e=0),n>0&&n<t&&(n=t),n===t||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),r.length-e<n-t&&(n=r.length-e+t);var i=n-t;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,t,n):Uint8Array.prototype.set.call(r,this.subarray(t,n),e),i};p.prototype.fill=function(r,e,t,n){if(typeof r=="string"){if(typeof e=="string"?(n=e,e=0,t=this.length):typeof t=="string"&&(n=t,t=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!p.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(r.length===1){var i=r.charCodeAt(0);(n==="utf8"&&i<128||n==="latin1")&&(r=i)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(e<0||this.length<e||this.length<t)throw new RangeError("Out of range index");if(t<=e)return this;e=e>>>0,t=t===void 0?this.length:t>>>0,r||(r=0);var a;if(typeof r=="number")for(a=e;a<t;++a)this[a]=r;else{var u=p.isBuffer(r)?r:p.from(r,n),l=u.length;if(l===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(a=0;a<t-e;++a)this[a+e]=u[a%l]}return this};var Ye=/[^+/0-9A-Za-z-_]/g;function $e(o){if(o=o.split("=")[0],o=o.trim().replace(Ye,""),o.length<2)return"";for(;o.length%4!==0;)o=o+"=";return o}function lr(o,r){r=r||1/0;for(var e,t=o.length,n=null,i=[],a=0;a<t;++a){if(e=o.charCodeAt(a),e>55295&&e<57344){if(!n){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}else if(a+1===t){(r-=3)>-1&&i.push(239,191,189);continue}n=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),n=e;continue}e=(n-55296<<10|e-56320)+65536}else n&&(r-=3)>-1&&i.push(239,191,189);if(n=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return i}function Je(o){for(var r=[],e=0;e<o.length;++e)r.push(o.charCodeAt(e)&255);return r}function Qe(o,r){for(var e,t,n,i=[],a=0;a<o.length&&!((r-=2)<0);++a)e=o.charCodeAt(a),t=e>>8,n=e%256,i.push(n),i.push(t);return i}function Gr(o){return ar.toByteArray($e(o))}function P(o,r,e,t){for(var n=0;n<t&&!(n+e>=r.length||n>=o.length);++n)r[n+e]=o[n];return n}function B(o,r){return o instanceof r||o!=null&&o.constructor!=null&&o.constructor.name!=null&&o.constructor.name===r.name}function dr(o){return o!==o}var Pe=function(){for(var o="0123456789abcdef",r=new Array(256),e=0;e<16;++e)for(var t=e*16,n=0;n<16;++n)r[t+n]=o[e]+o[n];return r}()});var Kr=$((ho,Zr)=>{f();var b=Zr.exports={},F,U;function sr(){throw new Error("setTimeout has not been defined")}function mr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?F=setTimeout:F=sr}catch(o){F=sr}try{typeof clearTimeout=="function"?U=clearTimeout:U=mr}catch(o){U=mr}})();function Hr(o){if(F===setTimeout)return setTimeout(o,0);if((F===sr||!F)&&setTimeout)return F=setTimeout,setTimeout(o,0);try{return F(o,0)}catch(r){try{return F.call(null,o,0)}catch(e){return F.call(this,o,0)}}}function je(o){if(U===clearTimeout)return clearTimeout(o);if((U===mr||!U)&&clearTimeout)return U=clearTimeout,clearTimeout(o);try{return U(o)}catch(r){try{return U.call(null,o)}catch(e){return U.call(this,o)}}}var C=[],H=!1,W,j=-1;function ro(){!H||!W||(H=!1,W.length?C=W.concat(C):j=-1,C.length&&qr())}function qr(){if(!H){var o=Hr(ro);H=!0;for(var r=C.length;r;){for(W=C,C=[];++j<r;)W&&W[j].run();j=-1,r=C.length}W=null,H=!1,je(o)}}b.nextTick=function(o){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];C.push(new Xr(o,r)),C.length===1&&!H&&Hr(qr)};function Xr(o,r){this.fun=o,this.array=r}Xr.prototype.run=function(){this.fun.apply(null,this.array)};b.title="browser";b.browser=!0;b.env={};b.argv=[];b.version="";b.versions={};function S(){}b.on=S;b.addListener=S;b.once=S;b.off=S;b.removeListener=S;b.removeAllListeners=S;b.emit=S;b.prependListener=S;b.prependOnceListener=S;b.listeners=function(o){return[]};b.binding=function(o){throw new Error("process.binding is not supported")};b.cwd=function(){return"/"};b.chdir=function(o){throw new Error("process.chdir is not supported")};b.umask=function(){return 0}});var h,_,_o,f=we(()=>{h=k(zr()),_=k(Kr()),_o=function(o){function r(){var t=this||self;return delete o.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return r();o.defineProperty(o.prototype,"__magic__",{configurable:!0,get:r});var e=__magic__;return e}(Object)});var lo={};ye(lo,{AmountInput:()=>ao,RewaInfoDust:()=>uo});module.exports=ve(lo);f();f();var m=k(require("react")),jr=require("@terradharitri/sdk-dapp/utils/validation"),er=k(require("bignumber.js")),br=k(require("classnames")),re=require("react-number-format");f();var eo=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(eo));var hr={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};f();var oo=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(oo));var X={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"};f();f();var D=require("@terradharitri/sdk-dapp/constants/index"),Or=require("@terradharitri/sdk-dapp/utils/validation"),M=k(require("bignumber.js")),Yr=(o,r)=>{let e=r!=null?r:D.DIGITS;if((0,Or.stringIsFloat)(o)){if(new M.default(o).isZero())return"0";let n=new M.default(o).toFormat(e);return n=parseFloat(n)>0?n:new M.default(o).toFormat(D.DIGITS),n=parseFloat(n)>0?n:new M.default(o).toFormat(D.DIGITS+2),n=parseFloat(n)>0?n:new M.default(o).toFormat(D.DIGITS+4),n=parseFloat(n)>0?n:new M.default(o).toFormat(D.DIGITS+6),n=parseFloat(n)>0?n:new M.default(o).toFormat(D.DIGITS+10),parseFloat(n)>0?n:new M.default(o).toFormat(D.DIGITS+14)}return"0"};f();var _r=o=>o.replace(/,/g,"");f();var rr=require("react"),to={value:"",count:0},$r=(o,r)=>{let[e,t]=(0,rr.useState)(to);return(0,rr.useEffect)(()=>{let i=setTimeout(()=>{t(o)},r);return()=>clearTimeout(i)},[o.count]),e};f();var Jr=k(require("bignumber.js")),Qr=o=>{let[r,e]=o.split(""),t=new Jr.default(r).isZero();return Boolean(t&&e&&!(e==="."))};var no=500,Pr=1e13,io=({"data-testid":o,InfoDustComponent:r,disabled:e,handleBlur:t,handleChange:n,name:i,onDebounceChange:a,onFocus:u,onKeyDown:l,placeholder:d,required:s,usdPrice:c,value:g,usdValue:y,className:N,autoFocus:tr,suffix:pe})=>{let ue=(0,m.useRef)(null),[xr,wr]=(0,m.useState)(),[le,yr]=(0,m.useState)(!1),[vr,ce]=(0,m.useState)({value:g,count:0}),[Z,K]=(0,m.useState)(),Er=$r(vr,no),fe=A=>{A.stopPropagation(),yr(!0);let T=_r(A.target.value),O=(0,er.default)(T).isLessThanOrEqualTo(Pr);if((T===""||O)&&(wr(T),A.target.value=T,n(A),a)){let me={value:T,count:vr.count+1};ce(me)}},de=()=>{if(y)return K(`$${y}`);if(!c||!g)return K(void 0);let A=_r(g);if(!(g!==""&&(0,jr.stringIsFloat)(A))||A==="")return K(void 0);let O=Yr(new er.default(A).times(c!=null?c:0).toString(10),2);K(`$${O}`)},se=({value:A,floatValue:T})=>(!T||(0,er.default)(T).isLessThanOrEqualTo(Pr))&&!Qr(A);return(0,m.useEffect)(()=>{a&&le&&(yr(!1),a(Er.value))},[Er]),(0,m.useEffect)(de,[g,y,c]),(0,m.useEffect)(()=>{g!==xr&&wr(g)},[g]),m.default.createElement("div",{ref:ue,className:(0,br.default)(X.amountHolder,{[X.showUsdValue]:Boolean(Z)},N)},m.default.createElement(re.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":o||i,decimalSeparator:".",disabled:Boolean(e),id:i,inputMode:"decimal",isAllowed:se,name:i,onBlur:t,onChange:fe,onFocus:u,onKeyDown:l,placeholder:d,required:s,thousandSeparator:",",thousandsGroupStyle:"thousand",value:xr,suffix:pe,valueIsNumericString:!0,allowNegative:!1,autoFocus:tr,className:(0,br.default)(hr.input,X.amountInput,{[hr.disabled]:Boolean(e)})}),Z&&m.default.createElement("span",{className:X.amountHolderUsd},m.default.createElement("small",{"data-testid":`tokenPrice_${c}`},Z!=="$0"?m.default.createElement(m.default.Fragment,null,"\u2248 "):m.default.createElement(m.default.Fragment,null),Z),r))},ao=(0,m.memo)(io,(o,r)=>o.value===r.value&&o.usdPrice===r.usdPrice&&o.className===r.className&&o.disabled===r.disabled&&o.usdValue===r.usdValue);f();f();var gr=k(require("react"));f();f();var q=k(require("react")),oe=require("@fortawesome/free-solid-svg-icons"),te=require("@fortawesome/react-fontawesome"),ne=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),ie=require("react-tooltip"),Zo=require("react-tooltip/dist/react-tooltip.css");f();f();f();var ee="5000000000000000";f();var po=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(po));var or={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"};var ae=({rewaLabel:o})=>q.default.createElement("div",{className:or.infoDust},q.default.createElement(ie.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:or.infoDustTooltip},"A minimal amount of"," ",q.default.createElement(ne.FormatAmount,{rewaLabel:o,value:ee,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),q.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:or.infoDustTrigger},q.default.createElement(te.FontAwesomeIcon,{icon:oe.faInfoCircle,className:"i-icon"})));var uo=({rewaLabel:o,amount:r,maxAmountMinusDust:e,isMaxClicked:t,tokenId:n})=>r===e&&t&&n===o?gr.default.createElement("span",{style:{marginLeft:"0.2rem"}},gr.default.createElement(ae,{rewaLabel:o})):null;0&&(module.exports={AmountInput,RewaInfoDust});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
