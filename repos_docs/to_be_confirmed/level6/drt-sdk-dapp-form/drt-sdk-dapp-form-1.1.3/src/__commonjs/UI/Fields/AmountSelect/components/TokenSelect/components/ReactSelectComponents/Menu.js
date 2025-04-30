"use strict";var Re=Object.create;var D=Object.defineProperty,De=Object.defineProperties,Ne=Object.getOwnPropertyDescriptor,ze=Object.getOwnPropertyDescriptors,We=Object.getOwnPropertyNames,ne=Object.getOwnPropertySymbols,Ye=Object.getPrototypeOf,pe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var re=(t,e,o)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ce=(t,e)=>{for(var o in e||(e={}))pe.call(e,o)&&re(t,o,e[o]);if(ne)for(var o of ne(e))qe.call(e,o)&&re(t,o,e[o]);return t},le=(t,e)=>De(t,ze(e));var He=(t,e)=>()=>(t&&(e=t(t=0)),e);var z=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Xe=(t,e)=>{for(var o in e)D(t,o,{get:e[o],enumerable:!0})},ie=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of We(e))!pe.call(t,r)&&r!==o&&D(t,r,{get:()=>e[r],enumerable:!(n=Ne(e,r))||n.enumerable});return t};var G=(t,e,o)=>(o=t!=null?Re(Ye(t)):{},ie(e||!t||!t.__esModule?D(o,"default",{value:t,enumerable:!0}):o,t)),Ge=t=>ie(D({},"__esModule",{value:!0}),t);var ue=z(W=>{"use strict";k();W.byteLength=Qe;W.toByteArray=Ze;W.fromByteArray=je;var x=[],S=[],Je=typeof Uint8Array!="undefined"?Uint8Array:Array,J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(B=0,_e=J.length;B<_e;++B)x[B]=J[B],S[J.charCodeAt(B)]=B;var B,_e;S["-".charCodeAt(0)]=62;S["_".charCodeAt(0)]=63;function ae(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function Qe(t){var e=ae(t),o=e[0],n=e[1];return(o+n)*3/4-n}function Ve(t,e,o){return(e+o)*3/4-o}function Ze(t){var e,o=ae(t),n=o[0],r=o[1],p=new Je(Ve(t,n,r)),c=0,i=r>0?n-4:n,_;for(_=0;_<i;_+=4)e=S[t.charCodeAt(_)]<<18|S[t.charCodeAt(_+1)]<<12|S[t.charCodeAt(_+2)]<<6|S[t.charCodeAt(_+3)],p[c++]=e>>16&255,p[c++]=e>>8&255,p[c++]=e&255;return r===2&&(e=S[t.charCodeAt(_)]<<2|S[t.charCodeAt(_+1)]>>4,p[c++]=e&255),r===1&&(e=S[t.charCodeAt(_)]<<10|S[t.charCodeAt(_+1)]<<4|S[t.charCodeAt(_+2)]>>2,p[c++]=e>>8&255,p[c++]=e&255),p}function Ke(t){return x[t>>18&63]+x[t>>12&63]+x[t>>6&63]+x[t&63]}function Oe(t,e,o){for(var n,r=[],p=e;p<o;p+=3)n=(t[p]<<16&16711680)+(t[p+1]<<8&65280)+(t[p+2]&255),r.push(Ke(n));return r.join("")}function je(t){for(var e,o=t.length,n=o%3,r=[],p=16383,c=0,i=o-n;c<i;c+=p)r.push(Oe(t,c,c+p>i?i:c+p));return n===1?(e=t[o-1],r.push(x[e>>2]+x[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],r.push(x[e>>10]+x[e>>4&63]+x[e<<2&63]+"=")),r.join("")}});var me=z(Q=>{k();Q.read=function(t,e,o,n,r){var p,c,i=r*8-n-1,_=(1<<i)-1,u=_>>1,m=-7,a=o?r-1:0,w=o?-1:1,f=t[e+a];for(a+=w,p=f&(1<<-m)-1,f>>=-m,m+=i;m>0;p=p*256+t[e+a],a+=w,m-=8);for(c=p&(1<<-m)-1,p>>=-m,m+=n;m>0;c=c*256+t[e+a],a+=w,m-=8);if(p===0)p=1-u;else{if(p===_)return c?NaN:(f?-1:1)*(1/0);c=c+Math.pow(2,n),p=p-u}return(f?-1:1)*c*Math.pow(2,p-n)};Q.write=function(t,e,o,n,r,p){var c,i,_,u=p*8-r-1,m=(1<<u)-1,a=m>>1,w=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:p-1,T=n?1:-1,Me=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(i=isNaN(e)?1:0,c=m):(c=Math.floor(Math.log(e)/Math.LN2),e*(_=Math.pow(2,-c))<1&&(c--,_*=2),c+a>=1?e+=w/_:e+=w*Math.pow(2,1-a),e*_>=2&&(c++,_/=2),c+a>=m?(i=0,c=m):c+a>=1?(i=(e*_-1)*Math.pow(2,r),c=c+a):(i=e*Math.pow(2,a-1)*Math.pow(2,r),c=0));r>=8;t[o+f]=i&255,f+=T,i/=256,r-=8);for(c=c<<r|i,u+=r;u>0;t[o+f]=c&255,f+=T,c/=256,u-=8);t[o+f-T]|=Me*128}});var Fe=z(M=>{"use strict";k();var V=ue(),L=me(),de=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;M.Buffer=l;M.SlowBuffer=no;M.INSPECT_MAX_BYTES=50;var Y=2147483647;M.kMaxLength=Y;l.TYPED_ARRAY_SUPPORT=$e();!l.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function $e(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.buffer}});Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(!!l.isBuffer(this))return this.byteOffset}});function E(t){if(t>Y)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}function l(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return j(t)}return fe(t,e,o)}l.poolSize=8192;function fe(t,e,o){if(typeof t=="string")return eo(t,e);if(ArrayBuffer.isView(t))return oo(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(y(t,ArrayBuffer)||t&&y(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(y(t,SharedArrayBuffer)||t&&y(t.buffer,SharedArrayBuffer)))return K(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return l.from(n,e,o);var r=to(t);if(r)return r;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return l.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}l.from=function(t,e,o){return fe(t,e,o)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function ke(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function Pe(t,e,o){return ke(t),t<=0?E(t):e!==void 0?typeof o=="string"?E(t).fill(e,o):E(t).fill(e):E(t)}l.alloc=function(t,e,o){return Pe(t,e,o)};function j(t){return ke(t),E(t<0?0:$(t)|0)}l.allocUnsafe=function(t){return j(t)};l.allocUnsafeSlow=function(t){return j(t)};function eo(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Se(t,e)|0,n=E(o),r=n.write(t,e);return r!==o&&(n=n.slice(0,r)),n}function Z(t){for(var e=t.length<0?0:$(t.length)|0,o=E(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function oo(t){if(y(t,Uint8Array)){var e=new Uint8Array(t);return K(e.buffer,e.byteOffset,e.byteLength)}return Z(t)}function K(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,l.prototype),n}function to(t){if(l.isBuffer(t)){var e=$(t.length)|0,o=E(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||P(t.length)?E(0):Z(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Z(t.data)}function $(t){if(t>=Y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Y.toString(16)+" bytes");return t|0}function no(t){return+t!=t&&(t=0),l.alloc(+t)}l.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==l.prototype};l.compare=function(e,o){if(y(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),y(o,Uint8Array)&&(o=l.from(o,o.offset,o.byteLength)),!l.isBuffer(e)||!l.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,r=o.length,p=0,c=Math.min(n,r);p<c;++p)if(e[p]!==o[p]){n=e[p],r=o[p];break}return n<r?-1:r<n?1:0};l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};l.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return l.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var r=l.allocUnsafe(o),p=0;for(n=0;n<e.length;++n){var c=e[n];if(y(c,Uint8Array))p+c.length>r.length?l.from(c).copy(r,p):Uint8Array.prototype.set.call(r,c,p);else if(l.isBuffer(c))c.copy(r,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=c.length}return r};function Se(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||y(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return O(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Ee(t).length;default:if(r)return n?-1:O(t).length;e=(""+e).toLowerCase(),r=!0}}l.byteLength=Se;function ro(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return ho(this,e,o);case"utf8":case"utf-8":return xe(this,e,o);case"ascii":return mo(this,e,o);case"latin1":case"binary":return so(this,e,o);case"base64":return ao(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fo(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}l.prototype._isBuffer=!0;function A(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}l.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)A(this,o,o+1);return this};l.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)A(this,o,o+3),A(this,o+1,o+2);return this};l.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)A(this,o,o+7),A(this,o+1,o+6),A(this,o+2,o+5),A(this,o+3,o+4);return this};l.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?xe(this,0,e):ro.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.toString;l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:l.compare(this,e)===0};l.prototype.inspect=function(){var e="",o=M.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};de&&(l.prototype[de]=l.prototype.inspect);l.prototype.compare=function(e,o,n,r,p){if(y(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),p===void 0&&(p=this.length),o<0||n>e.length||r<0||p>this.length)throw new RangeError("out of range index");if(r>=p&&o>=n)return 0;if(r>=p)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,r>>>=0,p>>>=0,this===e)return 0;for(var c=p-r,i=n-o,_=Math.min(c,i),u=this.slice(r,p),m=e.slice(o,n),a=0;a<_;++a)if(u[a]!==m[a]){c=u[a],i=m[a];break}return c<i?-1:i<c?1:0};function we(t,e,o,n,r){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,P(o)&&(o=r?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(r)return-1;o=t.length-1}else if(o<0)if(r)o=0;else return-1;if(typeof e=="string"&&(e=l.from(e,n)),l.isBuffer(e))return e.length===0?-1:se(t,e,o,n,r);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):se(t,[e],o,n,r);throw new TypeError("val must be string, number or Buffer")}function se(t,e,o,n,r){var p=1,c=t.length,i=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;p=2,c/=2,i/=2,o/=2}function _(f,T){return p===1?f[T]:f.readUInt16BE(T*p)}var u;if(r){var m=-1;for(u=o;u<c;u++)if(_(t,u)===_(e,m===-1?0:u-m)){if(m===-1&&(m=u),u-m+1===i)return m*p}else m!==-1&&(u-=u-m),m=-1}else for(o+i>c&&(o=c-i),u=o;u>=0;u--){for(var a=!0,w=0;w<i;w++)if(_(t,u+w)!==_(e,w)){a=!1;break}if(a)return u}return-1}l.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};l.prototype.indexOf=function(e,o,n){return we(this,e,o,n,!0)};l.prototype.lastIndexOf=function(e,o,n){return we(this,e,o,n,!1)};function po(t,e,o,n){o=Number(o)||0;var r=t.length-o;n?(n=Number(n),n>r&&(n=r)):n=r;var p=e.length;n>p/2&&(n=p/2);for(var c=0;c<n;++c){var i=parseInt(e.substr(c*2,2),16);if(P(i))return c;t[o+c]=i}return c}function co(t,e,o,n){return q(O(e,t.length-o),t,o,n)}function lo(t,e,o,n){return q(wo(e),t,o,n)}function io(t,e,o,n){return q(Ee(e),t,o,n)}function _o(t,e,o,n){return q(xo(e,t.length-o),t,o,n)}l.prototype.write=function(e,o,n,r){if(o===void 0)r="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")r=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,r===void 0&&(r="utf8")):(r=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-o;if((n===void 0||n>p)&&(n=p),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var c=!1;;)switch(r){case"hex":return po(this,e,o,n);case"utf8":case"utf-8":return co(this,e,o,n);case"ascii":case"latin1":case"binary":return lo(this,e,o,n);case"base64":return io(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _o(this,e,o,n);default:if(c)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),c=!0}};l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ao(t,e,o){return e===0&&o===t.length?V.fromByteArray(t):V.fromByteArray(t.slice(e,o))}function xe(t,e,o){o=Math.min(t.length,o);for(var n=[],r=e;r<o;){var p=t[r],c=null,i=p>239?4:p>223?3:p>191?2:1;if(r+i<=o){var _,u,m,a;switch(i){case 1:p<128&&(c=p);break;case 2:_=t[r+1],(_&192)===128&&(a=(p&31)<<6|_&63,a>127&&(c=a));break;case 3:_=t[r+1],u=t[r+2],(_&192)===128&&(u&192)===128&&(a=(p&15)<<12|(_&63)<<6|u&63,a>2047&&(a<55296||a>57343)&&(c=a));break;case 4:_=t[r+1],u=t[r+2],m=t[r+3],(_&192)===128&&(u&192)===128&&(m&192)===128&&(a=(p&15)<<18|(_&63)<<12|(u&63)<<6|m&63,a>65535&&a<1114112&&(c=a))}}c===null?(c=65533,i=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|c&1023),n.push(c),r+=i}return uo(n)}var he=4096;function uo(t){var e=t.length;if(e<=he)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=he));return o}function mo(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]&127);return n}function so(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]);return n}function ho(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var r="",p=e;p<o;++p)r+=yo[t[p]];return r}function fo(t,e,o){for(var n=t.slice(e,o),r="",p=0;p<n.length-1;p+=2)r+=String.fromCharCode(n[p]+n[p+1]*256);return r}l.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,l.prototype),r};function s(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||s(e,o,this.length);for(var r=this[e],p=1,c=0;++c<o&&(p*=256);)r+=this[e+c]*p;return r};l.prototype.readUintBE=l.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||s(e,o,this.length);for(var r=this[e+--o],p=1;o>0&&(p*=256);)r+=this[e+--o]*p;return r};l.prototype.readUint8=l.prototype.readUInt8=function(e,o){return e=e>>>0,o||s(e,1,this.length),this[e]};l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||s(e,2,this.length),this[e]|this[e+1]<<8};l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||s(e,2,this.length),this[e]<<8|this[e+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||s(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||s(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};l.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||s(e,o,this.length);for(var r=this[e],p=1,c=0;++c<o&&(p*=256);)r+=this[e+c]*p;return p*=128,r>=p&&(r-=Math.pow(2,8*o)),r};l.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||s(e,o,this.length);for(var r=o,p=1,c=this[e+--r];r>0&&(p*=256);)c+=this[e+--r]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*o)),c};l.prototype.readInt8=function(e,o){return e=e>>>0,o||s(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};l.prototype.readInt16LE=function(e,o){e=e>>>0,o||s(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};l.prototype.readInt16BE=function(e,o){e=e>>>0,o||s(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};l.prototype.readInt32LE=function(e,o){return e=e>>>0,o||s(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};l.prototype.readInt32BE=function(e,o){return e=e>>>0,o||s(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};l.prototype.readFloatLE=function(e,o){return e=e>>>0,o||s(e,4,this.length),L.read(this,e,!0,23,4)};l.prototype.readFloatBE=function(e,o){return e=e>>>0,o||s(e,4,this.length),L.read(this,e,!1,23,4)};l.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||s(e,8,this.length),L.read(this,e,!0,52,8)};l.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||s(e,8,this.length),L.read(this,e,!1,52,8)};function h(t,e,o,n,r,p){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<p)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var p=Math.pow(2,8*n)-1;h(this,e,o,n,p,0)}var c=1,i=0;for(this[o]=e&255;++i<n&&(c*=256);)this[o+i]=e/c&255;return o+n};l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var p=Math.pow(2,8*n)-1;h(this,e,o,n,p,0)}var c=n-1,i=1;for(this[o+c]=e&255;--c>=0&&(i*=256);)this[o+c]=e/i&255;return o+n};l.prototype.writeUint8=l.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,1,255,0),this[o]=e&255,o+1};l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};l.prototype.writeIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var p=Math.pow(2,8*n-1);h(this,e,o,n,p-1,-p)}var c=0,i=1,_=0;for(this[o]=e&255;++c<n&&(i*=256);)e<0&&_===0&&this[o+c-1]!==0&&(_=1),this[o+c]=(e/i>>0)-_&255;return o+n};l.prototype.writeIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var p=Math.pow(2,8*n-1);h(this,e,o,n,p-1,-p)}var c=n-1,i=1,_=0;for(this[o+c]=e&255;--c>=0&&(i*=256);)e<0&&_===0&&this[o+c+1]!==0&&(_=1),this[o+c]=(e/i>>0)-_&255;return o+n};l.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};l.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};l.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};l.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};l.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||h(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function ye(t,e,o,n,r,p){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ge(t,e,o,n,r){return e=+e,o=o>>>0,r||ye(t,e,o,4,34028234663852886e22,-34028234663852886e22),L.write(t,e,o,n,23,4),o+4}l.prototype.writeFloatLE=function(e,o,n){return ge(this,e,o,!0,n)};l.prototype.writeFloatBE=function(e,o,n){return ge(this,e,o,!1,n)};function ve(t,e,o,n,r){return e=+e,o=o>>>0,r||ye(t,e,o,8,17976931348623157e292,-17976931348623157e292),L.write(t,e,o,n,52,8),o+8}l.prototype.writeDoubleLE=function(e,o,n){return ve(this,e,o,!0,n)};l.prototype.writeDoubleBE=function(e,o,n){return ve(this,e,o,!1,n)};l.prototype.copy=function(e,o,n,r){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-n&&(r=e.length-o+n);var p=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),o),p};l.prototype.fill=function(e,o,n,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,n=this.length):typeof n=="string"&&(r=n,n=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!l.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var p=e.charCodeAt(0);(r==="utf8"&&p<128||r==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var c;if(typeof e=="number")for(c=o;c<n;++c)this[c]=e;else{var i=l.isBuffer(e)?e:l.from(e,r),_=i.length;if(_===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<n-o;++c)this[c+o]=i[c%_]}return this};var ko=/[^+/0-9A-Za-z-_]/g;function So(t){if(t=t.split("=")[0],t=t.trim().replace(ko,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function O(t,e){e=e||1/0;for(var o,n=t.length,r=null,p=[],c=0;c<n;++c){if(o=t.charCodeAt(c),o>55295&&o<57344){if(!r){if(o>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(c+1===n){(e-=3)>-1&&p.push(239,191,189);continue}r=o;continue}if(o<56320){(e-=3)>-1&&p.push(239,191,189),r=o;continue}o=(r-55296<<10|o-56320)+65536}else r&&(e-=3)>-1&&p.push(239,191,189);if(r=null,o<128){if((e-=1)<0)break;p.push(o)}else if(o<2048){if((e-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function wo(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function xo(t,e){for(var o,n,r,p=[],c=0;c<t.length&&!((e-=2)<0);++c)o=t.charCodeAt(c),n=o>>8,r=o%256,p.push(r),p.push(n);return p}function Ee(t){return V.toByteArray(So(t))}function q(t,e,o,n){for(var r=0;r<n&&!(r+o>=e.length||r>=t.length);++r)e[r+o]=t[r];return r}function y(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function P(t){return t!==t}var yo=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,r=0;r<16;++r)e[n+r]=t[o]+t[r];return e}()});var Te=z((Io,Ue)=>{k();var d=Ue.exports={},g,v;function ee(){throw new Error("setTimeout has not been defined")}function oe(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?g=setTimeout:g=ee}catch(t){g=ee}try{typeof clearTimeout=="function"?v=clearTimeout:v=oe}catch(t){v=oe}})();function be(t){if(g===setTimeout)return setTimeout(t,0);if((g===ee||!g)&&setTimeout)return g=setTimeout,setTimeout(t,0);try{return g(t,0)}catch(e){try{return g.call(null,t,0)}catch(o){return g.call(this,t,0)}}}function go(t){if(v===clearTimeout)return clearTimeout(t);if((v===oe||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(t);try{return v(t)}catch(e){try{return v.call(null,t)}catch(o){return v.call(this,t)}}}var F=[],R=!1,U,H=-1;function vo(){!R||!U||(R=!1,U.length?F=U.concat(F):H=-1,F.length&&Be())}function Be(){if(!R){var t=be(vo);R=!0;for(var e=F.length;e;){for(U=F,F=[];++H<e;)U&&U[H].run();H=-1,e=F.length}U=null,R=!1,go(t)}}d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];F.push(new Ae(t,e)),F.length===1&&!R&&be(Be)};function Ae(t,e){this.fun=t,this.array=e}Ae.prototype.run=function(){this.fun.apply(null,this.array)};d.title="browser";d.browser=!0;d.env={};d.argv=[];d.version="";d.versions={};function b(){}d.on=b;d.addListener=b;d.once=b;d.off=b;d.removeListener=b;d.removeAllListeners=b;d.emit=b;d.prependListener=b;d.prependOnceListener=b;d.listeners=function(t){return[]};d.binding=function(t){throw new Error("process.binding is not supported")};d.cwd=function(){return"/"};d.chdir=function(t){throw new Error("process.chdir is not supported")};d.umask=function(){return 0}});var I,C,Co,k=He(()=>{I=G(Fe()),C=G(Te()),Co=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var bo={};Xe(bo,{Menu:()=>Fo});module.exports=Ge(bo);k();var X=G(require("react")),Ie=require("@fortawesome/free-solid-svg-icons"),Ce=require("@fortawesome/react-fontawesome"),Le=require("react-select");k();var Eo=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Eo));var te={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var Fo=t=>X.default.createElement(Le.components.Menu,le(ce({},t),{className:te.menu}),t.selectProps.isLoading?X.default.createElement("div",{className:te.loading},X.default.createElement(Ce.FontAwesomeIcon,{icon:Ie.faCircleNotch,className:"fa-spin",size:"lg"})):t.children);0&&(module.exports={Menu});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=Menu.js.map
