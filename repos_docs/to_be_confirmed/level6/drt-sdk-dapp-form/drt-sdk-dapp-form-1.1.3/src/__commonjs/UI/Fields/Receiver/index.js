"use strict";var Ct=Object.create;var ve=Object.defineProperty,At=Object.defineProperties,It=Object.getOwnPropertyDescriptor,St=Object.getOwnPropertyDescriptors,kt=Object.getOwnPropertyNames,wo=Object.getOwnPropertySymbols,Lt=Object.getPrototypeOf,Ao=Object.prototype.hasOwnProperty,Nt=Object.prototype.propertyIsEnumerable;var Co=(r,e,o)=>e in r?ve(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,h=(r,e)=>{for(var o in e||(e={}))Ao.call(e,o)&&Co(r,o,e[o]);if(wo)for(var o of wo(e))Nt.call(e,o)&&Co(r,o,e[o]);return r},E=(r,e)=>At(r,St(e));var Io=(r,e)=>()=>(r&&(e=r(r=0)),e);var Le=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),So=(r,e)=>{for(var o in e)ve(r,o,{get:e[o],enumerable:!0})},ko=(r,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of kt(e))!Ao.call(r,i)&&i!==o&&ve(r,i,{get:()=>e[i],enumerable:!(n=It(e,i))||n.enumerable});return r};var f=(r,e,o)=>(o=r!=null?Ct(Lt(r)):{},ko(e||!r||!r.__esModule?ve(o,"default",{value:r,enumerable:!0}):o,r)),Lo=r=>ko(ve({},"__esModule",{value:!0}),r);var Fo=Le(Ne=>{"use strict";t();Ne.byteLength=Ft;Ne.toByteArray=Bt;Ne.fromByteArray=Vt;var G=[],P=[],Pt=typeof Uint8Array!="undefined"?Uint8Array:Array,He="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(j=0,No=He.length;j<No;++j)G[j]=He[j],P[He.charCodeAt(j)]=j;var j,No;P["-".charCodeAt(0)]=62;P["_".charCodeAt(0)]=63;function Po(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=r.indexOf("=");o===-1&&(o=e);var n=o===e?0:4-o%4;return[o,n]}function Ft(r){var e=Po(r),o=e[0],n=e[1];return(o+n)*3/4-n}function Gt(r,e,o){return(e+o)*3/4-o}function Bt(r){var e,o=Po(r),n=o[0],i=o[1],s=new Pt(Gt(r,n,i)),l=0,d=i>0?n-4:n,u;for(u=0;u<d;u+=4)e=P[r.charCodeAt(u)]<<18|P[r.charCodeAt(u+1)]<<12|P[r.charCodeAt(u+2)]<<6|P[r.charCodeAt(u+3)],s[l++]=e>>16&255,s[l++]=e>>8&255,s[l++]=e&255;return i===2&&(e=P[r.charCodeAt(u)]<<2|P[r.charCodeAt(u+1)]>>4,s[l++]=e&255),i===1&&(e=P[r.charCodeAt(u)]<<10|P[r.charCodeAt(u+1)]<<4|P[r.charCodeAt(u+2)]>>2,s[l++]=e>>8&255,s[l++]=e&255),s}function Ut(r){return G[r>>18&63]+G[r>>12&63]+G[r>>6&63]+G[r&63]}function Dt(r,e,o){for(var n,i=[],s=e;s<o;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(Ut(n));return i.join("")}function Vt(r){for(var e,o=r.length,n=o%3,i=[],s=16383,l=0,d=o-n;l<d;l+=s)i.push(Dt(r,l,l+s>d?d:l+s));return n===1?(e=r[o-1],i.push(G[e>>2]+G[e<<4&63]+"==")):n===2&&(e=(r[o-2]<<8)+r[o-1],i.push(G[e>>10]+G[e>>4&63]+G[e<<2&63]+"=")),i.join("")}});var Go=Le(Xe=>{t();Xe.read=function(r,e,o,n,i){var s,l,d=i*8-n-1,u=(1<<d)-1,_=u>>1,y=-7,v=o?i-1:0,T=o?-1:1,x=r[e+v];for(v+=T,s=x&(1<<-y)-1,x>>=-y,y+=d;y>0;s=s*256+r[e+v],v+=T,y-=8);for(l=s&(1<<-y)-1,s>>=-y,y+=n;y>0;l=l*256+r[e+v],v+=T,y-=8);if(s===0)s=1-_;else{if(s===u)return l?NaN:(x?-1:1)*(1/0);l=l+Math.pow(2,n),s=s-_}return(x?-1:1)*l*Math.pow(2,s-n)};Xe.write=function(r,e,o,n,i,s){var l,d,u,_=s*8-i-1,y=(1<<_)-1,v=y>>1,T=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,x=n?0:s-1,k=n?1:-1,z=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(d=isNaN(e)?1:0,l=y):(l=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-l))<1&&(l--,u*=2),l+v>=1?e+=T/u:e+=T*Math.pow(2,1-v),e*u>=2&&(l++,u/=2),l+v>=y?(d=0,l=y):l+v>=1?(d=(e*u-1)*Math.pow(2,i),l=l+v):(d=e*Math.pow(2,v-1)*Math.pow(2,i),l=0));i>=8;r[o+x]=d&255,x+=k,d/=256,i-=8);for(l=l<<i|d,_+=i;_>0;r[o+x]=l&255,x+=k,l/=256,_-=8);r[o+x-k]|=z*128}});var Zo=Le(se=>{"use strict";t();var je=Fo(),ie=Go(),Bo=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;se.Buffer=m;se.SlowBuffer=$t;se.INSPECT_MAX_BYTES=50;var Pe=2147483647;se.kMaxLength=Pe;m.TYPED_ARRAY_SUPPORT=Rt();!m.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Rt(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch(o){return!1}}Object.defineProperty(m.prototype,"parent",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.buffer}});Object.defineProperty(m.prototype,"offset",{enumerable:!0,get:function(){if(!!m.isBuffer(this))return this.byteOffset}});function M(r){if(r>Pe)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,m.prototype),e}function m(r,e,o){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return eo(r)}return Vo(r,e,o)}m.poolSize=8192;function Vo(r,e,o){if(typeof r=="string")return Ot(r,e);if(ArrayBuffer.isView(r))return qt(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(B(r,ArrayBuffer)||r&&B(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(B(r,SharedArrayBuffer)||r&&B(r.buffer,SharedArrayBuffer)))return Qe(r,e,o);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return m.from(n,e,o);var i=Wt(r);if(i)return i;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return m.from(r[Symbol.toPrimitive]("string"),e,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}m.from=function(r,e,o){return Vo(r,e,o)};Object.setPrototypeOf(m.prototype,Uint8Array.prototype);Object.setPrototypeOf(m,Uint8Array);function Ro(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Mt(r,e,o){return Ro(r),r<=0?M(r):e!==void 0?typeof o=="string"?M(r).fill(e,o):M(r).fill(e):M(r)}m.alloc=function(r,e,o){return Mt(r,e,o)};function eo(r){return Ro(r),M(r<0?0:oo(r)|0)}m.allocUnsafe=function(r){return eo(r)};m.allocUnsafeSlow=function(r){return eo(r)};function Ot(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!m.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var o=Mo(r,e)|0,n=M(o),i=n.write(r,e);return i!==o&&(n=n.slice(0,i)),n}function Ye(r){for(var e=r.length<0?0:oo(r.length)|0,o=M(e),n=0;n<e;n+=1)o[n]=r[n]&255;return o}function qt(r){if(B(r,Uint8Array)){var e=new Uint8Array(r);return Qe(e.buffer,e.byteOffset,e.byteLength)}return Ye(r)}function Qe(r,e,o){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(o||0))throw new RangeError('"length" is outside of buffer bounds');var n;return e===void 0&&o===void 0?n=new Uint8Array(r):o===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,o),Object.setPrototypeOf(n,m.prototype),n}function Wt(r){if(m.isBuffer(r)){var e=oo(r.length)|0,o=M(e);return o.length===0||r.copy(o,0,0,e),o}if(r.length!==void 0)return typeof r.length!="number"||ro(r.length)?M(0):Ye(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Ye(r.data)}function oo(r){if(r>=Pe)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Pe.toString(16)+" bytes");return r|0}function $t(r){return+r!=r&&(r=0),m.alloc(+r)}m.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==m.prototype};m.compare=function(e,o){if(B(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),B(o,Uint8Array)&&(o=m.from(o,o.offset,o.byteLength)),!m.isBuffer(e)||!m.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===o)return 0;for(var n=e.length,i=o.length,s=0,l=Math.min(n,i);s<l;++s)if(e[s]!==o[s]){n=e[s],i=o[s];break}return n<i?-1:i<n?1:0};m.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};m.concat=function(e,o){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return m.alloc(0);var n;if(o===void 0)for(o=0,n=0;n<e.length;++n)o+=e[n].length;var i=m.allocUnsafe(o),s=0;for(n=0;n<e.length;++n){var l=e[n];if(B(l,Uint8Array))s+l.length>i.length?m.from(l).copy(i,s):Uint8Array.prototype.set.call(i,l,s);else if(m.isBuffer(l))l.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=l.length}return i};function Mo(r,e){if(m.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||B(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var o=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&o===0)return 0;for(var i=!1;;)switch(e){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return Je(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return zo(r).length;default:if(i)return n?-1:Je(r).length;e=(""+e).toLowerCase(),i=!0}}m.byteLength=Mo;function Kt(r,e,o){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,e>>>=0,o<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return on(this,e,o);case"utf8":case"utf-8":return qo(this,e,o);case"ascii":return Jt(this,e,o);case"latin1":case"binary":return en(this,e,o);case"base64":return Yt(this,e,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rn(this,e,o);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}m.prototype._isBuffer=!0;function Y(r,e,o){var n=r[e];r[e]=r[o],r[o]=n}m.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<e;o+=2)Y(this,o,o+1);return this};m.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<e;o+=4)Y(this,o,o+3),Y(this,o+1,o+2);return this};m.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<e;o+=8)Y(this,o,o+7),Y(this,o+1,o+6),Y(this,o+2,o+5),Y(this,o+3,o+4);return this};m.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?qo(this,0,e):Kt.apply(this,arguments)};m.prototype.toLocaleString=m.prototype.toString;m.prototype.equals=function(e){if(!m.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:m.compare(this,e)===0};m.prototype.inspect=function(){var e="",o=se.INSPECT_MAX_BYTES;return e=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(e+=" ... "),"<Buffer "+e+">"};Bo&&(m.prototype[Bo]=m.prototype.inspect);m.prototype.compare=function(e,o,n,i,s){if(B(e,Uint8Array)&&(e=m.from(e,e.offset,e.byteLength)),!m.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(o===void 0&&(o=0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),o<0||n>e.length||i<0||s>this.length)throw new RangeError("out of range index");if(i>=s&&o>=n)return 0;if(i>=s)return-1;if(o>=n)return 1;if(o>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;for(var l=s-i,d=n-o,u=Math.min(l,d),_=this.slice(i,s),y=e.slice(o,n),v=0;v<u;++v)if(_[v]!==y[v]){l=_[v],d=y[v];break}return l<d?-1:d<l?1:0};function Oo(r,e,o,n,i){if(r.length===0)return-1;if(typeof o=="string"?(n=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,ro(o)&&(o=i?0:r.length-1),o<0&&(o=r.length+o),o>=r.length){if(i)return-1;o=r.length-1}else if(o<0)if(i)o=0;else return-1;if(typeof e=="string"&&(e=m.from(e,n)),m.isBuffer(e))return e.length===0?-1:Uo(r,e,o,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,o):Uint8Array.prototype.lastIndexOf.call(r,e,o):Uo(r,[e],o,n,i);throw new TypeError("val must be string, number or Buffer")}function Uo(r,e,o,n,i){var s=1,l=r.length,d=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,l/=2,d/=2,o/=2}function u(x,k){return s===1?x[k]:x.readUInt16BE(k*s)}var _;if(i){var y=-1;for(_=o;_<l;_++)if(u(r,_)===u(e,y===-1?0:_-y)){if(y===-1&&(y=_),_-y+1===d)return y*s}else y!==-1&&(_-=_-y),y=-1}else for(o+d>l&&(o=l-d),_=o;_>=0;_--){for(var v=!0,T=0;T<d;T++)if(u(r,_+T)!==u(e,T)){v=!1;break}if(v)return _}return-1}m.prototype.includes=function(e,o,n){return this.indexOf(e,o,n)!==-1};m.prototype.indexOf=function(e,o,n){return Oo(this,e,o,n,!0)};m.prototype.lastIndexOf=function(e,o,n){return Oo(this,e,o,n,!1)};function zt(r,e,o,n){o=Number(o)||0;var i=r.length-o;n?(n=Number(n),n>i&&(n=i)):n=i;var s=e.length;n>s/2&&(n=s/2);for(var l=0;l<n;++l){var d=parseInt(e.substr(l*2,2),16);if(ro(d))return l;r[o+l]=d}return l}function Zt(r,e,o,n){return Fe(Je(e,r.length-o),r,o,n)}function Ht(r,e,o,n){return Fe(sn(e),r,o,n)}function Xt(r,e,o,n){return Fe(zo(e),r,o,n)}function jt(r,e,o,n){return Fe(cn(e,r.length-o),r,o,n)}m.prototype.write=function(e,o,n,i){if(o===void 0)i="utf8",n=this.length,o=0;else if(n===void 0&&typeof o=="string")i=o,n=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var s=this.length-o;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var l=!1;;)switch(i){case"hex":return zt(this,e,o,n);case"utf8":case"utf-8":return Zt(this,e,o,n);case"ascii":case"latin1":case"binary":return Ht(this,e,o,n);case"base64":return Xt(this,e,o,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return jt(this,e,o,n);default:if(l)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),l=!0}};m.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Yt(r,e,o){return e===0&&o===r.length?je.fromByteArray(r):je.fromByteArray(r.slice(e,o))}function qo(r,e,o){o=Math.min(r.length,o);for(var n=[],i=e;i<o;){var s=r[i],l=null,d=s>239?4:s>223?3:s>191?2:1;if(i+d<=o){var u,_,y,v;switch(d){case 1:s<128&&(l=s);break;case 2:u=r[i+1],(u&192)===128&&(v=(s&31)<<6|u&63,v>127&&(l=v));break;case 3:u=r[i+1],_=r[i+2],(u&192)===128&&(_&192)===128&&(v=(s&15)<<12|(u&63)<<6|_&63,v>2047&&(v<55296||v>57343)&&(l=v));break;case 4:u=r[i+1],_=r[i+2],y=r[i+3],(u&192)===128&&(_&192)===128&&(y&192)===128&&(v=(s&15)<<18|(u&63)<<12|(_&63)<<6|y&63,v>65535&&v<1114112&&(l=v))}}l===null?(l=65533,d=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|l&1023),n.push(l),i+=d}return Qt(n)}var Do=4096;function Qt(r){var e=r.length;if(e<=Do)return String.fromCharCode.apply(String,r);for(var o="",n=0;n<e;)o+=String.fromCharCode.apply(String,r.slice(n,n+=Do));return o}function Jt(r,e,o){var n="";o=Math.min(r.length,o);for(var i=e;i<o;++i)n+=String.fromCharCode(r[i]&127);return n}function en(r,e,o){var n="";o=Math.min(r.length,o);for(var i=e;i<o;++i)n+=String.fromCharCode(r[i]);return n}function on(r,e,o){var n=r.length;(!e||e<0)&&(e=0),(!o||o<0||o>n)&&(o=n);for(var i="",s=e;s<o;++s)i+=an[r[s]];return i}function rn(r,e,o){for(var n=r.slice(e,o),i="",s=0;s<n.length-1;s+=2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}m.prototype.slice=function(e,o){var n=this.length;e=~~e,o=o===void 0?n:~~o,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),o<0?(o+=n,o<0&&(o=0)):o>n&&(o=n),o<e&&(o=e);var i=this.subarray(e,o);return Object.setPrototypeOf(i,m.prototype),i};function A(r,e,o){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>o)throw new RangeError("Trying to access beyond buffer length")}m.prototype.readUintLE=m.prototype.readUIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||A(e,o,this.length);for(var i=this[e],s=1,l=0;++l<o&&(s*=256);)i+=this[e+l]*s;return i};m.prototype.readUintBE=m.prototype.readUIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||A(e,o,this.length);for(var i=this[e+--o],s=1;o>0&&(s*=256);)i+=this[e+--o]*s;return i};m.prototype.readUint8=m.prototype.readUInt8=function(e,o){return e=e>>>0,o||A(e,1,this.length),this[e]};m.prototype.readUint16LE=m.prototype.readUInt16LE=function(e,o){return e=e>>>0,o||A(e,2,this.length),this[e]|this[e+1]<<8};m.prototype.readUint16BE=m.prototype.readUInt16BE=function(e,o){return e=e>>>0,o||A(e,2,this.length),this[e]<<8|this[e+1]};m.prototype.readUint32LE=m.prototype.readUInt32LE=function(e,o){return e=e>>>0,o||A(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};m.prototype.readUint32BE=m.prototype.readUInt32BE=function(e,o){return e=e>>>0,o||A(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};m.prototype.readIntLE=function(e,o,n){e=e>>>0,o=o>>>0,n||A(e,o,this.length);for(var i=this[e],s=1,l=0;++l<o&&(s*=256);)i+=this[e+l]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*o)),i};m.prototype.readIntBE=function(e,o,n){e=e>>>0,o=o>>>0,n||A(e,o,this.length);for(var i=o,s=1,l=this[e+--i];i>0&&(s*=256);)l+=this[e+--i]*s;return s*=128,l>=s&&(l-=Math.pow(2,8*o)),l};m.prototype.readInt8=function(e,o){return e=e>>>0,o||A(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};m.prototype.readInt16LE=function(e,o){e=e>>>0,o||A(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};m.prototype.readInt16BE=function(e,o){e=e>>>0,o||A(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};m.prototype.readInt32LE=function(e,o){return e=e>>>0,o||A(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};m.prototype.readInt32BE=function(e,o){return e=e>>>0,o||A(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};m.prototype.readFloatLE=function(e,o){return e=e>>>0,o||A(e,4,this.length),ie.read(this,e,!0,23,4)};m.prototype.readFloatBE=function(e,o){return e=e>>>0,o||A(e,4,this.length),ie.read(this,e,!1,23,4)};m.prototype.readDoubleLE=function(e,o){return e=e>>>0,o||A(e,8,this.length),ie.read(this,e,!0,52,8)};m.prototype.readDoubleBE=function(e,o){return e=e>>>0,o||A(e,8,this.length),ie.read(this,e,!1,52,8)};function L(r,e,o,n,i,s){if(!m.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(o+n>r.length)throw new RangeError("Index out of range")}m.prototype.writeUintLE=m.prototype.writeUIntLE=function(e,o,n,i){if(e=+e,o=o>>>0,n=n>>>0,!i){var s=Math.pow(2,8*n)-1;L(this,e,o,n,s,0)}var l=1,d=0;for(this[o]=e&255;++d<n&&(l*=256);)this[o+d]=e/l&255;return o+n};m.prototype.writeUintBE=m.prototype.writeUIntBE=function(e,o,n,i){if(e=+e,o=o>>>0,n=n>>>0,!i){var s=Math.pow(2,8*n)-1;L(this,e,o,n,s,0)}var l=n-1,d=1;for(this[o+l]=e&255;--l>=0&&(d*=256);)this[o+l]=e/d&255;return o+n};m.prototype.writeUint8=m.prototype.writeUInt8=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,1,255,0),this[o]=e&255,o+1};m.prototype.writeUint16LE=m.prototype.writeUInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,2,65535,0),this[o]=e&255,this[o+1]=e>>>8,o+2};m.prototype.writeUint16BE=m.prototype.writeUInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,2,65535,0),this[o]=e>>>8,this[o+1]=e&255,o+2};m.prototype.writeUint32LE=m.prototype.writeUInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,4,4294967295,0),this[o+3]=e>>>24,this[o+2]=e>>>16,this[o+1]=e>>>8,this[o]=e&255,o+4};m.prototype.writeUint32BE=m.prototype.writeUInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,4,4294967295,0),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};m.prototype.writeIntLE=function(e,o,n,i){if(e=+e,o=o>>>0,!i){var s=Math.pow(2,8*n-1);L(this,e,o,n,s-1,-s)}var l=0,d=1,u=0;for(this[o]=e&255;++l<n&&(d*=256);)e<0&&u===0&&this[o+l-1]!==0&&(u=1),this[o+l]=(e/d>>0)-u&255;return o+n};m.prototype.writeIntBE=function(e,o,n,i){if(e=+e,o=o>>>0,!i){var s=Math.pow(2,8*n-1);L(this,e,o,n,s-1,-s)}var l=n-1,d=1,u=0;for(this[o+l]=e&255;--l>=0&&(d*=256);)e<0&&u===0&&this[o+l+1]!==0&&(u=1),this[o+l]=(e/d>>0)-u&255;return o+n};m.prototype.writeInt8=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,1,127,-128),e<0&&(e=255+e+1),this[o]=e&255,o+1};m.prototype.writeInt16LE=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,2,32767,-32768),this[o]=e&255,this[o+1]=e>>>8,o+2};m.prototype.writeInt16BE=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,2,32767,-32768),this[o]=e>>>8,this[o+1]=e&255,o+2};m.prototype.writeInt32LE=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,4,2147483647,-2147483648),this[o]=e&255,this[o+1]=e>>>8,this[o+2]=e>>>16,this[o+3]=e>>>24,o+4};m.prototype.writeInt32BE=function(e,o,n){return e=+e,o=o>>>0,n||L(this,e,o,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[o]=e>>>24,this[o+1]=e>>>16,this[o+2]=e>>>8,this[o+3]=e&255,o+4};function Wo(r,e,o,n,i,s){if(o+n>r.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function $o(r,e,o,n,i){return e=+e,o=o>>>0,i||Wo(r,e,o,4,34028234663852886e22,-34028234663852886e22),ie.write(r,e,o,n,23,4),o+4}m.prototype.writeFloatLE=function(e,o,n){return $o(this,e,o,!0,n)};m.prototype.writeFloatBE=function(e,o,n){return $o(this,e,o,!1,n)};function Ko(r,e,o,n,i){return e=+e,o=o>>>0,i||Wo(r,e,o,8,17976931348623157e292,-17976931348623157e292),ie.write(r,e,o,n,52,8),o+8}m.prototype.writeDoubleLE=function(e,o,n){return Ko(this,e,o,!0,n)};m.prototype.writeDoubleBE=function(e,o,n){return Ko(this,e,o,!1,n)};m.prototype.copy=function(e,o,n,i){if(!m.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=this.length),o>=e.length&&(o=e.length),o||(o=0),i>0&&i<n&&(i=n),i===n||e.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-o<i-n&&(i=e.length-o+n);var s=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),o),s};m.prototype.fill=function(e,o,n,i){if(typeof e=="string"){if(typeof o=="string"?(i=o,o=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!m.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){var s=e.charCodeAt(0);(i==="utf8"&&s<128||i==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(o<0||this.length<o||this.length<n)throw new RangeError("Out of range index");if(n<=o)return this;o=o>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var l;if(typeof e=="number")for(l=o;l<n;++l)this[l]=e;else{var d=m.isBuffer(e)?e:m.from(e,i),u=d.length;if(u===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(l=0;l<n-o;++l)this[l+o]=d[l%u]}return this};var tn=/[^+/0-9A-Za-z-_]/g;function nn(r){if(r=r.split("=")[0],r=r.trim().replace(tn,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Je(r,e){e=e||1/0;for(var o,n=r.length,i=null,s=[],l=0;l<n;++l){if(o=r.charCodeAt(l),o>55295&&o<57344){if(!i){if(o>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(l+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=o;continue}if(o<56320){(e-=3)>-1&&s.push(239,191,189),i=o;continue}o=(i-55296<<10|o-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,o<128){if((e-=1)<0)break;s.push(o)}else if(o<2048){if((e-=2)<0)break;s.push(o>>6|192,o&63|128)}else if(o<65536){if((e-=3)<0)break;s.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((e-=4)<0)break;s.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return s}function sn(r){for(var e=[],o=0;o<r.length;++o)e.push(r.charCodeAt(o)&255);return e}function cn(r,e){for(var o,n,i,s=[],l=0;l<r.length&&!((e-=2)<0);++l)o=r.charCodeAt(l),n=o>>8,i=o%256,s.push(i),s.push(n);return s}function zo(r){return je.toByteArray(nn(r))}function Fe(r,e,o,n){for(var i=0;i<n&&!(i+o>=e.length||i>=r.length);++i)e[i+o]=r[i];return i}function B(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function ro(r){return r!==r}var an=function(){for(var r="0123456789abcdef",e=new Array(256),o=0;o<16;++o)for(var n=o*16,i=0;i<16;++i)e[n+i]=r[o]+r[i];return e}()});var Qo=Le((Rs,Yo)=>{t();var C=Yo.exports={},U,D;function to(){throw new Error("setTimeout has not been defined")}function no(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?U=setTimeout:U=to}catch(r){U=to}try{typeof clearTimeout=="function"?D=clearTimeout:D=no}catch(r){D=no}})();function Ho(r){if(U===setTimeout)return setTimeout(r,0);if((U===to||!U)&&setTimeout)return U=setTimeout,setTimeout(r,0);try{return U(r,0)}catch(e){try{return U.call(null,r,0)}catch(o){return U.call(this,r,0)}}}function pn(r){if(D===clearTimeout)return clearTimeout(r);if((D===no||!D)&&clearTimeout)return D=clearTimeout,clearTimeout(r);try{return D(r)}catch(e){try{return D.call(null,r)}catch(o){return D.call(this,r)}}}var O=[],ce=!1,Q,Ge=-1;function ln(){!ce||!Q||(ce=!1,Q.length?O=Q.concat(O):Ge=-1,O.length&&Xo())}function Xo(){if(!ce){var r=Ho(ln);ce=!0;for(var e=O.length;e;){for(Q=O,O=[];++Ge<e;)Q&&Q[Ge].run();Ge=-1,e=O.length}Q=null,ce=!1,pn(r)}}C.nextTick=function(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];O.push(new jo(r,e)),O.length===1&&!ce&&Ho(Xo)};function jo(r,e){this.fun=r,this.array=e}jo.prototype.run=function(){this.fun.apply(null,this.array)};C.title="browser";C.browser=!0;C.env={};C.argv=[];C.version="";C.versions={};function q(){}C.on=q;C.addListener=q;C.once=q;C.off=q;C.removeListener=q;C.removeAllListeners=q;C.emit=q;C.prependListener=q;C.prependOnceListener=q;C.listeners=function(r){return[]};C.binding=function(r){throw new Error("process.binding is not supported")};C.cwd=function(){return"/"};C.chdir=function(r){throw new Error("process.chdir is not supported")};C.umask=function(){return 0}});var c,a,Ms,t=Io(()=>{c=f(Zo()),a=f(Qo()),Ms=function(r){function e(){var n=this||self;return delete r.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var o=__magic__;return o}(Object)});var $r={};So($r,{default:()=>Ns});var We,Ls,Ns,Kr=Io(()=>{"use strict";t();We=f(require("react")),Ls=r=>We.createElement("svg",h({width:200,height:200,viewBox:"5 5 10.55 21",fill:"#23f7dd",xmlns:"http://www.w3.org/2000/svg",className:"herotag-logo"},r),We.createElement("g",null,We.createElement("path",{d:"M11.3288 15.0673L20.4563 10.168L18.9218 7.20471L10.5638 10.6011C10.3486 10.6887 10.11 10.6887 9.89482 10.6011L1.53452 7.20708L0 10.168L9.12756 15.0673L0 19.9666L1.53452 22.9299L9.89248 19.5335C10.1077 19.4459 10.3463 19.4459 10.5615 19.5335L18.9195 22.9299L20.454 19.9666L11.3264 15.0673H11.3288Z"}))),Ns=Ls});var Gs={};So(Gs,{Receiver:()=>Fs});module.exports=Lo(Gs);t();t();var b=f(require("react")),Ze=require("@fortawesome/free-solid-svg-icons"),go=require("@fortawesome/react-fontawesome"),ze=f(require("classnames")),dt=require("formik"),ut=f(require("react-select"));t();var mn=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(mn));var xe={error:"dapp-core-component__globals-module__error",scam:"dapp-core-component__globals-module__scam",label:"dapp-core-component__globals-module__label",value:"dapp-core-component__globals-module__value",input:"dapp-core-component__globals-module__input",textarea:"dapp-core-component__globals-module__textarea",disabled:"dapp-core-component__globals-module__disabled",invalid:"dapp-core-component__globals-module__invalid","button-send":"dapp-core-component__globals-module__button-send",buttonSend:"dapp-core-component__globals-module__button-send","button-text":"dapp-core-component__globals-module__button-text",buttonText:"dapp-core-component__globals-module__button-text",btn:"dapp-core-component__globals-module__btn",btnPrimary:"dapp-core-component__globals-module__btnPrimary",btnWarning:"dapp-core-component__globals-module__btnWarning",btnLink:"dapp-core-component__globals-module__btnLink"};t();t();t();var Te=f(require("react")),Ji=require("formik");t();t();var ee=f(require("react")),Wi=require("formik");t();t();var de=f(require("react")),Ai=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Ii=require("formik");t();t();t();var ae=require("@terradharitri/sdk-dapp/types/tokens.types");t();t();t();t();t();var ar=require("@terradharitri/sdk-dapp/constants/index"),Wn=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),$n=f(require("bignumber.js"));t();t();t();var dn=require("bech32");t();t();t();var io=(r,e)=>typeof e=="boolean"?e:Array.isArray(e)&&e.includes(r);t();t();t();var _n=require("@terradharitri/sdk-dapp/constants"),fn=require("@terradharitri/sdk-dapp/utils/account/getAccount");t();t();var yn=require("@terradharitri/sdk-dapp/utils/transactions/transactionInfoHelpers/getScamFlag");t();var gn=require("@terradharitri/sdk-dapp/utils/buildUrlParams");t();var vn=f(require("anchorme"));t();t();var Jo=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),pe=require("@terradharitri/sdk-dapp/utils/operations/formatAmount"),er=require("@terradharitri/sdk-dapp/utils/operations/getUsdValue"),W=require("@terradharitri/sdk-dapp/utils/operations/parseAmount");t();t();var or=require("@terradharitri/sdk-dapp/constants/index");t();var hn=require("@terradharitri/sdk-dapp/constants/index");t();t();t();var rr=require("@terradharitri/sdk-dapp/constants/index"),bn=f(require("bignumber.js"));t();var Tn=require("@terradharitri/sdk-dapp/constants/index");t();var En=require("@terradharitri/sdk-dapp/constants/index");t();t();var he=require("@terradharitri/sdk-core"),wn=require("@terradharitri/sdk-dapp/constants/index"),Cn=f(require("bignumber.js"));t();t();var In=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger");t();var Sn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType");t();var Ln=f(require("bignumber.js"));t();var Un=require("@terradharitri/sdk-dapp/constants/index"),Dn=require("@terradharitri/sdk-dapp/utils/smartContracts"),Vn=require("@terradharitri/sdk-dapp/utils/validation/getIdentifierType"),Rn=f(require("bignumber.js"));t();var Bn=f(require("bignumber.js"));t();t();var Gn=f(require("axios"));t();t();t();var Pn=require("@terradharitri/sdk-dapp/apiCalls/configuration/getServerConfiguration");t();var Nn=require("@terradharitri/sdk-dapp/constants/index");t();t();t();var me=require("@terradharitri/sdk-dapp/constants/index"),cr=f(require("bignumber.js"));var nr,ir,sr,ao=(0,pe.formatAmount)({input:String((nr=me.GAS_PRICE)!=null?nr:1e9),decimals:(ir=me.DECIMALS)!=null?ir:18,showLastNonZeroDecimal:!0,digits:(sr=me.DIGITS)!=null?sr:4}),Mn=new cr.default(ao).times(10).toString(10);t();var De=require("@terradharitri/sdk-dapp/constants/index"),On=f(require("bignumber.js"));t();var qn=f(require("bignumber.js"));t();t();var mr=require("yup");t();var Ve=require("@terradharitri/sdk-dapp/constants/ledger.constants"),pr=f(require("@terradharitri/sdk-dapp/utils/operations/ledger/getLedgerVersionOptions")),Re=require("yup"),Kn=(0,Re.string)().test("ledgerDataActive","Data option is disabled in the Ledger DharitrI app",function(e){let{ledger:o}=this.parent;return!(o&&e&&e.length&&!o.ledgerDataActive)}),zn=(0,Re.string)().test({name:"hashSign",test:function(e){let{ledger:o,isGuarded:n}=this.parent;if(o){let{ledgerWithHashSign:i,ledgerWithGuardians:s}=(0,pr.default)(o.version);if(e&&e.length>300&&!i)return this.createError({message:`Data too long. You need at least DharitrI app version ${Ve.LEDGER_HASH_SIGN_MINIMUM_VERSION}. Update DharitrI app to continue`,path:"data"});if(n&&!s)return this.createError({message:`You need at least DharitrI app version ${Ve.LEDGER_WITH_GUARDIANS_MINIMUM_VERSION} to use Guardians`,path:"data"})}return!0}}),Zn=[Kn,zn],Cp=Zn.reduce((r,e)=>r.concat(e),(0,Re.string)());t();var Hn=require("@terradharitri/sdk-dapp/constants/index"),Xn=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),jn=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),Yn=require("yup");t();var oi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ri=f(require("bignumber.js")),ti=require("yup");t();var Qn=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),Jn=f(require("bignumber.js")),ei=require("yup");t();var ni=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),ii=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),si=f(require("bignumber.js")),ci=require("yup");t();var ai=f(require("bignumber.js")),pi=require("yup");t();var li=require("@terradharitri/sdk-dapp/constants/index"),mi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),di=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ui=f(require("bignumber.js")),_i=require("yup");t();var fi=require("@terradharitri/sdk-dapp/utils/validation/maxDecimals"),yi=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),gi=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),vi=f(require("bignumber.js")),xi=require("yup");t();var hi=f(require("bignumber.js")),Ti=require("yup");t();var bi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ei=require("yup");t();var wi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),Ci=require("yup");t();t();var jl=(0,de.createContext)({});t();t();t();var _r=require("react"),Vi=require("@terradharitri/sdk-dapp/apiCalls/transactions/getTransactions"),Ri=f(require("lodash/uniqBy"));t();t();t();var Si=f(require("axios"));t();t();var ki=f(require("axios"));t();t();var dr=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Li=require("@terradharitri/sdk-dapp/apiCalls/tokens/getPersistedToken"),Ni=f(require("axios")),Pi=f(require("lodash/uniqBy"));t();var Fi=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Gi=f(require("axios"));t();var ur=require("@terradharitri/sdk-dapp/apiCalls/endpoints"),Bi=f(require("axios"));t();var Me=f(require("react")),Pm=(0,Me.createContext)({});t();t();var Ui=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Di=require("@terradharitri/sdk-dapp/utils");t();var qi=require("react");t();var Mi=require("react"),Oi=require("@terradharitri/sdk-dapp/utils/account/addressIsValid");var $i=(0,ee.createContext)({});function Oe(){return(0,ee.useContext)($i)}t();var fr=require("react");t();t();var lo=({knownAddresses:r,inputValue:e,key:o})=>!r||!e?!1:r.some(i=>{var s;return Boolean((s=i[o])==null?void 0:s.startsWith(e))});t();t();t();var ji=require("react"),Yi=require("@terradharitri/sdk-dapp/utils");t();var Hi=require("react"),Xi=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain");t();t();var Ki=require("@terradharitri/sdk-dapp/utils/account/addressIsValid"),zi=f(require("axios"));t();var Zi=f(require("axios"));var es=(0,Te.createContext)({});function be(){return(0,Te.useContext)(es)}t();var Ee=f(require("react"));t();t();var re=f(require("react")),bs=require("@terradharitri/sdk-dapp/constants/index"),Es=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),ws=f(require("bignumber.js")),Cs=require("formik");t();t();var K=f(require("react")),ns=require("formik"),is=f(require("lodash/uniqBy"));t();t();var _e=f(require("react"));var Hd=(0,_e.createContext)({});t();t();var yr=require("react"),os=require("@terradharitri/sdk-dapp/constants/index");var rs=require("@terradharitri/sdk-dapp/types/enums.types");t();var wu=(0,K.createContext)({});t();t();var Tr=require("@terradharitri/sdk-dapp/constants/index"),Ts=require("formik");t();t();var oe=f(require("react")),xr=require("@terradharitri/sdk-dapp/constants/index"),ys=require("@terradharitri/sdk-dapp/utils/operations/calculateFeeLimit"),gs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),vs=require("@terradharitri/sdk-dapp/utils/validation/stringIsInteger"),xs=f(require("bignumber.js")),hs=require("formik");t();t();t();t();var ss=f(require("bignumber.js"));t();var cs=require("@terradharitri/sdk-dapp/utils/validation/stringIsFloat"),as=f(require("bignumber.js"));t();t();var vr=require("react"),ps=require("@terradharitri/sdk-dapp/constants/index"),ls=require("@terradharitri/sdk-dapp/utils/smartContracts"),ms=f(require("bignumber.js")),ds=require("formik");t();t();var us=require("@terradharitri/sdk-dapp/constants/index"),_s=f(require("bignumber.js"));var S_=(0,oe.createContext)({});var nf=(0,re.createContext)({});t();t();var fe=f(require("react")),As=require("formik");var hf=(0,fe.createContext)({});var Is=(0,Ee.createContext)({});function H(){return(0,Ee.useContext)(Is)}t();t();var br=f(require("react")),Er=require("react-select");t();var Ss=`:root {
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
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ss));var g={receiver:"dapp-core-component__styles-module__receiver",autocomplete:"dapp-core-component__styles-module__autocomplete",menu:"dapp-core-component__styles-module__menu",item:"dapp-core-component__styles-module__item",highlighted:"dapp-core-component__styles-module__highlighted",trim:"dapp-core-component__styles-module__trim","receiver-select-container":"dapp-core-component__styles-module__receiver-select-container",receiverSelectContainer:"dapp-core-component__styles-module__receiver-select-container",invalid:"dapp-core-component__styles-module__invalid",focused:"dapp-core-component__styles-module__focused",expanded:"dapp-core-component__styles-module__expanded",opened:"dapp-core-component__styles-module__opened","receiver-select-control":"dapp-core-component__styles-module__receiver-select-control",receiverSelectControl:"dapp-core-component__styles-module__receiver-select-control","receiver-select-value":"dapp-core-component__styles-module__receiver-select-value",receiverSelectValue:"dapp-core-component__styles-module__receiver-select-value","receiver-select-single":"dapp-core-component__styles-module__receiver-select-single",receiverSelectSingle:"dapp-core-component__styles-module__receiver-select-single",disabled:"dapp-core-component__styles-module__disabled","receiver-select-single-username":"dapp-core-component__styles-module__receiver-select-single-username",receiverSelectSingleUsername:"dapp-core-component__styles-module__receiver-select-single-username","receiver-select-single-username-icon":"dapp-core-component__styles-module__receiver-select-single-username-icon",receiverSelectSingleUsernameIcon:"dapp-core-component__styles-module__receiver-select-single-username-icon","receiver-select-single-trim-wrapper":"dapp-core-component__styles-module__receiver-select-single-trim-wrapper",receiverSelectSingleTrimWrapper:"dapp-core-component__styles-module__receiver-select-single-trim-wrapper","receiver-select-single-trim":"dapp-core-component__styles-module__receiver-select-single-trim",receiverSelectSingleTrim:"dapp-core-component__styles-module__receiver-select-single-trim","receiver-select-option-name":"dapp-core-component__styles-module__receiver-select-option-name",receiverSelectOptionName:"dapp-core-component__styles-module__receiver-select-option-name","receiver-select-input":"dapp-core-component__styles-module__receiver-select-input",receiverSelectInput:"dapp-core-component__styles-module__receiver-select-input",visible:"dapp-core-component__styles-module__visible",spaced:"dapp-core-component__styles-module__spaced","receiver-select-spinner":"dapp-core-component__styles-module__receiver-select-spinner",receiverSelectSpinner:"dapp-core-component__styles-module__receiver-select-spinner","receiver-select-indicator":"dapp-core-component__styles-module__receiver-select-indicator",receiverSelectIndicator:"dapp-core-component__styles-module__receiver-select-indicator",hidden:"dapp-core-component__styles-module__hidden","receiver-select-menu":"dapp-core-component__styles-module__receiver-select-menu",receiverSelectMenu:"dapp-core-component__styles-module__receiver-select-menu","receiver-select-autocomplete":"dapp-core-component__styles-module__receiver-select-autocomplete",receiverSelectAutocomplete:"dapp-core-component__styles-module__receiver-select-autocomplete","receiver-select-autocomplete-untrimmed":"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed",receiverSelectAutocompleteUntrimmed:"dapp-core-component__styles-module__receiver-select-autocomplete-untrimmed","receiver-select-autocomplete-username":"dapp-core-component__styles-module__receiver-select-autocomplete-username",receiverSelectAutocompleteUsername:"dapp-core-component__styles-module__receiver-select-autocomplete-username","receiver-select-autocomplete-icon":"dapp-core-component__styles-module__receiver-select-autocomplete-icon",receiverSelectAutocompleteIcon:"dapp-core-component__styles-module__receiver-select-autocomplete-icon","receiver-select-autocomplete-icon-muted":"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted",receiverSelectAutocompleteIconMuted:"dapp-core-component__styles-module__receiver-select-autocomplete-icon-muted","receiver-select-autocomplete-wrapper":"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper",receiverSelectAutocompleteWrapper:"dapp-core-component__styles-module__receiver-select-autocomplete-wrapper","receiver-select-autocomplete-collection":"dapp-core-component__styles-module__receiver-select-autocomplete-collection",receiverSelectAutocompleteCollection:"dapp-core-component__styles-module__receiver-select-autocomplete-collection","receiver-select-list":"dapp-core-component__styles-module__receiver-select-list",receiverSelectList:"dapp-core-component__styles-module__receiver-select-list","receiver-select-option":"dapp-core-component__styles-module__receiver-select-option",receiverSelectOption:"dapp-core-component__styles-module__receiver-select-option","receiver-select-option-name-wrapper":"dapp-core-component__styles-module__receiver-select-option-name-wrapper",receiverSelectOptionNameWrapper:"dapp-core-component__styles-module__receiver-select-option-name-wrapper","receiver-select-option-username":"dapp-core-component__styles-module__receiver-select-option-username",receiverSelectOptionUsername:"dapp-core-component__styles-module__receiver-select-option-username","receiver-select-option-collection":"dapp-core-component__styles-module__receiver-select-option-collection",receiverSelectOptionCollection:"dapp-core-component__styles-module__receiver-select-option-collection","receiver-select-option-username-icon":"dapp-core-component__styles-module__receiver-select-option-username-icon",receiverSelectOptionUsernameIcon:"dapp-core-component__styles-module__receiver-select-option-username-icon",found:"dapp-core-component__styles-module__found",loading:"dapp-core-component__styles-module__loading",svg:"dapp-core-component__styles-module__svg"};var wr=r=>br.default.createElement(Er.components.Control,E(h({},r),{className:g.receiverSelectControl}));t();t();var we=f(require("react")),Lr=require("@fortawesome/free-solid-svg-icons"),Nr=require("@fortawesome/react-fontawesome"),Pr=f(require("classnames")),Fr=require("react-select");t();t();var ye=(r,e)=>{let o=e.toLowerCase(),n=r.label.toLowerCase(),i=r.value.toLowerCase();return e?n.includes(o)||i.includes(o):!0};t();var Cr=require("@terradharitri/sdk-dapp/hooks/account/helpers/trimUsernameDomain"),Ar=require("@terradharitri/sdk-dapp/utils"),uo=r=>r?r.filter(n=>(0,Ar.addressIsValid)(n.address)).map(n=>{let i=n.username?String((0,Cr.trimUsernameDomain)(n.username)):n.address;return{value:n.address,label:i}}):[];t();var Ir=({setOption:r,setAllValues:e})=>(n,i)=>{["input-blur","menu-close"].includes(i.action)||(e(n),n||r(null))};t();var Sr=({setInputValue:r,setOption:e,changeAndBlurInput:o})=>i=>{!i||(e(i),o(i.value),i.value!==i.label?r(i.label):r(i.value))};t();var kr=({options:r,usernameAccounts:e,knownAddresses:o,setFieldValue:n,setInputValue:i,setOption:s})=>d=>{var z,ge,ne,Ie;let u=r.find(X=>X.value===d&&X.value!==X.label),_=u==null?void 0:u.label,y,v,T=(z=e[d])==null?void 0:z.username;T&&(_=T,y=T,v=(ge=e[d])==null?void 0:ge.rawUsername);let x=o.find(X=>X.address===d);x!=null&&x.username&&(_=x==null?void 0:x.username,y=x==null?void 0:x.username,v=x==null?void 0:x.rawUsername);let k=_!=null?_:d;i(k),s({value:d,label:k}),n("receiver",(Ie=(ne=e[d])==null?void 0:ne.address)!=null?Ie:d),n("receiverUsername",y),n("rawReceiverUsername",v)};var Gr=r=>{let{selectProps:e,isDisabled:o,options:n}=r,{menuIsOpen:i,value:s,isLoading:l}=e,d=(0,we.useMemo)(()=>n.find(v=>{let T=v,x=s;return x?ye(T,x.label):null}),[s,n]),u=n.length===0&&!l,_=Boolean(s)&&!d,y=o||u||_;return l?we.default.createElement(Nr.FontAwesomeIcon,{icon:Lr.faSpinner,spin:!0,className:g.receiverSelectSpinner}):we.default.createElement(Fr.components.DropdownIndicator,E(h({},r),{className:(0,Pr.default)(g.receiverSelectIndicator,{[g.expanded]:i,[g.hidden]:y})}))};t();t();var Ur=f(require("react")),Dr=require("@terradharitri/sdk-dapp/utils"),Vr=f(require("classnames")),Rr=require("react-select");t();var _o=f(require("react")),ks=require("@terradharitri/sdk-dapp/constants/index");t();t();var Br=(r,e)=>{let o=r.current;if(!o||!o.state.focusedOption)return!1;let n=o.state.focusedOption,i=n.label.toLowerCase(),s=n.value.toLowerCase(),l=i!==s,d=l&&i.startsWith(e.toLowerCase());return l&&!e?!0:d};var Mr=r=>e=>{let{selectProps:o,value:n}=e,{inputValue:i,menuIsOpen:s}=o,{receiverUsernameInfo:{receiverUsername:l}}=H(),d=Br(r,i),u=(0,Dr.addressIsValid)(String(n)),_=Boolean(l)||d,y=u&&s||!u&&i;return Ur.default.createElement(Rr.components.Input,E(h({},e),{"data-testid":"receiver",className:(0,Vr.default)(g.receiverSelectInput,{[g.visible]:y,[g.spaced]:_})}))};t();t();var Or=f(require("react")),qr=require("react-select");var Wr=r=>Or.default.createElement(qr.components.Menu,E(h({},r),{className:g.receiverSelectMenu}));t();t();var I=f(require("react")),$e=require("@terradharitri/sdk-dapp/UI/Trim"),Ce=f(require("classnames")),zr=require("react-select");t();var{default:te}=(Kr(),Lo($r));var Zr=r=>{let{selectProps:e,focusedOption:o}=r,{value:n,inputValue:i}=e,s=o,l=s?s.label.toLowerCase():null,d=s&&s.label!==s.value,y=(l&&(!n||n&&i)?l.startsWith(i.toLowerCase()):!1)&&s?s.label.replace(s.label.substring(0,i.length),i):null,v=y&&!i,T=y&&i.length<y.length/2,x=y&&Boolean(i)&&T,k=y&&Boolean(i);return I.default.createElement(I.default.Fragment,null,x&&!d&&I.default.createElement("div",{className:(0,Ce.default)(g.receiverSelectAutocomplete,g.receiverSelectAutocompleteUntrimmed)},y),k&&d&&I.default.createElement("div",{className:(0,Ce.default)(g.receiverSelectAutocomplete,g.receiverSelectAutocompleteUsername)},I.default.createElement(te,{className:g.receiverSelectAutocompleteIcon}),y,I.default.createElement("span",{className:g.receiverSelectAutocompleteWrapper},"(",I.default.createElement($e.Trim,{text:s.value}),")")),v&&I.default.createElement("span",{className:(0,Ce.default)(g.receiverSelectAutocomplete,{[g.receiverSelectAutocompleteUsername]:d})},d?I.default.createElement(I.default.Fragment,null,I.default.createElement("span",null,I.default.createElement(te,{className:(0,Ce.default)(g.receiverSelectAutocompleteIcon,g.receiverSelectAutocompleteIconMuted)}),s.label),I.default.createElement("span",{className:g.receiverSelectAutocompleteWrapper},"(",I.default.createElement($e.Trim,{text:s.value}),")")):I.default.createElement($e.Trim,{text:y})),I.default.createElement(zr.components.MenuList,E(h({},r),{className:g.receiverSelectList})))};t();t();var V=f(require("react")),fo=require("@terradharitri/sdk-dapp/UI/Trim"),jr=f(require("classnames")),Yr=require("react-select");t();t();var Ae=f(require("react"));t();var Ps=`.dapp-core-component__styles-modules__highlight {
  display: flex;
  align-items: center;
  gap: 4px;
}`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ps));var Hr={highlight:"dapp-core-component__styles-modules__highlight"};var Xr=({highlight:r,text:e=""})=>{let o=e.split(" "),n=r.toLowerCase(),i=new RegExp(`(${n})`,"gi"),s=o.map(l=>l.split(i).filter(d=>d));return Ae.default.createElement("span",{className:Hr.highlight},s.map((l,d)=>{let u=`${l}-${d}`;return Ae.default.createElement("span",{key:u},l.map((_,y)=>{let v=_.toLowerCase()===n,T=n&&v,x=`${_}-${y}`;return T?Ae.default.createElement("strong",{key:x},_):Ae.default.createElement("span",{key:x},_)}))}))};var Qr=r=>{let{isFocused:e,data:o,selectProps:n}=r,{inputValue:i}=n,s=o,l=s.value!==s.label;return V.default.createElement(Yr.components.Option,E(h({},r),{className:(0,jr.default)(g.receiverSelectOption,{[g.focused]:e})}),l?V.default.createElement(V.default.Fragment,null,V.default.createElement("span",{className:g.receiverSelectOptionUsername},V.default.createElement(te,{className:g.receiverSelectOptionUsernameIcon}),V.default.createElement(Xr,{text:s.label,highlight:i})),V.default.createElement("span",{className:g.receiverSelectOptionNameWrapper},"(",V.default.createElement(fo.Trim,{text:s.value,className:g.receiverSelectOptionName}),")")):V.default.createElement(fo.Trim,{text:s.value,className:g.receiverSelectOptionName}))};t();t();var Jr=f(require("react")),et=f(require("classnames")),ot=require("react-select");var rt=r=>{let{selectProps:e,isFocused:o,className:n}=r,{menuIsOpen:i}=e;return Jr.default.createElement(ot.components.SelectContainer,E(h({},r),{className:(0,et.default)(n,{[g.expanded]:i,[g.focused]:o&&i})}))};t();t();var R=f(require("react")),yo=require("@terradharitri/sdk-dapp/UI/Trim"),tt=require("@terradharitri/sdk-dapp/utils"),nt=f(require("classnames")),it=require("react-select");var st=r=>{let{selectProps:e,isDisabled:o}=r,{value:n,menuIsOpen:i}=e,s=n,{receiverInfo:{receiver:l},receiverUsernameInfo:{receiverUsername:d}}=H(),u=d!=null?d:s&&s.value!==s.label,_=s?{value:l!=null?l:s.value,label:s.label}:null,y=_&&(u||!u&&!i)&&(0,tt.addressIsValid)(_.value);return R.default.createElement(it.components.ValueContainer,E(h({},r),{className:g.receiverSelectValue}),y&&R.default.createElement("span",{className:(0,nt.default)(g.receiverSelectSingle,{[g.disabled]:o})},u?R.default.createElement(R.default.Fragment,null,R.default.createElement("span",{className:g.receiverSelectSingleUsername},R.default.createElement(te,{className:g.receiverSelectSingleUsernameIcon}),_.label),R.default.createElement("span",{className:g.receiverSelectSingleTrimWrapper},"(",R.default.createElement(yo.Trim,{text:_.value,className:g.receiverSelectSingleTrim}),")")):R.default.createElement(yo.Trim,{text:_.value,className:g.receiverSelectSingleTrim})),r.children)};t();t();var ct=require("formik");var Ke=()=>{let{receiverInfo:{receiverError:r,isReceiverInvalid:e},receiverUsernameInfo:{receiverUsernameError:o,isReceiverUsernameInvalid:n,receiverUsername:i}}=H(),{touched:{receiver:s}}=(0,ct.useFormikContext)(),l=e&&s||n;return i!=null&&i.startsWith("drt1")?{isInvalid:e,receiverErrorDataTestId:"receiverError",error:r}:{isInvalid:l,receiverErrorDataTestId:n?"receiverUsernameError":"receiverError",error:n?o:r}};t();t();var pt=require("@terradharitri/sdk-dapp/utils"),lt=require("formik");t();t();var at=({knownAddresses:r,inputValue:e})=>!r||!e?!1:r.filter(n=>{var d;let i=(d=n.username)!=null?d:n.address,s=n.address;return ye({label:i,value:s,data:{label:i,value:s}},e)}).length>0;var mt=({menuIsOpen:r})=>{let{isInvalid:e}=Ke(),{values:{nft:o}}=(0,lt.useFormikContext)(),{showUsernameError:n,isUsernameLoading:i,isUsernameDebouncing:s,usernameIsAmongKnown:l,searchQueryIsAddress:d}=be(),{receiverInputValue:u,knownAddresses:_}=Oe(),y=lo({key:"address",knownAddresses:_,inputValue:u}),v=at({inputValue:u,knownAddresses:_}),T=d&&(!y||!r)&&!(0,pt.addressIsValid)(u),x=Boolean(n&&!(r&&y)&&!(r&&l));return{isAddressError:T||(o?e:!1),isUsernameError:x,isRequiredError:e&&!x&&!i&&!s&&!T&&!v&&!u,isReceiverDropdownOpened:u&&v&&r}};var Fs=r=>{let e=(0,b.useRef)(null),{className:o}=r,{setFieldValue:n}=(0,dt.useFormikContext)(),{receiverInfo:{scamError:i,fetchingScamAddress:s,receiverInputValue:l,setReceiverInputValue:d,knownAddresses:u,receiver:_,onBlurReceiver:y,onChangeReceiver:v},receiverUsernameInfo:{receiverUsername:T},formInfo:{readonly:x}}=H(),[k,z]=(0,b.useState)(!1),[ge,ne]=(0,b.useState)(_?{label:_,value:_}:null),{receiverErrorDataTestId:Ie,error:X}=Ke(),{isAddressError:_t,isUsernameError:ft,isRequiredError:yt,isReceiverDropdownOpened:gt}=mt({menuIsOpen:k}),{usernameAccounts:Se,isUsernameLoading:vt}=be(),vo=()=>{y(new Event("blur"));let S=u==null?void 0:u.find(ke=>ke.username===l&&ke.address===_);S&&(n("receiver",S.address),n("receiverUsername",S.username),n("rawReceiverUsername",S.rawUsername))},xo=u==null?void 0:u.find(S=>S.username===l&&S.address===_),xt=(0,b.useMemo)(()=>uo(u),[u]),ho=xo?uo([xo]):xt,To=kr({setFieldValue:n,setInputValue:d,setOption:ne,options:ho,knownAddresses:u!=null?u:[],usernameAccounts:Se}),ht=(0,b.useCallback)(Ir({setAllValues:To,setOption:ne}),[]),Tt=(0,b.useCallback)(S=>{v(S?S.trim():""),setTimeout(vo)},[]),bt=Sr({changeAndBlurInput:Tt,setOption:ne,setInputValue:d}),Et=(0,b.useMemo)(()=>Mr(e),[e]);(0,b.useEffect)(()=>{if(!_)return;let S=Object.keys(Se).find(ke=>{var Eo;return((Eo=Se[ke])==null?void 0:Eo.address)===_});To(S!=null?S:_),S&&d(S)},[Se,_]);let bo=_t||ft||yt,wt=bo&&!k;return b.default.createElement("div",{className:(0,ze.default)(g.receiver,o)},b.default.createElement("div",{className:xe.label,"data-testid":"receiverLabel","data-loading":s},"Receiver"),b.default.createElement(ut.default,{value:ge,onInputChange:ht,inputId:"receiverWrapper",maxMenuHeight:160,openMenuOnFocus:!0,isDisabled:io("receiver",x),options:ho,filterOption:ye,noOptionsMessage:()=>null,onChange:bt,onBlur:vo,isMulti:!1,ref:e,inputValue:l,onMenuClose:()=>z(!1),onMenuOpen:()=>z(!0),components:{Menu:Wr,Input:Et,Control:wr,ValueContainer:st,DropdownIndicator:Gr,SelectContainer:rt,MenuList:Zr,Option:Qr,Placeholder:()=>null,SingleValue:()=>null,IndicatorSeparator:()=>null,LoadingIndicator:()=>null},className:(0,ze.default)(g.receiverSelectContainer,{[g.opened]:gt,[g.invalid]:bo||i})}),wt&&b.default.createElement("div",{"data-testid":Ie,className:xe.error},X),vt&&b.default.createElement("div",{className:g.loading},"Loading..."),T&&b.default.createElement("span",{className:g.found,"data-testid":"receiverUsernameAddress"},"Account found!"," ",b.default.createElement(go.FontAwesomeIcon,{icon:Ze.faCheck,className:g.foundIcon})),i&&b.default.createElement("div",{"data-testid":"receiverScam",className:(0,ze.default)(xe.error,xe.scam)},b.default.createElement("span",null,b.default.createElement(go.FontAwesomeIcon,{icon:Ze.faExclamationTriangle}),b.default.createElement("small",null,i))))};0&&(module.exports={Receiver});
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
