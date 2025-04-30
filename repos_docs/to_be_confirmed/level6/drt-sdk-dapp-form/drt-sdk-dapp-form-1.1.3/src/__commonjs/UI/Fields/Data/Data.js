"use strict";var Kr=Object.create;var ue=Object.defineProperty;var Zr=Object.getOwnPropertyDescriptor;var zr=Object.getOwnPropertyNames;var Hr=Object.getPrototypeOf,Xr=Object.prototype.hasOwnProperty;var jr=(t,e)=>()=>(t&&(e=t(t=0)),e);var de=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Yr=(t,e)=>{for(var r in e)ue(t,r,{get:e[r],enumerable:!0})},Xe=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of zr(e))!Xr.call(t,i)&&i!==r&&ue(t,i,{get:()=>e[i],enumerable:!(o=Zr(e,i))||o.enumerable});return t};var f=(t,e,r)=>(r=t!=null?Kr(Hr(t)):{},Xe(e||!t||!t.__esModule?ue(r,"default",{value:t,enumerable:!0}):r,t)),Jr=t=>Xe(ue({},"__esModule",{value:!0}),t);var Je=de(fe=>{"use strict";n();fe.byteLength=et;fe.toByteArray=tt;fe.fromByteArray=it;var S=[],w=[],Qr=typeof Uint8Array!="undefined"?Uint8Array:Array,Se="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(q=0,je=Se.length;q<je;++q)S[q]=Se[q],w[Se.charCodeAt(q)]=q;var q,je;w["-".charCodeAt(0)]=62;w["_".charCodeAt(0)]=63;function Ye(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var o=r===e?0:4-r%4;return[r,o]}function et(t){var e=Ye(t),r=e[0],o=e[1];return(r+o)*3/4-o}function rt(t,e,r){return(e+r)*3/4-r}function tt(t){var e,r=Ye(t),o=r[0],i=r[1],c=new Qr(rt(t,o,i)),m=0,u=i>0?o-4:o,d;for(d=0;d<u;d+=4)e=w[t.charCodeAt(d)]<<18|w[t.charCodeAt(d+1)]<<12|w[t.charCodeAt(d+2)]<<6|w[t.charCodeAt(d+3)],c[m++]=e>>16&255,c[m++]=e>>8&255,c[m++]=e&255;return i===2&&(e=w[t.charCodeAt(d)]<<2|w[t.charCodeAt(d+1)]>>4,c[m++]=e&255),i===1&&(e=w[t.charCodeAt(d)]<<10|w[t.charCodeAt(d+1)]<<4|w[t.charCodeAt(d+2)]>>2,c[m++]=e>>8&255,c[m++]=e&255),c}function ot(t){return S[t>>18&63]+S[t>>12&63]+S[t>>6&63]+S[t&63]}function nt(t,e,r){for(var o,i=[],c=e;c<r;c+=3)o=(t[c]<<16&16711680)+(t[c+1]<<8&65280)+(t[c+2]&255),i.push(ot(o));return i.join("")}function it(t){for(var e,r=t.length,o=r%3,i=[],c=16383,m=0,u=r-o;m<u;m+=c)i.push(nt(t,m,m+c>u?u:m+c));return o===1?(e=t[r-1],i.push(S[e>>2]+S[e<<4&63]+"==")):o===2&&(e=(t[r-2]<<8)+t[r-1],i.push(S[e>>10]+S[e>>4&63]+S[e<<2&63]+"=")),i.join("")}});var Qe=de(ke=>{n();ke.read=function(t,e,r,o,i){var c,m,u=i*8-o-1,d=(1<<u)-1,x=d>>1,h=-7,g=r?i-1:0,_=r?-1:1,E=t[e+g];for(g+=_,c=E&(1<<-h)-1,E>>=-h,h+=u;h>0;c=c*256+t[e+g],g+=_,h-=8);for(m=c&(1<<-h)-1,c>>=-h,h+=o;h>0;m=m*256+t[e+g],g+=_,h-=8);if(c===0)c=1-x;else{if(c===d)return m?NaN:(E?-1:1)*(1/0);m=m+Math.pow(2,o),c=c-x}return(E?-1:1)*m*Math.pow(2,c-o)};ke.write=function(t,e,r,o,i,c){var m,u,d,x=c*8-i-1,h=(1<<x)-1,g=h>>1,_=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=o?0:c-1,H=o?1:-1,Wr=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,m=h):(m=Math.floor(Math.log(e)/Math.LN2),e*(d=Math.pow(2,-m))<1&&(m--,d*=2),m+g>=1?e+=_/d:e+=_*Math.pow(2,1-g),e*d>=2&&(m++,d/=2),m+g>=h?(u=0,m=h):m+g>=1?(u=(e*d-1)*Math.pow(2,i),m=m+g):(u=e*Math.pow(2,g-1)*Math.pow(2,i),m=0));i>=8;t[r+E]=u&255,E+=H,u/=256,i-=8);for(m=m<<i|u,x+=i;x>0;t[r+E]=m&255,E+=H,m/=256,x-=8);t[r+E-H]|=Wr*128}});var ur=de(j=>{"use strict";n();var Le=Je(),X=Qe(),er=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;j.Buffer=l;j.SlowBuffer=lt;j.INSPECT_MAX_BYTES=50;var ge=2147483647;j.kMaxLength=ge;l.TYPED_ARRAY_SUPPORT=at();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function at(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(r){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function F(t){if(t>ge)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}function l(t,e,r){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Ge(t)}return or(t,e,r)}l.poolSize=8192;function or(t,e,r){if(typeof t=="string")return ct(t,e);if(ArrayBuffer.isView(t))return pt(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(k(t,ArrayBuffer)||t&&k(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(k(t,SharedArrayBuffer)||t&&k(t.buffer,SharedArrayBuffer)))return Fe(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var o=t.valueOf&&t.valueOf();if(o!=null&&o!==t)return l.from(o,e,r);var i=mt(t);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return l.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}l.from=function(t,e,r){return or(t,e,r)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function nr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function st(t,e,r){return nr(t),t<=0?F(t):e!==void 0?typeof r=="string"?F(t).fill(e,r):F(t).fill(e):F(t)}l.alloc=function(t,e,r){return st(t,e,r)};function Ge(t){return nr(t),F(t<0?0:Be(t)|0)}l.allocUnsafe=function(t){return Ge(t)};l.allocUnsafeSlow=function(t){return Ge(t)};function ct(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=ir(t,e)|0,o=F(r),i=o.write(t,e);return i!==r&&(o=o.slice(0,i)),o}function Pe(t){for(var e=t.length<0?0:Be(t.length)|0,r=F(e),o=0;o<e;o+=1)r[o]=t[o]&255;return r}function pt(t){if(k(t,Uint8Array)){var e=new Uint8Array(t);return Fe(e.buffer,e.byteOffset,e.byteLength)}return Pe(t)}function Fe(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var o;return e===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,e):o=new Uint8Array(t,e,r),Object.setPrototypeOf(o,l.prototype),o}function mt(t){if(l.isBuffer(t)){var e=Be(t.length)|0,r=F(e);return r.length===0||t.copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||De(t.length)?F(0):Pe(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Pe(t.data)}function Be(t){if(t>=ge)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ge.toString(16)+" bytes");return t|0}function lt(t){return+t!=t&&(t=0),l.alloc(+t)}l.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==l.prototype};l.compare=function(e,r){if(k(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),k(r,Uint8Array)&&(r=l.from(r,r.offset,r.byteLength)),!l.isBuffer(e)||!l.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var o=e.length,i=r.length,c=0,m=Math.min(o,i);c<m;++c)if(e[c]!==r[c]){o=e[c],i=r[c];break}return o<i?-1:i<o?1:0};l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return l.alloc(0);var o;if(r===void 0)for(r=0,o=0;o<e.length;++o)r+=e[o].length;var i=l.allocUnsafe(r),c=0;for(o=0;o<e.length;++o){var m=e[o];if(k(m,Uint8Array))c+m.length>i.length?l.from(m).copy(i,c):Uint8Array.prototype.set.call(i,m,c);else if(l.isBuffer(m))m.copy(i,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=m.length}return i};function ir(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||k(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,o=arguments.length>2&&arguments[2]===!0;if(!o&&r===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return Ne(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return lr(t).length;default:if(i)return o?-1:Ne(t).length;e=(""+e).toLowerCase(),i=!0}}l.byteLength=ir;function ut(t,e,r){var o=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Et(this,e,r);case"utf8":case"utf-8":return sr(this,e,r);case"ascii":return bt(this,e,r);case"latin1":case"binary":return vt(this,e,r);case"base64":return yt(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ct(this,e,r);default:if(o)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}l.prototype._isBuffer=!0;function O(t,e,r){var o=t[e];t[e]=t[r],t[r]=o}l.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)O(this,r,r+1);return this};l.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)O(this,r,r+3),O(this,r+1,r+2);return this};l.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)O(this,r,r+7),O(this,r+1,r+6),O(this,r+2,r+5),O(this,r+3,r+4);return this};l.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?sr(this,0,e):ut.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:l.compare(this,e)===0};l.prototype.inspect=function(){var e="",r=j.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"};er&&(l.prototype[er]=l.prototype.inspect);l.prototype.compare=function(e,r,o,i,c){if(k(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&(r=0),o===void 0&&(o=e?e.length:0),i===void 0&&(i=0),c===void 0&&(c=this.length),r<0||o>e.length||i<0||c>this.length)throw new RangeError("out of range index");if(i>=c&&r>=o)return 0;if(i>=c)return-1;if(r>=o)return 1;if(r>>>=0,o>>>=0,i>>>=0,c>>>=0,this===e)return 0;for(var m=c-i,u=o-r,d=Math.min(m,u),x=this.slice(i,c),h=e.slice(r,o),g=0;g<d;++g)if(x[g]!==h[g]){m=x[g],u=h[g];break}return m<u?-1:u<m?1:0};function ar(t,e,r,o,i){if(t.length===0)return-1;if(typeof r=="string"?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,De(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=l.from(e,o)),l.isBuffer(e))return e.length===0?-1:rr(t,e,r,o,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):rr(t,[e],r,o,i);throw new TypeError("val must be string, number or Buffer")}function rr(t,e,r,o,i){var c=1,m=t.length,u=e.length;if(o!==void 0&&(o=String(o).toLowerCase(),o==="ucs2"||o==="ucs-2"||o==="utf16le"||o==="utf-16le")){if(t.length<2||e.length<2)return-1;c=2,m/=2,u/=2,r/=2}function d(E,H){return c===1?E[H]:E.readUInt16BE(H*c)}var x;if(i){var h=-1;for(x=r;x<m;x++)if(d(t,x)===d(e,h===-1?0:x-h)){if(h===-1&&(h=x),x-h+1===u)return h*c}else h!==-1&&(x-=x-h),h=-1}else for(r+u>m&&(r=m-u),x=r;x>=0;x--){for(var g=!0,_=0;_<u;_++)if(d(t,x+_)!==d(e,_)){g=!1;break}if(g)return x}return-1}l.prototype.includes=function(e,r,o){return this.indexOf(e,r,o)!==-1};l.prototype.indexOf=function(e,r,o){return ar(this,e,r,o,!0)};l.prototype.lastIndexOf=function(e,r,o){return ar(this,e,r,o,!1)};function dt(t,e,r,o){r=Number(r)||0;var i=t.length-r;o?(o=Number(o),o>i&&(o=i)):o=i;var c=e.length;o>c/2&&(o=c/2);for(var m=0;m<o;++m){var u=parseInt(e.substr(m*2,2),16);if(De(u))return m;t[r+m]=u}return m}function ft(t,e,r,o){return xe(Ne(e,t.length-r),t,r,o)}function gt(t,e,r,o){return xe(_t(e),t,r,o)}function xt(t,e,r,o){return xe(lr(e),t,r,o)}function ht(t,e,r,o){return xe(It(e,t.length-r),t,r,o)}l.prototype.write=function(e,r,o,i){if(r===void 0)i="utf8",o=this.length,r=0;else if(o===void 0&&typeof r=="string")i=r,o=this.length,r=0;else if(isFinite(r))r=r>>>0,isFinite(o)?(o=o>>>0,i===void 0&&(i="utf8")):(i=o,o=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-r;if((o===void 0||o>c)&&(o=c),e.length>0&&(o<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var m=!1;;)switch(i){case"hex":return dt(this,e,r,o);case"utf8":case"utf-8":return ft(this,e,r,o);case"ascii":case"latin1":case"binary":return gt(this,e,r,o);case"base64":return xt(this,e,r,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ht(this,e,r,o);default:if(m)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),m=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function yt(t,e,r){return e===0&&r===t.length?Le.fromByteArray(t):Le.fromByteArray(t.slice(e,r))}function sr(t,e,r){r=Math.min(t.length,r);for(var o=[],i=e;i<r;){var c=t[i],m=null,u=c>239?4:c>223?3:c>191?2:1;if(i+u<=r){var d,x,h,g;switch(u){case 1:c<128&&(m=c);break;case 2:d=t[i+1],(d&192)===128&&(g=(c&31)<<6|d&63,g>127&&(m=g));break;case 3:d=t[i+1],x=t[i+2],(d&192)===128&&(x&192)===128&&(g=(c&15)<<12|(d&63)<<6|x&63,g>2047&&(g<55296||g>57343)&&(m=g));break;case 4:d=t[i+1],x=t[i+2],h=t[i+3],(d&192)===128&&(x&192)===128&&(h&192)===128&&(g=(c&15)<<18|(d&63)<<12|(x&63)<<6|h&63,g>65535&&g<1114112&&(m=g))}}m===null?(m=65533,u=1):m>65535&&(m-=65536,o.push(m>>>10&1023|55296),m=56320|m&1023),o.push(m),i+=u}return Tt(o)}var tr=4096;function Tt(t){var e=t.length;if(e<=tr)return String.fromCharCode.apply(String,t);for(var r="",o=0;o<e;)r+=String.fromCharCode.apply(String,t.slice(o,o+=tr));return r}function bt(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]&127);return o}function vt(t,e,r){var o="";r=Math.min(t.length,r);for(var i=e;i<r;++i)o+=String.fromCharCode(t[i]);return o}function Et(t,e,r){var o=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>o)&&(r=o);for(var i="",c=e;c<r;++c)i+=St[t[c]];return i}function Ct(t,e,r){for(var o=t.slice(e,r),i="",c=0;c<o.length-1;c+=2)i+=String.fromCharCode(o[c]+o[c+1]*256);return i}l.prototype.slice=function(e,r){var o=this.length;e=~~e,r=r===void 0?o:~~r,e<0?(e+=o,e<0&&(e=0)):e>o&&(e=o),r<0?(r+=o,r<0&&(r=0)):r>o&&(r=o),r<e&&(r=e);var i=this.subarray(e,r);return Object.setPrototypeOf(i,l.prototype),i};function b(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e],c=1,m=0;++m<r&&(c*=256);)i+=this[e+m]*c;return i};l.prototype.readUintBE=l.prototype.readUIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e+--r],c=1;r>0&&(c*=256);)i+=this[e+--r]*c;return i};l.prototype.readUint8=l.prototype.readUInt8=function(e,r){return e=e>>>0,r||b(e,1,this.length),this[e]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,r){return e=e>>>0,r||b(e,2,this.length),this[e]|this[e+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||b(e,2,this.length),this[e]<<8|this[e+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};l.prototype.readIntLE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=this[e],c=1,m=0;++m<r&&(c*=256);)i+=this[e+m]*c;return c*=128,i>=c&&(i-=Math.pow(2,8*r)),i};l.prototype.readIntBE=function(e,r,o){e=e>>>0,r=r>>>0,o||b(e,r,this.length);for(var i=r,c=1,m=this[e+--i];i>0&&(c*=256);)m+=this[e+--i]*c;return c*=128,m>=c&&(m-=Math.pow(2,8*r)),m};l.prototype.readInt8=function(e,r){return e=e>>>0,r||b(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};l.prototype.readInt16LE=function(e,r){e=e>>>0,r||b(e,2,this.length);var o=this[e]|this[e+1]<<8;return o&32768?o|4294901760:o};l.prototype.readInt16BE=function(e,r){e=e>>>0,r||b(e,2,this.length);var o=this[e+1]|this[e]<<8;return o&32768?o|4294901760:o};l.prototype.readInt32LE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};l.prototype.readInt32BE=function(e,r){return e=e>>>0,r||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};l.prototype.readFloatLE=function(e,r){return e=e>>>0,r||b(e,4,this.length),X.read(this,e,!0,23,4)};l.prototype.readFloatBE=function(e,r){return e=e>>>0,r||b(e,4,this.length),X.read(this,e,!1,23,4)};l.prototype.readDoubleLE=function(e,r){return e=e>>>0,r||b(e,8,this.length),X.read(this,e,!0,52,8)};l.prototype.readDoubleBE=function(e,r){return e=e>>>0,r||b(e,8,this.length),X.read(this,e,!1,52,8)};function v(t,e,r,o,i,c){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<c)throw new RangeError('"value" argument is out of bounds');if(r+o>t.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var c=Math.pow(2,8*o)-1;v(this,e,r,o,c,0)}var m=1,u=0;for(this[r]=e&255;++u<o&&(m*=256);)this[r+u]=e/m&255;return r+o};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,o=o>>>0,!i){var c=Math.pow(2,8*o)-1;v(this,e,r,o,c,0)}var m=o-1,u=1;for(this[r+m]=e&255;--m>=0&&(u*=256);)this[r+m]=e/u&255;return r+o};l.prototype.writeUint8=l.prototype.writeUInt8=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,1,255,0),this[r]=e&255,r+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=e&255,r+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,r+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};l.prototype.writeIntLE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var c=Math.pow(2,8*o-1);v(this,e,r,o,c-1,-c)}var m=0,u=1,d=0;for(this[r]=e&255;++m<o&&(u*=256);)e<0&&d===0&&this[r+m-1]!==0&&(d=1),this[r+m]=(e/u>>0)-d&255;return r+o};l.prototype.writeIntBE=function(e,r,o,i){if(e=+e,r=r>>>0,!i){var c=Math.pow(2,8*o-1);v(this,e,r,o,c-1,-c)}var m=o-1,u=1,d=0;for(this[r+m]=e&255;--m>=0&&(u*=256);)e<0&&d===0&&this[r+m+1]!==0&&(d=1),this[r+m]=(e/u>>0)-d&255;return r+o};l.prototype.writeInt8=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=e&255,r+1};l.prototype.writeInt16LE=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};l.prototype.writeInt16BE=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};l.prototype.writeInt32LE=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};l.prototype.writeInt32BE=function(e,r,o){return e=+e,r=r>>>0,o||v(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function cr(t,e,r,o,i,c){if(r+o>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function pr(t,e,r,o,i){return e=+e,r=r>>>0,i||cr(t,e,r,4,34028234663852886e22,-34028234663852886e22),X.write(t,e,r,o,23,4),r+4}l.prototype.writeFloatLE=function(e,r,o){return pr(this,e,r,!0,o)};l.prototype.writeFloatBE=function(e,r,o){return pr(this,e,r,!1,o)};function mr(t,e,r,o,i){return e=+e,r=r>>>0,i||cr(t,e,r,8,17976931348623157e292,-17976931348623157e292),X.write(t,e,r,o,52,8),r+8}l.prototype.writeDoubleLE=function(e,r,o){return mr(this,e,r,!0,o)};l.prototype.writeDoubleBE=function(e,r,o){return mr(this,e,r,!1,o)};l.prototype.copy=function(e,r,o,i){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(o||(o=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<o&&(i=o),i===o||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(o<0||o>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-o&&(i=e.length-r+o);var c=i-o;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,o,i):Uint8Array.prototype.set.call(e,this.subarray(o,i),r),c};l.prototype.fill=function(e,r,o,i){if(typeof e=="string"){if(typeof r=="string"?(i=r,r=0,o=this.length):typeof o=="string"&&(i=o,o=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!l.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var c=e.charCodeAt(0);(i==="utf8"&&c<128||i==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||this.length<r||this.length<o)throw new RangeError("Out of range index");if(o<=r)return this;r=r>>>0,o=o===void 0?this.length:o>>>0,e||(e=0);var m;if(typeof e=="number")for(m=r;m<o;++m)this[m]=e;else{var u=l.isBuffer(e)?e:l.from(e,i),d=u.length;if(d===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(m=0;m<o-r;++m)this[m+r]=u[m%d]}return this};var wt=/[^+/0-9A-Za-z-_]/g;function At(t){if(t=t.split("=")[0],t=t.trim().replace(wt,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Ne(t,e){e=e||1/0;for(var r,o=t.length,i=null,c=[],m=0;m<o;++m){if(r=t.charCodeAt(m),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&c.push(239,191,189);continue}else if(m+1===o){(e-=3)>-1&&c.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&c.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&c.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;c.push(r)}else if(r<2048){if((e-=2)<0)break;c.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;c.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;c.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else throw new Error("Invalid code point")}return c}function _t(t){for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r)&255);return e}function It(t,e){for(var r,o,i,c=[],m=0;m<t.length&&!((e-=2)<0);++m)r=t.charCodeAt(m),o=r>>8,i=r%256,c.push(i),c.push(o);return c}function lr(t){return Le.toByteArray(At(t))}function xe(t,e,r,o){for(var i=0;i<o&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function k(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function De(t){return t!==t}var St=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var o=r*16,i=0;i<16;++i)e[o+i]=t[r]+t[i];return e}()});var hr=de((ai,xr)=>{n();var T=xr.exports={},L,P;function Ue(){throw new Error("setTimeout has not been defined")}function Ve(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?L=setTimeout:L=Ue}catch(t){L=Ue}try{typeof clearTimeout=="function"?P=clearTimeout:P=Ve}catch(t){P=Ve}})();function dr(t){if(L===setTimeout)return setTimeout(t,0);if((L===Ue||!L)&&setTimeout)return L=setTimeout,setTimeout(t,0);try{return L(t,0)}catch(e){try{return L.call(null,t,0)}catch(r){return L.call(this,t,0)}}}function kt(t){if(P===clearTimeout)return clearTimeout(t);if((P===Ve||!P)&&clearTimeout)return P=clearTimeout,clearTimeout(t);try{return P(t)}catch(e){try{return P.call(null,t)}catch(r){return P.call(this,t)}}}var N=[],Y=!1,$,he=-1;function Lt(){!Y||!$||(Y=!1,$.length?N=$.concat(N):he=-1,N.length&&fr())}function fr(){if(!Y){var t=dr(Lt);Y=!0;for(var e=N.length;e;){for($=N,N=[];++he<e;)$&&$[he].run();he=-1,e=N.length}$=null,Y=!1,kt(t)}}T.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];N.push(new gr(t,e)),N.length===1&&!Y&&dr(fr)};function gr(t,e){this.fun=t,this.array=e}gr.prototype.run=function(){this.fun.apply(null,this.array)};T.title="browser";T.browser=!0;T.env={};T.argv=[];T.version="";T.versions={};function G(){}T.on=G;T.addListener=G;T.once=G;T.off=G;T.removeListener=G;T.removeAllListeners=G;T.emit=G;T.prependListener=G;T.prependOnceListener=G;T.listeners=function(t){return[]};T.binding=function(t){throw new Error("process.binding is not supported")};T.cwd=function(){return"/"};T.chdir=function(t){throw new Error("process.chdir is not supported")};T.umask=function(){return 0}});var a,s,si,n=jr(()=>{a=f(ur()),s=f(hr()),si=function(t){function e(){var o=this||self;return delete t.prototype.__magic__,o}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object)});var ri={};Yr(ri,{Data:()=>ei});module.exports=Jr(ri);n();var M=f(require("react")),He=f(require("classnames"));n();var Pt=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Pt));var J={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};n();n();var me=f(require("react"));n();var ye=f(require("react")),ui=(0,ye.createContext)({});n();n();var z=f(require("react")),_n=require("@terradharitri/sdk-dapp/constants/index"),In=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Sn=f(require("bignumber.js")),kn=require("formik");n();n();n();var Ft=require("bech32");n();n();n();var Re=(t,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(t);n();n();var Q=require("@terradharitri/sdk-dapp/types/tokens.types");n();n();var Gt=require("@terradharitri/sdk-dapp/constants"),Bt=require("@terradharitri/sdk-dapp/utils/account/getAccount");n();n();var Dt=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");n();var Ut=require("@terradharitri/sdk-dapp/utils/buildUrlParams");n();var Vt=f(require("anchorme"));n();n();var yr=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ee=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Tr=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),D=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");n();n();n();n();n();n();n();var oe=f(require("react")),zo=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ho=require("formik");n();n();var Ir=require("@terradharitri/sdk-dapp/constants/index"),po=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),mo=f(require("bignumber.js"));n();n();var br=require("@terradharitri/sdk-dapp/constants/index");n();var Mt=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var vr=require("@terradharitri/sdk-dapp/constants/index"),Ot=f(require("bignumber.js"));n();var qt=require("@terradharitri/sdk-dapp/constants/index");n();var $t=require("@terradharitri/sdk-dapp/constants/index");n();n();var pe=require("@terradharitri/sdk-core"),Wt=require("@terradharitri/sdk-dapp/constants/index"),Kt=f(require("bignumber.js"));n();n();var zt=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");n();var Ht=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");n();var jt=f(require("bignumber.js"));n();var to=require("@terradharitri/sdk-dapp/constants/index"),oo=require("@terradharitri/sdk-dapp/utils/smartContracts"),no=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),io=f(require("bignumber.js"));n();var ro=f(require("bignumber.js"));n();n();var eo=f(require("axios"));n();n();n();var Jt=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");n();var Yt=require("@terradharitri/sdk-dapp/constants/index");n();n();n();var te=require("@terradharitri/sdk-dapp/constants/index"),_r=f(require("bignumber.js"));var Cr,wr,Ar,Oe=(0,ee.formatAmount)({input:String((Cr=te.GAS_PRICE)!=null?Cr:1e9),decimals:(wr=te.DECIMALS)!=null?wr:18,showLastNonZeroDecimal:!0,digits:(Ar=te.DIGITS)!=null?Ar:4}),ao=new _r.default(Oe).times(10).toString(10);n();var ve=require("@terradharitri/sdk-dapp/constants/index"),so=f(require("bignumber.js"));n();var co=f(require("bignumber.js"));n();n();var Lr=require("yup");n();var Ee=require("@terradharitri/sdk-dapp/constants/ledger.constants"),Sr=f(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Ce=require("yup"),lo=(0,Ce.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:r}=this.parent;return!(r&&e&&e.length&&!r.ledgerDataActive)}),uo=(0,Ce.string)().test({name:"hashSign",test:function(e){let{ledger:r,isGuarded:o}=this.parent;if(r){let{ledgerWithHashSign:i,ledgerWithGuardians:c}=(0,Sr.default)(r.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ee.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!c)return this.createError({message:`You need at least DharitrI app version ${Ee.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),fo=[lo,uo],Xs=fo.reduce((t,e)=>t.concat(e),(0,Ce.string)());n();var go=require("@terradharitri/sdk-dapp/constants/index"),xo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ho=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),yo=require("yup");n();var Eo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Co=f(require("bignumber.js")),wo=require("yup");n();var To=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),bo=f(require("bignumber.js")),vo=require("yup");n();var Ao=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),_o=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Io=f(require("bignumber.js")),So=require("yup");n();var ko=f(require("bignumber.js")),Lo=require("yup");n();var Po=require("@terradharitri/sdk-dapp/constants/index"),Fo=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),No=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Go=f(require("bignumber.js")),Bo=require("yup");n();var Do=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Uo=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Vo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ro=f(require("bignumber.js")),Mo=require("yup");n();var qo=f(require("bignumber.js")),Oo=require("yup");n();var $o=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Wo=require("yup");n();var Ko=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Zo=require("yup");n();n();var bp=(0,oe.createContext)({});n();n();var U=f(require("react")),sn=require("formik"),cn=f(require("lodash/uniqBy"));n();n();n();var Xo=f(require("axios"));n();n();var jo=f(require("axios"));n();n();var Pr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Yo=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Jo=f(require("axios")),Qo=f(require("lodash/uniqBy"));n();var en=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),rn=f(require("axios"));n();var Fr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),tn=f(require("axios"));n();n();var ne=f(require("react"));var nm=(0,ne.createContext)({});n();n();var Nr=require("react"),on=require("@terradharitri/sdk-dapp/constants/index");var nn=require("@terradharitri/sdk-dapp/types/enums.types");n();var Gm=(0,U.createContext)({});n();n();var Rr=require("@terradharitri/sdk-dapp/constants/index"),An=require("formik");n();n();var Z=f(require("react")),Ur=require("@terradharitri/sdk-dapp/constants/index"),bn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),vn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),En=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Cn=f(require("bignumber.js")),wn=require("formik");n();n();n();n();var pn=f(require("bignumber.js"));n();var mn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ln=f(require("bignumber.js"));n();n();var Dr=require("react"),dn=require("@terradharitri/sdk-dapp/constants/index"),fn=require("@terradharitri/sdk-dapp/utils/smartContracts"),gn=f(require("bignumber.js")),xn=require("formik");n();var Gr=require("react");n();n();var hn=require("@terradharitri/sdk-dapp/constants/index"),yn=f(require("bignumber.js"));var Rl=(0,Z.createContext)({});var gu=(0,z.createContext)({});n();n();var ae=f(require("react")),Ln=require("formik");var Lu=(0,ae.createContext)({});n();n();var se=f(require("react")),Vn=require("formik");n();n();n();var Mr=require("react"),Nn=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Gn=f(require("lodash/uniqBy"));n();n();var Pn=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Fn=require("@terradharitri/sdk-dapp/utils");n();var Un=require("react");n();var Bn=require("react"),Dn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var ad=(0,se.createContext)({});n();n();var Ae=f(require("react")),zn=require("formik");n();n();n();n();n();var Wn=require("react"),Kn=require("@terradharitri/sdk-dapp/utils");n();var On=require("react"),$n=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");n();n();var Rn=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Mn=f(require("axios"));n();var qn=f(require("axios"));var $d=(0,Ae.createContext)({});var Hn=(0,me.createContext)({});function ce(){return(0,me.useContext)(Hn)}n();var Xn=`:root {
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

.dapp-core-component__amountSelect-module__amount {
  display: block;
  position: relative;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper {
  align-items: center;
  background: var(--dapp-form-input-bg);
  border: 1px solid var(--dapp-form-input-bg);
  border-radius: var(--dapp-form-input-border-radius);
  display: flex;
  position: relative;
  padding: 4px;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper.dapp-core-component__amountSelect-module__error {
  border-color: var(--dapp-form-error-color);
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper.dapp-core-component__amountSelect-module__disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__wrapper .dapp-core-component__amountSelect-module__interaction {
  align-items: center;
  bottom: 0;
  display: flex;
  position: absolute;
  right: 4px;
  top: 0;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.dapp-core-component__amountSelect-module__amount .dapp-core-component__amountSelect-module__label label {
  margin: 0;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xn));var qr={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};n();n();n();var A=f(require("react")),Ie=require("@fortawesome/free-solid-svg-icons"),Ze=require("@fortawesome/react-fontawesome"),Or=require("formik");n();n();n();var Ke=f(require("react")),jn=require("@terradharitri/sdk-dapp/constants/index");var _e=()=>{let{formInfo:{isRewaTransaction:t,readonly:e},dataFieldInfo:{isAdvancedModeEnabled:r}}=ce();return r?!1:!t||Re("data",e)};n();var Yn=`.dapp-core-component__styles-module__advanced {
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  top: 0;
  color: var(--dapp-form-label-color);
  transition: all 200ms ease;
  right: 0;
  cursor: pointer;
  position: absolute;
}
.dapp-core-component__styles-module__advanced svg path {
  transition: all 200ms ease;
  fill: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__advanced:hover .dapp-core-component__styles-module__advanced-text {
  color: var(--dapp-form-btn-bg);
}
.dapp-core-component__styles-module__advanced:hover svg path {
  fill: var(--dapp-form-btn-bg);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Yn));var le={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"};var $r=()=>{let{formInfo:{readonly:t,isRewaTransaction:e}}=ce(),{setFieldValue:r,values:o}=(0,Or.useFormikContext)(),[i,c]=(0,A.useState)(!1),[m,u]=(0,A.useState)(!1),d=_e(),x=!i&&!t&&d&&Boolean(o.data),h=()=>{c(!0),r("isAdvancedModeEnabled",!0)},g=()=>{u(!0),setTimeout(()=>{u(!1)},5e3)};return(0,A.useEffect)(()=>{!e&&i&&c(!1)},[e,o.amount]),x?m?A.default.createElement("div",{className:le.advanced,"data-testid":"confirmAdvancedMode",onClick:h},A.default.createElement(Ze.FontAwesomeIcon,{icon:Ie.faCheck,className:"i-icon"}),A.default.createElement("span",{className:le.advancedText},"Confirm")):A.default.createElement("div",{"data-testid":"enableAdvancedMode",className:le.advanced,onClick:g},A.default.createElement(Ze.FontAwesomeIcon,{icon:Ie.faScrewdriverWrench,className:"i-icon"}),A.default.createElement("span",{className:le.advancedText},"Advanced")):null};n();var Qn=`:root {
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
  position: relative;
}
.dapp-core-component__styles-module__data .dapp-core-component__styles-module__wrapper {
  display: flex;
  position: relative;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Qn));var ze={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"};var ei=({className:t})=>{let{dataFieldInfo:{data:e,dataError:r,isDataInvalid:o,onChange:i,onBlur:c}}=ce(),m=_e();return M.default.createElement("div",{className:(0,He.default)(ze.data,t)},M.default.createElement("div",{className:qr.label},M.default.createElement("label",{htmlFor:"data",className:J.label},"Data"),M.default.createElement($r,null)),M.default.createElement("div",{className:ze.wrapper},M.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:m,"data-testid":"data",value:e,onBlur:c,onChange:i,spellCheck:"false",placeholder:"Add transaction data",className:(0,He.default)(J.textarea,{[J.invalid]:o,[J.disabled]:m})})),o&&M.default.createElement("div",{className:J.error,"data-testid":"dataError"},r))};0&&(module.exports={Data});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=Data.js.map
