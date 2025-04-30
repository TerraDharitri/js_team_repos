"use strict";var On=Object.create;var cr=Object.defineProperty;var Vn=Object.getOwnPropertyDescriptor;var Wn=Object.getOwnPropertyNames;var zn=Object.getPrototypeOf,Gn=Object.prototype.hasOwnProperty;var jn=(r,e)=>()=>(r&&(e=r(r=0)),e);var Io=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Mo=(r,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of Wn(e))!Gn.call(r,l)&&l!==o&&cr(r,l,{get:()=>e[l],enumerable:!(n=Vn(e,l))||n.enumerable});return r},Po=(r,e,o)=>(Mo(r,e,"default"),o&&Mo(o,e,"default")),pr=(r,e,o)=>(o=r!=null?On(zn(r)):{},Mo(e||!r||!r.__esModule?cr(o,"default",{value:r,enumerable:!0}):o,r)),$n=r=>Mo(cr({},"__esModule",{value:!0}),r);var Qr=Io(Oo=>{"use strict";ge();Oo.byteLength=Yn;Oo.toByteArray=Xn;Oo.fromByteArray=Jn;var qe=[],xe=[],Hn=typeof Uint8Array!="undefined"?Uint8Array:Array,dr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(eo=0,Xr=dr.length;eo<Xr;++eo)qe[eo]=dr[eo],xe[dr.charCodeAt(eo)]=eo;var eo,Xr;xe["-".charCodeAt(0)]=62;xe["_".charCodeAt(0)]=63;function Kr(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=r.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function Yn(r){var e=Kr(r),o=e[0],n=e[1];return(o+n)*3/4-n}function Zn(r,e,o){return(e+o)*3/4-o}function Xn(r){var e,o=Kr(r),n=o[0],l=o[1],d=new Hn(Zn(r,n,l)),p=0,i=l>0?n-4:n,_;for(_=0;_<i;_+=4)e=xe[r.charCodeAt(_)]<<18|xe[r.charCodeAt(_+1)]<<12|xe[r.charCodeAt(_+2)]<<6|xe[r.charCodeAt(_+3)],d[p++]=e>>16&255,d[p++]=e>>8&255,d[p++]=e&255;return l===2&&(e=xe[r.charCodeAt(_)]<<2|xe[r.charCodeAt(_+1)]>>4,d[p++]=e&255),l===1&&(e=xe[r.charCodeAt(_)]<<10|xe[r.charCodeAt(_+1)]<<4|xe[r.charCodeAt(_+2)]>>2,d[p++]=e>>8&255,d[p++]=e&255),d}function Kn(r){return qe[r>>18&63]+qe[r>>12&63]+qe[r>>6&63]+qe[r&63]}function Qn(r,e,o){for(var n,l=[],d=e;d<o;d+=3)n=(r[d]<<16&16711680)+(r[d+1]<<8&65280)+(r[d+2]&255),l.push(Kn(n));return l.join("")}function Jn(r){for(var e,o=r.length,n=o%3,l=[],d=16383,p=0,i=o-n;p<i;p+=d)l.push(Qn(r,p,p+d>i?i:p+d));return n===1?(e=r[o-1],l.push(qe[e>>2]+qe[e<<4&63]+"==")):n===2&&(e=(r[o-2]<<8)+r[o-1],l.push(qe[e>>10]+qe[e>>4&63]+qe[e<<2&63]+"=")),l.join("")}});var Jr=Io(ir=>{ge();ir.read=function(r,e,o,n,l){var d,p,i=l*8-n-1,_=(1<<i)-1,u=_>>1,g=-7,b=o?l-1:0,w=o?-1:1,k=r[e+b];for(b+=w,d=k&(1<<-g)-1,k>>=-g,g+=i;g>0;d=d*256+r[e+b],b+=w,g-=8);for(p=d&(1<<-g)-1,d>>=-g,g+=n;g>0;p=p*256+r[e+b],b+=w,g-=8);if(d===0)d=1-u;else{if(d===_)return p?NaN:(k?-1:1)*(1/0);p=p+Math.pow(2,n),d=d-u}return(k?-1:1)*p*Math.pow(2,d-n)};ir.write=function(r,e,o,n,l,d){var p,i,_,u=d*8-l-1,g=(1<<u)-1,b=g>>1,w=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=n?0:d-1,y=n?1:-1,S=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,p=g):(p=Math.floor(Math.log(e)/Math.LN2),e*(_=Math.pow(2,-p))<1&&(p--,_*=2),p+b>=1?e+=w/_:e+=w*Math.pow(2,1-b),e*_>=2&&(p++,_/=2),p+b>=g?(i=0,p=g):p+b>=1?(i=(e*_-1)*Math.pow(2,l),p=p+b):(i=e*Math.pow(2,b-1)*Math.pow(2,l),p=0));l>=8;r[o+k]=i&255,k+=y,i/=256,l-=8);for(p=p<<l|i,u+=l;u>0;r[o+k]=p&255,k+=y,p/=256,u-=8);r[o+k-y]|=S*128}});var mt=Io(go=>{"use strict";ge();var sr=Qr(),bo=Jr(),et=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;go.Buffer=h;go.SlowBuffer=aa;go.INSPECT_MAX_BYTES=50;var Vo=2147483647;go.kMaxLength=Vo;h.TYPED_ARRAY_SUPPORT=ea();!h.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ea(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch(o){return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.buffer}});Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(!!h.isBuffer(this))return this.byteOffset}});function De(r){if(r>Vo)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,h.prototype),e}function h(r,e,o){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return fr(r)}return tt(r,e,o)}h.poolSize=8192;function tt(r,e,o){if(typeof r=="string")return ra(r,e);if(ArrayBuffer.isView(r))return ta(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Fe(r,ArrayBuffer)||r&&Fe(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Fe(r,SharedArrayBuffer)||r&&Fe(r.buffer,SharedArrayBuffer)))return _r(r,e,o);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return h.from(n,e,o);var l=na(r);if(l)return l;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return h.from(r[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}h.from=function(r,e,o){return tt(r,e,o)};Object.setPrototypeOf(h.prototype,Uint8Array.prototype);Object.setPrototypeOf(h,Uint8Array);function nt(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function oa(r,e,o){return nt(r),r<=0?De(r):e!==void 0?typeof o=="string"?De(r).fill(e,o):De(r).fill(e):De(r)}h.alloc=function(r,e,o){return oa(r,e,o)};function fr(r){return nt(r),De(r<0?0:vr(r)|0)}h.allocUnsafe=function(r){return fr(r)};h.allocUnsafeSlow=function(r){return fr(r)};function ra(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=at(r,e)|0,n=De(o),l=n.write(r,e);return l!==o&&(n=n.slice(0,l)),n}function mr(r){for(var e=r.length<0?0:vr(r.length)|0,o=De(e),n=0;n<e;n+=1)o[n]=r[n]&255;return o}function ta(r){if(Fe(r,Uint8Array)){var e=new Uint8Array(r);return _r(e.buffer,e.byteOffset,e.byteLength)}return mr(r)}function _r(r,e,o){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(r):o===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,o),Object.setPrototypeOf(n,h.prototype),n}function na(r){if(h.isBuffer(r)){var e=vr(r.length)|0,o=De(e);return o.length===0||r.copy(o,0,0,e),o}if(r.length!==void 0)return typeof r.length!="number"||br(r.length)?De(0):mr(r);if(r.type==="Buffer"&&Array.isArray(r.data))return mr(r.data)}function vr(r){if(r>=Vo)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Vo.toString(16)+" bytes");return r|0}function aa(r){return+r!=r&&(r=0),h.alloc(+r)}h.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==h.prototype};h.compare=function(e,o){if(Fe(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),Fe(o,Uint8Array)&&(o=h.from(o,o.offset,o.byteLength)),!h.isBuffer(e)||!h.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,l=o.length,d=0,p=Math.min(n,l);d<p;++d)if(e[d]!==o[d]){n=e[d],l=o[d];break}return n<l?-1:l<n?1:0};h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};h.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return h.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var l=h.allocUnsafe(o),d=0;for(n=0;n<e.length;++n){var p=e[n];if(Fe(p,Uint8Array))d+p.length>l.length?h.from(p).copy(l,d):Uint8Array.prototype.set.call(l,p,d);else if(h.isBuffer(p))p.copy(l,d);else throw new TypeError('"list" argument must be an Array of Buffers');d+=p.length}return l};function at(r,e){if(h.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Fe(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var o=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var l=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ur(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return st(r).length;default:if(l)return n?-1:ur(r).length;e=(""+e).toLowerCase(),l=!0}}h.byteLength=at;function la(r,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return va(this,e,o);case"utf8":case"utf-8":return ct(this,e,o);case"ascii":return ua(this,e,o);case"latin1":case"binary":return fa(this,e,o);case"base64":return ma(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ba(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}h.prototype._isBuffer=!0;function oo(r,e,o){var n=r[e];r[e]=r[o],r[o]=n}h.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)oo(this,o,o+1);return this};h.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)oo(this,o,o+3),oo(this,o+1,o+2);return this};h.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)oo(this,o,o+7),oo(this,o+1,o+6),oo(this,o+2,o+5),oo(this,o+3,o+4);return this};h.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?ct(this,0,e):la.apply(this,arguments)};h.prototype.toLocaleString=h.prototype.toString;h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:h.compare(this,e)===0};h.prototype.inspect=function(){var e="",o=go.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};et&&(h.prototype[et]=h.prototype.inspect);h.prototype.compare=function(e,o,n,l,d){if(Fe(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),l===void 0&&(l=0),d===void 0&&(d=this.length),o<0||n>e.length||l<0||d>this.length)throw new RangeError("out of range index");if(l>=d&&o>=n)return 0;if(l>=d)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,l>>>=0,d>>>=0,this===e)return 0;for(var p=d-l,i=n-o,_=Math.min(p,i),u=this.slice(l,d),g=e.slice(o,n),b=0;b<_;++b)if(u[b]!==g[b]){p=u[b],i=g[b];break}return p<i?-1:i<p?1:0};function lt(r,e,o,n,l){if(r.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,br(o)&&(o=l?0:r.length-1),o<0&&(o=r.length+o),o>=r.length){if(l)return-1;o=r.length-1}else if(o<0)if(l)o=0;else return-1;if(typeof e=="string"&&(e=h.from(e,n)),h.isBuffer(e))return e.length===0?-1:ot(r,e,o,n,l);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?l?Uint8Array.prototype.indexOf.call(r,e,o):Uint8Array.prototype.lastIndexOf.call(r,e,o):ot(r,[e],o,n,l);throw new TypeError("val must be string, number or Buffer")}function ot(r,e,o,n,l){var d=1,p=r.length,i=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;d=2,p/=2,i/=2,o/=2}function _(k,y){return d===1?k[y]:k.readUInt16BE(y*d)}var u;if(l){var g=-1;for(u=o;u<p;u++)if(_(r,u)===_(e,g===-1?0:u-g)){if(g===-1&&(g=u),u-g+1===i)return g*d}else g!==-1&&(u-=u-g),g=-1}else for(o+i>p&&(o=p-i),u=o;u>=0;u--){for(var b=!0,w=0;w<i;w++)if(_(r,u+w)!==_(e,w)){b=!1;break}if(b)return u}return-1}h.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};h.prototype.indexOf=function(e,o,n){return lt(this,e,o,n,!0)};h.prototype.lastIndexOf=function(e,o,n){return lt(this,e,o,n,!1)};function ca(r,e,o,n){o=Number(o)||0;var l=r.length-o;n?(n=Number(n),n>l&&(n=l)):n=l;var d=e.length;n>d/2&&(n=d/2);for(var p=0;p<n;++p){var i=parseInt(e.substr(p*2,2),16);if(br(i))return p;r[o+p]=i}return p}function pa(r,e,o,n){return Wo(ur(e,r.length-o),r,o,n)}function da(r,e,o,n){return Wo(ya(e),r,o,n)}function ia(r,e,o,n){return Wo(st(e),r,o,n)}function sa(r,e,o,n){return Wo(wa(e,r.length-o),r,o,n)}h.prototype.write=function(e,o,n,l){if(o===void 0)l="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")l=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,l===void 0&&(l="utf8")):(l=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var d=this.length-o;if((n===void 0||n>d)&&(n=d),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");l||(l="utf8");for(var p=!1;;)switch(l){case"hex":return ca(this,e,o,n);case"utf8":case"utf-8":return pa(this,e,o,n);case"ascii":case"latin1":case"binary":return da(this,e,o,n);case"base64":return ia(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return sa(this,e,o,n);default:if(p)throw new TypeError("Unknown encoding: "+l);l=(""+l).toLowerCase(),p=!0}};h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ma(r,e,o){return e===0&&o===r.length?sr.fromByteArray(r):sr.fromByteArray(r.slice(e,o))}function ct(r,e,o){o=Math.min(r.length,o);for(var n=[],l=e;l<o;){var d=r[l],p=null,i=d>239?4:d>223?3:d>191?2:1;if(l+i<=o){var _,u,g,b;switch(i){case 1:d<128&&(p=d);break;case 2:_=r[l+1],(_&192)===128&&(b=(d&31)<<6|_&63,b>127&&(p=b));break;case 3:_=r[l+1],u=r[l+2],(_&192)===128&&(u&192)===128&&(b=(d&15)<<12|(_&63)<<6|u&63,b>2047&&(b<55296||b>57343)&&(p=b));break;case 4:_=r[l+1],u=r[l+2],g=r[l+3],(_&192)===128&&(u&192)===128&&(g&192)===128&&(b=(d&15)<<18|(_&63)<<12|(u&63)<<6|g&63,b>65535&&b<1114112&&(p=b))}}p===null?(p=65533,i=1):p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p),l+=i}return _a(n)}var rt=4096;function _a(r){var e=r.length;if(e<=rt)return String.fromCharCode.apply(String,r);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,r.slice(n,n+=rt));return o}function ua(r,e,o){var n="";o=Math.min(r.length,o);for(var l=e;l<o;++l)n+=String.fromCharCode(r[l]&127);return n}function fa(r,e,o){var n="";o=Math.min(r.length,o);for(var l=e;l<o;++l)n+=String.fromCharCode(r[l]);return n}function va(r,e,o){var n=r.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var l="",d=e;d<o;++d)l+=xa[r[d]];return l}function ba(r,e,o){for(var n=r.slice(e,o),l="",d=0;d<n.length-1;d+=2)l+=String.fromCharCode(n[d]+n[d+1]*256);return l}h.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var l=this.subarray(e,o);return Object.setPrototypeOf(l,h.prototype),l};function J(r,e,o){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>o)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||J(e,o,this.length);for(var l=this[e],d=1,p=0;++p<o&&(d*=256);)l+=this[e+p]*d;return l};h.prototype.readUintBE=h.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||J(e,o,this.length);for(var l=this[e+--o],d=1;o>0&&(d*=256);)l+=this[e+--o]*d;return l};h.prototype.readUint8=h.prototype.readUInt8=function(e,o){return e=e>>>0,o||J(e,1,this.length),this[e]};h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||J(e,2,this.length),this[e]|this[e+1]<<8};h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||J(e,2,this.length),this[e]<<8|this[e+1]};h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||J(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||J(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};h.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||J(e,o,this.length);for(var l=this[e],d=1,p=0;++p<o&&(d*=256);)l+=this[e+p]*d;return d*=128,l>=d&&(l-=Math.pow(2,8*o)),l};h.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||J(e,o,this.length);for(var l=o,d=1,p=this[e+--l];l>0&&(d*=256);)p+=this[e+--l]*d;return d*=128,p>=d&&(p-=Math.pow(2,8*o)),p};h.prototype.readInt8=function(e,o){return e=e>>>0,o||J(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};h.prototype.readInt16LE=function(e,o){e=e>>>0,o||J(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};h.prototype.readInt16BE=function(e,o){e=e>>>0,o||J(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};h.prototype.readInt32LE=function(e,o){return e=e>>>0,o||J(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};h.prototype.readInt32BE=function(e,o){return e=e>>>0,o||J(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};h.prototype.readFloatLE=function(e,o){return e=e>>>0,o||J(e,4,this.length),bo.read(this,e,!0,23,4)};h.prototype.readFloatBE=function(e,o){return e=e>>>0,o||J(e,4,this.length),bo.read(this,e,!1,23,4)};h.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||J(e,8,this.length),bo.read(this,e,!0,52,8)};h.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||J(e,8,this.length),bo.read(this,e,!1,52,8)};function be(r,e,o,n,l,d){if(!h.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>l||e<d)throw new RangeError('"value" argument is out of bounds');if(o+n>r.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,o,n,l){if(e=+e,o=o>>>0,n=n>>>0,!l){var d=Math.pow(2,8*n)-1;be(this,e,o,n,d,0)}var p=1,i=0;for(this[o]=e&255;++i<n&&(p*=256);)this[o+i]=e/p&255;return o+n};h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,o,n,l){if(e=+e,o=o>>>0,n=n>>>0,!l){var d=Math.pow(2,8*n)-1;be(this,e,o,n,d,0)}var p=n-1,i=1;for(this[o+p]=e&255;--p>=0&&(i*=256);)this[o+p]=e/i&255;return o+n};h.prototype.writeUint8=h.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,1,255,0),this[o]=e&255,o+1};h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};h.prototype.writeIntLE=function(e,o,n,l){if(e=+e,o=o>>>0,!l){var d=Math.pow(2,8*n-1);be(this,e,o,n,d-1,-d)}var p=0,i=1,_=0;for(this[o]=e&255;++p<n&&(i*=256);)e<0&&_===0&&this[o+p-1]!==0&&(_=1),this[o+p]=(e/i>>0)-_&255;return o+n};h.prototype.writeIntBE=function(e,o,n,l){if(e=+e,o=o>>>0,!l){var d=Math.pow(2,8*n-1);be(this,e,o,n,d-1,-d)}var p=n-1,i=1,_=0;for(this[o+p]=e&255;--p>=0&&(i*=256);)e<0&&_===0&&this[o+p+1]!==0&&(_=1),this[o+p]=(e/i>>0)-_&255;return o+n};h.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};h.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};h.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};h.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};h.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||be(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function pt(r,e,o,n,l,d){if(o+n>r.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function dt(r,e,o,n,l){return e=+e,o=o>>>0,l||pt(r,e,o,4,34028234663852886e22,-34028234663852886e22),bo.write(r,e,o,n,23,4),o+4}h.prototype.writeFloatLE=function(e,o,n){return dt(this,e,o,!0,n)};h.prototype.writeFloatBE=function(e,o,n){return dt(this,e,o,!1,n)};function it(r,e,o,n,l){return e=+e,o=o>>>0,l||pt(r,e,o,8,17976931348623157e292,-17976931348623157e292),bo.write(r,e,o,n,52,8),o+8}h.prototype.writeDoubleLE=function(e,o,n){return it(this,e,o,!0,n)};h.prototype.writeDoubleBE=function(e,o,n){return it(this,e,o,!1,n)};h.prototype.copy=function(e,o,n,l){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!l&&l!==0&&(l=this.length),o>=e.length&&(o=e.length),o||(o=0),l>0&&l<n&&(l=n),l===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(l<0)throw new RangeError("sourceEnd out of bounds");l>this.length&&(l=this.length),e.length-o<l-n&&(l=e.length-o+n);var d=l-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,l):Uint8Array.prototype.set.call(e,this.subarray(n,l),o),d};h.prototype.fill=function(e,o,n,l){if(typeof e=="string"){if(typeof o=="string"?(l=o,o=0,n=this.length):typeof n=="string"&&(l=n,n=this.length),l!==void 0&&typeof l!="string")throw new TypeError("encoding must be a string");if(typeof l=="string"&&!h.isEncoding(l))throw new TypeError("Unknown encoding: "+l);if(e.length===1){var d=e.charCodeAt(0);(l==="utf8"&&d<128||l==="latin1")&&(e=d)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<n;++p)this[p]=e;else{var i=h.isBuffer(e)?e:h.from(e,l),_=i.length;if(_===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<n-o;++p)this[p+o]=i[p%_]}return this};var ga=/[^+/0-9A-Za-z-_]/g;function ha(r){if(r=r.split("=")[0],r=r.trim().replace(ga,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function ur(r,e){e=e||1/0;for(var o,n=r.length,l=null,d=[],p=0;p<n;++p){if(o=r.charCodeAt(p),o>55295&&o<57344){if(!l){if(o>56319){(e-=3)>-1&&d.push(239,191,189);continue}else if(p+1===n){(e-=3)>-1&&d.push(239,191,189);continue}l=o;continue}if(o<56320){(e-=3)>-1&&d.push(239,191,189),l=o;continue}o=(l-55296<<10|o-56320)+65536}else l&&(e-=3)>-1&&d.push(239,191,189);if(l=null,o<128){if((e-=1)<0)break;d.push(o)}else if(o<2048){if((e-=2)<0)break;d.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;d.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;d.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return d}function ya(r){for(var e=[],o=0;o<r.length;++o)e.push(r.charCodeAt(o)&255);return e}function wa(r,e){for(var o,n,l,d=[],p=0;p<r.length&&!((e-=2)<0);++p)o=r.charCodeAt(p),n=o>>8,l=o%256,d.push(l),d.push(n);return d}function st(r){return sr.toByteArray(ha(r))}function Wo(r,e,o,n){for(var l=0;l<n&&!(l+o>=e.length||l>=r.length);++l)e[l+o]=r[l];return l}function Fe(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function br(r){return r!==r}var xa=function(){for(var r="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,l=0;l<16;++l)e[n+l]=r[o]+r[l];return e}()});var bt=Io((Wi,vt)=>{ge();var $=vt.exports={},Be,Le;function gr(){throw new Error("setTimeout has not been defined")}function hr(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Be=setTimeout:Be=gr}catch(r){Be=gr}try{typeof clearTimeout=="function"?Le=clearTimeout:Le=hr}catch(r){Le=hr}})();function _t(r){if(Be===setTimeout)return setTimeout(r,0);if((Be===gr||!Be)&&setTimeout)return Be=setTimeout,setTimeout(r,0);try{return Be(r,0)}catch(e){try{return Be.call(null,r,0)}catch(o){return Be.call(this,r,0)}}}function ka(r){if(Le===clearTimeout)return clearTimeout(r);if((Le===hr||!Le)&&clearTimeout)return Le=clearTimeout,clearTimeout(r);try{return Le(r)}catch(e){try{return Le.call(null,r)}catch(o){return Le.call(this,r)}}}var Re=[],ho=!1,ro,zo=-1;function Sa(){!ho||!ro||(ho=!1,ro.length?Re=ro.concat(Re):zo=-1,Re.length&&ut())}function ut(){if(!ho){var r=_t(Sa);ho=!0;for(var e=Re.length;e;){for(ro=Re,Re=[];++zo<e;)ro&&ro[zo].run();zo=-1,e=Re.length}ro=null,ho=!1,ka(r)}}$.nextTick=function(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];Re.push(new ft(r,e)),Re.length===1&&!ho&&_t(ut)};function ft(r,e){this.fun=r,this.array=e}ft.prototype.run=function(){this.fun.apply(null,this.array)};$.title="browser";$.browser=!0;$.env={};$.argv=[];$.version="";$.versions={};function Me(){}$.on=Me;$.addListener=Me;$.once=Me;$.off=Me;$.removeListener=Me;$.removeAllListeners=Me;$.emit=Me;$.prependListener=Me;$.prependOnceListener=Me;$.listeners=function(r){return[]};$.binding=function(r){throw new Error("process.binding is not supported")};$.cwd=function(){return"/"};$.chdir=function(r){throw new Error("process.chdir is not supported")};$.umask=function(){return 0}});var fo,vo,zi,ge=jn(()=>{fo=pr(mt()),vo=pr(bt()),zi=function(r){function e(){var n=this||self;return delete r.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var Ln=Io((c_,Bn)=>{"use strict";ge();var Ea=Object.create,Fo=Object.defineProperty,Ia=Object.defineProperties,Ta=Object.getOwnPropertyDescriptor,Na=Object.getOwnPropertyDescriptors,Aa=Object.getOwnPropertyNames,Jo=Object.getOwnPropertySymbols,Ca=Object.getPrototypeOf,Vr=Object.prototype.hasOwnProperty,on=Object.prototype.propertyIsEnumerable,gt=(r,e,o)=>e in r?Fo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,U=(r,e)=>{for(var o in e||(e={}))Vr.call(e,o)&&gt(r,o,e[o]);if(Jo)for(var o of Jo(e))on.call(e,o)&&gt(r,o,e[o]);return r},ee=(r,e)=>Ia(r,Na(e)),rn=(r,e)=>{var o={};for(var n in r)Vr.call(r,n)&&e.indexOf(n)<0&&(o[n]=r[n]);if(r!=null&&Jo)for(var n of Jo(r))e.indexOf(n)<0&&on.call(r,n)&&(o[n]=r[n]);return o},Wr=(r,e)=>()=>(r&&(e=r(r=0)),e),or=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),rr=(r,e)=>{for(var o in e)Fo(r,o,{get:e[o],enumerable:!0})},tn=(r,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of Aa(e))!Vr.call(r,l)&&l!==o&&Fo(r,l,{get:()=>e[l],enumerable:!(n=Ta(e,l))||n.enumerable});return r},f=(r,e,o)=>(o=r!=null?Ea(Ca(r)):{},tn(e||!r||!r.__esModule?Fo(o,"default",{value:r,enumerable:!0}):o,r)),Eo=r=>tn(Fo({},"__esModule",{value:!0}),r),Qe=(r,e,o)=>new Promise((n,l)=>{var d=_=>{try{i(o.next(_))}catch(u){l(u)}},p=_=>{try{i(o.throw(_))}catch(u){l(u)}},i=_=>_.done?n(_.value):Promise.resolve(_.value).then(d,p);i((o=o.apply(r,e)).next())}),qa=or(r=>{"use strict";s(),r.byteLength=_,r.toByteArray=g,r.fromByteArray=k;var e=[],o=[],n=typeof Uint8Array!="undefined"?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(d=0,p=l.length;d<p;++d)e[d]=l[d],o[l.charCodeAt(d)]=d;var d,p;o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63;function i(y){var S=y.length;if(S%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var E=y.indexOf("=");E===-1&&(E=S);var I=E===S?0:4-E%4;return[E,I]}function _(y){var S=i(y),E=S[0],I=S[1];return(E+I)*3/4-I}function u(y,S,E){return(S+E)*3/4-E}function g(y){var S,E=i(y),I=E[0],T=E[1],A=new n(u(y,I,T)),D=0,R=T>0?I-4:I,P;for(P=0;P<R;P+=4)S=o[y.charCodeAt(P)]<<18|o[y.charCodeAt(P+1)]<<12|o[y.charCodeAt(P+2)]<<6|o[y.charCodeAt(P+3)],A[D++]=S>>16&255,A[D++]=S>>8&255,A[D++]=S&255;return T===2&&(S=o[y.charCodeAt(P)]<<2|o[y.charCodeAt(P+1)]>>4,A[D++]=S&255),T===1&&(S=o[y.charCodeAt(P)]<<10|o[y.charCodeAt(P+1)]<<4|o[y.charCodeAt(P+2)]>>2,A[D++]=S>>8&255,A[D++]=S&255),A}function b(y){return e[y>>18&63]+e[y>>12&63]+e[y>>6&63]+e[y&63]}function w(y,S,E){for(var I,T=[],A=S;A<E;A+=3)I=(y[A]<<16&16711680)+(y[A+1]<<8&65280)+(y[A+2]&255),T.push(b(I));return T.join("")}function k(y){for(var S,E=y.length,I=E%3,T=[],A=16383,D=0,R=E-I;D<R;D+=A)T.push(w(y,D,D+A>R?R:D+A));return I===1?(S=y[E-1],T.push(e[S>>2]+e[S<<4&63]+"==")):I===2&&(S=(y[E-2]<<8)+y[E-1],T.push(e[S>>10]+e[S>>4&63]+e[S<<2&63]+"=")),T.join("")}}),Fa=or(r=>{s(),r.read=function(e,o,n,l,d){var p,i,_=d*8-l-1,u=(1<<_)-1,g=u>>1,b=-7,w=n?d-1:0,k=n?-1:1,y=e[o+w];for(w+=k,p=y&(1<<-b)-1,y>>=-b,b+=_;b>0;p=p*256+e[o+w],w+=k,b-=8);for(i=p&(1<<-b)-1,p>>=-b,b+=l;b>0;i=i*256+e[o+w],w+=k,b-=8);if(p===0)p=1-g;else{if(p===u)return i?NaN:(y?-1:1)*(1/0);i=i+Math.pow(2,l),p=p-g}return(y?-1:1)*i*Math.pow(2,p-l)},r.write=function(e,o,n,l,d,p){var i,_,u,g=p*8-d-1,b=(1<<g)-1,w=b>>1,k=d===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=l?0:p-1,S=l?1:-1,E=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(_=isNaN(o)?1:0,i=b):(i=Math.floor(Math.log(o)/Math.LN2),o*(u=Math.pow(2,-i))<1&&(i--,u*=2),i+w>=1?o+=k/u:o+=k*Math.pow(2,1-w),o*u>=2&&(i++,u/=2),i+w>=b?(_=0,i=b):i+w>=1?(_=(o*u-1)*Math.pow(2,d),i=i+w):(_=o*Math.pow(2,w-1)*Math.pow(2,d),i=0));d>=8;e[n+y]=_&255,y+=S,_/=256,d-=8);for(i=i<<d|_,g+=d;g>0;e[n+y]=i&255,y+=S,i/=256,g-=8);e[n+y-S]|=E*128}}),Ba=or(r=>{"use strict";s();var e=qa(),o=Fa(),n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=i,r.SlowBuffer=T,r.INSPECT_MAX_BYTES=50;var l=2147483647;r.kMaxLength=l,i.TYPED_ARRAY_SUPPORT=d(),!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function d(){try{var t=new Uint8Array(1),a={foo:function(){return 42}};return Object.setPrototypeOf(a,Uint8Array.prototype),Object.setPrototypeOf(t,a),t.foo()===42}catch(c){return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.buffer}}),Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.byteOffset}});function p(t){if(t>l)throw new RangeError('The value "'+t+'" is invalid for option "size"');var a=new Uint8Array(t);return Object.setPrototypeOf(a,i.prototype),a}function i(t,a,c){if(typeof t=="number"){if(typeof a=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return b(t)}return _(t,a,c)}i.poolSize=8192;function _(t,a,c){if(typeof t=="string")return w(t,a);if(ArrayBuffer.isView(t))return y(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Ce(t,ArrayBuffer)||t&&Ce(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(Ce(t,SharedArrayBuffer)||t&&Ce(t.buffer,SharedArrayBuffer)))return S(t,a,c);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var m=t.valueOf&&t.valueOf();if(m!=null&&m!==t)return i.from(m,a,c);var v=E(t);if(v)return v;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return i.from(t[Symbol.toPrimitive]("string"),a,c);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}i.from=function(t,a,c){return _(t,a,c)},Object.setPrototypeOf(i.prototype,Uint8Array.prototype),Object.setPrototypeOf(i,Uint8Array);function u(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function g(t,a,c){return u(t),t<=0?p(t):a!==void 0?typeof c=="string"?p(t).fill(a,c):p(t).fill(a):p(t)}i.alloc=function(t,a,c){return g(t,a,c)};function b(t){return u(t),p(t<0?0:I(t)|0)}i.allocUnsafe=function(t){return b(t)},i.allocUnsafeSlow=function(t){return b(t)};function w(t,a){if((typeof a!="string"||a==="")&&(a="utf8"),!i.isEncoding(a))throw new TypeError("Unknown encoding: "+a);var c=A(t,a)|0,m=p(c),v=m.write(t,a);return v!==c&&(m=m.slice(0,v)),m}function k(t){for(var a=t.length<0?0:I(t.length)|0,c=p(a),m=0;m<a;m+=1)c[m]=t[m]&255;return c}function y(t){if(Ce(t,Uint8Array)){var a=new Uint8Array(t);return S(a.buffer,a.byteOffset,a.byteLength)}return k(t)}function S(t,a,c){if(a<0||t.byteLength<a)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<a+(c||0))throw new RangeError('"length" is outside of buffer bounds');var m;return a===void 0&&c===void 0?m=new Uint8Array(t):c===void 0?m=new Uint8Array(t,a):m=new Uint8Array(t,a,c),Object.setPrototypeOf(m,i.prototype),m}function E(t){if(i.isBuffer(t)){var a=I(t.length)|0,c=p(a);return c.length===0||t.copy(c,0,0,a),c}if(t.length!==void 0)return typeof t.length!="number"||lr(t.length)?p(0):k(t);if(t.type==="Buffer"&&Array.isArray(t.data))return k(t.data)}function I(t){if(t>=l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");return t|0}function T(t){return+t!=t&&(t=0),i.alloc(+t)}i.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==i.prototype},i.compare=function(t,a){if(Ce(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),Ce(a,Uint8Array)&&(a=i.from(a,a.offset,a.byteLength)),!i.isBuffer(t)||!i.isBuffer(a))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===a)return 0;for(var c=t.length,m=a.length,v=0,x=Math.min(c,m);v<x;++v)if(t[v]!==a[v]){c=t[v],m=a[v];break}return c<m?-1:m<c?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,a){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return i.alloc(0);var c;if(a===void 0)for(a=0,c=0;c<t.length;++c)a+=t[c].length;var m=i.allocUnsafe(a),v=0;for(c=0;c<t.length;++c){var x=t[c];if(Ce(x,Uint8Array))v+x.length>m.length?i.from(x).copy(m,v):Uint8Array.prototype.set.call(m,x,v);else if(i.isBuffer(x))x.copy(m,v);else throw new TypeError('"list" argument must be an Array of Buffers');v+=x.length}return m};function A(t,a){if(i.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Ce(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var c=t.length,m=arguments.length>2&&arguments[2]===!0;if(!m&&c===0)return 0;for(var v=!1;;)switch(a){case"ascii":case"latin1":case"binary":return c;case"utf8":case"utf-8":return ar(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c*2;case"hex":return c>>>1;case"base64":return Hr(t).length;default:if(v)return m?-1:ar(t).length;a=(""+a).toLowerCase(),v=!0}}i.byteLength=A;function D(t,a,c){var m=!1;if((a===void 0||a<0)&&(a=0),a>this.length||((c===void 0||c>this.length)&&(c=this.length),c<=0)||(c>>>=0,a>>>=0,c<=a))return"";for(t||(t="utf8");;)switch(t){case"hex":return se(this,a,c);case"utf8":case"utf-8":return M(this,a,c);case"ascii":return ae(this,a,c);case"latin1":case"binary":return Se(this,a,c);case"base64":return L(this,a,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return le(this,a,c);default:if(m)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),m=!0}}i.prototype._isBuffer=!0;function R(t,a,c){var m=t[a];t[a]=t[c],t[c]=m}i.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var a=0;a<t;a+=2)R(this,a,a+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var a=0;a<t;a+=4)R(this,a,a+3),R(this,a+1,a+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var a=0;a<t;a+=8)R(this,a,a+7),R(this,a+1,a+6),R(this,a+2,a+5),R(this,a+3,a+4);return this},i.prototype.toString=function(){var t=this.length;return t===0?"":arguments.length===0?M(this,0,t):D.apply(this,arguments)},i.prototype.toLocaleString=i.prototype.toString,i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:i.compare(this,t)===0},i.prototype.inspect=function(){var t="",a=r.INSPECT_MAX_BYTES;return t=this.toString("hex",0,a).replace(/(.{2})/g,"$1 ").trim(),this.length>a&&(t+=" ... "),"<Buffer "+t+">"},n&&(i.prototype[n]=i.prototype.inspect),i.prototype.compare=function(t,a,c,m,v){if(Ce(t,Uint8Array)&&(t=i.from(t,t.offset,t.byteLength)),!i.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(a===void 0&&(a=0),c===void 0&&(c=t?t.length:0),m===void 0&&(m=0),v===void 0&&(v=this.length),a<0||c>t.length||m<0||v>this.length)throw new RangeError("out of range index");if(m>=v&&a>=c)return 0;if(m>=v)return-1;if(a>=c)return 1;if(a>>>=0,c>>>=0,m>>>=0,v>>>=0,this===t)return 0;for(var x=v-m,N=c-a,V=Math.min(x,N),oe=this.slice(m,v),W=t.slice(a,c),H=0;H<V;++H)if(oe[H]!==W[H]){x=oe[H],N=W[H];break}return x<N?-1:N<x?1:0};function P(t,a,c,m,v){if(t.length===0)return-1;if(typeof c=="string"?(m=c,c=0):c>2147483647?c=2147483647:c<-2147483648&&(c=-2147483648),c=+c,lr(c)&&(c=v?0:t.length-1),c<0&&(c=t.length+c),c>=t.length){if(v)return-1;c=t.length-1}else if(c<0)if(v)c=0;else return-1;if(typeof a=="string"&&(a=i.from(a,m)),i.isBuffer(a))return a.length===0?-1:fe(t,a,c,m,v);if(typeof a=="number")return a=a&255,typeof Uint8Array.prototype.indexOf=="function"?v?Uint8Array.prototype.indexOf.call(t,a,c):Uint8Array.prototype.lastIndexOf.call(t,a,c):fe(t,[a],c,m,v);throw new TypeError("val must be string, number or Buffer")}function fe(t,a,c,m,v){var x=1,N=t.length,V=a.length;if(m!==void 0&&(m=String(m).toLowerCase(),m==="ucs2"||m==="ucs-2"||m==="utf16le"||m==="utf-16le")){if(t.length<2||a.length<2)return-1;x=2,N/=2,V/=2,c/=2}function oe(Yr,Zr){return x===1?Yr[Zr]:Yr.readUInt16BE(Zr*x)}var W;if(v){var H=-1;for(W=c;W<N;W++)if(oe(t,W)===oe(a,H===-1?0:W-H)){if(H===-1&&(H=W),W-H+1===V)return H*x}else H!==-1&&(W-=W-H),H=-1}else for(c+V>N&&(c=N-V),W=c;W>=0;W--){for(var me=!0,Ro=0;Ro<V;Ro++)if(oe(t,W+Ro)!==oe(a,Ro)){me=!1;break}if(me)return W}return-1}i.prototype.includes=function(t,a,c){return this.indexOf(t,a,c)!==-1},i.prototype.indexOf=function(t,a,c){return P(this,t,a,c,!0)},i.prototype.lastIndexOf=function(t,a,c){return P(this,t,a,c,!1)};function G(t,a,c,m){c=Number(c)||0;var v=t.length-c;m?(m=Number(m),m>v&&(m=v)):m=v;var x=a.length;m>x/2&&(m=x/2);for(var N=0;N<m;++N){var V=parseInt(a.substr(N*2,2),16);if(lr(V))return N;t[c+N]=V}return N}function K(t,a,c,m){return Do(ar(a,t.length-c),t,c,m)}function z(t,a,c,m){return Do(Rn(a),t,c,m)}function ve(t,a,c,m){return Do(Hr(a),t,c,m)}function ie(t,a,c,m){return Do(Mn(a,t.length-c),t,c,m)}i.prototype.write=function(t,a,c,m){if(a===void 0)m="utf8",c=this.length,a=0;else if(c===void 0&&typeof a=="string")m=a,c=this.length,a=0;else if(isFinite(a))a=a>>>0,isFinite(c)?(c=c>>>0,m===void 0&&(m="utf8")):(m=c,c=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var v=this.length-a;if((c===void 0||c>v)&&(c=v),t.length>0&&(c<0||a<0)||a>this.length)throw new RangeError("Attempt to write outside buffer bounds");m||(m="utf8");for(var x=!1;;)switch(m){case"hex":return G(this,t,a,c);case"utf8":case"utf-8":return K(this,t,a,c);case"ascii":case"latin1":case"binary":return z(this,t,a,c);case"base64":return ve(this,t,a,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,t,a,c);default:if(x)throw new TypeError("Unknown encoding: "+m);m=(""+m).toLowerCase(),x=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function L(t,a,c){return a===0&&c===t.length?e.fromByteArray(t):e.fromByteArray(t.slice(a,c))}function M(t,a,c){c=Math.min(t.length,c);for(var m=[],v=a;v<c;){var x=t[v],N=null,V=x>239?4:x>223?3:x>191?2:1;if(v+V<=c){var oe,W,H,me;switch(V){case 1:x<128&&(N=x);break;case 2:oe=t[v+1],(oe&192)===128&&(me=(x&31)<<6|oe&63,me>127&&(N=me));break;case 3:oe=t[v+1],W=t[v+2],(oe&192)===128&&(W&192)===128&&(me=(x&15)<<12|(oe&63)<<6|W&63,me>2047&&(me<55296||me>57343)&&(N=me));break;case 4:oe=t[v+1],W=t[v+2],H=t[v+3],(oe&192)===128&&(W&192)===128&&(H&192)===128&&(me=(x&15)<<18|(oe&63)<<12|(W&63)<<6|H&63,me>65535&&me<1114112&&(N=me))}}N===null?(N=65533,V=1):N>65535&&(N-=65536,m.push(N>>>10&1023|55296),N=56320|N&1023),m.push(N),v+=V}return ne(m)}var O=4096;function ne(t){var a=t.length;if(a<=O)return String.fromCharCode.apply(String,t);for(var c="",m=0;m<a;)c+=String.fromCharCode.apply(String,t.slice(m,m+=O));return c}function ae(t,a,c){var m="";c=Math.min(t.length,c);for(var v=a;v<c;++v)m+=String.fromCharCode(t[v]&127);return m}function Se(t,a,c){var m="";c=Math.min(t.length,c);for(var v=a;v<c;++v)m+=String.fromCharCode(t[v]);return m}function se(t,a,c){var m=t.length;(!a||a<0)&&(a=0),(!c||c<0||c>m)&&(c=m);for(var v="",x=a;x<c;++x)v+=Pn[t[x]];return v}function le(t,a,c){for(var m=t.slice(a,c),v="",x=0;x<m.length-1;x+=2)v+=String.fromCharCode(m[x]+m[x+1]*256);return v}i.prototype.slice=function(t,a){var c=this.length;t=~~t,a=a===void 0?c:~~a,t<0?(t+=c,t<0&&(t=0)):t>c&&(t=c),a<0?(a+=c,a<0&&(a=0)):a>c&&(a=c),a<t&&(a=t);var m=this.subarray(t,a);return Object.setPrototypeOf(m,i.prototype),m};function B(t,a,c){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+a>c)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(t,a,c){t=t>>>0,a=a>>>0,c||B(t,a,this.length);for(var m=this[t],v=1,x=0;++x<a&&(v*=256);)m+=this[t+x]*v;return m},i.prototype.readUintBE=i.prototype.readUIntBE=function(t,a,c){t=t>>>0,a=a>>>0,c||B(t,a,this.length);for(var m=this[t+--a],v=1;a>0&&(v*=256);)m+=this[t+--a]*v;return m},i.prototype.readUint8=i.prototype.readUInt8=function(t,a){return t=t>>>0,a||B(t,1,this.length),this[t]},i.prototype.readUint16LE=i.prototype.readUInt16LE=function(t,a){return t=t>>>0,a||B(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUint16BE=i.prototype.readUInt16BE=function(t,a){return t=t>>>0,a||B(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUint32LE=i.prototype.readUInt32LE=function(t,a){return t=t>>>0,a||B(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},i.prototype.readUint32BE=i.prototype.readUInt32BE=function(t,a){return t=t>>>0,a||B(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,a,c){t=t>>>0,a=a>>>0,c||B(t,a,this.length);for(var m=this[t],v=1,x=0;++x<a&&(v*=256);)m+=this[t+x]*v;return v*=128,m>=v&&(m-=Math.pow(2,8*a)),m},i.prototype.readIntBE=function(t,a,c){t=t>>>0,a=a>>>0,c||B(t,a,this.length);for(var m=a,v=1,x=this[t+--m];m>0&&(v*=256);)x+=this[t+--m]*v;return v*=128,x>=v&&(x-=Math.pow(2,8*a)),x},i.prototype.readInt8=function(t,a){return t=t>>>0,a||B(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},i.prototype.readInt16LE=function(t,a){t=t>>>0,a||B(t,2,this.length);var c=this[t]|this[t+1]<<8;return c&32768?c|4294901760:c},i.prototype.readInt16BE=function(t,a){t=t>>>0,a||B(t,2,this.length);var c=this[t+1]|this[t]<<8;return c&32768?c|4294901760:c},i.prototype.readInt32LE=function(t,a){return t=t>>>0,a||B(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,a){return t=t>>>0,a||B(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,a){return t=t>>>0,a||B(t,4,this.length),o.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,a){return t=t>>>0,a||B(t,4,this.length),o.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,a){return t=t>>>0,a||B(t,8,this.length),o.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,a){return t=t>>>0,a||B(t,8,this.length),o.read(this,t,!1,52,8)};function j(t,a,c,m,v,x){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(a>v||a<x)throw new RangeError('"value" argument is out of bounds');if(c+m>t.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(t,a,c,m){if(t=+t,a=a>>>0,c=c>>>0,!m){var v=Math.pow(2,8*c)-1;j(this,t,a,c,v,0)}var x=1,N=0;for(this[a]=t&255;++N<c&&(x*=256);)this[a+N]=t/x&255;return a+c},i.prototype.writeUintBE=i.prototype.writeUIntBE=function(t,a,c,m){if(t=+t,a=a>>>0,c=c>>>0,!m){var v=Math.pow(2,8*c)-1;j(this,t,a,c,v,0)}var x=c-1,N=1;for(this[a+x]=t&255;--x>=0&&(N*=256);)this[a+x]=t/N&255;return a+c},i.prototype.writeUint8=i.prototype.writeUInt8=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,1,255,0),this[a]=t&255,a+1},i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,2,65535,0),this[a]=t&255,this[a+1]=t>>>8,a+2},i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,2,65535,0),this[a]=t>>>8,this[a+1]=t&255,a+2},i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,4,4294967295,0),this[a+3]=t>>>24,this[a+2]=t>>>16,this[a+1]=t>>>8,this[a]=t&255,a+4},i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,4,4294967295,0),this[a]=t>>>24,this[a+1]=t>>>16,this[a+2]=t>>>8,this[a+3]=t&255,a+4},i.prototype.writeIntLE=function(t,a,c,m){if(t=+t,a=a>>>0,!m){var v=Math.pow(2,8*c-1);j(this,t,a,c,v-1,-v)}var x=0,N=1,V=0;for(this[a]=t&255;++x<c&&(N*=256);)t<0&&V===0&&this[a+x-1]!==0&&(V=1),this[a+x]=(t/N>>0)-V&255;return a+c},i.prototype.writeIntBE=function(t,a,c,m){if(t=+t,a=a>>>0,!m){var v=Math.pow(2,8*c-1);j(this,t,a,c,v-1,-v)}var x=c-1,N=1,V=0;for(this[a+x]=t&255;--x>=0&&(N*=256);)t<0&&V===0&&this[a+x+1]!==0&&(V=1),this[a+x]=(t/N>>0)-V&255;return a+c},i.prototype.writeInt8=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,1,127,-128),t<0&&(t=255+t+1),this[a]=t&255,a+1},i.prototype.writeInt16LE=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,2,32767,-32768),this[a]=t&255,this[a+1]=t>>>8,a+2},i.prototype.writeInt16BE=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,2,32767,-32768),this[a]=t>>>8,this[a+1]=t&255,a+2},i.prototype.writeInt32LE=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,4,2147483647,-2147483648),this[a]=t&255,this[a+1]=t>>>8,this[a+2]=t>>>16,this[a+3]=t>>>24,a+4},i.prototype.writeInt32BE=function(t,a,c){return t=+t,a=a>>>0,c||j(this,t,a,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[a]=t>>>24,this[a+1]=t>>>16,this[a+2]=t>>>8,this[a+3]=t&255,a+4};function Je(t,a,c,m,v,x){if(c+m>t.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("Index out of range")}function Uo(t,a,c,m,v){return a=+a,c=c>>>0,v||Je(t,a,c,4,34028234663852886e22,-34028234663852886e22),o.write(t,a,c,m,23,4),c+4}i.prototype.writeFloatLE=function(t,a,c){return Uo(this,t,a,!0,c)},i.prototype.writeFloatBE=function(t,a,c){return Uo(this,t,a,!1,c)};function we(t,a,c,m,v){return a=+a,c=c>>>0,v||Je(t,a,c,8,17976931348623157e292,-17976931348623157e292),o.write(t,a,c,m,52,8),c+8}i.prototype.writeDoubleLE=function(t,a,c){return we(this,t,a,!0,c)},i.prototype.writeDoubleBE=function(t,a,c){return we(this,t,a,!1,c)},i.prototype.copy=function(t,a,c,m){if(!i.isBuffer(t))throw new TypeError("argument should be a Buffer");if(c||(c=0),!m&&m!==0&&(m=this.length),a>=t.length&&(a=t.length),a||(a=0),m>0&&m<c&&(m=c),m===c||t.length===0||this.length===0)return 0;if(a<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("Index out of range");if(m<0)throw new RangeError("sourceEnd out of bounds");m>this.length&&(m=this.length),t.length-a<m-c&&(m=t.length-a+c);var v=m-c;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(a,c,m):Uint8Array.prototype.set.call(t,this.subarray(c,m),a),v},i.prototype.fill=function(t,a,c,m){if(typeof t=="string"){if(typeof a=="string"?(m=a,a=0,c=this.length):typeof c=="string"&&(m=c,c=this.length),m!==void 0&&typeof m!="string")throw new TypeError("encoding must be a string");if(typeof m=="string"&&!i.isEncoding(m))throw new TypeError("Unknown encoding: "+m);if(t.length===1){var v=t.charCodeAt(0);(m==="utf8"&&v<128||m==="latin1")&&(t=v)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(a<0||this.length<a||this.length<c)throw new RangeError("Out of range index");if(c<=a)return this;a=a>>>0,c=c===void 0?this.length:c>>>0,t||(t=0);var x;if(typeof t=="number")for(x=a;x<c;++x)this[x]=t;else{var N=i.isBuffer(t)?t:i.from(t,m),V=N.length;if(V===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(x=0;x<c-a;++x)this[x+a]=N[x%V]}return this};var Un=/[^+/0-9A-Za-z-_]/g;function Dn(t){if(t=t.split("=")[0],t=t.trim().replace(Un,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function ar(t,a){a=a||1/0;for(var c,m=t.length,v=null,x=[],N=0;N<m;++N){if(c=t.charCodeAt(N),c>55295&&c<57344){if(!v){if(c>56319){(a-=3)>-1&&x.push(239,191,189);continue}else if(N+1===m){(a-=3)>-1&&x.push(239,191,189);continue}v=c;continue}if(c<56320){(a-=3)>-1&&x.push(239,191,189),v=c;continue}c=(v-55296<<10|c-56320)+65536}else v&&(a-=3)>-1&&x.push(239,191,189);if(v=null,c<128){if((a-=1)<0)break;x.push(c)}else if(c<2048){if((a-=2)<0)break;x.push(c>>6|192,c&63|128)}else if(c<65536){if((a-=3)<0)break;x.push(c>>12|224,c>>6&63|128,c&63|128)}else if(c<1114112){if((a-=4)<0)break;x.push(c>>18|240,c>>12&63|128,c>>6&63|128,c&63|128)}else throw new Error("Invalid code point")}return x}function Rn(t){for(var a=[],c=0;c<t.length;++c)a.push(t.charCodeAt(c)&255);return a}function Mn(t,a){for(var c,m,v,x=[],N=0;N<t.length&&!((a-=2)<0);++N)c=t.charCodeAt(N),m=c>>8,v=c%256,x.push(v),x.push(m);return x}function Hr(t){return e.toByteArray(Dn(t))}function Do(t,a,c,m){for(var v=0;v<m&&!(v+c>=a.length||v>=t.length);++v)a[v+c]=t[v];return v}function Ce(t,a){return t instanceof a||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===a.name}function lr(t){return t!==t}var Pn=function(){for(var t="0123456789abcdef",a=new Array(256),c=0;c<16;++c)for(var m=c*16,v=0;v<16;++v)a[m+v]=t[c]+t[v];return a}()}),La=or((r,e)=>{s();var o=e.exports={},n,l;function d(){throw new Error("setTimeout has not been defined")}function p(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?n=setTimeout:n=d}catch(I){n=d}try{typeof clearTimeout=="function"?l=clearTimeout:l=p}catch(I){l=p}})();function i(I){if(n===setTimeout)return setTimeout(I,0);if((n===d||!n)&&setTimeout)return n=setTimeout,setTimeout(I,0);try{return n(I,0)}catch(T){try{return n.call(null,I,0)}catch(A){return n.call(this,I,0)}}}function _(I){if(l===clearTimeout)return clearTimeout(I);if((l===p||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(I);try{return l(I)}catch(T){try{return l.call(null,I)}catch(A){return l.call(this,I)}}}var u=[],g=!1,b,w=-1;function k(){!g||!b||(g=!1,b.length?u=b.concat(u):w=-1,u.length&&y())}function y(){if(!g){var I=i(k);g=!0;for(var T=u.length;T;){for(b=u,u=[];++w<T;)b&&b[w].run();w=-1,T=u.length}b=null,g=!1,_(I)}}o.nextTick=function(I){var T=new Array(arguments.length-1);if(arguments.length>1)for(var A=1;A<arguments.length;A++)T[A-1]=arguments[A];u.push(new S(I,T)),u.length===1&&!g&&i(y)};function S(I,T){this.fun=I,this.array=T}S.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={};function E(){}o.on=E,o.addListener=E,o.once=E,o.off=E,o.removeListener=E,o.removeAllListeners=E,o.emit=E,o.prependListener=E,o.prependOnceListener=E,o.listeners=function(I){return[]},o.binding=function(I){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(I){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}),nn,Ua,Da,s=Wr(()=>{nn=f(Ba()),Ua=f(La()),Da=function(r){function e(){var n=this||self;return delete r.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)}),Bo={};rr(Bo,{default:()=>an});var Go,ht,an,tr=Wr(()=>{"use strict";s(),Go=f(require("react")),ht=r=>Go.createElement("svg",U({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},r),Go.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),Go.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),an=ht}),ln={};rr(ln,{default:()=>cn});var jo,yt,cn,Ra=Wr(()=>{"use strict";s(),jo=f(require("react")),yt=r=>jo.createElement("svg",U({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},r),jo.createElement("g",null,jo.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),cn=yt}),pn={};rr(pn,{Form:()=>Ri});Bn.exports=Eo(pn);s();var Y=f(require("react")),wt=require("@terradharitri/sdk-core/out"),Ma=f(require("classnames")),Pa=require("formik");s();var Oa=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Oa));var q={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};s();s();var dn=f(require("react"));s();var Va=f(require("react")),ji=(0,Va.createContext)({});s();s();var Wa=f(require("react")),$i=require("@terradharitri/sdk-dapp/constants/index"),Hi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Yi=f(require("bignumber.js")),Zi=require("formik");s();s();s();var Xi=require("bech32");s();s();s();var uo=(r,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(r);s();s();var _o=require("@terradharitri/sdk-dapp/types/tokens.types"),za=r=>!["REWA","DCDT"].includes(r);s();s();var Ga=require("@terradharitri/sdk-dapp/constants"),ja=require("@terradharitri/sdk-dapp/utils/account/getAccount"),$a=r=>Qe(void 0,null,function*(){let e=r.txType==="REWA"?r.amount:Ga.ZERO,o=za(r.txType),n=yield(0,ja.getAccount)(r.receiver),l=n==null?void 0:n.username,d=o?r.senderUsername:l,p=ee(U({},r),{amount:e,receiverUsername:d});return delete p.rawReceiverUsername,p});s();s();var xt=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag"),Ha=({nft:r,skipDescription:e})=>{var o,n;let{name:l,metadata:d,media:p,isNsfw:i,scamInfo:_,verified:u}=r,g="Scam - ",{isSuspicious:b,message:w}=(0,xt.getScamFlag)({verified:u,message:l,isNsfw:i,scamInfo:_,messagePrefix:g});if(!(d!=null&&d.description)||e){let I=b?"placeholder":(o=p==null?void 0:p[0])==null?void 0:o.thumbnailUrl;return{isSuspicious:b,name:l||w,thumbnail:I,description:""}}let{message:k,isSuspicious:y}=(0,xt.getScamFlag)({message:d.description,messagePrefix:g,verified:u}),S=b||y,E=S?"placeholder":(n=p==null?void 0:p[0])==null?void 0:n.thumbnailUrl;return{isSuspicious:S,name:l||w,thumbnail:E,description:k||d.description}};s();var Ki=require("@terradharitri/sdk-dapp/utils/buildUrlParams");s();var yr=f(require("anchorme")),wr=r=>r.toLocaleLowerCase().replace(/[^\x00-\x7F]/g,""),Ya=(r,e)=>{if(e){let o=`[Message hidden due to suspicious content - ${e.info}]`;if(r.length>1e3)return{output:o,stringWithLinks:r,found:!0};let n=wr(r.normalize("NFKC")),l=yr.default.list(n),d=[];if(l.length>0){let p=o;l.forEach((i,_)=>{let{string:u}=i,g="",b="",w=u;for(let k=0;k<p.length;k++){let y=p.slice(k),[S]=yr.default.list(wr(y));S&&u===S.string&&(g=p.substring(0,k))}for(let k=o.length;k>0;k--){let y=p.slice(0,k),[S]=yr.default.list(wr(y));S&&u===S.string&&(b=p.substring(k))}d.push(g),d.push(w),p=b,_===l.length-1&&d.push(b)})}else d.push(r);return{output:o,stringWithLinks:d.join(""),found:!0}}else return{output:r,stringWithLinks:"",found:!1}};s();s();var Qi=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),sn=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Za=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),Ao=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");s();s();s();s();s();s();s();var mn=f(require("react")),Ji=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),es=require("formik");s();s();var os=require("@terradharitri/sdk-dapp/constants/index"),rs=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),ts=f(require("bignumber.js"));s();s();var xr=require("@terradharitri/sdk-dapp/constants/index");function _n({feeLimit:r,rewaPriceInUsd:e}){let o=(0,sn.formatAmount)({input:r,decimals:xr.DECIMALS,digits:xr.DIGITS,showLastNonZeroDecimal:!0});return`\u2248 ${(0,Za.getUsdValue)({amount:o,usd:e,decimals:xr.DIGITS})}`}s();var ns=require("@terradharitri/sdk-dapp/constants/index");s();s();var Xa="Token can only be transfered to one of the following addresses:",Ka="WREWA is not REWA! It can not be sent to exchanges. It can not be staked or delegated. It can not be used as transaction fee.",un="5000000000000000",Co="0",Qa="WREWA-bd4d79";s();var as=require("@terradharitri/sdk-dapp/constants/index"),ls=f(require("bignumber.js"));s();var cs=require("@terradharitri/sdk-dapp/constants/index");s();var ps=require("@terradharitri/sdk-dapp/constants/index");s();s();var yo=require("@terradharitri/sdk-core"),Ja=require("@terradharitri/sdk-dapp/constants/index"),el=f(require("bignumber.js"));function ol({amount:r,data:e,nonce:o,receiver:n,receiverUsername:l,sender:d,senderUsername:p,gasPrice:i,gasLimit:_,chainId:u}){let g=new el.default((0,Ao.parseAmount)(r));return new yo.Transaction({nonce:o,value:yo.TokenPayment.rewaFromBigInteger(g.toString(10)),sender:new yo.Address(d),receiver:new yo.Address(n),gasPrice:parseInt(i),gasLimit:parseInt(_),senderUsername:p,receiverUsername:l,data:new yo.TransactionPayload(e),chainID:u,version:new yo.TransactionVersion(Ja.VERSION)})}s();function rl(r){return isNaN(Number(r))||r===""?(0,Ao.parseAmount)("0"):(0,Ao.parseAmount)(r)}function tl(r){return Qe(this,null,function*(){let{address:e,balance:o,chainId:n,nonce:l,values:d}=r,{amount:p,receiver:i,data:_,gasLimit:u,gasPrice:g,nft:b,receiverUsername:w,senderUsername:k}=d,y=Boolean(b)?e:i;try{return ol({balance:o,amount:String(p),gasLimit:String(u),gasPrice:rl(g),data:_.trim(),receiver:y,receiverUsername:w,senderUsername:k,sender:e,nonce:l,chainId:n})}catch(S){throw console.log("Prepare transaction error",S),S}})}s();var ds=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");s();var is=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");s();var ss=f(require("bignumber.js"));s();var ms=require("@terradharitri/sdk-dapp/constants/index"),_s=require("@terradharitri/sdk-dapp/utils/smartContracts"),us=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),fs=f(require("bignumber.js"));s();var vs=f(require("bignumber.js"));s();s();var bs=f(require("axios"));s();s();s();var nl=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");s();var al=require("@terradharitri/sdk-dapp/constants/index");s();var ll={D:"devnet",T:"testnet",1:"mainnet"},cl={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function pl(r){return ll[r]}function fn(r){return cl[r]||Qa}function dl(r){let e=pl(r),o=al.fallbackNetworkConfigurations[e].apiAddress;if(!o)throw"Could not extract api address for environment, check if you have a valid chainID";return o}function il(r){return Qe(this,null,function*(){let e=dl(r);return yield(0,nl.getServerConfiguration)(e)})}s();var er={value:null};function sl(r){return er.value={baseURL:r.apiAddress,timeout:Number(r.apiTimeout)},er.value}function ml(r){return Qe(this,null,function*(){if(er.value!=null)return er.value;if(console.error("Cannot get API config before initialization, make sure to call setApiConfig first"),r!=null){let o=yield il(r);return sl(o)}let e="Cannot get api config, make sure to initialize the context before calling APIs";throw console.error(e),e})}s();var kr=require("@terradharitri/sdk-dapp/constants/index"),_l=f(require("bignumber.js")),kt,St,Et,vn=(0,sn.formatAmount)({input:String((kt=kr.GAS_PRICE)!=null?kt:1e9),decimals:(St=kr.DECIMALS)!=null?St:18,showLastNonZeroDecimal:!0,digits:(Et=kr.DIGITS)!=null?Et:4}),gs=new _l.default(vn).times(10).toString(10);s();var hs=require("@terradharitri/sdk-dapp/constants/index"),ys=f(require("bignumber.js"));s();var ws=f(require("bignumber.js"));s();s();var xs=require("yup");s();var It=require("@terradharitri/sdk-dapp/constants/ledger.constants"),ul=f(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),zr=require("yup"),fl=(0,zr.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(r){let{ledger:e}=this.parent;return!(e&&r&&r.length&&!e.ledgerDataActive)}),vl=(0,zr.string)().test({name:"hashSign",test:function(r){let{ledger:e,isGuarded:o}=this.parent;if(e){let{ledgerWithHashSign:n,ledgerWithGuardians:l}=(0,ul.default)(e.version);if(r&&r.length>300&&!n)return this.createError({message:`Data too long. You need at least DharitrI app version ${It.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(o&&!l)return this.createError({message:`You need at least DharitrI app version ${It.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),bl=[fl,vl],ks=bl.reduce((r,e)=>r.concat(e),(0,zr.string)());s();var Ss=require("@terradharitri/sdk-dapp/constants/index"),Es=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Is=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ts=require("yup");s();var Ns=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),As=f(require("bignumber.js")),Cs=require("yup");s();var qs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Fs=f(require("bignumber.js")),Bs=require("yup");s();var Ls=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Us=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Ds=f(require("bignumber.js")),Rs=require("yup");s();var Ms=f(require("bignumber.js")),Ps=require("yup");s();var Os=require("@terradharitri/sdk-dapp/constants/index"),Vs=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),Ws=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),zs=f(require("bignumber.js")),Gs=require("yup");s();var js=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),$s=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Hs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ys=f(require("bignumber.js")),Zs=require("yup");s();var Xs=f(require("bignumber.js")),Ks=require("yup");s();var Qs=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Js=require("yup");s();var em=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),om=require("yup");s();s();var gl=(0,mn.createContext)({});function bn(){return(0,mn.useContext)(gl)}s();s();var hl=f(require("react")),rm=require("formik"),tm=f(require("lodash/uniqBy"));s();s();s();var nm=f(require("axios"));s();s();var yl=f(require("axios"));function wl(){return Qe(this,null,function*(){try{let r=yield ml(),{data:e}=yield yl.default.get("economics",r);return e}catch(r){return console.error("err fetching economics info",r),null}})}s();s();var am=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),lm=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),cm=f(require("axios")),pm=f(require("lodash/uniqBy"));s();var dm=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),im=f(require("axios"));s();var sm=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),mm=f(require("axios"));s();s();var gn=f(require("react")),xl=(0,gn.createContext)({});function nr(){return(0,gn.useContext)(xl)}s();s();var Tt=require("react"),kl=require("@terradharitri/sdk-dapp/constants/index"),Sr=require("@terradharitri/sdk-dapp/types/enums.types");function Sl(){let{networkConfig:r}=nr(),[e,o]=(0,Tt.useState)(0);function n(){return Qe(this,null,function*(){let l=yield wl(),d=(l==null?void 0:l.price)||0;o(d)})}return(0,Tt.useEffect)(()=>{![Sr.EnvironmentsEnum.mainnet,Sr.EnvironmentsEnum.testnet,Sr.EnvironmentsEnum.devnet].includes(r==null?void 0:r.id)||n()},[r==null?void 0:r.id]),{rewaLabel:r.rewaLabel,rewaPriceInUsd:e,digits:kl.DIGITS}}s();var _m=(0,hl.createContext)({});s();s();var um=require("@terradharitri/sdk-dapp/constants/index"),fm=require("formik");s();s();var El=f(require("react")),vm=require("@terradharitri/sdk-dapp/constants/index"),bm=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),gm=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),hm=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),ym=f(require("bignumber.js")),wm=require("formik");s();s();s();s();var xm=f(require("bignumber.js"));s();var km=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Sm=f(require("bignumber.js"));s();s();var Em=require("react"),Im=require("@terradharitri/sdk-dapp/constants/index"),Tm=require("@terradharitri/sdk-dapp/utils/smartContracts"),Nm=f(require("bignumber.js")),Am=require("formik");s();var Cm=require("react");s();s();var qm=require("@terradharitri/sdk-dapp/constants/index"),Fm=f(require("bignumber.js")),Bm=(0,El.createContext)({}),Lm=(0,Wa.createContext)({});s();s();var Il=f(require("react")),Um=require("formik"),Dm=(0,Il.createContext)({});s();s();var hn=f(require("react")),Rm=require("formik");s();s();s();var Mm=require("react"),Pm=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Om=f(require("lodash/uniqBy"));s();s();var Vm=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Wm=require("@terradharitri/sdk-dapp/utils");s();var zm=require("react");s();var Gm=require("react"),jm=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Tl=(0,hn.createContext)({});function Nl(){return(0,hn.useContext)(Tl)}s();s();var yn=f(require("react")),$m=require("formik");s();s();var Al=({knownAddresses:r,inputValue:e,key:o})=>!r||!e?!1:r.some(n=>{var l;return Boolean((l=n[o])==null?void 0:l.startsWith(e))});s();s();s();var Hm=require("react"),Ym=require("@terradharitri/sdk-dapp/utils");s();var Zm=require("react"),Xm=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");s();s();var Km=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Qm=f(require("axios"));s();var Jm=f(require("axios")),Cl=(0,yn.createContext)({});function wn(){return(0,yn.useContext)(Cl)}var ql=(0,dn.createContext)({});function ue(){return(0,dn.useContext)(ql)}s();s();var Er=f(require("react")),Fl=f(require("classnames"));s();s();s();var _e=f(require("react")),Bl=require("@terradharitri/sdk-dapp/UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmReceiver");s();var e_=f(require("react")),o_=require("@terradharitri/sdk-dapp/constants/index");s();var Ll=require("react");s();s();var ze=f(require("react")),Nt=require("@terradharitri/sdk-dapp/constants/index"),At=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Ul=require("@terradharitri/sdk-dapp/UI/UsdValue/index");s();s();var Pe=f(require("react")),Dl=require("@fortawesome/free-solid-svg-icons"),Rl=require("@fortawesome/react-fontawesome"),Ct=f(require("classnames"));s();var Ml=`.dapp-core-component__tokenAvatar-styles__tokenAvatar {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ml));var to={tokenAvatar:"dapp-core-component__tokenAvatar-styles__tokenAvatar",tokenAvatarNFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarNFT",tokenAvatarSFT:"dapp-core-component__tokenAvatar-styles__tokenAvatarSFT"},Pl=(tr(),Eo(Bo)).default,xn=r=>{let{avatar:e,type:o}=r;return o==="NonFungibleDCDT"?Pe.default.createElement("div",{className:(0,Ct.default)(to.tokenAvatar,to.tokenAvatarNFT)},"NFT"):o==="SemiFungibleDCDT"?Pe.default.createElement("div",{className:(0,Ct.default)(to.tokenAvatar,to.tokenAvatarSFT)},"SFT"):o==="REWA"?Pe.default.createElement("div",{className:to.tokenAvatar},r.RewaIcon?Pe.default.createElement(r.RewaIcon,null):Pe.default.createElement(Pl,null)):e?Pe.default.createElement("div",{className:to.tokenAvatar},Pe.default.createElement("img",{src:e})):Pe.default.createElement("div",{className:to.tokenAvatar},Pe.default.createElement(Rl.FontAwesomeIcon,{icon:Dl.faDiamond}))};s();var Ol=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ol));var $o={amount:"dapp-core-component__styles-module__amount",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},Vl=({label:r="Amount",amount:e,txType:o,tokenDecimals:n,tokenId:l,rewaLabel:d,rewaPriceInUsd:p,nft:i,tokenAvatar:_})=>{let u=(i==null?void 0:i.decimals)||0,g=o==="DCDT",b=o==="MetaDCDT",w=o==="NonFungibleDCDT",k=b?(0,Ao.parseAmount)(e,i==null?void 0:i.decimals):e,y=Boolean(i&&e),S=l.split("-")[0],E=g?n:Nt.DECIMALS,I=y?ze.default.createElement(At.FormatAmount,{rewaLabel:d,value:k,decimals:u,digits:o==="MetaDCDT"?Nt.DIGITS:0,showLabel:!1,showLastNonZeroDecimal:!0,"data-testid":"confirmAmount"}):ze.default.createElement(At.FormatAmount,{rewaLabel:d,value:(0,Ao.parseAmount)(e,E),showLabel:!1,decimals:E,showLastNonZeroDecimal:!0,token:g?S:d,"data-testid":"confirmAmount"});return w?null:ze.default.createElement("div",{className:$o.amount},ze.default.createElement("span",{className:q.label},r),ze.default.createElement("div",{className:$o.token},ze.default.createElement(xn,{type:o,avatar:_}),ze.default.createElement("div",{className:$o.value},I," ",S)),!g&&ze.default.createElement(Ul.UsdValue,{amount:e,usd:p,"data-testid":"confirmUsdValue",className:$o.price}))};s();s();var Z=f(require("react")),Wl=require("@terradharitri/sdk-dapp/utils/decoders/decodePart");s();var zl=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(zl));var Ho={data:"dapp-core-component__styles-module__data",value:"dapp-core-component__styles-module__value"},Gl=(r,e)=>[...r.matchAll(new RegExp(e,"gi"))].map(o=>o.index),jl=({label:r="Data",scCallLabel:e="SC Call",data:o,highlight:n,isScCall:l})=>{let d=Z.default.createElement(Z.default.Fragment,null,o),[p,...i]=n&&l?n.split("@"):[];if(o&&n&&Gl(o,n).length===1)switch(!0){case o.startsWith(n):{let[,_]=o.split(n);d=Z.default.createElement(Z.default.Fragment,null,n,Z.default.createElement("span",null,_));break}case o.endsWith(n):{let[_]=o.split(n);d=Z.default.createElement(Z.default.Fragment,null,Z.default.createElement("span",null,_),n);break}default:{let[_,u]=o.split(n);d=Z.default.createElement(Z.default.Fragment,null,Z.default.createElement("span",null,_),n,Z.default.createElement("span",null,u));break}}return Z.default.createElement(Z.default.Fragment,null,p&&Z.default.createElement("div",{className:Ho.data},Z.default.createElement("span",{className:q.label},e),Z.default.createElement("div",{"data-testid":"confirmScCall",className:Ho.value},[(0,Wl.decodePart)(p),...i].join("@"))),Z.default.createElement("div",{className:Ho.data},Z.default.createElement("span",{className:q.label},r),Z.default.createElement("div",{"data-testid":"confirmData",className:Ho.value},o?d:"N/A")))};s();s();var no=f(require("react")),$l=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount");s();var Hl=`:root {
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

.dapp-core-component__styles-module__fee {
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__token {
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__token .dapp-core-component__styles-module__value {
  font-size: 14px;
  font-weight: 500;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__price {
  font-size: 12px;
  color: var(--dapp-form-placeholder-color);
  line-height: 1;
  margin-top: 8px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Hl));var Yo={fee:"dapp-core-component__styles-module__fee",token:"dapp-core-component__styles-module__token",value:"dapp-core-component__styles-module__value",price:"dapp-core-component__styles-module__price"},Yl=({rewaPriceInUsd:r,label:e="Fee",feeLimit:o,rewaLabel:n})=>no.default.createElement("div",{className:Yo.fee},no.default.createElement("span",{className:q.label},e),no.default.createElement("div",{className:Yo.token},no.default.createElement(xn,{type:"REWA"}),no.default.createElement("div",{className:Yo.value},no.default.createElement($l.FormatAmount,{rewaLabel:n,value:o,showLastNonZeroDecimal:!0,"data-testid":"confirmFee"}))),o!==Co&&no.default.createElement("span",{className:Yo.price},_n({feeLimit:o,rewaPriceInUsd:r})));s();s();var ke=f(require("react")),Zl=require("@fortawesome/free-solid-svg-icons"),Xl=require("@fortawesome/react-fontawesome"),Kl=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Ql=require("@terradharitri/sdk-dapp/UI/CopyButton"),Jl=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),ec=require("@terradharitri/sdk-dapp/UI/Trim"),oc=f(require("classnames"));s();var{default:qo}=(Ra(),Eo(ln));s();var rc=`:root {
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

.dapp-core-component__styles-module__confirmReceiver {
  display: block;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__value {
  font-size: 14px;
  word-break: break-all;
  line-height: 1.5;
  display: block;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__value.dapp-core-component__styles-module__shrunk {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  margin-bottom: 8px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueTrim {
  line-height: 1;
  color: var(--dapp-form-placeholder-color);
  font-size: 12px;
  display: flex;
  align-items: flex-end;
  max-width: none;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueTrim [class*=left] *,
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueTrim [class*=right] * {
  color: var(--dapp-form-placeholder-color);
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__subValue .dapp-core-component__styles-module__subValueCopy {
  font-size: 12px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__explorer {
  margin-left: 0;
  font-size: 12px;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__explorer svg {
  color: var(--dapp-form-placeholder-color) !important;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__explorer:hover svg {
  color: var(--dapp-form-btn-bg) !important;
}
.dapp-core-component__styles-module__confirmReceiver .dapp-core-component__styles-module__icon {
  height: 16px;
  position: relative;
  width: auto;
  top: 1px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rc));var Ue={confirmReceiver:"dapp-core-component__styles-module__confirmReceiver",value:"dapp-core-component__styles-module__value",shrunk:"dapp-core-component__styles-module__shrunk",subValue:"dapp-core-component__styles-module__subValue",subValueTrim:"dapp-core-component__styles-module__subValueTrim",subValueCopy:"dapp-core-component__styles-module__subValueCopy",explorer:"dapp-core-component__styles-module__explorer",icon:"dapp-core-component__styles-module__icon"},tc=({label:r="Receiver",receiver:e,scamReport:o,receiverUsername:n})=>{let l=Boolean(n),d=n!=null?n:e;return ke.default.createElement("div",{className:Ue.confirmReceiver},ke.default.createElement("span",{className:q.label},r),ke.default.createElement("span",{className:(0,oc.default)(Ue.value,{[Ue.shrunk]:l}),"data-testid":"confirmReceiver"},l&&ke.default.createElement(qo,{className:Ue.icon}),d,l&&ke.default.createElement(Jl.ExplorerLink,{page:`/${Kl.ACCOUNTS_ENDPOINT}/${e}`,className:Ue.explorer})),l&&ke.default.createElement("span",{className:Ue.subValue},ke.default.createElement(ec.Trim,{text:e,className:Ue.subValueTrim}),ke.default.createElement(Ql.CopyButton,{text:e,className:Ue.subValueCopy})),o&&ke.default.createElement("div",{className:Ue.scam},ke.default.createElement("span",null,ke.default.createElement(Xl.FontAwesomeIcon,{icon:Zl.faExclamationTriangle,className:Ue.icon}),ke.default.createElement("small",{"data-testid":"confirmScamReport"},o))))};s();s();var ao=f(require("react"));s();s();var re=f(require("react")),nc=require("@fortawesome/free-solid-svg-icons"),ac=require("@fortawesome/react-fontawesome"),lc=f(require("@terradharitri/sdk-dapp/constants/index")),cc=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),pc=f(require("classnames"));s();var dc=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(dc));var wo={tokenElement:"dapp-core-component__styles-module__tokenElement",tokenElementWrapper:"dapp-core-component__styles-module__tokenElementWrapper",tokenElementCircle:"dapp-core-component__styles-module__tokenElementCircle",tokenElementIdentifier:"dapp-core-component__styles-module__tokenElementIdentifier"},ic=(tr(),Eo(Bo)).default,qt=({RewaIcon:r,inDropdown:e=!1,isRewa:o,nftTokenDetails:n,nftType:l,token:d})=>{var p,i;let{name:_,identifier:u,balance:g,decimals:b}=d,w=((p=d.assets)==null?void 0:p.svgUrl)||((i=d.assets)==null?void 0:i.pngUrl)||"",k=w?28:20,[y,S]=(0,re.useState)(_);(0,re.useEffect)(()=>{var A;(A=n==null?void 0:n.uris)!=null&&A.some(D=>{let R=nn.Buffer.from(String(D),"base64").toString(),{found:P}=Ya(R,n==null?void 0:n.scamInfo);return P})||S(_)},[_]);let E=re.default.createElement(ac.FontAwesomeIcon,{icon:nc.faDiamond});l==_o.NftEnumType.NonFungibleDCDT&&(E=re.default.createElement("div",{className:"nft-type","data-testid":`${u}-type-nft`},"NFT")),l===_o.NftEnumType.SemiFungibleDCDT&&(E=re.default.createElement("div",{className:"nft-type","data-testid":`${u}-type-sft`},"SFT"));let I=!e&&l!==_o.NftEnumType.NonFungibleDCDT,T=re.default.createElement("div",{className:wo.tokenElementCircle},E);return w&&(T=re.default.createElement("img",{className:wo.tokenElementCircle,src:w,alt:_,height:k})),o&&(T=re.default.createElement("div",{className:wo.tokenElementCircle},r?re.default.createElement(r,{height:36}):re.default.createElement(ic,{height:36}))),re.default.createElement("div",{className:(0,pc.default)(q.value,wo.tokenElement)},re.default.createElement("div",{className:wo.tokenElementWrapper},T),re.default.createElement("div",{"data-testid":"tokenName"},re.default.createElement("span",{"data-testid":`${u}-element`},re.default.createElement("span",null,y)," ",re.default.createElement("span",{className:wo.tokenElementIdentifier},u)),I&&re.default.createElement(cc.FormatAmount,{rewaLabel:u,value:g||Co,digits:l===_o.NftEnumType.SemiFungibleDCDT?0:lc.DIGITS,token:u,showLabel:!1,decimals:b,"data-testid":`${u}-balance`})))};s();var sc=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(sc));var mc={token:"dapp-core-component__styles-module__token",label:"dapp-core-component__styles-module__label"},_c=({RewaIcon:r,rewaLabel:e,isDcdtTransaction:o,nft:n,tokenAvatar:l,tokenId:d,tokenIdError:p})=>{var i;let _=(n==null?void 0:n.name)||"";return ao.default.createElement("div",{className:mc.token},ao.default.createElement("span",{className:q.label},n?ao.default.createElement("span",null,n==null?void 0:n.name," "):"","Token"),ao.default.createElement("div",null,n?ao.default.createElement(qt,{inDropdown:!0,token:{name:n==null?void 0:n.name,identifier:n==null?void 0:n.identifier,decimals:0,balance:Co,ticker:"",assets:{svgUrl:((i=n==null?void 0:n.assets)==null?void 0:i.svgUrl)||""}}}):ao.default.createElement(qt,{inDropdown:!0,token:{name:o?_:"DharitrI eGold",identifier:o?d:e,decimals:0,balance:Co,ticker:"",assets:{svgUrl:l||""}},isRewa:d===e,RewaIcon:r})),p&&ao.default.createElement("div",{className:q.error},p))},So=class extends Ll.Component{render(){return null}};So.Receiver=tc,So.Amount=Vl,So.Fee=Yl,So.Data=jl,So.Token=_c;var Ir=So;s();s();var Ge=f(require("react")),Ft=f(require("classnames"));s();var uc=`.dapp-core-component__styles-module__preview {
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--dapp-form-nftsft-preview-bg);
}
.dapp-core-component__styles-module__preview.dapp-core-component__styles-module__clickable {
  cursor: pointer;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__image {
  min-width: 64px;
  min-height: 64px;
  max-width: 64px;
  max-height: 64px;
  height: auto;
  width: auto;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content {
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left {
  gap: 8px;
  line-height: 1;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left .dapp-core-component__styles-module__name {
  font-size: 12px;
  font-weight: 600;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__left .dapp-core-component__styles-module__identifier {
  color: var(--dapp-form-placeholder-color);
  font-size: 12px;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge {
  line-height: 1;
  font-weight: 500;
  font-size: 12px;
  padding: 4px 8px;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: var(--dapp-form-nftsft-preview-badge-bg);
  position: relative;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge:before {
  content: "";
  border-radius: 4px;
  position: absolute;
  inset: 0;
  padding: 1px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__nft {
  color: #fef08a;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__nft:before {
  background: linear-gradient(90deg, rgba(240, 152, 25, 0.4), rgba(237, 222, 93, 0.4));
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__sft {
  color: #fed7aa;
}
.dapp-core-component__styles-module__preview .dapp-core-component__styles-module__content .dapp-core-component__styles-module__badge.dapp-core-component__styles-module__sft:before {
  background: linear-gradient(90deg, rgba(240, 77, 25, 0.4), rgba(237, 136, 93, 0.4));
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(uc));var Ee={preview:"dapp-core-component__styles-module__preview",clickable:"dapp-core-component__styles-module__clickable",image:"dapp-core-component__styles-module__image",content:"dapp-core-component__styles-module__content",left:"dapp-core-component__styles-module__left",name:"dapp-core-component__styles-module__name",identifier:"dapp-core-component__styles-module__identifier",badge:"dapp-core-component__styles-module__badge",nft:"dapp-core-component__styles-module__nft",sft:"dapp-core-component__styles-module__sft"},kn=r=>{let e=r,{txType:o,onClick:n,identifier:l}=e,d=rn(e,["txType","onClick","identifier"]),{name:p,thumbnail:i}=Ha({nft:d}),_=["NonFungibleDCDT","SemiFungibleDCDT"].includes(o),u=o==="NonFungibleDCDT"?"NFT":"SFT",g=b=>{b.preventDefault(),n&&n(b,Object.assign(d,{identifier:l}))};return _?Ge.default.createElement("div",{onClick:g,"data-testid":"token-preview",className:(0,Ft.default)(Ee.preview,{[Ee.clickable]:Boolean(n)})},Ge.default.createElement("img",{src:i,className:Ee.image}),Ge.default.createElement("div",{className:Ee.content},Ge.default.createElement("div",{className:Ee.left},Ge.default.createElement("div",{"data-testid":"token-preview-name",className:Ee.name},p),Ge.default.createElement("div",{"data-testid":"token-preview-identifier",className:Ee.identifier},l)),Ge.default.createElement("div",{className:Ee.right},Ge.default.createElement("div",{className:(0,Ft.default)(Ee.badge,{[Ee.nft]:o==="NonFungibleDCDT",[Ee.sft]:o==="SemiFungibleDCDT"})},u)))):null};s();var fc=`:root {
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

.dapp-core-component__confirmScreen-module__summary {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields {
  gap: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields .dapp-core-component__confirmScreen-module__columns {
  display: flex;
  column-gap: 16px;
  row-gap: 32px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__fields .dapp-core-component__confirmScreen-module__columns .dapp-core-component__confirmScreen-module__column {
  min-width: calc(50% - 8px);
  text-align: left;
}
.dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__confirmScreen-module__summary .dapp-core-component__confirmScreen-module__buttons {
    padding-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(fc));var mo={summary:"dapp-core-component__confirmScreen-module__summary",fields:"dapp-core-component__confirmScreen-module__fields",columns:"dapp-core-component__confirmScreen-module__columns",column:"dapp-core-component__confirmScreen-module__column",buttons:"dapp-core-component__confirmScreen-module__buttons"};s();s();var Tr=require("@terradharitri/sdk-dapp/types/enums.types"),vc=({providerType:r,hasGuardianScreen:e})=>e?"Confirm & Continue":r===Tr.LoginMethodsEnum.walletconnectv2?"Confirm on xPortal":r===Tr.LoginMethodsEnum.extension?"Confirm on DeFi Wallet":r===Tr.LoginMethodsEnum.ledger?"Confirm on Ledger":"Confirm";s();var bc=({receiverAddress:r,knownAddresses:e,existingReceiverUsername:o})=>{if(o)return o;let n=e==null?void 0:e.find(l=>l.address===r);return n==null?void 0:n.username},gc=({isConfirmCloseBtnVisible:r=!0,providerType:e})=>{var o;let{setIsGuardianScreenVisible:n}=bn(),{receiverUsernameInfo:{receiverUsername:l},receiverInfo:{scamError:d,receiver:p,knownAddresses:i},formInfo:_,gasInfo:{gasCostError:u,feeLimit:g},accountInfo:{isGuarded:b},dataFieldInfo:{data:w},amountInfo:k,tokensInfo:y}=ue(),{tokenId:S,tokenDetails:E,nft:I,rewaPriceInUsd:T,rewaLabel:A}=y,{readonly:D,onCloseForm:R,onInvalidateForm:P,onPreviewClick:fe,onSubmitForm:G,txType:K,hasGuardianScreen:z}=_,ve=()=>{n(!0)},[ie,L]=(0,_e.useState)(!1),M=K==="NonFungibleDCDT",O=vc({providerType:e,hasGuardianScreen:z}),ne=le=>{le.preventDefault(),D?R():P()},ae=()=>{if(b&&z)return ve();L(!0),G()},Se=!["REWA","DCDT","MetaDCDT"].includes(K),se=bc({knownAddresses:i,receiverAddress:p,existingReceiverUsername:l});return _e.default.createElement("div",{className:mo.summary},_e.default.createElement("div",{className:mo.fields},Se&&I&&_e.default.createElement(kn,U({onClick:fe,txType:K},I)),_e.default.createElement(Bl.ConfirmReceiver,{amount:k.amount,scamReport:d!=null?d:null,receiver:p,receiverUsername:se}),_e.default.createElement("div",{className:mo.columns},!M&&_e.default.createElement("div",{className:mo.column},_e.default.createElement(Ir.Amount,{txType:K,tokenId:S,tokenDecimals:E.decimals,amount:String(k.amount),nft:I,rewaPriceInUsd:T,rewaLabel:A,tokenLabel:E.name,tokenAvatar:((o=E.assets)==null?void 0:o.svgUrl)||""})),_e.default.createElement("div",{className:mo.column},_e.default.createElement(Ir.Fee,{rewaLabel:A,rewaPriceInUsd:T,feeLimit:g}))),_e.default.createElement(Ir.Data,{data:w}),u&&_e.default.createElement("p",{className:q.error},u)),_e.default.createElement("div",{className:mo.buttons},_e.default.createElement("button",{className:q.buttonSend,type:"button",id:"sendTrxBtn","data-testid":"sendTrxBtn",disabled:ie,onClick:ae},O),r&&_e.default.createElement("button",{className:q.buttonText,type:"button",id:"cancelTrxBtn","data-testid":"cancelTrxBtn",onClick:ne},D?"Close":"Back")))},hc=r=>{let{formInfo:{setHasGuardianScreen:e}}=ue();return(0,Er.useEffect)(()=>{r.hasGuardianScreen&&e(!0)},[]),Er.default.createElement("div",{className:(0,Fl.default)(mo.confirm,r.className),"data-testid":"confirmScreen"},Er.default.createElement(gc,U({},r)))};s();s();s();var Q=f(require("react")),Bt=require("@fortawesome/free-solid-svg-icons"),Lt=require("@fortawesome/react-fontawesome"),Nr=f(require("classnames")),yc=require("formik"),wc=f(require("react-select"));s();s();var xc=f(require("react")),kc=require("react-select");s();var Sc=`:root {
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

.dapp-core-component__styles-module__receiver {
  position: relative;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete {
  position: relative;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete input[aria-hidden=true] {
  display: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu {
  left: 0px;
  top: 0px;
  float: left;
  min-width: 10rem;
  font-size: 1rem;
  color: var(--brown);
  text-align: left;
  list-style: none;
  background-color: var(--white);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: var(--dapp-form-input-border-radius);
  z-index: 1000;
  inset: unset;
  max-height: 300px;
  overflow: unset;
  transform: none;
  overflow-x: scroll;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item {
  display: inline-block;
  line-height: 1.5;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: var(--brown);
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  text-decoration: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item:hover, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item.dapp-core-component__styles-module__highlighted {
  color: #16181b;
  text-decoration: none;
  background-color: #e9ecef;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item:first-child {
  margin-top: 0.675rem;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item:last-child {
  margin-bottom: 0.675rem;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__autocomplete .dapp-core-component__styles-module__menu .dapp-core-component__styles-module__item .dapp-core-component__styles-module__trim {
  display: flex;
  align-items: flex-end;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container {
  background-color: var(--body-bg);
  border: 1px solid transparent;
  transition: var(--transition);
  border-radius: 8px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__invalid {
  border-color: var(--danger);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__focused {
  border-color: var(--primary);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__expanded {
  z-index: 3;
  position: relative;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container.dapp-core-component__styles-module__opened + div {
  display: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control {
  background-color: transparent !important;
  border: none;
  box-shadow: none;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value {
  padding: 0;
  display: flex;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single {
  padding: 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: var(--action-color);
  margin: 0;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single.dapp-core-component__styles-module__disabled {
  color: var(--dapp-form-input-color-disabled);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single.dapp-core-component__styles-module__disabled [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single.dapp-core-component__styles-module__disabled [class*=__right] * {
  color: var(--dapp-form-input-color-disabled);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-username {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-username .dapp-core-component__styles-module__receiver-select-single-username-icon {
  height: 20px;
  width: 20px;
  background: var(--black);
  border-radius: 4px;
  padding: 3px;
  padding-bottom: 2px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper {
  display: flex;
  gap: 4px;
  color: var(--placeholder-color);
  align-items: center;
  overflow: hidden;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper .dapp-core-component__styles-module__receiver-select-single-trim {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper .dapp-core-component__styles-module__receiver-select-single-trim [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim-wrapper .dapp-core-component__styles-module__receiver-select-single-trim [class*=__right] * {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-single-trim {
  align-items: center;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--action-color);
  margin-right: 4px;
  font-size: 1rem;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single [class*=__left],
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-single [class*=__right] {
  line-height: 17px;
  height: 17px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input {
  margin: 0;
  padding: 0;
  display: flex;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input:after {
  content: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input.dapp-core-component__styles-module__visible input {
  opacity: 1 !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input.dapp-core-component__styles-module__spaced input {
  padding-left: 36px !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-value .dapp-core-component__styles-module__receiver-select-input input {
  flex: 1;
  min-height: auto;
  border-radius: 8px;
  padding: 12px !important;
  line-height: 17px !important;
  font-size: 14px !important;
  opacity: 0 !important;
  color: var(--action-color) !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-spinner {
  margin-right: 12px;
  font-size: 16px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator {
  transition: var(--transition);
  margin-left: -12px;
  z-index: 1;
  pointer-events: all;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator svg path {
  fill: var(--heading-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator:hover svg path {
  fill: var(--heading-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator.dapp-core-component__styles-module__expanded {
  transform: rotateZ(180deg);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-control .dapp-core-component__styles-module__receiver-select-indicator.dapp-core-component__styles-module__hidden {
  display: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu {
  background-color: var(--body-bg);
  border: 2px solid var(--action-bg);
  border-radius: var(--border-radius-low);
  margin: 8px 0 0;
  padding: 4px;
  z-index: 1;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu:before {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  border: 8px solid var(--body-bg);
  left: 0;
  top: 0;
  border-radius: var(--border-radius-low);
  z-index: 1;
  pointer-events: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete {
  font-size: 14px;
  padding: 12px;
  border: 1px solid transparent;
  bottom: calc(100% + 8px - 1px);
  border-right: 0;
  position: absolute;
  pointer-events: none;
  color: var(--placeholder-color);
  left: -1px;
  right: 24px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete > * {
  max-width: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__left],
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__right],
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__ellipsis] {
  line-height: 17px;
  height: 17px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__right] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete [class*=__ellipsis] * {
  color: var(--placeholder-color) !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete.dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed {
  text-overflow: ellipsis;
  line-height: 17px;
  overflow: hidden;
  white-space: nowrap;
  display: block;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete.dapp-core-component__styles-module__receiver-select-autocomplete-username {
  padding-left: 36px;
  white-space: nowrap;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-icon {
  min-width: 20px;
  flex: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  height: 20px;
  width: 20px;
  background: var(--black);
  border-radius: 4px;
  padding: 3px;
  padding-bottom: 2px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-icon.dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted {
  opacity: 0.75;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-wrapper [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-wrapper [class*=__right] * {
  color: var(--card-subtitle) !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-autocomplete .dapp-core-component__styles-module__receiver-select-autocomplete-collection {
  margin-left: 4px;
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list {
  padding: 0;
  gap: 4px;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar {
  width: 12px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar-track {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: var(--border-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar-thumb, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list::-webkit-scrollbar-thumb:hover {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option {
  cursor: pointer;
  line-height: 1.25;
  padding: 12px !important;
  border-radius: 6px;
  background-color: transparent;
  width: calc(100% - 8px);
  margin: 0 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:first-child {
  margin-top: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:last-child {
  margin-bottom: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused {
  background-color: var(--action-bg);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--action-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] *, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--action-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] *, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-username, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-username {
  color: var(--action-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover .dapp-core-component__styles-module__receiver-select-option-collection, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused .dapp-core-component__styles-module__receiver-select-option-collection {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option:hover strong, .dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option.dapp-core-component__styles-module__focused strong {
  font-weight: 900 !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
  color: var(--card-subtitle);
  font-size: 1rem;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper * {
  font-size: 1rem !important;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name-wrapper .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-username {
  font-size: 1rem;
  position: relative;
  padding-left: 28px;
  color: var(--placeholder-color);
  display: flex;
  align-items: center;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-username * {
  white-space: nowrap;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-username .dapp-core-component__styles-module__receiver-select-option-username-icon {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--black);
  border-radius: 4px;
  left: 0;
  padding: 3px;
  padding-bottom: 2px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name {
  color: var(--placeholder-color);
  align-items: flex-end;
  display: flex;
  max-width: none;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name [class*=__left] *,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-name [class*=__right] * {
  color: var(--placeholder-color);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-collection {
  color: var(--card-subtitle);
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__receiver-select-container .dapp-core-component__styles-module__receiver-select-menu .dapp-core-component__styles-module__receiver-select-list .dapp-core-component__styles-module__receiver-select-option .dapp-core-component__styles-module__receiver-select-option-collection strong {
  color: var(--action-color);
  font-weight: 400;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__found,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__loading {
  top: 0;
  font-size: 12px;
  line-height: 1;
  position: absolute;
  right: 0;
  color: var(--dapp-form-label-color);
  display: flex;
  align-items: center;
  gap: 4px;
}
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__found .dapp-core-component__styles-module__svg,
.dapp-core-component__styles-module__receiver .dapp-core-component__styles-module__loading .dapp-core-component__styles-module__svg {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Sc));var C={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"},Ec=r=>xc.default.createElement(kc.components.Control,ee(U({},r),{className:C.receiverSelectControl}));s();s();var Ar=f(require("react")),Ic=require("@fortawesome/free-solid-svg-icons"),Tc=require("@fortawesome/react-fontawesome"),Nc=f(require("classnames")),Ac=require("react-select");s();s();var Gr=(r,e)=>{let o=e.toLowerCase(),n=r.label.toLowerCase(),l=r.value.toLowerCase();return e?n.includes(o)||l.includes(o):!0};s();var Cc=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),qc=require("@terradharitri/sdk-dapp/utils"),Ut=r=>r?r.filter(e=>(0,qc.addressIsValid)(e.address)).map(e=>{let o=e.username?String((0,Cc.trimUsernameDomain)(e.username)):e.address;return{value:e.address,label:o}}):[];s();var Fc=({setOption:r,setAllValues:e})=>(o,n)=>{["input-blur","menu-close"].includes(n.action)||(e(o),o||r(null))};s();var Bc=({setInputValue:r,setOption:e,changeAndBlurInput:o})=>n=>{!n||(e(n),o(n.value),n.value!==n.label?r(n.label):r(n.value))};s();var Lc=({options:r,usernameAccounts:e,knownAddresses:o,setFieldValue:n,setInputValue:l,setOption:d})=>p=>{var i,_,u,g;let b=r.find(T=>T.value===p&&T.value!==T.label),w=b==null?void 0:b.label,k,y,S=(i=e[p])==null?void 0:i.username;S&&(w=S,k=S,y=(_=e[p])==null?void 0:_.rawUsername);let E=o.find(T=>T.address===p);E!=null&&E.username&&(w=E==null?void 0:E.username,k=E==null?void 0:E.username,y=E==null?void 0:E.rawUsername);let I=w!=null?w:p;l(I),d({value:p,label:I}),n("receiver",(g=(u=e[p])==null?void 0:u.address)!=null?g:p),n("receiverUsername",k),n("rawReceiverUsername",y)},Uc=r=>{let{selectProps:e,isDisabled:o,options:n}=r,{menuIsOpen:l,value:d,isLoading:p}=e,i=(0,Ar.useMemo)(()=>n.find(b=>{let w=b,k=d;return k?Gr(w,k.label):null}),[d,n]),_=n.length===0&&!p,u=Boolean(d)&&!i,g=o||_||u;return p?Ar.default.createElement(Tc.FontAwesomeIcon,{icon:Ic.faSpinner,spin:!0,className:C.receiverSelectSpinner}):Ar.default.createElement(Ac.components.DropdownIndicator,ee(U({},r),{className:(0,Nc.default)(C.receiverSelectIndicator,{[C.expanded]:l,[C.hidden]:g})}))};s();s();var Dc=f(require("react")),Rc=require("@terradharitri/sdk-dapp/utils"),Mc=f(require("classnames")),Pc=require("react-select");s();s();var Oc=(r,e)=>{let o=r.current;if(!o||!o.state.focusedOption)return!1;let n=o.state.focusedOption,l=n.label.toLowerCase(),d=n.value.toLowerCase(),p=l!==d,i=p&&l.startsWith(e.toLowerCase());return p&&!e?!0:i},Vc=r=>e=>{let{selectProps:o,value:n}=e,{inputValue:l,menuIsOpen:d}=o,{receiverUsernameInfo:{receiverUsername:p}}=ue(),i=Oc(r,l),_=(0,Rc.addressIsValid)(String(n)),u=Boolean(p)||i,g=_&&d||!_&&l;return Dc.default.createElement(Pc.components.Input,ee(U({},e),{"data-testid":"receiver",className:(0,Mc.default)(C.receiverSelectInput,{[C.visible]:g,[C.spaced]:u})}))};s();s();var Wc=f(require("react")),zc=require("react-select"),Gc=r=>Wc.default.createElement(zc.components.Menu,ee(U({},r),{className:C.receiverSelectMenu}));s();s();var ce=f(require("react")),Cr=require("@terradharitri/sdk-dapp/UI/Trim"),Zo=f(require("classnames")),jc=require("react-select"),$c=r=>{let{selectProps:e,focusedOption:o}=r,{value:n,inputValue:l}=e,d=o,p=d?d.label.toLowerCase():null,i=d&&d.label!==d.value,_=(p&&(!n||n&&l)?p.startsWith(l.toLowerCase()):!1)&&d?d.label.replace(d.label.substring(0,l.length),l):null,u=_&&!l,g=_&&l.length<_.length/2,b=_&&Boolean(l)&&g,w=_&&Boolean(l);return ce.default.createElement(ce.default.Fragment,null,b&&!i&&ce.default.createElement("div",{className:(0,Zo.default)(C.receiverSelectAutocomplete,C.receiverSelectAutocompleteUntrimmed)},_),w&&i&&ce.default.createElement("div",{className:(0,Zo.default)(C.receiverSelectAutocomplete,C.receiverSelectAutocompleteUsername)},ce.default.createElement(qo,{className:C.receiverSelectAutocompleteIcon}),_,ce.default.createElement("span",{className:C.receiverSelectAutocompleteWrapper},"(",ce.default.createElement(Cr.Trim,{text:d.value}),")")),u&&ce.default.createElement("span",{className:(0,Zo.default)(C.receiverSelectAutocomplete,{[C.receiverSelectAutocompleteUsername]:i})},i?ce.default.createElement(ce.default.Fragment,null,ce.default.createElement("span",null,ce.default.createElement(qo,{className:(0,Zo.default)(C.receiverSelectAutocompleteIcon,C.receiverSelectAutocompleteIconMuted)}),d.label),ce.default.createElement("span",{className:C.receiverSelectAutocompleteWrapper},"(",ce.default.createElement(Cr.Trim,{text:d.value}),")")):ce.default.createElement(Cr.Trim,{text:_})),ce.default.createElement(jc.components.MenuList,ee(U({},r),{className:C.receiverSelectList})))};s();s();var Oe=f(require("react")),Dt=require("@terradharitri/sdk-dapp/UI/Trim"),Hc=f(require("classnames")),Yc=require("react-select");s();s();var Xo=f(require("react"));s();var Zc=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zc));var Xc={highlight:"dapp-core-component__styles-modules__highlight"},Sn=({highlight:r,text:e=""})=>{let o=e.split(" "),n=r.toLowerCase(),l=new RegExp(`(${n})`,"gi"),d=o.map(p=>p.split(l).filter(i=>i));return Xo.default.createElement("span",{className:Xc.highlight},d.map((p,i)=>{let _=`${p}-${i}`;return Xo.default.createElement("span",{key:_},p.map((u,g)=>{let b=u.toLowerCase()===n,w=n&&b,k=`${u}-${g}`;return w?Xo.default.createElement("strong",{key:k},u):Xo.default.createElement("span",{key:k},u)}))}))},Kc=r=>{let{isFocused:e,data:o,selectProps:n}=r,{inputValue:l}=n,d=o,p=d.value!==d.label;return Oe.default.createElement(Yc.components.Option,ee(U({},r),{className:(0,Hc.default)(C.receiverSelectOption,{[C.focused]:e})}),p?Oe.default.createElement(Oe.default.Fragment,null,Oe.default.createElement("span",{className:C.receiverSelectOptionUsername},Oe.default.createElement(qo,{className:C.receiverSelectOptionUsernameIcon}),Oe.default.createElement(Sn,{text:d.label,highlight:l})),Oe.default.createElement("span",{className:C.receiverSelectOptionNameWrapper},"(",Oe.default.createElement(Dt.Trim,{text:d.value,className:C.receiverSelectOptionName}),")")):Oe.default.createElement(Dt.Trim,{text:d.value,className:C.receiverSelectOptionName}))};s();s();var Qc=f(require("react")),Jc=f(require("classnames")),ep=require("react-select"),op=r=>{let{selectProps:e,isFocused:o,className:n}=r,{menuIsOpen:l}=e;return Qc.default.createElement(ep.components.SelectContainer,ee(U({},r),{className:(0,Jc.default)(n,{[C.expanded]:l,[C.focused]:o&&l})}))};s();s();var Ve=f(require("react")),Rt=require("@terradharitri/sdk-dapp/UI/Trim"),rp=require("@terradharitri/sdk-dapp/utils"),tp=f(require("classnames")),np=require("react-select"),ap=r=>{let{selectProps:e,isDisabled:o}=r,{value:n,menuIsOpen:l}=e,d=n,{receiverInfo:{receiver:p},receiverUsernameInfo:{receiverUsername:i}}=ue(),_=i!=null?i:d&&d.value!==d.label,u=d?{value:p!=null?p:d.value,label:d.label}:null,g=u&&(_||!_&&!l)&&(0,rp.addressIsValid)(u.value);return Ve.default.createElement(np.components.ValueContainer,ee(U({},r),{className:C.receiverSelectValue}),g&&Ve.default.createElement("span",{className:(0,tp.default)(C.receiverSelectSingle,{[C.disabled]:o})},_?Ve.default.createElement(Ve.default.Fragment,null,Ve.default.createElement("span",{className:C.receiverSelectSingleUsername},Ve.default.createElement(qo,{className:C.receiverSelectSingleUsernameIcon}),u.label),Ve.default.createElement("span",{className:C.receiverSelectSingleTrimWrapper},"(",Ve.default.createElement(Rt.Trim,{text:u.value,className:C.receiverSelectSingleTrim}),")")):Ve.default.createElement(Rt.Trim,{text:u.value,className:C.receiverSelectSingleTrim})),r.children)};s();s();var lp=require("formik"),En=()=>{let{receiverInfo:{receiverError:r,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:o,isReceiverUsernameInvalid:n,receiverUsername:l}}=ue(),{touched:{receiver:d}}=(0,lp.useFormikContext)(),p=e&&d||n;return l!=null&&l.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:r}:{isInvalid:p,receiverErrorDataTestId:n?"receiverUsernameError":"receiverError",error:n?o:r}};s();s();var cp=require("@terradharitri/sdk-dapp/utils"),pp=require("formik");s();s();var dp=({knownAddresses:r,inputValue:e})=>!r||!e?!1:r.filter(o=>{var n;let l=(n=o.username)!=null?n:o.address,d=o.address;return Gr({label:l,value:d,data:{label:l,value:d}},e)}).length>0,ip=({menuIsOpen:r})=>{let{isInvalid:e}=En(),{values:{nft:o}}=(0,pp.useFormikContext)(),{showUsernameError:n,isUsernameLoading:l,isUsernameDebouncing:d,usernameIsAmongKnown:p,searchQueryIsAddress:i}=wn(),{receiverInputValue:_,knownAddresses:u}=Nl(),g=Al({key:"address",knownAddresses:u,inputValue:_}),b=dp({inputValue:_,knownAddresses:u}),w=i&&(!g||!r)&&!(0,cp.addressIsValid)(_),k=Boolean(n&&!(r&&g)&&!(r&&p));return{isAddressError:w||(o?e:!1),isUsernameError:k,isRequiredError:e&&!k&&!l&&!d&&!w&&!b&&!_,isReceiverDropdownOpened:_&&b&&r}},sp=r=>{let e=(0,Q.useRef)(null),{className:o}=r,{setFieldValue:n}=(0,yc.useFormikContext)(),{receiverInfo:{scamError:l,fetchingScamAddress:d,receiverInputValue:p,setReceiverInputValue:i,knownAddresses:_,receiver:u,onBlurReceiver:g,onChangeReceiver:b},receiverUsernameInfo:{receiverUsername:w},formInfo:{readonly:k}}=ue(),[y,S]=(0,Q.useState)(!1),[E,I]=(0,Q.useState)(u?{label:u,value:u}:null),{receiverErrorDataTestId:T,error:A}=En(),{isAddressError:D,isUsernameError:R,isRequiredError:P,isReceiverDropdownOpened:fe}=ip({menuIsOpen:y}),{usernameAccounts:G,isUsernameLoading:K}=wn(),z=()=>{g(new Event("blur"));let B=_==null?void 0:_.find(j=>j.username===p&&j.address===u);B&&(n("receiver",B.address),n("receiverUsername",B.username),n("rawReceiverUsername",B.rawUsername))},ve=_==null?void 0:_.find(B=>B.username===p&&B.address===u),ie=(0,Q.useMemo)(()=>Ut(_),[_]),L=ve?Ut([ve]):ie,M=Lc({setFieldValue:n,setInputValue:i,setOption:I,options:L,knownAddresses:_!=null?_:[],usernameAccounts:G}),O=(0,Q.useCallback)(Fc({setAllValues:M,setOption:I}),[]),ne=(0,Q.useCallback)(B=>{b(B?B.trim():""),setTimeout(z)},[]),ae=Bc({changeAndBlurInput:ne,setOption:I,setInputValue:i}),Se=(0,Q.useMemo)(()=>Vc(e),[e]);(0,Q.useEffect)(()=>{if(!u)return;let B=Object.keys(G).find(j=>{var Je;return((Je=G[j])==null?void 0:Je.address)===u});M(B!=null?B:u),B&&i(B)},[G,u]);let se=D||R||P,le=se&&!y;return Q.default.createElement("div",{className:(0,Nr.default)(C.receiver,o)},Q.default.createElement("div",{className:q.label,"data-testid":"receiverLabel","data-loading":d},"Receiver"),Q.default.createElement(wc.default,{value:E,onInputChange:O,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:uo("receiver",k),options:L,filterOption:Gr,noOptionsMessage:()=>null,onChange:ae,onBlur:z,isMulti:!1,ref:e,inputValue:p,onMenuClose:()=>S(!1),onMenuOpen:()=>S(!0),components:{Menu:Gc,Input:Se,Control:Ec,ValueContainer:ap,DropdownIndicator:Uc,SelectContainer:op,MenuList:$c,Option:Kc,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,Nr.default)(C.receiverSelectContainer,{[C.opened]:fe,[C.invalid]:se||l})}),le&&Q.default.createElement("div",{"data-testid":T,className:q.error},A),K&&Q.default.createElement("div",{className:C.loading},"Loading..."),w&&Q.default.createElement("span",{className:C.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",Q.default.createElement(Lt.FontAwesomeIcon,{icon:Bt.faCheck,className:C.foundIcon})),l&&Q.default.createElement("div",{"data-testid":"receiverScam",className:(0,Nr.default)(q.error,q.scam)},Q.default.createElement("span",null,Q.default.createElement(Lt.FontAwesomeIcon,{icon:Bt.faExclamationTriangle}),Q.default.createElement("small",null,l))))};s();s();var Ie=f(require("react")),mp=f(require("bignumber.js")),qr=f(require("classnames"));s();var _p=`:root {
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
  position: relative;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label label {
  margin: 0;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label .dapp-core-component__styles-module__balance {
  line-height: 1;
  font-size: 12px;
  color: var(--dapp-form-label-color);
  display: flex;
  overflow: hidden;
  min-width: 0;
  align-items: center;
  gap: 4px;
  max-width: 75%;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label .dapp-core-component__styles-module__balance .dapp-core-component__styles-module__available {
  color: var(--dapp-form-input-color);
  display: flex;
  align-items: center;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  gap: 4px;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__label .dapp-core-component__styles-module__balance .dapp-core-component__styles-module__available .dapp-core-component__styles-module__amount {
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__wrapper {
  position: relative;
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__max {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 16px;
  margin-right: 8px;
  background-color: var(--dapp-form-max-btn-bg);
  color: var(--dapp-form-max-btn-color);
  text-transform: uppercase;
  padding: 6px 0;
  font-size: 12px;
  transition: all 200ms ease;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.dapp-core-component__styles-module__amount .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__max:hover {
  color: var(--dapp-form-max-btn-color);
  background-color: var(--dapp-form-max-hover-btn-bg);
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(_p));var lo={amount:"dapp-core-component__styles-module__amount",label:"dapp-core-component__styles-module__label",balance:"dapp-core-component__styles-module__balance",available:"dapp-core-component__styles-module__available",wrapper:"dapp-core-component__styles-module__wrapper",max:"dapp-core-component__styles-module__max"},up=r=>{let{className:e}=r,{formInfo:{readonly:o},amountInfo:n,tokensInfo:l}=ue(),{amount:d,error:p,onFocus:i,onBlur:_,onChange:u,isInvalid:g,onMaxClicked:b,maxAmountAvailable:w,isMaxButtonVisible:k}=n,{nft:y}=l,S=y!=null&&y.balance?new mp.default(y.balance).isGreaterThan(0):!1,E=I=>{I.preventDefault(),b()};return Ie.default.createElement("div",{className:(0,qr.default)(lo.amount,e)},Ie.default.createElement("div",{className:lo.label},Ie.default.createElement("label",{htmlFor:"amount",className:q.label},"Amount"),S&&y&&Ie.default.createElement("div",{"data-value":`${w} ${y.identifier}`,className:(0,qr.default)(lo.balance,e)},Ie.default.createElement("span",null,"Available:")," ",Ie.default.createElement("span",{"data-testid":`available-${y.identifier}`,className:lo.available},Ie.default.createElement("span",{className:lo.amount},w)," ",y.ticker))),Ie.default.createElement("div",{className:lo.wrapper},Ie.default.createElement("input",{type:"text",id:"amount",name:"amount","data-testid":"amount",required:!0,value:d,disabled:uo("amount",o),onFocus:i,onBlur:_,onChange:u,autoComplete:"off",className:(0,qr.default)(q.input,{[q.invalid]:g,[q.disabled]:uo("amount",o)})}),k&&Ie.default.createElement("a",{href:"/","data-testid":"maxBtn",className:lo.max,onClick:E,onMouseDown:I=>{I.preventDefault()}},"Max")),g&&Ie.default.createElement("div",{className:q.error,"data-testid":"amountError"},p))};s();s();var he=f(require("react")),Mt=require("@fortawesome/free-solid-svg-icons"),Pt=require("@fortawesome/react-fontawesome"),fp=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Ot=f(require("classnames")),vp=f(require("react-collapsed"));s();var je=f(require("react")),bp=require("@fortawesome/free-solid-svg-icons"),gp=require("@fortawesome/react-fontawesome"),hp=f(require("bignumber.js")),Vt=f(require("classnames")),yp=require("react-number-format");s();s();var co=require("@terradharitri/sdk-dapp/constants/index"),wp=require("@terradharitri/sdk-dapp/utils/validation"),$e=f(require("bignumber.js")),xp=(r,e)=>{let o=e!=null?e:co.DIGITS;if((0,wp.stringIsFloat)(r)){if(new $e.default(r).isZero())return"0";let n=new $e.default(r).toFormat(o);return n=parseFloat(n)>0?n:new $e.default(r).toFormat(co.DIGITS),n=parseFloat(n)>0?n:new $e.default(r).toFormat(co.DIGITS+2),n=parseFloat(n)>0?n:new $e.default(r).toFormat(co.DIGITS+4),n=parseFloat(n)>0?n:new $e.default(r).toFormat(co.DIGITS+6),n=parseFloat(n)>0?n:new $e.default(r).toFormat(co.DIGITS+10),parseFloat(n)>0?n:new $e.default(r).toFormat(co.DIGITS+14)}return"0"};s();var Wt=r=>r.replace(/,/g,"");s();var zt=require("react"),kp={value:"",count:0},Sp=(r,e)=>{let[o,n]=(0,zt.useState)(kp);return(0,zt.useEffect)(()=>{let l=setTimeout(()=>{n(r)},e);return()=>clearTimeout(l)},[r.count]),o};s();var Ep=f(require("bignumber.js")),jr=r=>{let[e,o]=r.split(""),n=new Ep.default(e).isZero();return Boolean(n&&o&&o!==".")};s();var Ip=`:root {
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

.dapp-core-component__styles-module__gas {
  position: relative;
}
.dapp-core-component__styles-module__gas:last-child {
  margin-bottom: 0;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input {
  display: initial;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__input.dapp-core-component__styles-module__spaced {
  padding-right: 44px;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions {
  right: 0;
  top: 0;
  position: absolute;
  bottom: 0;
  display: flex;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action {
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:hover .dapp-core-component__styles-module__icon {
  color: #23f7dd;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child) {
  position: relative;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action:not(:first-child):before {
  background-color: var(--dapp-form-placeholder-color);
  width: 1px;
  top: 16px;
  bottom: 16px;
  left: 0;
  content: "";
  position: absolute;
}
.dapp-core-component__styles-module__gas .dapp-core-component__styles-module__wrapper .dapp-core-component__styles-module__actions .dapp-core-component__styles-module__action .dapp-core-component__styles-module__icon {
  color: var(--dapp-form-placeholder-color);
  transition: all 200ms ease;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ip));var de={gas:"dapp-core-component__styles-module__gas",wrapper:"dapp-core-component__styles-module__wrapper",input:"dapp-core-component__styles-module__input",spaced:"dapp-core-component__styles-module__spaced",actions:"dapp-core-component__styles-module__actions",action:"dapp-core-component__styles-module__action",icon:"dapp-core-component__styles-module__icon"},Tp=()=>{let{formInfo:r,gasInfo:e}=ue(),{readonly:o}=r,{defaultGasLimit:n,onResetGasLimit:l,onChangeGasLimit:d,onBlurGasLimit:p,gasLimit:i,gasLimitError:_,isGasLimitInvalid:u}=e,g=S=>{S.preventDefault(),l()},b=({value:S,floatValue:E})=>(!E||!(0,hp.default)(E).isNaN())&&!jr(S),w=S=>{d(S.value,!0)},k=i!==n&&!o,y=uo("gasLimit",o);return je.default.createElement("div",{className:de.gas},je.default.createElement("label",{className:q.label,htmlFor:"gasLimit"},"Gas Limit"),je.default.createElement("div",{className:de.wrapper},je.default.createElement(yp.NumericFormat,{allowedDecimalSeparators:[","],autoComplete:"off","data-testid":"gasLimit",allowLeadingZeros:!1,disabled:y,id:"gasLimit",inputMode:"numeric",name:"gasLimit",onBlur:p,onValueChange:w,required:!0,isAllowed:b,thousandSeparator:",",thousandsGroupStyle:"thousand",value:i,valueIsNumericString:!0,allowNegative:!1,className:(0,Vt.default)(q.input,de.input,{[q.disabled]:y,[q.invalid]:u,[de.spaced]:k})}),k&&je.default.createElement("div",{className:de.actions},je.default.createElement("div",{onClick:g,"data-testid":"gasLimitResetBtn",className:(0,Vt.default)(de.action,{[de.disabled]:y})},je.default.createElement(gp.FontAwesomeIcon,{icon:bp.faUndo,className:de.icon}))),u&&je.default.createElement("div",{className:q.error,"data-testid":"gasLimitError"},_)))};s();s();var He=f(require("react")),Np=require("@fortawesome/free-solid-svg-icons"),Ap=require("@fortawesome/react-fontawesome"),Cp=f(require("bignumber.js")),Gt=f(require("classnames")),qp=require("react-number-format"),Fp=()=>{let{networkConfig:r}=nr(),{gasInfo:e,formInfo:o}=ue(),{readonly:n}=o,{rewaLabel:l}=r,{gasPrice:d,gasPriceError:p,isGasPriceInvalid:i,onChangeGasPrice:_,onBlurGasPrice:u,onResetGasPrice:g}=e,b=d!==vn&&!n,w=uo("gasPrice",n),k=({value:E,floatValue:I})=>(!I||!(0,Cp.default)(I).isNaN())&&!jr(E),y=E=>{E.preventDefault(),g()},S=E=>{_(E.value,!0)};return He.default.createElement("div",{className:de.gas},He.default.createElement("label",{className:q.label,htmlFor:"gasPrice"},"Gas Price (per Gas Unit)"),He.default.createElement("div",{className:de.wrapper},He.default.createElement(qp.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":"gasPrice",allowLeadingZeros:!1,decimalSeparator:".",disabled:w,id:"gasPrice",inputMode:"decimal",isAllowed:k,name:"gasPrice",onBlur:u,onValueChange:S,required:!0,suffix:` ${l}`,thousandSeparator:",",thousandsGroupStyle:"thousand",value:d,valueIsNumericString:!0,allowNegative:!1,className:(0,Gt.default)(q.input,de.input,{[q.disabled]:w,[q.invalid]:i,[de.spaced]:b})}),b&&He.default.createElement("div",{className:de.actions},He.default.createElement("div",{onClick:y,className:(0,Gt.default)(de.action,{[de.disabled]:w})},He.default.createElement(Ap.FontAwesomeIcon,{icon:Np.faUndo,className:de.icon})))),i&&He.default.createElement("div",{className:q.error,"data-testid":"gasPriceError"},p))};s();var Bp=f(require("react"));s();var Lp=`:root {
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

.dapp-core-component__styles-module__fee {
  color: var(--dapp-form-input-color);
  width: 100%;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger {
  align-items: center;
  background: var(--dapp-form-input-bg);
  border-radius: var(--border-radius-low);
  cursor: pointer;
  display: flex;
  flex-flow: row;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1rem;
  word-break: break-all;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__label, .dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__fiat, .dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger:hover .dapp-core-component__styles-module__arrow {
  color: var(--dapp-form-input-color);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__fiat {
  font-size: 12px;
  margin-left: 0.25rem;
  transition: all 200ms ease;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__arrow {
  transition: all 200ms ease;
  color: var(--dapp-form-label-color);
  margin-left: auto;
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__trigger .dapp-core-component__styles-module__arrow.dapp-core-component__styles-module__active {
  transform: rotateZ(90deg);
}
.dapp-core-component__styles-module__fee .dapp-core-component__styles-module__expandable .dapp-core-component__styles-module__content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Lp));var Xe={fee:"dapp-core-component__styles-module__fee",trigger:"dapp-core-component__styles-module__trigger",label:"dapp-core-component__styles-module__label",fiat:"dapp-core-component__styles-module__fiat",arrow:"dapp-core-component__styles-module__arrow",active:"dapp-core-component__styles-module__active",expandable:"dapp-core-component__styles-module__expandable",content:"dapp-core-component__styles-module__content"},Up=({feeLimit:r,rewaPriceInUsd:e})=>r===Co?null:Bp.default.createElement("span",{className:Xe.fiat,"data-testid":"feeInFiat"},"(",_n({feeLimit:r,rewaPriceInUsd:e}),")"),Dp=({className:r})=>{let{gasInfo:e,tokensInfo:o}=ue(),{feeLimit:n,gasCostLoading:l,gasPriceError:d,gasLimitError:p}=e,{rewaPriceInUsd:i,rewaLabel:_}=o,[u,g]=(0,he.useState)(Boolean(d||p)),{getCollapseProps:b,getToggleProps:w}=(0,vp.default)({isExpanded:u}),k=()=>{g(y=>!y)};return he.default.createElement("div",{className:(0,Ot.default)(Xe.fee,r)},he.default.createElement("label",{className:q.label},"Fee"),he.default.createElement("div",U({className:Xe.trigger},w({onClick:k})),he.default.createElement("span",{className:Xe.limit,"data-testid":"feeLimit"},he.default.createElement(fp.FormatAmount,{value:n,showLastNonZeroDecimal:!0,rewaLabel:_})),l&&he.default.createElement(Pt.FontAwesomeIcon,{icon:Mt.faSpinner,className:"fa-spin fast-spin","data-testid":"gasCostLoadingSpinner"}),he.default.createElement(Up,{rewaPriceInUsd:i,feeLimit:n}),he.default.createElement(Pt.FontAwesomeIcon,{icon:Mt.faChevronRight,className:(0,Ot.default)(Xe.arrow,{[Xe.active]:u})})),he.default.createElement("div",U({className:Xe.expandable},b()),he.default.createElement("div",{className:Xe.content},he.default.createElement(Fp,null),he.default.createElement(Tp,null))))};s();s();var r_=f(require("react")),t_=f(require("@terradharitri/sdk-dapp/constants/index")),n_=f(require("classnames")),a_=f(require("react-select"));s();var Rp=`:root {
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

.dapp-core-component__styles-module__selectTokenContainer {
  margin-bottom: 1.5rem;
  z-index: 8;
  position: relative;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Rp));s();s();var Te=f(require("react")),Fr=f(require("classnames"));s();var Mp=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Mp));var Ke={amount:"dapp-core-component__amountSelect-module__amount",wrapper:"dapp-core-component__amountSelect-module__wrapper",error:"dapp-core-component__amountSelect-module__error",disabled:"dapp-core-component__amountSelect-module__disabled",interaction:"dapp-core-component__amountSelect-module__interaction",footer:"dapp-core-component__amountSelect-module__footer",label:"dapp-core-component__amountSelect-module__label"};s();s();s();var te=f(require("react")),Pp=require("@terradharitri/sdk-dapp/utils/validation"),Br=f(require("bignumber.js")),jt=f(require("classnames")),Op=require("react-number-format");s();var Vp=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Vp));var Ko={"amount-input":"dapp-core-component__amountInput-module__amount-input",amountInput:"dapp-core-component__amountInput-module__amount-input","amount-holder":"dapp-core-component__amountInput-module__amount-holder",amountHolder:"dapp-core-component__amountInput-module__amount-holder","show-usd-value":"dapp-core-component__amountInput-module__show-usd-value",showUsdValue:"dapp-core-component__amountInput-module__show-usd-value","amount-holder-usd":"dapp-core-component__amountInput-module__amount-holder-usd",amountHolderUsd:"dapp-core-component__amountInput-module__amount-holder-usd",input:"dapp-core-component__amountInput-module__input"},Wp=500,$t=1e13,zp=({"data-testid":r,InfoDustComponent:e,disabled:o,handleBlur:n,handleChange:l,name:d,onDebounceChange:p,onFocus:i,onKeyDown:_,placeholder:u,required:g,usdPrice:b,value:w,usdValue:k,className:y,autoFocus:S,suffix:E})=>{let I=(0,te.useRef)(null),[T,A]=(0,te.useState)(),[D,R]=(0,te.useState)(!1),[P,fe]=(0,te.useState)({value:w,count:0}),[G,K]=(0,te.useState)(),z=Sp(P,Wp),ve=M=>{M.stopPropagation(),R(!0);let O=Wt(M.target.value),ne=(0,Br.default)(O).isLessThanOrEqualTo($t);if((O===""||ne)&&(A(O),M.target.value=O,l(M),p)){let ae={value:O,count:P.count+1};fe(ae)}},ie=()=>{if(k)return K(`$${k}`);if(!b||!w)return K(void 0);let M=Wt(w);if(!(w!==""&&(0,Pp.stringIsFloat)(M))||M==="")return K(void 0);let O=xp(new Br.default(M).times(b!=null?b:0).toString(10),2);K(`$${O}`)},L=({value:M,floatValue:O})=>(!O||(0,Br.default)(O).isLessThanOrEqualTo($t))&&!jr(M);return(0,te.useEffect)(()=>{p&&D&&(R(!1),p(z.value))},[z]),(0,te.useEffect)(ie,[w,k,b]),(0,te.useEffect)(()=>{w!==T&&A(w)},[w]),te.default.createElement("div",{ref:I,className:(0,jt.default)(Ko.amountHolder,{[Ko.showUsdValue]:Boolean(G)},y)},te.default.createElement(Op.NumericFormat,{allowedDecimalSeparators:[".",","],autoComplete:"off","data-testid":r||d,decimalSeparator:".",disabled:Boolean(o),id:d,inputMode:"decimal",isAllowed:L,name:d,onBlur:n,onChange:ve,onFocus:i,onKeyDown:_,placeholder:u,required:g,thousandSeparator:",",thousandsGroupStyle:"thousand",value:T,suffix:E,valueIsNumericString:!0,allowNegative:!1,autoFocus:S,className:(0,jt.default)(q.input,Ko.amountInput,{[q.disabled]:Boolean(o)})}),G&&te.default.createElement("span",{className:Ko.amountHolderUsd},te.default.createElement("small",{"data-testid":`tokenPrice_${b}`},G!=="$0"?te.default.createElement(te.default.Fragment,null,"\u2248 "):te.default.createElement(te.default.Fragment,null),G),e))},Gp=(0,te.memo)(zp,(r,e)=>r.value===e.value&&r.usdPrice===e.usdPrice&&r.className===e.className&&r.disabled===e.disabled&&r.usdValue===e.usdValue);s();s();var Ht=f(require("react"));s();s();var No=f(require("react")),jp=require("@fortawesome/free-solid-svg-icons"),$p=require("@fortawesome/react-fontawesome"),Hp=require("@terradharitri/sdk-dapp/UI/FormatAmount/FormatAmount"),Yp=require("react-tooltip"),l_=require("react-tooltip/dist/react-tooltip.css");s();var Zp=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Zp));var Lr={infoDust:"dapp-core-component__styles-module__infoDust",infoDustTrigger:"dapp-core-component__styles-module__infoDustTrigger",infoDustTooltip:"dapp-core-component__styles-module__infoDustTooltip"},Xp=({rewaLabel:r})=>No.default.createElement("div",{className:Lr.infoDust},No.default.createElement(Yp.Tooltip,{anchorId:"info-dust",place:"top",noArrow:!0,delayHide:400,delayShow:250,className:Lr.infoDustTooltip},"A minimal amount of"," ",No.default.createElement(Hp.FormatAmount,{rewaLabel:r,value:un,digits:3})," has been left in the account in order to allow you to make future smart contract requests."),No.default.createElement("div",{"data-tip":!0,id:"info-dust","data-for":"info-dust","data-testid":"infoDust",className:Lr.infoDustTrigger},No.default.createElement($p.FontAwesomeIcon,{icon:jp.faInfoCircle,className:"i-icon"}))),Kp=({rewaLabel:r,amount:e,maxAmountMinusDust:o,isMaxClicked:n,tokenId:l})=>e===o&&n&&l===r?Ht.default.createElement("span",{style:{marginLeft:"0.2rem"}},Ht.default.createElement(Xp,{rewaLabel:r})):null;s();s();var Qp=f(require("react")),Jp=require("@terradharitri/sdk-dapp/constants"),Yt=f(require("bignumber.js")),ed=f(require("classnames"));s();var Zt=f(require("bignumber.js")),od=r=>{let e=new Zt.default(r!=null?r:"0"),o=new Zt.default(un),n=e.minus(o);return n.isGreaterThan(0)?n.toString(10):"0"};s();var rd=`:root {
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

.dapp-core-component__maxButton-module__max {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 16px;
  margin-right: 8px;
  background-color: var(--dapp-form-max-btn-bg);
  color: var(--dapp-form-max-btn-color);
  text-transform: uppercase;
  width: 48px;
  padding: 6px 0;
  font-size: 12px;
  transition: all 200ms ease;
}
.dapp-core-component__maxButton-module__max:hover {
  color: var(--dapp-form-max-btn-color);
  background-color: var(--dapp-form-max-hover-btn-bg);
  text-decoration: none;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(rd));var td={max:"dapp-core-component__maxButton-module__max"};s();var po=require("@terradharitri/sdk-dapp/constants"),nd=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),ad=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),$r=({amount:r="0",decimals:e=0,digits:o=po.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:l=!1})=>{if(r==null||!(0,ad.stringIsInteger)(r))return"0";let d=i=>(0,nd.formatAmount)({input:r,digits:i,decimals:e,addCommas:n,showLastNonZeroDecimal:l}),p=d(o);return p=parseFloat(p)>0?p:d(po.DIGITS),p=parseFloat(p)>0?p:d(po.DIGITS+2),p=parseFloat(p)>0?p:d(po.DIGITS+4),p=parseFloat(p)>0?p:d(po.DIGITS+6),p=parseFloat(p)>0?p:d(po.DIGITS+10),parseFloat(p)>0?p:d(po.DIGITS+14)},ld=({token:r,rewaLabel:e,inputAmount:o,className:n,onMaxClick:l})=>{var d;let p=(r==null?void 0:r.identifier)===e,i=(d=r==null?void 0:r.balance)!=null?d:"0";if(i==="0")return null;let _=$r({amount:p?od(i):i,decimals:(r==null?void 0:r.decimals)||Jp.DECIMALS}),u=new Yt.default(o).isEqualTo(new Yt.default(_)),g=b=>{b.preventDefault(),l==null||l(_)};return u?null:Qp.default.createElement("a",{href:"/","data-testid":"maxBtn",className:(0,ed.default)(td.max,n),onClick:g,onMouseDown:b=>{b.preventDefault()}},"Max")};s();s();var Ye=f(require("react")),cd=f(require("classnames")),pd=f(require("react-select")),In={};rr(In,{Control:()=>Ed,IndicatorsContainer:()=>Bd,Input:()=>fd,Menu:()=>xd,MenuList:()=>gd,DharitrIIcon:()=>An,Placeholder:()=>Ad,SmallLoader:()=>sd,ValueComponent:()=>Tn,getOption:()=>Cn,getSingleValue:()=>qn,getValueContainer:()=>Nn});s();s();var Xt=f(require("react")),dd=require("@fortawesome/free-solid-svg-icons"),id=require("@fortawesome/react-fontawesome"),sd=({show:r,color:e})=>r?Xt.default.createElement("div",{className:"d-flex"},Xt.default.createElement(id.FontAwesomeIcon,{icon:dd.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;s();s();var md=f(require("react")),_d=require("react-select");s();var ud=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ud));var F={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"},fd=r=>md.default.createElement(_d.components.Input,ee(U({},r),{className:F.dropdown,"data-testid":"tokenSelectInput"}));s();var vd=f(require("react")),bd=require("react-select"),gd=r=>{let e=r,{rx:o}=e,n=rn(e,["rx"]);return vd.default.createElement(bd.components.MenuList,ee(U({},n),{className:F.list}))};s();var Ur=f(require("react")),hd=require("@fortawesome/free-solid-svg-icons"),yd=require("@fortawesome/react-fontawesome"),wd=require("react-select"),xd=r=>Ur.default.createElement(wd.components.Menu,ee(U({},r),{className:F.menu}),r.selectProps.isLoading?Ur.default.createElement("div",{className:F.loading},Ur.default.createElement(yd.FontAwesomeIcon,{icon:hd.faCircleNotch,className:"fa-spin",size:"lg"})):r.children);s();var kd=f(require("react")),Sd=require("react-select"),Ed=r=>kd.default.createElement(Sd.components.Control,ee(U({},r),{className:F.control}));s();var Id=f(require("react")),Td=f(require("classnames")),Nd=require("react-select"),Ad=r=>Id.default.createElement(Nd.components.Placeholder,ee(U({},r),{className:(0,Td.default)(F.placeholder,{[F.focused]:r.isFocused})}));s();var Cd=f(require("react")),qd=f(require("classnames")),Fd=require("react-select"),Bd=r=>Cd.default.createElement(Fd.components.IndicatorsContainer,ee(U({},r),{className:(0,qd.default)(F.indicator,{[F.expanded]:r.selectProps.menuIsOpen})}));s();var ye=f(require("react")),Ld=require("@fortawesome/free-solid-svg-icons"),Ud=require("@fortawesome/react-fontawesome"),Dd=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Rd=f(require("classnames")),Md=require("react-select"),Pd=(tr(),Eo(Bo)).default,Tn=({RewaIcon:r,tokenId:e,icon:o})=>{let{isRewa:n}=(0,Dd.getIdentifierType)(e);return n?ye.default.createElement("span",{className:F.asset},r?ye.default.createElement(r,{className:F.diamond}):ye.default.createElement(Pd,{className:F.diamond})):o?ye.default.createElement("img",{src:o,className:F.asset}):ye.default.createElement(Ud.FontAwesomeIcon,{icon:Ld.faDiamond,className:F.asset})},Od=({children:r})=>ye.default.createElement("div",{className:F.wrapper},r),Nn=(r,e,o)=>n=>{var l,d;let{selectProps:p,isDisabled:i,children:_}=n,u=p.value,g=(d=(l=u==null?void 0:u.assets)==null?void 0:l.svgUrl)!=null?d:null,b=(0,ye.useMemo)(()=>{let w=String(u==null?void 0:u.token.usdPrice);return w!=null&&w.includes("$")?u==null?void 0:u.token.usdPrice:`$${u==null?void 0:u.token.usdPrice}`},[u==null?void 0:u.token.usdPrice]);return ye.default.createElement(Md.components.ValueContainer,ee(U({},n),{className:F.container}),ye.default.createElement("div",{className:(0,Rd.default)(F.icon,e)},ye.default.createElement(Tn,{RewaIcon:o,rewaLabel:r,icon:g,isDisabled:i,tokenId:u==null?void 0:u.value})),ye.default.createElement("div",{className:F.payload},ye.default.createElement(Od,null,_,(u==null?void 0:u.token.usdPrice)&&ye.default.createElement("small",{className:F.price},b))))};s();var X=f(require("react")),Vd=require("@fortawesome/free-solid-svg-icons"),Wd=require("@fortawesome/react-fontawesome"),zd=require("@terradharitri/sdk-dapp/constants"),Gd=require("@terradharitri/sdk-dapp/UI/UsdValue"),jd=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),$d=f(require("classnames")),Hd=require("react-select"),{default:An}=(tr(),Eo(Bo)),Cn=({RewaIcon:r,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>l=>{var d,p,i,_;let{data:u,isSelected:g,isFocused:b,isDisabled:w,selectProps:k}=l,y=u,{isRewa:S}=(0,jd.getIdentifierType)(y.value),E=y.token.assets?y.token.assets.svgUrl:null,I=$r({amount:y.token.balance,decimals:y.token.decimals||zd.DECIMALS,addCommas:!0}),T=(p=(d=y.token)==null?void 0:d.usdPrice)==null?void 0:p.toString(),A=(_=(i=y.token)==null?void 0:i.valueUSD)==null?void 0:_.toString();return X.default.createElement("div",{"data-testid":`${l.value}-option`},X.default.createElement(Hd.components.Option,ee(U({},l),{className:(0,$d.default)(F.option,{[F.selected]:g||b,[F.disabled]:w})}),X.default.createElement("div",{className:F.image},S?X.default.createElement("span",{className:F.icon},r?X.default.createElement(r,null):X.default.createElement(An,null)):E?X.default.createElement("img",{src:E,className:F.icon}):X.default.createElement("span",{className:F.icon},X.default.createElement(Wd.FontAwesomeIcon,{icon:Vd.faDiamond,className:F.diamond}))),X.default.createElement("div",{className:F.info},X.default.createElement("div",{className:F.left},X.default.createElement("div",{className:F.ticker},X.default.createElement("span",{className:F.value},k.inputValue?X.default.createElement(Sn,{text:y.token.ticker,highlight:k.inputValue}):y.token.ticker),e&&X.default.createElement(e,{token:y.token})),n&&X.default.createElement("small",{className:F.price},T)),X.default.createElement("div",{className:F.right},X.default.createElement("span",{className:F.value},I),o&&A&&X.default.createElement(Gd.UsdValue,{usd:1,decimals:4,amount:A,"data-testid":"token-price-usd-value",className:F.price,addEqualSign:!1}))),X.default.createElement("div",{className:F.children},l.children)))};s();var Dr=f(require("react")),Yd=f(require("classnames")),Zd=require("react-select"),qn=r=>e=>{let{selectProps:o,children:n}=e,l=o.value;return Dr.default.createElement(Zd.components.SingleValue,ee(U({},e),{className:(0,Yd.default)(F.single,{[F.focused]:e.selectProps.menuIsOpen})}),Dr.default.createElement("div",{className:F.ticker},n,r&&Dr.default.createElement(r,{token:l==null?void 0:l.token})))},{Menu:Xd,Control:Kd,Input:Qd,MenuList:Jd,IndicatorsContainer:ei,Placeholder:oi}=In,ri=r=>{let{name:e,options:o,isLoading:n=!1,className:l="",noOptionsMessage:d="No Tokens",disabledOption:p,rewaLabel:i,RewaIcon:_,disabled:u,value:g,onBlur:b,onFocus:w,onChange:k,onMenuOpen:y,chainId:S,wrapperClassName:E="",showTokenPrice:I=!1,showBalanceUsdValue:T=!1,selectedTokenIconClassName:A,TokenTickerIcon:D}=r,R=(0,Ye.useRef)(null),P=[i,fn(S)],fe=(0,Ye.useMemo)(()=>Cn({rewaLabel:i,RewaIcon:_,showTokenPrice:I,showBalanceUsdValue:T,TokenTickerIcon:D}),[]),G=(0,Ye.useMemo)(()=>Nn(i,A,_),[]),K=(0,Ye.useMemo)(()=>qn(D),[]);(0,Ye.useEffect)(()=>{let L=o.find(O=>O.value===(g==null?void 0:g.value)),M=(L==null?void 0:L.token.balance)===(g==null?void 0:g.token.balance);!L||M||k(L)},[o]);let z=L=>P.includes(L),ve=L=>{var M;let O=L.value===(p==null?void 0:p.value),ne=z(L.value),ae=z((M=p==null?void 0:p.value)!=null?M:"");return O||ne&&ae},ie=(L,M)=>{let O=L.data.token.ticker?L.data.token.ticker.toLowerCase().includes(M.toLowerCase()):!1,ne=L.data.token.name.toLowerCase().includes(M.toLowerCase());return Boolean(M)?O||ne:!0};return Ye.default.createElement("div",{"data-testid":`${e}Select`,className:`${E} ${n?"select-holder-loading":""}`},Ye.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:F.label},"Token"),Ye.default.createElement(pd.default,{ref:R,inputId:e,name:e,options:o,openMenuOnFocus:!0,isDisabled:u,isLoading:n,value:g,isOptionDisabled:ve,onBlur:b,filterOption:ie,onFocus:w,onChange:L=>{k(L),R&&R.current!==null&&R.current.blur()},isSearchable:r.isSearchable,maxMenuHeight:260,onMenuOpen:y,noOptionsMessage:()=>d,className:(0,cd.default)(F.select,l,{[F.disabled]:r.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:Xd,Control:Kd,Input:Qd,MenuList:Jd,IndicatorsContainer:ei,ValueContainer:G,Placeholder:oi,Option:fe,SingleValue:K}}))};s();s();var ti=f(require("react")),ni=f(require("classnames")),ai=({hasErrors:r,className:e,error:o,"data-testid":n})=>r?ti.default.createElement("div",{className:(0,ni.default)(q.error,e),"data-testid":n},o):null;s();s();var Rr=f(require("react")),li=f(require("classnames"));s();var ci=`.dapp-core-component__tokenBalance-module__balance {
  line-height: 1;
  font-size: 12px;
  color: var(--dapp-form-input-color);
  max-width: 75%;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  gap: 4px;
}
.dapp-core-component__tokenBalance-module__balance span {
  color: var(--dapp-form-label-color);
}
.dapp-core-component__tokenBalance-module__balance .dapp-core-component__tokenBalance-module__value {
  overflow: hidden;
  text-overflow: ellipsis;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ci));var Mr={balance:"dapp-core-component__tokenBalance-module__balance",value:"dapp-core-component__tokenBalance-module__value"},pi=({label:r,value:e,className:o,token:n,"data-testid":l,"data-value":d})=>Rr.default.createElement("div",{"data-testid":l,"data-value":d,className:(0,li.default)(Mr.balance,o)},Rr.default.createElement("span",{className:Mr.label},r,": "),Rr.default.createElement("span",{className:Mr.value},e)," ",n==null?void 0:n.ticker),di=({className:r,label:e,name:o,wrapperControlsClassName:n,tokenSelectProps:l,tokenBalanceProps:d,amountInputProps:p,amountErrorProps:i,maxButtonProps:_,readonly:u})=>Te.default.createElement("div",{className:(0,Fr.default)(Ke.amount,r)},Te.default.createElement("div",{className:Ke.label},e&&Te.default.createElement("label",{htmlFor:o,className:q.label,"data-testid":"amountLabel"},e),Te.default.createElement(pi,U({},d))),Te.default.createElement("div",{className:(0,Fr.default)(Ke.wrapper,n,{[Ke.error]:p.isInvalid||l.isInvalid||i.hasErrors,[Ke.disabled]:u})},Te.default.createElement(Gp,U({},p)),Te.default.createElement("div",{className:(0,Fr.default)(Ke.interaction,_.wrapperClassName)},_.isMaxButtonVisible&&Te.default.createElement(ld,U({},_)),Te.default.createElement("div",{className:Ke.select},Te.default.createElement(ri,U({},l))))),Te.default.createElement(ai,U({},i)));s();var Pr=f(require("react")),ii=require("@terradharitri/sdk-dapp/constants"),si=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),mi=()=>{var r,e;let{checkInvalid:o}=bn(),{tokensInfo:n,amountInfo:l,formInfo:d}=ue(),{readonly:p}=d,{networkConfig:{rewaLabel:i,chainId:_}}=nr(),{rewaPriceInUsd:u}=Sl(),{amount:g,onBlur:b,onChange:w,onMaxClicked:k,error:y,isInvalid:S,onFocus:E,maxAmountAvailable:I,isMaxClicked:T,isMaxButtonVisible:A,maxAmountMinusDust:D}=l,{allAvailableTokens:R,areTokensLoading:P,getTokens:fe,isTokenIdInvalid:G,RewaIcon:K,nft:z,onChangeTokenId:ve,tokenDetails:ie,tokenId:L,tokenIdError:M}=n,O=R.map(we=>({value:we.identifier,label:String(we.ticker),assets:we.assets,token:we})),{isRewa:ne}=(0,si.getIdentifierType)(L),ae=O.find(({value:we})=>we===L),Se={id:"tokenId",value:ae,name:"tokenId",isLoading:P,options:O,isSearchable:!0,onChange:we=>{we&&(ve(we.value),w(""))},onMenuOpen:fe,disabled:uo("tokenId",p),error:M,isInvalid:G,rewaLabel:i,chainId:_,RewaIcon:K},se=(0,Pr.useMemo)(()=>Pr.default.createElement(Kp,{amount:g,rewaLabel:i,maxAmountMinusDust:D,tokenId:L,isMaxClicked:T}),[g,i,D,L,T]),le={name:"amount",required:!0,value:g,placeholder:"Amount",handleBlur:b,"data-testid":"amount",handleChange:w,onFocus:E,usdPrice:ne?u:void 0,error:y,isInvalid:S,InfoDustComponent:se},B={token:ie,inputAmount:g,onMaxClick:k,isMaxClicked:T,isMaxButtonVisible:A},j=o("amount")&&!le.value,Je={hasErrors:le.isInvalid||Se.isInvalid||j,error:le.error||Se.error,className:q.error,"data-testid":le.error?"amountError":"tokenIdError"},Uo={"data-testid":`available-${(r=z==null?void 0:z.identifier)!=null?r:L}`,"data-value":`${I} ${(e=z==null?void 0:z.identifier)!=null?e:L}`,label:"Available",token:ae==null?void 0:ae.token,value:$r({amount:ie.balance,decimals:ie.decimals||ii.DECIMALS,addCommas:!0,showLastNonZeroDecimal:!0})};return(z==null?void 0:z.type)===_o.NftEnumType.NonFungibleDCDT?null:Pr.default.createElement(di,{name:"tokenId",amountErrorProps:Je,tokenSelectProps:Se,amountInputProps:le,tokenBalanceProps:Uo,maxButtonProps:B,label:"Amount",readonly:p})};s();s();var io=f(require("react")),Kt=f(require("classnames"));s();s();s();var We=f(require("react")),Qt=require("@fortawesome/free-solid-svg-icons"),Jt=require("@fortawesome/react-fontawesome"),_i=require("formik");s();s();var Fn=()=>{let{formInfo:{isRewaTransaction:r,readonly:e},dataFieldInfo:{isAdvancedModeEnabled:o}}=ue();return o?!1:!r||uo("data",e)};s();var ui=`.dapp-core-component__styles-module__advanced {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ui));var Qo={advanced:"dapp-core-component__styles-module__advanced","advanced-text":"dapp-core-component__styles-module__advanced-text",advancedText:"dapp-core-component__styles-module__advanced-text"},fi=()=>{let{formInfo:{readonly:r,isRewaTransaction:e}}=ue(),{setFieldValue:o,values:n}=(0,_i.useFormikContext)(),[l,d]=(0,We.useState)(!1),[p,i]=(0,We.useState)(!1),_=Fn(),u=!l&&!r&&_&&Boolean(n.data),g=()=>{d(!0),o("isAdvancedModeEnabled",!0)},b=()=>{i(!0),setTimeout(()=>{i(!1)},5e3)};return(0,We.useEffect)(()=>{!e&&l&&d(!1)},[e,n.amount]),u?p?We.default.createElement("div",{className:Qo.advanced,"data-testid":"confirmAdvancedMode",onClick:g},We.default.createElement(Jt.FontAwesomeIcon,{icon:Qt.faCheck,className:"i-icon"}),We.default.createElement("span",{className:Qo.advancedText},"Confirm")):We.default.createElement("div",{"data-testid":"enableAdvancedMode",className:Qo.advanced,onClick:b},We.default.createElement(Jt.FontAwesomeIcon,{icon:Qt.faScrewdriverWrench,className:"i-icon"}),We.default.createElement("span",{className:Qo.advancedText},"Advanced")):null};s();var vi=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(vi));var en={data:"dapp-core-component__styles-module__data",wrapper:"dapp-core-component__styles-module__wrapper"},bi=({className:r})=>{let{dataFieldInfo:{data:e,dataError:o,isDataInvalid:n,onChange:l,onBlur:d}}=ue(),p=Fn();return io.default.createElement("div",{className:(0,Kt.default)(en.data,r)},io.default.createElement("div",{className:Ke.label},io.default.createElement("label",{htmlFor:"data",className:q.label},"Data"),io.default.createElement(fi,null)),io.default.createElement("div",{className:en.wrapper},io.default.createElement("textarea",{rows:1,id:"data",name:"data",disabled:p,"data-testid":"data",value:e,onBlur:d,onChange:l,spellCheck:"false",placeholder:"Add transaction data",className:(0,Kt.default)(q.textarea,{[q.invalid]:n,[q.disabled]:p})})),n&&io.default.createElement("div",{className:q.error,"data-testid":"dataError"},o))};s();s();s();var Ze=f(require("react")),so=f(require("classnames"));s();var gi=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(gi));var pe={amountSlider:"dapp-core-component__styles-module__amountSlider",amountSliderRange:"dapp-core-component__styles-module__amountSliderRange",amountSliderInput:"dapp-core-component__styles-module__amountSliderInput",disabled:"dapp-core-component__styles-module__disabled",amountSliderThumb:"dapp-core-component__styles-module__amountSliderThumb",amountSliderThumbPercentage:"dapp-core-component__styles-module__amountSliderThumbPercentage",amountSliderCompletion:"dapp-core-component__styles-module__amountSliderCompletion",amountSliderBreakpoint:"dapp-core-component__styles-module__amountSliderBreakpoint",completed:"dapp-core-component__styles-module__completed",amountSliderPercentage:"dapp-core-component__styles-module__amountSliderPercentage",exact:"dapp-core-component__styles-module__exact"},hi=({disabled:r,percentageValue:e=0,onPercentageChange:o,className:n})=>{let l=[0,25,50,75,100],d="amountSlider";return Ze.default.createElement("div",{className:(0,so.default)(pe.amountSlider,n)},Ze.default.createElement("div",{className:pe.amountSliderRange},Ze.default.createElement("input",{name:d,id:d,"data-testid":d,type:"range",disabled:r,min:0,max:100,value:String(e),className:(0,so.default)(pe.amountSliderInput,{[pe.disabled]:r}),onChange:p=>{o(Number(p.target.value))}}),Ze.default.createElement("div",{style:{width:`${e}%`},className:(0,so.default)(pe.amountSliderCompletion,{[pe.disabled]:r})}),l.map(p=>Ze.default.createElement("span",{onClick:()=>o(p),key:`breakpoint-${p}`,style:{left:`${p}%`},className:(0,so.default)(pe.amountSliderBreakpoint,{[pe.completed]:p<=e,[pe.disabled]:r})})),l.map(p=>Ze.default.createElement("span",{style:{left:`${p}%`},key:`breakpoint-${p}`,onClick:()=>o(p),className:(0,so.default)(pe.amountSliderPercentage,{[pe.exact]:p===e,[pe.disabled]:r})},p,"%")),Ze.default.createElement("span",{style:{left:`${e}%`},className:(0,so.default)(pe.amountSliderThumb,{[pe.disabled]:r})},Ze.default.createElement("strong",{className:(0,so.default)(pe.amountSliderThumbPercentage,{[pe.hidden]:l.includes(e)})},Math.round(e),"%"))))};s();s();var Ne=f(require("react")),yi=require("@fortawesome/free-solid-svg-icons"),wi=require("@fortawesome/react-fontawesome"),xi=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),ki=require("@terradharitri/sdk-dapp/UI/CopyButton"),Si=require("@terradharitri/sdk-dapp/UI/ExplorerLink"),Ei=require("@terradharitri/sdk-dapp/UI/Trim"),Ii=f(require("classnames")),Ti=require("formik");s();var Ni=`:root {
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

.dapp-core-component__styles-module__can-transfer-warning {
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--action-bg);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-heading {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-heading .dapp-core-component__styles-module__can-transfer-warning-icon {
  margin-right: 12px;
  color: #ffc107;
  font-size: 24px;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-heading .dapp-core-component__styles-module__can-transfer-warning-label {
  color: #ffc107;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 12px;
  color: var(--dapp-form-label-color);
  gap: 8px;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address:before {
  position: absolute;
  content: "";
  left: 0;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid var(--dapp-form-placeholder-color);
  top: 50%;
  transform: translateY(-50%);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=ellipsis] {
  display: flex;
  align-items: flex-end;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=left],
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=right],
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=ellipsis] {
  line-height: 1.25;
  color: var(--dapp-form-placeholder-color);
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=left] *,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=right] *,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address [class*=ellipsis] * {
  color: var(--dapp-form-placeholder-color);
  line-height: 1.25;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-explorer,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-copy {
  color: var(--dapp-form-placeholder-color) !important;
  margin: 0;
}
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-explorer svg path,
.dapp-core-component__styles-module__can-transfer-warning .dapp-core-component__styles-module__can-transfer-warning-addresses .dapp-core-component__styles-module__can-transfer-warning-address .dapp-core-component__styles-module__can-transfer-warning-address-copy svg path {
  fill: var(--dapp-form-placeholder-color);
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ni));var Ae={"can-transfer-warning":"dapp-core-component__styles-module__can-transfer-warning",canTransferWarning:"dapp-core-component__styles-module__can-transfer-warning","can-transfer-warning-heading":"dapp-core-component__styles-module__can-transfer-warning-heading",canTransferWarningHeading:"dapp-core-component__styles-module__can-transfer-warning-heading","can-transfer-warning-icon":"dapp-core-component__styles-module__can-transfer-warning-icon",canTransferWarningIcon:"dapp-core-component__styles-module__can-transfer-warning-icon","can-transfer-warning-label":"dapp-core-component__styles-module__can-transfer-warning-label",canTransferWarningLabel:"dapp-core-component__styles-module__can-transfer-warning-label","can-transfer-warning-addresses":"dapp-core-component__styles-module__can-transfer-warning-addresses",canTransferWarningAddresses:"dapp-core-component__styles-module__can-transfer-warning-addresses","can-transfer-warning-address":"dapp-core-component__styles-module__can-transfer-warning-address",canTransferWarningAddress:"dapp-core-component__styles-module__can-transfer-warning-address","can-transfer-warning-address-explorer":"dapp-core-component__styles-module__can-transfer-warning-address-explorer",canTransferWarningAddressExplorer:"dapp-core-component__styles-module__can-transfer-warning-address-explorer","can-transfer-warning-address-copy":"dapp-core-component__styles-module__can-transfer-warning-address-copy",canTransferWarningAddressCopy:"dapp-core-component__styles-module__can-transfer-warning-address-copy"},Ai=r=>{let{className:e}=r,{values:{nft:o,address:n}}=(0,Ti.useFormikContext)();return!(o!=null&&o.allowedReceivers)||o.allowedReceivers.includes(n)?null:Ne.default.createElement("div",{className:(0,Ii.default)(Ae.canTransferWarning,e),"data-testid":"canTransferWarning"},Ne.default.createElement("div",{className:Ae.canTransferWarningHeading},Ne.default.createElement(wi.FontAwesomeIcon,{icon:yi.faExclamationTriangle,className:Ae.canTransferWarningIcon,size:"lg"}),Ne.default.createElement("div",{className:Ae.canTransferWarningTitle},Ne.default.createElement("div",{className:Ae.canTransferWarningLabel},"Warning!"),Ne.default.createElement("div",{className:Ae.canTransferWarningMessage},Xa))),Ne.default.createElement("div",{className:Ae.canTransferWarningAddresses},o.allowedReceivers.map(l=>Ne.default.createElement("div",{className:Ae.canTransferWarningAddress,key:l},Ne.default.createElement(Ei.Trim,{text:l,className:Ae.canTransferWarningAddressTrim}),Ne.default.createElement(ki.CopyButton,{text:l,className:Ae.canTransferWarningAddressCopy}),Ne.default.createElement(Si.ExplorerLink,{page:`/${xi.ACCOUNTS_ENDPOINT}/${l}`,className:Ae.canTransferWarningAddressExplorer})))))};s();s();var xo=f(require("react")),Ci=require("@fortawesome/free-solid-svg-icons"),qi=require("@fortawesome/react-fontawesome"),Fi=f(require("classnames"));s();var Bi=`:root {
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

.dapp-core-component__styles-module__wrewa-warning {
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--action-bg);
}
.dapp-core-component__styles-module__wrewa-warning .dapp-core-component__styles-module__wrewa-warning-heading {
  display: flex;
  align-items: center;
  color: var(--dapp-form-label-color);
}
.dapp-core-component__styles-module__wrewa-warning .dapp-core-component__styles-module__wrewa-warning-heading .dapp-core-component__styles-module__wrewa-warning-icon {
  margin-right: 12px;
  color: #ffc107;
  font-size: 24px;
}
.dapp-core-component__styles-module__wrewa-warning .dapp-core-component__styles-module__wrewa-warning-heading .dapp-core-component__styles-module__wrewa-warning-label {
  color: #ffc107;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Bi));var ko={"wrewa-warning":"dapp-core-component__styles-module__wrewa-warning",wrewaWarning:"dapp-core-component__styles-module__wrewa-warning","wrewa-warning-heading":"dapp-core-component__styles-module__wrewa-warning-heading",wrewaWarningHeading:"dapp-core-component__styles-module__wrewa-warning-heading","wrewa-warning-icon":"dapp-core-component__styles-module__wrewa-warning-icon",wrewaWarningIcon:"dapp-core-component__styles-module__wrewa-warning-icon","wrewa-warning-label":"dapp-core-component__styles-module__wrewa-warning-label",wrewaWarningLabel:"dapp-core-component__styles-module__wrewa-warning-label"},Li=r=>{let{tokenId:e,className:o}=r,{networkConfig:{chainId:n}}=nr();return fn(n)!==e?null:xo.default.createElement("div",{className:(0,Fi.default)(ko.wrewaWarning,o)},xo.default.createElement("div",{className:ko.wrewaWarningHeading},xo.default.createElement(qi.FontAwesomeIcon,{icon:Ci.faExclamationTriangle,className:ko.wrewaWarningIcon,size:"lg"}),xo.default.createElement("div",{className:ko.wrewaWarningTitle},xo.default.createElement("div",{className:ko.wrewaWarningLabel},"Warning!"),xo.default.createElement("div",{className:ko.wrewaWarningMessage},Ka))))};s();var Ui=`:root {
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

.dapp-core-component__form-module__form {
  background-color: var(--dapp-form-bg);
  border-radius: 12px;
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__formFieldset {
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
  gap: 32px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__formWrapper {
  margin-bottom: 1.5rem;
}
.dapp-core-component__form-module__form .dapp-core-component__form-module__form-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
}
@media (min-width: 768px) {
  .dapp-core-component__form-module__form .dapp-core-component__form-module__form-buttons {
    padding-top: 80px;
  }
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ui));var Or={form:"dapp-core-component__form-module__form",formFieldset:"dapp-core-component__form-module__formFieldset",formWrapper:"dapp-core-component__form-module__formWrapper","form-buttons":"dapp-core-component__form-module__form-buttons",formButtons:"dapp-core-component__form-module__form-buttons"};s();s();var Di=r=>{var e,o;return((e=r.nft)==null?void 0:e.type)===_o.NftEnumType.NonFungibleDCDT?"NFT":((o=r.nft)==null?void 0:o.type)===_o.NftEnumType.SemiFungibleDCDT?"SFT":r.tokenDetails.ticker},Ri=({className:r,GuardianScreen:e})=>{let{formInfo:o,accountInfo:n,amountInfo:l,tokensInfo:d}=ue(),{values:p}=(0,Pa.useFormikContext)(),{txType:i,tokenId:_,address:u,balance:g,chainId:b,ledger:w}=p,{nft:k}=d,[y,S]=(0,Y.useState)(),{amountRange:E,onSetAmountPercentage:I}=l,{renderKey:T,onValidateForm:A,onInvalidateForm:D,onCloseForm:R,onSubmitForm:P,onPreviewClick:fe,areValidatedValuesReady:G,isGuardianScreenVisible:K,uiOptions:z,readonly:ve,setGuardedTransaction:ie,setHasGuardianScreen:L}=o,M=()=>Qe(void 0,null,function*(){if(!G)return;let se=yield $a(p);try{let le=yield tl({address:u,balance:g,chainId:b,nonce:n.nonce,values:se});le.setVersion(wt.TransactionVersion.withTxOptions());let B=U({guarded:!0},w?{hashSign:!0}:{});le.setOptions(wt.TransactionOptions.withOptions(B)),S({0:le})}catch(le){S({})}});(0,Y.useEffect)(()=>{M()},[p,G]),(0,Y.useEffect)(()=>{L(Boolean(e))},[]),(0,Y.useEffect)(()=>{if(!y)return;let se=y[0];se&&ie(se)},[y]);let O=se=>{se.preventDefault(),R()},ne=i==="NonFungibleDCDT",ae=i==="SemiFungibleDCDT",Se={onSignTransaction:()=>Qe(void 0,null,function*(){setTimeout(()=>{P()})}),onPrev:D,address:u,title:"",className:r,signedTransactions:y,setSignedTransactions:S,signStepInnerClasses:{}};return e&&K?Y.default.createElement(e,U({},Se)):G?Y.default.createElement(hc,{providerType:n.providerType}):Y.default.createElement("form",{key:T,onSubmit:A,className:(0,Ma.default)(Or.form,r)},Y.default.createElement("fieldset",{className:Or.formFieldset},(ne||ae)&&k&&Y.default.createElement(kn,U({onClick:fe,txType:i},k)),Y.default.createElement(sp,null),ae?Y.default.createElement(up,null):Y.default.createElement(mi,null),(z==null?void 0:z.showAmountSlider)&&!ne&&Y.default.createElement(hi,{onPercentageChange:I,percentageValue:E,disabled:Boolean(ve)}),Y.default.createElement(Li,{tokenId:_}),Y.default.createElement(Ai,null),Y.default.createElement(Dp,null),Y.default.createElement(bi,null)),Y.default.createElement("div",{className:Or.formButtons},Y.default.createElement("button",{type:"button",id:"sendBtn","data-testid":"sendBtn",onClick:A,className:q.buttonSend},"Send ",Di(d)),Y.default.createElement("button",{type:"button",id:"closeButton","data-testid":"returnToWalletBtn",onClick:O,className:q.buttonText},"Cancel")))};});var Lo={};module.exports=$n(Lo);ge();Po(Lo,pr(Ln()),module.exports);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.d.js.map
