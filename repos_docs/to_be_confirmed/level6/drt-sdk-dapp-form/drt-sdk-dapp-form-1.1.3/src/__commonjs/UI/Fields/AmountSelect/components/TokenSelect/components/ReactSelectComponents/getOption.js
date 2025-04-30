"use strict";var no=Object.create;var W=Object.defineProperty,ro=Object.defineProperties,co=Object.getOwnPropertyDescriptor,po=Object.getOwnPropertyDescriptors,io=Object.getOwnPropertyNames,de=Object.getOwnPropertySymbols,lo=Object.getPrototypeOf,se=Object.prototype.hasOwnProperty,_o=Object.prototype.propertyIsEnumerable;var me=(t,e,o)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,X=(t,e)=>{for(var o in e||(e={}))se.call(e,o)&&me(t,o,e[o]);if(de)for(var o of de(e))_o.call(e,o)&&me(t,o,e[o]);return t},fe=(t,e)=>ro(t,po(e));var he=(t,e)=>()=>(t&&(e=t(t=0)),e);var G=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ke=(t,e)=>{for(var o in e)W(t,o,{get:e[o],enumerable:!0})},Se=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of io(e))!se.call(t,r)&&r!==o&&W(t,r,{get:()=>e[r],enumerable:!(n=co(e,r))||n.enumerable});return t};var z=(t,e,o)=>(o=t!=null?no(lo(t)):{},Se(e||!t||!t.__esModule?W(o,"default",{value:t,enumerable:!0}):o,t)),xe=t=>Se(W({},"__esModule",{value:!0}),t);var ye=G(Y=>{"use strict";m();Y.byteLength=uo;Y.toByteArray=so;Y.fromByteArray=ko;var E=[],g=[],ao=typeof Uint8Array!="undefined"?Uint8Array:Array,Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(N=0,we=Q.length;N<we;++N)E[N]=Q[N],g[Q.charCodeAt(N)]=N;var N,we;g["-".charCodeAt(0)]=62;g["_".charCodeAt(0)]=63;function ge(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=t.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function uo(t){var e=ge(t),o=e[0],n=e[1];return(o+n)*3/4-n}function mo(t,e,o){return(e+o)*3/4-o}function so(t){var e,o=ge(t),n=o[0],r=o[1],p=new ao(mo(t,n,r)),c=0,l=r>0?n-4:n,_;for(_=0;_<l;_+=4)e=g[t.charCodeAt(_)]<<18|g[t.charCodeAt(_+1)]<<12|g[t.charCodeAt(_+2)]<<6|g[t.charCodeAt(_+3)],p[c++]=e>>16&255,p[c++]=e>>8&255,p[c++]=e&255;return r===2&&(e=g[t.charCodeAt(_)]<<2|g[t.charCodeAt(_+1)]>>4,p[c++]=e&255),r===1&&(e=g[t.charCodeAt(_)]<<10|g[t.charCodeAt(_+1)]<<4|g[t.charCodeAt(_+2)]>>2,p[c++]=e>>8&255,p[c++]=e&255),p}function fo(t){return E[t>>18&63]+E[t>>12&63]+E[t>>6&63]+E[t&63]}function ho(t,e,o){for(var n,r=[],p=e;p<o;p+=3)n=(t[p]<<16&16711680)+(t[p+1]<<8&65280)+(t[p+2]&255),r.push(fo(n));return r.join("")}function ko(t){for(var e,o=t.length,n=o%3,r=[],p=16383,c=0,l=o-n;c<l;c+=p)r.push(ho(t,c,c+p>l?l:c+p));return n===1?(e=t[o-1],r.push(E[e>>2]+E[e<<4&63]+"==")):n===2&&(e=(t[o-2]<<8)+t[o-1],r.push(E[e>>10]+E[e>>4&63]+E[e<<2&63]+"=")),r.join("")}});var ve=G(D=>{m();D.read=function(t,e,o,n,r){var p,c,l=r*8-n-1,_=(1<<l)-1,u=_>>1,a=-7,d=o?r-1:0,x=o?-1:1,h=t[e+d];for(d+=x,p=h&(1<<-a)-1,h>>=-a,a+=l;a>0;p=p*256+t[e+d],d+=x,a-=8);for(c=p&(1<<-a)-1,p>>=-a,a+=n;a>0;c=c*256+t[e+d],d+=x,a-=8);if(p===0)p=1-u;else{if(p===_)return c?NaN:(h?-1:1)*(1/0);c=c+Math.pow(2,n),p=p-u}return(h?-1:1)*c*Math.pow(2,p-n)};D.write=function(t,e,o,n,r,p){var c,l,_,u=p*8-r-1,a=(1<<u)-1,d=a>>1,x=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:p-1,C=n?1:-1,q=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,c=a):(c=Math.floor(Math.log(e)/Math.LN2),e*(_=Math.pow(2,-c))<1&&(c--,_*=2),c+d>=1?e+=x/_:e+=x*Math.pow(2,1-d),e*_>=2&&(c++,_/=2),c+d>=a?(l=0,c=a):c+d>=1?(l=(e*_-1)*Math.pow(2,r),c=c+d):(l=e*Math.pow(2,d-1)*Math.pow(2,r),c=0));r>=8;t[o+h]=l&255,h+=C,l/=256,r-=8);for(c=c<<r|l,u+=r;u>0;t[o+h]=c&255,h+=C,c/=256,u-=8);t[o+h-C]|=q*128}});var Re=G(P=>{"use strict";m();var j=ye(),H=ve(),be=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;P.Buffer=i;P.SlowBuffer=vo;P.INSPECT_MAX_BYTES=50;var $=2147483647;P.kMaxLength=$;i.TYPED_ARRAY_SUPPORT=So();!i.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function So(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch(o){return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.buffer}});Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(!!i.isBuffer(this))return this.byteOffset}});function U(t){if(t>$)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,i.prototype),e}function i(t,e,o){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return ne(t)}return Ae(t,e,o)}i.poolSize=8192;function Ae(t,e,o){if(typeof t=="string")return wo(t,e);if(ArrayBuffer.isView(t))return go(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(B(t,ArrayBuffer)||t&&B(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(B(t,SharedArrayBuffer)||t&&B(t.buffer,SharedArrayBuffer)))return oe(t,e,o);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return i.from(n,e,o);var r=yo(t);if(r)return r;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return i.from(t[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}i.from=function(t,e,o){return Ae(t,e,o)};Object.setPrototypeOf(i.prototype,Uint8Array.prototype);Object.setPrototypeOf(i,Uint8Array);function Fe(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function xo(t,e,o){return Fe(t),t<=0?U(t):e!==void 0?typeof o=="string"?U(t).fill(e,o):U(t).fill(e):U(t)}i.alloc=function(t,e,o){return xo(t,e,o)};function ne(t){return Fe(t),U(t<0?0:re(t)|0)}i.allocUnsafe=function(t){return ne(t)};i.allocUnsafeSlow=function(t){return ne(t)};function wo(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!i.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Ue(t,e)|0,n=U(o),r=n.write(t,e);return r!==o&&(n=n.slice(0,r)),n}function ee(t){for(var e=t.length<0?0:re(t.length)|0,o=U(e),n=0;n<e;n+=1)o[n]=t[n]&255;return o}function go(t){if(B(t,Uint8Array)){var e=new Uint8Array(t);return oe(e.buffer,e.byteOffset,e.byteLength)}return ee(t)}function oe(t,e,o){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(t):o===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,o),Object.setPrototypeOf(n,i.prototype),n}function yo(t){if(i.isBuffer(t)){var e=re(t.length)|0,o=U(e);return o.length===0||t.copy(o,0,0,e),o}if(t.length!==void 0)return typeof t.length!="number"||ce(t.length)?U(0):ee(t);if(t.type==="Buffer"&&Array.isArray(t.data))return ee(t.data)}function re(t){if(t>=$)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+$.toString(16)+" bytes");return t|0}function vo(t){return+t!=t&&(t=0),i.alloc(+t)}i.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==i.prototype};i.compare=function(e,o){if(B(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),B(o,Uint8Array)&&(o=i.from(o,o.offset,o.byteLength)),!i.isBuffer(e)||!i.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,r=o.length,p=0,c=Math.min(n,r);p<c;++p)if(e[p]!==o[p]){n=e[p],r=o[p];break}return n<r?-1:r<n?1:0};i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};i.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return i.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var r=i.allocUnsafe(o),p=0;for(n=0;n<e.length;++n){var c=e[n];if(B(c,Uint8Array))p+c.length>r.length?i.from(c).copy(r,p):Uint8Array.prototype.set.call(r,c,p);else if(i.isBuffer(c))c.copy(r,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=c.length}return r};function Ue(t,e){if(i.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||B(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var o=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return te(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Me(t).length;default:if(r)return n?-1:te(t).length;e=(""+e).toLowerCase(),r=!0}}i.byteLength=Ue;function bo(t,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return No(this,e,o);case"utf8":case"utf-8":return Te(this,e,o);case"ascii":return Co(this,e,o);case"latin1":case"binary":return Io(this,e,o);case"base64":return Lo(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Mo(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}i.prototype._isBuffer=!0;function M(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}i.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)M(this,o,o+1);return this};i.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)M(this,o,o+3),M(this,o+1,o+2);return this};i.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)M(this,o,o+7),M(this,o+1,o+6),M(this,o+2,o+5),M(this,o+3,o+4);return this};i.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Te(this,0,e):bo.apply(this,arguments)};i.prototype.toLocaleString=i.prototype.toString;i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:i.compare(this,e)===0};i.prototype.inspect=function(){var e="",o=P.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};be&&(i.prototype[be]=i.prototype.inspect);i.prototype.compare=function(e,o,n,r,p){if(B(e,Uint8Array)&&(e=i.from(e,e.offset,e.byteLength)),!i.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),p===void 0&&(p=this.length),o<0||n>e.length||r<0||p>this.length)throw new RangeError("out of range index");if(r>=p&&o>=n)return 0;if(r>=p)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,r>>>=0,p>>>=0,this===e)return 0;for(var c=p-r,l=n-o,_=Math.min(c,l),u=this.slice(r,p),a=e.slice(o,n),d=0;d<_;++d)if(u[d]!==a[d]){c=u[d],l=a[d];break}return c<l?-1:l<c?1:0};function Le(t,e,o,n,r){if(t.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,ce(o)&&(o=r?0:t.length-1),o<0&&(o=t.length+o),o>=t.length){if(r)return-1;o=t.length-1}else if(o<0)if(r)o=0;else return-1;if(typeof e=="string"&&(e=i.from(e,n)),i.isBuffer(e))return e.length===0?-1:Ee(t,e,o,n,r);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(t,e,o):Uint8Array.prototype.lastIndexOf.call(t,e,o):Ee(t,[e],o,n,r);throw new TypeError("val must be string, number or Buffer")}function Ee(t,e,o,n,r){var p=1,c=t.length,l=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;p=2,c/=2,l/=2,o/=2}function _(h,C){return p===1?h[C]:h.readUInt16BE(C*p)}var u;if(r){var a=-1;for(u=o;u<c;u++)if(_(t,u)===_(e,a===-1?0:u-a)){if(a===-1&&(a=u),u-a+1===l)return a*p}else a!==-1&&(u-=u-a),a=-1}else for(o+l>c&&(o=c-l),u=o;u>=0;u--){for(var d=!0,x=0;x<l;x++)if(_(t,u+x)!==_(e,x)){d=!1;break}if(d)return u}return-1}i.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};i.prototype.indexOf=function(e,o,n){return Le(this,e,o,n,!0)};i.prototype.lastIndexOf=function(e,o,n){return Le(this,e,o,n,!1)};function Eo(t,e,o,n){o=Number(o)||0;var r=t.length-o;n?(n=Number(n),n>r&&(n=r)):n=r;var p=e.length;n>p/2&&(n=p/2);for(var c=0;c<n;++c){var l=parseInt(e.substr(c*2,2),16);if(ce(l))return c;t[o+c]=l}return c}function Bo(t,e,o,n){return J(te(e,t.length-o),t,o,n)}function Ao(t,e,o,n){return J(Ho(e),t,o,n)}function Fo(t,e,o,n){return J(Me(e),t,o,n)}function Uo(t,e,o,n){return J(Po(e,t.length-o),t,o,n)}i.prototype.write=function(e,o,n,r){if(o===void 0)r="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")r=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,r===void 0&&(r="utf8")):(r=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-o;if((n===void 0||n>p)&&(n=p),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var c=!1;;)switch(r){case"hex":return Eo(this,e,o,n);case"utf8":case"utf-8":return Bo(this,e,o,n);case"ascii":case"latin1":case"binary":return Ao(this,e,o,n);case"base64":return Fo(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Uo(this,e,o,n);default:if(c)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),c=!0}};i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Lo(t,e,o){return e===0&&o===t.length?j.fromByteArray(t):j.fromByteArray(t.slice(e,o))}function Te(t,e,o){o=Math.min(t.length,o);for(var n=[],r=e;r<o;){var p=t[r],c=null,l=p>239?4:p>223?3:p>191?2:1;if(r+l<=o){var _,u,a,d;switch(l){case 1:p<128&&(c=p);break;case 2:_=t[r+1],(_&192)===128&&(d=(p&31)<<6|_&63,d>127&&(c=d));break;case 3:_=t[r+1],u=t[r+2],(_&192)===128&&(u&192)===128&&(d=(p&15)<<12|(_&63)<<6|u&63,d>2047&&(d<55296||d>57343)&&(c=d));break;case 4:_=t[r+1],u=t[r+2],a=t[r+3],(_&192)===128&&(u&192)===128&&(a&192)===128&&(d=(p&15)<<18|(_&63)<<12|(u&63)<<6|a&63,d>65535&&d<1114112&&(c=d))}}c===null?(c=65533,l=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|c&1023),n.push(c),r+=l}return To(n)}var Be=4096;function To(t){var e=t.length;if(e<=Be)return String.fromCharCode.apply(String,t);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,t.slice(n,n+=Be));return o}function Co(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]&127);return n}function Io(t,e,o){var n="";o=Math.min(t.length,o);for(var r=e;r<o;++r)n+=String.fromCharCode(t[r]);return n}function No(t,e,o){var n=t.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var r="",p=e;p<o;++p)r+=Vo[t[p]];return r}function Mo(t,e,o){for(var n=t.slice(e,o),r="",p=0;p<n.length-1;p+=2)r+=String.fromCharCode(n[p]+n[p+1]*256);return r}i.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var r=this.subarray(e,o);return Object.setPrototypeOf(r,i.prototype),r};function k(t,e,o){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>o)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUintLE=i.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||k(e,o,this.length);for(var r=this[e],p=1,c=0;++c<o&&(p*=256);)r+=this[e+c]*p;return r};i.prototype.readUintBE=i.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||k(e,o,this.length);for(var r=this[e+--o],p=1;o>0&&(p*=256);)r+=this[e+--o]*p;return r};i.prototype.readUint8=i.prototype.readUInt8=function(e,o){return e=e>>>0,o||k(e,1,this.length),this[e]};i.prototype.readUint16LE=i.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||k(e,2,this.length),this[e]|this[e+1]<<8};i.prototype.readUint16BE=i.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||k(e,2,this.length),this[e]<<8|this[e+1]};i.prototype.readUint32LE=i.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||k(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};i.prototype.readUint32BE=i.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||k(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};i.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||k(e,o,this.length);for(var r=this[e],p=1,c=0;++c<o&&(p*=256);)r+=this[e+c]*p;return p*=128,r>=p&&(r-=Math.pow(2,8*o)),r};i.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||k(e,o,this.length);for(var r=o,p=1,c=this[e+--r];r>0&&(p*=256);)c+=this[e+--r]*p;return p*=128,c>=p&&(c-=Math.pow(2,8*o)),c};i.prototype.readInt8=function(e,o){return e=e>>>0,o||k(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};i.prototype.readInt16LE=function(e,o){e=e>>>0,o||k(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};i.prototype.readInt16BE=function(e,o){e=e>>>0,o||k(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};i.prototype.readInt32LE=function(e,o){return e=e>>>0,o||k(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};i.prototype.readInt32BE=function(e,o){return e=e>>>0,o||k(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};i.prototype.readFloatLE=function(e,o){return e=e>>>0,o||k(e,4,this.length),H.read(this,e,!0,23,4)};i.prototype.readFloatBE=function(e,o){return e=e>>>0,o||k(e,4,this.length),H.read(this,e,!1,23,4)};i.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||k(e,8,this.length),H.read(this,e,!0,52,8)};i.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||k(e,8,this.length),H.read(this,e,!1,52,8)};function w(t,e,o,n,r,p){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<p)throw new RangeError('"value" argument is out of bounds');if(o+n>t.length)throw new RangeError("Index out of range")}i.prototype.writeUintLE=i.prototype.writeUIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var p=Math.pow(2,8*n)-1;w(this,e,o,n,p,0)}var c=1,l=0;for(this[o]=e&255;++l<n&&(c*=256);)this[o+l]=e/c&255;return o+n};i.prototype.writeUintBE=i.prototype.writeUIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,n=n>>>0,!r){var p=Math.pow(2,8*n)-1;w(this,e,o,n,p,0)}var c=n-1,l=1;for(this[o+c]=e&255;--c>=0&&(l*=256);)this[o+c]=e/l&255;return o+n};i.prototype.writeUint8=i.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,1,255,0),this[o]=e&255,o+1};i.prototype.writeUint16LE=i.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeUint16BE=i.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeUint32LE=i.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};i.prototype.writeUint32BE=i.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};i.prototype.writeIntLE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var p=Math.pow(2,8*n-1);w(this,e,o,n,p-1,-p)}var c=0,l=1,_=0;for(this[o]=e&255;++c<n&&(l*=256);)e<0&&_===0&&this[o+c-1]!==0&&(_=1),this[o+c]=(e/l>>0)-_&255;return o+n};i.prototype.writeIntBE=function(e,o,n,r){if(e=+e,o=o>>>0,!r){var p=Math.pow(2,8*n-1);w(this,e,o,n,p-1,-p)}var c=n-1,l=1,_=0;for(this[o+c]=e&255;--c>=0&&(l*=256);)e<0&&_===0&&this[o+c+1]!==0&&(_=1),this[o+c]=(e/l>>0)-_&255;return o+n};i.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};i.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};i.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};i.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};i.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||w(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function Ce(t,e,o,n,r,p){if(o+n>t.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function Ie(t,e,o,n,r){return e=+e,o=o>>>0,r||Ce(t,e,o,4,34028234663852886e22,-34028234663852886e22),H.write(t,e,o,n,23,4),o+4}i.prototype.writeFloatLE=function(e,o,n){return Ie(this,e,o,!0,n)};i.prototype.writeFloatBE=function(e,o,n){return Ie(this,e,o,!1,n)};function Ne(t,e,o,n,r){return e=+e,o=o>>>0,r||Ce(t,e,o,8,17976931348623157e292,-17976931348623157e292),H.write(t,e,o,n,52,8),o+8}i.prototype.writeDoubleLE=function(e,o,n){return Ne(this,e,o,!0,n)};i.prototype.writeDoubleBE=function(e,o,n){return Ne(this,e,o,!1,n)};i.prototype.copy=function(e,o,n,r){if(!i.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!r&&r!==0&&(r=this.length),o>=e.length&&(o=e.length),o||(o=0),r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-o<r-n&&(r=e.length-o+n);var p=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),o),p};i.prototype.fill=function(e,o,n,r){if(typeof e=="string"){if(typeof o=="string"?(r=o,o=0,n=this.length):typeof n=="string"&&(r=n,n=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(e.length===1){var p=e.charCodeAt(0);(r==="utf8"&&p<128||r==="latin1")&&(e=p)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var c;if(typeof e=="number")for(c=o;c<n;++c)this[c]=e;else{var l=i.isBuffer(e)?e:i.from(e,r),_=l.length;if(_===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(c=0;c<n-o;++c)this[c+o]=l[c%_]}return this};var Ro=/[^+/0-9A-Za-z-_]/g;function zo(t){if(t=t.split("=")[0],t=t.trim().replace(Ro,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function te(t,e){e=e||1/0;for(var o,n=t.length,r=null,p=[],c=0;c<n;++c){if(o=t.charCodeAt(c),o>55295&&o<57344){if(!r){if(o>56319){(e-=3)>-1&&p.push(239,191,189);continue}else if(c+1===n){(e-=3)>-1&&p.push(239,191,189);continue}r=o;continue}if(o<56320){(e-=3)>-1&&p.push(239,191,189),r=o;continue}o=(r-55296<<10|o-56320)+65536}else r&&(e-=3)>-1&&p.push(239,191,189);if(r=null,o<128){if((e-=1)<0)break;p.push(o)}else if(o<2048){if((e-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function Ho(t){for(var e=[],o=0;o<t.length;++o)e.push(t.charCodeAt(o)&255);return e}function Po(t,e){for(var o,n,r,p=[],c=0;c<t.length&&!((e-=2)<0);++c)o=t.charCodeAt(c),n=o>>8,r=o%256,p.push(r),p.push(n);return p}function Me(t){return j.toByteArray(zo(t))}function J(t,e,o,n){for(var r=0;r<n&&!(r+o>=e.length||r>=t.length);++r)e[r+o]=t[r];return r}function B(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===e.name}function ce(t){return t!==t}var Vo=function(){for(var t="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,r=0;r<16;++r)e[n+r]=t[o]+t[r];return e}()});var We=G((jo,Ve)=>{m();var s=Ve.exports={},A,F;function pe(){throw new Error("setTimeout has not been defined")}function ie(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?A=setTimeout:A=pe}catch(t){A=pe}try{typeof clearTimeout=="function"?F=clearTimeout:F=ie}catch(t){F=ie}})();function ze(t){if(A===setTimeout)return setTimeout(t,0);if((A===pe||!A)&&setTimeout)return A=setTimeout,setTimeout(t,0);try{return A(t,0)}catch(e){try{return A.call(null,t,0)}catch(o){return A.call(this,t,0)}}}function Wo(t){if(F===clearTimeout)return clearTimeout(t);if((F===ie||!F)&&clearTimeout)return F=clearTimeout,clearTimeout(t);try{return F(t)}catch(e){try{return F.call(null,t)}catch(o){return F.call(this,t)}}}var L=[],V=!1,R,Z=-1;function Oo(){!V||!R||(V=!1,R.length?L=R.concat(L):Z=-1,L.length&&He())}function He(){if(!V){var t=ze(Oo);V=!0;for(var e=L.length;e;){for(R=L,L=[];++Z<e;)R&&R[Z].run();Z=-1,e=L.length}R=null,V=!1,Wo(t)}}s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];L.push(new Pe(t,e)),L.length===1&&!V&&ze(He)};function Pe(t,e){this.fun=t,this.array=e}Pe.prototype.run=function(){this.fun.apply(null,this.array)};s.title="browser";s.browser=!0;s.env={};s.argv=[];s.version="";s.versions={};function T(){}s.on=T;s.addListener=T;s.once=T;s.off=T;s.removeListener=T;s.removeAllListeners=T;s.emit=T;s.prependListener=T;s.prependOnceListener=T;s.listeners=function(t){return[]};s.binding=function(t){throw new Error("process.binding is not supported")};s.cwd=function(){return"/"};s.chdir=function(t){throw new Error("process.chdir is not supported")};s.umask=function(){return 0}});var y,v,et,m=he(()=>{y=z(Re()),v=z(We()),et=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var $e={};ke($e,{default:()=>Yo});var K,Go,Yo,Je=he(()=>{"use strict";m();K=z(require("react")),Go=t=>K.createElement("svg",X({viewBox:"0 0 300 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"expanded"},t),K.createElement("rect",{width:300,height:300,rx:150,fill:"black",id:"rewa-token"}),K.createElement("path",{d:"M158.482 149.928L228.714 112.529L216.919 90L152.575 115.854C150.923 116.523 149.077 116.523 147.425 115.854L83.0814 90L71.25 112.602L141.482 150L71.25 187.398L83.0814 210L147.425 183.948C149.077 183.279 150.923 183.279 152.575 183.948L216.919 209.874L228.75 187.272L158.482 149.928Z",fill:"#23F7DD"})),Yo=Go});var Jo={};ke(Jo,{DharitrIIcon:()=>to,getOption:()=>$o});module.exports=xe(Jo);m();var f=z(require("react")),Ze=require("@fortawesome/free-solid-svg-icons"),Ke=require("@fortawesome/react-fontawesome"),Qe=require("@terradharitri/sdk-dapp/constants"),De=require("@terradharitri/sdk-dapp/UI/UsdValue"),je=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),eo=z(require("classnames")),oo=require("react-select");m();m();m();var O=z(require("react"));m();var qo=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(qo));var Oe={highlight:"dapp-core-component__styles-modules__highlight"};var qe=({highlight:t,text:e=""})=>{let o=e.split(" "),n=t.toLowerCase(),r=new RegExp(`(${n})`,"gi"),p=o.map(c=>c.split(r).filter(l=>l));return O.default.createElement("span",{className:Oe.highlight},p.map((c,l)=>{let _=`${c}-${l}`;return O.default.createElement("span",{key:_},c.map((u,a)=>{let d=u.toLowerCase()===n,x=n&&d,h=`${u}-${a}`;return x?O.default.createElement("strong",{key:h},u):O.default.createElement("span",{key:h},u)}))}))};m();var I=require("@terradharitri/sdk-dapp/constants"),Xe=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),Ge=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Ye=({amount:t="0",decimals:e=0,digits:o=I.DIGITS,addCommas:n=!1,showLastNonZeroDecimal:r=!1})=>{if(t==null||!(0,Ge.stringIsInteger)(t))return"0";let p=l=>(0,Xe.formatAmount)({input:t,digits:l,decimals:e,addCommas:n,showLastNonZeroDecimal:r}),c=p(o);return c=parseFloat(c)>0?c:p(I.DIGITS),c=parseFloat(c)>0?c:p(I.DIGITS+2),c=parseFloat(c)>0?c:p(I.DIGITS+4),c=parseFloat(c)>0?c:p(I.DIGITS+6),c=parseFloat(c)>0?c:p(I.DIGITS+10),parseFloat(c)>0?c:p(I.DIGITS+14)};m();var Xo=`.dapp-core-component__tokenSelect-module__label {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Xo));var S={label:"dapp-core-component__tokenSelect-module__label",select:"dapp-core-component__tokenSelect-module__select",disabled:"dapp-core-component__tokenSelect-module__disabled",control:"dapp-core-component__tokenSelect-module__control",indicator:"dapp-core-component__tokenSelect-module__indicator",payload:"dapp-core-component__tokenSelect-module__payload",single:"dapp-core-component__tokenSelect-module__single",container:"dapp-core-component__tokenSelect-module__container",icon:"dapp-core-component__tokenSelect-module__icon",asset:"dapp-core-component__tokenSelect-module__asset",diamond:"dapp-core-component__tokenSelect-module__diamond",wrapper:"dapp-core-component__tokenSelect-module__wrapper",focused:"dapp-core-component__tokenSelect-module__focused",dropdown:"dapp-core-component__tokenSelect-module__dropdown",price:"dapp-core-component__tokenSelect-module__price",expanded:"dapp-core-component__tokenSelect-module__expanded",loading:"dapp-core-component__tokenSelect-module__loading",menu:"dapp-core-component__tokenSelect-module__menu",list:"dapp-core-component__tokenSelect-module__list",option:"dapp-core-component__tokenSelect-module__option",selected:"dapp-core-component__tokenSelect-module__selected",info:"dapp-core-component__tokenSelect-module__info",left:"dapp-core-component__tokenSelect-module__left",right:"dapp-core-component__tokenSelect-module__right",value:"dapp-core-component__tokenSelect-module__value",children:"dapp-core-component__tokenSelect-module__children",ticker:"dapp-core-component__tokenSelect-module__ticker"};var{default:to}=(Je(),xe($e)),$o=({RewaIcon:t,TokenTickerIcon:e,showBalanceUsdValue:o,showTokenPrice:n})=>r=>{var le,_e,ae,ue;let{data:p,isSelected:c,isFocused:l,isDisabled:_,selectProps:u}=r,a=p,{isRewa:d}=(0,je.getIdentifierType)(a.value),x=a.token.assets?a.token.assets.svgUrl:null,h=Ye({amount:a.token.balance,decimals:a.token.decimals||Qe.DECIMALS,addCommas:!0}),C=(_e=(le=a.token)==null?void 0:le.usdPrice)==null?void 0:_e.toString(),q=(ue=(ae=a.token)==null?void 0:ae.valueUSD)==null?void 0:ue.toString();return f.default.createElement("div",{"data-testid":`${r.value}-option`},f.default.createElement(oo.components.Option,fe(X({},r),{className:(0,eo.default)(S.option,{[S.selected]:c||l,[S.disabled]:_})}),f.default.createElement("div",{className:S.image},d?f.default.createElement("span",{className:S.icon},t?f.default.createElement(t,null):f.default.createElement(to,null)):x?f.default.createElement("img",{src:x,className:S.icon}):f.default.createElement("span",{className:S.icon},f.default.createElement(Ke.FontAwesomeIcon,{icon:Ze.faDiamond,className:S.diamond}))),f.default.createElement("div",{className:S.info},f.default.createElement("div",{className:S.left},f.default.createElement("div",{className:S.ticker},f.default.createElement("span",{className:S.value},u.inputValue?f.default.createElement(qe,{text:a.token.ticker,highlight:u.inputValue}):a.token.ticker),e&&f.default.createElement(e,{token:a.token})),n&&f.default.createElement("small",{className:S.price},C)),f.default.createElement("div",{className:S.right},f.default.createElement("span",{className:S.value},h),o&&q&&f.default.createElement(De.UsdValue,{usd:1,decimals:4,amount:q,"data-testid":"token-price-usd-value",className:S.price,addEqualSign:!1}))),f.default.createElement("div",{className:S.children},r.children)))};0&&(module.exports={DharitrIIcon,getOption});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=getOption.js.map
