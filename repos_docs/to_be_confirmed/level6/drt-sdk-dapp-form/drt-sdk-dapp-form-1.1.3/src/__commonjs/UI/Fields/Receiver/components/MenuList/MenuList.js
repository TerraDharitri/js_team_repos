"use strict";var qe=Object.create;var W=Object.defineProperty,He=Object.defineProperties,Ve=Object.getOwnPropertyDescriptor,Xe=Object.getOwnPropertyDescriptors,Ge=Object.getOwnPropertyNames,_e=Object.getOwnPropertySymbols,Ze=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var se=(r,e,o)=>e in r?W(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,q=(r,e)=>{for(var o in e||(e={}))ie.call(e,o)&&se(r,o,e[o]);if(_e)for(var o of _e(e))Je.call(e,o)&&se(r,o,e[o]);return r},ae=(r,e)=>He(r,Xe(e));var me=(r,e)=>()=>(r&&(e=r(r=0)),e);var H=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),de=(r,e)=>{for(var o in e)W(r,o,{get:e[o],enumerable:!0})},ue=(r,e,o,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of Ge(e))!ie.call(r,c)&&c!==o&&W(r,c,{get:()=>e[c],enumerable:!(t=Ve(e,c))||t.enumerable});return r};var O=(r,e,o)=>(o=r!=null?qe(Ze(r)):{},ue(e||!r||!r.__esModule?W(o,"default",{value:r,enumerable:!0}):o,r)),ye=r=>ue(W({},"__esModule",{value:!0}),r);var he=H(V=>{"use strict";y();V.byteLength=Ke;V.toByteArray=je;V.fromByteArray=oo;var b=[],w=[],Qe=typeof Uint8Array!="undefined"?Uint8Array:Array,K="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(L=0,ve=K.length;L<ve;++L)b[L]=K[L],w[K.charCodeAt(L)]=L;var L,ve;w["-".charCodeAt(0)]=62;w["_".charCodeAt(0)]=63;function fe(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=r.indexOf("=");o===-1&&(o=e);var t=o===e?0:4-o%4;return[o,t]}function Ke(r){var e=fe(r),o=e[0],t=e[1];return(o+t)*3/4-t}function $e(r,e,o){return(e+o)*3/4-o}function je(r){var e,o=fe(r),t=o[0],c=o[1],n=new Qe($e(r,t,c)),p=0,_=c>0?t-4:t,s;for(s=0;s<_;s+=4)e=w[r.charCodeAt(s)]<<18|w[r.charCodeAt(s+1)]<<12|w[r.charCodeAt(s+2)]<<6|w[r.charCodeAt(s+3)],n[p++]=e>>16&255,n[p++]=e>>8&255,n[p++]=e&255;return c===2&&(e=w[r.charCodeAt(s)]<<2|w[r.charCodeAt(s+1)]>>4,n[p++]=e&255),c===1&&(e=w[r.charCodeAt(s)]<<10|w[r.charCodeAt(s+1)]<<4|w[r.charCodeAt(s+2)]>>2,n[p++]=e>>8&255,n[p++]=e&255),n}function Pe(r){return b[r>>18&63]+b[r>>12&63]+b[r>>6&63]+b[r&63]}function eo(r,e,o){for(var t,c=[],n=e;n<o;n+=3)t=(r[n]<<16&16711680)+(r[n+1]<<8&65280)+(r[n+2]&255),c.push(Pe(t));return c.join("")}function oo(r){for(var e,o=r.length,t=o%3,c=[],n=16383,p=0,_=o-t;p<_;p+=n)c.push(eo(r,p,p+n>_?_:p+n));return t===1?(e=r[o-1],c.push(b[e>>2]+b[e<<4&63]+"==")):t===2&&(e=(r[o-2]<<8)+r[o-1],c.push(b[e>>10]+b[e>>4&63]+b[e<<2&63]+"=")),c.join("")}});var xe=H($=>{y();$.read=function(r,e,o,t,c){var n,p,_=c*8-t-1,s=(1<<_)-1,m=s>>1,i=-7,a=o?c-1:0,x=o?-1:1,f=r[e+a];for(a+=x,n=f&(1<<-i)-1,f>>=-i,i+=_;i>0;n=n*256+r[e+a],a+=x,i-=8);for(p=n&(1<<-i)-1,n>>=-i,i+=t;i>0;p=p*256+r[e+a],a+=x,i-=8);if(n===0)n=1-m;else{if(n===s)return p?NaN:(f?-1:1)*(1/0);p=p+Math.pow(2,t),n=n-m}return(f?-1:1)*p*Math.pow(2,n-t)};$.write=function(r,e,o,t,c,n){var p,_,s,m=n*8-c-1,i=(1<<m)-1,a=i>>1,x=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=t?0:n-1,I=t?1:-1,Ye=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(_=isNaN(e)?1:0,p=i):(p=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-p))<1&&(p--,s*=2),p+a>=1?e+=x/s:e+=x*Math.pow(2,1-a),e*s>=2&&(p++,s/=2),p+a>=i?(_=0,p=i):p+a>=1?(_=(e*s-1)*Math.pow(2,c),p=p+a):(_=e*Math.pow(2,a-1)*Math.pow(2,c),p=0));c>=8;r[o+f]=_&255,f+=I,_/=256,c-=8);for(p=p<<c|_,m+=c;m>0;r[o+f]=p&255,f+=I,p/=256,m-=8);r[o+f-I]|=Ye*128}});var Le=H(R=>{"use strict";y();var j=he(),D=xe(),ge=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;R.Buffer=l;R.SlowBuffer=lo;R.INSPECT_MAX_BYTES=50;var X=2147483647;R.kMaxLength=X;l.TYPED_ARRAY_SUPPORT=ro();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ro(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch(o){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function B(r){if(r>X)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,l.prototype),e}function l(r,e,o){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return re(r)}return Ee(r,e,o)}l.poolSize=8192;function Ee(r,e,o){if(typeof r=="string")return co(r,e);if(ArrayBuffer.isView(r))return no(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(E(r,ArrayBuffer)||r&&E(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(E(r,SharedArrayBuffer)||r&&E(r.buffer,SharedArrayBuffer)))return ee(r,e,o);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var t=r.valueOf&&r.valueOf();if(t!=null&&t!==r)return l.from(t,e,o);var c=po(r);if(c)return c;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return l.from(r[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}l.from=function(r,e,o){return Ee(r,e,o)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function Ae(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function to(r,e,o){return Ae(r),r<=0?B(r):e!==void 0?typeof o=="string"?B(r).fill(e,o):B(r).fill(e):B(r)}l.alloc=function(r,e,o){return to(r,e,o)};function re(r){return Ae(r),B(r<0?0:te(r)|0)}l.allocUnsafe=function(r){return re(r)};l.allocUnsafeSlow=function(r){return re(r)};function co(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Fe(r,e)|0,t=B(o),c=t.write(r,e);return c!==o&&(t=t.slice(0,c)),t}function P(r){for(var e=r.length<0?0:te(r.length)|0,o=B(e),t=0;t<e;t+=1)o[t]=r[t]&255;return o}function no(r){if(E(r,Uint8Array)){var e=new Uint8Array(r);return ee(e.buffer,e.byteOffset,e.byteLength)}return P(r)}function ee(r,e,o){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var t;return e===void 0&&o===void 0?t=new Uint8Array(r):o===void 0?t=new Uint8Array(r,e):t=new Uint8Array(r,e,o),Object.setPrototypeOf(t,l.prototype),t}function po(r){if(l.isBuffer(r)){var e=te(r.length)|0,o=B(e);return o.length===0||r.copy(o,0,0,e),o}if(r.length!==void 0)return typeof r.length!="number"||ce(r.length)?B(0):P(r);if(r.type==="Buffer"&&Array.isArray(r.data))return P(r.data)}function te(r){if(r>=X)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+X.toString(16)+" bytes");return r|0}function lo(r){return+r!=r&&(r=0),l.alloc(+r)}l.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==l.prototype};l.compare=function(e,o){if(E(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),E(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(e)||!l.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var t=e.length,c=o.length,n=0,p=Math.min(t,c);n<p;++n)if(e[n]!==o[n]){t=e[n],c=o[n];break}return t<c?-1:c<t?1:0};l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return l.alloc(0);var t;if(o===void 0)for(o=0,t=0;t<e.length;++t)o+=e[t].length;var c=l.allocUnsafe(o),n=0;for(t=0;t<e.length;++t){var p=e[t];if(E(p,Uint8Array))n+p.length>c.length?l.from(p).copy(c,n):Uint8Array.prototype.set.call(c,p,n);else if(l.isBuffer(p))p.copy(c,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=p.length}return c};function Fe(r,e){if(l.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||E(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var o=r.length,t=arguments.length>2&&arguments[2]===!0;if(!t&&o===0)return 0;for(var c=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return oe(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return ke(r).length;default:if(c)return t?-1:oe(r).length;e=(""+e).toLowerCase(),c=!0}}l.byteLength=Fe;function _o(r,e,o){var t=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return xo(this,e,o);case"utf8":case"utf-8":return Ue(this,e,o);case"ascii":return fo(this,e,o);case"latin1":case"binary":return ho(this,e,o);case"base64":return yo(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return go(this,e,o);default:if(t)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),t=!0}}l.prototype._isBuffer=!0;function M(r,e,o){var t=r[e];r[e]=r[o],r[o]=t}l.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)M(this,o,o+1);return this};l.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)M(this,o,o+3),M(this,o+1,o+2);return this};l.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)M(this,o,o+7),M(this,o+1,o+6),M(this,o+2,o+5),M(this,o+3,o+4);return this};l.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Ue(this,0,e):_o.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:l.compare(this,e)===0};l.prototype.inspect=function(){var e="",o=R.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};ge&&(l.prototype[ge]=l.prototype.inspect);l.prototype.compare=function(e,o,t,c,n){if(E(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),t===void 0&&(t=e?e.length:0),c===void 0&&(c=0),n===void 0&&(n=this.length),o<0||t>e.length||c<0||n>this.length)throw new RangeError("out of range index");if(c>=n&&o>=t)return 0;if(c>=n)return-1;if(o>=t)return 1;if(o>>>=0,t>>>=0,c>>>=0,n>>>=0,this===e)return 0;for(var p=n-c,_=t-o,s=Math.min(p,_),m=this.slice(c,n),i=e.slice(o,t),a=0;a<s;++a)if(m[a]!==i[a]){p=m[a],_=i[a];break}return p<_?-1:_<p?1:0};function Be(r,e,o,t,c){if(r.length===0)return-1;if(typeof o=="string"?(t=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,ce(o)&&(o=c?0:r.length-1),o<0&&(o=r.length+o),o>=r.length){if(c)return-1;o=r.length-1}else if(o<0)if(c)o=0;else return-1;if(typeof e=="string"&&(e=l.from(e,t)),l.isBuffer(e))return e.length===0?-1:we(r,e,o,t,c);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?c?Uint8Array.prototype.indexOf.call(r,e,o):Uint8Array.prototype.lastIndexOf.call(r,e,o):we(r,[e],o,t,c);throw new TypeError("val must be string, number or Buffer")}function we(r,e,o,t,c){var n=1,p=r.length,_=e.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(r.length<2||e.length<2)return-1;n=2,p/=2,_/=2,o/=2}function s(f,I){return n===1?f[I]:f.readUInt16BE(I*n)}var m;if(c){var i=-1;for(m=o;m<p;m++)if(s(r,m)===s(e,i===-1?0:m-i)){if(i===-1&&(i=m),m-i+1===_)return i*n}else i!==-1&&(m-=m-i),i=-1}else for(o+_>p&&(o=p-_),m=o;m>=0;m--){for(var a=!0,x=0;x<_;x++)if(s(r,m+x)!==s(e,x)){a=!1;break}if(a)return m}return-1}l.prototype.includes=function(e,o,t){return this.indexOf(e,o,t)!==-1};l.prototype.indexOf=function(e,o,t){return Be(this,e,o,t,!0)};l.prototype.lastIndexOf=function(e,o,t){return Be(this,e,o,t,!1)};function so(r,e,o,t){o=Number(o)||0;var c=r.length-o;t?(t=Number(t),t>c&&(t=c)):t=c;var n=e.length;t>n/2&&(t=n/2);for(var p=0;p<t;++p){var _=parseInt(e.substr(p*2,2),16);if(ce(_))return p;r[o+p]=_}return p}function io(r,e,o,t){return G(oe(e,r.length-o),r,o,t)}function ao(r,e,o,t){return G(Eo(e),r,o,t)}function mo(r,e,o,t){return G(ke(e),r,o,t)}function uo(r,e,o,t){return G(Ao(e,r.length-o),r,o,t)}l.prototype.write=function(e,o,t,c){if(o===void 0)c="utf8",t=this.length,o=0;else if(t===void 0&&typeof o=="string")c=o,t=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(t)?(t=t>>>0,c===void 0&&(c="utf8")):(c=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var n=this.length-o;if((t===void 0||t>n)&&(t=n),e.length>0&&(t<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");c||(c="utf8");for(var p=!1;;)switch(c){case"hex":return so(this,e,o,t);case"utf8":case"utf-8":return io(this,e,o,t);case"ascii":case"latin1":case"binary":return ao(this,e,o,t);case"base64":return mo(this,e,o,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return uo(this,e,o,t);default:if(p)throw new TypeError("Unknown encoding: "+c);c=(""+c).toLowerCase(),p=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function yo(r,e,o){return e===0&&o===r.length?j.fromByteArray(r):j.fromByteArray(r.slice(e,o))}function Ue(r,e,o){o=Math.min(r.length,o);for(var t=[],c=e;c<o;){var n=r[c],p=null,_=n>239?4:n>223?3:n>191?2:1;if(c+_<=o){var s,m,i,a;switch(_){case 1:n<128&&(p=n);break;case 2:s=r[c+1],(s&192)===128&&(a=(n&31)<<6|s&63,a>127&&(p=a));break;case 3:s=r[c+1],m=r[c+2],(s&192)===128&&(m&192)===128&&(a=(n&15)<<12|(s&63)<<6|m&63,a>2047&&(a<55296||a>57343)&&(p=a));break;case 4:s=r[c+1],m=r[c+2],i=r[c+3],(s&192)===128&&(m&192)===128&&(i&192)===128&&(a=(n&15)<<18|(s&63)<<12|(m&63)<<6|i&63,a>65535&&a<1114112&&(p=a))}}p===null?(p=65533,_=1):p>65535&&(p-=65536,t.push(p>>>10&1023|55296),p=56320|p&1023),t.push(p),c+=_}return vo(t)}var be=4096;function vo(r){var e=r.length;if(e<=be)return String.fromCharCode.apply(String,r);for(var o="",t=0;t<e;)o+=String.fromCharCode.apply(String,r.slice(t,t+=be));return o}function fo(r,e,o){var t="";o=Math.min(r.length,o);for(var c=e;c<o;++c)t+=String.fromCharCode(r[c]&127);return t}function ho(r,e,o){var t="";o=Math.min(r.length,o);for(var c=e;c<o;++c)t+=String.fromCharCode(r[c]);return t}function xo(r,e,o){var t=r.length;(!e||e<0)&&(e=0),(!o||o<0||o>t)&&(o=t);for(var c="",n=e;n<o;++n)c+=Fo[r[n]];return c}function go(r,e,o){for(var t=r.slice(e,o),c="",n=0;n<t.length-1;n+=2)c+=String.fromCharCode(t[n]+t[n+1]*256);return c}l.prototype.slice=function(e,o){var t=this.length;e=~~e,o=o===void 0?t:~~o,e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),o<0?(o+=t,o<0&&(o=0)):o>t&&(o=t),o<e&&(o=e);var c=this.subarray(e,o);return Object.setPrototypeOf(c,l.prototype),c};function u(r,e,o){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>o)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||u(e,o,this.length);for(var c=this[e],n=1,p=0;++p<o&&(n*=256);)c+=this[e+p]*n;return c};l.prototype.readUintBE=l.prototype.readUIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||u(e,o,this.length);for(var c=this[e+--o],n=1;o>0&&(n*=256);)c+=this[e+--o]*n;return c};l.prototype.readUint8=l.prototype.readUInt8=function(e,o){return e=e>>>0,o||u(e,1,this.length),this[e]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||u(e,2,this.length),this[e]|this[e+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||u(e,2,this.length),this[e]<<8|this[e+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||u(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||u(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};l.prototype.readIntLE=function(e,o,t){e=e>>>0,o=o>>>0,t||u(e,o,this.length);for(var c=this[e],n=1,p=0;++p<o&&(n*=256);)c+=this[e+p]*n;return n*=128,c>=n&&(c-=Math.pow(2,8*o)),c};l.prototype.readIntBE=function(e,o,t){e=e>>>0,o=o>>>0,t||u(e,o,this.length);for(var c=o,n=1,p=this[e+--c];c>0&&(n*=256);)p+=this[e+--c]*n;return n*=128,p>=n&&(p-=Math.pow(2,8*o)),p};l.prototype.readInt8=function(e,o){return e=e>>>0,o||u(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};l.prototype.readInt16LE=function(e,o){e=e>>>0,o||u(e,2,this.length);var t=this[e]|this[e+1]<<8;return t&32768?t|4294901760:t};l.prototype.readInt16BE=function(e,o){e=e>>>0,o||u(e,2,this.length);var t=this[e+1]|this[e]<<8;return t&32768?t|4294901760:t};l.prototype.readInt32LE=function(e,o){return e=e>>>0,o||u(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};l.prototype.readInt32BE=function(e,o){return e=e>>>0,o||u(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};l.prototype.readFloatLE=function(e,o){return e=e>>>0,o||u(e,4,this.length),D.read(this,e,!0,23,4)};l.prototype.readFloatBE=function(e,o){return e=e>>>0,o||u(e,4,this.length),D.read(this,e,!1,23,4)};l.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||u(e,8,this.length),D.read(this,e,!0,52,8)};l.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||u(e,8,this.length),D.read(this,e,!1,52,8)};function h(r,e,o,t,c,n){if(!l.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>c||e<n)throw new RangeError('"value" argument is out of bounds');if(o+t>r.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,o,t,c){if(e=+e,o=o>>>0,t=t>>>0,!c){var n=Math.pow(2,8*t)-1;h(this,e,o,t,n,0)}var p=1,_=0;for(this[o]=e&255;++_<t&&(p*=256);)this[o+_]=e/p&255;return o+t};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,o,t,c){if(e=+e,o=o>>>0,t=t>>>0,!c){var n=Math.pow(2,8*t)-1;h(this,e,o,t,n,0)}var p=t-1,_=1;for(this[o+p]=e&255;--p>=0&&(_*=256);)this[o+p]=e/_&255;return o+t};l.prototype.writeUint8=l.prototype.writeUInt8=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,1,255,0),this[o]=e&255,o+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};l.prototype.writeIntLE=function(e,o,t,c){if(e=+e,o=o>>>0,!c){var n=Math.pow(2,8*t-1);h(this,e,o,t,n-1,-n)}var p=0,_=1,s=0;for(this[o]=e&255;++p<t&&(_*=256);)e<0&&s===0&&this[o+p-1]!==0&&(s=1),this[o+p]=(e/_>>0)-s&255;return o+t};l.prototype.writeIntBE=function(e,o,t,c){if(e=+e,o=o>>>0,!c){var n=Math.pow(2,8*t-1);h(this,e,o,t,n-1,-n)}var p=t-1,_=1,s=0;for(this[o+p]=e&255;--p>=0&&(_*=256);)e<0&&s===0&&this[o+p+1]!==0&&(s=1),this[o+p]=(e/_>>0)-s&255;return o+t};l.prototype.writeInt8=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};l.prototype.writeInt16LE=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};l.prototype.writeInt16BE=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};l.prototype.writeInt32LE=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};l.prototype.writeInt32BE=function(e,o,t){return e=+e,o=o>>>0,t||h(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function Se(r,e,o,t,c,n){if(o+t>r.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function Ie(r,e,o,t,c){return e=+e,o=o>>>0,c||Se(r,e,o,4,34028234663852886e22,-34028234663852886e22),D.write(r,e,o,t,23,4),o+4}l.prototype.writeFloatLE=function(e,o,t){return Ie(this,e,o,!0,t)};l.prototype.writeFloatBE=function(e,o,t){return Ie(this,e,o,!1,t)};function Te(r,e,o,t,c){return e=+e,o=o>>>0,c||Se(r,e,o,8,17976931348623157e292,-17976931348623157e292),D.write(r,e,o,t,52,8),o+8}l.prototype.writeDoubleLE=function(e,o,t){return Te(this,e,o,!0,t)};l.prototype.writeDoubleBE=function(e,o,t){return Te(this,e,o,!1,t)};l.prototype.copy=function(e,o,t,c){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(t||(t=0),!c&&c!==0&&(c=this.length),o>=e.length&&(o=e.length),o||(o=0),c>0&&c<t&&(c=t),c===t||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("sourceEnd out of bounds");c>this.length&&(c=this.length),e.length-o<c-t&&(c=e.length-o+t);var n=c-t;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,t,c):Uint8Array.prototype.set.call(e,this.subarray(t,c),o),n};l.prototype.fill=function(e,o,t,c){if(typeof e=="string"){if(typeof o=="string"?(c=o,o=0,t=this.length):typeof t=="string"&&(c=t,t=this.length),c!==void 0&&typeof c!="string")throw new TypeError("encoding must be a string");if(typeof c=="string"&&!l.isEncoding(c))throw new TypeError("Unknown encoding: "+c);if(e.length===1){var n=e.charCodeAt(0);(c==="utf8"&&n<128||c==="latin1")&&(e=n)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<t)throw new RangeError("Out of range index");if(t<=o)return this;o=o>>>0,t=t===void 0?this.length:t>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<t;++p)this[p]=e;else{var _=l.isBuffer(e)?e:l.from(e,c),s=_.length;if(s===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<t-o;++p)this[p+o]=_[p%s]}return this};var wo=/[^+/0-9A-Za-z-_]/g;function bo(r){if(r=r.split("=")[0],r=r.trim().replace(wo,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function oe(r,e){e=e||1/0;for(var o,t=r.length,c=null,n=[],p=0;p<t;++p){if(o=r.charCodeAt(p),o>55295&&o<57344){if(!c){if(o>56319){(e-=3)>-1&&n.push(239,191,189);continue}else if(p+1===t){(e-=3)>-1&&n.push(239,191,189);continue}c=o;continue}if(o<56320){(e-=3)>-1&&n.push(239,191,189),c=o;continue}o=(c-55296<<10|o-56320)+65536}else c&&(e-=3)>-1&&n.push(239,191,189);if(c=null,o<128){if((e-=1)<0)break;n.push(o)}else if(o<2048){if((e-=2)<0)break;n.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;n.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;n.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return n}function Eo(r){for(var e=[],o=0;o<r.length;++o)e.push(r.charCodeAt(o)&255);return e}function Ao(r,e){for(var o,t,c,n=[],p=0;p<r.length&&!((e-=2)<0);++p)o=r.charCodeAt(p),t=o>>8,c=o%256,n.push(c),n.push(t);return n}function ke(r){return j.toByteArray(bo(r))}function G(r,e,o,t){for(var c=0;c<t&&!(c+o>=e.length||c>=r.length);++c)e[c+o]=r[c];return c}function E(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function ce(r){return r!==r}var Fo=function(){for(var r="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var t=o*16,c=0;c<16;++c)e[t+c]=r[o]+r[c];return e}()});var Re=H((Ro,De)=>{y();var d=De.exports={},A,F;function ne(){throw new Error("setTimeout has not been defined")}function pe(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?A=setTimeout:A=ne}catch(r){A=ne}try{typeof clearTimeout=="function"?F=clearTimeout:F=pe}catch(r){F=pe}})();function Ce(r){if(A===setTimeout)return setTimeout(r,0);if((A===ne||!A)&&setTimeout)return A=setTimeout,setTimeout(r,0);try{return A(r,0)}catch(e){try{return A.call(null,r,0)}catch(o){return A.call(this,r,0)}}}function Bo(r){if(F===clearTimeout)return clearTimeout(r);if((F===pe||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(r);try{return F(r)}catch(e){try{return F.call(null,r)}catch(o){return F.call(this,r)}}}var U=[],z=!1,N,Z=-1;function Uo(){!z||!N||(z=!1,N.length?U=N.concat(U):Z=-1,U.length&&Me())}function Me(){if(!z){var r=Ce(Uo);z=!0;for(var e=U.length;e;){for(N=U,U=[];++Z<e;)N&&N[Z].run();Z=-1,e=U.length}N=null,z=!1,Bo(r)}}d.nextTick=function(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];U.push(new Ne(r,e)),U.length===1&&!z&&Ce(Me)};function Ne(r,e){this.fun=r,this.array=e}Ne.prototype.run=function(){this.fun.apply(null,this.array)};d.title="browser";d.browser=!0;d.env={};d.argv=[];d.version="";d.versions={};function S(){}d.on=S;d.addListener=S;d.once=S;d.off=S;d.removeListener=S;d.removeAllListeners=S;d.emit=S;d.prependListener=S;d.prependOnceListener=S;d.listeners=function(r){return[]};d.binding=function(r){throw new Error("process.binding is not supported")};d.cwd=function(){return"/"};d.chdir=function(r){throw new Error("process.chdir is not supported")};d.umask=function(){return 0}});var T,k,zo,y=me(()=>{T=O(Le()),k=O(Re()),zo=function(r){function e(){var t=this||self;return delete r.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var ze={};de(ze,{default:()=>To});var J,Io,To,We=me(()=>{"use strict";y();J=O(require("react")),Io=r=>J.createElement("svg",q({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},r),J.createElement("g",null,J.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),To=Io});var Lo={};de(Lo,{MenuList:()=>ko});module.exports=ye(Lo);y();var v=O(require("react")),Q=require("@terradharitri/sdk-dapp/UI/Trim"),Y=O(require("classnames")),Oe=require("react-select");y();var So=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(So));var g={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};y();var{default:le}=(We(),ye(ze));var ko=r=>{let{selectProps:e,focusedOption:o}=r,{value:t,inputValue:c}=e,n=o,p=n?n.label.toLowerCase():null,_=n&&n.label!==n.value,i=(p&&(!t||t&&c)?p.startsWith(c.toLowerCase()):!1)&&n?n.label.replace(n.label.substring(0,c.length),c):null,a=i&&!c,x=i&&c.length<i.length/2,f=i&&Boolean(c)&&x,I=i&&Boolean(c);return v.default.createElement(v.default.Fragment,null,f&&!_&&v.default.createElement("div",{className:(0,Y.default)(g.receiverSelectAutocomplete,g.receiverSelectAutocompleteUntrimmed)},i),I&&_&&v.default.createElement("div",{className:(0,Y.default)(g.receiverSelectAutocomplete,g.receiverSelectAutocompleteUsername)},v.default.createElement(le,{className:g.receiverSelectAutocompleteIcon}),i,v.default.createElement("span",{className:g.receiverSelectAutocompleteWrapper},"(",v.default.createElement(Q.Trim,{text:n.value}),")")),a&&v.default.createElement("span",{className:(0,Y.default)(g.receiverSelectAutocomplete,{[g.receiverSelectAutocompleteUsername]:_})},_?v.default.createElement(v.default.Fragment,null,v.default.createElement("span",null,v.default.createElement(le,{className:(0,Y.default)(g.receiverSelectAutocompleteIcon,g.receiverSelectAutocompleteIconMuted)}),n.label),v.default.createElement("span",{className:g.receiverSelectAutocompleteWrapper},"(",v.default.createElement(Q.Trim,{text:n.value}),")")):v.default.createElement(Q.Trim,{text:i})),v.default.createElement(Oe.components.MenuList,ae(q({},r),{className:g.receiverSelectList})))};0&&(module.exports={MenuList});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=MenuList.js.map
