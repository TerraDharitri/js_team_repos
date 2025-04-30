"use strict";var rt=Object.create;var Y=Object.defineProperty,pt=Object.defineProperties,ct=Object.getOwnPropertyDescriptor,it=Object.getOwnPropertyDescriptors,lt=Object.getOwnPropertyNames,te=Object.getOwnPropertySymbols,at=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var Oe=(t,e,o)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))de.call(e,o)&&Oe(t,o,e[o]);if(te)for(var o of te(e))Pe.call(e,o)&&Oe(t,o,e[o]);return t},b=(t,e)=>pt(t,it(e));var Ve=(t,e)=>{var o={};for(var n in t)de.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&te)for(var n of te(t))e.indexOf(n)<0&&Pe.call(t,n)&&(o[n]=t[n]);return o};var De=(t,e)=>()=>(t&&(e=t(t=0)),e);var ne=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ue=(t,e)=>{for(var o in e)Y(t,o,{get:e[o],enumerable:!0})},We=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of lt(e))!de.call(t,r)&&r!==o&&Y(t,r,{get:()=>e[r],enumerable:!(n=ct(e,r))||n.enumerable});return t};var g=(t,e,o)=>(o=t!=null?rt(at(t)):{},We(e||!t||!t.__esModule?Y(o,"default",{value:t,enumerable:!0}):o,t)),se=t=>We(Y({},"__esModule",{value:!0}),t);var ze=ne(re=>{"use strict";_();re.byteLength=mt;re.toByteArray=ut;re.fromByteArray=ht;var L=[],F=[],_t=typeof Uint8Array!="undefined"?Uint8Array:Array,fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(G=0,Ge=fe.length;G<Ge;++G)L[G]=fe[G],F[fe.charCodeAt(G)]=G;var G,Ge;F["-".charCodeAt(0)]=62;F["_".charCodeAt(0)]=63;function Xe(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function mt(t){var e=Xe(t),o=e[0],n=e[1];return(o+n)*3/4-n}function dt(t,e,o){return(e+o)*3/4-o}function ut(t){var e,o=Xe(t),n=o[0],r=o[1],c=new _t(dt(t,n,r)),p=0,l=r>0?n-4:n,a;for(a=0;a<l;a+=4)e=F[t.charCodeAt(a)]<<18|F[t.charCodeAt(a+1)]<<12|F[t.charCodeAt(a+2)]<<6|F[t.charCodeAt(a+3)],c[p++]=e>>16&255,c[p++]=e>>8&255,c[p++]=e&255;return r===2&&(e=F[t.charCodeAt(a)]<<2|F[t.charCodeAt(a+1)]>>4,c[p++]=e&255),r===1&&(e=F[t.charCodeAt(a)]<<10|F[t.charCodeAt(a+1)]<<4|F[t.charCodeAt(a+2)]>>2,c[p++]=e>>8&255,c[p++]=e&255),c}function st(t){return L[t>>18&63]+L[t>>12&63]+L[t>>6&63]+L[t&63]}function ft(t,e,o){for(var n,r=[],c=e;c<o;c+=3)n=(t[c]<<16&16711680)+(t[c+1]<<8&65280)+(t[c+2]&255),r.push(st(n));return r.join("")}function ht(t){for(var e,o=t.length,n=o%3,r=[],c=16383,p=0,l=o-n;p<l;p+=c)r.push(ft(t,p,p+c>l?l:p+c));return n===1?(e=t[o-1],r.push(L[e>>2]+L[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],r.push(L[e>>10]+L[e>>4&63]+L[e<<2&63]+"=")),r.join("")}});var $e=ne(he=>{_();he.read=function(t,e,o,n,r){var c,p,l=r*8-n-1,a=(1<<l)-1,s=a>>1,m=-7,u=o?r-1:0,S=o?-1:1,x=t[e+u];for(u+=S,c=x&(1<<-m)-1,x>>=-m,m+=l;m>0;c=c*256+t[e+u],u+=S,m-=8);for(p=c&(1<<-m)-1,c>>=-m,m+=n;m>0;p=p*256+t[e+u],u+=S,m-=8);if(c===0)c=1-s;else{if(c===a)return p?NaN:(x?-1:1)*(1/0);p=p+Math.pow(2,n),c=c-s}return(x?-1:1)*p*Math.pow(2,c-n)};he.write=function(t,e,o,n,r,c){var p,l,a,s=c*8-r-1,m=(1<<s)-1,u=m>>1,S=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,x=n?0:c-1,C=n?1:-1,$=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,p=m):(p=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-p))<1&&(p--,a*=2),p+u>=1?e+=S/a:e+=S*Math.pow(2,1-u),e*a>=2&&(p++,a/=2),p+u>=m?(l=0,p=m):p+u>=1?(l=(e*a-1)*Math.pow(2,r),p=p+u):(l=e*Math.pow(2,u-1)*Math.pow(2,r),p=0));r>=8;t[o+x]=l&255,x+=C,l/=256,r-=8);for(p=p<<r|l,s+=r;s>0;t[o+x]=p&255,x+=C,p/=256,s-=8);t[o+x-C]|=$*128}});var no=ne(R=>{"use strict";_();var ke=ze(),H=$e(),He=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;R.Buffer=i;R.SlowBuffer=wt;R.INSPECT_MAX_BYTES=50;var pe=2147483647;R.kMaxLength=pe;i.TYPED_ARRAY_SUPPORT=kt();!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function kt(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.buffer}});Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.byteOffset}});function O(t){if(t>pe)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,i.prototype),e}function i(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ye(t)}return qe(t,e,o)}i.poolSize=8192;function qe(t,e,o){if(typeof t=="string")return gt(t,e);if(ArrayBuffer.isView(t))return xt(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(U(t,ArrayBuffer)||t&&U(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(U(t,SharedArrayBuffer)||t&&U(t.buffer,SharedArrayBuffer)))return ge(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return i.from(n,e,o);var r=yt(t);if(r)return r;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return i.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}i.from=function(t,e,o){return qe(t,e,o)};Object.setPrototypeOf(i.prototype,Uint8Array.prototype);Object.setPrototypeOf(i,Uint8Array);function Ye(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function St(t,e,o){return Ye(t),t<=0?O(t):e!==void 0?typeof o=="string"?O(t).fill(e,o):O(t).fill(e):O(t)}i.alloc=function(t,e,o){return St(t,e,o)};function ye(t){return Ye(t),O(t<0?0:we(t)|0)}i.allocUnsafe=function(t){return ye(t)};i.allocUnsafeSlow=function(t){return ye(t)};function gt(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Ze(t,e)|0,n=O(o),r=n.write(t,e);return r!==o&&(n=n.slice(0,r)),n}function Se(t){for(var e=t.length<0?0:we(t.length)|0,o=O(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function xt(t){if(U(t,Uint8Array)){var e=new Uint8Array(t);return ge(e.buffer,e.byteOffset,e.byteLength)}return Se(t)}function ge(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,i.prototype),n}function yt(t){if(i.isBuffer(t)){var e=we(t.length)|0,o=O(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||ve(t.length)?O(0):Se(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Se(t.data)}function we(t){if(t>=pe)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+pe.toString(16)+" bytes");return t|0}function wt(t){return+t!=t&&(t=0),i.alloc(+t)}i.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==i.prototype};i.compare=function(e,o){if(U(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),U(o,Uint8Array)&&(o=i.from(o,o.offset,o.byteLength)),!i.isBuffer(e)||!i.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,r=o.length,c=0,p=Math.min(n,r);c<p;++c)if(e[c]!==o[c]){n=e[c],r=o[c];break}return n<r?-1:r<n?1:0};i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};i.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return i.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var r=i.allocUnsafe(o),c=0;for(n=0;n<e.length;++n){var p=e[n];if(U(p,Uint8Array))c+p.length>r.length?i.from(p).copy(r,c):Uint8Array.prototype.set.call(r,p,c);else if(i.isBuffer(p))p.copy(r,c);else throw new TypeError('"list" argument must be an Array of Buffers');c+=p.length}return r};function Ze(t,e){if(i.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||U(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return xe(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return to(t).length;default:if(r)return n?-1:xe(t).length;e=(""+e).toLowerCase(),r=!0}}i.byteLength=Ze;function vt(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Ut(this,e,o);case"utf8":case"utf-8":return Qe(this,e,o);case"ascii":return Ct(this,e,o);case"latin1":case"binary":return Lt(this,e,o);case"base64":return Ft(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Nt(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}i.prototype._isBuffer=!0;function X(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}i.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)X(this,o,o+1);return this};i.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)X(this,o,o+3),X(this,o+1,o+2);return this};i.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)X(this,o,o+7),X(this,o+1,o+6),X(this,o+2,o+5),X(this,o+3,o+4);return this};i.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Qe(this,0,e):vt.apply(this,arguments)};i.prototype.toLocaleString=i.prototype.toString;i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:i.compare(this,e)===0};i.prototype.inspect=function(){var e="",o=R.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};He&&(i.prototype[He]=i.prototype.inspect);i.prototype.compare=function(e,o,n,r,c){if(U(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),c===void 0&&(c=this.length),o<0||n>e.length||r<0||c>this.length)throw new RangeError("out of range index");if(r>=c&&o>=n)return 0;if(r>=c)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,r>>>=0,c>>>=0,this===e)return 0;for(var p=c-r,l=n-o,a=Math.min(p,l),s=this.slice(r,c),m=e.slice(o,n),u=0;u<a;++u)if(s[u]!==m[u]){p=s[u],l=m[u];break}return p<l?-1:l<p?1:0};function Ke(t,e,o,n,r){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,ve(o)&&(o=r?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(r)return-1;o=t.length-1}else if(o<0)if(r)o=0;else return-1;if(typeof e=="string"&&(e=i.from(e,n)),i.isBuffer(e))return e.length===0?-1:Re(t,e,o,n,r);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):Re(t,[e],o,n,r);throw new TypeError("val must be string, number or Buffer")}function Re(t,e,o,n,r){var c=1,p=t.length,l=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;c=2,p/=2,l/=2,o/=2}function a(x,C){return c===1?x[C]:x.readUInt16BE(C*c)}var s;if(r){var m=-1;for(s=o;s<p;s++)if(a(t,s)===a(e,m===-1?0:s-m)){if(m===-1&&(m=s),s-m+1===l)return m*c}else m!==-1&&(s-=s-m),m=-1}else for(o+l>p&&(o=p-l),s=o;s>=0;s--){for(var u=!0,S=0;S<l;S++)if(a(t,s+S)!==a(e,S)){u=!1;break}if(u)return s}return-1}i.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};i.prototype.indexOf=function(e,o,n){return Ke(this,e,o,n,!0)};i.prototype.lastIndexOf=function(e,o,n){return Ke(this,e,o,n,!1)};function bt(t,e,o,n){o=Number(o)||0;var r=t.length-o;n?(n=Number(n),n>r&&(n=r)):n=r;var c=e.length;n>c/2&&(n=c/2);for(var p=0;p<n;++p){var l=parseInt(e.substr(p*2,2),16);if(ve(l))return p;t[o+p]=l}return p}function Et(t,e,o,n){return ce(xe(e,t.length-o),t,o,n)}function Tt(t,e,o,n){return ce(Pt(e),t,o,n)}function At(t,e,o,n){return ce(to(e),t,o,n)}function Bt(t,e,o,n){return ce(Vt(e,t.length-o),t,o,n)}i.prototype.write=function(e,o,n,r){if(o===void 0)r="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")r=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,r===void 0&&(r="utf8")):(r=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var c=this.length-o;if((n===void 0||n>c)&&(n=c),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var p=!1;;)switch(r){case"hex":return bt(this,e,o,n);case"utf8":case"utf-8":return Et(this,e,o,n);case"ascii":case"latin1":case"binary":return Tt(this,e,o,n);case"base64":return At(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bt(this,e,o,n);default:if(p)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),p=!0}};i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ft(t,e,o){return e===0&&o===t.length?ke.fromByteArray(t):ke.fromByteArray(t.slice(e,o))}function Qe(t,e,o){o=Math.min(t.length,o);for(var n=[],r=e;r<o;){var c=t[r],p=null,l=c>239?4:c>223?3:c>191?2:1;if(r+l<=o){var a,s,m,u;switch(l){case 1:c<128&&(p=c);break;case 2:a=t[r+1],(a&192)===128&&(u=(c&31)<<6|a&63,u>127&&(p=u));break;case 3:a=t[r+1],s=t[r+2],(a&192)===128&&(s&192)===128&&(u=(c&15)<<12|(a&63)<<6|s&63,u>2047&&(u<55296||u>57343)&&(p=u));break;case 4:a=t[r+1],s=t[r+2],m=t[r+3],(a&192)===128&&(s&192)===128&&(m&192)===128&&(u=(c&15)<<18|(a&63)<<12|(s&63)<<6|m&63,u>65535&&u<1114112&&(p=u))}}p===null?(p=65533,l=1):p>65535&&(p-=65536,n.push(p>>>10&1023|55296),p=56320|p&1023),n.push(p),r+=l}return It(n)}var Je=4096;function It(t){var e=t.length;if(e<=Je)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=Je));return o}function Ct(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]&127);return n}function Lt(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]);return n}function Ut(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var r="",c=e;c<o;++c)r+=Dt[t[c]];return r}function Nt(t,e,o){for(var n=t.slice(e,o),r="",c=0;c<n.length-1;c+=2)r+=String.fromCharCode(n[c]+n[c+1]*256);return r}i.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,i.prototype),r};function E(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=this[e],c=1,p=0;++p<o&&(c*=256);)r+=this[e+p]*c;return r};i.prototype.readUintBE=i.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=this[e+--o],c=1;o>0&&(c*=256);)r+=this[e+--o]*c;return r};i.prototype.readUint8=i.prototype.readUInt8=function(e,o){return e=e>>>0,o||E(e,1,this.length),this[e]};i.prototype.readUint16LE=i.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||E(e,2,this.length),this[e]|this[e+1]<<8};i.prototype.readUint16BE=i.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||E(e,2,this.length),this[e]<<8|this[e+1]};i.prototype.readUint32LE=i.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||E(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};i.prototype.readUint32BE=i.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||E(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};i.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=this[e],c=1,p=0;++p<o&&(c*=256);)r+=this[e+p]*c;return c*=128,r>=c&&(r-=Math.pow(2,8*o)),r};i.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||E(e,o,this.length);for(var r=o,c=1,p=this[e+--r];r>0&&(c*=256);)p+=this[e+--r]*c;return c*=128,p>=c&&(p-=Math.pow(2,8*o)),p};i.prototype.readInt8=function(e,o){return e=e>>>0,o||E(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};i.prototype.readInt16LE=function(e,o){e=e>>>0,o||E(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};i.prototype.readInt16BE=function(e,o){e=e>>>0,o||E(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};i.prototype.readInt32LE=function(e,o){return e=e>>>0,o||E(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};i.prototype.readInt32BE=function(e,o){return e=e>>>0,o||E(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};i.prototype.readFloatLE=function(e,o){return e=e>>>0,o||E(e,4,this.length),H.read(this,e,!0,23,4)};i.prototype.readFloatBE=function(e,o){return e=e>>>0,o||E(e,4,this.length),H.read(this,e,!1,23,4)};i.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||E(e,8,this.length),H.read(this,e,!0,52,8)};i.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||E(e,8,this.length),H.read(this,e,!1,52,8)};function B(t,e,o,n,r,c){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<c)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var c=Math.pow(2,8*n)-1;B(this,e,o,n,c,0)}var p=1,l=0;for(this[o]=e&255;++l<n&&(p*=256);)this[o+l]=e/p&255;return o+n};i.prototype.writeUintBE=i.prototype.writeUIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var c=Math.pow(2,8*n)-1;B(this,e,o,n,c,0)}var p=n-1,l=1;for(this[o+p]=e&255;--p>=0&&(l*=256);)this[o+p]=e/l&255;return o+n};i.prototype.writeUint8=i.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,1,255,0),this[o]=e&255,o+1};i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};i.prototype.writeIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*n-1);B(this,e,o,n,c-1,-c)}var p=0,l=1,a=0;for(this[o]=e&255;++p<n&&(l*=256);)e<0&&a===0&&this[o+p-1]!==0&&(a=1),this[o+p]=(e/l>>0)-a&255;return o+n};i.prototype.writeIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var c=Math.pow(2,8*n-1);B(this,e,o,n,c-1,-c)}var p=n-1,l=1,a=0;for(this[o+p]=e&255;--p>=0&&(l*=256);)e<0&&a===0&&this[o+p+1]!==0&&(a=1),this[o+p]=(e/l>>0)-a&255;return o+n};i.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};i.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};i.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||B(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function je(t,e,o,n,r,c){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function eo(t,e,o,n,r){return e=+e,o=o>>>0,r||je(t,e,o,4,34028234663852886e22,-34028234663852886e22),H.write(t,e,o,n,23,4),o+4}i.prototype.writeFloatLE=function(e,o,n){return eo(this,e,o,!0,n)};i.prototype.writeFloatBE=function(e,o,n){return eo(this,e,o,!1,n)};function oo(t,e,o,n,r){return e=+e,o=o>>>0,r||je(t,e,o,8,17976931348623157e292,-17976931348623157e292),H.write(t,e,o,n,52,8),o+8}i.prototype.writeDoubleLE=function(e,o,n){return oo(this,e,o,!0,n)};i.prototype.writeDoubleBE=function(e,o,n){return oo(this,e,o,!1,n)};i.prototype.copy=function(e,o,n,r){if(!i.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-n&&(r=e.length-o+n);var c=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),o),c};i.prototype.fill=function(e,o,n,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,n=this.length):typeof n=="string"&&(r=n,n=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var c=e.charCodeAt(0);(r==="utf8"&&c<128||r==="latin1")&&(e=c)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var p;if(typeof e=="number")for(p=o;p<n;++p)this[p]=e;else{var l=i.isBuffer(e)?e:i.from(e,r),a=l.length;if(a===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(p=0;p<n-o;++p)this[p+o]=l[p%a]}return this};var Mt=/[^+/0-9A-Za-z-_]/g;function Ot(t){if(t=t.split("=")[0],t=t.trim().replace(Mt,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function xe(t,e){e=e||1/0;for(var o,n=t.length,r=null,c=[],p=0;p<n;++p){if(o=t.charCodeAt(p),o>55295&&o<57344){if(!r){if(o>56319){(e-=3)>-1&&c.push(239,191,189);continue}else if(p+1===n){(e-=3)>-1&&c.push(239,191,189);continue}r=o;continue}if(o<56320){(e-=3)>-1&&c.push(239,191,189),r=o;continue}o=(r-55296<<10|o-56320)+65536}else r&&(e-=3)>-1&&c.push(239,191,189);if(r=null,o<128){if((e-=1)<0)break;c.push(o)}else if(o<2048){if((e-=2)<0)break;c.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;c.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;c.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return c}function Pt(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function Vt(t,e){for(var o,n,r,c=[],p=0;p<t.length&&!((e-=2)<0);++p)o=t.charCodeAt(p),n=o>>8,r=o%256,c.push(r),c.push(n);return c}function to(t){return ke.toByteArray(Ot(t))}function ce(t,e,o,n){for(var r=0;r<n&&!(r+o>=e.length||r>=t.length);++r)e[r+o]=t[r];return r}function U(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function ve(t){return t!==t}var Dt=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,r=0;r<16;++r)e[n+r]=t[o]+t[r];return e}()});var lo=ne((Sn,io)=>{_();var y=io.exports={},N,M;function be(){throw new Error("setTimeout has not been defined")}function Ee(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?N=setTimeout:N=be}catch(t){N=be}try{typeof clearTimeout=="function"?M=clearTimeout:M=Ee}catch(t){M=Ee}})();function ro(t){if(N===setTimeout)return setTimeout(t,0);if((N===be||!N)&&setTimeout)return N=setTimeout,setTimeout(t,0);try{return N(t,0)}catch(e){try{return N.call(null,t,0)}catch(o){return N.call(this,t,0)}}}function Wt(t){if(M===clearTimeout)return clearTimeout(t);if((M===Ee||!M)&&clearTimeout)return M=clearTimeout,clearTimeout(t);try{return M(t)}catch(e){try{return M.call(null,t)}catch(o){return M.call(this,t)}}}var P=[],J=!1,z,ie=-1;function Gt(){!J||!z||(J=!1,z.length?P=z.concat(P):ie=-1,P.length&&po())}function po(){if(!J){var t=ro(Gt);J=!0;for(var e=P.length;e;){for(z=P,P=[];++ie<e;)z&&z[ie].run();ie=-1,e=P.length}z=null,J=!1,Wt(t)}}y.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];P.push(new co(t,e)),P.length===1&&!J&&ro(po)};function co(t,e){this.fun=t,this.array=e}co.prototype.run=function(){this.fun.apply(null,this.array)};y.title="browser";y.browser=!0;y.env={};y.argv=[];y.version="";y.versions={};function V(){}y.on=V;y.addListener=V;y.once=V;y.off=V;y.removeListener=V;y.removeAllListeners=V;y.emit=V;y.prependListener=V;y.prependOnceListener=V;y.listeners=function(t){return[]};y.binding=function(t){throw new Error("process.binding is not supported")};y.cwd=function(){return"/"};y.chdir=function(t){throw new Error("process.chdir is not supported")};y.umask=function(){return 0}});var f,h,gn,_=De(()=>{f=g(no()),h=g(lo()),gn=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var Ae={};ue(Ae,{default:()=>jt});var ae,Qt,jt,Be=De(()=>{"use strict";_();ae=g(require("react")),Qt=t=>ae.createElement("svg",v({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),ae.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),ae.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),jt=Qt});var mn={};ue(mn,{TokenSelect:()=>_n});module.exports=se(mn);_();_();var I=g(require("react")),Zo=g(require("classnames")),Ko=g(require("react-select"));_();_();_();_();var ao="WREWA-bd4d79";var Xt={D:"WREWA-d7c6bb",T:"WREWA-71e90a",1:"WREWA-bd4d79"};function _o(t){return Xt[t]||ao}var Le={};ue(Le,{Control:()=>Yt,IndicatorsContainer:()=>Kt,Input:()=>Rt,Menu:()=>qt,MenuList:()=>Jt,DharitrIIcon:()=>Jo,Placeholder:()=>Zt,SmallLoader:()=>zt,ValueComponent:()=>No,getOption:()=>Ie,getSingleValue:()=>Ce,getValueContainer:()=>Fe});_();_();var Te=g(require("react")),mo=require("@fortawesome/free-solid-svg-icons"),uo=require("@fortawesome/react-fontawesome"),zt=({show:t,color:e})=>t?Te.default.createElement("div",{className:"d-flex"},Te.default.createElement(uo.FontAwesomeIcon,{icon:mo.faSpinner,className:`fa-spin fast-spin ${e||"text-primary"}`})):null;_();_();var so=g(require("react")),fo=require("react-select");_();var $t=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode($t));var d={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var Rt=t=>so.default.createElement(fo.components.Input,b(v({},t),{className:d.dropdown,"data-testid":"tokenSelectInput"}));_();var ho=g(require("react")),ko=require("react-select");var Jt=t=>{let n=t,{rx:e}=n,o=Ve(n,["rx"]);return ho.default.createElement(ko.components.MenuList,b(v({},o),{className:d.list}))};_();var le=g(require("react")),So=require("@fortawesome/free-solid-svg-icons"),go=require("@fortawesome/react-fontawesome"),xo=require("react-select");var qt=t=>le.default.createElement(xo.components.Menu,b(v({},t),{className:d.menu}),t.selectProps.isLoading?le.default.createElement("div",{className:d.loading},le.default.createElement(go.FontAwesomeIcon,{icon:So.faCircleNotch,className:"fa-spin",size:"lg"})):t.children);_();var yo=g(require("react")),wo=require("react-select");var Yt=t=>yo.default.createElement(wo.components.Control,b(v({},t),{className:d.control}));_();var vo=g(require("react")),bo=g(require("classnames")),Eo=require("react-select");var Zt=t=>vo.default.createElement(Eo.components.Placeholder,b(v({},t),{className:(0,bo.default)(d.placeholder,{[d.focused]:t.isFocused})}));_();var To=g(require("react")),Ao=g(require("classnames")),Bo=require("react-select");var Kt=t=>To.default.createElement(Bo.components.IndicatorsContainer,b(v({},t),{className:(0,Ao.default)(d.indicator,{[d.expanded]:t.selectProps.menuIsOpen})}));_();var A=g(require("react")),Fo=require("@fortawesome/free-solid-svg-icons"),Io=require("@fortawesome/react-fontawesome"),Co=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Lo=g(require("classnames")),Uo=require("react-select");var en=(Be(),se(Ae)).default,No=({RewaIcon:t,tokenId:e,icon:o})=>{let{isRewa:n}=(0,Co.getIdentifierType)(e);return n?A.default.createElement("span",{className:d.asset},t?A.default.createElement(t,{className:d.diamond}):A.default.createElement(en,{className:d.diamond})):o?A.default.createElement("img",{src:o,className:d.asset}):A.default.createElement(Io.FontAwesomeIcon,{icon:Fo.faDiamond,className:d.asset})},on=({children:t})=>A.default.createElement("div",{className:d.wrapper},t),Fe=(t,e,o)=>n=>{var m,u;let{selectProps:r,isDisabled:c,children:p}=n,l=r.value,a=(u=(m=l==null?void 0:l.assets)==null?void 0:m.svgUrl)!=null?u:null,s=(0,A.useMemo)(()=>{let S=String(l==null?void 0:l.token.usdPrice);return S!=null&&S.includes("$")?l==null?void 0:l.token.usdPrice:`$${l==null?void 0:l.token.usdPrice}`},[l==null?void 0:l.token.usdPrice]);return A.default.createElement(Uo.components.ValueContainer,b(v({},n),{className:d.container}),A.default.createElement("div",{className:(0,Lo.default)(d.icon,e)},A.default.createElement(No,{RewaIcon:o,rewaLabel:t,icon:a,isDisabled:c,tokenId:l==null?void 0:l.value})),A.default.createElement("div",{className:d.payload},A.default.createElement(on,null,p,(l==null?void 0:l.token.usdPrice)&&A.default.createElement("small",{className:d.price},s))))};_();var w=g(require("react")),Wo=require("@fortawesome/free-solid-svg-icons"),Go=require("@fortawesome/react-fontawesome"),Xo=require("@terradharitri/sdk-dapp/constants"),zo=require("@terradharitri/sdk-dapp/UI/UsdValue"),$o=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ho=g(require("classnames")),Ro=require("react-select");_();_();var Z=g(require("react"));_();var tn=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(tn));var Mo={highlight:"dapp-core-component__styles-modules__highlight"};var Oo=({highlight:t,text:e=""})=>{let o=e.split(" "),n=t.toLowerCase(),r=new RegExp(`(${n})`,"gi"),c=o.map(p=>p.split(r).filter(l=>l));return Z.default.createElement("span",{className:Mo.highlight},c.map((p,l)=>{let a=`${p}-${l}`;return Z.default.createElement("span",{key:a},p.map((s,m)=>{let u=s.toLowerCase()===n,S=n&&u,x=`${s}-${m}`;return S?Z.default.createElement("strong",{key:x},s):Z.default.createElement("span",{key:x},s)}))}))};_();var D=require("@terradharitri/sdk-dapp/constants"),Po=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Vo=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Do=({amount:t="0",decimals:e=0,digits:o=D.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:r=!1})=>{if(t==null||!(0,Vo.stringIsInteger)(t))return"0";let c=l=>(0,Po.formatAmount)({input:t,digits:l,decimals:e,addCommas:n,showLastNonZeroDecimal:r}),p=c(o);return p=parseFloat(p)>0?p:c(D.DIGITS),p=parseFloat(p)>0?p:c(D.DIGITS+2),p=parseFloat(p)>0?p:c(D.DIGITS+4),p=parseFloat(p)>0?p:c(D.DIGITS+6),p=parseFloat(p)>0?p:c(D.DIGITS+10),parseFloat(p)>0?p:c(D.DIGITS+14)};var{default:Jo}=(Be(),se(Ae)),Ie=({RewaIcon:t,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>r=>{var K,Q,j,ee;let{data:c,isSelected:p,isFocused:l,isDisabled:a,selectProps:s}=r,m=c,{isRewa:u}=(0,$o.getIdentifierType)(m.value),S=m.token.assets?m.token.assets.svgUrl:null,x=Do({amount:m.token.balance,decimals:m.token.decimals||Xo.DECIMALS,addCommas:!0}),C=(Q=(K=m.token)==null?void 0:K.usdPrice)==null?void 0:Q.toString(),$=(ee=(j=m.token)==null?void 0:j.valueUSD)==null?void 0:ee.toString();return w.default.createElement("div",{"data-testid":`${r.value}-option`},w.default.createElement(Ro.components.Option,b(v({},r),{className:(0,Ho.default)(d.option,{[d.selected]:p||l,[d.disabled]:a})}),w.default.createElement("div",{className:d.image},u?w.default.createElement("span",{className:d.icon},t?w.default.createElement(t,null):w.default.createElement(Jo,null)):S?w.default.createElement("img",{src:S,className:d.icon}):w.default.createElement("span",{className:d.icon},w.default.createElement(Go.FontAwesomeIcon,{icon:Wo.faDiamond,className:d.diamond}))),w.default.createElement("div",{className:d.info},w.default.createElement("div",{className:d.left},w.default.createElement("div",{className:d.ticker},w.default.createElement("span",{className:d.value},s.inputValue?w.default.createElement(Oo,{text:m.token.ticker,highlight:s.inputValue}):m.token.ticker),e&&w.default.createElement(e,{token:m.token})),n&&w.default.createElement("small",{className:d.price},C)),w.default.createElement("div",{className:d.right},w.default.createElement("span",{className:d.value},x),o&&$&&w.default.createElement(zo.UsdValue,{usd:1,decimals:4,amount:$,"data-testid":"token-price-usd-value",className:d.price,addEqualSign:!1}))),w.default.createElement("div",{className:d.children},r.children)))};_();var _e=g(require("react")),qo=g(require("classnames")),Yo=require("react-select");var Ce=t=>e=>{let{selectProps:o,children:n}=e,r=o.value;return _e.default.createElement(Yo.components.SingleValue,b(v({},e),{className:(0,qo.default)(d.single,{[d.focused]:e.selectProps.menuIsOpen})}),_e.default.createElement("div",{className:d.ticker},n,t&&_e.default.createElement(t,{token:r==null?void 0:r.token})))};var{Menu:nn,Control:rn,Input:pn,MenuList:cn,IndicatorsContainer:ln,Placeholder:an}=Le,_n=t=>{let{name:e,options:o,isLoading:n=!1,className:r="",noOptionsMessage:c="No Tokens",disabledOption:p,rewaLabel:l,RewaIcon:a,disabled:s,value:m,onBlur:u,onFocus:S,onChange:x,onMenuOpen:C,chainId:$,wrapperClassName:K="",showTokenPrice:Q=!1,showBalanceUsdValue:j=!1,selectedTokenIconClassName:ee,TokenTickerIcon:Ue}=t,oe=(0,I.useRef)(null),Qo=[l,_o($)],jo=(0,I.useMemo)(()=>Ie({rewaLabel:l,RewaIcon:a,showTokenPrice:Q,showBalanceUsdValue:j,TokenTickerIcon:Ue}),[]),et=(0,I.useMemo)(()=>Fe(l,ee,a),[]),ot=(0,I.useMemo)(()=>Ce(Ue),[]);(0,I.useEffect)(()=>{let T=o.find(q=>q.value===(m==null?void 0:m.value)),W=(T==null?void 0:T.token.balance)===(m==null?void 0:m.token.balance);!T||W||x(T)},[o]);let Ne=T=>Qo.includes(T),tt=T=>{var Me;let W=T.value===(p==null?void 0:p.value),q=Ne(T.value),me=Ne((Me=p==null?void 0:p.value)!=null?Me:"");return W||q&&me},nt=(T,W)=>{let q=T.data.token.ticker?T.data.token.ticker.toLowerCase().includes(W.toLowerCase()):!1,me=T.data.token.name.toLowerCase().includes(W.toLowerCase());return Boolean(W)?q||me:!0};return I.default.createElement("div",{"data-testid":`${e}Select`,className:`${K} ${n?"select-holder-loading":""}`},I.default.createElement("label",{htmlFor:e,"data-testid":"tokenIdLabel",className:d.label},"Token"),I.default.createElement(Ko.default,{ref:oe,inputId:e,name:e,options:o,openMenuOnFocus:!0,isDisabled:s,isLoading:n,value:m,isOptionDisabled:tt,onBlur:u,filterOption:nt,onFocus:S,onChange:T=>{x(T),oe&&oe.current!==null&&oe.current.blur()},isSearchable:t.isSearchable,maxMenuHeight:260,onMenuOpen:C,noOptionsMessage:()=>c,className:(0,Zo.default)(d.select,r,{[d.disabled]:t.disabled}),components:{IndicatorSeparator:()=>null,LoadingIndicator:()=>null,Menu:nn,Control:rn,Input:pn,MenuList:cn,IndicatorsContainer:ln,ValueContainer:et,Placeholder:an,Option:jo,SingleValue:ot}}))};_();0&&(module.exports={TokenSelect});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
