"use strict";var rt=Object.create;var Y=Object.defineProperty,ct=Object.defineProperties,pt=Object.getOwnPropertyDescriptor,it=Object.getOwnPropertyDescriptors,lt=Object.getOwnPropertyNames,te=Object.getOwnPropertySymbols,at=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var Oe=(t,e,o)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))ue.call(e,o)&&Oe(t,o,e[o]);if(te)for(var o of te(e))Pe.call(e,o)&&Oe(t,o,e[o]);return t},b=(t,e)=>ct(t,it(e));var Ve=(t,e)=>{var o={};for(var n in t)ue.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&te)for(var n of te(t))e.indexOf(n)<0&&Pe.call(t,n)&&(o[n]=t[n]);return o};var De=(t,e)=>()=>(t&&(e=t(t=0)),e);var ne=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),de=(t,e)=>{for(var o in e)Y(t,o,{get:e[o],enumerable:!0})},We=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of lt(e))!ue.call(t,r)&&r!==o&&Y(t,r,{get:()=>e[r],enumerable:!(n=pt(e,r))||n.enumerable});return t};var x=(t,e,o)=>(o=t!=null?rt(at(t)):{},We(e||!t||!t.__esModule?Y(o,"default",{value:t,enumerable:!0}):o,t)),se=t=>We(Y({},"__esModule",{value:!0}),t);var Xe=ne(re=>{"use strict";m();re.byteLength=mt;re.toByteArray=dt;re.fromByteArray=ht;var C=[],T=[],_t=typeof Uint8Array!="undefined"?Uint8Array:Array,fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(G=0,Ge=fe.length;G<Ge;++G)C[G]=fe[G],T[fe.charCodeAt(G)]=G;var G,Ge;T["-".charCodeAt(0)]=62;T["_".charCodeAt(0)]=63;function ze(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function mt(t){var e=ze(t),o=e[0],n=e[1];return(o+n)*3/4-n}function ut(t,e,o){return(e+o)*3/4-o}function dt(t){var e,o=ze(t),n=o[0],r=o[1],p=new _t(ut(t,n,r)),c=0,l=r>0?n-4:n,a;for(a=0;a<l;a+=4)e=T[t.charCodeAt(a)]<<18|T[t.charCodeAt(a+1)]<<12|T[t.charCodeAt(a+2)]<<6|T[t.charCodeAt(a+3)],p[c++]=e>>16&255,p[c++]=e>>8&255,p[c++]=e&255;return r===2&&(e=T[t.charCodeAt(a)]<<2|T[t.charCodeAt(a+1)]>>4,p[c++]=e&255),r===1&&(e=T[t.charCodeAt(a)]<<10|T[t.charCodeAt(a+1)]<<4|T[t.charCodeAt(a+2)]>>2,p[c++]=e>>8&255,p[c++]=e&255),p}function st(t){return C[t>>18&63]+C[t>>12&63]+C[t>>6&63]+C[t&63]}function ft(t,e,o){for(var n,r=[],p=e;p<o;p+=3)n=(t[p]<<16&16711680)+(t[p+1]<<8&65280)+(t[p+2]&255),r.push(st(n));return r.join("")}function ht(t){for(var e,o=t.length,n=o%3,r=[],p=16383,c=0,l=o-n;c<l;c+=p)r.push(ft(t,c,c+p>l?l:c+p));return n===1?(e=t[o-1],r.push(C[e>>2]+C[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],r.push(C[e>>10]+C[e>>4&63]+C[e<<2&63]+"=")),r.join("")}});var $e=ne(he=>{m();he.read=function(t,e,o,n,r){var p,c,l=r*8-n-1,a=(1<<l)-1,s=a>>1,_=-7,d=o?r-1:0,S=o?-1:1,g=t[e+d];for(d+=S,p=g&(1<<-_)-1,g>>=-_,_+=l;_>0;p=p*256+t[e+d],d+=S,_-=8);for(c=p&(1<<-_)-1,p>>=-_,_+=n;_>0;c=c*256+t[e+d],d+=S,_-=8);if(p===0)p=1-s;else{if(p===a)return c?NaN:(g?-1:1)*(1/0);c=c+Math.pow(2,n),p=p-s}return(g?-1:1)*c*Math.pow(2,p-n)};he.write=function(t,e,o,n,r,p){var c,l,a,s=p*8-r-1,_=(1<<s)-1,d=_>>1,S=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:p-1,L=n?1:-1,$=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,c=_):(c=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-c))<1&&(c--,a*=2),c+d>=1?e+=S/a:e+=S*Math.pow(2,1-d),e*a>=2&&(c++,a/=2),c+d>=_?(l=0,c=_):c+d>=1?(l=(e*a-1)*Math.pow(2,r),c=c+d):(l=e*Math.pow(2,d-1)*Math.pow(2,r),c=0));r>=8;t[o+g]=l&255,g+=L,l/=256,r-=8);for(c=c<<r|l,s+=r;s>0;t[o+g]=c&255,g+=L,c/=256,s-=8);t[o+g-L]|=$*128}});var no=ne(R=>{"use strict";m();var ke=Xe(),H=$e(),He=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;R.Buffer=i;R.SlowBuffer=wt;R.INSPECT_MAX_BYTES=50;var ce=2147483647;R.kMaxLength=ce;i.TYPED_ARRAY_SUPPORT=kt();!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function kt(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.buffer}});Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.byteOffset}});function O(t){if(t>ce)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,i.prototype),e}function i(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ye(t)}return Je(t,e,o)}i.poolSize=8192;function Je(t,e,o){if(typeof t=="string")return xt(t,e);if(ArrayBuffer.isView(t))return gt(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(U(t,ArrayBuffer)||t&&U(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(U(t,SharedArrayBuffer)||t&&U(t.buffer,SharedArrayBuffer)))return xe(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return i.from(n,e,o);var r=yt(t);if(r)return r;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return i.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}i.from=function(t,e,o){return Je(t,e,o)};Object.setPrototypeOf(i.prototype,Uint8Array.prototype);Object.setPrototypeOf(i,Uint8Array);function Ye(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function St(t,e,o){return Ye(t),t<=0?O(t):e!==void 0?typeof o=="string"?O(t).fill(e,o):O(t).fill(e):O(t)}i.alloc=function(t,e,o){return St(t,e,o)};function ye(t){return Ye(t),O(t<0?0:we(t)|0)}i.allocUnsafe=function(t){return ye(t)};i.allocUnsafeSlow=function(t){return ye(t)};function xt(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Ze(t,e)|0,n=O(o),r=n.write(t,e);return r!==o&&(n=n.slice(0,r)),n}function Se(t){for(var e=t.length<0?0:we(t.length)|0,o=O(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function gt(t){if(U(t,Uint8Array)){var e=new Uint8Array(t);return xe(e.buffer,e.byteOffset,e.byteLength)}return Se(t)}function xe(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,i.prototype),n}function yt(t){if(i.isBuffer(t)){var e=we(t.length)|0,o=O(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||ve(t.length)?O(0):Se(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Se(t.data)}function we(t){if(t>=ce)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ce.toString(16)+" bytes");return t|0}function wt(t){return+t!=t&&(t=0),i.alloc(+t)}i.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==i.prototype};i.compare=function(e,o){if(U(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),U(o,Uint8Array)&&(o=i.from(o,o.offset,o.byteLength)),!i.isBuffer(e)||!i.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,r=o.length,p=0,c=Math.min(n,r);p<c;++p)if(e[p]!==o[p]){n=e[p],r=o[p];break}return n<r?-1:r<n?1:0};i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};i.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return i.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var r=i.allocUnsafe(o),p=0;for(n=0;n<e.length;++n){var c=e[n];if(U(c,Uint8Array))p+c.length>r.length?i.from(c).copy(r,p):Uint8Array.prototype.set.call(r,c,p);else if(i.isBuffer(c))c.copy(r,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=c.length}return r};function Ze(t,e){if(i.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||U(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return ge(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return to(t).length;default:if(r)return n?-1:ge(t).length;e=(""+e).toLowerCase(),r=!0}}i.byteLength=Ze;function vt(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Ut(this,e,o);case"utf8":case"utf-8":return Qe(this,e,o);case"ascii":return Lt(this,e,o);case"latin1":case"binary":return Ct(this,e,o);case"base64":return Tt(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Nt(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}i.prototype._isBuffer=!0;function z(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}i.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)z(this,o,o+1);return this};i.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)z(this,o,o+3),z(this,o+1,o+2);return this};i.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)z(this,o,o+7),z(this,o+1,o+6),z(this,o+2,o+5),z(this,o+3,o+4);return this};i.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Qe(this,0,e):vt.apply(this,arguments)};i.prototype.toLocaleString=i.prototype.toString;i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:i.compare(this,e)===0};i.prototype.inspect=function(){var e="",o=R.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};He&&(i.prototype[He]=i.prototype.inspect);i.prototype.compare=function(e,o,n,r,p){if(U(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),p===void 0&&(p=this.length),o<0||n>e.length||r<0||p>this.length)throw new RangeError("out of range index");if(r>=p&&o>=n)return 0;if(r>=p)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,r>>>=0,p>>>=0,this===e)return 0;for(var c=p-r,l=n-o,a=Math.min(c,l),s=this.slice(r,p),_=e.slice(o,n),d=0;d<a;++d)if(s[d]!==_[d]){c=s[d],l=_[d];break}return c<l?-1:l<c?1:0};function Ke(t,e,o,n,r){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,ve(o)&&(o=r?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(r)return-1;o=t.length-1}else if(o<0)if(r)o=0;else return-1;if(typeof e=="string"&&(e=i.from(e,n)),i.isBuffer(e))return e.length===0?-1:Re(t,e,o,n,r);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):Re(t,[e],o,n,r);throw new TypeError("val must be string, number or Buffer")}function Re(t,e,o,n,r){var p=1,c=t.length,l=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;p=2,c/=2,l/=2,o/=2}function a(g,L){return p===1?g[L]:g.readUInt16BE(L*p)}var s;if(r){var _=-1;for(s=o;s<c;s++)if(a(t,s)===a(e,_===-1?0:s-_)){if(_===-1&&(_=s),s-_+1===l)return _*p}else _!==-1&&(s-=s-_),_=-1}else for(o+l>c&&(o=c-l),s=o;s>=0;s--){for(var d=!0,S=0;S<l;S++)if(a(t,s+S)!==a(e,S)){d=!1;break}if(d)return s}return-1}i.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};i.prototype.indexOf=function(e,o,n){return Ke(this,e,o,n,!0)};i.prototype.lastIndexOf=function(e,o,n){return Ke(this,e,o,n,!1)};function bt(t,e,o,n){o=Number(o)||0;var r=t.length-o;n?(n=Number(n),n>r&&(n=r)):n=r;var p=e.length;n>p/2&&(n=p/2);for(var c=0;c<n;++c){var l=parseInt(e.substr(c*2,2),16);if(ve(l))return c;t[o+c]=l}return c}function Et(t,e,o,n){return pe(ge(e,t.length-o),t,o,n)}function At(t,e,o,n){return pe(Pt(e),t,o,n)}function Bt(t,e,o,n){return pe(to(e),t,o,n)}function Ft(t,e,o,n){return pe(Vt(e,t.length-o),t,o,n)}i.prototype.write=function(e,o,n,r){if(o===void 0)r="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")r=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,r===void 0&&(r="utf8")):(r=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-o;if((n===void 0||n>p)&&(n=p),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var c=!1;;)switch(r){case"hex":return bt(this,e,o,n);case"utf8":case"utf-8":return Et(this,e,o,n);case"ascii":case"latin1":case"binary":return At(this,e,o,n);case"base64":return Bt(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ft(this,e,o,n);default:if(c)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),c=!0}};i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Tt(t,e,o){return e===0&&o===t.length?ke.fromByteArray(t):ke.fromByteArray(t.slice(e,o))}function Qe(t,e,o){o=Math.min(t.length,o);for(var n=[],r=e;r<o;){var p=t[r],c=null,l=p>239?4:p>223?3:p>191?2:1;if(r+l<=o){var a,s,_,d;switch(l){case 1:p<128&&(c=p);break;case 2:a=t[r+1],(a&192)===128&&(d=(p&31)<<6|a&63,d>127&&(c=d));break;case 3:a=t[r+1],s=t[r+2],(a&192)===128&&(s&192)===128&&(d=(p&15)<<12|(a&63)<<6|s&63,d>2047&&(d<55296||d>57343)&&(c=d));break;case 4:a=t[r+1],s=t[r+2],_=t[r+3],(a&192)===128&&(s&192)===128&&(_&192)===128&&(d=(p&15)<<18|(a&63)<<12|(s&63)<<6|_&63,d>65535&&d<1114112&&(c=d))}}c===null?(c=65533,l=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|c&1023),n.push(c),r+=l}return It(n)}var qe=4096;function It(t){var e=t.length;if(e<=qe)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=qe));return o}function Lt(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]&127);return n}function Ct(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]);return n}function Ut(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var r="",p=e;p<o;++p)r+=Dt[t[p]];return r}function Nt(t,e,o){for(var n=t.slice(e,o),r="",p=0;p<n.length-1;p+=2)r+=String.fromCharCode(n[p]+n[p+1]*256);return r}i.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,i.prototype),r};function E(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=this[e],p=1,c=0;++c<o&&(p*=256);)r+=this[e+c]*p;return r};i.prototype.readUintBE=i.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=this[e+--o],p=1;o>0&&(p*=256);)r+=this[e+--o]*p;return r};i.prototype.readUint8=i.prototype.readUInt8=function(e,o){return e=e>>>0,o||E(e,1,this.length),this[e]};i.prototype.readUint16LE=i.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||E(e,2,this.length),this[e]|this[e+1]<<8};i.prototype.readUint16BE=i.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||E(e,2,this.length),this[e]<<8|this[e+1]};i.prototype.readUint32LE=i.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||E(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};i.prototype.readUint32BE=i.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||E(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};i.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=this[e],p=1,c=0;++c<o&&(p*=256);)r+=this[e+c]*p;return p*=128,r>=p&&(r-=Math.pow(2,8*o)),r};i.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=o,p=1,c=this[e+--r];r>0&&(p*=256);)c+=this[e+--r]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*o)),c};i.prototype.readInt8=function(e,o){return e=e>>>0,o||E(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};i.prototype.readInt16LE=function(e,o){e=e>>>0,o||E(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};i.prototype.readInt16BE=function(e,o){e=e>>>0,o||E(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};i.prototype.readInt32LE=function(e,o){return e=e>>>0,o||E(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};i.prototype.readInt32BE=function(e,o){return e=e>>>0,o||E(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};i.prototype.readFloatLE=function(e,o){return e=e>>>0,o||E(e,4,this.length),H.read(this,e,!0,23,4)};i.prototype.readFloatBE=function(e,o){return e=e>>>0,o||E(e,4,this.length),H.read(this,e,!1,23,4)};i.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||E(e,8,this.length),H.read(this,e,!0,52,8)};i.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||E(e,8,this.length),H.read(this,e,!1,52,8)};function F(t,e,o,n,r,p){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<p)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var p=Math.pow(2,8*n)-1;F(this,e,o,n,p,0)}var c=1,l=0;for(this[o]=e&255;++l<n&&(c*=256);)this[o+l]=e/c&255;return o+n};i.prototype.writeUintBE=i.prototype.writeUIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var p=Math.pow(2,8*n)-1;F(this,e,o,n,p,0)}var c=n-1,l=1;for(this[o+c]=e&255;--c>=0&&(l*=256);)this[o+c]=e/l&255;return o+n};i.prototype.writeUint8=i.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,1,255,0),this[o]=e&255,o+1};i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};i.prototype.writeIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var p=Math.pow(2,8*n-1);F(this,e,o,n,p-1,-p)}var c=0,l=1,a=0;for(this[o]=e&255;++c<n&&(l*=256);)e<0&&a===0&&this[o+c-1]!==0&&(a=1),this[o+c]=(e/l>>0)-a&255;return o+n};i.prototype.writeIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var p=Math.pow(2,8*n-1);F(this,e,o,n,p-1,-p)}var c=n-1,l=1,a=0;for(this[o+c]=e&255;--c>=0&&(l*=256);)e<0&&a===0&&this[o+c+1]!==0&&(a=1),this[o+c]=(e/l>>0)-a&255;return o+n};i.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};i.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};i.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||F(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function je(t,e,o,n,r,p){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function eo(t,e,o,n,r){return e=+e,o=o>>>0,r||je(t,e,o,4,34028234663852886e22,-34028234663852886e22),H.write(t,e,o,n,23,4),o+4}i.prototype.writeFloatLE=function(e,o,n){return eo(this,e,o,!0,n)};i.prototype.writeFloatBE=function(e,o,n){return eo(this,e,o,!1,n)};function oo(t,e,o,n,r){return e=+e,o=o>>>0,r||je(t,e,o,8,17976931348623157e292,-17976931348623157e292),H.write(t,e,o,n,52,8),o+8}i.prototype.writeDoubleLE=function(e,o,n){return oo(this,e,o,!0,n)};i.prototype.writeDoubleBE=function(e,o,n){return oo(this,e,o,!1,n)};i.prototype.copy=function(e,o,n,r){if(!i.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-n&&(r=e.length-o+n);var p=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),o),p};i.prototype.fill=function(e,o,n,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,n=this.length):typeof n=="string"&&(r=n,n=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var p=e.charCodeAt(0);(r==="utf8"&&p<128||r==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var c;if(typeof e=="number")for(c=o;c<n;++c)this[c]=e;else{var l=i.isBuffer(e)?e:i.from(e,r),a=l.length;if(a===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<n-o;++c)this[c+o]=l[c%a]}return this};var Mt=/[^+/0-9A-Za-z-_]/g;function Ot(t){if(t=t.split("=")[0],t=t.trim().replace(Mt,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function ge(t,e){e=e||1/0;for(var o,n=t.length,r=null,p=[],c=0;c<n;++c){if(o=t.charCodeAt(c),o>55295&&o<57344){if(!r){if(o>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(c+1===n){(e-=3)>-1&&p.push(239,191,189);continue}r=o;continue}if(o<56320){(e-=3)>-1&&p.push(239,191,189),r=o;continue}o=(r-55296<<10|o-56320)+65536}else r&&(e-=3)>-1&&p.push(239,191,189);if(r=null,o<128){if((e-=1)<0)break;p.push(o)}else if(o<2048){if((e-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function Pt(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function Vt(t,e){for(var o,n,r,p=[],c=0;c<t.length&&!((e-=2)<0);++c)o=t.charCodeAt(c),n=o>>8,r=o%256,p.push(r),p.push(n);return p}function to(t){return ke.toByteArray(Ot(t))}function pe(t,e,o,n){for(var r=0;r<n&&!(r+o>=e.length||r>=t.length);++r)e[r+o]=t[r];return r}function U(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function ve(t){return t!==t}var Dt=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,r=0;r<16;++r)e[n+r]=t[o]+t[r];return e}()});var lo=ne((Sn,io)=>{m();var y=io.exports={},N,M;function be(){throw new Error("setTimeout has not been defined")}function Ee(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?N=setTimeout:N=be}catch(t){N=be}try{typeof clearTimeout=="function"?M=clearTimeout:M=Ee}catch(t){M=Ee}})();function ro(t){if(N===setTimeout)return setTimeout(t,0);if((N===be||!N)&&setTimeout)return N=setTimeout,setTimeout(t,0);try{return N(t,0)}catch(e){try{return N.call(null,t,0)}catch(o){return N.call(this,t,0)}}}function Wt(t){if(M===clearTimeout)return clearTimeout(t);if((M===Ee||!M)&&clearTimeout)return M=clearTimeout,clearTimeout(t);try{return M(t)}catch(e){try{return M.call(null,t)}catch(o){return M.call(this,t)}}}var P=[],q=!1,X,ie=-1;function Gt(){!q||!X||(q=!1,X.length?P=X.concat(P):ie=-1,P.length&&co())}function co(){if(!q){var t=ro(Gt);q=!0;for(var e=P.length;e;){for(X=P,P=[];++ie<e;)X&&X[ie].run();ie=-1,e=P.length}X=null,q=!1,Wt(t)}}y.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];P.push(new po(t,e)),P.length===1&&!q&&ro(co)};function po(t,e){this.fun=t,this.array=e}po.prototype.run=function(){this.fun.apply(null,this.array)};y.title="browser";y.browser=!0;y.env={};y.argv=[];y.version="";y.versions={};function V(){}y.on=V;y.addListener=V;y.once=V;y.off=V;y.removeListener=V;y.removeAllListeners=V;y.emit=V;y.prependListener=V;y.prependOnceListener=V;y.listeners=function(t){return[]};y.binding=function(t){throw new Error("process.binding is not supported")};y.cwd=function(){return"/"};y.chdir=function(t){throw new Error("process.chdir is not supported")};y.umask=function(){return 0}});var f,h,xn,m=De(()=>{f=x(no()),h=x(lo()),xn=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var Be={};de(Be,{default:()=>jt});var ae,Qt,jt,Fe=De(()=>{"use strict";m();ae=x(require("react")),Qt=t=>ae.createElement("svg",v({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),ae.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),ae.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),jt=Qt});var mn={};de(mn,{TokenSelect:()=>_n});module.exports=se(mn);m();var I=x(require("react")),Zo=x(require("classnames")),Ko=x(require("react-select"));m();m();m();m();var ao="WREWA-bd4d79";var zt={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function _o(t){return zt[t]||ao}var Ce={};de(Ce,{Control:()=>Yt,IndicatorsContainer:()=>Kt,Input:()=>Rt,Menu:()=>Jt,MenuList:()=>qt,DharitrIIcon:()=>qo,Placeholder:()=>Zt,SmallLoader:()=>Xt,ValueComponent:()=>No,getOption:()=>Ie,getSingleValue:()=>Le,getValueContainer:()=>Te});m();m();var Ae=x(require("react")),mo=require("@fortawesome/free-solid-svg-icons"),uo=require("@fortawesome/react-fontawesome"),Xt=({show:t,color:e})=>t?Ae.default.createElement("div",{className:"d-flex"},Ae.default.createElement(uo.FontAwesomeIcon,{icon:mo.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;m();m();var so=x(require("react")),fo=require("react-select");m();var $t=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($t));var u={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var Rt=t=>so.default.createElement(fo.components.Input,b(v({},t),{className:u.dropdown,"data-testid":"tokenSelectInput"}));m();var ho=x(require("react")),ko=require("react-select");var qt=t=>{let n=t,{rx:e}=n,o=Ve(n,["rx"]);return ho.default.createElement(ko.components.MenuList,b(v({},o),{className:u.list}))};m();var le=x(require("react")),So=require("@fortawesome/free-solid-svg-icons"),xo=require("@fortawesome/react-fontawesome"),go=require("react-select");var Jt=t=>le.default.createElement(go.components.Menu,b(v({},t),{className:u.menu}),t.selectProps.isLoading?le.default.createElement("div",{className:u.loading},le.default.createElement(xo.FontAwesomeIcon,{icon:So.faCircleNotch,className:"fa-spin",size:"lg"})):t.children);m();var yo=x(require("react")),wo=require("react-select");var Yt=t=>yo.default.createElement(wo.components.Control,b(v({},t),{className:u.control}));m();var vo=x(require("react")),bo=x(require("classnames")),Eo=require("react-select");var Zt=t=>vo.default.createElement(Eo.components.Placeholder,b(v({},t),{className:(0,bo.default)(u.placeholder,{[u.focused]:t.isFocused})}));m();var Ao=x(require("react")),Bo=x(require("classnames")),Fo=require("react-select");var Kt=t=>Ao.default.createElement(Fo.components.IndicatorsContainer,b(v({},t),{className:(0,Bo.default)(u.indicator,{[u.expanded]:t.selectProps.menuIsOpen})}));m();var B=x(require("react")),To=require("@fortawesome/free-solid-svg-icons"),Io=require("@fortawesome/react-fontawesome"),Lo=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Co=x(require("classnames")),Uo=require("react-select");var en=(Fe(),se(Be)).default,No=({RewaIcon:t,tokenId:e,icon:o})=>{let{isRewa:n}=(0,Lo.getIdentifierType)(e);return n?B.default.createElement("span",{className:u.asset},t?B.default.createElement(t,{className:u.diamond}):B.default.createElement(en,{className:u.diamond})):o?B.default.createElement("img",{src:o,className:u.asset}):B.default.createElement(Io.FontAwesomeIcon,{icon:To.faDiamond,className:u.asset})},on=({children:t})=>B.default.createElement("div",{className:u.wrapper},t),Te=(t,e,o)=>n=>{var _,d;let{selectProps:r,isDisabled:p,children:c}=n,l=r.value,a=(d=(_=l==null?void 0:l.assets)==null?void 0:_.svgUrl)!=null?d:null,s=(0,B.useMemo)(()=>{let S=String(l==null?void 0:l.token.usdPrice);return S!=null&&S.includes("$")?l==null?void 0:l.token.usdPrice:`$${l==null?void 0:l.token.usdPrice}`},[l==null?void 0:l.token.usdPrice]);return B.default.createElement(Uo.components.ValueContainer,b(v({},n),{className:u.container}),B.default.createElement("div",{className:(0,Co.default)(u.icon,e)},B.default.createElement(No,{RewaIcon:o,rewaLabel:t,icon:a,isDisabled:p,tokenId:l==null?void 0:l.value})),B.default.createElement("div",{className:u.payload},B.default.createElement(on,null,c,(l==null?void 0:l.token.usdPrice)&&B.default.createElement("small",{className:u.price},s))))};m();var w=x(require("react")),Wo=require("@fortawesome/free-solid-svg-icons"),Go=require("@fortawesome/react-fontawesome"),zo=require("@terradharitri/sdk-dapp/constants"),Xo=require("@terradharitri/sdk-dapp/UI/UsdValue"),$o=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ho=x(require("classnames")),Ro=require("react-select");m();m();var Z=x(require("react"));m();var tn=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tn));var Mo={highlight:"dapp-core-component__styles-modules__highlight"};var Oo=({highlight:t,text:e=""})=>{let o=e.split(" "),n=t.toLowerCase(),r=new RegExp(`(${n})`,"gi"),p=o.map(c=>c.split(r).filter(l=>l));return Z.default.createElement("span",{className:Mo.highlight},p.map((c,l)=>{let a=`${c}-${l}`;return Z.default.createElement("span",{key:a},c.map((s,_)=>{let d=s.toLowerCase()===n,S=n&&d,g=`${s}-${_}`;return S?Z.default.createElement("strong",{key:g},s):Z.default.createElement("span",{key:g},s)}))}))};m();var D=require("@terradharitri/sdk-dapp/constants"),Po=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Vo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Do=({amount:t="0",decimals:e=0,digits:o=D.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:r=!1})=>{if(t==null||!(0,Vo.stringIsInteger)(t))return"0";let p=l=>(0,Po.formatAmount)({input:t,digits:l,decimals:e,addCommas:n,showLastNonZeroDecimal:r}),c=p(o);return c=parseFloat(c)>0?c:p(D.DIGITS),c=parseFloat(c)>0?c:p(D.DIGITS+2),c=parseFloat(c)>0?c:p(D.DIGITS+4),c=parseFloat(c)>0?c:p(D.DIGITS+6),c=parseFloat(c)>0?c:p(D.DIGITS+10),parseFloat(c)>0?c:p(D.DIGITS+14)};var{default:qo}=(Fe(),se(Be)),Ie=({RewaIcon:t,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>r=>{var K,Q,j,ee;let{data:p,isSelected:c,isFocused:l,isDisabled:a,selectProps:s}=r,_=p,{isRewa:d}=(0,$o.getIdentifierType)(_.value),S=_.token.assets?_.token.assets.svgUrl:null,g=Do({amount:_.token.balance,decimals:_.token.decimals||zo.DECIMALS,addCommas:!0}),L=(Q=(K=_.token)==null?void 0:K.usdPrice)==null?void 0:Q.toString(),$=(ee=(j=_.token)==null?void 0:j.valueUSD)==null?void 0:ee.toString();return w.default.createElement("div",{"data-testid":`${r.value}-option`},w.default.createElement(Ro.components.Option,b(v({},r),{className:(0,Ho.default)(u.option,{[u.selected]:c||l,[u.disabled]:a})}),w.default.createElement("div",{className:u.image},d?w.default.createElement("span",{className:u.icon},t?w.default.createElement(t,null):w.default.createElement(qo,null)):S?w.default.createElement("img",{src:S,className:u.icon}):w.default.createElement("span",{className:u.icon},w.default.createElement(Go.FontAwesomeIcon,{icon:Wo.faDiamond,className:u.diamond}))),w.default.createElement("div",{className:u.info},w.default.createElement("div",{className:u.left},w.default.createElement("div",{className:u.ticker},w.default.createElement("span",{className:u.value},s.inputValue?w.default.createElement(Oo,{text:_.token.ticker,highlight:s.inputValue}):_.token.ticker),e&&w.default.createElement(e,{token:_.token})),n&&w.default.createElement("small",{className:u.price},L)),w.default.createElement("div",{className:u.right},w.default.createElement("span",{className:u.value},g),o&&$&&w.default.createElement(Xo.UsdValue,{usd:1,decimals:4,amount:$,"data-testid":"token-price-usd-value",className:u.price,addEqualSign:!1}))),w.default.createElement("div",{className:u.children},r.children)))};m();var _e=x(require("react")),Jo=x(require("classnames")),Yo=require("react-select");var Le=t=>e=>{let{selectProps:o,children:n}=e,r=o.value;return _e.default.createElement(Yo.components.SingleValue,b(v({},e),{className:(0,Jo.default)(u.single,{[u.focused]:e.selectProps.menuIsOpen})}),_e.default.createElement("div",{className:u.ticker},n,t&&_e.default.createElement(t,{token:r==null?void 0:r.token})))};var{Menu:nn,Control:rn,Input:cn,MenuList:pn,IndicatorsContainer:ln,Placeholder:an}=Ce,_n=t=>{let{name:e,options:o,isLoading:n=!1,className:r="",noOptionsMessage:p="No Tokens",disabledOption:c,rewaLabel:l,RewaIcon:a,disabled:s,value:_,onBlur:d,onFocus:S,onChange:g,onMenuOpen:L,chainId:$,wrapperClassName:K="",showTokenPrice:Q=!1,showBalanceUsdValue:j=!1,selectedTokenIconClassName:ee,TokenTickerIcon:Ue}=t,oe=(0,I.useRef)(null),Qo=[l,_o($)],jo=(0,I.useMemo)(()=>Ie({rewaLabel:l,RewaIcon:a,showTokenPrice:Q,showBalanceUsdValue:j,TokenTickerIcon:Ue}),[]),et=(0,I.useMemo)(()=>Te(l,ee,a),[]),ot=(0,I.useMemo)(()=>Le(Ue),[]);(0,I.useEffect)(()=>{let A=o.find(J=>J.value===(_==null?void 0:_.value)),W=(A==null?void 0:A.token.balance)===(_==null?void 0:_.token.balance);!A||W||g(A)},[o]);let Ne=A=>Qo.includes(A),tt=A=>{var Me;let W=A.value===(c==null?void 0:c.value),J=Ne(A.value),me=Ne((Me=c==null?void 0:c.value)!=null?Me:"");return W||J&&me},nt=(A,W)=>{let J=A.data.token.ticker?A.data.token.ticker.toLowerCase().includes(W.toLowerCase()):!1,me=A.data.token.name.toLowerCase().includes(W.toLowerCase());return Boolean(W)?J||me:!0};return I.default.createElement("div",{"data-testid":`${e}Select`,className:`${K} ${n?"select-holder-loading":""}`},I.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:u.label},"Token"),I.default.createElement(Ko.default,{ref:oe,inputId:e,name:e,options:o,openMenuOnFocus:!0,isDisabled:s,isLoading:n,value:_,isOptionDisabled:tt,onBlur:d,filterOption:nt,onFocus:S,onChange:A=>{g(A),oe&&oe.current!==null&&oe.current.blur()},isSearchable:t.isSearchable,maxMenuHeight:260,onMenuOpen:L,noOptionsMessage:()=>p,className:(0,Zo.default)(u.select,r,{[u.disabled]:t.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:nn,Control:rn,Input:cn,MenuList:pn,IndicatorsContainer:ln,ValueContainer:et,Placeholder:an,Option:jo,SingleValue:ot}}))};0&&(module.exports={TokenSelect});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=TokenSelect.js.map
